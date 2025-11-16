'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const brands = [
  { id: 'b1', name: 'Forbes', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Forbes_logo.svg' },
  { id: 'b2', name: 'TechCrunch', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/54/TechCrunch_logo.svg' },
  { id: 'b3', name: 'Mens Health', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Men%27s_Health_logo.svg' },
  { id: 'b4', name: 'Nike', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg' },
  { id: 'b5', name: 'Adidas', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg' },
  { id: 'b6', name: 'Under Armour', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Under_armour_logo.svg' },
  { id: 'b7', name: 'WHO', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/WHO_logo.svg' }
];

export default function PressMedia() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  // duplicate list for seamless marquee
  const marqueeItems = [...brands, ...brands, ...brands];

  return (
    <section
      ref={sectionRef}
      className="py-24 px-6 sm:px-10 lg:px-20"
      style={{ fontFamily: 'var(--font-antonio)', fontWeight: 700, backgroundColor: '#0f0420' }}
    >
      <div className="mx-auto max-w-7xl text-white">
        <div
          className={`mb-10 text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2
            className="mb-3 text-3xl sm:text-4xl md:text-5xl"
            style={{ fontFamily: 'var(--font-antonio)', fontWeight: 700 }}
          >
            Press & Media
          </h2>
          <p
            className="mx-auto max-w-2xl text-base text-gray-300 sm:text-lg"
            style={{ fontFamily: 'var(--font-geist-sans)', fontWeight: 400 }}
          >
            Brand mentions and companies we work with.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
          <div
            className="flex items-center gap-12 py-10 will-change-transform"
            style={{
              animation: isVisible ? 'marquee 30s linear infinite' : 'none'
            }}
          >
            {marqueeItems.map((brand, idx) => (
              <div
                key={`${brand.id}-${idx}`}
                className="flex min-w-40 items-center justify-center opacity-80 transition-opacity hover:opacity-100"
                style={{ paddingInline: '12px' }}
                title={brand.name}
              >
                <div className="relative h-10 w-40">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    fill
                    className="object-contain"
                    sizes="160px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
      `}</style>
    </section>
  );
}


