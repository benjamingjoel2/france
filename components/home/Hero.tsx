import Image from "next/image";
import Link from "next/link";
import type { Img } from "@/data/types";
import { imgUrl } from "@/lib/media";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { PlusHeading, SquareMark } from "@/components/ui/PlusHeading";
import { Parallax } from "@/components/motion/Parallax";
import { Squiggle } from "@/components/home/Pieces";
import { LiveClock } from "./LiveClock";

const rise = "inline-block animate-[rise_0.9s_cubic-bezier(0.645,0.045,0.355,1)_both]";

function Line({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <span className="block overflow-hidden pb-[0.06em]">
      <span className={rise} style={{ animationDelay: `${delay}s` }}>
        {children}
      </span>
    </span>
  );
}

/**
 * Golden-hour hero with Strade touches: live local time in France, a short
 * statement with a square marker and an arrow link, plus the featured loop card.
 */
export function Hero({
  image,
  focus,
  trip,
}: {
  image: Img;
  focus?: string;
  trip: { slug: string; title: string; meta: string; image: Img };
}) {
  return (
    <section className="relative flex h-[100svh] min-h-[680px] items-end overflow-hidden bg-night text-cream">
      <Parallax className="absolute inset-0" strength={0.22}>
        <Image src={imgUrl(image)} alt={image.alt} fill priority sizes="100vw" className="object-cover" style={{ objectPosition: focus }} />
      </Parallax>
      <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(115deg,rgba(244,194,28,0.35),rgba(214,112,64,0.18)_45%,transparent_70%)] mix-blend-soft-light" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[70%] bg-gradient-to-t from-night/90 via-night/45 to-transparent" />
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-night/60 to-transparent" />

      <div className="relative z-10 grid w-full gap-10 px-gutter pb-[var(--spacing-sec-xl)] lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7 xl:col-span-8">
          <PlusHeading>Bonne route</PlusHeading>
          <h1 className="font-display text-[clamp(52px,8.4vw,150px)] leading-[0.8]">
            <Line delay={0.1}>Take the</Line>
            <Line delay={0.2}>
              <Squiggle>long way</Squiggle>
            </Line>
            <Line delay={0.3}>round.</Line>
          </h1>
        </div>

        <div className="flex flex-col gap-6 lg:col-span-5 xl:col-span-4">
          <LiveClock />
          <p className="flex gap-3 text-[15px] leading-[1.55]">
            <SquareMark className="mt-[0.45em] text-[11px]" />
            <span>
              Tailor-made road trips through France: hand-picked stays, a route book worth keeping and one specialist on
              WhatsApp the whole way.
            </span>
          </p>
          <ArrowLink href="#explore">Further exploration</ArrowLink>
          <Link
            href={`/road-trips/${trip.slug}`}
            className="group grid w-full max-w-[400px] grid-cols-[96px_1fr] items-center gap-4 border border-cream/25 bg-night/55 p-3 backdrop-blur-md transition-colors hover:bg-night/75"
          >
            <span className="relative block aspect-square overflow-hidden">
              <Image src={imgUrl(trip.image, 300)} alt="" fill sizes="96px" className="object-cover transition-transform duration-500 group-hover:scale-110" />
            </span>
            <span>
              <span className="font-ui block text-[11px] text-sunflower">Featured loop</span>
              <span className="font-cond mt-1 block text-lg">{trip.title}</span>
              <span className="font-ui mt-1 block text-[11.5px] text-mist">{trip.meta} →</span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
