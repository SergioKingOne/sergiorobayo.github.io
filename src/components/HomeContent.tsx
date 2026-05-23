import About from "@/components/About";
import CommandPalette from "@/components/CommandPalette";
import Experience from "@/components/Experience";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import TelemetryStrip from "@/components/TelemetryStrip";
import { LocaleSync } from "@/lib/i18n/LocaleProvider";
import { getDictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/types";

interface Props {
  locale: Locale;
}

export default function HomeContent({ locale }: Props) {
  const t = getDictionary(locale);
  return (
    <main>
      <LocaleSync locale={locale} />
      <Header t={t.header} langSwitcher={t.langSwitcher} locale={locale} />
      <Hero t={t.hero} paletteHint={t.hero.paletteHint} locale={locale} />
      <TelemetryStrip t={t.telemetry} />
      <About t={t.about} />
      <Experience t={t.experience} />
      <Projects t={t.projects} />
      <Skills t={t.skills} />
      <FinalCTA t={t.finalCta} />
      <Footer t={t.footer} />
      <CommandPalette t={t} locale={locale} />
    </main>
  );
}
