import { motion } from 'framer-motion';
import { ArrowUpRight, Linkedin } from 'lucide-react';
import ProfileCard from '../components/ProfileCard';

const posts = [
  {
    id: 1,
    date: 'Jan 15, 2026',
    title: "We're tracking the wrong things in 2026.",
    url: 'https://www.linkedin.com/posts/kritika-kedia-pm_productmanagement-aistrategy-b2btech-activity-7417513909491789825-J_y0',
  },
  {
    id: 2,
    date: 'Jan 14, 2026',
    title: 'How to Build for 2026: The 3 Ways AI "Teams" are Replacing Single Bots',
    url: 'https://www.linkedin.com/posts/kritika-kedia-pm_productmanagement-aiworkforce-b2btech-activity-7417136624565776384-iexL',
  },
  {
    id: 3,
    date: 'Jan 13, 2026',
    title: 'Why B2B AI in 2026 is moving from "Assistance" to "Autonomy"',
    url: 'https://www.linkedin.com/posts/kritika-kedia-pm_aiproductmanagement-b2b2026-agenticai-activity-7416787873967996929-GNFb',
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export default function Blog() {
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
          <span className="text-white">Blog & </span>
          <span className="text-muted">Posts</span>
        </h1>
      </motion.div>

      <motion.div
        initial="initial"
        animate="animate"
        variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
        className="space-y-[10px]"
      >
        {posts.map((post) => (
          <motion.a
            key={post.id}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
            className="group flex items-start gap-5 bg-card-dark rounded-card p-6 hover:bg-card-lighter transition-colors duration-200"
          >
            <div className="w-12 h-12 bg-card-lighter rounded-card flex items-center justify-center flex-shrink-0">
              <Linkedin className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <span className="text-muted/60 text-body-sm">{post.date}</span>
              <h3 className="text-body font-display font-bold text-white group-hover:text-orange transition-colors mt-1 leading-snug">
                {post.title}
              </h3>
              <span className="inline-flex items-center gap-1 text-body-sm text-orange group-hover:text-white transition-colors mt-3">
                Read on LinkedIn <ArrowUpRight className="w-4 h-4" />
              </span>
            </div>
          </motion.a>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-12"
      >
        <a
          href="https://www.linkedin.com/in/kritika-kedia-pm/recent-activity/all/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-card-dark text-white font-display font-bold rounded-card hover:bg-card-lighter transition-colors"
        >
          <Linkedin className="w-5 h-5" />
          View All Posts
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </motion.div>
    </div>
  );
}
