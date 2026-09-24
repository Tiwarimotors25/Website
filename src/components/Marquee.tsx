import React from 'react';
import { QUICK_SERVICES } from '../config';

export const Marquee: React.FC = () => {
  // Duplicate array 3 times for a seamless infinite loop
  const items = [...QUICK_SERVICES, ...QUICK_SERVICES, ...QUICK_SERVICES];

  return (
    <div
      className="bg-[#0c0c0c] border-y border-[#F58220]/30 overflow-hidden"
      data-testid="quick-service-bar"
    >
      <div className="tm-marquee flex items-center w-max py-3.5">
        {items.map((s, i) => {
          const Icon = s.icon;
          return (
            <div
              key={`${s.name}-${i}`}
              className="flex items-center gap-2.5 px-6 shrink-0"
            >
              <div className="w-7 h-7 rounded-md bg-[#F58220]/15 border border-[#F58220]/30 flex items-center justify-center text-[#F58220]">
                <Icon size={14} />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-zinc-200 uppercase tracking-wider font-heading">
                {s.name}
              </span>
              <span className="text-[#F58220]/40 text-xs ml-4">✦</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
