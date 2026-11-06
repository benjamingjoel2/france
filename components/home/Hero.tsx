import { t, tp } from '@/lib/i18n/t';
import Image from "next/image";
import type { Img } from "@/data/types";
import { imgUrl } from "@/lib/media";
import { site } from "@/config/site";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { PlusHeading } from "@/components/ui/PlusHeading";
import { Parallax } from "@/components/motion/Parallax";

/**
 * Full-photo hero: one golden-hour photo, a small sentence-case headline bottom-left,
 * one line and one link.
 */
export function Hero({ image, focus }: { image: Img; focus?: string }) {
  return (
    <section className="relative flex h-[100svh] min-h-[640px] items-end overflow-hidden bg-night text-cream">
      <Parallax className="absolute inset-0" strength={0.22}>
        <Image src={imgUrl(image)} alt={tp(image.alt)} fill priority sizes="100vw" className="object-cover" style={{ objectPosition: focus }} />
      </Parallax>
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[65%] bg-gradient-to-t from-night/90 via-night/45 to-transparent" />
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-night/60 to-transparent" />

      <div className="relative z-10 w-full px-gutter pb-[var(--spacing-sec-xl)]">
        <div className="max-w-[44rem] animate-[rise_0.9s_cubic-bezier(0.645,0.045,0.355,1)_both]">
          <PlusHeading>{t("Bonne route")}</PlusHeading>
          <h1 className="font-display text-[clamp(2.5rem,4.6vw,4.25rem)] leading-[1] tracking-[-0.03em] normal-case">
            {t("Take the long way round.")}
          </h1>
          <p className="mt-6 max-w-[34rem] text-[15px] leading-[1.55] text-cream/90">
            {t("Tailor-made road trips through France: hand-picked stays, a route book worth keeping and one dedicated specialist the whole way.")}
          </p>
          <ArrowLink href={site.planCta.href} className="mt-6">
            {t(site.planCta.label)}
          </ArrowLink>
        </div>
      </div>
    </section>
  );
}
