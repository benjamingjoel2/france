import { cn } from "@/lib/cn";

/**
 * Fade-up reveal. `immediate` plays once on load (CSS keyframes, for above-the-fold
 * content); otherwise the fade is tied to scroll with a CSS view timeline. Either way
 * the content is in the HTML and visible without JavaScript.
 */
export function Reveal({
  children,
  delay = 0,
  y = 40,
  immediate = false,
  as: Tag = "div",
  className,
  style,
  ...rest
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  immediate?: boolean;
  as?: "div" | "li" | "section" | "p" | "span";
} & React.HTMLAttributes<HTMLElement>) {
  return (
    <Tag
      className={cn(immediate ? "animate-[fade-up_0.6s_cubic-bezier(0.645,0.045,0.355,1)_both]" : "sd-reveal", className)}
      style={{
        ...style,
        ...(immediate
          ? { animationDelay: `${delay}s`, ["--fade-y" as string]: `${y}px` }
          : {
              ["--sd-y" as string]: `${y}px`,
              ["--sd-d" as string]: Math.round(delay * 30),
            }),
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
