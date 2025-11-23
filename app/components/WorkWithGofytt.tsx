'use client';

import { useEffect, useRef, useState } from 'react';

export default function WorkWithGofytt() {
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

  const cards = [
    { title: 'Corporate Wellness', desc: 'Programs tailored for teams to improve health and performance.' },
    { title: 'Brand Partnerships', desc: 'Collaborate on campaigns, events, and content.' },
    { title: 'Coaching & Consulting', desc: 'Expert guidance for athletes, creators, and organizations.' }
  ];

  return (
    <section
      ref={sectionRef}
      className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-10 xl:px-20"
      style={{ fontFamily: 'var(--font-antonio)', fontWeight: 700, backgroundColor: '#050505' }}
    >
      <div className="mx-auto max-w-7xl text-white">
        <div
          className={`mb-8 sm:mb-12 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl px-4">Work with Gofytt</h2>
          <p
            className="mx-auto max-w-2xl text-sm sm:text-base text-gray-300 lg:text-lg px-4"
            style={{ fontFamily: 'var(--font-geist-sans)', fontWeight: 400 }}
          >
            Let's build meaningful outcomes together.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, idx) => (
            <article
              key={c.title}
              className="rounded-2xl sm:rounded-3xl border border-white/10 bg-gradient-to-br from-[#2c0d54] via-[#1e0839] to-[#0f0420] p-6 sm:p-8 shadow-[0_18px_40px_rgba(0,0,0,0.35)] transition-all duration-500 hover:-translate-y-2"
              style={{ animation: isVisible ? `fadeInUp 0.6s ease-out ${idx * 120}ms both` : 'none' }}
            >
              <h3 className="mb-2 text-xl sm:text-2xl">{c.title}</h3>
              <p
                className="text-sm sm:text-base text-gray-300"
                style={{ fontFamily: 'var(--font-geist-sans)', fontWeight: 400 }}
              >
                {c.desc}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-8 sm:mt-10 text-center px-4">
          <a
            href="mailto:hello@gofytt.com"
            className="inline-block rounded-xl bg-gradient-to-r from-[#fb5607] to-[#ff6b6b] px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-bold text-white shadow-[0_8px_30px_rgba(251,86,7,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_40px_rgba(251,86,7,0.6)]"
          >
            Start a Conversation
          </a>
        </div>
      </div>
    </section>
  );
}


