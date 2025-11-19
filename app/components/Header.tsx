'use client';

import { useState, useEffect, useRef } from 'react';

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMobileMenuOpen && headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

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
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-12 py-3 sm:py-4 bg-black">
        {/* Logo - Left */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="text-[#fb5607] font-bold text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight" style={{ fontFamily: 'var(--font-antonio)' }}>
           Gofytt
          </span>
        </div>

        {/* Navigation Bar - Center (Desktop) */}
        <nav className="hidden lg:flex items-center justify-center flex-1">
          <div className="bg-gray-800 rounded-full px-8 xl:px-10 py-1.5 xl:py-4.5 flex items-center gap-16 xl:gap-24">
            <a href="#" className="text-white font-bold uppercase text-xs xl:text-sm hover:text-[#fb5607] transition-colors whitespace-nowrap" style={{ fontFamily: 'var(--font-antonio)' }}>
              CLASSES
            </a>
            <a href="#" className="text-white font-bold uppercase text-xs xl:text-sm hover:text-[#fb5607] transition-colors whitespace-nowrap" style={{ fontFamily: 'var(--font-antonio)' }}>
              BONUSES
            </a>
            <a href="#" className="text-white font-bold uppercase text-xs xl:text-sm hover:text-[#fb5607] transition-colors whitespace-nowrap" style={{ fontFamily: 'var(--font-antonio)' }}>
              MEMBERSHIPS
            </a>
            <a href="#" className="text-white font-bold uppercase text-xs xl:text-sm hover:text-[#fb5607] transition-colors whitespace-nowrap" style={{ fontFamily: 'var(--font-antonio)' }}>
              LOCATIONS
            </a>
          </div>
        </nav>

        {/* Right Side - Join Now Button (Desktop) / Menu Button (Mobile) */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Join Now Button - Desktop */}
          <button className="hidden sm:block text-[#fb5607] font-bold uppercase text-lg sm:text-xl lg:text-2xl hover:text-[#ff6b1f] transition-colors whitespace-nowrap flex-shrink-0" style={{ fontFamily: 'var(--font-antonio)' }}>
            JOIN NOW [+]
          </button>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden flex items-center justify-center w-10 h-10 text-white hover:text-[#fb5607] transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 top-[57px] bg-black z-40 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col h-full pt-8 px-6">
          <a
            href="#"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white font-bold uppercase text-lg py-4 border-b border-gray-800 hover:text-[#fb5607] transition-colors"
            style={{ fontFamily: 'var(--font-antonio)' }}
          >
            CLASSES
          </a>
          <a
            href="#"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white font-bold uppercase text-lg py-4 border-b border-gray-800 hover:text-[#fb5607] transition-colors"
            style={{ fontFamily: 'var(--font-antonio)' }}
          >
            BONUSES
          </a>
          <a
            href="#"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white font-bold uppercase text-lg py-4 border-b border-gray-800 hover:text-[#fb5607] transition-colors"
            style={{ fontFamily: 'var(--font-antonio)' }}
          >
            MEMBERSHIPS
          </a>
          <a
            href="#"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white font-bold uppercase text-lg py-4 border-b border-gray-800 hover:text-[#fb5607] transition-colors"
            style={{ fontFamily: 'var(--font-antonio)' }}
          >
            LOCATIONS
          </a>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-8 w-full rounded-xl bg-gradient-to-r from-[#fb5607] to-[#ff6b6b] px-6 py-4 text-base font-bold text-white shadow-[0_8px_30px_rgba(251,86,7,0.4)] transition-all duration-300 hover:scale-105"
            style={{ fontFamily: 'var(--font-antonio)' }}
          >
            JOIN NOW [+]
          </button>
        </nav>
      </div>
    </header>
  );
}

