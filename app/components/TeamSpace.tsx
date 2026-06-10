'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';

/* ------------------------------------------------------------------ *
 * Data — every member carries its own accent colour so the whole
 * scene (glow, ghost name, card ring, story accents) re-tints as the
 * reel turns. Distinct from the Ambassador stage: this is an editorial
 * split — a vertical parallax reel paired with a crossfading story.
 * ------------------------------------------------------------------ */
type TribeMember = {
  id: string;
  name: string;
  role: string;
  story: string;
  transformation: { before: string; after: string; metric: string };
  image: string;
  quote: string;
  achievements: string[];
};

/* One section, one primary. The whole component reads from this single
   accent so the colour never drifts as the deck rotates. The softer
   secondary is used only in the headline gradient. */
const ACCENT = '#fb5607';

const tribeMembers: TribeMember[] = [
  {
    id: '1',
    name: 'Rahul Mehta',
    role: 'Software Engineer',
    story:
      'I was struggling with diabetes and low energy. After joining Gofytt, I completely transformed my life. The personalized coaching and community support made all the difference. Now I run marathons and feel more alive than ever.',
    transformation: { before: 'HbA1c 10.9%', after: 'HbA1c 6.2%', metric: 'Diabetes Reversed' },
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    quote: 'The 1% daily improvements add up to life-changing transformations.',    achievements: ['Lost 28kg', 'Ran 3 Marathons', 'Diabetes Free'],
  },
  {
    id: '2',
    name: 'Priya Desai',
    role: 'Marketing Manager',
    story:
      'As a working mom, I thought fitness was impossible. Gofytt showed me how to integrate wellness into my busy life. The flexible programs and supportive community helped me regain my strength and confidence.',
    transformation: { before: 'Energy Low', after: 'Energy High', metric: 'Lifestyle Reset' },
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80',
    quote: "Fitness isn't about perfection — it's about progress, one day at a time.",    achievements: ['Lost 22kg', 'Gained Strength', 'Work-Life Balance'],
  },
  {
    id: '3',
    name: 'Arjun Patel',
    role: 'Entrepreneur',
    story:
      'I was always the "skinny guy" and wanted to build muscle. The expert coaching at Gofytt taught me proper form, nutrition, and recovery. In 8 months, I gained 15kg of muscle and completely changed my physique.',
    transformation: { before: '58 kg', after: '73 kg', metric: 'Muscle Gain' },
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80',
    quote: 'Consistency beats intensity. Small daily actions create massive results.',    achievements: ['+15kg Muscle', 'Strength +200%', 'Competition Ready'],
  },
  {
    id: '4',
    name: 'Ananya Reddy',
    role: 'Teacher',
    story:
      "After my second child, I lost all confidence in my body. Gofytt's holistic approach helped me rebuild not just physically, but mentally. The community became my second family, and I found strength I never knew I had.",
    transformation: { before: 'Confidence Low', after: 'Confidence High', metric: 'Full Comeback' },
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80',
    quote: 'Strength comes in many forms. I found mine through this community.',    achievements: ['Postpartum Recovery', 'Regained Confidence', 'Inspiring Others'],
  },
  {
    id: '5',
    name: 'Vikram Singh',
    role: 'Doctor',
    story:
      "As a healthcare professional, I knew the importance of fitness but struggled to practice what I preached. Gofytt's science-backed approach and accountability system helped me finally walk the talk.",
    transformation: { before: 'BP 150/95', after: 'BP 120/80', metric: 'Health Optimised' },
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    quote: 'Leading by example — now I can truly guide my patients.',    achievements: ['Normalised BP', 'Better Sleep', 'Sharper Focus'],
  },
  {
    id: '6',
    name: 'Meera Iyer',
    role: 'Yoga Instructor',
    story:
      'I thought I knew everything about fitness, but Gofytt opened my eyes to the power of integrated training. Combining strength, flexibility, and mindset created results I never imagined possible.',
    transformation: { before: 'Flexible', after: 'Unbreakable', metric: 'Peak Performance' },
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=80',
    quote: 'Learning never stops. Gofytt taught me to be a better teacher.',    achievements: ['Deep Mobility', 'Core Strength', 'Better Teaching'],
  },
];

