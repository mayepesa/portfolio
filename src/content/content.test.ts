import { existsSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { locales, type Localized } from "@/i18n/config";
import { experience } from "./experience";
import { profile } from "./profile";
import { projects } from "./projects";

function expectTranslated(value: Localized<string | string[]>, where: string) {
  for (const locale of locales) {
    const text = value[locale];
    const isFilled = Array.isArray(text) ? text.length > 0 && text.every(Boolean) : Boolean(text);
    expect(isFilled, `${where} is missing "${locale}"`).toBe(true);
  }
}

describe("content", () => {
  it("profile is translated", () => {
    expectTranslated(profile.role, "profile.role");
    expectTranslated(profile.intro, "profile.intro");
    expectTranslated(profile.about, "profile.about");
  });

  it("every CV file exists in /public", () => {
    for (const locale of locales) {
      expect(existsSync(join(process.cwd(), "public", profile.cv[locale]))).toBe(true);
    }
  });

  it("every job is translated and has the same number of bullets in each language", () => {
    for (const job of experience) {
      expectTranslated(job.title, `${job.company}.title`);
      expectTranslated(job.period, `${job.company}.period`);
      expectTranslated(job.bullets, `${job.company}.bullets`);
      expect(job.bullets.en.length).toBe(job.bullets.es.length);
    }
  });

  it("every project is translated and has a unique title", () => {
    for (const project of projects) expectTranslated(project.description, project.title);
    const titles = projects.map((p) => p.title);
    expect(new Set(titles).size).toBe(titles.length);
  });
});
