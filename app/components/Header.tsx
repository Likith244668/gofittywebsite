'use client';

import { useState, useEffect, useRef } from 'react';
import GofyttWord from './ui/GofyttWord';

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
      className={`fixed top-0 left-0 right-0 z-50 bg-transparent transition-opacity duration-300 ease-out ${isVisible ? 'opacity-100 animate-header-fade-in' : 'opacity-0 pointer-events-none'
        }`}
      style={{ willChange: 'opacity' }}
    >
      {/* Top dark gray bar */}
      <div className="h-1 bg-gray-800"></div>

      {/* Main header content */}
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-12 py-3 sm:py-4">
        {/* Logo - Left */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <GofyttWord
            logoSize={40}
            textClassName="text-[#fb5607] font-bold text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight"
            className="font-bold"
          />
        </div>

        {/* Navigation Bar - Center (Desktop) */}
        <nav className="hidden lg:flex items-center justify-center flex-1">
          <div className="relative bg-gradient-to-r from-gray-900/40 via-gray-800/50 to-gray-900/40 rounded-full px-6 xl:px-8 py-3 xl:py-4 flex items-center gap-8 xl:gap-12 border border-gray-700/30 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
            {/* Animated glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#fb5607]/0 via-[#fb5607]/5 to-[#fb5607]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <a
              href="/"
              className="relative text-white font-bold uppercase text-xs xl:text-sm whitespace-nowrap transition-all duration-300 hover:text-[#fb5607] hover:scale-110 group/link px-3 py-2"
              style={{ fontFamily: 'var(--font-antonio)' }}
            >
              <span className="relative z-10">HOME</span>
              <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#fb5607]/0 via-[#fb5607]/20 to-[#fb5607]/0 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 blur-sm"></span>
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-[#fb5607] to-transparent group-hover/link:w-full transition-all duration-300"></span>
            </a>

            <a
              href="/#about"
              className="relative text-white font-bold uppercase text-xs xl:text-sm whitespace-nowrap transition-all duration-300 hover:text-[#fb5607] hover:scale-110 group/link px-3 py-2"
              style={{ fontFamily: 'var(--font-antonio)' }}
            >
              <span className="relative z-10">ABOUT</span>
              <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#fb5607]/0 via-[#fb5607]/20 to-[#fb5607]/0 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 blur-sm"></span>
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-[#fb5607] to-transparent group-hover/link:w-full transition-all duration-300"></span>
            </a>

            <a
              href="/#1-percent-club"
              className="relative text-white font-bold uppercase text-xs xl:text-sm whitespace-nowrap transition-all duration-300 hover:text-[#fb5607] hover:scale-110 group/link px-3 py-2"
              style={{ fontFamily: 'var(--font-antonio)' }}
            >
              <span className="relative z-10">THE 1% CLUB</span>
              <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#fb5607]/0 via-[#fb5607]/20 to-[#fb5607]/0 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 blur-sm"></span>
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-[#fb5607] to-transparent group-hover/link:w-full transition-all duration-300"></span>
            </a>

            <a
              href="/knowledge-hub"
              className="relative text-white font-bold uppercase text-xs xl:text-sm whitespace-nowrap transition-all duration-300 hover:text-[#fb5607] hover:scale-110 group/link px-3 py-2"
              style={{ fontFamily: 'var(--font-antonio)' }}
            >
              <span className="relative z-10">KNOWLEDGE HUB</span>
              <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#fb5607]/0 via-[#fb5607]/20 to-[#fb5607]/0 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 blur-sm"></span>
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-[#fb5607] to-transparent group-hover/link:w-full transition-all duration-300"></span>
            </a>

            <a
              href="/events-and-experiences"
              className="relative text-white font-bold uppercase text-xs xl:text-sm whitespace-nowrap transition-all duration-300 hover:text-[#fb5607] hover:scale-110 group/link px-3 py-2"
              style={{ fontFamily: 'var(--font-antonio)' }}
            >
              <span className="relative z-10">EVENTS</span>
              <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#fb5607]/0 via-[#fb5607]/20 to-[#fb5607]/0 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 blur-sm"></span>
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-[#fb5607] to-transparent group-hover/link:w-full transition-all duration-300"></span>
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
        className={`lg:hidden fixed inset-0 top-[57px] bg-gradient-to-b from-black/90 via-black/95 to-black/90 z-40 transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <nav className="flex flex-col h-full pt-8 px-6">
          <a
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="group relative text-white font-bold uppercase text-lg py-5 border-b border-gray-800/50 hover:text-[#fb5607] transition-all duration-300"
            style={{ fontFamily: 'var(--font-antonio)' }}
          >
            <span className="relative z-10 flex items-center">
              <span className="inline-block w-0 h-0.5 bg-[#fb5607] group-hover:w-8 transition-all duration-300 mr-0 group-hover:mr-3"></span>
              HOME
            </span>
            <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-[#fb5607] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          <a
            href="/#about"
            onClick={() => setIsMobileMenuOpen(false)}
            className="group relative text-white font-bold uppercase text-lg py-5 border-b border-gray-800/50 hover:text-[#fb5607] transition-all duration-300"
            style={{ fontFamily: 'var(--font-antonio)' }}
          >
            <span className="relative z-10 flex items-center">
              <span className="inline-block w-0 h-0.5 bg-[#fb5607] group-hover:w-8 transition-all duration-300 mr-0 group-hover:mr-3"></span>
              ABOUT
            </span>
            <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-[#fb5607] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          <a
            href="/#1-percent-club"
            onClick={() => setIsMobileMenuOpen(false)}
            className="group relative text-white font-bold uppercase text-lg py-5 border-b border-gray-800/50 hover:text-[#fb5607] transition-all duration-300"
            style={{ fontFamily: 'var(--font-antonio)' }}
          >
            <span className="relative z-10 flex items-center">
              <span className="inline-block w-0 h-0.5 bg-[#fb5607] group-hover:w-8 transition-all duration-300 mr-0 group-hover:mr-3"></span>
              THE 1% CLUB
            </span>
            <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-[#fb5607] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          <a
            href="/knowledge-hub"
            onClick={() => setIsMobileMenuOpen(false)}
            className="group relative text-white font-bold uppercase text-lg py-5 border-b border-gray-800/50 hover:text-[#fb5607] transition-all duration-300"
            style={{ fontFamily: 'var(--font-antonio)' }}
          >
            <span className="relative z-10 flex items-center">
              <span className="inline-block w-0 h-0.5 bg-[#fb5607] group-hover:w-8 transition-all duration-300 mr-0 group-hover:mr-3"></span>
              KNOWLEDGE HUB
            </span>
            <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-[#fb5607] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          <a
            href="/events-and-experiences"
            onClick={() => setIsMobileMenuOpen(false)}
            className="group relative text-white font-bold uppercase text-lg py-5 border-b border-gray-800/50 hover:text-[#fb5607] transition-all duration-300"
            style={{ fontFamily: 'var(--font-antonio)' }}
          >
            <span className="relative z-10 flex items-center">
              <span className="inline-block w-0 h-0.5 bg-[#fb5607] group-hover:w-8 transition-all duration-300 mr-0 group-hover:mr-3"></span>
              EVENTS
            </span>
            <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-[#fb5607] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-8 w-full rounded-xl bg-gradient-to-r from-[#fb5607] to-[#ff6b6b] px-6 py-4 text-base font-bold text-white shadow-[0_8px_30px_rgba(251,86,7,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_40px_rgba(251,86,7,0.6)] active:scale-95"
            style={{ fontFamily: 'var(--font-antonio)' }}
          >
            JOIN NOW [+]
          </button>
        </nav>
      </div>
    </header>
  );
}

