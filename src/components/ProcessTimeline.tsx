import React from 'react';
import { Eye, Stethoscope, Wrench, CheckCircle2, KeyRound } from 'lucide-react';

export const ProcessTimeline: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Inspect',
      subtitle: 'Visual & System Check',
      description: 'Vehicle walkaround, abnormal sound inspection, fluid levels, and road symptom review.',
      icon: Eye,
    },
    {
      number: '02',
      title: 'Diagnose',
      subtitle: 'Computer & Mechanical Analysis',
      description: 'OBD scanning for trouble codes, mechanical assessment, and root-cause fault isolation.',
      icon: Stethoscope,
    },
    {
      number: '03',
      title: 'Repair',
      subtitle: 'Standardized Execution',
      description: 'Servicing, part replacement or mechanical overhaul with proper torque specs and correct fluids.',
      icon: Wrench,
    },
    {
      number: '04',
      title: 'Quality Check',
      subtitle: 'Post-Work Verification',
      description: 'Comprehensive test drive, sensor verification, leak checking, and electrical function test.',
      icon: CheckCircle2,
    },
    {
      number: '05',
      title: 'Deliver',
      subtitle: 'Transparent Handover',
      description: 'Detailed explanation of work completed, maintenance guidance, and transparent vehicle handover.',
      icon: KeyRound,
    },
  ];

  return (
    <section className="py-12 lg:py-16 bg-[#111111] text-white border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-[#F58220]">
            Automotive Expertise
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-heading mt-1">
            “From Diagnosis to Delivery.”
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-neutral-400">
            A disciplined, 5-stage workflow designed for precision and transparent car care.
          </p>
        </div>

        {/* Compact Timeline Grid */}
        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-neutral-800 -translate-y-6 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4 relative z-10">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className="bg-[#1a1a1a] lg:bg-transparent border border-neutral-800 lg:border-none rounded-xl p-3.5 lg:p-2 flex flex-col items-start"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-neutral-800 border border-neutral-700/80 flex items-center justify-center text-[#F58220] shadow-2xs">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-[#F58220] bg-orange-950/60 px-1.5 py-0.5 rounded border border-orange-900/50">
                      Step {step.number}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-white font-heading">
                    {step.title}
                  </h3>
                  <p className="text-[11px] font-medium text-[#F58220] mb-1">
                    {step.subtitle}
                  </p>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
