import React from 'react';
import { Calendar, MessageCircle, Phone, Navigation } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/businessData';

interface HeroQuickActionsProps {
  onBookClick: () => void;
}

export const HeroQuickActions: React.FC<HeroQuickActionsProps> = ({ onBookClick }) => {
  return (
    <div className="relative z-20 -mt-6 sm:-mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-xl shadow-lg border border-neutral-200/90 p-2 sm:p-3">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {/* 1. Book Service */}
          <button
            type="button"
            onClick={onBookClick}
            className="flex items-center gap-2.5 p-2 sm:p-2.5 rounded-lg bg-orange-50/70 hover:bg-[#F58220] text-neutral-900 hover:text-white transition-all duration-200 text-left cursor-pointer group"
          >
            <div className="w-8 h-8 rounded-md bg-[#F58220] group-hover:bg-white text-white group-hover:text-[#F58220] flex items-center justify-center shrink-0 transition-colors shadow-xs">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold font-heading leading-tight">Book Service</p>
              <p className="text-[11px] text-neutral-500 group-hover:text-white/80 leading-tight mt-0.5 hidden sm:block">
                Schedule online
              </p>
            </div>
          </button>

          {/* 2. WhatsApp */}
          <a
            href={`https://wa.me/${BUSINESS_CONFIG.whatsappCleanNumber}?text=${encodeURIComponent(
              'Namaste Tiwari Motors, I want to inquire about car repair / service.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 p-2 sm:p-2.5 rounded-lg bg-neutral-50 hover:bg-[#25D366]/10 text-neutral-900 transition-all duration-200 text-left group"
          >
            <div className="w-8 h-8 rounded-md bg-[#25D366]/15 group-hover:bg-[#25D366] text-[#25D366] group-hover:text-white flex items-center justify-center shrink-0 transition-colors shadow-xs">
              <MessageCircle className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold font-heading leading-tight group-hover:text-[#25D366]">
                WhatsApp Us
              </p>
              <p className="text-[11px] text-neutral-500 leading-tight mt-0.5 hidden sm:block">
                Quick response
              </p>
            </div>
          </a>

          {/* 3. Call Workshop */}
          <a
            href={`tel:+91${BUSINESS_CONFIG.phonePrimary}`}
            className="flex items-center gap-2.5 p-2 sm:p-2.5 rounded-lg bg-neutral-50 hover:bg-neutral-100 text-neutral-900 transition-all duration-200 text-left group"
          >
            <div className="w-8 h-8 rounded-md bg-neutral-200 group-hover:bg-[#111111] text-neutral-800 group-hover:text-white flex items-center justify-center shrink-0 transition-colors shadow-xs">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold font-heading leading-tight">Call Workshop</p>
              <p className="text-[11px] text-neutral-500 leading-tight mt-0.5 hidden sm:block">
                {BUSINESS_CONFIG.phonePrimary}
              </p>
            </div>
          </a>

          {/* 4. Get Directions */}
          <a
            href={BUSINESS_CONFIG.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 p-2 sm:p-2.5 rounded-lg bg-neutral-50 hover:bg-orange-50/70 text-neutral-900 transition-all duration-200 text-left group"
          >
            <div className="w-8 h-8 rounded-md bg-orange-100/80 group-hover:bg-[#F58220] text-[#F58220] group-hover:text-white flex items-center justify-center shrink-0 transition-colors shadow-xs">
              <Navigation className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold font-heading leading-tight group-hover:text-[#F58220]">
                Get Directions
              </p>
              <p className="text-[11px] text-neutral-500 leading-tight mt-0.5 hidden sm:block">
                Ambedkar Nagar
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
