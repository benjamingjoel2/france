import { t, tp } from '@/lib/i18n/t';
import type { DayPlan, Experience, Stay } from "@/data/types";
import { cn } from "@/lib/cn";
import { ButtonLink } from "@/components/ui/Button";
import { Carousel } from "@/components/ui/Carousel";
import { Icon } from "@/components/ui/Icon";

function DayCard({
  day,
  stay,
  experiences,
  index,
}: {
  day: DayPlan;
  stay?: Stay;
  experiences: Experience[];
  index: number;
}) {
  return (
    <article className={cn("text-cream", index % 2 === 0 && "lg:pt-[var(--spacing-sec)]")}>
      <p className="font-cond text-lg text-ash">{t("Day ")}{tp(day.day)}</p>
      <h3 className="font-cond text-lg">{tp(day.title)}</h3>
      <p className="font-ui mt-4 flex flex-wrap items-center gap-2 text-[11.5px]">
        {day.km > 0 ? (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-charcoal-10 px-3 py-1">
            <Icon name="car" size={14} /> {tp(day.km)} {t("km · ~")}{tp(day.driveTime)} {t("at the wheel")}</span>
        ) : (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-charcoal-10 px-3 py-1">
            <Icon name="car" size={14} /> {t("Car stays put")}</span>
        )}
        {day.eBikeDay && (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-vineyard px-3 py-1 text-cream">
            <Icon name="bike" size={14} /> {t("E-bike day · ")}{tp(day.eBikeDay.km)} {t("km · ")}{tp(day.eBikeDay.elevationM)} {t("m up")}</span>
        )}
      </p>
      <p className="mt-5 text-mist">{tp(day.body)}</p>
      {day.eBikeDay && <p className="mt-3 text-[13px] text-mist italic">{tp(day.eBikeDay.note)}</p>}
      <details className="group mt-6 border-t hairline-dark">
        <summary className="font-ui flex cursor-pointer list-none items-center justify-between py-4 [&::-webkit-details-marker]:hidden">
          {t("Stops, stay & experiences")}<Icon name="plus" size={18} className="transition-transform duration-200 group-open:rotate-45" />
        </summary>
        <div className="space-y-4 pb-4 text-[14px]">
          <p>
            <span className="font-ui block text-mist">{t("Route")}</span>
            {tp(day.from)} → {tp(day.to)}
          </p>
          {day.stops.length > 0 && (
            <div>
              <span className="font-ui block text-mist">{t("Stops")}</span>
              <ul className="mt-1 space-y-1">
                {day.stops.map((s) => (
                  <li key={s} className="flex gap-2">
                    <span aria-hidden="true" className="mt-[0.55em] size-1.5 shrink-0 bg-sunflower" />
                    {tp(s)}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {stay && (
            <p>
              <span className="font-ui block text-mist">{t("Tonight")}</span>
              <Icon name="bed" size={14} className="mr-1 inline" /> {tp(stay.name)}
            </p>
          )}
          {experiences.length > 0 && (
            <p>
              <span className="font-ui block text-mist">{t("Experience")}</span>
              {experiences.map((e) => tp(e.name)).join(" · ")}
            </p>
          )}
        </div>
      </details>
    </article>
  );
}

/**
 * Charcoal "Day by day" slider: the intro is the first slide on desktop, day cards
 * step up and down, and the rest bleed off the right edge.
 */
export function Itinerary({
  days,
  stays,
  experiences,
  tripSlug,
}: {
  days: DayPlan[];
  stays: Stay[];
  experiences: Experience[];
  tripSlug: string;
}) {
  const intro = (
    <div className="max-w-[24em]">
      <h2 className="font-display text-3xl">{t("Day by day")}</h2>
      <p className="mt-6 text-mist">
        {t("A first draft of your loop, with real distances and driving times. Every day can be stretched, shortened or swapped: it's your road trip.")}</p>
      <ButtonLink href={`/plan-my-road-trip?trip=${tripSlug}`} variant="cream" className="mt-8">
        {t("Tailor this route")}</ButtonLink>
    </div>
  );
  return (
    <section id="itinerary" className="scroll-mt-[var(--header-h)] overflow-hidden bg-charcoal py-[var(--spacing-sec)] text-cream">
      <div className="px-gutter pb-[var(--spacing-sec-lg)] text-center lg:hidden">{tp(intro)}</div>
      <Carousel
        label={t("Day by day itinerary")}
        tone="dark"
        itemClassName="w-[86%] sm:w-[60%] lg:w-[31.3vw] xl:w-[31.3vw] 2xl:w-[28vw]"
        gap="clamp(28px,9vw,130px)"
        slideClassName={["max-lg:hidden"]}
      >
        {tp([
          <div key="intro">
            {tp(intro)}
          </div>,
          ...days.map((d, i) => (
            <DayCard
              key={d.day}
              day={tp(d)}
              index={i}
              stay={tp(stays.find((s) => s.slug === d.stayId))}
              experiences={tp(experiences.filter((e) => d.experienceIds?.includes(e.slug)))}
            />
          )),
        ])}
      </Carousel>
    </section>
  );
}
