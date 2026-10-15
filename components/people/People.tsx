"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useEffectEvent, useRef, useState } from "react";
import type { Img } from "@/data/types";
import { site } from "@/config/site";
import { imgUrl } from "@/lib/media";
import { cn } from "@/lib/cn";
import { Icon } from "@/components/ui/Icon";

export type PersonLite = {
  slug: string;
  name: string;
  role: string;
  bio: string[];
  favouriteExit: string;
  languages: string[];
  image: Img;
  regionName?: string;
  placeholder?: boolean;
};

const EASE = [0.645, 0.045, 0.355, 1] as const;
const nameFonts = ["font-wide", "font-cond", "font-display", "font-cond", "font-display", "font-wide"];

/* ---------------------------------------------------------------- Bio modal */

export function PersonModal({ person, onClose }: { person: PersonLite | null; onClose: () => void }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const onEscape = useEffectEvent(() => onClose());
  const open = !!person;
  useEffect(() => {
    if (!open) return;
    const prevFocus = document.activeElement as HTMLElement | null;
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    ref.current?.querySelector<HTMLElement>("button")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onEscape();
      if (e.key === "Tab") {
        e.preventDefault();
        ref.current?.querySelector<HTMLElement>("button")?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
      prevFocus?.focus();
    };
  }, [open]);

  return (
    <AnimatePresence>
      {person && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto p-4 lg:items-center lg:p-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="fixed inset-0 bg-night/60" onClick={onClose} aria-hidden="true" />
          <motion.div
            ref={ref}
            role="dialog"
            aria-modal="true"
            aria-labelledby="person-name"
            className="relative flex w-full max-w-[40rem] flex-col bg-charcoal text-cream shadow-[0_4px_32px_rgba(0,0,0,0.25)] lg:max-w-[70rem] lg:flex-row"
            initial={{ y: reduce ? 0 : 96, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: reduce ? 0 : 96, opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
          >
            <button
              type="button"
              aria-label="Close"
              onClick={onClose}
              className="absolute top-0 right-0 z-10 flex size-12 items-center justify-center bg-charcoal-10 transition-colors hover:bg-cream hover:text-charcoal"
            >
              <Icon name="close" size={18} />
            </button>
            <div className="p-[10%] pb-[8%] lg:w-1/2">
              <h2 id="person-name" className="font-cond text-lg">
                {person.name}
              </h2>
              <p className="font-cond mb-[1em] text-lg text-dim">{person.role}</p>
              <div className="richtext text-[15px]">
                {person.bio.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <dl className="font-ui mt-6 space-y-2 border-t hairline-dark pt-4 text-[12px]">
                <div>
                  <dt className="inline text-mist">Favourite exit: </dt>
                  <dd className="inline normal-case">{person.favouriteExit}</dd>
                </div>
                <div>
                  <dt className="inline text-mist">Speaks: </dt>
                  <dd className="inline">{person.languages.join(", ")}</dd>
                </div>
              </dl>
              {person.placeholder && site.features.showPlaceholderFlags && (
                <p className="font-ui mt-4 text-[10.5px] text-mist">Placeholder profile</p>
              )}
            </div>
            <div className="relative aspect-[8/7] lg:aspect-auto lg:w-1/2">
              <Image src={imgUrl(person.image, 1000)} alt={person.image.alt} fill sizes="(min-width:1024px) 35rem, 100vw" className="object-cover" />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ---------------------------------------------------------------- Square grid */

/**
 * Three-column grid of square, black-and-white portraits (middle column staggered).
 * Name typefaces cycle wide / condensed / black. Click opens the bio modal.
 */
export function PeopleGrid({ people, deepLink = true }: { people: PersonLite[]; deepLink?: boolean }) {
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!deepLink) return;
    const p = new URLSearchParams(window.location.search).get("p");
    // Deep link (?p=slug) can only be read after hydration.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (p && people.some((x) => x.slug === p)) setOpenSlug(p);
  }, [deepLink, people]);

  const setOpen = (slug: string | null) => {
    setOpenSlug(slug);
    if (!deepLink) return;
    const url = new URL(window.location.href);
    if (slug) url.searchParams.set("p", slug);
    else url.searchParams.delete("p");
    window.history.replaceState(null, "", url);
  };

  return (
    <>
      <ul className="grid grid-cols-1 gap-[var(--spacing-grid-gap)] pb-[clamp(0px,3.3vw,60px)] sm:grid-cols-2 lg:grid-cols-3">
        {people.map((p, i) => (
          <motion.li
            key={p.slug}
            className={cn(i % 3 === 1 && "lg:translate-y-[clamp(26px,3.26vw,60px)]")}
            initial={reduce ? { opacity: 0 } : { clipPath: "inset(0% 0% 100% 0%)" }}
            whileInView={reduce ? { opacity: 1 } : { clipPath: "inset(0% 0% 0% 0%)" }}
            viewport={{ once: true, margin: "0px 0px -20% 0px" }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <button
              type="button"
              onClick={() => setOpen(p.slug)}
              aria-haspopup="dialog"
              className="group relative block aspect-square w-full overflow-hidden text-left"
            >
              <Image
                src={imgUrl(p.image, 900)}
                alt=""
                fill
                sizes="(min-width:1024px) 31vw, (min-width:640px) 48vw, 92vw"
                className="object-cover grayscale transition-[filter,transform] duration-300 ease-[var(--ease-rp)] group-hover:scale-110 group-hover:grayscale-0 group-focus-visible:grayscale-0"
              />
              <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-night/90 to-transparent" />
              <span className="absolute bottom-0 left-0 p-[6%_8%] text-cream">
                <span className={cn(nameFonts[i % 6], "block text-lg")}>{p.name}</span>
                <span className="font-ui mt-2 block text-[11.5px] text-cream/80">
                  {p.role}
                  {p.regionName ? ` · ${p.regionName}` : ""}
                </span>
              </span>
            </button>
          </motion.li>
        ))}
      </ul>
      <PersonModal person={people.find((p) => p.slug === openSlug) ?? null} onClose={() => setOpen(null)} />
    </>
  );
}

/* ---------------------------------------------------------------- Split slider */

/** 50/50 split: copy on the left, a vertical card slider of people on the right. */
export function PeopleSplit({
  heading,
  text,
  people,
}: {
  heading: string[];
  text: string;
  people: PersonLite[];
}) {
  const [[i, dir], set] = useState<[number, 1 | -1]>([0, 1]);
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const reduce = useReducedMotion();
  const p = people[i];
  const go = (d: 1 | -1) => {
    const n = i + d;
    if (n >= 0 && n < people.length) set([n, d]);
  };
  const pad = (n: number) => String(n).padStart(2, "0");
  if (!p) return null;

  return (
    <section id="specialist" className="grid scroll-mt-[var(--header-h)] bg-charcoal text-cream lg:min-h-[636px] lg:grid-cols-2">
      <div className="flex flex-col justify-between gap-10 px-gutter py-[var(--spacing-sec-xl)]">
        <div className="border-t hairline-dark pt-[var(--spacing-sec-lg)]">
          <h2 className="font-display text-3xl">
            {heading.map((l) => (
              <span key={l} className="block">
                {l}
              </span>
            ))}
          </h2>
        </div>
        <p className="max-w-[30em] border-b hairline-dark pb-[var(--spacing-sec-lg)] text-mist">{text}</p>
      </div>
      <div className="relative flex flex-col items-center justify-center bg-charcoal-5 px-gutter py-[clamp(60px,9vw,128px)]">
        <div className="relative aspect-[5/6] w-[min(70%,317px)] overflow-hidden" aria-live="polite">
          <AnimatePresence initial={false} custom={dir}>
            <motion.button
              key={p.slug}
              type="button"
              onClick={() => setOpenSlug(p.slug)}
              aria-haspopup="dialog"
              aria-label={`${p.name}, ${p.role}: read bio`}
              className="group absolute inset-0 block text-left"
              initial={reduce ? { opacity: 0 } : { y: dir > 0 ? "100%" : "-100%" }}
              animate={reduce ? { opacity: 1 } : { y: "0%" }}
              exit={reduce ? { opacity: 0 } : { y: dir > 0 ? "-100%" : "100%" }}
              transition={{ duration: 0.6, ease: EASE }}
            >
              <Image src={imgUrl(p.image, 700)} alt="" fill sizes="317px" className="object-cover grayscale transition-[filter] duration-300 group-hover:grayscale-0" />
              <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-night/90 to-transparent" />
              <span className="absolute inset-x-0 bottom-0 p-[26px] text-center">
                <span className="font-cond block text-lg">{p.name}</span>
                <span className="font-ui mt-1 block text-[11px] text-cream/80">{p.role}</span>
              </span>
            </motion.button>
          </AnimatePresence>
        </div>
        <p className="font-ui mt-6 text-[13px]">
          <span>{pad(i + 1)}</span> <span className="text-dim">/ {pad(people.length)}</span>
        </p>
        {people.length > 1 && (
          <div className="absolute top-1/2 right-0 flex -translate-y-1/2 flex-col">
            <button type="button" aria-label="Previous person" disabled={i === 0} onClick={() => go(-1)} className="flex size-[56px] items-center justify-center bg-charcoal transition-opacity disabled:opacity-30 lg:size-[70px]">
              <Icon name="chevron-up" size={18} />
            </button>
            <span className="h-px bg-cream/15" />
            <button type="button" aria-label="Next person" disabled={i === people.length - 1} onClick={() => go(1)} className="flex size-[56px] items-center justify-center bg-charcoal transition-opacity disabled:opacity-30 lg:size-[70px]">
              <Icon name="chevron-down" size={18} />
            </button>
          </div>
        )}
      </div>
      <PersonModal person={people.find((x) => x.slug === openSlug) ?? null} onClose={() => setOpenSlug(null)} />
    </section>
  );
}
