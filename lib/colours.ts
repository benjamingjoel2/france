import type { BrandColour } from "@/data/types";

export const brandHex: Record<BrandColour, string> = {
  lavender: "#8E7CC3",
  "lavender-300": "#C9BEE6",
  sunflower: "#F4C21C",
  roadsign: "#1D4E9E",
  vineyard: "#4E6B35",
  "vineyard-300": "#A9BC8B",
  charcoal: "#2A221D",
  night: "#1A1411",
};

/** Text colour that reads well on the given brand colour. */
export function onColour(c: BrandColour): "cream" | "charcoal" {
  return c === "sunflower" || c === "lavender-300" || c === "vineyard-300" ? "charcoal" : "cream";
}
