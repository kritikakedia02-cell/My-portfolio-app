import { motion } from 'framer-motion';
import ProfileCard from '../components/ProfileCard';

const workExperience = [
  {
    id: 1,
    company: '24/7 Software',
    designation: 'Product Manager',
    description: 'Leading the API-first platform powering real-time operations for large-scale venues.',
    duration: 'Feb 2024 - Present',
  },
  {
    id: 2,
    company: 'Cvent',
    designation: 'Product Analyst',
    description: 'Cvent is an industry-leading meetings, events, and hospitality technology provider.',
    duration: 'Sept 2022 - Feb 2024',
  },
  {
    id: 3,
    company: 'Daffodil Software',
    designation: 'Sr. Business Analyst',
    description: 'Daffodil Software is a trusted software engineering partner for technology companies worldwide.',
    duration: 'August 2019 - September 2022',
  },
  {
    id: 4,
    company: 'Questa Global',
    designation: 'Consultant',
    description: 'A platform for Talent & Corporate Training Solutions',
    duration: 'May 2018 - August 2019',
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export default function WorkHistory() {
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
        <h1 className="text-section-sm sm:text-section-md lg:text-section font-display font-black uppercase mb-10">
          <span className="text-white">7 Years of</span>
          <br />
          <span className="text-muted">Experience</span>
        </h1>
      </motion.div>

      <motion.div
        initial="initial"
        animate="animate"
        variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
        className="space-y-[10px]"
      >
        {workExperience.map((job, index) => (
          <motion.div
            key={job.id}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-card-dark rounded-card p-5 md:p-6 border border-transparent hover:border-card-lighter transition-colors duration-200"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <h3 className="text-body md:text-[20px] font-display font-bold text-white">
                {job.company}
              </h3>
              <span className="text-muted/60 text-[13px] font-bold">{job.duration}</span>
            </div>
            <p className="text-lime text-[14px] font-bold mt-1">{job.designation}</p>
            <p className="text-muted text-body-sm mt-2 leading-[1.4]">{job.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
