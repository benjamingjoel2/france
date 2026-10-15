import { photo } from "@/lib/media";
import { homeData } from "@/lib/home-data";
import { toPostLite } from "@/lib/posts";
import { RoundaboutSelector } from "@/components/sections/RoundaboutSelector";
import { RegionsShowcase } from "@/components/sections/RegionsShowcase";
import { ReviewsSlider } from "@/components/sections/ReviewsSlider";
import { PostCard } from "@/components/journal/PostCards";
import { PlusHeading } from "@/components/ui/PlusHeading";
import { SplitWords } from "@/components/motion/SplitWords";
import { Reveal } from "@/components/motion/Reveal";
import { HeroLavender } from "@/components/concepts/Heroes";
import { CountUpStats } from "@/components/concepts/Pieces";
import { MonthStrip, PinnedTrips } from "@/components/concepts/TripShowcases";

export default function LavenderDusk() {
  const d = homeData();
  return (
    <div data-concept="lavender">
      <HeroLavender image={d.heroImage} focus={d.hero.image?.focus} />

      <section className="bg-charcoal px-gutter py-[var(--spacing-sec)] text-cream">
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <PlusHeading below>Our mission</PlusHeading>
          </Reveal>
          <SplitWords
            as="h2"
            text="Every road in France meets at a rond-point. We just take the third exit, towards the village you've never heard of, and bring you home changed."
            className="font-cond text-2xl lg:col-span-8"
            stagger={0.02}
          />
        </div>
        <CountUpStats stats={d.stats} className="mt-[var(--spacing-sec-xl)]" />
      </section>

      <PinnedTrips trips={d.cards} heading={["Featured", "road trips"]} />

      <RoundaboutSelector exits={d.exits} featured={d.featuredMini} />

      <MonthStrip
        image={photo(["region:provence"], 1)}
        months={[
          { short: "Feb", title: "Mimosa on the Riviera" },
          { short: "Apr", title: "Loire gardens in bloom" },
          { short: "Jun", title: "Transhumance in Provence" },
          { short: "Jul", title: "Lavender in full bloom", highlight: true },
          { short: "Sep", title: "Grape harvest in Burgundy" },
          { short: "Dec", title: "Alsace Christmas markets" },
        ]}
      />

      <RegionsShowcase regions={d.regions} />

      <section className="bg-cream px-gutter py-[var(--spacing-sec)] text-charcoal">
        <SplitWords as="h2" lines={["The", "journal"]} className="font-display mb-[var(--spacing-sec-xl)] text-4xl" />
        <ul className="grid gap-x-[var(--spacing-grid-gap)] gap-y-12 md:grid-cols-2 lg:grid-cols-4">
          {d.posts.map((p) => (
            <li key={p.slug}>
              <PostCard post={toPostLite(p)} tone="light" sizes="(min-width:1024px) 24vw, 46vw" />
            </li>
          ))}
        </ul>
      </section>

      <ReviewsSlider reviews={d.reviews} />
    </div>
  );
}
