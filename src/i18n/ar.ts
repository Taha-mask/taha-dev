export const ar = {
  nav: {
    projects: "المشاريع",
    skills: "المهارات",
    education: "التعليم",
    certs: "الشهادات",
    about: "نبذة عني",
    contact: "تواصل معي",
    available: "متاح للعمل"
  },
  hero: {
    tag: "مطور ويب وفلاتر — مصر",
    firstName: "طه",
    lastName: "محمود.",
    desc: "أقوم ببناء تطبيقات ويب وموبايل سريعة وقابلة للتطوير. أركز على نظافة الكود، وتجربة المستخدم المميزة، والبرمجيات القابلة للإطلاق الفعلي.",
    viewProjects: "عرض المشاريع",
    letsTalk: "دعنا نتحدث",
    stats: {
      projects: "المشاريع",
      exp: "سنوات الخبرة",
      clients: "عملاء سعداء"
    }
  },
  spec: {
    webLabel: "تطوير الويب",
    webSub: "Angular · TypeScript · HTML/CSS · JS",
    flutterLabel: "تطوير فلاتر",
    flutterSub: "Dart · منصات متعددة · Material UI",
    backendLabel: "الخوادم وقواعد البيانات",
    backendSub: "Supabase · SQL · REST APIs"
  },
  projectsSec: {
    tag: "أعمال مختارة",
    title: "أبرز دراسات الحالة",
    sub: "نظرة متعمقة على أهم مشاريعي الأخيرة.",
    role: "الدور",
    surface: "المنصة",
    audience: "الجمهور",
    problemLabel: "المشكلة",
    approachLabel: "الطريقة",
    challengeLabel: "أصعب جزء",
    resultLabel: "النتيجة",
    visitLive: "زيارة الموقع الحي ↗",
    viewSource: "عرض كود المصدر ↗",
    privateSource: "الكود المصدري خاص",
    otherTitle: "تجارب ومشاريع أخرى",
    ghLabel: "↖ جيت هاب",
    privateRepo: "مستودع خاص"
  },
  caseStudies: [
    {
      id: 'elbasha',
      num: '01',
      title: 'مطعم الباشا',
      status: 'يعمل حالياً',
      statusClass: 'status-prod',
      role: 'مطور شامل (Full-stack)',
      surface: 'ويب · SSR + ثابت',
      audience: 'عملاء المطعم المصري في الدائرة العشرين بباريس',
      tech: ['Astro 5 SSR', 'Tailwind v4', 'Supabase', 'TypeScript'],
      live: 'https://elbasha.fr',
      liveLabel: null,
      gh: null,
      problem: 'بناء تواجد رقمي لمطعم مصري في فرنسا، للسماح للعملاء العابرين برؤية قصة المطعم والمنيو عبر الإنترنت.',
      approach: 'قمت ببناء تطبيق Astro SSR مع لوحة تحكم إدارية كاملة. يمكن للمالك إدارة الأطباق، الصور، التصنيفات، وروابط التوصيل المباشرة (مثل Uber Eats, Deliveroo).',
      challenge: 'التطبيق مستضاف على خادمين مختلفين: o2switch للعميل و Vercel للاختبار. تم حل ذلك عن طريق إعداد astro.config.mjs لاختيار المحول (adapter) المناسب ديناميكياً بناءً على متغيرات البيئة.',
      result: 'موقع مطعم جاهز للإنتاج يجمع بين الحضور الرقمي للمطعم، إدارة المنيو، وروابط مباشرة لمنصات التوصيل — يمكن للعميل اكتشاف الطبق والانتقال مباشرة لصفحة الطلب.'
    },
    {
      id: 'illustre',
      num: '02',
      title: 'Illustre للاستشارات',
      status: 'يعمل حالياً',
      statusClass: 'status-prod',
      role: 'مطور شامل (Full-stack)',
      surface: 'ويب · SSR',
      audience: 'أصحاب المطاعم الباحثين عن استشارات تشغيلية',
      tech: ['Astro 6', 'Tailwind v4', 'Supabase', 'TypeScript'],
      live: 'https://illustre-consulting.com',
      liveLabel: null,
      gh: null,
      problem: 'كان المستشار بحاجة إلى تواجد احترافي عبر الإنترنت حيث يمكن لأصحاب المطاعم فهم خدماته (التشغيل الميداني، توظيف وتدريب الموظفين، العمل على المنيو، تحسين الإيرادات) والتواصل معه.',
      approach: 'قمت ببناء موقع يركز على الخدمات مع صفحات خدمات منظمة، إدارة المحتوى، التقييمات، ومسار تواصل مصمم لتحويل أصحاب المطاعم إلى عملاء محتملين.',
      challenge: 'بناء نظام محتوى مرن يسمح للمستشار بتحديث خدماته، المحتوى المتعلق بالحالات، المقالات، والتقييمات باستمرار دون الاعتماد على مطور.',
      result: 'موقع احترافي يمنح المستشار تواجداً قوياً في قطاع المطاعم الفرنسي ويوفر قناة مباشرة لأصحاب المطاعم لاكتشاف خدماته والتواصل معه.'
    },
    {
      id: 'ramadan',
      num: '03',
      title: 'مخطط رمضان',
      status: 'متاح للتحميل',
      statusClass: 'status-live',
      role: 'مطور وحيد',
      surface: 'تطبيق موبايل · Android/iOS + ويدجات',
      audience: 'المسلمون لتخطيط رمضان · عربي/إنجليزي',
      tech: ['Flutter', 'Dart', 'Provider', 'SQLite', 'adhan', 'workmanager'],
      live: 'https://drive.google.com/file/d/1_gjcx5ubK2dY9ySdjOhHfFqNVKw2Qe3j/view?usp=drive_link',
      liveLabel: 'تحميل التطبيق ↗',
      gh: 'https://github.com/Taha-mask/Ramadan_planner',
      problem: 'تطبيقات رمضان الحالية إما تعرض مواقيت الصلاة فقط أو تقدم قائمة مهام بسيطة. المستخدمون يحتاجون للاثنين في مكان واحد يعمل بدون إنترنت تماماً.',
      approach: 'كل شيء يعمل محلياً: حساب مواقيت الصلاة عبر adhan + GPS بدون واجهات برمجية خارجية، قاعدة بيانات محلية SQLite. يشمل 4 ويدجات للشاشة الرئيسية.',
      challenge: 'حساب مواقيت الصلاة المحلية بدقة وإشعارات مجدولة موثوقة أثناء العمل بدون إنترنت والتعامل مع التشغيل في الخلفية والمناطق الزمنية.',
      result: 'تطبيق تخطيط رمضاني متكامل يعمل بدون إنترنت يجمع بين حساب مواقيت الصلاة، القرآن والأذكار، المهام، الإحصائيات، ويدجات الشاشة الرئيسية، والإشعارات المجدولة.'
    },
    {
      id: 'patarif',
      num: '04',
      title: 'منصة باتاريف',
      status: 'قيد التطوير',
      statusClass: 'status-wip',
      role: 'مطور واجهات أمامية',
      surface: 'ويب · متجاوب',
      audience: 'الأطفال وأولياء أمورهم',
      tech: ['Angular 19.2 SSR', 'TypeScript', 'Supabase (RLS)', 'Stripe', 'PostgreSQL'],
      live: null,
      liveLabel: null,
      gh: null,
      problem: 'منصة للأطفال تحتاج إلى محتوى تفاعلي مرح مع منح المشرفين تحكماً كاملاً في القصص والشخصيات والصوتيات دون إعادة النشر.',
      approach: 'تم بناؤها باستخدام Angular 19 SSR ولوحة تحكم إدارية كاملة. تستخدم Supabase Edge Functions لمدفوعات Stripe. وتشمل قسماً للمستخدمين الأكبر سناً.',
      challenge: 'الحفاظ على توافق قواعد الوصول في الواجهة الأمامية مع Supabase RLS عبر واجهات العملاء والمشرفين.',
      result: 'حالياً قيد التطوير: 11 لعبة تفاعلية، قصص ديناميكية، قسم تعليمي، متجر، وشخصيات.'
    },
    {
      id: 'baladup',
      num: '05',
      title: 'BaladUp — نظام التوصيل المحلي',
      status: 'قيد التطوير',
      statusClass: 'status-wip',
      role: 'مطور شامل (Full-stack)',
      surface: '4 تطبيقات (العميل، الطيار، التاجر، الإدارة)',
      audience: 'العملاء، التجار، والطيارون المحليون',
      tech: ['Flutter', 'Next.js 14', 'React 18', 'Supabase + PostGIS', 'Tailwind'],
      live: null,
      liveLabel: null,
      gh: null,
      problem: 'نظام توصيل يتطلب 4 واجهات مختلفة تحتاج جميعها إلى تحديثات في الوقت الفعلي لنفس الطلب دون تكرار الكود البرمجي.',
      approach: 'تم استخدام قاعدة بيانات Supabase واحدة بـ 33 جدولاً. واستخدام حزم مشتركة، مع اشتراك كافة التطبيقات في تحديثات قواعد البيانات الآنية لتتبع الطلبات.',
      challenge: 'سلة المشتريات متعددة المتاجر تنقسم إلى طلبات منفصلة تحت نفس مجموعة الطلبات، برسوم توصيل وتعيين طيارين بشكل مستقل.',
      result: 'تطبيقات العميل والتاجر تعمل بشكل كامل وهي قيد التطوير النشط.'
    }
  ],
  otherBuilds: [
    {title:'Flick', desc:'تطبيق لاكتشاف الأفلام مبني بـ Flutter بهيكلية نظيفة متعددة الشاشات.', gh:'https://github.com/Taha-mask/flick'},
    {title:'مساعدي الشخصي', desc:'مساعد صوتي لنظام Windows يعمل باستمرار ومدعوم بنموذج ذكاء اصطناعي محلي Ollama.', gh:'https://github.com/Taha-mask/my_assistant'},
    {title:'مؤقت بومودورو', desc:'مؤقت للتركيز مبني بـ Flutter باستخدام Cubit و SQLite.', gh:'https://github.com/Taha-mask/Pomodoro'},
    {title:'منصة التشفير', desc:'مجموعة أدوات تشفير كاملة مع دردشة مشفرة في الوقت الفعلي.', gh:'https://github.com/Taha-mask/Encryption'},
    {title:'نظام مساعد المحامي', desc:'مكتب إدارة قضايا قائم على الويب لمكتب محاماة.', gh:null}
  ],
  skills: {
    tag: "التقنيات",
    title: "المهارات والأدوات",
    sub: "تخصصان ومطور واحد — الويب وفلاتر مدعومان بأساس متين.",
    webCol: "تطوير الويب",
    flutterCol: "فلاتر وتطوير الموبايل",
    webSkills: [
      {n:'HTML / CSS',pct:95},{n:'JavaScript',pct:88},
      {n:'Angular',pct:85},{n:'TypeScript',pct:82},
      {n:'Bootstrap',pct:90},{n:'REST APIs',pct:80},
      {n:'Supabase',pct:78},
    ],
    flutterSkills: [
      {n:'Flutter',pct:85},{n:'Dart',pct:83},
      {n:'Material UI',pct:88},{n:'Supabase',pct:78},
      {n:'إدارة الحالة',pct:75},{n:'Firebase',pct:65},
      {n:'SQL',pct:72},
    ]
  },
  educationSec: {
    tag: "الخلفية الدراسية",
    title: "التعليم",
    sub: "المسار الأكاديمي وراء الكود — تعليم فني ثانوي، ثم الجامعة.",
    currentBadge: "حالياً",
    /* مرتبة من الأقدم إلى الأحدث: القسم يُقرأ كخط زمني، فيأخذ البند الحالي
       الموضع الأخير الذي تستقر عليه العين. */
    items: [
      {
        institution: 'Integrated Technical Education Cluster (ITEC) Assiut',
        field: 'التعليم الثانوي الفني',
        period: '3 سنوات',
        current: false
      },
      {
        institution: 'Assiut International Technological University (AITU)',
        field: 'تكنولوجيا المعلومات',
        period: '2025 – حتى الآن',
        current: true
      }
    ]
  },
  trainingSec: {
    tag: "الخبرة",
    title: "التدريب والتعليم",
    sub: "خبرة عملية من الجهة الأخرى من قاعة التدريب.",
    org: "Digital Spark Initiative (DSI)",
    role: "مدرّب",
    topic: "تدريب Flutter",
    desc: "شاركت في تقديم تدريب على Flutter للطلاب من خلال مبادرة Digital Spark Initiative (DSI).",
    points: [
      "تدريب الطلاب على Flutter و Dart.",
      "مساعدة الطلاب على فهم مفاهيم التطوير العملية.",
      "إرشاد الطلاب خلال التمارين وبناء التطبيقات."
    ],
    tags: ['Flutter', 'Dart']
  },
  certsSec: {
    tag: "شهاداتي",
    title: "الشهادات والإنجازات",
    sub: "دورات تقنية وتقديرات جمعتها على طول الطريق.",
    moreTitle: "إنجازات وشهادات إضافية",
    showAll: "عرض كل الشهادات",
    showLess: "عرض أقل",
    imgAlt: "شهادة:",
    viewLabel: "عرض الشهادة",
    closeLabel: "إغلاق",
    /* أسماء الجهات المانحة تبقى بحروف لاتينية كما هي رسمياً — مثل بقية أسماء
       التقنيات في الموقع — حتى لا تُترجم أسماء علم ترجمة غير رسمية. */
    featured: [
      {
        title: 'تحليل البيانات',
        issuer: 'Egypt Makes Electronics (EME) · ITIDA / Ideaspace',
        hours: '40 ساعة',
        img: '/certificates/data-analysis.jpg'
      },
      {
        title: 'مقدمة في الذكاء الاصطناعي',
        issuer: 'Almadrasah',
        hours: '',
        img: '/certificates/intro-ai.jpg'
      },
      {
        title: 'JavaScript',
        issuer: 'ITI Platform / Mahara-Tech',
        hours: '7 ساعات',
        icon: 'bxl-javascript',
        img: '/certificates/javascript.jpg'
      },
      {
        title: 'مقدمة في قواعد البيانات',
        issuer: 'Information Technology Institute (ITI)',
        hours: '30 ساعة',
        img: '/certificates/database.jpg'
      },
      {
        title: 'أساسيات الشبكات',
        issuer: 'Information Technology Institute (ITI)',
        hours: '30 ساعة',
        img: '/certificates/network-basics.jpg'
      },
      {
        title: 'مقدمة في إنترنت الأشياء (IoT)',
        issuer: 'Cisco Networking Academy',
        hours: '',
        img: '/certificates/iot.jpg'
      }
    ],
    more: [
      {
        title: 'Arduino',
        issuer: 'Egypt Makes Electronics (EME) · ITIDA / Ideaspace',
        hours: '24 ساعة',
        note: '',
        img: '/certificates/arduino.jpg'
      },
      {
        title: 'شهادة تقدير — AITU',
        issuer: 'Assiut International Technological University (AITU)',
        hours: '',
        note: 'تقديراً للمساهمة والإبداع وتقديم حلول مبتكرة تدعم المجتمع الأكاديمي وتعزز الابتكار في التكنولوجيا.',
        img: '/certificates/aitu-appreciation.jpg'
      },
      {
        title: 'DIGITOPIA — البرمجة والذكاء الاصطناعي',
        issuer: '',
        hours: '',
        note: 'المشاركة في المسابقة واجتياز المرحلة الثانية من النسخة الأولى لعام 2025 بنجاح.',
        img: '/certificates/digitopia.jpg'
      },
      {
        title: 'شهادة تقدير — مشروع Windows Forms وقاعدة البيانات',
        issuer: '',
        hours: '',
        note: 'تقديراً لعرض المشروع وإظهار مهارات الشرح التقني والتواصل المهني.',
        img: '/certificates/winforms-appreciation.jpg'
      }
    ]
  },
  about: {
    tag: "نبذة",
    title: "من أنا؟",
    nameLabel: 'الاسم',
    nameVal: 'طه محمود',
    ageLabel: 'العمر',
    ageVal: '19',
    roleLabel: 'المجال',
    roleVal: 'مطور ويب وفلاتر',
    univLabel: 'الجامعة',
    univVal: 'AITU — أسيوط، مصر',
    buildingLabel: 'أعمل حالياً على',
    buildingVal: 'BaladUp — تطبيق مجتمعي',
    webStackLabel: 'تقنيات الويب',
    webStackVal: 'Angular · TypeScript · Supabase',
    mobileStackLabel: 'تقنيات الموبايل',
    mobileStackVal: 'Flutter · Dart · Supabase',
    interestsLabel: 'الاهتمامات',
    interestsVal: 'الخوارزميات · الأتمتة · صناعة المحتوى',
    openLabel: 'متاح للعمل',
    openVal: 'نعم',
    emailLabel: 'البريد',
    emailVal: 'iam.tahamahmoud@gmail.com',
    comment: 'دائم التعلم، دائم التطوير.'
  },
  contact: {
    tag: "تواصل",
    title: "دعنا نبني معاً",
    sub: "هل لديك مشروع في ذهنك؟ أنا منفتح على العمل الحر، التعاونات، والفرص بدوام كامل.",
    emailLabel: "البريد الإلكتروني",
    githubLabel: "جيت هاب",
    linkedinLabel: "لينكد إن",
    locationLabel: "الموقع",
    locationVal: "أسيوط، مصر — GMT+3",
    formName: "اسمك",
    formEmail: "بريدك الإلكتروني",
    formProject: "نوع المشروع",
    optWeb: "تطبيق ويب",
    optFlutter: "تطبيق فلاتر",
    optBoth: "ويب + فلاتر",
    optOther: "أخرى",
    formMsg: "حدثني عن مشروعك",
    sendBtn: "إرسال الرسالة",
    sending: "جاري الإرسال...",
    success: "تم الإرسال — شكراً لك",
    failed: "تعذر الإرسال",
    errorMsg: "حدث خطأ — راسلني مباشرة عبر البريد الإلكتروني.",
    noAccessKey: "النموذج غير مجهز — راسلني مباشرة عبر البريد الإلكتروني."
  },
  footer: {
    crafted: "تصميم وبرمجة طه محمود",
    github: "جيت هاب",
    linkedin: "لينكد إن",
    email: "البريد الإلكتروني"
  },
  a11y: {
    switchTheme: "تبديل المظهر",
    toggleMenu: "فتح وإغلاق القائمة",
    themeToLight: "التبديل إلى المظهر الفاتح",
    themeToDark: "التبديل إلى المظهر الداكن",
    // يظهر مثلاً "التبديل إلى EN" — منتقي اللغة يضيف رمز اللغة.
    switchTo: "التبديل إلى"
  },
  layout: {
    title: "طه محمود | مطور ويب وفلاتر",
    keywords: "طه محمود, مطور ويب, مطور فلاتر, Angular, TypeScript, Supabase, مطور تطبيقات موبايل, مصر, أسيوط",
    description: "مطور ويب وفلاتر متخصص في Angular، TypeScript، و Flutter. أقوم ببناء تطبيقات ويب متجاوبة وتجارب موبايل متعددة المنصات من مصر."
  }
};
