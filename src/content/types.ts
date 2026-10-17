import type { Localized } from "@/i18n/config";

export type Profile = {
  name: string;
  shortName: string;
  role: Localized;
  location: string;
  email: string;
  links: { github: string; linkedin: string };
  cv: Localized;
  photo: string | null;
  intro: Localized;
  about: Localized<string[]>;
  techStack: string[];
};

export type Job = {
  company: string;
  title: Localized;
  period: Localized;
  bullets: Localized<string[]>;
};

export type ProjectStatus = "live" | "building";

export type Project = {
  title: string;
  description: Localized;
  tech: string[];
  status: ProjectStatus;
  github?: string;
  demo?: string;
};
