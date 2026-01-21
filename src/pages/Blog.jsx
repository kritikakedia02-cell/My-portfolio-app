import { motion } from 'framer-motion';
import { Linkedin, Calendar, ArrowUpRight, MessageSquare } from 'lucide-react';

const posts = [
  {
    id: 1,
    date: 'Jan 15, 2026',
    title: "We're tracking the wrong things in 2026.",
    url: 'https://www.linkedin.com/posts/kritika-kedia-pm_productmanagement-aistrategy-b2btech-activity-7417513909491789825-J_y0?utm_source=share&utm_medium=member_desktop&rcm=ACoAABuo9s0BflbD_81rUEM5EFX0DxzIg-PiZ70',
  },
  {
    id: 2,
    date: 'Jan 14, 2026',
    title: 'How to Build for 2026: The 3 Ways AI "Teams" are Replacing Single Bots',
    url: 'https://www.linkedin.com/posts/kritika-kedia-pm_productmanagement-aiworkforce-b2btech-activity-7417136624565776384-iexL?utm_source=share&utm_medium=member_desktop&rcm=ACoAABuo9s0BflbD_81rUEM5EFX0DxzIg-PiZ70',
  },
  {
    id: 3,
    date: 'Jan 13, 2026',
    title: 'Why B2B AI in 2026 is moving from "Assistance" to "Autonomy"',
    url: 'https://www.linkedin.com/posts/kritika-kedia-pm_aiproductmanagement-b2b2026-agenticai-activity-7416787873967996929-GNFb?utm_source=share&utm_medium=member_desktop&rcm=ACoAABuo9s0BflbD_81rUEM5EFX0DxzIg-PiZ70',
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export default function Blog() {
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
            <MessageSquare className="w-4 h-4 text-violet" />
            <span className="text-sm text-violet font-medium">Thoughts & Insights</span>
          </div>
          <h1 className="section-heading text-center">
            Blog & <span className="gradient-text">Posts</span>
          </h1>
          <p className="section-subheading mx-auto text-center">
            Curated insights from my LinkedIn and social media—sharing learnings, experiments,
            and observations from building with AI.
          </p>
        </motion.div>

        {/* Posts Feed */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={{
            animate: { transition: { staggerChildren: 0.1 } },
          }}
          className="space-y-6"
        >
          {posts.map((post) => (
            <motion.article
              key={post.id}
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
              className="group card card-hover"
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                {/* LinkedIn Icon */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#0A66C2]/10 rounded-xl flex items-center justify-center">
                    <Linkedin className="w-6 h-6 text-[#0A66C2]" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  {/* Date */}
                  <div className="flex flex-wrap items-center gap-4 mb-3">
                    <span className="inline-flex items-center gap-1.5 text-sm text-slate-text">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-display font-semibold text-white leading-snug mb-4">
                    {post.title}
                  </h3>

                  {/* Read on LinkedIn button */}
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#0A66C2]/10
                             text-[#0A66C2] text-sm font-medium rounded-xl
                             hover:bg-[#0A66C2] hover:text-white transition-all duration-300
                             group/link"
                  >
                    <Linkedin className="w-4 h-4" />
                    Read on LinkedIn
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="https://www.linkedin.com/in/kritika-kedia-pm/recent-activity/all/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
          >
            <Linkedin className="w-5 h-5" />
            Load More Posts
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </main>
  );
}
