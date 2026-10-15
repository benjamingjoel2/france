"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

/**
 * Curtain wipe from the top while the image inside zooms from 1.4 to 1.
 * Children should be the image (fill) inside a sized wrapper.
 */
export function ImageReveal({ children, className }: { children: React.ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={cn("relative overflow-hidden", className)}
      initial={reduce ? { opacity: 0 } : { clipPath: "inset(0% 0% 100% 0%)" }}
      whileInView={reduce ? { opacity: 1 } : { clipPath: "inset(0% 0% 0% 0%)" }}
      viewport={{ once: true, margin: "0px 0px -25% 0px" }}
      transition={{ duration: 0.8, ease: [0.645, 0.045, 0.355, 1] }}
    >
      <motion.div
        className="absolute inset-0"
        initial={reduce ? undefined : { scale: 1.4 }}
        whileInView={reduce ? undefined : { scale: 1 }}
        viewport={{ once: true, margin: "0px 0px -25% 0px" }}
        transition={{ duration: 1.1, ease: [0.45, 0, 0.55, 1] }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
