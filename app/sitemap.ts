import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { LOCALES, localizePath } from "@/lib/i18n/config";
import { posts, regions, roadTrips } from "@/lib/queries";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const statics = [
    "",
    "/self-drive",
    "/drive-and-e-bike",
    "/when-to-go",
    "/why-rond-point",
    "/driving-in-france",
    "/journal",
    "/plan-my-road-trip",
    "/contact",
    "/faq",
    "/privacy",
    "/terms",
    "/cookies",
  ];
  const entries = [
    ...statics.map((p) => ({ url: `${site.url}${p}`, lastModified: now, priority: p === "" ? 1 : 0.7 })),
    ...roadTrips.map((t) => ({ url: `${site.url}/road-trips/${t.slug}`, lastModified: now, priority: 0.9 })),
    ...regions.map((r) => ({ url: `${site.url}/regions/${r.slug}`, lastModified: now, priority: 0.8 })),
    ...posts.map((p) => ({ url: `${site.url}/journal/${p.slug}`, lastModified: new Date(p.date), priority: 0.6 })),
  ];
  // Every page in English, French, German and Spanish, each with its hreflang alternates.
  const url = (u: string, l: (typeof LOCALES)[number]) => site.url + localizePath(u.slice(site.url.length) || "/", l);
  return entries.flatMap((e) =>
    LOCALES.map((l) => ({
      ...e,
      url: url(e.url, l),
      alternates: { languages: Object.fromEntries([...LOCALES.map((x) => [x, url(e.url, x)]), ["x-default", url(e.url, "en")]]) },
    })),
  );
}
