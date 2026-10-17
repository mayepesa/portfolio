import type { Project } from "./types";

export const projects: Project[] = [
  {
    title: "portfolio",
    description: {
      en: "My personal site, built with Next.js, TypeScript and Tailwind CSS. Available in English and Spanish, with unit tests and CI on every push.",
      es: "Mi sitio personal, hecho con Next.js, TypeScript y Tailwind CSS. Disponible en inglés y español, con pruebas unitarias y CI en cada push.",
    },
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vitest"],
    status: "live",
    github: "https://github.com/mayepesa/portfolio",
  },
];
