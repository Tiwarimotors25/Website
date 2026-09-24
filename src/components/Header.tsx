import React, { useState } from 'react';
import { Menu, X, Phone, Settings } from 'lucide-react';
import { LOGO_SRC, scrollToSection } from '../config';
import { useOwner } from '../context/OwnerContext';

const NAV = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'about', label: 'About Us' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'contact', label: 'Contact' },
];

export const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { business, setIsEditModalOpen } = useOwner();

  const go = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setOpen(false);
    scrollToSection(id);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#111111]/95 backdrop-blur-md border-b border-white/10">
      {/* Notice Banner if configured */}
      {business.noticeBanner && (
        <div className="bg-gradient-to-r from-[#F58220] to-[#D96E14] text-white text-xs font-semibold py-1.5 px-4 text-center">
          <span>{business.noticeBanner}</span>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
        {/* Brand Logo & Name */}
        <a
          href="#home"
          onClick={(e) => go(e, 'home')}
          className="flex items-center gap-2.5 shrink-0 group"
          data-testid="header-logo-link"
        >
          <img
            src={LOGO_SRC}
            alt="Tiwari Motors logo"
            className="h-10 w-10 rounded-md bg-white object-cover shadow-sm group-hover:opacity-95 transition-opacity"
          />
          <span className="leading-tight">
            <span className="block font-heading font-bold text-white text-sm sm:text-base">
              Tiwari Motors
            </span>
            <span className="block text-[10px] tracking-[0.28em] text-[#F58220] font-semibold uppercase">
              SMART GARAGE
            </span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              onClick={(e) => go(e, n.id)}
              className="text-sm font-medium text-zinc-300 hover:text-white transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>

        {/* Desktop Quick Actions */}
        <div className="hidden sm:flex items-center gap-2.5">
          <button
            type="button"
            onClick={() => setIsEditModalOpen(true)}
            title="Owner Edit Mode"
            className="p-2 rounded-lg text-zinc-400 hover:text-[#F58220] hover:bg-white/5 transition-colors cursor-pointer"
          >
            <Settings size={17} />
          </button>

          <a
            href={`tel:${business.phonePrimaryIntl}`}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-zinc-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
          >
            <Phone size={14} className="text-[#F58220]" />
            <span>{business.phonePrimary}</span>
          </a>

          <a
            href="#booking"
            onClick={(e) => go(e, 'booking')}
            data-testid="header-book-btn"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-[#F58220] hover:bg-[#D96E14] transition-colors shadow-sm"
          >
            <span>Book Service</span>
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex md:hidden items-center gap-1">
          <button
            type="button"
            onClick={() => setIsEditModalOpen(true)}
            title="Owner Edit Mode"
            className="p-2 text-zinc-400 hover:text-[#F58220] transition-colors cursor-pointer"
          >
            <Settings size={18} />
          </button>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="p-2 text-zinc-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="md:hidden bg-[#111111] border-b border-white/10 px-4 py-4 space-y-3 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-2">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                onClick={(e) => go(e, n.id)}
                className="px-3 py-2 rounded-md text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/5 transition-colors"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-white/10 grid grid-cols-2 gap-2">
            <a
              href={`tel:${business.phonePrimaryIntl}`}
              className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold text-white bg-white/10 hover:bg-white/15 transition-colors"
            >
              <Phone size={14} className="text-[#F58220]" />
              <span>Call Now</span>
            </a>
            <a
              href="#booking"
              onClick={(e) => go(e, 'booking')}
              className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold text-white bg-[#F58220] hover:bg-[#D96E14] transition-colors"
            >
              <span>Book Service</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
