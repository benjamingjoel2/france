"use client";

import { t, tp } from '@/lib/i18n/t';
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useId, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { Icon } from "./Icon";

export type FilterGroup = { key: string; label: string; options: { value: string; label: string }[] };
export type FilterValue = Record<string, string[]>;

function CheckRow({ checked, label, onChange }: { checked: boolean; label: string; onChange: () => void }) {
  return (
    <label className="group font-ui flex cursor-pointer items-center gap-3 px-5 py-2 text-mist hover:text-cream has-[:checked]:text-cream">
      <input type="checkbox" className="peer sr-only" checked={checked} onChange={onChange} />
      <span
        aria-hidden="true"
        className={cn(
          "flex size-[14px] shrink-0 items-center justify-center border transition-colors peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-sunflower",
          checked ? "border-cream bg-cream text-charcoal" : "border-mist group-hover:border-cream",
        )}
      >
        {checked && <Icon name="check" size={10} />}
      </span>
      {tp(label)}
    </label>
  );
}

function Dropdown({
  group,
  value,
  onToggle,
}: {
  group: FilterGroup;
  value: string[];
  onToggle: (v: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => !ref.current?.contains(e.target as Node) && setOpen(false);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const count = value.length;
  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((o) => !o)}
        className={cn(
          "font-ui flex h-10 items-center gap-2 rounded-full px-5 transition-colors duration-300",
          open || count ? "bg-charcoal-10 text-cream" : "bg-charcoal-5 text-mist hover:bg-charcoal-10 hover:text-cream",
        )}
      >
        {tp(group.label)}
        {count > 0 && <span className="rounded-full bg-cream px-1.5 text-[10.5px] text-charcoal">{tp(count)}</span>}
        <Icon name="chevron-down" size={12} className={cn("transition-transform duration-300", open && "rotate-180")} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            id={id}
            role="group"
            aria-label={tp(group.label)}
            initial={{ opacity: 0, y: reduce ? 0 : -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reduce ? 0 : -6 }}
            transition={{ duration: 0.2 }}
            className="absolute top-[calc(100%+8px)] left-0 z-30 max-h-[340px] min-w-[220px] overflow-y-auto rounded-[4px] bg-charcoal-10 py-2 shadow-[0_12px_40px_rgba(0,0,0,0.35)]"
          >
            {group.options.map((o) => (
              <CheckRow key={o.value} label={tp(o.label)} checked={value.includes(o.value)} onChange={() => onToggle(o.value)} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/**
 * Filter bar: dropdown pills of checkboxes plus "Clear all" (desktop),
 * collapsing to a "≡ FILTER" accordion panel on mobile.
 * Values within a group are OR-ed; groups are AND-ed by the caller.
 */
export function FilterBar({
  groups,
  value,
  onChange,
  resultCount,
  resultLabel = "road trips",
  className,
}: {
  groups: FilterGroup[];
  value: FilterValue;
  onChange: (v: FilterValue) => void;
  resultCount?: number;
  resultLabel?: string;
  className?: string;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const reduce = useReducedMotion();
  const toggle = (key: string, v: string) => {
    const cur = value[key] ?? [];
    onChange({ ...value, [key]: cur.includes(v) ? cur.filter((x) => x !== v) : [...cur, v] });
  };
  const active = Object.values(value).reduce((n, v) => n + v.length, 0);
  const clear = () => onChange(Object.fromEntries(groups.map((g) => [g.key, []])));

  return (
    <div className={cn("border-t hairline-dark", className)}>
      {/* Desktop */}
      <div className="hidden flex-wrap items-center justify-between gap-3 pt-[var(--spacing-sec-md)] lg:flex">
        <div className="flex flex-wrap items-center gap-2">
          {groups.map((g) => (
            <Dropdown key={g.key} group={g} value={value[g.key] ?? []} onToggle={(v) => toggle(g.key, v)} />
          ))}
        </div>
        <div className="flex items-center gap-4">
          {resultCount !== undefined && (
            <p className="font-ui text-mist" aria-live="polite">
              {tp(resultCount)} {tp(resultLabel)}
            </p>
          )}
          <button
            type="button"
            onClick={clear}
            disabled={!active}
            className="font-ui h-10 rounded-full bg-cream px-5 text-charcoal transition-colors hover:bg-mist disabled:opacity-40"
          >
            {t("Clear all")}</button>
        </div>
      </div>

      {/* Mobile */}
      <div className="lg:hidden">
        <button
          type="button"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((o) => !o)}
          className="font-ui flex h-14 w-full items-center justify-between"
        >
          <span className="flex items-center gap-3">
            <Icon name="filter" size={16} /> {t("Filter ")}{active > 0 && <span className="rounded-full bg-cream px-1.5 text-[10.5px] text-charcoal">{tp(active)}</span>}
          </span>
          <Icon name="chevron-right" size={14} className={cn("transition-transform duration-300", mobileOpen && "rotate-90")} />
        </button>
        <AnimatePresence initial={false}>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: reduce ? 0 : 0.4, ease: [0.645, 0.045, 0.355, 1] }}
              className="-mx-gutter overflow-hidden bg-charcoal-10"
            >
              <ul className="px-gutter">
                {groups.map((g) => {
                  const open = openGroup === g.key;
                  return (
                    <li key={g.key} className="border-b hairline-dark">
                      <button
                        type="button"
                        aria-expanded={open}
                        onClick={() => setOpenGroup(open ? null : g.key)}
                        className="font-ui flex h-14 w-full items-center justify-between"
                      >
                        <span>
                          {tp(g.label)} {tp(value[g.key]?.length ? `(${value[g.key].length})` : "")}
                        </span>
                        <Icon name="chevron-right" size={13} className={cn("transition-transform", open && "rotate-90")} />
                      </button>
                      {open && (
                        <div className="-mx-5 pb-3" role="group" aria-label={tp(g.label)}>
                          {g.options.map((o) => (
                            <CheckRow key={o.value} label={tp(o.label)} checked={(value[g.key] ?? []).includes(o.value)} onChange={() => toggle(g.key, o.value)} />
                          ))}
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
              <div className="flex items-center justify-between px-gutter py-4">
                <button type="button" onClick={clear} className="font-ui link-grow">
                  {t("Clear all")}</button>
                <button type="button" onClick={() => setMobileOpen(false)} className="font-ui h-10 rounded-full bg-cream px-5 text-charcoal">
                  {t("Show ")}{tp(resultCount ?? "")} {tp(resultLabel)}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
