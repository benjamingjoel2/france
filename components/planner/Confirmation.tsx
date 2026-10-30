"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";
import { site } from "@/config/site";
import { ButtonLink } from "@/components/ui/Button";

/** Trig rounded to 3 decimals so server and client render identical SVG attributes. */
const rc = (a: number) => Math.round(Math.cos(a) * 1000) / 1000;
const rs = (a: number) => Math.round(Math.sin(a) * 1000) / 1000;

/** Final screen: the little car completes one full lap of the roundabout. */
export function Confirmation({ name }: { name: string }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLHeadingElement>(null);
  useEffect(() => ref.current?.focus(), []);

  return (
    <div className="grid items-center gap-[var(--spacing-sec-lg)] lg:grid-cols-12" role="status">
      <div className="mx-auto w-full max-w-[360px] lg:col-span-5">
        <svg viewBox="0 0 300 300" className="w-full" aria-hidden="true">
          {[0, 90, 180, 270].map((a) => (
            <line
              key={a}
              x1={150 + rc((a * Math.PI) / 180) * 95}
              y1={150 + rs((a * Math.PI) / 180) * 95}
              x2={150 + rc((a * Math.PI) / 180) * 145}
              y2={150 + rs((a * Math.PI) / 180) * 145}
              stroke="var(--color-charcoal-10)"
              strokeWidth="18"
            />
          ))}
          <circle cx="150" cy="150" r="80" fill="none" stroke="var(--color-charcoal-10)" strokeWidth="30" />
          <motion.circle
            cx="150"
            cy="150"
            r="80"
            fill="none"
            stroke="var(--color-sunflower)"
            strokeWidth="4"
            strokeLinecap="round"
            initial={{ pathLength: reduce ? 1 : 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.2, ease: [0.645, 0.045, 0.355, 1] }}
            style={{ rotate: -90, scaleY: -1, transformOrigin: "150px 150px" }}
          />
          <circle cx="150" cy="150" r="58" fill="var(--color-vineyard-300)" />
          <motion.g
            initial={{ rotate: 0 }}
            animate={{ rotate: reduce ? 0 : -360 }}
            transition={{ duration: 2.2, ease: [0.645, 0.045, 0.355, 1] }}
            style={{ transformOrigin: "150px 150px", transformBox: "view-box" }}
          >
            <rect x="141" y="58" width="18" height="28" rx="6" fill="var(--color-sunflower)" stroke="var(--color-night)" strokeWidth="2" transform="rotate(90 150 72)" />
          </motion.g>
        </svg>
      </div>
      <div className="lg:col-span-6 lg:col-start-7">
        <p className="font-ui mb-3 inline-flex rounded-[3px] bg-vineyard px-2 py-1 text-cream">Route received</p>
        <h2 ref={ref} tabIndex={-1} className="font-display text-3xl outline-none">
          Merci{name ? `, ${name}` : ""}.
        </h2>
        <div className="mt-6 max-w-[34em] space-y-4 text-mist">
          <p>
            Your road trip is in the hands of a {site.name} specialist. They&apos;ll be in touch within [24 hours] with first
            ideas, questions about the details only you know, and probably a strong opinion about where to have lunch.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap gap-2">
          <ButtonLink href="/journal" variant="stroke-light">
            Read the journal
          </ButtonLink>
        </div>
        <p className="font-display mt-[var(--spacing-sec-lg)] text-2xl text-sunflower">Take the long way round.</p>
      </div>
    </div>
  );
}
