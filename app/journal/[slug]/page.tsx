import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { site } from "@/config/site";
import { imgUrl } from "@/lib/media";
import { getPerson, getPost, posts, sortedPosts } from "@/lib/queries";
import { toPostLite } from "@/lib/posts";
import { ArticleHero } from "@/components/sections/ArticleHero";
import { ArticleBody } from "@/components/journal/ArticleBody";
import { ShareBar } from "@/components/journal/ShareBar";
import { CategoryTag, PostCard } from "@/components/journal/PostCards";
import { Carousel } from "@/components/ui/Carousel";
import { ArrowBox } from "@/components/ui/ArrowBox";
import { PlusHeading } from "@/components/ui/PlusHeading";
import { SplitWords } from "@/components/motion/SplitWords";
import { JsonLd } from "@/components/seo/JsonLd";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/journal/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const title = post.seo?.title ?? post.title;
  const description = post.seo?.description ?? post.excerpt;
  return {
    title,
    description,
    alternates: { canonical: `/journal/${post.slug}` },
    openGraph: {
      type: "article",
      title,
      description,
      publishedTime: post.date,
      images: [{ url: imgUrl(post.heroImage, 1200), width: 1200, alt: post.heroImage.alt }],
    },
  };
}

export default async function PostPage({ params }: PageProps<"/journal/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const author = getPerson(post.authorSlug);
  const related = [
    ...post.related.map(getPost).filter((p) => !!p),
    ...sortedPosts().filter((p) => p.slug !== post.slug && !post.related.includes(p.slug)),
  ].slice(0, 4);
  const url = `${site.url}/journal/${post.slug}`;
  const date = new Date(post.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

  return (
    <article className="overflow-hidden bg-charcoal text-cream">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          description: post.excerpt,
          datePublished: post.date,
          image: imgUrl(post.heroImage, 1200),
          author: author ? { "@type": "Person", name: author.name } : { "@type": "Organization", name: site.name },
          publisher: { "@type": "Organization", name: site.name },
          mainEntityOfPage: url,
        }}
      />
      <ArticleHero
        image={post.heroImage}
        lines={[post.title]}
        size="3xl"
        align="bottom-left"
        height="medium"
        crumbs={[{ label: "Journal", href: "/journal" }, { label: post.category }]}
      >
        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
          <CategoryTag label={post.category} />
          <p className="font-ui text-mist">
            {date} · {post.readMinutes} min read{author ? ` · by ${author.name}` : ""}
          </p>
        </div>
      </ArticleHero>

      {/* Cream sheet, inset on the left and bleeding off the right edge */}
      <div className="ml-gutter bg-cream py-[var(--spacing-sec)] text-charcoal">
        <div className="flex flex-col gap-10 pr-[4.8%] pl-[8%] md:flex-row md:gap-[70px]">
          <div className="min-w-0 flex-1">
            <p className="font-cond mb-[var(--spacing-sec-lg)] max-w-[24em] text-xl">{post.excerpt}</p>
            <ArticleBody blocks={post.blocks} />
          </div>
          <aside className="order-first md:order-none md:sticky md:top-[calc(var(--header-h)+40px)] md:self-start">
            <ShareBar url={url} title={post.title} />
          </aside>
        </div>
        <div className="mt-[var(--spacing-sec-xl)] pl-[8%]">
          <Link href="/journal" className="group inline-flex items-center gap-5">
            <ArrowBox icon="arrow-left" size={40} />
            <span className="font-cond text-md">See all posts</span>
          </Link>
        </div>
      </div>

      {related.length > 0 && (
        <section className="py-[var(--spacing-sec)]">
          <div className="px-gutter text-center">
            <PlusHeading below center className="mx-auto">
              Keep reading
            </PlusHeading>
            <SplitWords as="h2" text="Related posts" className="font-display text-3xl" />
          </div>
          <Carousel label="Related posts" tone="dark" className="mt-[var(--spacing-sec)]" itemClassName="w-[88%] md:w-[46%]">
            {related.map((p) => (
              <PostCard key={p.slug} post={toPostLite(p)} />
            ))}
          </Carousel>
        </section>
      )}
    </article>
  );
}
