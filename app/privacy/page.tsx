import type { Metadata } from "next";
import { site } from "@/config/site";
import { SheetPage } from "@/components/pages/SheetPage";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: `How ${site.name} collects and uses your personal data.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  const c = site.company;
  return (
    <SheetPage crumbs={[{ label: "Privacy policy" }]} lines={["Privacy", "policy"]} intro={<p>[LEGAL REVIEW REQUIRED] Placeholder text for layout only.</p>}>
      <div className="richtext max-w-[46em]">
        <p className="font-ui text-brick">[LEGAL REVIEW REQUIRED] This placeholder must be replaced with a GDPR-compliant policy reviewed by a lawyer before launch.</p>
        <h2 className="font-cond mt-10 mb-4 text-lg">Who we are</h2>
        <p>{c.legalName}, registered office {c.registeredOffice.join(", ")}, is the data controller for personal data collected through this website.</p>
        <h2 className="font-cond mt-10 mb-4 text-lg">What we collect</h2>
        <ul>
          <li>Details you give us in the road trip planner, contact and newsletter forms (name, email, phone, travel preferences, notes).</li>
          <li>Details needed to book your trip (traveller names, dates of birth, driving licence details), once you book.</li>
          <li>Basic technical data (browser, pages visited) if analytics are enabled. [TO CONFIRM]</li>
        </ul>
        <h2 className="font-cond mt-10 mb-4 text-lg">How we use it</h2>
        <p>To reply to your enquiry, design and book your trip, and, if you opt in, send our newsletter. Legal bases: [TO CONFIRM].</p>
        <h2 className="font-cond mt-10 mb-4 text-lg">Your rights</h2>
        <p>You can request access, correction or deletion of your data at any time by emailing {site.contact.email}. [Supervisory authority: CNIL, cnil.fr. TO CONFIRM]</p>
        <h2 className="font-cond mt-10 mb-4 text-lg">Storage on your device</h2>
        <p>This site stores your currency choice and your road trip planner progress in your browser&apos;s local storage so you don&apos;t lose your answers. No advertising cookies are set. [TO CONFIRM]</p>
      </div>
    </SheetPage>
  );
}
