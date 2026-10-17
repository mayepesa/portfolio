import { profile } from "@/content/profile";
import { GitHubIcon, LinkedInIcon } from "./Icons";

export function SocialLinks() {
  const links = [
    { label: "GitHub", href: profile.links.github, Icon: GitHubIcon, external: true },
    { label: "LinkedIn", href: profile.links.linkedin, Icon: LinkedInIcon, external: true },
  ];

  return (
    <ul className="flex items-center">
      {links.map(({ label, href, Icon, external }) => (
        <li key={label}>
          <a
            href={href}
            aria-label={label}
            className="block p-2 text-muted transition-colors hover:text-accent-soft"
            {...(external && { target: "_blank", rel: "noreferrer" })}
          >
            <Icon />
          </a>
        </li>
      ))}
    </ul>
  );
}
