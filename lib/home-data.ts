import { site } from "@/config/site";
import { photo } from "./media";
import { toCardTrip } from "./cards";
import {
  featuredTrips,
  getTrip,
  regionNameFor,
  regions,
  roadTrips,
  sortedPosts,
  toMiniTrip,
  toRegionLite,
  tripsInRegion,
} from "./queries";

/** Everything the homepage variants need, computed once on the server. */
export function homeData() {
  const featured = featuredTrips();
  const ordered = [...featured, ...roadTrips.filter((t) => !t.featured)];
  const heroTrip = getTrip("loire-chateaux-loop") ?? featured[0];
  return {
    hero: site.featuredTrip,
    heroImage: site.featuredTrip.image ?? photo("hero:lavender"),
    heroTrip: {
      slug: heroTrip.slug,
      title: heroTrip.shortTitle,
      meta: `${heroTrip.days} days · drive & e-bike`,
      image: heroTrip.heroImage,
    },
    exits: regions.map((r) => ({
      slug: r.slug,
      name: r.name,
      shortName: r.shortName,
      tagline: r.lede,
      bestTime: r.bestTimeSummary,
      trips: tripsInRegion(r.slug).map(toMiniTrip),
    })),
    featuredMini: featured.map(toMiniTrip),
    cards: ordered.map((t) => ({ ...toCardTrip(t), regionName: regionNameFor(t) })),
    posts: sortedPosts().slice(0, 4),
    regions: regions.map(toRegionLite),
    stats: site.stats,
  };
}
