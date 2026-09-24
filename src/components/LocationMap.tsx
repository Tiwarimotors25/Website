import React from 'react';
import { MapPin, Phone, MessageCircle, Mail, Clock, ExternalLink, Navigation } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/businessData';

export const LocationMap: React.FC = () => {
  return (
    <section id="contact" className="py-12 lg:py-18 bg-[#F7F7F7] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-[#F58220]">
            Garage Location & Details
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111111] tracking-tight font-heading mt-0.5">
            “Visit Tiwari Motors”
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-neutral-600">
            Conveniently situated at Hussenpur Khurd Chowk, Ambedkar Nagar with direct road accessibility for all car sizes.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 items-stretch">
          {/* Contact Details Card - Compact */}
          <div className="lg:col-span-5 bg-white rounded-xl p-4 sm:p-5 border border-neutral-200/90 shadow-2xs flex flex-col justify-between">
            <div className="space-y-3.5">
              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center text-[#F58220] shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">
                    Official Workshop Address
                  </h3>
                  <p className="text-sm font-bold text-neutral-900 mt-0.5 leading-snug">
                    {BUSINESS_CONFIG.fullAddress}
                  </p>
                  <p className="text-[11px] text-neutral-500 mt-0.5">
                    Prominent landmark at Hussenpur Khurd Chowk.
                  </p>
                </div>
              </div>

              {/* Phones */}
              <div className="flex items-start gap-3 pt-3 border-t border-neutral-100">
                <div className="w-8 h-8 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center text-[#F58220] shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">
                    Direct Phone Lines
                  </h3>
                  <div className="mt-0.5 space-y-0.5">
                    <div>
                      <a
                        href={`tel:+91${BUSINESS_CONFIG.phonePrimary}`}
                        className="text-sm font-bold text-neutral-900 hover:text-[#F58220] transition-colors"
                      >
                        +91 {BUSINESS_CONFIG.phonePrimary}
                      </a>
                      <span className="ml-1.5 text-[10px] font-bold text-[#F58220] bg-orange-50 px-1.5 py-0.5 rounded">
                        Primary
                      </span>
                    </div>
                    <div>
                      <a
                        href={`tel:+91${BUSINESS_CONFIG.phoneSecondary}`}
                        className="text-xs font-semibold text-neutral-700 hover:text-[#F58220] transition-colors"
                      >
                        +91 {BUSINESS_CONFIG.phoneSecondary}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3 pt-3 border-t border-neutral-100">
                <div className="w-8 h-8 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center text-[#F58220] shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">
                    Email
                  </h3>
                  <a
                    href={`mailto:${BUSINESS_CONFIG.email}`}
                    className="text-xs font-semibold text-neutral-900 hover:text-[#F58220] transition-colors mt-0.5 block"
                  >
                    {BUSINESS_CONFIG.email}
                  </a>
                </div>
              </div>

              {/* Timings */}
              <div className="flex items-start gap-3 pt-3 border-t border-neutral-100">
                <div className="w-8 h-8 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center text-[#F58220] shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">
                    Working Hours
                  </h3>
                  <p className="text-xs font-semibold text-neutral-900 mt-0.5">
                    {BUSINESS_CONFIG.hours}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons - Compact */}
            <div className="mt-5 pt-4 border-t border-neutral-100 grid grid-cols-3 gap-2">
              <a
                href={`tel:+91${BUSINESS_CONFIG.phonePrimary}`}
                className="inline-flex flex-col items-center justify-center py-2 px-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-900 rounded-lg text-xs font-semibold transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#F58220] mb-0.5" />
                <span>Call</span>
              </a>

              <a
                href={`https://wa.me/${BUSINESS_CONFIG.whatsappCleanNumber}?text=${encodeURIComponent(
                  'Namaste Tiwari Motors, I need directions to your garage.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-col items-center justify-center py-2 px-2 bg-neutral-100 hover:bg-[#25D366]/15 text-neutral-900 rounded-lg text-xs font-semibold transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366] mb-0.5" />
                <span>WhatsApp</span>
              </a>

              <a
                href={BUSINESS_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-col items-center justify-center py-2 px-2 bg-[#F58220] hover:bg-[#e07113] text-white rounded-lg text-xs font-semibold transition-colors shadow-2xs"
              >
                <Navigation className="w-3.5 h-3.5 mb-0.5" />
                <span>Directions</span>
              </a>
            </div>
          </div>

          {/* Clean Google Map Embed */}
          <div className="lg:col-span-7 bg-white rounded-xl border border-neutral-200/90 shadow-2xs overflow-hidden flex flex-col min-h-[340px]">
            <div className="p-3 border-b border-neutral-200 flex items-center justify-between bg-neutral-50 text-xs">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#F58220]" />
                <span className="font-bold text-neutral-800">
                  Tiwari Motors Smart Garage – Hussenpur Khurd Chowk
                </span>
              </div>
              <a
                href={BUSINESS_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#F58220] hover:underline flex items-center gap-1"
              >
                <span>Open Map</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="relative flex-1 w-full min-h-[300px]">
              <iframe
                title="Tiwari Motors Smart Garage Location Map"
                src={BUSINESS_CONFIG.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '300px' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
