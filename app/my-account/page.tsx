import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/config/site";
import { imgUrl, photo } from "@/lib/media";
import { getTrip, roadTrips } from "@/lib/queries";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { AccountArea } from "@/components/account/AccountArea";
import { SplitWords } from "@/components/motion/SplitWords";
import { Parallax } from "@/components/motion/Parallax";

export const metadata: Metadata = {
  title: "My account",
  description: "Rond-Point client area: trip documents, route book download and your specialist on WhatsApp.",
  alternates: { canonical: "/my-account" },
  robots: { index: false, follow: true },
};

export default function AccountPage() {
  const t = getTrip(site.featuredTrip.slug) ?? roadTrips[0];
  return (
    <div className="bg-charcoal pt-[var(--header-h)] text-cream">
      <Breadcrumbs items={[{ label: "My account" }]} />
      <section className="px-gutter py-[var(--spacing-sec)]">
        <SplitWords as="h1" text="My account" immediate className="font-display pb-[var(--spacing-sec-xl)] text-center text-3xl" />
        <AccountArea
          trip={{ slug: t.slug, title: t.title, image: t.heroImage, days: t.days, nights: t.nights, startEnd: t.startEnd }}
        />
      </section>
      <Parallax className="aspect-video max-md:aspect-[4/5]" strength={0.15}>
        <Image src={imgUrl(photo(["theme:road-winding", "region:french-alps"], 1), 2400)} alt="" fill sizes="100vw" className="object-cover" />
      </Parallax>
    </div>
  );
}
