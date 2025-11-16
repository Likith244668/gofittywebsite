'use client';

import { useEffect, useRef, useState } from 'react';

export default function AmbassadorProgram() {
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
      className="py-24 px-6 sm:px-10 lg:px-20"
      style={{ fontFamily: 'var(--font-antonio)', fontWeight: 700, backgroundColor: '#151515' }}
    >
      <div className="mx-auto max-w-7xl text-white">
        <div
          className={`mb-12 text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="mb-4 text-3xl sm:text-4xl md:text-5xl">Ambassador Programme</h2>
          <p
            className="mx-auto max-w-2xl text-base text-gray-300 sm:text-lg"
            style={{ fontFamily: 'var(--font-geist-sans)', fontWeight: 400 }}
          >
            Become the face of the 1% Fit Club. Inspire, lead, and grow with Gofytt.
          </p>
        </div>

        <div
          className={`grid gap-6 sm:grid-cols-2 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#2c0d54] via-[#1e0839] to-[#0f0420] p-8">
            <h3 className="mb-3 text-2xl">Perks</h3>
            <ul
              className="space-y-2 text-gray-300"
              style={{ fontFamily: 'var(--font-geist-sans)', fontWeight: 400 }}
            >
              <li>• Revenue share on referrals</li>
              <li>• Exclusive events and drops</li>
              <li>• Training with elite coaches</li>
              <li>• Personal brand amplification</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-3 text-2xl">Apply Now</h3>
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                alert('Thanks! We will be in touch shortly.');
              }}
            >
              <input
                placeholder="Full name"
                className="w-full rounded-lg bg-white/5 px-3 py-2 text-sm text-white outline-none ring-1 ring-white/10 focus:ring-white/30"
                style={{ fontFamily: 'var(--font-geist-sans)', fontWeight: 400 }}
                required
              />
              <input
                placeholder="Email"
                type="email"
                className="w-full rounded-lg bg-white/5 px-3 py-2 text-sm text-white outline-none ring-1 ring-white/10 focus:ring-white/30"
                style={{ fontFamily: 'var(--font-geist-sans)', fontWeight: 400 }}
                required
              />
              <textarea
                placeholder="Tell us why you'd be a great ambassador"
                className="w-full rounded-lg bg-white/5 px-3 py-2 text-sm text-white outline-none ring-1 ring-white/10 focus:ring-white/30"
                style={{ fontFamily: 'var(--font-geist-sans)', fontWeight: 400 }}
                rows={4}
              />
              <button
                className="w-full rounded-xl bg-gradient-to-r from-[#fb5607] to-[#ff6b6b] px-6 py-3 text-sm font-bold text-white shadow-[0_8px_30px_rgba(251,86,7,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_40px_rgba(251,86,7,0.6)]"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}


