import Image from "next/image";
import Link from "next/link";
import type { Img } from "@/data/types";
import { imgUrl } from "@/lib/media";
import { ButtonLink } from "@/components/ui/Button";
import { PlusHeading } from "@/components/ui/PlusHeading";
import { Reveal } from "@/components/motion/Reveal";
import { Parallax } from "@/components/motion/Parallax";
import { ImageReveal } from "@/components/motion/ImageReveal";
import { RotatingBadge, Squiggle } from "./Pieces";

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

export type HeroTrip = { slug: string; title: string; meta: string; image: Img };

/* ------------------------------------------------------------ Golden hour */

export function HeroGolden({ image, focus, trip }: { image: Img; focus?: string; trip: HeroTrip }) {
  return (
    <section className="relative flex h-[100svh] min-h-[620px] items-end overflow-hidden bg-night text-cream">
      <Parallax className="absolute inset-0" strength={0.22}>
        <Image src={imgUrl(image)} alt={image.alt} fill priority sizes="100vw" className="object-cover" style={{ objectPosition: focus }} />
      </Parallax>
      {/* warm golden-hour grade */}
      <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(115deg,rgba(244,194,28,0.35),rgba(214,112,64,0.18)_45%,transparent_70%)] mix-blend-soft-light" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[65%] bg-gradient-to-t from-night/90 via-night/40 to-transparent" />
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-night/60 to-transparent" />

      <div className="relative z-10 grid w-full gap-10 px-gutter pb-[var(--spacing-sec-xl)] lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-8">
          <Reveal immediate y={16}>
            <PlusHeading className="mb-[2.2em]">Bonne route · Rond-Point road trips</PlusHeading>
          </Reveal>
          <h1 className="font-display text-[clamp(52px,8.4vw,150px)] leading-[0.8]">
            <Line delay={0.1}>Take the</Line>
            <Line delay={0.2}>
              <Squiggle>long way</Squiggle>
            </Line>
            <Line delay={0.3}>round.</Line>
          </h1>
        </div>
        <Reveal immediate delay={0.7} y={24} className="lg:col-span-4 lg:justify-self-end">
          <Link
            href={`/road-trips/${trip.slug}`}
            className="group grid w-full max-w-[400px] grid-cols-[112px_1fr] items-center gap-4 border border-cream/25 bg-night/55 p-3 backdrop-blur-md transition-colors hover:bg-night/75"
          >
            <span className="relative block aspect-square overflow-hidden">
              <Image src={imgUrl(trip.image, 400)} alt="" fill sizes="112px" className="object-cover transition-transform duration-500 group-hover:scale-110" />
            </span>
            <span>
              <span className="font-ui block text-[11px] text-sunflower">Featured loop</span>
              <span className="font-cond mt-1 block text-lg">{trip.title}</span>
              <span className="font-ui mt-2 block text-[11.5px] text-mist">{trip.meta} →</span>
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ Lavender dusk */

export function HeroLavender({ image, focus }: { image: Img; focus?: string }) {
  return (
    <section className="relative flex h-[100svh] min-h-[640px] items-end overflow-hidden bg-night text-cream">
      <Parallax className="absolute inset-0" strength={0.22}>
        <Image src={imgUrl(image)} alt={image.alt} fill priority sizes="100vw" className="object-cover" style={{ objectPosition: focus }} />
      </Parallax>
      {/* lavender dusk duotone */}
      <div aria-hidden="true" className="absolute inset-0 bg-lavender mix-blend-multiply opacity-55" />
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(244,194,28,0.25),transparent_55%)] mix-blend-screen" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-night via-night/50 to-transparent" />

      <div className="relative z-10 flex w-full flex-col gap-10 px-gutter pb-[var(--spacing-sec-xl)] lg:flex-row lg:items-end lg:justify-between">
        <div>
          <Reveal immediate y={16}>
            <p className="font-ui mb-6 text-mist">
              <span lang="fr" className="text-cream">« Prenez le chemin des écoliers »</span> — French for taking the scenic route
            </p>
          </Reveal>
          <h1 className="font-display text-[clamp(52px,8vw,140px)] leading-[0.8]">
            <Line delay={0.1}>Take the long</Line>
            <Line delay={0.2}>
              way <span className="text-lavender-300">round.</span>
            </Line>
          </h1>
          <Reveal immediate delay={0.55} y={16}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <ButtonLink href="/plan-my-road-trip" variant="cream">
                Plan my road trip
              </ButtonLink>
              <span className="font-ui text-mist">Tailor-made · Self-drive · Drive &amp; e-bike</span>
            </div>
          </Reveal>
        </div>
        <Reveal immediate delay={0.8} y={0} className="self-end">
          <RotatingBadge href="/plan-my-road-trip" />
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ Riviera postcard */

export function HeroRiviera({ image, focus }: { image: Img; focus?: string }) {
  return (
    <section className="relative overflow-hidden bg-cream text-charcoal">
      <div className="bg-charcoal px-gutter pt-[calc(var(--header-h)+clamp(28px,4vw,64px))] pb-[clamp(20px,2vw,32px)] text-cream">
        <div className="font-ui mb-6 flex flex-wrap justify-between gap-3 text-mist">
          <Reveal immediate y={10}>
            <span>Bons baisers de la route</span>
          </Reveal>
          <Reveal immediate y={10} delay={0.1}>
            <span>Tailor-made road trips through France</span>
          </Reveal>
        </div>
        <h1 className="font-display text-[clamp(56px,11vw,190px)] leading-[0.8]">
          <Line delay={0.1}>The long way</Line>
          <span className="sr-only"> round.</span>
        </h1>
      </div>
      <div className="relative">
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1/2 bg-charcoal" />
        <div className="relative px-gutter">
          <ImageReveal className="aspect-[16/9] max-h-[78vh] w-full md:aspect-[21/9]">
            <Image src={imgUrl(image)} alt={image.alt} fill priority sizes="100vw" className="object-cover" style={{ objectPosition: focus }} />
          </ImageReveal>
          <div className="absolute right-[calc(var(--spacing-gutter)+16px)] -bottom-16 md:-bottom-20">
            <RotatingBadge href="/plan-my-road-trip" tone="dark" className="bg-cream" />
          </div>
        </div>
      </div>
      <div className="grid gap-8 px-gutter pt-[clamp(28px,3vw,48px)] pb-[var(--spacing-sec)] lg:grid-cols-12 lg:items-end">
        <Reveal className="lg:col-span-4" immediate delay={0.5}>
          <p className="max-w-[28em]">
            Hand-picked stays, a route book worth keeping and one specialist on WhatsApp from the first roundabout to the
            last.
          </p>
          <ButtonLink href="/self-drive" variant="charcoal" className="mt-6">
            See the loops
          </ButtonLink>
        </Reveal>
        <p className="font-display text-[clamp(56px,11vw,190px)] leading-[0.8] lg:col-span-8 lg:text-right" aria-hidden="true">
          <Line delay={0.35}>round.</Line>
        </p>
      </div>
    </section>
  );
}
