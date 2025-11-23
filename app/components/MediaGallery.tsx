'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

type MediaItem = {
  id: string;
  type: 'image' | 'video';
  src: string;
  title: string;
  createdAt: number;
};

// Helper function to format dates consistently (avoiding hydration mismatch)
function formatDate(timestamp: number): string {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const hours12 = hours % 12 || 12;
  return `${month}/${day}/${year}, ${hours12}:${minutes}:${seconds} ${ampm}`;
}

export default function MediaGallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  // Use fixed timestamps to avoid hydration mismatch
  const fixedNow = 1731420000000; // Fixed reference timestamp
  const [items, setItems] = useState<MediaItem[]>([
    {
      id: 'm1',
      type: 'image',
      src: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop',
      title: 'Strength Session',
      createdAt: fixedNow - 1000 * 60 * 60 * 24 * 4
    },
    {
      id: 'm2',
      type: 'image',
      src: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1200&auto=format&fit=crop',
      title: 'Mobility Flow',
      createdAt: fixedNow - 1000 * 60 * 60 * 24 * 2
    },
    {
      id: 'm3',
      type: 'video',
      src: 'https://www.w3schools.com/html/mov_bbb.mp4',
      title: 'Form Check: Squats',
      createdAt: fixedNow - 1000 * 60 * 60 * 6
    }
  ]);
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
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );
    const current = sectionRef.current;
    if (current) observer.observe(current);
    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

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
        <div
          className={`mb-8 sm:mb-10 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <h2
            className="mb-3 sm:mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight px-4"
            style={{ fontFamily: 'var(--font-antonio)', fontWeight: 700 }}
          >
            Media & Gallery
          </h2>
          <p
            className="mx-auto max-w-2xl text-sm sm:text-base lg:text-lg text-gray-300 xl:text-xl px-4"
            style={{ fontFamily: 'var(--font-geist-sans)', fontWeight: 400 }}
          >
            Browse the community gallery and check out the latest sessions.
          </p>
        </div>



        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <article
              key={item.id}
              className={`group relative overflow-hidden rounded-2xl sm:rounded-3xl border-2 border-white/10 bg-gradient-to-br from-[#2c0d54] via-[#1e0839] to-[#0f0420] shadow-[0_18px_40px_rgba(0,0,0,0.35)] transition-all duration-500 hover:-translate-y-2`}
              style={{
                animation: isVisible ? `fadeInUp 0.6s ease-out ${index * 80}ms both` : 'none'
              }}
            >
              <div className="relative h-48 sm:h-60 w-full overflow-hidden">
                {item.type === 'image' ? (
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  <video
                    src={item.src}
                    controls
                    className="h-full w-full object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              </div>
              <div className="p-4 sm:p-5">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <h4
                      className="mb-1 text-base sm:text-lg font-bold text-white truncate"
                      style={{ fontFamily: 'var(--font-antonio)', fontWeight: 700 }}
                    >
                      {item.title}
                    </h4>
                    <p
                      className="text-xs text-gray-400"
                      style={{ fontFamily: 'var(--font-geist-sans)', fontWeight: 400 }}
                    >
                      {formatDate(item.createdAt)}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


