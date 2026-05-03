import { getBlogPermalink, getPermalink } from "./utils/permalinks";
import { localizedPath, t, type Lang } from "./i18n/utils";

export const getHeaderData = (lang: Lang) => ({
  links:
    lang === "de"
      ? [
          {
            text: t(lang, "nav.blog"),
            href: getBlogPermalink(),
          },
        ]
      : [],
  actions: [
    {
      text: t(lang, "nav.contact"),
      href: "mailto:info@frontrunner.io",
      target: "_blank" as const,
    },
  ],
});

export const getFooterData = (lang: Lang) => ({
  links: [],
  secondaryLinks: [
    ...(lang === "de"
      ? [
          {
            text: t(lang, "nav.blog"),
            href: getBlogPermalink(),
          },
        ]
      : []),
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
