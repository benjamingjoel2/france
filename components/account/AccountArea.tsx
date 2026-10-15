"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useStored } from "@/lib/useStored";
import { z } from "zod";
import type { Img } from "@/data/types";
import { whatsappHref } from "@/config/site";
import { imgUrl } from "@/lib/media";
import { cn } from "@/lib/cn";
import { Button, ButtonLink } from "@/components/ui/Button";
import { Field, TextInput } from "@/components/ui/Form";
import { Icon } from "@/components/ui/Icon";

/*
 * TODO: real authentication. This is a front-end stub only: "logging in" stores a demo
 * session in sessionStorage so the dashboard layout can be reviewed. Replace with a real
 * auth provider (and server-side session) before launch.
 */
const SESSION_KEY = "rp-demo-session";

const loginSchema = z.object({
  email: z.email("Enter the email you booked with."),
  password: z.string().min(8, "Passwords have at least 8 characters."),
});

export type DemoTrip = { slug: string; title: string; image: Img; days: number; nights: number; startEnd: string };

function Dashboard({ name, trip, onLogout }: { name: string; trip: DemoTrip; onLogout: () => void }) {
  const docs = [
    { label: "Booking confirmation", meta: "PDF · [placeholder]" },
    { label: "Car hire voucher", meta: "PDF · [placeholder]" },
    { label: "Accommodation vouchers", meta: "PDF · [placeholder]" },
    { label: "Travel insurance details", meta: "PDF · [placeholder]" },
    { label: "Emergency contacts in France", meta: "PDF · [placeholder]" },
  ];
  return (
    <div className="space-y-[var(--spacing-sec-lg)]">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="font-ui text-mist">Client area · demo</p>
          <h2 className="font-display mt-2 text-3xl">Bonjour, {name}</h2>
        </div>
        <Button variant="stroke-light" size="sm" onClick={onLogout}>
          Log out
        </Button>
      </div>

      <div className="grid gap-[var(--spacing-grid-gap)] lg:grid-cols-12">
        {/* Trip card */}
        <div className="bg-charcoal-5 lg:col-span-7">
          <div className="relative aspect-[16/9]">
            <Image src={imgUrl(trip.image, 1400)} alt={trip.image.alt} fill sizes="(min-width:1024px) 55vw, 100vw" className="object-cover" />
            <span className="font-ui absolute top-4 left-4 rounded-[3px] bg-roadsign px-2 py-1 text-white">Upcoming trip</span>
          </div>
          <div className="p-[clamp(20px,3vw,40px)]">
            <h3 className="font-cond text-xl">{trip.title}</h3>
            <p className="font-ui mt-3 text-mist">
              [Departure date] · {trip.days} days / {trip.nights} nights · {trip.startEnd}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <ButtonLink href={`/road-trips/${trip.slug}`} variant="cream" size="sm">
                View itinerary
              </ButtonLink>
              <ButtonLink href={whatsappHref(`Bonjour! A question about my trip: ${trip.title}`)} variant="stroke-light" size="sm" iconLeft="whatsapp">
                WhatsApp your specialist
              </ButtonLink>
            </div>
          </div>
        </div>

        {/* Route book */}
        <div className="flex flex-col justify-between gap-8 bg-sunflower p-[clamp(20px,3vw,40px)] text-charcoal lg:col-span-5">
          <div>
            <Icon name="route" size={36} />
            <h3 className="font-display mt-6 text-2xl">Your route book</h3>
            <p className="mt-4 max-w-[28em]">
              Day-by-day routes, scenic detours, parking tips and where to have lunch. Print it for the glovebox, or keep it
              offline on your phone.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <a href="/downloads/route-book-sample.pdf" download className="font-ui inline-flex h-11 items-center gap-2 rounded-full bg-charcoal px-5 text-cream transition-colors hover:bg-ash">
              <Icon name="download" size={16} /> Download PDF (sample)
            </a>
          </div>
        </div>
      </div>

      {/* Documents */}
      <section aria-labelledby="docs-h">
        <h3 id="docs-h" className="font-cond text-lg">
          Trip documents
        </h3>
        <ul className="mt-5 border-b hairline-dark">
          {docs.map((d) => (
            <li key={d.label} className="flex items-center justify-between gap-4 border-t hairline-dark py-4">
              <span className="flex items-center gap-3">
                <Icon name="document" size={18} className="text-mist" /> {d.label}
              </span>
              <span className="font-ui flex items-center gap-4 text-mist">
                <span className="hidden sm:inline">{d.meta}</span>
                <button type="button" disabled title="Available closer to departure" className="flex size-10 items-center justify-center border hairline-dark opacity-40">
                  <Icon name="download" size={15} />
                  <span className="sr-only">Download {d.label} (not available yet)</span>
                </button>
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-[13px] text-mist">Documents appear here about [3 weeks] before departure. TODO: connect to booking system.</p>
      </section>
    </div>
  );
}

export function AccountArea({ trip }: { trip: DemoTrip }) {
  const [tab, setTab] = useState<"login" | "new">("login");
  const [rawSession, storeSession] = useStored(SESSION_KEY, "session");
  const session = rawSession ? (JSON.parse(rawSession) as { name: string }) : null;
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  function login(e: React.FormEvent) {
    e.preventDefault();
    const r = loginSchema.safeParse(form);
    if (!r.success) {
      const errs: Record<string, string> = {};
      for (const i of r.error.issues) errs[String(i.path[0])] ??= i.message;
      setErrors(errs);
      return;
    }
    // TODO: authenticate against the real backend.
    const s = { name: form.email.split("@")[0].replace(/[._-]+/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()) };
    storeSession(JSON.stringify(s));
  }

  function logout() {
    storeSession(null);
    setForm({ email: "", password: "" });
  }

  if (session) return <Dashboard name={session.name} trip={trip} onLogout={logout} />;

  const tabBtn = (id: "login" | "new", label: string) => (
    <button
      type="button"
      role="tab"
      aria-selected={tab === id}
      onClick={() => setTab(id)}
      className={cn(
        "font-ui h-[52px] flex-1 transition-colors duration-200 lg:h-[59px]",
        tab === id ? "bg-cream text-charcoal" : "bg-charcoal-10 text-cream hover:bg-cream hover:text-charcoal",
      )}
    >
      {label}
    </button>
  );

  return (
    <div className="mx-auto max-w-[960px]">
      <div className="text-center">
        <h2 className="font-cond text-lg">Log in to your client area</h2>
        <p className="mx-auto mt-3 max-w-[36em] text-mist">Your trip documents, route book and a direct line to your specialist, all in one place.</p>
      </div>
      <div role="tablist" aria-label="Do you have an account?" className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-[22px]">
        {tabBtn("login", "Yes, I'm a client")}
        {tabBtn("new", "Not yet")}
      </div>

      {tab === "login" ? (
        <form role="tabpanel" onSubmit={login} noValidate className="pt-8">
          <div className="grid gap-6 sm:grid-cols-2">
            <Field label="Email" htmlFor="acc-email" required error={errors.email}>
              <TextInput id="acc-email" type="email" autoComplete="email" placeholder="you@example.com" value={form.email} invalid={!!errors.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            </Field>
            <Field label="Password" htmlFor="acc-password" required error={errors.password}>
              <TextInput id="acc-password" type="password" autoComplete="current-password" placeholder="password" value={form.password} invalid={!!errors.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
            </Field>
          </div>
          <Button type="submit" variant="cream" className="mt-8 w-full">
            Log in
          </Button>
          <p className="mt-4 text-center text-[13px] text-mist">
            Demo only: any email and an 8+ character password will open a sample dashboard. <span className="text-brick">TODO: real auth</span>
          </p>
        </form>
      ) : (
        <div role="tabpanel" className="pt-10 text-center">
          <p className="mx-auto max-w-[34em]">
            Client accounts are created by your specialist once you&apos;ve booked. Not booked yet? Start with the road trip planner,
            it takes about four minutes.
          </p>
          <div className="mt-8 flex justify-center gap-2">
            <ButtonLink href="/plan-my-road-trip" variant="cream">
              Plan my road trip
            </ButtonLink>
            <Link href="/contact" className="font-ui link-grow self-center px-4">
              Contact us
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
