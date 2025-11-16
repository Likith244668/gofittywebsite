'use client';

import { useState } from 'react';

export default function HeroSection() {
  const [hasPlayedInitialAnimation] = useState(true); // Always play on mount/reload
  const [isAnimating] = useState(true); // Always animate on mount/reload

  return (
    <section 
      className="relative flex min-h-screen w-full items-center justify-center bg-black text-white overflow-hidden"
      style={{ 
        fontFamily: 'var(--font-antonio)', 
        fontWeight: 700, 
        perspective: '1200px',
        perspectiveOrigin: 'center center'
      }}
      data-name="Desktop"
      data-hero-section
    >
      <div className="relative flex flex-col items-center justify-center px-4 text-center z-10">
        <p 
          className={`mb-0 text-[72px] leading-[1.2] tracking-[-8.65px] sm:text-[112px] md:text-[165px] relative ${
            isAnimating ? 'animate-text-3d-bump' : 'opacity-0'
          }`}
          style={{ 
            animationDelay: '0s',
            animationDuration: '0.2s',
            transformStyle: 'preserve-3d',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            willChange: 'transform, opacity'
          }}
          data-node-id="1:3"
        >
          IT&apos;S NOT FITNESS.
        </p>
        <p 
          className={`mt-[-0.2em] text-[72px] leading-[1.2] tracking-[-8.65px] text-[#fb5607] sm:text-[108px] md:text-[155px] ${
            isAnimating ? 'animate-text-3d-bump' : 'opacity-0'
          }`}
          style={{ 
            animationDelay: '0.05s',
            animationDuration: '0.2s',
            transformStyle: 'preserve-3d',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            willChange: 'transform, opacity'
          }}
          data-node-id="1:4"
        >
          IT&apos;S LIFE.
        </p>
      </div>

      {/* Initial Line - Right to Left animation on page load */}
      <div 
        className={`absolute z-20 ${
          hasPlayedInitialAnimation ? 'opacity-100 animate-line-right-left' : 'opacity-0 pointer-events-none'
        }`}
        style={{ 
          width: '1000px',
          height: '2000px',
          top: 'calc(50% - 4.0em - 1000px)',
          animationDuration: '0.6s'
        }}
        data-node-id="1:11-initial"
      >
        <svg width="1000" height="2000" viewBox="0 0 1000 2000" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <line x1="0" y1="1000" x2="1000" y2="1000" stroke="black" strokeWidth="14px"/>
        </svg>
      </div>

    </section>
  );
}
