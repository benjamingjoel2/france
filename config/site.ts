/**
 * Single source of truth for brand, contact, navigation, currencies and flags.
 * Values in [SQUARE BRACKETS] are placeholders to replace before launch.
 */

export type CurrencyCode = "EUR" | "USD" | "GBP" | "CAD" | "AUD";

export const site = {
  name: "Rond-Point",
  tagline: "Take the long way round.",
  description:
    "Tailor-made self-drive road trips through France, with hand-picked stays, a beautiful route book and one dedicated specialist the whole way.",
  // Canonical domain (a subdomain of tourground.com, DNS on Vercel). NEXT_PUBLIC_SITE_URL overrides it.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://rondpoint.tourground.com",
  locale: "en_GB",

  colours: {
    cream: "#F7EFE0",
    charcoal: "#2A221D",
    night: "#1A1411",
    lavender: "#8E7CC3",
    sunflower: "#F4C21C",
    roadsign: "#1D4E9E",
    vineyard: "#4E6B35",
  },

  contact: {
    email: "rondpoint@tourground.com",
    emailHref: "mailto:rondpoint@tourground.com",
    hours: "Mon–Sat, 9:00–19:00 (Paris time)",
  },

  /** Business address: WeWork La Fayette (premium coworking in central Paris, owner-approved arrangement). */
  address: {
    lines: ["WeWork La Fayette", "33 rue La Fayette", "75009 Paris", "France"],
    postal: { streetAddress: "33 rue La Fayette", postalCode: "75009", addressLocality: "Paris", addressCountry: "FR" },
  },

  /** Full-screen menu. `imageKey` points into the placeholder photo pool. */
  nav: [
    { label: "Self-drive", href: "/self-drive", imageKey: ["theme:road-winding", "theme:car-countryside"] },
    { label: "Drive & e-bike", href: "/drive-and-e-bike", imageKey: ["theme:ebike"] },
    { label: "When to go", href: "/when-to-go", imageKey: ["theme:sunflowers", "hero:calendar"] },
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
    { label: "Booking terms", href: "/terms" },
    { label: "Cookie policy", href: "/cookies" },
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
    { value: "1", label: "dedicated specialist the whole way", placeholder: false },
  ],

  featuredTrip: {
    eyebrow: "Rond-Point road trips",
    headline: ["Lavender", "all the way."],
    cta: "In Provence next summer",
    slug: "provence-lavender-hilltop-villages",
    /** Homepage hero photo (local file, client-supplied). */
    image: {
      src: "/img/hero-cyclist.webp",
      alt: "A road cyclist in a pink jersey speeding past a sunlit wall",
      w: 1170,
      h: 780,
      /** Keeps the rider in frame when the photo is cropped on narrow screens. */
      focus: "68% 50%",
    },
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
