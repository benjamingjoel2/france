import { t, tp } from '@/lib/i18n/t';
import Image from "next/image";
import Link from '@/components/i18n/Link';
import type { Img } from "@/data/types";
import { imgUrl } from "@/lib/media";
import { cn } from "@/lib/cn";
import { ArrowBox } from "@/components/ui/ArrowBox";

export type PostLite = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  readMinutes: number;
  image: Img;
};

export function CategoryTag({ label, className }: { label: string; className?: string }) {
  return (
    <p className={cn("font-ui flex items-center gap-2.5", className)}>
      <span aria-hidden="true" className="size-2.5 bg-current" />
      {tp(label)}
    </p>
  );
}

/** 4:3 image, category tag, condensed title and a square arrow that fills on hover. */
export function PostCard({ post, tone = "dark", sizes }: { post: PostLite; tone?: "light" | "dark"; sizes?: string }) {
  return (
    <Link href={`/journal/${post.slug}`} className={cn("group block", tone === "dark" ? "text-cream" : "text-charcoal")}>
      <span className="relative block aspect-[4/3] overflow-hidden bg-charcoal-10">
        <Image
          src={imgUrl(post.image, 1200)}
          alt=""
          fill
          sizes={sizes ?? "(min-width:768px) 46vw, 92vw"}
          className="object-cover transition-transform duration-300 ease-[var(--ease-rp)] group-hover:scale-110"
        />
      </span>
      <CategoryTag label={tp(post.category)} className="mt-5 mb-4" />
      <span className="flex items-start justify-between gap-6 max-sm:flex-col">
        <span className="font-cond max-w-[16em] text-lg">{tp(post.title)}</span>
        <ArrowBox tone={tone === "dark" ? "dark" : "light"} size={40} />
      </span>
    </Link>
  );
}

/** Split featured card: 4:3 image left, text on a raised panel right. */
export function FeaturedPost({ post }: { post: PostLite }) {
  return (
    <Link href={`/journal/${post.slug}`} className="group grid overflow-hidden bg-charcoal-10 text-cream md:grid-cols-2">
      <span className="relative block aspect-[4/3] overflow-hidden">
        <Image
          src={imgUrl(post.image, 1400)}
          alt=""
          fill
          priority
          sizes="(min-width:768px) 47vw, 100vw"
          className="object-cover transition-transform duration-300 ease-[var(--ease-rp)] group-hover:scale-110"
        />
      </span>
      <span className="flex flex-col justify-center px-[clamp(22px,7.5vw,108px)] py-[clamp(22px,5.6vw,81px)]">
        <CategoryTag label={t("Featured")} className="mb-5" />
        <span className="font-cond block max-w-[13em] text-xl">{tp(post.title)}</span>
        <span className="mt-5 block max-w-[30em] text-mist">{tp(post.excerpt)}</span>
        <span className="font-ui mt-6 block text-mist">
          {tp(post.category)} · {tp(post.readMinutes)} {t("min read")}</span>
      </span>
    </Link>
  );
}
