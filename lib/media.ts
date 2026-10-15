import { photos, type Photo } from "@/data/photos";
import type { Img } from "@/data/types";

const FALLBACK: Img = {
  src: "/img/placeholder.jpg",
  alt: "Placeholder image",
  credit: "",
  w: 1600,
  h: 1200,
};

function toImg(p: Photo): Img {
  return { src: p.src, alt: p.alt, credit: p.credit, w: p.w, h: p.h };
}

/**
 * Pick a photo from the placeholder pool by key ("region:provence", "theme:ebike"…).
 * Falls back through alternative keys, then to a local gradient so pages never break.
 */
export function photo(key: string | readonly string[], index = 0): Img {
  const keys: readonly string[] = typeof key === "string" ? [key] : key;
  for (const k of keys) {
    const list = photos[k];
    if (list && list.length) return toImg(list[index % list.length]);
  }
  return FALLBACK;
}

export function photoList(key: string, count?: number): Img[] {
  const list = photos[key] ?? [];
  const out = list.map(toImg);
  return count ? out.slice(0, count) : out;
}

/** Build an Unsplash-sized URL; local files pass through untouched. */
export function imgUrl(img: Img, width = 2000): string {
  if (!img.src.startsWith("https://images.unsplash.com")) return img.src;
  return `${img.src}?auto=format&fit=crop&w=${width}&q=75`;
}
