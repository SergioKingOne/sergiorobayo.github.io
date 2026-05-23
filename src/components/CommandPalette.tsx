"use client";

import { Command } from "cmdk";
import { useCallback, useEffect, useState } from "react";
import { assetPath } from "@/lib/config";
import { alternatePath } from "@/lib/i18n/LocaleProvider";
import type { Dict, Locale } from "@/lib/i18n/types";

interface Item {
  label: string;
  hint?: string;
  onSelect: () => void;
  keywords?: string;
}

interface Group {
  heading: string;
  items: Item[];
}

interface Props {
  t: Dict;
  locale: Locale;
}

export default function CommandPalette({ t, locale }: Props) {
  const [open, setOpen] = useState(false);
  const tNav = t.header.nav;
  const tPal = t.palette;

  const navTargets = [
    { name: tNav.about, href: "#about" },
    { name: tNav.experience, href: "#experience" },
    { name: tNav.projects, href: "#projects" },
    { name: tNav.skills, href: "#skills" },
    { name: tNav.contact, href: "#contact" },
    { name: "top", href: "#" },
  ];

  const externalLinks = [
    {
      name: "github",
      url: "https://github.com/SergioKingOne",
      hint: "@SergioKingOne",
    },
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/sergio-robayo-500584216/",
      hint: "/in/sergio-robayo",
    },
    {
      name: "surt ai",
      url: "https://surt.com",
      hint: tPal.items.currentEmployerHint,
    },
  ];

  const projectLinks = t.projects.items.slice(0, 6).map((p, i) => {
    const urls = [
      "https://surt.com",
      "https://www.linkedin.com/in/sergio-robayo-500584216/",
      "https://github.com/VertexStudio/bioma",
      "https://surt.com",
      "https://github.com/SergioKingOne/distributed-file-processor",
      "https://github.com/SergioKingOne/wanderlog",
    ];
    return { name: p.title, url: urls[i] };
  });

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      const isTyping =
        target?.tagName === "INPUT" ||
        target?.tagName === "TEXTAREA" ||
        target?.isContentEditable;
      if ((e.key === "k" || e.key === "K") && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
        return;
      }
      if (e.key === "/" && !isTyping && !e.metaKey && !e.ctrlKey) {
        e.preventDefault();
        setOpen(true);
        return;
      }
      if (e.key === "Escape" && open) {
        e.preventDefault();
        setOpen(false);
      }
    };
    const onOpen = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener("palette:open", onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("palette:open", onOpen);
    };
  }, [open]);

  const goto = useCallback((href: string) => {
    setOpen(false);
    if (href.startsWith("#")) {
      const el = href === "#" ? null : document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      else window.scrollTo({ top: 0, behavior: "smooth" });
      history.pushState(null, "", href === "#" ? location.pathname : href);
    } else {
      window.open(href, "_blank", "noopener,noreferrer");
    }
  }, []);

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText("sergiorobayorr@gmail.com");
    } catch {
      // silent
    }
    setOpen(false);
  }, []);

  const switchLanguage = useCallback(() => {
    const otherHref = alternatePath(locale, location.pathname);
    setOpen(false);
    window.location.href = otherHref;
  }, [locale]);

  const groups: Group[] = [
    {
      heading: tPal.groups.navigate,
      items: navTargets.map((nv) => ({
        label: `/ ${nv.name}`,
        hint: nv.href,
        keywords: `nav goto section ${nv.name}`,
        onSelect: () => goto(nv.href),
      })),
    },
    {
      heading: tPal.groups.open,
      items: [
        ...externalLinks.map((l) => ({
          label: l.name,
          hint: l.hint,
          keywords: `external link open ${l.name}`,
          onSelect: () => goto(l.url),
        })),
        {
          label: tPal.items.resume,
          hint: tPal.items.resumeHint,
          keywords: "resume cv pdf download descargar",
          onSelect: () => goto(assetPath("/resume.pdf")),
        },
      ],
    },
    {
      heading: tPal.groups.actions,
      items: [
        {
          label: tPal.actions.copyEmail,
          hint: tPal.actions.copyEmailHint,
          keywords: "email copy clipboard contact correo",
          onSelect: copyEmail,
        },
        {
          label: tPal.actions.sendEmail,
          hint: tPal.actions.sendEmailHint,
          keywords: "email mailto contact correo",
          onSelect: () => {
            window.location.href = "mailto:sergiorobayorr@gmail.com";
            setOpen(false);
          },
        },
      ],
    },
    {
      heading: tPal.groups.language,
      items: [
        {
          label:
            locale === "en" ? tPal.actions.switchEs : tPal.actions.switchEn,
          hint: tPal.actions.switchHint,
          keywords: "language idioma spanish english español inglés switch cambiar",
          onSelect: switchLanguage,
        },
      ],
    },
    {
      heading: tPal.groups.projects,
      items: projectLinks.map((p) => ({
        label: p.name,
        hint: new URL(p.url).hostname.replace("www.", ""),
        keywords: `project work ${p.name}`,
        onSelect: () => goto(p.url),
      })),
    },
  ];

  if (!open) return null;

  return (
    <div
      className="cmdk-overlay"
      role="presentation"
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <Command
        label="Command Palette"
        loop
        onClick={(e) => e.stopPropagation()}
      >
        <Command.Input placeholder={tPal.placeholder} autoFocus />
        <Command.List>
          <Command.Empty>{tPal.empty}</Command.Empty>
          {groups.map((group) => (
            <Command.Group key={group.heading} heading={group.heading}>
              {group.items.map((item) => (
                <Command.Item
                  key={item.label}
                  value={`${item.label} ${item.keywords ?? ""}`}
                  onSelect={item.onSelect}
                >
                  <span>{item.label}</span>
                  {item.hint && (
                    <span
                      style={{
                        color: "var(--color-text-faint)",
                        fontSize: "11px",
                        marginLeft: "auto",
                        marginRight: "12px",
                      }}
                    >
                      {item.hint}
                    </span>
                  )}
                  <span className="cmdk-arrow" aria-hidden="true">
                    →
                  </span>
                </Command.Item>
              ))}
            </Command.Group>
          ))}
        </Command.List>
      </Command>
    </div>
  );
}
