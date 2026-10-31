import { initLocale } from '@/lib/i18n/server';
import { localizeMetadata } from '@/lib/i18n/metadata';
import { t, tp } from '@/lib/i18n/t';
import type { Metadata } from "next";
import Link from '@/components/i18n/Link';
import { site } from "@/config/site";
import { regions, roadTrips } from "@/lib/queries";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SectionIntro } from "@/components/sections/SectionIntro";
import { Planner } from "@/components/planner/Planner";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return localizeMetadata({
  title: "Plan my road trip",
  description:
    "Five quick questions and a Rond-Point specialist will design your tailor-made road trip through France: route, stays, car and the long way round.",
  alternates: { canonical: "/plan-my-road-trip" },
}, (await params).locale);
}

export default async function PlanPage({ params }: { params: Promise<{ locale: string }> }) {
  await initLocale(params);
  return (
    <div className="bg-charcoal pt-[var(--header-h)] text-cream">
      <Breadcrumbs items={tp([{ label: "Plan my road trip" }])} />
      <div className="pt-[var(--spacing-sec)] pb-[var(--spacing-sec-xl)]">
        <SectionIntro
          as="h1"
          size="4xl"
          bottomAlign
          lines={tp(["Plan my", "road trip"])}
          text={
            <p>
              {t("Tell us when, where and how you like to travel. A specialist will reply within [24 hours] with a first draft of your loop. Prefer to talk?")}{" "}
              <Link href="/contact" className="link-wipe text-cream">
                {t("say hello")}</Link>
              .
            </p>
          }
        />
      </div>
      <div className="border-t hairline-dark px-gutter py-[var(--spacing-sec)]">
        <Planner
          exits={regions.map((r) => ({ slug: r.slug, shortName: r.shortName, name: r.name }))}
          trips={roadTrips.map((t) => ({ slug: t.slug, title: t.title, type: t.type, pace: t.pace, regionSlugs: t.regionSlugs }))}
        />
      </div>
      <p className="sr-only">{tp(site.tagline)}</p>
    </div>
  );
}
