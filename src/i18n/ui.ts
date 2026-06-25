export const ui = {
  en: {
    'nav.contact': 'Contact',
    'nav.blog': 'Blog',
    'footer.imprint': 'Imprint',
    'footer.privacy': 'Privacy Policy',
    'footer.note': 'Copyright © 2026 Frontrunner IO · All rights reserved.',
    'switcher.aria': 'Language',
    'switcher.en': 'EN',
    'switcher.de': 'DE',
    '404.title': "Sorry, we couldn't find this page.",
    '404.body': "But don't worry, you can find plenty of other things on our homepage.",
    '404.cta': 'Back to homepage',
    'cta.requestFree': 'Request a free intro',
  },
  de: {
    'nav.contact': 'Kontakt',
    'nav.blog': 'Blog',
    'footer.imprint': 'Impressum',
    'footer.privacy': 'Datenschutzerklärung',
    'footer.note': 'Copyright © 2026 Frontrunner IO · Alle Rechte vorbehalten.',
    'switcher.aria': 'Sprache',
    'switcher.en': 'EN',
    'switcher.de': 'DE',
    '404.title': 'Diese Seite konnten wir leider nicht finden.',
    '404.body': 'Keine Sorge — auf unserer Startseite finden Sie viele andere Inhalte.',
    '404.cta': 'Zurück zur Startseite',
    'cta.requestFree': 'Kostenlos anfragen',
  },
} as const;

export type UiKey = keyof (typeof ui)['en'];
