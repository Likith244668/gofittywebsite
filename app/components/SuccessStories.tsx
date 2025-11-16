"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";

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
    badge: "Sudipto Sarar’s Diabetes Reversal Journey",
    statLabel: "HbA1c",
    statFrom: "10.9%",
    statTo: "6.7%",
    description:
      "“Hi, I’m Sudipto Sarar. I was diagnosed with diabetes at the age of 30, which marked the beginning of a long and difficult journey. But with Gofytt, I completely transformed my life Hi, I’m Sudipto Sarar. I was diagnosed with diabetes at the age of 30, which marked the beginning of a long and difficult journey. But with Gofytt, I completely transformed my life here its a long story to tell here Sudipto Sarar. I was diagnosed with diabetes at the age of 30, which marked the beginning of a long and difficult journey. But with Gofytt, I completely transformed my life..",
    videoId: "dQw4w9WgXcQ",
  },
  {
    name: "Sulekha",
    badge: "Sulekha Kumari’s Diabetes Reversal Journey",
    statLabel: "HbA1c",
    statFrom: "10.1%",
    statTo: "5.1%",
    description:
      "“Hi, my name is Sulekha. I’m 34 years old and I work as a cybersecurity professional in Bangalore. In December 2022, I was diagnosed with Type 2 diabetes. With Gofytt’s coaching, everything changed “Hi, I’m Sudipto Sarar. I was diagnosed with diabetes at the age of 30, which marked the beginning of a long and difficult journey. But with Gofytt, I completely transformed my life Sudipto Sarar. I was diagnosed with diabetes at the age of 30, which marked the beginning of a long and difficult journey. But with Gofytt, I completely transformed my life here its a long story to tell here Sudipto Sarar. I was diagnosed with diabetes at the age of 30, which marked the beginning of a long and difficult journey. But with Gofytt, I completely transformed my life..",
    videoId: "aqz-KE-bpKQ",
  },
  {
    name: "Shrinivas",
    badge: "Shrinivas’s Diabetes Reversal Journey",
    statLabel: "HbA1c",
    statFrom: "9.8%",
    statTo: "5.4%",
    description:
      "“My name is Shrinivas, and I recently began my journey with Gofytt. From day one, the personalised plans helped me stabilise my sugars and regain confidence “Hi, I’m Sudipto Sarar. I was diagnosed with diabetes at the age of 30, which marked the beginning of a long and difficult journey. But with Gofytt, I completely transformed my life Hi, I’m Sudipto Sarar. I was diagnosed with diabetes at the age of 30, which marked the beginning of a long and difficult journey. But with Gofytt, I completely transformed my life here its a long story to tell here Sudipto Sarar. I was diagnosed with diabetes at the age of 30, which marked the beginning of a long and difficult journey. But with Gofytt, I completely transformed my life..",
    videoId: "ysz5S6PUM-U",
  },
  {
    name: "Madhav",
    badge: "Madhav Bhat’s Diabetes Reversal Journey",
    statLabel: "Sugar Level",
    statFrom: "431 mg/dL",
    statTo: "114 mg/dL",
    description:
      "“Hello, I’m Madhav. My journey with diabetes began in 2022. With the structured support from Gofytt, my energy returned and my sugars dropped dramatically “Hi, I’m Sudipto Sarar. I was diagnosed with diabetes at the age of 30, which marked the beginning of a long and difficult journey. But with Gofytt, I completely transformed my life Hi, I’m Sudipto Sarar. I was diagnosed with diabetes at the age of 30, which marked the beginning of a long and difficult journey. But with Gofytt, I completely transformed my life here its a long story to tell here Sudipto Sarar. I was diagnosed with diabetes at the age of 30, which marked the beginning of a long and difficult journey. But with Gofytt, I completely transformed my life..",
    videoId: "oHg5SJYRHA0",
  },
  {
    name: "Aparna",
    badge: "Aparna’s Diabetes Reversal Journey",
    statLabel: "HbA1c",
    statFrom: "9.2%",
    statTo: "5.2%",
    description:
      "“I’m Aparna, a working mom who was struggling to balance family and health. Gofytt helped me rework my lifestyle without drastic sacrifices…”",
    videoId: "6_b7RDuLwcI",
  },
  {
    name: "Raghav",
    badge: "Raghav’s Diabetes Reversal Journey",
    statLabel: "Sugar Level",
    statFrom: "398 mg/dL",
    statTo: "118 mg/dL",
    description:
      "“Raghav here! Daily accountability from my Gofytt coach kept me consistent. In just months, I went from constant fatigue to running 5Ks…”",
    videoId: "0O2aH4XLbto",
  },
  {
    name: "Leena",
    badge: "Leena’s Diabetes Reversal Journey",
    statLabel: "HbA1c",
    statFrom: "11.0%",
    statTo: "6.0%",
    description:
      "“Leena speaking! I joined Gofytt after countless failed diets. The science-backed plan and community support finally made healthy living natural…”",
    videoId: "V-_O7nl0Ii0",
  },
  {
    name: "Prakash",
    badge: "Prakash’s Diabetes Reversal Journey",
    statLabel: "Sugar Level",
    statFrom: "410 mg/dL",
    statTo: "120 mg/dL",
    description:
      "“I’m Prakash. My doctors warned me about insulin. Thanks to Gofytt’s personalised workouts and nutrition, I avoided it and feel younger than ever…”",
    videoId: "j5-yKhDd64s",
  },
];

