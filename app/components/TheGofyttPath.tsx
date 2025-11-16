'use client';

import type { ReactNode } from 'react';

type JourneyStage = {
  stage: string;
  title: string;
  description: string;
  icon: ReactNode;
  color: string;
  bgColor: string;
  borderColor: string;
};

const journeyStages: JourneyStage[] = [
  {
    stage: '01',
    title: 'Awareness',
    description: 'Recognizing the need for change. Understanding where you are and where you want to be. The first step begins with honest self-reflection.',
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    color: '#8dd9ff',
    bgColor: 'bg-[#8dd9ff]/20',
    borderColor: 'border-[#8dd9ff]/40'
  },
  {
    stage: '02',
    title: 'Discovery',
    description: 'Exploring your potential. Learning about your body, capabilities, and the tools available. Setting realistic goals and understanding the path ahead.',
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    color: '#5ff7b6',
    bgColor: 'bg-[#5ff7b6]/20',
    borderColor: 'border-[#5ff7b6]/40'
  },
  {
    stage: '03',
    title: 'Commitment',
    description: 'Making the decision to transform. Establishing routines, building habits, and dedicating yourself to consistent action. This is where change becomes real.',
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: '#f6b14b',
    bgColor: 'bg-[#f6b14b]/20',
    borderColor: 'border-[#f6b14b]/40'
  },
  {
    stage: '04',
    title: 'Growth',
    description: 'Building momentum and seeing progress. Overcoming challenges, celebrating milestones, and continuously pushing your boundaries. Every day brings new strength.',
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    color: '#ff6b6b',
    bgColor: 'bg-[#ff6b6b]/20',
    borderColor: 'border-[#ff6b6b]/40'
  },
  {
    stage: '05',
    title: 'Mastery',
    description: 'Living the transformation. Fitness becomes a natural part of your life. You inspire others, maintain your progress, and continue evolving. This is your new normal.',
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    color: '#fb5607',
    bgColor: 'bg-[#fb5607]/20',
    borderColor: 'border-[#fb5607]/40'
  }
];

