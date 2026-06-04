'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import Image from 'next/image';

/* ------------------------------------------------------------------ *
 * Data — each ambassador carries its own scene colour so the entire
 * stage crossfades (background, glow, ghost name) as the carousel turns.
 * ------------------------------------------------------------------ */
type Ambassador = {
  id: number;
  name: string;
  first: string;
  role: string;
  tagline: string;
  image: string;
  bg: string;
  tint: string;
  stats: { label: string; value: string }[];
};

const AMBASSADORS: Ambassador[] = [
  {
    id: 1,
    name: 'Sarah Chen',
    first: 'Sarah',
    role: 'Elite Fitness Ambassador',
    tagline: 'Transforming lives through movement, one rep at a time.',
    image: '/sarah-chen-cutout.png',
    bg: '#E8623A',
    tint: '#F79B7F',
    stats: [
      { label: 'Transformations', value: '1.2K' },
      { label: 'Engagement', value: '8.5%' },
      { label: 'Experience', value: '10+ yrs' },
    ],
  },
  {
    id: 2,
    name: 'Marcus Williams',
    first: 'Marcus',
    role: 'Pro Athlete & Performance Coach',
    tagline: 'Excellence lives in the work nobody sees.',
    image: '/marcus-williams-cutout.png',
    bg: '#3A6CD6',
    tint: '#8DC0FF',
    stats: [
      { label: 'Success stories', value: '850' },
      { label: 'Engagement', value: '9.2%' },
      { label: 'Experience', value: '12+ yrs' },
    ],
  },
  {
    id: 3,
    name: 'Priya Desai',
    first: 'Priya',
    role: 'Wellness & Nutrition Expert',
    tagline: 'Holistic health is the real peak performance.',
    image: '/priya-desai-cutout.png',
    bg: '#D45B9C',
    tint: '#F0A8CE',
    stats: [
      { label: 'Transformations', value: '2.1K' },
      { label: 'Engagement', value: '11.3%' },
      { label: 'Experience', value: '8+ yrs' },
    ],
  },
];

const N = AMBASSADORS.length;
const DURATION = 650;
const EASE = 'cubic-bezier(0.4, 0, 0.2, 1)';

/* Inline, dependency-free icons (lucide-style geometry, strokeWidth 2.25) */
const ArrowIcon = ({ dir, className }: { dir: 'left' | 'right'; className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.25}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    style={dir === 'left' ? { transform: 'scaleX(-1)' } : undefined}
  >
    <path d="M5 12h14" />
    <path d="m13 5 7 7-7 7" />
  </svg>
);

/* Soft film grain — generated inline as a data URI (no external stylesheet) */
const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E\")";

type Role = 'center' | 'left' | 'right' | 'back';