export default function SuccessStories() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth >= 1280) {
        setVisibleCount(4);
      } else if (window.innerWidth >= 768) {
        setVisibleCount(2);
      } else {
        setVisibleCount(1);
      }
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const maxIndex = useMemo(() => Math.max(successStories.length - visibleCount, 0), [visibleCount]);
  const clampedIndex = useMemo(() => Math.min(currentIndex, maxIndex), [currentIndex, maxIndex]);

  const clampIndex = useCallback(
    (value: number) => {
      const next = Math.min(Math.max(value, 0), maxIndex);
      return next;
    },
    [maxIndex],
  );

  const canGoBackward = clampedIndex > 0;
  const canGoForward = clampedIndex < maxIndex;

  const cardWidth = useMemo(
    () => `calc(${(100 / visibleCount).toFixed(4)}% - 1.25rem)`,
    [visibleCount],
  );

  const handleBackward = () => {
    if (canGoBackward) {
      setCurrentIndex((prev) => clampIndex(clampIndex(prev) - 1));
    }
  };

  const handleForward = () => {
    if (canGoForward) {
      setCurrentIndex((prev) => clampIndex(clampIndex(prev) + 1));
    }
  };

  const slideStyle = useMemo(() => {
    const shift = (100 / visibleCount) * clampedIndex;
    return {
      transform: `translateX(-${shift}%)`,
    };
  }, [clampedIndex, visibleCount]);

  const getThumbnailUrl = (videoId: string) =>
    `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  const handlePlayVideo = (videoId: string) => {
    setActiveVideoId(videoId);
  };

  const handleCloseVideo = () => {
    setActiveVideoId(null);
  };

  return (
    <section className="bg-[#151515] py-12 text-white" aria-labelledby="success-stories-heading">
      <div className="text-center">
        <h2
          id="success-stories-heading"
          className="text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl"
        >
          Real-life Success Stories Of Our Diabetes Reversal Program
        </h2>
      </div>

      <div className="relative mt-8 w-full">
        <div className="overflow-hidden">
          <div
            className="flex gap-4 transition-transform duration-500 ease-out"
            style={slideStyle}
          >
            {successStories.map((story) => (
              <article
                key={story.name}
                style={{ flex: `0 0 ${cardWidth}`, maxWidth: cardWidth }}
                className="mx-auto flex min-h-[520px] flex-col rounded-2xl border border-white/10 bg-gradient-to-b from-[#2c0d54] via-[#1e0839] to-[#0f0420] p-5 shadow-[0_18px_40px_rgba(0,0,0,0.35)] transition hover:-translate-y-1.5 hover:shadow-[0_22px_50px_rgba(0,0,0,0.5)]"
              >
                <div className="relative mb-4 overflow-hidden rounded-xl border border-white/10">
                  {activeVideoId === story.videoId ? (
                    <div className="relative aspect-[16/9]">
                      <iframe
                        src={`https://www.youtube.com/embed/${story.videoId}?autoplay=1&rel=0&modestbranding=1`}
                        title={`${story.name} testimonial`}
                        className="h-full w-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                      <button
                        type="button"
                        onClick={handleCloseVideo}
                        className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white transition hover:bg-black/80"
                        aria-label="Close video"
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
                          <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
                        </svg>
                      </button>
                    </div>
                  ) : (
                    <div className="relative aspect-[16/9]">
                      <Image
                        src={getThumbnailUrl(story.videoId)}
                        alt={`${story.name} testimonial thumbnail`}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-[#2c0d54]/95 via-[#2c0d54]/70 to-[#2c0d54]/20" />
                      <div className="relative z-10 flex h-full flex-col justify-between p-5">
                        <div className="space-y-1.5 max-w-[70%]">
                          <p className="text-xs uppercase tracking-[0.2em] text-[#8dd9ff]">Gofytt</p>
                          <h3 className="text-lg font-semibold uppercase leading-tight text-white">
                            {story.badge}
                          </h3>
                        </div>
                        <div className="mt-4 flex items-center gap-2 text-xs font-medium text-[#f6b14b]">
                          <span>{story.statLabel}:</span>
                          <span className="text-white">{story.statFrom}</span>
                          <span className="text-[#ff6b6b]">➜</span>
                          <span>{story.statTo}</span>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => handlePlayVideo(story.videoId)}
                        className="group absolute inset-0 z-20 flex items-center justify-center"
                        aria-label={`Play ${story.name}'s story`}
                      >
                        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ff4f64] shadow-lg transition group-hover:scale-110 group-hover:shadow-xl">
                          <svg
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            className="h-6 w-6 fill-white"
                          >
                            <path d="M10 8.64 15 12l-5 3.36z" />
                          </svg>
                        </span>
                      </button>
                    </div>
                  )}
                </div>

                <div className="flex flex-col flex-1 text-left">
                  <h4 className="text-xl font-semibold text-white">{story.name}</h4>
                  <div className="mt-2 flex items-center gap-2 text-xs text-[#d3c5ff]">
                    <span className="font-semibold text-white">{story.statLabel}:</span>
                    <span>{story.statFrom}</span>
                    <span className="text-[#ff6b6b]">➜</span>
                    <span className="text-[#5ff7b6]">{story.statTo}</span>
                  </div>
                  <hr className="my-4 border-white/10" />
                  <p className="text-xs leading-relaxed text-[#c5b6f5]">{story.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={handleBackward}
            disabled={!canGoBackward}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:border-white/40 hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-40"
            aria-label="View previous success stories"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            onClick={handleForward}
            disabled={!canGoForward}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:border-white/40 hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-40"
            aria-label="View more success stories"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

