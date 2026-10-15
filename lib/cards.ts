import type { RoadTrip } from "@/data/types";

/** The subset of a road trip a card needs (keeps client payloads small). */
export type CardTrip = Pick<
  RoadTrip,
  | "slug"
  | "title"
  | "shortTitle"
  | "type"
  | "pace"
  | "avgDailyDriveHours"
  | "days"
  | "nights"
  | "poster"
  | "colour"
  | "cardImage"
  | "hoverImage"
  | "hoverVideo"
>;

export function toCardTrip(t: CardTrip): CardTrip {
  const { slug, title, shortTitle, type, pace, avgDailyDriveHours, days, nights, poster, colour, cardImage, hoverImage, hoverVideo } = t;
  return { slug, title, shortTitle, type, pace, avgDailyDriveHours, days, nights, poster, colour, cardImage, hoverImage, hoverVideo };
}
