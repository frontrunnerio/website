export const content = {
  metadata: {
    title: 'About us',
    description:
      'Frontrunner IO is a Berlin-based consultancy specialised in DevSecOps and software delivery.',
  },
  hero: {
    tagline: 'About Frontrunner IO',
    titleLine1: 'DevSecOps expertise',
    titleLine2: 'from real projects.',
    subtitle:
      'Frontrunner IO is a Berlin-based consultancy specialised in DevSecOps and software delivery. We help companies make their development process faster, more secure and more traceable — through concrete action, not abstract concepts.',
    image: { src: '~/assets/images/hero-image.jpg', alt: 'Frontrunner IO' },
  },
  principles: {
    title: 'Our principles',
    subtitle: 'How we think determines how we work.',
    items: [
      {
        title: 'Clarity over complexity',
        description:
          'We simplify wherever possible. Clear processes, traceable structures and consolidated platforms are the foundation for fast, safe delivery.',
      },
      {
        title: 'Automation over manual work',
        description:
          'Manual steps are sources of errors and bottlenecks. We automate consistently — pipelines, security scans, compliance evidence.',
      },
      {
        title: 'Security from the start',
        description:
          'Security is not an afterthought. We build it into processes and pipelines from day one — checkable, auditable, and without extra friction for development.',
      },
      {
        title: 'Knowledge transfer that lasts',
        description:
          "We don't deliver black-box solutions. Our goal is to enable your team to keep improving on its own — long after we leave.",
      },
    ],
  },
  expertise: {
    title: 'What we know',
    subtitle: 'Our core competencies sit at the intersection of development, security and operations.',
    items: [
      {
        title: 'DevSecOps & CI/CD',
        description:
          'Building and tuning pipelines that combine speed and security — from first commit to production deployment.',
        icon: 'tabler:rocket',
      },
      {
        title: 'GitLab',
        description:
          'Implementation, migration and optimisation of GitLab as a central development platform — including security scans, IaC integration and compliance configuration.',
        icon: 'tabler:brand-gitlab',
      },
      {
        title: 'Platform consolidation',
        description:
          'Migration from fragmented toolchains (Jenkins, Azure DevOps, GitHub, …) into a single, maintainable platform.',
        icon: 'tabler:layout-grid',
      },
      {
        title: 'Regulated industries',
        description:
          'Hands-on experience with compliance requirements in finance, insurance and other regulated sectors — DORA, ISO and industry-specific standards.',
        icon: 'tabler:scale',
      },
      {
        title: 'Infrastructure as Code',
        description:
          'Bringing IaC into the delivery process for reproducible, versioned and auditable deployments.',
        icon: 'tabler:server',
      },
      {
        title: 'Coaching & enablement',
        description:
          "Hands-on coaching for developer and platform teams — so the knowledge stays in the company and doesn't leave with the project.",
        icon: 'tabler:school',
      },
    ],
  },
  why: {
    title: 'Why Frontrunner IO',
    subtitle: 'What sets us apart from classical consulting.',
    items: [
      {
        title: 'Hands-on, not slideware',
        description:
          'We work directly with your team — not just in workshops and presentations. Outcomes come from delivery, not from slides.',
        icon: 'tabler:tools',
      },
      {
        title: 'Modular and scalable',
        description:
          'Quick assessment, targeted support, or full transformation — our engagements adapt to your situation.',
        icon: 'tabler:puzzle',
      },
      {
        title: 'Specialised, not generalist',
        description:
          "DevSecOps and software delivery is what we do. No grab-bag offering — deep expertise in a clearly bounded area.",
        icon: 'tabler:target',
      },
    ],
    callToAction: { text: 'Get in touch', href: '/contact' },
  },
  cta: {
    primaryCta: { text: 'Request a free intro', href: 'mailto:info@frontrunner.io', target: '_blank' as const },
    title: 'Ready for the next step?',
    subtitle: "Let's figure out together where the biggest lever in your software delivery is.",
  },
};
