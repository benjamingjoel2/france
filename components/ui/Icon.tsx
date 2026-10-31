import { tp } from '@/lib/i18n/t';
import type { SVGProps } from "react";

/** Small hand-drawn icon set (24×24 grid, currentColor). */
const paths = {
  "arrow-right": <path d="M4 12h15m-6-6 6 6-6 6" />,
  "arrow-left": <path d="M20 12H5m6-6-6 6 6 6" />,
  "chevron-right": <path d="m9 5 7 7-7 7" />,
  "chevron-left": <path d="m15 5-7 7 7 7" />,
  "chevron-down": <path d="m5 9 7 7 7-7" />,
  "chevron-up": <path d="m5 15 7-7 7 7" />,
  plus: <path d="M12 4v16M4 12h16" />,
  close: <path d="m5 5 14 14M19 5 5 19" />,
  check: <path d="m4.5 12.5 5 5 10-11" />,
  user: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c1.2-4 4.3-6 8-6s6.8 2 8 6" />
    </>
  ),
  chat: <path d="M4 5h16v11H9l-5 4V5Z" />,
  pin: (
    <>
      <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </>
  ),
  play: <path d="M8 5v14l11-7L8 5Z" fill="currentColor" stroke="none" />,
  download: <path d="M12 4v11m-5-5 5 5 5-5M5 20h14" />,
  link: (
    <path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1" />
  ),
  document: <path d="M7 3h7l5 5v13H7V3Zm7 0v5h5M10 13h6m-6 4h6" />,
  car: (
    <>
      <path d="M3 16v-4l2-5h14l2 5v4H3Z" />
      <circle cx="7.5" cy="16.5" r="1.8" />
      <circle cx="16.5" cy="16.5" r="1.8" />
    </>
  ),
  bike: (
    <>
      <circle cx="6" cy="16" r="3.5" />
      <circle cx="18" cy="16" r="3.5" />
      <path d="M6 16 10 8h5l3 8M10 8 13 16h-3M14 5h3" />
    </>
  ),
  bed: <path d="M3 18V7m0 7h18v4m0-4v-2a3 3 0 0 0-3-3h-8v5M6.5 11.5a1.5 1.5 0 1 0 0-.01" />,
  route: (
    <>
      <circle cx="6" cy="18" r="2.5" />
      <circle cx="18" cy="6" r="2.5" />
      <path d="M8.5 18H16a3 3 0 0 0 0-6H8a3 3 0 0 1 0-6h7.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  calendar: <path d="M4 6h16v14H4V6Zm0 4h16M8 3v4m8-4v4" />,
  filter: <path d="M4 6h16M4 12h12M4 18h8" />,
  menu: <path d="M3 7h18M3 12h12M3 17h6" />,
  instagram: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  facebook: <path d="M14 21v-8h3l.5-3.5H14V7.7c0-1 .3-1.7 1.8-1.7h1.8V3c-.3 0-1.4-.1-2.7-.1-2.7 0-4.4 1.6-4.4 4.6v2H7.5V13h3v8H14Z" fill="currentColor" stroke="none" />,
  youtube: (
    <>
      <rect x="2.5" y="5.5" width="19" height="13" rx="3.5" fill="currentColor" stroke="none" />
      <path d="m10 9 5 3-5 3V9Z" fill="var(--icon-cut, #25252A)" stroke="none" />
    </>
  ),
  pinterest: (
    <path
      d="M12 2.5a9.5 9.5 0 0 0-3.5 18.3c-.1-.8-.1-2 .1-2.8l1.1-4.8s-.3-.6-.3-1.4c0-1.3.8-2.3 1.7-2.3.8 0 1.2.6 1.2 1.3 0 .8-.5 2-.8 3.1-.2.9.5 1.7 1.4 1.7 1.7 0 3-1.8 3-4.4 0-2.3-1.6-3.9-4-3.9a4.1 4.1 0 0 0-4.3 4.1c0 .8.3 1.7.7 2.2.1.1.1.2.1.3l-.3 1.1c0 .2-.2.2-.4.1-1.3-.6-2-2.4-2-3.9 0-3.2 2.3-6.1 6.7-6.1 3.5 0 6.2 2.5 6.2 5.8 0 3.5-2.2 6.3-5.2 6.3-1 0-2-.5-2.3-1.1l-.6 2.4c-.2.9-.9 2-1.3 2.7A9.5 9.5 0 1 0 12 2.5Z"
      fill="currentColor"
      stroke="none"
    />
  ),
  mail: <path d="M3 5.5h18v13H3v-13Zm0 0 9 7 9-7" />,
  quote: (
    <path
      d="M3 19v-6.2C3 8.5 5 5.8 8.8 5l.9 1.9C7.7 7.6 6.8 9 6.7 11H10v8H3Zm11 0v-6.2C14 8.5 16 5.8 19.8 5l.9 1.9c-2 .7-2.9 2.1-3 4.1H21v8h-7Z"
      fill="currentColor"
      stroke="none"
    />
  ),
  star: (
    <path
      d="m12 2.8 2.8 5.9 6.4.8-4.7 4.4 1.2 6.4L12 17.2l-5.7 3.1 1.2-6.4-4.7-4.4 6.4-.8L12 2.8Z"
      fill="currentColor"
      stroke="none"
    />
  ),
} as const;

export type IconName = keyof typeof paths;

export function Icon({
  name,
  size = 16,
  className,
  ...rest
}: { name: IconName; size?: number } & Omit<SVGProps<SVGSVGElement>, "name">) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="square"
      strokeLinejoin="miter"
      aria-hidden="true"
      focusable="false"
      className={className}
      {...rest}
    >
      {tp(paths[name])}
    </svg>
  );
}
