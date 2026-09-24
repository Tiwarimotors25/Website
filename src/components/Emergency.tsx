import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { Reveal } from './Reveal';
import { waLink } from '../config';
import { useOwner } from '../context/OwnerContext';

export const Emergency: React.FC = () => {
  const { business } = useOwner();

  return (
    <section id="emergency" className="bg-[#F58220]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        <Reveal className="text-center sm:text-left">
          <h2
            className="font-heading font-bold text-2xl sm:text-3xl text-[#111111] tracking-tight"
            data-testid="emergency-heading"
          >
            Car Not Starting?
          </h2>
          <p className="mt-1.5 text-sm sm:text-base text-[#111111]/85">
            Need help with your car? Contact Tiwari Motors — hum turant madad karenge.
          </p>
        </Reveal>

        <Reveal delay={0.12} className="flex flex-wrap justify-center gap-3">
          <a
            href={`tel:${business.phonePrimaryIntl}`}
            data-testid="emergency-call-btn"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#111111] hover:bg-black text-white font-semibold text-sm shadow-md transition-colors cursor-pointer"
          >
            <Phone size={16} />
            <span>Call: {business.phonePrimary}</span>
          </a>

          <a
            href={waLink('Emergency! Meri car start nahi ho rahi hai, please assist.')}
            target="_blank"
            rel="noreferrer"
            data-testid="emergency-whatsapp-btn"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-zinc-100 text-[#111111] font-semibold text-sm shadow-md transition-colors cursor-pointer"
          >
            <MessageCircle size={17} className="text-[#25D366]" />
            <span>WhatsApp Help</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
};
