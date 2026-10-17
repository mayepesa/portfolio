import { profile } from "@/content/profile";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { FadeIn } from "@/components/motion/FadeIn";
import { AsciiPortrait } from "@/components/motion/AsciiPortrait";
import { Typewriter } from "@/components/motion/Typewriter";
import { ContactActions } from "@/components/ui/ContactActions";
import { getHandle } from "@/lib/text";

type Props = { locale: Locale; t: Dictionary };

export function Hero({ locale, t }: Props) {
  return (
    <section
      id="home"
      aria-labelledby="home-title"
      className="grid items-center gap-10 pt-28 pb-16 md:min-h-screen md:grid-cols-[2fr_3fr] md:pt-24"
    >
      <div className="mx-auto w-56 sm:w-72 md:w-full">
        <AsciiPortrait label={profile.name} />
      </div>

      <div>
        <p aria-hidden className="font-mono text-sm text-muted sm:text-base">
          <span className="text-highlight">{getHandle(profile.name)}@medellín</span>:~${" "}
          <span className="text-ink">
            <Typewriter text="whoami" />
          </span>
        </p>
        <h1 id="home-title" className="mt-4 text-5xl font-bold tracking-tight text-ink sm:text-7xl">
          {profile.name}
        </h1>
        <FadeIn delay={300}>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
            {profile.intro[locale]}
          </p>
          <ContactActions locale={locale} t={t} />
        </FadeIn>
      </div>
    </section>
  );
}
