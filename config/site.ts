/**
 * Single source of truth for brand, contact, navigation, currencies and flags.
 * Values in [SQUARE BRACKETS] are placeholders to replace before launch.
 */

export type CurrencyCode = "EUR" | "USD" | "GBP" | "CAD" | "AUD";

export const site = {
  name: "Rond-Point",
  tagline: "Take the long way round.",
  description:
    "Tailor-made self-drive road trips through France, with hand-picked stays, a beautiful route book and one dedicated specialist on WhatsApp the whole way.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://rond-point.example",
  locale: "en_GB",

  colours: {
    cream: "#F5EFE2",
    charcoal: "#25252A",
    night: "#141418",
    lavender: "#8E7CC3",
    sunflower: "#F4C21C",
    roadsign: "#1D4E9E",
    vineyard: "#4E6B35",
  },

  company: {
    legalName: "[COMPANY NAME]",
    registration: "[COMPANY REGISTRATION NUMBER]",
    registeredOffice: ["[REGISTERED OFFICE ADDRESS LINE 1]", "[POSTCODE] [CITY], France"],
    atoutFrance: "[IM NUMBER]",
    guaranteeProvider: "[GUARANTEE PROVIDER]",
  },

  contact: {
    phone: "[+33 0 00 00 00 00]",
    phoneHref: "tel:+33000000000",
    phoneNote: "(France)",
    phoneIntl: "[+44 0000 000000]",
    phoneIntlHref: "tel:+440000000000",
    phoneIntlNote: "(UK)",
    email: "[hello@rond-point.example]",
    emailHref: "mailto:hello@rond-point.example",
    pressEmail: "[press@rond-point.example]",
    pressEmailHref: "mailto:press@rond-point.example",
    /** Digits only, international format, no "+". */
    whatsapp: "[NUMBER]",
    hours: "Mon–Sat, 9:00–19:00 (Paris time)",
  },

  social: [
    { label: "Instagram", href: "https://instagram.com/", icon: "instagram" },
    { label: "Facebook", href: "https://facebook.com/", icon: "facebook" },
    { label: "YouTube", href: "https://youtube.com/", icon: "youtube" },
    { label: "Pinterest", href: "https://pinterest.com/", icon: "pinterest" },
    { label: "Email", href: "mailto:hello@rond-point.example", icon: "mail" },
  ] as const,

  /** Full-screen menu. `imageKey` points into the placeholder photo pool. */
  nav: [
    { label: "Self-drive", href: "/self-drive", imageKey: ["theme:road-winding", "theme:car-countryside"] },
    { label: "Drive & e-bike", href: "/drive-and-e-bike", imageKey: ["theme:ebike"] },
    { label: "When to go", href: "/when-to-go", imageKey: ["theme:sunflowers", "hero:calendar"] },
    { label: "Our specialists", href: "/our-specialists", imageKey: ["people:1", "theme:market"] },
    { label: "Journal", href: "/journal", imageKey: ["theme:map-roadtrip"] },
    { label: "Why Rond-Point", href: "/why-rond-point", imageKey: ["hero:why", "theme:cafe-terrace"] },
    { label: "Contact", href: "/contact", imageKey: ["hero:plan", "theme:roundabout-village"] },
  ],

  utilityNav: [
    { label: "My account", href: "/my-account" },
    { label: "Contact us", href: "/contact" },
  ],

  footerExplore: [
    { label: "Driving in France", href: "/driving-in-france", note: "Rules of the road, decoded" },
    { label: "When to go", href: "/when-to-go", note: "France, month by month" },
    { label: "FAQ", href: "/faq", note: "Everything else" },
  ],

  legal: [
    { label: "Privacy policy", href: "/privacy" },
    { label: "Terms & conditions", href: "/terms" },
  ],

  planCta: { label: "Plan my road trip", short: "Plan", href: "/plan-my-road-trip" },

  currencies: {
    base: "EUR" as CurrencyCode,
    supported: ["EUR", "USD", "GBP", "CAD", "AUD"] as CurrencyCode[],
    /**
     * Indicative rates from 1 EUR.
     * TODO: replace with a live rates feed (e.g. a daily cron writing to KV) before launch.
     */
    rates: { EUR: 1, USD: 1.09, GBP: 0.85, CAD: 1.5, AUD: 1.66 } as Record<CurrencyCode, number>,
    symbols: { EUR: "€", USD: "US$", GBP: "£", CAD: "CA$", AUD: "A$" } as Record<CurrencyCode, string>,
  },

  /** Placeholder stats until confirmed. */
  stats: [
    { value: "[12]", label: "years on the back roads", placeholder: true },
    { value: "[40+]", label: "road trips designed", placeholder: true },
    { value: "[14]", label: "regions", placeholder: true },
    { value: "1", label: "specialist on WhatsApp the whole way", placeholder: false },
  ],

  featuredTrip: {
    eyebrow: "Rond-Point road trips",
    headline: ["Lavender", "all the way."],
    cta: "In Provence next summer",
    slug: "provence-lavender-hilltop-villages",
  },

  features: {
    /**
     * ETIAS: launch postponed to 2027, no firm date.
     * "coming-soon" shows the FAQ with a "coming soon" note; "live" shows it as current; "hidden" removes it.
     */
    etiasNotice: "coming-soon" as "coming-soon" | "live" | "hidden",
    /** Show small "placeholder" flags on sample content. */
    showPlaceholderFlags: true,
  },
} as const;

export type Site = typeof site;

export function whatsappHref(message?: string) {
  const base = `https://wa.me/${site.contact.whatsapp.replace(/\D/g, "") || "NUMBER"}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
