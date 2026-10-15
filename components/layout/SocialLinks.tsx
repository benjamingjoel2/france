import { site } from "@/config/site";
import { cn } from "@/lib/cn";
import { Icon } from "@/components/ui/Icon";

/** Social icons joined by short rules, as in the reference footer and menu. */
export function SocialLinks({ className, tabIndex }: { className?: string; tabIndex?: number }) {
  return (
    <ul className={cn("flex items-center", className)} style={{ ["--icon-cut" as string]: "var(--color-charcoal)" }}>
      {site.social.map((s, i) => (
        <li key={s.label} className="flex items-center">
          {i > 0 && <span aria-hidden="true" className="mx-2.5 block h-px w-5 bg-current opacity-80" />}
          <a
            href={s.href}
            aria-label={s.label}
            tabIndex={tabIndex}
            className="block p-1 transition-opacity duration-300 hover:opacity-60"
            {...(s.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            <Icon name={s.icon} size={21} />
          </a>
        </li>
      ))}
    </ul>
  );
}
