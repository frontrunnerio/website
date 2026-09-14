import { getPermalink } from "./utils/permalinks";
import { localizedPath, t, type Lang } from "./i18n/utils";
import { BOOKING_URL } from "./data/site";

export const getHeaderData = (lang: Lang) => ({
  links: [
    {
      text: t(lang, "nav.services"),
      href: getPermalink(localizedPath(lang, "/services")),
    },
    {
      text: t(lang, "nav.about"),
      href: getPermalink(localizedPath(lang, "/about")),
    },
    {
      text: t(lang, "nav.contact"),
      href: getPermalink(localizedPath(lang, "/contact")),
    },
  ],
  actions: [
    {
      text: t(lang, "nav.book"),
      href: BOOKING_URL,
      target: "_blank" as const,
      icon: "tabler:calendar",
    },
  ],
});

export const getFooterData = (lang: Lang) => ({
  links: [
    {
      title: t(lang, "nav.services"),
      links: [
        {
          text: "CI/CD Assessment",
          href:
            getPermalink(localizedPath(lang, "/services")) + "#cicd-assessment",
        },
        {
          text: "Infrastructure as Code",
          href:
            getPermalink(localizedPath(lang, "/services")) +
            "#infrastructure-as-code",
        },
        {
          text: "Container",
          href:
            getPermalink(localizedPath(lang, "/services")) +
            "#containerization",
        },
        {
          text: "Review Apps",
          href: getPermalink(localizedPath(lang, "/services")) + "#review-apps",
        },
        {
          text: "Windows → Linux",
          href:
            getPermalink(localizedPath(lang, "/services")) +
            "#windows-to-linux",
        },
        {
          text: "Oracle / MSSQL → PostgreSQL",
          href:
            getPermalink(localizedPath(lang, "/services")) +
            "#database-migration",
        },
        {
          text: "Cloud Migration (EU)",
          href:
            getPermalink(localizedPath(lang, "/services")) + "#cloud-migration",
        },
      ],
    },
    {
      title: "Frontrunner IO",
      links: [
        {
          text: t(lang, "nav.about"),
          href: getPermalink(localizedPath(lang, "/about")),
        },
        {
          text: t(lang, "nav.contact"),
          href: getPermalink(localizedPath(lang, "/contact")),
        },
        { text: t(lang, "nav.book"), href: BOOKING_URL },
      ],
    },
  ],
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
