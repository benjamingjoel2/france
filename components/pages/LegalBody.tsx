import { getLocale } from '@/lib/i18n/t';
import { INTL_LOCALES } from '@/lib/i18n/config';
import { t, tp } from '@/lib/i18n/t';
import type { LegalPage } from "@/data/legal";

const fmt = (d: string) =>
  new Date(`${d}T12:00:00Z`).toLocaleDateString(INTL_LOCALES[getLocale()], { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

/** Translate the <span> fragments of list items, which data/legal.ts composes from separate strings. */
const translateHtml = (html: string) => html.replace(/<span>([^<>]+)<\/span>/g, (_, txt: string) => `<span>${t(txt)}</span>`);

/** Body of the Privacy, Booking Terms and Cookie Policy pages. Text lives in data/legal.ts (static, trusted HTML). */
export function LegalBody({ page }: { page: LegalPage }) {
  return (
    <div className="richtext max-w-[46em]">
      <p className="font-ui text-dim">
        {t("Last updated ")}<time dateTime={page.updated}>{tp(fmt(page.updated))}</time>
      </p>
      {page.sections.map((s) => (
        <section key={s.h}>
          <h2 className="font-cond mt-10 mb-4 text-lg">{tp(s.h)}</h2>
          {s.p.map((html, i) => (html.includes("<ul>") ? <div key={i} dangerouslySetInnerHTML={{ __html: translateHtml(html) }} /> : <p key={i} dangerouslySetInnerHTML={{ __html: translateHtml(html) }} />))}
        </section>
      ))}
    </div>
  );
}
