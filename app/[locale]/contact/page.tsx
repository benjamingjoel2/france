import { initLocale } from '@/lib/i18n/server';
import { localizeMetadata } from '@/lib/i18n/metadata';
import { lhref, t, tp } from '@/lib/i18n/t';
import type { Metadata } from "next";
import Image from "next/image";
import Link from '@/components/i18n/Link';
import { site } from "@/config/site";
import { imgUrl, photo } from "@/lib/media";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ContactForm } from "@/components/forms/ContactForm";
import { ArrowBox } from "@/components/ui/ArrowBox";
import { PlusHeading } from "@/components/ui/PlusHeading";
import { SplitWords } from "@/components/motion/SplitWords";
import { Reveal } from "@/components/motion/Reveal";
import { Parallax } from "@/components/motion/Parallax";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return localizeMetadata({
  title: "Contact",
  description: "Talk to a Rond-Point road trip specialist by email, or send us a message.",
  alternates: { canonical: "/contact" },
}, (await params).locale);
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  await initLocale(params);
  const c = site.contact;
  return (
    <div className="bg-charcoal pt-[var(--header-h)] text-cream">
      <Breadcrumbs items={tp([{ label: "Contact" }])} />
      <section className="px-gutter py-[var(--spacing-sec)]">
        <SplitWords as="h1" text={t("Contact")} immediate className="font-display text-4xl" />
        <div className="mt-[var(--spacing-sec-lg)] grid gap-10 lg:grid-cols-12">
          <Reveal immediate className="lg:col-span-5">
            <p className="max-w-[26em]">
              {t("Bonjour! Whether you know exactly which exit you want or you're still circling, a specialist is happy to help.")}{" "}{tp(c.hours)}.
            </p>
          </Reveal>
          <Reveal immediate delay={0.1} className="lg:col-span-3">
            <h2 className="font-cond text-md">{t("Talk to a specialist")}</h2>
            <ul className="mt-5 space-y-1">
              <li>
                E: <a href={lhref(c.emailHref)} className="link-wipe">{tp(c.email)}</a>
              </li>
            </ul>
          </Reveal>
          <Reveal immediate delay={0.2} className="lg:col-span-4">
            <h2 className="font-cond text-md">{t("Press & partners")}</h2>
            <ul className="mt-5 space-y-1">
              <li>
                E: <a href={lhref(c.emailHref)} className="link-wipe">{tp(c.email)}</a>
              </li>
              <li className="text-dim">{t("Hoteliers and local guides: we'd love to hear from you.")}</li>
            </ul>
          </Reveal>
        </div>
      </section>

      <Parallax className="aspect-[16/7] max-md:aspect-[4/3]" strength={0.15}>
        <Image src={imgUrl(photo(["hero:plan", "theme:roundabout-village"]), 2400)} alt="" fill sizes="100vw" className="object-cover" />
      </Parallax>

      <section className="px-gutter py-[var(--spacing-sec)]">
        <div className="grid gap-[var(--spacing-sec-lg)] lg:grid-cols-12">
          <div className="lg:col-span-5">
            <PlusHeading>{t("Send us a message")}</PlusHeading>
            <SplitWords as="h2" text={t("Questions, ideas, a half-planned road trip on a napkin: send it over.")} className="font-cond max-w-[15em] text-xl" />
            <Link href={site.planCta.href} className="group mt-[var(--spacing-sec-lg)] flex items-center justify-between gap-6 border-y hairline-dark py-6">
              <span>
                <span className="font-ui block text-mist">{t("Planning a trip?")}</span>
                <span className="font-cond mt-1 block text-lg">{t("Use the road trip planner")}</span>
              </span>
              <ArrowBox tone="dark" size={59} />
            </Link>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
