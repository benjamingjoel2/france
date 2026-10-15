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
  getPeople,
  getRegion,
  getStays,
  getTrip,
  regionNameFor,
  roadTrips,
  testimonials,
  toReviews,
} from "@/lib/queries";
import { toPersonLite } from "@/lib/people";
import { ArticleHero } from "@/components/sections/ArticleHero";
import { Gallery } from "@/components/sections/Gallery";
import { Carousel } from "@/components/ui/Carousel";
import { TripCard } from "@/components/sections/TripCard";
import { toCardTrip } from "@/lib/cards";
import { ReviewsSlider } from "@/components/sections/ReviewsSlider";
import { SplitWords } from "@/components/motion/SplitWords";
import { StickyTripBar } from "@/components/trip/StickyTripBar";
import { TripFlavour, TripHighlights, TripOverview, TripRoute } from "@/components/trip/TripSections";
import { Itinerary } from "@/components/trip/Itinerary";
import { PlanTabs, type PlanTab } from "@/components/trip/PlanTabs";
import { CustomiseBlock } from "@/components/trip/CustomiseBlock";
import { PeopleSplit } from "@/components/people/People";
import { JsonLd } from "@/components/seo/JsonLd";

export function generateStaticParams() {
  return roadTrips.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: PageProps<"/road-trips/[slug]">): Promise<Metadata> {
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

const SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "highlights", label: "Highlights" },
  { id: "route", label: "Route" },
  { id: "itinerary", label: "Day by day" },
  { id: "plan", label: "Plan your trip" },
  { id: "specialist", label: "Your specialist" },
  { id: "reviews", label: "Reviews" },
];

export default async function RoadTripPage({ params }: PageProps<"/road-trips/[slug]">) {
  const { slug } = await params;
  const trip = getTrip(slug);
  if (!trip) notFound();

  const regionsOf = trip.regionSlugs.map(getRegion).filter((r) => !!r);
  const regionNames = regionsOf.map((r) => r.name);
  const stays = getStays(trip.stayIds);
  const experiences = getExperiences(trip.experienceIds);
  const team = getPeople([trip.specialistId, ...trip.hostIds]).map(toPersonLite);
  const faqs = getFaqs(trip.faqIds);
  const reviews = testimonials.filter((t) => t.tripSlug === trip.slug);
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
                From <Price eur={trip.fromPrice} className="font-medium" /> per person, based on two sharing and a compact
                car. Every trip is tailor-made, so your quote will reflect your dates, stays and car.
              </p>
            </>
          ),
        },
        { id: "inc", title: "Price includes", content: <ul>{trip.included.map((x) => <li key={x}>{x}</li>)}</ul> },
        { id: "exc", title: "Price excludes", content: <ul>{trip.excluded.map((x) => <li key={x}>{x}</li>)}</ul> },
        {
          id: "terms",
          title: "Payment terms",
          content: (
            <p>
              [25%] deposit to confirm, balance due [8] weeks before departure. Placeholder terms: see our{" "}
              <a href="/terms">terms &amp; conditions</a>.
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
              <Image src={imgUrl(s.image, 700)} alt={s.image.alt} fill sizes="(min-width:1024px) 20vw, 45vw" className="object-cover" />
            </span>
            <div>
              <p className="font-ui mb-2 text-[11.5px] opacity-70">
                {s.style} · {getRegion(s.regionSlug)?.name}
              </p>
              <p>{s.blurb}</p>
              <p className="font-ui mt-3 text-[10.5px] opacity-60">Placeholder name until partner agreements are signed</p>
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
              {e.kind} · {e.duration}
            </p>
            <p>{e.blurb}</p>
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
            <p className="font-ui mb-2 text-[11.5px] opacity-70">{s.window}</p>
            <p>
              From <Price eur={s.pricePerPerson} className="font-medium" /> per person. Prices are guides; you&apos;ll get a
              tailor-made quote for your exact dates. Depart any day that suits you.
            </p>
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
              <p key={i}>{p}</p>
            ))}
          </>
        ),
      })),
    },
  ].filter((t) => t.items.length > 0);

  return (
    <div className="bg-charcoal text-cream">
      <JsonLd
        data={{
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
        }}
      />
      <ArticleHero
        image={trip.heroImage}
        lines={[trip.title]}
        eyebrow={regionNames.join(" · ")}
        pin
        crumbs={[{ label: tripTypes[trip.type].label, href: tripTypes[trip.type].href }, { label: trip.shortTitle }]}
      />

      <section id="overview" className="scroll-mt-[var(--header-h)] px-gutter pb-[var(--spacing-sec)]">
        <TripOverview trip={trip} regionNames={regionNames} />
        <TripFlavour trip={trip} />
      </section>

      <Gallery images={gallery} label={`${trip.shortTitle} photo gallery`} />
      <TripHighlights trip={trip} images={[gallery[1 % gallery.length], gallery[2 % gallery.length]]} />
      <TripRoute trip={trip} />
      <Itinerary days={trip.itinerary} stays={stays} experiences={experiences} tripSlug={trip.slug} />
      <PlanTabs tabs={tabs} />
      <CustomiseBlock tripTitle={trip.title} />
      {team.length > 0 && (
        <PeopleSplit
          heading={["Your", "specialist"]}
          text="One person designs your loop, books every stay and answers on WhatsApp from the first roundabout to the last, with local hosts on the ground for the insider bits."
          people={team}
        />
      )}

      <div id="reviews" className="scroll-mt-[var(--header-h)]">
        <ReviewsSlider reviews={toReviews(reviews.length ? reviews : testimonials)} eyebrow={reviews.length ? "Reviews of this trip" : "Client reviews"} />
      </div>

      <section className="bg-cream pb-[var(--spacing-sec)] text-charcoal">
        <div className="mx-gutter border-t hairline-light pt-[var(--spacing-sec)] text-center">
          <SplitWords as="h2" text="More loops nearby" className="font-display text-3xl" />
        </div>
        <Carousel label="Related road trips" className="mt-[var(--spacing-sec-xl)]">
          {related.map((t) => (
            <TripCard key={t.slug} trip={toCardTrip(t)} regionName={regionNameFor(t)} />
          ))}
        </Carousel>
      </section>

      <StickyTripBar sections={SECTIONS} tripSlug={trip.slug} tripTitle={trip.title} />
    </div>
  );
}
