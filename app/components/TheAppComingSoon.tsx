'use client';

import { useEffect, useRef, useState } from 'react';

export default function TheAppComingSoon() {
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
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );
    const current = sectionRef.current;
    if (current) observer.observe(current);
    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-10 xl:px-20"
      style={{ fontFamily: 'var(--font-antonio)', fontWeight: 700, backgroundColor: '#000000' }}
    >
      <div className="mx-auto max-w-7xl text-white">
        <div
          className={`mx-auto max-w-3xl rounded-2xl sm:rounded-3xl border border-white/10 bg-gradient-to-br from-black via-[#1a0600] to-[#0a0300] p-6 sm:p-8 lg:p-10 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <p className="mb-2 text-xl sm:text-2xl lg:text-3xl">The App</p>
          <h2 className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">Coming Soon</h2>
          <p
            className="mx-auto mb-6 sm:mb-8 max-w-xl text-sm sm:text-base text-gray-300 lg:text-lg px-4"
            style={{ fontFamily: 'var(--font-geist-sans)', fontWeight: 400 }}
          >
            Track workouts, personalize nutrition, join challenges, and connect with coaches — all in one place.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center px-4">
            <button className="rounded-xl bg-white px-6 py-3 text-sm sm:text-base font-bold text-black hover:bg-gray-100 transition-colors">
              Get Notified
            </button>
            <button className="rounded-xl border-2 border-white/20 bg-white/5 px-6 py-3 text-sm sm:text-base font-bold text-white hover:border-white/40 hover:bg-white/10 transition-all">
              View Feature Roadmap
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}


