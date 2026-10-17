import { profile } from "@/content/profile";
import { getHandle } from "@/lib/text";
import { getAlternateLocale, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { EmailButton } from "@/components/ui/EmailButton";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { MobileMenu } from "./MobileMenu";
import { NavLinks } from "./NavLinks";

type Props = { locale: Locale; t: Dictionary };

export function Header({ locale, t }: Props) {
  const alternateLocale = getAlternateLocale(locale);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-line/60 bg-bg/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-5 sm:px-8">
        <a
          href="#home"
          className="font-mono text-sm font-medium tracking-wide text-ink hover:text-highlight"
        >
          <span className="hidden sm:inline">{profile.name}</span>
          <span className="sm:hidden">{getHandle(profile.name)}</span>
        </a>

        <nav aria-label={t.sectionsLabel} className="hidden lg:block">
          <NavLinks t={t} className="flex items-center gap-6" />
        </nav>

        <div className="flex items-center gap-1 sm:gap-3">
          <a
            href={`/${alternateLocale}`}
            hrefLang={alternateLocale}
            aria-label={t.switchLanguage}
            title={t.switchLanguage}
            className="rounded-md border border-line px-2.5 py-1 font-mono text-xs text-muted uppercase hover:border-highlight hover:text-highlight"
          >
            {alternateLocale}
          </a>
          <div className="flex items-center">
            <EmailButton
              variant="icon"
              email={profile.email}
              subject={t.emailSubject}
              label={t.emailLabel}
              copiedLabel={t.emailCopied}
            />
            <SocialLinks />
          </div>
          <MobileMenu t={t} />
        </div>
      </div>
    </header>
  );
}
