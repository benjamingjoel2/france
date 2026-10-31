"use client";

import { t, tp } from '@/lib/i18n/t';
import { useState } from "react";
import { cn } from "@/lib/cn";
import { Icon } from "@/components/ui/Icon";

type Status = "idle" | "sending" | "done" | "error";

export function Newsletter() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    if (!/^\S+@\S+\.\S+$/.test(data.email ?? "")) {
      setError("Please enter a valid email address.");
      setStatus("error");
      return;
    }
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("done");
      form.reset();
    } catch {
      setError("Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  const input =
    "h-[52px] lg:h-[58px] w-full border border-charcoal-10 bg-charcoal-10 px-5 text-base font-normal text-cream placeholder:text-mist/70 outline-none transition-colors duration-200 focus:border-cream focus:bg-charcoal";

  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,3.6fr)] lg:items-center lg:gap-8">
      <h3 id="newsletter-heading" className="font-cond text-lg">
        {t("Newsletter sign up")}<span className="font-ui mt-1 block font-light tracking-normal normal-case text-mist">
          {t("Postcards from the back roads, once a month.")}</span>
      </h3>
      <form onSubmit={onSubmit} noValidate aria-labelledby="newsletter-heading" className="flex flex-col gap-3 md:flex-row md:gap-[1.5vw]">
        <label className="sr-only" htmlFor="nl-name">
          {t("Your name")}</label>
        <input id="nl-name" name="name" autoComplete="given-name" placeholder={t("Your name")} className={input} />
        <label className="sr-only" htmlFor="nl-email">
          {t("Your email address")}</label>
        <input
          id="nl-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder={t("Your email address")}
          aria-invalid={status === "error" || undefined}
          aria-describedby="nl-status"
          className={cn(input, status === "error" && "border-brick")}
        />
        <button
          type="submit"
          aria-label={t("Subscribe")}
          disabled={status === "sending"}
          className="group relative flex h-[52px] w-full shrink-0 items-center justify-center overflow-hidden border hairline-dark md:w-[58px] lg:h-[58px]"
        >
          <span className="absolute inset-0 origin-left scale-x-0 bg-cream transition-transform duration-300 ease-[var(--ease-rp)] group-hover:scale-x-100" />
          <Icon name="arrow-right" size={16} className="relative transition-colors group-hover:text-charcoal" />
        </button>
      </form>
      <p id="nl-status" role="status" className="font-ui text-mist lg:col-start-2">
        {tp(status === "done" && "Merci! You're on the list. Check your inbox to confirm.")}
        {status === "error" && <span className="text-brick">{tp(error)}</span>}
      </p>
    </div>
  );
}
