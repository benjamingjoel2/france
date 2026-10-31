import Link from '@/components/i18n/Link';
import { cn } from "@/lib/cn";

/** "⤷ Further exploration" style text link with an animated underline. */
export function ArrowLink({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <Link href={href} className={cn("font-ui group inline-flex items-baseline gap-2", className)}>
      <span aria-hidden="true" className="transition-transform duration-300 ease-[var(--ease-rp)] group-hover:translate-x-1">
        ⤷
      </span>
      <span className="link-grow">{children}</span>
    </Link>
  );
}
