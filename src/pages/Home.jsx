import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Code2, Zap } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const highlights = [
  { icon: Cpu, text: 'Product Manager' },
  { icon: Code2, text: 'AI Explorer' },
  { icon: Zap, text: 'Building in Public' },
];

export default function Home() {
  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet/10 via-midnight to-teal/5" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24 lg:py-28">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="max-w-4xl"
          >
            {/* Highlight badges */}
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              {highlights.map((item) => (
                <span
                  key={item.text}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-slate-surface/50
                           rounded-full text-sm text-slate-text border border-slate-border/30"
                >
                  <item.icon className="w-4 h-4 text-violet" />
                  {item.text}
                </span>
              ))}
            </motion.div>

            {/* Main headline */}
            <motion.h1
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold
                       text-white leading-tight mb-6 tracking-tight"
            >
              Kritika:{' '}
              <span className="gradient-text">
                Building at the Intersection of Systems, Data & AI
              </span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-text max-w-2xl mb-10 leading-relaxed"
            >
              I build in public, exploring cutting-edge AI use cases and turning
              experiments into real-world applications. Join me on this journey of
              discovery and innovation.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/projects" className="btn-primary inline-flex items-center gap-2">
                View My Recent Builds
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/contact" className="btn-secondary">
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-12 bg-slate-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { value: '10+', label: 'AI Projects Built' },
              { value: '7+', label: 'Years Experience' },
              { value: '20+', label: 'Use Cases Run' },
              { value: '50+', label: 'Blog Posts' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center p-6 rounded-2xl bg-midnight/50 border border-slate-border/20"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-text">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
