"use client";

import { t, tp } from '@/lib/i18n/t';
import Link from '@/components/i18n/Link';
import { animate, motion, useInView, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { LogoMark } from "@/components/layout/Logo";

const EASE = [0.645, 0.045, 0.355, 1] as const;

/* ------------------------------------------------------------ Squiggle underline */

/** A hand-drawn road that draws itself under a word (on load). */
export function Squiggle({ children, colour = "var(--color-sunflower)" }: { children: React.ReactNode; colour?: string }) {
  return (
    <span className="relative inline-block">
      {children}
      <svg
        aria-hidden="true"
        viewBox="0 0 300 30"
        preserveAspectRatio="none"
        className="absolute -bottom-[0.18em] left-0 h-[0.22em] w-full overflow-visible"
      >
        <path
          d="M4 18 C 40 4, 70 28, 110 14 S 180 2, 220 16 S 280 26, 296 10"
          fill="none"
          stroke={colour}
          strokeWidth="9"
          strokeLinecap="round"
          className="[stroke-dasharray:420] [stroke-dashoffset:420] animate-[draw_1.4s_cubic-bezier(0.645,0.045,0.355,1)_0.9s_forwards] motion-reduce:[stroke-dashoffset:0]"
        />
      </svg>
    </span>
  );
}

/* ------------------------------------------------------------ Rotating badge */

/** Circular French/English slogan that slowly turns around the roundabout mark. */
export function RotatingBadge({
  href,
  text = "Prenez le chemin des écoliers • Take the long way round • ",
  className,
  tone = "light",
}: {
  href: string;
  text?: string;
  className?: string;
  tone?: "light" | "dark";
}) {
  const fg = tone === "light" ? "var(--color-cream)" : "var(--color-charcoal)";
  return (
    <Link
      href={href}
      aria-label={t("Plan my road trip")}
      className={cn("group relative block size-[150px] rounded-full lg:size-[184px]", className)}
    >
      <svg viewBox="0 0 200 200" aria-hidden="true" className="absolute inset-0 h-full w-full animate-[spin-slow_22s_linear_infinite] motion-reduce:animate-none">
        <defs>
          <path id="badge-ring" d="M100 100 m -78 0 a 78 78 0 1 1 156 0 a 78 78 0 1 1 -156 0" />
        </defs>
        <text fill={fg} fontSize="14.5" letterSpacing="2.4" style={{ fontFamily: "var(--font-mono)", textTransform: "uppercase" }}>
          <textPath href="#badge-ring">{tp(text)}</textPath>
        </text>
      </svg>
      <span
        className="absolute inset-[30%] flex items-center justify-center rounded-full bg-sunflower text-charcoal transition-transform duration-500 ease-[var(--ease-rp)] group-hover:scale-110 group-hover:rotate-[-25deg]"
      >
        <LogoMark size={44} />
      </span>
    </Link>
  );
}

/* ------------------------------------------------------------ Count-up stats */

function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });
  const reduce = useReducedMotion();
  const match = value.match(/^(\D*)(\d+)(.*)$/);
  const target = match ? parseInt(match[2], 10) : 0;
  const [n, setN] = useState(0);
  const hasNumber = !!match;
  useEffect(() => {
    if (!inView || !hasNumber) return;
    const c = animate(0, target, {
      duration: reduce ? 0 : 1.6,
      ease: EASE,
      onUpdate: (v) => setN(Math.round(v)),
    });
    return () => c.stop();
  }, [inView, reduce, target, hasNumber]);
  if (!match) return <span ref={ref}>{tp(value)}</span>;
  return (
    <span ref={ref} aria-label={tp(value)}>
      <span aria-hidden="true">
        {tp(match[1])}
        {tp(n)}
        {tp(match[3])}
      </span>
    </span>
  );
}

export function CountUpStats({
  stats,
  tone = "dark",
  className,
}: {
  stats: readonly { value: string; label: string }[];
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <dl
      className={cn(
        "grid grid-cols-2 border-t lg:grid-cols-4",
        tone === "dark" ? "hairline-dark text-cream" : "hairline-light text-charcoal",
        className,
      )}
    >
      {stats.map((s, i) => (
        <div
          key={s.label}
          className={cn(
            "flex flex-col-reverse justify-end gap-3 border-b py-7 pr-5 lg:border-b-0",
            tone === "dark" ? "hairline-dark" : "hairline-light",
            i < stats.length - 1 && "lg:border-r",
            i > 0 && "lg:pl-6",
          )}
        >
          <dt className="font-ui opacity-75">{tp(s.label)}</dt>
          <dd className="font-display text-[clamp(52px,6vw,104px)]">
            <CountUp value={s.value} />
          </dd>
        </div>
      ))}
    </dl>
  );
}

/* ------------------------------------------------------------ Scroll-drawn road: how it works */

export function HowItWorks({
  steps,
  title = ["Four exits to", "your road trip"],
}: {
  steps: { eyebrow: string; title: string; text: string }[];
  title?: string[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
  const length = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <section className="relative overflow-hidden bg-cream py-[var(--spacing-sec)] text-charcoal">
      <div className="px-gutter">
        <h2 className="font-display text-3xl">
          {title.map((l) => (
            <span key={l} className="block">
              {tp(l)}
            </span>
          ))}
        </h2>
      </div>
      <div ref={ref} className="relative mt-[var(--spacing-sec-xl)] px-gutter">
        {/* The road */}
        <svg aria-hidden="true" viewBox="0 0 1000 1000" preserveAspectRatio="none" className="absolute inset-0 hidden h-full w-full lg:block">
          <path
            d="M120 0 C 120 160, 880 120, 880 260 S 120 420, 120 560 S 880 700, 880 840 S 500 980, 500 1000"
            fill="none"
            stroke="var(--color-charcoal)"
            strokeOpacity="0.07"
            strokeWidth="46"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />
          <motion.path
            d="M120 0 C 120 160, 880 120, 880 260 S 120 420, 120 560 S 880 700, 880 840 S 500 980, 500 1000"
            fill="none"
            stroke="var(--color-sunflower)"
            strokeWidth="4"
            strokeDasharray="14 12"
            vectorEffect="non-scaling-stroke"
            style={{ pathLength: reduce ? 1 : length }}
          />
        </svg>
        <ol className="relative grid gap-12 lg:gap-0">
          {steps.map((s, i) => (
            <motion.li
              key={s.title}
              initial={{ opacity: 0, y: reduce ? 0 : 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -20% 0px" }}
              transition={{ duration: 0.7, ease: EASE }}
              className={cn(
                "max-w-[440px] lg:py-[clamp(40px,5vw,90px)]",
                i % 2 === 1 ? "lg:ml-auto lg:text-right" : "lg:ml-[4%]",
              )}
            >
              <p className="font-ui mb-4 inline-flex items-center gap-3">
                <span className="flex size-9 items-center justify-center rounded-full bg-charcoal text-cream">{tp(i + 1)}</span>
                {tp(s.eyebrow)}
              </p>
              <h3 className="font-cond text-2xl">{tp(s.title)}</h3>
              <p className="mt-4">{tp(s.text)}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
