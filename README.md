# frontrunner.io — Corporate Website

The website for **[frontrunner.io](https://frontrunner.io)** — we help companies ship faster, stay secure, and automate the boring parts.

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
| `npm run fix`       | Auto-fix ESLint and Prettier issues (treat yourself) |

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
│   │   ├── index.astro       # where first impressions are made
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   └── 404.astro         # hopefully rarely visited
│   ├── config.yaml           # site-wide configuration
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

Pushes to `main` deploy automatically to **Vercel**. No manual steps, no drama.

To build manually:

```shell
npm run build
```

Output lands in `./dist/` and can be deployed anywhere that serves static files.

## License

MIT
