import React from 'react';
import { MessageCircle, Phone, ArrowRight, ShieldCheck, MapPin, Wrench, CheckCircle2 } from 'lucide-react';
import { GARAGE_PHOTO_SRC, scrollToSection, waLink } from '../config';
import { useOwner } from '../context/OwnerContext';

export const Hero: React.FC = () => {
  const { business } = useOwner();

  return (
    <section
      id="home"
      className="relative bg-[#111111] text-white pt-18 sm:pt-20 pb-8 sm:pb-10 overflow-hidden border-b border-white/10"
    >
      {/* Subtle ambient lighting */}
      <div
        className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#F58220]/15 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* Left Column: Headline & Compact Action */}
          <div className="lg:col-span-7">
            {/* Badges */}
            <div className="inline-flex items-center gap-2 mb-2.5">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#F58220] font-heading">
                {business.name}
              </span>
              <span className="text-white/30">·</span>
              <span className="text-[11px] font-medium text-zinc-300 bg-white/10 px-2 py-0.5 rounded border border-white/10">
                {business.hindiName}
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 text-[11px] text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Workshop Open
              </span>
            </div>

            {/* Main Headline - Compact & Balanced */}
            <h1
              className="font-heading font-extrabold text-2xl sm:text-4xl lg:text-[42px] tracking-tight leading-[1.15]"
              data-testid="hero-headline"
            >
              “Aapki Car Ki Har Zarurat Ka{' '}
              <span className="text-[#F58220] whitespace-nowrap">Ek Hi Naam.”</span>
            </h1>

            {/* Sub-text */}
            <p className="mt-2.5 text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-xl">
              Complete multi-brand car service & repair in Ambedkar Nagar — Routine Maintenance, Computer Scanning, AC Repair, Foam Wash & Car Accessories.
            </p>

            {/* CTA Buttons */}
            <div className="mt-4 sm:mt-5 flex flex-wrap items-center gap-2.5">
              <button
                type="button"
                onClick={() => scrollToSection('booking')}
                data-testid="hero-book-btn"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#F58220] hover:bg-[#D96E14] text-white text-xs sm:text-sm font-bold shadow-md shadow-[#F58220]/20 transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Book Service</span>
                <ArrowRight size={15} />
              </button>

              <a
                href={waLink('Namaste Tiwari Motors! Mujhe car service ke baare mein jaankari chahiye.')}
                target="_blank"
                rel="noreferrer"
                data-testid="hero-whatsapp-btn"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#1fb857] text-white text-xs sm:text-sm font-bold shadow-sm transition-all hover:-translate-y-0.5"
              >
                <MessageCircle size={16} />
                <span>WhatsApp</span>
              </a>

              <a
                href={`tel:${business.phonePrimaryIntl}`}
                data-testid="hero-call-btn"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/15 text-xs sm:text-sm font-semibold transition-all hover:-translate-y-0.5"
              >
                <Phone size={14} className="text-[#F58220]" />
                <span>{business.phonePrimary}</span>
              </a>
            </div>

            {/* Trust points - Clean single inline bar */}
            <div className="mt-4 pt-3.5 border-t border-white/10 flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] text-zinc-300 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={13} className="text-[#F58220]" />
                <span>Multi-Brand Expert</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={13} className="text-[#F58220]" />
                <span>Computer Diagnostics</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={13} className="text-[#F58220]" />
                <span>Genuine Spares</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={13} className="text-[#F58220]" />
                <span>Transparent Pricing</span>
              </span>
            </div>
          </div>

          {/* Right Column: Garage Entrance Photo (Balanced Height) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-xl overflow-hidden border border-white/15 shadow-xl bg-neutral-900 group">
              <img
                src={GARAGE_PHOTO_SRC}
                alt="Tiwari Motors Smart Garage entrance in Ambedkar Nagar"
                className="w-full h-52 sm:h-64 lg:h-72 object-cover group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

              {/* Verified Location Card on Photo */}
              <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-[#181818]/90 backdrop-blur-md rounded-lg p-2.5 border border-white/15 flex items-center justify-between">
                <div className="min-w-0 pr-2">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#F58220]">
                    Tiwari Motors Smart Garage
                  </p>
                  <p className="text-[11px] font-medium text-zinc-300 truncate flex items-center gap-1 mt-0.5">
                    <MapPin size={11} className="text-[#F58220] shrink-0" />
                    <span className="truncate">{business.address}</span>
                  </p>
                </div>
                <div className="shrink-0 flex items-center gap-1 text-[10px] font-bold text-white bg-white/10 px-2 py-1 rounded border border-white/10">
                  <ShieldCheck size={12} className="text-[#F58220]" />
                  <span>Verified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
