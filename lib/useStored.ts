"use client";

import { useCallback, useSyncExternalStore } from "react";

type Kind = "local" | "session";
const listeners = new Set<() => void>();
const EVENT = "rp-storage";

function subscribe(cb: () => void) {
  listeners.add(cb);
  const onStorage = () => cb();
  window.addEventListener("storage", onStorage);
  window.addEventListener(EVENT, onStorage);
  return () => {
    listeners.delete(cb);
    window.removeEventListener("storage", onStorage);
    window.removeEventListener(EVENT, onStorage);
  };
}

function read(kind: Kind, key: string): string | null {
  try {
    return (kind === "local" ? localStorage : sessionStorage).getItem(key);
  } catch {
    return null;
  }
}

/**
 * A string value persisted in local/session storage, hydration-safe: the server
 * (and first client render) see `null`, then the stored value once mounted.
 */
export function useStored(key: string, kind: Kind = "local") {
  const value = useSyncExternalStore(
    subscribe,
    () => read(kind, key),
    () => null,
  );
  const set = useCallback(
    (v: string | null) => {
      try {
        const s = kind === "local" ? localStorage : sessionStorage;
        if (v === null) s.removeItem(key);
        else s.setItem(key, v);
      } catch {
        /* storage unavailable */
      }
      window.dispatchEvent(new Event(EVENT));
    },
    [key, kind],
  );
  return [value, set] as const;
}
