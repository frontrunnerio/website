import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [],
  actions: [{ text: 'Kontakt', href: 'mailto:andreas.boehrnsen@frontrunner.io', target: '_blank' }],
};

export const footerData = {
  links: [
  ],
  secondaryLinks: [
    { text: 'Imprint', href: getPermalink('/imprint') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/andreasboehrnsen/' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/frontrunnerio' },
  ],
  footNote: `
    Copyright © 2026 Frontrunner IO · All rights reserved.
  `,
};
