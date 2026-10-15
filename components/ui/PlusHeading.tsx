import { cn } from "@/lib/cn";

/** Little roundabout glyph that replaces the reference's "+" eyebrow icon. */
export function RingGlyph({ className }: { className?: string }) {
  return (
    <svg width="13" height="13" viewBox="0 0 14 14" aria-hidden="true" className={className}>
      <circle cx="7" cy="7" r="4.6" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M7 0v2.4M7 11.6V14M0 7h2.4M11.6 7H14" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

/**
 * Eyebrow label. `below` stacks the glyph under the text (the reference's
 * "plus-heading-below"); otherwise the glyph sits before the text.
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
        "font-ui flex gap-[0.9em]",
        below ? "flex-col-reverse" : "items-center",
        center && "items-center text-center",
        "mb-[2em]",
        className,
      )}
    >
      <RingGlyph className={cn("shrink-0", below && !center && "self-start")} />
      <span>{children}</span>
    </Tag>
  );
}
