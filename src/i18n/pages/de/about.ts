export const content = {
  metadata: {
    title: 'Über uns',
    description:
      'Frontrunner IO ist eine auf DevSecOps und Software-Delivery spezialisierte Beratung aus Berlin.',
  },
  hero: {
    tagline: 'Über Frontrunner IO',
    titleLine1: 'DevSecOps-Expertise',
    titleLine2: 'aus der Praxis.',
    subtitle:
      'Frontrunner IO ist eine auf DevSecOps und Software-Delivery spezialisierte Beratung aus Berlin. Wir helfen Unternehmen, ihre Entwicklungsprozesse schneller, sicherer und nachvollziehbarer zu machen — mit konkreten Maßnahmen statt abstrakten Konzepten.',
    image: { src: '~/assets/images/hero-image.jpg', alt: 'Frontrunner IO' },
  },
  principles: {
    title: 'Unsere Prinzipien',
    subtitle: 'Wie wir denken, bestimmt, wie wir arbeiten.',
    items: [
      {
        title: 'Klarheit statt Komplexität',
        description:
          'Wir vereinfachen, wo es möglich ist. Klare Prozesse, nachvollziehbare Strukturen und konsolidierte Plattformen schaffen die Grundlage für schnelle und sichere Delivery.',
      },
      {
        title: 'Automatisierung statt manueller Arbeit',
        description:
          'Manuelle Schritte sind Fehlerquellen und Engpässe. Wir automatisieren konsequent — von Pipelines über Security Scans bis hin zu Compliance-Nachweisen.',
      },
      {
        title: 'Sicherheit von Anfang an',
        description:
          'Security ist kein nachgelagertes Thema. Wir integrieren sie von Beginn an in Prozesse und Pipelines — prüfbar, auditierbar und ohne Mehraufwand für die Entwicklung.',
      },
      {
        title: 'Nachhaltiger Wissenstransfer',
        description:
          'Wir liefern keine Black-Box-Lösungen. Unser Ziel ist es, Ihr Team zu befähigen, Verbesserungen eigenständig weiterzuführen und kontinuierlich zu verbessern.',
      },
    ],
  },
  expertise: {
    title: 'Womit wir uns auskennen',
    subtitle:
      'Unsere Kernkompetenzen liegen an der Schnittstelle von Development, Security und Operations.',
    items: [
      {
        title: 'DevSecOps & CI/CD',
        description:
          'Aufbau und Optimierung von Pipelines, die Geschwindigkeit und Sicherheit vereinen — von der ersten Commit bis zum Produktivdeployment.',
        icon: 'tabler:rocket',
      },
      {
        title: 'GitLab',
        description:
          'Implementierung, Migration und Optimierung von GitLab als zentrale Entwicklungsplattform — inkl. Security Scans, IaC-Integration und Compliance-Konfiguration.',
        icon: 'tabler:brand-gitlab',
      },
      {
        title: 'Plattform-Konsolidierung',
        description:
          'Migration von fragmentierten Toolchains (Jenkins, Azure DevOps, GitHub u. a.) zu einer einheitlichen, wartbaren Plattform.',
        icon: 'tabler:layout-grid',
      },
      {
        title: 'Regulierte Branchen',
        description:
          'Erfahrung mit Compliance-Anforderungen aus Finance, Insurance und anderen regulierten Bereichen — DORA, ISO und branchenspezifische Standards.',
        icon: 'tabler:scale',
      },
      {
        title: 'Infrastructure as Code',
        description:
          'Einbindung von IaC in den Delivery-Prozess für reproduzierbare, versionierte und auditierbare Deployments.',
        icon: 'tabler:server',
      },
      {
        title: 'Coaching & Enablement',
        description:
          'Hands-on-Coaching für Entwickler- und Plattform-Teams — damit das Wissen im Unternehmen bleibt und nicht mit dem Projekt endet.',
        icon: 'tabler:school',
      },
    ],
  },
  why: {
    title: 'Warum Frontrunner IO',
    subtitle: 'Was uns von klassischer Beratung unterscheidet.',
    items: [
      {
        title: 'Hands-on statt Konzeptpapier',
        description:
          'Wir arbeiten direkt mit Ihrem Team — nicht nur in Workshops und Präsentationen. Ergebnisse entstehen durch Umsetzung, nicht durch Folien.',
        icon: 'tabler:tools',
      },
      {
        title: 'Modular und skalierbar',
        description:
          'Ob schnelles Assessment, punktuelle Unterstützung oder vollständige Transformation — unsere Leistungen passen sich Ihrer Situation an.',
        icon: 'tabler:puzzle',
      },
      {
        title: 'Spezialisiert, nicht generalistisch',
        description:
          'DevSecOps und Software-Delivery ist unser Kernthema. Kein Bauchladen-Ansatz — sondern tiefes Fachwissen in einem klar abgegrenzten Bereich.',
        icon: 'tabler:target',
      },
    ],
    callToAction: { text: 'Jetzt Kontakt aufnehmen', href: '/de/contact' },
  },
  cta: {
    primaryCta: { text: 'Kostenlos anfragen', href: 'mailto:info@frontrunner.io', target: '_blank' as const },
    title: 'Bereit für den nächsten Schritt?',
    subtitle:
      'Lassen Sie uns gemeinsam herausfinden, wo der größte Hebel in Ihrer Software-Delivery liegt.',
  },
};
