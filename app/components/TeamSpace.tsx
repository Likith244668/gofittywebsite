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
    color: '#8dd9ff',
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
    color: '#5ff7b6',
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
    color: '#f6b14b',
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
    color: '#ff6b6b',
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
    color: '#fb5607',
    achievements: ['Enhanced Flexibility', 'Increased Strength', 'Better Teaching']
  }
];

export default function TeamSpace() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);

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

  // Auto-rotate stories
  useEffect(() => {
    if (!isVisible) return;
    
    const interval = setInterval(() => {
      setActiveStoryIndex((prev) => (prev + 1) % tribeMembers.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isVisible]);

  const activeMember = tribeMembers[activeStoryIndex];

  return (
    <section 
      ref={sectionRef}
      className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-10 xl:px-20"
      style={{
        fontFamily: 'var(--font-antonio)',
        fontWeight: 700,
        backgroundColor: '#1c0533'
      }}
    >
      <div className="mx-auto max-w-7xl text-white">
        {/* Header Section */}
        <div 
          className={`mb-10 text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 
            className="mb-3 text-3xl tracking-tight sm:text-4xl md:text-5xl"
            style={{ fontFamily: 'var(--font-antonio)', fontWeight: 700 }}
          >
            Team Space
          </h2>
          <p 
            className="mb-2 text-xl text-[#fb5607] sm:text-2xl md:text-3xl"
            style={{ fontFamily: 'var(--font-antonio)', fontWeight: 700 }}
          >
            Meet the Tribe
          </p>
          <p 
            className="mx-auto max-w-2xl text-base text-gray-300 sm:text-lg"
            style={{ fontFamily: 'var(--font-geist-sans)', fontWeight: 400 }}
          >
            Members Stories - Real transformations from real people in our community
          </p>
        </div>

        {/* Featured Story - Hero Section */}
        <div 
          className={`mb-10 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
            {/* Member Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative aspect-[3/4] max-h-[520px] overflow-hidden rounded-2xl">
                <Image
                  src={activeMember.image}
                  alt={activeMember.name}
                  fill
                  className="object-cover transition-opacity duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"
                  style={{
                    background: `linear-gradient(to top, ${activeMember.color}60, transparent)`
                  }}
                />
                
                {/* Transformation Badge */}
                <div className="absolute bottom-4 left-6 right-6">
                  <div 
                    className="rounded-xl border-2 p-3 backdrop-blur-md"
                    style={{
                      backgroundColor: `${activeMember.color}20`,
                      borderColor: activeMember.color
                    }}
                  >
                    <div className="mb-1.5 flex items-center justify-between text-xs">
                      <span className="text-gray-300">Before</span>
                      <span className="text-gray-300">After</span>
                    </div>
                    <div className="mb-1.5 flex items-center justify-between text-base font-bold">
                      <span className="text-white">{activeMember.transformation.before}</span>
                      <span className="text-white">→</span>
                      <span 
                        className="text-white"
                        style={{ color: activeMember.color }}
                      >
                        {activeMember.transformation.after}
                      </span>
                    </div>
                    <div 
                      className="text-center text-[10px] font-semibold uppercase tracking-wider"
                      style={{ color: activeMember.color }}
                    >
                      {activeMember.transformation.metric}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Story Content */}
            <div className="order-1 space-y-6 lg:order-2">
              <div>
                <h3 
                  className="mb-2 text-2xl font-bold text-white sm:text-3xl"
                  style={{ fontFamily: 'var(--font-antonio)', fontWeight: 700 }}
                >
                  {activeMember.name}
                </h3>
                <p 
                  className="text-base font-semibold"
                  style={{ 
                    fontFamily: 'var(--font-geist-sans)',
                    color: activeMember.color
                  }}
                >
                  {activeMember.role}
                </p>
              </div>

              {/* Quote */}
              <div className="relative rounded-xl border border-white/10 bg-gradient-to-br from-[#2c0d54]/50 to-[#1e0839]/50 p-5">
                <svg 
                  className="absolute -left-2 -top-2 h-10 w-10 opacity-20"
                  fill={activeMember.color}
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.432.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
                <p 
                  className="relative text-base leading-relaxed text-white sm:text-lg"
                  style={{ fontFamily: 'var(--font-geist-sans)', fontWeight: 400 }}
                >
                  &ldquo;{activeMember.quote}&rdquo;
                </p>
              </div>

              {/* Story */}
              <div>
                <h4 
                  className="mb-2 text-lg font-bold text-white"
                  style={{ fontFamily: 'var(--font-antonio)', fontWeight: 700 }}
                >
                  My Journey
                </h4>
                <p 
                  className="text-sm leading-relaxed text-gray-300 sm:text-base"
                  style={{ fontFamily: 'var(--font-geist-sans)', fontWeight: 400 }}
                >
                  {activeMember.story}
                </p>
              </div>

              {/* Achievements */}
              <div>
                <h4 
                  className="mb-2 text-lg font-bold text-white"
                  style={{ fontFamily: 'var(--font-antonio)', fontWeight: 700 }}
                >
                  Key Achievements
                </h4>
                <div className="flex flex-wrap gap-3">
                  {activeMember.achievements.map((achievement, idx) => (
                    <div
                      key={idx}
                      className="rounded-full px-3 py-1.5 text-xs font-semibold"
                      style={{
                        backgroundColor: `${activeMember.color}20`,
                        color: activeMember.color,
                        border: `1px solid ${activeMember.color}40`
                      }}
                    >
                      {achievement}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Story Navigation Dots */}
        <div className="mb-8 flex justify-center gap-2">
          {tribeMembers.map((member, index) => (
            <button
              key={member.id}
              onClick={() => setActiveStoryIndex(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === activeStoryIndex
                  ? 'w-8'
                  : 'w-3'
              }`}
              style={{
                backgroundColor: index === activeStoryIndex 
                  ? activeMember.color 
                  : 'rgba(255, 255, 255, 0.3)'
              }}
              aria-label={`View ${member.name}'s story`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}



