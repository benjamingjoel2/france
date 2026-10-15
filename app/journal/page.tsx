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

export const metadata: Metadata = {
  title: "The Journal",
  description:
    "Dispatches from the passenger seat: the best road trips in France, how to drive a French roundabout, wine routes and planning advice from Rond-Point.",
  alternates: { canonical: "/journal" },
};

const CATEGORIES: PostCategory[] = ["Road trip ideas", "Driving in France", "Food & wine", "Planning"];

export default function JournalPage() {
  const all = sortedPosts().map(toPostLite);
  const featured = all[0];
  return (
    <div className="bg-charcoal pt-[var(--header-h)] text-cream">
      <Breadcrumbs items={[{ label: "Journal" }]} />
      <div className="px-gutter pt-[var(--spacing-sec)] pb-[var(--spacing-sec)]">
        <Reveal immediate>
          <PlusHeading below>Get inspired</PlusHeading>
        </Reveal>
        <SplitWords as="h1" lines={["The", "journal"]} immediate className="font-display mb-[var(--spacing-sec-xl)] text-4xl" />
        {featured && (
          <Reveal immediate delay={0.2}>
            <FeaturedPost post={featured} />
          </Reveal>
        )}
        <Suspense fallback={null}>
          <JournalIndex posts={all} featuredSlug={featured?.slug} categories={CATEGORIES} />
        </Suspense>
      </div>
    </div>
  );
}
