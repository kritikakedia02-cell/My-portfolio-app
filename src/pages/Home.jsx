import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Layers, Layout } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProfileCard from '../components/ProfileCard';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.6 },
};

const projects = [
  {
    title: 'Mindbuddy',
    subtitle: 'Making Invisible Work Toxicity Visible',
    slug: 'mindbuddy',
    icon: '/projects/mindbuddy-icon.png',
  },
  {
    title: 'Pocketwise',
    subtitle: 'Smart Personal Finance Management',
    slug: 'pocketwise',
    icon: '/projects/pocketwise-icon.png',
  },
  {
    title: 'BLR-ORR Action Console',
    subtitle: 'Real-Time Airport Operations Dashboard',
    slug: 'blr-orr',
    icon: '/projects/blr-orr-icon.png',
  },
  {
    title: 'Lune',
    subtitle: 'AI-Powered Wellness & Lifestyle App',
    slug: 'lune',
    icon: '/projects/lune-icon.png',
  },
];

const experience = [
  {
    company: '24/7 Software',
    designation: 'Product Manager',
    description: 'Leading the API-first platform powering real-time operations for large-scale venues.',
    duration: 'Feb 2024 - Present',
  },
  {
    company: 'Cvent',
    designation: 'Product Analyst',
    description: 'Cvent is an industry-leading meetings, events, and hospitality technology provider.',
    duration: 'Sept 2022 - Feb 2024',
  },
  {
    company: 'Daffodil Software',
    designation: 'Sr. Business Analyst',
    description: 'Daffodil Software is a trusted software engineering partner for technology companies worldwide.',
    duration: 'August 2019 - September 2022',
  },
  {
    company: 'Questa Global',
    designation: 'Consultant',
    description: 'A platform for Talent & Corporate Training Solutions',
    duration: 'May 2018 - August 2019',
  },
];

const tools = [
  { logo: '/logos/claude.svg', name: 'Claude', desc: 'AI Assistant' },
  { logo: '/logos/lovable.svg', name: 'Lovable', desc: 'AI-powered prototyping tool' },
  { logo: '/logos/framer.svg', name: 'Framer', desc: 'Website Builder' },
  { logo: '/logos/figma-make.webp', name: 'Figma Make', desc: 'AI prompt-to-app tool' },
  { logo: '/logos/chatgpt.svg', name: 'ChatGPT', desc: 'AI Assistant' },
  { logo: '/logos/notion.svg', name: 'Notion', desc: 'Productivity Tool' },
];


