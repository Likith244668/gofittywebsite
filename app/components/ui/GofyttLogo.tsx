'use client';

import Image from 'next/image';

interface GofyttLogoProps {
    className?: string;
    width?: number;
    height?: number;
}

export default function GofyttLogo({ className = '', width = 40, height = 40 }: GofyttLogoProps) {
    return (
        <div className={`relative inline-flex items-center justify-center ${className}`} style={{ width, height }}>
            <Image
                src="/logo.png"
                alt="G"
                fill
                className="object-contain"
                priority
            />
        </div>
    );
}
