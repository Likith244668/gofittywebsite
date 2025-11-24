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
    quote: 'Redefining fitness in the digital age. A masterclass in community-driven wellness.',
    highlight: 'Masterclass in Wellness',
    category: 'Business',
    year: '2024'
  },
  {
    id: 'b2',
    name: 'TechCrunch',
    quote: 'The most innovative fitness platform of the decade. Tech meets human connection.',
    highlight: 'Most Innovative Platform',
    category: 'Technology',
    year: '2024'
  },
  {
    id: 'b3',
    name: 'Mens Health',
    quote: 'Finally, a program focused on 1% improvements that stick. Highly recommended.',
    highlight: '1% Better Every Day',
    category: 'Health',
    year: '2024'
  },
  {
    id: 'b4',
    name: 'Nike',
    quote: 'We partner with Gofytt for their commitment to excellence and empowerment.',
    highlight: 'Official Partner',
    category: 'Sports',
    year: '2024'
  },
  {
    id: 'b5',
    name: 'Adidas',
    quote: 'Impossible is nothing with the right community. Gofytt proves this daily.',
    highlight: 'Community Excellence',
    category: 'Sports',
    year: '2024'
  },
  {
    id: 'b6',
    name: 'Under Armour',
    quote: 'World-class training methodologies. The gold standard for digital fitness.',
    highlight: 'Gold Standard',
    category: 'Performance',
    year: '2024'
  },
  {
    id: 'b7',
    name: 'WHO',
    quote: 'Making physical activity accessible and engaging for everyone. Crucial work.',
    highlight: 'Global Impact',
    category: 'Health',
    year: '2024'
  }
];

