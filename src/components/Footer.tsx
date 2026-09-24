import React from 'react';
import { Phone, Mail, MapPin, Clock, Settings } from 'lucide-react';
import { LOGO_SRC, SERVICES, scrollToSection } from '../config';
import { useOwner } from '../context/OwnerContext';

const QUICK_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'about', label: 'About Us' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'booking', label: 'Book Service' },
  { id: 'contact', label: 'Contact' },
];

interface FooterProps {
  onSelectService: (serviceName: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectService }) => {
  const { business, setIsEditModalOpen } = useOwner();

  const go = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    scrollToSection(id);
  };

  return (
    <footer className="bg-[#0c0c0c] text-zinc-400 border-t border-white/10" data-testid="site-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {/* Col 1: Brand */}
        <div className="space-y-4">
          <div className="flex items-center gap-2.5">
            <img
              src={LOGO_SRC}
              alt="Tiwari Motors logo"
              className="h-10 w-10 rounded-md bg-white object-cover"
            />
            <span className="leading-tight">
              <span className="block font-heading font-bold text-white text-base">
                Tiwari Motors
              </span>
              <span className="block text-[10px] tracking-[0.28em] text-[#F58220] font-semibold">
                SMART GARAGE
              </span>
            </span>
          </div>
          <p className="text-sm text-zinc-400 italic">
            “{business.tagline}”
          </p>
          <p className="text-xs text-zinc-500">
            Multi-brand automobile service, repair and car care workshop located at Ambedkar Nagar, Uttar Pradesh.
          </p>
          <div className="pt-1">
            <button
              type="button"
              onClick={() => setIsEditModalOpen(true)}
              className="inline-flex items-center gap-1.5 text-xs text-zinc-500 hover:text-[#F58220] transition-colors cursor-pointer"
            >
              <Settings size={13} />
              <span>Owner Control Panel</span>
            </button>
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div>
          <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-4">
            Quick Navigation
          </h4>
          <ul className="space-y-2.5 text-xs sm:text-sm">
            {QUICK_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={(e) => go(e, link.id)}
                  className="hover:text-[#F58220] transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Services */}
        <div>
          <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-4">
            Our Services
          </h4>
          <ul className="space-y-2.5 text-xs sm:text-sm">
            {SERVICES.slice(0, 6).map((s) => (
              <li key={s.id}>
                <button
                  type="button"
                  onClick={() => {
                    onSelectService(s.name);
                    scrollToSection('booking');
                  }}
                  className="hover:text-[#F58220] transition-colors text-left cursor-pointer"
                >
                  {s.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4: Contact & Hours */}
        <div className="space-y-3.5 text-xs sm:text-sm">
          <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-4">
            Workshop Info
          </h4>
          <div className="flex items-start gap-2.5">
            <MapPin size={15} className="text-[#F58220] mt-0.5 shrink-0" />
            <span>{business.address}</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Clock size={15} className="text-[#F58220] shrink-0" />
            <span>{business.hours}</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Phone size={15} className="text-[#F58220] shrink-0" />
            <a href={`tel:${business.phonePrimaryIntl}`} className="hover:text-white">
              +91 {business.phonePrimary}
            </a>
          </div>
          <div className="flex items-center gap-2.5">
            <Mail size={15} className="text-[#F58220] shrink-0" />
            <span>{business.email}</span>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} Tiwari Motors Smart Garage. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Ambedkar Nagar, Uttar Pradesh</span>
            <span>•</span>
            <span className="text-zinc-400">Aapki Gadi, Hamari Zimmedari.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
