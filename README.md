# Filosoho Portfolio

Personal portfolio website for Anna Bedia — Software Engineer with a background in digital design, systems, product and UX thinking.

The site presents selected engineering work, professional experience, creative work and technical skills in a simple, editorial-style single-page portfolio.

## Tech Stack

- **Astro** — Static site generation and component architecture
- **TypeScript** — Type-safe project data and development
- **CSS** — Custom responsive styling and layout
- **npm** — Package management and development scripts

## Features

- Responsive single-page portfolio
- Component-based Astro architecture
- Data-driven project content
- Dedicated project detail sections
- Selected engineering work and additional projects
- Professional experience and portfolio history
- Responsive navigation
- Accessible semantic HTML
- External project and repository links
- Optimised static output

## Project Structure

```text
filosoho-portfolio/
├── public/
│   └── ...
├── src/
│   ├── components/
│   │   ├── About.astro
│   │   ├── Approach.astro
│   │   ├── Header.astro
│   │   ├── OtherWork.astro
│   │   ├── PortfolioEvolution.astro
│   │   ├── SelectedWork.astro
│   │   └── ...
│   ├── data/
│   │   └── projects.ts
│   ├── layouts/
│   │   └── ...
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── ...
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── README.md
```

The portfolio content is separated from the presentation layer where practical. Project information, technologies, descriptions and approaches are maintained in the data files and rendered by reusable Astro components.

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed.

Check your versions:

```bash
node --version
npm --version
```

### Installation

Clone the repository and move into the project directory:

```bash
git clone https://github.com/filosoho/Portfolio-III.git
cd filosoho-portfolio
```

Install dependencies:

```bash
npm install
```

### Development

Start the Astro development server:

```bash
npm run dev
```

The site will normally be available at:

```text
http://localhost:4321
```

If Astro reports that a development server is already running, either stop the existing process or use:

```bash
npx astro dev --force
```

To stop an Astro development server:

```bash
npx astro dev stop
```

Alternatively, if the server is running in another terminal, `Ctrl + C` will stop it.

## Building for Production

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Updating Portfolio Content

Most portfolio content is maintained in the data layer rather than directly inside the page components.

For example, selected projects contain information such as:

- Project title
- Client
- Project type
- Dates
- Summary
- Description
- Role
- Technologies
- Project links
- Approach

This makes it possible to update project content without duplicating presentation markup.

A project can contain a single external URL:

```ts
url: "https://example.com",
```

or multiple links:

```ts
links: [
  {
    label: "Frontend",
    url: "https://github.com/example/frontend",
  },
  {
    label: "Backend",
    url: "https://github.com/example/backend",
  },
],
```

## Development Principles

The portfolio is intentionally kept relatively lightweight.

The main goals are:

- **Clarity** — content should be easy to understand and navigate.
- **Reusability** — repeated UI patterns should be represented by reusable components.
- **Separation of concerns** — content and presentation should remain reasonably independent.
- **Accessibility** — semantic HTML, meaningful links and usable responsive layouts.
- **Maintainability** — avoid unnecessary dependencies and complexity.
- **Performance** — take advantage of Astro's static-first architecture.
- **Progressive enhancement** — use JavaScript where it adds value rather than making it a requirement for basic content.

## Design

The visual direction is intentionally minimal and editorial.

The portfolio uses:

- Asymmetric layouts
- Strong typography
- Generous whitespace
- Clear hierarchy
- Responsive layouts
- Restrained visual effects
- Project-focused content

The design aims to remain useful and visually relevant over time rather than following a short-lived visual trend.

## Deployment

The project is designed to be built as a static Astro site and can be deployed to a static hosting platform such as Vercel, Netlify or another compatible hosting service.

The production build is generated with:

```bash
npm run build
```

The resulting output can then be deployed according to the hosting provider's Astro configuration.

## Previous Portfolio

This project is the third iteration of the Filosoho portfolio.

Previous versions explored different approaches, including React, Three.js, React Three Fiber, GSAP and Tailwind CSS.

The current version deliberately takes a simpler approach, focusing on content, typography, layout and maintainable frontend architecture.

## Author

**Anna Bedia**

Software Engineer | Systems, Product & UX Thinking | Digital Design

- GitHub: [@filosoho](https://github.com/filosoho)
- Portfolio: [Filosoho](https://filosoho.space)

## License

This repository represents a personal portfolio project.

The source code may be used as a reference for learning and development, but portfolio content, written copy, artwork, illustrations and other original creative assets remain the property of their respective owners.
