export const content = {
  metadata: {
    title:
      'Frontrunner IO — DevSecOps, CI/CD und Automation für schnelle, sichere und effiziente Software-Delivery',
    ignoreTitleTemplate: true,
    description:
      'DevSecOps, CI/CD und Automation für schnelle, sichere und effiziente Software-Delivery.',
  },
  hero: {
    tagline: '',
    title: 'Ship faster.<br> Stay secure. Automate everything.',
    subtitle:
      'Wir helfen Unternehmen, Software schneller und sicherer auszuliefern — mit DevSecOps, Automatisierung und Prozessen, die tatsächlich funktionieren.',
    primaryCta: { text: 'Kostenlos anfragen', href: 'mailto:info@frontrunner.io', target: '_blank' as const },
    secondaryCta: { text: 'Mehr erfahren', href: '#problem-statement' },
    image: { src: '~/assets/images/hero-image.jpg', alt: 'Frontrunner IO Hero Image' },
  },
  philosophyNote: {
    title: 'Philosophie:',
    description:
      'Klarheit statt Komplexität. Automatisierung statt manueller Arbeit. Sicherheit von Anfang an.',
  },
  problems: {
    id: 'problem-statement',
    tagline: 'Die Realität in vielen Unternehmen',
    title: 'Software-Delivery ist langsamer, riskanter und frustrierender als nötig',
    subtitle:
      'Steigende Sicherheitsanforderungen, ein Sammelsurium aus Tools und manuelle Prozesse, die eigentlich längst automatisiert gehören — viele Teams wissen, dass da mehr geht. Die Frage ist nur: Wo anfangen?',
    items: [
      {
        title: 'Manuelle Prozesse verlangsamen alles',
        description:
          'Releases, die von manuellen Schritten abhängen, sind fehleranfällig, langsam und nicht skalierbar. Irgendwann macht genau das der Fehler, den noch niemand dokumentiert hat.',
        icon: 'tabler:hourglass-high',
      },
      {
        title: 'Tool-Chaos statt klarer Plattform',
        description:
          'Zehn Tools, fünf Integrationen, drei Slack-Kanäle für Alerts — und trotzdem weiß niemand auf Anhieb, was gerade wo passiert. Das kostet Zeit und Nerven.',
        icon: 'tabler:apps',
      },
      {
        title: 'Sicherheit kommt immer zu spät',
        description:
          'Security-Checks kurz vor dem Release führen zu Verzögerungen oder — schlimmer — werden übersprungen. Wer Sicherheit erst am Ende einbaut, zahlt doppelt.',
        icon: 'tabler:shield-half',
      },
      {
        title: 'Langsame Pipelines kosten mehr als nur Zeit',
        description:
          'Wenn ein Build 30 Minuten läuft und am Ende nur ein generischer Fehler zurückkommt, verlieren Entwickler Fokus und Flow. Schnelles, klares Feedback ist kein Luxus — es ist der Unterschied zwischen produktivem Arbeiten und frustriertem Warten.',
        icon: 'tabler:mood-sad',
      },
      {
        title: 'Compliance erzeugt unnötige Reibung',
        description:
          'DORA, ISO, BSI — regulatorische Anforderungen müssen kein Bremsklotz sein. Werden sie von Anfang an mitgedacht, lassen sie sich in bestehende Prozesse integrieren, ohne alles zu verlangsamen.',
        icon: 'tabler:scale',
      },
      {
        title: 'Niemand weiß genau, was wann passiert ist',
        description:
          'Fehlende Nachvollziehbarkeit ist im Alltag nervig — beim Audit wird sie zum Problem. Wer nicht zeigen kann, was wann von wem geändert wurde, steht schlecht da.',
        icon: 'tabler:route-x',
      },
    ],
  },
  services: {
    tagline: 'Wir bieten',
    title: 'Unsere Leistungen',
    blocks: [
      {
        contentTitle: 'DevSecOps Assessment',
        contentCaption: 'Der schnellste Weg zu Klarheit',
        image: { src: '~/assets/images/service-assessment.jpg', alt: 'Assessment Image' },
        items: [
          {
            title: 'Ein ehrlicher Blick auf Ihre Pipeline',
            description:
              'Wir schauen uns an, was wirklich passiert — von Code bis Deployment. Inklusive Prozesse, Tools und Verantwortlichkeiten.',
          },
          {
            title: 'Risiken und Engpässe sichtbar machen',
            description:
              'Sicherheitslücken, manuelle Bottlenecks, unnötige Reibung — wir benennen klar, was Sie ausbremst.',
          },
          {
            title: 'Keine Theorie, sondern konkrete Maßnahmen',
            description:
              'Sie bekommen keine 50-seitige Präsentation, sondern eine priorisierte Liste: Was zuerst? Was bringt am meisten?',
          },
          {
            title: 'Eine klare Roadmap in wenigen Tagen',
            description:
              'Realistisch, strukturiert und als direkte Grundlage für die nächsten Schritte — nicht als Abschluss-Dokument, das danach im Ordner landet.',
          },
        ],
      },
      {
        contentTitle: 'GitLab Implementation & Optimization',
        contentCaption: 'Alles in einer Plattform',
        image: { src: '~/assets/images/service-gitlab.jpg', alt: 'Gitlab Image' },
        items: [
          {
            title: 'GitLab aufbauen oder gezielt weiterentwickeln',
            description:
              'Ob Neueinrichtung oder Optimierung einer bestehenden Instanz — wir machen GitLab zur zentralen Plattform für Development, Security und Operations.',
          },
          {
            title: 'CI/CD Pipelines, die Entwickler nicht ausbremsen',
            description:
              'Schnelle, automatisierte Pipelines mit integrierten Security-Scans. Kurze Feedbackzyklen halten Entwickler im Flow — statt sie 20 Minuten auf ein Ergebnis warten zu lassen.',
          },
          {
            title: 'Rechte- und Rollenmodelle, die Audits standhalten',
            description:
              'Klare Zugriffskonzepte für Teams, die nachvollziehbar, sicher und compliance-ready sind.',
          },
          {
            title: 'Infrastructure as Code in den Delivery-Prozess integrieren',
            description:
              'Infrastruktur wird versioniert, reviewbar und reproduzierbar — genauso wie der Anwendungscode.',
          },
        ],
      },
      {
        contentTitle: 'Migration & Konsolidierung',
        contentCaption: 'Raus aus dem Tool-Chaos',
        image: { src: '~/assets/images/service-consolidation.jpg', alt: 'Consolidation Image' },
        items: [
          {
            title: 'Migration von Jenkins, Azure DevOps, GitHub & Co.',
            description:
              'Strukturierte Überführung in eine konsolidierte Plattform — ohne laufende Betrieb zu unterbrechen.',
          },
          {
            title: 'Toolchain-Wildwuchs reduzieren',
            description:
              'Weniger Tools, weniger Schnittstellen, weniger Dinge, die kaputt gehen können. Klingt simpel, verändert aber den Alltag spürbar.',
          },
          {
            title: 'Weniger Wartung, mehr Entwicklung',
            description:
              'Wer weniger Zeit für Plattformpflege aufwendet, kann mehr Zeit in tatsächliche Produktentwicklung stecken.',
          },
          {
            title: 'Compliance nicht vergessen',
            description:
              'Jede Migration berücksichtigt regulatorische Anforderungen und Auditierbarkeit von Anfang an — nicht als Nachgedanke.',
          },
        ],
      },
      {
        contentTitle: 'Begleitung & Coaching',
        contentCaption: 'Nicht nur Konzepte — echte Umsetzung',
        image: { src: '~/assets/images/service-coaching.jpg', alt: 'Coaching Image' },
        items: [
          {
            title: 'Direkte Mitarbeit statt Folien-Beratung',
            description:
              'Wir arbeiten hands-on in Ihren Projekten mit — weil Ergebnisse wichtiger sind als Konzepte.',
          },
          {
            title: 'Coaching für Entwickler- und Plattform-Teams',
            description:
              'Best Practices, die im echten Kontext Ihres Teams vermittelt werden. Damit Ihr Team danach eigenständig weiterarbeiten kann.',
          },
          {
            title: 'DevSecOps als Haltung, nicht als Prozess',
            description:
              'Sicherheit und Geschwindigkeit gehören zusammen — wir helfen Teams, das nicht als Widerspruch zu sehen.',
          },
          {
            title: 'Verbesserungen, die bleiben',
            description:
              'Unser Ziel ist nicht, wiederzukommen. Wir arbeiten so, dass Ihr Team danach besser aufgestellt ist als vorher.',
          },
        ],
      },
    ],
  },
  modularNote: {
    title: 'Alle Leistungen sind modular kombinierbar:',
    description: 'Vom schnellen Assessment bis zur vollständigen Transformation',
  },
  steps: {
    title: 'Wie wir arbeiten',
    image: { src: '~/assets/images/how-we-work.jpg', alt: 'Steps image' },
    items: [
      {
        title: 'Schritt 1: <span class="font-medium">Assessment</span>',
        description:
          'Wir schauen uns Ihre aktuelle Situation an — Prozesse, Tools, Verantwortlichkeiten und Risiken. Ohne Vorannahmen, ohne voreilige Lösungsvorschläge.',
        icon: 'tabler:search',
      },
      {
        title: 'Schritt 2: <span class="font-medium">Roadmap</span>',
        description:
          'Aus den Erkenntnissen wird eine priorisierte Maßnahmenliste. Klar, konkret und so aufgebaut, dass Sie sofort damit arbeiten können.',
        icon: 'tabler:route',
      },
      {
        title: 'Schritt 3: <span class="font-medium">Implementation</span>',
        description:
          'Auf Wunsch setzen wir die Maßnahmen gemeinsam mit Ihrem Team um — pragmatisch und so, dass der laufende Betrieb nicht leidet.',
        icon: 'tabler:tools',
      },
      {
        title: 'Schritt 4: <span class="font-medium">Enablement</span>',
        description:
          'Am Ende steht nicht Abhängigkeit, sondern Eigenständigkeit. Ihr Team bekommt das Wissen, um die Verbesserungen selbst weiterzuführen.',
        icon: 'tabler:school',
      },
    ],
  },
  faqs: {
    tagline: 'FAQs',
    title: 'Häufig gestellte Fragen',
    subtitle: 'Antworten auf die Fragen, die wir am häufigsten hören.',
    items: [
      {
        title: 'Ist das für unser Unternehmen überhaupt relevant?',
        description:
          'Wenn Sie Software entwickeln, regelmäßig deployen und gleichzeitig mit steigenden Sicherheits- oder Compliance-Anforderungen zu tun haben — ja. Besonders im regulierten Umfeld (z. B. Finance oder Insurance) ist der Hebel hier oft besonders groß.',
      },
      {
        title: 'Wie schnell sehen wir erste Ergebnisse?',
        description:
          'Erste spürbare Verbesserungen sind häufig nach wenigen Wochen da — vor allem durch Automatisierung und optimierte Pipelines. Das Assessment liefert Ihnen innerhalb weniger Tage eine solide Grundlage für konkrete nächste Schritte.',
      },
      {
        title: 'Müssen wir auf GitLab umsteigen?',
        description:
          'Nein. Wir arbeiten mit dem, was Sie haben, und schauen uns an, was sinnvoll ist. In vielen Fällen lohnt sich eine Plattformstrategie mit GitLab — aber das ist eine Empfehlung, keine Voraussetzung.',
      },
      {
        title: 'Wie stellen Sie Sicherheit und Compliance sicher?',
        description:
          'Indem wir sie von Anfang an mitdenken, nicht nachträglich draufschrauben. Alle Lösungen sind darauf ausgelegt, auditierbar und regulatorisch belastbar zu sein — ohne den Entwicklungsfluss unnötig zu stören.',
      },
    ],
  },
  cta: {
    primaryCta: { text: 'Kostenlos anfragen', href: 'mailto:andreas.boehrnsen@frontrunner.io', target: '_blank' as const },
    title: 'Interesse? Melden Sie sich einfach.',
    subtitle:
      'Kein Verkaufsgespräch, kein Druck. Wir hören uns an, was Sie bewegt — und schauen gemeinsam, ob wir helfen können.',
  },
};
