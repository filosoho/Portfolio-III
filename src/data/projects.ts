export interface ApproachItem {
  number: string;
  title: string;
  text: string;
}

export interface Project {
  slug: string;
  number: string;
  title: string;
  client: string;
  type: string;
  dates: string;
  url?: string;
  links?: {
    label: string;
    url: string;
  }[];

  summary: string;
  description: string;
  role: string;

  technologies: string[];
  approach: ApproachItem[];
}

export interface OtherProject {
  title: string;
  type: string;
  technologies: string;
  url?: string;
  links?: {
    label: string;
    url: string;
  }[];
}

export interface PortfolioHistoryItem {
  number: string;
  title: string;
  description: string;
  period: string;
  technologies?: string;
  url?: string;
}

export const projects: Project[] = [
  {
    slug: "android-developer-documentation",
    number: "01",
    title: "Android Developer Documentation",
    client: "Project for Google",
    type: "Developer Documentation",
    dates: "Apr 2026 — Present",
    url: "https://developer.android.com/",

    summary:
      "Engineering reusable UI systems, high-visibility launch campaigns, content ingestion and static-site publishing pipelines for the Android Developer Documentation platform, supporting a platform used by millions of developers worldwide.",
    description:
      "Built reusable UI components and shared documentation patterns used across the platform. Delivered high-visibility launch campaigns (Google I/O, The Android Show, Made by Google, GDC) and supported monthly developer newsletters. Maintained time-critical Google Play policy hubs while working across automated GCP Cloud Run and Astro SSG publishing pipelines.",
    role: "Software Engineer working across shared documentation components, homepage merchandising, content tooling and cloud-to-monorepo publishing workflows. Collaborated with cross-functional teams to design and implement new features, improve existing systems and optimise publishing workflows. Managed npm package upgrades, resolving breaking changes, package conflicts and security concerns while maintaining a stable development environment. Worked directly with stakeholders to clarify requirements, discuss implementation details, resolve issues and ensure technical decisions aligned with the intended outcomes.",

    technologies: [
      "Markdown",
      "HTML/Jinja Macros",
      "Web Components",
      "YAML",
      "Node.js",
      "Astro",
      "Strapi",
      "GCP",
      "TypeScript",
      "JavaScript",
      "React",
      "CSS",
      "Sass",
      "npm",
      "Bash",
      "ESLint",
      "Monorepo Architecture",
      "Git",
      "Large-Scale Enterprise Codebase",
    ],

    approach: [
      {
        number: "01",
        title: "Understand the system",
        text: "I approach feature work as part of a larger system, considering how content, components, assets, dependencies and publishing workflows interact rather than treating each change in isolation.",
      },
      {
        number: "02",
        title: "Design for reuse",
        text: "I look for patterns that can be turned into reusable components and shared tooling, reducing duplication and making future content and feature work more consistent.",
      },
      {
        number: "03",
        title: "Improve without disrupting",
        text: "I balance new development with the realities of a production platform, making incremental improvements while protecting existing workflows and time-critical publishing needs.",
      },
      {
        number: "04",
        title: "Trace problems across boundaries",
        text: "When something fails, I follow the problem through the system - from content and application code to dependencies, build processes and cloud infrastructure - rather than treating the visible symptom as the whole problem.",
      },
    ],
  },

  {
    slug: "internal-project-tracking",
    number: "02",
    title: "Internal Project Tracking Tool",
    client: "Project for Google",
    type: "Enterprise Platform",
    dates: "Feb 2026 — Apr 2026",

    summary:
      "Internal project management platform supporting data-driven workflows, project tracking and operational visibility.",
    description:
      "Developed features across a Django and Vue.js application, working with state management, reusable components, business rules and complex interface behaviour.",
    role: "Software Engineer contributing across frontend development, application behaviour, state management and backend-integrated workflows.",

    technologies: [
      "Vue.js",
      "Vuex",
      "Vuetify",
      "Django",
      "Python",
      "MySQL",
      "Cypress",
      "Bash",
    ],

    approach: [
      {
        number: "01",
        title: "Understand the workflow",
        text: "I worked from the underlying business rules and team workflows to understand how data, user actions and application state needed to interact.",
      },
      {
        number: "02",
        title: "Keep UI and state aligned",
        text: "I used reusable Vue components and Vuex state management to create predictable, data-driven interfaces while keeping application behaviour consistent.",
      },
      {
        number: "03",
        title: "Treat edge cases as part of the design",
        text: "I implemented validation and complex UI behaviour around real business conditions, making sure controls responded correctly to different states and user actions.",
      },
      {
        number: "04",
        title: "Debug the system, not just the symptom",
        text: "I investigated Vue reactivity, component lifecycle and Cypress issues to understand the underlying cause of unexpected behaviour rather than relying on superficial fixes.",
      },
    ],
  },

  {
    slug: "ads-rewards-platform",
    number: "03",
    title: "Google Ads Rewards",
    client: "Project for Google",
    type: "Customer-facing Product",
    dates: "Mar 2025 — Dec 2025",
    url: "https://adsrewards.withgoogle.com/",

    summary:
      "Contributed to the frontend of Google Ads Rewards, building responsive, accessible and reusable user interfaces for a customer-facing product.",
    description:
      "My first professional software engineering project. I contributed primarily to frontend development, working within a Django and Python application and an enterprise CMS to translate product and UX requirements into production interfaces and content-driven experiences, while working within an established engineering team and codebase.",
    role: "Software Engineer contributing to customer-facing features, reusable UI components, accessibility, responsive behaviour and production improvements. Worked collaboratively with designers, engineers and stakeholders throughout the development process.",

    technologies: [
      "Django",
      "Python",
      "JavaScript",
      "TypeScript",
      "Enterprise CMS",
      "Google Glue",
      "Material Design Components",
      "HTML",
      "CSS",
      "Accessibility",
      "Responsive Design",
      "UI Components",
      "Playwright",
    ],

    approach: [
      {
        number: "01",
        title: "Learn from the existing system",
        text: "I learned to work within an established production codebase, understanding existing patterns, conventions and component structures before introducing new functionality.",
      },
      {
        number: "02",
        title: "Translate design into reality",
        text: "I worked from product and UX requirements to create responsive interfaces that balanced visual fidelity, usability and technical constraints.",
      },
      {
        number: "03",
        title: "Connect content and interface",
        text: "Working with an enterprise CMS gave me experience connecting content management workflows with frontend implementation and the customer-facing product experience.",
      },
      {
        number: "04",
        title: "Grow through production work",
        text: "Working on a live customer-facing product gave me practical experience with production code, team collaboration, debugging, reviews and iterative improvement.",
      },
    ],
  },
  {
    slug: "nc-news",
    number: "04",
    title: "NC News",
    client: "Independent Project",
    type: "Full-Stack Web Application",
    dates: "2024",
    url: "https://fe-nc-news-sigma.vercel.app/",

    summary:
      "Full-stack news platform combining a React frontend with a Node.js REST API and PostgreSQL database.",

    description:
      "Built a full-stack news application where users can browse and filter articles, vote on content, add and delete comments, and interact with different topics. Developed both the React frontend and the backend API, connecting the application to a PostgreSQL database.",

    role: "Full-Stack Software Engineer: designed and implemented the frontend application, REST API, database interactions and testing.",

    technologies: [
      "React",
      "React Router",
      "Context API",
      "Axios",
      "JavaScript",
      "Node.js",
      "Express.js",
      "REST API",
      "PostgreSQL",
      "SQL",
      "Jest",
      "Supertest",
      "Vercel",
    ],

    approach: [
      {
        number: "01",
        title: "Build across the stack",
        text: "Worked across the frontend, API and database layers, connecting user interactions in React to a RESTful backend and PostgreSQL data model.",
      },
      {
        number: "02",
        title: "Design around real user interactions",
        text: "Implemented article browsing, topic filtering, voting and commenting workflows, considering how state and API responses move through the application.",
      },
      {
        number: "03",
        title: "Structure a reusable API",
        text: "Built REST endpoints for articles, comments, users and topics, including filtering, sorting and resource-specific operations.",
      },
      {
        number: "04",
        title: "Test the system",
        text: "Used automated testing to verify API behaviour and support reliable changes across the backend.",
      },
    ],
  },
  {
    slug: "busk-a-move",
    number: "05",
    title: "Busk-A-Move",
    client: "Collaborative Project",
    type: "Full-Stack Mobile Application",
    dates: "2024",
    links: [
      {
        label: "Frontend",
        url: "https://github.com/filosoho/fe-busk-a-move",
      },
      {
        label: "Backend",
        url: "https://github.com/filosoho/be-busk-a-move",
      },
    ],

    summary:
      "Collaborative mobile application connecting musicians and performers with opportunities to busk, combining a React Native frontend with a Node.js REST API and PostgreSQL database.",

    description:
      "Built as a collaborative full-stack mobile application for discovering and organising busking opportunities. Developed features across the React Native mobile frontend and Node.js backend, integrating location, maps and calendar functionality with a PostgreSQL database.",

    role: "Software Engineer contributing to the mobile frontend, backend API, database interactions and testing within a collaborative development team.",

    technologies: [
      "React Native",
      "Expo",
      "React",
      "JavaScript",
      "Node.js",
      "Express.js",
      "REST API",
      "PostgreSQL",
      "SQL",
      "Axios",
      "React Navigation",
      "Maps",
      "Location",
      "Calendar",
      "Jest",
      "Supertest",
    ],

    approach: [
      {
        number: "01",
        title: "Build across the stack",
        text: "Contributed across the React Native mobile frontend, REST API and PostgreSQL database, connecting user interactions with backend services and persistent data.",
      },
      {
        number: "02",
        title: "Design for mobile interactions",
        text: "Built mobile interfaces and navigation flows around the needs of performers, incorporating device capabilities such as location, maps and calendar integration.",
      },
      {
        number: "03",
        title: "Work within a shared codebase",
        text: "Collaborated with other developers across separate frontend and backend repositories, following shared conventions and coordinating changes across the application stack.",
      },
      {
        number: "04",
        title: "Test the application",
        text: "Used Jest and Supertest to test application behaviour and API endpoints, supporting reliable development across the frontend and backend.",
      },
    ],
  },
];

