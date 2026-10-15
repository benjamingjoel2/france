"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  BUDGETS,
  DIAL_CODES,
  emptyDraft,
  issuesToErrors,
  stepKeys,
  stepSchemas,
  type PlannerDraft,
} from "@/lib/planner-schema";
import { interests as interestLabels, ordinal, paces, tripTypes } from "@/data/taxonomy";
import { site } from "@/config/site";
import { useCurrency } from "@/lib/currency";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import { Checkbox, ChoiceChips, Field, Select, Stepper, TextArea, TextInput } from "@/components/ui/Form";
import { Icon } from "@/components/ui/Icon";
import { ExitPicker } from "./ExitPicker";
import { PlannerProgress } from "./PlannerProgress";
import { Confirmation } from "./Confirmation";

const STORAGE_KEY = "rp-planner-v1";
const STEP_TITLES = ["When", "Where", "Road trip style", "Who", "Contact"] as const;
const STEP_INTROS = [
  "Roughly when would you like to set off, and for how long?",
  "Choose your exits: as many regions as you like. Or keep circling and we'll suggest a route.",
  "How do you like to travel? This shapes the route, the car and the daily driving.",
  "Who's coming along, and where do you like to sleep?",
  "Last exit. How can your specialist reach you?",
];

type Errors = Record<string, string>;

export type PlannerTrip = { slug: string; title: string; type: string; pace: string; regionSlugs: string[] };

