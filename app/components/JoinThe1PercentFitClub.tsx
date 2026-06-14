'use client';

import { useEffect, useRef, useState } from 'react';

type Benefit = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

// On-brand benefits — the "1% Club" is about the life around the hour, not just
// the workout. Each line ties back to the page's spine: the full spectrum and
// the "other 23 hours".
const benefits: Benefit[] = [
  {
    title: 'The full spectrum',
    description: 'Physical, mental, social, nutrition and medical — in one place.',
    icon: (
      <svg className="h-[18px] w-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: 'Coaching beyond the gym',
    description: 'Guidance built around your life, not just your hour of training.',
    icon: (
      <svg className="h-[18px] w-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 22a10 10 0 100-20 10 10 0 000 20z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 8l-2.5 5.5L8 16l2.5-5.5L16 8z" />
      </svg>
    ),
  },
  {
    title: 'A community that pulls you up',
    description: 'Accountability and belonging with people chasing the same standard.',
    icon: (
      <svg className="h-[18px] w-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'Progress you can feel',
    description: 'Track the hour, watch it compound across the other twenty-three.',
    icon: (
      <svg className="h-[18px] w-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 17l6-6 4 4 8-8m0 0h-5m5 0v5" />
      </svg>
    ),
  },
];

const ACCENT = '#fb5607';

export default function JoinThe1PercentFitClub() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // One-time, calm reveal — matches the Vision / Path sections.
  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const reveal = `transition-all duration-700 ease-out ${
    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
  }`;

  return (
    <section
      id="1-percent-club"
      ref={sectionRef}
      aria-labelledby="club-heading"
      className="relative w-full overflow-hidden bg-[#070707] px-5 py-20 sm:px-8 sm:py-24 lg:px-12"
    >
      {/* One soft ambient glow, anchored under the card. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-20 right-[-3rem] h-[400px] w-[400px] rounded-full opacity-[0.14]"
        style={{ background: `radial-gradient(circle, ${ACCENT} 0%, transparent 70%)`, filter: 'blur(100px)' }}
      />

      <div className="relative z-10 mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        {/* ── Left: the invitation ─────────────────────────────── */}
        <div>
          {/* Editorial eyebrow */}
          <div className={`flex items-center gap-4 ${reveal}`}>
            <span className="h-1.5 w-1.5 rounded-full bg-[#fb5607]" />
            <span
              className="text-xs font-bold uppercase tracking-[0.35em] text-[#fb5607]"
              style={{ fontFamily: 'var(--font-antonio)' }}
            >
              Membership
            </span>
            <span className="h-px flex-1 bg-white/10" />
          </div>

          <h2
            id="club-heading"
            className={`mt-5 text-4xl font-bold uppercase leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-6xl ${reveal}`}
            style={{ fontFamily: 'var(--font-antonio)', transitionDelay: '80ms' }}
          >
            Join the <span className="text-[#fb5607]">1% Club</span>
          </h2>

          <p
            className={`mt-5 max-w-md text-[15px] leading-relaxed text-white/55 ${reveal}`}
            style={{ fontFamily: 'var(--font-geist-sans)', transitionDelay: '140ms' }}
          >
            The gym is the spark — the life you build with that energy is the fire. The 1% Club is for
            people who refuse to leave it at the door. Not a membership. A standard.
          </p>

          {/* Benefits — a clean editorial checklist, not a card grid. */}
          <ul
            className={`mt-8 divide-y divide-white/10 border-y border-white/10 ${reveal}`}
            style={{ transitionDelay: '200ms' }}
          >
            {benefits.map((benefit) => (
              <li
                key={benefit.title}
                className="group flex items-start gap-3.5 py-3.5 transition-colors duration-300"
              >
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-[#fb5607]/10 text-[#fb5607] transition-colors duration-300 group-hover:bg-[#fb5607]/15">
                  {benefit.icon}
                </span>
                <div className="min-w-0">
                  <h3
                    className="text-[15px] font-bold uppercase tracking-wide text-white"
                    style={{ fontFamily: 'var(--font-antonio)' }}
                  >
                    {benefit.title}
                  </h3>
                  <p
                    className="mt-0.5 text-[13px] leading-relaxed text-white/50"
                    style={{ fontFamily: 'var(--font-geist-sans)' }}
                  >
                    {benefit.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          {/* CTA — matches the house primary button. */}
          <div className={reveal} style={{ transitionDelay: '260ms' }}>
            <button
              type="button"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#fb5607] px-7 py-3.5 text-sm font-bold uppercase tracking-[0.08em] text-white shadow-[0_12px_34px_-8px_rgba(251,86,7,0.6)] transition-colors duration-300 hover:bg-[#ff6b35] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fb5607] focus-visible:ring-offset-2 focus-visible:ring-offset-[#070707]"
              style={{ fontFamily: 'var(--font-antonio)' }}
            >
              Claim your place
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>

            <p
              className="mt-4 text-[0.65rem] uppercase tracking-[0.25em] text-white/35"
              style={{ fontFamily: 'var(--font-geist-sans)' }}
            >
              Limited founding spots · No commitment required
            </p>
          </div>
        </div>

        {/* ── Right: the member card ───────────────────────────── */}
        <div className={reveal} style={{ transitionDelay: '180ms' }}>
          <div className="relative mx-auto w-full max-w-[280px]">
            {/* Glow lifting the card off the canvas. */}
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-3 rounded-[1.75rem] opacity-60"
              style={{ background: `radial-gradient(60% 60% at 50% 40%, ${ACCENT}22 0%, transparent 70%)` }}
            />

            <article
              className="group relative aspect-[5/7] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#181818] to-[#080808] p-6 transition-transform duration-500 hover:-translate-y-1"
              style={{ boxShadow: '0 36px 80px -40px rgba(0,0,0,0.9)' }}
            >
              {/* Sheen that sweeps across on hover. */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.06] to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-full"
              />

              <div className="relative flex h-full flex-col">
                {/* Header row */}
                <div className="flex items-center justify-between">
                  <span
                    className="text-base font-bold uppercase tracking-[0.22em] text-white"
                    style={{ fontFamily: 'var(--font-antonio)' }}
                  >
                    Gofytt
                  </span>
                  <span className="flex items-center gap-1.5 text-[0.55rem] font-bold uppercase tracking-[0.28em] text-[#fb5607]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#fb5607]" />
                    Member
                  </span>
                </div>

                {/* The 1% mark — the hero of the card. */}
                <div className="mt-auto">
                  <div
                    className="text-6xl font-bold leading-none tracking-tighter text-white sm:text-7xl"
                    style={{ fontFamily: 'var(--font-antonio)' }}
                  >
                    1<span className="text-[#fb5607]">%</span>
                  </div>
                  <div
                    className="mt-1.5 text-xs font-bold uppercase tracking-[0.4em] text-white/40"
                    style={{ fontFamily: 'var(--font-antonio)' }}
                  >
                    Club
                  </div>
                </div>

                {/* Spectrum strip — a quiet callback to The Full Spectrum. */}
                <div className="mt-6 flex gap-1.5">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <span
                      key={i}
                      className="h-1 flex-1 rounded-full"
                      style={{ backgroundColor: ACCENT, opacity: 0.35 + i * 0.16 }}
                    />
                  ))}
                </div>

                {/* Footer row */}
                <div className="mt-5 flex items-end justify-between">
                  <div>
                    <div className="text-[0.5rem] uppercase tracking-[0.3em] text-white/35">Member No.</div>
                    <div
                      className="mt-1 text-sm font-bold tracking-[0.18em] text-white"
                      style={{ fontFamily: 'var(--font-antonio)' }}
                    >
                      001 — 2026
                    </div>
                  </div>
                  <div className="text-[0.5rem] uppercase tracking-[0.3em] text-white/35">Full Access</div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
