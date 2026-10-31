"use client";

import { t, tp } from '@/lib/i18n/t';
import Image from "next/image";
import Link from '@/components/i18n/Link';
import { useEffect, useRef, useState } from "react";
import type { CardTrip } from "@/lib/cards";
import { paces, tripTypes } from "@/data/taxonomy";
import { imgUrl } from "@/lib/media";
import { brandHex } from "@/lib/colours";
import { useCanHoverVideo } from "@/lib/hooks";
import { cn } from "@/lib/cn";
import { PaceGlyph } from "@/components/ui/PaceGlyph";

const fontClass = { wide: "font-wide", mid: "font-display", narrow: "font-cond" } as const;
/** Poster title sizes in container-query units (card ≈ 437px wide at 1440). */
const sizeClass = {
  wide: { small: "text-[8.2cqi]", medium: "text-[9.6cqi]", large: "text-[11.5cqi]" },
  mid: { small: "text-[8.6cqi]", medium: "text-[9.9cqi]", large: "text-[13.2cqi]" },
  narrow: { small: "text-[9.4cqi]", medium: "text-[11cqi]", large: "text-[14cqi]" },
} as const;

export type TripCardProps = {
  trip: CardTrip;
  regionName: string;
  /** Text colour of the caption under the image. */
  tone?: "light" | "dark";
  sizes?: string;
  priority?: boolean;
  className?: string;
};

/**
 * Poster-style road-trip card: 7:10 image (full-bleed or framed on a brand-colour mat),
 * real-text poster title, vertical "REGION | TYPE" edge label and a looping video on hover.
 */
export function TripCard({ trip, regionName, tone = "light", sizes, priority, className }: TripCardProps) {
  const canVideo = useCanHoverVideo();
  const [hover, setHover] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { poster } = trip;
  const framed = poster.variant === "framed";

  // Play once the <video> exists (it is only mounted on first hover); pause on leave.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (hover && canVideo) v.play().catch(() => {});
    else v.pause();
  }, [hover, canVideo, videoSrc]);

  function enter() {
    setHover(true);
    if (canVideo && trip.hoverVideo && !videoSrc) setVideoSrc(trip.hoverVideo.src);
  }
  function leave() {
    setHover(false);
  }

  const showVideo = hover && canVideo && videoReady;
  const showHoverImage = hover && !showVideo;

  return (
    <Link
      href={`/road-trips/${trip.slug}`}
      onPointerEnter={(e) => e.pointerType === "mouse" && enter()}
      onPointerLeave={leave}
      onFocus={enter}
      onBlur={leave}
      className={cn("group relative block", tone === "light" ? "text-charcoal" : "text-cream", className)}
    >
      <div
        className="relative aspect-[7/10] overflow-hidden [container-type:inline-size]"
        style={framed ? { background: brandHex[poster.mat ?? trip.colour] } : undefined}
      >
        <div
          className={cn(
            "absolute overflow-hidden bg-charcoal-10",
            framed ? "top-[5%] right-[15%] bottom-[5%] left-[5%]" : "inset-0",
          )}
        >
          <Image
            src={imgUrl(trip.cardImage, 1000)}
            alt={tp(trip.cardImage.alt)}
            fill
            priority={priority}
            sizes={sizes ?? "(min-width: 1024px) 31vw, (min-width: 640px) 48vw, 92vw"}
            className="object-cover"
          />
          {/* Hover layer: second image (always) and video (fine pointers only) */}
          <Image
            src={imgUrl(trip.hoverImage, 1000)}
            alt=""
            fill
            loading="lazy"
            sizes={sizes ?? "(min-width: 1024px) 31vw, (min-width: 640px) 48vw, 92vw"}
            className={cn(
              "object-cover transition-opacity duration-300 ease-[var(--ease-rp)]",
              showHoverImage ? "opacity-100" : "opacity-0",
            )}
          />
          {videoSrc && (
            <video
              ref={videoRef}
              muted
              loop
              playsInline
              preload="none"
              aria-hidden="true"
              onPlaying={() => setVideoReady(true)}
              className={cn(
                "absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ease-[var(--ease-rp)]",
                showVideo ? "opacity-100" : "opacity-0",
              )}
            >
              <source src={videoSrc.replace(/\.mp4$/, ".webm")} type="video/webm" />
              <source src={videoSrc} type="video/mp4" />
            </video>
          )}
        </div>

        {/* Poster title */}
        <div
          aria-hidden="true"
          className={cn(
            "absolute inset-0 z-[3] flex flex-col p-[5%] pr-[15%] transition-colors duration-300",
            poster.vAlign === "top" ? "justify-start" : "justify-end",
            poster.hAlign === "center" ? "items-center text-center" : "items-start text-left",
            poster.dark ? "text-charcoal" : "text-cream",
            hover ? "bg-charcoal/20" : "bg-transparent",
          )}
        >
          <p
            className={cn(
              fontClass[poster.font],
              sizeClass[poster.font][poster.size],
              "[text-shadow:0_1px_18px_rgba(20,20,24,0.18)]",
            )}
          >
            {poster.title.map((l, i) => (
              <span key={i} className="block">
                {tp(l)}
              </span>
            ))}
          </p>
        </div>

        {/* Vertical edge label */}
        <p
          aria-hidden="true"
          className={cn(
            "font-display writing-vertical absolute right-[4.2%] bottom-[5%] z-[3] text-[length:max(10px,3.6cqi)] leading-none whitespace-nowrap",
            framed && poster.mat && (poster.mat === "sunflower" || poster.mat.endsWith("-300")) ? "text-charcoal" : "text-cream",
          )}
        >
          {tp(regionName)} <span className="mx-[0.4em]">|</span> {tp(tripTypes[trip.type].short)}
        </p>
      </div>

      <h3 className="font-cond pt-[1.15em] pb-[0.5em] text-lg">
        <span className="sr-only">{tp(trip.title)}: </span>
        {tp(regionName)}
      </h3>
      <ul className="font-ui flex flex-wrap items-center gap-x-2 gap-y-1 font-light">
        <li className="flex items-center gap-2">
          <PaceGlyph pace={trip.pace} />
          {tp(paces[trip.pace].label)}
          <span className="text-current/80 normal-case">· ~{tp(trip.avgDailyDriveHours)}{t("h/day")}</span>
        </li>
        <li aria-hidden="true">•</li>
        <li>
          {tp(trip.days)} {t("days / ")}{tp(trip.nights)} {t("nights")}</li>
      </ul>
    </Link>
  );
}
