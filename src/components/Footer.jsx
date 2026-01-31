import { Link } from 'react-router-dom';
import { Github, Mail } from 'lucide-react';
import LinkedInIcon from './LinkedInIcon';

const socialLinks = [
  { icon: LinkedInIcon, href: 'https://www.linkedin.com/in/kritika-kedia-pm/', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/kritikakedia02-cell', label: 'GitHub' },
  { icon: Mail, href: '/contact', label: 'Contact', internal: true },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-card-lighter py-10 px-5 md:px-8 lg:px-10">
      <div className="max-w-[1140px] mx-auto flex flex-col gap-8">
        {/* Top row — branding (left) + social icons (right) */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          {/* Left — name + tagline */}
          <div>
            <button
              onClick={scrollToTop}
              className="text-white font-display font-bold text-body hover:text-orange transition-colors text-left"
            >
              Kritika Kedia
            </button>
            <p className="text-muted text-[13px] tracking-[0.2em] uppercase mt-1">
              Product Manager
            </p>
          </div>

          {/* Right — social icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) =>
              link.internal ? (
                <Link
                  key={link.label}
                  to={link.href}
                  className="w-9 h-9 rounded-full bg-card-dark flex items-center justify-center text-muted hover:text-white hover:bg-card-lighter transition-colors"
                  aria-label={link.label}
                >
                  <link.icon className="w-4 h-4" />
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-card-dark flex items-center justify-center text-muted hover:text-white hover:bg-card-lighter transition-colors"
                  aria-label={link.label}
                >
                  <link.icon className="w-4 h-4" />
                </a>
              )
            )}
          </div>
        </div>

      </div>
    </footer>
  );
}
