"use client";

import { tp, t as tx } from '@/lib/i18n/t';
import { ordinal } from "@/data/taxonomy";
import { cn } from "@/lib/cn";
import { Icon } from "@/components/ui/Icon";

/**
 * Progress shown as roundabout exits. Vertical list on desktop, compact
 * five-segment bar on mobile. Completed steps can be revisited.
 */
export function PlannerProgress({
  titles,
  current,
  maxReached,
  onSelect,
  className,
}: {
  titles: readonly string[];
  current: number;
  maxReached: number;
  onSelect: (i: number) => void;
  className?: string;
}) {
  return (
    <nav aria-label={tx("Planner progress")} className={className}>
      <p className="sr-only" aria-live="polite">
        {tx("Step ")}{tp(current + 1)} {tx("of ")}{tp(titles.length)}: {tp(titles[current])}
      </p>

      {/* Mobile bar */}
      <ol className="flex gap-1.5 lg:hidden" aria-hidden="true">
        {titles.map((t, i) => (
          <li key={t} className="flex-1">
            <span
              className={cn(
                "block h-1.5 transition-colors duration-300",
                i < current ? "bg-cream" : i === current ? "bg-sunflower" : "bg-charcoal-10",
              )}
            />
            <span className={cn("font-ui mt-2 block text-[10.5px]", i === current ? "text-cream" : "text-mist")}>
              {tp(ordinal(i + 1))}
            </span>
          </li>
        ))}
      </ol>

      {/* Desktop list */}
      <ol className="hidden border-b hairline-dark lg:block">
        {titles.map((t, i) => {
          const done = i < current || (i <= maxReached && i !== current);
          const active = i === current;
          const reachable = i <= maxReached;
          return (
            <li key={t} className="border-t hairline-dark">
              <button
                type="button"
                onClick={() => onSelect(i)}
                disabled={!reachable}
                aria-current={active ? "step" : undefined}
                className={cn(
                  "group flex w-full items-center gap-4 py-4 text-left transition-colors duration-300",
                  active ? "text-cream" : reachable ? "text-cream/70 hover:text-cream" : "text-cream/30",
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    "relative flex size-8 shrink-0 items-center justify-center rounded-full border-2 transition-colors duration-300",
                    active ? "border-sunflower" : done ? "border-cream bg-cream text-charcoal" : "border-charcoal-10",
                  )}
                >
                  {done && !active ? <Icon name="check" size={14} /> : <span className={cn("size-2 rounded-full", active ? "bg-sunflower" : "bg-transparent")} />}
                </span>
                <span className="font-ui w-[5.5em] shrink-0 text-mist">{tp(ordinal(i + 1))} {tx("exit")}</span>
                <span className="font-cond text-lg">{tp(t)}</span>
              </button>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
