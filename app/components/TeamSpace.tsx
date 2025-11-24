'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

type TribeMember = {
  id: string;
  name: string;
  role: string;
  story: string;
  transformation: {
    before: string;
    after: string;
    metric: string;
  };
  image: string;
  quote: string;
  color: string;
  achievements: string[];
};

const tribeMembers: TribeMember[] = [
  {
    id: '1',
    name: 'Rahul Mehta',
    role: 'Software Engineer',
    story: 'I was struggling with diabetes and low energy. After joining Gofytt, I completely transformed my life. The personalized coaching and community support made all the difference. Now I run marathons and feel more alive than ever.',
    transformation: {
      before: 'HbA1c: 10.9%',
      after: 'HbA1c: 6.2%',
      metric: 'Diabetes Reversed'
    },
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    quote: 'The 1% daily improvements add up to life-changing transformations.',
    color: '#fb5607',
    achievements: ['Lost 28kg', 'Ran 3 Marathons', 'Diabetes Free']
  },
  {
    id: '2',
    name: 'Priya Desai',
    role: 'Marketing Manager',
    story: 'As a working mom, I thought fitness was impossible. Gofytt showed me how to integrate wellness into my busy life. The flexible programs and supportive community helped me regain my strength and confidence.',
    transformation: {
      before: 'Energy Level: Low',
      after: 'Energy Level: High',
      metric: 'Lifestyle Transformation'
    },
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80',
    quote: 'Fitness isn\'t about perfection—it\'s about progress, one day at a time.',
    color: '#ff6b35',
    achievements: ['Lost 22kg', 'Gained Strength', 'Better Work-Life Balance']
  },
  {
    id: '3',
    name: 'Arjun Patel',
    role: 'Entrepreneur',
    story: 'I was always the "skinny guy" and wanted to build muscle. The expert coaching at Gofytt taught me proper form, nutrition, and recovery. In 8 months, I gained 15kg of muscle and completely changed my physique.',
    transformation: {
      before: 'Weight: 58kg',
      after: 'Weight: 73kg',
      metric: 'Muscle Gain'
    },
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
    quote: 'Consistency beats intensity. Small daily actions create massive results.',
    color: '#ff8800',
    achievements: ['Gained 15kg Muscle', 'Increased Strength 200%', 'Competition Ready']
  },
  {
    id: '4',
    name: 'Ananya Reddy',
    role: 'Teacher',
    story: 'After my second child, I lost all confidence in my body. Gofytt\'s holistic approach helped me rebuild not just physically, but mentally. The community became my second family, and I found strength I never knew I had.',
    transformation: {
      before: 'Confidence: Low',
      after: 'Confidence: High',
      metric: 'Complete Transformation'
    },
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    quote: 'Strength comes in many forms. I found mine through this community.',
    color: '#fb5607',
    achievements: ['Postpartum Recovery', 'Regained Confidence', 'Inspiring Others']
  },
  {
    id: '5',
    name: 'Vikram Singh',
    role: 'Doctor',
    story: 'As a healthcare professional, I knew the importance of fitness but struggled to practice what I preached. Gofytt\'s science-backed approach and accountability system helped me finally walk the talk.',
    transformation: {
      before: 'BP: 150/95',
      after: 'BP: 120/80',
      metric: 'Health Optimization'
    },
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    quote: 'Leading by example—now I can truly guide my patients.',
    color: '#ff6b35',
    achievements: ['Normalized BP', 'Improved Sleep', 'Better Patient Outcomes']
  },
  {
    id: '6',
    name: 'Meera Iyer',
    role: 'Yoga Instructor',
    story: 'I thought I knew everything about fitness, but Gofytt opened my eyes to the power of integrated training. Combining strength, flexibility, and mindset created results I never imagined possible.',
    transformation: {
      before: 'Flexibility: Good',
      after: 'Flexibility: Excellent',
      metric: 'Enhanced Performance'
    },
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=400&q=80',
    quote: 'Learning never stops. Gofytt taught me to be a better teacher.',
    color: '#ff8800',
    achievements: ['Enhanced Flexibility', 'Increased Strength', 'Better Teaching']
  }
];

