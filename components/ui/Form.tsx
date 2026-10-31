"use client";

import { t, tf, tp } from '@/lib/i18n/t';
import { forwardRef, useId } from "react";
import { cn } from "@/lib/cn";
import { Icon } from "./Icon";

/*
 * Dark form primitives (the reference's enquiry styling): 67px boxes on charcoal-5,
 * cream border on focus, cream-circle chevrons, round checks for multi-select chips
 * and 26px square checkboxes. Errors use brick.
 */

export const inputClass = (invalid?: boolean) =>
  cn(
    "h-[52px] w-full border bg-charcoal-5 px-[22px] text-base font-normal text-cream outline-none transition-[border-color,background-color] duration-200 lg:h-[67px]",
    "placeholder:text-mist/60 focus:border-cream focus:bg-charcoal focus-visible:outline-none",
    invalid ? "border-brick" : "border-charcoal-10",
  );

export function Field({
  label,
  htmlFor,
  required,
  error,
  hint,
  children,
  className,
  as = "div",
}: {
  label: string;
  htmlFor?: string;
  required?: boolean;
  error?: string;
  hint?: string;
  children: React.ReactNode;
  className?: string;
  as?: "div" | "fieldset";
}) {
  const Tag = as;
  const LabelTag = as === "fieldset" ? "legend" : "label";
  return (
    <Tag className={cn("min-w-0", className)}>
      <LabelTag
        {...(LabelTag === "label" ? { htmlFor } : {})}
        className="font-ui mb-2 block text-cream"
      >
        {tp(label)}
        {required && (
          <span className="text-brick" aria-hidden="true">
            {" "}
            *
          </span>
        )}
        {required && <span className="sr-only"> {t("(required)")}</span>}
      </LabelTag>
      {hint && <p className="mb-3 -mt-1 text-[13px] text-mist">{tp(hint)}</p>}
      {children}
      {error && (
        <p id={htmlFor ? `${htmlFor}-error` : undefined} role="alert" className="font-ui mt-2 text-[11.5px] text-brick">
          {tp(error)}
        </p>
      )}
    </Tag>
  );
}

export const TextInput = forwardRef<HTMLInputElement, React.ComponentProps<"input"> & { invalid?: boolean }>(
  function TextInput({ invalid, className, id, ...rest }, ref) {
    return (
      <input
        ref={ref}
        id={id}
        aria-invalid={invalid || undefined}
        aria-describedby={invalid && id ? `${id}-error` : undefined}
        className={cn(inputClass(invalid), "[color-scheme:dark]", className)}
        {...rest}
      />
    );
  },
);

export function TextArea({ invalid, className, id, ...rest }: React.ComponentProps<"textarea"> & { invalid?: boolean }) {
  return (
    <textarea
      id={id}
      aria-invalid={invalid || undefined}
      aria-describedby={invalid && id ? `${id}-error` : undefined}
      className={cn(inputClass(invalid), "h-auto min-h-[140px] resize-y py-4 lg:h-auto", className)}
      {...rest}
    />
  );
}

/** Native select (fully accessible) dressed with the reference's cream-circle chevron. */
export function Select({
  invalid,
  className,
  id,
  options,
  placeholder,
  ...rest
}: Omit<React.ComponentProps<"select">, "children"> & {
  invalid?: boolean;
  options: { value: string; label: string }[];
  placeholder?: string;
}) {
  return (
    <div className="relative">
      <select
        id={id}
        aria-invalid={invalid || undefined}
        aria-describedby={invalid && id ? `${id}-error` : undefined}
        className={cn(inputClass(invalid), "appearance-none pr-16 [color-scheme:dark]", className)}
        {...rest}
      >
        {placeholder && (
          <option value="" disabled>
            {tp(placeholder)}
          </option>
        )}
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {tp(o.label)}
          </option>
        ))}
      </select>
      <span className="pointer-events-none absolute top-1/2 right-[22px] flex size-[26px] -translate-y-1/2 items-center justify-center rounded-full bg-cream text-charcoal">
        <Icon name="chevron-down" size={13} />
      </span>
    </div>
  );
}

/**
 * Chip group: single (radio) or multiple (checkbox) choice. Selected chips turn cream
 * with a round check, like the reference's radio cards.
 */
