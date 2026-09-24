import React from 'react';
import { SERVICE_STRIP_ITEMS } from '../data/businessData';

interface ServiceHighlightStripProps {
  onSelectService?: (serviceName: string) => void;
}

export const ServiceHighlightStrip: React.FC<ServiceHighlightStripProps> = ({
  onSelectService,
}) => {
  return (
    <section className="mt-8 border-y border-neutral-200/90 bg-white py-3.5 shadow-xs overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 overflow-x-auto scrollbar-none py-1">
          <span className="text-[11px] font-bold tracking-wider text-neutral-400 uppercase shrink-0 hidden sm:inline-block">
            Key Services:
          </span>

          <div className="flex items-center gap-2 sm:gap-3 flex-nowrap shrink-0">
            {SERVICE_STRIP_ITEMS.map((item, index) => (
              <React.Fragment key={item}>
                <button
                  type="button"
                  onClick={() => onSelectService?.(item)}
                  className="text-xs sm:text-sm font-semibold text-neutral-800 hover:text-[#F58220] transition-colors whitespace-nowrap cursor-pointer px-2 py-1 rounded hover:bg-orange-50/60"
                >
                  {item}
                </button>
                {index < SERVICE_STRIP_ITEMS.length - 1 && (
                  <span className="text-neutral-300 select-none text-xs" aria-hidden="true">
                    |
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
