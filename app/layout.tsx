import type { Metadata, Viewport } from "next";
import { Archivo, DM_Mono } from "next/font/google";
import { preconnect } from "react-dom";
import "./globals.css";
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

export const metadata: Metadata = {
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
};

export const viewport: Viewport = {
  themeColor: site.colours.charcoal,
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Photos come straight from Unsplash's CDN: open the connection while the HTML is still arriving.
  preconnect("https://images.unsplash.com");
  const menuImages = site.nav.map((n) => photo(n.imageKey));
  return (
    <html lang="en-GB" className={`${archivo.variable} ${dmMono.variable}`}>
      <body>
        <a
          href="#main"
          className="font-ui fixed top-2 left-2 z-[100] -translate-y-20 bg-sunflower px-4 py-3 text-charcoal focus:translate-y-0"
        >
          Skip to content
        </a>
        <CurrencyProvider>
          <SiteChrome menuImages={menuImages} />
          <main id="main">{children}</main>
          <Footer />
        </CurrencyProvider>
      </body>
    </html>
  );
}
