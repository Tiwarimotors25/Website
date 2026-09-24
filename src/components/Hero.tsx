import React from 'react';
import { motion } from 'framer-motion';
import { Check, MessageCircle, Phone, ArrowRight, ShieldCheck, MapPin } from 'lucide-react';
import { GARAGE_PHOTO_SRC, scrollToSection, waLink } from '../config';
import { useOwner } from '../context/OwnerContext';

const TRUST = [
  'Experienced Technicians',
  'Modern Computer Scanning',
  'Complete Car Care',
  'Customer-Friendly Service',
];

const MaskLine: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({
  children,
  delay = 0,
  className = '',
}) => (
  <span className={`block overflow-hidden ${className}`}>
    <motion.span
      className="block"
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.span>
  </span>
);

export const Hero: React.FC = () => {
  const { business } = useOwner();

  return (
    <section
      id="home"
      className="relative bg-[#111111] text-white pt-24 sm:pt-28 pb-14 sm:pb-20 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div
        className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full bg-[#F58220]/15 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-[360px] h-[360px] rounded-full bg-[#F58220]/8 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headline & Action */}
          <div className="lg:col-span-7">
            {/* Eyebrow / Kicker */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#F58220] font-heading">
                {business.name}
              </span>
              <span className="text-white/30">·</span>
              <span className="text-xs font-medium text-zinc-400 bg-white/5 px-2 py-0.5 rounded border border-white/10">
                {business.hindiName}
              </span>
            </div>

            {/* Main Headline */}
            <h1
              className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1]"
              data-testid="hero-headline"
            >
              <MaskLine delay={0.05}>“Aapki Car Ki</MaskLine>
              <MaskLine delay={0.15}>Har Zarurat Ka</MaskLine>
              <MaskLine delay={0.25} className="text-[#F58220]">
                Ek Hi Naam.”
              </MaskLine>
            </h1>

            {/* Sub-text */}
            <p className="mt-5 text-sm sm:text-base text-zinc-300 leading-relaxed max-w-xl">
              Complete multi-brand car service & repair in Ambedkar Nagar — routine maintenance, mechanical repairs, electrical, AC repair, computerized scanning, foam wash, body work aur car accessories.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => scrollToSection('booking')}
                data-testid="hero-book-btn"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#F58220] hover:bg-[#D96E14] text-white text-sm font-bold shadow-lg shadow-[#F58220]/25 transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Book Service</span>
                <ArrowRight size={16} />
              </button>

              <a
                href={waLink('Namaste Tiwari Motors! Mujhe car service ke baare mein jaankari chahiye.')}
                target="_blank"
                rel="noreferrer"
                data-testid="hero-whatsapp-btn"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#1fb857] text-white text-sm font-bold shadow-md transition-all hover:-translate-y-0.5"
              >
                <MessageCircle size={17} />
                <span>WhatsApp Us</span>
              </a>

              <a
                href={`tel:${business.phonePrimaryIntl}`}
                data-testid="hero-call-btn"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/15 text-sm font-semibold transition-all hover:-translate-y-0.5"
              >
                <Phone size={15} className="text-[#F58220]" />
                <span>Call: {business.phonePrimary}</span>
              </a>
            </div>

            {/* Trust points */}
            <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {TRUST.map((t) => (
                <div key={t} className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-[#F58220]/20 flex items-center justify-center shrink-0">
                    <Check size={11} className="text-[#F58220]" />
                  </div>
                  <span className="text-xs font-medium text-zinc-300">
                    {t}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Original Garage Entrance Photo */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-neutral-900 group">
              <img
                src={GARAGE_PHOTO_SRC}
                alt="Tiwari Motors Smart Garage entrance in Ambedkar Nagar"
                className="w-full aspect-[4/3] object-cover group-hover:scale-102 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              {/* Verified Location Card on Photo */}
              <div className="absolute bottom-3 left-3 right-3 bg-[#181818]/90 backdrop-blur-md rounded-xl p-3 border border-white/15 flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#F58220]">
                    Multi-Brand Workshop
                  </p>
                  <p className="text-xs font-semibold text-white truncate flex items-center gap-1 mt-0.5">
                    <MapPin size={12} className="text-[#F58220] shrink-0" />
                    <span>{business.address}</span>
                  </p>
                </div>
                <div className="shrink-0 flex items-center gap-1 text-[11px] font-bold text-white bg-white/10 px-2 py-1 rounded-md border border-white/10">
                  <ShieldCheck size={13} className="text-[#F58220]" />
                  <span>Smart Garage</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
