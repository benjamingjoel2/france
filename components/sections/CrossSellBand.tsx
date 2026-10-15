import Image from "next/image";
import type { Img } from "@/data/types";
import { imgUrl } from "@/lib/media";
import { ButtonLink } from "@/components/ui/Button";
import { SplitWords } from "@/components/motion/SplitWords";
import { Reveal } from "@/components/motion/Reveal";
import { ImageReveal } from "@/components/motion/ImageReveal";

/** Charcoal-10 band: heading top-left, copy + pill bottom-left between hairlines, 3:4 image right. */
export function CrossSellBand({
  lines,
  text,
  cta,
  href,
  image,
}: {
  lines: readonly string[];
  text: string;
  cta: string;
  href: string;
  image: Img;
}) {
  return (
    <section className="bg-charcoal-10 px-gutter py-[var(--spacing-sec-xl)] text-cream">
      <div className="grid gap-[var(--spacing-grid-gap)] lg:grid-cols-12">
        <div className="flex flex-col justify-between gap-[var(--spacing-sec)] lg:col-span-7">
          <div className="border-t hairline-dark pt-[var(--spacing-sec-lg)]">
            <SplitWords as="h2" lines={lines} className="font-display text-3xl" />
          </div>
          <div className="flex flex-col gap-6 border-b hairline-dark pb-[var(--spacing-sec-lg)] md:flex-row md:items-end md:justify-between">
            <Reveal className="max-w-[30em]">
              <p>{text}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <ButtonLink href={href} variant="cream">
                {cta}
              </ButtonLink>
            </Reveal>
          </div>
        </div>
        <div className="hidden lg:col-span-5 lg:block">
          <ImageReveal className="aspect-[3/4]">
            <Image src={imgUrl(image, 1200)} alt={image.alt} fill sizes="38vw" className="object-cover" />
          </ImageReveal>
        </div>
      </div>
    </section>
  );
}
