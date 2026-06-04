'use client';

import { useState, useEffect, useRef } from 'react';

export default function HeroSection() {
  const [videoOn, setVideoOn] = useState(false);
  const [showWordmark, setShowWordmark] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    let revealTimer: ReturnType<typeof setTimeout>;

    // When the video starts: fade it up from black, then float the wordmark up
    // a beat later — overlapping the tail of the fade for one continuous motion.
    const onPlaying = () => {
      setVideoOn(true);
      revealTimer = setTimeout(() => setShowWordmark(true), 500);
    };

    if (video) {
      video.play().catch(() => {
        /* autoplay blocked — fallback timer below still reveals everything */
      });

      if (video.readyState >= 3) {
        onPlaying();
      } else {
        video.addEventListener('playing', onPlaying, { once: true });
      }
    }

    // Safety net: never let the scene get stuck hidden if the video stalls
    const fallback = setTimeout(() => {
      setVideoOn(true);
      setShowWordmark(true);
    }, 1800);

    return () => {
      clearTimeout(revealTimer);
      clearTimeout(fallback);
      if (video) video.removeEventListener('playing', onPlaying);
    };
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
          className={`absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover transition-opacity duration-1000 ease-out ${videoOn ? 'opacity-100' : 'opacity-0'
            }`}
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
              radial-gradient(ellipse 85% 65% at 50% 50%, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.7) 100%),
              linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.3) 45%, rgba(0,0,0,0.7) 100%)
            `
          }}
        />

        {/* Subtle warm floor glow — keeps brand warmth off the headline */}
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            background: 'radial-gradient(60% 45% at 50% 100%, rgba(251,86,7,0.35) 0%, transparent 70%)',
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
          className={`mb-0 text-[36px] sm:text-[56px] md:text-[88px] lg:text-[120px] xl:text-[145px] leading-[1.1] tracking-[-3px] sm:tracking-[-5px] md:tracking-[-7px] relative ${showWordmark ? 'animate-rise-up' : 'opacity-0'
            }`}
          style={{
            animationDelay: '0.15s',
            willChange: 'transform, opacity',
            textShadow: '0 4px 30px rgba(0,0,0,0.8), 0 2px 10px rgba(0,0,0,0.9)'
          }}
          data-node-id="1:3"
        >
          IT&apos;S NOT FITNESS.
        </p>
        <p
          className={`mt-2 text-[36px] sm:text-[56px] md:text-[84px] lg:text-[115px] xl:text-[135px] leading-[1.1] tracking-[-3px] sm:tracking-[-5px] md:tracking-[-7px] text-[#fb5607] ${showWordmark ? 'animate-rise-up' : 'opacity-0'
            }`}
          style={{
            animationDelay: '0.32s',
            willChange: 'transform, opacity',
            textShadow: '0 2px 12px rgba(0,0,0,0.85), 0 6px 28px rgba(0,0,0,0.6)'
          }}
          data-node-id="1:4"
        >
          IT&apos;S LIFE.
        </p>
      </div>

    </section>
  );
}
