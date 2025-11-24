'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

type Event = {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  type: 'Workshop' | 'Seminar' | 'Retreat' | 'Challenge';
  image: string;
  capacity: number;
  registered: number;
  price: string;
  instructor: string;
  color: string;
  status: 'upcoming' | 'latest';
};

const events: Event[] = [
  {
    id: '1',
    title: 'Nutrition Masterclass',
    description: 'Learn the fundamentals of nutrition science, meal planning, and sustainable eating habits from certified nutritionists.',
    date: '2024-02-15',
    time: '10:00 AM - 2:00 PM',
    location: 'Gofytt Studio, Bangalore',
    type: 'Workshop',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=600&q=80',
    capacity: 30,
    registered: 18,
    price: '₹2,500',
    instructor: 'Dr. Marcus Johnson',
    color: '#ff6b35',
    status: 'upcoming'
  },
  {
    id: '2',
    title: 'Mindset & Motivation Workshop',
    description: 'Discover psychological strategies to build resilience, overcome plateaus, and maintain long-term motivation.',
    date: '2024-02-20',
    time: '6:00 PM - 8:00 PM',
    location: 'Online',
    type: 'Seminar',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80',
    capacity: 100,
    registered: 67,
    price: 'Free',
    instructor: 'Sarah Mitchell',
    color: '#ff8800',
    status: 'upcoming'
  },
  {
    id: '3',
    title: 'Weekend Fitness Retreat',
    description: 'A 2-day immersive experience combining yoga, strength training, nutrition workshops, and mindfulness sessions.',
    date: '2024-02-24',
    time: '9:00 AM - 6:00 PM',
    location: 'Resort, Mysore',
    type: 'Retreat',
    image: 'https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?auto=format&fit=crop&w=600&q=80',
    capacity: 20,
    registered: 12,
    price: '₹15,000',
    instructor: 'Priya Sharma',
    color: '#ff8800',
    status: 'upcoming'
  },
  {
    id: '4',
    title: '30-Day Transformation Challenge',
    description: 'Join our community challenge with daily workouts, nutrition guidance, and weekly check-ins. Transform in 30 days!',
    date: '2024-03-01',
    time: 'All Day',
    location: 'Online + Studio',
    type: 'Challenge',
    image: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=600&q=80',
    capacity: 200,
    registered: 145,
    price: '₹5,000',
    instructor: 'David Chen',
    color: '#fb5607',
    status: 'upcoming'
  },
  {
    id: '5',
    title: 'Strength Training Fundamentals',
    description: 'Master the basics of strength training with proper form, technique, and programming for beginners.',
    date: '2024-01-28',
    time: '4:00 PM - 6:00 PM',
    location: 'Gofytt Studio, Bangalore',
    type: 'Workshop',
    image: 'https://images.unsplash.com/photo-1546483875-ad9014c88eba?auto=format&fit=crop&w=600&q=80',
    capacity: 25,
    registered: 25,
    price: '₹2,000',
    instructor: 'Sarah Mitchell',
    color: '#fb5607',
    status: 'latest'
  },
  {
    id: '6',
    title: 'Yoga & Meditation Session',
    description: 'A peaceful session combining vinyasa flow, meditation, and breathwork for stress relief and flexibility.',
    date: '2024-01-25',
    time: '7:00 AM - 8:30 AM',
    location: 'Gofytt Studio, Bangalore',
    type: 'Workshop',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80',
    capacity: 40,
    registered: 40,
    price: '₹1,500',
    instructor: 'Priya Sharma',
    color: '#ff8800',
    status: 'latest'
  }
];

