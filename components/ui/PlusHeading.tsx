import { t } from '@/lib/i18n/t';
import { cn } from "@/lib/cn";

/** Small square marker (■) used next to statements and labels. */
export function SquareMark({ className }: { className?: string }) {
  return <span aria-hidden="true" className={cn("inline-block size-[0.55em] shrink-0 bg-current", className)} />;
}

/** Kept for places that still use the roundabout glyph (e.g. form confirmations). */
export function RingGlyph({ className }: { className?: string }) {
  return (
    <svg width="13" height="13" viewBox="0 0 14 14" aria-hidden="true" className={className}>
      <circle cx="7" cy="7" r="4.6" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M7 0v2.4M7 11.6V14M0 7h2.4M11.6 7H14" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

/**
 * Eyebrow label in brackets: "[ OUR MISSION ]". `below` adds a square marker
 * underneath (for labels that sit above a big statement).
 */
export function PlusHeading({
  children,
  below = false,
  as: Tag = "p",
  className,
  center = false,
}: {
  children: React.ReactNode;
  below?: boolean;
  as?: "p" | "h1" | "h2" | "h3" | "span";
  className?: string;
  center?: boolean;
}) {
  return (
    <Tag
      className={cn(
        "font-ui mb-[2em] flex gap-[0.9em] tracking-[0.06em]",
        below ? "flex-col" : "items-center",
        center && "items-center text-center",
        className,
      )}
    >
      <span>
        <span aria-hidden="true">{t("[ ")}</span>
        {children}
        <span aria-hidden="true">{t(" ]")}</span>
      </span>
      {below && <SquareMark className={cn("text-[11px]", !center && "self-start")} />}
    </Tag>
  );
}
