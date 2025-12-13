'use client';

import { useEffect, useRef, useState } from 'react';

export default function VisionSection() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const features = [
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            title: "Mental Resilience",
            description: "Focus at work & strength in challenges."
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            title: "Physical Vitality",
            description: "Fueling human potential beyond the gym."
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            title: "Community",
            description: "Powered by collective energy"
        }
    ];

    return (
        <section
            id="about"
            ref={sectionRef}
            className="relative w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-8 overflow-hidden"
            style={{
                background: 'linear-gradient(180deg, #000000 0%, #0a0a0a 50%, #000000 100%)'
            }}
        >
            {/* Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Orange Glow Top */}
                <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-20"
                    style={{
                        background: 'radial-gradient(circle, rgba(251,86,7,0.3) 0%, transparent 70%)',
                        filter: 'blur(80px)'
                    }}
                />

                {/* Animated Lines */}
                <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#fb5607]/30 to-transparent" />
                <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#fb5607]/30 to-transparent" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header Section */}
                <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="inline-block mb-4">
                        <span
                            className="text-sm sm:text-base md:text-lg lg:text-xl font-bold tracking-[0.3em] uppercase"
                            style={{
                                fontFamily: 'var(--font-antonio)',
                                color: '#fb5607'
                            }}
                        >
                            Gofytt
                        </span>
                    </div>

                    <h2
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tighter text-white"
                        style={{ fontFamily: 'var(--font-antonio)' }}
                    >
                        THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fb5607] to-[#ff6b35]">VISION</span>
                    </h2>

                    {/* Animated Underline */}
                    <div className="flex justify-center mb-8">
                        <div className="relative">
                            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-[#fb5607] to-transparent relative overflow-hidden">
                                <div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse"
                                    style={{ animationDuration: '2s' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    {/* Left Side - Content */}
                    <div className="space-y-6">
                        <div className="relative">
                            <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-[#fb5607] to-transparent opacity-50" />

                            <p
                                className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 leading-tight"
                                style={{ fontFamily: 'var(--font-antonio)' }}
                            >
                                Fitness is more than the gym.
                                <br />
                                <span className="text-[#fb5607]">It&apos;s life itself.</span>
                            </p>

                            <div className="space-y-3 text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed">
                                <p>
                                    We believe fitness isn&apos;t just about the hour you spend training - it&apos;s about the <span className="text-white font-semibold">other 23 hours</span> of your day. It is defined by the energy you bring to your work, the presence you share with family, and the resilience you show in the face of challenges.
                                </p>
                                <p>
                                    Our vision is to build a world where <span className="text-[#fb5607] font-semibold">physical vitality fuels human potential</span>. We are creating a future where every movement counts and every individual has the power to transcend their limits.
                                </p>
                                <p className="text-white font-semibold pt-2">
                                    This is more than a platform; it&apos;s a movement toward a life fully lived.
                                </p>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="pt-2">
                            <button
                                className="group relative inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#fb5607] to-[#ff6b35] px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base lg:text-lg font-bold text-white shadow-[0_8px_30px_rgba(251,86,7,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_40px_rgba(251,86,7,0.6)]"
                                style={{ fontFamily: 'var(--font-antonio)' }}
                            >
                                <span>START YOUR JOURNEY</span>
                                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Right Side - Feature Cards */}
                    <div className="space-y-3">
                        {features.map((feature, index) => (
                            <div
                                key={feature.title}
                                className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-black via-[#1a0600] to-[#0a0300] p-5 transition-all duration-500 hover:-translate-y-1 hover:border-[#fb5607]/50 hover:shadow-[0_10px_30px_rgba(251,86,7,0.2)] ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
                                style={{
                                    transitionDelay: `${300 + index * 100}ms`
                                }}
                            >
                                {/* Icon */}
                                <div className="flex items-start gap-4">
                                    <div
                                        className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-[#fb5607]/20 to-[#ff6b35]/10 flex items-center justify-center text-[#fb5607] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                                    >
                                        {feature.icon}
                                    </div>

                                    <div className="flex-1">
                                        <h3
                                            className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1"
                                            style={{ fontFamily: 'var(--font-antonio)' }}
                                        >
                                            {feature.title}
                                        </h3>
                                        <p className="text-xs sm:text-sm lg:text-base text-gray-400">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Hover Glow Effect */}
                                <div
                                    className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                                    style={{
                                        background: 'radial-gradient(circle at center, rgba(251,86,7,0.1) 0%, transparent 70%)'
                                    }}
                                />
                            </div>
                        ))}

                        {/* Stats Box */}
                        <div className={`relative overflow-hidden rounded-2xl border border-[#fb5607]/30 bg-gradient-to-br from-[#fb5607]/10 via-black to-black p-5 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                            <div className="relative z-10">
                                <div className="grid grid-cols-3 gap-3 text-center">
                                    <div>
                                        <div
                                            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#fb5607] mb-1"
                                            style={{ fontFamily: 'var(--font-antonio)' }}
                                        >
                                            1 Hour
                                        </div>
                                        <div className="text-xs sm:text-sm text-gray-400">Training</div>
                                    </div>
                                    <div>
                                        <div
                                            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#fb5607] mb-1"
                                            style={{ fontFamily: 'var(--font-antonio)' }}
                                        >
                                            23 Hours
                                        </div>
                                        <div className="text-xs sm:text-sm text-gray-400">Living</div>
                                    </div>
                                    <div>
                                        <div
                                            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#fb5607] mb-1"
                                            style={{ fontFamily: 'var(--font-antonio)' }}
                                        >
                                            Endless
                                        </div>
                                        <div className="text-xs sm:text-sm text-gray-400">Possibilities</div>
                                    </div>
                                </div>
                            </div>

                            {/* Animated Border Glow */}
                            <div className="absolute inset-0 rounded-2xl opacity-50">
                                <div
                                    className="absolute inset-0 rounded-2xl animate-pulse"
                                    style={{
                                        background: 'linear-gradient(45deg, transparent, rgba(251,86,7,0.1), transparent)',
                                        animationDuration: '3s'
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