export default function EventsAndExperiences() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [showHostEventModal, setShowHostEventModal] = useState(false);
  const [activeTab, setActiveTab] = useState<'upcoming' | 'latest'>('upcoming');
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    phone: '',
    eventId: ''
  });
  const [hostEventData, setHostEventData] = useState({
    name: '',
    email: '',
    phone: '',
    eventTitle: '',
    eventType: '',
    description: '',
    preferredDate: '',
    expectedAttendees: ''
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
        threshold: 0.1,
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

  const handleBookEvent = (eventId: string) => {
    setSelectedEvent(eventId);
    setBookingData({ ...bookingData, eventId });
    setShowBookingModal(true);
  };

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1500));

    setBookingData({ name: '', email: '', phone: '', eventId: '' });
    setShowBookingModal(false);
    setIsSubmitting(false);
    alert('Booking confirmed! Check your email for details.');
  };

  const handleHostEventSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1500));

    setHostEventData({
      name: '',
      email: '',
      phone: '',
      eventTitle: '',
      eventType: '',
      description: '',
      preferredDate: '',
      expectedAttendees: ''
    });
    setShowHostEventModal(false);
    setIsSubmitting(false);
    alert('Request submitted! Our team will contact you within 24 hours.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (showBookingModal) {
      setBookingData({ ...bookingData, [name]: value });
    } else {
      setHostEventData({ ...hostEventData, [name]: value });
    }
  };

  const filteredEvents = events.filter(event => event.status === activeTab);
  const selectedEventData = events.find(e => e.id === selectedEvent);

  return (
    <>
      <section
        ref={sectionRef}
        className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-10 xl:px-20"
        style={{
          fontFamily: 'var(--font-antonio)',
          fontWeight: 700,
          backgroundColor: '#151515'
        }}
      >
        <div className="mx-auto max-w-7xl text-white">
          {/* Header Section */}
          <div
            className={`mb-12 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
          >
            <h2
              className="mb-4 text-4xl tracking-tight sm:text-5xl md:text-6xl"
              style={{ fontFamily: 'var(--font-antonio)', fontWeight: 700 }}
            >
              Events & Experiences
            </h2>
            <p
              className="mx-auto max-w-2xl text-lg text-gray-300 sm:text-xl"
              style={{ fontFamily: 'var(--font-geist-sans)', fontWeight: 400 }}
            >
              Join workshops, seminars, retreats, and challenges designed to accelerate your transformation journey.
            </p>
          </div>

          {/* Tabs */}
          <div
            className={`mb-8 flex justify-center gap-4 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
          >
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 sm:px-8 sm:py-4 sm:text-base ${activeTab === 'upcoming'
                  ? 'bg-[#fb5607] text-white shadow-[0_8px_30px_rgba(251,86,7,0.4)]'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              style={{ fontFamily: 'var(--font-antonio)', fontWeight: 700 }}
            >
              Upcoming Events
            </button>
            <button
              onClick={() => setActiveTab('latest')}
              className={`rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 sm:px-8 sm:py-4 sm:text-base ${activeTab === 'latest'
                  ? 'bg-[#fb5607] text-white shadow-[0_8px_30px_rgba(251,86,7,0.4)]'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              style={{ fontFamily: 'var(--font-antonio)', fontWeight: 700 }}
            >
              Latest Events
            </button>
          </div>

          {/* Events Grid */}
          <div
            className={`mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'
              }`}
          >
            {filteredEvents.map((event, index) => {
              const isFull = event.registered >= event.capacity;
              const spotsLeft = event.capacity - event.registered;

              return (
                <article
                  key={event.id}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-black via-[#1a0600] to-[#0a0300] transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_25px_50px_rgba(0,0,0,0.5)]"
                  style={{
                    animation: isVisible
                      ? `fadeInUp 0.6s ease-out ${index * 100}ms both`
                      : 'none'
                  }}
                >
                  {/* Event Image */}
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      unoptimized
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"
                      style={{
                        background: `linear-gradient(to top, ${event.color}40, transparent)`
                      }}
                    />

                    {/* Event Type Badge */}
                    <div
                      className="absolute top-4 left-4 rounded-full px-3 py-1.5 text-xs font-semibold backdrop-blur-sm"
                      style={{
                        backgroundColor: `${event.color}20`,
                        color: event.color,
                        border: `1px solid ${event.color}40`
                      }}
                    >
                      {event.type}
                    </div>

                    {/* Capacity Badge */}
                    <div className="absolute top-4 right-4 rounded-full bg-black/60 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
                      {isFull ? 'Full' : `${spotsLeft} spots left`}
                    </div>
                  </div>

                  {/* Event Content */}
                  <div className="p-6">
                    <h3
                      className="mb-2 text-xl font-bold text-white transition-colors duration-300 group-hover:text-[#fb5607] sm:text-2xl"
                      style={{ fontFamily: 'var(--font-antonio)', fontWeight: 700 }}
                    >
                      {event.title}
                    </h3>

                    <p
                      className="mb-4 line-clamp-2 text-sm leading-relaxed text-gray-300 sm:text-base"
                      style={{ fontFamily: 'var(--font-geist-sans)', fontWeight: 400 }}
                    >
                      {event.description}
                    </p>

                    {/* Event Details */}
                    <div className="mb-4 space-y-2 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>{new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <span>{event.instructor}</span>
                      </div>
                    </div>

                    {/* Price and Book Button */}
                    <div className="flex items-center justify-between">
                      <div
                        className="text-2xl font-bold"
                        style={{
                          fontFamily: 'var(--font-antonio)',
                          color: event.color
                        }}
                      >
                        {event.price}
                      </div>
                      <button
                        onClick={() => handleBookEvent(event.id)}
                        disabled={isFull}
                        className={`rounded-xl px-6 py-2.5 text-sm font-bold transition-all duration-300 ${isFull
                            ? 'cursor-not-allowed bg-gray-600 text-gray-400'
                            : 'bg-[#fb5607] text-white hover:scale-105 hover:shadow-[0_8px_20px_rgba(251,86,7,0.4)]'
                          }`}
                        style={{ fontFamily: 'var(--font-antonio)', fontWeight: 700 }}
                      >
                        {isFull ? 'Full' : 'Book Now'}
                      </button>
                    </div>
                  </div>

                  {/* Hover Glow */}
                  <div
                    className="absolute inset-0 -z-10 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-20"
                    style={{
                      backgroundColor: event.color,
                      filter: 'blur(20px)'
                    }}
                  />
                </article>
              );
            })}
          </div>

          {/* Host an Event Section */}
          <div
            className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
          >
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-black via-[#1a0600] to-[#0a0300] p-8 sm:p-10 shadow-[0_25px_60px_rgba(0,0,0,0.55)]">
              <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                <div>
                  <h3
                    className="mb-4 text-3xl font-bold text-white sm:text-4xl"
                    style={{ fontFamily: 'var(--font-antonio)', fontWeight: 700 }}
                  >
                    Host an Event
                  </h3>
                  <p
                    className="mb-6 text-base leading-relaxed text-gray-300 sm:text-lg"
                    style={{ fontFamily: 'var(--font-geist-sans)', fontWeight: 400 }}
                  >
                    Have a workshop idea? Want to share your expertise with the community? Submit a request to host an event or workshop at Gofytt.
                  </p>
                  <ul className="mb-6 space-y-3 text-sm text-gray-300 sm:text-base">
                    {[
                      'Workshop facilitation',
                      'Seminar hosting',
                      'Community events',
                      'Expert sessions'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="text-[#fb5607]">✓</span>
                        <span style={{ fontFamily: 'var(--font-geist-sans)' }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => setShowHostEventModal(true)}
                    className="rounded-xl bg-gradient-to-r from-[#fb5607] to-[#ff8800] px-8 py-4 text-lg font-bold text-white shadow-[0_8px_30px_rgba(251,86,7,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_40px_rgba(251,86,7,0.6)]"
                    style={{ fontFamily: 'var(--font-antonio)', fontWeight: 700 }}
                  >
                    Request to Host Event
                  </button>
                </div>
                <div className="relative hidden lg:block">
                  <div className="aspect-square rounded-3xl bg-gradient-to-br from-[#fb5607]/20 to-[#ff6b35]/20 p-8">
                    <div className="flex h-full items-center justify-center">
                      <svg className="h-32 w-32 text-[#fb5607]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      {showBookingModal && selectedEventData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-gradient-to-br from-black via-[#1a0600] to-[#0a0300] p-8 shadow-2xl">
            <button
              onClick={() => setShowBookingModal(false)}
              className="absolute right-4 top-4 text-gray-400 hover:text-white"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h3
              className="mb-2 text-2xl font-bold text-white"
              style={{ fontFamily: 'var(--font-antonio)', fontWeight: 700 }}
            >
              Book Event
            </h3>
            <p
              className="mb-6 text-lg text-[#fb5607]"
              style={{ fontFamily: 'var(--font-antonio)', fontWeight: 700 }}
            >
              {selectedEventData.title}
            </p>

            <form onSubmit={handleBookingSubmit} className="space-y-4">
              <div>
                <label className="mb-2 block text-sm font-semibold text-white">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={bookingData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-gray-400 focus:border-[#fb5607] focus:outline-none focus:ring-2 focus:ring-[#fb5607]/50"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-white">Email</label>
                <input
                  type="email"
                  name="email"
                  value={bookingData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-gray-400 focus:border-[#fb5607] focus:outline-none focus:ring-2 focus:ring-[#fb5607]/50"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-white">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={bookingData.phone}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-gray-400 focus:border-[#fb5607] focus:outline-none focus:ring-2 focus:ring-[#fb5607]/50"
                  placeholder="+91 98765 43210"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-xl bg-gradient-to-r from-[#fb5607] to-[#ff8800] px-8 py-4 text-lg font-bold text-white shadow-[0_8px_30px_rgba(251,86,7,0.4)] transition-all duration-300 hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50"
                style={{ fontFamily: 'var(--font-antonio)', fontWeight: 700 }}
              >
                {isSubmitting ? 'Processing...' : `Confirm Booking - ${selectedEventData.price}`}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Host Event Modal */}
      {showHostEventModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="relative w-full max-w-2xl rounded-3xl border border-white/10 bg-gradient-to-br from-black via-[#1a0600] to-[#0a0300] p-8 shadow-2xl">
            <button
              onClick={() => setShowHostEventModal(false)}
              className="absolute right-4 top-4 text-gray-400 hover:text-white"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h3
              className="mb-6 text-2xl font-bold text-white sm:text-3xl"
              style={{ fontFamily: 'var(--font-antonio)', fontWeight: 700 }}
            >
              Request to Host an Event
            </h3>

            <form onSubmit={handleHostEventSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-white">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={hostEventData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-gray-400 focus:border-[#fb5607] focus:outline-none focus:ring-2 focus:ring-[#fb5607]/50"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-white">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={hostEventData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-gray-400 focus:border-[#fb5607] focus:outline-none focus:ring-2 focus:ring-[#fb5607]/50"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-white">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={hostEventData.phone}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-gray-400 focus:border-[#fb5607] focus:outline-none focus:ring-2 focus:ring-[#fb5607]/50"
                  placeholder="+91 98765 43210"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-white">Event Title</label>
                <input
                  type="text"
                  name="eventTitle"
                  value={hostEventData.eventTitle}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-gray-400 focus:border-[#fb5607] focus:outline-none focus:ring-2 focus:ring-[#fb5607]/50"
                  placeholder="e.g., Advanced Yoga Workshop"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-white">Event Type</label>
                  <select
                    name="eventType"
                    value={hostEventData.eventType}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-white focus:border-[#fb5607] focus:outline-none focus:ring-2 focus:ring-[#fb5607]/50"
                  >
                    <option value="">Select type</option>
                    <option value="Workshop">Workshop</option>
                    <option value="Seminar">Seminar</option>
                    <option value="Retreat">Retreat</option>
                    <option value="Challenge">Challenge</option>
                  </select>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-white">Preferred Date</label>
                  <input
                    type="date"
                    name="preferredDate"
                    value={hostEventData.preferredDate}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-white focus:border-[#fb5607] focus:outline-none focus:ring-2 focus:ring-[#fb5607]/50"
                  />
                </div>
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-white">Event Description</label>
                <textarea
                  name="description"
                  value={hostEventData.description}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-gray-400 focus:border-[#fb5607] focus:outline-none focus:ring-2 focus:ring-[#fb5607]/50 resize-none"
                  placeholder="Describe your event, what participants will learn, and why it's valuable..."
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-white">Expected Attendees</label>
                <input
                  type="number"
                  name="expectedAttendees"
                  value={hostEventData.expectedAttendees}
                  onChange={handleChange}
                  required
                  min="1"
                  className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-gray-400 focus:border-[#fb5607] focus:outline-none focus:ring-2 focus:ring-[#fb5607]/50"
                  placeholder="Estimated number of participants"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-xl bg-gradient-to-r from-[#fb5607] to-[#ff8800] px-8 py-4 text-lg font-bold text-white shadow-[0_8px_30px_rgba(251,86,7,0.4)] transition-all duration-300 hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50"
                style={{ fontFamily: 'var(--font-antonio)', fontWeight: 700 }}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Request'}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}



