import React from 'react';
import { AlertTriangle, Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/businessData';

export const EmergencyBanner: React.FC = () => {
  return (
    <section className="bg-neutral-900 border-y border-neutral-800 py-6 lg:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1c1813] border border-[#F58220]/40 rounded-xl p-4 sm:p-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#F58220]/15 border border-[#F58220]/40 flex items-center justify-center text-[#F58220] shrink-0">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-extrabold text-white font-heading">
                “Car Not Starting?”
              </h3>
              <p className="text-xs text-neutral-300 mt-0.5">
                Need assistance with your vehicle? Contact Tiwari Motors.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 w-full md:w-auto">
            <a
              href={`tel:+91${BUSINESS_CONFIG.phonePrimary}`}
              className="flex-1 md:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#F58220] hover:bg-[#e07113] text-white text-xs font-bold transition-all shadow-xs"
            >
              <Phone className="w-3.5 h-3.5 fill-current" />
              <span>Call Now</span>
            </a>
            <a
              href={`https://wa.me/${BUSINESS_CONFIG.whatsappCleanNumber}?text=${encodeURIComponent(
                'Namaste Tiwari Motors, my car is not starting and I need assistance.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 md:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-white/10 hover:bg-[#25D366]/20 border border-white/20 hover:border-[#25D366] text-white text-xs font-semibold transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
