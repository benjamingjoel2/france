"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";

/** Fade-up reveal on scroll (opacity 0 → 1, y 40 → 0). */
export function Reveal({
  children,
  delay = 0,
  y = 40,
  immediate = false,
  as = "div",
  ...rest
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  immediate?: boolean;
  as?: "div" | "li" | "section" | "p" | "span";
} & Omit<HTMLMotionProps<"div">, "children">) {
  const reduce = useReducedMotion();
  const Component = motion[as] as typeof motion.div;
  const hidden = { opacity: 0, y: reduce ? 0 : y };
  const shown = { opacity: 1, y: 0 };
  return (
    <Component
      initial={hidden}
      {...(immediate ? { animate: shown } : { whileInView: shown, viewport: { once: true, margin: "0px 0px -15% 0px" } })}
      transition={{ duration: 0.6, ease: [0.645, 0.045, 0.355, 1], delay }}
      {...rest}
    >
      {children}
    </Component>
  );
}
