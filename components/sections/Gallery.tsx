import Image from "next/image";
import type { Img } from "@/data/types";
import { imgUrl } from "@/lib/media";
import { cn } from "@/lib/cn";
import { Carousel } from "@/components/ui/Carousel";

/**
 * 16:9 photo slider that straddles the change from a charcoal section to a cream one,
 * with the next slide peeking in from the right.
 */
export function Gallery({ images, label, wide = false }: { images: Img[]; label: string; wide?: boolean }) {
  return (
    <section aria-label={label} className="relative bg-cream pb-[var(--spacing-sec-md)]">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-[28vw] max-h-[360px] bg-charcoal lg:h-[18vw]" />
      <Carousel
        label={label}
        tone="light"
        className="relative"
        itemClassName={cn("w-[88%]", wide ? "lg:w-[78%]" : "lg:w-[62%]")}
        trackClassName={cn(wide ? "lg:px-[11vw] lg:[scroll-padding-inline:11vw]" : "lg:px-[19vw] lg:[scroll-padding-inline:19vw]")}
        navClassName={cn(wide ? "lg:px-[11vw]" : "lg:px-[19vw]")}
        gap="clamp(14px,3vw,43px)"
      >
        {images.map((img, i) => (
          <figure key={i} className="relative aspect-video overflow-hidden bg-charcoal-10">
            <Image src={imgUrl(img, 1800)} alt={img.alt} fill sizes="(min-width:1024px) 62vw, 88vw" className="object-cover" />
            {img.credit && (
              <figcaption className="font-ui absolute right-2 bottom-2 bg-night/50 px-1.5 text-[10px] text-cream/80 normal-case">
                {img.credit}
              </figcaption>
            )}
          </figure>
        ))}
      </Carousel>
    </section>
  );
}
