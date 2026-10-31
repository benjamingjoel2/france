"use client";

import { t, tp } from '@/lib/i18n/t';
import Image from "next/image";
import Link from '@/components/i18n/Link';
import {
  AnimatePresence,
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
} from "framer-motion";
import { useEffect, useId, useRef, useState } from "react";
import type { Img, Pace, TripType } from "@/data/types";
import { ordinal, paces, tripTypes } from "@/data/taxonomy";
import { imgUrl } from "@/lib/media";
import { cn } from "@/lib/cn";
import { ButtonLink } from "@/components/ui/Button";
import { PaceGlyph } from "@/components/ui/PaceGlyph";
import { PlusHeading } from "@/components/ui/PlusHeading";
import { SplitWords } from "@/components/motion/SplitWords";
import { Reveal } from "@/components/motion/Reveal";

/** Trig rounded to 3 decimals so server and client render identical SVG attributes. */
const rc = (a: number) => Math.round(Math.cos(a) * 1000) / 1000;
const rs = (a: number) => Math.round(Math.sin(a) * 1000) / 1000;

export type MiniTrip = {
  slug: string;
  title: string;
  image: Img;
  type: TripType;
  pace: Pace;
  days: number;
  nights: number;
  regionName: string;
};

export type Exit = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  bestTime: string;
  trips: MiniTrip[];
};

const KEEP = "keep-circling";
const C = 300; // SVG centre
const RING = 150; // ring road radius
const EASE = [0.645, 0.045, 0.355, 1] as const;

function MiniTripCard({ trip }: { trip: MiniTrip }) {
  return (
    <Link href={`/road-trips/${trip.slug}`} className="group grid grid-cols-[38%_1fr] items-center gap-4 sm:grid-cols-[42%_1fr]">
      <span className="relative aspect-[16/10] overflow-hidden bg-charcoal-10">
        <Image
          src={imgUrl(trip.image, 600)}
          alt=""
          fill
          sizes="(min-width:1024px) 14vw, 38vw"
          className="object-cover transition-transform duration-300 ease-[var(--ease-rp)] group-hover:scale-110"
        />
      </span>
      <span>
        <span className="font-cond block text-lg">{tp(trip.title)}</span>
        <span className="font-ui mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 font-light text-charcoal/80">
          <span>{tp(tripTypes[trip.type].short)}</span>
          <span aria-hidden="true">•</span>
          <span className="inline-flex items-center gap-1.5">
            <PaceGlyph pace={trip.pace} /> {tp(paces[trip.pace].label)}
          </span>
          <span aria-hidden="true">•</span>
          <span>
            {tp(trip.days)}D / {tp(trip.nights)}N
          </span>
        </span>
      </span>
    </Link>
  );
}

/**
 * Signature section: a roundabout where every exit is a region. Picking an exit drives a
 * little car anticlockwise (as French traffic does) to that exit and reveals its road trips.
 * The real control is an ARIA radiogroup; below lg it renders as a simple list of chips.
 */
