'use client';

import { useState, useEffect, useRef, type ReactNode } from 'react';
import Image from 'next/image';

type Coach = {
  id: string;
  name: string;
  specialization: string;
  experience: string;
  image: string;
};

type Program = {
  id: string;
  title: string;
  description: string;
  duration: string;
  features: string[];
  icon: ReactNode;
};

const coaches: Coach[] = [
  {
    id: '1',
    name: 'Sarah Mitchell',
    specialization: 'Strength & Conditioning',
    experience: '10+ yrs',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: '2',
    name: 'Marcus Johnson',
    specialization: 'Nutrition & Wellness',
    experience: '8+ yrs',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: '3',
    name: 'Priya Sharma',
    specialization: 'Yoga & Mindfulness',
    experience: '12+ yrs',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: '4',
    name: 'David Chen',
    specialization: 'Athletic Performance',
    experience: '15+ yrs',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80',
  },
];

const programs: Program[] = [
  {
    id: '1',
    title: 'Personal Training',
    description: 'One-on-one coaching tailored to your goals and fitness level.',
    duration: '12 Weeks',
    features: ['Custom workout plans', 'Weekly 1-on-1 sessions', 'Nutrition guidance'],
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    id: '2',
    title: 'Group Coaching',
    description: 'Train with a small group for motivation and accountability.',
    duration: '8 Weeks',
    features: ['Small groups (max 6)', 'Shared challenges', 'Weekly check-ins'],
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    id: '3',
    title: 'Lifestyle Mentorship',
    description: 'Holistic coaching across fitness, nutrition, mindset and balance.',
    duration: '16 Weeks',
    features: ['360° assessment', 'Habit transformation', 'Sleep & stress'],
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    id: '4',
    title: 'Online Coaching',
    description: 'Flexible remote coaching with virtual sessions and app support.',
    duration: 'Ongoing',
    features: ['Virtual sessions', 'App-based tracking', 'Video form analysis'],
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
];

const fontDisplay = { fontFamily: 'var(--font-antonio)', fontWeight: 700 } as const;
const fontBody = { fontFamily: 'var(--font-geist-sans)' } as const;
const fontMono = { fontFamily: 'var(--font-geist-mono)' } as const;

export default function GofyttAcademy() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const reveal = (delay: number) =>
    isVisible
      ? { animation: `fadeInUp 0.7s ease-out ${delay}ms both` }
      : { opacity: 0 };

  return (
    <section
      ref={sectionRef}
      aria-label="Gofytt Academy"
      className="relative overflow-hidden bg-black px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute -top-24 left-1/2 h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-[#fb5607] opacity-15 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-16 text-center sm:mb-20" style={reveal(0)}>
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#fb5607]" />
            <span className="text-[11px] uppercase tracking-[0.35em] text-[#fb5607]" style={fontMono}>
              The Academy
            </span>
            <span className="h-px w-8 bg-[#fb5607]" />
          </div>
          <h2
            className="text-4xl uppercase leading-[0.95] tracking-tight text-white sm:text-5xl md:text-6xl"
            style={fontDisplay}
          >
            Train with GoFytt coaches
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-gray-400 sm:text-lg" style={fontBody}>
            Lifestyle mentorship that transforms not just your body, but your entire life.
          </p>
        </div>

        {/* Coaches */}
        <div className="mb-24 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {coaches.map((coach, index) => (
            <article
              key={coach.id}
              className="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a]"
              style={reveal(100 + index * 100)}
            >
              <Image
                src={coach.image}
                alt={coach.name}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
              />
              {/* Readability gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              {/* Orange ring on hover */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-transparent transition-all duration-500 group-hover:ring-[#fb5607]/60" />

              {/* Experience badge */}
              <span
                className="absolute right-3 top-3 rounded-full border border-white/15 bg-black/40 px-2.5 py-1 text-[10px] uppercase tracking-wider text-white backdrop-blur-sm"
                style={fontMono}
              >
                {coach.experience}
              </span>

              {/* Name + specialization */}
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                <p className="text-[11px] uppercase tracking-[0.18em] text-[#fb5607]" style={fontMono}>
                  {coach.specialization}
                </p>
                <h3 className="mt-1 text-xl uppercase leading-tight text-white sm:text-2xl" style={fontDisplay}>
                  {coach.name}
                </h3>
              </div>
            </article>
          ))}
        </div>

        {/* Programs */}
        <div className="mb-12 flex items-end justify-between gap-6" style={reveal(150)}>
          <h3 className="text-3xl uppercase tracking-tight text-white sm:text-4xl" style={fontDisplay}>
            Choose your program
          </h3>
          <span className="hidden text-sm text-gray-500 sm:block" style={fontBody}>
            Four ways to start.
          </span>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {programs.map((program, index) => (
            <div
              key={program.id}
              className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#fb5607]/50 hover:bg-white/[0.04]"
              style={reveal(200 + index * 90)}
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#fb5607]/10 text-[#fb5607] transition-colors duration-300 group-hover:bg-[#fb5607] group-hover:text-white">
                {program.icon}
              </div>

              <div className="mb-2 flex items-center gap-2 text-[11px] uppercase tracking-wider text-gray-500" style={fontMono}>
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {program.duration}
              </div>

              <h4 className="mb-2 text-xl uppercase leading-tight text-white" style={fontDisplay}>
                {program.title}
              </h4>
              <p className="mb-5 text-sm leading-relaxed text-gray-400" style={fontBody}>
                {program.description}
              </p>

              <ul className="mt-auto space-y-2 border-t border-white/5 pt-4">
                {program.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5 text-sm text-gray-300" style={fontBody}>
                    <svg className="h-4 w-4 flex-shrink-0 text-[#fb5607]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="mt-20 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#160600] to-[#0a0a0a] px-8 py-12 text-center sm:px-12 sm:py-14"
          style={reveal(300)}
        >
          <h3 className="text-2xl uppercase leading-tight text-white sm:text-3xl md:text-4xl" style={fontDisplay}>
            Ready to transform your life?
          </h3>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-gray-400" style={fontBody}>
            Get personalized coaching from certified experts and become 1% better every day.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              type="button"
              className="w-full rounded-xl bg-[#fb5607] px-8 py-3.5 text-base font-semibold text-white shadow-[0_8px_30px_rgba(251,86,7,0.35)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_12px_40px_rgba(251,86,7,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fb5607] focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:w-auto"
              style={fontBody}
            >
              Book a free consultation
            </button>
            <button
              type="button"
              className="w-full rounded-xl border border-white/15 bg-white/5 px-8 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:border-white/30 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 sm:w-auto"
              style={fontBody}
            >
              View all programs
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
