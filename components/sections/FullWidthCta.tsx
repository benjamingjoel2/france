import { tp } from '@/lib/i18n/t';
import Image from "next/image";
import type { Img } from "@/data/types";
import { imgUrl } from "@/lib/media";
import { ButtonLink } from "@/components/ui/Button";
import { SplitWords } from "@/components/motion/SplitWords";
import { Reveal } from "@/components/motion/Reveal";
import { Parallax } from "@/components/motion/Parallax";

/** Full-bleed photo block: big heading, hairline, paragraph left, pill right. */
export function FullWidthCta({
  image,
  heading,
  text,
  cta,
  href,
}: {
  image: Img;
  heading: string;
  text: string;
  cta: string;
  href: string;
}) {
  return (
    <section className="relative flex min-h-[min(56.25vmax,100vh)] items-end overflow-hidden bg-night px-gutter pt-[var(--spacing-sec)] pb-[var(--spacing-sec-xl)] text-cream max-lg:min-h-[506px]">
      <Parallax className="absolute inset-0" strength={0.15}>
        <Image src={imgUrl(image, 2400)} alt="" fill sizes="100vw" className="object-cover opacity-80" />
      </Parallax>
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-night/85 to-transparent" />
      <div className="relative z-10 w-full">
        <SplitWords as="h2" text={tp(heading)} className="font-display text-3xl" />
        <div className="mt-[var(--spacing-sec-md)] flex flex-col gap-6 border-t hairline-dark pt-[var(--spacing-sec-md)] md:flex-row md:items-center md:justify-between">
          <Reveal className="max-w-[30em]">
            <p>{tp(text)}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <ButtonLink href={href} variant="cream">
              {tp(cta)}
            </ButtonLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
