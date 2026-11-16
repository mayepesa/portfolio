import type { Job } from "./types";

export const experience: Job[] = [
  {
    company: "N5 Now",
    title: { en: "Senior Front End Developer", es: "Desarrolladora Front End Senior" },
    period: { en: "Jun 2023 – Sep 2026", es: "Jun 2023 – Sep 2026" },
    bullets: {
      en: [
        "Migrated the company's core product (6–7 modules) from legacy React to micro frontends with Module Federation, Vite and TypeScript, enabling independent deployments per team and noticeably faster builds.",
        "Implemented shared session, state (Zustand) and routing across micro frontends, and refactored class components into functional components with Hooks.",
        "Built the company's design system as a private npm library: configurable components (tables, forms, modals, charts) built from Figma designs, documented in Storybook and versioned in npm.",
        "Structured design tokens and color palettes per client for a multi-bank platform, with per-bank configuration of language, currency, decimals and visible table columns (i18n).",
        "Built a sales goals management module (individual and team rankings, goal attainment, incentive simulator) that replaced manual Excel processes, deployable both as a standalone app and as a micro frontend.",
        "Integrated REST APIs with React Query and Axios (caching and loading states), aligning contracts with the backend team and validating endpoints in Postman.",
        "Contributed to raising unit test coverage above 90% with Vitest and React Testing Library (previously Jest), with ESLint, Prettier and mandatory code reviews on every pull request.",
        "Improved performance with lazy loading, code splitting and memoization.",
        "Delivered full stack features in a Ruby on Rails monolith (React, Rails, Docker) with AI-assisted development, using Cursor and Claude for legacy code analysis and migrations.",
        "Developed sales results and statistics platforms with Redux, React Hook Form, styled-components and Single SPA.",
        "Worked in agile teams (Scrum, Kanban) distributed across Latin America with UX, backend, QA and product, using Azure DevOps, Linear, GitHub and Bitbucket across development, QA, staging and production environments.",
      ],
      es: [
        "Migré el producto core de la compañía (6-7 módulos) de React legacy a micro frontends con Module Federation, Vite y TypeScript, lo que habilitó despliegues independientes por equipo y redujo de forma notable los tiempos de build.",
        "Implementé sesión, estado (Zustand) y enrutamiento compartidos entre micro frontends, y refactoricé componentes de clase a componentes funcionales con Hooks.",
        "Desarrollé el design system de la compañía como librería npm privada: componentes configurables (tablas, formularios, modales, gráficas) construidos desde Figma, documentados en Storybook y versionados en npm.",
        "Estructuré los design tokens y las paletas por cliente para una plataforma multi-banco, con configuración por entidad de idioma, moneda, decimales y columnas visibles (i18n).",
        "Construí un módulo de gestión de objetivos comerciales (rankings individuales y de equipo, cumplimiento, simulador de incentivos) que reemplazó procesos manuales en Excel, desplegable como aplicación independiente y como micro frontend.",
        "Integré APIs REST con React Query y Axios (caché y estados de carga), coordinando contratos con el equipo de backend y validando endpoints en Postman.",
        "Contribuí a llevar la cobertura de pruebas unitarias por encima del 90 % con Vitest y React Testing Library (antes Jest), con ESLint, Prettier y code reviews obligatorios en cada pull request.",
        "Optimicé el rendimiento con lazy loading, code splitting y memoización.",
        "Entregué funcionalidades full stack en un monolito Ruby on Rails (React, Rails, Docker) con desarrollo asistido por IA, usando Cursor y Claude para análisis de código legacy y migraciones.",
        "Desarrollé plataformas de resultados y estadísticas de ventas con Redux, React Hook Form, styled-components y Single SPA.",
        "Trabajé en equipos ágiles (Scrum, Kanban) distribuidos en Latinoamérica con UX, backend, QA y producto, usando Azure DevOps, Linear, GitHub y Bitbucket en ambientes de desarrollo, QA, staging y producción.",
      ],
    },
  },
  {
    company: "e-volution",
    title: { en: "Front End Developer", es: "Desarrolladora Front End" },
    period: { en: "Jan 2023 – May 2023", es: "Ene 2023 – May 2023" },
    bullets: {
      en: [
        "Worked in an Nx monorepo that brought together React web applications and React Native mobile applications.",
        "Implemented Storybook inside the monorepo to document React and React Native components.",
        "Storybook became the reference teams consulted before building new components, which reduced duplication across projects.",
        "Developed reusable components and fixed bugs in the web and mobile applications.",
      ],
      es: [
        "Trabajé en un monorepo Nx que reunía aplicaciones web en React y aplicaciones móviles en React Native.",
        "Implementé Storybook dentro del monorepo para documentar componentes de React y React Native.",
        "Storybook se convirtió en la referencia que los equipos consultaban antes de crear nuevos componentes, lo que redujo la duplicación entre proyectos.",
        "Desarrollé componentes reutilizables y corregí bugs en las aplicaciones web y móviles.",
      ],
    },
  },
  {
    company: "LeanCore",
    title: { en: "Front End Developer", es: "Desarrolladora Front End" },
    period: { en: "Nov 2020 – Jan 2023", es: "Nov 2020 – Ene 2023" },
    bullets: {
      en: [
        "Developed the front end of a client and admin dashboard (credits, products, transactions, customer profiles, statistical reports) with React, Next.js, TypeScript and Redux Toolkit, with Sentry for error monitoring and handling.",
        "Implemented biometric verification, OTP and electronic document signing flows, integrating REST APIs.",
        "Built, as part of a team, a parking management mobile app for iOS and Android with React Native and Expo, published on the App Store and Google Play and used in several parking facilities, owning mainly the front end: screens, navigation and offline mode.",
        "Integrated Firebase (Authentication, Firestore, Realtime Database, Storage and push notifications) for shift-based login, time tracking and per-vehicle charging, and built a React dashboard to view, edit and download operational data.",
        "Developed the company's responsive website with Next.js, TypeScript and SCSS, with unit tests in Jest.",
      ],
      es: [
        "Desarrollé el front end de un dashboard de clientes y administración (créditos, productos, transacciones, perfiles de clientes, reportes estadísticos) con React, Next.js, TypeScript y Redux Toolkit, con Sentry para el monitoreo y manejo de errores.",
        "Implementé los flujos de verificación biométrica, OTP y firma electrónica de documentos, integrando APIs REST.",
        "Construí en equipo una aplicación móvil de gestión de parqueaderos para iOS y Android con React Native y Expo, publicada en App Store y Google Play y usada en varios parqueaderos, a cargo principalmente del front end: pantallas, navegación y modo offline.",
        "Integré Firebase (Authentication, Firestore, Realtime Database, Storage y notificaciones push) para el inicio de sesión por turno, el conteo de tiempo y el cobro por vehículo, y desarrollé un dashboard en React para consultar, editar y descargar los datos de operación.",
        "Desarrollé el sitio web responsive de la compañía con Next.js, TypeScript y SCSS, con pruebas unitarias en Jest.",
      ],
    },
  },
];
