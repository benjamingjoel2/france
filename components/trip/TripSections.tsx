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
import { FRANCE_PATH, CORSICA_PATH } from "@/components/sections/RegionsShowcase";

/* ---------------------------------------------------------------- Overview */

export function TripOverview({ trip, regionNames }: { trip: RoadTrip; regionNames: string[] }) {
  const facts: { label: string; value: React.ReactNode }[] = [
    { label: "Trip type", value: tripTypes[trip.type].label },
    {
      label: "Pace",
      value: (
        <span className="inline-flex items-center gap-2">
          <PaceGlyph pace={trip.pace} /> {paces[trip.pace].label} · ~{trip.avgDailyDriveHours}h driving/day
        </span>
      ),
    },
    { label: "Duration", value: `${trip.days} days / ${trip.nights} nights` },
    { label: "Total distance", value: `~${trip.totalKm.toLocaleString("en-GB")} km` },
    { label: "Regions", value: regionNames.join(", ") },
    { label: "Start / end", value: trip.startEnd },
    { label: "Best months", value: trip.bestMonths.map((m) => monthShort[m - 1]).join(", ") },
    {
      label: "From (per person)",
      value: (
        <>
          <Price eur={trip.fromPrice} className="text-cream" /> <span className="text-mist normal-case">· tailor-made</span>
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
              <dt className="font-ui text-mist">{f.label}</dt>
              <dd className="font-ui mt-1 font-light">{f.value}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
      <div className="order-2 lg:col-span-8">
        <SplitWords as="h2" text={trip.lede} className="font-cond max-w-[25em] text-xl" stagger={0.015} />
        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Tags">
          {[tripTypes[trip.type].short, paces[trip.pace].label, ...regionNames, ...trip.interests.map((i) => interestLabels[i])].map((t) => (
            <li key={t} className="font-ui rounded-full bg-charcoal-10 px-3 py-1 text-[11.5px] text-mist">
              {t}
            </li>
          ))}
        </ul>
        <Reveal>
          <div className="richtext richtext-two-col mt-[var(--spacing-sec-md)]">
            {trip.overview.map((p, i) => (
              <p key={i}>{p}</p>
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
        <PlusHeading className="border-t hairline-dark pt-5">Trip flavour</PlusHeading>
        <ul className="space-y-4" aria-label="Trip flavour, scored out of 10">
          {rows.map((r) => (
            <li key={r.k} className="grid grid-cols-[8.5em_1fr_2.5em] items-center gap-4">
              <span className="font-ui">{r.k}</span>
              <span className="relative h-3 bg-charcoal-10" aria-hidden="true">
                <span className="absolute inset-y-0 left-0" style={{ width: `${r.v * 10}%`, background: colour }} />
              </span>
              <span className="font-ui text-right text-mist">
                {r.v}
                <span className="sr-only"> out of 10</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <PlusHeading className="border-t hairline-dark pt-5">Best months</PlusHeading>
        <ol className="grid grid-cols-6 gap-1 sm:grid-cols-12" aria-label="Best months to go">
          {monthShort.map((m, i) => {
            const best = trip.bestMonths.includes((i + 1) as Month);
            return (
              <li
                key={m}
                className={cn("font-ui flex h-12 items-center justify-center text-[11px]", best ? "text-charcoal" : "bg-charcoal-5 text-dim")}
                style={best ? { background: colour } : undefined}
              >
                {m}
                {best && <span className="sr-only"> (recommended)</span>}
              </li>
            );
          })}
        </ol>
        <p className="mt-4 text-[13px] text-mist">Seasonal highlights shift a little every year: always verify dates for the year you travel.</p>
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
          <SplitWords as="h2" text="Highlights" className="font-cond mb-6 text-xl" />
          <Reveal>
            <ul className="richtext">
              {trip.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
      <div className="flex items-start pb-[var(--spacing-sec)] max-lg:flex-col max-lg:gap-7">
        <div className="order-2 w-full pr-[20%] lg:order-1 lg:mt-[3.3vw] lg:w-1/2 lg:pr-0">
          <ImageReveal className="aspect-[3/2]">
            <Image src={imgUrl(images[1], 1400)} alt={images[1].alt} fill sizes="(min-width:1024px) 50vw, 80vw" className="object-cover" />
          </ImageReveal>
        </div>
        <div className="order-1 w-full pl-[46%] pr-gutter lg:order-2 lg:-mt-[18vw] lg:w-1/2 lg:pl-[15vw]">
          <ImageReveal className="aspect-square">
            <Image src={imgUrl(images[0], 900)} alt={images[0].alt} fill sizes="(min-width:1024px) 32vw, 50vw" className="object-cover grayscale" />
          </ImageReveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- Route map placeholder */

export function TripRoute({ trip }: { trip: RoadTrip }) {
  // Overnight stops in order, deduplicated (the loop returns to the start).
  const towns: string[] = [];
  for (const d of trip.itinerary) {
    if (!towns.length) towns.push(d.from);
    if (towns[towns.length - 1] !== d.to) towns.push(d.to);
  }
  const loop = towns.length > 1 && towns[0] === towns[towns.length - 1] ? towns.slice(0, -1) : towns;
  const n = Math.max(loop.length, 3);
  // Stylised loop: points on a wobbly ellipse.
  const pts = loop.map((_, i) => {
    const a = (i / n) * Math.PI * 2 - Math.PI / 2;
    const r = 1 + 0.12 * Math.sin(i * 2.3);
    return { x: 300 + Math.cos(a) * 190 * r, y: 240 + Math.sin(a) * 150 * r };
  });
  const d =
    pts.length > 1
      ? pts
          .map((p, i) => {
            const q = pts[(i + 1) % pts.length];
            const cx = (p.x + q.x) / 2 + (q.y - p.y) * 0.18;
            const cy = (p.y + q.y) / 2 - (q.x - p.x) * 0.18;
            return `${i === 0 ? `M${p.x} ${p.y}` : ""} Q${cx} ${cy} ${q.x} ${q.y}`;
          })
          .join(" ")
      : "";
  return (
    <section id="route" className="scroll-mt-[var(--header-h)] bg-charcoal-10 px-gutter py-[var(--spacing-sec-xl)] text-cream">
      <div className="grid gap-[var(--spacing-sec-lg)] lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="border-t hairline-dark pt-[var(--spacing-sec-lg)]">
            <SplitWords as="h2" lines={["The", "route"]} className="font-display text-3xl" />
            <p className="mt-6 max-w-[30em] text-mist">
              {trip.startEnd}. Roughly {trip.totalKm.toLocaleString("en-GB")} km over {trip.days} days, about{" "}
              {trip.avgDailyDriveHours} hours at the wheel on a typical driving day.
            </p>
          </div>
          <ol className="mt-8 border-b hairline-dark">
            {trip.itinerary
              .filter((d) => d.km > 0)
              .map((d) => (
                <li key={d.day} className="font-ui flex flex-col justify-between gap-1 border-t hairline-dark py-3 font-light sm:flex-row sm:gap-4">
                  <span>
                    <span className="text-mist">Day {d.day}</span> {d.from} → {d.to}
                  </span>
                  <span className="shrink-0 text-mist normal-case">
                    {d.km} km · {d.driveTime}
                  </span>
                </li>
              ))}
          </ol>
        </div>
        <div className="lg:col-span-7">
          <figure className="relative aspect-[600/480] w-full overflow-hidden bg-charcoal">
            <svg viewBox="0 0 600 480" className="absolute inset-0 h-full w-full" role="img" aria-label={`Stylised loop through ${loop.join(", ")}`}>
              <g opacity="0.25" transform="translate(410 300) scale(0.17)">
                <path d={FRANCE_PATH} fill="var(--color-cream)" />
                <path d={CORSICA_PATH} fill="var(--color-cream)" />
              </g>
              {d && (
                <path d={d} fill="none" stroke="var(--color-sunflower)" strokeWidth="4" strokeLinecap="round" strokeDasharray="1 0" className="[stroke-dasharray:2200] [stroke-dashoffset:2200] motion-safe:animate-[draw_2.4s_ease-in-out_forwards] motion-reduce:[stroke-dashoffset:0]" />
              )}
              {pts.map((p, i) => (
                <g key={i}>
                  <circle cx={p.x} cy={p.y} r={i === 0 ? 9 : 6} fill={i === 0 ? "var(--color-sunflower)" : "var(--color-cream)"} stroke="var(--color-charcoal)" strokeWidth="3" />
                  <text x={p.x + 12} y={p.y + 4} fill="var(--color-cream)" fontSize="14" fontFamily="var(--font-mono)">
                    {loop[i]}
                  </text>
                </g>
              ))}
            </svg>
            <figcaption className="font-ui absolute bottom-0 left-0 bg-roadsign px-3 py-1.5 text-[11px] text-white">
              Route map placeholder · TODO: interactive map
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
