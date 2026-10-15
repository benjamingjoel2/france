import type { Metadata } from "next";
import { photo } from "@/lib/media";
import { people } from "@/lib/queries";
import { toPersonLite } from "@/lib/people";
import { ArticleHero } from "@/components/sections/ArticleHero";
import { PeopleGrid } from "@/components/people/People";
import { StatsTicker } from "@/components/sections/StatsTicker";
import { FullWidthCta } from "@/components/sections/FullWidthCta";
import { SplitWords } from "@/components/motion/SplitWords";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Our specialists & local hosts",
  description:
    "Meet the Rond-Point specialists who design your road trip and stay on WhatsApp the whole way, and the local hosts who know which back road leads to lunch.",
  alternates: { canonical: "/our-specialists" },
};

export default function SpecialistsPage() {
  const specialists = people.filter((p) => p.kind === "specialist").map(toPersonLite);
  const hosts = people.filter((p) => p.kind === "host").map(toPersonLite);

  return (
    <div className="bg-charcoal text-cream">
      <ArticleHero
        image={photo(["people:2", "theme:market"])}
        lines={["Meet your", "specialists"]}
        align="left"
        crumbs={[{ label: "Our specialists" }]}
      />
      <section className="relative z-10 px-gutter pb-[var(--spacing-sec)]">
        <div className="lg:ml-[33.33%] lg:w-[66%] xl:w-[60%]">
          <SplitWords
            as="p"
            text="One person designs your loop, books every stay and answers on WhatsApp from the first roundabout to the last. On the ground, our local hosts know which back road leads to lunch."
            className="font-cond text-xl"
            stagger={0.015}
          />
          <Reveal>
            <div className="richtext richtext-two-col mt-[var(--spacing-sec-md)]">
              <p>
                Our specialists have driven every road they recommend, usually twice and once in the rain. They speak your
                language and the local one, and they&apos;ll happily talk you out of a fourth château in a day.
              </p>
              <p>
                Local hosts are our friends in each region: winemakers&apos; neighbours, market regulars, people who know when
                the lavender is actually out. Some will meet you, all of them shape your route book. Names and photos here are
                placeholders until our team page is final.
              </p>
            </div>
          </Reveal>
        </div>
        <hr className="mt-[var(--spacing-sec)] hairline-dark" />
      </section>

      <section aria-labelledby="specialists-h" className="px-gutter pb-[var(--spacing-sec)]">
        <h2 id="specialists-h" className="font-display mb-[var(--spacing-sec-lg)] text-3xl">
          Specialists
        </h2>
        <PeopleGrid people={specialists} />
      </section>

      {hosts.length > 0 && (
        <section aria-labelledby="hosts-h" className="px-gutter pb-[var(--spacing-sec)]">
          <h2 id="hosts-h" className="font-display mb-[var(--spacing-sec-lg)] border-t hairline-dark pt-[var(--spacing-sec)] text-3xl">
            Local hosts
          </h2>
          <PeopleGrid people={hosts} />
        </section>
      )}

      <StatsTicker />
      <FullWidthCta
        image={photo(["hero:calendar", "theme:grape-harvest"], 1)}
        heading="When to go"
        text="Your specialist will steer you to the right month, but here's a head start: France's best seasonal moments, region by region."
        cta="View the calendar"
        href="/when-to-go"
      />
    </div>
  );
}
