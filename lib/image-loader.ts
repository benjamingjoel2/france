"use client";

/**
 * Image loader for next/image. Unsplash photos are resized and converted to
 * AVIF/WebP by Unsplash's own CDN (fast, global, and how Unsplash asks to be
 * hotlinked), so they skip Vercel's image optimiser entirely. Local files in
 * /public are already web-sized and are served as static assets.
 */
export default function imageLoader({ src, width, quality }: { src: string; width: number; quality?: number }) {
  if (src.startsWith("https://images.unsplash.com")) {
    const url = new URL(src);
    url.searchParams.set("auto", "format");
    url.searchParams.set("fit", "crop");
    url.searchParams.set("w", String(width));
    url.searchParams.set("q", String(quality ?? 60));
    return url.toString();
  }
  return `${src}${src.includes("?") ? "&" : "?"}w=${width}`;
}
