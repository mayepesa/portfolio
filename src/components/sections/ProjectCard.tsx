import type { Project } from "@/content/types";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { ExternalLinkIcon, FolderIcon, GitHubIcon } from "@/components/ui/Icons";

type Props = {
  project: Project;
  locale: Locale;
  t: Pick<Dictionary, "sourceCode" | "liveDemo" | "projectStatus">;
};

export function ProjectCard({ project, locale, t }: Props) {
  const { title, description, tech, status, github, demo } = project;
  const links = [
    { href: github, label: t.sourceCode, Icon: GitHubIcon },
    { href: demo, label: t.liveDemo, Icon: ExternalLinkIcon },
  ].filter((link): link is typeof link & { href: string } => Boolean(link.href));

  return (
    <article className="flex h-full flex-col rounded-lg bg-surface p-6 transition-transform hover:-translate-y-1.5">
      <div className="mb-6 flex items-center justify-between text-muted">
        <FolderIcon className="size-10 text-accent" />
        <ul className="flex items-center gap-3">
          {links.map(({ href, label, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={`${label}: ${title}`}
                className="transition-colors hover:text-accent"
              >
                <Icon />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-ink">{title}</h3>
      <p className="mt-3 flex-1 leading-relaxed text-muted">{description[locale]}</p>

      <div className="mt-6 flex items-end justify-between gap-3">
        <ul className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-muted">
          {tech.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <span
          className={`shrink-0 rounded-full px-2.5 py-0.5 font-mono text-[11px] ${
            status === "live" ? "bg-accent/15 text-accent" : "bg-surface-2 text-muted"
          }`}
        >
          {t.projectStatus[status]}
        </span>
      </div>
    </article>
  );
}
