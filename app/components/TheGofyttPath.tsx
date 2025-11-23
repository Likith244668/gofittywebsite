'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

type JourneyStage = {
  stage: string;
  title: string;
  description: string;
  image: string;
  color: string;
  characterPose: string;
};

const journeyStages: JourneyStage[] = [
  {
    stage: '01',
    title: 'Awareness',
    description: 'The moment you realize you want more. It starts with a look in the mirror and a fire in your belly.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80', // Contemplative/Focus
    color: '#8dd9ff',
    characterPose: 'Focusing'
  },
  {
    stage: '02',
    title: 'Discovery',
    description: 'Testing your limits. You learn what your body can do, finding the tools and techniques that work for you.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=600&q=80', // Active/Learning
    color: '#5ff7b6',
    characterPose: 'Exploring'
  },
  {
    stage: '03',
    title: 'Commitment',
    description: 'No more excuses. You build the habit, show up on the hard days, and make fitness non-negotiable.',
    image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=600&q=80', // Determined/Training
    color: '#f6b14b',
    characterPose: 'Grinding'
  },
  {
    stage: '04',
    title: 'Growth',
    description: 'Results start showing. You break personal records, feel stronger, and your confidence skyrockets.',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=600&q=80', // Strong/Success
    color: '#ff6b6b',
    characterPose: 'Evolving'
  },
  {
    stage: '05',
    title: 'Mastery',
    description: 'It’s not just a workout; it’s who you are. You inspire others and set new standards for yourself.',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=600&q=80', // Master/Leader
    color: '#fb5607',
    characterPose: 'Leading'
  }
];

