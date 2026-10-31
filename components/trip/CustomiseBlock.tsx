"use client";

import { t, tp } from '@/lib/i18n/t';
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/Button";
import { Field, TextArea, TextInput, ChoiceChips } from "@/components/ui/Form";
import { Icon } from "@/components/ui/Icon";
import { RingGlyph } from "@/components/ui/PlusHeading";
import { issuesToErrors } from "@/lib/planner-schema";

const schema = z.object({
  name: z.string().trim().min(2, "Tell us your name."),
  email: z.email("Enter a valid email address."),
  phone: z.string().trim().max(30),
  method: z.enum(["email", "telephone"], { error: "How should we reach you?" }),
  message: z.string().trim().min(5, "Tell us a little about what you'd change."),
});

/**
 * "Make it yours" band with a tiled roundabout pattern; the button opens a
 * right-hand drawer with a short enquiry form (posts to /api/contact).
 */
export function CustomiseBlock({ tripTitle }: { tripTitle: string }) {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({ name: "", email: "", phone: "", method: "", message: `I'd love "${tripTitle}" but with…` });
  const reduce = useReducedMotion();
  const panel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const prevFocus = document.activeElement as HTMLElement | null;
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    panel.current?.querySelector<HTMLElement>("button, input")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "Tab" && panel.current) {
        const f = Array.from(panel.current.querySelectorAll<HTMLElement>("button, input, textarea, a[href]"));
        if (!f.length) return;
        if (e.shiftKey && document.activeElement === f[0]) {
          e.preventDefault();
          f[f.length - 1].focus();
        } else if (!e.shiftKey && document.activeElement === f[f.length - 1]) {
          e.preventDefault();
          f[0].focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
      prevFocus?.focus();
    };
  }, [open]);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const r = schema.safeParse(form);
    if (!r.success) {
      setErrors(issuesToErrors(r.error.issues));
      return;
    }
    setErrors({});
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...r.data, message: `[${tripTitle}] ${r.data.message}` }),
    }).catch(() => null);
    if (res?.ok) setSent(true);
    else setErrors({ form: "Something went wrong. Please try again or email us." });
  }

  return (
    <section className="relative overflow-hidden bg-charcoal-10 px-gutter py-[var(--spacing-sec)] text-cream">
      {/* tiled roundabout pattern */}
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 w-[60%] opacity-[0.07]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 40 40'%3E%3Cg fill='none' stroke='%23F5EFE2' stroke-width='3.4'%3E%3Ccircle cx='20' cy='20' r='11'/%3E%3Cpath d='M20 31v8M10.5 14.5 3.6 10.5M31 20h8'/%3E%3C/g%3E%3Ccircle cx='20' cy='20' r='4.2' fill='%23F5EFE2'/%3E%3C/svg%3E\")",
        }}
      />
      <div className="relative grid gap-8 lg:grid-cols-12 lg:items-end">
        <h2 className="font-cond text-2xl lg:col-span-4">{t("Make it yours")}</h2>
        <div className="lg:col-span-6 lg:col-start-6">
          <p className="max-w-[34em]">
            {t("Every Rond-Point trip is tailor-made. Swap a stay, add a night, slow the pace, trade the hatchback for a convertible. Tell us what you'd change and we'll redraw the loop.")}</p>
          <Button variant="cream" className="mt-8" onClick={() => setOpen(true)}>
            {t("Get started")}</Button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div className="fixed inset-0 z-[60]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="absolute inset-0 bg-night/50" onClick={() => setOpen(false)} aria-hidden="true" />
            <motion.div
              ref={panel}
              role="dialog"
              aria-modal="true"
              aria-labelledby="customise-title"
              className="absolute inset-y-0 right-0 w-full max-w-[752px] overflow-y-auto bg-charcoal px-[clamp(20px,5vw,70px)] py-8 text-cream"
              initial={{ x: reduce ? 0 : "100%" }}
              animate={{ x: 0 }}
              exit={{ x: reduce ? 0 : "100%" }}
              transition={{ duration: 0.4, ease: [0.645, 0.045, 0.355, 1] }}
            >
              <button
                type="button"
                aria-label={t("Close")}
                onClick={() => setOpen(false)}
                className="flex size-12 items-center justify-center border hairline-dark transition-colors hover:bg-cream hover:text-charcoal"
              >
                <Icon name="close" size={18} />
              </button>
              <h2 id="customise-title" className="font-display mt-10 text-xl">
                {t("Customise this road trip")}</h2>
              {sent ? (
                <div className="mt-8 space-y-4" role="status">
                  <RingGlyph className="text-sunflower" />
                  <p className="font-cond text-xl">{t("Merci! Your specialist will be in touch shortly.")}</p>
                  <p className="text-mist">{t("Take the long way round.")}</p>
                </div>
              ) : (
                <form onSubmit={submit} noValidate className="mt-8 space-y-6">
                  <p className="text-mist">{tp(tripTitle)}</p>
                  <Field label={t("Name")} htmlFor="cz-name" required error={errors.name}>
                    <TextInput id="cz-name" autoComplete="name" invalid={!!errors.name} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                  </Field>
                  <Field label={t("Email")} htmlFor="cz-email" required error={errors.email}>
                    <TextInput id="cz-email" type="email" autoComplete="email" invalid={!!errors.email} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                  </Field>
                  <Field label={t("Phone (optional)")} htmlFor="cz-phone">
                    <TextInput id="cz-phone" type="tel" autoComplete="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                  </Field>
                  <Field as="fieldset" label={t("Best way to reach you")} required error={errors.method}>
                    <ChoiceChips
                      name="cz-method"
                      columns={3}
                      value={form.method || undefined}
                      invalid={!!errors.method}
                      onChange={(v) => setForm({ ...form, method: v as string })}
                      options={[
                        { value: "email", label: "Email" },
                        { value: "telephone", label: "Telephone" },
                      ]}
                    />
                  </Field>
                  <Field label={t("What would you change?")} htmlFor="cz-msg" required error={errors.message}>
                    <TextArea id="cz-msg" invalid={!!errors.message} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                  </Field>
                  {errors.form && <p className="font-ui text-brick">{tp(errors.form)}</p>}
                  <Button type="submit" variant="cream">
                    {t("Send to a specialist")}</Button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
