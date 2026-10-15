import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { posts, regions, roadTrips } from "@/lib/queries";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const statics = [
    "",
    "/self-drive",
    "/drive-and-e-bike",
    "/when-to-go",
    "/our-specialists",
    "/why-rond-point",
    "/driving-in-france",
    "/journal",
    "/plan-my-road-trip",
    "/contact",
    "/faq",
    "/privacy",
    "/terms",
  ];
  return [
    ...statics.map((p) => ({ url: `${site.url}${p}`, lastModified: now, priority: p === "" ? 1 : 0.7 })),
    ...roadTrips.map((t) => ({ url: `${site.url}/road-trips/${t.slug}`, lastModified: now, priority: 0.9 })),
    ...regions.map((r) => ({ url: `${site.url}/regions/${r.slug}`, lastModified: now, priority: 0.8 })),
    ...posts.map((p) => ({ url: `${site.url}/journal/${p.slug}`, lastModified: new Date(p.date), priority: 0.6 })),
  ];
}
