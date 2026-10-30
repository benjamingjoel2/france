import type { Metadata } from "next";
import { SheetPage } from "@/components/pages/SheetPage";
import { LegalBody } from "@/components/pages/LegalBody";
import { getLegalPage } from "@/lib/legal";

const page = getLegalPage("cookies");

export const metadata: Metadata = {
  title: page.title,
  description: page.lede,
  alternates: { canonical: "/cookies" },
};

export default function CookiesPage() {
  return (
    <SheetPage crumbs={[{ label: page.title }]} lines={["Cookie", "policy"]} intro={<p>{page.lede}</p>}>
      <LegalBody page={page} />
    </SheetPage>
  );
}