export default function TheGofyttPath() {
  return (
    <section 
      className="py-24 px-6 sm:px-10 lg:px-20"
      style={{
        fontFamily: 'var(--font-antonio)',
        fontWeight: 700,
        backgroundColor: '#1c0533'
      }}
    >
      <div className="mx-auto max-w-7xl text-white">
        {/* Header Section */}
        <div className="mb-20 text-center">
          <h2 
            className="mb-4 text-4xl tracking-tight sm:text-5xl md:text-6xl"
            style={{ fontFamily: 'var(--font-antonio)', fontWeight: 700 }}
          >
            The Gofytt Path
          </h2>
          <p 
            className="mx-auto max-w-2xl text-lg text-gray-300 sm:text-xl md:text-2xl"
            style={{ fontFamily: 'var(--font-geist-sans)', fontWeight: 400 }}
          >
            The journey members take from awareness to mastery
          </p>
        </div>

        {/* Journey Path - Desktop View */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connecting Path Line */}
            <div className="absolute left-0 right-0 top-1/2 h-1 -translate-y-1/2 bg-gradient-to-r from-[#8dd9ff] via-[#5ff7b6] via-[#f6b14b] via-[#ff6b6b] to-[#fb5607] opacity-30" />
            
            {/* Journey Stages */}
            <div className="relative flex items-start justify-between gap-4">
              {journeyStages.map((stage, index) => (
                <div key={stage.stage} className="flex flex-1 flex-col items-center">
                  {/* Stage Card */}
                  <article 
                    className={`relative z-10 w-full rounded-3xl border-2 ${stage.borderColor} ${stage.bgColor} bg-gradient-to-b from-[#2c0d54]/80 to-[#1e0839]/80 p-6 shadow-[0_18px_40px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_25px_50px_rgba(0,0,0,0.5)]`}
                  >
                    {/* Stage Number */}
                    <div className="mb-4 flex items-center justify-between">
                      <span 
                        className="text-sm font-bold uppercase tracking-wider opacity-60"
                        style={{ fontFamily: 'var(--font-antonio)' }}
                      >
                        {stage.stage}
                      </span>
                      <div 
                        className="rounded-full p-2"
                        style={{ 
                          backgroundColor: `${stage.color}20`,
                          color: stage.color
                        }}
                      >
                        {stage.icon}
                      </div>
                    </div>
                    
                    {/* Stage Title */}
                    <h3 
                      className="mb-3 text-xl font-bold"
                      style={{ 
                        fontFamily: 'var(--font-antonio)', 
                        fontWeight: 700,
                        color: stage.color
                      }}
                    >
                      {stage.title}
                    </h3>
                    
                    {/* Stage Description */}
                    <p 
                      className="text-sm leading-relaxed text-gray-300"
                      style={{ fontFamily: 'var(--font-geist-sans)', fontWeight: 400 }}
                    >
                      {stage.description}
                    </p>
                  </article>
                  
                  {/* Connection Arrow (except for last item) */}
                  {index < journeyStages.length - 1 && (
                    <div className="absolute top-1/2 left-full z-0 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
                      <svg 
                        width="40" 
                        height="20" 
                        viewBox="0 0 40 20" 
                        fill="none"
                        className="opacity-50"
                      >
                        <path 
                          d="M30 10L35 15L30 20M35 10H5" 
                          stroke={stage.color} 
                          strokeWidth="2" 
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Journey Path - Mobile/Tablet View */}
        <div className="lg:hidden">
          <div className="space-y-8">
            {journeyStages.map((stage, index) => (
              <div key={stage.stage} className="relative">
                {/* Connection Line (except for first item) */}
                {index > 0 && (
                  <div 
                    className="absolute -top-8 left-8 h-8 w-0.5 opacity-30"
                    style={{ 
                      background: `linear-gradient(to bottom, ${journeyStages[index - 1].color}, ${stage.color})`
                    }}
                  />
                )}
                
                {/* Stage Card */}
                <article 
                  className={`relative rounded-3xl border-2 ${stage.borderColor} ${stage.bgColor} bg-gradient-to-b from-[#2c0d54]/80 to-[#1e0839]/80 p-6 shadow-[0_18px_40px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(0,0,0,0.5)]`}
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div 
                      className="flex-shrink-0 rounded-full p-3"
                      style={{ 
                        backgroundColor: `${stage.color}20`,
                        color: stage.color
                      }}
                    >
                      {stage.icon}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <div className="mb-2 flex items-center justify-between">
                        <span 
                          className="text-xs font-bold uppercase tracking-wider opacity-60"
                          style={{ fontFamily: 'var(--font-antonio)' }}
                        >
                          {stage.stage}
                        </span>
                      </div>
                      
                      <h3 
                        className="mb-2 text-xl font-bold"
                        style={{ 
                          fontFamily: 'var(--font-antonio)', 
                          fontWeight: 700,
                          color: stage.color
                        }}
                      >
                        {stage.title}
                      </h3>
                      
                      <p 
                        className="text-sm leading-relaxed text-gray-300"
                        style={{ fontFamily: 'var(--font-geist-sans)', fontWeight: 400 }}
                      >
                        {stage.description}
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-gradient-to-br from-[#2c0d54] via-[#1e0839] to-[#0f0420] p-10 shadow-[0_25px_60px_rgba(0,0,0,0.55)]">
            <p 
              className="mb-4 text-xl font-semibold text-white sm:text-2xl"
              style={{ fontFamily: 'var(--font-antonio)', fontWeight: 700 }}
            >
              Your Journey Starts Here
            </p>
            <p 
              className="mx-auto text-base leading-relaxed text-gray-300 sm:text-lg"
              style={{ fontFamily: 'var(--font-geist-sans)', fontWeight: 400 }}
            >
              Every master was once a beginner. Every expert was once a student. Your path to transformation begins with a single step—the decision to start. Join thousands who have walked this path and discovered their potential.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}



