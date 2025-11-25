'use client';

import { useState, useEffect, useRef } from 'react';

export default function JoinThe1PercentFitClub() {
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
      {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  const benefits = [
    {
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Personalized Plans',
      description: 'Customized workout and nutrition programs tailored to your unique biology and goals.'
    },
    {
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Elite Coaching',
      description: 'Direct access to world-class trainers who guide your every step.'
    },
    {
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Holistic Approach',
      description: 'Integrating physical training, mental resilience, and social connection.'
    },
    {
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Advanced Tracking',
      description: 'Data-driven insights to monitor your progress and optimize performance.'
    }
  ];

  return (
    <section
      id="1-percent-club"
      ref={sectionRef}
      className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{
        fontFamily: 'var(--font-antonio)',
        backgroundColor: '#000000'
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(251, 86, 7, 0.4) 1px, transparent 0)',
          backgroundSize: '50px 50px'
        }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      <div className="relative mx-auto max-w-7xl text-center z-10">

        {/* Header Section */}
        <div
          className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2
            className="mb-6 text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-tighter"
            style={{ textShadow: '0 0 40px rgba(251,86,7,0.3)' }}
          >
            JOIN THE <span className="text-[#fb5607]">1% FIT CLUB</span>
          </h2>
          <p
            className="mx-auto max-w-3xl text-lg sm:text-xl text-gray-300 leading-relaxed"
            style={{ fontFamily: 'var(--font-geist-sans)' }}
          >
            This isn't just a gym. It's a movement. Commit to the process and unlock the version of yourself you were meant to be.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`group relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:bg-white/10 hover:border-[#fb5607]/50 hover:shadow-[0_10px_40px_rgba(251,86,7,0.2)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[#fb5607]/20 text-[#fb5607] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                {benefit.icon}
              </div>
              <h3 className="mb-3 text-2xl font-bold text-white tracking-wide">
                {benefit.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed" style={{ fontFamily: 'var(--font-geist-sans)' }}>
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button Area */}
        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
          <button
            className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-[#fb5607] to-[#ff6b6b] px-12 py-5 text-xl font-bold text-white shadow-[0_0_40px_rgba(251,86,7,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_60px_rgba(251,86,7,0.6)]"
          >
            <span className="relative z-10 tracking-widest">JOIN THE CLUB</span>
            <svg className="relative z-10 h-6 w-6 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#ff6b6b] to-[#fb5607] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </button>

          <p className="mt-6 text-sm text-gray-500 uppercase tracking-widest" style={{ fontFamily: 'var(--font-geist-sans)' }}>
            Limited Spots Available • No Commitment Required
          </p>
        </div>

      </div>
    </section>
  );
}



