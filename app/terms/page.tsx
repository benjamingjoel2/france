import type { Metadata } from "next";
import { site } from "@/config/site";
import { SheetPage } from "@/components/pages/SheetPage";

export const metadata: Metadata = {
  title: "Terms & conditions",
  description: `Booking terms and conditions for ${site.name} road trips.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  const c = site.company;
  return (
    <SheetPage crumbs={[{ label: "Terms & conditions" }]} lines={["Terms &", "conditions"]} intro={<p>[LEGAL REVIEW REQUIRED] Placeholder text for layout only.</p>}>
      <div className="richtext max-w-[46em]">
        <p className="font-ui text-brick">[LEGAL REVIEW REQUIRED] Replace with package travel terms compliant with the French Code du tourisme and EU Package Travel Directive before launch.</p>
        <h2 className="font-cond mt-10 mb-4 text-lg">1. The organiser</h2>
        <p>{c.legalName}, registered with Atout France under number {c.atoutFrance}. Financial guarantee: {c.guaranteeProvider}.</p>
        <h2 className="font-cond mt-10 mb-4 text-lg">2. Booking and payment</h2>
        <p>A deposit of [25%] confirms your booking. The balance is due [8] weeks before departure. [TO CONFIRM]</p>
        <h2 className="font-cond mt-10 mb-4 text-lg">3. Cancellation by you</h2>
        <p>[Cancellation scale placeholder: e.g. more than [60] days before departure: deposit retained; [59–30] days: [50%]; fewer than [30] days: [100%].]</p>
        <h2 className="font-cond mt-10 mb-4 text-lg">4. Changes and cancellation by us</h2>
        <p>[Placeholder.]</p>
        <h2 className="font-cond mt-10 mb-4 text-lg">5. Car hire</h2>
        <p>Car hire is provided by third-party rental partners under their own rental conditions, including driver age and licence requirements. [Placeholder: partner names to be added once agreements are signed.]</p>
        <h2 className="font-cond mt-10 mb-4 text-lg">6. Insurance</h2>
        <p>We strongly recommend comprehensive travel insurance from the time of booking. [Placeholder.]</p>
      </div>
    </SheetPage>
  );
}
