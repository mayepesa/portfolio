import type { Job } from "./types";

export const experience: Job[] = [
  {
    company: "N5 Now",
    title: { en: "Software Developer", es: "Software Developer" },
    period: { en: "Jun 2023 – Sep 2026", es: "Jun 2023 – Sep 2026" },
    bullets: {
      en: [
        "Developed the CRM that N5 provides to banks such as BCP, BBVA and Itaú, working mainly on the base product that each bank's implementation team customizes.",
        "Migrated the entire CRM from React class components to Hooks together with a team of front end developers, covering various modules.",
        "Proposed a micro frontend architecture, which the team adopted, and built Toolkit Core, the team's shared npm component library, documented in Storybook.",
        "Built the Goals module with TypeScript, React Query, Zustand and React Hook Form, including on platform configuration, charts, rankings, sales rules and period settings.",
        "Migrated the Boost module into the company's monolith, working on both front and back end with Cursor and Claude. The module includes rankings, team comparisons, a goal simulator and a “View as” option for managers.",
      ],
      es: [
        "Co-desarrollé la línea base del CRM de N5 para bancos como BCP, BBVA e Itaú, el producto core que luego personaliza el equipo de implementación de cada entidad.",
        "Colaboré con el equipo en la migración del CRM de componentes de clase de React a Hooks, refactorizando múltiples módulos de alta complejidad y gran volumen de features.",
        "Propuse una arquitectura de micro frontends con Single SPA que el equipo adoptó con éxito, y construí Toolkit Core, la librería de componentes npm del equipo, documentada en Storybook.",
        "Trabajé del desarrollo del módulo de Goals utilizando TypeScript, React Query, Zustand y React Hook Form, integrando gráficas, rankings, reglas de ventas y configuración por periodos.",
        "Participé en la migración del módulo Boost al monolito de la compañía, trabajando en front y back end junto al equipo con el apoyo de Cursor y Claude para integrar rankings, simuladores y la opción “Ver como”.",
      ],
    },
  },
  {
    company: "e-volution",
    title: { en: "Software Developer", es: "Software Developer" },
    period: { en: "Feb 2023 – May 2023", es: "Feb 2023 – May 2023" },
    bullets: {
      en: [
        "Documented the company's component library in Storybook, covering several React and React Native applications in an Nx monorepo.",
        "Storybook became the reference teams consulted before building new components, which reduced duplication across projects.",
      ],
      es: [
        "Documenté en Storybook la librería de componentes de la compañía, que abarcaba varias aplicaciones de React y React Native en un monorepo Nx.",
        "Storybook se convirtió en la referencia que los equipos consultaban antes de crear nuevos componentes, lo que redujo la duplicación entre proyectos.",
      ],
    },
  },
  {
    company: "LeanCore",
    title: { en: "Front End Developer", es: "Desarrolladora Front End" },
    period: { en: "Nov 2020 – Jan 2023", es: "Nov 2020 – Ene 2023" },
    bullets: {
      en: [
        "Built the client and admin dashboards for a financial services platform as part of a two-person front end team, responsible for data visualization and state management across credits, transactions, reports, document signing, biometric verification and OTP.",
        "Worked with Next.js, Redux Toolkit, MUI, TypeScript and Jest, and developed the company website with Next.js.",
        "Built Zone P from scratch, a parking management app developed with React Native, Expo and Firebase and published on Google Play and the App Store, together with a React dashboard for owners to track daily activity and revenue.",
      ],
      es: [
        "Construí los dashboards de clientes y administración de una plataforma de servicios financieros en un equipo front end de dos personas, a cargo de la visualización de datos y el manejo de estado en créditos, transacciones, reportes, firma de documentos, verificación biométrica y OTP.",
        "Trabajé con Next.js, Redux Toolkit, MUI, TypeScript y Jest, y desarrollé el sitio web de la compañía con Next.js.",
        "Construí desde cero Zone P, una app de gestión de parqueaderos desarrollada con React Native, Expo y Firebase y publicada en Google Play y el App Store, junto con un dashboard en React para que los dueños siguieran la actividad y los ingresos diarios.",
      ],
    },
  },
];
