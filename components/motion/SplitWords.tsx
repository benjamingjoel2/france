import { tp } from '@/lib/i18n/t';
import { Fragment } from "react";
import { cn } from "@/lib/cn";

type Tag = "h1" | "h2" | "h3" | "p" | "span" | "div";

/**
 * Headline that rises in word by word. `immediate` plays on load (CSS keyframes);
 * otherwise each word is tied to the heading's position on screen with a CSS view
 * timeline. The text is always in the HTML and readable without JavaScript.
 * Pass `lines` to force line breaks; each line is split into words.
 */
export function SplitWords({
  text,
  lines,
  as: Component = "h2",
  className,
  delay = 0,
  immediate = false,
  stagger = 0.045,
}: {
  text?: string;
  lines?: readonly string[];
  as?: Tag;
  className?: string;
  delay?: number;
  /** Animate on mount rather than on scroll (heroes). */
  immediate?: boolean;
  stagger?: number;
}) {
  const rows = lines ?? [text ?? ""];
  // Scroll-range offset per word, in % of the timeline; capped so long statements still finish.
  const step = Math.min(stagger * 40, 2);
  let i = 0;

  return (
    <Component className={cn(!immediate && "sd-words", className)}>
      {rows.map((line, li) => (
        <span key={li} className="block">
          {line.split(" ").map((word, wi, arr) => {
            const idx = i++;
            return (
              <Fragment key={wi}>
                <span className="inline-block overflow-hidden pb-[0.06em] -mb-[0.06em] align-bottom">
                  {immediate ? (
                    <span
                      className="inline-block animate-[rise_0.8s_cubic-bezier(0.645,0.045,0.355,1)_both]"
                      style={{ animationDelay: `${delay + idx * stagger}s` }}
                    >
                      {tp(word)}
                    </span>
                  ) : (
                    <span
                      className="sd-word inline-block"
                      style={{
                        ["--sd-i" as string]: Math.min(Math.round((idx * step + delay * 30) * 10) / 10, 30),
                      }}
                    >
                      {tp(word)}
                    </span>
                  )}
                </span>
                {tp(wi < arr.length - 1 ? " " : null)}
              </Fragment>
            );
          })}
        </span>
      ))}
    </Component>
  );
}
