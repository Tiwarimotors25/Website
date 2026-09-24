import React from 'react';
import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react';
import { SectionHead } from './Reveal';
import { MAPS } from '../config';
import { useOwner } from '../context/OwnerContext';

export const Contact: React.FC = () => {
  const { business } = useOwner();

  return (
    <section id="contact" className="bg-[#F8F9FA] scroll-mt-20 py-8 sm:py-12 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHead
          eyebrow="Location & Contact"
          title="Visit Tiwari Motors Smart Garage"
          subtitle="Direct phone karein, WhatsApp karein ya seedhe workshop par visit karein."
          testid="contact-heading"
        />

        <div className="mt-6 grid lg:grid-cols-12 gap-4 items-stretch">
          {/* Information Card (5 Columns on Desktop) - Compact & Clean */}
          <div className="lg:col-span-5 bg-white border border-zinc-200/90 rounded-2xl p-4 sm:p-5 shadow-2xs flex flex-col justify-between space-y-4">
            <div className="space-y-3.5">
              {/* Address */}
              <div className="flex items-start gap-2.5">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#F58220]/10 shrink-0 text-[#F58220] mt-0.5">
                  <MapPin size={16} />
                </span>
                <div className="min-w-0">
                  <p className="font-heading font-bold text-[10px] text-zinc-400 uppercase tracking-wider">
                    Workshop Address
                  </p>
                  <p className="mt-0.5 text-xs sm:text-sm font-bold text-zinc-900 leading-snug">
                    {business.address}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-2.5">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#F58220]/10 shrink-0 text-[#F58220] mt-0.5">
                  <Phone size={16} />
                </span>
                <div className="min-w-0">
                  <p className="font-heading font-bold text-[10px] text-zinc-400 uppercase tracking-wider">
                    Phone Numbers
                  </p>
                  <div className="mt-0.5 flex flex-wrap gap-x-2 gap-y-1 text-xs sm:text-sm font-bold text-zinc-900">
                    <a
                      href={`tel:${business.phonePrimaryIntl}`}
                      className="hover:text-[#F58220] transition-colors"
                    >
                      +91 {business.phonePrimary}
                    </a>
                    {business.phoneSecondary && (
                      <>
                        <span className="text-zinc-300">/</span>
                        <a
                          href={`tel:${business.phoneSecondaryIntl}`}
                          className="hover:text-[#F58220] transition-colors"
                        >
                          +91 {business.phoneSecondary}
                        </a>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Timings & Email Inline */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                <div className="flex items-start gap-2">
                  <span className="flex items-center justify-center w-7 h-7 rounded-md bg-[#F58220]/10 shrink-0 text-[#F58220] mt-0.5">
                    <Clock size={14} />
                  </span>
                  <div>
                    <p className="font-heading font-bold text-[10px] text-zinc-400 uppercase tracking-wider">
                      Timings
                    </p>
                    <p className="mt-0.5 text-xs font-semibold text-zinc-900 leading-tight">
                      {business.hours}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <span className="flex items-center justify-center w-7 h-7 rounded-md bg-[#F58220]/10 shrink-0 text-[#F58220] mt-0.5">
                    <Mail size={14} />
                  </span>
                  <div className="min-w-0">
                    <p className="font-heading font-bold text-[10px] text-zinc-400 uppercase tracking-wider">
                      Email
                    </p>
                    <p className="mt-0.5 text-xs font-semibold text-zinc-800 truncate">
                      {business.email}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direction button */}
            <div className="pt-2 border-t border-zinc-100">
              <a
                href={MAPS.directionsUrl}
                target="_blank"
                rel="noreferrer"
                data-testid="contact-directions-btn"
                className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#F58220] hover:bg-[#D96E14] text-white font-bold text-xs shadow-xs transition-all"
              >
                <Navigation size={14} />
                <span>Open Google Maps Directions</span>
              </a>
            </div>
          </div>

          {/* Map Embed Card (7 Columns on Desktop) - Compact Height */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-zinc-200 shadow-2xs bg-zinc-200 h-56 sm:h-64 lg:h-auto min-h-[220px]">
            <iframe
              title="Tiwari Motors Smart Garage Location Map"
              src={MAPS.embedUrl}
              className="w-full h-full min-h-[220px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
