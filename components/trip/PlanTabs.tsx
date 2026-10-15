"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useId, useState } from "react";
import { cn } from "@/lib/cn";
import { Accordion, type AccordionItem } from "@/components/ui/Accordion";

export type PlanTab = { id: string; label: string; items: AccordionItem[]; footer?: React.ReactNode };

/**
 * Cream "Plan your trip" block: sticky heading + pill tabs on the left,
 * an accordion per tab on the right.
 */
export function PlanTabs({ tabs, heading = ["Plan your", "trip"] }: { tabs: PlanTab[]; heading?: string[] }) {
  const [active, setActive] = useState(tabs[0]?.id);
  const reduce = useReducedMotion();
  const base = useId();
  const tab = tabs.find((t) => t.id === active) ?? tabs[0];

  function onKey(e: React.KeyboardEvent, i: number) {
    let n = -1;
    if (e.key === "ArrowRight") n = (i + 1) % tabs.length;
    if (e.key === "ArrowLeft") n = (i - 1 + tabs.length) % tabs.length;
    if (n < 0) return;
    e.preventDefault();
    setActive(tabs[n].id);
    document.getElementById(`${base}-${tabs[n].id}-tab`)?.focus();
  }

  return (
    <section id="plan" className="scroll-mt-[var(--header-h)] bg-cream px-gutter py-[var(--spacing-sec)] text-charcoal">
      <div className="grid gap-[var(--spacing-sec-lg)] lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-[calc(var(--header-h)+94px)]">
            <h2 className="font-display text-3xl">
              {heading.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </h2>
            <div role="tablist" aria-label="Plan your trip" className="mt-8 flex max-w-[30em] flex-wrap gap-2">
              {tabs.map((t, i) => (
                <button
                  key={t.id}
                  id={`${base}-${t.id}-tab`}
                  role="tab"
                  type="button"
                  aria-selected={active === t.id}
                  aria-controls={`${base}-${t.id}-panel`}
                  tabIndex={active === t.id ? 0 : -1}
                  onKeyDown={(e) => onKey(e, i)}
                  onClick={() => setActive(t.id)}
                  className={cn(
                    "font-ui h-10 rounded-full border border-charcoal px-5 transition-colors duration-150",
                    active === t.id ? "bg-charcoal text-cream" : "hover:bg-charcoal/10",
                  )}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={tab.id}
              id={`${base}-${tab.id}-panel`}
              role="tabpanel"
              aria-labelledby={`${base}-${tab.id}-tab`}
              initial={{ opacity: 0, y: reduce ? 0 : 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <Accordion items={tab.items} tone="light" defaultOpen={tab.items[0]?.id ?? null} />
              {tab.footer}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
