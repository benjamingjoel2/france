import Image from "next/image";
import type { Img } from "@/data/types";
import { imgUrl } from "@/lib/media";
import { ButtonLink } from "@/components/ui/Button";
import { PlusHeading } from "@/components/ui/PlusHeading";
import { SplitWords } from "@/components/motion/SplitWords";
import { Reveal } from "@/components/motion/Reveal";
import { Parallax } from "@/components/motion/Parallax";

/** Full-screen featured-trip hero: big two-line headline bottom-left, trip pill bottom-right. */
export function HomeHero({
  image,
  eyebrow,
  headline,
  cta,
  href,
  focus,
}: {
  image: Img;
  /** CSS object-position for the photo, e.g. "68% 50%". */
  focus?: string;
  eyebrow: string;
  headline: readonly string[];
  cta: string;
  href: string;
}) {
  return (
    <section className="relative flex min-h-[560px] h-[100svh] items-end overflow-hidden bg-night px-gutter text-cream">
      <Parallax className="absolute inset-0" strength={0.25}>
        <Image
          src={imgUrl(image, 2400)}
          alt={image.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-85"
          style={focus ? { objectPosition: focus } : undefined}
        />
      </Parallax>
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-night/55 to-transparent" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-night/80 via-night/35 to-transparent" />

      <div className="relative z-10 flex w-full flex-col gap-8 pb-[var(--spacing-sec-xl)] lg:flex-row lg:items-end lg:justify-between">
        <div>
          <Reveal immediate y={20}>
            <PlusHeading as="p" className="mb-[2.2em]">
              {eyebrow}
            </PlusHeading>
          </Reveal>
          <SplitWords as="h1" lines={headline} immediate delay={0.15} className="font-display text-4xl" />
        </div>
        <Reveal immediate delay={0.6} y={20}>
          <ButtonLink href={href} variant="cream" icon="arrow-right">
            {cta}
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
