'use client';

import { useEffect, useRef, useState } from 'react';

export default function ContactSupportFooter() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );
    const current = sectionRef.current;
    if (current) observer.observe(current);
    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <footer
      ref={sectionRef}
      className="pt-24 px-6 sm:px-10 lg:px-20"
      style={{ fontFamily: 'var(--font-antonio)', fontWeight: 700, backgroundColor: '#151515' }}
    >
      <div className="mx-auto max-w-7xl text-white">
        <div
          className={`mb-10 grid gap-8 lg:grid-cols-2 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#2c0d54] via-[#1e0839] to-[#0f0420] p-8">
            <h2 className="mb-3 text-3xl sm:text-4xl">Contact & Support</h2>
            <p
              className="mb-6 text-base text-gray-300 sm:text-lg"
              style={{ fontFamily: 'var(--font-geist-sans)', fontWeight: 400 }}
            >
              We’re here to help. Reach out for support, partnerships, or press.
            </p>
            <div className="space-y-2" style={{ fontFamily: 'var(--font-geist-sans)', fontWeight: 400 }}>
              <p>Email: <a className="underline" href="mailto:support@gofytt.com">support@gofytt.com</a></p>
              <p>Phone: <a className="underline" href="tel:+10000000000">+1 000 000 0000</a></p>
              <p>Address: 1% Fit Club HQ, Downtown, City</p>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-white/10">
            <iframe
              title="Gofytt HQ"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24157.06439865588!2d-73.99000000000001!3d40.730610!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQzJzQ5LjIiTiA3M8KwNTknMzIuMCJX!5e0!3m2!1sen!2sus!4v1700000000000"
              width="100%"
              height="320"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="py-8 text-center text-sm text-gray-400" style={{ fontFamily: 'var(--font-geist-sans)' }}>
          © {new Date().getFullYear()} Gofytt. All rights reserved.
        </div>
      </div>
    </footer>
  );
}


