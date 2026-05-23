import type { Dict } from "@/lib/i18n/types";

interface Props {
  t: Dict["about"];
}

export default function About({ t }: Props) {
  return (
    <section id="about" style={{ padding: "clamp(64px, 8vw, 120px) 20px" }}>
      <div className="max-w-[1240px] mx-auto md:px-8 lg:px-8">
        <p className="eyebrow" style={{ marginBottom: "24px" }}>
          {t.eyebrow}
        </p>

        {/* Editorial pull-quote */}
        <h2
          style={{
            fontSize: "clamp(34px, 5.2vw, 60px)",
            lineHeight: 1.08,
            letterSpacing: "-0.025em",
            color: "var(--color-text-bright)",
            maxWidth: "22ch",
            marginBottom: "80px",
            fontVariationSettings: '"opsz" 72, "SOFT" 30',
          }}
        >
          {t.pullQuote}
        </h2>

        <div className="grid gap-y-12 items-start">
          <div className="grid grid-cols-1 lg:grid-cols-[80px_minmax(0,720px)_minmax(0,1fr)] gap-x-10 gap-y-2 items-baseline">
            <div className="hidden lg:block" aria-hidden="true" />
            <div
              className="lg:col-start-2 lg:col-end-3 min-w-0"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "clamp(15px, 0.92rem + 0.22vw, 17px)",
                lineHeight: 1.75,
                color: "var(--color-text)",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              {t.prose.map((p, i) =>
                i === t.prose.length - 1 ? (
                  <p
                    key={i}
                    style={{
                      color: "var(--color-text-mute)",
                      fontSize: "14px",
                      paddingTop: "12px",
                      borderTop: "1px solid var(--color-rule-soft)",
                    }}
                  >
                    {p}
                  </p>
                ) : (
                  <p key={i}>{p}</p>
                )
              )}
            </div>
          </div>

          {/* Numbered marginalia */}
          <div
            style={{
              borderTop: "1px solid var(--color-rule)",
              paddingTop: "48px",
              marginTop: "32px",
            }}
          >
            <p className="eyebrow" style={{ marginBottom: "32px" }}>
              {t.principlesEyebrow}
            </p>
            <dl
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(0, 1fr)",
                gap: "24px",
                margin: 0,
              }}
            >
              {t.principles.map((p) => (
                <div
                  key={p.k}
                  className="grid grid-cols-[48px_minmax(0,1fr)] md:grid-cols-[80px_minmax(0,1fr)] gap-x-6 items-baseline"
                  style={{
                    paddingBottom: "20px",
                    borderBottom: "1px solid var(--color-rule-soft)",
                  }}
                >
                  <dt
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "11px",
                      letterSpacing: "0.14em",
                      color: "var(--color-signal)",
                    }}
                  >
                    {p.k} →
                  </dt>
                  <dd
                    className="min-w-0"
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "clamp(14px, 0.86rem + 0.22vw, 15px)",
                      lineHeight: 1.65,
                      color: "var(--color-text)",
                      margin: 0,
                      maxWidth: "72ch",
                    }}
                  >
                    {p.body}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
