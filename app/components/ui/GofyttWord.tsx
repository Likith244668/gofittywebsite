'use client';

import GofyttLogo from './GofyttLogo';

interface GofyttWordProps {
    className?: string;
    logoClassName?: string;
    textClassName?: string;
    logoSize?: number;
}

export default function GofyttWord({
    className = '',
    logoClassName = '',
    textClassName = '',
    logoSize = 32
}: GofyttWordProps) {
    const adjustedSize = logoSize * 2.0;

    return (
        <span className={`inline-flex items-center ${className}`}>
            <GofyttLogo width={adjustedSize} height={adjustedSize} className={logoClassName} />
        </span>
    );
}
