"use client";

import { useEffect, useState } from "react";

function query(q: string) {
  return typeof window !== "undefined" && window.matchMedia(q).matches;
}

/**
 * True only on devices with a real hover pointer, without reduced-motion and
 * without Save-Data. Hover videos are gated on this so they never autoplay on mobile.
 */
export function useCanHoverVideo() {
  const [ok, setOk] = useState(false);
  useEffect(() => {
    const conn = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    const check = () =>
      setOk(
        query("(hover: hover) and (pointer: fine)") &&
          !query("(prefers-reduced-motion: reduce)") &&
          !conn?.saveData,
      );
    check();
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    mq.addEventListener("change", check);
    return () => mq.removeEventListener("change", check);
  }, []);
  return ok;
}

export function useMediaQuery(q: string) {
  const [match, setMatch] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(q);
    const on = () => setMatch(mq.matches);
    on();
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, [q]);
  return match;
}
