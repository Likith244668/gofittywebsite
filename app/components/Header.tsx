'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import GofyttWord from './ui/GofyttWord';

interface DropdownItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href?: string;
  dropdown?: DropdownItem[];
}

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const navItems: NavItem[] = [
    { label: 'HOME', href: '/' },
    {
      label: 'ABOUT',
      dropdown: [
        { label: 'Vision', href: '/#about' },
        { label: 'Triangle', href: '/#community-space' },
        { label: 'Team', href: '/#team' },
      ],
    },
    {
      label: '1% FIT CLUB',
      dropdown: [
        { label: 'About Club', href: '/#1-percent-club' },
        { label: 'Voice of 1%ers', href: '/#voice' },
        { label: 'Ambassadors', href: '/#ambassadors' },
      ],
    },
    {
      label: 'GOFYTT ACADEMY', href: '/#gofytt-academy'

    },
    {
      label: 'EVENTS',
      dropdown: [
        { label: 'All Events', href: '/events-and-experiences' },
        { label: 'Experiences', href: '/events-and-experiences#experiences' },
        { label: 'Community', href: '/events-and-experiences#community' },
      ],
    },
  ];

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

  const handleMouseEnter = (label: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const toggleMobileDropdown = (label: string) => {
    setMobileActiveDropdown(mobileActiveDropdown === label ? null : label);
  };

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-opacity duration-300 ease-out ${isVisible ? 'opacity-100 animate-header-fade-in' : 'opacity-0 pointer-events-none'
        }`}
      style={{ willChange: 'opacity' }}
    >
      {/* Main header content with solid background */}
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
          <div className="relative bg-[#1a1a1a] rounded-full px-4 xl:px-6 py-2.5 xl:py-3 flex items-center gap-1 xl:gap-2 border border-[#2a2a2a] shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdown && handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    className="relative text-white font-bold uppercase text-xs xl:text-sm whitespace-nowrap transition-all duration-300 hover:text-[#fb5607] hover:scale-105 group/link px-3 py-2 block"
                    style={{ fontFamily: 'var(--font-antonio)' }}
                  >
                    <span className="relative z-10">{item.label}</span>
                    <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#fb5607]/0 via-[#fb5607]/20 to-[#fb5607]/0 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 blur-sm"></span>
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-[#fb5607] to-transparent group-hover/link:w-full transition-all duration-300"></span>
                  </a>
                ) : (
                  <button
                    className="relative text-white font-bold uppercase text-xs xl:text-sm whitespace-nowrap transition-all duration-300 hover:text-[#fb5607] hover:scale-105 group/link px-3 py-2 flex items-center gap-1"
                    style={{ fontFamily: 'var(--font-antonio)' }}
                  >
                    <span className="relative z-10">{item.label}</span>
                    <svg
                      className={`w-3 h-3 transition-transform duration-300 ${activeDropdown === item.label ? 'rotate-180' : ''
                        }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                    <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#fb5607]/0 via-[#fb5607]/20 to-[#fb5607]/0 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 blur-sm"></span>
                  </button>
                )}

                {/* Dropdown Menu */}
                {item.dropdown && (
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 backdrop-blur-xl bg-black/90 border border-[#2a2a2a] rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] overflow-hidden transition-all duration-300 ${activeDropdown === item.label
                      ? 'opacity-100 visible translate-y-0'
                      : 'opacity-0 invisible -translate-y-2'
                      }`}
                  >
                    <div className="py-2">
                      {item.dropdown.map((dropdownItem, index) => (
                        <a
                          key={index}
                          href={dropdownItem.href}
                          className="block px-4 py-3 text-white/90 hover:text-[#fb5607] hover:bg-white/5 transition-all duration-200 text-sm font-semibold"
                          style={{ fontFamily: 'var(--font-antonio)' }}
                          onClick={() => setActiveDropdown(null)}
                        >
                          {dropdownItem.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </nav>

        {/* Right Side - Logo (Desktop) / Menu Button (Mobile) */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Fit Club Logo - Desktop */}
          <button className="hidden sm:flex items-center justify-center hover:scale-110 transition-all duration-300 flex-shrink-0">
            <Image
              src="/fit-club.png"
              alt="Fit Club"
              width={70}
              height={70}
              className="object-contain"
            />
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
        <nav className="flex flex-col h-full pt-8 px-6 overflow-y-auto">
          {navItems.map((item) => (
            <div key={item.label} className="border-b border-gray-800/50">
              {item.href ? (
                <a
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="group relative text-white font-bold uppercase text-lg py-5 hover:text-[#fb5607] transition-all duration-300 block"
                  style={{ fontFamily: 'var(--font-antonio)' }}
                >
                  <span className="relative z-10 flex items-center">
                    <span className="inline-block w-0 h-0.5 bg-[#fb5607] group-hover:w-8 transition-all duration-300 mr-0 group-hover:mr-3"></span>
                    {item.label}
                  </span>
                  <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-[#fb5607] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              ) : (
                <>
                  <button
                    onClick={() => toggleMobileDropdown(item.label)}
                    className="group relative text-white font-bold uppercase text-lg py-5 hover:text-[#fb5607] transition-all duration-300 w-full text-left flex items-center justify-between"
                    style={{ fontFamily: 'var(--font-antonio)' }}
                  >
                    <span className="relative z-10 flex items-center">
                      <span className="inline-block w-0 h-0.5 bg-[#fb5607] group-hover:w-8 transition-all duration-300 mr-0 group-hover:mr-3"></span>
                      {item.label}
                    </span>
                    <svg
                      className={`w-5 h-5 transition-transform duration-300 ${mobileActiveDropdown === item.label ? 'rotate-180' : ''
                        }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {item.dropdown && (
                    <div
                      className={`overflow-hidden transition-all duration-300 ${mobileActiveDropdown === item.label ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                    >
                      <div className="pl-6 pb-3">
                        {item.dropdown.map((dropdownItem, index) => (
                          <a
                            key={index}
                            href={dropdownItem.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block py-2.5 text-white/80 hover:text-[#fb5607] transition-colors text-base"
                            style={{ fontFamily: 'var(--font-antonio)' }}
                          >
                            {dropdownItem.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="transition-all duration-300 hover:scale-110 active:scale-95"
            >
              <Image
                src="/fit-club.png"
                alt="Fit Club"
                width={100}
                height={100}
                className="object-contain"
              />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

