'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

type Member = {
  name: string;
  role: string;
  quote: string;
  achievement: string;
  image: string;
  color: string;
  // Collage positioning - responsive
  position: {
    mobile: { top: string; left: string; width: string; height: string; rotation: number; zIndex: number };
    desktop: { top: string; left: string; width: string; height: string; rotation: number; zIndex: number };
  };
  isGrayscale: boolean;
};

const members: Member[] = [
  // Row 1
  {
    name: 'Muscular Man',
    role: 'Fitness Enthusiast',
    quote: 'The 1% philosophy changed everything.',
    achievement: 'Built Strength',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    color: '#fb5607',
    position: {
      mobile: { top: '2%', left: '5%', width: '140px', height: '180px', rotation: -2, zIndex: 2 },
      desktop: { top: '5%', left: '2%', width: '200px', height: '260px', rotation: -2, zIndex: 2 }
    },
    isGrayscale: true
  },
  {
    name: 'Couple',
    role: 'Fitness Partners',
    quote: 'Training together makes us stronger.',
    achievement: 'Shared Journey',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=400&q=80',
    color: '#8dd9ff',
    position: {
      mobile: { top: '5%', left: '55%', width: '130px', height: '160px', rotation: 1.5, zIndex: 1 },
      desktop: { top: '8%', left: '22%', width: '190px', height: '240px', rotation: 1.5, zIndex: 1 }
    },
    isGrayscale: true
  },
  {
    name: 'Smiling Woman',
    role: 'Member',
    quote: 'I love the energy here!',
    achievement: 'Found Confidence',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80',
    color: '#5ff7b6',
    position: {
      mobile: { top: '15%', left: '10%', width: '130px', height: '160px', rotation: -1, zIndex: 3 },
      desktop: { top: '4%', left: '42%', width: '210px', height: '260px', rotation: -1, zIndex: 3 }
    },
    isGrayscale: false
  },
  {
    name: 'Bodybuilder',
    role: 'Athlete',
    quote: 'Pushing limits every day.',
    achievement: 'Competition Ready',
    image: 'https://images.unsplash.com/photo-1546483875-ad9014c88eba?auto=format&fit=crop&w=400&q=80',
    color: '#f6b14b',
    position: {
      mobile: { top: '18%', left: '60%', width: '120px', height: '150px', rotation: 2, zIndex: 1 },
      desktop: { top: '10%', left: '62%', width: '190px', height: '240px', rotation: 2, zIndex: 1 }
    },
    isGrayscale: true
  },
  {
    name: 'Powerlifter',
    role: 'Champion',
    quote: 'Achieving goals one lift at a time.',
    achievement: 'Trophy Winner',
    image: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=400&q=80',
    color: '#ff6b6b',
    position: {
      mobile: { top: '25%', left: '5%', width: '150px', height: '190px', rotation: 1, zIndex: 2 },
      desktop: { top: '6%', left: '82%', width: '220px', height: '280px', rotation: 1, zIndex: 2 }
    },
    isGrayscale: false
  },

  // Row 2
  {
    name: 'Inspiring Leader',
    role: 'Community Member',
    quote: 'This is where I found my strength.',
    achievement: 'Inspires Others',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
    color: '#fb5607',
    position: {
      mobile: { top: '28%', left: '50%', width: '160px', height: '200px', rotation: -0.5, zIndex: 5 },
      desktop: { top: '32%', left: '8%', width: '240px', height: '300px', rotation: -0.5, zIndex: 5 }
    },
    isGrayscale: false
  },
  {
    name: 'Professional',
    role: 'Member',
    quote: 'Fitness is a lifestyle.',
    achievement: 'Transformed',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    color: '#8dd9ff',
    position: {
      mobile: { top: '38%', left: '8%', width: '125px', height: '155px', rotation: 2.5, zIndex: 1 },
      desktop: { top: '28%', left: '30%', width: '200px', height: '250px', rotation: 2.5, zIndex: 1 }
    },
    isGrayscale: true
  },
  {
    name: 'Senior Member',
    role: 'Inspiration',
    quote: 'Age is just a number!',
    achievement: 'Active & Strong',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    color: '#5ff7b6',
    position: {
      mobile: { top: '40%', left: '65%', width: '135px', height: '170px', rotation: -1.5, zIndex: 2 },
      desktop: { top: '35%', left: '50%', width: '220px', height: '280px', rotation: -1.5, zIndex: 2 }
    },
    isGrayscale: false
  },
  {
    name: 'Young Member',
    role: 'Future Champion',
    quote: 'Starting young, dreaming big!',
    achievement: 'Rising Star',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    color: '#f6b14b',
    position: {
      mobile: { top: '50%', left: '5%', width: '120px', height: '150px', rotation: 1, zIndex: 1 },
      desktop: { top: '30%', left: '72%', width: '190px', height: '240px', rotation: 1, zIndex: 1 }
    },
    isGrayscale: true
  },
  {
    name: 'Family Member',
    role: 'Parent',
    quote: 'Fitness for the whole family.',
    achievement: 'Family Goals',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    color: '#ff6b6b',
    position: {
      mobile: { top: '52%', left: '55%', width: '130px', height: '160px', rotation: -2, zIndex: 2 },
      desktop: { top: '38%', left: '90%', width: '180px', height: '220px', rotation: -2, zIndex: 2 }
    },
    isGrayscale: false
  },

  // Row 3
  {
    name: 'Runner',
    role: 'Endurance',
    quote: 'One mile at a time.',
    achievement: '5K Personal Best',
    image: 'https://images.unsplash.com/photo-1526401485004-2fda9f4f1f69?auto=format&fit=crop&w=400&q=80',
    color: '#8dd9ff',
    position: {
      mobile: { top: '62%', left: '10%', width: '120px', height: '150px', rotation: -3, zIndex: 2 },
      desktop: { top: '55%', left: '5%', width: '190px', height: '240px', rotation: -3, zIndex: 2 }
    },
    isGrayscale: true
  },
  {
    name: 'Yogi',
    role: 'Mindfulness',
    quote: 'Balance is power.',
    achievement: 'Daily Practice',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=400&q=80',
    color: '#5ff7b6',
    position: {
      mobile: { top: '65%', left: '60%', width: '110px', height: '145px', rotation: 2, zIndex: 1 },
      desktop: { top: '52%', left: '25%', width: '180px', height: '230px', rotation: 2, zIndex: 1 }
    },
    isGrayscale: false
  },
  {
    name: 'Cyclist',
    role: 'Road Warrior',
    quote: 'Chasing horizons.',
    achievement: 'Century Ride',
    image: 'https://images.unsplash.com/photo-1519455953755-af066f52f1ea?auto=format&fit=crop&w=400&q=80',
    color: '#f6b14b',
    position: {
      mobile: { top: '72%', left: '5%', width: '130px', height: '165px', rotation: -1.5, zIndex: 2 },
      desktop: { top: '58%', left: '45%', width: '210px', height: '270px', rotation: -1.5, zIndex: 2 }
    },
    isGrayscale: false
  },
  {
    name: 'Coach',
    role: 'Mentor',
    quote: 'Form first. Intensity next.',
    achievement: 'Certified Trainer',
    image: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=400&q=80',
    color: '#fb5607',
    position: {
      mobile: { top: '75%', left: '55%', width: '120px', height: '150px', rotation: 1, zIndex: 2 },
      desktop: { top: '55%', left: '65%', width: '195px', height: '245px', rotation: 1, zIndex: 2 }
    },
    isGrayscale: true
  },
  {
    name: 'Boxer',
    role: 'Discipline',
    quote: 'Keep your guard up.',
    achievement: 'Amateur Champ',
    image: 'https://images.unsplash.com/photo-1520975682031-7d8a47a7a4ae?auto=format&fit=crop&w=400&q=80',
    color: '#ff6b6b',
    position: {
      mobile: { top: '82%', left: '10%', width: '125px', height: '160px', rotation: 2, zIndex: 1 },
      desktop: { top: '52%', left: '85%', width: '205px', height: '260px', rotation: 2, zIndex: 1 }
    },
    isGrayscale: false
  },

  // Row 4 (New Members)
  {
    name: 'Dancer',
    role: 'Mobility',
    quote: 'Move with intention.',
    achievement: 'Flexibility Up',
    image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=400&q=80',
    color: '#8dd9ff',
    position: {
      mobile: { top: '85%', left: '60%', width: '120px', height: '155px', rotation: -2, zIndex: 2 },
      desktop: { top: '75%', left: '15%', width: '200px', height: '250px', rotation: -2, zIndex: 2 }
    },
    isGrayscale: true
  },
  {
    name: 'Swimmer',
    role: 'Hydro Power',
    quote: 'Water is my gym.',
    achievement: 'Lap Record',
    image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=400&q=80',
    color: '#8dd9ff',
    position: {
      mobile: { top: '90%', left: '5%', width: '130px', height: '160px', rotation: 1.5, zIndex: 1 },
      desktop: { top: '78%', left: '35%', width: '210px', height: '260px', rotation: 1.5, zIndex: 1 }
    },
    isGrayscale: false
  },
  {
    name: 'Hiker',
    role: 'Explorer',
    quote: 'The view is worth the climb.',
    achievement: 'Peak Performance',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=400&q=80',
    color: '#5ff7b6',
    position: {
      mobile: { top: '92%', left: '55%', width: '125px', height: '155px', rotation: -1, zIndex: 2 },
      desktop: { top: '80%', left: '55%', width: '195px', height: '245px', rotation: -1, zIndex: 2 }
    },
    isGrayscale: true
  },
  {
    name: 'Crossfit Athlete',
    role: 'Machine',
    quote: 'Forging elite fitness.',
    achievement: 'WOD Crusher',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=400&q=80',
    color: '#fb5607',
    position: {
      mobile: { top: '95%', left: '25%', width: '140px', height: '170px', rotation: 2, zIndex: 3 },
      desktop: { top: '75%', left: '75%', width: '220px', height: '280px', rotation: 2, zIndex: 3 }
    },
    isGrayscale: false
  },
  {
    name: 'Pilates Instructor',
    role: 'Control',
    quote: 'Core strength is key.',
    achievement: 'Perfect Form',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=400&q=80',
    color: '#ff6b6b',
    position: {
      mobile: { top: '98%', left: '65%', width: '120px', height: '150px', rotation: -2.5, zIndex: 1 },
      desktop: { top: '82%', left: '90%', width: '180px', height: '230px', rotation: -2.5, zIndex: 1 }
    },
    isGrayscale: true
  }
];

