import type { Pace } from "@/data/types";
import { paces } from "@/data/taxonomy";

/** Three rising bars, filled up to the pace level (our stand-in for the reference's level glyphs). */
export function PaceGlyph({ pace, className }: { pace: Pace; className?: string }) {
  const n = paces[pace].dots;
  const bars = [
    { x: 0.5, h: 6 },
    { x: 5, h: 9.5 },
    { x: 9.5, h: 13 },
  ];
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" aria-hidden="true" className={className}>
      {bars.map((b, i) => (
        <rect
          key={i}
          x={b.x}
          y={13 - b.h + 0.5}
          width="3"
          height={b.h - 1}
          fill={i < n ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1"
        />
      ))}
    </svg>
  );
}
