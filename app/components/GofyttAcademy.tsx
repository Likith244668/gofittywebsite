'use client';

import { useState, useEffect, useRef, type ReactNode } from 'react';
import Image from 'next/image';

type Coach = {
  id: string;
  name: string;
  specialization: string;
  experience: string;
  bio: string;
  image: string;
  achievements: string[];
  color: string;
};

type Program = {
  id: string;
  title: string;
  description: string;
  duration: string;
  features: string[];
  icon: ReactNode;
  color: string;
};

const coaches: Coach[] = [
  {
    id: '1',
    name: 'Sarah Mitchell',
    specialization: 'Strength & Conditioning',
    experience: '10+ Years',
    bio: 'Certified strength coach with expertise in powerlifting and functional movement. Transformed 500+ athletes.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80',
    achievements: ['IFBB Certified', '500+ Transformations', 'Powerlifting Champion'],
    color: '#fb5607'
  },
  {
    id: '2',
    name: 'Marcus Johnson',
    specialization: 'Nutrition & Wellness',
    experience: '8+ Years',
    bio: 'Registered dietitian and lifestyle coach specializing in sustainable nutrition and metabolic health.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    achievements: ['RD Certified', 'Diabetes Reversal Expert', 'Best Selling Author'],
    color: '#ff6b35'
  },
  {
    id: '3',
    name: 'Priya Sharma',
    specialization: 'Yoga & Mindfulness',
    experience: '12+ Years',
    bio: 'Master yoga instructor and meditation guide helping clients achieve mind-body balance and inner peace.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    achievements: ['RYT 500 Certified', '10K+ Students', 'Wellness Retreat Leader'],
    color: '#ff8800'
  },
  {
    id: '4',
    name: 'David Chen',
    specialization: 'Athletic Performance',
    experience: '15+ Years',
    bio: 'Former professional athlete turned coach, specializing in sports-specific training and injury prevention.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
    achievements: ['NSCA Certified', 'Olympic Coach', 'Elite Athlete Mentor'],
    color: '#ff8800'
  }
];

