import { initLocale } from '@/lib/i18n/server';
import { localizeMetadata } from '@/lib/i18n/metadata';
import { t, tp } from '@/lib/i18n/t';
import type { Metadata } from "next";
import { site } from "@/config/site";
import type { FaqCategory } from "@/data/types";
import { faqs } from "@/data/faqs";
import { visibleFaqs } from "@/lib/queries";
import { SheetPage } from "@/components/pages/SheetPage";
import { Accordion } from "@/components/ui/Accordion";
import { ButtonLink } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return localizeMetadata({
  title: "FAQ",
  description:
    "What's included, car hire and insurance, driving licences, automatics, EV road trips, e-bikes, tolls, low-emission zones, children's car seats, entry requirements, payments and cancellations.",
  alternates: { canonical: "/faq" },
}, (await params).locale);
}

const ORDER: FaqCategory[] = ["Your trip", "Cars & driving", "E-bikes", "Families", "Travel documents", "Booking & payment"];

export default async function FaqPage({ params }: { params: Promise<{ locale: string }> }) {
  await initLocale(params);
  const list = visibleFaqs(faqs);
  const cats = ORDER.filter((c) => list.some((f) => f.category === c));
  return (
    <SheetPage
      crumbs={tp([{ label: "FAQ" }])}
      lines={tp(["Frequently", "asked"])}
      intro={<p>{t("Everything else you wanted to know before the first roundabout. Can't find it? Your specialist is a WhatsApp away.")}</p>}
    >
      <JsonLd
        data={tp({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: list.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer.join(" ") },
          })),
        })}
      />
      <div className="space-y-[var(--spacing-sec-xl)]">
        {cats.map((c) => (
          <section key={c} className="grid gap-6 lg:grid-cols-12" aria-labelledby={`faq-${c}`}>
            <h2 id={`faq-${c}`} className="font-cond text-xl lg:col-span-4">
              {tp(c)}
            </h2>
            <div className="lg:col-span-8">
              <Accordion
                tone="light"
                items={list
                  .filter((f) => f.category === c)
                  .map((f) => ({
                    id: f.id,
                    title: (
                      <>
                        {tp(f.question)}
                        {f.feature === "etiasNotice" && site.features.etiasNotice === "coming-soon" && (
                          <span className="font-ui ml-3 inline-block translate-y-[-2px] rounded-full bg-sunflower px-2 py-0.5 align-middle text-[10px] tracking-normal text-charcoal">
                            {t("Coming soon")}</span>
                        )}
                      </>
                    ),
                    content: f.answer.map((p, i) => <p key={i}>{tp(p)}</p>),
                  }))}
              />
            </div>
          </section>
        ))}
      </div>
      <div className="mt-[var(--spacing-sec)] flex flex-wrap gap-2">
        <ButtonLink href="/driving-in-france" variant="charcoal">
          {t("Driving in France guide")}</ButtonLink>
        <ButtonLink href="/contact" variant="stroke-dark">
          {t("Ask a specialist")}</ButtonLink>
      </div>
    </SheetPage>
  );
}
