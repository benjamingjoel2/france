import { photo } from "@/lib/media";
import type { Testimonial } from "./types";

/** Sample reviews. Placeholder content: replace with real, verified reviews before launch. */
export const testimonials: Testimonial[] = [
  {
    id: "sarah-tom-provence",
    title: "We came back purple",
    body: [
      "We timed it for the lavender and it was even better than the photos. The route book was so beautiful we've put it on the coffee table.",
      "When we got a flat tyre outside Sault, Camille had a garage lined up before we'd found the jack. We'll never do a road trip without a specialist again.",
    ],
    name: "Sarah & Tom",
    country: "United Kingdom",
    tripSlug: "provence-lavender-hilltop-villages",
    rating: 5,
    image: photo(["hero:lavender", "region:provence"], 1),
    placeholder: true,
  },
  {
    id: "dana-mike-loire",
    title: "Château hopping, perfected",
    body: [
      "Arriving at Chenonceau by e-bike while everyone else queued in the car park was the highlight of our year. The pace was just right: enough to see everything, never rushed.",
      "Every restaurant Théo booked was a hit. We're already planning Burgundy.",
    ],
    name: "Dana & Mike",
    country: "USA",
    tripSlug: "loire-chateaux-loop",
    rating: 5,
    image: photo(["theme:chateau-hotel", "region:loire-valley"], 2),
    placeholder: true,
  },
  {
    id: "priya-josh-dordogne",
    title: "The kids still talk about the caves",
    body: [
      "We travelled with two children under ten and everything worked: the car seats were waiting, the drives were short and the canoe day was pure joy.",
      "The truffle dog was a bigger hit than any castle. Thank you for thinking of everything.",
    ],
    name: "Priya & Josh",
    country: "Canada",
    tripSlug: "dordogne-castles-caves",
    rating: 5,
    image: photo(["region:dordogne-perigord", "theme:caves-dordogne"], 1),
    placeholder: true,
  },
  {
    id: "grace-liam-corsica",
    title: "A thousand bends, zero regrets",
    body: [
      "Corsica's roads are no joke, and we were glad of the honest advice on timings. The views from Piana and Bavella were the best of the whole trip.",
      "One day was a little long for us, but our specialist rejigged the rest on WhatsApp in minutes. Book the automatic, trust us.",
    ],
    name: "Grace & Liam",
    country: "Australia",
    tripSlug: "corsica-island-loop",
    rating: 4,
    image: photo(["theme:corsica-road", "region:corsica"], 2),
    placeholder: true,
  },
  {
    id: "aoife-ciaran-normandy",
    title: "Moving, thoughtful, unforgettable",
    body: [
      "Our day on the D-Day beaches with the historian was the most moving day we've ever spent on holiday. Then the bay walk to Mont-Saint-Michel was pure magic.",
      "The stays were full of character and the cheese was dangerous. Highly recommended.",
    ],
    name: "Aoife & Ciarán",
    country: "Ireland",
    tripSlug: "normandy-d-day-mont-saint-michel",
    rating: 5,
    image: photo(["region:normandy-mont-saint-michel", "theme:dday-beaches"], 2),
    placeholder: true,
  },
  {
    id: "femke-joost-burgundy",
    title: "Pinot by pedal power",
    body: [
      "We're Dutch, so cycling wasn't the challenge: stopping at every cellar was. The e-bike days through Pommard and Meursault were heavenly.",
      "Beaune made a perfect base and we didn't touch the car for two days. Proost, Rond-Point!",
    ],
    name: "Femke & Joost",
    country: "Netherlands",
    tripSlug: "burgundy-grands-crus-loop",
    rating: 5,
    image: photo(["theme:autumn-vineyard", "region:burgundy"], 1),
    placeholder: true,
  },
];

export function testimonialsForTrip(tripSlug: string): Testimonial[] {
  return testimonials.filter((t) => t.tripSlug === tripSlug);
}
