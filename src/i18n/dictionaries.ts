import type { SectionId } from "@/config/site";
import type { ProjectStatus } from "@/content/types";
import type { Locale } from "./config";

export type Dictionary = {
  nav: Record<SectionId, string>;
  sectionsLabel: string;
  menu: string;
  skipToContent: string;
  switchLanguage: string;
  contactMe: string;
  downloadCv: string;
  emailCopied: string;
  emailLabel: string;
  emailSubject: string;
  experienceTabsLabel: string;
  projectStatus: Record<ProjectStatus, string>;
  sourceCode: string;
  liveDemo: string;
  credits: string;
};

const en: Dictionary = {
  nav: {
    home: "home",
    about: "about me",
    experience: "experience",
    projects: "projects",
  },
  sectionsLabel: "Sections",
  menu: "Menu",
  skipToContent: "Skip to content",
  switchLanguage: "Ver en español",
  contactMe: "Get in touch",
  downloadCv: "Download CV",
  emailCopied: "Email copied!",
  emailLabel: "Send me an email",
  emailSubject: "Hi Maria",
  experienceTabsLabel: "Companies",
  projectStatus: { live: "Live", building: "In progress" },
  sourceCode: "Source code",
  liveDemo: "Live demo",
  credits: "Built by Maria Yepes",
};

const es: Dictionary = {
  nav: {
    home: "inicio",
    about: "sobre mí",
    experience: "experiencia",
    projects: "proyectos",
  },
  sectionsLabel: "Secciones",
  menu: "Menú",
  skipToContent: "Ir al contenido",
  switchLanguage: "View in English",
  contactMe: "Contáctame",
  downloadCv: "Descargar CV",
  emailCopied: "¡Correo copiado!",
  emailLabel: "Envíame un correo",
  emailSubject: "Hola Maria",
  experienceTabsLabel: "Empresas",
  projectStatus: { live: "Publicado", building: "En construcción" },
  sourceCode: "Código fuente",
  liveDemo: "Ver demo",
  credits: "Hecho por Maria Yepes",
};

const dictionaries: Record<Locale, Dictionary> = { en, es };

export const getDictionary = (locale: Locale): Dictionary => dictionaries[locale];
