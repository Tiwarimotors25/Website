import React from 'react';
import { Star, Quote, ExternalLink } from 'lucide-react';
import { Reveal, SectionHead } from './Reveal';
import { BUSINESS } from '../config';

export const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="bg-[#F7F7F7] scroll-mt-20 py-14 sm:py-20 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHead
          eyebrow="Reviews"
          title="What Our Customers Say"
          subtitle="Aapka feedback hi hamari asli pehchaan hai."
          testid="reviews-heading"
        />

        <Reveal delay={0.12} className="mt-9">
          <div className="max-w-2xl mx-auto bg-white border border-zinc-200 rounded-2xl p-8 text-center shadow-sm">
            <span className="mx-auto flex items-center justify-center w-12 h-12 rounded-full bg-[#F58220]/10 mb-4">
              <Quote size={22} className="text-[#F58220]" />
            </span>

            {/* Stars */}
            <div className="flex items-center justify-center gap-1 text-[#F58220] mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="fill-current text-[#F58220]" />
              ))}
            </div>

            <p className="text-sm sm:text-base text-zinc-700 italic leading-relaxed">
              “Bohot badhiya service! Car ki engine aur electrical problem thi, Tiwari Motors pe time par aur reasonable rate me solve ho gaya. Ambedkar Nagar me trustworthy smart garage hai.”
            </p>

            <p className="mt-4 font-heading font-semibold text-xs text-zinc-900 uppercase tracking-wider">
              — Verified Car Owner, Ambedkar Nagar
            </p>

            <div className="mt-6 pt-6 border-t border-zinc-100 flex items-center justify-center">
              <a
                href={BUSINESS.googleReviewUrl}
                target="_blank"
                rel="noreferrer"
                data-testid="google-review-link"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F58220] hover:text-[#D96E14] transition-colors"
              >
                <span>Write a Review on Google</span>
                <ExternalLink size={13} />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
