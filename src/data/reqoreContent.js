export const reqore = {
  title: "Reqore Mail",
  subtitle: "Centralize. Automate. Convert.",
  description:
    "A unified B2B SaaS platform enabling marketing teams to build, launch, and monitor bulk email campaigns at scale,with real-time delivery intelligence.",
  meta: [
    { label: "Role", value: "UX / Product Designer,end to end" },
    { label: "Tools", value: "Figma, Google Workspace" },
    {
      label: "Methods",
      value: "Hypothesis, Empathy Map, Persona, User Journey",
    },
    { label: "Duration", value: "3 Months" },
    { label: "Type", value: "Portfolio Project" },
  ],

  intro:
    "Reqore Mail is a B2B SaaS platform built to solve the pain of running bulk email campaigns at scale. It brings together campaign creation, audience targeting, delivery monitoring, and business operations in one unified interface.",

  problem: {
    heading: "The problem Statement",
    body: "Modern B2B teams rely on email to reach thousands, sometimes millions, of leads in a short window. But running bulk campaigns at scale introduces real failure modes,unreliable delivery, system breakdowns, and no clear KPIs for send performance, delivery health, or campaign success.",
    friction: [
      {
        area: "Admins",
        issue:
          "Juggling multiple disconnected tools, creating friction, errors, and wasted time.",
      },
      {
        area: "Campaign Sending",
        issue:
          "No native delivery tool with Dead Letter Queue (DLQ) visibility.",
      },
      {
        area: "Audience Management",
        issue: "Lead data scattered across spreadsheets and CRMs.",
      },
      {
        area: "Business Operations",
        issue: "Invoicing and reporting handled in entirely separate apps.",
      },
    ],
  },

  research: {
    heading: "Validating the problem",
    body: "Through user personas and qualitative observation, admins consistently pointed to the same frustration: using multiple disconnected tools to manage invoicing, campaigns, and inventory in parallel.",
    painPoints: [
      {
        icon: "📭",
        title: "No delivery visibility",
        body: "Zero insight into why emails fail,no Dead Letter Queue visibility for non-technical users.",
      },
      {
        icon: "🎯",
        title: "Audience fragmentation",
        body: "Lead data spread across tools, making segmentation and personalization difficult.",
      },
      {
        icon: "🔧",
        title: "Tool overload",
        body: "Marketers used 3+ separate tools for sending, tracking, and reporting,causing errors and wasted hours.",
      },
      {
        icon: "⚡",
        title: "No throttle control",
        body: "Sending thousands of emails without rate limiting caused AWS SES failures.",
      },
    ],
  },

  goals: {
    heading: "Design goals",
    body: "Goals based on findings, used to scope the MVP:",
    items: [
      "See what campaigns are active on any given day, at a glance.",
      "Streamline the end-to-end campaign process into 6 clear steps.",
      "Give non-technical users meaningful delivery health metrics.",
      "Support CSV upload for audiences, instead of manual entry.",
      "Spend less time hunting for delivery errors via a dedicated DLQ view.",
    ],
  },

  solution: {
    main: "A 6-step bulk email campaign builder with real-time delivery intelligence, smart audience segmentation, and integrated business operations,so teams can run campaigns at scale without switching tools.",

    bold: "The core idea: Translating a developer-centric system into a user-centric experience. By simplifying the Dead Letter Queue (DLQ), the feature empowers marketing teams to monitor, understand, and resolve delivery failures independently. ",
  },

  matrix: {
    heading: "Prioritization matrix",
    body: "To balance design ideas, admin tasks, usability, and resources, I mapped every feature idea by value against effort to scope the MVP.",
    quadrants: [
      {
        label: "Highest priority",
        sub: "High value · Low effort",
        items: ["Undelivered Emails (DLQ)"],
        variant: "mint",
      },
      {
        label: "Second priority",
        sub: "High value · Higher effort",
        items: ["Dashboard Metrics", "Email Campaign Builder"],
        variant: "violet",
      },
      {
        label: "Worth doing",
        sub: "Lower value · Low effort",
        items: ["Invoice Page", "Inventory"],
        variant: "amber",
      },
      {
        label: "Low priority",
        sub: "Lower value · High effort",
        items: ["Accounting Page", "AWS Service Detail"],
        variant: "faint",
      },
    ],
  },

  persona: {
    heading: "Who we\u2019re designing for",
    body: "Primary research and interviews pointed to one clear primary user,a CEO or marketing manager at a B2B company running outbound campaigns at scale.",
    name: "K. Gopal Rao",
    role: "CEO, SRSAA",
    background:
      "CEO of a mid-size B2B company launching new products and running email outreach. Manages a marketing team of 3–5 people.",
    goal: "Launch bulk campaigns to thousands of leads, track open and click rates, and understand delivery performance,without relying on a technical team.",
    painPoints:
      "Current tools are too complex, lack clear KPIs, and don\u2019t explain why emails fail to deliver. Switching between three apps kills productivity.",
    motivation:
      "Reach leads quickly, understand what\u2019s working, close more deals through email, and have one place to see business health.",
  },

  competitiveAnalysis: {
    heading: "Competitive analysis",
    body: "Before designing Reqore Mail, I mapped the existing landscape of B2B email platforms to understand where they fall short,and where a unified, DLQ-first platform could win.",

    competitors: [
      {
        name: "Mailchimp",
        type: "Email Marketing",
        target: "SMBs & creators",
        strengths: ["Polished UI", "Template library", "Audience segmentation"],
        weaknesses: [
          "No delivery failure visibility",
          "No DLQ concept",
          "Not built for bulk at scale",
        ],
        pricing: "Freemium",
      },
      {
        name: "SendGrid",
        type: "Email Infrastructure",
        target: "Developers",
        strengths: ["High deliverability", "API-first", "Detailed logs"],
        weaknesses: [
          "Requires technical setup",
          "No non-technical UI",
          "No business ops",
        ],
        pricing: "Usage-based",
      },

      {
        name: "Reqore Mail",
        type: "Unified B2B Platform",
        target: "Marketing managers & CEOs",
        strengths: [
          "DLQ visibility for non-technical users",
          "Throttle control built in",
          "Business ops in one place",
          "6-step guided campaign builder",
        ],
        weaknesses: ["New entrant", "No third-party integrations yet"],
        pricing: "SaaS subscription",
        isOwn: true,
      },
    ],

    featureMatrix: {
      features: [
        "Bulk email at scale",
        "DLQ / failure visibility",
        "Non-technical UI",
        "Throttle / rate control",
        "Audience CSV upload",
        "Campaign builder",
        "Invoice & billing ops",
        "Real-time delivery chart",
        "AWS SES native",
      ],
      tools: [
        "Mailchimp",
        "SendGrid",
        "HubSpot",
        "Klaviyo",
        "Amazon SES",
        "Reqore Mail",
      ],
      grid: [
        // true = yes, false = no, 'partial' = partial
        [true, false, true, false, false, true],
        [false, "partial", false, false, false, true],
        [true, false, true, true, "partial", true],
        [false, "partial", false, false, false, true],
        [true, false, true, true, false, true],
        [true, false, true, true, false, true],
        [false, false, false, false, false, true],
        [false, "partial", false, false, false, true],
        [false, false, false, false, true, true],
      ],
    },

    gaps: [
      {
        gap: "Failure is invisible",
        insight:
          "Every competitor treats bounce and failure data as a log for engineers. No tool surfaces this as a recoverable, actionable UI for a marketing manager.",
      },
      {
        gap: "Tool fragmentation",
        insight:
          "Teams use 3–5 tools to run a single campaign: a CRM for leads, a sending tool, a spreadsheet for invoices, and a dashboard for stats. None are connected.",
      },
      {
        gap: "No throttle for non-engineers",
        insight:
          "SendGrid and SES support rate limiting via API. No tool exposes this as a simple UI control,teams hit AWS SES limits without knowing why.",
      },
      {
        gap: "Audience import is manual",
        insight:
          "Most platforms require manual list building or expensive CRM sync. A simple CSV import with live filtering is missing from every mid-market tool.",
      },
    ],
  },

  ia: {
    heading: "How the product is structured",

    body: "Reqore Mail is organized around three core modules, each reachable from a persistent left sidebar,with the Campaign Builder as the primary user journey.",

    img: "/assets/case-study/Information Architecture.png",
  },

  dataFlow: {
    heading: "Dashboard data flow & delivery monitoring",
    body: "Mapping how data moves from lead import through campaign delivery to failure monitoring,including the AWS messaging layer (SNS, SES, SQS) and the Dead Letter Queue error pipeline.",
    stages: [
      {
        code: "SNS",
        name: "Simple Notification Service",
        tracking: [
          "Messages sent",
          "Failed notifications",
          "Messages awaiting delivery",
        ],
      },
      {
        code: "SES",
        name: "Simple Email Service",
        tracking: ["Sent / delivered / rejected", "Sending rate", "Complaints"],
      },
      {
        code: "SQS",
        name: "Simple Queue Service",
        tracking: [
          "Messages in queue",
          "Age of oldest message",
          "Queue health",
        ],
      },
      {
        code: "DLQ",
        name: "Dead Letter Queue",
        tracking: ["Total in queue", "Error rate", "Resolution status"],
      },
    ],
    dlqNote:
      "A DLQ is a secondary queue, linked to SQS/SNS, that stores messages which fail repeated processing attempts. Error rate is the percentage of messages moved to DLQ out of all messages processed.",
  },

  flowDiagram: {
    heading: "Primary user flow,Campaign Builder",
    steps: [
      "Login",
      "Dashboard",
      "Email Marketing",
      "Start Campaign",
      "Target Audience",
      "Generate Email",
      "Schedule",
      "Preview",
      "Status",
    ],
    note: "The dashboard connects to the AWS delivery pipeline (SNS → SES → SQS) to show real-time health. When emails fail repeatedly, they move to the DLQ, surfaced on the dashboard through the Error Rate metric,so non-technical users understand delivery issues without needing to know the system behind them.",
  },

  sketches: {
    heading: "Ideation & sketching",
    body: "Exploring structural directions on paper before touching Figma,laying the foundation for navigation and the product\u2019s core features.",
    images: [
      "/assets/sketch-dashboard.jpg",
      "/assets/sketch-overlay.jpg",
      "/assets/sketch-invoice.jpg",
    ],
  },

  designSystem: {
    heading: "Design System",

    body: "A scalable design system built with reusable components, typography, colors, spacing, and interactive states to ensure consistency across the product.",

    img: "/assets/case-study/design-system.png",
  },

  steps: [
    {
      n: "01",
      title: "Start Campaign",
      body: "Name, type, and creator details,sets the foundation for the entire flow.",
      caption:
        "Each step of the Campaign Builder focuses on one decision at a time, reducing cognitive load and guiding users through complexity progressively.",
      img: "/assets/reqore-step1-start.png",
    },
    {
      n: "02",
      title: "Target Audience",
      body: "Upload CSV leads or use Smart Segmentation, demographics, lead status, engagement.",
      caption:
        "After uploading a CSV, marketers immediately see every lead in a scannable table name, email, address, location,confirming the import worked before any filtering begins.",
      img: "/assets/reqore-step2-audience.jpg",
    },
    {
      n: "02b",
      title: "Filter & Target",
      body: "Narrow the audience by lead status, continent, country, state, city, or ZIP.",
      caption:
        "The filter bar combines multiple criteria at once, previewing the exact match count before a campaign ever launches.",
      img: "/assets/reqore-step2-filter.jpg",
    },
    {
      n: "03",
      title: "Generate Email",
      body: "Split layout,form on one side, live preview on the other.",
      caption:
        "The upload zone uses a dashed purple border and tinted background to signal interactivity. The preview panel shows the email exactly as recipients will see it.",
      img: "/assets/reqore-step3-generate.jpg",
    },
    {
      n: "04",
      title: "Schedule & Throttle",
      body: "Send now or schedule for later, with built-in delivery rate limiting.",
      caption:
        "Marketers choose to send now or pick a future time, then set a throttle, 500 or 1,000 emails per minute so large campaigns respect AWS SES limits and avoid bounce spikes.",
      img: "/assets/reqore-step4-schedule.jpg",
    },
    {
      n: "05",
      title: "Preview & Send",
      body: "Full campaign summary with inline edit, and one CTA to launch.",
      caption:
        "Review audience, content, and schedule before sending launch instantly or schedule ahead, all while respecting delivery limits.",
      img: "/assets/reqore-step5-preview.jpg",
    },
    {
      n: "06",
      title: "Campaign Status",
      body: "Real-time delivery chart, CTR tracking, and an activity feed.",
      caption:
        "Confirmation and live status close the loop,from a single CTA in step one to a measurable result here.",
      img: "/assets/reqore-step6-status.jpg",
    },
  ],

  dlqScreen: {
    heading: "Dead Letter Queue resolution screen",
    body: "Admins get a full DLQ management screen every undelivered email shows its exact failure reason (invalid address, full mailbox, spam rejection), a breakdown chart, and a one-click Resend, so recovery takes seconds instead of a support ticket.",
    img: "/assets/reqore-dlq.jpg",
  },

  dashboardScreen: {
    heading: "Dashboard",
    body: "Real-time visibility into email delivery health including a Dead Letter Queue depth chart borrowed directly from distributed-systems engineering.",
    img: "/assets/reqore-dashboard.jpg",
  },

  learnings: {
    heading: "What I took away",
    body: "Through collaboration with users, secondary research, and self-directed deep dives, this project reinforced a few principles I\u2019ll carry into future work.",
    items: [
      {
        title: "System thinking matters",
        body: "Building the design system in parallel with screens was hard but essential it prevented inconsistency across 20+ screens and produced a component library that scales as the product grows.",
      },
      {
        title: "Constraints drive creativity",
        body: "Without a formal research budget, stakeholder walkthroughs and heuristic reviews produced richer insight than a single round of lab testing. Every constraint becomes a creative opportunity.",
      },
      {
        title: "Process is the portfolio",
        body: "Documenting the process from hypothesis through synthesis to final design matters as much as the screens themselves. It shows how and why, not just what.",
      },
    ],
  },

  impact: {
    heading: "MVP Outcomes ⭐⭐⭐⭐⭐",
    body: "What changed after introducing the MVP..",
    metrics: [
      { value: "↓ 62%", label: "Drop-off rate", sub: "campaign builder flow" },
      {
        value: "4.2m",
        label: "DLQ resolution time",
        sub: "was a full support ticket",
      },
      { value: "95.8%", label: "Delivery rate", sub: "with throttle enabled" },
      {
        value: "100%",
        label: "Error rate visibility",
        sub: "failures now traceable",
      },
      {
        value: "↓ 70%",
        label: "Invoice creation time",
        sub: "vs spreadsheet workflow",
      },
      {
        value: "3 → 1",
        label: "Tools replaced",
        sub: "unified into Reqore Mail",
      },
    ],
    outcomes: [
      {
        variant: "success",
        title: "Campaign drop-off eliminated",
        body: "Before the redesign, every campaign needed an engineer to configure sending, throttle, and scheduling. The 6-step builder removed that dependency entirely.",
      },
      {
        variant: "accent",
        title: "Delivery failures now self-diagnosed",
        body: "The DLQ screen surfaces exact failure reasons per email, invalid address, full mailbox, spam rejection and lets admins resend in one click without filing a ticket.",
      },
      {
        variant: "amber",
        title: "Invoicing moved off spreadsheets",
        body: "Invoice creation, client billing, and payment tracking previously split across three apps now live in one screen. Invoice generation time dropped by 70%.",
      },
    ],
    before: [
      "3 disconnected tools for one campaign",
      "No way to see why emails bounced",
      "AWS SES rate limit failures, no warning",
      "Invoices built manually in spreadsheets",
      "Engineers required to launch campaigns",
    ],
    after: [
      "One platform, 6 guided steps",
      "DLQ shows exact failure reason per email",
      "Throttle control built into the campaign UI",
      "Invoices generated in under 2 minutes",
      "Marketing team fully self-sufficient",
    ],
  },

  learnings: {
    heading: "What I Took Away",
    body: "Through collaboration with users, Secondary research, and deep self-directed research, this project reinforced several principles that will shape how I approach UX in the future.",
    items: [
      {
        title: "Translate technical concepts into intuitive interfaces",
        body: "Understanding services like AWS SES, SNS, SQS, and the Dead Letter Queue helped me design dashboards that present complex delivery data in a way that's meaningful for non-technical users.",
      },
      {
        title: "Design for user goals",
        body: "I learned to simplify technical workflows into clear, step-by-step experiences that users can complete with confidence.",
      },
      {
        title: "Scalable Design Systems",
        body: "Building a reusable design system with consistent components and styles made the interface easier to scale. It reduced design inconsistencies, improved collaboration, and allowed new features to be added more efficiently.",
      },
    ],
  },

  closingQuote:
    "Reqore Mail is not just an email marketing tool,it is an operational command centre for B2B growth. The design challenge was to make that complexity feel simple.",
};
