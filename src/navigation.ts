import { getPermalink } from "./utils/permalinks";

export const headerData = {
  links: [],
  actions: [{ text: "Kontakt", href: getPermalink("/contact") }],
};

export const footerData = {
  links: [],
  secondaryLinks: [
    { text: "Kontakt", href: getPermalink("/contact") },
    { text: "Impressum", href: getPermalink("/imprint") },
    { text: "Datenschutzerklärung", href: getPermalink("/privacy") },
  ],
  socialLinks: [
    {
      ariaLabel: "LinkedIn",
      icon: "tabler:brand-linkedin",
      href: "https://www.linkedin.com/in/andreasboehrnsen/",
    },
    {
      ariaLabel: "Github",
      icon: "tabler:brand-github",
      href: "https://github.com/frontrunnerio",
    },
  ],
  footNote: `
    Copyright © 2026 Frontrunner IO · All rights reserved.
  `,
};
