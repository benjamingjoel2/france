import Link from "next/link";
import { site, whatsappHref } from "@/config/site";
import { ButtonLink } from "@/components/ui/Button";
import { SplitWords } from "@/components/motion/SplitWords";
import { Reveal } from "@/components/motion/Reveal";
import { Newsletter } from "./Newsletter";
import { SocialLinks } from "./SocialLinks";
import { LogoMark } from "./Logo";

function Badge({ title, line, sign = false }: { title: string; line: string; sign?: boolean }) {
  return (
    <div
      className={
        sign
          ? "flex min-w-[170px] flex-col gap-1 rounded-[3px] border-2 border-white bg-roadsign px-3.5 py-2.5 text-white shadow-[0_0_0_2px_var(--color-roadsign)]"
          : "flex min-w-[170px] flex-col gap-1 border hairline-dark px-3.5 py-2.5"
      }
    >
      <span className="font-ui text-[11px] opacity-80">{title}</span>
      <span className="font-cond text-[18px]">{line}</span>
    </div>
  );
}

export function Footer() {
  const { company, contact } = site;
  const year = new Date().getFullYear();
  return (
    <footer className="bg-charcoal px-gutter text-cream">
      {/* CTA */}
      <div className="pt-[var(--spacing-sec)] pb-[var(--spacing-sec-xl)]">
        <SplitWords
          as="h2"
          lines={["Let's take the", "long way round"]}
          className="font-display mb-[0.5em] text-3xl"
        />
        <Reveal>
          <ButtonLink href="/contact" variant="cream">
            Contact us
          </ButtonLink>
        </Reveal>
      </div>

      <div className="border-t hairline-dark py-[var(--spacing-sec-xl)]">
        <Newsletter />

        {/* Company / contact / explore */}
        <div className="mt-[var(--spacing-sec-xl)] grid gap-10 text-base md:grid-cols-2 xl:grid-cols-4">
          <div className="space-y-1">
            <p>
              © {year} {company.legalName} is registered in France, number {company.registration}.
            </p>
            <p>Registered office: {company.registeredOffice.join(", ")}</p>
          </div>
          <ul className="space-y-1">
            <li>
              T: <a className="link-wipe" href={contact.phoneHref}>{contact.phone}</a>{" "}
              <span className="text-dim">{contact.phoneNote}</span>
            </li>
            <li>
              T: <a className="link-wipe" href={contact.phoneIntlHref}>{contact.phoneIntl}</a>{" "}
              <span className="text-dim">{contact.phoneIntlNote}</span>
            </li>
            <li>
              E: <a className="link-wipe" href={contact.emailHref}>{contact.email}</a>
            </li>
            <li>
              W:{" "}
              <a className="link-wipe" href={whatsappHref()}>
                WhatsApp {contact.whatsapp}
              </a>
            </li>
          </ul>
          <div>
            <p className="mb-1">Explore the back roads</p>
            <ul className="space-y-1">
              {site.footerExplore.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="link-wipe">
                    {l.label}:
                  </Link>{" "}
                  <span className="text-dim">{l.note}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-wrap items-start gap-3 xl:justify-end">
            <Badge sign title="Atout France registration" line={company.atoutFrance} />
            <Badge title="Financial guarantee" line={company.guaranteeProvider} />
          </div>
        </div>

        <SocialLinks className="mt-[var(--spacing-sec-xl)]" />
      </div>

      <div className="flex flex-col gap-4 border-t hairline-dark py-6 text-sm sm:flex-row sm:items-center sm:justify-between">
        <ul className="flex flex-wrap items-center gap-x-2 gap-y-1">
          {site.legal.map((l, i) => (
            <li key={l.href} className="flex items-center gap-2">
              {i > 0 && <span aria-hidden="true">/</span>}
              <Link href={l.href} className="link-grow">
                {l.label}
              </Link>
            </li>
          ))}
          <li className="flex items-center gap-2">
            <span aria-hidden="true">/</span>
            <Link href="/faq" className="link-grow">
              FAQ
            </Link>
          </li>
        </ul>
        <p className="flex items-center gap-2 text-mist">
          <LogoMark size={18} /> {site.tagline}
        </p>
      </div>
    </footer>
  );
}
