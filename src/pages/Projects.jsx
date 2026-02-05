import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import ProfileCard from '../components/ProfileCard';
import projects from '../data/projects';

function ProjectCard({ project, index }) {
  const hasCaseStudy = project.sections.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card-dark rounded-card overflow-hidden"
    >
      <div className="p-5 md:p-8">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          {/* Left — text */}
          <div className="flex-1 flex flex-col justify-between min-h-[200px]">
            <div>
              <h3 className="text-[22px] md:text-subtitle font-display font-bold text-white leading-tight">
                {project.cardTitle}
              </h3>
              <p className="text-muted text-body-sm mt-3 leading-relaxed">
                {project.cardDesc}
              </p>
            </div>
          </div>

          {/* Right — product icon */}
          <div className="w-full md:w-[280px] lg:w-[320px] flex-shrink-0">
            <div className="rounded-card overflow-hidden">
              <img
                src={project.icon}
                alt={project.title}
                className="w-full h-auto block object-cover"
              />
            </div>
          </div>
        </div>

        {/* Stats row */}
        {project.cardStats && (
          <div className="flex gap-10 md:gap-16 mt-8">
            {project.cardStats.map((stat, i) => (
              <div key={i}>
                <p className="text-muted text-[13px] mb-1">{stat.label}</p>
                <span className="text-[36px] md:text-[44px] font-display font-black text-white leading-none">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Links */}
        <div className="flex gap-5 mt-6">
          {hasCaseStudy && (
            <Link
              to={`/projects/${project.slug}`}
              className="inline-flex items-center gap-1 text-body-sm text-orange hover:text-white transition-colors"
            >
              Read case study <ArrowUpRight className="w-4 h-4" />
            </Link>
          )}
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-body-sm text-orange hover:text-white transition-colors"
          >
            Try now <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <div className="pb-20">
      {/* Mobile-only profile card */}
      <div className="lg:hidden mb-10 max-w-sm mx-auto">
        <ProfileCard />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-section-sm sm:text-section-md lg:text-section font-display font-black mb-12">
          <span className="text-white">Recent </span>
          <span className="text-muted">Projects</span>
        </h1>
      </motion.div>

      <div className="space-y-4">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}
