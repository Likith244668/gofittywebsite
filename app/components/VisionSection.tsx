'use client';

import { useEffect, useRef, useState } from 'react';

type Pillar = {
    index: string;
    title: string;
    description: string;
    icon: React.ReactNode;
};

const pillars: Pillar[] = [
    {
        index: '01',
        title: 'Mental Resilience',
        description: 'Focus at work & strength in challenges.',
        icon: (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
    },
    {
        index: '02',
        title: 'Physical Vitality',
        description: 'Fueling human potential beyond the gym.',
        icon: (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
    },
    {
        index: '03',
        title: 'Community',
        description: 'Powered by collective energy.',
        icon: (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
    },
];

const stats: { value: string; label: string; highlight?: boolean }[] = [
    { value: '1 Hour', label: 'Training' },
    { value: '23 Hours', label: 'Living', highlight: true },
    { value: 'Endless', label: 'Possibilities' },
];

export default function VisionSection() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const node = sectionRef.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.15 }
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    // Single, calm reveal — opacity + lift. Stagger is applied via inline transitionDelay.
    const reveal = `transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
    }`;

    return (
        <section
            id="about"
            ref={sectionRef}
            aria-labelledby="vision-heading"
            className="relative w-full overflow-hidden bg-[#070707] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32"
        >
            {/* One soft ambient glow — replaces the old competing glows + animated lines */}
            <div
                aria-hidden
                className="pointer-events-none absolute -top-32 right-[-6rem] h-[460px] w-[460px] rounded-full opacity-[0.18]"
                style={{
                    background: 'radial-gradient(circle, rgba(251,86,7,0.5) 0%, transparent 70%)',
                    filter: 'blur(90px)',
                }}
            />

            <div className="relative z-10 mx-auto max-w-6xl">
                {/* Header — editorial eyebrow + giant display heading */}
                <header className={reveal}>
                    <div className="flex items-center gap-4">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#fb5607]" />
                        <span
                            className="text-xs font-bold uppercase tracking-[0.35em] text-[#fb5607] sm:text-sm"
                            style={{ fontFamily: 'var(--font-antonio)' }}
                        >
                            Gofytt
                        </span>
                        <span className="h-px flex-1 bg-white/10" />
                    </div>

                    <h2
                        id="vision-heading"
                        className="mt-6 text-5xl font-bold uppercase leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl"
                        style={{ fontFamily: 'var(--font-antonio)' }}
                    >
                        The <span className="text-[#fb5607]">Vision</span>
                    </h2>
                </header>

                {/* Body — manifesto + pillars */}
                <div className="mt-12 grid gap-12 sm:mt-16 lg:grid-cols-2 lg:gap-16">
                    {/* Manifesto */}
                    <div className={reveal} style={{ transitionDelay: '120ms' }}>
                        <p
                            className="text-2xl font-bold leading-tight text-white sm:text-3xl"
                            style={{ fontFamily: 'var(--font-antonio)' }}
                        >
                            Fitness is more than the gym.{' '}
                            <span className="text-[#fb5607]">It&apos;s life itself.</span>
                        </p>

                        <div className="mt-6 space-y-4 text-base leading-relaxed text-white/60">
                            <p>
                                We believe fitness isn&apos;t just about the hour you spend training — it&apos;s about the{' '}
                                <span className="font-semibold text-white">other 23 hours</span> of your day. It is
                                defined by the energy you bring to your work, the presence you share with family, and the
                                resilience you show in the face of challenges.
                            </p>
                            <p>
                                Our vision is to build a world where{' '}
                                <span className="font-semibold text-[#fb5607]">physical vitality fuels human potential</span>.
                                We are creating a future where every movement counts and every individual has the power to
                                transcend their limits.
                            </p>
                        </div>

                        <p
                            className="mt-6 text-lg font-semibold text-white"
                            style={{ fontFamily: 'var(--font-antonio)' }}
                        >
                            This is more than a platform; it&apos;s a movement toward a life fully lived.
                        </p>

                        <div className="mt-8">
                            <button
                                type="button"
                                className="group inline-flex items-center gap-3 rounded-full bg-[#fb5607] px-8 py-4 text-sm font-bold uppercase tracking-[0.08em] text-white shadow-[0_12px_34px_-8px_rgba(251,86,7,0.6)] transition-colors duration-300 hover:bg-[#ff6b35] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fb5607] focus-visible:ring-offset-2 focus-visible:ring-offset-[#070707]"
                                style={{ fontFamily: 'var(--font-antonio)' }}
                            >
                                Start your journey
                                <svg
                                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Pillars — reveal on wrapper, hover on card (decoupled so hover stays instant) */}
                    <div className="space-y-4">
                        {pillars.map((pillar, index) => (
                            <div
                                key={pillar.title}
                                className={reveal}
                                style={{ transitionDelay: `${200 + index * 110}ms` }}
                            >
                                <article className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-[transform,border-color,background-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-[#fb5607]/40 hover:bg-white/[0.04] hover:shadow-[0_14px_34px_-16px_rgba(251,86,7,0.35)]">
                                    <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#fb5607]/10 text-[#fb5607] transition-colors duration-300 group-hover:bg-[#fb5607]/15">
                                        {pillar.icon}
                                    </span>

                                    <div className="min-w-0">
                                        <h3
                                            className="text-lg font-bold text-white sm:text-xl"
                                            style={{ fontFamily: 'var(--font-antonio)' }}
                                        >
                                            {pillar.title}
                                        </h3>
                                        <p className="mt-0.5 text-sm text-white/50">{pillar.description}</p>
                                    </div>

                                    <span
                                        className="ml-auto self-start text-xs font-bold tracking-widest text-white/20"
                                        style={{ fontFamily: 'var(--font-antonio)' }}
                                    >
                                        {pillar.index}
                                    </span>
                                </article>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Closing stats — framed panel, the emotional core (1hr training, 23hr living).
                    Uses only non-prefixed grid-cols-3 + divide-x (already compiled project-wide) so it
                    never depends on a freshly-generated breakpoint utility. */}
                <div
                    className={`mt-14 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] sm:mt-16 ${reveal}`}
                    style={{ transitionDelay: '300ms' }}
                >
                    <div className="grid grid-cols-3 divide-x divide-white/10">
                        {stats.map((stat) => (
                            <div key={stat.label} className="px-2 py-6 text-center sm:px-4 sm:py-8">
                                <div
                                    className={`text-xl font-bold leading-none sm:text-3xl lg:text-4xl ${
                                        stat.highlight ? 'text-[#fb5607]' : 'text-white'
                                    }`}
                                    style={{ fontFamily: 'var(--font-antonio)' }}
                                >
                                    {stat.value}
                                </div>
                                <div className="mt-2 text-[0.6rem] uppercase tracking-[0.2em] text-white/40 sm:mt-2.5 sm:text-xs">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
