import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const workExperience = [
  {
    id: 1,
    role: 'Product Manager',
    company: '24/7 Software',
    description: 'Leading the API-first platform powering real-time operations for large-scale venues.',
    duration: 'Feb 2024 - Present',
  },
  {
    id: 2,
    role: 'Product Analyst',
    company: 'Cvent',
    description: 'Cvent is an industry-leading meetings, events, and hospitality technology provider.',
    duration: 'Sept 2022 - Feb 2024',
  },
  {
    id: 3,
    role: 'Sr. Business Analyst',
    company: 'Daffodil Software',
    description: 'Daffodil Software is a trusted software engineering partner for technology companies worldwide.',
    duration: 'August 2019 - September 2022',
  },
  {
    id: 4,
    role: 'Consultant',
    company: 'Questa Global',
    description: 'A platform for Talent & Corporate Training Solutions.',
    duration: 'May 2018 - August 2019',
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export default function WorkHistory() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet/10 rounded-full mb-6">
            <Briefcase className="w-4 h-4 text-violet" />
            <span className="text-sm text-violet font-medium">Career Journey</span>
          </div>
          <h1 className="section-heading text-center">
            Work <span className="gradient-text">History</span>
          </h1>
          <p className="section-subheading mx-auto text-center">
            A timeline of my professional journey, from writing my first lines of code
            to building AI-powered solutions at scale.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet via-teal to-slate-border/20 transform md:-translate-x-1/2" />

          {/* Timeline items */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={{
              animate: { transition: { staggerChildren: 0.15 } },
            }}
            className="space-y-12"
          >
            {workExperience.map((job, index) => (
              <motion.div
                key={job.id}
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-violet rounded-full transform -translate-x-1/2 border-4 border-midnight z-10" />

                {/* Content card */}
                <div className={`flex-1 ml-8 md:ml-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="card hover:border-violet/30 transition-colors duration-300">
                    {/* Duration badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-midnight/50 rounded-full text-sm text-slate-text mb-4">
                      <Calendar className="w-3 h-3" />
                      {job.duration}
                    </div>

                    {/* Role and Company */}
                    <h3 className="text-xl font-display font-semibold text-white mb-1">
                      {job.role}
                    </h3>
                    <p className="text-violet font-medium mb-3">{job.company}</p>

                    {/* Description */}
                    <p className="text-slate-text leading-relaxed">
                      {job.description}
                    </p>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </main>
  );
}
