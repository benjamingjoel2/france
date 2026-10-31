import { tp } from '@/lib/i18n/t';
import { cn } from "@/lib/cn";

/** Continuous right-to-left ticker. Pauses on hover and for reduced motion. */
export function Marquee({
  items,
  className,
  duration = 45,
}: {
  items: React.ReactNode[];
  className?: string;
  duration?: number;
}) {
  const row = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((item, i) => (
        <li key={i} className="flex items-center whitespace-nowrap">
          <span className="px-[0.9em]">{tp(item)}</span>
          <span aria-hidden="true">•</span>
        </li>
      ))}
    </ul>
  );
  return (
    <div className={cn("group overflow-hidden", className)}>
      <div
        className="flex w-max animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none"
        style={{ ["--marquee-duration" as string]: `${duration}s` }}
      >
        {tp(row(false))}
        {tp(row(true))}
      </div>
    </div>
  );
}
