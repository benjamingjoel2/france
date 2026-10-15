import type { Metadata } from "next";
import { TripTypePage } from "@/components/pages/TripTypePage";

export const metadata: Metadata = {
  title: "Drive & e-bike road trips in France",
  description:
    "Road trips through France that swap the car for an e-bike on the prettiest days: Loire châteaux, Burgundy vineyards, the Basque coast and Champagne.",
  alternates: { canonical: "/drive-and-e-bike" },
};

export default function Page() {
  return <TripTypePage type="drive-and-e-bike" />;
}
