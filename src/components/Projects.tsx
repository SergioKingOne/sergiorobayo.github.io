import { assetPath } from "@/lib/config";
import type { Dict, ProjectDict } from "@/lib/i18n/types";

interface PageProject extends ProjectDict {
  index: string;
  github?: string;
  liveUrl?: string;
  videoUrl?: string;
  writeupUrl?: string;
  image?: string;
}

// Locale-independent project metadata (links + images). Merged with the
// translated copy from the dictionary at render time.
const projectAssets: Array<{
  github?: string;
  liveUrl?: string;
  videoUrl?: string;
  writeupUrl?: string;
  image?: string;
}> = [
  { liveUrl: "https://surt.com", image: "/projects/surt-lead.jpg" },
  { writeupUrl: "https://www.linkedin.com/in/sergio-robayo-500584216/" },
  {
    github: "https://github.com/VertexStudio/bioma",
    videoUrl: "https://www.youtube.com/watch?v=wN22ooW-2e4",
  },
  {},
  {
    github: "https://github.com/SergioKingOne/distributed-file-processor",
    image: "/projects/dfp.png",
  },
  {
    github: "https://github.com/SergioKingOne/wanderlog",
    videoUrl: "https://www.youtube.com/watch?v=ukE5X6PlFU8",
    image: "/projects/wanderlog.png",
  },
  {
    github: "https://github.com/SergioKingOne/rusty-chat-sync",
    videoUrl: "https://www.youtube.com/watch?v=Xb2fpzQ-a2c",
    image: "/projects/rusty-chat-sync.png",
  },
];

interface Props {
  t: Dict["projects"];
}

function ProjectCard({
  p,
  labels,
}: {
  p: PageProject;
  labels: Dict["projects"]["linkLabels"];
}) {
  const primaryLink = p.liveUrl || p.writeupUrl || p.github || p.videoUrl;
  const imageSrc = p.image
    ? p.image.startsWith("http")
      ? p.image
      : assetPath(p.image)
    : null;

  return (
    <article
      className="project-card group"
      style={{
        border: "1px solid var(--color-rule)",
        borderRadius: "2px",
        padding: "32px 28px 28px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        transition: "border-color 220ms ease, transform 220ms ease",
        background: "var(--color-ink-2)",
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "clamp(36px, 5vw, 42px)",
          fontWeight: 400,
          color: "var(--color-text-faint)",
          lineHeight: 1,
          letterSpacing: "-0.02em",
          marginBottom: "4px",
          transition: "color 220ms ease",
        }}
        className="project-numeral"
      >
        {p.index}
      </div>

      <div>
        <p
          className="eyebrow"
          style={{ color: "var(--color-text-mute)", marginBottom: "10px" }}
        >
          {p.client}
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            gap: "12px",
            flexWrap: "wrap",
          }}
        >
          <h3
            style={{
              fontSize: "clamp(19px, 1.1rem + 0.5vw, 22px)",
              lineHeight: 1.22,
              letterSpacing: "-0.018em",
              color: "var(--color-text-bright)",
              fontVariationSettings: '"opsz" 36, "SOFT" 30',
              flex: "1 1 100%",
              minWidth: 0,
            }}
          >
            {p.title}
          </h3>
          {p.metric && (
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "12px",
                fontWeight: 500,
                color: "var(--color-signal)",
                letterSpacing: "0.04em",
                whiteSpace: "nowrap",
                fontVariantNumeric: "tabular-nums",
              }}
            >
              {p.metric}
            </span>
          )}
        </div>
      </div>

      {imageSrc && (
        <a
          href={primaryLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "block",
            border: "1px solid var(--color-rule)",
            borderRadius: "2px",
            aspectRatio: "16 / 9",
            background: "var(--color-ink-1)",
            overflow: "hidden",
            position: "relative",
          }}
          className="project-image-link"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageSrc}
            alt={p.title}
            loading="lazy"
            decoding="async"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
              filter: "saturate(0.65) brightness(0.9)",
              transition: "filter 280ms ease, transform 320ms ease",
            }}
            className="project-image"
          />
        </a>
      )}

      <p
        className="min-w-0"
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "clamp(13px, 0.78rem + 0.18vw, 14px)",
          lineHeight: 1.65,
          color: "var(--color-text)",
        }}
      >
        {p.description}
      </p>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "4px 14px",
          paddingTop: "4px",
        }}
      >
        {p.tech.map((tag) => (
          <span
            key={tag}
            className="eyebrow"
            style={{
              color: "var(--color-text-faint)",
              letterSpacing: "0.08em",
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      <footer
        style={{
          marginTop: "auto",
          paddingTop: "20px",
          borderTop: "1px solid var(--color-rule-soft)",
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {p.liveUrl && (
          <a
            href={p.liveUrl}
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
            {labels.live}
          </a>
        )}
        {p.writeupUrl && (
          <a
            href={p.writeupUrl}
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
            {labels.writeup}
          </a>
        )}
        {p.github && (
          <a
            href={p.github}
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
            {labels.github}
          </a>
        )}
        {p.videoUrl && (
          <a
            href={p.videoUrl}
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
            {labels.video}
          </a>
        )}
      </footer>
    </article>
  );
}

export default function Projects({ t }: Props) {
  const projects: PageProject[] = t.items.map((item, i) => ({
    ...item,
    ...projectAssets[i],
    index: String(i + 1).padStart(2, "0"),
  }));

  return (
    <section id="projects" style={{ padding: "clamp(64px, 8vw, 120px) 20px" }}>
      <div className="max-w-[1240px] mx-auto md:px-8 lg:px-8">
        <p className="eyebrow" style={{ marginBottom: "24px" }}>
          {t.eyebrow}
        </p>
        <h2
          style={{
            fontSize: "clamp(34px, 5.2vw, 60px)",
            lineHeight: 1.08,
            letterSpacing: "-0.025em",
            marginBottom: "64px",
            maxWidth: "22ch",
            color: "var(--color-text-bright)",
            fontVariationSettings: '"opsz" 72, "SOFT" 30',
          }}
        >
          {t.title}
        </h2>

        <div
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
          style={{ alignItems: "stretch" }}
        >
          {projects.map((p) => (
            <ProjectCard key={p.index} p={p} labels={t.linkLabels} />
          ))}
        </div>
      </div>
    </section>
  );
}
