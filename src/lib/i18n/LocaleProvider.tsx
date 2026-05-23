"use client";

import { useEffect } from "react";
import type { Locale } from "./types";

/**
 * Side-effect-only component: persists the current locale to localStorage and
 * syncs <html lang>. Render once per page. Server components remain server —
 * they get strings via prop-drilling from page.tsx.
 */
export function LocaleSync({ locale }: { locale: Locale }) {
  useEffect(() => {
    try {
      window.localStorage.setItem("lang", locale);
    } catch {
      // ignore (private mode etc.)
    }
    document.documentElement.lang = locale;
  }, [locale]);
  return null;
}

/**
 * Return the URL of the *other* locale, given current locale + path.
 * "en" → prepends "/es"; "es" → strips it.
 */
export function alternatePath(currentLocale: Locale, currentPath: string): string {
  const stripped = currentPath.replace(/^\/es(?=\/|$)/, "") || "/";
  if (currentLocale === "en") {
    return stripped === "/" ? "/es" : `/es${stripped}`;
  }
  return stripped;
}
