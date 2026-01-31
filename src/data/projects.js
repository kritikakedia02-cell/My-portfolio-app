const projects = [
  {
    id: 1,
    slug: 'mindbuddy',
    title: 'Mindbuddy',
    subtitle: 'Making Invisible Work Toxicity Visible',
    tagline: 'AI-powered clarity for professionals navigating unhealthy work environments',
    demoUrl: 'https://lovable.dev/projects/421923b0-903a-47e7-ab15-6b06a43ffe02',
    image: '/projects/mindbuddy.png',
    icon: '/projects/mindbuddy-icon.png',
    cardTitle: 'Mindbuddy',
    cardDesc: 'AI-powered clarity for professionals navigating unhealthy work environments',
    cardStats: [
      { label: 'Report Burnout', value: '71%' },
      { label: 'Quit Due to Leadership', value: '60%' },
    ],
    meta: {
      category: 'Consumer Wellness \u00d7 Workplace Intelligence (AI-powered)',
      role: 'Product Manager (0\u21921)',
      audience: 'Mid-career professionals in tech & knowledge-work roles',
      market: 'India (Tier-1 & Tier-2 tech hubs)',
    },
    stats: [
      { value: '71%', label: 'Report Burnout', desc: 'Mid-career professionals experiencing chronic exhaustion' },
      { value: '60%', label: 'Quit Due to Leadership', desc: 'Toxic management drives attrition' },
      { value: '52%', label: 'Demand Flexibility', desc: 'Would leave without work-life balance' },
    ],
    overview: 'MindBuddy helps employees objectively understand the health of their workplace by analyzing real behavioral signals\u2014not surveys or opinions. It surfaces early toxicity patterns, explains what\u2019s driving them, and supports informed decisions before burnout turns into attrition.',
    sections: [
      {
        heading: 'Challenge',
        body: 'Designing MindBuddy wasn\u2019t about building another \u201cmental health app.\u201d The real challenge was deeper: How do you detect toxicity without relying on self-reporting alone? How do you give users clarity without pushing them into panic or impulsive quitting? How do you build trust when the product analyzes sensitive workplace data? How do you ensure the product empowers employees\u2014not HR teams or managers?',
      },
      {
        heading: 'Problem Space',
        body: 'Workplace toxicity doesn\u2019t show up as one bad day\u2014it builds quietly. In Indian tech teams, constant after-hours work, micromanagement, and unspoken pressure to always be \u201con\u201d have become normalized. 70%+ of professionals report burnout, and nearly 60% leave roles due to toxic leadership, yet most employees still can\u2019t tell whether they\u2019re facing temporary stress or a structurally unhealthy environment. Current solutions react too late or solve the wrong problem. HR surveys and exit interviews surface truth after disengagement has already set in, while wellness apps treat symptoms, not causes.',
      },
      {
        heading: 'My Role',
        body: 'I owned the product end-to-end: leading primary and secondary user research, framing workplace toxicity as a systemic socio-technical problem, defining the MVP scope and non-goals, designing the toxicity scoring logic and decision framework, shaping the user journey from first insight to action, and making judgment calls on where AI adds value\u2014and where it shouldn\u2019t. North star: Clarity > Comfort. Agency > Advice. Signals > Opinions.',
      },
      {
        heading: 'The Solution',
        body: 'MindBuddy is a workplace health monitor that uses behavioral signals\u2014not opinions\u2014to surface toxicity patterns early and guide action. Core capabilities include: a Toxicity Score & Triggers Dashboard (0\u201310 score derived from Gmail and Slack activity), Actionable Micro-Nudges, a Conversational Chatbot for emotional context, and a Stay-or-Leave Decision Compass\u2014a weighted framework combining toxicity, distress, job intent, and market context.',
      },
      {
        heading: 'Why AI (and Where It Stops)',
        body: 'AI was used deliberately and conservatively. AI-assisted pattern detection, not decision-making. Scoring logic remained transparent and rule-based. The product avoided \u201cone giant prompt\u201d thinking. The goal was trustworthy augmentation, not automation of judgment.',
      },
      {
        heading: 'Impact & Key Learnings',
        body: '~3.5 million Indian tech professionals actively experience workplace toxicity. MindBuddy occupies a unique position: diagnose \u2192 validate \u2192 guide. Key learnings: Behavior beats perception when diagnosing systemic problems. AI amplifies clarity\u2014never replaces judgment. Trust is not a feature; it\u2019s a design constraint. Emotionally vulnerable users need explainability over intelligence.',
      },
      {
        heading: 'Product Snapshots',
        body: '',
      },
      {
        heading: 'Conclusion',
        body: 'MindBuddy reinforced a belief I hold strongly: The most impactful products don\u2019t shout solutions. They help people see clearly\u2014and choose deliberately.',
      },
    ],
  },
  {
    id: 2,
    slug: 'pocketwise',
    title: 'Pocketwise',
    subtitle: 'Unified Subscription Manager',
    tagline: 'AI\u2011assisted subscription management platform designed to stop silent money leaks caused by forgotten, unused, or hard\u2011to\u2011cancel subscriptions',
    demoUrl: 'https://preview--group-5-pocket-wise.lovable.app/',
    image: '/projects/pocketwise.png',
    icon: '/projects/pocketwise-icon.png',
    cardTitle: 'PocketWise: Unified Subscription Manager',
    cardDesc: 'An AI-assisted subscription management platform designed to stop silent money leaks caused by forgotten, unused, or hard\u2011to\u2011cancel subscriptions.',
    cardStats: [
      { label: 'Forgot renewal dates', value: '56%' },
      { label: 'Wasted on unused subscriptions in India', value: '\u20B96,750 Cr' },
    ],
    meta: {
      category: 'Consumer FinTech / Subscription Management',
      role: 'Product Manager (0\u21921)',
      market: 'India-first (UPI-led ecosystem; urban salaried users 22\u201335)',
    },
    stats: [
      { value: '56%', label: 'Forgot Renewal Dates', desc: 'Users unaware of upcoming subscription debits' },
      { value: '\u20B96,750 Cr', label: 'Wasted Annually', desc: 'On unused subscriptions in India' },
      { value: '50%', label: 'Find Cancellation Hard', desc: 'Multi-step flows discourage cancellation' },
    ],
    overview: 'Built for India\u2019s fragmented UPI + card ecosystem, PocketWise gives users a single source of truth for all subscriptions, proactive renewal alerts, usage\u2011vs\u2011cost clarity, and one\u2011tap cancellation.',
    sections: [
      {
        heading: 'Challenge',
        body: 'The challenge was to identify a recurring, behavior\u2011driven financial problem, design an India\u2011first solution aligned with UPI AutoPay realities, apply AI meaningfully (not as a buzzword), ship a credible MVP in under one month, and demonstrate full\u2011stack product thinking (discovery \u2192 UX \u2192 systems \u2192 metrics). Constraints included limited time, restricted access to bank APIs, regulatory boundaries (UPI mandates), and the need to balance trust, privacy, and automation.',
      },
      {
        heading: 'How We Identified the Problem',
        body: 'Early cohort discussions surfaced a shared frustration: surprise debits from apps users hadn\u2019t opened in months. Subscriptions are scattered across UPI AutoPay, cards, app stores, and telcos\u2014no single place shows everything. Most alerts arrive 24 hours before debit or get buried in SMS/email noise. Multi\u2011step flows, hidden settings, OTP loops, and merchant redirects discourage cancellation. Despite digital maturity, 27\u201335% of subscriptions in India go unused or forgotten, resulting in ~\u20B96,750 crore wasted annually. This signaled a product gap\u2014not a behavior problem.',
      },
      {
        heading: 'What User Research Revealed',
        body: 'We conducted quantitative surveys with 100+ respondents and 18 in\u2011depth interviews with working professionals (ages 22\u201335). ~30\u201335% of active subscriptions are unused regardless of how many a user has. 68% admit they don\u2019t track subscriptions effectively. 70% find SMS/email renewal alerts ineffective. Small charges (\u20B999\u2013\u20B9249) are most likely to be ignored. The most critical insight: People don\u2019t overspend on subscriptions\u2014they underserve cancellation. This reframed the problem from spend tracking to pre\u2011emptive control.',
      },
      {
        heading: 'The Solution',
        body: 'PocketWise is a unified subscription management platform that works before money leaves the user\u2019s account. Users can see all subscriptions across UPI, cards, and app stores in one dashboard, get predictive multi\u2011stage renewal alerts (7/5/2 days), instantly identify dead or duplicate spend, cancel or pause subscriptions in 1\u20132 taps, and see clear savings impact after every action. Instead of asking users to \u201cbe more careful,\u201d PocketWise fixes the system that causes the leak.',
      },
      {
        heading: 'My Role',
        body: 'I owned the product end\u2011to\u2011end: led problem discovery, surveys, and user interviews; synthesised behavioral + market research into clear product insights; defined the product vision, MVP scope, and non\u2011goals; designed core user journeys and feature logic; translated financial behavior into actionable UX; and ensured feasibility within UPI, card, and merchant constraints. Guiding principle: don\u2019t build another expense tracker\u2014build a control system.',
      },
      {
        heading: 'Platform Creation Process (with AI)',
        body: 'We began with a tightly scoped MVP PRD, clearly defining target users, core pain points, system constraints, explicit non\u2011goals, and success metrics tied to money saved. We finalized Lovable + Replit for rapid UI iteration, fast logic experimentation, and deployment\u2011ready prototypes. AI\u2011assisted subscription detection, classification, and inactivity heuristics. No autonomous decisions\u2014AI surfaced insights, users stayed in control. Matching logic was rule\u2011first, AI\u2011augmented.',
      },
      {
        heading: 'Learnings & Future Development',
        body: 'Ease of building increases the cost of poor discovery\u2014speed without clarity produces shallow products. AI rewards strong product thinking; vague problems lead to useless automation. Financial UX is about trust, not dashboards\u2014control beats visualization. Small numbers hide big losses; micro\u2011spends compound silently unless surfaced early. Planned next steps: family and shared subscription deduplication, smart downgrade suggestions, SMB and freelancer modes, regional language support, and deeper usage integrations with merchants.',
      },
      {
        heading: 'Conclusion',
        body: 'PocketWise was built under tight constraints but with deliberate product discipline. It demonstrates how fixing systemic UX failures\u2014rather than blaming users\u2014can unlock real financial impact. This is not about saving money occasionally. It\u2019s about stopping money from leaking by default.',
      },
    ],
  },
  {
    id: 3,
    slug: 'blr-orr',
    title: 'BLR-ORR Action Console',
    subtitle: 'Corridor-First Traffic Management Platform',
    tagline: 'Translates fragmented traffic data into real-time, prescriptive actions\u2014telling operators what to do, who should do it, and by when',
    demoUrl: 'https://nacre-skirr-89810319.figma.site/',
    image: '/projects/blr-orr.png',
    icon: '/projects/blr-orr-icon.png',
    cardTitle: 'Bengaluru \u2013 ORR Congestion Management',
    cardDesc: 'Traffic Hatao',
    cardStats: [
      { label: 'Lower corridor wait times', value: '20%' },
      { label: 'Less manual coordination', value: '30\u201340%' },
    ],
    meta: {
      category: 'Urban Mobility / GovTech / B2G SaaS',
      role: 'Product Manager (0\u21921)',
      market: 'India (Pilot: Bengaluru \u2013 Outer Ring Road)',
    },
    stats: [
      { value: '60%', label: 'Faster Incident Response', desc: 'Reduced operator decision latency' },
      { value: '20%', label: 'Lower Corridor Wait Times', desc: 'Junction-level queue reduction' },
      { value: '30\u201340%', label: 'Less Manual Coordination', desc: 'Fewer phone calls between agencies' },
    ],
    overview: 'India\u2019s cities are data-rich but action-poor. Bengaluru\u2019s ORR is a 62 km arterial corridor serving 1.5\u20132 million commuters daily and ~33% of Bengaluru\u2019s IT exports. ORR Action Console closes the biggest mobility gap: we monitor traffic well, but we don\u2019t manage it well. If congestion can be managed here, the solution can scale nationally.',
    sections: [
      {
        heading: 'Challenge',
        body: 'The challenge was not to \u201creduce traffic\u201d in theory\u2014but to design a credible execution system that works with existing infrastructure (no new flyovers, no civil work), reduces operator decision latency in real time, coordinates multiple agencies without adding complexity, shows visible relief not just dashboards, and can scale corridor-by-corridor across Indian cities. Constraints included partial infrastructure rollout, fragmented ownership across agencies, and low public trust in traffic tech.',
      },
      {
        heading: 'Problem Discovery',
        body: 'Urban traffic systems show congestion\u2014but don\u2019t prescribe or execute coordinated actions, allowing small disruptions to snowball into corridor-wide lockups. India loses ~\u20B91.5 lakh crore annually due to congestion; Bengaluru alone loses ~\u20B920,000 crore. ORR commuters lose 60\u2013120 minutes daily. Ambulances are delayed by 3\u201310 minutes on ORR. Despite this, congestion on ORR is predictable, not random\u2014yet remains unmanaged.',
      },
      {
        heading: 'Reframing the Problem',
        body: 'We reframed from \u201cTraffic congestion is an infrastructure problem\u201d to \u201cTraffic congestion is an execution and coordination problem.\u201d Field staff are reactive, unsupported, and overloaded. Coordination is manual (calls, walkie-talkies, WhatsApp). No system tells them what to do now. ORR doesn\u2019t need more cameras. It needs a brain that turns signals into actions.',
      },
      {
        heading: 'The Solution',
        body: 'A single corridor-level console that tells operators: What\u2019s happening, What to do now, Who owns the action, Whether it worked. The console ingests data from ASTraM, ATCS, BMTC GPS, ITMS, CCTV & weather feeds. Every anomaly auto-creates a ticket with location, severity, assigned agency, and a live SLA timer. Each ticket includes a ready action plan (e.g. extend green by 80s, dispatch crane, hold upstream buses, pre-clear ambulance route). Operators approve or edit\u2014no black box automation. Instructions are pushed directly to field police, BMTC depots, crane units, and ambulance routing systems.',
      },
      {
        heading: 'My Role',
        body: 'I owned the product end-to-end: framing the problem from monitoring \u2192 execution, leading secondary research and stakeholder analysis, defining personas across control rooms, field staff, and transit agencies, designing the corridor-first operating model, translating policy + infra realities into a shippable MVP, and defining success metrics tied to real-world relief, not vanity KPIs. Guiding principle: If operators still rely on phone calls, the product has failed.',
      },
      {
        heading: 'Design Decisions',
        body: 'Light UI to reduce fatigue in dark control rooms. Traffic-light colors for zero-training comprehension. Plain-language copy (\u201cQueue 1.2 km, clear in 15 mins\u201d). Few, large KPIs instead of dense charts. Design goal: 2-second scan \u2192 act immediately. Success metrics: Incident-to-action time \u22645 mins (from 12\u201315), SLA compliance \u226585%, prescription acceptance \u226580%, operator overrides \u226410%.',
      },
      {
        heading: 'What I Learned as a PM',
        body: 'Execution gaps hide behind dashboards\u2014visibility without ownership is useless. Corridor thinking beats local optimization; traffic behaves like a system, not nodes. Trust is built through visible relief\u2014if queues don\u2019t drop, the product doesn\u2019t matter. Human-in-loop is non-negotiable in GovTech; adoption beats automation. Good PM work reduces cognitive load\u2014the best tools help people act faster, not think harder. India doesn\u2019t need more smart dashboards\u2014it needs systems that act.',
      },
    ],
  },
  {
    id: 4,
    slug: 'lune',
    title: 'Lune',
    subtitle: 'Cycle-Aware Productivity & Wellbeing Companion',
    tagline: 'Helps young women manage menstrual and PCOS-related symptoms proactively\u2014reducing hidden productivity loss, guilt, and burnout through lightweight, stigma-free support',
    demoUrl: 'https://preview--lune-goroup-5.lovable.app/',
    image: '/projects/lune.png',
    icon: '/projects/lune-icon.png',
    cardTitle: 'Lune',
    cardDesc: 'A Cycle-Aware Productivity & Wellbeing Companion for Young Women',
    cardStats: [
      { label: 'Unexplained hormonal symptoms', value: '72%' },
      { label: 'Misinformation over medical guidance', value: '83%' },
    ],
    meta: {
      category: 'FemTech / HealthTech / Consumer Wellness',
      role: 'Product Manager (0\u21921, End-to-End Ownership)',
      market: 'Women aged 18\u201336 (students & early-career professionals in India)',
      platform: 'Mobile (Privacy-first, AI-assisted)',
    },
    stats: [
      { value: '72%', label: 'Unexplained Symptoms', desc: 'Hormonal symptoms without clear diagnosis' },
      { value: '41%', label: 'Unpredictable Cycles', desc: 'Irregular cycles disrupting daily planning' },
      { value: '83%', label: 'Misinformation Risk', desc: 'Rely on non-medical guidance sources' },
    ],
    overview: 'Menstrual health and PCOS affect a majority of young women in India, yet support systems remain fragmented, stigmatized, or reactive. Lune addresses a hidden productivity crisis\u2014not absenteeism, but presenteeism\u2014where women show up but operate at reduced capacity, silently absorbing the cost.',
    sections: [
      {
        heading: 'Challenge',
        body: 'The challenge was to design a solution that addresses daily functional impact, not just medical tracking; works within stigma, privacy, and disclosure constraints; supports women across cycle phases, not just period days; balances medical credibility with low-effort adoption; and ships as a focused MVP without feature bloat. The key constraint: women don\u2019t have energy on tough days. The product had to help without asking much.',
      },
      {
        heading: 'Problem Discovery',
        body: 'Periods and PCOS quietly disrupt focus, energy, mood, and sleep. Women continue working or studying despite pain, leading to slower task initiation, small but frequent mistakes, missed deadlines, guilt, self-blame, and exhaustion. This creates a repeating loop: Pain \u2192 low productivity \u2192 guilt \u2192 poor recovery \u2192 worse next day. ~70\u201380% experience dysmenorrhea; ~10% have PCOS. ~9 days/year lost to presenteeism vs ~1 day to absenteeism. ~50% students miss classes due to pain. Up to 70% PCOS cases remain undiagnosed.',
      },
      {
        heading: 'Product Reframing',
        body: 'We reframed from \u201cHelp women track periods or manage PCOS\u201d to \u201cHelp women function better on tough days\u2014without guilt or explanation.\u201d Women don\u2019t lack information\u2014they lack timely, usable support. Existing solutions are fragmented: period trackers require too much manual input and are fertility-first; PCOS clinics are reactive, expensive, and urban-skewed; wellness apps aren\u2019t cycle-aware; workplace support carries stigma. The white space: a cycle-aware productivity stabilizer\u2014not another tracker.',
      },
      {
        heading: 'The Solution',
        body: 'Lune is a holistic menstrual & PCOS companion combining cycle & symptom awareness, AI-assisted insights (not diagnosis), lifestyle nudges for energy, sleep, and focus, medical continuity (prescriptions, summaries, consults), and productivity context\u2014not judgment. System flow: Signals \u2192 Insights \u2192 Nudges \u2192 Action \u2192 Feedback \u2192 Learn. AI supports pattern recognition, not medical decisions. It works quietly in the background and surfaces help only when needed.',
      },
      {
        heading: 'Key MVP Features',
        body: 'Core: onboarding with minimal input, cycle & symptom tracking, daily Wellness & Productivity Score, phase-specific nudges, and Sahara\u2014an AI health companion. Care Continuity: prescription upload & recognition, medical summaries (exportable), doctor discovery & booking. Advanced differentiators: AI-based PCOS risk screening (non-diagnostic) and productivity impact tracking. Deliberately excluded: clinical diagnosis, community/social feeds, fertility modules, heavy localization, and monetization flows. Focus was trust, habit, and daily value.',
      },
      {
        heading: 'My Role',
        body: 'I owned the product end-to-end: led problem framing and research synthesis, translated medical and behavioral insights into product logic, defined MVP scope, trade-offs, and non-goals, designed core user journeys and system flows, and balanced AI ambition with trust, privacy, and feasibility. Guiding principle: Reduce daily friction before solving long-term health.',
      },
      {
        heading: 'What I Learned as a PM',
        body: 'Presenteeism is harder than absenteeism\u2014you must design for invisible pain. Less input beats more intelligence; on tough days, effort is the real cost. AI earns trust only with boundaries\u2014support > prediction. Health products must respect dignity: language, consent, and pacing matter. Outcomes matter more than engagement\u2014feeling better beats tapping more. North star metric: Weekly Supported Day Rate\u2014% of users receiving timely nudges and completing at least one supportive action.',
      },
      {
        heading: 'Conclusion',
        body: 'Lune isn\u2019t about fixing periods or PCOS. It\u2019s about reducing the daily tax women pay for functioning through pain. This project reinforced a belief I now carry into all my work: The best products don\u2019t demand resilience. They quietly make life more manageable.',
      },
    ],
  },
];

export default projects;
