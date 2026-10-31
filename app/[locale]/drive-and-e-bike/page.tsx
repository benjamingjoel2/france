import { initLocale } from '@/lib/i18n/server';
import { localizeMetadata } from '@/lib/i18n/metadata';
import type { Metadata } from "next";
import { TripTypePage } from "@/components/pages/TripTypePage";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return localizeMetadata({
  title: "Drive & e-bike road trips in France",
  description:
    "Road trips through France that swap the car for an e-bike on the prettiest days: Loire châteaux, Burgundy vineyards, the Basque coast and Champagne.",
  alternates: { canonical: "/drive-and-e-bike" },
}, (await params).locale);
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  await initLocale(params);
  return <TripTypePage type="drive-and-e-bike" />;
}
