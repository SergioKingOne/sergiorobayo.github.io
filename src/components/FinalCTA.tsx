import { assetPath } from "@/lib/config";
import type { Dict } from "@/lib/i18n/types";

interface Props {
  t: Dict["finalCta"];
}

export default function FinalCTA({ t }: Props) {
  return (
    <section id="contact" style={{ padding: "clamp(80px, 10vw, 140px) 20px" }}>
      <div className="max-w-[1240px] mx-auto md:px-8 lg:px-8">
        <p className="eyebrow" style={{ marginBottom: "24px" }}>
          {t.eyebrow}
        </p>

        <h2
          style={{
            fontSize: "clamp(40px, 6vw, 78px)",
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            color: "var(--color-text-bright)",
            marginBottom: "32px",
            maxWidth: "18ch",
            fontVariationSettings: '"opsz" 96, "SOFT" 30',
          }}
        >
          {t.titlePart1}
          {t.titlePart2}
        </h2>

        <p
          style={{
            fontFamily: "var(--font-mono)",
            color: "var(--color-text-mute)",
            fontSize: "clamp(15px, 0.92rem + 0.22vw, 17px)",
            lineHeight: 1.65,
            maxWidth: "58ch",
            marginBottom: "48px",
          }}
        >
          {t.body}
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <a href="mailto:sergiorobayorr@gmail.com" className="cta">
            {t.email} <span className="arrow">→</span>
          </a>
          <a
            href="https://www.linkedin.com/in/sergio-robayo-500584216/"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-ghost"
          >
            {t.linkedin} <span className="arrow">→</span>
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
    </section>
  );
}
