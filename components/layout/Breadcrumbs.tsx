import Link from "next/link";
import { site } from "@/config/site";
import { cn } from "@/lib/cn";
import { JsonLd } from "@/components/seo/JsonLd";

export type Crumb = { label: string; href?: string };

/** Full-width strip under the header: HOME › SECTION › PAGE, plus BreadcrumbList JSON-LD. */
export function Breadcrumbs({ items, overlay = false }: { items: Crumb[]; overlay?: boolean }) {
  const all: Crumb[] = [{ label: "Home", href: "/" }, ...items];
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn(
        "relative z-10 hidden border-b px-[30px] py-[14px] text-cream md:block",
        overlay ? "hairline-dark" : "hairline-dark bg-charcoal",
      )}
    >
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: all.map((c, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: c.label,
            ...(c.href ? { item: new URL(c.href, site.url).toString() } : {}),
          })),
        }}
      />
      <ol className="font-ui flex flex-wrap items-center gap-2 text-[11.5px]">
        {all.map((c, i) => (
          <li key={i} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden="true" className="opacity-60">›</span>}
            {c.href && i < all.length - 1 ? (
              <Link href={c.href} className="link-wipe">
                {c.label}
              </Link>
            ) : (
              <span aria-current="page" className="opacity-75">
                {c.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
