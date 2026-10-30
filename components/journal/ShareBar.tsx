"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import { Icon, type IconName } from "@/components/ui/Icon";

/** Rotated "Share this route" label with stacked square share buttons (horizontal on mobile). */
export function ShareBar({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = useState(false);
  const enc = encodeURIComponent;
  const links: { label: string; icon: IconName; href: string }[] = [
    { label: "Share by email", icon: "mail", href: `mailto:?subject=${enc(title)}&body=${enc(url)}` },
  ];
  const box =
    "group relative flex size-[37px] items-center justify-center overflow-hidden border border-charcoal/20 text-charcoal md:size-[45px]";
  const fill = "absolute inset-0 origin-bottom scale-y-0 bg-charcoal transition-transform duration-300 group-hover:scale-y-100";
  return (
    <div className="flex items-center gap-4 md:flex-col md:items-center">
      <p className="font-cond text-[15px] md:mb-4 md:[writing-mode:vertical-rl] md:rotate-180">Share this route</p>
      <ul className="flex md:flex-col">
        {links.map((l) => (
          <li key={l.label} className="-ml-px first:ml-0 md:-mt-px md:ml-0 md:first:mt-0">
            <a href={l.href} target="_blank" rel="noopener noreferrer" aria-label={l.label} className={box} style={{ ["--icon-cut" as string]: "var(--color-cream)" }}>
              <span className={fill} />
              <Icon name={l.icon} size={16} className="relative transition-colors delay-100 group-hover:text-cream" />
            </a>
          </li>
        ))}
        <li className="-ml-px md:-mt-px md:ml-0">
          <button
            type="button"
            aria-label="Copy link"
            onClick={() => {
              navigator.clipboard?.writeText(url).then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
              });
            }}
            className={box}
          >
            <span className={fill} />
            <Icon name={copied ? "check" : "link"} size={16} className={cn("relative transition-colors delay-100 group-hover:text-cream")} />
          </button>
          <span role="status" className="sr-only">
            {copied ? "Link copied" : ""}
          </span>
        </li>
      </ul>
    </div>
  );
}
