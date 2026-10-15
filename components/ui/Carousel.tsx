"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Children, useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { Icon } from "./Icon";

/**
 * Horizontal slider built on native scroll-snap (touch, trackpad and keyboard friendly),
 * with the reference's controls: two square arrow buttons and a 1px progress track.
 */
export function Carousel({
  children,
  label,
  tone = "light",
  itemClassName = "w-[82%] sm:w-[46%] lg:w-[calc((100%-2*var(--spacing-grid-gap))/3)]",
  className,
  trackClassName,
  navClassName,
  gap = "var(--spacing-grid-gap)",
  slideClassName,
}: {
  children: React.ReactNode;
  label: string;
  tone?: "light" | "dark";
  itemClassName?: string;
  className?: string;
  trackClassName?: string;
  navClassName?: string;
  gap?: string;
  /** Extra classes per slide index (e.g. hide the first slide on mobile). */
  slideClassName?: (string | undefined)[];
}) {
  const track = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const { scrollXProgress } = useScroll({ container: track });
  const smooth = useSpring(scrollXProgress, { stiffness: 260, damping: 40 });
  const items = Children.toArray(children);
  const [visibleRatio, setVisibleRatio] = useState(0.4);
  const thumbLeft = useTransform(smooth, (v) => `${v * (100 - visibleRatio * 100)}%`);

  const update = useCallback(() => {
    const el = track.current;
    if (!el) return;
    setAtStart(el.scrollLeft < 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
    setVisibleRatio(Math.min(1, el.clientWidth / el.scrollWidth));
  }, []);

  useEffect(() => {
    update();
    const el = track.current;
    if (!el) return;
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  const step = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const first = el.querySelector<HTMLElement>("[data-slide]");
    const w = first ? first.getBoundingClientRect().width : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * (w + 16), behavior: "smooth" });
  };

  // Click / drag on the progress track.
  const bar = useRef<HTMLDivElement>(null);
  const seek = (clientX: number) => {
    const el = track.current;
    const b = bar.current;
    if (!el || !b) return;
    const r = b.getBoundingClientRect();
    const p = Math.min(1, Math.max(0, (clientX - r.left) / r.width));
    el.scrollTo({ left: p * (el.scrollWidth - el.clientWidth) });
  };

  const border = tone === "light" ? "hairline-light" : "hairline-dark";
  const btn = cn(
    "flex size-[clamp(44px,3vw+16px,59px)] items-center justify-center border transition-colors duration-300 disabled:opacity-20",
    border,
    tone === "light" ? "hover:bg-charcoal hover:text-cream" : "hover:bg-cream hover:text-charcoal",
  );

  return (
    <div className={className}>
      <div
        ref={track}
        role="region"
        aria-roledescription="carousel"
        aria-label={label}
        tabIndex={0}
        className={cn(
          "no-scrollbar flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain scroll-smooth px-gutter [scroll-padding-inline:var(--spacing-gutter)]",
          trackClassName,
        )}
        style={{ gap }}
      >
        {items.map((child, i) => (
          <div
            key={i}
            data-slide
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${items.length}`}
            className={cn("relative shrink-0 snap-start", itemClassName, slideClassName?.[i])}
          >
            {child}
          </div>
        ))}
        <div aria-hidden="true" className="w-px shrink-0" />
      </div>

      <div className={cn("mt-[var(--spacing-sec-md)] flex items-center gap-[1.4vw] px-gutter", navClassName)}>
        <div className="flex">
          <button type="button" aria-label="Previous" disabled={atStart} onClick={() => step(-1)} className={btn}>
            <Icon name="chevron-left" size={16} />
          </button>
          <button type="button" aria-label="Next" disabled={atEnd} onClick={() => step(1)} className={cn(btn, "-ml-px")}>
            <Icon name="chevron-right" size={16} />
          </button>
        </div>
        <div
          ref={bar}
          aria-hidden="true"
          className="relative h-5 flex-1 cursor-pointer"
          onPointerDown={(e) => {
            (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
            seek(e.clientX);
          }}
          onPointerMove={(e) => e.buttons === 1 && seek(e.clientX)}
        >
          <div className={cn("absolute inset-x-0 top-1/2 h-px", tone === "light" ? "bg-charcoal/15" : "bg-cream/15")} />
          <motion.div
            className={cn("absolute top-1/2 h-px -translate-y-[0.5px]", tone === "light" ? "bg-charcoal" : "bg-cream")}
            style={{ left: thumbLeft, width: `${visibleRatio * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}
