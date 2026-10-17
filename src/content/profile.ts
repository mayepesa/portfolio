import type { Profile } from "./types";

export const profile: Profile = {
  name: "Maria Yepes",
  shortName: "Maria",
  role: {
    en: "Front End Developer",
    es: "Desarrolladora Front End",
  },
  location: "Medellín, Colombia",
  email: "maayepesa@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/mayepesaa/",
    github: "https://github.com/mayepesa",
  },
  cv: {
    en: "/cv/Maria-Yepes-CV-EN.pdf",
    es: "/cv/Maria-Yepes-CV-ES.pdf",
  },
  photo: "/assets/me.jpg",

  intro: {
    en: "Front end developer based in Medellín, with more than five years of experience building fintech and banking products with React, TypeScript and Next.js.",
    es: "Desarrolladora front end en Medellín, con más de cinco años de experiencia construyendo productos fintech y bancarios con React, TypeScript y Next.js.",
  },

  about: {
    en: [
      "I studied Mining and Metallurgy Engineering at Universidad Nacional de Colombia. My interest in problem solving led me to software, and I moved into development after completing the Certified Tech Developer program at Digital House.",
      "Since then I have worked mainly on fintech, banking and CRM products. Most of my work has focused on the front end, including React and TypeScript applications, data-heavy dashboards, micro frontends, component libraries and the modernization of legacy code. In my most recent role I also contributed to the back end with the support of AI tools such as Cursor and Claude, which are now part of how I write, review and refactor code every day.",
      "I am currently studying Software Engineering at Politécnico Grancolombiano. I am most motivated by **creative, challenging projects**, especially those that require me to learn something new.",
      "Technologies I have worked with:",
    ],
    es: [
      "Estudié Ingeniería de Minas y Metalurgia en la Universidad Nacional de Colombia. Mi interés por resolver problemas me llevó al software, y di el paso al desarrollo tras completar el programa Certified Tech Developer de Digital House.",
      "Desde entonces he trabajado principalmente en productos fintech, bancarios y CRM. La mayor parte de mi trabajo se ha centrado en el front end, incluyendo aplicaciones en React y TypeScript, dashboards con grandes volúmenes de datos, micro frontends, librerías de componentes y la modernización de código legacy. En mi último rol también participé en el back end con el apoyo de herramientas de IA como Cursor y Claude, que hoy forman parte de cómo escribo, reviso y refactorizo código a diario.",
      "Actualmente estudio Ingeniería de Software en el Politécnico Grancolombiano. Me motivan los **proyectos creativos y retadores**, sobre todo aquellos que me exigen aprender algo nuevo.",
      "Tecnologías con las que he trabajado:",
    ],
  },

  techStack: [
    "TypeScript",
    "React",
    "Next.js",
    "React Native",
    "Micro Frontends",
    "Zustand / Redux",
    "React Query",
    "Jest / Storybook",
  ],
};