export default function Home() {
  return (
    <div className="pb-20">
      {/* Mobile-only profile card (hidden on desktop where sidebar shows it) */}
      <div className="lg:hidden mb-10 max-w-sm mx-auto">
        <ProfileCard />
      </div>

      {/* ──── HERO ──── */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-hero-sm sm:text-hero-md lg:text-hero font-display font-black uppercase mb-6">
          <span className="text-white">Product</span>
          <br />
          <span className="text-muted">Manager</span>
        </h1>
        <ul className="text-muted text-body-sm md:text-body leading-[1.4] mb-4 max-w-2xl space-y-2 list-none">
          <li>7+ years of experience building B2B, B2B2C, SaaS Products, and AI-Powered solutions across healthcare, EdTech and Events &amp; Venue operation domain.</li>
          <li>Proven track record of 0&#8209;1 product launches and platform scaling, API integrations &amp; analytics that improve adoption, reduce operational costs, and uplift revenue streams.</li>
          <li>Strong at product discovery, roadmap ownership, and data-driven decision making and cross-functional execution in fast-paced, ambiguous environments.</li>
        </ul>

        <div className="flex gap-5 mb-12">
          <Link
            to="/contact"
            className="inline-flex items-center gap-1 text-body-sm text-orange hover:text-white transition-colors"
          >
            Get in touch <ArrowUpRight className="w-4 h-4" />
          </Link>
          <Link
            to="/projects"
            className="inline-flex items-center gap-1 text-body-sm text-orange hover:text-white transition-colors"
          >
            View projects <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Bento Skill Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[10px]">
          <div className="bg-orange rounded-card p-6 md:p-8 relative overflow-hidden min-h-[200px] flex flex-col justify-between">
            <svg className="absolute bottom-0 right-0 w-full h-full opacity-15" viewBox="0 0 300 200" fill="none">
              <path d="M0 140 Q75 100 150 140 T300 140 V200 H0Z" fill="white" />
              <path d="M0 160 Q75 130 150 160 T300 160 V200 H0Z" fill="white" />
            </svg>
            <div className="w-10 h-10 rounded-card border-2 border-white/40 flex items-center justify-center relative z-10">
              <Layers className="w-5 h-5 text-white" />
            </div>
            <div className="relative z-10 flex items-end justify-between mt-6">
              <h3 className="text-[18px] md:text-[22px] font-display font-black text-white uppercase leading-tight">
                Product Strategy,<br />User Research
              </h3>
              <Link to="/projects" className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center flex-shrink-0 ml-4 hover:bg-white/20 transition-colors">
                <ArrowRight className="w-4 h-4 text-white" />
              </Link>
            </div>
          </div>

          <div className="bg-lime rounded-card p-6 md:p-8 relative overflow-hidden min-h-[200px] flex flex-col justify-between">
            <svg className="absolute bottom-0 right-0 w-full h-full opacity-15" viewBox="0 0 300 200" fill="none">
              <path d="M0 120 L30 100 L60 120 L90 100 L120 120 L150 100 L180 120 L210 100 L240 120 L270 100 L300 120 V200 H0Z" fill="#000" />
              <path d="M0 150 L30 130 L60 150 L90 130 L120 150 L150 130 L180 150 L210 130 L240 150 L270 130 L300 150 V200 H0Z" fill="#000" />
            </svg>
            <div className="w-10 h-10 rounded-card border-2 border-charcoal/40 flex items-center justify-center relative z-10">
              <Layout className="w-5 h-5 text-charcoal" />
            </div>
            <div className="relative z-10 flex items-end justify-between mt-6">
              <h3 className="text-[18px] md:text-[22px] font-display font-black text-charcoal uppercase leading-tight">
                Figma, Lovable,<br />Framer, Notion
              </h3>
              <a href="#tools" className="w-10 h-10 rounded-full border border-charcoal/40 flex items-center justify-center flex-shrink-0 ml-4 hover:bg-charcoal/20 transition-colors">
                <ArrowRight className="w-4 h-4 text-charcoal" />
              </a>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ──── RECENT PROJECTS ──── */}
      <motion.section className="mt-section" {...fadeIn}>
        <h2 className="text-section-sm sm:text-section-md lg:text-section font-display font-black text-white uppercase mb-12">
          Recent
          <br />
          Projects
        </h2>
        <div className="space-y-[10px]">
          {projects.map((project, i) => (
            <Link
              key={i}
              to={`/projects/${project.slug}`}
              className="group flex items-center gap-5 bg-card-dark rounded-card p-4 hover:bg-card-lighter transition-colors duration-200"
            >
              <div className="w-[80px] h-[80px] md:w-[96px] md:h-[96px] rounded-card overflow-hidden flex-shrink-0">
                <img src={project.icon} alt={project.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <h3 className="text-body md:text-[20px] font-display font-bold text-white group-hover:text-orange transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted text-body-sm mt-1">{project.subtitle}</p>
              </div>
              <ArrowUpRight className="w-5 h-5 text-orange flex-shrink-0" />
            </Link>
          ))}
        </div>
      </motion.section>

      {/* ──── EXPERIENCE ──── */}
      <motion.section className="mt-section" {...fadeIn}>
        <h2 className="text-section-sm sm:text-section-md lg:text-section font-display font-black text-white uppercase mb-16">
          7 Years of
          <br />
          Experience
        </h2>
        <div className="space-y-[10px]">
          {experience.map((job, i) => (
            <div key={i} className="bg-card-dark rounded-card p-5 md:p-6 border border-transparent hover:border-card-lighter transition-colors duration-200">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <h3 className="text-body md:text-[20px] font-display font-bold text-white">
                  {job.company}
                </h3>
                <span className="text-muted/60 text-[13px] font-bold flex-shrink-0">{job.duration}</span>
              </div>
              <p className="text-lime text-[14px] font-bold mt-1">{job.designation}</p>
              <p className="text-muted text-body-sm leading-[1.4] mt-2">
                {job.description}
              </p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* ──── PREMIUM TOOLS ──── */}
      <motion.section id="tools" className="mt-section" {...fadeIn}>
        <h2 className="text-section-sm sm:text-section-md lg:text-section font-display font-black text-white uppercase mb-12">
          Premium
          <br />
          Tools
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[40px] gap-y-[33px]">
          {tools.map((tool, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-card bg-card-dark flex items-center justify-center flex-shrink-0 overflow-hidden">
                <img src={tool.logo} alt={tool.name} className="w-14 h-14 object-cover rounded-card" />
              </div>
              <div>
                <h3 className="text-body font-display font-bold text-white">{tool.name}</h3>
                <p className="text-muted text-body-sm mt-1 leading-relaxed">{tool.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
