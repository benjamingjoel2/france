import { cn } from "@/lib/cn";

/** Circular roundabout mark: a ring road, a central island, four exits and one car going round. */
export function LogoMark({ className, size = 30 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <g stroke="currentColor" strokeWidth="3.4" fill="none">
        <circle cx="20" cy="20" r="11" />
        {/* three exits: south, north-west, east */}
        <path d="M20 31v8M10.5 14.5 3.6 10.5M31 20h8" strokeLinecap="butt" />
      </g>
      <circle cx="20" cy="20" r="4.2" fill="currentColor" />
      <circle cx="27.8" cy="12.2" r="2.8" fill="var(--color-sunflower)" />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2 leading-none lg:gap-2.5", className)}>
      <LogoMark className="size-6 shrink-0 lg:size-[30px]" />
      <span className="font-wide text-[15px] tracking-[-0.01em] lg:text-[18px]">
        Rond<span aria-hidden="true">·</span>
        <span className="sr-only">-</span>Point
      </span>
    </span>
  );
}