export default function MembersWall() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  // ... existing code ...

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setScrollY(window.scrollY - (rect.top + window.scrollY));
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
        rootMargin: '0px 0px -50px 0px'
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
      className="relative py-10 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-12 xl:px-20 overflow-hidden"
      style={{
        backgroundColor: '#050505',
        minHeight: isMobile ? 'auto' : '100vh'
      }}
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Header - Top Left - Exact Match */}
        <div
          className={`absolute top-6 sm:top-8 lg:top-12 left-4 sm:left-6 lg:left-12 xl:left-20 z-50 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
            }`}
        >
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] tracking-tight"
            style={{
              fontFamily: 'var(--font-antonio)',
              fontWeight: 700,
              letterSpacing: '-0.02em'
            }}
          >
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(180deg, #ffffff 0%, #d9d9e8 60%, #b9b9d8 100%)'
              }}
            >
              A judgement-free<br />space for everyone.
            </span>
          </h2>
        </div>

        {/* Collage Container */}
        <div className="origin-top-left scale-[0.97] sm:scale-[0.95] lg:scale-[0.9]">
          <div className={`relative ${isMobile ? 'min-h-[1400px]' : 'min-h-[900px] sm:min-h-[1000px] lg:min-h-[1050px]'} mt-20 sm:mt-28 lg:mt-32`}>
            {members.map((member, index) => {
              const delay = index * 80;
              const isHovered = hoveredIndex === index;
              const position = isMobile ? member.position.mobile : member.position.desktop;

              // Parallax calculation
              const parallaxSpeed = (index % 3 + 1) * 0.05;
              const parallaxOffset = isMobile ? 0 : scrollY * parallaxSpeed;

              return (
                <div
                  key={`${member.name}-${index}`}
                  className="absolute group cursor-pointer"
                  style={{
                    top: position.top,
                    left: position.left,
                    width: position.width,
                    height: position.height,
                    zIndex: isHovered ? 50 : position.zIndex,
                    '--rotation': `${position.rotation}deg`,
                    transition: 'opacity 0.6s ease-out, z-index 0.3s ease-out',
                    opacity: isVisible ? 1 : 0,
                    transform: `translateY(${parallaxOffset}px)`,
                    animation: isVisible
                      ? `fadeInUp 0.8s ease-out ${delay}ms both, float 6s ease-in-out infinite ${delay + 800}ms`
                      : 'none'
                  } as React.CSSProperties & { '--rotation': string }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Photo Card - Rounded Rectangle with Shadow */}
                  <div
                    className="relative w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-500"
                    style={{
                      transform: isHovered
                        ? `rotate(0deg) scale(1.05)`
                        : `rotate(${position.rotation}deg) scale(1)`,
                      filter: member.isGrayscale && !isHovered
                        ? 'grayscale(100%)'
                        : 'grayscale(0%)',
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15), 0 8px 30px rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      unoptimized
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 150px, 320px"
                    />

                    {/* Gradient Overlay - Only on Hover */}
                    <div
                      className={`absolute inset-0 transition-opacity duration-500 ${isHovered ? 'opacity-85' : 'opacity-0'
                        }`}
                      style={{
                        background: `linear-gradient(to bottom, ${member.color}E8, ${member.color}D0)`
                      }}
                    />

                    {/* Member Info - Revealed on Hover */}
                    <div
                      className={`absolute inset-0 p-4 sm:p-5 lg:p-6 flex flex-col justify-end transition-all duration-500 ${isHovered
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-4'
                        }`}
                    >
                      <div className="space-y-2">
                        <h4
                          className="text-xl sm:text-2xl lg:text-3xl font-bold text-white"
                          style={{
                            fontFamily: 'var(--font-antonio)',
                            fontWeight: 700
                          }}
                        >
                          {member.name}
                        </h4>
                        <p
                          className="text-sm sm:text-base text-white/90"
                          style={{
                            fontFamily: 'var(--font-antonio)',
                            fontWeight: 400
                          }}
                        >
                          {member.role}
                        </p>
                        <div
                          className="inline-block px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold text-white backdrop-blur-sm"
                          style={{
                            backgroundColor: `${member.color}90`,
                            border: `1.5px solid ${member.color}`
                          }}
                        >
                          {member.achievement}
                        </div>
                      </div>

                      {/* Quote - Appears on hover */}
                      <div
                        className={`mt-3 sm:mt-4 transition-all duration-700 delay-100 ${isHovered
                          ? 'opacity-100 translate-y-0'
                          : 'opacity-0 translate-y-4'
                          }`}
                      >
                        <p
                          className="text-sm sm:text-base leading-relaxed text-white line-clamp-3"
                          style={{
                            fontFamily: 'var(--font-geist-sans)',
                            fontWeight: 400
                          }}
                        >
                          &ldquo;{member.quote}&rdquo;
                        </p>
                      </div>
                    </div>

                    {/* Subtle border glow on hover */}
                    <div
                      className={`absolute inset-0 rounded-2xl sm:rounded-3xl transition-opacity duration-500 pointer-events-none ${isHovered ? 'opacity-100' : 'opacity-0'
                        }`}
                      style={{
                        boxShadow: `0 0 0 4px ${member.color}50, 0 0 40px ${member.color}30`
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
