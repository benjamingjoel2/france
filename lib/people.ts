import type { Person } from "@/data/types";
import type { PersonLite } from "@/components/people/People";
import { getRegion } from "./queries";

export function toPersonLite(p: Person): PersonLite {
  return {
    slug: p.slug,
    name: p.name,
    role: p.role,
    bio: p.bio,
    favouriteExit: p.favouriteExit,
    languages: p.languages,
    image: p.image,
    regionName: p.regionSlug ? getRegion(p.regionSlug)?.shortName : undefined,
    placeholder: p.placeholder,
  };
}
