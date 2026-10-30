/**
 * Content model for Rond-Point. Every page is generated from these types so the
 * data files can later be swapped for a CMS without touching components.
 * All money values are base EUR; the currency switcher converts on display.
 */

export type Slug = string;
export type MoneyEUR = number;
export type Month = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface Img {
  src: string;
  alt: string;
  credit?: string;
  w?: number;
  h?: number;
}

export interface Seo {
  title?: string;
  description?: string;
}

export type BrandColour =
  | "lavender"
  | "lavender-300"
  | "sunflower"
  | "roadsign"
  | "vineyard"
  | "vineyard-300"
  | "charcoal"
  | "night";

export type TripType = "self-drive" | "drive-and-e-bike";
export type Pace = "gentle" | "balanced" | "ambitious";
export type Interest = "wine" | "food" | "history" | "beaches" | "mountains" | "villages" | "cities";

export interface Region {
  slug: Slug;
  name: string;
  /** Used in "1st exit: …" labels. */
  shortName: string;
  tagline: string;
  lede: string;
  overview: string[];
  heroImage: Img;
  cardImage: Img;
  gallery: Img[];
  bestMonths: Month[];
  quietMonths: Month[];
  bestTimeSummary: string;
  signatureRoads: { name: string; km: number; note: string }[];
  foodAndWine: { title: string; body: string[]; image: Img };
  /** Position on the France outline map, in % of the map box. */
  mapPin: { x: number; y: number };
  colour: BrandColour;
  faqIds: string[];
  seo?: Seo;
}

export interface PosterStyle {
  /** Lines of the poster title printed over the card image. */
  title: string[];
  font: "wide" | "mid" | "narrow";
  size: "small" | "medium" | "large";
  vAlign: "top" | "bottom";
  hAlign: "left" | "center";
  variant: "full" | "framed";
  mat?: BrandColour;
  /** Dark title text for light images. */
  dark?: boolean;
}

export interface DayPlan {
  day: number;
  title: string;
  from: string;
  to: string;
  km: number;
  /** Approximate driving time, e.g. "2h15". */
  driveTime: string;
  stops: string[];
  body: string;
  stayId?: Slug;
  experienceIds?: Slug[];
  eBikeDay?: { km: number; elevationM: number; note: string };
}

export interface Season {
  label: string;
  window: string;
  pricePerPerson: MoneyEUR;
}

export interface RoadTrip {
  slug: Slug;
  title: string;
  /** Short name for cards and breadcrumbs. */
  shortTitle: string;
  regionSlugs: Slug[];
  type: TripType;
  pace: Pace;
  avgDailyDriveHours: number;
  days: number;
  nights: number;
  totalKm: number;
  startEnd: string;
  interests: Interest[];
  fromPrice: MoneyEUR;
  seasons: Season[];
  bestMonths: Month[];
  poster: PosterStyle;
  colour: BrandColour;
  heroImage: Img;
  cardImage: Img;
  hoverImage: Img;
  hoverVideo?: { src: string; poster?: string };
  gallery: Img[];
  lede: string;
  overview: string[];
  highlights: string[];
  flavour: { driving: number; food: number; culture: number; nature: number };
  itinerary: DayPlan[];
  included: string[];
  excluded: string[];
  stayIds: Slug[];
  experienceIds: Slug[];
  specialistId: Slug;
  hostIds: Slug[];
  faqIds: string[];
  featured?: boolean;
  seo?: Seo;
}

export type StayStyle = "chateau" | "boutique" | "countryside" | "coastal";

export interface Stay {
  slug: Slug;
  /** Placeholder name until partner agreements are signed. */
  name: string;
  regionSlug: Slug;
  style: StayStyle;
  blurb: string;
  image: Img;
  placeholder: true;
}

export interface Experience {
  slug: Slug;
  name: string;
  regionSlug: Slug;
  kind: "wine" | "food" | "culture" | "outdoors" | "e-bike";
  duration: string;
  blurb: string;
  image: Img;
  placeholder: true;
}

export type MomentTheme = "nature" | "food-wine" | "festival" | "culture" | "snow";

export interface CalendarMoment {
  id: string;
  title: string;
  month: Month;
  /** Human window, e.g. "late Jun – mid Jul". Always verify yearly. */
  window: string;
  regionSlug: Slug;
  theme: MomentTheme;
  description: string;
  image: Img;
  tripSlugs: Slug[];
  verifyYearly: true;
}

export interface Person {
  slug: Slug;
  name: string;
  role: string;
  kind: "specialist" | "host" | "team";
  regionSlug?: Slug;
  bio: string[];
  favouriteExit: string;
  languages: string[];
  image: Img;
  placeholder: true;
}


export type FaqCategory =
  | "Your trip"
  | "Cars & driving"
  | "E-bikes"
  | "Families"
  | "Travel documents"
  | "Booking & payment";

export interface Faq {
  id: string;
  category: FaqCategory;
  question: string;
  answer: string[];
  /** When set, the FAQ is only shown if the matching config feature is enabled. */
  feature?: "etiasNotice";
}

export type PostBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "list"; items: string[] }
  | { type: "split"; image: Img; heading: string; text: string[]; reverse?: boolean }
  | { type: "callout"; text: string }
  | { type: "tripLink"; slug: Slug };

export type PostCategory = "Road trip ideas" | "Driving in France" | "Food & wine" | "Planning";

export interface Post {
  slug: Slug;
  title: string;
  category: PostCategory;
  excerpt: string;
  date: string;
  readMinutes: number;
  heroImage: Img;
  authorSlug: Slug;
  blocks: PostBlock[];
  related: Slug[];
  seo?: Seo;
}

export interface DrivingRule {
  id: string;
  title: string;
  summary: string;
  body: string[];
  sources: { label: string; url: string }[];
  verifyBeforeLaunch: true;
}
