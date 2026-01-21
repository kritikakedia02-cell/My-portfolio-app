import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send, MessageCircle } from 'lucide-react';

const contactLinks = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/kritika-kedia-pm/',
    color: 'bg-[#0A66C2]/10 text-[#0A66C2] hover:bg-[#0A66C2]',
  },
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/kritikakedia02-cell',
    color: 'bg-slate-text/10 text-slate-text hover:bg-slate-text',
  },
  {
    icon: Mail,
    label: 'Email',
    href: 'mailto:kritika@example.com',
    color: 'bg-violet/10 text-violet hover:bg-violet',
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' });
    alert('Message sent! I\'ll get back to you soon.');
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

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
            <MessageCircle className="w-4 h-4 text-violet" />
            <span className="text-sm text-violet font-medium">Get in Touch</span>
          </div>
          <h1 className="section-heading text-center">
            Let's <span className="gradient-text">Connect</span>
          </h1>
          <p className="section-subheading mx-auto text-center">
            Have a project idea, want to collaborate, or just want to chat about AI?
            I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-text mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-surface border border-slate-border/30
                           rounded-xl text-white placeholder-slate-text
                           focus:outline-none focus:border-violet focus:ring-1 focus:ring-violet
                           transition-colors duration-300"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-text mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-surface border border-slate-border/30
                           rounded-xl text-white placeholder-slate-text
                           focus:outline-none focus:border-violet focus:ring-1 focus:ring-violet
                           transition-colors duration-300"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-text mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-surface border border-slate-border/30
                           rounded-xl text-white placeholder-slate-text resize-none
                           focus:outline-none focus:border-violet focus:ring-1 focus:ring-violet
                           transition-colors duration-300"
                  placeholder="What's on your mind?"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full flex items-center justify-center gap-2
                         disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Direct Links */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-lg font-display font-semibold text-white mb-4">
                Or reach out directly
              </h3>
              <p className="text-slate-text text-sm mb-6">
                Prefer a more direct approach? Connect with me on these platforms.
              </p>
            </div>

            <div className="space-y-4">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 p-4 rounded-xl ${link.color}
                           hover:text-white transition-all duration-300 group`}
                >
                  <link.icon className="w-6 h-6" />
                  <span className="font-medium">{link.label}</span>
                </a>
              ))}
            </div>

            {/* Response time note */}
            <div className="card bg-midnight/50 border-dashed">
              <p className="text-sm text-slate-text">
                <span className="text-violet font-medium">Response time:</span>{' '}
                I typically respond within 24-48 hours. For urgent matters, LinkedIn DMs work best.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
