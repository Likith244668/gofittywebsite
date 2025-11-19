'use client';

export default function CommunitySpace() {
  return (
    <section 
      className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-10 xl:px-20"
      style={{
        fontFamily: 'var(--font-antonio)',
        fontWeight: 700,
      }}
    >
      <div className="mx-auto max-w-6xl text-white">
        {/* Header Section */}
        <div className="mb-8 sm:mb-10 text-center px-4">
          <h2 
            className="mb-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight"
            style={{ fontFamily: 'var(--font-antonio)', fontWeight: 700 }}
          >
            Community Space
          </h2>
          <h3 
            className="text-lg sm:text-xl text-[#fb5607] md:text-2xl lg:text-3xl"
            style={{ fontFamily: 'var(--font-antonio)', fontWeight: 700 }}
          >
            The 1% Fit Philosophy
          </h3>
        </div>

        {/* Triangle Philosophy Section */}
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <p 
              className="text-base leading-relaxed text-gray-300 sm:text-lg"
              style={{ fontFamily: 'var(--font-geist-sans)', fontWeight: 400 }}
            >
              At the heart of our community lies The 1% Fit Philosophy—a holistic approach to wellness that recognizes true fitness extends far beyond the physical. We believe in nurturing three interconnected dimensions that form the foundation of a complete, fulfilling life.
            </p>
          </div>

          {/* Triangle Visualization */}
          <div className="relative mb-8 sm:mb-12 flex min-h-[240px] sm:min-h-[320px] items-center justify-center px-4">
            {/* Triangle SVG */}
            <svg 
              viewBox="0 0 400 350" 
              className="w-full max-w-[280px] sm:max-w-sm md:max-w-md"
              style={{ filter: 'drop-shadow(0 10px 30px rgba(251, 86, 7, 0.3))' }}
            >
              {/* Triangle outline */}
              <polygon
                points="200,50 350,300 50,300"
                fill="none"
                stroke="#fb5607"
                strokeWidth="3"
                className="animate-pulse"
              />
              
              {/* Physical - Top vertex */}
              <circle cx="200" cy="50" r="8" fill="#fb5607" />
              <text
                x="200"
                y="40"
                textAnchor="middle"
                className="text-sm font-bold fill-white"
                style={{ fontFamily: 'var(--font-antonio)' }}
              >
                PHYSICAL
              </text>
              
              {/* Mind - Bottom left */}
              <circle cx="50" cy="300" r="8" fill="#8dd9ff" />
              <text
                x="50"
                y="320"
                textAnchor="middle"
                className="text-sm font-bold fill-white"
                style={{ fontFamily: 'var(--font-antonio)' }}
              >
                MIND
              </text>
              
              {/* Social - Bottom right */}
              <circle cx="350" cy="300" r="8" fill="#5ff7b6" />
              <text
                x="350"
                y="320"
                textAnchor="middle"
                className="text-sm font-bold fill-white"
                style={{ fontFamily: 'var(--font-antonio)' }}
              >
                SOCIAL
              </text>
            </svg>
          </div>

          {/* Three Pillars */}
          <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-3">
            {/* Physical Pillar */}
            <article className="rounded-2xl sm:rounded-3xl border border-[#fb5607]/30 bg-gradient-to-b from-[#2c0d54]/50 to-[#1e0839]/50 p-5 sm:p-6 shadow-[0_14px_32px_rgba(0,0,0,0.25)] transition-transform duration-300 hover:-translate-y-2 hover:border-[#fb5607]/60">
              <div className="mb-4 sm:mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#fb5607]/20">
                  <svg className="h-5 w-5 sm:h-6 sm:w-6 text-[#fb5607]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 
                  className="text-lg sm:text-xl text-[#fb5607]"
                  style={{ fontFamily: 'var(--font-antonio)', fontWeight: 700 }}
                >
                  Physical
                </h4>
              </div>
              <p 
                className="text-sm leading-relaxed text-gray-300"
                style={{ fontFamily: 'var(--font-geist-sans)', fontWeight: 400 }}
              >
                Building strength, endurance, and physical resilience through progressive training, proper nutrition, and recovery. Every workout is a step toward a stronger, healthier body.
              </p>
            </article>

            {/* Mind Pillar */}
            <article className="rounded-2xl sm:rounded-3xl border border-[#8dd9ff]/30 bg-gradient-to-b from-[#2c0d54]/50 to-[#1e0839]/50 p-5 sm:p-6 shadow-[0_14px_32px_rgba(0,0,0,0.25)] transition-transform duration-300 hover:-translate-y-2 hover:border-[#8dd9ff]/60">
              <div className="mb-4 sm:mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#8dd9ff]/20">
                  <svg className="h-5 w-5 sm:h-6 sm:w-6 text-[#8dd9ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h4 
                  className="text-lg sm:text-xl text-[#8dd9ff]"
                  style={{ fontFamily: 'var(--font-antonio)', fontWeight: 700 }}
                >
                  Mind
                </h4>
              </div>
              <p 
                className="text-sm leading-relaxed text-gray-300"
                style={{ fontFamily: 'var(--font-geist-sans)', fontWeight: 400 }}
              >
                Cultivating mental clarity, emotional resilience, and mindfulness. We support stress management, goal-setting, and the mental fortitude needed to sustain long-term transformation.
              </p>
            </article>

            {/* Social Pillar */}
            <article className="rounded-2xl sm:rounded-3xl border border-[#5ff7b6]/30 bg-gradient-to-b from-[#2c0d54]/50 to-[#1e0839]/50 p-5 sm:p-6 shadow-[0_14px_32px_rgba(0,0,0,0.25)] transition-transform duration-300 hover:-translate-y-2 hover:border-[#5ff7b6]/60">
              <div className="mb-4 sm:mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#5ff7b6]/20">
                  <svg className="h-5 w-5 sm:h-6 sm:w-6 text-[#5ff7b6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 
                  className="text-lg sm:text-xl text-[#5ff7b6]"
                  style={{ fontFamily: 'var(--font-antonio)', fontWeight: 700 }}
                >
                  Social
                </h4>
              </div>
              <p 
                className="text-sm leading-relaxed text-gray-300"
                style={{ fontFamily: 'var(--font-geist-sans)', fontWeight: 400 }}
              >
                Fostering connections, accountability, and a supportive community. Together, we celebrate victories, navigate challenges, and build relationships that inspire and motivate.
              </p>
            </article>
          </div>

          {/* Philosophy Statement */}
          <div className="mt-8 sm:mt-12 rounded-2xl sm:rounded-3xl border border-white/10 bg-gradient-to-br from-[#2c0d54] via-[#1e0839] to-[#0f0420] p-6 sm:p-8 text-center shadow-[0_20px_48px_rgba(0,0,0,0.5)]">
            <p 
              className="mb-3 text-base sm:text-lg lg:text-xl font-semibold text-white"
              style={{ fontFamily: 'var(--font-antonio)', fontWeight: 700 }}
            >
              The 1% Principle
            </p>
            <p 
              className="mx-auto max-w-2xl text-sm leading-relaxed text-gray-300 sm:text-base"
              style={{ fontFamily: 'var(--font-geist-sans)', fontWeight: 400 }}
            >
              True transformation doesn&apos;t happen overnight. It&apos;s the accumulation of small, consistent improvements—just 1% better each day. By nurturing all three dimensions of the triangle, we create sustainable change that extends beyond the gym and into every aspect of life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}



