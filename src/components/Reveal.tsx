import React from 'react';
import { motion } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  delay = 0,
  className = '',
}) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

interface SectionHeadProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  dark?: boolean;
  testid?: string;
}

export const SectionHead: React.FC<SectionHeadProps> = ({
  eyebrow,
  title,
  subtitle,
  dark = false,
  testid,
}) => (
  <Reveal className="max-w-2xl">
    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#F58220] font-heading">
      {eyebrow}
    </p>
    <h2
      data-testid={testid}
      className={`mt-2 font-heading font-bold tracking-tight text-2xl sm:text-3xl lg:text-4xl ${
        dark ? 'text-white' : 'text-[#111111]'
      }`}
    >
      {title}
    </h2>
    {subtitle && (
      <p
        className={`mt-2.5 text-sm sm:text-base ${
          dark ? 'text-zinc-400' : 'text-zinc-600'
        }`}
      >
        {subtitle}
      </p>
    )}
  </Reveal>
);
