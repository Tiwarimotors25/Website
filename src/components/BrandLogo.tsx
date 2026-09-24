import React from 'react';
import { BUSINESS_CONFIG } from '../data/businessData';

interface BrandLogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  showTagline?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'light',
  className = '',
  showTagline = false,
}) => {
  const isDark = variant === 'dark';

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 select-none ${className}`}>
      {/* Official TM Geometric Automotive Shield Emblem (Exact Replica of Uploaded Brand Logo) */}
      <div className="relative shrink-0 flex items-center justify-center">
        <svg
          viewBox="0 0 100 90"
          className="w-8 h-8 sm:w-9 sm:h-9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Orange Stylized 'T' Top Bar & Center Spine */}
          <path
            d="M 12 10 L 46 10 L 46 62 L 50 67 L 54 62 L 54 10 L 88 10 L 78 24 L 56 24 L 56 54 L 50 61 L 44 54 L 44 24 L 22 24 Z"
            fill="#F58220"
          />

          {/* Left Black/Dark Wing of 'M' */}
          <path
            d="M 19 28 L 39 28 L 39 46 L 29 60 L 29 44 L 19 44 Z"
            fill={isDark ? '#E5E5E5' : '#111111'}
          />
          <path
            d="M 19 46 L 29 46 L 29 60 L 44 79 L 36 79 L 19 58 Z"
            fill={isDark ? '#FFFFFF' : '#111111'}
          />

          {/* Right Black/Dark Wing of 'M' */}
          <path
            d="M 61 28 L 81 28 L 81 44 L 71 44 L 71 60 L 61 46 Z"
            fill={isDark ? '#E5E5E5' : '#111111'}
          />
          <path
            d="M 71 46 L 81 46 L 81 58 L 64 79 L 56 79 L 71 60 Z"
            fill={isDark ? '#FFFFFF' : '#111111'}
          />
        </svg>
      </div>

      {/* Brand Text Lockup - Preserving prominent TIWARI MOTORS */}
      <div className="flex flex-col leading-none">
        <div className="flex items-baseline gap-1">
          <span
            className={`font-black tracking-tight text-base sm:text-lg font-heading ${
              isDark ? 'text-white' : 'text-[#111111]'
            }`}
          >
            TIWARI <span className="text-[#F58220]">MOTORS</span>
          </span>
        </div>
        <div className="flex items-center gap-1.5 mt-0.5">
          <span
            className={`text-[9px] sm:text-[10px] tracking-widest font-extrabold uppercase ${
              isDark ? 'text-neutral-300' : 'text-neutral-800'
            }`}
          >
            SMART GARAGE
          </span>
          <span className="text-neutral-400 text-[9px] font-bold">·</span>
          <span className="text-[9px] sm:text-[10px] tracking-wider font-semibold text-[#F58220] uppercase">
            AMBEDKAR NAGAR
          </span>
        </div>
      </div>

      {showTagline && (
        <span
          className={`hidden xl:inline-block pl-3 ml-3 border-l text-xs font-normal ${
            isDark
              ? 'border-neutral-800 text-neutral-400'
              : 'border-neutral-200 text-neutral-500'
          }`}
        >
          {BUSINESS_CONFIG.tagline}
        </span>
      )}
    </div>
  );
};
