'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

type Article = {
  id: string;
  title: string;
  description: string;
  category: 'Fitness' | 'Nutrition' | 'Mindset' | 'Lifestyle';
  image: string;
  readTime: string;
  date: string;
};

const articles: Article[] = [
  // Fitness Articles
  {
    id: '1',
    title: 'The Science of Progressive Overload',
    description: 'Learn how to systematically increase your training intensity for continuous muscle growth and strength gains.',
    category: 'Fitness',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80',
    readTime: '5 min read',
    date: '2024-01-15'
  },
  {
    id: '2',
    title: 'Building Functional Strength',
    description: 'Discover exercises that improve your daily movement patterns and enhance overall physical performance.',
    category: 'Fitness',
    image: 'https://images.unsplash.com/photo-1546483875-ad9014c88eba?auto=format&fit=crop&w=600&q=80',
    readTime: '7 min read',
    date: '2024-01-10'
  },
  {
    id: '3',
    title: 'Recovery: The Missing Piece',
    description: 'Understanding the importance of rest, sleep, and active recovery in your fitness journey.',
    category: 'Fitness',
    image: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=600&q=80',
    readTime: '6 min read',
    date: '2024-01-05'
  },
  // Nutrition Articles
  {
    id: '4',
    title: 'Macronutrients Demystified',
    description: 'A comprehensive guide to proteins, carbs, and fats—and how to balance them for optimal results.',
    category: 'Nutrition',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=600&q=80',
    readTime: '8 min read',
    date: '2024-01-12'
  },
  {
    id: '5',
    title: 'Meal Timing for Performance',
    description: 'When and what to eat to maximize your workouts and accelerate recovery.',
    category: 'Nutrition',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80',
    readTime: '6 min read',
    date: '2024-01-08'
  },
  {
    id: '6',
    title: 'Hydration: Beyond Water',
    description: 'Understanding electrolytes, hydration strategies, and their impact on performance.',
    category: 'Nutrition',
    image: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&w=600&q=80',
    readTime: '5 min read',
    date: '2024-01-03'
  },
  // Mindset Articles
  {
    id: '7',
    title: 'Building Mental Resilience',
    description: 'Develop the psychological strength needed to overcome obstacles and stay committed to your goals.',
    category: 'Mindset',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80',
    readTime: '9 min read',
    date: '2024-01-14'
  },
  {
    id: '8',
    title: 'The Power of Habit Stacking',
    description: 'Learn how to build sustainable fitness habits by leveraging your existing routines.',
    category: 'Mindset',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=600&q=80',
    readTime: '7 min read',
    date: '2024-01-09'
  },
  {
    id: '9',
    title: 'Overcoming Plateaus',
    description: 'Strategies to break through training plateaus and reignite your progress when motivation wanes.',
    category: 'Mindset',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80',
    readTime: '6 min read',
    date: '2024-01-04'
  },
  // Lifestyle Articles
  {
    id: '10',
    title: 'Sleep: Your Secret Weapon',
    description: 'How quality sleep transforms your fitness results, recovery, and overall health.',
    category: 'Lifestyle',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=600&q=80',
    readTime: '8 min read',
    date: '2024-01-13'
  },
  {
    id: '11',
    title: 'Stress Management for Athletes',
    description: 'Practical techniques to manage stress and maintain balance in your fitness journey.',
    category: 'Lifestyle',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80',
    readTime: '7 min read',
    date: '2024-01-07'
  },
  {
    id: '12',
    title: 'Work-Life-Fitness Balance',
    description: 'Strategies to integrate fitness seamlessly into your busy lifestyle without burnout.',
    category: 'Lifestyle',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=80',
    readTime: '9 min read',
    date: '2024-01-02'
  }
];

const categories = [
  {
    name: 'Fitness',
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: '#fb5607',
    description: 'Training techniques, workout plans, and exercise science'
  },
  {
    name: 'Nutrition',
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    color: '#ff6b35',
    description: 'Nutrition science, meal planning, and dietary strategies'
  },
  {
    name: 'Mindset',
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    color: '#ff8800',
    description: 'Mental training, motivation, and psychological strategies'
  },
  {
    name: 'Lifestyle',
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    color: '#ff8800',
    description: 'Holistic wellness, balance, and sustainable living'
  }
];

