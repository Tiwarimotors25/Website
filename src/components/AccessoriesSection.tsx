import React from 'react';
import { MessageCircle, Sparkles } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/businessData';
import accHeroImg from '../assets/images/car_accessories_display_1790239267979.jpg';

export const AccessoriesSection: React.FC = () => {
  const accessoriesList = [
    {
      name: 'Wheel Caps & Covers',
      description: 'Sporty, durable wheel caps and rim styling covers tailored for all vehicle wheel sizes.',
      tag: 'Exterior Style',
    },
    {
      name: 'Custom Fit Floor Mats',
      description: 'All-weather 7D, 3D, and rubber floor mats to protect your car cabin from dirt and rain.',
      tag: 'Cabin Protection',
    },
    {
      name: 'Steering & Seat Comfort',
      description: 'Anti-slip steering covers, neck pillows, memory foam lumbar supports, and seat cushions.',
      tag: 'Driving Comfort',
    },
    {
      name: 'Key Rings & Utility Items',
      description: 'Protective silicone key covers, stylish metal key chains, microfiber towels, and perfumes.',
      tag: 'Car Care Utility',
    },
  ];

  return (
    <section className="py-12 lg:py-18 bg-[#F7F7F7] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Heading and Items */}
          <div className="lg:col-span-7">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F58220]">
              Automotive Styling & Care
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111111] tracking-tight font-heading mt-0.5">
              “Upgrade Your Car.”
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-neutral-600">
              Enhance comfort, protection, and aesthetics with our curated car accessories collection at Tiwari Motors.
            </p>

            {/* Compact accessories boxes */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {accessoriesList.map((item) => (
                <div
                  key={item.name}
                  className="bg-white rounded-xl p-3 sm:p-3.5 border border-neutral-200/90 shadow-2xs hover:border-[#F58220]/40 transition-colors"
                >
                  <span className="text-[9px] font-bold tracking-wider uppercase text-[#F58220]">
                    {item.tag}
                  </span>
                  <h3 className="text-xs sm:text-sm font-bold text-neutral-900 font-heading mt-0.5 mb-1">
                    {item.name}
                  </h3>
                  <p className="text-[11px] text-neutral-600 leading-relaxed mb-2">
                    {item.description}
                  </p>
                  <a
                    href={`https://wa.me/${BUSINESS_CONFIG.whatsappCleanNumber}?text=${encodeURIComponent(
                      `Namaste Tiwari Motors, I would like to inquire about ${item.name} for my car.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#111111] hover:text-[#F58220] transition-colors"
                  >
                    <MessageCircle className="w-3 h-3 text-[#25D366]" />
                    <span>Enquire on WhatsApp</span>
                  </a>
                </div>
              ))}
            </div>

            <div className="mt-5 flex items-center gap-3">
              <a
                href={`https://wa.me/${BUSINESS_CONFIG.whatsappCleanNumber}?text=${encodeURIComponent(
                  'Namaste Tiwari Motors, I want to inquire about car accessories available at your garage.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#F58220] hover:bg-[#e07113] text-white text-xs font-semibold shadow-xs transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
                <span>Enquire on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Display Image */}
          <div className="lg:col-span-5">
            <div className="relative rounded-xl overflow-hidden shadow-md border border-neutral-200 bg-neutral-900 group">
              <img
                src={accHeroImg}
                alt="Car accessories display at Tiwari Motors"
                className="w-full h-64 sm:h-76 object-cover object-center group-hover:scale-101 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md rounded-lg p-2.5 border border-white/40 shadow-xs flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#F58220]">
                    In-Store Collection
                  </p>
                  <p className="text-xs font-semibold text-neutral-900">
                    Wheel Caps · Mats · Covers · Perfumes
                  </p>
                </div>
                <Sparkles className="w-4 h-4 text-[#F58220] shrink-0" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
