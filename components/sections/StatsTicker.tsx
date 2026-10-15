import { site } from "@/config/site";
import { Marquee } from "@/components/motion/Marquee";

/** Black marquee band with our (placeholder) stats. */
export function StatsTicker() {
  const sentence = site.stats.map((s) => `${s.value} ${s.label}`).join(". ") + ". Take the long way round.";
  return (
    <section aria-label="Rond-Point in numbers" className="bg-night py-[15px] text-cream">
      <p className="sr-only">{sentence}</p>
      <Marquee
        className="font-ui text-base"
        items={[
          ...site.stats.map((s) => (
            <span key={s.label} title={s.placeholder ? "Placeholder figure: confirm before launch" : undefined}>
              <strong className="font-medium">{s.value}</strong> {s.label}
            </span>
          )),
          "Take the long way round",
        ]}
      />
    </section>
  );
}
