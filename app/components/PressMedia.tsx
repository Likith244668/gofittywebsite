'use client';

import { useEffect, useRef, useState } from 'react';

const PressLogo = ({ name, className, style }: { name: string; className?: string; style?: React.CSSProperties }) => {
  switch (name) {
    case 'Forbes':
      return (
        <svg viewBox="0 0 100 28" fill="currentColor" className={className} style={style}>
          <path d="M4.9 22h3.6V9.6h5.4v-3H4.9v15.4zm10.9 0h3.6v-5.1h.1l3.4 5.1h4.1l-4.5-6.3c2.1-.6 3.3-2.2 3.3-4.5 0-2.9-2.1-4.6-5.4-4.6h-4.6V22zm3.6-8.1v-4.3h1c1.1 0 1.8.5 1.8 2.1 0 1.6-.7 2.2-1.8 2.2h-1zm14.3 8.2c4.1 0 6.8-2.6 6.8-6.6s-2.7-6.6-6.8-6.6c-2.3 0-4.1.9-5.1 2.3h-.1V9.6h-3.5V22h3.5v-1.9h.1c1 1.4 2.8 2.3 5.1 2.3zm-.4-3.1c-2.1 0-3.6-1.5-3.6-3.5s1.5-3.5 3.6-3.5 3.6 1.5 3.6 3.5-1.5 3.5-3.6 3.5zm13.1 3h3.6v-5.2c0-2.3 1.2-3.6 3.2-3.6.4 0 .8.1 1.1.2V9.4c-.4-.1-.8-.2-1.3-.2-1.9 0-3.1 1.1-3.5 2.8h-.1V9.6h-3.5v12.4h.5zm10.7 0h3.5v-4.7c0-2.3 1.2-3.7 3.4-3.7 2 0 2.9 1.1 2.9 3.2V22h3.5v-6.1c0-3.6-1.9-5.3-5.1-5.3-2.1 0-3.8 1-4.7 2.6h-.1V9.6h-3.5v12.4h.1zm18.6.1c2.6 0 4.6-1.3 5.3-3.4h-3.6c-.4.6-1 .9-1.7.9-1.3 0-2.2-.8-2.3-2.2h7.8c.1-3.6-2.1-6.4-5.7-6.4-3.6 0-6.2 2.7-6.2 6.6s2.6 6.5 6.4 6.5zm-2.2-7.8c.1-1.1.9-1.8 2.1-1.8 1.1 0 1.9.7 2 1.8h-4.1z" />
        </svg>
      );
    case 'TechCrunch':
      return (
        <svg viewBox="0 0 100 28" fill="currentColor" className={className} style={style}>
          <path d="M12 4H4v20h8v-4H8V8h4V4zm8 0h-8v20h8v-4h-4v-4h4v-4h-4V8h4V4zm8 0h-4v20h4V4zm8 0h-4v20h4V14h4v10h4V4h-4v8h-4V4z" />
        </svg>
      );
    case 'Mens Health':
      return (
        <svg viewBox="0 0 100 28" fill="currentColor" className={className} style={style}>
          <path d="M10 4L6 24h4l1-6h6l1 6h4L18 4h-8zm2.8 11l1.4-8 1.4 8h-2.8zM30 4h-4v20h4V4zm10 0h-4v20h12v-4h-8v-4h6v-4h-6V8h8V4h-8z" />
        </svg>
      );
    case 'Nike':
      return (
        <svg viewBox="0 0 100 35" fill="currentColor" className={className} style={style}>
          <path d="M10 20c15-5 35-12 60-15-20 15-35 25-60 25 5-2 15-5 25-8l-25-2z" />
        </svg>
      );
    case 'Adidas':
      return (
        <svg viewBox="0 0 100 65" fill="currentColor" className={className} style={style}>
          <path d="M25 60h10L20 35l-10 25h5zm20 0h10L40 25l-10 35h5zm20 0h10L60 15l-10 45h5z" />
        </svg>
      );
    case 'Under Armour':
      return (
        <svg viewBox="0 0 100 50" fill="currentColor" className={className} style={style}>
          <path d="M50 35c-10 0-15-5-15-15V5h10v15c0 5 2 8 5 8s5-3 5-8V5h10v15c0 10-5 15-15 15zm0 5c10 0 15 5 15 15v-5c0-5-2-8-5-8s-5 3-5 8v5c0-10 5-15 15-15z" />
        </svg>
      );
    case 'WHO':
      return (
        <svg viewBox="0 0 100 100" fill="currentColor" className={className} style={style}>
          <path d="M50 10c-22 0-40 18-40 40s18 40 40 40 40-18 40-40-18-40-40-40zm0 70c-16.5 0-30-13.5-30-30s13.5-30 30-30 30 13.5 30 30-13.5 30-30 30z" />
          <path d="M45 30h10v40h-10z" />
        </svg>
      );
    default:
      return null;
  }
};

