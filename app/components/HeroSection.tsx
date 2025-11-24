'use client';

import { useState, useEffect, useRef } from 'react';

export default function HeroSection() {
  const [hasPlayedInitialAnimation] = useState(true);
  const [isAnimating] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Ensure video plays even if autoplay is blocked
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log('Video autoplay was prevented:', error);
      });
    }
  }, []);

  return (
    <section
      className="relative flex min-h-[85vh] sm:min-h-[90vh] lg:min-h-screen w-full items-center justify-center bg-black text-white overflow-hidden"
      style={{
        fontFamily: 'var(--font-antonio)',
        fontWeight: 700,
        perspective: '1200px',
        perspectiveOrigin: 'center center'
      }}
      data-name="Desktop"
      data-hero-section
    >
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover"
          style={{
            filter: 'brightness(0.6) contrast(1.1)',
          }}
        >
          <source src="/bgvideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Gradient Overlay for Text Readability */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at center, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%),
              linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.6) 100%)
            `
          }}
        />

        {/* Orange Glow Accent */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: 'radial-gradient(circle at 50% 70%, rgba(251,86,7,0.3) 0%, transparent 60%)',
            mixBlendMode: 'screen'
          }}
        />

        {/* Vignette Effect */}
        <div
          className="absolute inset-0"
          style={{
            boxShadow: 'inset 0 0 200px rgba(0,0,0,0.8)'
          }}
        />
      </div>

      {/* Text Content */}
      <div className="relative flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 text-center z-10">
        <p
          className={`mb-0 text-[36px] sm:text-[56px] md:text-[88px] lg:text-[120px] xl:text-[145px] leading-[1.1] tracking-[-3px] sm:tracking-[-5px] md:tracking-[-7px] relative ${isAnimating ? 'animate-text-3d-bump' : 'opacity-0'
            }`}
          style={{
            animationDelay: '0.1s',
            animationDuration: '0.3s',
            transformStyle: 'preserve-3d',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            willChange: 'transform, opacity',
            textShadow: '0 4px 30px rgba(0,0,0,0.8), 0 2px 10px rgba(0,0,0,0.9)'
          }}
          data-node-id="1:3"
        >
          IT&apos;S NOT FITNESS.
        </p>
        <p
          className={`mt-[-0.15em] text-[36px] sm:text-[56px] md:text-[84px] lg:text-[115px] xl:text-[135px] leading-[1.1] tracking-[-3px] sm:tracking-[-5px] md:tracking-[-7px] text-[#fb5607] ${isAnimating ? 'animate-text-3d-bump' : 'opacity-0'
            }`}
          style={{
            animationDelay: '0.4s',
            animationDuration: '0.3s',
            transformStyle: 'preserve-3d',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            willChange: 'transform, opacity',
            textShadow: '0 4px 30px rgba(251,86,7,0.6), 0 2px 10px rgba(0,0,0,0.9), 0 0 40px rgba(251,86,7,0.4)'
          }}
          data-node-id="1:4"
        >
          IT&apos;S LIFE.
        </p>
      </div>

      {/* Initial Line - moves right to left between text lines */}
      <div
        className={`absolute z-20 hidden sm:block ${hasPlayedInitialAnimation ? 'opacity-100 animate-line-right-left' : 'opacity-0 pointer-events-none'
          }`}
        style={{
          width: '47%',
          maxWidth: '1100px',
          height: '14px',
          top: '41.5%',
          left: '50%',
          transform: 'translateX(18.5%)',
          animationDuration: '1.5s'
        }}
        data-node-id="1:11-initial"
      >
        <div
          className="w-full h-full bg-black"
          style={{
            boxShadow: '0 0 10px rgba(0,0,0,0.5)'
          }}
        />
      </div>

    </section>
  );
}
