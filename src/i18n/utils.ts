import type { AstroGlobal } from 'astro';
import { ui, type UiKey } from './ui';

export const defaultLang = 'de' as const;
export type Lang = keyof typeof ui;

export function getLang(Astro: AstroGlobal): Lang {
  const locale = Astro.currentLocale as Lang | undefined;
  return locale && locale in ui ? locale : defaultLang;
}

export function useTranslations(lang: Lang) {
  return (key: UiKey): string => ui[lang][key] ?? ui[defaultLang][key];
}

export function t(lang: Lang, key: UiKey): string {
  return ui[lang][key] ?? ui[defaultLang][key];
}

// Map current path to its mirror on the target locale.
//   ('/about',     'en') -> '/en/about'
//   ('/en/about',  'de') -> '/about'
//   ('/',          'en') -> '/en'
//   ('/en',        'de') -> '/'
export function getMirrorPath(currentPath: string, target: Lang): string {
  const stripped = currentPath.replace(/^\/en(?=\/|$)/, '') || '/';
  if (target === defaultLang) return stripped;
  return stripped === '/' ? '/en' : `/en${stripped}`;
}

// Prefix a path (without leading locale) with the locale segment if not default.
export function localizedPath(lang: Lang, path: string): string {
  const normalised = path.startsWith('/') ? path : `/${path}`;
  if (lang === defaultLang) return normalised;
  return normalised === '/' ? `/${lang}` : `/${lang}${normalised}`;
}
