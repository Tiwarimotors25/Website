import React from 'react';
import { PhoneCall, SearchCheck, Wrench, CheckCircle } from 'lucide-react';
import { PROCESS_STEPS } from '../data/businessData';

export const CustomerJourney: React.FC = () => {
  const icons = [PhoneCall, SearchCheck, Wrench, CheckCircle];

  return (
    <section className="py-12 lg:py-16 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-[#F58220]">
            How We Work
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111111] tracking-tight font-heading mt-0.5">
            “Simple Process. Clear Communication.”
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-neutral-600">
            From your first message to vehicle delivery, every step is streamlined and transparent.
          </p>
        </div>

        {/* Compact Process Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
          {PROCESS_STEPS.map((step, idx) => {
            const Icon = icons[idx];
            return (
              <div
                key={step.step}
                className="bg-[#F7F7F7] rounded-xl p-3.5 sm:p-4 border border-neutral-200/90 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="w-7 h-7 rounded-md bg-orange-100/80 text-[#F58220] font-bold font-mono text-[11px] flex items-center justify-center">
                      {step.step}
                    </span>
                    <Icon className="w-4 h-4 text-neutral-400" />
                  </div>

                  <h3 className="text-sm font-bold text-neutral-900 font-heading mb-1">
                    {step.title}
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {step.description}
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
