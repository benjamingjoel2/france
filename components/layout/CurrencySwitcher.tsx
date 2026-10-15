"use client";

import { useId } from "react";
import { site, type CurrencyCode } from "@/config/site";
import { useCurrency } from "@/lib/currency";
import { cn } from "@/lib/cn";
import { Icon } from "@/components/ui/Icon";

/** Native select, styled to match the header labels: accessible and touch-friendly. */
export function CurrencySwitcher({ className, tone = "dark" }: { className?: string; tone?: "dark" | "light" }) {
  const { currency, setCurrency } = useCurrency();
  const id = useId();
  return (
    <div className={cn("relative inline-flex items-center", className)}>
      <label htmlFor={id} className="sr-only">
        Currency
      </label>
      <select
        id={id}
        value={currency}
        onChange={(e) => setCurrency(e.target.value as CurrencyCode)}
        className={cn(
          "font-ui appearance-none bg-transparent py-1 pr-5 pl-0 outline-offset-4",
          tone === "dark" ? "text-cream" : "text-charcoal",
        )}
      >
        {site.currencies.supported.map((c) => (
          <option key={c} value={c} className="bg-charcoal text-cream">
            {c} {site.currencies.symbols[c]}
          </option>
        ))}
      </select>
      <Icon name="chevron-down" size={12} className="pointer-events-none absolute right-0" />
    </div>
  );
}
