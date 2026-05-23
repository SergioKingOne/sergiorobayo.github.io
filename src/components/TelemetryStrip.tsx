import type { Dict } from "@/lib/i18n/types";

interface Props {
  t: Dict["telemetry"];
}

export default function TelemetryStrip({ t }: Props) {
  return (
    <section
      style={{
        borderTop: "1px solid var(--color-rule)",
        borderBottom: "1px solid var(--color-rule)",
        background:
          "linear-gradient(180deg, var(--color-ink-1) 0%, var(--color-ink-0) 100%)",
        padding: "clamp(40px, 6vw, 56px) 20px",
      }}
    >
      <div className="max-w-[1240px] mx-auto md:px-8 lg:px-8">
        <p
          className="eyebrow"
          style={{ marginBottom: "32px", color: "var(--color-text-mute)" }}
        >
          {t.eyebrow}
        </p>

        <dl
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6"
          style={{
            borderTop: "1px solid var(--color-rule-soft)",
            borderLeft: "1px solid var(--color-rule-soft)",
          }}
        >
          {t.cells.map((cell) => (
            <div
              key={cell.label}
              style={{
                borderRight: "1px solid var(--color-rule-soft)",
                borderBottom: "1px solid var(--color-rule-soft)",
                padding: "24px 20px",
              }}
            >
              <dt
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "clamp(20px, 1.2rem + 0.5vw, 24px)",
                  fontWeight: 500,
                  color: "var(--color-text-bright)",
                  lineHeight: 1,
                  marginBottom: "10px",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {cell.value}
              </dt>
              <dd
                className="eyebrow"
                style={{ letterSpacing: "0.1em", lineHeight: 1.3 }}
              >
                {cell.label}
              </dd>
            </div>
          ))}
        </dl>

        <p
          style={{
            marginTop: "24px",
            color: "var(--color-text-faint)",
            fontSize: "11px",
            fontFamily: "var(--font-mono)",
            letterSpacing: "0.04em",
            lineHeight: 1.5,
          }}
        >
          {t.footnote}
        </p>
      </div>
    </section>
  );
}
