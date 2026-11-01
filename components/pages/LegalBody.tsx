import Link from "@/components/i18n/Link";
import { getLocale } from '@/lib/i18n/t';
import { INTL_LOCALES } from '@/lib/i18n/config';
import { t } from '@/lib/i18n/t';
import type { LegalPage } from "@/data/legal";

const fmt = (d: string) =>
  new Date(`${d}T12:00:00Z`).toLocaleDateString(INTL_LOCALES[getLocale()], { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

/** Renders "[text](/path)" inside legal text as links. */
function linkify(text: string) {
  return text.split(/(\[[^\]]+\]\(\/[^)]*\))/g).map((part, i) => {
    const m = part.match(/^\[([^\]]+)\]\((\/[^)]*)\)$/);
    return m ? <Link key={i} href={m[2]}>{m[1]}</Link> : part;
  });
}

/** Body of the Privacy, Booking Terms and Cookie Policy pages. Text lives in data/legal.ts, written per language. */
export function LegalBody({ page }: { page: LegalPage }) {
  return (
    <div className="richtext max-w-[46em]">
      <p className="font-ui text-dim">
        {t("Last updated ")}<time dateTime={page.updated}>{fmt(page.updated)}</time>
      </p>
      {page.sections.map((s) => (
        <section key={s.h}>
          <h2 className="font-cond mt-10 mb-4 text-lg">{s.h}</h2>
          {s.p.map((p, i) => <p key={i}>{linkify(p)}</p>)}
          {s.table && (
            <div className="overflow-x-auto">
              <table>
                <thead>
                  <tr>{s.table.head.map((c) => <th key={c} scope="col">{c}</th>)}</tr>
                </thead>
                <tbody>
                  {s.table.rows.map((r) => (
                    <tr key={r[0]}>{r.map((c, i) => (i === 0 ? <th key={i} scope="row"><code>{c}</code></th> : <td key={i}>{c}</td>))}</tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      ))}
    </div>
  );
}
