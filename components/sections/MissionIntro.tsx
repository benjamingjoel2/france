import Image from "next/image";
import type { Img } from "@/data/types";
import { imgUrl } from "@/lib/media";
import { PlusHeading } from "@/components/ui/PlusHeading";
import { SplitWords } from "@/components/motion/SplitWords";
import { Reveal } from "@/components/motion/Reveal";
import { ImageReveal } from "@/components/motion/ImageReveal";

/**
 * Charcoal mission block: eyebrow + condensed statement on the right half,
 * then a square image (left) and a 3:2 image bleeding off the right edge.
 */
export function MissionIntro({
  eyebrow,
  statement,
  images,
}: {
  eyebrow: string;
  statement: string;
  images: [Img, Img];
}) {
  return (
    <section className="bg-charcoal text-cream">
      <div className="px-gutter py-[var(--spacing-sec)]">
        <div className="md:ml-[16.66%] md:w-[66%] lg:ml-[41.66%] lg:w-[50%] xl:ml-[50%] xl:w-[42%]">
          <Reveal>
            <PlusHeading below>{eyebrow}</PlusHeading>
          </Reveal>
          <SplitWords as="h2" text={statement} className="font-cond text-2xl" stagger={0.02} />
        </div>
      </div>
      <div className="flex items-start gap-[var(--spacing-grid-gap)] pb-[var(--spacing-sec)]">
        <div className="w-1/2 pl-gutter lg:mt-[8%] lg:w-[41.66%] lg:pr-[8.33%]">
          <ImageReveal className="aspect-square">
            <Image src={imgUrl(images[0], 1000)} alt={images[0].alt} fill sizes="(min-width:1024px) 33vw, 50vw" className="object-cover" />
          </ImageReveal>
        </div>
        <div className="mt-[30%] w-1/2 lg:mt-[16%]">
          <ImageReveal className="aspect-[3/2]">
            <Image src={imgUrl(images[1], 1400)} alt={images[1].alt} fill sizes="50vw" className="object-cover" />
          </ImageReveal>
        </div>
      </div>
    </section>
  );
}
