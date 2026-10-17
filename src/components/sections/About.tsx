import { profile } from "@/content/profile";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { FadeIn } from "@/components/motion/FadeIn";
import { Avatar } from "@/components/ui/Avatar";
import { RichText } from "@/components/ui/RichText";
import { Section } from "@/components/ui/Section";

type Props = { locale: Locale; t: Dictionary };

export function About({ locale, t }: Props) {
  return (
    <Section id="about" title={t.nav.about}>
      <FadeIn className="grid gap-12 md:grid-cols-[3fr_2fr]">
        <div className="space-y-4 text-lg leading-relaxed text-muted">
          {profile.about[locale].map((paragraph) => (
            <p key={paragraph}>
              <RichText text={paragraph} />
            </p>
          ))}
          <ul className="grid grid-cols-2 gap-x-6 gap-y-2 pt-2 font-mono text-sm">
            {profile.techStack.map((tech) => (
              <li key={tech} className="flex gap-2">
                <span aria-hidden className="text-highlight">
                  &gt;
                </span>
                {tech}
              </li>
            ))}
          </ul>
        </div>

        <div className="mx-auto w-60 sm:w-72">
          <Avatar name={profile.name} photo={profile.photo} />
        </div>
      </FadeIn>
    </Section>
  );
}
