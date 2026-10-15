import type { Metadata } from "next";
import { calendarMoments, getRegion, getTrip, regions, toReviews } from "@/lib/queries";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SectionIntro } from "@/components/sections/SectionIntro";
import { CalendarListing, type MomentLite } from "@/components/sections/CalendarListing";
import { ReviewsSlider } from "@/components/sections/ReviewsSlider";

export const metadata: Metadata = {
  title: "When to go: France month by month",
  description:
    "Lavender in Provence, the grape harvest, Alsace Christmas markets and more: France's best seasonal moments by month and region, with road trips to match.",
  alternates: { canonical: "/when-to-go" },
};

export default function WhenToGoPage() {
  const moments: MomentLite[] = [...calendarMoments]
    .sort((a, b) => a.month - b.month)
    .map((m) => ({
      id: m.id,
      title: m.title,
      month: m.month,
      window: m.window,
      regionSlug: m.regionSlug,
      regionName: getRegion(m.regionSlug)?.shortName ?? "France",
      theme: m.theme,
      description: m.description,
      image: m.image,
      trips: m.tripSlugs.map((s) => getTrip(s)).filter((t) => !!t).map((t) => ({ slug: t.slug, title: t.shortTitle })),
    }));

  return (
    <>
      <div className="bg-charcoal pt-[var(--header-h)] pb-[var(--spacing-sec)] text-cream">
        <Breadcrumbs items={[{ label: "When to go" }]} />
        <div className="pt-[var(--spacing-sec)]">
          <SectionIntro
            as="h1"
            size="4xl"
            bottomAlign
            eyebrow="France, month by month"
            lines={["When", "to go"]}
            text={
              <>
                <p>France has a season for everything. Here&apos;s when each region hits its stride, and the road trips that catch it at its best.</p>
                <p className="font-ui mt-5 border-l-2 border-sunflower pl-3 text-[11.5px] text-sunflower">
                  All dates are indicative and shift every year. Verify before you plan around them.
                </p>
              </>
            }
          />
        </div>
        <div className="mt-[var(--spacing-sec-xl)]">
          <CalendarListing moments={moments} regions={regions.map((r) => ({ value: r.slug, label: r.name }))} />
        </div>
      </div>
      <ReviewsSlider reviews={toReviews()} />
    </>
  );
}
