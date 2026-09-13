import { getPermalink } from "./utils/permalinks";
import { localizedPath, t, type Lang } from "./i18n/utils";

export const getHeaderData = (lang: Lang) => ({
  links: [
    {
      text: lang === "en" ? "Services" : "Leistungen",
      href: lang === "en" ? "/en/services" : "/leistungen",
    },
    {
      text: lang === "en" ? "About Frontrunner IO" : "Über Frontrunner IO",
      href: localizedPath(lang, "/about"),
    },
  ],
  actions: [
    {
      text: lang === "en" ? "Request a conversation" : "Erstgespräch anfragen",
      href: localizedPath(lang, "/contact"),
    },
  ],
});

export const getFooterData = (lang: Lang) => ({
  links: [],
  secondaryLinks: [
    {
      text: t(lang, "footer.imprint"),
      href: getPermalink(localizedPath(lang, "/imprint")),
    },
    {
      text: t(lang, "footer.privacy"),
      href: getPermalink(localizedPath(lang, "/privacy")),
    },
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
  footNote: t(lang, "footer.note"),
});
