import { projects } from "@/content/projects";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { FadeIn } from "@/components/motion/FadeIn";
import { Section } from "@/components/ui/Section";
import { ProjectCard } from "./ProjectCard";

type Props = { locale: Locale; t: Dictionary };

const STAGGER_MS = 100;

export function Projects({ locale, t }: Props) {
  return (
    <Section id="projects" title={t.nav.projects}>
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <li key={project.title}>
            <FadeIn delay={i * STAGGER_MS} className="h-full">
              <ProjectCard project={project} locale={locale} t={t} />
            </FadeIn>
          </li>
        ))}
      </ul>
    </Section>
  );
}
