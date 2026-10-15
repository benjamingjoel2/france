"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/cn";
import { PostCard, type PostLite } from "./PostCards";

/** Category pills (client-side filter, kept in the URL) and a two-column card grid. */
export function JournalIndex({
  posts,
  categories,
  featuredSlug,
}: {
  posts: PostLite[];
  categories: string[];
  /** Shown above the grid; left out of the unfiltered grid but included when filtering. */
  featuredSlug?: string;
}) {
  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const active = params.get("category") ?? "all";
  const list =
    active === "all"
      ? posts.filter((p) => p.slug !== featuredSlug)
      : posts.filter((p) => slugify(p.category) === active);

  const select = (c: string) => router.replace(c === "all" ? pathname : `${pathname}?category=${c}`, { scroll: false });

  return (
    <>
      <div className="mt-[var(--spacing-sec-xl)] border-t hairline-dark pt-[var(--spacing-sec-md)]">
        <ul className="flex flex-wrap gap-2" aria-label="Filter by category">
          {["all", ...categories.map(slugify)].map((c, i) => {
            const label = i === 0 ? "All" : categories[i - 1];
            const on = active === c;
            return (
              <li key={c}>
                <button
                  type="button"
                  aria-pressed={on}
                  onClick={() => select(c)}
                  className={cn(
                    "font-ui h-10 rounded-full px-5 transition-colors duration-300",
                    on ? "bg-cream text-charcoal" : "bg-charcoal-10 text-mist hover:text-cream",
                  )}
                >
                  {label}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <motion.ul layout={!reduce} className="mt-[var(--spacing-sec-md)] grid gap-x-[var(--spacing-grid-gap)] gap-y-[45px] md:grid-cols-2">
        <AnimatePresence mode="popLayout" initial={false}>
          {list.map((p) => (
            <motion.li
              key={p.slug}
              layout={!reduce}
              initial={{ opacity: 0, y: reduce ? 0 : 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45 }}
            >
              <PostCard post={p} />
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
      {list.length === 0 && <p className="py-20 text-center text-mist">Nothing in this category yet. The kettle&apos;s on.</p>}
    </>
  );
}

export function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
