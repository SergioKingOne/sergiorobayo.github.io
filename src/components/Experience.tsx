"use client";

import { useState } from "react";
import type { Dict, ExperienceRoleDict } from "@/lib/i18n/types";

interface Props {
  t: Dict["experience"];
}

function ExperienceRow({
  exp,
  index,
  t,
}: {
  exp: ExperienceRoleDict;
  index: string;
  t: Dict["experience"];
}) {
  const [expanded, setExpanded] = useState(false);
  const hasExpandedContent = !!exp.expandedBullets?.length;

  return (
    <article
      style={{
        padding: "48px 0",
        borderTop: "1px solid var(--color-rule)",
      }}
    >
      <div
        className="grid gap-6 md:gap-12"
        style={{ gridTemplateColumns: "minmax(0, 1fr)" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-[180px_minmax(0,1fr)] gap-6 md:gap-12 items-start">
          {/* Meta column */}
          <div>
            <p
              className="eyebrow"
              style={{
                color: "var(--color-text-mute)",
                lineHeight: 1.4,
                marginBottom: "10px",
              }}
            >
              {index} · {exp.period}
            </p>
            {exp.current && (
              <p
                className="eyebrow"
                style={{
                  color: "var(--color-signal)",
                  letterSpacing: "0.14em",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
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
                    boxShadow:
                      "0 0 0 3px color-mix(in oklab, var(--color-signal) 18%, transparent)",
                  }}
                />
                {t.currentBadge}
              </p>
            )}
          </div>

          {/* Content column */}
          <div className="min-w-0">
            <h3
              style={{
                fontSize: "clamp(22px, 2.4vw, 28px)",
                lineHeight: 1.15,
                letterSpacing: "-0.018em",
                marginBottom: "6px",
                fontVariationSettings: '"opsz" 36, "SOFT" 30',
              }}
            >
              {exp.title}{" "}
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "14px",
                  color: "var(--color-text-mute)",
                  fontWeight: 400,
                  letterSpacing: 0,
                }}
              >
                {t.atSeparator}
              </span>{" "}
              <a
                href={exp.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="signal-link"
                style={{ color: "var(--color-text-bright)" }}
              >
                {exp.company}
              </a>
            </h3>
            <p
              className="eyebrow"
              style={{ marginBottom: "24px", color: "var(--color-text-faint)" }}
            >
              {exp.location}
            </p>

            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              {exp.bullets.map((bullet, i) => (
                <li
                  key={i}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "clamp(14px, 0.86rem + 0.22vw, 15px)",
                    lineHeight: 1.65,
                    color: "var(--color-text)",
                    paddingLeft: "20px",
                    position: "relative",
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      left: 0,
                      top: "0.55em",
                      width: "10px",
                      height: "1px",
                      background: "var(--color-signal)",
                    }}
                  />
                  {bullet}
                </li>
              ))}

              {expanded &&
                exp.expandedBullets?.map((bullet, i) => (
                  <li
                    key={`x-${i}`}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "clamp(14px, 0.86rem + 0.22vw, 15px)",
                      lineHeight: 1.65,
                      color: "var(--color-text)",
                      paddingLeft: "20px",
                      position: "relative",
                    }}
                  >
                    <span
                      aria-hidden="true"
                      style={{
                        position: "absolute",
                        left: 0,
                        top: "0.55em",
                        width: "10px",
                        height: "1px",
                        background: "var(--color-signal)",
                      }}
                    />
                    {bullet}
                  </li>
                ))}
            </ul>

            {hasExpandedContent && (
              <button
                onClick={() => setExpanded(!expanded)}
                className="signal-link eyebrow"
                style={{
                  marginTop: "20px",
                  background: "transparent",
                  border: 0,
                  padding: 0,
                  cursor: "pointer",
                  color: "var(--color-text-mute)",
                }}
              >
                {expanded ? t.lessLabel : t.moreLabel}
              </button>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Experience({ t }: Props) {
  return (
    <section id="experience" style={{ padding: "clamp(64px, 8vw, 120px) 20px" }}>
      <div className="max-w-[1240px] mx-auto md:px-8 lg:px-8">
        <p className="eyebrow" style={{ marginBottom: "16px" }}>
          {t.eyebrow}
        </p>
        <h2
          style={{
            fontSize: "clamp(36px, 5.5vw, 64px)",
            lineHeight: 1.05,
            letterSpacing: "-0.025em",
            marginBottom: "32px",
            maxWidth: "18ch",
          }}
        >
          {t.title}
        </h2>

        <div style={{ marginTop: "16px" }}>
          {t.roles.map((role, i) => {
            const index = String(i + 1).padStart(2, "0");
            return <ExperienceRow key={index} exp={role} index={index} t={t} />;
          })}
          <div style={{ borderTop: "1px solid var(--color-rule)" }} />
        </div>
      </div>
    </section>
  );
}
