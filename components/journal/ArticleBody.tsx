import Image from "next/image";
import Link from "next/link";
import type { PostBlock } from "@/data/types";
import { imgUrl } from "@/lib/media";
import { getTrip, regionNameFor } from "@/lib/queries";
import { paces, tripTypes } from "@/data/taxonomy";
import { cn } from "@/lib/cn";
import { ArrowBox } from "@/components/ui/ArrowBox";
import { PaceGlyph } from "@/components/ui/PaceGlyph";
import { Reveal } from "@/components/motion/Reveal";

function TripLinkCard({ slug }: { slug: string }) {
  const t = getTrip(slug);
  if (!t) return null;
  return (
    <Link href={`/road-trips/${t.slug}`} className="group my-8 grid grid-cols-[32%_1fr_auto] items-center gap-5 border hairline-light p-3 pr-5 transition-colors hover:bg-charcoal hover:text-cream">
      <span className="relative block aspect-[4/3] overflow-hidden">
        <Image src={imgUrl(t.cardImage, 500)} alt="" fill sizes="220px" className="object-cover" />
      </span>
      <span>
        <span className="font-ui block text-[11px] opacity-70">Road trip · {regionNameFor(t)}</span>
        <span className="font-cond mt-1 block text-lg">{t.title}</span>
        <span className="font-ui mt-2 flex flex-wrap items-center gap-2 text-[11px] font-light">
          {tripTypes[t.type].short} • <PaceGlyph pace={t.pace} /> {paces[t.pace].label} • {t.days}D/{t.nights}N
        </span>
      </span>
      <ArrowBox size={40} className="max-sm:hidden group-hover:border-cream" />
    </Link>
  );
}

/** Renders typed post blocks inside the cream article sheet. */
export function ArticleBody({ blocks }: { blocks: PostBlock[] }) {
  // Group consecutive non-split blocks into prose runs; split blocks are full-width rows.
  const groups: { split: boolean; blocks: PostBlock[] }[] = [];
  for (const b of blocks) {
    const split = b.type === "split";
    const last = groups[groups.length - 1];
    if (!split && last && !last.split) last.blocks.push(b);
    else groups.push({ split, blocks: [b] });
  }
  let first = true;

  return (
    <div className="space-y-[var(--spacing-sec-xl)]">
      {groups.map((g, gi) => {
        if (g.split) {
          const b = g.blocks[0] as Extract<PostBlock, { type: "split" }>;
          return (
            <Reveal key={gi} className={cn("grid items-center gap-8 md:grid-cols-2 md:gap-[8%]", b.reverse && "md:[&>*:first-child]:order-2")}>
              <span className="relative block aspect-square overflow-hidden">
                <Image src={imgUrl(b.image, 1000)} alt={b.image.alt} fill sizes="(min-width:768px) 40vw, 90vw" className="object-cover" />
              </span>
              <div className="richtext">
                <h3 className="font-cond mb-4 text-md">{b.heading}</h3>
                {b.text.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </Reveal>
          );
        }
        return (
          <div key={gi} className="richtext max-w-[46em]">
            {g.blocks.map((b, i) => {
              switch (b.type) {
                case "p": {
                  const drop = first;
                  first = false;
                  return (
                    <p key={i} className={cn(drop && "first-letter:font-display first-letter:float-left first-letter:mr-2 first-letter:text-[3.6em] first-letter:leading-[0.8]")}>
                      {b.text}
                    </p>
                  );
                }
                case "h2":
                  return (
                    <h2 key={i} className="font-cond mt-10 mb-4 text-lg first:mt-0">
                      {b.text}
                    </h2>
                  );
                case "h3":
                  return (
                    <h3 key={i} className="font-cond mt-8 mb-3 text-md">
                      {b.text}
                    </h3>
                  );
                case "list":
                  return (
                    <ul key={i}>
                      {b.items.map((x) => (
                        <li key={x}>{x}</li>
                      ))}
                    </ul>
                  );
                case "callout":
                  return (
                    <aside key={i} className="my-8 border-l-4 border-sunflower bg-charcoal/5 px-5 py-4">
                      <p className="font-cond text-md">{b.text}</p>
                    </aside>
                  );
                case "tripLink":
                  return <TripLinkCard key={i} slug={b.slug} />;
                default:
                  return null;
              }
            })}
          </div>
        );
      })}
    </div>
  );
}
