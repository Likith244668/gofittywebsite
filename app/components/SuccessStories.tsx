'use client';

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState, useRef } from "react";

type SuccessStory = {
  name: string;
  badge: string;
  statLabel: string;
  statFrom: string;
  statTo: string;
  description: string;
  videoId: string;
};

const successStories: SuccessStory[] = [
  {
    name: "Sudipto Sarar",
    badge: "Diabetes Reversal",
    statLabel: "HbA1c",
    statFrom: "10.9%",
    statTo: "6.7%",
    description: "Diagnosed at 30, I thought my life was over. Gofytt didn't just reverse my numbers; they gave me my future back.",
    videoId: "dQw4w9WgXcQ",
  },
  {
    name: "Sulekha",
    badge: "Type 2 Reversal",
    statLabel: "HbA1c",
    statFrom: "10.1%",
    statTo: "5.1%",
    description: "As a busy tech professional, health took a backseat. Gofytt's coaching integrated seamlessly into my chaotic schedule.",
    videoId: "aqz-KE-bpKQ",
  },
  {
    name: "Shrinivas",
    badge: "Metabolic Reset",
    statLabel: "HbA1c",
    statFrom: "9.8%",
    statTo: "5.4%",
    description: "From day one, the personalized plan stabilized my sugars. I regained confidence I hadn't felt in years.",
    videoId: "ysz5S6PUM-U",
  },
  {
    name: "Madhav",
    badge: "Energy Restoration",
    statLabel: "Sugar Level",
    statFrom: "431",
    statTo: "114",
    description: "My energy returned, and my sugars dropped dramatically. It's not just a diet; it's a complete lifestyle upgrade.",
    videoId: "oHg5SJYRHA0",
  },
  {
    name: "Aparna",
    badge: "Lifestyle Balance",
    statLabel: "HbA1c",
    statFrom: "9.2%",
    statTo: "5.2%",
    description: "Balancing family and health seemed impossible until Gofytt showed me how to prioritize without sacrifice.",
    videoId: "6_b7RDuLwcI",
  },
  {
    name: "Raghav",
    badge: "Fitness Transformation",
    statLabel: "Sugar Level",
    statFrom: "398",
    statTo: "118",
    description: "I went from constant fatigue to running 5Ks. The daily accountability was the game-changer I needed.",
    videoId: "0O2aH4XLbto",
  },
];

export default function SuccessStories() {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-24 sm:py-32 bg-[#050505] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#fb5607] rounded-full blur-[120px] opacity-20 mix-blend-screen" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#2c0d54] rounded-full blur-[120px] opacity-20 mix-blend-screen" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 sm:mb-20 gap-8">
          <div className="max-w-2xl">
            <h2
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tighter mb-4"
              style={{ fontFamily: 'var(--font-antonio)' }}
            >
              REAL STORIES.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fb5607] to-[#ff6b6b]">REAL RESULTS.</span>
            </h2>
            <p className="text-gray-400 text-lg" style={{ fontFamily: 'var(--font-geist-sans)' }}>
              See how everyday people are reclaiming their health and rewriting their futures with Gofytt.
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-4">
            <button
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white transition-all hover:bg-[#fb5607] hover:border-[#fb5607] hover:scale-110"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white transition-all hover:bg-[#fb5607] hover:border-[#fb5607] hover:scale-110"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-12 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {successStories.map((story, index) => (
            <div
              key={index}
              className="flex-none w-[85vw] sm:w-[400px] snap-center group"
            >
              <div className="relative h-[500px] rounded-3xl overflow-hidden bg-[#1a1a1a] border border-white/10 transition-all duration-500 hover:border-[#fb5607]/50 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]">

                {/* Video/Image Area */}
                <div className="relative h-[280px] w-full bg-black">
                  {activeVideoId === story.videoId ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${story.videoId}?autoplay=1&modestbranding=1&rel=0`}
                      title={story.name}
                      className="w-full h-full object-cover"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <>
                      <Image
                        src={`https://img.youtube.com/vi/${story.videoId}/hqdefault.jpg`}
                        alt={story.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />

                      {/* Play Button */}
                      <button
                        onClick={() => setActiveVideoId(story.videoId)}
                        className="absolute inset-0 flex items-center justify-center group/btn"
                      >
                        <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-300 group-hover/btn:scale-110 group-hover/btn:bg-[#fb5607] group-hover/btn:border-[#fb5607]">
                          <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                        </div>
                      </button>
                    </>
                  )}
                </div>

                {/* Content Area */}
                <div className="p-6 relative">
                  <div className="absolute -top-12 right-6 bg-[#fb5607] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                    {story.badge}
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-1" style={{ fontFamily: 'var(--font-antonio)' }}>
                    {story.name}
                  </h3>

                  {/* Stats Row */}
                  <div className="flex items-center gap-3 mb-4 text-sm">
                    <span className="text-gray-400 font-medium">{story.statLabel}</span>
                    <div className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-lg border border-white/10">
                      <span className="text-white font-bold">{story.statFrom}</span>
                      <svg className="w-4 h-4 text-[#fb5607]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                      <span className="text-[#5ff7b6] font-bold">{story.statTo}</span>
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-3" style={{ fontFamily: 'var(--font-geist-sans)' }}>
                    "{story.description}"
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

