export type Locale = "en" | "es";

export const LOCALES: Locale[] = ["en", "es"];
export const DEFAULT_LOCALE: Locale = "en";

export interface ExperienceRoleDict {
  title: string;
  company: string;
  companyUrl: string;
  location: string;
  period: string;
  current?: boolean;
  bullets: string[];
  expandedBullets?: string[];
}

export interface ProjectDict {
  client: string;
  title: string;
  metric?: string;
  description: string;
  tech: string[];
}

export interface SkillGroupDict {
  category: string;
  skills: string[];
}

export interface FooterRowDict {
  label: string;
  value: string;
}

export interface Dict {
  meta: {
    title: string;
    description: string;
    ogDescription: string;
    twitterDescription: string;
  };
  header: {
    wordmarkTag: string;
    nav: {
      about: string;
      experience: string;
      projects: string;
      skills: string;
      contact: string;
    };
    resume: string;
    menuOpen: string;
    menuClose: string;
    indexLabel: string;
    download: string;
  };
  hero: {
    paletteHint: string;
    eyebrow: string;
    titlePart1: string;
    titleAccent: string;
    titlePart2: string;
    body: {
      lead: string;
      surt: string;
      tail: string;
    };
    viewWork: string;
    resume: string;
    portraitLabel: string;
    portraitMeta: string;
    subjectName: string;
    subjectLocation: string;
    subjectYear: string;
    bottomCaption: string;
  };
  telemetry: {
    eyebrow: string;
    cells: { value: string; label: string }[];
    footnote: string;
  };
  about: {
    eyebrow: string;
    pullQuote: string;
    prose: string[];
    principlesEyebrow: string;
    principles: { k: string; body: string }[];
  };
  experience: {
    eyebrow: string;
    title: string;
    currentBadge: string;
    moreLabel: string;
    lessLabel: string;
    atSeparator: string;
    roles: ExperienceRoleDict[];
  };
  projects: {
    eyebrow: string;
    title: string;
    items: ProjectDict[];
    linkLabels: {
      live: string;
      writeup: string;
      github: string;
      video: string;
    };
  };
  skills: {
    eyebrow: string;
    title: string;
    groups: SkillGroupDict[];
    certs: string;
  };
  finalCta: {
    eyebrow: string;
    titlePart1: string;
    titlePart2: string;
    body: string;
    email: string;
    linkedin: string;
    resume: string;
  };
  footer: {
    aboutCommand: string;
    rows: FooterRowDict[];
    github: string;
    linkedin: string;
    email: string;
    /** Use {year} placeholder — interpolated at render time. */
    sessionClosed: string;
  };
  palette: {
    placeholder: string;
    empty: string;
    groups: {
      navigate: string;
      open: string;
      actions: string;
      projects: string;
      language: string;
    };
    actions: {
      copyEmail: string;
      copyEmailHint: string;
      sendEmail: string;
      sendEmailHint: string;
      switchEn: string;
      switchEs: string;
      switchHint: string;
    };
    items: {
      resume: string;
      resumeHint: string;
      currentEmployerHint: string;
    };
  };
  langSwitcher: {
    en: string;
    es: string;
    switchTo: string;
  };
  skipToContent: string;
}
