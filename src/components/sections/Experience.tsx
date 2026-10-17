import { experience } from "@/content/experience";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { FadeIn } from "@/components/motion/FadeIn";
import { Section } from "@/components/ui/Section";
import { ExperienceTabs } from "./ExperienceTabs";

type Props = { locale: Locale; t: Dictionary };

export function Experience({ locale, t }: Props) {
  return (
    <Section id="experience" title={t.nav.experience}>
      <FadeIn>
        <ExperienceTabs jobs={experience} locale={locale} label={t.experienceTabsLabel} />
      </FadeIn>
    </Section>
  );
}
