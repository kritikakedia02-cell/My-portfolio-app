import { motion } from 'framer-motion';
import { ExternalLink, Cpu } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Mindbuddy',
    tools: ['Lovable', 'Thunderbit', 'Excalidraw'],
    useCase: 'Navigating Toxic Work Culture',
    demoUrl: 'https://lovable.dev/projects/421923b0-903a-47e7-ab15-6b06a43ffe02',
    gradient: 'from-violet to-violet-light',
  },
  {
    id: 2,
    title: 'Pocketwise',
    tools: ['Lovable', 'Thunderbit', 'draw.io'],
    useCase: "Killing India's Forgotten Subscription Auto-Renewals",
    demoUrl: 'https://preview--group-5-pocket-wise.lovable.app/',
    gradient: 'from-teal to-teal-light',
  },
  {
    id: 3,
    title: 'BLR-ORR Action Console',
    tools: ['Figma Make', 'draw.io', 'Excalidraw'],
    useCase: 'A better tool for India traffic Management',
    demoUrl: 'https://nacre-skirr-89810319.figma.site/',
    gradient: 'from-violet-dark to-violet',
  },
  {
    id: 4,
    title: 'Lune',
    tools: ['Lovable', 'draw.io', 'Excalidraw'],
    useCase: 'Cycle-Aware Productivity & Wellbeing Companion for Young Women',
    demoUrl: 'https://preview--lune-goroup-5.lovable.app/',
    gradient: 'from-teal-dark to-teal',
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export default function Projects() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet/10 rounded-full mb-6">
            <Cpu className="w-4 h-4 text-violet" />
            <span className="text-sm text-violet font-medium">The AI Lab</span>
          </div>
          <h1 className="section-heading text-center">
            Recent <span className="gradient-text">Builds</span>
          </h1>
          <p className="section-subheading mx-auto text-center">
            A collection of AI-powered projects and experiments. Each build explores
            a unique use case at the intersection of AI and practical applications.
          </p>
        </motion.div>

        {/* Projects Grid - Bento Box Style */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={{
            animate: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group card card-hover"
            >
              {/* Gradient accent bar */}
              <div
                className={`h-1 w-full bg-gradient-to-r ${project.gradient} rounded-full mb-6
                          group-hover:h-2 transition-all duration-300`}
              />

              {/* Project Title */}
              <h3 className="text-xl font-display font-semibold text-white mb-3">
                {project.title}
              </h3>

              {/* Tools Used */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 bg-midnight/50 rounded-full text-xs text-slate-text
                             border border-slate-border/30"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {/* Use Case */}
              <p className="text-slate-text text-sm leading-relaxed mb-6">
                <span className="text-violet font-medium">The Use Case: </span>
                {project.useCase}
              </p>

              {/* Links */}
              <div className="flex gap-3 mt-auto">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-violet/10
                           text-violet text-sm font-medium rounded-xl
                           hover:bg-violet hover:text-white transition-all duration-300"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
