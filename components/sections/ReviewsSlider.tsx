"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import type { Img } from "@/data/types";
import { site } from "@/config/site";
import { imgUrl } from "@/lib/media";
import { cn } from "@/lib/cn";
import { Icon } from "@/components/ui/Icon";
import { PlusHeading } from "@/components/ui/PlusHeading";

export type ReviewLite = {
  id: string;
  title: string;
  body: string[];
  name: string;
  country: string;
  tripName: string;
  rating: number;
  image: Img;
  placeholder?: boolean;
};

const EASE = [0.645, 0.045, 0.355, 1] as const;

/**
 * Client reviews: text on the left, photo bleeding off the right edge, stacked
 * square nav and a vertical "01 / 06" counter. Text and image transitions are synced.
 */
export function ReviewsSlider({ reviews, eyebrow = "Client reviews" }: { reviews: ReviewLite[]; eyebrow?: string }) {
  const [[index, dir], setState] = useState<[number, 1 | -1]>([0, 1]);
  const reduce = useReducedMotion();
  const r = reviews[index];
  const go = (d: 1 | -1) => {
    const next = index + d;
    if (next < 0 || next >= reviews.length) return;
    setState([next, d]);
  };
  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Client reviews"
      className="bg-cream text-charcoal lg:py-[var(--spacing-sec)]"
    >
      <div className="flex flex-col lg:flex-row-reverse">
        {/* Image column */}
        <div className="relative h-[87.5vw] overflow-hidden bg-charcoal-10 lg:h-[min(43.75vw,560px)] lg:w-1/2 xl:w-[41.66%]">
          <AnimatePresence initial={false} custom={dir}>
            <motion.div
              key={r.id}
              custom={dir}
              className="absolute inset-0"
              initial={reduce ? { opacity: 0 } : { y: dir > 0 ? "100%" : "-100%" }}
              animate={reduce ? { opacity: 1 } : { y: "0%" }}
              exit={reduce ? { opacity: 0 } : { y: dir > 0 ? "-30%" : "30%", opacity: 0.4 }}
              transition={{ duration: 0.7, ease: EASE }}
            >
              <motion.div
                className="absolute inset-0"
                initial={reduce ? undefined : { scale: 1.15 }}
                animate={reduce ? undefined : { scale: 1 }}
                transition={{ duration: 0.9, ease: EASE }}
              >
                <Image src={imgUrl(r.image, 1400)} alt={r.image.alt} fill sizes="(min-width:1024px) 45vw, 100vw" className="object-cover" />
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Nav box: stacked on desktop, side by side on mobile */}
          <div className="absolute right-0 bottom-0 z-10 flex bg-cream lg:right-auto lg:left-0 lg:flex-col-reverse">
            <button
              type="button"
              onClick={() => go(-1)}
              disabled={index === 0}
              aria-label="Previous review"
              className="flex size-[56px] items-center justify-center transition-opacity disabled:opacity-20 lg:size-[70px]"
            >
              <Icon name="chevron-left" size={18} />
            </button>
            <span aria-hidden="true" className="w-px bg-charcoal/15 lg:mx-auto lg:h-px lg:w-1/2" />
            <button
              type="button"
              onClick={() => go(1)}
              disabled={index === reviews.length - 1}
              aria-label="Next review"
              className="flex size-[56px] items-center justify-center transition-opacity disabled:opacity-20 lg:size-[70px]"
            >
              <Icon name="chevron-right" size={18} />
            </button>
          </div>
        </div>

        {/* Text column */}
        <div className="relative flex flex-col justify-between px-gutter pt-[var(--spacing-sec-xl)] pb-[var(--spacing-sec)] lg:w-1/2 lg:py-0 xl:w-[58.33%]">
          <PlusHeading below>{eyebrow}</PlusHeading>

          <p
            aria-hidden="true"
            className="font-ui absolute right-6 bottom-[70px] hidden -rotate-90 text-[14px] tracking-wide lg:block"
          >
            {pad(index + 1)} / {pad(reviews.length)}
          </p>

          <div className="relative max-w-[640px] pr-[8%]" aria-live="polite">
            <AnimatePresence mode="wait" initial={false} custom={dir}>
              <motion.figure
                key={r.id}
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: dir > 0 ? -40 : 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, y: dir > 0 ? 40 : -40 }}
                transition={{ duration: 0.45, ease: EASE }}
              >
                <Icon name="quote" size={36} className="mb-2 text-charcoal/15" />
                <blockquote>
                  <p className="font-cond mb-[0.5em] max-w-[12em] text-xl">{r.title}</p>
                  <div className="space-y-3">
                    {r.body.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </blockquote>
                <figcaption className="font-ui mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-[clamp(13px,0.2vw+12px,15px)]">
                  <span>
                    {r.name}, {r.country} <span aria-hidden="true">-</span> {r.tripName}
                  </span>
                  <span className="flex gap-0.5 text-sunflower" aria-label={`${r.rating} out of 5 stars`}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Icon key={i} name="star" size={19} className={cn(i >= r.rating && "text-charcoal/15")} />
                    ))}
                  </span>
                  {r.placeholder && site.features.showPlaceholderFlags && (
                    <span className="rounded-full border border-charcoal/30 px-2 py-0.5 text-[10.5px] text-charcoal/70">
                      Sample review: placeholder
                    </span>
                  )}
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
