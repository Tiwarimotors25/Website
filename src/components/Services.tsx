import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SectionHead } from './Reveal';
import { SERVICES } from '../config';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="bg-white scroll-mt-20 py-8 sm:py-12 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHead
          eyebrow="What We Do"
          title="Our Services"
          subtitle="Routine maintenance se major repairs tak — aapki car ki poori dekhbhal."
          testid="services-heading"
        />

        {/* Compact Grid with tighter paddings & cleaner cards */}
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-3.5">
          {SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.id}
                className="bg-[#FAFAFA] hover:bg-white border border-zinc-200/90 hover:border-[#F58220]/50 rounded-xl p-4 sm:p-4.5 transition-all duration-200 hover:shadow-sm flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#F58220]/10 text-[#F58220] group-hover:bg-[#F58220] group-hover:text-white transition-colors duration-200">
                      <Icon size={18} />
                    </span>
                    <span className="text-[10px] font-bold text-zinc-400 group-hover:text-[#F58220] uppercase font-mono tracking-wider">
                      Service
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-sm sm:text-base text-[#111111] group-hover:text-[#F58220] transition-colors">
                    {s.name}
                  </h3>
                  <p className="mt-1 text-xs text-zinc-600 leading-relaxed line-clamp-2">
                    {s.desc}
                  </p>
                </div>

                <div className="mt-3.5 pt-2.5 border-t border-zinc-200/60 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => onSelectService(s.name)}
                    data-testid={`service-book-${s.id}`}
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-[#F58220] hover:text-[#D96E14] cursor-pointer"
                  >
                    <span>Book Service</span>
                    <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <span className="text-[10px] font-medium text-zinc-400 bg-zinc-100 px-1.5 py-0.5 rounded">
                    Multi-Brand
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
