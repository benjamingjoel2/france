import { initLocale } from '@/lib/i18n/server';
import { localizeMetadata } from '@/lib/i18n/metadata';
import { t, tp } from '@/lib/i18n/t';
import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/config/site";
import { imgUrl, photo } from "@/lib/media";
import { ArticleHero } from "@/components/sections/ArticleHero";
import { Accordion } from "@/components/ui/Accordion";
import { PlusHeading } from "@/components/ui/PlusHeading";
import { Icon } from "@/components/ui/Icon";
import { SplitWords } from "@/components/motion/SplitWords";
import { Reveal } from "@/components/motion/Reveal";
import { ImageReveal } from "@/components/motion/ImageReveal";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return localizeMetadata({
  title: "Why Rond-Point",
  description:
    "Rond-Point was born from a love of the back roads and a desire to do road trips better: hand-picked stays, a route book worth keeping and one dedicated specialist the whole way.",
  alternates: { canonical: "/why-rond-point" },
}, (await params).locale);
}

const reasons = [
  {
    id: "stays",
    title: "Hand-picked stays",
    body: [
      "Every bed on your route is one we'd book for our own parents: châteaux with creaky floors in the right way, farmhouses with pools, boutique rooms above the best bakery in town.",
      "We visit, we re-visit, and we drop anywhere that stops deserving you.",
    ],
  },
  {
    id: "routebook",
    title: "The route book",
    body: [
      "A printed, beautifully designed book for the glovebox (and an offline app for the phone): daily routes, the scenic detours, where to park, what to order and which roundabout exit not to miss.",
      "Clients keep them on the coffee table afterwards. We take that as a compliment.",
    ],
  },
  {
    id: "specialist",
    title: "One dedicated specialist",
    body: [
      "The person who designed your loop is the person who answers when you message from a lay-by. No call centre, no ticket numbers: just someone who knows exactly where you are on the route.",
    ],
  },
  {
    id: "hosts",
    title: "Local hosts",
    body: [
      "Our network of locals shapes every route: the winemaker's neighbour, the market regular, the friend who knows when the lavender is really out. Some will meet you; all of them improve your trip.",
    ],
  },
  {
    id: "car",
    title: "Car hire, sorted",
    body: [
      "The right car for the roads you'll drive: compact for village lanes, convertible for the corniche, electric with the charging planned. Full insurance options, automatics on request, no surprise one-way fees on our loops.",
    ],
  },
];

export default async function WhyPage({ params }: { params: Promise<{ locale: string }> }) {
  await initLocale(params);
  const storyImgs = [photo(["theme:map-roadtrip", "theme:cafe-terrace"], 1), photo(["theme:road-winding", "region:french-alps"], 2)];

  return (
    <div className="overflow-hidden bg-charcoal text-cream">
      <ArticleHero image={photo(["hero:why", "theme:night-stars"])} lines={tp(["Why Rond-Point"])} crumbs={tp([{ label: "Why Rond-Point" }])} />

      {/* Our story */}
      <section className="py-[var(--spacing-sec)]">
        <div className="px-gutter">
          <Reveal>
            <PlusHeading>{t("Our story")}</PlusHeading>
          </Reveal>
          <div className="grid gap-8 xl:grid-cols-2">
            <SplitWords as="h2" text={t("Born from a love of the back roads")} className="font-cond max-w-[12em] text-2xl" />
            <Reveal className="max-w-[40em]">
              <div className="richtext">
                <p>
                  {t("Rond-Point was born from a love of the back roads and a desire to do road trips better. France has more roundabouts than anywhere on Earth, and we came to think of every one of them as an invitation: go straight on to the motorway, or take the third exit towards a village you've never heard of.")}</p>
                <p>
                  {t("We kept taking the third exit. It led to lunches that lasted until four, to a château owner who insisted we stay for the harvest, to a lavender field nobody had photographed. The long way round turned out to be the whole point.")}</p>
                <p>
                  {t("So we built a company around it. Every Rond-Point trip is a loop: you set off, take the long way round through vineyards, villages, coastlines and mountain passes, and come back to where you started, changed. Real local knowledge goes into every kilometre, and one specialist stays with you the whole way.")}</p>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="mt-[var(--spacing-sec)] flex flex-col gap-8 lg:flex-row lg:items-start">
          <div className="pr-[50%] pl-gutter lg:-mt-[9vw] lg:w-1/2 lg:pr-[15%]">
            <ImageReveal className="aspect-square">
              <Image src={imgUrl(storyImgs[0], 900)} alt={tp(storyImgs[0].alt)} fill sizes="(min-width:1024px) 32vw, 50vw" className="object-cover" />
            </ImageReveal>
          </div>
          <div className="pl-[20%] lg:w-1/2 lg:pl-0">
            <ImageReveal className="aspect-[3/2]">
              <Image src={imgUrl(storyImgs[1], 1400)} alt={tp(storyImgs[1].alt)} fill sizes="50vw" className="object-cover" />
            </ImageReveal>
          </div>
        </div>
      </section>

      {/* Media band straddling charcoal → cream */}
      <section className="relative bg-cream pb-[var(--spacing-sec)]">
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1/2 bg-charcoal" />
        <figure className="relative mx-gutter aspect-video overflow-hidden bg-charcoal-10 md:mx-[8.33%]">
          <Image src={imgUrl(photo(["theme:convertible", "region:cote-d-azur"], 1), 2000)} alt={t("A convertible on a coastal road")} fill sizes="85vw" className="object-cover" />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex size-20 items-center justify-center rounded-full bg-cream text-charcoal">
              <Icon name="play" size={26} />
            </span>
          </span>
          <figcaption className="font-ui absolute bottom-0 left-0 bg-roadsign px-3 py-1.5 text-[11px] text-white">
            {t("Brand film placeholder · TODO: embed video")}</figcaption>
        </figure>
      </section>

      {/* The devil is in the détour */}
      <section className="py-[var(--spacing-sec)]">
        <div className="px-gutter lg:ml-[8.33%] lg:w-[58%]">
          <Reveal>
            <PlusHeading>{t("Why Rond-Point?")}</PlusHeading>
          </Reveal>
          <SplitWords as="h2" text={t("The devil is in the détour, and we're obsessed with the détour")} className="font-cond max-w-[15em] text-2xl" />
        </div>
        <div className="mt-[var(--spacing-sec-lg)] grid lg:mt-[var(--spacing-sec)] lg:grid-cols-12">
          <div className="lg:col-span-6">
            <ImageReveal className="aspect-[4/3]">
              <Image src={imgUrl(photo(["theme:countryside-farmhouse", "theme:chateau-hotel"]), 1400)} alt={t("A stone farmhouse stay")} fill sizes="50vw" className="object-cover" />
            </ImageReveal>
          </div>
          <div className="mt-10 px-gutter lg:col-span-5 lg:col-start-8 lg:mt-0 lg:pl-0">
            <p className="mb-6 max-w-[40em] text-mist">{t("Six things we do so you can concentrate on the view.")}</p>
            <Accordion
              tone="dark"
              titleClass="font-cond text-lg"
              items={reasons.map((r) => ({ id: r.id, title: tp(r.title), content: r.body.map((p, i) => <p key={i}>{tp(p)}</p>) }))}
            />
            <div className="mt-[var(--spacing-sec)] ml-auto w-1/2 lg:w-3/4">
              <ImageReveal className="aspect-square">
                <Image src={imgUrl(photo(["theme:picnic", "theme:cheese-food"]), 800)} alt={t("A picnic by the road")} fill sizes="30vw" className="object-cover" />
              </ImageReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
