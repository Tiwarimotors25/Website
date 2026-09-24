import React from 'react';
import { Star, MessageSquarePlus, ExternalLink } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/businessData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-12 lg:py-16 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-[#F58220]">
            Customer Feedback
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111111] tracking-tight font-heading mt-0.5">
            Customer Reviews
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-neutral-600">
            We value genuine relationships and authentic car owner feedback in Ambedkar Nagar.
          </p>

          {/* Genuine Invitation Card - Compact */}
          <div className="mt-6 bg-[#F7F7F7] border border-neutral-200/90 rounded-xl p-5 sm:p-6 shadow-2xs max-w-xl mx-auto">
            <div className="w-10 h-10 mx-auto rounded-xl bg-orange-100/70 border border-orange-200 flex items-center justify-center text-[#F58220] mb-3">
              <MessageSquarePlus className="w-5 h-5" />
            </div>

            <div className="flex items-center justify-center gap-1 mb-2">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-4 h-4 fill-[#F58220] text-[#F58220]" />
              ))}
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-neutral-900 font-heading">
              “Visited Tiwari Motors? Share your experience.”
            </h3>

            <p className="mt-1.5 text-xs text-neutral-600 leading-relaxed max-w-md mx-auto">
              Your feedback on service quality, turnaround time, diagnostic accuracy, or foam washing helps us continuously improve car care for everyone.
            </p>

            <div className="mt-4">
              <a
                href={BUSINESS_CONFIG.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#111111] hover:bg-[#F58220] text-white text-xs font-semibold transition-all shadow-xs"
              >
                <span>Write a Google Review</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
