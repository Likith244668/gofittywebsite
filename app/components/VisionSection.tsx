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

    return (
        <section
            id="about"
            ref={sectionRef}
            className="relative w-full py-24 px-4 sm:px-6 md:px-8 bg-[#0a0a0a] text-white overflow-hidden"
        >
            <div className={`max-w-7xl mx-auto transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="w-full md:w-1/2">
                        <h2
                            className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter"
                            style={{ fontFamily: 'var(--font-antonio)' }}
                        >
                            THE VISION
                        </h2>
                        <div className="h-1 w-20 bg-[#fb5607] mb-8"></div>
                    </div>

                    <div className="w-full md:w-1/2 text-lg md:text-xl text-gray-300 leading-relaxed">
                        <p className="mb-6">
                            We believe fitness isn't just about the hour you spend in the gym—it's about the other 23 hours of your day. It's the energy you bring to your work, the presence you share with your family, and the resilience you show in the face of challenges.
                        </p>
                        <p>
                            Our vision is to build a world where physical vitality fuels human potential. Where every movement counts, and every individual has the power to transcend their limits. This is more than a platform; it's a movement towards a life fully lived.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
