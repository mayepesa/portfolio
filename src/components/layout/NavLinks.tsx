import { getSectionNumber, visibleSectionIds } from "@/config/site";
import type { Dictionary } from "@/i18n/dictionaries";

type Props = {
  t: Pick<Dictionary, "nav">;
  className?: string;
  linkClassName?: string;
  onNavigate?: () => void;
};

export function NavLinks({ t, className = "", linkClassName = "", onNavigate }: Props) {
  return (
    <ul className={className}>
      {visibleSectionIds.map((id) => (
        <li key={id}>
          <a
            href={`#${id}`}
            onClick={onNavigate}
            className={`font-mono text-sm text-muted transition-colors hover:text-accent-soft ${linkClassName}`}
          >
            <span aria-hidden className="mr-2 text-xs text-highlight">
              {getSectionNumber(id)}
            </span>
            {t.nav[id]}
          </a>
        </li>
      ))}
    </ul>
  );
}
