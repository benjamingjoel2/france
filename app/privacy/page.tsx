import type { Metadata } from "next";
import { SheetPage } from "@/components/pages/SheetPage";
import { LegalBody } from "@/components/pages/LegalBody";
import { getLegalPage } from "@/lib/legal";

const page = getLegalPage("privacy");

export const metadata: Metadata = {
  title: page.title,
  description: page.lede,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <SheetPage crumbs={[{ label: page.title }]} lines={["Privacy", "policy"]} intro={<p>{page.lede}</p>}>
      <LegalBody page={page} />
    </SheetPage>
  );
}
