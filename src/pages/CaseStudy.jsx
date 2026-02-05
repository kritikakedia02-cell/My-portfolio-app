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
        <h1 className="text-section-sm sm:text-section-md lg:text-section font-display font-black text-white mb-4">
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

        {/* Hero image */}
        {project.heroImage && (
          <div className="flex justify-center mb-10">
            <div className="rounded-2xl overflow-hidden shadow-xl w-full">
              <img
                src={project.heroImage}
                alt={`${project.title} preview`}
                className="w-full h-auto block rounded-2xl"
              />
            </div>
          </div>
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

        {/* Meta info */}
        {project.meta && (
          <div className="grid grid-cols-2 gap-x-6 gap-y-4 mb-10">
            <div>
              <p className="text-orange text-[11px] font-bold uppercase tracking-wide mb-1">Product</p>
              <p className="text-white text-body-sm font-semibold">{project.title}</p>
            </div>
            {project.meta.category && (
              <div>
                <p className="text-orange text-[11px] font-bold uppercase tracking-wide mb-1">Category</p>
                <p className="text-white text-body-sm font-semibold">{project.meta.category}</p>
              </div>
            )}
            {project.meta.role && (
              <div>
                <p className="text-orange text-[11px] font-bold uppercase tracking-wide mb-1">My Role</p>
                <p className="text-white text-body-sm font-semibold">{project.meta.role}</p>
              </div>
            )}
            {project.meta.market && (
              <div>
                <p className="text-orange text-[11px] font-bold uppercase tracking-wide mb-1">Target Market</p>
                <p className="text-white text-body-sm font-semibold">{project.meta.market}</p>
              </div>
            )}
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
                section.body.includes('\n\n') ? (
                  <div className="space-y-3">
                    {section.body.split('\n\n').map((para, j) => (
                      <p key={j} className="text-muted text-body-sm leading-relaxed">{para}</p>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted text-body-sm leading-relaxed">
                    {section.body}
                  </p>
                )
              )}
              {section.bulletIntro && (
                <p className="text-muted text-body-sm leading-relaxed mt-3">
                  {section.bulletIntro}
                </p>
              )}
              {section.bullets && section.bullets.length > 0 && (
                <ul className={`${section.bulletIntro ? 'mt-2' : 'mt-3'} space-y-2 list-none`}>
                  {section.bullets.map((bullet, j) => (
                    <li key={j} className="flex items-start gap-2 text-muted text-body-sm leading-relaxed">
                      {section.numberedBullets ? (
                        <span className="text-orange mt-0 shrink-0 text-body-sm font-bold">{j + 1}.</span>
                      ) : (
                        <span className="text-orange mt-1.5 shrink-0 text-[8px]">{'\u25CF'}</span>
                      )}
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
              {section.quotes && section.quotes.length > 0 && (
                <div className="mt-4 space-y-3 border-l-2 border-orange/40 pl-4">
                  {section.quotes.map((quote, j) => (
                    <p key={j} className="text-muted text-body-sm leading-relaxed italic">
                      &ldquo;{quote}&rdquo;
                    </p>
                  ))}
                </div>
              )}
              {section.subsections && section.subsections.length > 0 && (
                <div className="mt-4 space-y-6">
                  {section.subsections.map((sub, j) => (
                    <div key={j}>
                      <p className="text-white text-body-sm font-bold mb-1">
                        {section.numberedSubs ? `${j + 1}. ` : ''}{sub.title}
                      </p>
                      {sub.desc && (
                        <p className="text-muted text-body-sm leading-relaxed">{sub.desc}</p>
                      )}
                      {sub.bullets && sub.bullets.length > 0 && (
                        <ul className="mt-2 space-y-2 list-none">
                          {sub.bullets.map((bullet, k) => (
                            <li key={k} className="flex items-start gap-2 text-muted text-body-sm leading-relaxed">
                              <span className="text-orange mt-1.5 shrink-0 text-[8px]">{'\u25CF'}</span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      {sub.secondaryIntro && (
                        <p className="text-muted text-body-sm leading-relaxed mt-3">{sub.secondaryIntro}</p>
                      )}
                      {sub.secondaryBullets && sub.secondaryBullets.length > 0 && (
                        <ul className="mt-2 space-y-2 list-none">
                          {sub.secondaryBullets.map((bullet, k) => (
                            <li key={k} className="flex items-start gap-2 text-muted text-body-sm leading-relaxed">
                              <span className="text-orange mt-1.5 shrink-0 text-[8px]">{'\u25CF'}</span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      {sub.footnote && (
                        <p className="text-muted text-body-sm leading-relaxed mt-3">{sub.footnote}</p>
                      )}
                    </div>
                  ))}
                </div>
              )}
              {section.secondaryBulletIntro && (
                <p className="text-muted text-body-sm leading-relaxed mt-4">
                  {section.secondaryBulletIntro}
                </p>
              )}
              {section.secondaryBullets && section.secondaryBullets.length > 0 && (
                <ul className="mt-2 space-y-2 list-none">
                  {section.secondaryBullets.map((bullet, j) => (
                    <li key={j} className="flex items-start gap-2 text-muted text-body-sm leading-relaxed">
                      <span className="text-orange mt-1.5 shrink-0 text-[8px]">{'\u25CF'}</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
              {section.footnote && (
                <div className="mt-4 space-y-2">
                  {section.footnote.split('\n\n').map((para, j) => (
                    <p key={j} className="text-muted text-body-sm leading-relaxed">
                      {para.includes('\n') ? para.split('\n').map((line, k) => (
                        <span key={k}>{line}{k < para.split('\n').length - 1 && <br />}</span>
                      )) : para}
                    </p>
                  ))}
                </div>
              )}
              {section.images && section.images.length > 0 && (
                <div className={`mt-8 mb-8 gap-5 ${section.images.length === 1 || section.singleColumnImages ? 'flex flex-col items-center' : 'grid grid-cols-2'}`}>
                  {section.images.map((img, j) => (
                    <div key={j} className="rounded-2xl overflow-hidden shadow-xl w-full">
                      <img
                        src={img}
                        alt={`${section.heading || project.title} screenshot ${j + 1}`}
                        className="w-full h-auto block rounded-2xl"
                        style={{ imageRendering: 'auto' }}
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
