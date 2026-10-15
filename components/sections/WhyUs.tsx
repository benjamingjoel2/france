import Image from "next/image";
import type { Img } from "@/data/types";
import { imgUrl } from "@/lib/media";
import { ButtonLink } from "@/components/ui/Button";
import { PlusHeading } from "@/components/ui/PlusHeading";
import { SplitWords } from "@/components/motion/SplitWords";
import { Reveal } from "@/components/motion/Reveal";
import { ImageReveal } from "@/components/motion/ImageReveal";

/** Charcoal brand-story block: staggered images left, condensed statement and copy right. */
export function WhyUs({
  eyebrow,
  statement,
  body,
  images,
  cta,
  href,
}: {
  eyebrow: string;
  statement: string;
  body: string;
  images: [Img, Img];
  cta: string;
  href: string;
}) {
  return (
    <section className="relative overflow-hidden bg-charcoal py-[var(--spacing-sec)] text-cream">
      <div className="mb-[var(--spacing-sec-xl)] flex gap-[var(--spacing-grid-gap)] lg:absolute lg:top-[var(--spacing-sec)] lg:left-0 lg:mb-0 lg:w-[38%] lg:flex-col">
        <ImageReveal className="aspect-[4/5] w-[58%] lg:w-[66%]">
          <Image src={imgUrl(images[0], 1000)} alt={images[0].alt} fill sizes="(min-width:1024px) 25vw, 58vw" className="object-cover" />
        </ImageReveal>
        <ImageReveal className="mt-[28%] aspect-[4/3] w-[38%] lg:mt-0 lg:ml-[44%] lg:w-[46%]">
          <Image src={imgUrl(images[1], 800)} alt={images[1].alt} fill sizes="(min-width:1024px) 18vw, 38vw" className="object-cover" />
        </ImageReveal>
      </div>

      <div className="relative px-gutter lg:min-h-[52vw] xl:min-h-[44vw]">
        <div className="lg:ml-[41.66%] lg:w-[58%] xl:w-[48%]">
          <Reveal>
            <PlusHeading>{eyebrow}</PlusHeading>
          </Reveal>
          <SplitWords as="h2" text={statement} className="font-cond text-2xl" stagger={0.025} />
        </div>
        <div className="mt-[var(--spacing-sec-lg)] sm:ml-[16.66%] sm:w-[66%] md:ml-[33.33%] md:w-[50%] lg:ml-[58.33%] lg:w-[36%] xl:ml-[66.66%] xl:w-[30%]">
          <Reveal>
            <p className="mb-8">{body}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <ButtonLink href={href} variant="cream">
              {cta}
            </ButtonLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
