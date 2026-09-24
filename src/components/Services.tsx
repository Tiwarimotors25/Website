import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Reveal, SectionHead } from './Reveal';
import { SERVICES } from '../config';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <SectionHead
          eyebrow="What We Do"
          title="Our Services"
          subtitle="From routine maintenance to major repairs, we take care of your car."
          testid="services-heading"
        />

        <div className="mt-9 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.id} delay={Math.min(i * 0.05, 0.25)}>
                <div className="h-full bg-white border border-zinc-200 hover:border-[#F58220]/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col justify-between group">
                  <div>
                    <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#F58220]/10 text-[#F58220] group-hover:bg-[#F58220] group-hover:text-white transition-colors duration-300">
                      <Icon size={22} />
                    </span>
                    <h3 className="mt-4 font-heading font-bold text-lg text-[#111111] group-hover:text-[#F58220] transition-colors">
                      {s.name}
                    </h3>
                    <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-zinc-100 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => onSelectService(s.name)}
                      data-testid={`service-book-${s.id}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F58220] hover:text-[#D96E14] cursor-pointer"
                    >
                      <span>Book this service</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