const programs: Program[] = [
  {
    id: '1',
    title: 'Personal Training',
    description: 'One-on-one coaching sessions tailored to your specific goals and fitness level.',
    duration: '12 Weeks',
    features: [
      'Customized workout plans',
      'Weekly 1-on-1 sessions',
      'Nutrition guidance',
      'Progress tracking',
      '24/7 support access'
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    color: '#fb5607'
  },
  {
    id: '2',
    title: 'Group Coaching',
    description: 'Train with a small group of like-minded individuals for motivation and accountability.',
    duration: '8 Weeks',
    features: [
      'Small group sessions (max 6)',
      'Community support',
      'Shared goals & challenges',
      'Group nutrition plans',
      'Weekly check-ins'
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    color: '#ff6b35'
  },
  {
    id: '3',
    title: 'Lifestyle Mentorship',
    description: 'Holistic coaching that integrates fitness, nutrition, mindset, and life balance.',
    duration: '16 Weeks',
    features: [
      '360° lifestyle assessment',
      'Habit transformation program',
      'Stress management strategies',
      'Sleep optimization',
      'Work-life integration'
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    color: '#ff8800'
  },
  {
    id: '4',
    title: 'Online Coaching',
    description: 'Flexible remote coaching with virtual sessions and app-based support.',
    duration: 'Ongoing',
    features: [
      'Virtual training sessions',
      'App-based tracking',
      'Video form analysis',
      'Weekly video calls',
      'Flexible scheduling'
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    color: '#ff8800'
  }
];

export default function GofyttAcademy() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCoach, setSelectedCoach] = useState<string | null>(null);
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null);

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
        threshold: 0.1,
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

  return (
    <section
      ref={sectionRef}
      className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-10 xl:px-20"
      style={{
        fontFamily: 'var(--font-antonio)',
        fontWeight: 700,
        backgroundColor: '#000000'
      }}
    >
      <div className="mx-auto max-w-7xl text-white">
        {/* Header Section */}
        <div
          className={`mb-16 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <h2
            className="mb-4 text-4xl tracking-tight sm:text-5xl md:text-6xl"
            style={{ fontFamily: 'var(--font-antonio)', fontWeight: 700 }}
          >
            Gofytt Academy
          </h2>
          <p
            className="mb-2 text-2xl text-[#fb5607] sm:text-3xl md:text-4xl"
            style={{ fontFamily: 'var(--font-antonio)', fontWeight: 700 }}
          >
            Train with GoFytt Coaches
          </p>
          <p
            className="mx-auto max-w-2xl text-lg text-gray-300 sm:text-xl"
            style={{ fontFamily: 'var(--font-geist-sans)', fontWeight: 400 }}
          >
            Lifestyle mentorship that transforms not just your body, but your entire life.
          </p>
        </div>

        {/* Programs Section */}
        <div
          className={`mb-20 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <h3
            className="mb-12 text-center text-3xl font-bold sm:text-4xl"
            style={{ fontFamily: 'var(--font-antonio)', fontWeight: 700 }}
          >
            Choose Your Program
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {programs.map((program, index) => {
              const isSelected = selectedProgram === program.id;
              return (
                <div
                  key={program.id}
                  className={`group relative cursor-pointer overflow-hidden rounded-3xl border-2 transition-all duration-500 ${isSelected
                    ? `border-${program.color} shadow-[0_25px_50px_${program.color}40]`
                    : 'border-white/10 hover:border-white/30'
                    } bg-gradient-to-br from-black via-[#1a0600] to-[#0a0300] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.35)] hover:-translate-y-2`}
                  style={{
                    animation: isVisible
                      ? `fadeInUp 0.6s ease-out ${index * 100}ms both`
                      : 'none',
                    borderColor: isSelected ? program.color : undefined
                  }}
                  onClick={() => setSelectedProgram(program.id)}
                >
                  <div
                    className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl"
                    style={{
                      backgroundColor: `${program.color}20`,
                      color: program.color
                    }}
                  >
                    {program.icon}
                  </div>

                  <h4
                    className="mb-2 text-xl font-bold text-white sm:text-2xl"
                    style={{ fontFamily: 'var(--font-antonio)', fontWeight: 700 }}
                  >
                    {program.title}
                  </h4>

                  <p
                    className="mb-4 text-sm text-gray-300 sm:text-base"
                    style={{ fontFamily: 'var(--font-geist-sans)', fontWeight: 400 }}
                  >
                    {program.description}
                  </p>

                  <div className="mb-4 flex items-center gap-2 text-xs text-gray-400 sm:text-sm">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{program.duration}</span>
                  </div>

                  {/* Features List - Expand on hover/select */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ${isSelected ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                  >
                    <ul className="space-y-2 text-sm text-gray-300">
                      {program.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span
                            className="mt-1 flex-shrink-0"
                            style={{ color: program.color }}
                          >
                            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </span>
                          <span style={{ fontFamily: 'var(--font-geist-sans)' }}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Hover Glow */}
                  <div
                    className={`absolute inset-0 -z-10 rounded-3xl transition-opacity duration-500 ${isSelected ? 'opacity-20' : 'opacity-0 group-hover:opacity-10'
                      }`}
                    style={{
                      backgroundColor: program.color,
                      filter: 'blur(20px)'
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>


        {/* CTA Section */}
        <div
          className={`mt-20 text-center transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-gradient-to-br from-black via-[#1a0600] to-[#0a0300] p-10 sm:p-12 shadow-[0_25px_60px_rgba(0,0,0,0.55)]">
            <h3
              className="mb-4 text-2xl font-semibold text-white sm:text-3xl md:text-4xl"
              style={{ fontFamily: 'var(--font-antonio)', fontWeight: 700 }}
            >
              Ready to Transform Your Life?
            </h3>
            <p
              className="mb-8 text-base leading-relaxed text-gray-300 sm:text-lg"
              style={{ fontFamily: 'var(--font-geist-sans)', fontWeight: 400 }}
            >
              Join Gofytt Academy and get personalized coaching from certified experts. Start your journey to becoming 1% better every day.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <button
                className="rounded-xl bg-gradient-to-r from-[#fb5607] to-[#ff8800] px-8 py-4 text-lg font-bold text-white shadow-[0_8px_30px_rgba(251,86,7,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_40px_rgba(251,86,7,0.6)]"
                style={{ fontFamily: 'var(--font-antonio)', fontWeight: 700 }}
              >
                Book a Free Consultation
              </button>
              <button
                className="rounded-xl border-2 border-white/20 bg-white/5 px-8 py-4 text-lg font-bold text-white transition-all duration-300 hover:border-white/40 hover:bg-white/10"
                style={{ fontFamily: 'var(--font-antonio)', fontWeight: 700 }}
              >
                View All Programs
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



