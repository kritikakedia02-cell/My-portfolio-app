import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import ProfileCard from '../components/ProfileCard';
import projects from '../data/projects';

export default function CaseStudy() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="pb-20">
        <div className="lg:hidden mb-10 max-w-sm mx-auto">
          <ProfileCard />
        </div>
        <p className="text-muted text-body-sm">Project not found.</p>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-orange text-body-sm mt-4 hover:underline"
        >
          <ArrowLeft size={16} />
          Back to projects
        </Link>
      </div>
    );
  }

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
        {/* Back link */}
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-muted text-body-sm mb-8 hover:text-white transition-colors"
        >
          <ArrowLeft size={16} />
          Back to projects
        </Link>

        {/* Title */}
        <h1 className="text-section-sm sm:text-section-md lg:text-section font-display font-black text-white uppercase mb-4">
          {project.title}
        </h1>

        {project.subtitle && (
          <p className="text-body font-display font-bold text-white mb-6">
            {project.subtitle}
          </p>
        )}


        {/* Overview */}
        {project.overview && (
          <p className="text-muted text-body-sm leading-relaxed mb-8">
            {project.overview}
          </p>
        )}

        {/* Full stats */}
        {project.stats && project.stats.length > 0 && (
          <div className="grid grid-cols-3 gap-3 mb-10">
            {project.stats.map((stat, i) => (
              <div key={i} className="bg-card-lighter rounded-card p-3 text-center">
                <span className="text-[24px] font-display font-black text-orange">
                  {stat.value}
                </span>
                <p className="text-white text-[11px] font-bold mt-1 leading-tight">
                  {stat.label}
                </p>
                <p className="text-muted text-[10px] mt-1 leading-tight">
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Sections */}
        <div className="space-y-6">
          {project.sections.map((section, i) => (
            <div key={i}>
              {section.heading && (
                <h4 className="text-body font-display font-bold text-white mb-2">
                  {section.heading}
                </h4>
              )}
              {section.body && (
                <p className="text-muted text-body-sm leading-relaxed">
                  {section.body}
                </p>
              )}
              {section.images && section.images.length > 0 && (
                <div className={`mt-6 gap-5 ${section.images.length === 1 ? 'flex justify-center' : 'grid grid-cols-2'}`}>
                  {section.images.map((img, j) => (
                    <div key={j} className="rounded-2xl overflow-hidden shadow-xl">
                      <img
                        src={img}
                        alt={`${section.heading || project.title} screenshot ${j + 1}`}
                        className="w-full h-auto block rounded-2xl"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Demo link */}
        {project.demoUrl && (
          <div className="mt-10">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-card-lighter text-white text-[14px] font-bold rounded-full hover:bg-white/20 transition-colors inline-block"
            >
              Try now
            </a>
          </div>
        )}
      </motion.div>
    </div>
  );
}
