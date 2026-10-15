import { photo } from "@/lib/media";
import { homeData } from "@/lib/home-data";
import { Marquee } from "@/components/motion/Marquee";
import { MissionIntro } from "@/components/sections/MissionIntro";
import { RoundaboutSelector } from "@/components/sections/RoundaboutSelector";
import { FullWidthCta } from "@/components/sections/FullWidthCta";
import { RegionsShowcase } from "@/components/sections/RegionsShowcase";
import { SectionIntro } from "@/components/sections/SectionIntro";
import { LinkRows } from "@/components/sections/LinkRows";
import { HeroRiviera } from "@/components/concepts/Heroes";
import { PostcardReview } from "@/components/concepts/Pieces";
import { StackedTrips } from "@/components/concepts/TripShowcases";

export default function Riviera() {
  const d = homeData();
  const r = d.reviews[0];
  return (
    <div data-concept="riviera">
      <HeroRiviera image={d.heroImage} focus={d.hero.image?.focus} />

      <section aria-label="Rond-Point in numbers" className="bg-sunflower py-4 text-charcoal">
        <Marquee
          className="font-ui text-base"
          items={[...d.stats.map((s) => `${s.value} ${s.label}`), "Bons baisers de la route"]}
        />
      </section>

      <MissionIntro
        eyebrow="Our mission"
        statement="The best of France lives between the dots on the map. We design loops that take the long way round, through vineyards, villages, coastlines and mountain passes."
        images={[photo(["theme:cafe-terrace"], 1), photo(["region:cote-d-azur"], 1)]}
      />

      <StackedTrips trips={d.cards.slice(0, 6)} heading={["Postcards from", "the road"]} />

      <RoundaboutSelector exits={d.exits} featured={d.featuredMini} />

      <FullWidthCta
        image={photo(["theme:mimosa", "region:cote-d-azur"])}
        heading="When to go"
        text="Mimosa in February, lavender in July, the harvest in September. Indicative dates, verified yearly."
        cta="View the calendar"
        href="/when-to-go"
      />

      <RegionsShowcase regions={d.regions} />

      {r && <PostcardReview quote={r.body[0]} name={`${r.name}, ${r.country}`} trip={r.tripName} image={r.image} />}

      <section className="bg-cream pb-[var(--spacing-sec)] text-charcoal">
        <SectionIntro lines={["The", "journal"]} size="4xl" text={<p>Dispatches from the passenger seat.</p>} className="pb-[var(--spacing-sec-xl)]" />
        <LinkRows items={d.posts.map((p) => ({ href: `/journal/${p.slug}`, title: p.title }))} />
      </section>
    </div>
  );
}
