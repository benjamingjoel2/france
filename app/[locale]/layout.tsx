import { initLocale, clientDict } from '@/lib/i18n/server';
import { LOCALES } from '@/lib/i18n/config';
import { LocaleProvider } from '@/components/i18n/LocaleProvider';
import { localizeMetadata } from '@/lib/i18n/metadata';
import { t, tp } from '@/lib/i18n/t';
import type { Metadata, Viewport } from "next";
import { Archivo, DM_Mono } from "next/font/google";
import { preconnect } from "react-dom";
import "../globals.css";
import { site } from "@/config/site";
import { photo } from "@/lib/media";
import { CurrencyProvider } from "@/lib/currency";
import { SiteChrome } from "@/components/layout/SiteChrome";
import { Footer } from "@/components/layout/Footer";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo-var",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return localizeMetadata({
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name}: tailor-made road trips through France`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: site.locale,
    title: `${site.name}: tailor-made road trips through France`,
    description: site.description,
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/" },
}, (await params).locale);
}

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export const viewport: Viewport = {
  themeColor: site.colours.charcoal,
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const locale = await initLocale(params);
  // Photos come straight from Unsplash's CDN: open the connection while the HTML is still arriving.
  preconnect("https://images.unsplash.com");
  const menuImages = site.nav.map((n) => photo(n.imageKey));
  return (
    <html lang={locale} className={`${archivo.variable} ${dmMono.variable}`}>
      <body>
        <a
          href="#main"
          className="font-ui fixed top-2 left-2 z-[100] -translate-y-20 bg-sunflower px-4 py-3 text-charcoal focus:translate-y-0"
        >
          {t("Skip to content")}</a>
        <LocaleProvider locale={locale} dict={clientDict(locale)}>
        <CurrencyProvider>
          <SiteChrome menuImages={tp(menuImages)} />
          <main id="main">{children}</main>
          <Footer />
        </CurrencyProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
