import Image from "next/image";
import type { Img } from "@/data/types";
import { imgUrl } from "@/lib/media";
import { cn } from "@/lib/cn";
import { Breadcrumbs, type Crumb } from "@/components/layout/Breadcrumbs";
import { Icon } from "@/components/ui/Icon";
import { SplitWords } from "@/components/motion/SplitWords";
import { Reveal } from "@/components/motion/Reveal";
import { Parallax } from "@/components/motion/Parallax";

/**
 * Tall photo hero for inner pages. The photo melts into the charcoal page via
 * top and bottom gradients; breadcrumbs sit over the image.
 */
export function ArticleHero({
  image,
  lines,
  crumbs,
  eyebrow,
  pin = false,
  align = "center",
  size = "4xl",
  height = "tall",
  children,
}: {
  image: Img;
  lines: readonly string[];
  crumbs: Crumb[];
  eyebrow?: string;
  pin?: boolean;
  align?: "center" | "left" | "bottom-left";
  size?: "3xl" | "4xl";
  height?: "tall" | "medium";
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-charcoal pt-[var(--header-h)] text-cream">
      <Parallax className="absolute inset-0" strength={0.2}>
        <Image src={imgUrl(image, 2400)} alt={image.alt} fill priority sizes="100vw" className="object-cover opacity-85" />
      </Parallax>
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-[clamp(12rem,18vw,15rem)] bg-gradient-to-b from-charcoal to-transparent" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />

      <Breadcrumbs items={crumbs} overlay />

      <div
        className={cn(
          "relative z-10 flex px-gutter py-[var(--spacing-sec)]",
          height === "tall" ? "min-h-[min(75vmin,720px)] max-md:min-h-[300px]" : "min-h-[min(52vmin,520px)] max-md:min-h-[260px]",
          align === "center" && "flex-col items-center justify-center text-center",
          align === "left" && "flex-col items-start justify-center",
          align === "bottom-left" && "flex-col items-start justify-end",
        )}
      >
        {eyebrow && (
          <Reveal immediate y={16}>
            <p className="font-ui mb-[2em] flex items-center gap-2">
              {pin && <Icon name="pin" size={15} />}
              {eyebrow}
            </p>
          </Reveal>
        )}
        <SplitWords
          as="h1"
          lines={lines}
          immediate
          delay={0.1}
          className={cn("font-display", size === "4xl" ? "text-4xl" : "text-3xl", align === "center" && "max-w-[12em]")}
        />
        {children}
      </div>
    </section>
  );
}
