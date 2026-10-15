import { photo } from "@/lib/media";
import { homeData } from "@/lib/home-data";
import { ButtonLink } from "@/components/ui/Button";
import { Carousel } from "@/components/ui/Carousel";
import { Marquee } from "@/components/motion/Marquee";
import { MissionIntro } from "@/components/sections/MissionIntro";
import { RoundaboutSelector } from "@/components/sections/RoundaboutSelector";
import { SectionIntro } from "@/components/sections/SectionIntro";
import { TripCard } from "@/components/sections/TripCard";
import { FullWidthCta } from "@/components/sections/FullWidthCta";
import { WhyUs } from "@/components/sections/WhyUs";
import { LinkRows } from "@/components/sections/LinkRows";
import { RegionsShowcase } from "@/components/sections/RegionsShowcase";
import { ReviewsSlider } from "@/components/sections/ReviewsSlider";
import { HeroGolden } from "@/components/concepts/Heroes";
import { CountUpStats, HowItWorks } from "@/components/concepts/Pieces";

const STEPS = [
  { eyebrow: "1st exit", title: "Choose your exit", text: "Pick a region, a pace and how many days. Or keep circling and tell us what you love." },
  { eyebrow: "2nd exit", title: "We draw the loop", text: "Your specialist designs the route, books the stays and the car, and sends a first draft within [24 hours]." },
  { eyebrow: "3rd exit", title: "The route book arrives", text: "A printed book for the glovebox and an offline app: every bend, detour and lunch stop." },
  { eyebrow: "4th exit", title: "Bonne route", text: "One specialist on WhatsApp from the first roundabout to the last. You just drive." },
];

export default function GoldenHour() {
  const d = homeData();
  return (
    <div data-concept="golden">
      <HeroGolden image={d.heroImage} focus={d.hero.image?.focus} trip={d.heroTrip} />

      <section aria-label="Bonne route" className="bg-sunflower py-4 text-charcoal">
        <Marquee
          className="font-cond text-lg"
          duration={50}
          items={[
            "Prenez le chemin des écoliers",
            "Take the long way round",
            "On ne se presse pas",
            "One more village, why not",
            "Bonne route",
            "Lunch lasts until four",
          ]}
        />
      </section>

      <MissionIntro
        eyebrow="Our mission"
        statement="We believe the best of France lives between the dots on the map. So we design road trips that take the long way round, and bring you back to where you started, changed."
        images={[photo(["theme:cafe-terrace"]), photo(["theme:road-winding"], 1)]}
      />
      <section className="bg-charcoal px-gutter pb-[var(--spacing-sec)]">
        <CountUpStats stats={d.stats} />
      </section>

      <RoundaboutSelector exits={d.exits} featured={d.featuredMini} />

      <section className="bg-cream pb-[var(--spacing-sec)] text-charcoal">
        <SectionIntro
          eyebrow="Explore our road trips"
          lines={["Featured", "road trips"]}
          text={<p>Twelve loops, a thousand ways to get lost on purpose. Hover a card to hit the road.</p>}
          actions={
            <ButtonLink href="/self-drive" variant="charcoal" size="sm">
              All road trips
            </ButtonLink>
          }
        />
        <Carousel label="Featured road trips" className="mt-[var(--spacing-sec-xl)]">
          {d.cards.map((t, i) => (
            <TripCard key={t.slug} trip={t} regionName={t.regionName} priority={i < 2} />
          ))}
        </Carousel>
      </section>

      <HowItWorks steps={STEPS} />

      <FullWidthCta
        image={photo(["theme:sunflowers"])}
        heading="When to go"
        text="Lavender peaks in early summer, the grapes come in around September and Alsace glows in December. Time it right and France does half the work."
        cta="View the calendar"
        href="/when-to-go"
      />

      <WhyUs
        eyebrow="Why Rond-Point"
        statement="Born from a love of the back roads and a desire to do road trips better."
        body="We drive every route ourselves, then hand you the keys with a route book worth keeping, stays we'd book for our own parents and one specialist on WhatsApp the whole way."
        images={[photo(["theme:car-countryside"]), photo(["theme:picnic"])]}
        cta="Find out more"
        href="/why-rond-point"
      />

      <section className="bg-cream py-[var(--spacing-sec)] text-charcoal">
        <SectionIntro lines={["The", "journal"]} size="4xl" text={<p>Dispatches from the passenger seat.</p>} className="pb-[var(--spacing-sec-xl)]" />
        <LinkRows items={d.posts.map((p) => ({ href: `/journal/${p.slug}`, title: p.title }))} />
      </section>

      <RegionsShowcase regions={d.regions} />
      <ReviewsSlider reviews={d.reviews} />
    </div>
  );
}
