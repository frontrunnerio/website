# frontrunner.io — Corporate Website

Corporate website for **[frontrunner.io](https://frontrunner.io)** — DevSecOps, CI/CD and automation consulting for fast, secure, and efficient software delivery.

Built with **[Astro 5](https://astro.build/)** + **[Tailwind CSS](https://tailwindcss.com/)** on top of the [AstroWind](https://github.com/arthelokyo/astrowind) template.

## Getting Started

### Prerequisites

- Node.js `^18.17.1 || ^20.3.0 || >= 21.0.0`

### Install dependencies

```shell
npm install
```

### Commands

All commands are run from the root of the project:

| Command             | Action                                             |
| :------------------ | :------------------------------------------------- |
| `npm run dev`       | Starts local dev server at `localhost:4321`        |
| `npm run build`     | Build production site to `./dist/`                 |
| `npm run preview`   | Preview the production build locally               |
| `npm run check`     | Check for Astro, ESLint and Prettier errors        |
| `npm run fix`       | Auto-fix ESLint and Prettier issues                |

## Project Structure

```
/
├── public/
│   ├── _headers
│   └── robots.txt
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── styles/
│   │       └── tailwind.css
│   ├── components/
│   │   └── widgets/
│   ├── layouts/
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   └── 404.astro
│   ├── config.yaml       # Site-wide configuration
│   └── navigation.js
├── astro.config.ts
├── tailwind.config.js
└── package.json
```

## Configuration

Edit `src/config.yaml` to update site metadata, SEO settings, and feature flags:

```yaml
site:
  name: Frontrunner IO
  site: 'https://frontrunner.io'

metadata:
  title:
    default: 'frontrunner.io'
    template: '%s — frontrunner.io'
  description: 'DevSecOps, CI/CD und Automation für schnelle, sichere und effiziente Software-Delivery'
```

## Deploy

The site is deployed to **Vercel**. Pushes to `main` trigger automatic deployments.

To build manually:

```shell
npm run build
```

The output in `./dist/` can be deployed to any static hosting provider.

## License

MIT
