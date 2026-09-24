import React from 'react';
import { Users, Car, ScanLine, Wrench, ShieldCheck, HeartHandshake } from 'lucide-react';
import { Reveal, SectionHead } from './Reveal';

const ITEMS = [
  {
    icon: Users,
    title: 'Experienced Team',
    desc: 'Trained technicians for all car brands.',
  },
  {
    icon: Car,
    title: 'Multi-Brand Support',
    desc: 'Maruti se Mahindra tak — sabhi cars welcome.',
  },
  {
    icon: ScanLine,
    title: 'Computer Diagnosis',
    desc: 'Accurate fault detection, no guesswork.',
  },
  {
    icon: Wrench,
    title: 'Complete Car Care',
    desc: 'Service se washing tak, sab kuch ek hi jagah.',
  },
  {
    icon: ShieldCheck,
    title: 'Professional Equipment',
    desc: 'Modern tools & diagnostic machines.',
  },
  {
    icon: HeartHandshake,
    title: 'Customer-Focused Service',
    desc: 'Saaf baat, sahi kaam, fair dealing.',
  },
];

export const WhyUs: React.FC = () => {
  return (
    <section id="why-us" className="bg-[#111111] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <SectionHead
          eyebrow="Why Us"
          title="Why Choose Tiwari Motors?"
          subtitle="Aapki car ke liye sahi log, sahi tools aur sahi approach."
          dark
          testid="why-us-heading"
        />

        <div className="mt-9 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ITEMS.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={Math.min(i * 0.05, 0.25)}>
                <div className="h-full bg-white/[0.04] border border-white/10 hover:border-[#F58220]/50 rounded-2xl p-6 transition-all duration-300 hover:bg-white/[0.07] group">
                  <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#F58220]/15 text-[#F58220] group-hover:bg-[#F58220] group-hover:text-white transition-colors duration-300">
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-4 font-heading font-bold text-lg text-white group-hover:text-[#F58220] transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
