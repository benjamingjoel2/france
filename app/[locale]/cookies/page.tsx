import { initLocale } from '@/lib/i18n/server';
import { localizeMetadata } from '@/lib/i18n/metadata';
import { tp } from '@/lib/i18n/t';
import type { Metadata } from "next";
import { SheetPage } from "@/components/pages/SheetPage";
import { LegalBody } from "@/components/pages/LegalBody";
import { getLegalPage } from "@/lib/legal";

const page = getLegalPage("cookies");

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return localizeMetadata({
  title: page.title,
  description: page.lede,
  alternates: { canonical: "/cookies" },
}, (await params).locale);
}

export default async function CookiesPage({ params }: { params: Promise<{ locale: string }> }) {
  await initLocale(params);
  return (
    <SheetPage crumbs={tp([{ label: page.title }])} lines={tp(["Cookie", "policy"])} intro={<p>{tp(page.lede)}</p>}>
      <LegalBody page={tp(page)} />
    </SheetPage>
  );
}
