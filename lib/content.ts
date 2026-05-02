// Single source of truth for portfolio content.
// Edit this file to update experience, projects, links, etc.

export const profile = {
  name: 'Vishal Gaur',
  title: 'Senior Mobile Engineer',
  location: 'Delhi, IN',
  email: 'rr.vishalgaur@gmail.com',
  resumeUrl: '/Resume_Vishal_Gaur.pdf',
  socials: {
    github: 'https://github.com/i-vishi',
    linkedin: 'https://www.linkedin.com/in/i-vishi/',
    twitter: '',
  },
  // The hero paragraph. Keep to 2 short sentences max.
  intro: [
    'Senior Android Engineer with 5+ years building apps at scale — from payment flows and edtech platforms to last-mile logistics.',
    'Focused on performance, stability, and developer productivity; experienced with Jetpack Compose, KMP, and LLM-assisted workflows.',
  ],
};

export type Domain = {
  id: string;
  title: string;
  blurb: string;
  tags: string[];
};

export const domains: Domain[] = [
  {
    id: 'consumer-scale',
    title: 'Consumer scale',
    blurb:
      'Compose migration, MVVM, payment flows, and recomposition tuning for apps with millions of daily users.',
    tags: ['Jetpack Compose', 'MVVM', 'Payments', 'Performance'],
  },
  {
    id: 'reliability',
    title: 'Reliability & stability',
    blurb:
      'Crash diagnostics, background processing, WorkManager optimization, and test coverage — keeping apps stable at millions of daily active users.',
    tags: ['Crash-free', 'WorkManager', 'Testing', 'Background Processing'],
  },
  {
    id: 'cross-platform',
    title: 'Cross-platform',
    blurb:
      'Kotlin Multiplatform shared modules, Compose Multiplatform UI, and clean iOS interop for one codebase, every surface.',
    tags: ['KMP', 'Compose Multiplatform', 'iOS', 'Desktop'],
  },
];

export type Role = {
  slug: string;
  company: string;
  role: string;
  period: string;
  current: boolean;
  blurb: string;
  // 3-5 short bullets; numbers > adjectives
  highlights: string[];
  stack: string[];
  url?: string;
};

export const roles: Role[] = [
  {
    slug: 'shipsy',
    company: 'Shipsy',
    role: 'Senior Software Engineer',
    period: 'Aug 2024 — Present',
    current: true,
    blurb:
      'Sole owner of Shipsy OnDemand — a last-mile delivery app serving Flipkart Minutes, Myntra Now, Apollo, and KFG across multiple countries, powering 1M+ daily orders.',
    highlights: [
      'Delivered end-to-end features: Product Exchange Flow, Open Box Delivery (QC), Returnable Bags, and Undelivered Unblock; drove core improvements in Background Location Syncing, Order Allocation, and Auto-reject flows.',
      'Improved app stability from 88% to 98% crash-free rate through targeted diagnostics; provided critical production support for Flipkart Minutes (600K+ daily orders) since go-live.',
      'Pioneered spec-driven development and LLM-assisted workflows, boosting team productivity by 50%.',
      'Integrated MCP to automatically surface critical crashes and raise PRs, reducing incident response time significantly.',
    ],
    stack: ['Kotlin', 'Jetpack Compose', 'Coroutines', 'Room', 'WorkManager', 'MCP'],
    url: 'https://shipsy.io',
  },
  {
    slug: 'testbook',
    company: 'Testbook',
    role: 'SDE-2 · Android',
    period: 'Jun 2022 — Jul 2024',
    current: false,
    blurb:
      'EdTech platform serving 5M+ learners. Led Compose adoption and shipped revenue-driving features end to end.',
    highlights: [
      'Implemented Jetpack Compose UI eliminating redundant re-compositions for over 5M users.',
      'Introduced Masterclass and Masterseries on a modern MVVM stack, attracting 50K+ daily uniques.',
      'Spearheaded WorkManager optimization, reducing crashes 90% (from 50K to 1K).',
      'Integrated EMI payment flow via eNACH for courses, lifting revenue 25%.',
      'Migrated 15+ Volley APIs to Retrofit + OkHttp with a custom utility for a 10-engineer team.',
    ],
    stack: ['Kotlin', 'Jetpack Compose', 'MVVM', 'Retrofit', 'eNACH'],
    url: 'https://testbook.com',
  },
  {
    slug: 'paytm',
    company: 'Paytm',
    role: 'Software Engineer · Android',
    period: 'Jan 2021 — Apr 2022',
    current: false,
    blurb:
      'Android development on financial flows at one of India\u2019s largest fintech platforms, serving 100M+ users.',
    highlights: [
      'Modernized Mobile Recharge and operator selection with a new UI, increasing engagement for 100M+ users.',
      'Implemented handling for sudden price changes of mobile operators, ensuring seamless operations for millions of daily transactions.',
      'Integrated split bill with Utility Bill payments, enabling expense splitting for 1M+ transactions.',
      'Led writing of unit and UI tests using JUnit, Espresso, and Mockito, achieving 50% code coverage across the team.',
    ],
    stack: ['Kotlin', 'Java', 'MVVM', 'RoomDB', 'JUnit', 'Espresso', 'Mockito'],
    url: 'https://paytm.com',
  },
];

export type Project = {
  title: string;
  blurb: string;
  tags: string[];
  url: string;
  year: string;
};

export const projects: Project[] = [
  {
    title: 'Prefixer',
    blurb:
      'Android library wrapping SharedPreferences with a typed, fluent API. Published on Maven.',
    tags: ['Android', 'Library', 'Kotlin'],
    url: 'https://github.com/i-vishi/Prefixer',
    year: '2022',
  },
  {
    title: 'Shopping App',
    blurb:
      'Android e-commerce app with Firebase OTP auth, Room-backed cart, and 80% test coverage. 100 GitHub stars; featured in Google Dev Library.',
    tags: ['Kotlin', 'Firebase', 'Room', 'Espresso'],
    url: 'https://github.com/i-vishi/shopping-android-app',
    year: '2021',
  },
  {
    title: 'Movie Data App',
    blurb:
      'TMDB-powered movie discovery client with Coroutines, Retrofit, and an MVVM presentation layer.',
    tags: ['Kotlin', 'Coroutines', 'Retrofit'],
    url: 'https://github.com/i-vishi/movie-data-android-app',
    year: '2020',
  },
  {
    title: 'DS & Algo Web',
    blurb:
      'Interactive visualizer for sorting, search, and graph algorithms. Built for teaching.',
    tags: ['React', 'Visualizer'],
    url: 'https://github.com/i-vishi/ds-algo-web',
    year: '2021',
  },
];

export type Note = {
  title: string;
  excerpt: string;
  url: string;
  date: string;
};

// Notes / writing — empty array hides the section. Add posts as you write them.
export const notes: Note[] = [];
