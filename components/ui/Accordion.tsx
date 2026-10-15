"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useId, useState } from "react";
import { cn } from "@/lib/cn";
import { Icon } from "./Icon";

export type AccordionItem = { id: string; title: React.ReactNode; content: React.ReactNode };

/**
 * One-open-at-a-time accordion. The + rotates 45° into an ×.
 * `tone` sets hairline and text colours for cream or charcoal backgrounds.
 */
export function Accordion({
  items,
  tone = "light",
  defaultOpen = null,
  titleClass = "font-cond text-md",
  className,
}: {
  items: AccordionItem[];
  tone?: "light" | "dark";
  defaultOpen?: string | null;
  titleClass?: string;
  className?: string;
}) {
  const [open, setOpen] = useState<string | null>(defaultOpen);
  const reduce = useReducedMotion();
  const base = useId();
  return (
    <ul className={cn("border-b", tone === "light" ? "hairline-light" : "hairline-dark", className)}>
      {items.map((item) => {
        const isOpen = open === item.id;
        const btnId = `${base}-${item.id}-b`;
        const panelId = `${base}-${item.id}-p`;
        return (
          <li key={item.id} className={cn("border-t", tone === "light" ? "hairline-light" : "hairline-dark")}>
            <h3>
              <button
                id={btnId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : item.id)}
                className="flex w-full items-center justify-between gap-6 py-[clamp(20px,2vw,30px)] text-left"
              >
                <span className={titleClass}>{item.title}</span>
                <Icon
                  name="plus"
                  size={22}
                  className={cn("shrink-0 transition-transform duration-200 ease-[var(--ease-rp)]", isOpen && "rotate-45")}
                />
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: reduce ? 0 : 0.35, ease: [0.645, 0.045, 0.355, 1] }}
                  className="overflow-hidden"
                >
                  <div className="richtext max-w-[60em] pb-[clamp(28px,3vw,52px)]">{item.content}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}
