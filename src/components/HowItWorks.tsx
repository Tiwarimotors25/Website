import React from 'react';
import { Reveal, SectionHead } from './Reveal';

const STEPS = [
  {
    num: '01',
    title: 'Book Service',
    desc: 'Call, WhatsApp ya website booking form se apni car service request bhejiye.',
  },
  {
    num: '02',
    title: 'Inspection & Diagnosis',
    desc: 'Hamari experienced team computerized OBD scanning se exact fault identify karti hai.',
  },
  {
    num: '03',
    title: 'Repair & Delivery',
    desc: 'Quality parts aur modern equipment se gaadi repair karke time par deliver ki jaati hai.',
  },
];

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="bg-white scroll-mt-20 py-14 sm:py-20 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHead
          eyebrow="Simple Process"
          title="How It Works"
          subtitle="Booking se delivery tak — sirf 3 aasaan steps."
          testid="how-it-works-heading"
        />

        <div className="mt-9 grid sm:grid-cols-3 gap-6">
          {STEPS.map((s, i) => (
            <Reveal key={s.num} delay={i * 0.1}>
              <div className="relative h-full bg-[#F7F7F7] border border-zinc-200 rounded-2xl p-6 sm:p-7 hover:border-[#F58220]/40 transition-all">
                <span className="font-heading font-black text-4xl sm:text-5xl text-[#F58220]/25 block">
                  {s.num}
                </span>
                <h3 className="mt-3 font-heading font-bold text-lg text-[#111111]">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
