import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { PlusHeading } from "@/components/ui/PlusHeading";
import { SplitWords } from "@/components/motion/SplitWords";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Section header used across the site: optional eyebrow, big display heading on the
 * left (cols 1–8) and an intro paragraph + actions on the right (cols 9–12).
 */
export function SectionIntro({
  eyebrow,
  lines,
  text,
  actions,
  size = "3xl",
  as = "h2",
  className,
  bottomAlign = false,
}: {
  eyebrow?: string;
  lines: readonly string[];
  text?: ReactNode;
  actions?: ReactNode;
  size?: "3xl" | "4xl";
  as?: "h1" | "h2";
  className?: string;
  /** Align the right column with the bottom of the heading (listing pages) instead of the top. */
  bottomAlign?: boolean;
}) {
  return (
    <div className={cn("grid gap-8 px-gutter lg:grid-cols-12", bottomAlign ? "lg:items-end" : "lg:items-start", className)}>
      <div className="lg:col-span-8">
        {eyebrow && (
          <Reveal immediate={as === "h1"}>
            <PlusHeading below>{eyebrow}</PlusHeading>
          </Reveal>
        )}
        <SplitWords
          as={as}
          lines={lines}
          immediate={as === "h1"}
          className={cn("font-display", size === "4xl" ? "text-4xl" : "text-3xl")}
        />
      </div>
      {(text || actions) && (
        <Reveal immediate={as === "h1"} delay={0.2} className={cn("lg:col-span-4", !bottomAlign && size === "4xl" && "lg:pt-[calc(var(--text-4xl)*1.7)]")}>
          {text && <div className="max-w-[30em]">{text}</div>}
          {actions && <div className="mt-6 flex flex-wrap gap-2">{actions}</div>}
        </Reveal>
      )}
    </div>
  );
}
