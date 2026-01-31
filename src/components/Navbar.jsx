import { Link, useLocation } from 'react-router-dom';
import { Home, Briefcase, FolderOpen, PenLine, Mail, Linkedin } from 'lucide-react';

const navLinks = [
  { icon: Home, path: '/', label: 'Home' },
  { icon: Briefcase, path: '/work', label: 'Experience' },
  { icon: FolderOpen, path: '/projects', label: 'Projects' },
  { icon: PenLine, path: '/blog', label: 'Blog' },
  { icon: Mail, path: '/contact', label: 'Contact' },
  { icon: Linkedin, path: 'https://www.linkedin.com/in/kritika-kedia-pm/', label: 'LinkedIn', external: true },
];

export default function Navbar() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-charcoal/80 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex items-center justify-center gap-6">
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.label}
                href={link.path}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-card text-muted hover:text-white hover:bg-card-dark transition-all duration-200"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ) : (
              <Link
                key={link.label}
                to={link.path}
                className={`p-2.5 rounded-card transition-all duration-200
                  ${isActive(link.path)
                    ? 'text-white bg-card-dark'
                    : 'text-muted hover:text-white hover:bg-card-dark'
                  }`}
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </Link>
            )
          )}
        </div>
      </div>
    </nav>
  );
}