export default function TeamSpace() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [spotlightIndex, setSpotlightIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

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

    const currentSection = sectionRef.current;
    if (currentSection) observer.observe(currentSection);
    return () => { if (currentSection) observer.unobserve(currentSection); };
  }, []);

  // Auto-rotate spotlight
  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      handleSpotlightChange((spotlightIndex + 1) % tribeMembers.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isVisible, spotlightIndex]);

  const handleSpotlightChange = (newIndex: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSpotlightIndex(newIndex);
    setTimeout(() => setIsAnimating(false), 700);
  };

  const spotlightMember = tribeMembers[spotlightIndex];

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #000000 0%, #0a0a0a 50%, #000000 100%)'
      }}
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(251,86,7,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(251,86,7,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      {/* Orange Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-20 blur-3xl"
        style={{
          background: `radial-gradient(circle, ${spotlightMember.color}60 0%, transparent 70%)`,
          transition: 'background 1s ease-out'
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#fb5607]" />
            <span
              className="text-[#fb5607] text-sm font-bold tracking-[0.3em] uppercase"
              style={{ fontFamily: 'var(--font-antonio)' }}
            >
              Our Tribe
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#fb5607]" />
          </div>

          <h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4"
            style={{ fontFamily: 'var(--font-antonio)' }}
          >
            TEAM <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fb5607] to-[#ff6b35]">SPOTLIGHT</span>
          </h2>

          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Real transformations from real people • Click any member to see their story
          </p>
        </div>

        {/* 3D Spotlight Carousel */}
        <div className="relative" style={{ perspective: '2000px' }}>

          {/* Main Spotlight Card - Center Stage */}
          <div className={`relative mx-auto max-w-5xl mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div
              className="relative overflow-hidden rounded-3xl border-2 shadow-2xl"
              style={{
                borderColor: spotlightMember.color,
                boxShadow: `0 25px 50px -12px ${spotlightMember.color}40`,
                background: 'linear-gradient(135deg, rgba(10,10,10,0.95) 0%, rgba(0,0,0,0.98) 100%)',
                backdropFilter: 'blur(20px)'
              }}
            >
              {/* Corner Accents */}
              <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2" style={{ borderColor: spotlightMember.color }} />
              <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2" style={{ borderColor: spotlightMember.color }} />
              <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2" style={{ borderColor: spotlightMember.color }} />
              <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2" style={{ borderColor: spotlightMember.color }} />

              <div className="grid lg:grid-cols-2 gap-8 p-8 sm:p-12">
                {/* Left - Image & Transformation */}
                <div className="space-y-6">
                  <div className="relative aspect-square rounded-2xl overflow-hidden">
                    <Image
                      src={spotlightMember.image}
                      alt={spotlightMember.name}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background: `linear-gradient(to bottom, transparent 50%, ${spotlightMember.color}30 100%)`
                      }}
                    />
                  </div>

                  {/* Transformation Metrics */}
                  <div
                    className="relative overflow-hidden rounded-xl border p-6"
                    style={{
                      borderColor: `${spotlightMember.color}40`,
                      background: `linear-gradient(135deg, ${spotlightMember.color}10 0%, transparent 100%)`
                    }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-center flex-1">
                        <div className="text-xs text-gray-400 mb-1">BEFORE</div>
                        <div className="text-lg font-bold text-white">{spotlightMember.transformation.before}</div>
                      </div>

                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: `${spotlightMember.color}20` }}
                      >
                        <svg className="w-6 h-6" fill="none" stroke={spotlightMember.color} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>

                      <div className="text-center flex-1">
                        <div className="text-xs text-gray-400 mb-1">AFTER</div>
                        <div className="text-lg font-bold" style={{ color: spotlightMember.color }}>{spotlightMember.transformation.after}</div>
                      </div>
                    </div>

                    <div
                      className="text-center py-2 rounded-lg text-sm font-bold uppercase tracking-wider"
                      style={{
                        backgroundColor: `${spotlightMember.color}20`,
                        color: spotlightMember.color
                      }}
                    >
                      ✓ {spotlightMember.transformation.metric}
                    </div>
                  </div>
                </div>

                {/* Right - Story & Details */}
                <div className="space-y-6 flex flex-col justify-center">
                  {/* Name & Role */}
                  <div>
                    <h3
                      className="text-3xl sm:text-4xl font-bold text-white mb-2"
                      style={{ fontFamily: 'var(--font-antonio)' }}
                    >
                      {spotlightMember.name}
                    </h3>
                    <p
                      className="text-lg font-bold"
                      style={{ color: spotlightMember.color }}
                    >
                      {spotlightMember.role}
                    </p>
                  </div>

                  {/* Quote */}
                  <div
                    className="relative rounded-xl border p-5"
                    style={{
                      borderColor: `${spotlightMember.color}30`,
                      background: `linear-gradient(135deg, ${spotlightMember.color}05 0%, transparent 100%)`
                    }}
                  >
                    <svg
                      className="absolute -top-2 -left-2 w-8 h-8 opacity-30"
                      fill={spotlightMember.color}
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.432.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <p className="text-white text-base sm:text-lg italic leading-relaxed">
                      &ldquo;{spotlightMember.quote}&rdquo;
                    </p>
                  </div>

                  {/* Story */}
                  <div>
                    <h4 className="text-sm font-bold text-gray-400 mb-2 uppercase tracking-wider">The Journey</h4>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                      {spotlightMember.story}
                    </p>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-sm font-bold text-gray-400 mb-3 uppercase tracking-wider">Achievements</h4>
                    <div className="flex flex-wrap gap-2">
                      {spotlightMember.achievements.map((achievement, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 text-xs font-bold rounded-full"
                          style={{
                            backgroundColor: `${spotlightMember.color}20`,
                            color: spotlightMember.color,
                            border: `1px solid ${spotlightMember.color}40`
                          }}
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Team Member Deck - Bottom Cards */}
          <div className="flex justify-center gap-3 flex-wrap px-4">
            {tribeMembers.map((member, index) => {
              const isSpotlight = index === spotlightIndex;

              return (
                <button
                  key={member.id}
                  onClick={() => handleSpotlightChange(index)}
                  className={`group relative overflow-hidden rounded-2xl border-2 transition-all duration-500 ${isSpotlight
                      ? 'scale-110 shadow-lg'
                      : 'hover:scale-105 hover:-translate-y-1'
                    }`}
                  style={{
                    width: '140px',
                    height: '180px',
                    borderColor: isSpotlight ? member.color : 'rgba(255,255,255,0.1)',
                    boxShadow: isSpotlight ? `0 10px 30px ${member.color}60` : '0 4px 15px rgba(0,0,0,0.5)',
                    background: isSpotlight
                      ? `linear-gradient(135deg, ${member.color}20 0%, rgba(0,0,0,0.9) 100%)`
                      : 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(0,0,0,0.8) 100%)',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  {/* Image */}
                  <div className="absolute inset-0">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className={`object-cover transition-all duration-500 ${isSpotlight ? 'opacity-60' : 'opacity-30 group-hover:opacity-50'
                        }`}
                      sizes="140px"
                    />
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <h4
                      className={`text-sm font-bold mb-0.5 transition-colors duration-300 ${isSpotlight ? 'text-white' : 'text-gray-300'
                        }`}
                      style={{ fontFamily: 'var(--font-antonio)' }}
                    >
                      {member.name.split(' ')[0]}
                    </h4>
                    <p
                      className="text-xs font-bold"
                      style={{ color: isSpotlight ? member.color : 'rgba(255,255,255,0.5)' }}
                    >
                      {member.role.split(' ')[0]}
                    </p>
                  </div>

                  {/* Active Indicator */}
                  {isSpotlight && (
                    <div
                      className="absolute top-2 right-2 w-3 h-3 rounded-full animate-pulse"
                      style={{ backgroundColor: member.color }}
                    />
                  )}
                </button>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
