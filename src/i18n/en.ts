export const en = {
  nav: {
    projects: "projects",
    skills: "skills",
    education: "education",
    certs: "certs",
    about: "about",
    contact: "contact",
    available: "available for work"
  },
  hero: {
    tag: "Web & Flutter Developer — Egypt",
    firstName: "Taha",
    lastName: "Mahmoud.",
    desc: "I build fast, scalable web & mobile applications. Focused on clean architecture, great UX, and code that actually ships.",
    viewProjects: "View projects",
    letsTalk: "Let's talk",
    stats: {
      projects: "Projects",
      exp: "Years of experience",
      clients: "Happy clients"
    }
  },
  spec: {
    webLabel: "Web Development",
    webSub: "Angular · TypeScript · HTML/CSS · JS",
    flutterLabel: "Flutter Development",
    flutterSub: "Dart · Cross-Platform · Material UI",
    backendLabel: "Backend & DB",
    backendSub: "Supabase · SQL · REST APIs"
  },
  projectsSec: {
    tag: "Selected work",
    title: "Featured Case Studies",
    sub: "Deep dives into my most significant recent projects.",
    role: "Role",
    surface: "Platform",
    audience: "Audience",
    problemLabel: "The problem",
    approachLabel: "The approach",
    challengeLabel: "The hard part",
    resultLabel: "The result",
    visitLive: "Visit the live site ↗",
    viewSource: "View source ↗",
    privateSource: "Source code is private",
    otherTitle: "Other builds and experiments",
    ghLabel: "GitHub ↗",
    privateRepo: "Private repo"
  },
  caseStudies: [
    {
      id: 'elbasha',
      num: '01',
      title: 'ELBASHA Restaurant',
      status: 'IN PRODUCTION',
      statusClass: 'status-prod',
      role: 'Full-stack Developer',
      surface: 'Web · SSR + static',
      audience: 'Egyptian restaurant customers in Paris 20e',
      tech: ['Astro 5 SSR', 'Tailwind v4', 'Supabase', 'TypeScript'],
      live: 'https://elbasha.fr',
      liveLabel: null,
      gh: null,
      problem: 'Building a digital presence for an Egyptian restaurant in France, allowing walk-in customers to view the history and menu online.',
      approach: 'Built an Astro SSR application with a full admin dashboard. The owner can manage dishes, images, categories, and direct delivery links (e.g., Uber Eats, Deliveroo).',
      challenge: 'The repository is deployed across two different hosts: o2switch for the client and Vercel for staging. Solved by configuring astro.config.mjs to dynamically select the adapter based on environment variables.',
      result: 'A production-ready restaurant website combining brand presence, menu management, and direct links to delivery platforms — a customer can discover a dish and go straight to the restaurant\'s Uber Eats or Deliveroo ordering page.'
    },
    {
      id: 'illustre',
      num: '02',
      title: 'Illustre Consulting',
      status: 'IN PRODUCTION',
      statusClass: 'status-prod',
      role: 'Full-stack Developer',
      surface: 'Web · SSR',
      audience: 'Restaurant owners seeking operational consulting',
      tech: ['Astro 6', 'Tailwind v4', 'Supabase', 'TypeScript'],
      live: 'https://illustre-consulting.com',
      liveLabel: null,
      gh: null,
      problem: 'The consultant needed a professional online presence where restaurant owners could understand his services — on-site operations, staff hiring and training, menu work, revenue improvement — and contact him to discuss a project.',
      approach: 'Built a service-focused website with structured service pages, content management, testimonials, and a contact flow designed to turn restaurant owners into potential clients.',
      challenge: 'Building a flexible content system that allows the consultant to continuously update his services, case-related content, blog posts, and testimonials without relying on a developer.',
      result: 'A production website that gives the consultant a professional presence in the French restaurant industry and provides a direct channel for restaurant owners to discover his services and get in touch.'
    },
    {
      id: 'ramadan',
      num: '03',
      title: 'Ramadan Planner',
      status: 'LIVE',
      statusClass: 'status-live',
      role: 'Solo Developer',
      surface: 'Mobile · Android/iOS + home widgets',
      audience: 'Muslims planning for Ramadan · Arabic/English',
      tech: ['Flutter', 'Dart', 'Provider', 'SQLite', 'adhan', 'workmanager'],
      live: 'https://drive.google.com/file/d/1_gjcx5ubK2dY9ySdjOhHfFqNVKw2Qe3j/view?usp=drive_link',
      liveLabel: 'Download the app ↗',
      gh: 'https://github.com/Taha-mask/Ramadan_planner',
      problem: 'Existing Ramadan apps either only show prayer times or just offer a to-do list. Users needed both in one place, functioning completely offline.',
      approach: 'Everything runs locally: prayer_service calculates times using adhan + GPS without APIs, database_helper uses SQLite. Included 4 home screen widgets (prayer, azkar, sebha, tasks).',
      challenge: 'Accurate local prayer-time calculation and reliable scheduled notifications while running offline and handling background execution/time zones.',
      result: 'An offline-first Ramadan planner combining local prayer-time calculation, Quran and Azkar, tasks, statistics, home-screen widgets, and scheduled reminders.'
    },
    {
      id: 'patarif',
      num: '04',
      title: 'Patarif Platform',
      status: 'IN PROGRESS',
      statusClass: 'status-wip',
      role: 'Frontend Developer',
      surface: 'Web · responsive',
      audience: 'Children and their parents',
      tech: ['Angular 19.2 SSR', 'TypeScript', 'Supabase (RLS)', 'Stripe', 'PostgreSQL'],
      live: null,
      liveLabel: null,
      gh: null,
      problem: 'A kids\' platform needing playful content while giving admins full control over stories, characters, and audio without redeploying.',
      approach: 'Built with Angular 19 SSR and a complete admin dashboard. Uses Supabase Edge Functions for Stripe payments. Includes an integrated variant/extension for older users: Patarif Teen.',
      challenge: 'Keeping frontend access rules aligned with Supabase RLS across the customer and admin surfaces.',
      result: 'Currently in development: 11 interactive games, dynamic stories, a learning section, shop, and characters.'
    },
    {
      id: 'baladup',
      num: '05',
      title: 'BaladUp — Local Delivery Ecosystem',
      status: 'IN PROGRESS',
      statusClass: 'status-wip',
      role: 'Full-stack Developer',
      surface: '4 applications (Customer, Rider, Merchant, Admin)',
      audience: 'Local customers, merchants, and riders',
      tech: ['Flutter', 'Next.js 14', 'React 18', 'Supabase + PostGIS', 'Tailwind'],
      live: null,
      liveLabel: null,
      gh: null,
      problem: 'A delivery ecosystem requiring 4 distinct interfaces (Customer, Rider, Merchant, Admin) that all need real-time updates for the same order without duplicating logic.',
      approach: 'Utilized a single Supabase instance with 33 tables and PostGIS. Shared packages (core_backend in Dart, shared_ui) are used, and all apps subscribe to postgres_changes for real-time order tracking.',
      challenge: 'A multi-store cart is split into separate orders under the same order_group_id, with independent delivery fees and rider assignments.',
      result: 'Customer and Merchant apps are fully functional and in active development.'
    }
  ],
  otherBuilds: [
    {title:'Flick', desc:'Flutter movie discovery app with a clean multi-screen architecture.', gh:'https://github.com/Taha-mask/flick'},
    {title:'My Assistant', desc:'Always-on Windows voice assistant powered by a local Ollama LLM.', gh:'https://github.com/Taha-mask/my_assistant'},
    {title:'Pomodoro Timer', desc:'Flutter focus timer using Cubit state management and SQLite.', gh:'https://github.com/Taha-mask/Pomodoro'},
    {title:'Encryption Platform', desc:'Full-stack cryptography toolkit with real-time encrypted chat.', gh:'https://github.com/Taha-mask/Encryption'},
    {title:'Lawyer Assistant System', desc:'Web-based case management desk for a law firm.', gh:null}
  ],
  skills: {
    tag: "Tech stack",
    title: "Skills & Tools",
    sub: "Two specialties, one developer — web and Flutter backed by a solid foundation.",
    webCol: "Web Development",
    flutterCol: "Flutter & Mobile",
    webSkills: [
      {n:'HTML / CSS',pct:95},{n:'JavaScript',pct:88},
      {n:'Angular',pct:85},{n:'TypeScript',pct:82},
      {n:'Bootstrap',pct:90},{n:'REST APIs',pct:80},
      {n:'Supabase',pct:78},
    ],
    flutterSkills: [
      {n:'Flutter',pct:85},{n:'Dart',pct:83},
      {n:'Material UI',pct:88},{n:'Supabase',pct:78},
      {n:'State Mgmt',pct:75},{n:'Firebase',pct:65},
      {n:'SQL',pct:72},
    ]
  },
  educationSec: {
    tag: "Background",
    title: "Education",
    sub: "The formal track behind the code — technical secondary school, then university.",
    currentBadge: "current",
    /* Ordered oldest → newest: the section is read as a timeline, so the
       "current" item earns the bottom slot the eye lands on last. */
    items: [
      {
        institution: 'Integrated Technical Education Cluster (ITEC) Assiut',
        field: 'Technical Secondary Education',
        period: '3 Years',
        current: false
      },
      {
        institution: 'Assiut International Technological University (AITU)',
        field: 'Information Technology',
        period: '2025 – Present',
        current: true
      }
    ]
  },
  trainingSec: {
    tag: "Experience",
    title: "Training & Teaching",
    sub: "Practical experience from the other side of the classroom.",
    org: "Digital Spark Initiative (DSI)",
    role: "Instructor / Trainer",
    topic: "Flutter Training",
    desc: "I participated in providing Flutter training to students through the Digital Spark Initiative (DSI).",
    points: [
      "Training students in Flutter and Dart.",
      "Helping students understand practical development concepts.",
      "Guiding students through exercises and application development."
    ],
    tags: ['Flutter', 'Dart']
  },
  certsSec: {
    tag: "Credentials",
    title: "Certifications & Achievements",
    sub: "Technical coursework and recognition picked up along the way.",
    moreTitle: "Achievements & Additional Certificates",
    showAll: "View All Certificates",
    showLess: "Show Less",
    imgAlt: "Certificate:",
    viewLabel: "View certificate",
    closeLabel: "Close",
    /* `hours` is an empty string, not null, where no duration was issued —
       it keeps the record shape identical across both locale files, which is
       what lets the shared components read either one. */
    featured: [
      {
        title: 'Data Analysis',
        issuer: 'Egypt Makes Electronics (EME) · ITIDA / Ideaspace',
        hours: '40 Hours',
        img: '/certificates/data-analysis.jpg'
      },
      {
        title: 'Introduction to AI',
        issuer: 'Almadrasah',
        hours: '',
        img: '/certificates/intro-ai.jpg'
      },
      {
        title: 'JavaScript',
        issuer: 'ITI Platform / Mahara-Tech',
        hours: '7 Hours',
        icon: 'bxl-javascript',
        img: '/certificates/javascript.jpg'
      },
      {
        title: 'Introduction to Database',
        issuer: 'Information Technology Institute (ITI)',
        hours: '30 Hours',
        img: '/certificates/database.jpg'
      },
      {
        title: 'Network Basics',
        issuer: 'Information Technology Institute (ITI)',
        hours: '30 Hours',
        img: '/certificates/network-basics.jpg'
      },
      {
        title: 'Introduction to Internet of Things (IoT)',
        issuer: 'Cisco Networking Academy',
        hours: '',
        img: '/certificates/iot.jpg'
      }
    ],
    more: [
      {
        title: 'Arduino',
        issuer: 'Egypt Makes Electronics (EME) · ITIDA / Ideaspace',
        hours: '24 Hours',
        note: '',
        img: '/certificates/arduino.jpg'
      },
      {
        title: 'Certificate of Appreciation — AITU',
        issuer: 'Assiut International Technological University (AITU)',
        hours: '',
        note: 'Recognition for contribution, creativity, and providing innovative solutions that support the academic community and promote innovation in technology.',
        img: '/certificates/aitu-appreciation.jpg'
      },
      {
        title: 'DIGITOPIA — Programming & AI',
        issuer: '',
        hours: '',
        note: 'Participation in the competition and successful completion of the second stage of the first 2025 edition.',
        img: '/certificates/digitopia.jpg'
      },
      {
        title: 'Certificate of Appreciation — Windows Forms & Database Project',
        issuer: '',
        hours: '',
        note: 'Recognition for presenting the project and demonstrating technical explanation and professional communication skills.',
        img: '/certificates/winforms-appreciation.jpg'
      }
    ]
  },
  about: {
    tag: "About",
    title: "Who am I?",
    nameLabel: 'Name',
    nameVal: 'Taha Mahmoud',
    ageLabel: 'Age',
    ageVal: '19',
    roleLabel: 'Role',
    roleVal: 'Web & Flutter Developer',
    univLabel: 'University',
    univVal: 'AITU — Assiut, Egypt',
    buildingLabel: 'Currently building',
    buildingVal: 'BaladUp — community Flutter app',
    webStackLabel: 'Web stack',
    webStackVal: 'Angular · TypeScript · Supabase',
    mobileStackLabel: 'Mobile stack',
    mobileStackVal: 'Flutter · Dart · Supabase',
    interestsLabel: 'Interests',
    interestsVal: 'Algorithms · automation · content creation',
    openLabel: 'Open to work',
    openVal: 'Yes',
    emailLabel: 'Email',
    emailVal: 'iam.tahamahmoud@gmail.com',
    comment: 'Always learning, always shipping.'
  },
  contact: {
    tag: "Contact",
    title: "Let's Build Together",
    sub: "Have a project in mind? I'm open to freelance work, collaborations, and full-time opportunities.",
    emailLabel: "email",
    githubLabel: "github",
    linkedinLabel: "linkedin",
    locationLabel: "location",
    locationVal: "Assiut, Egypt — GMT+3",
    formName: "Your name",
    formEmail: "Your email",
    formProject: "What kind of project?",
    optWeb: "Web App",
    optFlutter: "Flutter App",
    optBoth: "Web + Flutter",
    optOther: "Other",
    formMsg: "Tell me about your project",
    sendBtn: "Send message",
    sending: "Sending…",
    success: "Message sent — thank you",
    failed: "Couldn't send",
    errorMsg: "Something went wrong — email me directly instead.",
    noAccessKey: "Form isn't wired up yet — email me directly instead."
  },
  footer: {
    crafted: "Designed and built by Taha Mahmoud",
    github: "GitHub",
    linkedin: "LinkedIn",
    email: "Email"
  },
  a11y: {
    switchTheme: "Switch theme",
    toggleMenu: "Toggle navigation menu",
    themeToLight: "Switch to light theme",
    themeToDark: "Switch to dark theme",
    // Rendered as e.g. "Switch to AR" — the picker appends the target locale.
    switchTo: "Switch to"
  },
  layout: {
    title: "Taha Mahmoud | Web & Flutter Developer",
    keywords: "Taha Mahmoud, Web Developer, Flutter Developer, Angular, TypeScript, Supabase, Mobile Developer, Egypt, Assiut",
    description: "Web & Flutter Developer specializing in Angular, TypeScript, and Flutter. Building responsive web apps and cross-platform mobile experiences from Egypt."
  }
};
