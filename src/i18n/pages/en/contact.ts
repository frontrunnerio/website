export const content = {
  metadata: {
    title: 'Contact',
    description: 'Get in touch — we usually reply within one business day.',
  },
  hero: {
    tagline: 'Contact',
    title: 'Get in touch.',
  },
  form: {
    title: 'Send us a message.',
    subtitle:
      "Questions about our services, or want to set up a no-strings intro call? We usually reply within one business day.",
    inputs: [
      { type: 'text' as const, name: 'name', label: 'Name' },
      { type: 'email' as const, name: 'email', label: 'Email' },
    ],
    textareaLabel: 'Your message',
    disclaimer:
      'By submitting this form you agree to the processing of your personal data per our Privacy Policy.',
    description: 'We usually reply within 24 hours on business days.',
  },
  direct: {
    title: 'Contact us directly',
    items: [
      { title: 'Email', description: 'info@frontrunner.io', icon: 'tabler:mail' },
      { title: 'Phone', description: '+49 (0)160 6220730', icon: 'tabler:headset' },
      {
        title: 'Location',
        description: 'Seychellenring 42, 13587 Berlin, Germany',
        icon: 'tabler:map-pin',
      },
    ],
  },
};
