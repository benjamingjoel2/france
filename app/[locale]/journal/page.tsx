import { initLocale } from '@/lib/i18n/server';
import { localizeMetadata } from '@/lib/i18n/metadata';
import { t, tp } from '@/lib/i18n/t';
import type { Metadata } from "next";
import { Suspense } from "react";
import type { PostCategory } from "@/data/types";
import { sortedPosts } from "@/lib/queries";
import { toPostLite } from "@/lib/posts";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PlusHeading } from "@/components/ui/PlusHeading";
import { SplitWords } from "@/components/motion/SplitWords";
import { Reveal } from "@/components/motion/Reveal";
import { FeaturedPost } from "@/components/journal/PostCards";
import { JournalIndex } from "@/components/journal/JournalIndex";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return localizeMetadata({
  title: "The Journal",
  description:
    "Dispatches from the passenger seat: the best road trips in France, how to drive a French roundabout, wine routes and planning advice from Rond-Point.",
  alternates: { canonical: "/journal" },
}, (await params).locale);
}

const CATEGORIES: PostCategory[] = ["Road trip ideas", "Driving in France", "Food & wine", "Planning"];

export default async function JournalPage({ params }: { params: Promise<{ locale: string }> }) {
  await initLocale(params);
  const all = sortedPosts().map(toPostLite);
  const featured = all[0];
  return (
    <div className="bg-charcoal pt-[var(--header-h)] text-cream">
      <Breadcrumbs items={tp([{ label: "Journal" }])} />
      <div className="px-gutter pt-[var(--spacing-sec)] pb-[var(--spacing-sec)]">
        <Reveal immediate>
          <PlusHeading below>{t("Get inspired")}</PlusHeading>
        </Reveal>
        <SplitWords as="h1" lines={tp(["The", "journal"])} immediate className="font-display mb-[var(--spacing-sec-xl)] text-4xl" />
        {featured && (
          <Reveal immediate delay={0.2}>
            <FeaturedPost post={tp(featured)} />
          </Reveal>
        )}
        <Suspense fallback={null}>
          <JournalIndex posts={tp(all)} featuredSlug={tp(featured?.slug)} categories={tp(CATEGORIES)} />
        </Suspense>
      </div>
    </div>
  );
}
