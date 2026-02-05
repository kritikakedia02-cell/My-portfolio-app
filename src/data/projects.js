const projects = [
  {
    id: 1,
    slug: 'mindbuddy',
    title: 'MindBuddy',
    subtitle: 'Making Invisible Work Toxicity Visible',
    tagline: 'AI-powered clarity for professionals navigating unhealthy work environments',
    demoUrl: 'https://lovable.dev/projects/421923b0-903a-47e7-ab15-6b06a43ffe02',
    image: '/projects/mindbuddy.png',
    icon: '/projects/mindbuddy-icon.png',
    cardTitle: 'MindBuddy',
    cardDesc: 'AI-powered clarity for professionals navigating unhealthy work environments. It\'s a workplace health monitor that uses behavioral signals, not opinions, to surface toxicity patterns early and guide action.',
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
        body: 'Designing MindBuddy wasn\u2019t about building another \u201cmental health app.\u201d The real challenge was deeper:',
        bullets: [
          'How do you detect toxicity without relying on self-reporting alone?',
          'How do you give users clarity without pushing them into panic or impulsive quitting?',
          'How do you build trust when the product analyzes sensitive workplace data?',
          'How do you ensure the product empowers employees, not HR teams or managers?',
        ],
        footnote: 'All of this had to be solved while keeping the MVP narrow, explainable, and credible.',
        images: ['/projects/mindbuddy-challenge.png'],
      },
      {
        heading: 'Problem Space',
        body: 'Workplace toxicity doesn\u2019t show up as one bad day; it builds quietly. In Indian tech teams, constant after-hours work, micromanagement, and unspoken pressure to always be \u201con\u201d have become normalized. The impact is real: 70%+ of professionals report burnout, and nearly 60% leave roles due to toxic leadership, yet most employees still can\u2019t tell whether they\u2019re facing temporary stress or a structurally unhealthy environment. Lacking objective signals, people internalize the damage, questioning themselves instead of the system.\n\nCurrent solutions react too late or solve the wrong problem. HR surveys and exit interviews surface truth after disengagement has already set in, while wellness apps treat symptoms, not causes. Despite widespread awareness, burnout-driven attrition continues to rise, proof that this is a signal problem, not a motivation problem. What professionals need is early, trustworthy clarity to decide whether to adapt, push back, or move on, before burnout makes the decision for them.',
      },
      {
        heading: 'My Role',
        body: 'I owned the product end-to-end.',
        bulletIntro: 'That included:',
        bullets: [
          'Leading primary and secondary user research',
          'Framing workplace toxicity as a systemic, socio-technical problem',
          'Defining the MVP scope and non-goals',
          'Designing the toxicity scoring logic and decision framework',
          'Shaping the user journey from first insight to action',
          'Making judgment calls on where AI adds value, and where it shouldn\u2019t',
        ],
        footnote: 'My north star throughout the project:\nClarity > Comfort. Agency > Advice. Signals > Opinions.',
      },
      {
        heading: 'How We Identified the Problem',
        body: 'Initial conversations with working professionals revealed a pattern that went beyond stress or workload.',
        bulletIntro: 'Recurring themes included:',
        bullets: [
          'Micromanagement disguised as \u201cattention to detail\u201d',
          'Inability to disconnect due to after-hours pings',
          'Fear of taking leave or speaking up',
          'Chronic self-doubt caused by lack of recognition',
        ],
        quotes: [
          'Taking personal leaves once in six months felt like a tug-of-war.',
          'I can\u2019t switch off. Even at dinner, I\u2019m replaying work conversations.',
          'I\u2019m working crazy long hours, my manager won\u2019t listen, and still blames me.',
        ],
        footnote: 'Despite different companies and roles, the emotional experience was strikingly similar.',
      },
      {
        heading: 'What Research Revealed',
        body: 'We conducted surveys and qualitative research with 70+ professionals across tech and IT services.',
        bulletIntro: 'Key findings:',
        bullets: [
          '71% reported burnout or emotional exhaustion',
          '60% cited toxic leadership as a reason for quitting',
          '45% felt their concerns were ignored by managers',
          '~65% of tech professionals showed clear signals of workplace toxicity',
        ],
        subsections: [
          {
            title: 'A crucial insight emerged:',
            desc: 'Employees don\u2019t lack awareness; they lack validation and direction.',
          },
        ],
        secondaryBulletIntro: 'Most people knew something was wrong. What they didn\u2019t know was:',
        secondaryBullets: [
          'How bad is it, really?',
          'Is this temporary or systemic?',
          'Should I adapt, push back, or plan an exit?',
        ],
      },
      {
        heading: 'Reframing the Problem',
        body: 'We reframed workplace toxicity as a wicked, systemic problem, not a behavioral flaw.',
        bulletIntro: 'Toxicity lives across layers:',
        numberedBullets: true,
        bullets: [
          'System-level: incentives that reward overwork',
          'Org-level: unchecked managerial behavior',
          'Employee-level: overload and loss of agency',
          'Emotional-level: erosion of self-worth and belonging',
        ],
        footnote: 'This framing shaped every product decision that followed.',
      },
      {
        heading: 'The Solution: MindBuddy',
        body: 'MindBuddy is a workplace health monitor that uses behavioral signals, not opinions, to surface toxicity patterns early and guide action.\n\nInstead of asking, \u201cHow stressed are you?\u201d, MindBuddy asks:\n\u201cWhat is your work environment doing to you, consistently?\u201d',
        subsections: [
          {
            title: 'Toxicity Score & Triggers Dashboard',
            bullets: [
              'A clear score (0\u201310) derived from Gmail and Slack activity',
              'Weighted signals like after-hours work, frequent status pings, and workload imbalance',
              'Explainable triggers, not black-box scores',
            ],
          },
          {
            title: 'Actionable Micro-Nudges',
            bullets: [
              'Contextual prompts like blocking focus time or enabling after-hours auto-replies',
              'Designed to reduce overload before escalation',
            ],
          },
          {
            title: 'Resources & Coaching',
            bullets: [
              'Micro-journaling chatbot',
              'Short audio/video content explaining why patterns matter',
            ],
          },
          {
            title: 'On-Demand Conversational Chatbot',
            bullets: [
              'Empathetic, real-time support',
              'Helps users interpret insights emotionally, not just analytically',
            ],
          },
          {
            title: 'Stay-or-Leave Decision Compass',
            bullets: [
              'A weighted framework combining toxicity, distress, job intent, and market context',
              'Offers guidance, not prescriptions, on whether to stay, adapt, or plan an exit',
            ],
          },
        ],
        images: ['/projects/mindbuddy-solution.png'],
      },
      {
        heading: 'Why AI (and Where It Stops)',
        body: 'AI was used deliberately and conservatively.',
        bullets: [
          'AI-assisted pattern detection, not decision-making',
          'Scoring logic remained transparent and rule-based',
          'The product avoided \u201cone giant prompt\u201d thinking',
        ],
        footnote: 'The goal was trustworthy augmentation, not automation of judgment.',
      },
      {
        heading: 'End-to-End User Journey',
        numberedBullets: true,
        bullets: [
          'The user discovers MindBuddy via LinkedIn or referral',
          'Signs up and completes lightweight onboarding',
          'Connects Gmail / Slack with clear permission transparency',
          'Passive data ingestion runs in the background',
          'The first dashboard reveals toxicity score and weekly insights (success moment)',
          'The user explores patterns and validates gut feelings',
          'Chatbot provides emotional context and next steps',
          'Stay-or-leave compass supports reflective decision-making',
          'Weekly updates and nudges reinforce behavior change',
        ],
        footnote: 'Each step was designed to reduce anxiety, not amplify it.',
      },
      {
        heading: 'MVP Scope & Trade-offs',
        subsections: [
          {
            title: 'Included',
            bullets: [
              'Core scoring logic',
              'Dashboard + chatbot',
              'Micro-nudges',
              'Decision compass',
            ],
          },
          {
            title: 'Deliberately Excluded',
            bullets: [
              'HR dashboards or org-level reporting',
              'Real-time manager alerts',
              'Heavy sentiment surveillance',
            ],
            footnote: 'These exclusions protected user trust and product integrity.',
          },
        ],
      },
      {
        heading: 'Impact & Market Potential',
        bullets: [
          '~3.5 million Indian tech professionals actively experience workplace toxicity',
          'Existing tools focus on coping or reporting, not personal agency',
          'MindBuddy occupies a unique position: diagnose \u2192 validate \u2192 guide',
        ],
        footnote: 'The product has the potential to evolve into a full career health layer, not just a wellness app.',
      },
      {
        heading: 'Key Learnings',
        numberedBullets: true,
        bullets: [
          'Behavior beats perception when diagnosing systemic problems',
          'AI amplifies clarity, never replaces judgment',
          'Trust is not a feature; it\u2019s a design constraint',
          'Emotionally vulnerable users need explainability over intelligence',
        ],
      },
      {
        heading: 'What I\u2019d Build Next',
        bullets: [
          'Learning loops to improve signal accuracy',
          'Longitudinal trend analysis across roles and life stages',
          'Optional manager-facing insights, only with user consent',
          'Expansion beyond tech into consulting and knowledge work',
        ],
      },
      {
        heading: 'Product Snapshots',
        body: '',
        images: ['/projects/mindbuddy-snapshots.png'],
      },
      {
        heading: 'Conclusion',
        body: 'MindBuddy reinforced a belief I hold strongly:\n\nThe most impactful products don\u2019t shout solutions.\nThey help people see clearly, and choose deliberately.',
      },
    ],
  },
  {
    id: 2,
    slug: 'pocketwise',
    title: 'PocketWise',
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
    heroImage: '/projects/pocketwise-hero.png',
    sections: [
      {
        heading: 'Challenge',
        body: 'The challenge was to:',
        bullets: [
          'Identify a recurring, behavior\u2011driven financial problem',
          'Design an India\u2011first solution aligned with UPI AutoPay realities',
          'Apply AI meaningfully (not as a buzzword)',
          'Ship a credible MVP in under one month',
          'Demonstrate full\u2011stack product thinking (discovery \u2192 UX \u2192 systems \u2192 metrics)',
        ],
        footnote: 'Constraints included limited time, restricted access to bank APIs, regulatory boundaries (UPI mandates), and the need to balance trust, privacy, and automation.',
        images: ['/projects/pocketwise-challenge.png'],
      },
      {
        heading: 'How We Identified the Problem',
        body: 'Early cohort discussions surfaced a shared frustration: surprise debits from apps users hadn\u2019t opened in months. Digging deeper revealed systemic issues:',
        numberedSubs: true,
        subsections: [
          {
            title: 'Fragmented Visibility',
            desc: 'Subscriptions are scattered across UPI AutoPay, cards, app stores, and telcos. No single place shows everything.',
          },
          {
            title: 'Late or No Actionable Alerts',
            desc: 'Most alerts arrive 24 hours before debit or get buried in SMS/email noise.',
          },
          {
            title: 'Cancellation Friction by Design',
            desc: 'Multi\u2011step flows, hidden settings, OTP loops, and merchant redirects discourage cancellation.',
          },
        ],
        footnote: 'Despite digital maturity, 27\u201335% of subscriptions in India go unused or forgotten, resulting in ~\u20B96,750 crore wasted annually.\n\nThis signaled a product gap, not a behavior problem.',
      },
      {
        heading: 'What User Research Revealed',
        body: 'We ran quantitative surveys (100+ respondents) and 18 in-depth interviews with working professionals aged 22\u201335.',
        bullets: [
          '~30\u201335% of active subscriptions are unused, regardless of count',
          '68% don\u2019t track subscriptions effectively',
          '70% find SMS/email renewal alerts ineffective',
          'Small charges (\u20B999\u2013\u20B9249) are most likely to be ignored',
        ],
        subsections: [
          {
            title: 'The most critical insight:',
            desc: 'People don\u2019t overspend on subscriptions; they underserve cancellation. This reframed the problem from spend tracking to pre-emptive control.',
          },
        ],
      },
      {
        heading: 'The Solution',
        body: 'We built PocketWise, a unified subscription management platform that works before money leaves the user\u2019s account.',
        bulletIntro: 'PocketWise enables users to:',
        bullets: [
          'See all subscriptions across UPI, cards, and app stores in one dashboard',
          'Get predictive, multi\u2011stage renewal alerts (7/5/2 days)',
          'Instantly identify dead or duplicate spend',
          'Cancel or pause subscriptions in 1\u20132 taps',
          'See clear savings impact after every action',
        ],
        footnote: 'Instead of asking users to \u201cbe more careful,\u201d PocketWise fixes the system that causes the leak.',
      },
      {
        heading: 'My Role in the Project',
        body: 'I owned the product end\u2011to\u2011end.',
        bulletIntro: 'Specifically, I:',
        bullets: [
          'Led problem discovery, surveys, and user interviews',
          'Synthesised behavioral + market research into clear product insights',
          'Defined the product vision, MVP scope, and non\u2011goals',
          'Designed core user journeys and feature logic',
          'Translated financial behavior into actionable UX',
          'Ensured feasibility within UPI, card, and merchant constraints',
        ],
        footnote: 'My guiding principle was simple: don\u2019t build another expense tracker. Build a control system.',
      },
      {
        heading: 'Platform Creation Process (with AI)',
        subsections: [
          {
            title: 'Product Definition',
            desc: 'We began with a tightly scoped MVP PRD, clearly defining:',
            bullets: [
              'Target users and exclusions',
              'Core pain points to solve',
              'System constraints (UPI, card mandates)',
              'Explicit non\u2011goals (no full PFM, no gamification)',
              'Success metrics tied to money saved',
            ],
            footnote: 'This clarity allowed AI to accelerate execution, not distort intent.',
          },
          {
            title: 'Tooling Decisions',
            desc: 'We evaluated:',
            bullets: [
              'Lovable.dev',
              'Bolt',
              'Cursor',
              'Replit',
            ],
            secondaryIntro: 'We finalized Lovable + Replit for:',
            secondaryBullets: [
              'Rapid UI iteration',
              'Fast logic experimentation',
              'Deployment\u2011ready prototypes',
            ],
          },
          {
            title: 'AI Usage',
            bullets: [
              'AI-assisted subscription detection, classification, and inactivity heuristics',
              'No autonomous decisions. AI surfaced insights, users stayed in control',
              'Matching logic was rule\u2011first, AI\u2011augmented',
            ],
            footnote: 'AI amplified clarity; it did not replace product judgment.',
          },
        ],
      },
      {
        heading: 'Key Product Flows (MVP)',
        bullets: [
          'Linear onboarding with UPI + card sync',
          'Unified subscription dashboard (single source of truth)',
          'Dead spend detection (90\u2011day inactivity)',
          'Usage vs cost analytics (where data available)',
          'Predictive renewal alerts with direct CTAs',
          'One\u2011tap cancellation with undo safety',
        ],
        footnote: 'Each flow was designed to reduce cognitive load and time\u2011to\u2011action.',
      },
      {
        heading: 'Learnings from the Project',
        numberedSubs: true,
        subsections: [
          {
            title: 'Ease of building increases the cost of poor discovery',
            desc: 'Speed without clarity produces shallow products.',
          },
          {
            title: 'AI rewards strong product thinking',
            desc: 'Vague problems lead to useless automation.',
          },
          {
            title: 'Financial UX is about trust, not dashboards',
            desc: 'Control beats visualization.',
          },
          {
            title: 'Small numbers hide big losses',
            desc: 'Micro\u2011spends compound silently unless surfaced early.',
          },
        ],
      },
      {
        heading: 'Future Development',
        bulletIntro: 'Planned next steps include:',
        bullets: [
          'Family and shared subscription deduplication',
          'Smart downgrade suggestions',
          'SMB and freelancer modes',
          'Regional language support',
          'Deeper usage integrations with merchants',
        ],
        footnote: 'The long\u2011term vision is to manage the entire subscription lifecycle, from discovery to cancellation to optimization.',
      },
      {
        heading: 'Product Snapshots',
        body: '',
        singleColumnImages: true,
        images: ['/projects/pocketwise-screens.png', '/projects/pocketwise-snapshots.png'],
      },
      {
        heading: 'Conclusion',
        body: 'PocketWise was built under tight constraints but with deliberate product discipline.\n\nIt demonstrates how fixing systemic UX failures, rather than blaming users, can unlock real financial impact.\n\nThis is not about saving money occasionally. It\u2019s about stopping money from leaking by default.',
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
    heroImage: '/projects/blr-orr-hero.png',
    sections: [
      {
        heading: 'Challenge',
        body: 'The challenge was not to \u201creduce traffic\u201d in theory, but to design a credible execution system that:',
        bullets: [
          'Works with existing infrastructure (no new flyovers, no civil work)',
          'Reduces operator decision latency in real time',
          'Coordinates multiple agencies without adding complexity',
          'Shows visible relief, not just dashboards',
          'Can scale corridor-by-corridor across Indian cities',
        ],
        footnote: 'Constraints included partial infrastructure rollout, fragmented ownership across agencies, and low public trust in traffic tech.',
      },
      {
        heading: 'Background',
        body: 'India\u2019s cities are data-rich but action-poor when it comes to traffic.\n\nPlatforms like ATCS, ASTraM, ITMS, and ICCCs collect massive volumes of data, but congestion persists, worsens, and becomes predictable chaos.',
        bulletIntro: 'Bengaluru\u2019s Outer Ring Road (ORR) is the sharpest example of this failure:',
        bullets: [
          'A 62 km arterial corridor',
          '1.5\u20132 million commuters daily',
          '~700 IT/ITES companies',
          '~33% of Bengaluru\u2019s IT exports flow through this single road',
        ],
        footnote: 'If congestion can be managed here, the solution can scale nationally.',
        images: ['/projects/blr-orr-tickets.png'],
      },
      {
        heading: 'My Role',
        body: 'I owned the product end-to-end, including:',
        bullets: [
          'Framing the problem from monitoring \u2192 execution',
          'Leading secondary research and stakeholder analysis',
          'Defining personas across control rooms, field staff, and transit agencies',
          'Designing the corridor-first operating model',
          'Translating policy + infra realities into a shippable MVP',
          'Defining success metrics tied to real-world relief, not vanity KPIs',
        ],
        footnote: 'My guiding principle was simple:\nIf operators still rely on phone calls, the product has failed.',
      },
      {
        heading: 'Problem Discovery',
        subsections: [
          {
            title: 'One-Line Problem',
            desc: 'Urban traffic systems show congestion, but don\u2019t prescribe or execute coordinated actions, allowing small disruptions to snowball into corridor-wide lockups.',
          },
        ],
        bulletIntro: 'Why This Matters:',
        bullets: [
          'India: ~\u20B91.5 lakh crore lost annually due to congestion',
          'Bengaluru: ~\u20B920,000 crore lost annually',
          'ORR commuters: 60\u2013120 minutes lost daily',
          'Emergency impact: Ambulances delayed by 3\u201310 minutes on ORR',
        ],
        footnote: 'Despite this, congestion on ORR is predictable, not random, yet remains unmanaged.',
      },
      {
        heading: 'Research Insights',
        subsections: [
          {
            title: 'Primary Research \u2014 Policeman Perspective',
            bullets: [
              'Field staff are reactive, unsupported, and overloaded',
              'Coordination is manual (calls, walkie-talkies, WhatsApp)',
              'No system tells them what to do now',
            ],
          },
          {
            title: 'Secondary Research \u2014 System Analysis',
            desc: 'We studied Bengaluru\u2019s traffic stack: ATCS, ASTraM, ITMS, BMTC GPS, and CCTV feeds.',
          },
        ],
      },
      {
        heading: 'Reframing the Problem',
        body: 'From:\n\u201cTraffic congestion is an infrastructure problem\u201d\n\nTo:\n\u201cTraffic congestion is an execution and coordination problem\u201d\n\nORR doesn\u2019t need more cameras.\nIt needs a brain that turns signals into actions.',
      },
      {
        heading: 'Solution Overview',
        bulletIntro: 'Vision: A single corridor-level console that tells operators:',
        bullets: [
          'What\u2019s happening',
          'What to do now',
          'Who owns the action',
          'Whether it worked',
        ],
        subsections: [
          {
            title: 'Product Principles',
            bullets: [
              'Action-first: Every alert comes with a prescription',
              'Corridor-first: Optimize chains, not junctions',
              'Human-in-loop: Operators approve, system suggests',
              'Plug-in, not replace: Leverage existing infra',
              'Visible relief: Show queue reduction, not just heatmaps',
            ],
          },
        ],
      },
      {
        heading: 'How the Product Works (End-to-End)',
        numberedBullets: true,
        subsections: [
          {
            title: '1. Data Ingestion',
            desc: 'The console listens to:',
            bullets: [
              'ASTraM (incidents, predictions)',
              'ATCS (signal timing, queues)',
              'BMTC GPS (bus bunching)',
              'ITMS (stalled vehicles)',
              'CCTV & weather feeds',
            ],
          },
          {
            title: '2. Incident \u2192 Ticket',
            desc: 'Every anomaly auto-creates a ticket with:',
            bullets: [
              'Location, severity, source',
              'Assigned agency',
              'Live SLA timer',
            ],
          },
          {
            title: '3. Action Prescriptions',
            desc: 'Each ticket includes a ready plan, e.g.:',
            bullets: [
              'Extend green by 80s',
              'Dispatch crane',
              'Hold upstream buses',
              'Pre-clear ambulance route',
            ],
          },
          {
            title: '4. Operator Approval',
            desc: 'Operators approve or edit actions, no black box automation.',
          },
          {
            title: '5. Instant Dispatch',
            desc: 'Instructions are pushed directly to:',
            bullets: [
              'Field police (WhatsApp/SMS)',
              'BMTC depots',
              'Crane units',
              'Ambulance routing systems',
            ],
          },
          {
            title: '6. Feedback Loop',
            desc: 'The system tracks:',
            bullets: [
              'Queue reduction',
              'Travel time improvement',
              'SLA compliance',
            ],
            footnote: 'Relief becomes measurable, not assumed.',
          },
        ],
      },
      {
        heading: 'MVP Scope',
        subsections: [
          {
            title: 'In Scope',
            bullets: [
              'Corridor dashboard (ORR)',
              'Ticketing & SLA engine',
              'Action prescriptions',
              'Multi-agency messaging',
              'Impact analytics',
            ],
          },
          {
            title: 'Out of Scope',
            bullets: [
              'Citizen mobile app',
              'Civil infrastructure',
              'Non-traffic policing',
              'Citywide rollout (pilot only)',
            ],
          },
        ],
      },
      {
        heading: 'Design Decisions',
        bullets: [
          'Light UI to reduce fatigue in dark control rooms',
          'Traffic-light colors for zero-training comprehension',
          'Plain-language copy (\u201cQueue 1.2 km, clear in 15 mins\u201d)',
          'Few, large KPIs instead of dense charts',
        ],
        footnote: 'Design goal: 2-second scan \u2192 act immediately.',
      },
      {
        heading: 'Success Metrics',
        subsections: [
          {
            title: 'Operator Metrics',
            bullets: [
              'Incident-to-action time: \u22645 mins (from 12\u201315)',
              'SLA compliance: \u226585%',
              'Manual coordination calls: \u219330\u201340%',
            ],
          },
          {
            title: 'Traffic Metrics',
            bullets: [
              'Avg. junction wait: \u219315\u201320%',
              'Corridor throughput: +10\u201312%',
            ],
          },
          {
            title: 'Adoption & Trust',
            bullets: [
              'Prescription acceptance: \u226580%',
              'Operator overrides: \u226410%',
            ],
          },
        ],
      },
      {
        heading: 'Roadmap',
        bullets: [
          'v0 (0\u20133 months): ORR pilot, action layer',
          'v1 (3\u20136 months): Citizen advisories via Maps APIs',
          'v2 (6\u201312 months): City digital twin & predictive playbooks',
        ],
      },
      {
        heading: 'What I Learned as a PM',
        numberedBullets: true,
        bullets: [
          'Execution gaps hide behind dashboards. Visibility without ownership is useless.',
          'Corridor thinking beats local optimization. Traffic behaves like a system, not nodes.',
          'Trust is built through visible relief. If queues don\u2019t drop, the product doesn\u2019t matter.',
          'Human-in-loop is non-negotiable in GovTech. Adoption beats automation.',
          'Good PM work reduces cognitive load. The best tools help people act faster, not think harder.',
        ],
      },
      {
        heading: 'Product Snapshots',
        body: '',
        images: ['/projects/blr-orr-activity.png', '/projects/blr-orr-snapshots.png'],
      },
      {
        heading: 'Closing Note',
        body: 'This project reinforced a core belief:\n\nIndia doesn\u2019t need more smart dashboards, it needs systems that act.\n\nBy focusing on execution, accountability, and visible impact, the ORR Action Console demonstrates how software, not infrastructure, can unlock real mobility gains at city scale.',
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
    cardDesc: 'A Cycle-Aware Productivity & Wellbeing Companion for Young Women. It addresses a hidden productivity crisis, not absenteeism, but presenteeism, where women show up but operate at reduced capacity, silently absorbing the cost.',
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
    heroImage: '/projects/lune-hero.png',
    sections: [
      {
        heading: 'Challenge',
        body: 'The challenge was to design a solution that:',
        bullets: [
          'Addresses daily functional impact, not just medical tracking',
          'Works within stigma, privacy, and disclosure constraints',
          'Supports women across cycle phases, not just period days',
          'Balances medical credibility with low-effort adoption',
          'Ships as a focused MVP without feature bloat',
        ],
        footnote: 'The key constraint: women don\'t have energy on tough days. The product had to help without asking much.',
      },
      {
        heading: 'Background',
        body: 'Menstrual health and PCOS affect a majority of young women in India, yet support systems remain fragmented, stigmatized, or reactive.\n\nLune addresses a hidden productivity crisis, not absenteeism, but presenteeism, where women show up but operate at reduced capacity, silently absorbing the cost.',
      },
      {
        heading: 'My Role',
        body: 'I owned the product end-to-end.',
        bulletIntro: 'That included:',
        bullets: [
          'Leading problem framing and research synthesis',
          'Translating medical and behavioral insights into product logic',
          'Defining MVP scope, trade-offs, and non-goals',
          'Designing core user journeys and system flows',
          'Balancing AI ambition with trust, privacy, and feasibility',
        ],
        footnote: 'My guiding principle:\nReduce daily friction before solving long-term health.',
      },
      {
        heading: 'Problem Discovery',
        subsections: [
          {
            title: 'Core Problem',
            desc: 'Periods and PCOS quietly disrupt focus, energy, mood, and sleep. Women continue working or studying despite pain.',
            bullets: [
              'Slower task initiation',
              'Small but frequent mistakes',
              'Missed deadlines',
              'Guilt, self-blame, and exhaustion',
            ],
          },
          {
            title: 'Why Urgent',
            desc: 'This creates a repeating loop: Pain \u2192 low productivity \u2192 guilt \u2192 poor recovery \u2192 worse next day.',
            bullets: [
              '~70-80% experience dysmenorrhea',
              '~10% have PCOS',
              '~9 days/year lost to presenteeism vs ~1 day to absenteeism',
              '~50% students miss classes due to pain',
              'Up to 70% PCOS cases remain undiagnosed',
            ],
          },
          {
            title: 'User Frustrations',
            bullets: [
              'Unpredictable cycles make planning difficult',
              'Symptom tracking feels like extra work when energy is low',
              'No support that understands work or academic context',
              'Medical advice is reactive, not preventive',
            ],
          },
          {
            title: 'Gaps in Existing Solutions',
            bullets: [
              'Period trackers require too much manual input and are fertility-first',
              'PCOS clinics are reactive, expensive, and urban-skewed',
              'Wellness apps aren\'t cycle-aware',
              'Workplace support carries stigma',
            ],
          },
        ],
      },
      {
        heading: 'Reframing the Problem',
        body: 'From:\n"Help women track periods or manage PCOS"\n\nTo:\n"Help women function better on tough days, without guilt or explanation."\n\nWomen don\'t lack information, they lack timely, usable support.\n\nThe white space: a cycle-aware productivity stabilizer, not another tracker.',
      },
      {
        heading: 'The Solution: Lune',
        body: 'Lune is a holistic menstrual & PCOS companion combining:',
        bullets: [
          'Cycle & symptom awareness',
          'AI-assisted insights (not diagnosis)',
          'Lifestyle nudges for energy, sleep, and focus',
          'Medical continuity (prescriptions, summaries, consults)',
          'Productivity context, not judgment',
        ],
        subsections: [
          {
            title: 'System Design',
            desc: 'Signals \u2192 Insights \u2192 Nudges \u2192 Action \u2192 Feedback \u2192 Learn',
          },
        ],
        footnote: 'AI supports pattern recognition, not medical decisions. It works quietly in the background and surfaces help only when needed.',
      },
      {
        heading: 'Key MVP Features',
        subsections: [
          {
            title: 'Core',
            bullets: [
              'Onboarding with minimal input',
              'Cycle & symptom tracking',
              'Daily Wellness & Productivity Score',
              'Phase-specific nudges',
              'Sahara: AI health companion',
            ],
          },
          {
            title: 'Care Continuity',
            bullets: [
              'Prescription upload & recognition',
              'Medical summaries (exportable)',
              'Doctor discovery & booking',
            ],
          },
          {
            title: 'Advanced Differentiators',
            bullets: [
              'AI-based PCOS risk screening (non-diagnostic)',
              'Productivity impact tracking',
            ],
          },
          {
            title: 'What We Didn\'t Build',
            bullets: [
              'Clinical diagnosis',
              'Community/social feeds',
              'Fertility modules',
              'Heavy localization',
              'Monetization flows',
            ],
            footnote: 'Focus was trust, habit, and daily value.',
          },
        ],
      },
      {
        heading: 'Core User Journeys',
        subsections: [
          {
            title: 'First-Time User',
            desc: 'Quick onboarding \u2192 Cycle setup \u2192 First insight within 24 hours',
          },
          {
            title: 'Daily Use',
            desc: 'Morning nudge \u2192 Log symptoms (optional) \u2192 Receive phase-aware tips',
          },
          {
            title: 'Tough Days',
            desc: 'Auto-detect low phase \u2192 Proactive nudges \u2192 Reduced input required',
          },
          {
            title: 'Care Escalation',
            desc: 'Pattern detected \u2192 Summary generated \u2192 Doctor booking enabled',
          },
        ],
      },
      {
        heading: 'Success Metrics',
        subsections: [
          {
            title: 'North Star',
            desc: 'Weekly Supported Day Rate: % of users receiving timely nudges and completing at least one supportive action.',
          },
          {
            title: 'Engagement',
            bullets: [
              'DAU/MAU ratio',
              'Symptom logging consistency',
              'Nudge interaction rate',
            ],
          },
          {
            title: 'Outcomes',
            bullets: [
              'Self-reported productivity improvement',
              'Reduction in guilt/stress indicators',
              'Care continuity adoption (prescriptions, summaries)',
            ],
          },
        ],
        images: ['/projects/lune-features.png'],
      },
      {
        heading: 'What I Learned as a PM',
        numberedBullets: true,
        bullets: [
          'Presenteeism is harder than absenteeism. You must design for invisible pain.',
          'Less input beats more intelligence. On tough days, effort is the real cost.',
          'AI earns trust only with boundaries. Support > prediction.',
          'Health products must respect dignity: language, consent, and pacing matter.',
          'Outcomes matter more than engagement. Feeling better beats tapping more.',
        ],
        images: ['/projects/lune-snapshots.png'],
      },
      {
        heading: 'Conclusion',
        body: 'Lune isn\'t about fixing periods or PCOS.\nIt\'s about reducing the daily tax women pay for functioning through pain.\n\nThis project reinforced a belief I now carry into all my work:\n\nThe best products don\'t demand resilience.\nThey quietly make life more manageable.',
      },
    ],
  },
];

export default projects;
