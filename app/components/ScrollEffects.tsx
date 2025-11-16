'use client';

import { useEffect } from 'react';

export default function ScrollEffects(): null {
	useEffect(() => {
		const sections = Array.from(document.querySelectorAll('main section')) as HTMLElement[];
		sections.forEach((el) => {
			el.classList.add(
				'opacity-0',
				'translate-y-6',
				'transition-all',
				'duration-700',
				'ease-out',
				'will-change-transform',
				'will-change-opacity'
			);
		});

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					const target = entry.target as HTMLElement;
					if (entry.isIntersecting) {
						target.classList.add('opacity-100', 'translate-y-0');
						target.classList.remove('opacity-0', 'translate-y-6');
						observer.unobserve(target);
					}
				});
			},
			{
				root: null,
				rootMargin: '0px 0px -10% 0px',
				threshold: 0.15,
			}
		);

		sections.forEach((el) => observer.observe(el));

		return () => observer.disconnect();
	}, []);

	return null;
}