export function RoundaboutSelector({ exits, featured }: { exits: Exit[]; featured: MiniTrip[] }) {
  const [selected, setSelected] = useState<string>(exits[0]?.slug ?? KEEP);
  const reduce = useReducedMotion();
  const groupId = useId();
  const n = exits.length;
  const angleFor = (i: number) => -90 + (360 / n) * i; // degrees, screen coords (clockwise positive)

  // Car position on the ring, in degrees. Anticlockwise = decreasing angle.
  const angle = useMotionValue(angleFor(0) + 40);
  const carTransform = useMotionTemplate`rotate(${angle}deg)`;
  const loop = useRef<ReturnType<typeof animate> | null>(null);

  useEffect(() => {
    loop.current?.stop();
    const cur = angle.get();
    if (selected === KEEP) {
      if (reduce) return;
      loop.current = animate(angle, cur - 360, { duration: 5, ease: "linear", repeat: Infinity });
      return () => loop.current?.stop();
    }
    const i = exits.findIndex((e) => e.slug === selected);
    const target = angleFor(i);
    let delta = (((cur - target) % 360) + 360) % 360; // anticlockwise distance
    if (delta < 20) delta += 360; // always do a visible lap when re-picking nearby exits
    if (reduce) {
      angle.set(cur - delta);
      return;
    }
    loop.current = animate(angle, cur - delta, { duration: 0.6 + delta / 360, ease: EASE });
    return () => loop.current?.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected, reduce]);

  const options = [...exits.map((e) => e.slug), KEEP];
  const radioRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  function onKeyDown(e: React.KeyboardEvent) {
    const i = options.indexOf(selected);
    let next = -1;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") next = (i + 1) % options.length;
    if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = (i - 1 + options.length) % options.length;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = options.length - 1;
    if (next < 0) return;
    e.preventDefault();
    const slug = options[next];
    setSelected(slug);
    // Focus the visible control for that option (desktop label or mobile chip).
    requestAnimationFrame(() => {
      const els = document.querySelectorAll<HTMLButtonElement>(`[data-exit-group="${groupId}"][data-exit="${slug}"]`);
      els.forEach((el) => el.offsetParent !== null && el.focus());
    });
  }

  const current = exits.find((e) => e.slug === selected);
  const exitIndex = exits.findIndex((e) => e.slug === selected);

  const radioProps = (slug: string, label: string) => ({
    role: "radio" as const,
    "aria-checked": selected === slug,
    "aria-label": label,
    tabIndex: selected === slug ? 0 : -1,
    onClick: () => setSelected(slug),
    "data-exit": slug,
    "data-exit-group": groupId,
  });

  return (
    <section className="overflow-hidden bg-cream py-[var(--spacing-sec)] text-charcoal" aria-labelledby={`${groupId}-h`}>
      <div className="grid gap-6 px-gutter lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-8">
          <Reveal>
            <PlusHeading>{t("Choose your exit")}</PlusHeading>
          </Reveal>
          <SplitWords as="h2" lines={["Every road", "meets here"]} className="font-display text-3xl" />
          <span id={`${groupId}-h`} className="sr-only">
            {t("Choose a region to see its road trips")}</span>
        </div>
        <Reveal className="lg:col-span-4">
          <p className="max-w-[30em]">
            {t("France has more roundabouts than anywhere on Earth, and every one of them is a chance to change your mind. Pick an exit to see where it leads, or keep circling until something catches your eye.")}</p>
        </Reveal>
      </div>

      <div className="mt-[var(--spacing-sec-xl)] grid gap-[var(--spacing-sec-lg)] px-gutter lg:grid-cols-12 lg:items-center">
        {/* ---------- The roundabout ---------- */}
        <div className="lg:col-span-7 xl:col-span-6">
          <div
            role="radiogroup"
            aria-labelledby={`${groupId}-h`}
            onKeyDown={onKeyDown}
            className="relative mx-auto aspect-square w-full max-w-[640px] max-lg:max-w-[340px]"
          >
            <svg viewBox="0 0 600 600" className="absolute inset-0 h-full w-full" aria-hidden="true">
              {/* exit roads */}
              {exits.map((e, i) => {
                const a = (angleFor(i) * Math.PI) / 180;
                const on = selected === e.slug;
                const x1 = C + rc(a) * (RING + 20);
                const y1 = C + rs(a) * (RING + 20);
                const x2 = C + rc(a) * 236;
                const y2 = C + rs(a) * 236;
                return (
                  <g key={e.slug}>
                    <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="var(--color-charcoal)" strokeWidth="26" />
                    <line
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke={on ? "var(--color-sunflower)" : "var(--color-cream)"}
                      strokeWidth={on ? 4 : 1.5}
                      strokeDasharray={on ? "none" : "6 7"}
                      className="transition-[stroke,stroke-width] duration-300"
                    />
                  </g>
                );
              })}
              {/* ring road */}
              <circle cx={C} cy={C} r={RING} fill="none" stroke="var(--color-charcoal)" strokeWidth="48" />
              <circle cx={C} cy={C} r={RING} fill="none" stroke="var(--color-cream)" strokeWidth="1.5" strokeDasharray="8 10" opacity="0.7" />
              {/* central island */}
              <circle cx={C} cy={C} r={RING - 34} fill="var(--color-vineyard-300)" />
              <circle cx={C} cy={C} r={RING - 34} fill="none" stroke="var(--color-cream)" strokeWidth="5" strokeDasharray="10 8" />
              {/* the car (always anticlockwise) */}
              <motion.g style={{ transform: carTransform, transformOrigin: `${C}px ${C}px`, transformBox: "view-box" }}>
                <g transform={`translate(${C + RING} ${C})`}>
                  <rect x="-9" y="-15" width="18" height="30" rx="6" fill="var(--color-sunflower)" stroke="var(--color-night)" strokeWidth="2" />
                  <rect x="-6" y="-12" width="12" height="7" rx="2" fill="var(--color-night)" opacity="0.75" />
                </g>
              </motion.g>
            </svg>

            {/* Exit labels around the ring (desktop) */}
            {exits.map((e, i) => {
              const a = (angleFor(i) * Math.PI) / 180;
              const left = 50 + rc(a) * 44.5;
              const top = 50 + rs(a) * 44.5;
              const on = selected === e.slug;
              return (
                <button
                  key={e.slug}
                  type="button"
                  {...radioProps(e.slug, `${ordinal(i + 1)} exit: ${e.name}`)}
                  className={cn(
                    "absolute hidden -translate-x-1/2 -translate-y-1/2 flex-col items-center rounded-[4px] border px-2 py-1 text-center leading-none transition-colors duration-300 lg:flex",
                    on
                      ? "border-white bg-roadsign text-white shadow-[0_0_0_2px_var(--color-roadsign)]"
                      : "border-charcoal/20 bg-cream hover:border-roadsign hover:text-roadsign",
                  )}
                  style={{ left: `${left}%`, top: `${top}%` }}
                >
                  <span className="font-ui text-[9.5px] opacity-80">{tp(ordinal(i + 1))} {t("exit")}</span>
                  <span className="font-cond text-[15px] xl:text-[17px]">{tp(e.shortName)}</span>
                </button>
              );
            })}

            {/* Central island: keep circling (desktop) */}
            <button
              type="button"
              {...radioProps(KEEP, "Keep circling: not sure yet")}
              className={cn(
                "absolute top-1/2 left-1/2 hidden aspect-square w-[34%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full text-center transition-colors duration-300 lg:flex",
                selected === KEEP ? "bg-lavender text-cream" : "text-charcoal hover:bg-lavender/30",
              )}
            >
              <span className="font-ui text-[10px]">{t("Keep circling")}</span>
              <span className="font-cond mt-1 text-[18px] leading-none">{t("Not sure yet")}</span>
            </button>

            {/* Mobile island label (decorative) */}
            <span aria-hidden="true" className="font-cond absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-[15px] leading-none lg:hidden">
              {tp(current ? current.shortName : "Keep circling")}
            </span>
          </div>

          {/* List fallback (below lg) */}
          <div role="radiogroup" aria-label={t("Choose your exit")} onKeyDown={onKeyDown} className="mt-8 flex flex-wrap gap-2 lg:hidden">
            {exits.map((e, i) => (
              <button
                key={e.slug}
                type="button"
                {...radioProps(e.slug, `${ordinal(i + 1)} exit: ${e.name}`)}
                className={cn(
                  "font-ui h-9 rounded-full border px-3.5 transition-colors",
                  selected === e.slug ? "border-roadsign bg-roadsign text-white" : "border-charcoal/25",
                )}
              >
                <span className="opacity-70">{tp(ordinal(i + 1))}:</span> {tp(e.shortName)}
              </button>
            ))}
            <button
              type="button"
              {...radioProps(KEEP, "Keep circling: not sure yet")}
              className={cn(
                "font-ui h-9 rounded-full border px-3.5 transition-colors",
                selected === KEEP ? "border-lavender bg-lavender text-cream" : "border-charcoal/25",
              )}
            >
              {t("Keep circling: not sure yet")}</button>
          </div>
        </div>

        {/* ---------- Result panel ---------- */}
        <div className="lg:col-span-5 xl:col-span-5 xl:col-start-8" aria-live="polite">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={selected}
              initial={{ opacity: 0, y: reduce ? 0 : 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: reduce ? 0 : -16 }}
              transition={{ duration: 0.35, ease: EASE }}
            >
              {current ? (
                <>
                  <p className="font-ui mb-3 inline-flex rounded-[3px] bg-roadsign px-2 py-1 text-white">
                    {tp(ordinal(exitIndex + 1))} {t("exit")}</p>
                  <h3 className="font-display text-3xl">{tp(current.name)}</h3>
                  <p className="mt-4 max-w-[34em]">{tp(current.tagline)}</p>
                  <p className="font-ui mt-3 text-charcoal/70">{t("Best time: ")}{tp(current.bestTime)}</p>
                  <div className="mt-8 space-y-5 border-t hairline-light pt-6">
                    {current.trips.length ? (
                      current.trips.slice(0, 3).map((t) => <MiniTripCard key={t.slug} trip={t} />)
                    ) : (
                      <p>
                        {t("No set loop here yet, which makes it a perfect tailor-made trip. Tell us what you'd love and we'll draw the route.")}</p>
                    )}
                  </div>
                  <div className="mt-8 flex flex-wrap gap-2">
                    <ButtonLink href={`/regions/${current.slug}`} variant="charcoal">
                      {t("Explore ")}{tp(current.shortName)}
                    </ButtonLink>
                    <ButtonLink href={`/plan-my-road-trip?region=${current.slug}`} variant="stroke-dark">
                      {t("Plan this exit")}</ButtonLink>
                  </div>
                </>
              ) : (
                <>
                  <p className="font-ui mb-3 inline-flex rounded-[3px] bg-lavender px-2 py-1 text-cream">{t("Keep circling")}</p>
                  <h3 className="font-display text-3xl">{t("Not sure yet? Perfect.")}</h3>
                  <p className="mt-4 max-w-[34em]">
                    {t("Going round twice is allowed. Here are three loops our clients love, or tell your specialist what you like and let them pick the exit.")}</p>
                  <div className="mt-8 space-y-5 border-t hairline-light pt-6">
                    {featured.slice(0, 3).map((t) => (
                      <MiniTripCard key={t.slug} trip={t} />
                    ))}
                  </div>
                  <div className="mt-8 flex flex-wrap gap-2">
                    <ButtonLink href="/plan-my-road-trip?region=help" variant="charcoal">
                      {t("Help me choose")}</ButtonLink>
                  </div>
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
