import type { Post } from "@/data/types";
import type { PostLite } from "@/components/journal/PostCards";

export function toPostLite(p: Post): PostLite {
  return {
    slug: p.slug,
    title: p.title,
    category: p.category,
    excerpt: p.excerpt,
    date: p.date,
    readMinutes: p.readMinutes,
    image: p.heroImage,
  };
}
