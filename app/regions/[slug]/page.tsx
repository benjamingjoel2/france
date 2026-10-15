import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Month } from "@/data/types";
import { monthShort, monthNames, stayStyles } from "@/data/taxonomy";
import { imgUrl } from "@/lib/media";
import { brandHex } from "@/lib/colours";
import { cn } from "@/lib/cn";
import {
  calendarMoments,
  getFaqs,
  getRegion,
  posts,
  regionNameFor,
  regions,
  stays,
  tripsInRegion,
} from "@/lib/queries";
import { ArticleHero } from "@/components/sections/ArticleHero";
import { Gallery } from "@/components/sections/Gallery";
import { TripCard } from "@/components/sections/TripCard";
import { toCardTrip } from "@/lib/cards";
import { LinkRows } from "@/components/sections/LinkRows";
import { FullWidthCta } from "@/components/sections/FullWidthCta";
import { Accordion } from "@/components/ui/Accordion";
import { ButtonLink } from "@/components/ui/Button";
import { PlusHeading } from "@/components/ui/PlusHeading";
import { SplitWords } from "@/components/motion/SplitWords";
import { Reveal } from "@/components/motion/Reveal";
import { ImageReveal } from "@/components/motion/ImageReveal";
import { JsonLd } from "@/components/seo/JsonLd";

export function generateStaticParams() {
  return regions.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: PageProps<"/regions/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const r = getRegion(slug);
  if (!r) return {};
  const title = r.seo?.title ?? `Road trips in ${r.name}`;
  const description = r.seo?.description ?? r.lede;
  return {
    title,
    description,
    alternates: { canonical: `/regions/${r.slug}` },
    openGraph: { title, description, images: [{ url: imgUrl(r.heroImage, 1200), width: 1200, alt: r.heroImage.alt }] },
  };
}

