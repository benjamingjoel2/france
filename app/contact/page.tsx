import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/config/site";
import { imgUrl, photo } from "@/lib/media";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ContactForm } from "@/components/forms/ContactForm";
import { ArrowBox } from "@/components/ui/ArrowBox";
import { PlusHeading } from "@/components/ui/PlusHeading";
import { SplitWords } from "@/components/motion/SplitWords";
import { Reveal } from "@/components/motion/Reveal";
import { Parallax } from "@/components/motion/Parallax";

export const metadata: Metadata = {
  title: "Contact",
  description: "Talk to a Rond-Point road trip specialist by email, or send us a message.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const c = site.contact;
  return (
    <div className="bg-charcoal pt-[var(--header-h)] text-cream">
      <Breadcrumbs items={[{ label: "Contact" }]} />
      <section className="px-gutter py-[var(--spacing-sec)]">
        <SplitWords as="h1" text="Contact" immediate className="font-display text-4xl" />
        <div className="mt-[var(--spacing-sec-lg)] grid gap-10 lg:grid-cols-12">
          <Reveal immediate className="lg:col-span-5">
            <p className="max-w-[26em]">
              Bonjour! Whether you know exactly which exit you want or you&apos;re still circling, a specialist is happy to help.
              {" "}{c.hours}.
            </p>
          </Reveal>
          <Reveal immediate delay={0.1} className="lg:col-span-3">
            <h2 className="font-cond text-md">Talk to a specialist</h2>
            <ul className="mt-5 space-y-1">
              <li>
                E: <a href={c.emailHref} className="link-wipe">{c.email}</a>
              </li>
            </ul>
          </Reveal>
          <Reveal immediate delay={0.2} className="lg:col-span-4">
            <h2 className="font-cond text-md">Press &amp; partners</h2>
            <ul className="mt-5 space-y-1">
              <li>
                E: <a href={c.emailHref} className="link-wipe">{c.email}</a>
              </li>
              <li className="text-dim">Hoteliers and local guides: we&apos;d love to hear from you.</li>
            </ul>
          </Reveal>
        </div>
      </section>

      <Parallax className="aspect-[16/7] max-md:aspect-[4/3]" strength={0.15}>
        <Image src={imgUrl(photo(["hero:plan", "theme:roundabout-village"]), 2400)} alt="" fill sizes="100vw" className="object-cover" />
      </Parallax>

      <section className="px-gutter py-[var(--spacing-sec)]">
        <div className="grid gap-[var(--spacing-sec-lg)] lg:grid-cols-12">
          <div className="lg:col-span-5">
            <PlusHeading>Send us a message</PlusHeading>
            <SplitWords as="h2" text="Questions, ideas, a half-planned road trip on a napkin: send it over." className="font-cond max-w-[15em] text-xl" />
            <Link href={site.planCta.href} className="group mt-[var(--spacing-sec-lg)] flex items-center justify-between gap-6 border-y hairline-dark py-6">
              <span>
                <span className="font-ui block text-mist">Planning a trip?</span>
                <span className="font-cond mt-1 block text-lg">Use the road trip planner</span>
              </span>
              <ArrowBox tone="dark" size={59} />
            </Link>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
