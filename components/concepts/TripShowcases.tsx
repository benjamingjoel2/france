"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useLayoutEffect, useRef, useState } from "react";
import type { CardTrip } from "@/lib/cards";
import { paces, tripTypes } from "@/data/taxonomy";
import { imgUrl } from "@/lib/media";
import { useMediaQuery } from "@/lib/hooks";
import { cn } from "@/lib/cn";
import { Carousel } from "@/components/ui/Carousel";
import { PaceGlyph } from "@/components/ui/PaceGlyph";
import { TripCard } from "@/components/sections/TripCard";

type T = CardTrip & { regionName: string };

/**
 * Pinned horizontal gallery: the section pins while vertical scroll slides the
 * poster cards sideways. Falls back to the normal slider on small screens and
 * with reduced motion.
 */
export function PinnedTrips({ trips, heading }: { trips: T[]; heading: string[] }) {
  const wide = useMediaQuery("(min-width: 1024px)");
  const reduce = useReducedMotion();
  const title = (
    <h2 className="font-display text-3xl">
      {heading.map((l) => (
        <span key={l} className="block">
          {l}
        </span>
      ))}
    </h2>
  );
  if (!wide || reduce) {
    return (
      <section className="bg-charcoal py-[var(--spacing-sec)] text-cream">
        <div className="px-gutter pb-[var(--spacing-sec-xl)]">{title}</div>
        <Carousel label="Featured road trips" tone="dark">
          {trips.map((t) => (
            <TripCard key={t.slug} trip={t} regionName={t.regionName} tone="dark" />
          ))}
        </Carousel>
      </section>
    );
  }
  return <PinnedGallery trips={trips} title={title} />;
}

function PinnedGallery({ trips, title }: { trips: T[]; title: React.ReactNode }) {
  const outer = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);

  useLayoutEffect(() => {
    const el = track.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setDistance(Math.max(0, el.scrollWidth - window.innerWidth)));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({ target: outer, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);
  const bar = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={outer} className="relative bg-charcoal text-cream" style={{ height: `calc(100vh + ${distance}px)` }}>
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden pt-[var(--header-h)]">
        <div className="mb-10 flex items-end justify-between gap-8 px-gutter">
          {title}
          <div className="font-ui w-[260px] shrink-0">
            <p className="mb-3 text-mist">Scroll to drive on →</p>
            <div className="h-px bg-cream/20">
              <motion.div className="h-px bg-sunflower" style={{ width: bar }} />
            </div>
          </div>
        </div>
        <motion.div ref={track} style={{ x }} className="flex w-max gap-[var(--spacing-grid-gap)] px-gutter">
          {trips.map((t) => (
            <div key={t.slug} className="w-[min(25vw,380px)] shrink-0">
              <TripCard trip={t} regionName={t.regionName} tone="dark" sizes="380px" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/**
 * Stacked cards: each trip is a wide card that sticks and is covered by the next,
 * like postcards dropped on a table.
 */
export function StackedTrips({ trips, heading }: { trips: T[]; heading: string[] }) {
  return (
    <section className="bg-cream px-gutter py-[var(--spacing-sec)] text-charcoal">
      <div className="mb-[var(--spacing-sec-xl)] flex flex-wrap items-end justify-between gap-6">
        <h2 className="font-display text-3xl">
          {heading.map((l) => (
            <span key={l} className="block">
              {l}
            </span>
          ))}
        </h2>
        <Link href="/self-drive" className="font-ui link-wipe">
          All road trips →
        </Link>
      </div>
      <ol className="relative">
        {trips.map((t, i) => (
          <li
            key={t.slug}
            className="sticky mb-[6vh]"
            style={{ top: `calc(var(--header-h) + 24px + ${i * 18}px)` }}
          >
            <Link
              href={`/road-trips/${t.slug}`}
              className={cn(
                "group grid overflow-hidden bg-charcoal text-cream shadow-[0_-10px_40px_rgba(12,26,51,0.25)] md:grid-cols-[1.35fr_1fr]",
                "min-h-[min(70vh,600px)]",
              )}
            >
              <span className="relative block min-h-[300px] overflow-hidden">
                <Image
                  src={imgUrl(t.cardImage, 1600)}
                  alt={t.cardImage.alt}
                  fill
                  sizes="(min-width:768px) 58vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-[var(--ease-rp)] group-hover:scale-105"
                />
                <span className="font-wide absolute bottom-6 left-6 text-[clamp(30px,4vw,64px)] leading-[0.82] [text-shadow:0_2px_30px_rgba(0,0,0,0.3)]">
                  {t.poster.title.map((l) => (
                    <span key={l} className="block">
                      {l}
                    </span>
                  ))}
                </span>
              </span>
              <span className="flex flex-col justify-between gap-8 p-[clamp(24px,3.5vw,52px)]">
                <span className="font-ui flex items-center justify-between">
                  <span>{String(i + 1).padStart(2, "0")} / {String(trips.length).padStart(2, "0")}</span>
                  <span className="rounded-full bg-sunflower px-3 py-1 text-charcoal">{tripTypes[t.type].short}</span>
                </span>
                <span>
                  <span className="font-cond block text-2xl">{t.title}</span>
                  <span className="font-ui mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-mist">
                    <span>{t.regionName}</span>
                    <span aria-hidden="true">•</span>
                    <span className="inline-flex items-center gap-2">
                      <PaceGlyph pace={t.pace} /> {paces[t.pace].label}
                    </span>
                    <span aria-hidden="true">•</span>
                    <span>
                      {t.days} days / {t.nights} nights
                    </span>
                  </span>
                </span>
                <span className="font-ui inline-flex items-center gap-3 self-start border-b border-cream pb-1 transition-[gap] duration-300 group-hover:gap-5">
                  Take this road →
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </section>
  );
}

/** Month strip used as a "when to go" teaser. */
export function MonthStrip({
  months,
  image,
}: {
  months: { short: string; title: string; highlight?: boolean }[];
  image: { src: string; alt: string };
}) {
  const reduce = useReducedMotion();
  return (
    <section className="relative overflow-hidden bg-night py-[var(--spacing-sec)] text-cream">
      <Image src={imgUrl(image, 2000)} alt="" fill sizes="100vw" className="object-cover opacity-30" />
      <div className="relative px-gutter">
        <div className="mb-[var(--spacing-sec-xl)] flex flex-wrap items-end justify-between gap-6">
          <h2 className="font-display text-3xl">
            <span className="block">When</span>
            <span className="block">to go</span>
          </h2>
          <Link href="/when-to-go" className="font-ui inline-flex h-14 items-center rounded-full bg-cream px-7 text-charcoal transition-colors hover:bg-mist">
            View the calendar
          </Link>
        </div>
        <ol className="grid grid-cols-2 border-t hairline-dark sm:grid-cols-3 lg:grid-cols-6">
          {months.map((m, i) => (
            <motion.li
              key={m.short}
              initial={{ opacity: 0, y: reduce ? 0 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.07, ease: [0.645, 0.045, 0.355, 1] }}
              className={cn(
                "border-b border-r hairline-dark p-5 transition-colors duration-300 hover:bg-cream/10",
                m.highlight && "bg-lavender/90 text-night hover:bg-lavender",
              )}
            >
              <p className="font-cond text-xl">{m.short}</p>
              <p className="mt-3 min-h-[3em] text-[14px]">{m.title}</p>
            </motion.li>
          ))}
        </ol>
        <p className="font-ui mt-4 text-[11px] text-mist">Indicative dates · verify yearly</p>
      </div>
    </section>
  );
}