export const otherProjects: OtherProject[] = [
  {
    title: "Flight App",
    type: "Cloud-Native / DevOps Project",
    technologies:
      "Python · Flask · Docker · Kubernetes · Kind · Kustomize · PostgreSQL · CI/CD",
    url: "https://github.com/filosoho/flight-app",
  },
  {
    title: "RetroByteLab",
    type: "Django E-commerce Application",
    technologies:
      "Python · Django · HTMX · JavaScript · SCSS · Supabase · PayPal",
    url: "https://github.com/filosoho/retrobytelab",
  },
  {
    title: "Autumn Chick Shopping App",
    type: "UI / UX Prototype",
    technologies: "Figma · UI Design · UX · Prototyping",
    url: "https://github.com/filosoho/UI-Prototype-Autumn-Chick-Shopping-App",
  },
  {
    title: "Linux Totoro Pomodoro Timer",
    type: "Desktop Application",
    technologies: "Python · Tkinter · Linux · Pygame",
    url: "https://github.com/filosoho/Linux-Totoro-Pomodoro-Timer",
  },
  {
    title: "CityBite Burgers",
    type: "Frontend Web Application",
    technologies: "HTML · SCSS · Sass · Netlify",
    url: "https://github.com/filosoho/CityBite-Burgers",
  },
];

export const portfolioHistory: PortfolioHistoryItem[] = [
  {
    number: "03",
    title: "Portfolio III",
    description:
      "A more focused portfolio built around software engineering, systems, product and UX thinking.",
    period: "2026",
    technologies: "Astro · TypeScript · CSS",
  },
  {
    number: "02",
    title: "Portfolio II",
    description:
      "An interactive portfolio exploring creative web development, 3D experiences and visual experimentation.",
    period: "2025-2026",
    technologies:
      "React · Three.js · React Three Fiber · GSAP · Tailwind CSS · Vite",
    url: "https://filosoho.space/",
  },
  {
    number: "01",
    title: "Portfolio I",
    description:
      "A creative portfolio bringing together digital illustration, animation and early software projects.",
    period: "2024-2025",
    technologies: "HTML · JavaScript · CSS",
    url: "https://filosohospace.netlify.app/",
  },
];