export default async function RegionPage({ params }: PageProps<"/regions/[slug]">) {
  const { slug } = await params;
  const region = getRegion(slug);
  if (!region) notFound();

  const trips = tripsInRegion(region.slug);
  const regionStays = stays.filter((s) => s.regionSlug === region.slug);
  const moments = calendarMoments.filter((m) => m.regionSlug === region.slug);
  const faqs = getFaqs(region.faqIds);
  const relatedPosts = posts.filter((p) =>
    p.blocks.some((b) => b.type === "tripLink" && trips.some((t) => t.slug === b.slug)),
  );
  const colour = brandHex[region.colour];

  return (
    <div className="bg-charcoal text-cream">
      <ArticleHero image={region.heroImage} lines={["Road trips in", region.name]} align="left" crumbs={[{ label: region.name }]} />

      {/* Intro */}
      <section className="relative z-10 px-gutter pb-[var(--spacing-sec)]">
        <div className="lg:ml-[33.33%] lg:w-[66%] xl:w-[60%]">
          <SplitWords as="p" text={region.lede} className="font-cond text-xl" stagger={0.015} />
          <Reveal>
            <div className="richtext richtext-two-col mt-[var(--spacing-sec-md)]">
              {region.overview.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Best time + signature roads */}
      <section className="px-gutter pb-[var(--spacing-sec)]">
        <div className="grid gap-[var(--spacing-sec-lg)] lg:grid-cols-2 lg:gap-[var(--spacing-grid-gap)]">
          <div>
            <PlusHeading className="border-t hairline-dark pt-5">Best time to go</PlusHeading>
            <ol className="grid grid-cols-6 gap-1 sm:grid-cols-12" aria-label="Months">
              {monthShort.map((m, i) => {
                const n = (i + 1) as Month;
                const best = region.bestMonths.includes(n);
                const quiet = region.quietMonths.includes(n);
                return (
                  <li
                    key={m}
                    title={monthNames[i]}
                    className={cn("font-ui flex h-12 items-center justify-center text-[11px]", best ? "text-charcoal" : quiet ? "bg-charcoal-5 text-ash" : "bg-charcoal-10 text-mist")}
                    style={best ? { background: colour } : undefined}
                  >
                    {m}
                    <span className="sr-only">{best ? " (best)" : quiet ? " (quiet)" : ""}</span>
                  </li>
                );
              })}
            </ol>
            <p className="font-ui mt-3 flex flex-wrap gap-4 text-[11px] text-mist">
              <span className="flex items-center gap-1.5">
                <span className="size-3" style={{ background: colour }} /> Best
              </span>
              <span className="flex items-center gap-1.5">
                <span className="size-3 bg-charcoal-10" /> Good
              </span>
              <span className="flex items-center gap-1.5">
                <span className="size-3 bg-charcoal-5" /> Quiet
              </span>
            </p>
            <p className="mt-6 max-w-[34em]">{region.bestTimeSummary}</p>
            {moments.length > 0 && (
              <ul className="mt-6 border-b hairline-dark">
                {moments.map((m) => (
                  <li key={m.id} className="font-ui flex justify-between gap-4 border-t hairline-dark py-3 font-light">
                    <span>{m.title}</span>
                    <span className="shrink-0 text-mist normal-case">{m.window} · verify yearly</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div>
            <PlusHeading className="border-t hairline-dark pt-5">Signature roads</PlusHeading>
            <ul className="border-b hairline-dark">
              {region.signatureRoads.map((r) => (
                <li key={r.name} className="border-t hairline-dark py-5 first:border-t-0 first:pt-0">
                  <p className="flex items-baseline justify-between gap-4">
                    <span className="font-cond text-lg">{r.name}</span>
                    <span className="font-ui shrink-0 text-mist">~{r.km} km</span>
                  </p>
                  <p className="mt-2 text-mist">{r.note}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Food & wine: split block */}
      <section className="bg-cream px-gutter py-[var(--spacing-sec)] text-charcoal">
        <div className="grid items-center gap-[var(--spacing-sec-lg)] lg:grid-cols-2">
          <ImageReveal className="aspect-square lg:mr-[10%]">
            <Image src={imgUrl(region.foodAndWine.image, 1100)} alt={region.foodAndWine.image.alt} fill sizes="(min-width:1024px) 45vw, 100vw" className="object-cover" />
          </ImageReveal>
          <div>
            <PlusHeading below>Food &amp; wine</PlusHeading>
            <SplitWords as="h2" text={region.foodAndWine.title} className="font-cond text-2xl" />
            <Reveal>
              <div className="richtext mt-6 max-w-[34em]">
                {region.foodAndWine.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Trips */}
      <section className="px-gutter py-[var(--spacing-sec)]">
        <div className="mb-[var(--spacing-sec-xl)] flex flex-col gap-6 border-b hairline-dark pb-[var(--spacing-sec-lg)] md:flex-row md:items-end md:justify-between">
          <SplitWords as="h2" lines={["Road trips in", region.shortName]} className="font-display text-3xl" />
          <ButtonLink href={`/plan-my-road-trip?region=${region.slug}`} variant="cream">
            Plan a {region.shortName} trip
          </ButtonLink>
        </div>
        {trips.length ? (
          <ul className="grid grid-cols-1 gap-x-[var(--spacing-grid-gap)] gap-y-[clamp(28px,6vw,86px)] pb-[clamp(0px,3.3vw,60px)] sm:grid-cols-2 lg:grid-cols-3">
            {trips.map((t, i) => (
              <li key={t.slug} className={cn(i % 3 === 1 && "lg:translate-y-[clamp(26px,3.26vw,60px)]")}>
                <TripCard trip={toCardTrip(t)} regionName={regionNameFor(t)} tone="dark" />
              </li>
            ))}
          </ul>
        ) : (
          <p className="max-w-[34em] text-mist">
            No set loop here yet, which simply means yours will be the first. Tell us what you love and your specialist will
            draw the route.
          </p>
        )}
      </section>

      <Gallery images={region.gallery.length ? region.gallery : [region.heroImage]} label={`${region.name} gallery`} wide />

      {/* Stays */}
      {regionStays.length > 0 && (
        <section className="bg-cream px-gutter pb-[var(--spacing-sec)] text-charcoal">
          <div className="border-t hairline-light pt-[var(--spacing-sec)]">
            <SplitWords as="h2" lines={["Stays in", region.shortName]} className="font-display text-3xl" />
            <ul className="mt-[var(--spacing-sec-xl)] grid gap-[var(--spacing-grid-gap)] gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {regionStays.map((s) => (
                <Reveal as="li" key={s.slug}>
                  <span className="relative block aspect-[3/2] overflow-hidden bg-charcoal-10">
                    <Image src={imgUrl(s.image, 800)} alt={s.image.alt} fill sizes="(min-width:1024px) 31vw, 48vw" className="object-cover" />
                  </span>
                  <p className="font-ui mt-4 flex items-center gap-2 text-[11.5px] opacity-70">
                    <span className="size-2.5 bg-charcoal" /> {stayStyles[s.style]}
                  </p>
                  <h3 className="font-cond mt-2 text-lg">{s.name}</h3>
                  <p className="mt-2 text-[14px] opacity-80">{s.blurb}</p>
                  <p className="font-ui mt-2 text-[10px] opacity-50">Placeholder name</p>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* FAQ + journal */}
      {(faqs.length > 0 || relatedPosts.length > 0) && (
        <section className="bg-cream py-[var(--spacing-sec)] text-charcoal">
          {faqs.length > 0 && (
            <div className="grid gap-[var(--spacing-sec-lg)] px-gutter lg:grid-cols-12">
              <div className="lg:col-span-4">
                <SplitWords as="h2" lines={["Good to", "know"]} className="font-display text-3xl" />
              </div>
              <div className="lg:col-span-7 lg:col-start-6">
                <Accordion
                  tone="light"
                  items={faqs.map((f) => ({
                    id: f.id,
                    title: f.question,
                    content: f.answer.map((p, i) => <p key={i}>{p}</p>),
                  }))}
                />
              </div>
            </div>
          )}
          {relatedPosts.length > 0 && (
            <div className="mt-[var(--spacing-sec)]">
              <h2 className="font-display px-gutter pb-[var(--spacing-sec-xl)] text-center text-3xl">From the journal</h2>
              <LinkRows items={relatedPosts.map((p) => ({ href: `/journal/${p.slug}`, title: p.title }))} />
            </div>
          )}
        </section>
      )}

      <FullWidthCta
        image={region.gallery[1] ?? region.heroImage}
        heading={`Take the ${region.shortName} exit`}
        text={`Tell us when you'd like to go and how you like to travel. A specialist will draw a ${region.shortName} loop around you, with the long way round built in.`}
        cta="Plan my road trip"
        href={`/plan-my-road-trip?region=${region.slug}`}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "TouristDestination",
          name: region.name,
          description: region.lede,
          containedInPlace: { "@type": "Country", name: "France" },
        }}
      />
    </div>
  );
}
