import { photo } from "@/lib/media";
import type { Person } from "./types";

/**
 * Placeholder people. Names, bios and photos are invented sample content
 * and must be replaced with the real team before launch.
 */
export const people: Person[] = [
  // ── Specialists ────────────────────────────────────────────────
  {
    slug: "camille-bertin",
    name: "Camille Bertin",
    role: "Road trip specialist · Provence, Riviera, Alps & Corsica",
    kind: "specialist",
    bio: [
      "I grew up in the back of a Renault 4 somewhere between Avignon and the sea, which explains a lot: I still can't see a sign for a village perché without wanting to take it. I've driven every hairpin of the Verdon more times than I'd admit to my mechanic.",
      "My job is to make your loop feel effortless: the right market on the right morning, the terrace that saves a table for latecomers, the col that's worth the extra hour. When you message me from a lay-by asking where to have lunch, I'll already have an answer.",
      "Off duty, I'm usually on a bike somewhere above Sault, pretending the lavender is for my legs.",
    ],
    favouriteExit: "The D952 along the Verdon rim, early, before the camper vans wake up",
    languages: ["French", "English", "Italian"],
    image: photo("people:1", 0),
    placeholder: true,
  },
  {
    slug: "theo-nguyen",
    name: "Théo Nguyen",
    role: "Road trip specialist · Loire, Burgundy, Champagne & Alsace",
    kind: "specialist",
    bio: [
      "Before Rond-Point I spent six harvests carrying crates up Burgundian slopes, which is a very effective way to learn the difference between a Volnay and a Pommard (and your hamstrings' opinion of both).",
      "I design the gentler loops: the ones where you leave the car outside a château for a day and pedal between tastings instead. I'm fussy about distances, generous with picnic spots and slightly obsessed with finding growers who still answer the door themselves.",
      "Ask me about the best boulangerie on any given D-road. I keep a spreadsheet. I'm not sorry.",
    ],
    favouriteExit: "The Route des Grands Crus between Gevrey and Vougeot, windows down in September",
    languages: ["French", "English", "Vietnamese"],
    image: photo("people:2", 0),
    placeholder: true,
  },
  {
    slug: "amara-diallo",
    name: "Amara Diallo",
    role: "Road trip specialist · Atlantic France, Dordogne & Normandy",
    kind: "specialist",
    bio: [
      "I'm the one who sends you a voice note at 8am saying 'the tide is out, go now'. The Atlantic side of France runs on weather and tides, and I've learned to read both from my kitchen in Bordeaux.",
      "My loops take in the D-Day beaches, the Breton headlands, the castles of the Dordogne and the Basque hills. I love a day with one long, beautiful drive and an afternoon with nowhere to be.",
      "Favourite pastime: arguing with Breton friends about whether crêpes or galettes are the main event. (Galettes. Obviously.)",
    ],
    favouriteExit: "The D703 between Beynac and La Roque-Gageac, with the river on your right",
    languages: ["French", "English", "Wolof", "Spanish"],
    image: photo("people:8", 0),
    placeholder: true,
  },

  // ── Local hosts ────────────────────────────────────────────────
  {
    slug: "lucie-fabre",
    name: "Lucie Fabre",
    role: "Local host · Provence",
    kind: "host",
    regionSlug: "provence",
    bio: [
      "I live in a stone house in the Luberon with two cats, a temperamental fig tree and a list of market days pinned above the sink. When our guests arrive, I'm the person who hands over the keys to Provence (metaphorically; the car keys come from somewhere less romantic).",
      "I'll tell you which village is quiet on a Tuesday, where the lavender is actually flowering this week and how to order a pastis without looking like you read about it on the plane.",
    ],
    favouriteExit: "The lane from Bonnieux to Lacoste at golden hour",
    languages: ["French", "English"],
    image: photo("people:4", 0),
    placeholder: true,
  },
  {
    slug: "yann-le-goff",
    name: "Yann Le Goff",
    role: "Local host · Brittany",
    kind: "host",
    regionSlug: "brittany",
    bio: [
      "Fourth-generation Breton, first-generation person who can explain the tides to visitors without drawing a diagram on a napkin. (I still draw the diagram. Old habits.)",
      "I look after our guests along the coast from Saint-Malo to the Gulf of Morbihan: oyster shacks, coastal paths, the crêperie where the owner still decides what you're having.",
    ],
    favouriteExit: "The coast road at Ploumanac'h when the granite turns pink at sunset",
    languages: ["French", "Breton", "English"],
    image: photo("people:5", 0),
    placeholder: true,
  },
  {
    slug: "maialen-etcheverry",
    name: "Maialen Etcheverry",
    role: "Local host · French Basque Country",
    kind: "host",
    regionSlug: "french-basque-country",
    bio: [
      "I surf before breakfast, work through lunch (badly, because lunch here is serious) and spend the evenings arguing about pelota. I know the Basque coast from Biarritz to Hendaye and the hills behind it like my own kitchen.",
      "I'll fit your e-bike, point you towards the best gâteau basque in Espelette and teach you at least three words of Euskara. Milesker in advance.",
    ],
    favouriteExit: "The Corniche Basque between Socoa and Hendaye, any time the swell is up",
    languages: ["French", "Basque", "Spanish", "English"],
    image: photo("people:7", 0),
    placeholder: true,
  },
  {
    slug: "bastien-delpech",
    name: "Bastien Delpech",
    role: "Local host · Dordogne & Périgord",
    kind: "host",
    regionSlug: "dordogne-perigord",
    bio: [
      "My grandfather hunted truffles with a pig. I use a dog called Praline, who is better company and less likely to eat the profits. Between truffle seasons I paddle the Dordogne and look after our guests in the Périgord Noir.",
      "Ask me about the castles everyone sees and the ones nobody does. I'll also tell you which market sells the walnut cake worth the queue.",
    ],
    favouriteExit: "The little road up to Domme, then the view back down the valley",
    languages: ["French", "English", "Occitan (a bit)"],
    image: photo("people:6", 0),
    placeholder: true,
  },

  // ── Team ───────────────────────────────────────────────────────
  {
    slug: "margaux-delaunay",
    name: "Margaux Delaunay",
    role: "Founder",
    kind: "team",
    bio: [
      "I started Rond-Point after a decade of watching friends fly to France, drive the motorway to one famous town and drive the motorway back. The best of France lives between the dots on the map, so I set out to design trips that take the long way round.",
      "I still test-drive new loops myself. Somebody has to check the lunch stops.",
      "We've never once regretted the long way round. I hope you won't either.",
    ],
    favouriteExit: "Any exit marked 'Toutes directions' when I'm not in a hurry",
    languages: ["French", "English", "German"],
    image: photo("people:3", 0),
    placeholder: true,
  },
  {
    slug: "sam-okafor",
    name: "Sam Okafor",
    role: "Head of operations",
    kind: "team",
    bio: [
      "I'm the reason your car is waiting with the right child seats, the right gearbox and a full set of paperwork in the glovebox. Spreadsheets, suppliers and Plan Bs are my love language.",
      "If something goes sideways on the road, your specialist calls me, and I make it go forwards again.",
    ],
    favouriteExit: "The service area with the good coffee on the A75 (yes, there is one)",
    languages: ["English", "French", "Igbo"],
    image: photo("people:1", 1),
    placeholder: true,
  },
  {
    slug: "ines-moreau",
    name: "Inès Moreau",
    role: "Route book designer & cartographer",
    kind: "team",
    bio: [
      "I draw the maps and design the route books, which means I spend my days deciding which lay-by deserves a little illustrated picnic basket. It's a hard life.",
      "Every route book is printed for your trip alone, with the turns, the tips and space for your own scribbles. Many of our guests keep them on the shelf afterwards, and that's still my favourite compliment.",
    ],
    favouriteExit: "The single-track road over the Col de la Cayolle, slowly, with a sketchbook",
    languages: ["French", "English", "Portuguese"],
    image: photo("people:2", 1),
    placeholder: true,
  },
];

export function getPerson(slug: string): Person | undefined {
  return people.find((p) => p.slug === slug);
}

export const specialists = people.filter((p) => p.kind === "specialist");
export const hosts = people.filter((p) => p.kind === "host");
export const team = people.filter((p) => p.kind === "team");
