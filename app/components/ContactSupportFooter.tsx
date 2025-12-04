'use client';

import { useEffect, useRef, useState } from 'react';
import GofyttWord from './ui/GofyttWord';

export default function ContactSupportFooter() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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
      { threshold: 0.1 }
    );
    const current = sectionRef.current;
    if (current) observer.observe(current);
    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <footer
      ref={sectionRef}
      className="relative pt-20 pb-10 overflow-hidden bg-[#050505]"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#1a0b2e_0%,_transparent_40%)] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>

          {/* Brand Column (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <a href="/" className="inline-block">
              <GofyttWord
                logoSize={40}
                textClassName="text-[#fb5607] font-bold text-4xl uppercase tracking-tight"
                className="font-bold"
              />
            </a>
            <p className="text-gray-400 text-base leading-relaxed max-w-sm" style={{ fontFamily: 'var(--font-geist-sans)' }}>
              Empowering the 1% to achieve peak performance through elite training, community, and mindset. Join the revolution.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-2">
              {['twitter', 'instagram', 'linkedin', 'youtube'].map((social) => (
                <a
                  key={social}
                  href={`#${social}`}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#fb5607] hover:scale-110 transition-all duration-300"
                  aria-label={`Follow us on ${social}`}
                >
                  {/* Simple Icon Placeholders */}
                  <div className="w-5 h-5 bg-current opacity-80" style={{ maskImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='12' cy='12' r='10' fill='currentColor'/%3E%3C/svg%3E")`, maskSize: 'contain' }} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns (2 cols each) */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wider" style={{ fontFamily: 'var(--font-antonio)' }}>
              Explore
            </h3>
            <ul className="space-y-4">
              {['Home', 'About', 'The 1% Club', 'Events'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-[#fb5607] transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wider" style={{ fontFamily: 'var(--font-antonio)' }}>
              Support
            </h3>
            <ul className="space-y-4">
              {['Contact Us', 'FAQ', 'Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-[#fb5607] transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column (4 cols) */}
          <div className="lg:col-span-4">
            <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wider" style={{ fontFamily: 'var(--font-antonio)' }}>
              Stay in the Loop
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to our newsletter for exclusive tips, updates, and offers.
            </p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#fb5607] transition-colors"
              />
              <button
                type="submit"
                className="w-full px-4 py-3 rounded-lg bg-[#fb5607] text-white font-bold uppercase tracking-wide hover:bg-[#ff6b1f] transition-all hover:shadow-[0_0_20px_rgba(251,86,7,0.4)]"
                style={{ fontFamily: 'var(--font-antonio)' }}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs sm:text-sm">
            © {new Date().getFullYear()} Gofytt. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-gray-600 text-xs uppercase tracking-widest">Designed for the 1%</span>
          </div>
        </div>
      </div>
    </footer>
  );
}


