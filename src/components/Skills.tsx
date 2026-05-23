import type { Dict } from "@/lib/i18n/types";

interface Props {
  t: Dict["skills"];
}

export default function Skills({ t }: Props) {
  return (
    <section id="skills" style={{ padding: "clamp(64px, 8vw, 120px) 20px" }}>
      <div className="max-w-[1240px] mx-auto md:px-8 lg:px-8">
        <p className="eyebrow" style={{ marginBottom: "24px" }}>
          {t.eyebrow}
        </p>
        <h2
          style={{
            fontSize: "clamp(34px, 5.2vw, 60px)",
            lineHeight: 1.08,
            letterSpacing: "-0.025em",
            marginBottom: "56px",
            maxWidth: "22ch",
            color: "var(--color-text-bright)",
            fontVariationSettings: '"opsz" 72, "SOFT" 30',
          }}
        >
          {t.title}
        </h2>

        <dl
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr)",
            rowGap: "20px",
            margin: 0,
            fontFamily: "var(--font-mono)",
            fontSize: "clamp(13px, 0.78rem + 0.18vw, 14px)",
            lineHeight: 1.8,
            width: "100%",
            maxWidth: "92ch",
          }}
        >
          {t.groups.map((group) => (
            <div
              key={group.category}
              className="grid grid-cols-1 md:grid-cols-[140px_minmax(0,1fr)] gap-x-6 gap-y-2 items-baseline"
              style={{
                paddingBottom: "16px",
                borderBottom: "1px solid var(--color-rule-soft)",
              }}
            >
              <dt
                style={{
                  color: "var(--color-signal)",
                  letterSpacing: "0.04em",
                  whiteSpace: "nowrap",
                }}
              >
                / {group.category} ›
              </dt>
              <dd style={{ color: "var(--color-text)", margin: 0 }}>
                {group.skills.map((s, si) => (
                  <span key={s}>
                    <span style={{ whiteSpace: "nowrap" }}>{s}</span>
                    {si < group.skills.length - 1 && (
                      <>
                        {" "}
                        <span
                          style={{ color: "var(--color-text-faint)" }}
                          aria-hidden="true"
                        >
                          ·
                        </span>{" "}
                      </>
                    )}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>

        <p
          className="eyebrow"
          style={{
            marginTop: "48px",
            color: "var(--color-text-faint)",
            letterSpacing: "0.12em",
          }}
        >
          {t.certs}
        </p>
      </div>
    </section>
  );
}
