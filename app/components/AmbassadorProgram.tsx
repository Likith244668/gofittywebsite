'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

// Enhanced ambassador data
const ambassadors = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'Elite Fitness Ambassador',
    tagline: 'Transforming Lives Through Movement',
    image: '/sarah-chen.png',
    achievements: [
      'Trained 1,200+ clients',
      'Instagram: 250K followers',
      'Featured in 15+ magazines',
      'Certified Master Trainer',
    ],
    stats: { transformations: '1.2K', engagement: '8.5%', years: '10+' },
  },
  {
    id: 2,
    name: 'Marcus Williams',
    role: 'Pro Athlete & Coach',
    tagline: 'Excellence in Every Rep',
    image: '/marcus-williams.png',
    achievements: [
      'Olympic medalist',
      'World champion athlete',
      '850+ success stories',
      'Elite performance coach',
    ],
    stats: { transformations: '850', engagement: '9.2%', years: '12+' },
  },
  {
    id: 3,
    name: 'Priya Desai',
    role: 'Wellness & Nutrition Expert',
    tagline: 'Holistic Health for Peak Performance',
    image: '/priya-desai.png',
    achievements: [
      '2,100+ transformations',
      'Certified nutritionist',
      '320K social following',
      'TEDx speaker',
    ],
    stats: { transformations: '2.1K', engagement: '11.3%', years: '8+' },
  },
];

export default function AmbassadorProgram() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeAmbassador, setActiveAmbassador] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
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

  // Auto-rotate ambassadors
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveAmbassador((prev) => (prev + 1) % ambassadors.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const currentAmbassador = ambassadors[activeAmbassador];

  return (
    <section
      ref={sectionRef}
      className="relative py-6 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-10 overflow-hidden bg-black"
      style={{ fontFamily: 'var(--font-antonio)', fontWeight: 700 }}
    >
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 20% 50%, rgba(251, 86, 7, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255, 107, 107, 0.3) 0%, transparent 50%)',
            animation: 'gradient 15s ease infinite',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div
          className={`mb-6 sm:mb-8 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <h2
            className="mb-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white"
            style={{
              textShadow: '0 0 60px rgba(251, 86, 7, 0.5)',
            }}
          >
            Ambassador Programme
          </h2>
          <p
            className="mx-auto max-w-2xl text-lg sm:text-xl text-gray-300"
            style={{ fontFamily: 'var(--font-geist-sans)', fontWeight: 400 }}
          >
            Join the elite. Inspire millions. Transform lives.
          </p>
        </div>

        {/* Main Content */}
        <div
          className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          {/* Single Card */}
          <div
            className="relative rounded-3xl border border-white/10 p-5 lg:p-6"
            style={{
              background: 'linear-gradient(135deg, rgba(251, 86, 7, 0.1) 0%, rgba(10, 3, 0, 0.9) 100%)',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 20px 60px rgba(251, 86, 7, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
            }}
          >
            {/* Top Grid: Details Left, Photo Right */}
            {/* Top Grid: Details Left, Photo Right */}
            <div className="grid md:grid-cols-2 gap-6 items-start mb-5">
              {/* Left: Details Section */}
              <div className="text-white">
                <div
                  className="inline-block px-3 py-1.5 mb-3 rounded-full text-xs font-semibold bg-orange-500/20 border border-orange-500/30 text-orange-400"
                >
                  FEATURED AMBASSADOR
                </div>

                <h3 className="mb-2 text-3xl lg:text-4xl font-bold">{currentAmbassador.name}</h3>
                <p
                  className="mb-2 text-base lg:text-lg text-orange-400"
                  style={{ fontFamily: 'var(--font-geist-sans)', fontWeight: 600 }}
                >
                  {currentAmbassador.role}
                </p>
                <p
                  className="mb-6 text-sm lg:text-base text-gray-400 italic"
                  style={{ fontFamily: 'var(--font-geist-sans)', fontWeight: 400 }}
                >
                  "{currentAmbassador.tagline}"
                </p>

                {/* Achievements */}
                <div className="space-y-3 mb-6">
                  {currentAmbassador.achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 group"
                      style={{
                        animation: `fadeInLeft 0.6s ease-out ${index * 0.1}s both`,
                      }}
                    >
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-green-400 to-emerald-500"
                        style={{ boxShadow: '0 0 15px rgba(52, 211, 153, 0.4)' }}
                      >
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                      <span
                        className="text-sm lg:text-base text-gray-300 group-hover:text-white transition-colors"
                        style={{ fontFamily: 'var(--font-geist-sans)', fontWeight: 400 }}
                      >
                        {achievement}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Navigation */}
                <div className="flex gap-2">
                  {ambassadors.map((ambassador, index) => (
                    <button
                      key={ambassador.id}
                      onClick={() => setActiveAmbassador(index)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${index === activeAmbassador
                        ? 'w-12 bg-gradient-to-r from-orange-500 to-red-500'
                        : 'w-1.5 bg-white/20 hover:bg-white/40'
                        }`}
                      style={{
                        boxShadow: index === activeAmbassador ? '0 0 15px rgba(251, 86, 7, 0.6)' : 'none',
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Right: Photo Section */}
              <div className="relative h-full flex items-start justify-center md:justify-end">
                <div
                  className="relative w-full max-w-[320px] aspect-[3/4] rounded-2xl overflow-hidden"
                  style={{
                    boxShadow: '0 20px 60px rgba(251, 86, 7, 0.4)',
                  }}
                >
                  {/* Ambassador Image */}
                  <Image
                    src={currentAmbassador.image}
                    alt={currentAmbassador.name}
                    fill
                    className="object-cover"
                    priority
                  />

                  {/* Holographic overlay */}
                  <div
                    className="absolute inset-0 opacity-30 mix-blend-overlay"
                    style={{
                      background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.4) 50%, transparent 70%)',
                      animation: 'shimmer 3s ease-in-out infinite',
                    }}
                  />

                  {/* Glow ring */}
                  <div
                    className="absolute -inset-4 rounded-2xl opacity-50"
                    style={{
                      background: 'linear-gradient(135deg, #fb5607 0%, #ff6b6b 100%)',
                      filter: 'blur(30px)',
                      animation: 'glow 3s ease-in-out infinite',
                      zIndex: -1,
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Bottom: Full Width Button */}
            <button
              className="group relative w-full rounded-xl px-6 py-4 text-lg font-bold text-white overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              style={{
                background: 'linear-gradient(135deg, #fb5607 0%, #ff6b6b 100%)',
                boxShadow: '0 10px 40px rgba(251, 86, 7, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1) inset',
              }}
            >
              <span className="relative z-10">Join the Programme</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%,
          100% {
            transform: rotate(0deg) scale(1);
          }
          50% {
            transform: rotate(180deg) scale(1.1);
          }
        }
        @keyframes shimmer {
          0% {
            transform: translateX(-100%) rotate(45deg);
          }
          100% {
            transform: translateX(100%) rotate(45deg);
          }
        }
        @keyframes glow {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}
