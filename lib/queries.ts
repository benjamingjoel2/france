import { site } from "@/config/site";
import { regions } from "@/data/regions";
import { roadTrips } from "@/data/roadTrips";
import { stays } from "@/data/stays";
import { experiences } from "@/data/experiences";
import { calendarMoments } from "@/data/calendar";
import { people } from "@/data/people";
import { faqs } from "@/data/faqs";
import { posts } from "@/data/posts";
import type { Faq, Region, RoadTrip, TripType } from "@/data/types";
import type { RegionLite } from "@/components/sections/RegionsShowcase";
import type { MiniTrip } from "@/components/sections/RoundaboutSelector";

export { regions, roadTrips, stays, experiences, calendarMoments, people, posts };

const bySlug = <T extends { slug: string }>(list: T[]) => new Map(list.map((x) => [x.slug, x]));
const regionMap = bySlug(regions);
const tripMap = bySlug(roadTrips);
const stayMap = bySlug(stays);
const experienceMap = bySlug(experiences);
const peopleMap = bySlug(people);
const postMap = bySlug(posts);

export const getRegion = (slug: string) => regionMap.get(slug);
export const getTrip = (slug: string) => tripMap.get(slug);
export const getPost = (slug: string) => postMap.get(slug);
export const getPerson = (slug: string) => peopleMap.get(slug);
export const getStays = (ids: string[]) => ids.map((id) => stayMap.get(id)).filter((x) => !!x);
export const getExperiences = (ids: string[]) => ids.map((id) => experienceMap.get(id)).filter((x) => !!x);
export const getPeople = (ids: string[]) => ids.map((id) => peopleMap.get(id)).filter((x) => !!x);

export function primaryRegion(trip: RoadTrip): Region | undefined {
  return regionMap.get(trip.regionSlugs[0]);
}

export function regionNameFor(trip: RoadTrip) {
  return primaryRegion(trip)?.shortName ?? "France";
}

export const tripsByType = (type: TripType) => roadTrips.filter((t) => t.type === type);
export const tripsInRegion = (slug: string) => roadTrips.filter((t) => t.regionSlugs.includes(slug));
export const featuredTrips = () => {
  const f = roadTrips.filter((t) => t.featured);
  return f.length ? f : roadTrips;
};

/** FAQs respecting the ETIAS feature flag. */
export function visibleFaqs(list: Faq[] = faqs): Faq[] {
  return list.filter((f) => !(f.feature === "etiasNotice" && site.features.etiasNotice === "hidden"));
}
export const getFaqs = (ids: string[]) => visibleFaqs(ids.map((id) => faqs.find((f) => f.id === id)).filter((x): x is Faq => !!x));

export const sortedPosts = () => [...posts].sort((a, b) => b.date.localeCompare(a.date));

/* ---- View-model mappers for client components (keep client bundles small) ---- */

export function toMiniTrip(t: RoadTrip): MiniTrip {
  return {
    slug: t.slug,
    title: t.shortTitle,
    image: t.heroImage,
    type: t.type,
    pace: t.pace,
    days: t.days,
    nights: t.nights,
    regionName: regionNameFor(t),
  };
}

export function toRegionLite(r: Region): RegionLite {
  return {
    slug: r.slug,
    name: r.name,
    shortName: r.shortName,
    tagline: r.tagline,
    colour: r.colour,
    mapPin: r.mapPin,
    image: r.cardImage,
    tripCount: tripsInRegion(r.slug).length,
  };
}

