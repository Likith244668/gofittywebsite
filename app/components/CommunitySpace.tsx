'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

type Pillar = {
  id: number;
  title: string;
  tag: string;
  description: string;
  color: string;
  image: string;
};

// One beam of discipline, refracted into five dimensions of a life fully lived.
// Order is canonical: Physical → Mental → Social → Nutritional → Medical.
const pillars: Pillar[] = [
  {
    id: 0,
    title: 'PHYSICAL',
    tag: 'Move',
    description: 'Strength, mobility, and energy that back your ambition.',
    color: '#fb5607',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 1,
    title: 'MENTAL',
    tag: 'Focus',
    description: 'Clarity and resilience for pressure that never clocks out.',
    color: '#fb5607',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'SOCIAL',
    tag: 'Belong',
    description: 'Bonds and accountability that pull you forward.',
    color: '#fb5607',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'NUTRITIONAL',
    tag: 'Fuel',
    description: 'Food that compounds — energy you feel by hour twenty-three.',
    color: '#fb5607',
    image: 'https://images.unsplash.com/photo-1490818387583-1baba5e638af?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'MEDICAL',
    tag: 'Longevity',
    description: 'Health measured, recovery tracked, built to last.',
    color: '#fb5607',
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function CommunitySpace() {
  const [active, setActive] = useState<number>(0);
  const [paused, setPaused] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Auto-cycle through the spectrum; pause while the user is interacting.
  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % pillars.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [paused]);

  const pad = (n: number) => String(n + 1).padStart(2, '0');

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#050505] px-4 py-24 sm:px-6 sm:py-28 lg:px-8"
      style={{ fontFamily: 'var(--font-antonio)' }}
    >
      {/* Film grain */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{ backgroundImage: 'url("/noise.png")' }}
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Header — editorial eyebrow + giant display heading */}
        <header className="mb-10 sm:mb-14">
          <div className="flex items-center gap-4">
            <span className="h-1.5 w-1.5 rounded-full bg-[#fb5607]" />
            <span
              className="text-xs font-bold uppercase tracking-[0.35em] text-[#fb5607] sm:text-sm"
            >
              The Spectrum
            </span>
            <span className="h-px flex-1 bg-white/10" />
          </div>

          <h2 className="mt-6 text-5xl font-bold uppercase leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
            The Full <span className="text-[#fb5607]">Spectrum</span>
          </h2>

          <p
            className="mt-5 max-w-xl text-base leading-relaxed text-white/55"
            style={{ fontFamily: 'var(--font-geist-sans)' }}
          >
            One discipline refracts into five dimensions — the difference between an
            hour in the gym and a life fully lived.
          </p>
        </header>

        {/* Spectrum rule — five segments double as progress + nav */}
        <div className="mb-6 flex gap-1.5">
          {pillars.map((p, i) => (
            <button
              key={`seg-${p.id}`}
              type="button"
              aria-label={`Show ${p.title}`}
              onClick={() => setActive(i)}
              className="h-1 flex-1 rounded-full transition-all duration-500"
              style={{
                backgroundColor: active === i ? p.color : 'rgba(255,255,255,0.12)',
                boxShadow: active === i ? `0 0 16px ${p.color}` : 'none',
              }}
            />
          ))}
        </div>

        {/* Expanding band accordion — horizontal on desktop, vertical on mobile */}
        <div
          className="flex h-[560px] flex-col gap-2 sm:h-[600px] md:flex-row"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {pillars.map((p, i) => {
            const isActive = active === i;
            return (
              <button
                key={p.id}
                type="button"
                aria-label={p.title}
                aria-pressed={isActive}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                className="group relative overflow-hidden rounded-2xl outline-none transition-[flex-grow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:ring-2 focus-visible:ring-white/40"
                style={{ flexGrow: isActive ? 5 : 1, flexBasis: 0, minHeight: 0, minWidth: 0 }}
              >
                {/* Image */}
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(min-width: 768px) 60vw, 100vw"
                  className="object-cover transition-all duration-[1200ms] ease-out"
                  style={{
                    transform: isActive ? 'scale(1.06)' : 'scale(1.0)',
                    filter: isActive ? 'brightness(0.65) contrast(1.1)' : 'brightness(0.4) grayscale(0.4)',
                  }}
                />

                {/* Subtle warm wash — keeps brand warmth without tinting the image orange */}
                <div
                  aria-hidden
                  className="absolute inset-0 mix-blend-overlay transition-opacity duration-700"
                  style={{ backgroundColor: p.color, opacity: isActive ? 0.22 : 0.12 }}
                />
                {/* Legibility gradient */}
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/40" />
                {/* Top accent — always shows the band's spectrum color */}
                <div
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-[3px] transition-opacity duration-500"
                  style={{ backgroundColor: p.color, opacity: isActive ? 1 : 0.55 }}
                />

                {/* Collapsed label — vertical on desktop */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 hidden items-center justify-center transition-opacity duration-500 md:flex"
                  style={{ opacity: isActive ? 0 : 1 }}
                >
                  <div className="flex flex-col items-center gap-4" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                    <span className="text-xl font-bold uppercase tracking-[0.25em] text-white/90">
                      {p.title}
                    </span>
                  </div>
                  <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[11px] font-bold tracking-[0.3em] text-white/35">
                    {pad(i)}
                  </span>
                </div>

                {/* Collapsed label — horizontal on mobile */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between px-5 py-4 transition-opacity duration-500 md:hidden"
                  style={{ opacity: isActive ? 0 : 1 }}
                >
                  <span className="text-lg font-bold uppercase tracking-[0.2em] text-white/90">{p.title}</span>
                  <span className="text-[11px] font-bold tracking-[0.3em] text-white/35">{pad(i)}</span>
                </div>

                {/* Expanded content */}
                <div
                  className="pointer-events-none absolute inset-0 flex flex-col justify-end p-6 transition-all duration-500 sm:p-8"
                  style={{
                    opacity: isActive ? 1 : 0,
                    transform: isActive ? 'translateY(0)' : 'translateY(12px)',
                  }}
                >
                  <span
                    aria-hidden
                    className="absolute right-5 top-5 text-6xl font-bold leading-none text-white/10 sm:text-7xl"
                  >
                    {pad(i)}
                  </span>
                  <span
                    className="text-xs font-bold uppercase tracking-[0.3em]"
                    style={{ color: p.color }}
                  >
                    {p.tag}
                  </span>
                  <h3 className="mt-2 text-4xl font-bold uppercase leading-none tracking-tight text-white sm:text-5xl">
                    {p.title}
                  </h3>
                  <div
                    className="mt-3 h-1 w-12 rounded-full transition-colors duration-500 sm:w-16"
                    style={{ backgroundColor: p.color, boxShadow: `0 0 18px ${p.color}` }}
                  />
                  <p
                    className="mt-4 max-w-sm text-sm leading-relaxed text-white/75 sm:text-base"
                    style={{ fontFamily: 'var(--font-geist-sans)' }}
                  >
                    {p.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
