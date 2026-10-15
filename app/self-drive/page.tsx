import type { Metadata } from "next";
import { TripTypePage } from "@/components/pages/TripTypePage";

export const metadata: Metadata = {
  title: "Self-drive road trips in France",
  description:
    "Tailor-made self-drive road trips through France: hand-picked stays, a beautiful route book and a specialist on WhatsApp the whole way. Filter by region, days, pace and budget.",
  alternates: { canonical: "/self-drive" },
};

export default function Page() {
  return <TripTypePage type="self-drive" />;
}
