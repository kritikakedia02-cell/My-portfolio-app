import { Linkedin, Twitter, Instagram, CalendarDays, Flame } from 'lucide-react';

const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/in/kritika-kedia-pm/', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://x.com/KediaKriti43427', label: 'Twitter' },
  { icon: Instagram, href: 'https://www.instagram.com/kritika.Kedia', label: 'Instagram' },
  { icon: CalendarDays, href: 'https://calendly.com/kritikakedia02/30min', label: 'Calendar' },
];

export default function ProfileCard() {
  return (
    <div className="bg-white rounded-card p-8 text-center w-full relative overflow-hidden border-l-4 border-orange">
      {/* Decorative dashed SVG curve */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 344 640"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M0 30 Q40 0 80 40 Q140 100 172 120"
          stroke="#f46c38"
          strokeWidth="3"
          strokeDasharray="12 8"
          fill="none"
        />
        <path
          d="M172 390 Q120 430 60 500 Q20 560 0 610"
          stroke="#f46c38"
          strokeWidth="3"
          strokeDasharray="12 8"
          fill="none"
        />
      </svg>

      {/* Profile Photo */}
      <div className="relative w-56 h-64 mx-auto mb-8 mt-4">
        <div className="relative w-full h-full rounded-xl overflow-hidden">
          <img
            src="/profile.jpg"
            alt="Kritika Kedia"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>
      </div>

      <h2 className="text-[28px] font-display font-black text-charcoal mb-4">
        Kritika Kedia
      </h2>

      {/* Orange flame icon */}
      <div className="flex justify-center mb-4 relative z-10">
        <span className="w-10 h-10 bg-orange rounded-full flex items-center justify-center text-white">
          <Flame className="w-5 h-5" />
        </span>
      </div>

      <p className="text-charcoal/50 text-body-sm leading-relaxed mb-8 px-2">
        A Product Manager who has developed &amp; scaled innovative solutions driving $200M+ in revenue
      </p>

      {/* Social Icons */}
      <div className="flex items-center justify-center gap-6">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange hover:text-orange-light transition-colors"
            aria-label={link.label}
          >
            <link.icon className="w-6 h-6" />
          </a>
        ))}
      </div>
    </div>
  );
}
