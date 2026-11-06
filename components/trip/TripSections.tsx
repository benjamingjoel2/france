import { t, tp } from '@/lib/i18n/t';
import Image from "next/image";
import type { Img, Month, RoadTrip } from "@/data/types";
import { monthShort, paces, tripTypes, interests as interestLabels } from "@/data/taxonomy";
import { imgUrl } from "@/lib/media";
import { brandHex } from "@/lib/colours";
import { Price } from "@/lib/currency";
import { cn } from "@/lib/cn";
import { PaceGlyph } from "@/components/ui/PaceGlyph";
import { PlusHeading } from "@/components/ui/PlusHeading";
import { SplitWords } from "@/components/motion/SplitWords";
import { Reveal } from "@/components/motion/Reveal";
import { ImageReveal } from "@/components/motion/ImageReveal";

/* ---------------------------------------------------------------- Overview */

export function TripOverview({ trip, regionNames }: { trip: RoadTrip; regionNames: string[] }) {
  const facts: { label: string; value: React.ReactNode }[] = [
    { label: "Trip type", value: tripTypes[trip.type].label },
    {
      label: "Pace",
      value: (
        <span className="inline-flex items-center gap-2">
          <PaceGlyph pace={tp(trip.pace)} /> {tp(paces[trip.pace].label)} · ~{tp(trip.avgDailyDriveHours)}{t("h driving/day")}</span>
      ),
    },
    { label: "Duration", value: `${trip.days} days / ${trip.nights} nights` },
    { label: "Total distance", value: `~${trip.totalKm.toLocaleString("en-GB")} km` },
    { label: "Regions", value: regionNames.map((n) => tp(n)).join(", ") },
    { label: "Start / end", value: trip.startEnd },
    { label: "Best months", value: trip.bestMonths.map((m) => tp(monthShort[m - 1])).join(", ") },
    {
      label: "Price",
      value: (
        <>
          {t("From ")}<Price eur={tp(trip.fromPrice)} className="text-cream" /> {t("per person ")}<span className="text-mist normal-case">{t("· tailor-made")}</span>
        </>
      ),
    },
  ];
  return (
    <div className="grid gap-[var(--spacing-sec-lg)] lg:grid-cols-12">
      <Reveal className="order-1 lg:col-span-4">
        <dl className="grid">
          {facts.map((f) => (
            <div key={f.label} className="border-b hairline-dark py-3">
              <dt className="font-ui text-mist">{tp(f.label)}</dt>
              <dd className="font-ui mt-1 font-light">{tp(f.value)}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
      <div className="order-2 lg:col-span-8">
        <SplitWords as="h2" text={tp(trip.lede)} className="font-cond max-w-[25em] text-xl" stagger={0.015} />
        <ul className="mt-6 flex flex-wrap gap-2" aria-label={t("Tags")}>
          {[tripTypes[trip.type].short, paces[trip.pace].label, ...regionNames, ...trip.interests.map((i) => interestLabels[i])].map((t) => (
            <li key={t} className="font-ui rounded-full bg-charcoal-10 px-3 py-1 text-[11.5px] text-mist">
              {tp(t)}
            </li>
          ))}
        </ul>
        <Reveal>
          <div className="richtext richtext-two-col mt-[var(--spacing-sec-md)]">
            {trip.overview.map((p, i) => (
              <p key={i}>{tp(p)}</p>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- Flavour + months */

export function TripFlavour({ trip }: { trip: RoadTrip }) {
  const rows = [
    { k: "Driving", v: trip.flavour.driving },
    { k: "Food & wine", v: trip.flavour.food },
    { k: "Culture", v: trip.flavour.culture },
    { k: "Nature", v: trip.flavour.nature },
  ];
  const colour = brandHex[trip.colour === "charcoal" || trip.colour === "night" ? "lavender" : trip.colour];
  return (
    <div className="grid gap-[var(--spacing-sec-lg)] pt-[var(--spacing-sec)] lg:grid-cols-2 lg:gap-[var(--spacing-grid-gap)]">
      <div>
        <PlusHeading className="border-t hairline-dark pt-5">{t("Trip flavour")}</PlusHeading>
        <ul className="space-y-4" aria-label={t("Trip flavour, scored out of 10")}>
          {rows.map((r) => (
            <li key={r.k} className="grid grid-cols-[8.5em_1fr_2.5em] items-center gap-4">
              <span className="font-ui">{tp(r.k)}</span>
              <span className="relative h-3 bg-charcoal-10" aria-hidden="true">
                <span className="absolute inset-y-0 left-0" style={{ width: `${r.v * 10}%`, background: colour }} />
              </span>
              <span className="font-ui text-right text-mist">
                {tp(r.v)}
                <span className="sr-only"> {t("out of 10")}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <PlusHeading className="border-t hairline-dark pt-5">{t("Best months")}</PlusHeading>
        <ol className="grid grid-cols-6 gap-1 sm:grid-cols-12" aria-label={t("Best months to go")}>
          {monthShort.map((m, i) => {
            const best = trip.bestMonths.includes((i + 1) as Month);
            return (
              <li
                key={m}
                className={cn("font-ui flex h-12 items-center justify-center text-[11px]", best ? "font-medium text-night" : "bg-charcoal-5 text-mist")}
                style={best ? { background: colour } : undefined}
              >
                {tp(m)}
                {best && <span className="sr-only"> {t("(recommended)")}</span>}
              </li>
            );
          })}
        </ol>
        <p className="mt-4 text-[13px] text-mist">{t("Seasonal highlights shift a little every year: always verify dates for the year you travel.")}</p>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- Highlights */

export function TripHighlights({ trip, images }: { trip: RoadTrip; images: [Img, Img] }) {
  return (
    <section id="highlights" className="scroll-mt-[var(--header-h)] bg-cream text-charcoal">
      <div className="px-gutter py-[var(--spacing-sec)]">
        <div className="lg:ml-[8.33%] lg:w-[41.66%] xl:w-[33.33%]">
          <SplitWords as="h2" text={t("Highlights")} className="font-cond mb-6 text-xl" />
          <Reveal>
            <ul className="richtext">
              {trip.highlights.map((h) => (
                <li key={h}>{tp(h)}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
      <div className="flex items-start pb-[var(--spacing-sec)] max-lg:flex-col max-lg:gap-7">
        <div className="order-2 w-full pr-[20%] lg:order-1 lg:mt-[3.3vw] lg:w-1/2 lg:pr-0">
          <ImageReveal className="aspect-[3/2]">
            <Image src={imgUrl(images[1], 1400)} alt={tp(images[1].alt)} fill sizes="(min-width:1024px) 50vw, 80vw" className="object-cover" />
          </ImageReveal>
        </div>
        <div className="order-1 w-full pl-[46%] pr-gutter lg:order-2 lg:-mt-[18vw] lg:w-1/2 lg:pl-[15vw]">
          <ImageReveal className="aspect-square">
            <Image src={imgUrl(images[0], 900)} alt={tp(images[0].alt)} fill sizes="(min-width:1024px) 32vw, 50vw" className="object-cover grayscale" />
          </ImageReveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- Route (day-by-day drives) */

export function TripRoute({ trip }: { trip: RoadTrip }) {
  return (
    <section id="route" className="scroll-mt-[var(--header-h)] bg-charcoal-10 px-gutter py-[var(--spacing-sec-xl)] text-cream">
      <div className="grid gap-[var(--spacing-sec-lg)] lg:grid-cols-12">
        <div className="lg:col-span-8">
          <div className="border-t hairline-dark pt-[var(--spacing-sec-lg)]">
            <SplitWords as="h2" lines={tp(["The", "route"])} className="font-display text-3xl" />
            <p className="mt-6 max-w-[30em] text-mist">
              {tp(trip.startEnd)}{t(". Roughly ")}{tp(trip.totalKm.toLocaleString("en-GB"))} {t("km over ")}{tp(trip.days)} {t("days, about")}{" "}
              {tp(trip.avgDailyDriveHours)} {t("hours at the wheel on a typical driving day.")}</p>
          </div>
          <ol className="mt-8 border-b hairline-dark">
            {trip.itinerary
              .filter((d) => d.km > 0)
              .map((d) => (
                <li key={d.day} className="font-ui flex flex-col justify-between gap-1 border-t hairline-dark py-3 font-light sm:flex-row sm:gap-4">
                  <span>
                    <span className="text-mist">{t("Day ")}{tp(d.day)}</span> {tp(d.from)} → {tp(d.to)}
                  </span>
                  <span className="shrink-0 text-mist normal-case">
                    {tp(d.km)} {t("km · ")}{tp(d.driveTime)}
                  </span>
                </li>
              ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