export default function TheGofyttPath() {
  const [activeStage, setActiveStage] = useState<number>(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLElement>(null);
  const stageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const containerTop = containerRef.current.offsetTop;
      const containerHeight = containerRef.current.offsetHeight;
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Calculate progress through the section
      const start = containerTop - windowHeight / 2;
      const end = containerTop + containerHeight - windowHeight / 2;
      const progress = Math.min(Math.max((scrollY - start) / (end - start), 0), 1);

      setScrollProgress(progress);

      // Determine active stage based on scroll position
      stageRefs.current.forEach((ref, index) => {
        if (!ref) return;
        const rect = ref.getBoundingClientRect();
        const center = windowHeight / 2;

        // If the element is near the center of the screen
        if (rect.top < center + 100 && rect.bottom > center - 100) {
          setActiveStage(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative py-12 sm:py-16 overflow-hidden"
      style={{
        backgroundColor: '#050505',
        backgroundImage: `
          radial-gradient(circle at 50% 0%, #1a0b2e 0%, transparent 70%),
          linear-gradient(to bottom, #050505 0%, #0a0a0a 100%)
        `
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2
            className="mb-4 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-white"
            style={{ fontFamily: 'var(--font-antonio)' }}
          >
            THE PATH TO <span className="text-[#fb5607]">GLORY</span>
          </h2>
          <p
            className="mx-auto max-w-2xl text-base text-gray-400"
            style={{ fontFamily: 'var(--font-geist-sans)' }}
          >
            Follow the steps. Trust the process. Become the 1%.
          </p>
        </div>

        {/* 3D Path Container */}
        <div className="relative">
          {/* Progress Line (Vertical Center) */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-gray-800 rounded-full overflow-hidden z-0">
            <div
              className="w-full bg-gradient-to-b from-[#8dd9ff] via-[#f6b14b] to-[#fb5607] transition-all duration-300 ease-out"
              style={{ height: `${scrollProgress * 100}%` }}
            />
          </div>

          {/* Stages */}
          <div className="space-y-16 md:space-y-24">
            {journeyStages.map((stage, index) => {
              const isActive = activeStage === index;
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={stage.stage}
                  ref={el => { stageRefs.current[index] = el; }}
                  className={`relative flex flex-col md:flex-row items-center gap-6 md:gap-12 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  style={{
                    perspective: '1000px'
                  }}
                >
                  {/* Stage Marker (Center) */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-6 h-6 md:w-10 md:h-10 rounded-full border-4 border-[#050505] z-10 flex items-center justify-center transition-all duration-500"
                    style={{
                      backgroundColor: isActive ? stage.color : '#1f2937',
                      transform: isActive ? 'translate(-50%) scale(1.2)' : 'translate(-50%) scale(1)',
                      boxShadow: isActive ? `0 0 30px ${stage.color}` : 'none'
                    }}
                  >
                    <div className="w-1.5 h-1.5 md:w-2.5 md:h-2.5 rounded-full bg-white" />
                  </div>

                  {/* Content Side */}
                  <div className={`w-full md:w-1/2 pl-10 md:pl-0 ${isLeft ? 'md:text-right md:pr-10' : 'md:text-left md:pl-10'}`}>
                    <div
                      className={`transition-all duration-700 transform ${isActive ? 'opacity-100 translate-y-0' : 'opacity-30 translate-y-10'
                        }`}
                    >
                      <span
                        className="block text-5xl md:text-7xl font-bold opacity-10 mb-1"
                        style={{ fontFamily: 'var(--font-antonio)', color: stage.color }}
                      >
                        {stage.stage}
                      </span>
                      <h3
                        className="text-2xl md:text-3xl font-bold text-white mb-2"
                        style={{ fontFamily: 'var(--font-antonio)' }}
                      >
                        {stage.title}
                      </h3>
                      <p className="text-gray-400 text-base leading-relaxed">
                        {stage.description}
                      </p>
                    </div>
                  </div>

                  {/* 3D Character Card Side */}
                  <div className={`w-full md:w-1/2 pl-10 md:pl-0 ${isLeft ? 'md:pl-10' : 'md:pr-10'}`}>
                    <div
                      className="relative w-full max-w-sm mx-auto aspect-[3/4] rounded-2xl transition-all duration-700 ease-out"
                      style={{
                        transformStyle: 'preserve-3d',
                        transform: isActive
                          ? `rotateY(${isLeft ? '-15deg' : '15deg'}) rotateX(5deg) scale(1)`
                          : `rotateY(${isLeft ? '-5deg' : '5deg'}) rotateX(0deg) scale(0.9)`,
                        opacity: isActive ? 1 : 0.5,
                        filter: isActive ? 'none' : 'grayscale(100%) blur(2px)'
                      }}
                    >
                      {/* Card Background/Glow */}
                      <div
                        className="absolute inset-0 rounded-2xl transition-all duration-500"
                        style={{
                          background: `linear-gradient(135deg, ${stage.color}20, transparent)`,
                          boxShadow: isActive ? `0 20px 50px -10px ${stage.color}40` : 'none',
                          transform: 'translateZ(-20px)'
                        }}
                      />

                      {/* Character Image */}
                      <div className="relative h-full w-full rounded-2xl overflow-hidden border border-white/10">
                        <Image
                          src={stage.image}
                          alt={stage.characterPose}
                          fill
                          className="object-cover transition-transform duration-1000"
                          style={{
                            transform: isActive ? 'scale(1.1)' : 'scale(1)'
                          }}
                        />

                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                        {/* Floating Badge */}
                        <div
                          className="absolute bottom-4 left-4 px-3 py-1.5 rounded-full backdrop-blur-md border border-white/20 text-white font-bold tracking-wider uppercase text-xs transition-all duration-700 delay-300"
                          style={{
                            backgroundColor: `${stage.color}40`,
                            transform: isActive ? 'translateZ(30px) translateY(0)' : 'translateZ(30px) translateY(20px)',
                            opacity: isActive ? 1 : 0
                          }}
                        >
                          {stage.characterPose}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-16 text-center">
          <button
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-300 bg-[#fb5607] rounded-full hover:bg-[#ff6b1f] hover:scale-110 hover:shadow-[0_0_40px_rgba(251,86,7,0.6)]"
            style={{ fontFamily: 'var(--font-antonio)' }}
          >
            <span className="relative z-10">BEGIN YOUR TRANSFORMATION</span>
            <div className="absolute inset-0 rounded-full bg-white/20 blur-lg group-hover:blur-xl transition-all opacity-0 group-hover:opacity-100" />
          </button>
        </div>
      </div>
    </section>
  );
}



