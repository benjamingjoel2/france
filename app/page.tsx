export default function Home() {
  return (
    <>
      <section className="flex h-screen items-end bg-night px-gutter pb-20 text-cream">
        <h1 className="font-display text-4xl">Lavender<br />all the way.</h1>
      </section>
      <section className="px-gutter py-[var(--spacing-sec)]">
        <h2 className="font-display text-3xl">Featured road trips</h2>
        <p className="font-cond mt-6 text-2xl">Condensed heading test</p>
        <p className="font-wide mt-6 text-xl">Wide poster test</p>
        <p className="mt-6 max-w-xl">Body copy in DM Mono light. Take the long way round through vineyards, villages and mountain passes.</p>
      </section>
    </>
  );
}
