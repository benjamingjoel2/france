import { legalByLocale, type LegalPage } from "@/data/legal";
import type { Locale } from "@/lib/i18n/config";

/** Rond-Point's legal pages in the visitor's language (text in data/legal.ts). */
export const getLegalPage = (slug: LegalPage["slug"], locale: Locale) =>
  (legalByLocale[locale] ?? legalByLocale.en).find((p) => p.slug === slug)!;
