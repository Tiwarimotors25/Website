import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Wrench, ChevronUp } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/businessData';

interface FloatingActionBarProps {
  onBookClick: () => void;
}

export const FloatingActionBar: React.FC<FloatingActionBarProps> = ({ onBookClick }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* MOBILE FIXED BOTTOM ACTION BAR (Height ~56px, well under 15% of viewport) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-neutral-200/90 shadow-[0_-4px_12px_rgba(0,0,0,0.06)] px-3 py-2">
        <div className="grid grid-cols-3 gap-2">
          {/* Call */}
          <a
            href={`tel:+91${BUSINESS_CONFIG.phonePrimary}`}
            className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-lg bg-neutral-100 active:bg-neutral-200 text-neutral-900 text-xs font-semibold"
          >
            <Phone className="w-3.5 h-3.5 text-[#F58220]" />
            <span>Call</span>
          </a>

          {/* WhatsApp */}
          <a
            href={`https://wa.me/${BUSINESS_CONFIG.whatsappCleanNumber}?text=${encodeURIComponent(
              'Namaste Tiwari Motors, I need information about car service.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-lg bg-[#25D366]/15 active:bg-[#25D366]/25 text-[#128C7E] text-xs font-semibold"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
            <span>WhatsApp</span>
          </a>

          {/* Book Service */}
          <button
            type="button"
            onClick={onBookClick}
            className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-lg bg-[#F58220] active:bg-[#d96e14] text-white text-xs font-semibold shadow-xs cursor-pointer"
          >
            <Wrench className="w-3.5 h-3.5" />
            <span>Book</span>
          </button>
        </div>
      </div>

      {/* DESKTOP FLOATING WHATSAPP & SCROLL TO TOP */}
      <div className="hidden md:flex fixed bottom-6 right-6 z-40 flex-col items-end gap-3">
        {showScrollTop && (
          <button
            type="button"
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-white text-neutral-700 hover:text-[#F58220] border border-neutral-200 shadow-md flex items-center justify-center transition-all hover:scale-105 cursor-pointer"
            aria-label="Scroll back to top"
          >
            <ChevronUp className="w-5 h-5" />
          </button>
        )}

        <a
          href={`https://wa.me/${BUSINESS_CONFIG.whatsappCleanNumber}?text=${encodeURIComponent(
            'Namaste Tiwari Motors, I have an inquiry about my vehicle.'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-lg hover:shadow-xl transition-all hover:scale-105 group font-medium text-xs"
          aria-label="Quick WhatsApp Inquiry"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          <span className="font-semibold">Chat with Us</span>
        </a>
      </div>
    </>
  );
};
