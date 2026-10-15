import type { Interest, MomentTheme, Pace, StayStyle, TripType } from "./types";

export const tripTypes: Record<TripType, { label: string; short: string; href: string; blurb: string }> = {
  "self-drive": {
    label: "Self-drive",
    short: "Self-drive",
    href: "/self-drive",
    blurb: "Your car, your playlist, our route.",
  },
  "drive-and-e-bike": {
    label: "Drive & e-bike",
    short: "Drive & e-bike",
    href: "/drive-and-e-bike",
    blurb: "Park up, saddle up: the best bits of France at 25 km/h.",
  },
};

/** Driving pace levels replace the reference's rider levels. Hours are average driving per day. */
export const paces: Record<Pace, { label: string; dots: 1 | 2 | 3; hours: string; blurb: string }> = {
  gentle: {
    label: "Gentle",
    dots: 1,
    hours: "~1–2h driving a day",
    blurb: "Long lunches, short hops. Some days you won't touch the car.",
  },
  balanced: {
    label: "Balanced",
    dots: 2,
    hours: "~2–3h driving a day",
    blurb: "A proper road trip rhythm: a good drive most mornings, the afternoons for wandering.",
  },
  ambitious: {
    label: "Ambitious",
    dots: 3,
    hours: "~3–4h driving a day",
    blurb: "For people who think the drive is the destination. Mountain passes included.",
  },
};

export const interests: Record<Interest, string> = {
  wine: "Wine",
  food: "Food",
  history: "History",
  beaches: "Beaches",
  mountains: "Mountains",
  villages: "Villages",
  cities: "Cities",
};

export const stayStyles: Record<StayStyle, string> = {
  chateau: "Château",
  boutique: "Boutique",
  countryside: "Countryside",
  coastal: "Coastal",
};

export const momentThemes: Record<MomentTheme, string> = {
  nature: "Nature",
  "food-wine": "Food & wine",
  festival: "Festival",
  culture: "Culture",
  snow: "Snow",
};

export const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;

export const monthShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] as const;

/** "1st", "2nd", "3rd", "4th"… for roundabout exit labels. */
export function ordinal(n: number) {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}
