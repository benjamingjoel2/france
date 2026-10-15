import { Breadcrumbs, type Crumb } from "@/components/layout/Breadcrumbs";
import { SectionIntro } from "@/components/sections/SectionIntro";

/** Charcoal page header (breadcrumbs + big title) with content on a cream sheet. */
export function SheetPage({
  crumbs,
  lines,
  intro,
  eyebrow,
  children,
}: {
  crumbs: Crumb[];
  lines: string[];
  intro?: React.ReactNode;
  eyebrow?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-charcoal pt-[var(--header-h)] text-cream">
      <Breadcrumbs items={crumbs} />
      <div className="pt-[var(--spacing-sec)] pb-[var(--spacing-sec)]">
        <SectionIntro as="h1" size="4xl" bottomAlign eyebrow={eyebrow} lines={lines} text={intro} />
      </div>
      <div className="ml-gutter bg-cream py-[var(--spacing-sec)] pr-gutter pl-[clamp(16px,8%,108px)] text-charcoal">{children}</div>
    </div>
  );
}
