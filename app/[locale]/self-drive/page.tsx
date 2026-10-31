import { initLocale } from '@/lib/i18n/server';
import { localizeMetadata } from '@/lib/i18n/metadata';
import type { Metadata } from "next";
import { TripTypePage } from "@/components/pages/TripTypePage";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return localizeMetadata({
  title: "Self-drive road trips in France",
  description:
    "Tailor-made self-drive road trips through France: hand-picked stays, a beautiful route book and one dedicated specialist the whole way. Filter by region, days, pace and budget.",
  alternates: { canonical: "/self-drive" },
}, (await params).locale);
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  await initLocale(params);
  return <TripTypePage type="self-drive" />;
}
