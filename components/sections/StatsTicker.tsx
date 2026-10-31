import { t, tp } from '@/lib/i18n/t';
import { site } from "@/config/site";
import { Marquee } from "@/components/motion/Marquee";

/** Black marquee band with our (placeholder) stats. */
export function StatsTicker() {
  const sentence = site.stats.map((s) => `${tp(s.value)} ${tp(s.label)}`).join(". ") + ". " + t("Take the long way round.");
  return (
    <section aria-label={t("Rond-Point in numbers")} className="bg-night py-[15px] text-cream">
      <p className="sr-only">{sentence}</p>
      <Marquee
        className="font-ui text-base"
        items={tp([
          ...site.stats.map((s) => (
            <span key={s.label} title={tp(s.placeholder ? "Placeholder figure: confirm before launch" : undefined)}>
              <strong className="font-medium">{tp(s.value)}</strong> {tp(s.label)}
            </span>
          )),
          "Take the long way round",
        ])}
      />
    </section>
  );
}
