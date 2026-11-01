import { initLocale } from '@/lib/i18n/server';
import { localizeMetadata } from '@/lib/i18n/metadata';
import { tp } from '@/lib/i18n/t';
import { isLocale, DEFAULT_LOCALE } from '@/lib/i18n/config';
import type { Metadata } from "next";
import { SheetPage } from "@/components/pages/SheetPage";
import { LegalBody } from "@/components/pages/LegalBody";
import { getLegalPage } from "@/lib/legal";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const page = getLegalPage("terms", isLocale(locale) ? locale : DEFAULT_LOCALE);
  return localizeMetadata({
  title: page.title,
  description: page.lede,
  alternates: { canonical: "/terms" },
}, locale);
}

export default async function TermsPage({ params }: { params: Promise<{ locale: string }> }) {
  const page = getLegalPage("terms", await initLocale(params));
  return (
    <SheetPage crumbs={[{ label: page.title }]} lines={tp(["Booking", "terms"])} intro={<p>{page.lede}</p>}>
      <LegalBody page={page} />
    </SheetPage>
  );
}