const N = tribeMembers.length;
const DURATION = 720;
const EASE = 'cubic-bezier(0.16, 1, 0.3, 1)';
const AUTOPLAY = 6000;

/* shortest signed distance from the active index (wraps around the ring) */
const offsetOf = (i: number, active: number) => {
  const raw = (i - active + N) % N;
  return raw > N / 2 ? raw - N : raw;
};

const pad = (n: number) => String(n).padStart(2, '0');

/* Inline, dependency-free arrow (lucide geometry) */
const Arrow = ({ dir, className }: { dir: 'up' | 'down' | 'left' | 'right'; className?: string }) => {
  const rotate = dir === 'up' ? -90 : dir === 'down' ? 90 : dir === 'left' ? 180 : 0;
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.25}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <path d="M5 12h14" />
      <path d="m13 5 7 7-7 7" />
    </svg>
  );
};

/* Soft film grain, inline data-URI (no external asset) */
const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E\")";

export default function TeamSpace() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const lockRef = useRef(false);
  const dragRef = useRef<{ x: number; on: boolean }>({ x: 0, on: false });

  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const member = tribeMembers[active];

  /* reveal on scroll */
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setIsVisible(true)),
      { threshold: 0.15 }
    );
    const el = sectionRef.current;
    if (el) obs.observe(el);
    return () => {
      if (el) obs.unobserve(el);
    };
  }, []);

  /* responsive flag + reduced-motion preference */
  useEffect(() => {
    const sync = () => {
      setIsMobile(window.innerWidth < 1024);
      setReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    };
    sync();
    window.addEventListener('resize', sync);
    return () => window.removeEventListener('resize', sync);
  }, []);

  /* preload every portrait so the reel never flashes blank */
  useEffect(() => {
    tribeMembers.forEach((m) => {
      const img = new window.Image();
      img.src = m.image;
    });
  }, []);

  const lockFor = (ms: number) => {
    lockRef.current = true;
    window.setTimeout(() => {
      lockRef.current = false;
    }, ms);
  };

  const go = useCallback((dir: number) => {
    if (lockRef.current) return;
    lockFor(DURATION * 0.55);
    setActive((p) => (p + dir + N) % N);
  }, []);

  const select = useCallback(
    (i: number) => {
      if (i === active || lockRef.current) return;
      lockFor(DURATION * 0.55);
      setActive(i);
    },
    [active]
  );

  /* autoplay — advances after each interval, restarts whenever the active
     card, pause state, or visibility changes */
  useEffect(() => {
    if (paused || !isVisible) return;
    const t = window.setTimeout(() => go(1), AUTOPLAY);
    return () => window.clearTimeout(t);
  }, [active, paused, isVisible, go]);

  /* mouse parallax — written to CSS custom properties so the scene
     reacts every frame without ever re-rendering React */
  useEffect(() => {
    if (isMobile || reduced) return;
    const stage = stageRef.current;
    if (!stage) return;
    const onMove = (e: PointerEvent) => {
      const r = stage.getBoundingClientRect();
      const nx = (e.clientX - r.left) / r.width - 0.5;
      const ny = (e.clientY - r.top) / r.height - 0.5;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        stage.style.setProperty('--px', nx.toFixed(3));
        stage.style.setProperty('--py', ny.toFixed(3));
      });
    };
    const onLeave = () => {
      stage.style.setProperty('--px', '0');
      stage.style.setProperty('--py', '0');
    };
    stage.addEventListener('pointermove', onMove);
    stage.addEventListener('pointerleave', onLeave);
    return () => {
      stage.removeEventListener('pointermove', onMove);
      stage.removeEventListener('pointerleave', onLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isMobile, reduced]);

  /* horizontal swipe / drag — works on both axes are horizontal now,
     so it never fights vertical page scroll */
  const onPointerDown = (e: React.PointerEvent) => {
    dragRef.current = { x: e.clientX, on: true };
  };
  const onPointerUp = (e: React.PointerEvent) => {
    if (!dragRef.current.on) return;
    dragRef.current.on = false;
    const dx = e.clientX - dragRef.current.x;
    if (Math.abs(dx) > 45) go(dx < 0 ? 1 : -1);
  };

  /* card geometry.
     • mobile  — a clean horizontal reel (active centred, neighbours peek L/R)
     • desktop — a card DECK that fans out to the RIGHT: the active card sits
       a touch left of centre and the upcoming cards stack off to the right,
       each tilted a few degrees like a hand of cards. Previous cards slide
       out to the left and fade. */
  const cardStyle = (off: number): CSSProperties => {
    const base: CSSProperties = {
      transition: reduced
        ? 'none'
        : `transform ${DURATION}ms ${EASE}, opacity ${DURATION}ms ${EASE}, filter ${DURATION}ms ${EASE}`,
      willChange: 'transform, opacity, filter',
    };

    if (isMobile) {
      const dir = off > 0 ? 1 : -1;
      if (off === 0)
        return { ...base, transform: 'translate(-50%, -50%) scale(1)', opacity: 1, filter: 'blur(0px)', zIndex: 30 };
      if (Math.abs(off) === 1)
        return {
          ...base,
          transform: `translate(-50%, -50%) translateX(${dir * 84}%) scale(0.82)`,
          opacity: 1,
          filter: 'blur(1.5px)',
          zIndex: 20,
        };
      return {
        ...base,
        transform: `translate(-50%, -50%) translateX(${dir * 150}%) scale(0.66)`,
        opacity: 0,
        filter: 'blur(4px)',
        zIndex: 10,
      };
    }

    // desktop deck fanning to the right
    switch (off) {
      case 0:
        return {
          ...base,
          transform: 'translate(-50%, -50%) translateX(-16%) rotate(0deg) scale(1)',
          opacity: 1,
          filter: 'blur(0px)',
          zIndex: 40,
        };
      case 1:
        return {
          ...base,
          transform: 'translate(-50%, -50%) translateX(42%) translateY(3%) rotate(5deg) scale(0.84)',
          opacity: 1,
          filter: 'blur(1.5px)',
          zIndex: 30,
        };
      case 2:
        return {
          ...base,
          transform: 'translate(-50%, -50%) translateX(86%) translateY(7%) rotate(9deg) scale(0.7)',
          opacity: 1,
          filter: 'blur(2.5px)',
          zIndex: 20,
        };
      case -1:
        return {
          ...base,
          transform: 'translate(-50%, -50%) translateX(-66%) rotate(-7deg) scale(0.78)',
          opacity: 0,
          filter: 'blur(4px)',
          zIndex: 10,
        };
      default:
        return {
          ...base,
          transform: 'translate(-50%, -50%) translateX(112%) rotate(11deg) scale(0.6)',
          opacity: 0,
          filter: 'blur(4px)',
          zIndex: 5,
        };
    }
  };

  return (
    <section
      ref={sectionRef}
      aria-label="Team spotlight"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:py-28"
      style={{ background: 'linear-gradient(180deg, #000 0%, #0a0a0a 50%, #000 100%)' }}
    >
      {/* brand grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.12]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(251,86,7,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(251,86,7,0.10) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
            maskImage: 'radial-gradient(120% 90% at 50% 30%, #000 30%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(120% 90% at 50% 30%, #000 30%, transparent 80%)',
          }}
        />
      </div>

      {/* dynamic glow keyed to the active member's colour */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 opacity-25 blur-[120px]"
        style={{
          background: `radial-gradient(circle, ${ACCENT} 0%, transparent 70%)`,
          transition: 'background 900ms ease-out',
        }}
      />

      <div ref={stageRef} className="relative mx-auto max-w-7xl">
        {/* ── Header ─────────────────────────────────────────────── */}
        <div
          className={`mb-12 text-center transition-all duration-1000 sm:mb-16 ${
            isVisible ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'
          }`}
        >
          <div className="mb-4 inline-flex items-center gap-3">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#fb5607]" />
            <span
              className="text-sm font-bold uppercase tracking-[0.3em] text-[#fb5607]"
              style={{ fontFamily: 'var(--font-antonio)' }}
            >
              Our Tribe
            </span>
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#fb5607]" />
          </div>
          <h2
            className="mb-4 text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl"
            style={{ fontFamily: 'var(--font-antonio)' }}
          >
            TEAM{' '}
            <span className="bg-gradient-to-r from-[#fb5607] to-[#ff6b35] bg-clip-text text-transparent">
              SPOTLIGHT
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-base text-gray-400 sm:text-lg">
            Real transformations from real people — browse the reel, every face has a story.
          </p>
        </div>

        {/* ── Editorial split ────────────────────────────────────── */}
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-6">
          {/* STORY PANEL */}
          <div className="order-2 lg:order-1 lg:col-span-5">
            {/* counter */}
            <div className="mb-6 flex items-center gap-4">
              <span
                className="text-2xl font-bold leading-none"
                style={{ fontFamily: 'var(--font-antonio)', color: ACCENT, transition: 'color 600ms ease' }}
              >
                {pad(active + 1)}
              </span>
              <span className="h-px flex-1 bg-white/15" />
              <span className="text-sm font-bold text-gray-500" style={{ fontFamily: 'var(--font-antonio)' }}>
                {pad(N)}
              </span>
            </div>

            {/* crossfading content — remounts on each change to replay the entrance */}
            <div key={active} className="animate-fade-in-up">
              <p className="mb-1 text-sm font-bold uppercase tracking-[0.2em]" style={{ color: ACCENT }}>
                {member.role}
              </p>
              <h3
                className="mb-5 text-4xl font-bold leading-none text-white sm:text-5xl"
                style={{ fontFamily: 'var(--font-antonio)' }}
              >
                {member.name}
              </h3>

              {/* before → after capsule */}
              <div
                className="mb-5 flex items-center gap-3 rounded-2xl border p-4"
                style={{
                  borderColor: `${ACCENT}40`,
                  background: `linear-gradient(135deg, ${ACCENT}12 0%, transparent 100%)`,
                }}
              >
                <div className="flex-1 text-center">
                  <div className="mb-1 text-[10px] uppercase tracking-wider text-gray-500">Before</div>
                  <div className="text-base font-bold text-white sm:text-lg">{member.transformation.before}</div>
                </div>
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                  style={{ backgroundColor: `${ACCENT}20`, color: ACCENT }}
                >
                  <Arrow dir="right" className="h-5 w-5" />
                </div>
                <div className="flex-1 text-center">
                  <div className="mb-1 text-[10px] uppercase tracking-wider text-gray-500">After</div>
                  <div className="text-base font-bold sm:text-lg" style={{ color: ACCENT }}>
                    {member.transformation.after}
                  </div>
                </div>
              </div>

              {/* metric ribbon — outlined chip (no fill): white text, accent border */}
              <div
                className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white"
                style={{ backgroundColor: 'transparent', border: `1px solid ${ACCENT}` }}
              >
                <span aria-hidden style={{ color: ACCENT }}>✓</span>
                {member.transformation.metric}
              </div>

              {/* quote */}
              <p
                className="mb-5 border-l-2 pl-4 text-lg italic leading-relaxed text-white"
                style={{ borderColor: ACCENT }}
              >
                &ldquo;{member.quote}&rdquo;
              </p>

              {/* story */}
              <p className="mb-6 text-sm leading-relaxed text-gray-400 sm:text-base">{member.story}</p>

              {/* achievements */}
              <div className="flex flex-wrap gap-2">
                {member.achievements.map((a) => (
                  <span
                    key={a}
                    className="rounded-full px-3 py-1.5 text-xs font-bold text-white"
                    style={{ backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>

            {/* controls — outside the keyed block so they never re-animate */}
            <div className="mt-8 flex items-center gap-3">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous member"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition-all duration-300 hover:border-[#fb5607] hover:bg-[#fb5607]/10"
              >
                <Arrow dir="left" className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next member"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition-all duration-300 hover:border-[#fb5607] hover:bg-[#fb5607]/10"
              >
                <Arrow dir="right" className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* PARALLAX REEL */}
          <div className="order-1 lg:order-2 lg:col-span-7">
            <div
              className="relative mx-auto select-none"
              style={{
                height: isMobile ? 'clamp(340px, 96vw, 440px)' : 'clamp(440px, 56vh, 560px)',
                maxWidth: '100%',
                touchAction: 'pan-y',
              }}
              onPointerDown={onPointerDown}
              onPointerUp={onPointerUp}
            >
              {/* the card reel, with a subtle 3D pointer tilt */}
              <div
                className="absolute inset-0"
                style={{
                  transformStyle: 'preserve-3d',
                  transform:
                    'perspective(1500px) rotateY(calc(var(--px,0) * 7deg)) rotateX(calc(var(--py,0) * -7deg)) translate3d(calc(var(--px,0) * -12px), calc(var(--py,0) * -12px), 0)',
                  transition: 'transform 200ms ease-out',
                }}
              >
                {tribeMembers.map((m, i) => {
                  const off = offsetOf(i, active);
                  const isCenter = off === 0;
                  return (
                    <button
                      key={m.id}
                      type="button"
                      tabIndex={isCenter ? -1 : 0}
                      aria-label={isCenter ? undefined : `View ${m.name}`}
                      onClick={() => !isCenter && select(i)}
                      className="group absolute left-1/2 top-1/2 overflow-hidden rounded-[28px] p-0"
                      style={{
                        ...cardStyle(off),
                        width: isMobile ? 'clamp(230px, 70vw, 300px)' : 'clamp(250px, 26vw, 360px)',
                        height: isMobile ? 'clamp(300px, 92vw, 400px)' : 'clamp(340px, 35vw, 480px)',
                        border: `2px solid ${isCenter ? ACCENT : 'rgba(255,255,255,0.10)'}`,
                        boxShadow: isCenter ? `0 30px 70px -22px ${ACCENT}80` : '0 18px 40px rgba(0,0,0,0.5)',
                        background: '#0a0a0a',
                        cursor: isCenter ? 'default' : 'pointer',
                      }}
                    >
                      {/* inner image — parallax-shifts opposite its reel position */}
                      <span className="absolute inset-0 overflow-hidden">
                        <Image
                          src={m.image}
                          alt={m.name}
                          fill
                          draggable={false}
                          sizes="(max-width: 1024px) 70vw, 360px"
                          className="object-cover"
                          style={{
                            objectPosition: 'center top',
                            transform: `scale(1.16) translateX(${off * -4}%)`,
                            transition: `transform ${DURATION}ms ${EASE}`,
                          }}
                        />
                      </span>

                      {/* soft tint so the deck reads with depth (no text) */}
                      <span
                        className="pointer-events-none absolute inset-0"
                        style={{
                          background: `linear-gradient(180deg, ${ACCENT}00 45%, rgba(0,0,0,0.45) 100%)`,
                        }}
                      />

                      {/* dimming scrim on the back cards — keeps them OPAQUE so the
                          front card cleanly covers the one behind (no see-through mix) */}
                      {!isCenter && (
                        <span
                          className="pointer-events-none absolute inset-0"
                          style={{
                            background: `rgba(0,0,0,${Math.abs(off) >= 2 ? 0.6 : 0.42})`,
                            transition: `background ${DURATION}ms ${EASE}`,
                          }}
                        />
                      )}

                      {/* corner brackets, active card only */}
                      {isCenter && (
                        <>
                          <span className="absolute left-3 top-3 h-8 w-8 border-l-2 border-t-2" style={{ borderColor: ACCENT }} />
                          <span className="absolute right-3 top-3 h-8 w-8 border-r-2 border-t-2" style={{ borderColor: ACCENT }} />
                          <span className="absolute bottom-3 left-3 h-8 w-8 border-b-2 border-l-2" style={{ borderColor: ACCENT }} />
                          <span className="absolute bottom-3 right-3 h-8 w-8 border-b-2 border-r-2" style={{ borderColor: ACCENT }} />
                        </>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* film grain — topmost, inert */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: GRAIN,
          backgroundSize: '200px 200px',
          backgroundRepeat: 'repeat',
          opacity: 0.35,
          mixBlendMode: 'soft-light',
        }}
      />
    </section>
  );
}
