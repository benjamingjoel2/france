"use client";

import { t, tp } from '@/lib/i18n/t';
import Image from "next/image";
import Link from '@/components/i18n/Link';
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import type { Img, MomentTheme } from "@/data/types";
import { momentThemes, monthNames } from "@/data/taxonomy";
import { imgUrl } from "@/lib/media";
import { cn } from "@/lib/cn";
import { FilterBar, type FilterValue } from "@/components/ui/FilterBar";
import { Icon } from "@/components/ui/Icon";
import { buttonClass } from "@/components/ui/Button";

export type MomentLite = {
  id: string;
  title: string;
  month: number;
  window: string;
  regionSlug: string;
  regionName: string;
  theme: MomentTheme;
  description: string;
  image: Img;
  trips: { slug: string; title: string }[];
};

/**
 * "When to go": month headings with full-bleed rows (moment + theme tag · window · region · arrow).
 * Rows expand in place to a photo, description and linked road trips.
 */
export function CalendarListing({ moments, regions }: { moments: MomentLite[]; regions: { value: string; label: string }[] }) {
  const [filters, setFilters] = useState<FilterValue>({ month: [], region: [], theme: [] });
  const [open, setOpen] = useState<string | null>(null);
  const reduce = useReducedMotion();

  const visible = moments.filter(
    (m) =>
      (!filters.month.length || filters.month.includes(String(m.month))) &&
      (!filters.region.length || filters.region.includes(m.regionSlug)) &&
      (!filters.theme.length || filters.theme.includes(m.theme)),
  );
  const months = Array.from(new Set(visible.map((m) => m.month))).sort((a, b) => a - b);

  return (
    <div>
      <div className="px-gutter">
        <FilterBar
          resultLabel="moments"
          resultCount={visible.length}
          value={filters}
          onChange={setFilters}
          groups={[
            { key: "month", label: "Month", options: monthNames.map((m, i) => ({ value: String(i + 1), label: m })) },
            { key: "region", label: "Region", options: regions.filter((r) => moments.some((m) => m.regionSlug === r.value)) },
            {
              key: "theme",
              label: "Theme",
              options: (Object.keys(momentThemes) as MomentTheme[]).map((t) => ({ value: t, label: momentThemes[t] })),
            },
          ]}
        />
      </div>

      {months.length === 0 && (
        <p className="px-gutter py-[var(--spacing-sec)] text-center text-mist">{t("No moments match. Keep circling: loosen a filter.")}</p>
      )}

      <div className="overflow-hidden">
        {months.map((month) => (
          <section key={month} aria-labelledby={`m-${month}`} className="mt-[var(--spacing-sec-lg)]">
            <h2 id={`m-${month}`} className="font-cond px-gutter pb-[var(--spacing-sec-md)] text-lg">
              {tp(monthNames[month - 1])}
            </h2>
            <ul className="border-t hairline-dark">
              {visible
                .filter((m) => m.month === month)
                .map((m) => {
                  const isOpen = open === m.id;
                  return (
                    <li key={m.id} className={cn("border-b hairline-dark transition-colors duration-300", isOpen && "bg-charcoal-5")}>
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={`${m.id}-panel`}
                        onClick={() => setOpen(isOpen ? null : m.id)}
                        className="group relative grid w-full gap-1 px-gutter py-[1.5em] pr-[calc(var(--spacing-gutter)+40px)] text-left transition-colors duration-300 hover:bg-charcoal-5 lg:grid-cols-12 lg:items-center lg:gap-[var(--spacing-grid-gap)]"
                      >
                        <span className="flex flex-wrap items-center gap-2 font-normal lg:col-span-5">
                          {tp(m.title)}
                          <span className="rounded-full bg-charcoal-10 px-2 py-0.5 text-[11px] text-mist uppercase">{tp(momentThemes[m.theme])}</span>
                        </span>
                        <span className="flex flex-wrap items-center gap-2 lg:col-span-4">
                          {tp(m.window)}
                          <span className="font-ui rounded-[3px] border border-sunflower/60 px-1.5 text-[9.5px] text-sunflower">
                            {t("Verify yearly")}</span>
                        </span>
                        <span className="text-mist lg:col-span-2 lg:text-cream">{tp(m.regionName)}</span>
                        <Icon
                          name="arrow-right"
                          size={18}
                          className={cn(
                            "absolute top-1/2 right-gutter -translate-y-1/2 transition-transform duration-300 ease-[var(--ease-rp)] group-hover:rotate-90",
                            isOpen && "rotate-90",
                          )}
                        />
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            id={`${m.id}-panel`}
                            initial={{ height: 0 }}
                            animate={{ height: "auto" }}
                            exit={{ height: 0 }}
                            transition={{ duration: reduce ? 0 : 0.45, ease: [0.645, 0.045, 0.355, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="grid gap-8 px-gutter pt-[var(--spacing-sec-md)] pb-[var(--spacing-sec-xl)] lg:grid-cols-12 lg:items-end lg:gap-[var(--spacing-grid-gap)]">
                              <div className="relative aspect-[3/2] overflow-hidden lg:col-span-6 xl:col-span-7">
                                <Image src={imgUrl(m.image, 1400)} alt={tp(m.image.alt)} fill sizes="(min-width:1024px) 55vw, 100vw" className="object-cover" />
                              </div>
                              <div className="lg:col-span-5 lg:col-start-8 xl:col-span-4 xl:col-start-9">
                                <p>{tp(m.description)}</p>
                                <p className="mt-4 text-[13px] text-mist">
                                  {t("Dates are indicative and shift from year to year. We'll confirm them for your trip.")}</p>
                                <div className="mt-8 flex flex-wrap gap-2">
                                  {m.trips.map((t) => (
                                    <Link key={t.slug} href={`/road-trips/${t.slug}`} className={buttonClass("cream")}>
                                      {tp(t.title)}
                                    </Link>
                                  ))}
                                  <Link href={`/plan-my-road-trip?region=${m.regionSlug}`} className={buttonClass("stroke-light")}>
                                    {t("Plan around it")}</Link>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </li>
                  );
                })}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
