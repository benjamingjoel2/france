"use client";

import { useState } from "react";
import { z } from "zod";
import { issuesToErrors } from "@/lib/planner-schema";
import { Button } from "@/components/ui/Button";
import { ChoiceChips, Field, TextArea, TextInput } from "@/components/ui/Form";
import { RingGlyph } from "@/components/ui/PlusHeading";

const schema = z.object({
  name: z.string().trim().min(2, "Tell us your name."),
  email: z.email("Enter a valid email address."),
  phone: z.string().trim().max(30),
  method: z.enum(["email", "whatsapp", "telephone"], { error: "How should we reach you?" }),
  message: z.string().trim().min(5, "Tell us a little more."),
});

export function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", method: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [state, setState] = useState<"idle" | "sending" | "sent">("idle");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const r = schema.safeParse(form);
    if (!r.success) {
      const errs = issuesToErrors(r.error.issues);
      setErrors(errs);
      document.getElementById(`c-${Object.keys(errs)[0]}`)?.focus();
      return;
    }
    setErrors({});
    setState("sending");
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(r.data),
    }).catch(() => null);
    if (res?.ok) setState("sent");
    else {
      setState("idle");
      setErrors({ form: "Something went wrong. Please try again, or message us on WhatsApp." });
    }
  }

  if (state === "sent")
    return (
      <div role="status" className="space-y-4">
        <RingGlyph className="text-sunflower" />
        <p className="font-cond text-xl">Merci, {form.name.split(" ")[0]}! We&apos;ll be in touch shortly.</p>
        <p className="text-mist">Take the long way round.</p>
      </div>
    );

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [k]: e.target.value });
    if (errors[k]) setErrors({ ...errors, [k]: "" });
  };

  return (
    <form onSubmit={submit} noValidate className="space-y-6">
      <Field label="Name" htmlFor="c-name" required error={errors.name}>
        <TextInput id="c-name" autoComplete="name" value={form.name} invalid={!!errors.name} onChange={set("name")} />
      </Field>
      <Field label="Email" htmlFor="c-email" required error={errors.email}>
        <TextInput id="c-email" type="email" autoComplete="email" value={form.email} invalid={!!errors.email} onChange={set("email")} />
      </Field>
      <Field label="Phone (optional)" htmlFor="c-phone">
        <TextInput id="c-phone" type="tel" autoComplete="tel" value={form.phone} onChange={set("phone")} />
      </Field>
      <Field as="fieldset" label="Preferred contact method" required error={errors.method}>
        <ChoiceChips
          name="c-method"
          columns={3}
          value={form.method || undefined}
          invalid={!!errors.method}
          onChange={(v) => setForm({ ...form, method: v as string })}
          options={[
            { value: "email", label: "Email" },
            { value: "whatsapp", label: "WhatsApp" },
            { value: "telephone", label: "Telephone" },
          ]}
        />
      </Field>
      <Field label="How can we help?" htmlFor="c-message" required error={errors.message}>
        <TextArea id="c-message" value={form.message} invalid={!!errors.message} onChange={set("message")} />
      </Field>
      {errors.form && <p className="font-ui text-brick">{errors.form}</p>}
      <Button type="submit" variant="cream" disabled={state === "sending"}>
        {state === "sending" ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}
