import { initLocale } from '@/lib/i18n/server';
import { localizeMetadata } from '@/lib/i18n/metadata';
import { lhref, t, tf, tp } from '@/lib/i18n/t';
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { site } from "@/config/site";
import { tripTypes } from "@/data/taxonomy";
import { imgUrl } from "@/lib/media";
import { Price } from "@/lib/currency";
import {
  getExperiences,
  getFaqs,
  getRegion,
  getStays,
  getTrip,
  regionNameFor,
  roadTrips,
} from "@/lib/queries";
import { ArticleHero } from "@/components/sections/ArticleHero";
import { Gallery } from "@/components/sections/Gallery";
import { Carousel } from "@/components/ui/Carousel";
import { TripCard } from "@/components/sections/TripCard";
import { toCardTrip } from "@/lib/cards";
import { SplitWords } from "@/components/motion/SplitWords";
import { StickyTripBar } from "@/components/trip/StickyTripBar";
import { TripFlavour, TripHighlights, TripOverview, TripRoute } from "@/components/trip/TripSections";
import { Itinerary } from "@/components/trip/Itinerary";
import { PlanTabs, type PlanTab } from "@/components/trip/PlanTabs";
import { CustomiseBlock } from "@/components/trip/CustomiseBlock";
import { JsonLd } from "@/components/seo/JsonLd";

export function generateStaticParams() {
  return roadTrips.map((t) => ({ slug: t.slug }));
}

async function generateMetadataEn({ params }: PageProps<"/[locale]/road-trips/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const trip = getTrip(slug);
  if (!trip) return {};
  const title = trip.seo?.title ?? `${trip.title}: ${trip.days}-day ${tripTypes[trip.type].label.toLowerCase()} road trip`;
  const description = trip.seo?.description ?? trip.lede;
  return {
    title,
    description,
    alternates: { canonical: `/road-trips/${trip.slug}` },
    openGraph: { title, description, images: [{ url: imgUrl(trip.heroImage, 1200), width: 1200, alt: trip.heroImage.alt }] },
  };
}

export async function generateMetadata(props: PageProps<"/[locale]/road-trips/[slug]">): Promise<Metadata> {
  return localizeMetadata(await generateMetadataEn(props), ((await props.params) as { locale?: string }).locale);
}

const SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "highlights", label: "Highlights" },
  { id: "route", label: "Route" },
  { id: "itinerary", label: "Day by day" },
  { id: "plan", label: "Plan your trip" },
];