export default function PressMedia() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );
    const current = sectionRef.current;
    if (current) observer.observe(current);
    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  // Auto-rotate carousel - continuous rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % pressData.length);
    }, 2500); // Auto-advance every 2.5 seconds - faster pace

    return () => clearInterval(interval);
  }, []); // No dependencies - always runs

  // Track mouse position for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleCardClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-20 sm:py-32 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #000000 0%, #0a0a0a 50%, #000000 100%)'
      }}
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(251,86,7,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(251,86,7,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`
          }}
        />
      </div>

      {/* Radial Orange Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${50 + mousePosition.x * 30}% ${50 + mousePosition.y * 30}%, rgba(251,86,7,0.15) 0%, transparent 60%)`,
          transition: 'background 0.3s ease-out'
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className={`text-center mb-16 sm:mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#fb5607]" />
            <span
              className="text-[#fb5607] text-sm sm:text-base font-bold tracking-[0.3em] uppercase"
              style={{ fontFamily: 'var(--font-antonio)' }}
            >
              Recognition
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#fb5607]" />
          </div>

          <h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4"
            style={{ fontFamily: 'var(--font-antonio)' }}
          >
            TRUSTED BY <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fb5607] to-[#ff6b35]">LEADERS</span>
          </h2>

          <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto">
            Featured and partnered with the world&apos;s most influential brands
          </p>
        </div>

        {/* 3D Holographic Carousel */}
        <div
          className="relative"
          style={{ perspective: '2000px' }}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Main Stage */}
          <div className="relative h-[500px] sm:h-[600px] flex items-center justify-center">

            {pressData.map((item, index) => {
              const offset = index - activeIndex;
              const absOffset = Math.abs(offset);
              const isActive = index === activeIndex;

              // Calculate 3D position
              const angle = offset * 25; // degrees
              const translateZ = isActive ? 100 : -absOffset * 150;
              const translateX = offset * 280;
              const scale = isActive ? 1 : Math.max(0.6, 1 - absOffset * 0.2);
              const opacity = isActive ? 1 : Math.max(0, 1 - absOffset * 0.4);

              return (
                <div
                  key={item.id}
                  className={`absolute transition-all duration-700 ease-out cursor-pointer ${isActive ? 'z-20' : 'z-10'}`}
                  style={{
                    transform: `
                      translateX(${translateX}px)
                      translateZ(${translateZ}px)
                      rotateY(${angle}deg)
                      scale(${scale})
                    `,
                    opacity,
                    transformStyle: 'preserve-3d'
                  }}
                  onClick={() => handleCardClick(index)}
                >
                  {/* Holographic Card */}
                  <div
                    className={`
                      relative w-[280px] sm:w-[350px] h-[400px] sm:h-[480px]
                      rounded-3xl overflow-hidden
                      border-2 transition-all duration-500
                      ${isActive
                        ? 'border-[#fb5607] shadow-[0_0_80px_rgba(251,86,7,0.6)]'
                        : 'border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)]'
                      }
                    `}
                    style={{
                      background: isActive
                        ? 'linear-gradient(135deg, rgba(251,86,7,0.1) 0%, rgba(0,0,0,0.9) 50%, rgba(251,86,7,0.05) 100%)'
                        : 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(0,0,0,0.8) 100%)',
                      backdropFilter: 'blur(20px)'
                    }}
                  >
                    {/* Holographic Scan Line Animation */}
                    {isActive && (
                      <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          background: 'linear-gradient(180deg, transparent 0%, rgba(251,86,7,0.3) 50%, transparent 100%)',
                          animation: 'scan 3s linear infinite'
                        }}
                      />
                    )}

                    {/* Corner Accents */}
                    {isActive && (
                      <>
                        <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#fb5607]" />
                        <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#fb5607]" />
                        <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-[#fb5607]" />
                        <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#fb5607]" />
                      </>
                    )}

                    {/* Content */}
                    <div className="relative h-full p-8 flex flex-col">
                      {/* Logo */}
                      <div className="flex-shrink-0 mb-6">
                        <div className={`w-32 h-20 flex items-center justify-center transition-all duration-500 ${isActive ? 'scale-110' : 'scale-100'}`}>
                          <PressLogo
                            name={item.name}
                            className={`w-full h-full transition-all duration-500 ${isActive ? 'opacity-100' : 'opacity-40'}`}
                            style={{ color: isActive ? '#fb5607' : '#ffffff' }}
                          />
                        </div>
                      </div>

                      {/* Category Badge */}
                      <div className="flex-shrink-0 mb-4">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-500 ${isActive
                            ? 'bg-[#fb5607]/20 text-[#fb5607] border border-[#fb5607]/50'
                            : 'bg-white/5 text-gray-400 border border-white/10'
                            }`}
                          style={{ fontFamily: 'var(--font-antonio)' }}
                        >
                          {item.category}
                        </span>
                      </div>

                      {/* Quote */}
                      <div className="flex-1 flex flex-col justify-center">
                        <p
                          className={`text-lg sm:text-xl font-bold mb-4 transition-all duration-500 ${isActive ? 'text-white' : 'text-gray-500'
                            }`}
                          style={{ fontFamily: 'var(--font-antonio)' }}
                        >
                          &ldquo;{item.quote}&rdquo;
                        </p>

                        {/* Highlight */}
                        {isActive && (
                          <div className="inline-flex items-center gap-2 text-[#fb5607] font-bold text-sm">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="uppercase tracking-wider text-xs">{item.highlight}</span>
                          </div>
                        )}
                      </div>

                      {/* Footer */}
                      <div className={`flex-shrink-0 pt-4 border-t transition-colors duration-500 ${isActive ? 'border-[#fb5607]/30' : 'border-white/10'}`}>
                        <div className="flex items-center justify-between text-sm">
                          <span className={`font-bold transition-colors duration-500 ${isActive ? 'text-white' : 'text-gray-500'}`}>
                            — {item.name}
                          </span>
                          <span className={`text-xs transition-colors duration-500 ${isActive ? 'text-[#fb5607]' : 'text-gray-600'}`}>
                            {item.year}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Glow Effect */}
                    {isActive && (
                      <div
                        className="absolute inset-0 -z-10 rounded-3xl blur-2xl opacity-50"
                        style={{
                          background: 'radial-gradient(circle, rgba(251,86,7,0.6) 0%, transparent 70%)'
                        }}
                      />
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-12">
            {pressData.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`transition-all duration-300 rounded-full ${index === activeIndex
                  ? 'w-12 h-3 bg-gradient-to-r from-[#fb5607] to-[#ff6b35]'
                  : 'w-3 h-3 bg-white/20 hover:bg-white/40'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => setActiveIndex((prev) => (prev - 1 + pressData.length) % pressData.length)}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-2 border-[#fb5607]/30 bg-black/50 backdrop-blur-sm flex items-center justify-center text-[#fb5607] hover:bg-[#fb5607]/20 hover:border-[#fb5607] transition-all duration-300 hover:scale-110"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={() => setActiveIndex((prev) => (prev + 1) % pressData.length)}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-2 border-[#fb5607]/30 bg-black/50 backdrop-blur-sm flex items-center justify-center text-[#fb5607] hover:bg-[#fb5607]/20 hover:border-[#fb5607] transition-all duration-300 hover:scale-110"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

      </div>

      {/* CSS Animation for Scan Line */}
      <style jsx>{`
        @keyframes scan {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }
      `}</style>
    </section>
  );
}
