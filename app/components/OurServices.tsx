'use client';

import { useEffect, useRef, useState } from 'react';

const heroService = {
  name: 'FITZEN',
  image:
    'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=1200&q=80'
};

const verticalServices = [
  {
    name: 'ZUMBA',
    image:
      'https://images.unsplash.com/photo-1605296867424-35fc25c92102?auto=format&fit=crop&w=900&q=80',
    radii:
      'rounded-tl-[20px] rounded-tr-[100px] rounded-br-[20px] rounded-bl-[20px]',
    textSide: 'left-7'
  },
  {
    name: 'YOGA',
    image:
      'https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?auto=format&fit=crop&w=900&q=80',
    radii:
      'rounded-tl-[20px] rounded-tr-[100px] rounded-br-[20px] rounded-bl-[20px]',
    textSide: 'right-7'
  },
  {
    name: 'CROSSFIT',
    image:
      'https://images.unsplash.com/photo-1546483875-ad9014c88eba?auto=format&fit=crop&w=900&q=80',
    radii:
      'rounded-tl-[20px] rounded-tr-[100px] rounded-br-[20px] rounded-bl-[20px]',
    textSide: 'right-7'
  }
];

const PlusBadge = () => (
  <span className="absolute top-4 left-5 flex h-8 w-8 items-center justify-center rounded-full border border-white/75 bg-black/35 text-base text-white backdrop-blur">
    +
  </span>
);

export default function OurServices() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-10 xl:px-20"
      style={{
        fontFamily: 'var(--font-antonio)',
        fontWeight: 700,
        backgroundColor: '#1a1a1a',
        backgroundImage:
          'radial-gradient(1200px 600px at 50% 0%, rgba(255,255,255,0.06), rgba(0,0,0,0) 60%)'
      }}
      ref={sectionRef}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-8 sm:gap-12 text-white lg:flex-row lg:items-start">
        {/* Main featured service card */}
        <div className="flex flex-col gap-6 sm:gap-8 lg:w-[40%]">
          <article
            className="group relative flex min-h-[400px] sm:min-h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-3xl sm:rounded-[56px] bg-gray-900/10 ring-1 ring-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.25),0_30px_80px_rgba(251,86,7,0.12)] transition-transform duration-300 ease-out hover:-translate-y-4"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url(${heroService.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              willChange: 'transform'
            }}
          >
            {/* Soft animated glow */}
            <div
              className={`pointer-events-none absolute inset-0 transition-opacity duration-700 ${isInView ? 'opacity-50' : 'opacity-0'} group-hover:opacity-60`}
              style={{ borderRadius: 'inherit' }}
            >
              <div
                className="absolute -inset-6 blur-2xl animate-pulse"
                style={{
                  borderRadius: 'inherit',
                  background:
                    'radial-gradient(closest-side, rgba(251,86,7,0.18), rgba(251,86,7,0.06), transparent)',
                  animationDuration: '2600ms'
                }}
              />
            </div>
            <PlusBadge />
            <span className="text-3xl sm:text-4xl lg:text-[42px] tracking-[0.2rem] sm:tracking-[0.28rem] text-white px-4 text-center">
              {heroService.name}
            </span>
          </article>

          <p
            className="max-w-sm text-sm leading-relaxed text-gray-300 sm:text-base px-2"
            style={{ fontFamily: 'var(--font-geist-sans)', fontWeight: 400 }}
          >
            From strength training and muscle building to fat loss and endurance workouts, we offer expert guidance, top-tier equipment, and a supportive environment to keep you motivated.
          </p>
        </div>

        {/* Vertical service cards */}
        <div className="flex w-full gap-4 sm:gap-6 overflow-x-auto pb-4 lg:w-[60%] lg:overflow-visible scrollbar-hide">
          {verticalServices.map((service) => (
            <article
              key={service.name}
              className={`group relative flex h-[400px] sm:h-[480px] lg:h-[540px] min-w-[180px] sm:min-w-[200px] lg:min-w-[210px] flex-1 items-end justify-center overflow-hidden bg-gray-900/10 ring-1 ring-white/10 shadow-[0_10px_28px_rgba(0,0,0,0.25),0_24px_60px_rgba(251,86,7,0.10)] transition-transform duration-300 ease-out hover:-translate-y-4 rounded-2xl sm:${service.radii}`}
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.25)), url(${service.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                willChange: 'transform'
              }}
            >
              {/* Soft animated glow */}
              <div
                className={`pointer-events-none absolute inset-0 transition-opacity duration-700 ${isInView ? 'opacity-40' : 'opacity-0'} group-hover:opacity-45`}
                style={{ borderRadius: 'inherit' }}
              >
                <div
                  className="absolute -inset-6 blur-2xl animate-pulse"
                  style={{
                    borderRadius: 'inherit',
                    background:
                      'radial-gradient(closest-side, rgba(251,86,7,0.16), rgba(251,86,7,0.05), transparent)',
                    animationDuration: '2600ms'
                  }}
                />
              </div>
              <PlusBadge />
              <span
                className={`absolute ${service.textSide} bottom-12 sm:bottom-16 flex h-[70%] items-end text-2xl sm:text-3xl lg:text-[32px] tracking-[0.3rem] sm:tracking-[0.44rem] text-white`}
                style={{
                  writingMode: 'vertical-rl',
                  transform: 'rotate(180deg)'
                }}
              >
                {service.name}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
