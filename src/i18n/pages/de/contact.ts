export const content = {
  metadata: {
    title: 'Kontakt',
    description: 'Sprechen Sie uns an — wir melden uns innerhalb eines Werktages.',
  },
  hero: {
    tagline: 'Kontakt',
    title: 'Sprechen Sie uns an.',
  },
  form: {
    title: 'Schreiben Sie uns eine Nachricht.',
    subtitle:
      'Haben Sie Fragen zu unseren Leistungen oder möchten Sie ein unverbindliches Erstgespräch vereinbaren? Wir melden uns in der Regel innerhalb eines Werktages bei Ihnen.',
    inputs: [
      { type: 'text' as const, name: 'name', label: 'Name' },
      { type: 'email' as const, name: 'email', label: 'E-Mail' },
    ],
    textareaLabel: 'Ihre Nachricht',
    disclaimer:
      'Mit dem Absenden dieses Formulars stimmen Sie der Verarbeitung Ihrer personenbezogenen Daten gemäß unserer Datenschutzerklärung zu.',
    description: 'Wir antworten in der Regel innerhalb von 24 Stunden an Werktagen.',
  },
  direct: {
    title: 'Direkt Kontakt aufnehmen',
    items: [
      { title: 'E-Mail', description: 'info@frontrunner.io', icon: 'tabler:mail' },
      { title: 'Telefon', description: '+49 (0)160 6220730', icon: 'tabler:headset' },
      {
        title: 'Standort',
        description: 'Seychellenring 42, 13587 Berlin, Deutschland',
        icon: 'tabler:map-pin',
      },
    ],
  },
};
