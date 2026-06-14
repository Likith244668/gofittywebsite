'use client';

import { useEffect, useRef, useState } from 'react';

type JourneyStage = {
  stage: string;
  phase: string;
  title: string;
  description: string;
};

// Narrative echoes the Vision section's voice — the one hour of training
// that earns "the other 23 hours". Plain-spoken, not abstract.
const journeyStages: JourneyStage[] = [
  {
    stage: '01',
    phase: 'Day One',
    title: 'The Spark',
    description: 'You show up. One hour, no excuses. The first rep is the decision to begin.',
  },
  {
    stage: '02',
    phase: 'The Habit',
    title: 'The Rhythm',
    description: 'Showing up stops being a battle. The hour becomes the fixed point your day is built around.',
  },
  {
    stage: '03',
    phase: 'Beyond the Gym',
    title: 'The Carryover',
    description: 'The discipline leaks out — into your work, your relationships, the way you handle a hard day.',
  },
  {
    stage: '04',
    phase: 'The New Normal',
    title: 'The Shift',
    description: 'The line between “gym you” and “real you” disappears. You train for a life, not a look.',
  },
  {
    stage: '05',
    phase: 'Fully Lived',
    title: 'Full Capacity',
    description: 'Energy without a ceiling. You don’t just get through the day — you meet it at full strength.',
  },
];

const ACCENT = '#fb5607';

export default function TheGofyttPath() {
  const [activeStage, setActiveStage] = useState(0);
  const [headerIn, setHeaderIn] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const stageRefs = useRef<(HTMLDivElement | null)[]>([]);

  // One-time header reveal.
  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderIn(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  // Active stage via IntersectionObserver (no per-frame state); the line fill
  // is written straight to the DOM on a rAF, so scrolling never re-renders.
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveStage(Number((entry.target as HTMLElement).dataset.index));
          }
        }
      },
      { rootMargin: '-50% 0px -45% 0px', threshold: 0 }
    );
    stageRefs.current.forEach((ref) => ref && io.observe(ref));

    let raf = 0;
    const draw = () => {
      raf = 0;
      const track = timelineRef.current;
      const fill = fillRef.current;
      if (!track || !fill) return;
      const rect = track.getBoundingClientRect();
      const mid = window.innerHeight * 0.5;
      const progress = Math.min(Math.max((mid - rect.top) / rect.height, 0), 1);
      fill.style.height = `${progress * 100}%`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(draw);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    draw();

    return () => {
      io.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="path-heading"
      className="relative w-full overflow-hidden bg-[#050505] px-5 py-24 sm:px-8 sm:py-32 lg:py-40"
    >
      {/* One faint ambient glow. */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/4 h-[560px] w-[560px] -translate-x-1/2 rounded-full opacity-[0.12]"
        style={{ background: `radial-gradient(circle, ${ACCENT} 0%, transparent 70%)`, filter: 'blur(130px)' }}
      />

      <div className="relative z-10 mx-auto max-w-2xl">
        {/* Header */}
        <header
          className={`text-center transition-all duration-700 ease-out ${
            headerIn ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          <span
            className="text-xs font-bold uppercase tracking-[0.4em] text-[#fb5607]"
            style={{ fontFamily: 'var(--font-antonio)' }}
          >
            The Journey
          </span>
          <h2
            id="path-heading"
            className="mt-5 text-5xl font-bold uppercase leading-[0.95] tracking-tight text-white sm:text-6xl"
            style={{ fontFamily: 'var(--font-antonio)' }}
          >
            From one hour to a whole <span className="text-[#fb5607]">life</span>
          </h2>
        </header>

        {/* Timeline */}
        <div ref={timelineRef} className="relative mt-20 sm:mt-24">
          {/* The line — a hairline track with an accent fill that follows scroll. */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-white/10">
            <div
              ref={fillRef}
              className="w-full bg-gradient-to-b from-[#ff6b35] to-[#fb5607]"
              style={{ height: '0%' }}
            />
          </div>

          <div className="space-y-14 sm:space-y-16">
            {journeyStages.map((stage, index) => {
              const isActive = index <= activeStage;

              return (
                <div
                  key={stage.stage}
                  ref={(el) => {
                    stageRefs.current[index] = el;
                  }}
                  data-index={index}
                  className="relative grid grid-cols-[auto_1fr] items-start gap-6 pl-8 sm:gap-8 sm:pl-12"
                >
                  {/* Node on the line. */}
                  <span
                    aria-hidden
                    className="absolute left-0 top-3 h-2.5 w-2.5 -translate-x-1/2 rounded-full transition-all duration-500"
                    style={{
                      backgroundColor: isActive ? ACCENT : '#2a2a2a',
                      boxShadow: isActive ? `0 0 0 4px ${ACCENT}1a, 0 0 18px ${ACCENT}80` : 'none',
                    }}
                  />

                  {/* Oversized index numeral — carries the visual weight. */}
                  <span
                    className="select-none text-5xl font-bold leading-none tracking-tighter transition-colors duration-500 sm:text-6xl"
                    style={{
                      fontFamily: 'var(--font-antonio)',
                      color: isActive ? ACCENT : 'rgba(255,255,255,0.12)',
                    }}
                  >
                    {stage.stage}
                  </span>

                  {/* Copy. */}
                  <div
                    className="transition-opacity duration-500"
                    style={{ opacity: isActive ? 1 : 0.45 }}
                  >
                    <span className="text-[0.7rem] font-medium uppercase tracking-[0.25em] text-white/45">
                      {stage.phase}
                    </span>
                    <h3
                      className="mt-1.5 text-2xl font-bold uppercase tracking-tight text-white sm:text-[1.7rem]"
                      style={{ fontFamily: 'var(--font-antonio)' }}
                    >
                      {stage.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-white/55">
                      {stage.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA — matches the Vision section's button system. */}
        <div className="mt-20 flex justify-center sm:mt-24">
          <button
            type="button"
            className="group inline-flex items-center gap-3 rounded-full bg-[#fb5607] px-8 py-4 text-sm font-bold uppercase tracking-[0.08em] text-white shadow-[0_12px_34px_-8px_rgba(251,86,7,0.6)] transition-colors duration-300 hover:bg-[#ff6b35] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fb5607] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
            style={{ fontFamily: 'var(--font-antonio)' }}
          >
            Start the journey
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
        </div>
      </div>
    </section>
  );
}
