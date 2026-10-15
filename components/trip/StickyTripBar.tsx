"use client";

import { useEffect, useState } from "react";
import { whatsappHref } from "@/config/site";
import { cn } from "@/lib/cn";
import { buttonClass } from "@/components/ui/Button";

/**
 * Black bar pinned to the bottom of the viewport: section links with scroll-spy on the
 * left, Enquire / Ask a question on the right. On mobile only the two buttons show.
 */
export function StickyTripBar({
  sections,
  tripSlug,
  tripTitle,
}: {
  sections: { id: string; label: string }[];
  tripSlug: string;
  tripTitle: string;
}) {
  const [active, setActive] = useState(sections[0]?.id);

  useEffect(() => {
    const els = sections.map((s) => document.getElementById(s.id)).filter((x): x is HTMLElement => !!x);
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-35% 0px -55% 0px" },
    );
    els.forEach((el) => io.observe(el));
    // Lift the floating WhatsApp button above the bar.
    const fab = document.querySelector<HTMLElement>("[data-whatsapp-fab]");
    fab?.setAttribute("data-raised", "true");
    return () => {
      io.disconnect();
      fab?.removeAttribute("data-raised");
    };
  }, [sections]);

  return (
    <div className="sticky bottom-0 z-30 flex items-center justify-between gap-6 bg-night px-[14px] py-[10px] text-cream lg:px-[30px] lg:py-[15px]">
      <nav aria-label="On this page" className="hidden min-w-0 lg:block">
        <ul className="font-ui flex items-center gap-[clamp(14px,2vw,30px)] overflow-x-auto no-scrollbar">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                data-active={active === s.id}
                aria-current={active === s.id ? "location" : undefined}
                className={cn("link-grow whitespace-nowrap transition-colors", active === s.id ? "text-cream" : "text-dim hover:text-cream")}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex w-full gap-2 lg:w-auto">
        <a href={`/plan-my-road-trip?trip=${tripSlug}`} className={buttonClass("cream", "sm", "flex-1 lg:flex-none")}>
          Enquire
        </a>
        <a
          href={whatsappHref(`Bonjour! I have a question about the "${tripTitle}" road trip.`)}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClass("stroke-light", "sm", "flex-1 lg:flex-none")}
        >
          Ask a question
        </a>
      </div>
    </div>
  );
}
