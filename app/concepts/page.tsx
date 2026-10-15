import Image from "next/image";
import Link from "next/link";
import { site } from "@/config/site";
import { imgUrl, photo } from "@/lib/media";
import { ArrowBox } from "@/components/ui/ArrowBox";

const concepts = [
  {
    href: "/concepts/golden-hour",
    name: "Golden hour",
    tag: "Closest to the reference",
    text: "Warm, sun-drenched grade over the reference layout. A hand-drawn road underlines the headline, a French ticker, counting stats and a road that draws itself as you scroll through how it works.",
    image: site.featuredTrip.image,
  },
  {
    href: "/concepts/lavender-dusk",
    name: "Lavender dusk",
    tag: "Moody & cinematic",
    text: "Lavender duotone hero with a slowly turning « chemin des écoliers » badge. Trips glide sideways in a pinned gallery as you scroll, and the calendar becomes a month strip.",
    image: photo("region:provence"),
  },
  {
    href: "/concepts/riviera",
    name: "Riviera postcard",
    tag: "Bright & playful",
    text: "Riviera navy and cream. Giant split headline around the photo, a stamp badge, trips that stack like postcards as you scroll, and reviews written on the back of a postcard.",
    image: photo("region:cote-d-azur"),
  },
];

export default function ConceptsPage() {
  return (
    <div className="bg-charcoal px-gutter pt-[calc(var(--header-h)+var(--spacing-sec-lg))] pb-[var(--spacing-sec)] text-cream">
      <p className="font-ui mb-6 text-mist">Private preview · not live</p>
      <h1 className="font-display text-4xl">
        <span className="block">Three</span>
        <span className="block">directions</span>
      </h1>
      <p className="mt-6 max-w-[34em] text-mist">
        Each is the real homepage, with live data, animations, hover videos and the roundabout selector. Open each one, scroll all the way, then tell us which way to take.
      </p>
      <ul className="mt-[var(--spacing-sec-xl)] grid gap-[var(--spacing-grid-gap)] lg:grid-cols-3">
        {concepts.map((c, i) => (
          <li key={c.href}>
            <Link href={c.href} className="group block">
              <span className="relative block aspect-[4/5] overflow-hidden bg-charcoal-10">
                <Image
                  src={imgUrl(c.image, 1000)}
                  alt=""
                  fill
                  sizes="(min-width:1024px) 31vw, 100vw"
                  priority={i === 0}
                  className="object-cover transition-transform duration-700 ease-[var(--ease-rp)] group-hover:scale-105"
                  style={i === 0 ? { objectPosition: "68% 50%" } : undefined}
                />
                <span className="font-ui absolute top-4 left-4 rounded-full bg-cream px-3 py-1 text-charcoal">{c.tag}</span>
              </span>
              <span className="mt-5 flex items-start justify-between gap-6">
                <span>
                  <span className="font-ui block text-mist">Concept {i + 1}</span>
                  <span className="font-cond mt-1 block text-2xl">{c.name}</span>
                  <span className="mt-3 block text-[14px] text-mist">{c.text}</span>
                </span>
                <ArrowBox tone="dark" />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
