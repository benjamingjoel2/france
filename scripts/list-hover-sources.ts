// Prints "slug<TAB>imageURL" for each road trip's hover clip source (used by make-hover-videos.sh).
import { roadTrips } from "../data/roadTrips";

for (const t of roadTrips) {
  const img = t.gallery[0] ?? t.heroImage;
  console.log(`${t.slug}\t${img.src}`);
}
