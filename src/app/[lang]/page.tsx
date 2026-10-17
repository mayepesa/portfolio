import { notFound } from "next/navigation";
import { isSectionVisible } from "@/config/site";
import { hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SkipLink } from "@/components/layout/SkipLink";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";

const MAIN_ID = "main";

export default async function HomePage({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const t = getDictionary(lang);
  const sectionProps = { locale: lang, t };

  return (
    <>
      <SkipLink label={t.skipToContent} targetId={MAIN_ID} />
      <Header {...sectionProps} />

      <main id={MAIN_ID} className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-16">
        <Hero {...sectionProps} />
        <About {...sectionProps} />
        <Experience {...sectionProps} />
        {isSectionVisible("projects") && <Projects {...sectionProps} />}
      </main>

      <Footer credits={t.credits} />
    </>
  );
}
