import { initLocale } from '@/lib/i18n/server';
import { localizeMetadata } from '@/lib/i18n/metadata';
import { t, tp } from '@/lib/i18n/t';
import type { Metadata } from "next";
import { site } from "@/config/site";
import { paces, tripTypes } from "@/data/taxonomy";
import { faqs } from "@/data/faqs";
import { photo } from "@/lib/media";
import { homeData } from "@/lib/home-data";
import { featuredTrips, regionNameFor, visibleFaqs } from "@/lib/queries";
import { Marquee } from "@/components/motion/Marquee";
import { RoundaboutSelector } from "@/components/sections/RoundaboutSelector";
import { FullWidthCta } from "@/components/sections/FullWidthCta";
import { SectionIntro } from "@/components/sections/SectionIntro";
import { LinkRows } from "@/components/sections/LinkRows";
import { RegionsShowcase } from "@/components/sections/RegionsShowcase";
import { CountUpStats, HowItWorks } from "@/components/home/Pieces";
import { Hero } from "@/components/home/Hero";
import { TourIndex, type IndexTrip } from "@/components/home/TourIndex";
import { AboutStatement, HomeFaq, ImagePair, RequestInfo } from "@/components/home/Sections";
import { JsonLd } from "@/components/seo/JsonLd";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return localizeMetadata({
  title: { absolute: `${site.name}: tailor-made road trips through France` },
  description: site.description,
  alternates: { canonical: "/" },
}, (await params).locale);
}

const STEPS = [
  { eyebrow: "1st exit", title: "Choose your exit", text: "Pick a region, a pace and how many days. Or keep circling and tell us what you love." },
  { eyebrow: "2nd exit", title: "We draw the loop", text: "Your specialist designs the route, books the stays and the car, and sends a first draft within [24 hours]." },
  { eyebrow: "3rd exit", title: "The route book arrives", text: "A printed book for the glovebox and an offline app: every bend, detour and lunch stop." },
  { eyebrow: "4th exit", title: "Bonne route", text: "One specialist on WhatsApp from the first roundabout to the last. You just drive." },
];

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  await initLocale(params);
  const d = homeData();
  const index: IndexTrip[] = featuredTrips()
    .slice(0, 4)
    .map((t) => ({
      slug: t.slug,
      title: t.title,
      location: `${regionNameFor(t)}, France`,
      line: `Distance: ~${t.totalKm.toLocaleString("en-GB")} km • Pace: ${paces[t.pace].label} • ${t.days} days • ${tripTypes[t.type].short}`,
      lede: t.lede,
      poster: t.poster.title,
      cover: t.heroImage,
      strip: (t.gallery.length >= 4 ? t.gallery : [t.heroImage, t.cardImage, t.hoverImage, ...t.gallery]).slice(0, 4),
      video: t.hoverVideo?.src,
    }));

  return (
    <>
      <JsonLd
        data={tp({
          "@context": "https://schema.org",
          "@type": "TravelAgency",
          name: site.name,
          slogan: site.tagline,
          description: site.description,
          url: site.url,
          areaServed: "France",
          email: site.contact.email,
          address: { "@type": "PostalAddress", ...site.address.postal },
        })}
      />

      <Hero image={d.heroImage} focus={tp(d.hero.image?.focus)} trip={tp(d.heroTrip)} />

      <section aria-label={t("Bonne route")} className="bg-sunflower py-4 text-charcoal">
        <Marquee
          className="font-cond text-lg"
          duration={50}
          items={tp([
            "Prenez le chemin des écoliers",
            "Take the long way round",
            "On ne se presse pas",
            "One more village, why not",
            "Bonne route",
            "Lunch lasts until four",
          ])}
        />
      </section>

      <div id="explore" className="scroll-mt-[var(--header-h)]">
        <AboutStatement
          label={t("About")}
          statement={t("We design road trips for people who'd rather take the back roads. Vineyards, villages, coastlines and mountain passes, hand-picked stays and one specialist on WhatsApp, in a loop that brings you back to where you started, changed.")}
          href="/why-rond-point"
          linkLabel={t("Further exploration")}
        >
          <CountUpStats stats={tp(d.stats)} tone="light" className="mt-[var(--spacing-sec-xl)]" />
        </AboutStatement>
      </div>

      <ImagePair images={tp([photo(["theme:cafe-terrace"]), photo(["theme:road-winding"], 1)])} />

      <RoundaboutSelector exits={tp(d.exits)} featured={tp(d.featuredMini)} />

      <TourIndex trips={tp(index)} />

      <FullWidthCta
        image={photo(["theme:sunflowers"])}
        heading={t("When to go")}
        text={t("Lavender peaks in early summer, the grapes come in around September and Alsace glows in December. Time it right and France does half the work.")}
        cta={t("Full calendar")}
        href="/when-to-go"
      />

      <HowItWorks steps={tp(STEPS)} />

      <RegionsShowcase regions={tp(d.regions)} />

      <section className="bg-cream py-[var(--spacing-sec)] text-charcoal">
        <SectionIntro eyebrow={t("Journal")} lines={tp(["Dispatches from", "the passenger seat"])} className="pb-[var(--spacing-sec-xl)]" />
        <LinkRows items={d.posts.map((p) => ({ href: `/journal/${p.slug}`, title: p.title }))} />
      </section>

      <HomeFaq faqs={tp(visibleFaqs(faqs).slice(0, 6))} />

      <RequestInfo />
    </>
  );
}