export default function TheKnowledgeHub() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>(categories[0].name);
  const [hoveredArticle, setHoveredArticle] = useState<string | null>(null);
  const [windowHeight, setWindowHeight] = useState<number>(0);
  const stepsCount = categories.length;

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

  // Measure viewport height and handle scroll-driven category switching
  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight || 0);
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    let ticking = false;
    const handleScroll = () => {
      if (!sectionRef.current || windowHeight === 0) return;
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        const currentSection = sectionRef.current;
        if (!currentSection) {
          ticking = false;
          return;
        }
        const sectionTop = currentSection.getBoundingClientRect().top + window.scrollY;
        const spacerHeight = windowHeight * stepsCount; // total scrollable range for this pinned section
        const start = sectionTop;
        const end = sectionTop + spacerHeight - windowHeight; // last moment before unpin
        const current = window.scrollY;
        const within = current >= start && current <= end;

        if (within) {
          const usableRange = Math.max(spacerHeight - windowHeight, 1);
          const segment = usableRange / Math.max(stepsCount - 1, 1);
          const raw = (current - start) / segment;
          const index = Math.min(Math.max(Math.round(raw), 0), stepsCount - 1);
          const nextCategory = categories[index]?.name || categories[0].name;
          if (nextCategory !== activeCategory) {
            setActiveCategory(nextCategory);
          }
        }
        ticking = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll as EventListener);
    };
  }, [windowHeight, stepsCount, activeCategory]);

  const filteredArticles = articles.filter(article => article.category === activeCategory);

  return (
    <section
      ref={sectionRef}
      className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-10 xl:px-20"
      style={{
        fontFamily: 'var(--font-antonio)',
        fontWeight: 700,
        backgroundColor: '#151515'
      }}
    >
      <div style={{ height: windowHeight ? `${windowHeight * stepsCount}px` : undefined }}>
        <div className={`mx-auto max-w-7xl text-white ${windowHeight ? 'sticky top-0 min-h-screen' : ''}`}>
          {/* Header Section */}
          <div
            className={`mb-10 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
          >
            <h2
              className="mb-4 text-4xl tracking-tight sm:text-5xl md:text-6xl"
              style={{ fontFamily: 'var(--font-antonio)', fontWeight: 700 }}
            >
              The Knowledge Hub
            </h2>
            <p
              className="mx-auto max-w-2xl text-lg text-gray-300 sm:text-xl"
              style={{ fontFamily: 'var(--font-geist-sans)', fontWeight: 400 }}
            >
              Expert insights, science-backed strategies, and practical guides to support your transformation journey.
            </p>
          </div>

          {/* Category Tabs */}
          <div
            className={`mb-6 flex flex-wrap justify-center gap-2 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
          >
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`group flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300 sm:px-6 sm:py-3 sm:text-sm ${activeCategory === category.name
                    ? 'bg-white/20 text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                style={{
                  fontFamily: 'var(--font-antonio)',
                  fontWeight: 700,
                  borderColor: activeCategory === category.name ? category.color : 'transparent',
                  borderWidth: activeCategory === category.name ? '2px' : '0px'
                }}
              >
                <span style={{ color: activeCategory === category.name ? category.color : 'currentColor' }}>
                  {category.icon}
                </span>
                {category.name}
              </button>
            ))}
          </div>

          {/* Category Card removed per request */}

          {/* Articles Grid */}
          <div
            className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-3 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'
              }`}
          >
            {filteredArticles.map((article, index) => {
              const category = categories.find(cat => cat.name === article.category);
              const isHovered = hoveredArticle === article.id;

              return (
                <article
                  key={article.id}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-black via-[#1a0600] to-[#0a0300] transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_25px_50px_rgba(0,0,0,0.5)]"
                  style={{
                    animation: isVisible
                      ? `fadeInUp 0.6s ease-out ${index * 100}ms both`
                      : 'none'
                  }}
                  onMouseEnter={() => setHoveredArticle(article.id)}
                  onMouseLeave={() => setHoveredArticle(null)}
                >
                  {/* Article Image */}
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"
                      style={{
                        background: `linear-gradient(to top, ${category?.color || '#fb5607'}40, transparent)`
                      }}
                    />

                    {/* Category Badge */}
                    <div
                      className="absolute top-4 left-4 rounded-full px-3 py-1.5 text-xs font-semibold backdrop-blur-sm"
                      style={{
                        backgroundColor: `${category?.color || '#fb5607'}20`,
                        color: category?.color || '#fb5607',
                        border: `1px solid ${category?.color || '#fb5607'}40`
                      }}
                    >
                      {article.category}
                    </div>
                  </div>

                  {/* Article Content */}
                  <div className="p-6">
                    <div className="mb-3 flex items-center gap-3 text-xs text-gray-400">
                      <span>{article.readTime}</span>
                      <span>•</span>
                      <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                    </div>

                    <h3
                      className="mb-3 text-xl font-bold text-white transition-colors duration-300 group-hover:text-[#fb5607] sm:text-2xl"
                      style={{ fontFamily: 'var(--font-antonio)', fontWeight: 700 }}
                    >
                      {article.title}
                    </h3>

                    <p
                      className="mb-4 text-sm leading-relaxed text-gray-300 sm:text-base"
                      style={{ fontFamily: 'var(--font-geist-sans)', fontWeight: 400 }}
                    >
                      {article.description}
                    </p>

                    {/* Read More Link */}
                    <div className="flex items-center gap-2 text-sm font-semibold text-[#fb5607] transition-all duration-300 group-hover:gap-4">
                      <span>Read Article</span>
                      <svg
                        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div
                    className={`absolute inset-0 -z-10 rounded-3xl transition-opacity duration-500 ${isHovered ? 'opacity-20' : 'opacity-0'
                      }`}
                    style={{
                      backgroundColor: category?.color || '#fb5607',
                      filter: 'blur(20px)'
                    }}
                  />
                </article>
              );
            })}
          </div>

          {/* Call to Action */}
          <div
            className={`mt-16 text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
          >
            <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-gradient-to-br from-black via-[#1a0600] to-[#0a0300] p-10 shadow-[0_25px_60px_rgba(0,0,0,0.55)]">
              <h3
                className="mb-4 text-2xl font-semibold text-white sm:text-3xl"
                style={{ fontFamily: 'var(--font-antonio)', fontWeight: 700 }}
              >
                Stay Updated
              </h3>
              <p
                className="mb-6 text-base leading-relaxed text-gray-300 sm:text-lg"
                style={{ fontFamily: 'var(--font-geist-sans)', fontWeight: 400 }}
              >
                Get the latest articles, tips, and insights delivered to your inbox. Join thousands of members staying ahead of their fitness journey.
              </p>
              <button
                className="rounded-xl bg-gradient-to-r from-[#fb5607] to-[#ff8800] px-8 py-4 text-lg font-bold text-white shadow-[0_8px_30px_rgba(251,86,7,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_40px_rgba(251,86,7,0.6)]"
                style={{ fontFamily: 'var(--font-antonio)', fontWeight: 700 }}
              >
                Subscribe to Newsletter
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



