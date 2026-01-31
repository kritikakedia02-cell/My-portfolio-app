import { useState } from 'react';
import { motion } from 'framer-motion';
import { CalendarDays, Github, Send, FileText } from 'lucide-react';
import ProfileCard from '../components/ProfileCard';
import LinkedInIcon from '../components/LinkedInIcon';
import { supabase } from '../lib/supabase';

const contactLinks = [
  { icon: LinkedInIcon, label: 'LinkedIn', href: 'https://www.linkedin.com/in/kritika-kedia-pm/' },
  { icon: FileText, label: 'Get Resume', href: '/resume.pdf' },
  { icon: Github, label: 'GitHub', href: 'https://github.com/kritikakedia02-cell' },
  { icon: CalendarDays, label: 'Schedule a Call', href: 'https://calendly.com/kritikakedia02/30min' },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const { error } = await supabase
      .from('contact_messages')
      .insert({ name: formData.name, email: formData.email, message: formData.message });

    setIsSubmitting(false);

    if (error) {
      setSubmitStatus('error');
    } else {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

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
        <h1 className="text-section-sm sm:text-section-md lg:text-[90px] font-display font-black uppercase leading-none mb-8">
          <span className="text-white">Let&rsquo;s Work</span>
          <br />
          <span className="text-muted">Together</span>
        </h1>
        <p className="text-muted text-body-sm md:text-body max-w-md leading-[1.4] mb-10">
          Have a project idea, want to collaborate, or just want to chat?
          I&rsquo;d love to hear from you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left — Links */}
          <div className="flex flex-col gap-[10px]">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 px-4 py-5 bg-card-dark rounded-card text-muted hover:text-white hover:bg-card-lighter transition-all duration-200"
              >
                <link.icon className="w-5 h-5" />
                <span className="font-display font-bold text-body">{link.label}</span>
              </a>
            ))}
          </div>

          {/* Right — Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-body-sm font-display font-bold text-muted-light mb-2">Name</label>
              <input
                type="text" id="name" name="name"
                value={formData.name} onChange={handleChange} required
                className="w-full px-4 py-3 bg-card-dark border border-card-lighter rounded-card text-white
                         placeholder-muted focus:outline-none focus:border-orange focus:ring-1
                         focus:ring-orange transition-colors text-body-sm"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-body-sm font-display font-bold text-muted-light mb-2">Email</label>
              <input
                type="email" id="email" name="email"
                value={formData.email} onChange={handleChange} required
                className="w-full px-4 py-3 bg-card-dark border border-card-lighter rounded-card text-white
                         placeholder-muted focus:outline-none focus:border-orange focus:ring-1
                         focus:ring-orange transition-colors text-body-sm"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-body-sm font-display font-bold text-muted-light mb-2">Message</label>
              <textarea
                id="message" name="message" rows={5}
                value={formData.message} onChange={handleChange} required
                className="w-full px-4 py-3 bg-card-dark border border-card-lighter rounded-card text-white
                         placeholder-muted resize-none focus:outline-none focus:border-orange
                         focus:ring-1 focus:ring-orange transition-colors text-body-sm"
                placeholder="What's on your mind?"
              />
            </div>
            <button
              type="submit" disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-orange text-white
                       font-display font-bold rounded-card hover:bg-orange-light transition-colors
                       disabled:opacity-50 disabled:cursor-not-allowed text-body"
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

            {submitStatus === 'success' && (
              <p className="text-green-400 text-body-sm font-display">
                Message sent! I'll get back to you soon.
              </p>
            )}
            {submitStatus === 'error' && (
              <p className="text-red-400 text-body-sm font-display">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>
      </motion.div>
    </div>
  );
}
