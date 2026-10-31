import { lhref, t, tp } from '@/lib/i18n/t';
import Link from '@/components/i18n/Link';
import { site } from "@/config/site";
import { ButtonLink } from "@/components/ui/Button";
import { SplitWords } from "@/components/motion/SplitWords";
import { Reveal } from "@/components/motion/Reveal";
import { Newsletter } from "./Newsletter";
import { LogoMark } from "./Logo";

export function Footer() {
  const { address, contact } = site;
  const year = new Date().getFullYear();
  return (
    <footer className="bg-charcoal px-gutter text-cream">
      {/* CTA */}
      <div className="pt-[var(--spacing-sec)] pb-[var(--spacing-sec-xl)]">
        <SplitWords
          as="h2"
          lines={tp(["Let's take the", "long way round"])}
          className="font-display mb-[0.5em] text-3xl"
        />
        <Reveal>
          <ButtonLink href="/contact" variant="cream">
            {t("Contact us")}</ButtonLink>
        </Reveal>
      </div>

      <div className="border-t hairline-dark py-[var(--spacing-sec-xl)]">
        <Newsletter />

        {/* Company / contact / explore */}
        <div className="mt-[var(--spacing-sec-xl)] grid gap-10 text-base md:grid-cols-2 xl:grid-cols-3">
          <div className="space-y-1">
            <p>
              © {tp(year)} {tp(site.name)}
            </p>
            <p>{tp(address.lines.join(", "))}</p>
          </div>
          <ul className="space-y-1">
            <li>
              E: <a className="link-wipe" href={lhref(contact.emailHref)}>{tp(contact.email)}</a>
            </li>
          </ul>
          <div>
            <p className="mb-1">{t("Explore the back roads")}</p>
            <ul className="space-y-1">
              {site.footerExplore.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="link-wipe">
                    {tp(l.label)}:
                  </Link>{" "}
                  <span className="text-dim">{tp(l.note)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>

      <div className="flex flex-col gap-4 border-t hairline-dark py-6 text-sm sm:flex-row sm:items-center sm:justify-between">
        <ul className="flex flex-wrap items-center gap-x-2 gap-y-1">
          {site.legal.map((l, i) => (
            <li key={l.href} className="flex items-center gap-2">
              {i > 0 && <span aria-hidden="true">/</span>}
              <Link href={l.href} className="link-grow">
                {tp(l.label)}
              </Link>
            </li>
          ))}
          <li className="flex items-center gap-2">
            <span aria-hidden="true">/</span>
            <Link href="/faq" className="link-grow">
              {t("FAQ")}</Link>
          </li>
        </ul>
        <p className="flex items-center gap-2 text-mist">
          <LogoMark size={18} /> {tp(site.tagline)}
        </p>
      </div>
    </footer>
  );
}
