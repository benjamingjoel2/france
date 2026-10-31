import { tp } from '@/lib/i18n/t';
import Link from '@/components/i18n/Link';
import { cn } from "@/lib/cn";
import { ArrowBox } from "@/components/ui/ArrowBox";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Full-width numbered rows (01, 02…) with a big display title and a square arrow.
 * Hover fills the row charcoal; on dark backgrounds it fills cream.
 */
export function LinkRows({
  items,
  tone = "light",
}: {
  items: { href: string; title: string; meta?: string }[];
  tone?: "light" | "dark";
}) {
  return (
    <ul className={cn("border-b", tone === "light" ? "hairline-light" : "hairline-dark")}>
      {items.map((item, i) => (
        <Reveal as="li" key={item.href} delay={i * 0.06} className={cn("border-t", tone === "light" ? "hairline-light" : "hairline-dark")}>
          <Link
            href={item.href}
            className={cn(
              "group relative grid grid-cols-[2.5rem_1fr_auto] items-start gap-3 px-gutter py-[clamp(22px,2.4vw,35px)] transition-colors duration-500 ease-[var(--ease-rp)] sm:grid-cols-[9%_1fr_auto]",
              tone === "light" ? "text-charcoal hover:bg-charcoal hover:text-cream" : "text-cream hover:bg-cream hover:text-charcoal",
            )}
          >
            <span className="font-ui pt-1 text-[12px]">{tp(String(i + 1).padStart(2, "0"))}</span>
            <span>
              <span className="font-display block max-w-[22ch] text-[clamp(22.7px,1.7vw+10.5px,46px)] leading-[0.9]">
                {tp(item.title)}
              </span>
              {item.meta && <span className="font-ui mt-3 block opacity-60">{tp(item.meta)}</span>}
            </span>
            <ArrowBox
              tone={tone}
              size={47}
              className={cn(
                "self-center max-sm:hidden",
                tone === "light"
                  ? "group-hover:border-cream group-hover:bg-cream group-hover:[&_svg]:!text-charcoal"
                  : "group-hover:border-charcoal group-hover:bg-charcoal group-hover:[&_svg]:!text-cream",
              )}
            />
          </Link>
        </Reveal>
      ))}
    </ul>
  );
}