export function ChoiceChips<T extends string>({
  name,
  options,
  value,
  onChange,
  multiple = false,
  invalid,
  columns,
  size = "md",
  describedBy,
}: {
  name: string;
  options: { value: T; label: string; sub?: string }[];
  value: T | T[] | undefined;
  onChange: (v: T | T[]) => void;
  multiple?: boolean;
  invalid?: boolean;
  columns?: 1 | 2 | 3;
  size?: "md" | "lg";
  describedBy?: string;
}) {
  const selected = (v: T) => (multiple ? ((value as T[]) ?? []).includes(v) : value === v);
  const toggle = (v: T) => {
    if (!multiple) return onChange(v);
    const cur = (value as T[]) ?? [];
    onChange(cur.includes(v) ? cur.filter((x) => x !== v) : [...cur, v]);
  };
  return (
    <div
      className={cn(
        "grid gap-2",
        columns === 1 && "grid-cols-1",
        columns === 2 && "grid-cols-1 sm:grid-cols-2",
        columns === 3 && "grid-cols-1 sm:grid-cols-3",
        !columns && "flex flex-wrap",
      )}
      aria-describedby={describedBy}
    >
      {options.map((o) => {
        const on = selected(o.value);
        return (
          <label
            key={o.value}
            className={cn(
              "group relative flex cursor-pointer items-center gap-3 border px-4 transition-colors duration-200",
              size === "lg" ? "min-h-[64px] py-3" : "min-h-[52px] py-2",
              on ? "border-cream bg-cream text-charcoal" : "border-charcoal-10 bg-charcoal-5 text-cream hover:border-mist",
              invalid && !on && "border-brick/70",
              "has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-sunflower",
            )}
          >
            <input
              type={multiple ? "checkbox" : "radio"}
              name={name}
              value={o.value}
              checked={on}
              onChange={() => toggle(o.value)}
              className="sr-only"
            />
            <span
              aria-hidden="true"
              className={cn(
                "flex size-[22px] shrink-0 items-center justify-center rounded-full border",
                on ? "border-charcoal bg-charcoal text-cream" : "border-mist",
              )}
            >
              {on && <Icon name="check" size={13} />}
            </span>
            <span className="leading-tight">
              <span className="block text-base font-normal">{tp(o.label)}</span>
              {o.sub && <span className={cn("mt-0.5 block text-[12.5px]", on ? "text-charcoal/70" : "text-mist")}>{tp(o.sub)}</span>}
            </span>
          </label>
        );
      })}
    </div>
  );
}

export function Checkbox({
  checked,
  onChange,
  label,
  id,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  label: React.ReactNode;
  id?: string;
}) {
  const auto = useId();
  const cid = id ?? auto;
  return (
    <label htmlFor={cid} className="group flex cursor-pointer items-start gap-3">
      <input id={cid} type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} className="peer sr-only" />
      <span
        aria-hidden="true"
        className="flex size-[26px] shrink-0 items-center justify-center border border-charcoal-10 bg-charcoal-5 text-cream peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-sunflower"
      >
        {checked && <Icon name="check" size={16} />}
      </span>
      <span className="pt-0.5 text-base text-mist group-hover:text-cream">{tp(label)}</span>
    </label>
  );
}

/** Number stepper with − / + square buttons. */
export function Stepper({
  value,
  onChange,
  min,
  max,
  id,
  label,
  invalid,
}: {
  value: number;
  onChange: (n: number) => void;
  min: number;
  max: number;
  id: string;
  label: string;
  invalid?: boolean;
}) {
  const btn =
    "flex h-[52px] w-[52px] shrink-0 items-center justify-center border border-charcoal-10 bg-charcoal-5 text-cream text-xl transition-colors hover:bg-cream hover:text-charcoal disabled:opacity-30 disabled:hover:bg-charcoal-5 disabled:hover:text-cream lg:h-[67px] lg:w-[67px]";
  return (
    <div className="flex">
      <button type="button" className={btn} aria-label={tf("Fewer {0}", label)} disabled={value <= min} onClick={() => onChange(Math.max(min, value - 1))}>
        −
      </button>
      <input
        id={id}
        type="number"
        inputMode="numeric"
        min={min}
        max={max}
        value={value}
        aria-invalid={invalid || undefined}
        onChange={(e) => {
          const n = parseInt(e.target.value, 10);
          if (!Number.isNaN(n)) onChange(Math.min(max, Math.max(min, n)));
        }}
        className={cn(inputClass(invalid), "-mx-px w-24 text-center [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none")}
      />
      <button type="button" className={btn} aria-label={tf("More {0}", label)} disabled={value >= max} onClick={() => onChange(Math.min(max, value + 1))}>
        +
      </button>
    </div>
  );
}
