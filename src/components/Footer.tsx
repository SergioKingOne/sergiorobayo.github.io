import type { Dict } from "@/lib/i18n/types";

interface Props {
  t: Dict["footer"];
}

export default function Footer({ t }: Props) {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: "1px solid var(--color-rule)",
        paddingTop: "64px",
        paddingRight: "20px",
        paddingLeft: "20px",
        paddingBottom: "max(48px, calc(48px + env(safe-area-inset-bottom)))",
      }}
    >
      <div className="max-w-[1240px] mx-auto md:px-8 lg:px-8">
        <p
          style={{
            fontFamily: "var(--font-mono)",
            color: "var(--color-text-mute)",
            fontSize: "13px",
            marginBottom: "16px",
          }}
        >
          <span style={{ color: "var(--color-signal)" }}>$</span>{" "}
          {t.aboutCommand}
        </p>

        <dl
          className="grid"
          style={{
            border: "1px solid var(--color-rule)",
            borderRadius: "2px",
            padding: "20px 24px",
            gridTemplateColumns: "minmax(100px, 120px) minmax(0, 1fr)",
            rowGap: "10px",
            columnGap: "16px",
            fontFamily: "var(--font-mono)",
            fontSize: "clamp(13px, 0.78rem + 0.18vw, 14px)",
            background: "var(--color-ink-1)",
            margin: 0,
          }}
        >
          {t.rows.map((row) => (
            <div
              key={row.label}
              style={{ display: "contents" }}
            >
              <dt style={{ color: "var(--color-text-mute)" }}>{row.label}</dt>
              <dd
                className="min-w-0"
                style={{ color: "var(--color-text)", margin: 0 }}
              >
                <span style={{ color: "var(--color-text-faint)" }}>→</span>{" "}
                {row.value}
              </dd>
            </div>
          ))}
        </dl>

        <div
          style={{
            marginTop: "32px",
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
            <a
              href="https://github.com/SergioKingOne"
              target="_blank"
              rel="noopener noreferrer"
              className="signal-link eyebrow"
              style={{
                color: "var(--color-text)",
                padding: "12px 2px",
                minHeight: "44px",
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              {t.github}
            </a>
            <a
              href="https://www.linkedin.com/in/sergio-robayo-500584216/"
              target="_blank"
              rel="noopener noreferrer"
              className="signal-link eyebrow"
              style={{
                color: "var(--color-text)",
                padding: "12px 2px",
                minHeight: "44px",
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              {t.linkedin}
            </a>
            <a
              href="mailto:sergiorobayorr@gmail.com"
              className="signal-link eyebrow"
              style={{
                color: "var(--color-text)",
                padding: "12px 2px",
                minHeight: "44px",
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              {t.email}
            </a>
          </div>

          <p
            className="eyebrow"
            style={{
              color: "var(--color-text-faint)",
              letterSpacing: "0.12em",
            }}
          >
            {t.sessionClosed.replace("{year}", String(year))}
          </p>
        </div>
      </div>
    </footer>
  );
}
