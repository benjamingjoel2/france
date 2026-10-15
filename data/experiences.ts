import { photo } from "@/lib/media";
import type { Experience } from "./types";

/**
 * Placeholder experiences. Generic descriptions only: no real wineries,
 * Champagne houses or operators are named. Replace with partners before launch.
 */
export const experiences: Experience[] = [
  {
    slug: "provence-market-cooking-class",
    name: "Market morning & cooking class",
    regionSlug: "provence",
    kind: "food",
    duration: "Half day",
    blurb:
      "Shop a Luberon market with a local cook, then turn the haul into lunch in a farmhouse kitchen. You'll leave knowing how to pick a melon by its weight and a tomato by its smell.",
    image: photo(["theme:market", "region:provence"], 0),
    placeholder: true,
  },
  {
    slug: "lavender-distillery-visit",
    name: "Lavender farm & distillery visit",
    regionSlug: "provence",
    kind: "culture",
    duration: "2 hours",
    blurb:
      "Walk the rows with a family of lavender growers on the Valensole plateau, then watch the copper stills turn a field into a few precious drops. Best in late June and July.",
    image: photo(["hero:lavender", "region:provence"], 0),
    placeholder: true,
  },
  {
    slug: "verdon-kayak",
    name: "Kayak into the Verdon gorges",
    regionSlug: "provence",
    kind: "outdoors",
    duration: "2–3 hours",
    blurb:
      "Paddle from the Lac de Sainte-Croix into the mouth of the gorge, between limestone walls and water the colour of a boiled sweet. No experience needed, just sun cream.",
    image: photo(["theme:gorges-verdon", "region:provence"], 1),
    placeholder: true,
  },
  {
    slug: "grasse-perfume-workshop",
    name: "Perfume workshop in Grasse",
    regionSlug: "cote-d-azur",
    kind: "culture",
    duration: "2 hours",
    blurb:
      "In the hill town that taught the world to smell nice, a perfumer helps you blend your own eau de toilette. Name it after your favourite hairpin.",
    image: photo(["region:cote-d-azur", "theme:spring-blossom"], 2),
    placeholder: true,
  },
  {
    slug: "alpine-cheese-dairy",
    name: "High-pasture cheese dairy",
    regionSlug: "french-alps",
    kind: "food",
    duration: "2 hours",
    blurb:
      "Meet the herders and the cows behind the great Alpine cheeses at a summer dairy below the passes, then taste wheels of different ages. The cows are unimpressed by your car.",
    image: photo(["theme:cheese-food", "region:french-alps"], 0),
    placeholder: true,
  },
  {
    slug: "loire-a-velo-chateaux-ride",
    name: "E-bike to Chenonceau on the Loire à Vélo",
    regionSlug: "loire-valley",
    kind: "e-bike",
    duration: "Full day",
    blurb:
      "Follow quiet lanes and riverside paths from Amboise to the château that spans the Cher, with a picnic stop and a tasting on the way back. Pedal-assist does the hills; you do the photos.",
    image: photo(["theme:ebike", "region:loire-valley"], 0),
    placeholder: true,
  },
  {
    slug: "loire-troglodyte-tasting",
    name: "Tasting in a troglodyte cellar",
    regionSlug: "loire-valley",
    kind: "wine",
    duration: "1.5 hours",
    blurb:
      "Descend into cellars carved into the soft tufa cliffs and taste Chinon and Saumur reds with a family winegrower. It's a steady 12°C down there; bring a jumper, even in July.",
    image: photo(["theme:wine-tasting", "region:loire-valley"], 0),
    placeholder: true,
  },
  {
    slug: "burgundy-grands-crus-ebike",
    name: "E-bike the Côte de Beaune",
    regionSlug: "burgundy",
    kind: "e-bike",
    duration: "Full day",
    blurb:
      "Ride the Voie des Vignes through Pommard, Volnay and Meursault, past walls that separate some of the most valuable vineyards on earth. Lunch in a village square, tasting in a cellar.",
    image: photo(["theme:ebike", "region:burgundy"], 1),
    placeholder: true,
  },
  {
    slug: "burgundy-family-estate-tasting",
    name: "Tasting at a family estate",
    regionSlug: "burgundy",
    kind: "wine",
    duration: "2 hours",
    blurb:
      "A small domaine, a cellar that smells of oak and damp stone, and a winemaker who will happily explain climats until the sun goes down. Pinot Noir and Chardonnay, straight from the barrel.",
    image: photo(["theme:wine-tasting", "region:burgundy"], 1),
    placeholder: true,
  },
  {
    slug: "alsace-winegrower-tasting",
    name: "Riesling to Gewurztraminer with a winegrower",
    regionSlug: "alsace",
    kind: "wine",
    duration: "1.5 hours",
    blurb:
      "Taste your way across the Alsace grape varieties with a family winegrower in a village cellar, from bone-dry Riesling to honeyed late harvests. Kugelhopf may appear.",
    image: photo(["theme:wine-tasting", "region:alsace"], 2),
    placeholder: true,
  },
  {
    slug: "perigord-truffle-hunt",
    name: "Truffle hunt with a dog",
    regionSlug: "dordogne-perigord",
    kind: "food",
    duration: "2.5 hours",
    blurb:
      "Follow a truffle farmer and a very focused dog through the oak trees, then taste the black diamonds on toast with a glass of something local. Summer truffles from May, black Périgord truffles in winter.",
    image: photo(["theme:truffle", "region:dordogne-perigord"], 0),
    placeholder: true,
  },
  {
    slug: "dordogne-canoe",
    name: "Canoe beneath the castles",
    regionSlug: "dordogne-perigord",
    kind: "outdoors",
    duration: "Half day",
    blurb:
      "Drift down the Dordogne past Castelnaud, Beynac and La Roque-Gageac, with a pebble beach for lunch. A minibus brings you back to the start. The river does most of the work.",
    image: photo(["region:dordogne-perigord", "theme:picnic"], 2),
    placeholder: true,
  },
  {
    slug: "prehistoric-cave-visit",
    name: "Prehistoric cave art",
    regionSlug: "dordogne-perigord",
    kind: "culture",
    duration: "2 hours",
    blurb:
      "Timed tickets for the Vézère valley's painted caves and their faithful replicas, where bison and horses have been galloping across the walls for some 20,000 years. We handle the booking; you handle the goosebumps.",
    image: photo(["theme:caves-dordogne", "region:dordogne-perigord"], 0),
    placeholder: true,
  },
  {
    slug: "dday-beaches-guided-tour",
    name: "D-Day beaches with a historian",
    regionSlug: "normandy-mont-saint-michel",
    kind: "culture",
    duration: "Full day",
    blurb:
      "A local guide rides along in your car from Arromanches to Omaha, Pointe du Hoc and Utah Beach, telling the stories behind the monuments. Moving, precise and never rushed.",
    image: photo(["theme:dday-beaches", "region:normandy-mont-saint-michel"], 0),
    placeholder: true,
  },
  {
    slug: "mont-saint-michel-bay-walk",
    name: "Barefoot across the bay to Mont-Saint-Michel",
    regionSlug: "normandy-mont-saint-michel",
    kind: "outdoors",
    duration: "3–4 hours",
    blurb:
      "Cross the sands to the Mont with a qualified bay guide, timed to the tides. Quicksand, crossing channels and the best view of the abbey there is. Never attempt it without a guide.",
    image: photo(["region:normandy-mont-saint-michel", "theme:beach-atlantic"], 2),
    placeholder: true,
  },
  {
    slug: "cancale-oyster-tasting",
    name: "Oysters at low tide in Cancale",
    regionSlug: "brittany",
    kind: "food",
    duration: "1.5 hours",
    blurb:
      "Walk out to the oyster beds with a producer, learn the difference between a creuse and a plate, then eat them on the harbour wall with lemon and bread. Bring an appetite, leave the shells.",
    image: photo(["theme:cheese-food", "region:brittany"], 1),
    placeholder: true,
  },
  {
    slug: "morbihan-gulf-boat",
    name: "Sail the Gulf of Morbihan",
    regionSlug: "brittany",
    kind: "outdoors",
    duration: "Half day",
    blurb:
      "A traditional sailing boat, a skipper who knows every current, and islands for picnicking. The gulf's tides race through the narrows; let someone local take the helm.",
    image: photo(["region:brittany", "theme:beach-atlantic"], 0),
    placeholder: true,
  },
  {
    slug: "basque-coast-ebike",
    name: "E-bike the Corniche Basque",
    regionSlug: "french-basque-country",
    kind: "e-bike",
    duration: "Half day",
    blurb:
      "Cliff-top lanes from Saint-Jean-de-Luz to Hendaye, with the Pyrenees dropping into the Atlantic and Spain waving from across the bay. Stop for a swim, a coffee and another swim.",
    image: photo(["theme:ebike", "region:french-basque-country"], 2),
    placeholder: true,
  },
  {
    slug: "basque-surf-lesson",
    name: "Surf lesson on the Basque coast",
    regionSlug: "french-basque-country",
    kind: "outdoors",
    duration: "2 hours",
    blurb:
      "A friendly instructor, a soft board and a beach with forgiving waves. Standing up is likely; looking cool doing it is a work in progress.",
    image: photo(["region:french-basque-country", "theme:beach-atlantic"], 0),
    placeholder: true,
  },
  {
    slug: "scandola-boat-trip",
    name: "Boat trip to Scandola & Girolata",
    regionSlug: "corsica",
    kind: "outdoors",
    duration: "Half day",
    blurb:
      "From Porto, a small boat slips past the red cliffs of the Scandola nature reserve to the fishing hamlet of Girolata, reachable only by sea or on foot. Ospreys overhead, if you're lucky.",
    image: photo(["region:corsica", "theme:corsica-road"], 2),
    placeholder: true,
  },
  {
    slug: "corsican-farm-lunch",
    name: "Mountain farm lunch",
    regionSlug: "corsica",
    kind: "food",
    duration: "2.5 hours",
    blurb:
      "Chestnut-fed charcuterie, brocciu cheese and a glass of island wine at a farm in the hills, with the family who made all of it. Lunch tends to end around tea time.",
    image: photo(["theme:cheese-food", "region:corsica"], 2),
    placeholder: true,
  },
  {
    slug: "champagne-cellar-visit",
    name: "Chalk cellar visit & tasting",
    regionSlug: "champagne",
    kind: "wine",
    duration: "1.5 hours",
    blurb:
      "Descend into chalk cellars where millions of bottles rest in the dark, learn why they're turned by hand, then taste a range from blanc de blancs to rosé. A grower or a grande maison, your choice.",
    image: photo(["theme:wine-tasting", "region:champagne"], 0),
    placeholder: true,
  },
  {
    slug: "champagne-vineyard-ebike",
    name: "E-bike through the Champagne vines",
    regionSlug: "champagne",
    kind: "e-bike",
    duration: "Full day",
    blurb:
      "Pedal-assisted lanes from Hautvillers along the slopes of the Marne valley, with a picnic among the vines and a grower's tasting at the end. Every hill is easier with bubbles at the top.",
    image: photo(["theme:ebike", "region:champagne"], 1),
    placeholder: true,
  },
  {
    slug: "saint-emilion-tasting",
    name: "Saint-Émilion estate tasting",
    regionSlug: "bordeaux-atlantic",
    kind: "wine",
    duration: "2 hours",
    blurb:
      "A family château outside the medieval village, a walk through Merlot vines on the limestone plateau and a tasting of several vintages. Then the village itself, one steep cobbled street at a time.",
    image: photo(["theme:wine-tasting", "region:bordeaux-atlantic"], 1),
    placeholder: true,
  },
];

export function getExperience(slug: string): Experience | undefined {
  return experiences.find((e) => e.slug === slug);
}
