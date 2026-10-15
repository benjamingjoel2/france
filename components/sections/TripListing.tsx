"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useMemo } from "react";
import type { Interest } from "@/data/types";
import { interests as interestLabels, paces } from "@/data/taxonomy";
import { useCurrency } from "@/lib/currency";
import { cn } from "@/lib/cn";
import { FilterBar, type FilterGroup, type FilterValue } from "@/components/ui/FilterBar";
import { Button } from "@/components/ui/Button";
import { TripCard } from "./TripCard";
import type { CardTrip } from "@/lib/cards";

export type ListingTrip = CardTrip & {
  regionName: string;
  regionSlugs: string[];
  interests: Interest[];
  fromPrice: number;
};

const DAY_BANDS = [
  { value: "short", label: "Up to 5 days", test: (d: number) => d <= 5 },
  { value: "week", label: "6–8 days", test: (d: number) => d >= 6 && d <= 8 },
  { value: "long", label: "9–12 days", test: (d: number) => d >= 9 && d <= 12 },
  { value: "epic", label: "13+ days", test: (d: number) => d >= 13 },
];
const BUDGET_BANDS = [
  { value: "lt1500", min: 0, max: 1500 },
  { value: "1500-2500", min: 1500, max: 2500 },
  { value: "2500-4000", min: 2500, max: 4000 },
  { value: "gt4000", min: 4000, max: Infinity },
];
const KEYS = ["region", "days", "pace", "interest", "budget"] as const;

/**
 * Trip-type listing: filter bar (region, days, pace, interests, budget) and the
 * staggered three-column poster grid. Filter state lives in the URL query.
 */
export function TripListing({
  trips,
  regionOptions,
}: {
  trips: ListingTrip[];
  regionOptions: { value: string; label: string }[];
}) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const reduce = useReducedMotion();
  const { format } = useCurrency();

  const value: FilterValue = useMemo(
    () => Object.fromEntries(KEYS.map((k) => [k, params.get(k)?.split(",").filter(Boolean) ?? []])),
    [params],
  );

  const setValue = (v: FilterValue) => {
    const q = new URLSearchParams();
    for (const k of KEYS) if (v[k]?.length) q.set(k, v[k].join(","));
    const s = q.toString();
    router.replace(s ? `${pathname}?${s}` : pathname, { scroll: false });
  };

  const presentPaces = Array.from(new Set(trips.map((t) => t.pace)));
  const groups: FilterGroup[] = [
    { key: "region", label: "Region", options: regionOptions.filter((r) => trips.some((t) => t.regionSlugs.includes(r.value))) },
    { key: "days", label: "Days", options: DAY_BANDS.filter((b) => trips.some((t) => b.test(t.days))).map(({ value, label }) => ({ value, label })) },
    {
      key: "pace",
      label: "Pace",
      options: (Object.keys(paces) as (keyof typeof paces)[])
        .filter((p) => presentPaces.includes(p))
        .map((p) => ({ value: p, label: `${paces[p].label} (${paces[p].hours.replace(" driving a day", "/day")})` })),
    },
    {
      key: "interest",
      label: "Interests",
      options: (Object.keys(interestLabels) as Interest[]).map((i) => ({ value: i, label: interestLabels[i] })),
    },
    {
      key: "budget",
      label: "Budget",
      options: BUDGET_BANDS.map((b) => ({
        value: b.value,
        label:
          b.max === Infinity
            ? `${format(b.min, { round: 100 })}+ pp`
            : b.min === 0
              ? `Under ${format(b.max, { round: 100 })} pp`
              : `${format(b.min, { round: 100 })}–${format(b.max, { round: 100 })} pp`,
      })),
    },
  ];

  const filtered = trips.filter((t) => {
    const v = value;
    if (v.region.length && !t.regionSlugs.some((r) => v.region.includes(r))) return false;
    if (v.days.length && !DAY_BANDS.some((b) => v.days.includes(b.value) && b.test(t.days))) return false;
    if (v.pace.length && !v.pace.includes(t.pace)) return false;
    if (v.interest.length && !t.interests.some((i) => v.interest.includes(i))) return false;
    if (v.budget.length && !BUDGET_BANDS.some((b) => v.budget.includes(b.value) && t.fromPrice >= b.min && t.fromPrice < b.max)) return false;
    return true;
  });

  return (
    <div>
      <FilterBar groups={groups} value={value} onChange={setValue} resultCount={filtered.length} />

      {filtered.length === 0 ? (
        <div className="py-[var(--spacing-sec)] text-center">
          <p className="font-display text-3xl">No exits match.</p>
          <p className="mt-4 text-mist">Keep circling? Loosen a filter, or tell us what you&apos;re after and we&apos;ll build it.</p>
          <Button variant="cream" className="mt-8" onClick={() => setValue(Object.fromEntries(KEYS.map((k) => [k, []])))}>
            Clear all filters
          </Button>
        </div>
      ) : (
        <motion.ul
          layout={!reduce}
          className="mt-[var(--spacing-sec-lg)] grid grid-cols-1 gap-x-[var(--spacing-grid-gap)] gap-y-[clamp(28px,6vw,86px)] pb-[var(--spacing-sec-lg)] sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {filtered.map((t, i) => (
              <motion.li
                key={t.slug}
                layout={!reduce}
                initial={{ opacity: 0, y: reduce ? 0 : 60 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: reduce ? 0 : 60 }}
                transition={{ duration: 0.5, ease: [0.645, 0.045, 0.355, 1] }}
                // Middle-column stagger, computed from the *visible* index so it survives filtering.
                className={cn(i % 3 === 1 && "lg:translate-y-[clamp(26px,3.26vw,60px)]")}
              >
                <TripCard trip={t} regionName={t.regionName} tone="dark" priority={i < 3} />
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      )}
    </div>
  );
}