export function Planner({
  exits,
  trips,
}: {
  exits: { slug: string; shortName: string; name: string }[];
  trips: PlannerTrip[];
}) {
  const [draft, setDraft] = useState<PlannerDraft>(emptyDraft);
  const [step, setStep] = useState(0);
  const [maxStep, setMaxStep] = useState(0);
  const [errors, setErrors] = useState<Errors>({});
  const [loaded, setLoaded] = useState(false);
  const [minDate, setMinDate] = useState<string | undefined>(undefined);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [done, setDone] = useState<{ name: string } | null>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const reduce = useReducedMotion();
  const { format } = useCurrency();

  /* ---------- Load saved progress + URL prefill ---------- */
  useEffect(() => {
    let next = emptyDraft();
    let savedStep = 0;
    let savedMax = 0;
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const saved = JSON.parse(raw) as { draft: PlannerDraft; step: number; maxStep: number };
        next = { ...next, ...saved.draft };
        savedStep = Math.min(4, saved.step ?? 0);
        savedMax = Math.min(4, saved.maxStep ?? savedStep);
      }
    } catch {
      /* corrupted or unavailable storage: start fresh */
    }
    const params = new URLSearchParams(window.location.search);
    const region = params.get("region");
    const tripSlug = params.get("trip");
    if (region === "help") next.where = { regions: [], helpMeChoose: true };
    else if (region && exits.some((e) => e.slug === region) && !next.where.regions.includes(region)) {
      next.where = { regions: [...next.where.regions, region], helpMeChoose: false };
    }
    const trip = trips.find((t) => t.slug === tripSlug);
    if (trip) {
      next.style.tripType = trip.type as PlannerDraft["style"]["tripType"];
      next.style.pace = trip.pace as PlannerDraft["style"]["pace"];
      next.where = { regions: Array.from(new Set([...next.where.regions, ...trip.regionSlugs])), helpMeChoose: false };
      if (!next.contact.notes.includes(trip.title)) {
        next.contact.notes = `I'm interested in the "${trip.title}" road trip.${next.contact.notes ? "\n" + next.contact.notes : ""}`;
      }
    }
    // Restoring saved progress and URL prefill can only happen after hydration.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDraft(next);
    setStep(savedStep);
    setMaxStep(savedMax);
    setMinDate(new Date(Date.now() + 86400000).toISOString().slice(0, 10));
    setLoaded(true);
  }, [exits, trips]);

  /* ---------- Persist on every change ---------- */
  useEffect(() => {
    if (!loaded || done) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ draft, step, maxStep }));
    } catch {
      /* ignore */
    }
  }, [draft, step, maxStep, loaded, done]);

  const update = useCallback(<K extends keyof PlannerDraft>(key: K, patch: Partial<PlannerDraft[K]>) => {
    setDraft((d) => ({ ...d, [key]: { ...d[key], ...patch } }));
  }, []);

  // Clear a field's error as soon as it's edited.
  const clear = (k: string) => setErrors((e) => (e[k] ? Object.fromEntries(Object.entries(e).filter(([x]) => x !== k)) : e));

  function validate(i: number): Errors {
    const key = stepKeys[i];
    const res = stepSchemas[i].safeParse(draft[key]);
    return res.success ? {} : issuesToErrors(res.error.issues);
  }

  function focusFirstError(errs: Errors) {
    const first = Object.keys(errs)[0];
    if (!first) return;
    requestAnimationFrame(() => {
      const id = `${stepKeys[step]}-${first.split(".")[0]}`;
      const el =
        document.getElementById(id) ??
        formRef.current?.querySelector<HTMLElement>(`[data-field="${first.split(".")[0]}"] input, [data-field="${first.split(".")[0]}"] button`);
      el?.focus();
      el?.scrollIntoView({ block: "center", behavior: reduce ? "auto" : "smooth" });
    });
  }

  function goTo(i: number) {
    setErrors({});
    setStep(i);
    requestAnimationFrame(() => {
      headingRef.current?.focus();
      formRef.current?.scrollIntoView({ block: "start", behavior: reduce ? "auto" : "smooth" });
    });
  }

  async function onNext(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate(step);
    if (Object.keys(errs).length) {
      setErrors(errs);
      focusFirstError(errs);
      return;
    }
    if (step < 4) {
      setMaxStep((m) => Math.max(m, step + 1));
      goTo(step + 1);
      return;
    }
    // Final submit: re-validate everything.
    for (let i = 0; i < 5; i++) {
      const errsI = validate(i);
      if (Object.keys(errsI).length) {
        goTo(i);
        setErrors(errsI);
        return;
      }
    }
    setSubmitting(true);
    setSubmitError("");
    try {
      const res = await fetch("/api/plan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(draft),
      });
      if (!res.ok) throw new Error(String(res.status));
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch {
        /* ignore */
      }
      setDone({ name: draft.contact.name.split(" ")[0] });
      window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
    } catch {
      setSubmitError("Something went wrong sending your plan. Please try again, or message us on WhatsApp.");
    } finally {
      setSubmitting(false);
    }
  }

  function startOver() {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
    setDraft(emptyDraft());
    setMaxStep(0);
    goTo(0);
  }

  const budgetOptions = useMemo(
    () =>
      BUDGETS.map((b) => ({
        value: b.value,
        label: b.max === null ? `${format(b.min, { round: 100 })}+` : b.min === 0 ? `Under ${format(b.max, { round: 100 })}` : `${format(b.min, { round: 100 })}–${format(b.max, { round: 100 })}`,
      })),
    [format],
  );

  if (done) return <Confirmation name={done.name} />;

  const s = draft;
  const err = (k: string) => errors[k];
  const childErr = Object.entries(errors).find(([k]) => k.startsWith("childAges"))?.[1];
  const id = (k: string) => `${stepKeys[step]}-${k}`;

  return (
    <div className="grid gap-[var(--spacing-sec-lg)] lg:grid-cols-12">
      {/* Left: statement + progress */}
      <div className="lg:col-span-5">
        <div className="lg:sticky lg:top-[calc(var(--header-h)+32px)]">
          <p className="font-cond max-w-[14em] text-xl">Five exits to your road trip. Your specialist takes it from there.</p>
          <PlannerProgress
            titles={STEP_TITLES}
            current={step}
            maxReached={maxStep}
            onSelect={(i) => i <= maxStep && goTo(i)}
            className="mt-[var(--spacing-sec-lg)]"
          />
          <button type="button" onClick={startOver} className="font-ui link-grow mt-8 text-mist hover:text-cream">
            Start over
          </button>
        </div>
      </div>

      {/* Right: current step */}
      <form ref={formRef} onSubmit={onNext} noValidate className="scroll-mt-[calc(var(--header-h)+24px)] lg:col-span-6 lg:col-start-7">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={step}
            initial={{ opacity: 0, x: reduce ? 0 : 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: reduce ? 0 : -24 }}
            transition={{ duration: 0.3, ease: [0.645, 0.045, 0.355, 1] }}
          >
            <p className="font-ui mb-3 inline-flex rounded-[3px] bg-roadsign px-2 py-1 text-white">
              {ordinal(step + 1)} exit · step {step + 1} of 5
            </p>
            <h2 ref={headingRef} tabIndex={-1} className="font-display text-3xl outline-none">
              {STEP_TITLES[step]}
            </h2>
            <p className="mt-4 mb-[var(--spacing-sec-md)] max-w-[34em] text-mist">{STEP_INTROS[step]}</p>

            {Object.keys(errors).length > 0 && (
              <p role="alert" className="font-ui mb-6 border border-brick/60 px-4 py-3 text-brick">
                Please check the {Object.keys(errors).length === 1 ? "highlighted field" : `${Object.keys(errors).length} highlighted fields`}.
              </p>
            )}

            <div className="space-y-7">
              {/* ---------------- Step 1: When ---------------- */}
              {step === 0 && (
                <>
                  <Field label="Start date" htmlFor={id("startDate")} required error={err("startDate")}>
                    <TextInput
                      id={id("startDate")}
                      type="date"
                      min={minDate}
                      value={s.when.startDate}
                      invalid={!!err("startDate")}
                      onChange={(e) => {
                        update("when", { startDate: e.target.value });
                        clear("startDate");
                      }}
                    />
                  </Field>
                  <Field label="Number of days (3–30)" htmlFor={id("days")} required error={err("days")}>
                    <Stepper
                      id={id("days")}
                      label="days"
                      min={3}
                      max={30}
                      value={s.when.days}
                      invalid={!!err("days")}
                      onChange={(n) => {
                        update("when", { days: n });
                        clear("days");
                      }}
                    />
                  </Field>
                  <Field as="fieldset" label="Are your dates…" required error={err("dateFlex")}>
                    <div data-field="dateFlex">
                      <ChoiceChips
                        name="dateFlex"
                        columns={2}
                        invalid={!!err("dateFlex")}
                        value={s.when.dateFlex || undefined}
                        onChange={(v) => {
                          update("when", { dateFlex: v as "exact" | "approximate" });
                          clear("dateFlex");
                        }}
                        options={[
                          { value: "exact", label: "Exact", sub: "Flights booked, or as good as" },
                          { value: "approximate", label: "Approximate", sub: "Give or take a week or two" },
                        ]}
                      />
                    </div>
                  </Field>
                </>
              )}

              {/* ---------------- Step 2: Where ---------------- */}
              {step === 1 && (
                <>
                  <div data-field="regions">
                    <Field as="fieldset" label="Choose your exits" required error={err("regions")}>
                      <ExitPicker
                        exits={exits}
                        value={s.where.regions}
                        disabled={s.where.helpMeChoose}
                        invalid={!!err("regions")}
                        onChange={(v) => {
                          update("where", { regions: v });
                          clear("regions");
                        }}
                      />
                    </Field>
                  </div>
                  <button
                    type="button"
                    id={id("helpMeChoose")}
                    aria-pressed={s.where.helpMeChoose}
                    onClick={() => {
                      update("where", { helpMeChoose: !s.where.helpMeChoose, regions: [] });
                      clear("regions");
                    }}
                    className={cn(
                      "flex w-full items-center gap-4 border px-5 py-4 text-left transition-colors",
                      s.where.helpMeChoose ? "border-lavender bg-lavender text-cream" : "border-charcoal-10 bg-charcoal-5 hover:border-mist",
                    )}
                  >
                    <span aria-hidden="true" className="flex size-[22px] shrink-0 items-center justify-center rounded-full border border-current">
                      {s.where.helpMeChoose && <Icon name="check" size={13} />}
                    </span>
                    <span>
                      <span className="font-cond block text-lg">Keep circling: help me choose</span>
                      <span className="text-[13px] opacity-80">Tell your specialist what you love and they&apos;ll pick the exits.</span>
                    </span>
                  </button>
                </>
              )}

              {/* ---------------- Step 3: Style ---------------- */}
              {step === 2 && (
                <>
                  <Field as="fieldset" label="Trip type" required error={err("tripType")}>
                    <div data-field="tripType">
                      <ChoiceChips
                        name="tripType"
                        columns={2}
                        size="lg"
                        invalid={!!err("tripType")}
                        value={s.style.tripType || undefined}
                        onChange={(v) => {
                          update("style", { tripType: v as PlannerDraft["style"]["tripType"] });
                          clear("tripType");
                        }}
                        options={(Object.keys(tripTypes) as (keyof typeof tripTypes)[]).map((k) => ({
                          value: k,
                          label: tripTypes[k].label,
                          sub: tripTypes[k].blurb,
                        }))}
                      />
                    </div>
                  </Field>
                  <Field as="fieldset" label="Pace" required error={err("pace")}>
                    <div data-field="pace">
                      <ChoiceChips
                        name="pace"
                        columns={3}
                        size="lg"
                        invalid={!!err("pace")}
                        value={s.style.pace || undefined}
                        onChange={(v) => {
                          update("style", { pace: v as PlannerDraft["style"]["pace"] });
                          clear("pace");
                        }}
                        options={(Object.keys(paces) as (keyof typeof paces)[]).map((k) => ({
                          value: k,
                          label: paces[k].label,
                          sub: paces[k].hours,
                        }))}
                      />
                    </div>
                  </Field>
                  <Field as="fieldset" label="Interests (choose any)" required error={err("interests")}>
                    <div data-field="interests">
                      <ChoiceChips
                        name="interests"
                        multiple
                        invalid={!!err("interests")}
                        value={s.style.interests}
                        onChange={(v) => {
                          update("style", { interests: v as PlannerDraft["style"]["interests"] });
                          clear("interests");
                        }}
                        options={(Object.keys(interestLabels) as (keyof typeof interestLabels)[]).map((k) => ({
                          value: k,
                          label: interestLabels[k],
                        }))}
                      />
                    </div>
                  </Field>
                  <Field as="fieldset" label="Car type" required error={err("carType")}>
                    <div data-field="carType" className="space-y-4">
                      <ChoiceChips
                        name="carType"
                        columns={2}
                        invalid={!!err("carType")}
                        value={s.style.carType || undefined}
                        onChange={(v) => {
                          update("style", { carType: v as PlannerDraft["style"]["carType"] });
                          clear("carType");
                        }}
                        options={[
                          { value: "compact", label: "Compact", sub: "Made for village lanes" },
                          { value: "convertible", label: "Convertible", sub: "Roof down, obviously" },
                          { value: "suv", label: "SUV", sub: "Room for the cheese haul" },
                          { value: "electric", label: "Electric", sub: "We'll plan the charging stops" },
                        ]}
                      />
                      <Checkbox
                        id={id("automatic")}
                        checked={s.style.automatic}
                        onChange={(v) => update("style", { automatic: v })}
                        label="Automatic required (manual is the default in France)"
                      />
                    </div>
                  </Field>
                  <Field label="Pick-up city" htmlFor={id("pickup")} required error={err("pickup")}>
                    <Select
                      id={id("pickup")}
                      value={s.style.pickup}
                      invalid={!!err("pickup")}
                      placeholder="Please select…"
                      onChange={(e) => {
                        update("style", { pickup: e.target.value as PlannerDraft["style"]["pickup"] });
                        clear("pickup");
                      }}
                      options={[
                        { value: "paris", label: "Paris" },
                        { value: "nice", label: "Nice" },
                        { value: "lyon", label: "Lyon" },
                        { value: "bordeaux", label: "Bordeaux" },
                        { value: "marseille", label: "Marseille" },
                        { value: "toulouse", label: "Toulouse" },
                        { value: "other", label: "Other" },
                      ]}
                    />
                  </Field>
                  {s.style.pickup === "other" && (
                    <Field label="Where would you like to pick up?" htmlFor={id("pickupOther")} required error={err("pickupOther")}>
                      <TextInput
                        id={id("pickupOther")}
                        value={s.style.pickupOther}
                        invalid={!!err("pickupOther")}
                        placeholder="e.g. Strasbourg, Geneva airport"
                        onChange={(e) => {
                          update("style", { pickupOther: e.target.value });
                          clear("pickupOther");
                        }}
                      />
                    </Field>
                  )}
                </>
              )}

              {/* ---------------- Step 4: Who ---------------- */}
              {step === 3 && (
                <>
                  <div className="grid gap-7 sm:grid-cols-2">
                    <Field label="Adults" htmlFor={id("adults")} required error={err("adults")}>
                      <Stepper id={id("adults")} label="adults" min={1} max={12} value={s.who.adults} onChange={(n) => update("who", { adults: n })} />
                    </Field>
                    <Field label="Children (under 18)" htmlFor={id("children")} error={err("children")}>
                      <Stepper
                        id={id("children")}
                        label="children"
                        min={0}
                        max={8}
                        value={s.who.children}
                        onChange={(n) => {
                          const ages = s.who.childAges.slice(0, n);
                          while (ages.length < n) ages.push({ age: -1, carSeat: false });
                          update("who", { children: n, childAges: ages });
                          clear("childAges");
                        }}
                      />
                    </Field>
                  </div>
                  {s.who.children > 0 && (
                    <fieldset data-field="childAges" className="space-y-3 border-l-2 border-charcoal-10 pl-5">
                      <legend className="font-ui mb-3 text-cream">Children&apos;s ages and car seats</legend>
                      <p className="text-[13px] text-mist">
                        French rules require an appropriate child restraint for young children. Tell us ages and we&apos;ll
                        book the right seats with the car (verify current rules before launch).
                      </p>
                      {s.who.childAges.map((c, i) => (
                        <div key={i} className="grid items-center gap-3 sm:grid-cols-[1fr_auto]">
                          <Select
                            id={i === 0 ? id("childAges") : undefined}
                            aria-label={`Child ${i + 1} age`}
                            value={c.age >= 0 ? String(c.age) : ""}
                            invalid={!!childErr && c.age < 0}
                            placeholder={`Child ${i + 1}: age`}
                            onChange={(e) => {
                              const ages = s.who.childAges.map((x, j) => (j === i ? { ...x, age: parseInt(e.target.value, 10) } : x));
                              update("who", { childAges: ages });
                              clear("childAges");
                            }}
                            options={Array.from({ length: 18 }, (_, a) => ({ value: String(a), label: a === 0 ? "Under 1" : `${a} years` }))}
                          />
                          <Checkbox
                            checked={c.carSeat}
                            onChange={(v) =>
                              update("who", { childAges: s.who.childAges.map((x, j) => (j === i ? { ...x, carSeat: v } : x)) })
                            }
                            label="Needs a car seat"
                          />
                        </div>
                      ))}
                      {childErr && (
                        <p role="alert" className="font-ui text-[11.5px] text-brick">
                          {childErr}
                        </p>
                      )}
                    </fieldset>
                  )}
                  <Field as="fieldset" label="Stay style" required error={err("stayStyle")}>
                    <div data-field="stayStyle">
                      <ChoiceChips
                        name="stayStyle"
                        columns={2}
                        invalid={!!err("stayStyle")}
                        value={s.who.stayStyle || undefined}
                        onChange={(v) => {
                          update("who", { stayStyle: v as PlannerDraft["who"]["stayStyle"] });
                          clear("stayStyle");
                        }}
                        options={[
                          { value: "chateau", label: "Château", sub: "Turrets, optional" },
                          { value: "boutique", label: "Boutique", sub: "Small, stylish, characterful" },
                          { value: "countryside", label: "Countryside", sub: "Farmhouses, mas and gîtes" },
                          { value: "mix", label: "A bit of everything", sub: "Our favourite answer" },
                        ]}
                      />
                    </div>
                  </Field>
                  <Field as="fieldset" label="Budget per person (excluding flights)" required error={err("budget")}>
                    <div data-field="budget">
                      <ChoiceChips
                        name="budget"
                        columns={2}
                        invalid={!!err("budget")}
                        value={s.who.budget || undefined}
                        onChange={(v) => {
                          update("who", { budget: v as string });
                          clear("budget");
                        }}
                        options={budgetOptions}
                      />
                    </div>
                  </Field>
                </>
              )}

              {/* ---------------- Step 5: Contact ---------------- */}
              {step === 4 && (
                <>
                  <Field label="Your name" htmlFor={id("name")} required error={err("name")}>
                    <TextInput
                      id={id("name")}
                      autoComplete="name"
                      value={s.contact.name}
                      invalid={!!err("name")}
                      onChange={(e) => {
                        update("contact", { name: e.target.value });
                        clear("name");
                      }}
                    />
                  </Field>
                  <Field label="Email" htmlFor={id("email")} required error={err("email")}>
                    <TextInput
                      id={id("email")}
                      type="email"
                      autoComplete="email"
                      value={s.contact.email}
                      invalid={!!err("email")}
                      onChange={(e) => {
                        update("contact", { email: e.target.value });
                        clear("email");
                      }}
                    />
                  </Field>
                  <Field label="Phone" htmlFor={id("phone")} required error={err("phone")}>
                    <div className="grid grid-cols-[minmax(0,42%)_1fr] gap-2">
                      <Select
                        aria-label="Country code"
                        value={s.contact.dialCode}
                        onChange={(e) => update("contact", { dialCode: e.target.value })}
                        options={DIAL_CODES.map((d) => ({ value: d.code, label: d.label }))}
                      />
                      <TextInput
                        id={id("phone")}
                        type="tel"
                        autoComplete="tel-national"
                        value={s.contact.phone}
                        invalid={!!err("phone")}
                        onChange={(e) => {
                          update("contact", { phone: e.target.value });
                          clear("phone");
                        }}
                      />
                    </div>
                  </Field>
                  <Field as="fieldset" label="Preferred contact methods" required error={err("contactMethods")}>
                    <div data-field="contactMethods">
                      <ChoiceChips
                        name="contactMethods"
                        multiple
                        columns={3}
                        invalid={!!err("contactMethods")}
                        value={s.contact.contactMethods}
                        onChange={(v) => {
                          update("contact", { contactMethods: v as PlannerDraft["contact"]["contactMethods"] });
                          clear("contactMethods");
                        }}
                        options={[
                          { value: "email", label: "Email" },
                          { value: "whatsapp", label: "WhatsApp" },
                          { value: "telephone", label: "Telephone" },
                        ]}
                      />
                    </div>
                  </Field>
                  <Field label="Anything else? (optional)" htmlFor={id("notes")} error={err("notes")}>
                    <TextArea
                      id={id("notes")}
                      value={s.contact.notes}
                      placeholder="Special occasions, must-sees, dietary needs, the château you've always dreamt of…"
                      onChange={(e) => update("contact", { notes: e.target.value })}
                    />
                  </Field>
                  <div data-field="consent">
                    <Checkbox
                      id={id("consent")}
                      checked={s.contact.consent}
                      onChange={(v) => {
                        update("contact", { consent: v });
                        clear("consent");
                      }}
                      label={
                        <>
                          I&apos;m happy for {site.name} to contact me about my trip, as described in the{" "}
                          <Link href="/privacy" className="link-wipe text-cream">
                            privacy policy
                          </Link>
                          .
                        </>
                      }
                    />
                    {err("consent") && (
                      <p role="alert" className="font-ui mt-2 text-[11.5px] text-brick">
                        {err("consent")}
                      </p>
                    )}
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        {submitError && (
          <p role="alert" className="font-ui mt-6 text-brick">
            {submitError}
          </p>
        )}

        <div className="mt-[var(--spacing-sec-lg)] flex items-center justify-between gap-4 border-t hairline-dark pt-6">
          {step > 0 ? (
            <Button variant="stroke-light" iconLeft="arrow-left" onClick={() => goTo(step - 1)}>
              Back
            </Button>
          ) : (
            <span />
          )}
          <Button type="submit" variant="cream" icon={step < 4 ? "arrow-right" : undefined} disabled={submitting}>
            {step < 4 ? `Next: ${STEP_TITLES[step + 1]}` : submitting ? "Sending…" : "Send my road trip"}
          </Button>
        </div>
        <p className="mt-4 text-[13px] text-mist">Your answers are saved on this device as you go.</p>
      </form>
    </div>
  );
}
