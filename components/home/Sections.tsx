import Image from "next/image";
import type { Faq, Img } from "@/data/types";
import { imgUrl } from "@/lib/media";
import { Accordion } from "@/components/ui/Accordion";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { PlusHeading, SquareMark } from "@/components/ui/PlusHeading";
import { SplitWords } from "@/components/motion/SplitWords";
import { Reveal } from "@/components/motion/Reveal";
import { ImageReveal } from "@/components/motion/ImageReveal";
import { ContactForm } from "@/components/forms/ContactForm";

/** "[ ABOUT ]" statement with a square marker and an arrow link (Strade-style), on cream. */
export function AboutStatement({
  label,
  statement,
  href,
  linkLabel,
  children,
}: {
  label: string;
  statement: string;
  href: string;
  linkLabel: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="bg-cream px-gutter py-[var(--spacing-sec)] text-charcoal">
      <div className="grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-3">
          <PlusHeading>{label}</PlusHeading>
        </div>
        <div className="lg:col-span-9 xl:col-span-8">
          <SplitWords as="h2" text={statement} className="font-cond text-2xl" stagger={0.015} />
          <Reveal className="mt-8 flex items-center gap-6">
            <SquareMark className="text-[12px]" />
            <ArrowLink href={href}>{linkLabel}</ArrowLink>
          </Reveal>
        </div>
      </div>
      {children}
    </section>
  );
}

/** Two images side by side, the second dropped lower (Strade's image pair). */
export function ImagePair({ images }: { images: [Img, Img] }) {
  return (
    <section className="bg-cream px-gutter pb-[var(--spacing-sec)]">
      <div className="grid grid-cols-12 items-start gap-[var(--spacing-grid-gap)]">
        <ImageReveal className="col-span-7 aspect-[4/3]">
          <Image src={imgUrl(images[0], 1600)} alt={images[0].alt} fill sizes="58vw" className="object-cover" />
        </ImageReveal>
        <ImageReveal className="col-span-5 mt-[18%] aspect-[3/4]">
          <Image src={imgUrl(images[1], 1100)} alt={images[1].alt} fill sizes="42vw" className="object-cover" />
        </ImageReveal>
      </div>
    </section>
  );
}


/** "[ FAQ ] Common questions" on the homepage. */
export function HomeFaq({ faqs }: { faqs: Faq[] }) {
  return (
    <section className="bg-cream px-gutter py-[var(--spacing-sec)] text-charcoal">
      <div className="grid gap-[var(--spacing-sec-lg)] lg:grid-cols-12">
        <div className="lg:col-span-4">
          <PlusHeading>FAQ</PlusHeading>
          <SplitWords as="h2" lines={["Common", "questions"]} className="font-display text-3xl" />
          <ArrowLink href="/faq" className="mt-8">
            All questions
          </ArrowLink>
        </div>
        <div className="lg:col-span-7 lg:col-start-6">
          <Accordion
            tone="light"
            items={faqs.map((f) => ({ id: f.id, title: f.question, content: f.answer.map((p, i) => <p key={i}>{p}</p>) }))}
          />
        </div>
      </div>
    </section>
  );
}

/** "[ Additional information ] Request information" with the short contact form. */
export function RequestInfo() {
  return (
    <section className="bg-charcoal px-gutter py-[var(--spacing-sec)] text-cream">
      <div className="grid gap-[var(--spacing-sec-lg)] lg:grid-cols-12">
        <div className="lg:col-span-5">
          <PlusHeading>Additional information</PlusHeading>
          <SplitWords as="h2" lines={["Request", "information"]} className="font-display text-3xl" />
          <p className="mt-6 max-w-[28em] text-mist">
            Questions, ideas or a half-planned road trip on a napkin. A specialist replies within [24 hours]. Ready to plan?
          </p>
          <ArrowLink href="/plan-my-road-trip" className="mt-6">
            Use the road trip planner
          </ArrowLink>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
