"use client";

import { t, tf, tp } from '@/lib/i18n/t';
import Image from "next/image";
import Link from '@/components/i18n/Link';
import { AnimatePresence, motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useState } from "react";
import type { BrandColour, Img } from "@/data/types";
import { ordinal } from "@/data/taxonomy";
import { imgUrl } from "@/lib/media";
import { brandHex } from "@/lib/colours";
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

/** Simplified outline of mainland France and Corsica (drawn for this site). */
export const FRANCE_PATH =
  "M505 5 L517 1 L548 33 L589 59 L630 111 L671 94 L712 148 L778 162 L822 192 L906 210 L877 256 L860 315 L863 347 L822 360 L815 375 L784 409 L760 444 L762 488 L808 463 L825 511 L808 542 L829 582 L798 601 L822 631 L815 665 L870 690 L856 722 L839 729 L815 749 L795 784 L767 789 L747 789 L709 772 L675 759 L658 764 L627 744 L582 772 L551 808 L558 855 L521 862 L466 853 L390 818 L322 818 L291 803 L243 772 L221 762 L236 749 L257 660 L264 582 L271 542 L260 503 L219 453 L199 419 L168 375 L137 355 L45 325 L17 301 L15 266 L27 246 L75 235 L137 224 L205 242 L236 237 L233 187 L212 138 L253 141 L267 168 L356 163 L349 159 L387 121 L445 89 L452 39 L473 10Z";
export const CORSICA_PATH = "M986 798 L997 838 L986 907 L973 959 L945 936 L932 897 L932 862 L949 838 L979 828 L983 798Z";

const pinColour = (c: BrandColour) => (c === "charcoal" || c === "night" ? "sunflower" : c);

export function FranceMap({
  regions,
  active,
  onActive,
  className,
}: {
  regions: RegionLite[];
  active: string | null;
  onActive?: (slug: string | null) => void;
  className?: string;
}) {
  return (
    <div className={cn("relative aspect-[1020/966]", className)}>
      <svg viewBox="0 0 1020 966" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <path d={FRANCE_PATH} fill="var(--color-charcoal-5)" stroke="rgb(245 239 226 / 0.12)" strokeWidth="2" strokeLinejoin="round" />
        <path d={CORSICA_PATH} fill="var(--color-charcoal-5)" stroke="rgb(245 239 226 / 0.12)" strokeWidth="2" strokeLinejoin="round" />
      </svg>
      <ul>
        {regions.map((r) => {
          const on = active === r.slug;
          return (
            <li
              key={r.slug}
              className="absolute"
              style={{ left: `${(r.mapPin.x * 1000) / 1020}%`, top: `${r.mapPin.y}%`, zIndex: on ? 5 : 1 }}
            >
              <Link
                href={`/regions/${r.slug}`}
                onMouseEnter={() => onActive?.(r.slug)}
                onMouseLeave={() => onActive?.(null)}
                onFocus={() => onActive?.(r.slug)}
                onBlur={() => onActive?.(null)}
                className="group absolute -translate-x-1/2 -translate-y-1/2"
                aria-label={tf("{0}: road trips", r.name)}
              >
                <span
                  className={cn(
                    "block size-[18px] rounded-full border-[3px] transition-transform duration-300 ease-[var(--ease-rp)] lg:size-[22px]",
                    on ? "scale-125" : "group-hover:scale-125",
                  )}
                  style={{ borderColor: brandHex[pinColour(r.colour)], background: "var(--color-charcoal)" }}
                >
                  <span className="m-auto mt-[3px] block size-[6px] rounded-full lg:mt-[5px]" style={{ background: brandHex[pinColour(r.colour)] }} />
                </span>
                <span
                  className={cn(
                    "font-ui pointer-events-none absolute bottom-[calc(100%+8px)] left-1/2 -translate-x-1/2 rounded-full px-2.5 py-0.5 whitespace-nowrap transition-all duration-300",
                    on ? "visible translate-y-0 opacity-100" : "invisible translate-y-1 opacity-0",
                  )}
                  style={{
                    background: brandHex[pinColour(r.colour)],
                    color: ["sunflower", "charcoal", "night"].includes(r.colour) || r.colour.endsWith("-300") ? "var(--color-charcoal)" : "var(--color-cream)",
                  }}
                >
                  {tp(r.shortName)}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/**
 * "Our regions": centred heading, then a list of regions where hovering a row shows a
 * floating photo that follows the cursor, next to a France map whose pins light up in sync.
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
      <div className="px-gutter text-center">
        <PlusHeading below center className="mx-auto">
          {t("Our regions")}</PlusHeading>
        <SplitWords as="h2" lines={tp(["Pick a corner", "of France"])} className="font-display text-3xl" />
      </div>

      <div className="mt-[var(--spacing-sec-xl)] grid gap-[var(--spacing-sec-lg)] lg:grid-cols-12">
        <div className="order-2 lg:order-1 lg:col-span-6">
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

        <div className="order-1 px-gutter lg:order-2 lg:col-span-6 lg:pl-0">
          <FranceMap
            regions={regions}
            active={active}
            onActive={setActive}
            className="mx-auto max-w-[620px] lg:sticky lg:top-[calc(var(--header-h)+48px)]"
          />
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