export default async function RoadTripPage({ params }: PageProps<"/[locale]/road-trips/[slug]">) {
  await initLocale(params);
  const { slug } = await params;
  const trip = getTrip(slug);
  if (!trip) notFound();

  const regionsOf = trip.regionSlugs.map(getRegion).filter((r) => !!r);
  const regionNames = regionsOf.map((r) => r.name);
  const stays = getStays(trip.stayIds);
  const experiences = getExperiences(trip.experienceIds);
  const faqs = getFaqs(trip.faqIds);
  const related = roadTrips
    .filter((t) => t.slug !== trip.slug)
    .sort((a, b) => {
      const score = (t: typeof a) => (t.regionSlugs.some((r) => trip.regionSlugs.includes(r)) ? 2 : 0) + (t.type === trip.type ? 1 : 0);
      return score(b) - score(a);
    })
    .slice(0, 6);
  const gallery = trip.gallery.length ? trip.gallery : [trip.heroImage];

  const tabs: PlanTab[] = [
    {
      id: "included",
      label: "What's included",
      items: [
        {
          id: "price",
          title: "Trip price",
          content: (
            <>
              <p>
                {t("From ")}<Price eur={tp(trip.fromPrice)} className="font-medium" /> {t("per person, based on two sharing and a compact car. Every trip is tailor-made, so your quote will reflect your dates, stays and car.")}</p>
            </>
          ),
        },
        { id: "inc", title: "Price includes", content: <ul>{trip.included.map((x) => <li key={x}>{tp(x)}</li>)}</ul> },
        { id: "exc", title: "Price excludes", content: <ul>{trip.excluded.map((x) => <li key={x}>{tp(x)}</li>)}</ul> },
        {
          id: "terms",
          title: "Payment terms",
          content: (
            <p>
              {t("A deposit confirms your booking and the balance is due some weeks before departure; the exact amounts are in your proposal. Full details are in our")}{" "}
              <a href={lhref("/terms")}>{t("terms & conditions")}</a>.
            </p>
          ),
        },
      ],
    },
    {
      id: "stays",
      label: "Stays",
      items: stays.map((s) => ({
        id: s.slug,
        title: s.name,
        content: (
          <div className="grid gap-5 sm:grid-cols-[45%_1fr]">
            <span className="relative block aspect-[3/2] overflow-hidden">
              <Image src={imgUrl(s.image, 700)} alt={tp(s.image.alt)} fill sizes="(min-width:1024px) 20vw, 45vw" className="object-cover" />
            </span>
            <div>
              <p className="font-ui mb-2 text-[11.5px] opacity-70">
                {tp(s.style)} · {tp(getRegion(s.regionSlug)?.name)}
              </p>
              <p>{tp(s.blurb)}</p>
              <p className="font-ui mt-3 text-[10.5px] opacity-60">{t("Placeholder name until partner agreements are signed")}</p>
            </div>
          </div>
        ),
      })),
    },
    {
      id: "experiences",
      label: "Experiences",
      items: experiences.map((e) => ({
        id: e.slug,
        title: e.name,
        content: (
          <>
            <p className="font-ui mb-2 text-[11.5px] opacity-70">
              {tp(e.kind)} · {tp(e.duration)}
            </p>
            <p>{tp(e.blurb)}</p>
          </>
        ),
      })),
    },
    {
      id: "dates",
      label: "Dates & prices",
      items: trip.seasons.map((s, i) => ({
        id: `season-${i}`,
        title: s.label,
        content: (
          <>
            <p className="font-ui mb-2 text-[11.5px] opacity-70">{tp(s.window)}</p>
            <p>
              {t("From ")}<Price eur={tp(s.pricePerPerson)} className="font-medium" /> {t("per person. Prices are guides; you'll get a tailor-made quote for your exact dates. Depart any day that suits you.")}</p>
          </>
        ),
      })),
    },
    {
      id: "faq",
      label: "FAQ",
      items: faqs.map((f) => ({
        id: f.id,
        title: f.question,
        content: (
          <>
            {f.answer.map((p, i) => (
              <p key={i}>{tp(p)}</p>
            ))}
          </>
        ),
      })),
    },
  ].filter((t) => t.items.length > 0);

  return (
    <div className="bg-charcoal text-cream">
      <JsonLd
        data={tp({
          "@context": "https://schema.org",
          "@type": "TouristTrip",
          name: trip.title,
          description: trip.lede,
          touristType: tripTypes[trip.type].label,
          itinerary: {
            "@type": "ItemList",
            itemListElement: trip.itinerary.map((d, i) => ({ "@type": "ListItem", position: i + 1, name: `Day ${d.day}: ${d.title}` })),
          },
          offers: { "@type": "Offer", price: trip.fromPrice, priceCurrency: "EUR", url: `${site.url}/road-trips/${trip.slug}` },
          provider: { "@type": "TravelAgency", name: site.name, url: site.url },
        })}
      />
      <ArticleHero
        image={trip.heroImage}
        lines={tp([trip.title])}
        eyebrow={regionNames.map((n) => tp(n)).join(" · ")}
        pin
        crumbs={tp([{ label: tripTypes[trip.type].label, href: tripTypes[trip.type].href }, { label: trip.shortTitle }])}
      />

      <section id="overview" className="scroll-mt-[var(--header-h)] px-gutter pb-[var(--spacing-sec)]">
        <TripOverview trip={tp(trip)} regionNames={tp(regionNames)} />
        <TripFlavour trip={tp(trip)} />
      </section>

      <Gallery images={tp(gallery)} label={tf("{0} photo gallery", trip.shortTitle)} />
      <TripHighlights trip={tp(trip)} images={tp([gallery[1 % gallery.length], gallery[2 % gallery.length]])} />
      <TripRoute trip={tp(trip)} />
      <Itinerary days={tp(trip.itinerary)} stays={tp(stays)} experiences={tp(experiences)} tripSlug={tp(trip.slug)} />
      <PlanTabs tabs={tp(tabs)} />
      <CustomiseBlock tripTitle={tp(trip.title)} />

      <section className="bg-cream pb-[var(--spacing-sec)] text-charcoal">
        <div className="mx-gutter border-t hairline-light pt-[var(--spacing-sec)] text-center">
          <SplitWords as="h2" text={t("More loops nearby")} className="font-display text-3xl" />
        </div>
        <Carousel label={t("Related road trips")} className="mt-[var(--spacing-sec-xl)]">
          {related.map((t) => (
            <TripCard key={t.slug} trip={tp(toCardTrip(t))} regionName={tp(regionNameFor(t))} />
          ))}
        </Carousel>
      </section>

      <StickyTripBar sections={tp(SECTIONS)} tripSlug={tp(trip.slug)} tripTitle={tp(trip.title)} />
    </div>
  );
}
