import type { Metadata } from "next";
import { site } from "@/config/site";
import { photo } from "@/lib/media";
import {
  featuredTrips,
  getTrip,
  regionNameFor,
  regions,
  roadTrips,
  sortedPosts,
  toMiniTrip,
  toRegionLite,
  toReviews,
  tripsInRegion,
} from "@/lib/queries";
import { ButtonLink } from "@/components/ui/Button";
import { Carousel } from "@/components/ui/Carousel";
import { HomeHero } from "@/components/sections/HomeHero";
import { MissionIntro } from "@/components/sections/MissionIntro";
import { StatsTicker } from "@/components/sections/StatsTicker";
import { RoundaboutSelector } from "@/components/sections/RoundaboutSelector";
import { SectionIntro } from "@/components/sections/SectionIntro";
import { TripCard } from "@/components/sections/TripCard";
import { toCardTrip } from "@/lib/cards";
import { FullWidthCta } from "@/components/sections/FullWidthCta";
import { WhyUs } from "@/components/sections/WhyUs";
import { LinkRows } from "@/components/sections/LinkRows";
import { RegionsShowcase } from "@/components/sections/RegionsShowcase";
import { ReviewsSlider } from "@/components/sections/ReviewsSlider";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: { absolute: `${site.name}: tailor-made road trips through France` },
  description: site.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const hero = site.featuredTrip;
  const heroTrip = getTrip(hero.slug);
  const exits = regions.map((r) => ({
    slug: r.slug,
    name: r.name,
    shortName: r.shortName,
    tagline: r.lede,
    bestTime: r.bestTimeSummary,
    trips: tripsInRegion(r.slug).map(toMiniTrip),
  }));
  const featured = featuredTrips();
  const ordered = [...featured, ...roadTrips.filter((t) => !t.featured)];

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "TravelAgency",
          name: site.name,
          slogan: site.tagline,
          description: site.description,
          url: site.url,
          areaServed: "France",
          telephone: site.contact.phone,
          email: site.contact.email,
        }}
      />

      {/* 1. Featured road trip hero */}
      <HomeHero
        image={hero.image ?? heroTrip?.heroImage ?? photo("hero:lavender")}
        focus={hero.image?.focus}
        eyebrow={hero.eyebrow}
        headline={hero.headline}
        cta={hero.cta}
        href={`/road-trips/${hero.slug}`}
      />

      {/* 2. Mission + stats strip */}
      <MissionIntro
        eyebrow="Our mission"
        statement="We believe the best of France lives between the dots on the map. So we design road trips that take the long way round, through vineyards, villages, coastlines and mountain passes, and bring you back to where you started, changed."
        images={[photo(["theme:cafe-terrace", "theme:market"]), photo(["theme:road-winding", "region:cote-d-azur"], 1)]}
      />
      <StatsTicker />

      {/* 3. Signature: roundabout selector */}
      <RoundaboutSelector exits={exits} featured={featured.map(toMiniTrip)} />

      {/* 4. Featured road trips */}
      <section className="bg-cream pb-[var(--spacing-sec)] text-charcoal">
        <SectionIntro
          eyebrow="Explore our road trips"
          lines={["Featured", "road trips"]}
          text={<p>Twelve loops, a thousand ways to get lost on purpose. Every one is tailor-made, so treat these as a very good first draft.</p>}
          actions={
            <>
              <ButtonLink href="/self-drive" variant="charcoal" size="sm">
                Self-drive
              </ButtonLink>
              <ButtonLink href="/drive-and-e-bike" variant="stroke-dark" size="sm">
                Drive &amp; e-bike
              </ButtonLink>
            </>
          }
        />
        <Carousel label="Featured road trips" className="mt-[var(--spacing-sec-xl)]">
          {ordered.map((t, i) => (
            <TripCard key={t.slug} trip={toCardTrip(t)} regionName={regionNameFor(t)} priority={i < 2} />
          ))}
        </Carousel>
      </section>

      {/* 5. When to go teaser */}
      <FullWidthCta
        image={photo(["hero:calendar", "theme:sunflowers"])}
        heading="When to go"
        text="Lavender peaks in early summer, the grapes come in around September and Alsace lights up in December. Time it right and France does half the work."
        cta="View the calendar"
        href="/when-to-go"
      />

      {/* 6. Why Rond-Point */}
      <WhyUs
        eyebrow="Why Rond-Point"
        statement="Rond-Point was born from a love of the back roads and a desire to do road trips better."
        body="We drive every route ourselves, then hand you the keys with a route book worth keeping, stays we'd book for our own parents and one specialist on WhatsApp from the first roundabout to the last. Real local knowledge in every kilometre."
        images={[photo(["hero:why", "theme:car-countryside"]), photo(["theme:map-roadtrip", "theme:picnic"])]}
        cta="Find out more"
        href="/why-rond-point"
      />

      {/* 7. Journal */}
      <section className="bg-cream py-[var(--spacing-sec)] text-charcoal">
        <SectionIntro
          lines={["The", "journal"]}
          size="4xl"
          text={<p>Dispatches from the passenger seat: routes, roundabout etiquette, long lunches and the occasional wrong turn that turned out right.</p>}
          actions={
            <ButtonLink href="/journal" variant="charcoal">
              View all posts
            </ButtonLink>
          }
          className="pb-[var(--spacing-sec-xl)]"
        />
        <LinkRows
          items={sortedPosts()
            .slice(0, 4)
            .map((p) => ({ href: `/journal/${p.slug}`, title: p.title }))}
        />
      </section>

      {/* 8. Regions */}
      <RegionsShowcase regions={regions.map(toRegionLite)} />

      {/* 9. Reviews */}
      <ReviewsSlider reviews={toReviews()} />
    </>
  );
}
