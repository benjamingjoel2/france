import { cn } from "@/lib/cn";
import { Icon, type IconName } from "./Icon";

/**
 * Square bordered arrow box. Pair with a `group` parent: on hover a fill wipes in
 * from the left and the arrow inverts. `active` forces the filled state.
 */
export function ArrowBox({
  tone = "light",
  size = 47,
  icon = "arrow-right",
  active = false,
  className,
}: {
  tone?: "light" | "dark";
  size?: number;
  icon?: IconName;
  active?: boolean;
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      style={{ width: size, height: size }}
      className={cn(
        "relative inline-flex shrink-0 items-center justify-center overflow-hidden border",
        tone === "light" ? "hairline-light text-charcoal" : "hairline-dark text-cream",
        className,
      )}
    >
      <span
        className={cn(
          "absolute inset-0 origin-left transition-transform duration-300 ease-[var(--ease-rp)]",
          tone === "light" ? "bg-charcoal" : "bg-cream",
          active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100 group-focus-visible:scale-x-100",
        )}
      />
      <Icon
        name={icon}
        size={15}
        className={cn(
          "relative transition-colors delay-100 duration-300",
          tone === "light"
            ? active
              ? "text-cream"
              : "group-hover:text-cream group-focus-visible:text-cream"
            : active
              ? "text-charcoal"
              : "group-hover:text-charcoal group-focus-visible:text-charcoal",
        )}
      />
    </span>
  );
}
