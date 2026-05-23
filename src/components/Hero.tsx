import { assetPath } from "@/lib/config";
import type { Dict, Locale } from "@/lib/i18n/types";
import OpenPaletteButton from "./OpenPaletteButton";

interface Props {
  t: Dict["hero"];
  paletteHint: string;
  locale: Locale;
}

export default function Hero({ t, paletteHint }: Props) {
  return (
    <section
      className="hero relative overflow-hidden"
      style={{
        paddingTop: "max(120px, calc(96px + env(safe-area-inset-top)))",
        paddingRight: "20px",
        paddingBottom: "max(64px, calc(48px + env(safe-area-inset-bottom)))",
        paddingLeft: "20px",
        minHeight: "100svh",
      }}
    >
      {/* Desktop halftone portrait — silhouette, anchored top-right, prominent. */}
      <div
        aria-hidden="true"
        className="halftone-portrait pointer-events-none absolute hidden lg:block"
        style={{
          top: "72px",
          right: "-2vw",
          height: "calc(100% - 96px)",
          aspectRatio: "1100 / 1100",
          opacity: 0.95,
          zIndex: 0,
        }}
      />

      <div
        className="max-w-[1240px] mx-auto md:px-8 lg:px-8 relative flex flex-col h-full"
        style={{ zIndex: 2 }}
      >
        {/* ⌘K chip — top right */}
        <div
          className="stagger-1 flex justify-end"
          style={{ marginBottom: "24px" }}
        >
          <OpenPaletteButton hint={paletteHint} />
        </div>

        <p
          className="stagger-1 eyebrow flex items-center gap-2"
          style={{ marginBottom: "20px" }}
        >
          <span
            aria-hidden="true"
            style={{
              display: "inline-block",
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "var(--color-signal)",
              boxShadow:
                "0 0 0 3px color-mix(in oklab, var(--color-signal) 18%, transparent)",
            }}
          />
          {t.eyebrow}
        </p>

        <h1
          className="stagger-2"
          style={{
            fontSize: "clamp(40px, 8.4vw, 124px)",
            lineHeight: 0.98,
            letterSpacing: "-0.035em",
            marginBottom: "32px",
            maxWidth: "14ch",
          }}
        >
          {t.titlePart1}
          <span className="display-italic">{t.titleAccent}</span>
          {t.titlePart2}
        </h1>

        <p
          className="stagger-3"
          style={{
            fontFamily: "var(--font-mono)",
            color: "var(--color-text-mute)",
            fontSize: "clamp(15px, 0.92rem + 0.22vw, 17px)",
            lineHeight: 1.6,
            maxWidth: "46ch",
            marginBottom: "40px",
            minWidth: 0,
          }}
        >
          {t.body.lead}
          <span style={{ color: "var(--color-text-bright)" }}>{t.body.surt}</span>
          {t.body.tail}
        </p>

        {/* Mobile portrait — full-width editorial element between body and CTAs */}
        <figure
          className="lg:hidden"
          style={{ margin: 0, marginBottom: "40px", width: "100%" }}
        >
          <figcaption
            className="eyebrow"
            style={{
              marginBottom: "12px",
              color: "var(--color-text-faint)",
              display: "flex",
              justifyContent: "space-between",
              gap: "12px",
            }}
          >
            <span>{t.portraitLabel}</span>
            <span>{t.portraitMeta}</span>
          </figcaption>
          <div
            className="halftone-portrait"
            role="img"
            aria-label={`${t.subjectName} — portrait`}
            style={{
              width: "100%",
              aspectRatio: "1100 / 1100",
              opacity: 0.95,
              border: "1px solid var(--color-rule)",
              borderRadius: "2px",
            }}
          />
          <figcaption
            className="eyebrow"
            style={{
              marginTop: "12px",
              color: "var(--color-text-faint)",
              display: "flex",
              justifyContent: "space-between",
              gap: "12px",
              letterSpacing: "0.12em",
            }}
          >
            <span>{t.subjectName}</span>
            <span>
              {t.subjectLocation} · {t.subjectYear}
            </span>
          </figcaption>
        </figure>

        <div className="stagger-4 flex flex-col sm:flex-row gap-3">
          <a href="#projects" className="cta">
            {t.viewWork} <span className="arrow">→</span>
          </a>
          <a
            href={assetPath("/resume.pdf")}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-ghost"
          >
            {t.resume} <span className="arrow">↓</span>
          </a>
        </div>
      </div>

      {/* Bottom-left static caption — anchors the desktop photo as artifact */}
      <div
        className="absolute hidden lg:flex"
        style={{
          left: "max(20px, calc(50vw - 600px))",
          bottom: "48px",
          alignItems: "center",
          gap: "16px",
          zIndex: 2,
        }}
      >
        <span
          aria-hidden="true"
          style={{
            display: "inline-block",
            width: "5px",
            height: "5px",
            borderRadius: "50%",
            background: "var(--color-signal)",
          }}
        />
        <span
          className="eyebrow"
          style={{ color: "var(--color-text-faint)" }}
        >
          {t.bottomCaption}
        </span>
        <span
          className="eyebrow"
          style={{ color: "var(--color-text-faint)" }}
        >
          · {t.subjectLocation} · {t.subjectYear}
        </span>
      </div>
    </section>
  );
}
