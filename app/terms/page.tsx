import type { Metadata } from "next";
import { SheetPage } from "@/components/pages/SheetPage";
import { LegalBody } from "@/components/pages/LegalBody";
import { getLegalPage } from "@/lib/legal";

const page = getLegalPage("terms");

export const metadata: Metadata = {
  title: page.title,
  description: page.lede,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <SheetPage crumbs={[{ label: page.title }]} lines={["Booking", "terms"]} intro={<p>{page.lede}</p>}>
      <LegalBody page={page} />
    </SheetPage>
  );
}
