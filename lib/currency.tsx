"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { site, type CurrencyCode } from "@/config/site";

const STORAGE_KEY = "rp-currency";

type Ctx = {
  currency: CurrencyCode;
  setCurrency: (c: CurrencyCode) => void;
  /** Convert a base-EUR amount and format it in the selected currency. */
  format: (eur: number, opts?: { round?: number }) => string;
};

const CurrencyContext = createContext<Ctx | null>(null);

export function convert(eur: number, to: CurrencyCode) {
  return eur * site.currencies.rates[to];
}

export function formatMoney(eur: number, currency: CurrencyCode, round = 10) {
  const value = Math.round(convert(eur, currency) / round) * round;
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency,
    currencyDisplay: currency === "EUR" || currency === "GBP" ? "symbol" : "narrowSymbol",
    maximumFractionDigits: 0,
  })
    .format(value)
    .replace(/^\$/, site.currencies.symbols[currency]);
}

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrencyState] = useState<CurrencyCode>(site.currencies.base);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as CurrencyCode | null;
      if (saved && site.currencies.supported.includes(saved)) setCurrencyState(saved);
    } catch {
      /* storage unavailable: keep EUR */
    }
  }, []);

  const setCurrency = useCallback((c: CurrencyCode) => {
    setCurrencyState(c);
    try {
      localStorage.setItem(STORAGE_KEY, c);
    } catch {
      /* ignore */
    }
  }, []);

  const value = useMemo<Ctx>(
    () => ({
      currency,
      setCurrency,
      format: (eur, opts) => formatMoney(eur, currency, opts?.round ?? 10),
    }),
    [currency, setCurrency],
  );

  return <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>;
}

export function useCurrency() {
  const ctx = useContext(CurrencyContext);
  if (!ctx) throw new Error("useCurrency must be used inside <CurrencyProvider>");
  return ctx;
}

/** Inline price that follows the currency switcher. */
export function Price({ eur, className }: { eur: number; className?: string }) {
  const { format } = useCurrency();
  return (
    <span className={className} suppressHydrationWarning>
      {format(eur)}
    </span>
  );
}
