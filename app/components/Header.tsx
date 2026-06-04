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
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);

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
    { label: 'GOFYTT ACADEMY', href: '/#gofytt-academy' },
    {
      label: 'EVENTS',
      dropdown: [
        { label: 'All Events', href: '/events-and-experiences' },
        { label: 'Experiences', href: '/events-and-experiences#experiences' },
        { label: 'Community', href: '/events-and-experiences#community' },
      ],
    },
  ];

  // Frosted-glass treatment kicks in once the user leaves the very top
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on outside click + lock body scroll while open
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

  const toggleMobileDropdown = (label: string) => {
    setMobileActiveDropdown(mobileActiveDropdown === label ? null : label);
  };

  return (
    <header
      ref={headerRef}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-out ${
        scrolled
          ? 'bg-black/70 shadow-[0_8px_30px_rgba(0,0,0,0.5)] backdrop-blur-xl'
          : 'bg-gradient-to-b from-black/70 via-black/25 to-transparent'
      }`}
    >
      <div
        className={`flex items-center justify-between px-4 transition-all duration-300 sm:px-6 lg:px-10 ${
          scrolled ? 'py-2.5' : 'py-4 sm:py-5'
        }`}
      >
        {/* Logo — Left */}
        <a href="/" className="flex flex-shrink-0 items-center transition-transform duration-300 hover:scale-[1.04]" aria-label="Gofytt home">
          <GofyttWord logoSize={scrolled ? 34 : 40} className="font-bold" />
        </a>

        {/* Navigation — Center (Desktop) */}
        <nav className="hidden flex-1 items-center justify-center gap-0.5 lg:flex">
          {navItems.map((item) => (
            <div key={item.label} className="group relative">
              {item.href ? (
                <a
                  href={item.href}
                  className="group/link relative block whitespace-nowrap rounded-full px-3.5 py-2 text-xs font-bold uppercase tracking-wide text-white/85 transition-colors duration-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fb5607]/70 xl:text-sm"
                  style={{ fontFamily: 'var(--font-antonio)' }}
                >
                  <span className="relative z-10">{item.label}</span>
                  <span className="absolute bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-[#fb5607] to-transparent transition-all duration-300 group-hover/link:w-2/3" />
                </a>
              ) : (
                <>
                  <button
                    className="flex items-center gap-1 whitespace-nowrap rounded-full px-3.5 py-2 text-xs font-bold uppercase tracking-wide text-white/85 transition-colors duration-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fb5607]/70 xl:text-sm"
                    style={{ fontFamily: 'var(--font-antonio)' }}
                    aria-haspopup="true"
                  >
                    <span>{item.label}</span>
                    <svg
                      className="h-3 w-3 transition-transform duration-300 group-hover:rotate-180 group-focus-within:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Dropdown — opens on hover and keyboard focus (CSS-driven) */}
                  {item.dropdown && (
                    <div className="invisible absolute left-1/2 top-full w-56 -translate-x-1/2 translate-y-1 pt-3 opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                      <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/90 shadow-[0_12px_40px_rgba(0,0,0,0.6)] backdrop-blur-xl">
                        <div className="py-2">
                          {item.dropdown.map((dropdownItem) => (
                            <a
                              key={dropdownItem.href}
                              href={dropdownItem.href}
                              className="block px-4 py-2.5 text-sm font-semibold text-white/85 transition-colors duration-200 hover:bg-[#fb5607]/10 hover:text-[#fb5607] focus-visible:bg-[#fb5607]/10 focus-visible:text-[#fb5607] focus-visible:outline-none"
                              style={{ fontFamily: 'var(--font-antonio)' }}
                            >
                              {dropdownItem.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </nav>

        {/* Right — CTA + Fit Club (Desktop) / Hamburger (Mobile) */}
        <div className="flex flex-shrink-0 items-center gap-3 sm:gap-4">
          <button className="hidden flex-shrink-0 items-center justify-center transition-transform duration-300 hover:scale-110 sm:flex" aria-label="Fit Club">
            <Image src="/fit-club.png" alt="Fit Club" width={scrolled ? 56 : 64} height={scrolled ? 56 : 64} className="object-contain transition-all duration-300" />
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center text-white transition-colors hover:text-[#fb5607] lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* ---------- Mobile Menu ---------- */}
      <div
        className={`fixed inset-0 top-0 z-40 transform bg-black/95 backdrop-blur-xl transition-transform duration-300 ease-in-out lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex h-full flex-col overflow-y-auto px-6 pb-10 pt-24">
          {navItems.map((item) => (
            <div key={item.label} className="border-b border-white/10">
              {item.href ? (
                <a
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="group relative block py-5 text-lg font-bold uppercase text-white transition-colors duration-300 hover:text-[#fb5607]"
                  style={{ fontFamily: 'var(--font-antonio)' }}
                >
                  <span className="relative z-10 flex items-center">
                    <span className="mr-0 inline-block h-0.5 w-0 bg-[#fb5607] transition-all duration-300 group-hover:mr-3 group-hover:w-8" />
                    {item.label}
                  </span>
                </a>
              ) : (
                <>
                  <button
                    onClick={() => toggleMobileDropdown(item.label)}
                    className="group flex w-full items-center justify-between py-5 text-left text-lg font-bold uppercase text-white transition-colors duration-300 hover:text-[#fb5607]"
                    style={{ fontFamily: 'var(--font-antonio)' }}
                    aria-expanded={mobileActiveDropdown === item.label}
                  >
                    <span className="relative z-10 flex items-center">
                      <span className="mr-0 inline-block h-0.5 w-0 bg-[#fb5607] transition-all duration-300 group-hover:mr-3 group-hover:w-8" />
                      {item.label}
                    </span>
                    <svg
                      className={`h-5 w-5 transition-transform duration-300 ${mobileActiveDropdown === item.label ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {item.dropdown && (
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        mobileActiveDropdown === item.label ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="pb-3 pl-6">
                        {item.dropdown.map((dropdownItem) => (
                          <a
                            key={dropdownItem.href}
                            href={dropdownItem.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block py-2.5 text-base text-white/80 transition-colors hover:text-[#fb5607]"
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

          {/* Mobile CTA */}
          <a
            href="/#1-percent-club"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#fb5607] px-8 py-4 text-base font-bold uppercase tracking-wide text-white shadow-[0_12px_40px_-8px_rgba(251,86,7,0.75)] transition-all duration-300 active:scale-95"
            style={{ fontFamily: 'var(--font-antonio)' }}
          >
            Join the 1% Fit Club
          </a>

          <div className="mt-8 flex justify-center">
            <button onClick={() => setIsMobileMenuOpen(false)} className="transition-all duration-300 hover:scale-110 active:scale-95" aria-label="Fit Club">
              <Image src="/fit-club.png" alt="Fit Club" width={96} height={96} className="object-contain" />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
