"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { site } from "@/config/site";
import type { Img } from "@/data/types";
import { imgUrl } from "@/lib/media";
import { cn } from "@/lib/cn";
import { Icon } from "@/components/ui/Icon";
import { buttonClass } from "@/components/ui/Button";
import { Logo } from "./Logo";
import { CurrencySwitcher } from "./CurrencySwitcher";

const EASE = [0.645, 0.045, 0.355, 1] as const;

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span aria-hidden="true" className="relative block h-[11px] w-[15px]">
      {open ? (
        <Icon name="close" size={15} className="absolute -top-0.5 left-0" />
      ) : (
        <>
          <span className="absolute top-0 left-0 h-px w-full bg-current" />
          <span className="absolute top-[5px] left-0 h-px w-3/4 bg-current" />
          <span className="absolute top-[10px] left-0 h-px w-1/2 bg-current" />
        </>
      )}
    </span>
  );
}

export function SiteChrome({ menuImages }: { menuImages: Img[] }) {
  // The menu remembers which page it was opened on, so navigating closes it.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(0);
  const pathname = usePathname();
  const open = openOn === pathname;
  const setOpen = useCallback((v: boolean | ((o: boolean) => boolean)) => {
    setOpenOn((cur) => {
      const was = cur !== null;
      const next = typeof v === "function" ? v(was) : v;
      return next ? pathname : null;
    });
  }, [pathname]);
  const reduce = useReducedMotion();
  const scopeRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Header background once the page scrolls.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    toggleRef.current?.focus();
  }, [setOpen]);

  // Scroll lock, Escape to close, focus trap within header + menu.
  useEffect(() => {
    if (!open) return;
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key !== "Tab" || !scopeRef.current) return;
      const focusables = Array.from(
        scopeRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), select, [tabindex]:not([tabindex="-1"])'),
      ).filter((el) => el.offsetParent !== null);
      if (!focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  const solid = scrolled || open;

  return (
    <div ref={scopeRef}>
      {/* ---------------- Header ---------------- */}
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 text-cream transition-[background-color,box-shadow] duration-300 ease-[var(--ease-rp)]",
          solid && !open ? "bg-charcoal shadow-[0_4px_24px_rgba(0,0,0,0.18)]" : "bg-transparent",
          !scrolled && !open && "border-b hairline-dark",
        )}
      >
        <div className="relative flex h-[var(--header-h)] items-center justify-between">
          <div className="flex h-full flex-1 items-center">
            <button
              ref={toggleRef}
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="site-menu"
              className="font-ui flex h-full items-center gap-2 px-[14px] lg:border-r lg:hairline-dark lg:px-[30px]"
            >
              <MenuIcon open={open} />
              <span>{open ? "Close" : "Menu"}</span>
            </button>
          </div>

          <Link
            href="/"
            aria-label={`${site.name}: home`}
            className="absolute left-1/2 -translate-x-1/2 transition-opacity hover:opacity-80"
          >
            <Logo />
          </Link>

          <div className="flex flex-1 items-center justify-end gap-5 pr-[14px] lg:gap-7 lg:pr-[30px]">
            <CurrencySwitcher className="hidden md:inline-flex" />
            <Link href="/my-account" className="font-ui hidden items-center gap-2 lg:flex">
              <Icon name="user" size={15} />
              <span className="link-grow">My account</span>
            </Link>
            <Link href={site.planCta.href} className={buttonClass("cream", "sm")}>
              <span className="sm:hidden">{site.planCta.short}</span>
              <span className="hidden sm:inline">{site.planCta.label}</span>
            </Link>
          </div>
        </div>
      </header>

      {/* ---------------- Full-screen image menu ---------------- */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="site-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            className="fixed inset-0 z-40 flex text-cream"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.3, delay: 0.15 } }}
          >
            {/* Left: navigation */}
            <motion.nav
              aria-label="Main"
              className="relative flex w-full flex-col bg-charcoal pt-[var(--header-h)] lg:w-1/2"
              initial={reduce ? { opacity: 0 } : { clipPath: "inset(0% 0% 100% 0%)" }}
              animate={reduce ? { opacity: 1 } : { clipPath: "inset(0% 0% 0% 0%)" }}
              exit={reduce ? { opacity: 0 } : { clipPath: "inset(0% 0% 100% 0%)" }}
              transition={{ duration: 0.5, ease: EASE }}
            >
              <div className="flex flex-1 flex-col justify-center overflow-y-auto px-gutter py-10">
                <ul className="group/nav flex flex-col items-center gap-0.5 text-center lg:items-start lg:text-left">
                  {site.nav.map((item, i) => {
                    const current = pathname === item.href || pathname.startsWith(item.href + "/");
                    return (
                      <motion.li
                        key={item.href}
                        initial={{ opacity: 0, y: reduce ? 0 : 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: EASE, delay: 0.2 + i * 0.05 }}
                      >
                        <Link
                          href={item.href}
                          aria-current={current ? "page" : undefined}
                          onClick={() => setOpen(false)}
                          onMouseEnter={() => setActive(i)}
                          onFocus={() => setActive(i)}
                          className={cn(
                            "font-display block text-[32px] leading-[1.15] transition-opacity duration-300 lg:text-[clamp(40px,3.9vw,64px)] lg:leading-[1]",
                            "group-hover/nav:opacity-25 hover:!opacity-100 focus-visible:!opacity-100",
                            current && "text-outline",
                          )}
                        >
                          {item.label}
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
              </div>

              <motion.div
                className="flex flex-col items-center gap-6 px-gutter pb-6 lg:items-start lg:pb-10"
                initial={{ opacity: 0, y: reduce ? 0 : 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 lg:hidden">
                  <CurrencySwitcher />
                  {site.utilityNav.map((l) => (
                    <Link key={l.href} href={l.href} className="font-ui link-grow">
                      {l.label}
                    </Link>
                  ))}
                </div>
              </motion.div>

              <Link
                href="/my-account"
                className="font-ui flex h-[49px] items-center justify-center gap-2 bg-charcoal-5 lg:hidden"
              >
                <Icon name="user" size={15} /> My account
              </Link>
            </motion.nav>

            {/* Right: one photo per menu item, crossfading on hover */}
            <motion.div
              aria-hidden="true"
              className="relative hidden w-1/2 overflow-hidden bg-night lg:block"
              initial={reduce ? { opacity: 0 } : { clipPath: "inset(0% 0% 100% 0%)" }}
              animate={reduce ? { opacity: 1 } : { clipPath: "inset(0% 0% 0% 0%)" }}
              exit={reduce ? { opacity: 0 } : { clipPath: "inset(0% 0% 100% 0%)" }}
              transition={{ duration: 0.5, ease: EASE, delay: 0.1 }}
            >
              {menuImages.map((img, i) => (
                <div
                  key={i}
                  className={cn(
                    "absolute inset-0 transition-opacity duration-500 ease-[var(--ease-rp)]",
                    i === active ? "opacity-100" : "opacity-0",
                  )}
                >
                  <Image src={imgUrl(img, 1600)} alt="" fill sizes="50vw" className="object-cover" />
                </div>
              ))}
              <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-night/60 to-transparent" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
