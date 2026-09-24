import React from 'react';
import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react';
import { Reveal, SectionHead } from './Reveal';
import { MAPS } from '../config';
import { useOwner } from '../context/OwnerContext';

export const Contact: React.FC = () => {
  const { business } = useOwner();

  return (
    <section id="contact" className="bg-[#F7F7F7] scroll-mt-20 py-14 sm:py-20 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHead
          eyebrow="Contact"
          title="Visit Tiwari Motors Smart Garage"
          subtitle="Car problem? Humse baat kijiye — call, WhatsApp ya workshop par aaiye."
          testid="contact-heading"
        />

        <div className="mt-9 grid lg:grid-cols-2 gap-6 items-stretch">
          {/* Information Card */}
          <Reveal>
            <div className="h-full bg-white border border-zinc-200 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#F58220]/10 shrink-0">
                    <MapPin size={19} className="text-[#F58220]" />
                  </span>
                  <div>
                    <p className="font-heading font-semibold text-xs text-zinc-400 uppercase tracking-wider">
                      Workshop Address
                    </p>
                    <p className="mt-0.5 text-sm sm:text-base font-bold text-zinc-900 leading-snug">
                      {business.address}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#F58220]/10 shrink-0">
                    <Phone size={19} className="text-[#F58220]" />
                  </span>
                  <div>
                    <p className="font-heading font-semibold text-xs text-zinc-400 uppercase tracking-wider">
                      Direct Phone
                    </p>
                    <div className="mt-0.5 flex flex-wrap gap-x-4 gap-y-1 text-sm sm:text-base font-bold text-zinc-900">
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

                {/* Timings */}
                <div className="flex items-start gap-3.5">
                  <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#F58220]/10 shrink-0">
                    <Clock size={19} className="text-[#F58220]" />
                  </span>
                  <div>
                    <p className="font-heading font-semibold text-xs text-zinc-400 uppercase tracking-wider">
                      Garage Timings
                    </p>
                    <p className="mt-0.5 text-sm sm:text-base font-bold text-zinc-900">
                      {business.hours}
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#F58220]/10 shrink-0">
                    <Mail size={19} className="text-[#F58220]" />
                  </span>
                  <div>
                    <p className="font-heading font-semibold text-xs text-zinc-400 uppercase tracking-wider">
                      Email
                    </p>
                    <p className="mt-0.5 text-sm font-semibold text-zinc-800">
                      {business.email}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-100">
                <a
                  href={MAPS.directionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  data-testid="contact-directions-btn"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#F58220] hover:bg-[#D96E14] text-white font-bold text-xs sm:text-sm shadow-sm transition-all"
                >
                  <Navigation size={15} />
                  <span>Get Directions on Google Maps</span>
                </a>
              </div>
            </div>
          </Reveal>

          {/* Map Embed Card */}
          <Reveal delay={0.1}>
            <div className="h-full min-h-[320px] rounded-3xl overflow-hidden border border-zinc-200 shadow-sm bg-zinc-200">
              <iframe
                title="Tiwari Motors Smart Garage Location Map"
                src={MAPS.embedUrl}
                className="w-full h-full min-h-[360px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
