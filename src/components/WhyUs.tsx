import React from 'react';
import { Users, Car, ScanLine, Wrench, ShieldCheck, HeartHandshake } from 'lucide-react';
import { SectionHead } from './Reveal';

const ITEMS = [
  {
    icon: Users,
    title: 'Experienced Team',
    desc: 'Trained mechanics for multi-brand cars.',
  },
  {
    icon: Car,
    title: 'Multi-Brand Support',
    desc: 'Maruti, Hyundai, Tata se Mahindra tak.',
  },
  {
    icon: ScanLine,
    title: 'Computer Diagnosis',
    desc: 'OBD-II error check, no guesswork.',
  },
  {
    icon: Wrench,
    title: 'Complete Car Care',
    desc: 'Service, AC, wash aur parts ek jagah.',
  },
  {
    icon: ShieldCheck,
    title: 'Modern Tools',
    desc: 'Hydraulic lift, high-pressure foam wash.',
  },
  {
    icon: HeartHandshake,
    title: 'Fair Dealing',
    desc: 'Clear estimation, genuine advice & spares.',
  },
];

export const WhyUs: React.FC = () => {
  return (
    <section id="why-us" className="bg-[#111111] scroll-mt-20 py-8 sm:py-12 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHead
          eyebrow="Why Choose Us"
          title="Why Choose Tiwari Motors?"
          subtitle="Aapki gaadi ke liye sahi log, modern tools aur imaandar approach."
          dark
          testid="why-us-heading"
        />

        {/* Compact Grid: 6 cards in a tight 2 or 3 col layout with compact padding */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3.5">
          {ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white/[0.04] border border-white/10 hover:border-[#F58220]/50 rounded-xl p-3 sm:p-4 transition-all duration-200 hover:bg-white/[0.07] group flex items-start gap-3"
              >
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#F58220]/15 text-[#F58220] group-hover:bg-[#F58220] group-hover:text-white transition-colors shrink-0 mt-0.5">
                  <Icon size={16} />
                </span>
                <div className="min-w-0">
                  <h3 className="font-heading font-bold text-xs sm:text-sm text-white group-hover:text-[#F58220] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-0.5 text-[11px] text-zinc-400 leading-relaxed line-clamp-2">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
