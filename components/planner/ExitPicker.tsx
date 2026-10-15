"use client";

import { ordinal } from "@/data/taxonomy";
import { cn } from "@/lib/cn";
import { Icon } from "@/components/ui/Icon";

/** Trig rounded to 3 decimals so server and client render identical SVG attributes. */
const rc = (a: number) => Math.round(Math.cos(a) * 1000) / 1000;
const rs = (a: number) => Math.round(Math.sin(a) * 1000) / 1000;

/**
 * Multi-select roundabout: "choose your exits". Each region is a toggle button
 * (aria-pressed) placed around a ring on large screens, and a wrapped chip list below lg.
 */
export function ExitPicker({
  exits,
  value,
  onChange,
  disabled,
  invalid,
  describedBy,
}: {
  exits: { slug: string; shortName: string; name: string }[];
  value: string[];
  onChange: (v: string[]) => void;
  disabled?: boolean;
  invalid?: boolean;
  describedBy?: string;
}) {
  const n = exits.length;
  const toggle = (slug: string) => onChange(value.includes(slug) ? value.filter((s) => s !== slug) : [...value, slug]);
  const angle = (i: number) => ((-90 + (360 / n) * i) * Math.PI) / 180;

  return (
    <div role="group" aria-label="Choose your exits" aria-describedby={describedBy} className={cn(disabled && "pointer-events-none opacity-35")}>
      {/* Ring layout (lg+) */}
      <div className="relative mx-auto hidden aspect-square w-full max-w-[560px] lg:block">
        <svg viewBox="0 0 600 600" className="absolute inset-0 h-full w-full" aria-hidden="true">
          {exits.map((e, i) => {
            const a = angle(i);
            const on = value.includes(e.slug);
            return (
              <line
                key={e.slug}
                x1={300 + rc(a) * 150}
                y1={300 + rs(a) * 150}
                x2={300 + rc(a) * 225}
                y2={300 + rs(a) * 225}
                stroke={on ? "var(--color-sunflower)" : "var(--color-charcoal-10)"}
                strokeWidth={on ? 10 : 18}
                className="transition-all duration-300"
              />
            );
          })}
          <circle cx="300" cy="300" r="130" fill="none" stroke="var(--color-charcoal-10)" strokeWidth="40" />
          <circle cx="300" cy="300" r="130" fill="none" stroke="var(--color-cream)" strokeOpacity="0.4" strokeWidth="1.5" strokeDasharray="8 10" />
          <circle cx="300" cy="300" r="96" fill="var(--color-charcoal-5)" />
        </svg>
        <p aria-hidden="true" className="font-cond absolute top-1/2 left-1/2 w-[28%] -translate-x-1/2 -translate-y-1/2 text-center text-lg text-cream">
          {value.length ? `${value.length} exit${value.length > 1 ? "s" : ""} chosen` : "Choose your exits"}
        </p>
        {exits.map((e, i) => {
          const a = angle(i);
          const on = value.includes(e.slug);
          return (
            <button
              key={e.slug}
              type="button"
              aria-pressed={on}
              aria-label={`${ordinal(i + 1)} exit: ${e.name}`}
              onClick={() => toggle(e.slug)}
              disabled={disabled}
              className={cn(
                "absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center rounded-[4px] border px-2 py-1 leading-none transition-colors duration-200",
                on
                  ? "border-white bg-roadsign text-white shadow-[0_0_0_2px_var(--color-roadsign)]"
                  : cn("bg-charcoal text-cream hover:border-cream", invalid ? "border-brick/70" : "border-charcoal-10"),
              )}
              style={{ left: `${50 + rc(a) * 44}%`, top: `${50 + rs(a) * 44}%` }}
            >
              <span className="font-ui text-[9.5px] opacity-75">{ordinal(i + 1)} exit</span>
              <span className="font-cond flex items-center gap-1 text-[15px]">
                {on && <Icon name="check" size={11} />}
                {e.shortName}
              </span>
            </button>
          );
        })}
      </div>

      {/* Chip list (below lg) */}
      <ul className="flex flex-wrap gap-2 lg:hidden">
        {exits.map((e, i) => {
          const on = value.includes(e.slug);
          return (
            <li key={e.slug}>
              <button
                type="button"
                aria-pressed={on}
                onClick={() => toggle(e.slug)}
                disabled={disabled}
                className={cn(
                  "font-ui flex h-10 items-center gap-1.5 rounded-full border px-3.5 transition-colors",
                  on ? "border-roadsign bg-roadsign text-white" : invalid ? "border-brick/70" : "border-charcoal-10 bg-charcoal-5",
                )}
              >
                {on && <Icon name="check" size={12} />}
                <span className="opacity-70">{ordinal(i + 1)}:</span> {e.shortName}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
