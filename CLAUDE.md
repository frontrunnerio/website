# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Static marketing site for **frontrunner.io** (a DevSecOps / CI/CD consultancy). Built on **Astro 5** + **Tailwind**, derived from the AstroWind template. Site copy is primarily in **German** — match that tone when editing copy. Output is `output: 'static'`; deploys automatically to **Vercel** on push to `main`.

## Commands

| Task                       | Command                                         |
| -------------------------- | ----------------------------------------------- |
| Dev server (`:4321`)       | `npm run dev`                                   |
| Production build → `dist/` | `npm run build`                                 |
| Preview built site         | `npm run preview`                               |
| Full check (CI parity)     | `npm run check`                                 |
| Auto-fix lint + format     | `npm run fix`                                   |
| Single check phase         | `npm run check:astro` / `:eslint` / `:prettier` |

`npm run check` runs `astro check` (type/diagnostics on `.astro`), then ESLint, then Prettier — all three must pass.

## Architecture

### AstroWind config integration (the non-obvious part)

`vendor/integration/` is a **local Astro integration**, wired in `astro.config.ts` as `astrowind({ config: './src/config.yaml' })`. At `astro:config:setup` it:

1. Reads `src/config.yaml` and produces typed objects (`SITE`, `I18N`, `METADATA`, `APP_BLOG`, `UI`, `ANALYTICS`).
2. Exposes them via the **virtual module `astrowind:config`** — components import config with `import { SITE, METADATA } from 'astrowind:config'`.
3. At `astro:build:done`, rewrites `dist/robots.txt` to inject the generated `sitemap-index.xml` URL.

When changing site-level behavior (title template, base URL, blog routing, theme defaults, OG defaults), edit `src/config.yaml` — **not** scattered component props. `astro.config.ts`'s top-level `site:` key is set independently and must stay in sync with `config.yaml`'s `site.site`.

### Path alias

`~/*` → `src/*` (defined in both `tsconfig.json` and Vite alias in `astro.config.ts`). Always import with `~/...`.

### Page composition

Pages in `src/pages/` are thin shells that compose **widgets** from `src/components/widgets/` (Hero, Features, Steps, Content, FAQs, CallToAction, etc.) inside a layout (`PageLayout` for normal pages, `LandingLayout` for landings, `MarkdownLayout` for `.md`/`.mdx`). Widget props are typed in `src/types.d.ts`. To add a section, prefer reusing an existing widget over building new markup.

### Blog (currently disabled)

Routes exist (`src/pages/[...blog]/`) and content collections are defined (`src/content/config.ts` loads from `src/data/post/`), but `apps.blog.isEnabled: false` in `src/config.yaml` keeps it off. Sample posts in `src/data/post/` are template leftovers. Re-enable via the YAML flag rather than reintroducing routes.

### Permalink helpers

`src/utils/permalinks.ts` (`getPermalink`, `getHomePermalink`, `getBlogPermalink`, `getAsset`) honor `SITE.base` and `SITE.trailingSlash` — use these instead of hardcoding URLs, especially in `src/navigation.ts`.

### Trailing slashes & Vercel

`SITE.trailingSlash: false` and `vercel.json` sets `cleanUrls: true` + `trailingSlash: false`. Don't add trailing slashes to internal hrefs.

### Server route — `/api/contact`

`src/pages/api/contact.ts` is the **only on-demand-rendered route** (`export const prerender = false`). It runs as a Vercel serverless function via the `@astrojs/vercel` adapter and emails contact-form submissions through Resend (`RESEND_API_KEY` env var). Every other page must stay prerendered — don't add `prerender = false` elsewhere unless you intend to ship another function.

### Markdown pipeline

`astro.config.ts` registers custom remark/rehype plugins from `src/utils/frontmatter.ts`: reading-time computation, responsive table wrapping, and lazy-loading attrs on images. Markdown content in `src/data/post/` and the standalone pages (`imprint.md`, `privacy.md`, `terms.md`) flow through these.

### Icons

`astro-icon` is configured to bundle **all `tabler:*` icons** plus a fixed allowlist of `flat-color-icons:*`. New `tabler:*` icons work without config changes; new `flat-color-icons` must be added to the `include` array in `astro.config.ts`.

## Conventions

- **Editing site copy**: keep German voice; the site uses informal-but-professional "Sie"-form for prospects. Don't switch to English unless the user asks.
- **No new files when an existing widget fits.** Most homepage edits are prop changes in `src/pages/index.astro`.
- After non-trivial changes, run `npm run check` before claiming done — the Vercel build will fail on the same gates.