const pressData = [
  {
    id: 'b1',
    name: 'Forbes',
    quote: 'Gofytt is redefining what it means to be fit in the digital age. A masterclass in community-driven wellness.',
    color: '#ffffff'
  },
  {
    id: 'b2',
    name: 'TechCrunch',
    quote: 'The most innovative fitness platform we’ve seen this decade. Seamlessly blending tech and human connection.',
    color: '#00d100'
  },
  {
    id: 'b3',
    name: 'Mens Health',
    quote: 'Finally, a program that focuses on the 1% improvements that actually stick. Highly recommended.',
    color: '#ff0000'
  },
  {
    id: 'b4',
    name: 'Nike',
    quote: 'We partner with Gofytt because they share our commitment to excellence and athlete empowerment.',
    color: '#ffffff'
  },
  {
    id: 'b5',
    name: 'Adidas',
    quote: 'Impossible is nothing when you have the right community behind you. Gofytt proves this every day.',
    color: '#ffffff'
  },
  {
    id: 'b6',
    name: 'Under Armour',
    quote: 'The training methodologies used here are world-class. A gold standard for digital fitness.',
    color: '#ffffff'
  },
  {
    id: 'b7',
    name: 'WHO',
    quote: 'Promoting physical activity is crucial, and Gofytt is making it accessible and engaging for everyone.',
    color: '#0093d5'
  }
];

export default function PressMedia() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeQuoteIndex, setActiveQuoteIndex] = useState(0);
  const [hoveredLogoIndex, setHoveredLogoIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );
    const current = sectionRef.current;
    if (current) observer.observe(current);
    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  // Auto-rotate quotes if not hovering
  useEffect(() => {
    if (hoveredLogoIndex !== null) {
      setActiveQuoteIndex(hoveredLogoIndex);
      return;
    }

    const interval = setInterval(() => {
      setActiveQuoteIndex((prev) => (prev + 1) % pressData.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [hoveredLogoIndex]);

  const activeItem = pressData[activeQuoteIndex];

  return (
    <section
      ref={sectionRef}
      className="relative py-24 sm:py-32 overflow-hidden transition-colors duration-1000"
      style={{ backgroundColor: '#050505' }}
    >
      {/* Dynamic Background Glow */}
      <div
        className="absolute inset-0 transition-opacity duration-1000"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${activeItem.color}15 0%, transparent 60%)`,
          opacity: 0.6
        }}
      />

      {/* Top Border Gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-[600px]">

        {/* Trusted Authority Label */}
        <div className={`mb-12 flex items-center gap-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="h-[1px] w-12 bg-[#fb5607]" />
          <span
            className="text-[#fb5607] uppercase tracking-[0.2em] text-sm font-bold"
            style={{ fontFamily: 'var(--font-antonio)' }}
          >
            Trusted Authority
          </span>
          <div className="h-[1px] w-12 bg-[#fb5607]" />
        </div>

        {/* The Quote Stage */}
        <div className="relative w-full max-w-5xl mx-auto text-center mb-20 min-h-[200px] flex items-center justify-center">
          {pressData.map((item, index) => (
            <div
              key={item.id}
              className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ease-out ${index === activeQuoteIndex
                ? 'opacity-100 translate-y-0 scale-100 blur-0'
                : 'opacity-0 translate-y-8 scale-95 blur-sm pointer-events-none'
                }`}
            >
              <h3
                className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight text-white mb-8"
                style={{ fontFamily: 'var(--font-antonio)' }}
              >
                &ldquo;{item.quote}&rdquo;
              </h3>

              {/* Active Logo Indicator */}
              <div className="flex items-center gap-3 opacity-60">
                <span className="text-sm uppercase tracking-widest text-gray-400 font-medium">
                  — {item.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Logo Navigation Dock */}
        <div
          className={`relative z-10 flex flex-wrap justify-center gap-4 sm:gap-8 p-6 rounded-3xl border border-white/5 bg-white/5 backdrop-blur-sm transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
        >
          {pressData.map((brand, index) => {
            const isActive = activeQuoteIndex === index;

            return (
              <button
                key={brand.id}
                onClick={() => setActiveQuoteIndex(index)}
                onMouseEnter={() => {
                  setHoveredLogoIndex(index);
                  setActiveQuoteIndex(index);
                }}
                onMouseLeave={() => setHoveredLogoIndex(null)}
                className={`group relative flex items-center justify-center w-24 h-16 sm:w-32 sm:h-20 rounded-xl transition-all duration-500 ${isActive
                  ? 'bg-white/10 scale-110 shadow-[0_0_30px_rgba(255,255,255,0.1)]'
                  : 'bg-transparent hover:bg-white/5 hover:scale-105'
                  }`}
              >
                {/* Active Indicator Dot */}
                {isActive && (
                  <div
                    className="absolute -top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full shadow-[0_0_10px_currentColor]"
                    style={{ backgroundColor: brand.color }}
                  />
                )}

                <div className="relative h-6 w-20 sm:h-8 sm:w-24 transition-all duration-300">
                  <PressLogo
                    name={brand.name}
                    className={`w-full h-full transition-all duration-500 ${isActive
                      ? 'opacity-100'
                      : 'opacity-30 grayscale group-hover:opacity-70 group-hover:grayscale-0'
                      }`}
                  />
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
