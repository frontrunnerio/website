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
      icon: "tabler:calendar",
    },
  ],
});

export const getFooterData = (lang: Lang) => {
  const servicesPath = getPermalink(localizedPath(lang, "/services"));
  return {
    links: [
      {
        title: t(lang, "nav.services"),
        links: [
          {
            text: t(lang, "svc.iac"),
            href: servicesPath + "#infrastructure-as-code",
          },
          {
            text: t(lang, "svc.containers"),
            href: servicesPath + "#containerization",
          },
          {
            text: t(lang, "svc.linux"),
            href: servicesPath + "#windows-to-linux",
          },
          {
            text: t(lang, "svc.cloud"),
            href: servicesPath + "#cloud-migration",
          },
          {
            text: t(lang, "svc.postgres"),
            href: servicesPath + "#database-migration",
          },
          {
            text: t(lang, "svc.reviewApps"),
            href: servicesPath + "#review-apps",
          },
          {
            text: t(lang, "svc.check"),
            href: servicesPath + "#cicd-assessment",
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
  };
};
