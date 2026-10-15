import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Icon, type IconName } from "./Icon";

export type ButtonVariant = "cream" | "charcoal" | "stroke-light" | "stroke-dark" | "sign" | "sunflower";

const variants: Record<ButtonVariant, string> = {
  cream: "bg-cream text-charcoal hover:bg-mist",
  charcoal: "bg-charcoal text-cream hover:bg-ash",
  "stroke-light": "border border-cream text-cream hover:bg-cream hover:text-charcoal",
  "stroke-dark": "border border-charcoal text-charcoal hover:bg-charcoal hover:text-cream",
  sign: "bg-roadsign text-white hover:bg-[#163d7d]",
  sunflower: "bg-sunflower text-charcoal hover:bg-[#e0b010]",
};

const sizes = {
  sm: "h-[37px] px-4 lg:h-11 lg:px-5",
  md: "h-[clamp(2.75rem,2.25rem+1.5vw,3.7rem)] px-[clamp(1.4rem,1rem+1.2vw,2.4rem)]",
};

export function buttonClass(variant: ButtonVariant = "cream", size: keyof typeof sizes = "md", className?: string) {
  return cn(
    "font-ui inline-flex shrink-0 items-center justify-center gap-2 rounded-full whitespace-nowrap",
    "transition-colors duration-300 ease-[var(--ease-rp)] disabled:pointer-events-none disabled:opacity-40",
    variants[variant],
    sizes[size],
    className,
  );
}

type Common = {
  variant?: ButtonVariant;
  size?: keyof typeof sizes;
  icon?: IconName;
  iconLeft?: IconName;
  children: ReactNode;
  className?: string;
};

export function ButtonLink({
  href,
  variant,
  size,
  icon,
  iconLeft,
  children,
  className,
  ...rest
}: Common & Omit<ComponentProps<typeof Link>, "className" | "children">) {
  const external = typeof href === "string" && /^(https?:|mailto:|tel:)/.test(href);
  const content = (
    <>
      {iconLeft && <Icon name={iconLeft} size={16} />}
      {children}
      {icon && <Icon name={icon} size={16} />}
    </>
  );
  if (external) {
    return (
      <a
        href={href as string}
        className={buttonClass(variant, size, className)}
        {...(String(href).startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...(rest as ComponentProps<"a">)}
      >
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={buttonClass(variant, size, className)} {...rest}>
      {content}
    </Link>
  );
}

export function Button({
  variant,
  size,
  icon,
  iconLeft,
  children,
  className,
  type = "button",
  ...rest
}: Common & Omit<ComponentProps<"button">, "className" | "children">) {
  return (
    <button type={type} className={buttonClass(variant, size, className)} {...rest}>
      {iconLeft && <Icon name={iconLeft} size={16} />}
      {children}
      {icon && <Icon name={icon} size={16} />}
    </button>
  );
}
