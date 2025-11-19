'use client';

import { useState, useEffect, useRef } from 'react';

export default function JoinThe1PercentFitClub() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    goal: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Reset form
    setFormData({ name: '', email: '', phone: '', goal: '' });
    setIsSubmitting(false);
    
    // You can add success notification here
    alert('Thank you! We\'ll be in touch soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-10 xl:px-20 overflow-hidden"
      style={{
        fontFamily: 'var(--font-antonio)',
        fontWeight: 700,
        backgroundColor: '#1c0533'
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(251, 86, 7, 0.3) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative mx-auto max-w-6xl text-white">
        {/* Header Section */}
        <div 
          className={`mb-10 text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 
            className="mb-3 text-3xl tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"
            style={{ fontFamily: 'var(--font-antonio)', fontWeight: 700 }}
          >
            Join The 1% Fit Club
          </h2>
          <p 
            className="mx-auto max-w-2xl text-base text-gray-300 sm:text-lg md:text-xl"
            style={{ fontFamily: 'var(--font-geist-sans)', fontWeight: 400 }}
          >
            Start your transformation journey today. Become part of a community committed to becoming 1% better every day.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left Side - Benefits */}
          <div 
            className={`space-y-6 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div>
              <h3 
                className="mb-4 text-xl sm:text-2xl md:text-3xl text-[#fb5607]"
                style={{ fontFamily: 'var(--font-antonio)', fontWeight: 700 }}
              >
                What You Get
              </h3>
            </div>

            <div className="space-y-4">
              {[
                {
                  icon: (
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  title: 'Personalized Training Plans',
                  description: 'Customized workout and nutrition programs tailored to your goals and lifestyle.'
                },
                {
                  icon: (
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  ),
                  title: 'Expert Coaching & Support',
                  description: 'Access to certified trainers and a supportive community of like-minded individuals.'
                },
                {
                  icon: (
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                  title: 'Holistic Approach',
                  description: 'Physical, mental, and social wellness integrated into one comprehensive program.'
                },
                {
                  icon: (
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  ),
                  title: 'Track Your Progress',
                  description: 'Monitor your journey with advanced tracking tools and regular progress assessments.'
                }
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="flex gap-3 rounded-2xl border border-white/10 bg-gradient-to-br from-[#2c0d54]/50 to-[#1e0839]/50 p-5 backdrop-blur-sm transition-all duration-300 hover:border-[#fb5607]/40 hover:shadow-[0_8px_30px_rgba(251,86,7,0.2)]"
                >
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#fb5607]/20 text-[#fb5607]">
                      {benefit.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 
                      className="mb-1.5 text-lg font-bold text-white"
                      style={{ fontFamily: 'var(--font-antonio)', fontWeight: 700 }}
                    >
                      {benefit.title}
                    </h4>
                    <p 
                      className="text-sm leading-relaxed text-gray-300"
                      style={{ fontFamily: 'var(--font-geist-sans)', fontWeight: 400 }}
                    >
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Join Form */}
          <div 
            className={`transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#2c0d54] via-[#1e0839] to-[#0f0420] p-6 sm:p-8 shadow-[0_18px_40px_rgba(0,0,0,0.4)]">
              <h3 
                className="mb-4 text-xl sm:text-2xl font-bold text-white"
                style={{ fontFamily: 'var(--font-antonio)', fontWeight: 700 }}
              >
                Get Started Today
              </h3>
              <p 
                className="mb-6 text-sm text-gray-300"
                style={{ fontFamily: 'var(--font-geist-sans)', fontWeight: 400 }}
              >
                Fill out the form below and our team will reach out to discuss your fitness goals.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label 
                    htmlFor="name" 
                    className="mb-2 block text-sm font-semibold text-white"
                    style={{ fontFamily: 'var(--font-geist-sans)' }}
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-white/20 bg-white/5 px-3.5 py-2.5 text-white placeholder-gray-400 transition-all focus:border-[#fb5607] focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#fb5607]/50"
                    placeholder="Enter your name"
                    style={{ fontFamily: 'var(--font-geist-sans)' }}
                  />
                </div>

                <div>
                  <label 
                    htmlFor="email" 
                    className="mb-2 block text-sm font-semibold text-white"
                    style={{ fontFamily: 'var(--font-geist-sans)' }}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-white/20 bg-white/5 px-3.5 py-2.5 text-white placeholder-gray-400 transition-all focus:border-[#fb5607] focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#fb5607]/50"
                    placeholder="your.email@example.com"
                    style={{ fontFamily: 'var(--font-geist-sans)' }}
                  />
                </div>

                <div>
                  <label 
                    htmlFor="phone" 
                    className="mb-2 block text-sm font-semibold text-white"
                    style={{ fontFamily: 'var(--font-geist-sans)' }}
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-white/20 bg-white/5 px-3.5 py-2.5 text-white placeholder-gray-400 transition-all focus:border-[#fb5607] focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#fb5607]/50"
                    placeholder="+1 (555) 000-0000"
                    style={{ fontFamily: 'var(--font-geist-sans)' }}
                  />
                </div>

                <div>
                  <label 
                    htmlFor="goal" 
                    className="mb-2 block text-sm font-semibold text-white"
                    style={{ fontFamily: 'var(--font-geist-sans)' }}
                  >
                    Your Fitness Goal
                  </label>
                  <textarea
                    id="goal"
                    name="goal"
                    value={formData.goal}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full rounded-xl border border-white/20 bg-white/5 px-3.5 py-2.5 text-white placeholder-gray-400 transition-all focus:border-[#fb5607] focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#fb5607]/50 resize-none"
                    placeholder="Tell us about your fitness goals and what you'd like to achieve..."
                    style={{ fontFamily: 'var(--font-geist-sans)' }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-xl bg-gradient-to-r from-[#fb5607] to-[#ff6b6b] px-6 py-3.5 text-base font-bold text-white shadow-[0_8px_30px_rgba(251,86,7,0.35)] transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_40px_rgba(251,86,7,0.55)] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
                  style={{ fontFamily: 'var(--font-antonio)', fontWeight: 700 }}
                >
                  {isSubmitting ? 'Submitting...' : 'Join The 1% Fit Club'}
                </button>
              </form>

              {/* Trust Indicators */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-5 text-xs text-gray-400">
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-[#5ff7b6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span>Secure & Private</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-[#5ff7b6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-[#5ff7b6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>No Commitment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



