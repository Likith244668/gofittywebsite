'use client';

import { useState, useEffect, useRef } from 'react';

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Show header after HeroSection animation completes (0.7s animation + 0.1s delay = 0.8s)
    const showTimer = setTimeout(() => {
      setHasShown(true);
      // Only show if still in HeroSection viewport
      const heroSection = document.querySelector('[data-hero-section]') as HTMLElement;
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        const scrollPosition = window.scrollY + 100;
        if (scrollPosition < heroBottom) {
          setIsVisible(true);
        }
      } else {
        setIsVisible(true);
      }
    }, 100);

    // Monitor scroll position - hide header when not in HeroSection
    const handleScroll = () => {
      if (!hasShown) return;
      
      const heroSection = document.querySelector('[data-hero-section]') as HTMLElement;
      if (!heroSection) {
        setIsVisible(false);
        return;
      }

      const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
      const scrollPosition = window.scrollY + 50; // Small buffer

      // Show header if we're still in HeroSection viewport, hide otherwise
      if (scrollPosition < heroBottom) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Check initial scroll position
    handleScroll();
    
    return () => {
      clearTimeout(showTimer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasShown]);

  return (
    <header 
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 bg-black transition-opacity duration-300 ease-out ${
        isVisible ? 'opacity-100 animate-header-fade-in' : 'opacity-0 pointer-events-none'
      }`}
      style={{ willChange: 'opacity' }}
    >
      {/* Top dark gray bar */}
      <div className="h-1 bg-gray-800"></div>
      
      {/* Main header content */}
      <div className="flex items-center justify-between px-6 lg:px-12 py-4 bg-black">
        {/* Logo - Left */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="text-[#fb5607] font-bold text-3xl lg:text-4xl uppercase tracking-tight" style={{ fontFamily: 'var(--font-antonio)' }}>
           Gofytt
          </span>
        </div>

        {/* Navigation Bar - Center */}
        <nav className="hidden lg:flex items-center justify-center flex-1">
          <div className="bg-gray-800 rounded-full px-10 py-1.5 lg:px-10 lg:py-4.5 flex items-center gap-20 lg:gap-24">
            <a href="#" className="text-white font-bold uppercase text-xs lg:text-sm hover:text-[#fb5607] transition-colors whitespace-nowrap" style={{ fontFamily: 'var(--font-antonio)' }}>
              CLASSES
            </a>
            <a href="#" className="text-white font-bold uppercase text-xs lg:text-sm hover:text-[#fb5607] transition-colors whitespace-nowrap" style={{ fontFamily: 'var(--font-antonio)' }}>
              BONUSES
            </a>
            <a href="#" className="text-white font-bold uppercase text-xs lg:text-sm hover:text-[#fb5607] transition-colors whitespace-nowrap" style={{ fontFamily: 'var(--font-antonio)' }}>
              MEMBERSHIPS
            </a>
            <a href="#" className="text-white font-bold uppercase text-xs lg:text-sm hover:text-[#fb5607] transition-colors whitespace-nowrap" style={{ fontFamily: 'var(--font-antonio)' }}>
              LOCATIONS
            </a>
          </div>
        </nav>

        {/* Join Now Button - Right */}
        <button className="text-[#fb5607] font-bold uppercase text-xl lg:text-2xl hover:text-[#ff6b1f] transition-colors whitespace-nowrap flex-shrink-0" style={{ fontFamily: 'var(--font-antonio)' }}>
          JOIN NOW [+]
        </button>
      </div>
    </header>
  );
}