export default function AmbassadorProgram() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [paused, setPaused] = useState(false);

  const lockRef = useRef(false);
  const activeRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* keep a ref in sync so callbacks never read a stale index */
  useEffect(() => {
    activeRef.current = activeIndex;
  }, [activeIndex]);

  /* responsive flag */
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 640);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  /* preload every portrait once on mount */
  useEffect(() => {
    AMBASSADORS.forEach((a) => {
      const img = new window.Image();
      img.src = a.image;
    });
  }, []);

  const lock = useCallback(() => {
    lockRef.current = true;
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      lockRef.current = false;
    }, DURATION);
  }, []);

  const goTo = useCallback(
    (i: number) => {
      if (lockRef.current || i === activeRef.current) return;
      lock();
      setActiveIndex(i);
    },
    [lock]
  );

  /* gentle autoplay — pauses on hover / focus and never fights the lock */
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      if (!lockRef.current) {
        lock();
        setActiveIndex((prev) => (prev + 1) % N);
      }
    }, 3000);
    return () => clearInterval(id);
  }, [paused, lock]);

  /* role of a card relative to the current centre */
  const roleOf = (i: number): Role => {
    const offset = (i - activeIndex + N) % N;
    if (offset === 0) return 'center';
    if (offset === 1) return 'right';
    if (offset === N - 1) return 'left';
    return 'back';
  };

  /* the single transition string shared by every animated element */
  const tween = (props: string[]) =>
    props.map((p) => `${p} ${DURATION}ms ${EASE}`).join(', ');

  /* per-role visual recipe for the portrait cards */
  const cardVisual = (role: Role): CSSProperties => {
    const sideX = isMobile ? 64 : 108; // % of own width
    const base: CSSProperties = {
      transition: tween(['transform', 'filter', 'opacity']),
      willChange: 'transform, filter, opacity',
    };
    switch (role) {
      case 'center':
        return {
          ...base,
          transform: `translate(-50%, -50%) translateZ(${isMobile ? 0 : 80}px) scale(${isMobile ? 1 : 1.16})`,
          filter: 'blur(0px)',
          opacity: 1,
          zIndex: 30,
        };
      case 'left':
        return {
          ...base,
          transform: `translate(-50%, -50%) translateX(-${sideX}%) rotateY(32deg) scale(0.62)`,
          filter: 'blur(2px)',
          opacity: isMobile ? 0 : 0.55,
          zIndex: 12,
        };
      case 'right':
        return {
          ...base,
          transform: `translate(-50%, -50%) translateX(${sideX}%) rotateY(-32deg) scale(0.62)`,
          filter: 'blur(2px)',
          opacity: isMobile ? 0 : 0.55,
          zIndex: 12,
        };
      default: // back (only with 4+ items; harmless for 3)
        return {
          ...base,
          transform: 'translate(-50%, -50%) translateY(-6%) scale(0.46)',
          filter: 'blur(4px)',
          opacity: 0,
          zIndex: 5,
        };
    }
  };

  return (
    <section
      aria-label="Ambassador programme"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      className="relative w-full overflow-hidden text-white"
      style={{
        minHeight: '100vh',
        backgroundColor: '#000000',
        fontFamily: 'var(--font-geist-sans), system-ui, sans-serif',
      }}
    >
      <div className="relative w-full" style={{ height: '100vh', overflow: 'hidden' }}>
        {/* depth wash — keeps the scene from looking flat as colours change */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            zIndex: 1,
            background:
              'radial-gradient(120% 90% at 50% 8%, rgba(255,255,255,0.16) 0%, transparent 45%), linear-gradient(to bottom, transparent 55%, rgba(0,0,0,0.28) 100%)',
            transition: tween(['background']),
          }}
        />

        {/* moving glow that picks up each ambassador's tint */}
        <div
          className="pointer-events-none absolute left-1/2 top-[54%] -translate-x-1/2 -translate-y-1/2"
          style={{
            zIndex: 1,
            width: 'min(720px, 80vw)',
            height: 'min(720px, 80vw)',
            borderRadius: '9999px',
            background: 'radial-gradient(circle, rgba(255,255,255,0.10) 0%, transparent 62%)',
            opacity: 0.5,
            filter: 'blur(8px)',
          }}
        />

        {/* ghost display name — all names stacked, crossfading in Antonio */}
        <div
          className="pointer-events-none absolute inset-x-0 flex select-none items-center justify-center"
          style={{ zIndex: 2, top: isMobile ? '13%' : '17%' }}
        >
          {AMBASSADORS.map((a, i) => (
            <span
              key={a.id}
              className="absolute uppercase"
              style={{
                fontFamily: 'var(--font-antonio), sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(78px, 26vw, 360px)',
                lineHeight: 1,
                letterSpacing: '-0.02em',
                whiteSpace: 'nowrap',
                color: '#fb5607',
                opacity: i === activeIndex ? 0.55 : 0,
                transform: `translateY(${i === activeIndex ? 0 : 14}px)`,
                transition: tween(['opacity', 'transform']),
              }}
            >
              {a.first}
            </span>
          ))}
        </div>

        {/* brand label */}
        <div
          className="absolute left-4 top-6 sm:left-8"
          style={{ zIndex: 60 }}
        >
          <span
            className="text-[11px] font-semibold uppercase sm:text-xs"
            style={{ letterSpacing: '0.22em', opacity: 0.9 }}
          >
            GoFitty&nbsp;/&nbsp;Ambassadors
          </span>
        </div>

        {/* carousel stage */}
        <div
          className="absolute inset-0"
          style={{ zIndex: 3, perspective: '2200px' }}
        >
          {AMBASSADORS.map((a, i) => {
            const role = roleOf(i);
            const clickable = role === 'left' || role === 'right';
            return (
              <button
                key={a.id}
                type="button"
                tabIndex={clickable ? 0 : -1}
                aria-label={clickable ? `View ${a.name}` : undefined}
                aria-hidden={!clickable && role !== 'center'}
                onClick={() => clickable && goTo(i)}
                className="group absolute p-0"
                style={{
                  ...cardVisual(role),
                  left: '50%',
                  top: isMobile ? '44%' : '53%',
                  width: isMobile ? 'min(300px, 74vw)' : 'min(340px, 27vw)',
                  aspectRatio: '3 / 4',
                  cursor: clickable ? 'pointer' : 'default',
                  backgroundColor: 'transparent',
                }}
              >
                <Image
                  src={a.image}
                  alt={a.name}
                  fill
                  draggable={false}
                  priority={i === 0}
                  sizes="(max-width: 640px) 74vw, 340px"
                  className="object-cover"
                  style={{
                    objectPosition: 'center bottom',
                    filter:
                      role === 'center'
                        ? 'drop-shadow(0 22px 38px rgba(0,0,0,0.55))'
                        : undefined,
                  }}
                />
                {/* inner sheen + bottom legibility veil */}
                <span
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(180deg, transparent 0%, transparent 60%, rgba(0,0,0,0.45) 100%)',
                  }}
                />
                {/* nameplate only on the active card */}
                <span
                  className="pointer-events-none absolute inset-x-0 bottom-0 px-5 pb-4"
                  style={{
                    opacity: role === 'center' ? 1 : 0,
                    transition: tween(['opacity']),
                  }}
                >
                  <span
                    className="block uppercase"
                    style={{
                      fontFamily: 'var(--font-antonio), sans-serif',
                      fontWeight: 700,
                      fontSize: 'clamp(20px, 2.4vw, 30px)',
                      letterSpacing: '0.01em',
                      lineHeight: 1.05,
                      textShadow: '0 2px 14px rgba(0,0,0,0.7)',
                    }}
                  >
                    {a.name}
                  </span>
                  <span
                    className="mt-0.5 block text-[11px] font-medium uppercase sm:text-xs"
                    style={{ letterSpacing: '0.16em', opacity: 0.85 }}
                  >
                    {a.role}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        {/* progress dots — centred directly beneath the active photo */}
        <div
          className="absolute left-1/2 flex items-center gap-2"
          style={{
            zIndex: 60,
            top: isMobile ? '44%' : '53%',
            // drop below the card: ~half the (scaled) card height + a small gap
            transform: isMobile
              ? 'translate(-50%, calc(min(300px, 74vw) * 0.667 + 22px))'
              : 'translate(-50%, calc(min(340px, 27vw) * 0.8 + 30px))',
            transition: tween(['transform']),
          }}
        >
          {AMBASSADORS.map((a, i) => (
            <button
              key={a.id}
              type="button"
              aria-label={`Go to ${a.name}`}
              aria-current={i === activeIndex}
              onClick={() => goTo(i)}
              className="rounded-full"
              style={{
                height: 6,
                width: i === activeIndex ? 30 : 6,
                backgroundColor:
                  i === activeIndex ? '#ffffff' : 'rgba(255,255,255,0.4)',
                transition: tween(['width', 'background-color']),
              }}
            />
          ))}
        </div>

        {/* bottom-left — crossfading details + controls */}
        <div
          className="absolute bottom-24 left-4 sm:bottom-40 sm:left-16"
          style={{ zIndex: 60, maxWidth: 'min(92vw, 440px)' }}
        >
          <span
            className="block text-[10px] font-semibold uppercase sm:text-xs"
            style={{ letterSpacing: '0.2em', opacity: 0.8 }}
          >
            Featured Ambassador
          </span>

          {/* fixed-height stack so the controls below never jump */}
          <div className="relative" style={{ height: isMobile ? 112 : 162, marginTop: 10 }}>
            {AMBASSADORS.map((a, i) => (
              <div
                key={a.id}
                className="absolute inset-0"
                style={{
                  opacity: i === activeIndex ? 1 : 0,
                  transform: `translateY(${i === activeIndex ? 0 : 16}px)`,
                  transition: tween(['opacity', 'transform']),
                  pointerEvents: i === activeIndex ? 'auto' : 'none',
                }}
              >
                <p
                  className="text-base font-semibold sm:text-lg"
                  style={{ opacity: 0.95 }}
                >
                  {a.role}
                </p>
                <p
                  className="mt-1 hidden text-sm sm:block"
                  style={{ opacity: 0.82, lineHeight: 1.5 }}
                >
                  {a.tagline}
                </p>

                <div className="mt-3 flex gap-2.5 sm:mt-4">
                  {a.stats.map((s) => (
                    <div
                      key={s.label}
                      className="rounded-xl border border-white/25 px-3 py-1.5"
                      style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}
                    >
                      <span className="block text-base font-bold leading-none sm:text-lg">
                        {s.value}
                      </span>
                      <span
                        className="mt-1 block text-[9px] uppercase sm:text-[10px]"
                        style={{ letterSpacing: '0.12em', opacity: 0.75 }}
                      >
                        {s.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* bottom-right display link */}
        <a
          href="#join-ambassador"
          className="group absolute bottom-24 right-4 flex items-center gap-2 uppercase sm:bottom-40 sm:right-10"
          style={{
            zIndex: 60,
            fontFamily: 'var(--font-antonio), sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(20px, 4vw, 56px)',
            letterSpacing: '-0.02em',
            lineHeight: 1,
            color: '#ffffff',
            opacity: 0.95,
            textDecoration: 'none',
            transition: 'opacity 200ms ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.95')}
        >
          Join Now
          <ArrowIcon
            dir="right"
            className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1 sm:h-8 sm:w-8"
          />
        </a>

        {/* film grain — topmost, inert */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            zIndex: 50,
            backgroundImage: GRAIN,
            backgroundSize: '200px 200px',
            backgroundRepeat: 'repeat',
            opacity: 0.4,
            mixBlendMode: 'soft-light',
          }}
        />
      </div>
    </section>
  );
}
