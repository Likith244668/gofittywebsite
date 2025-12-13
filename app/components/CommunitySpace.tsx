'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function CommunitySpace() {
  const [activeState, setActiveState] = useState<number>(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setActiveState((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  const states = [
    {
      id: 0,
      title: 'BODY',
      subtitle: 'UNLEASH POWER',
      color: '#fb5607',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop',
      description: 'Forging the body through elite discipline.'
    },
    {
      id: 1,
      title: 'MIND',
      subtitle: 'FIND CLARITY',
      color: '#8dd9ff',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop',
      description: 'Mastering the inner game of success.'
    },
    {
      id: 2,
      title: 'SOCIAL',
      subtitle: 'BUILD BONDS',
      color: '#5ff7b6',
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop',
      description: 'Rising together with the 1%.'
    },
    {
      id: 3,
      title: 'GOFYTT',
      subtitle: 'FITNESS PRISM',
      color: '#ffffff',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop',
      description: 'The complete fusion of self.'
    }
  ];

  const current = states[activeState];

  // Deterministic positions for background triangles
  const triangles = [
    { top: '10%', left: '10%', size: 20, delay: 0, duration: 15 },
    { top: '20%', left: '80%', size: 30, delay: 2, duration: 18 },
    { top: '70%', left: '15%', size: 25, delay: 4, duration: 20 },
    { top: '80%', left: '85%', size: 15, delay: 1, duration: 12 },
    { top: '40%', left: '5%', size: 35, delay: 3, duration: 22 },
    { top: '50%', left: '95%', size: 20, delay: 5, duration: 16 },
    { top: '15%', left: '50%', size: 10, delay: 2, duration: 14 },
    { top: '85%', left: '40%', size: 28, delay: 6, duration: 19 },
    { top: '30%', left: '25%', size: 18, delay: 1, duration: 17 },
    { top: '60%', left: '75%', size: 22, delay: 4, duration: 21 },
    { top: '5%', left: '90%', size: 12, delay: 0, duration: 13 },
    { top: '95%', left: '10%', size: 32, delay: 3, duration: 23 },
  ];

  return (
    <section
      className="relative py-24 sm:py-32 overflow-hidden bg-[#050505] flex flex-col items-center justify-center min-h-[900px]"
      style={{ fontFamily: 'var(--font-antonio)' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={containerRef}
    >
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
      `}</style>

      {/* Background Ambient Light */}
      <div
        className="absolute inset-0 transition-colors duration-1000 ease-in-out opacity-10"
        style={{
          background: `radial-gradient(circle at center, ${current.color}, transparent 70%)`
        }}
      />

      {/* Floating Background Triangles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {mounted && triangles.map((t, i) => (
          <div
            key={i}
            className="absolute transition-colors duration-1000 opacity-20"
            style={{
              top: t.top,
              left: t.left,
              width: `${t.size}px`,
              height: `${t.size}px`,
              backgroundColor: current.color,
              clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
              animation: `float ${t.duration}s infinite ease-in-out`,
              animationDelay: `-${t.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'url("/noise.png")' }} />

      <div className="relative z-10 text-center mb-16">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tighter mb-4">
          THE <span className="transition-colors duration-500" style={{ color: activeState === 3 ? '#fff' : current.color }}>FITNESS PRISM</span>
        </h2>
        <p className="text-gray-500 text-sm tracking-[0.2em] uppercase max-w-xl mx-auto" style={{ fontFamily: 'var(--font-geist-sans)' }}>
        Body - Mind - Bond - Gofytt.
        </p>
      </div>

      {/* 3D Container */}
      <div
        className="relative w-[340px] h-[300px] sm:w-[480px] sm:h-[420px] md:w-[600px] md:h-[520px]"
        style={{ perspective: '1000px' }}
      >

        {/* Floating Card */}
        <div
          className="relative w-full h-full transition-transform duration-100 ease-out"
          style={{
            transformStyle: 'preserve-3d',
            transform: `rotateX(${mousePos.y * -15}deg) rotateY(${mousePos.x * 15}deg)`
          }}
        >

          {/* Layer 1: Back Glow (Deep Z) */}
          <div
            className="absolute inset-0 rounded-full blur-[100px] transition-colors duration-1000"
            style={{
              transform: 'translateZ(-50px)',
              backgroundColor: `${current.color}40`
            }}
          />

          {/* Layer 2: The Masked Window (Zero Z) */}
          <div
            className="absolute inset-0 z-10 overflow-hidden transition-all duration-1000"
            style={{
              clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
              filter: 'drop-shadow(0 20px 50px rgba(0,0,0,0.5))',
              transform: 'translateZ(0px)'
            }}
          >
            {/* Background Image Layer */}
            {states.map((state, index) => (
              <div
                key={state.id}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${activeState === index ? 'opacity-100' : 'opacity-0'}`}
              >
                <Image
                  src={state.image}
                  alt={state.title}
                  fill
                  className="object-cover transition-transform duration-[10000ms] ease-linear scale-110"
                  style={{
                    transform: activeState === index ? 'scale(1.1)' : 'scale(1.0)',
                    filter: 'brightness(0.6) contrast(1.2)'
                  }}
                />
                {/* Color Overlay */}
                <div
                  className="absolute inset-0 mix-blend-overlay opacity-60"
                  style={{ backgroundColor: state.color }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40" />
              </div>
            ))}
          </div>

          {/* Layer 3: Frame & Tech Accents (Positive Z) */}
          <div
            className="absolute inset-0 z-20 pointer-events-none"
            style={{ transform: 'translateZ(30px)' }}
          >
            <svg className="w-full h-full overflow-visible">
              <defs>
                <filter id="glow-strong" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="8" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>
              <polygon
                points="50,0 0,100 100,100"
                transform="scale(1, 1) translate(0, 0)"
                vectorEffect="non-scaling-stroke"
                fill="none"
                stroke={current.color}
                strokeWidth="3"
                className="transition-all duration-1000"
                style={{ filter: 'url(#glow-strong)', opacity: 0.8 }}
              />
              <polygon
                points="50,0 0,100 100,100"
                transform="scale(1, 1) translate(0, 0)"
                vectorEffect="non-scaling-stroke"
                fill="none"
                stroke="white"
                strokeWidth="1"
                className="opacity-30"
              />
            </svg>

            {/* Tech Markers */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8 text-[10px] text-white/40 tracking-[0.5em]">01</div>
            <div className="absolute bottom-0 left-0 -translate-x-4 translate-y-4 text-[10px] text-white/40 tracking-[0.5em]">02</div>
            <div className="absolute bottom-0 right-0 translate-x-4 translate-y-4 text-[10px] text-white/40 tracking-[0.5em]">03</div>
          </div>

          {/* Layer 4: Typography (High Positive Z) */}
          <div
            className="absolute inset-0 z-30 flex flex-col items-center justify-end pb-16 sm:pb-24 px-6 text-center pointer-events-none"
            style={{ transform: 'translateZ(60px)' }}
          >
            <h3
              className="text-5xl sm:text-7xl md:text-8xl font-bold text-white tracking-tighter mb-2 transition-all duration-500"
              style={{
                textShadow: '0 20px 40px rgba(0,0,0,0.8)',
                opacity: 1
              }}
            >
              {current.title}
            </h3>
            <div className="h-1 w-12 sm:w-20 mb-4 transition-colors duration-500 shadow-[0_0_20px_currentColor]" style={{ backgroundColor: current.color, color: current.color }} />
            <p
              className="text-xs sm:text-sm font-bold tracking-[0.3em] uppercase text-white/90 mb-2 drop-shadow-lg"
            >
              {current.subtitle}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
