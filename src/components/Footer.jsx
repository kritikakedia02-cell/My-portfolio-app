import { Github, Linkedin, Mail, Sparkles } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/kritikakedia02-cell', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/kritika-kedia-pm/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:kritika@example.com', label: 'Email' },
];

export default function Footer() {
  return (
    <footer className="bg-midnight border-t border-slate-border/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-violet" />
            <span className="text-slate-text text-sm">
              Built by Kritika using AI
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-text hover:text-violet transition-colors duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-border/20 text-center">
          <p className="text-slate-text text-sm">
            {new Date().getFullYear()} Kritika. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
