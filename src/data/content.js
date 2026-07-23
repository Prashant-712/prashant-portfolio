export const profile = {
  name: 'Prashant',
  role: 'Product Designer',
  location: 'India',
  email: 'prashant.designux@gmail.com',
  phone: '+91-8287519160',
  linkedin: 'https://www.linkedin.com/in/prashant-750a25304/',
  tagline: 'Design systems that hold under load.',
  heroSub:
    "I design B2B and B2C products end to end — research, flows, and high-fidelity systems — with a habit of designing for what happens when things don't go as planned.",
  bio: [
    "I help businesses design intuitive B2B and B2C products by simplifying complex workflows. From research to high-fidelity interfaces, I create scalable digital experiences that deliver value for both users and businesses."
  ],
  // philosophy: [
  //   { title: 'Systems over screens', body: 'A screen is a snapshot. I design the states around it — loading, empty, error, recovery — because that\u2019s where products actually get used.' },
  //   { title: 'Failure is a design surface', body: 'Most tools hide errors in logs. I try to translate failure into something a non-technical user can read and act on.' },
  //   { title: 'Research before pixels', body: 'Personas, journeys, and hypothesis mapping aren\u2019t a formality — they\u2019re how I decide what\u2019s actually worth building first.' },
  //   { title: 'AI as a collaborator', body: 'I use AI-assisted workflows through the design process, not just to generate assets — research synthesis, prototyping, and exploration.' },
  // ],
}

export const experience = [
  {
    period: '2025.09 — 2025.12',
    company: 'Whuups',
    location: 'Lewes Delaware, United States (Remote)',
    title: 'Product Designer (Contract)',
    status: 'shipped',
    points: [
      'Led end-to-end design for 30+ high-fidelity CRM and ERP screens, using UX research and workflow analysis to improve lead management.',
      'Designed key sections of the Whuups website, contributing to the overall user experience, visual language, and conversion-focused landing pages.',
      'Shipped key pages for the live product with the Team, and delivered the High fidelity design for IntusLab.',
    ],
    links: [
      { label: 'whuups.com', url: 'https://whuups.com' },
      { label: 'intuslab.io', url: 'https://intuslab.io' },
    ],
  },
  {
    period: '2025.07 — 2025.09',
    company: 'Mixins Technology',
    location: 'Pune, India',
    title: 'UI/UX Intern',
    status: 'shipped',
    points: [
      'Designed a mobile app and responsive website — user flows, wireframes, and high-fidelity UI.',
      'Led product design for Basketo, a platform for local shopkeepers.',
    ],
    links: [{ label: 'basketo.in', url: 'https://basketo.in' }],
  },
  {
    period: '2025.08 — 2025.09',
    company: 'Vislona',
    location: 'Tamil Nadu, India',
    title: 'UX Researcher',
    status: 'completed',
    points: [
      'Conducted UX research for a SaaS product focused on workflows and pain points, Mapping User journey and creating personas.',
      
    ],
    links: [],
  },
]

export const skillGroups = [
  {
    label: 'Product & UX',
    items: ['User Flows', 'UX Research', 'Design Systems', 'High-fidelity UI', 'Ecommerce UX', 'Prototyping'],
  },
  {
    label: 'Design Tools',
    items: ['Figma', 'FigJam', 'Framer', 'Sketch', 'Miro', 'Canva'],
  },
  {
    label: 'AI Workflow',
    items: ['Claude / MCP', 'ChatGPT', 'AI-assisted Design', 'AI Prototyping', 'AI-powered UX Research'],
  },
  {
    label: 'Frontend',
    items: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'],
  },
]

export const caseStudies = [
  {
    slug: 'reqore-mail',
    title: 'Reqore Mail',
    tag: 'B2B SaaS · Email Infrastructure',
    status: 'Shipped · Portfolio Project',
    statusVariant: 'mint',
    cover: '/assets/reqore-dashboard.jpg',
    problem:
      'B2B teams send bulk campaigns through three or more disconnected tools, with no visibility into why emails actually fail.',
    overview:
      'A unified platform for building, sending, and monitoring bulk email campaigns at scale — built around a Dead Letter Queue model borrowed from backend engineering and translated for non-technical operators.',
    role: 'UX / Product Designer — end to end',
    tools: ['Figma', 'FigJam', 'Google Workspace'],
    outcomes: [
      'Collapsed campaign creation into one guided 6-step flow',
      'Designed a plain-language DLQ screen for non-technical recovery',
      'Built a 50+ component design system across 6 interaction states',
    ],
    internal: true,
  },
  // {
  //   slug: 'whuups',
  //   title: 'Whuups — CRM & ERP',
  //   tag: 'B2B SaaS · Lead & Service Ops',
  //   status: 'Live Product',
  //   statusVariant: 'violet',
  //   cover: null,
  //   problem:
  //     'Sales and ops teams were juggling spreadsheets and disconnected tools to manage leads, inventory, and services.',
  //   overview:
  //     'End-to-end design for a CRM and ERP platform — 30+ high-fidelity screens plus a service-provider module covering 10+ business services, shipped to production.',
  //   role: 'Product Designer (Contract)',
  //   tools: ['Figma'],
  //   outcomes: [
  //     'Shipped live at whuups.com',
  //     'Improved navigation across a 10+ service catalogue',
  //     'Delivered the companion product design for IntusLab',
  //   ],
  //   internal: false,
  //   externalUrl: 'https://whuups.com',
  // },
]
export const certifications = [
  { 
    title: 'UI/UX Design Internship Certificate', 
    org: 'Vislona', 
    period: 'Aug 2025 – Sep 2025',
    url: 'https://drive.google.com/file/d/1RdDTfD_4PJTCvftTL6AP9LE7HPfHpcb2/view'
  },
  { 
    title: 'UI/UX Design Internship Certificate', 
    org: 'Mixins Technology', 
    period: 'Jul 2025 – Sep 2025',
    url: 'https://drive.google.com/file/d/1DAj3NUxn5Uw3IWhKAJmNqethgB3meLlz/view'
  },
]

export const education = {
  degree: 'Economics (Honours)',
  school: 'Rajdhani College, University of Delhi',
  year: 'Graduated 2026',
}
