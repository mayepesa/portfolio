export const sectionIds = ["home", "about", "experience", "projects"] as const;

export type SectionId = (typeof sectionIds)[number];

const hiddenSections: readonly SectionId[] = ["projects"];

export const isSectionVisible = (id: SectionId) => !hiddenSections.includes(id);

export const visibleSectionIds = sectionIds.filter(isSectionVisible);

export const getSectionNumber = (id: SectionId) =>
  String(visibleSectionIds.indexOf(id)).padStart(2, "0");

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
