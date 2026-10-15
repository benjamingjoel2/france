"use client";

import { useEffect, useState } from "react";

const fmtTime = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Europe/Paris",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
});
const fmtDay = new Intl.DateTimeFormat("en-GB", { timeZone: "Europe/Paris", weekday: "long" });
const fmtDate = new Intl.DateTimeFormat("en-GB", { timeZone: "Europe/Paris", day: "numeric", month: "numeric", year: "2-digit" });

/** Live local time in France, e.g. "14:32:07 Gordes, Provence / Thursday, 15.10.26". */
export function LiveClock({ place = "Gordes, Provence" }: { place?: string }) {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    const tick = () => setNow(new Date());
    const first = window.setTimeout(tick, 0);
    const id = window.setInterval(tick, 1000);
    return () => {
      window.clearTimeout(first);
      window.clearInterval(id);
    };
  }, []);
  return (
    <p className="font-ui leading-[1.45]" aria-label={`Local time in ${place}`}>
      <span className="tabular-nums" suppressHydrationWarning>
        {now ? fmtTime.format(now) : "--:--:--"}
      </span>{" "}
      {place}
      <br />
      <span suppressHydrationWarning>{now ? `${fmtDay.format(now)}, ${fmtDate.format(now).replace(/\//g, ".")}` : " "}</span>
    </p>
  );
}
