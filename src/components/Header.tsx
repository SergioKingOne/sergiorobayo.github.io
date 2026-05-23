"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { assetPath } from "@/lib/config";
import { alternatePath } from "@/lib/i18n/LocaleProvider";
import type { Dict, Locale } from "@/lib/i18n/types";

interface Props {
  t: Dict["header"];
  langSwitcher: Dict["langSwitcher"];
  locale: Locale;
}

export default function Header({ t, langSwitcher, locale }: Props) {
  const [hidden, setHidden] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);
  const sheetRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const navLinks = [
    { name: t.nav.about, href: "#about" },
    { name: t.nav.experience, href: "#experience" },
    { name: t.nav.projects, href: "#projects" },
    { name: t.nav.skills, href: "#skills" },
    { name: t.nav.contact, href: "#contact" },
  ];

  const otherLocale: Locale = locale === "en" ? "es" : "en";
  const otherHref = alternatePath(locale, "/");
  const otherLabel = langSwitcher[otherLocale];

  useEffect(() => {
    let previous = window.scrollY;
    const onScroll = () => {
      const latest = window.scrollY;
      if (latest > previous && latest > 150) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      previous = latest;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!sheetOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setSheetOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    const first = sheetRef.current?.querySelector<HTMLAnchorElement>("a, button");
    first?.focus();
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
      triggerRef.current?.focus();
    };
  }, [sheetOpen]);

  return (
    <>
      <header
        style={{
          transform: hidden ? "translateY(-100%)" : "translateY(0)",
          backgroundColor:
            "color-mix(in oklab, var(--color-ink-0) 86%, transparent)",
          backdropFilter: "saturate(140%) blur(10px)",
          WebkitBackdropFilter: "saturate(140%) blur(10px)",
          borderBottom: "1px solid var(--color-rule)",
          transition: "transform 350ms ease-in-out",
          paddingTop: "max(12px, env(safe-area-inset-top))",
          paddingLeft: "env(safe-area-inset-left)",
          paddingRight: "env(safe-area-inset-right)",
        }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <nav className="max-w-[1240px] mx-auto px-5 md:px-8 py-3 md:py-4 flex items-center justify-between gap-6">
          {/* Wordmark — links to locale root */}
          <Link
            href={locale === "es" ? "/es" : "/"}
            className="flex items-baseline gap-3 group"
          >
            <span
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--color-text-bright)",
                fontVariationSettings: '"opsz" 36, "SOFT" 30',
                letterSpacing: "-0.02em",
                fontSize: "clamp(20px, 1.2rem + 0.2vw, 22px)",
                lineHeight: 1,
              }}
            >
              Sergio Robayo
            </span>
            <span
              className="hidden sm:inline eyebrow"
              style={{ letterSpacing: "0.12em" }}
            >
              {t.wordmarkTag}
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            <ul className="flex items-center gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="signal-link eyebrow"
                    style={{
                      color: "var(--color-text-mute)",
                      padding: "12px 12px",
                      display: "inline-block",
                    }}
                  >
                    / {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Language switcher */}
            <Link
              href={otherHref}
              prefetch={false}
              className="signal-link eyebrow"
              aria-label={langSwitcher.switchTo}
              style={{
                color: "var(--color-text-mute)",
                padding: "12px 10px",
                display: "inline-block",
                borderLeft: "1px solid var(--color-rule)",
                letterSpacing: "0.14em",
              }}
            >
              {otherLabel}
            </Link>

            <a
              href={assetPath("/resume.pdf")}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-ghost"
              style={{ padding: "10px 16px", fontSize: "11px", minHeight: "40px" }}
            >
              {t.resume} <span className="arrow">→</span>
            </a>
          </div>

          {/* Mobile trigger */}
          <button
            ref={triggerRef}
            onClick={() => setSheetOpen(true)}
            className="md:hidden"
            style={{
              minWidth: "44px",
              minHeight: "44px",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--color-text)",
              background: "transparent",
              border: 0,
              cursor: "pointer",
            }}
            aria-label={t.menuOpen}
            aria-expanded={sheetOpen}
            aria-controls="nav-sheet"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </nav>
      </header>

      {/* Bottom-sheet nav drawer */}
      <div
        id="nav-sheet"
        ref={sheetRef}
        role="dialog"
        aria-modal="true"
        aria-label={t.indexLabel}
        data-open={sheetOpen}
        className="nav-sheet md:hidden"
        onClick={(e) => {
          if (e.target === e.currentTarget) setSheetOpen(false);
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "12px 20px 20px",
            borderBottom: "1px solid var(--color-rule)",
          }}
        >
          <span
            className="eyebrow"
            style={{ color: "var(--color-text-faint)" }}
          >
            {t.indexLabel}
          </span>
          <button
            onClick={() => setSheetOpen(false)}
            aria-label={t.menuClose}
            style={{
              minWidth: "44px",
              minHeight: "44px",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--color-text)",
              background: "transparent",
              border: 0,
              cursor: "pointer",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <nav style={{ flex: 1, overflowY: "auto" }}>
          <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setSheetOpen(false)}
                  className="nav-sheet-row"
                >
                  <span>/ {link.name}</span>
                  <span className="nav-sheet-arrow" aria-hidden="true">
                    →
                  </span>
                </a>
              </li>
            ))}
            <li>
              <Link
                href={otherHref}
                prefetch={false}
                onClick={() => setSheetOpen(false)}
                className="nav-sheet-row"
              >
                <span>/ {langSwitcher.switchTo.toLowerCase()}</span>
                <span className="nav-sheet-arrow" aria-hidden="true">
                  {otherLabel}
                </span>
              </Link>
            </li>
          </ul>
        </nav>

        <div
          style={{
            padding: "24px",
            borderTop: "1px solid var(--color-rule)",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <a
            href={assetPath("/resume.pdf")}
            target="_blank"
            rel="noopener noreferrer"
            className="cta"
            style={{ justifyContent: "center", width: "100%" }}
            onClick={() => setSheetOpen(false)}
          >
            {t.download} <span className="arrow">↓</span>
          </a>
          <div
            style={{
              display: "flex",
              gap: "8px",
              justifyContent: "space-between",
            }}
          >
            <a
              href="https://github.com/SergioKingOne"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-ghost"
              style={{ flex: 1, justifyContent: "center" }}
              onClick={() => setSheetOpen(false)}
            >
              github
            </a>
            <a
              href="https://www.linkedin.com/in/sergio-robayo-500584216/"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-ghost"
              style={{ flex: 1, justifyContent: "center" }}
              onClick={() => setSheetOpen(false)}
            >
              linkedin
            </a>
            <a
              href="mailto:sergiorobayorr@gmail.com"
              className="cta-ghost"
              style={{ flex: 1, justifyContent: "center" }}
              onClick={() => setSheetOpen(false)}
            >
              email
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
