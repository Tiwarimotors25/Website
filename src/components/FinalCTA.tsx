import React from 'react';
import { Calendar, Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/businessData';

interface FinalCTAProps {
  onBookClick: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onBookClick }) => {
  return (
    <section className="bg-gradient-to-r from-[#F58220] via-[#e67512] to-[#d46607] text-white py-10 lg:py-12 relative overflow-hidden shadow-inner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-heading text-white">
          “Aapki Gadi, Hamari Zimmedari.”
        </h2>

        <p className="mt-2 text-sm sm:text-base text-white/95 max-w-xl mx-auto font-medium">
          Service, repair ya car care ke liye Tiwari Motors se contact karein.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          {/* Book Service */}
          <button
            type="button"
            onClick={onBookClick}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-neutral-900 hover:bg-black text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer hover:-translate-y-0.5"
          >
            <Calendar className="w-4 h-4 text-[#F58220]" />
            <span>Book Service</span>
            <ArrowRight className="w-4 h-4 ml-0.5" />
          </button>

          {/* Call Now */}
          <a
            href={`tel:+91${BUSINESS_CONFIG.phonePrimary}`}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-white hover:bg-neutral-100 text-[#111111] font-bold text-xs sm:text-sm shadow-md transition-all hover:-translate-y-0.5"
          >
            <Phone className="w-4 h-4 text-[#F58220]" />
            <span>Call: {BUSINESS_CONFIG.phonePrimary}</span>
          </a>

          {/* WhatsApp */}
          <a
            href={`https://wa.me/${BUSINESS_CONFIG.whatsappCleanNumber}?text=${encodeURIComponent(
              'Namaste Tiwari Motors, I would like to book a service for my car.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm shadow-md transition-all hover:-translate-y-0.5"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
