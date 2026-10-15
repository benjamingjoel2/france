// Reports road trips that share a poster card image.
import { roadTrips } from "../data/roadTrips";
const seen = new Map<string, string>();
for (const t of roadTrips) {
  const prev = seen.get(t.cardImage.src);
  if (prev) console.log(`duplicate card image: ${t.slug} = ${prev}`);
  seen.set(t.cardImage.src, t.slug);
}
console.log("checked", roadTrips.length);
