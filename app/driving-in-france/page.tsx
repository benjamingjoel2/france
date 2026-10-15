import type { Metadata } from "next";
import { drivingRules } from "@/data/drivingRules";
import { SheetPage } from "@/components/pages/SheetPage";
import { Accordion } from "@/components/ui/Accordion";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Driving in France: a practical guide",
  description:
    "Driving on the right, roundabout rules, priorité à droite, speed limits, tolls, EV charging, parking, Crit'Air low-emission zones, documents and what to carry in the car.",
  alternates: { canonical: "/driving-in-france" },
};

export default function DrivingPage() {
  return (
    <SheetPage
      crumbs={[{ label: "Driving in France" }]}
      eyebrow="Practical guide"
      lines={["Driving in", "France"]}
      intro={
        <>
          <p>Rules of the road, decoded. Your route book covers the specifics for your trip; this is the big picture.</p>
          <p className="font-ui mt-5 border-l-2 border-sunflower pl-3 text-[11.5px] text-sunflower">
            Rules change. Every item below is marked to verify before launch and links to official French government sources.
          </p>
        </>
      }
    >
      <Accordion
        tone="light"
        titleClass="font-cond text-lg"
        defaultOpen={drivingRules[0]?.id ?? null}
        items={drivingRules.map((r) => ({
          id: r.id,
          title: (
            <span className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
              {r.title}
              <span className="font-ui w-fit rounded-[3px] bg-roadsign px-2 py-0.5 text-[9.5px] tracking-normal text-white">
                Verify before launch
              </span>
            </span>
          ),
          content: (
            <>
              <p className="font-medium">{r.summary}</p>
              {r.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <p className="font-ui mt-4 text-[11.5px]">Official sources:</p>
              <ul>
                {r.sources.map((s) => (
                  <li key={s.url}>
                    <a href={s.url} target="_blank" rel="noopener noreferrer">
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </>
          ),
        }))}
      />
      <div className="mt-[var(--spacing-sec)] flex flex-wrap gap-2">
        <ButtonLink href="/journal/how-to-drive-a-french-roundabout" variant="charcoal">
          How to drive a French roundabout
        </ButtonLink>
        <ButtonLink href="/faq" variant="stroke-dark">
          Read the FAQ
        </ButtonLink>
      </div>
    </SheetPage>
  );
}
