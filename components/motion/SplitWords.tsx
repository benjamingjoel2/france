"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

type Tag = "h1" | "h2" | "h3" | "p" | "span" | "div";

/**
 * Headline that rises in word by word when it scrolls into view
 * (our take on the reference's split-text reveal).
 * Pass `lines` to force line breaks; each line is split into words.
 */
export function SplitWords({
  text,
  lines,
  as = "h2",
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
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -20% 0px" });
  const reduce = useReducedMotion();
  const show = immediate || inView;
  const Component = motion[as];
  const rows = lines ?? [text ?? ""];
  let i = 0;

  return (
    <Component ref={ref as never} className={className}>
      {rows.map((line, li) => (
        <span key={li} className="block">
          {line.split(" ").map((word, wi, arr) => {
            const idx = i++;
            return (
              <span key={wi} className="inline-block overflow-hidden pb-[0.06em] -mb-[0.06em] align-bottom">
                <motion.span
                  className="inline-block will-change-transform"
                  initial={reduce ? { opacity: 0 } : { y: "105%" }}
                  animate={show ? (reduce ? { opacity: 1 } : { y: "0%" }) : undefined}
                  transition={{ duration: reduce ? 0.3 : 0.8, ease: [0.645, 0.045, 0.355, 1], delay: delay + idx * stagger }}
                >
                  {word}
                </motion.span>
                {wi < arr.length - 1 ? " " : null}
              </span>
            );
          })}
        </span>
      ))}
    </Component>
  );
}
