"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { Img } from "@/data/types";
import { imgUrl } from "@/lib/media";
import { useCanHoverVideo } from "@/lib/hooks";
import { cn } from "@/lib/cn";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { PlusHeading, SquareMark } from "@/components/ui/PlusHeading";

export type IndexTrip = {
  slug: string;
  title: string;
  location: string;
  line: string;
  lede: string;
  poster: string[];
  cover: Img;
  strip: Img[];
  video?: string;
};

const EASE = [0.645, 0.045, 0.355, 1] as const;

/**
 * Tour index: a sticky column holds the heading and a media box that plays the
 * active trip's clip; trip blocks scroll past on the right.
 */
export function TourIndex({ trips }: { trips: IndexTrip[] }) {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLElement | null)[]>([]);
  const canVideo = useCanHoverVideo();
  const reduce = useReducedMotion();

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.index));
        }
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  const t = trips[active];

  return (
    <section className="bg-cream px-gutter py-[var(--spacing-sec)] text-charcoal">
      <div className="grid gap-[var(--spacing-sec-lg)] lg:grid-cols-12">
        {/* Sticky column */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-[calc(var(--header-h)+32px)]">
            <PlusHeading>Destinations</PlusHeading>
            <h2 className="font-display text-3xl">
              <span className="block">Featured</span>
              <span className="block">road trips</span>
            </h2>
            <div className="relative mt-[var(--spacing-sec-md)] hidden aspect-[4/3] overflow-hidden bg-charcoal lg:block">
              <AnimatePresence initial={false}>
                <motion.div
                  key={t.slug}
                  className="absolute inset-0"
                  initial={{ opacity: 0, scale: reduce ? 1 : 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: EASE }}
                >
                  {canVideo && t.video ? (
                    <video
                      key={t.video}
                      muted
                      loop
                      playsInline
                      autoPlay
                      aria-hidden="true"
                      poster={imgUrl(t.cover, 900)}
                      className="h-full w-full object-cover"
                    >
                      <source src={t.video.replace(/\.mp4$/, ".webm")} type="video/webm" />
                      <source src={t.video} type="video/mp4" />
                    </video>
                  ) : (
                    <Image src={imgUrl(t.cover, 900)} alt="" fill sizes="40vw" className="object-cover" />
                  )}
                  <span className="font-wide absolute bottom-5 left-5 text-[clamp(26px,2.6vw,44px)] leading-[0.82] text-cream [text-shadow:0_2px_24px_rgba(0,0,0,0.35)]">
                    {t.poster.map((l) => (
                      <span key={l} className="block">
                        {l}
                      </span>
                    ))}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="mt-6 hidden items-center justify-between lg:flex">
              <ol className="font-ui flex gap-4" aria-label="Trips in this list">
                {trips.map((x, i) => (
                  <li key={x.slug} className={cn("transition-opacity", i === active ? "opacity-100" : "opacity-35")}>
                    {String(i + 1).padStart(2, "0")}
                  </li>
                ))}
              </ol>
              <ArrowLink href="/self-drive">Full index</ArrowLink>
            </div>
          </div>
        </div>

        {/* Scrolling trip blocks */}
        <ol className="lg:col-span-6 lg:col-start-7">
          {trips.map((x, i) => (
            <li
              key={x.slug}
              ref={(el) => {
                refs.current[i] = el;
              }}
              data-index={i}
              className="border-t hairline-light py-[var(--spacing-sec-lg)] first:border-t-0 first:pt-0"
            >
              <p className="font-ui flex items-center gap-3">
                <SquareMark className="text-[11px]" />
                {x.location}
              </p>
              <p className="font-ui mt-1 text-charcoal/70">{x.line}</p>
              <h3 className="font-cond mt-6 text-2xl">{x.title}</h3>
              <p className="mt-5 max-w-[36em]">{x.lede}</p>
              <ul className="mt-8 grid grid-cols-4 gap-2" aria-label={`${x.title} photos`}>
                {x.strip.map((img, j) => (
                  <li key={j} className="relative aspect-[3/4] overflow-hidden bg-charcoal/10">
                    <Image
                      src={imgUrl(img, 500)}
                      alt={img.alt}
                      fill
                      sizes="(min-width:1024px) 12vw, 24vw"
                      className="object-cover transition-transform duration-500 ease-[var(--ease-rp)] hover:scale-110"
                    />
                  </li>
                ))}
              </ul>
              <ArrowLink href={`/road-trips/${x.slug}`} className="mt-8">
                View itinerary
              </ArrowLink>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
