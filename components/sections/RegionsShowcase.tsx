"use client";

import { t, tp } from '@/lib/i18n/t';
import Image from "next/image";
import Link from '@/components/i18n/Link';
import { AnimatePresence, motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useState } from "react";
import type { BrandColour, Img } from "@/data/types";
import { ordinal } from "@/data/taxonomy";
import { imgUrl } from "@/lib/media";
import { useCanHoverVideo } from "@/lib/hooks";
import { cn } from "@/lib/cn";
import { PlusHeading } from "@/components/ui/PlusHeading";
import { SplitWords } from "@/components/motion/SplitWords";

export type RegionLite = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  colour: BrandColour;
  mapPin: { x: number; y: number };
  image: Img;
  tripCount: number;
};

/**
 * "Our regions": heading, then a list of regions where hovering a row shows a
 * floating photo that follows the cursor.
 */
export function RegionsShowcase({ regions }: { regions: RegionLite[] }) {
  const [active, setActive] = useState<string | null>(null);
  const canHover = useCanHoverVideo();
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 300, damping: 30, mass: 0.6 });
  const y = useSpring(my, { stiffness: 300, damping: 30, mass: 0.6 });
  const activeRegion = regions.find((r) => r.slug === active);

  return (
    <section className="relative overflow-x-clip bg-charcoal py-[var(--spacing-sec)] text-cream">
      <div className="px-gutter">
        <PlusHeading below>
          {t("Our regions")}</PlusHeading>
        <SplitWords as="h2" lines={tp(["Pick a corner", "of France"])} className="font-display text-3xl" />
      </div>

      <div className="mt-[var(--spacing-sec-xl)] grid gap-[var(--spacing-sec-lg)] lg:grid-cols-12">
        <div className="lg:col-span-12">
          <ul
            className="border-b hairline-dark"
            onMouseMove={(e) => {
              mx.set(e.clientX);
              my.set(e.clientY);
            }}
          >
            {regions.map((r, i) => {
              const on = active === r.slug;
              return (
                <li key={r.slug} className="border-t hairline-dark">
                  <Link
                    href={`/regions/${r.slug}`}
                    onMouseEnter={() => setActive(r.slug)}
                    onMouseLeave={() => setActive(null)}
                    onFocus={() => setActive(r.slug)}
                    onBlur={() => setActive(null)}
                    className={cn(
                      "group flex items-baseline justify-between gap-4 py-[clamp(10px,0.9vw,16px)] pr-gutter pl-gutter transition-colors duration-300",
                      on && "bg-charcoal-5",
                    )}
                  >
                    <span className="flex items-baseline gap-4">
                      <span className="font-ui w-[4.5em] shrink-0 text-[11px] text-mist">{tp(ordinal(i + 1))} {t("exit")}</span>
                      <span
                        className={cn(
                          "font-display text-[clamp(20px,1.6vw+8px,34px)] leading-[0.95] transition-colors duration-300",
                          active && !on && "lg:text-cream/35",
                        )}
                      >
                        {tp(r.name)}
                      </span>
                    </span>
                    <span className="font-ui hidden shrink-0 text-mist sm:inline">
                      {tp(r.tripCount === 0 ? "Tailor-made" : `${r.tripCount} ${r.tripCount === 1 ? "trip" : "trips"}`)}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

      </div>

      {/* Floating image that follows the cursor over the list (fine pointers only) */}
      {canHover && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none fixed top-0 left-0 z-30 hidden lg:block"
          style={{ x, y }}
        >
          <AnimatePresence>
            {activeRegion && (
              <motion.div
                key={activeRegion.slug}
                className="relative -mt-[180px] ml-8 aspect-[4/5] w-[260px] overflow-hidden"
                initial={{ opacity: 0, scale: reduce ? 1 : 0.9, rotate: reduce ? 0 : -3 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: reduce ? 1 : 0.95 }}
                transition={{ duration: 0.3, ease: [0.645, 0.045, 0.355, 1] }}
              >
                <Image src={imgUrl(activeRegion.image, 600)} alt="" fill sizes="260px" className="object-cover" />
                <span className="font-ui absolute bottom-0 left-0 bg-charcoal/80 px-3 py-1.5 text-cream normal-case">
                  {tp(activeRegion.tagline)}
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </section>
  );
}
