import React from 'react';
import { CheckCircle2, Phone, Calendar } from 'lucide-react';
import { Reveal, SectionHead } from './Reveal';
import { GARAGE_PHOTO_SRC, scrollToSection } from '../config';
import { useOwner } from '../context/OwnerContext';

const POINTS = [
  'Multi-Brand Service for all popular Indian & global car models',
  'Advanced OBD-II Computer Diagnostics for accurate problem detection',
  'Experienced and certified technicians for reliable work',
  'Clear transparency in estimates with no hidden surprise costs',
  'Comprehensive facility: Engine, Electrical, AC, Body Shop & Accessories',
];

export const About: React.FC = () => {
  const { business } = useOwner();

  return (
    <section id="about" className="bg-[#F7F7F7] scroll-mt-20 py-14 sm:py-20 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        {/* Left Column: Real Garage Photo with Orange Accent Corner */}
        <Reveal className="relative order-2 lg:order-1">
          <div
            className="absolute -top-3 -left-3 w-24 h-24 border-t-4 border-l-4 border-[#F58220] rounded-tl-2xl"
            aria-hidden="true"
          />
          <img
            src={GARAGE_PHOTO_SRC}
            alt="Tiwari Motors Smart Garage workshop in Ambedkar Nagar"
            loading="lazy"
            className="relative rounded-2xl border border-zinc-200 shadow-lg w-full aspect-square sm:aspect-[4/3] lg:aspect-square object-cover"
            data-testid="about-garage-image"
          />
          {/* Badge over photo */}
          <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3 rounded-xl border border-zinc-200 shadow-md">
            <p className="text-xs font-bold text-zinc-900 font-heading">
              {business.name}
            </p>
            <p className="text-[11px] text-zinc-600">
              {business.address}
            </p>
          </div>
        </Reveal>

        {/* Right Column: Information & Points */}
        <div className="order-1 lg:order-2">
          <SectionHead
            eyebrow="About Tiwari Motors"
            title="Complete Car Care, Under One Roof"
            testid="about-heading"
          />

          <Reveal delay={0.1}>
            <p className="mt-4 text-sm sm:text-base text-zinc-600 leading-relaxed">
              Tiwari Motors Smart Garage is a multi-brand car service and repair workshop in Ambedkar Nagar providing reliable automotive solutions for everyday maintenance, mechanical repairs, electrical problems, AC issues, computer diagnosis, washing, body work and car accessories.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <ul className="mt-6 space-y-3">
              {POINTS.map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-sm sm:text-base text-zinc-700">
                  <CheckCircle2
                    size={18}
                    className="text-[#F58220] mt-0.5 shrink-0"
                  />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.25} className="mt-8 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => scrollToSection('booking')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#F58220] hover:bg-[#D96E14] text-white text-xs sm:text-sm font-bold shadow-sm transition-all cursor-pointer"
            >
              <Calendar size={15} />
              <span>Book an Inspection</span>
            </button>

            <a
              href={`tel:${business.phonePrimaryIntl}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white hover:bg-zinc-100 text-zinc-900 border border-zinc-300 text-xs sm:text-sm font-semibold transition-all"
            >
              <Phone size={15} className="text-[#F58220]" />
              <span>Call: {business.phonePrimary}</span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
