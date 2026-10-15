import { Suspense } from "react";
import type { TripType } from "@/data/types";
import { tripTypes } from "@/data/taxonomy";
import { photo } from "@/lib/media";
import { regionNameFor, regions, tripsByType } from "@/lib/queries";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SectionIntro } from "@/components/sections/SectionIntro";
import { TripListing, type ListingTrip } from "@/components/sections/TripListing";
import { toCardTrip } from "@/lib/cards";
import { CrossSellBand } from "@/components/sections/CrossSellBand";
import { FullWidthCta } from "@/components/sections/FullWidthCta";

const copy: Record<TripType, { lines: string[]; intro: string; cross: { lines: string[]; text: string; image: string[] } }> = {
  "self-drive": {
    lines: ["Self-drive", "road trips"],
    intro:
      "Your car, your playlist, our route. Every loop comes with hand-picked stays, a route book worth keeping and a specialist on WhatsApp for the moments the satnav gets ideas.",
    cross: {
      lines: ["Drive &", "e-bike"],
      text: "Want to feel the hills as well as see them? Our drive & e-bike loops swap the car for pedal-assist on the prettiest days. Luggage goes ahead; you follow at 25 km/h.",
      image: ["theme:ebike", "region:loire-valley"],
    },
  },
  "drive-and-e-bike": {
    lines: ["Drive &", "e-bike"],
    intro:
      "Park up, saddle up. Drive between regions, then swap four wheels for two on the days the lanes are too lovely to rush. E-bikes, helmets and route notes are waiting for you.",
    cross: {
      lines: ["Self-drive", "road trips"],
      text: "Prefer to keep both hands on the wheel? Our self-drive loops cover the whole map, from lavender plateaus to Alpine passes, at whichever pace suits you.",
      image: ["theme:convertible", "theme:car-countryside"],
    },
  },
};

export function TripTypePage({ type }: { type: TripType }) {
  const c = copy[type];
  const other: TripType = type === "self-drive" ? "drive-and-e-bike" : "self-drive";
  const trips: ListingTrip[] = tripsByType(type).map((t) => ({
    ...toCardTrip(t),
    regionName: regionNameFor(t),
    regionSlugs: t.regionSlugs,
    interests: t.interests,
    fromPrice: t.fromPrice,
  }));
  return (
    <div className="bg-charcoal pt-[var(--header-h)] text-cream">
      <Breadcrumbs items={[{ label: tripTypes[type].label }]} />
      <section className="py-[var(--spacing-sec)]">
        <SectionIntro as="h1" size="4xl" bottomAlign lines={c.lines} text={<p>{c.intro}</p>} />
        <div className="mt-[var(--spacing-sec-xl)] px-gutter">
          <Suspense fallback={<div className="min-h-[60vh]" />}>
            <TripListing trips={trips} regionOptions={regions.map((r) => ({ value: r.slug, label: r.name }))} />
          </Suspense>
        </div>
      </section>
      <CrossSellBand
        lines={c.cross.lines}
        text={c.cross.text}
        cta="Find out more"
        href={tripTypes[other].href}
        image={photo(c.cross.image, 1)}
      />
      <FullWidthCta
        image={photo(["hero:calendar", "theme:sunflowers"], 1)}
        heading="When to go"
        text="Lavender in early summer, grape harvest around September, Christmas markets in December. Our month-by-month calendar shows when each region is at its best."
        cta="View the calendar"
        href="/when-to-go"
      />
    </div>
  );
}
