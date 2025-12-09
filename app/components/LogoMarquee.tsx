"use client"

import { Button } from "./ui/button"
import { useState } from "react"
import Image from "next/image"

export function LogoMarquee() {
    const [pausedRow, setPausedRow] = useState<string | null>(null)

    const logos = [
        { name: "VICTORINOX", image: "/icons/Trumpp.png" },
        { name: "Trumpp", image: "/icons/Trumpp.png" },
        { name: "Skitbit", image: "/icons/Poedagarr.png" },
        { name: "VK", image: "/icons/Supp.png" },
        { name: "TechCrunch", image: "/icons/Trumpp.png" },
        { name: "MailChimp", image: "/icons/Poedagarr.png" },
        { name: "ESJ", image: "/icons/Supp.png" },
        { name: "Kickstarter", image: "/icons/Trumpp.png" },
    ]

    const secondRowLogos = [
        { name: "StumbleUpon", image: "/icons/Poedagarr.png" },
        { name: "Microsoft", image: "/icons/Supp.png" },
        { name: "CleanMyMac", image: "/icons/Trumpp.png" },
        { name: "Google", image: "/icons/Poedagarr.png" },
        { name: "Behance", image: "/icons/Supp.png" },
        { name: "Apple", image: "/icons/Trumpp.png" },
        { name: "TransferWise", image: "/icons/Poedagarr.png" },
        { name: "Medium", image: "/icons/Supp.png" },
    ]

    const LogoCard = ({ logo, rowId }: { logo: any; rowId: string }) => (
        <div
            className="flex-shrink-0 mx-3"
            onMouseEnter={() => setPausedRow(rowId)}
            onMouseLeave={() => setPausedRow(null)}
        >
            <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-2xl bg-black/40 border border-white/20 backdrop-blur-xl flex items-center justify-center overflow-hidden">
                <div className="relative w-full h-full">
                    <Image
                        src={logo.image || "/placeholder.svg"}
                        alt={logo.name}
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 128px, (min-width: 640px) 112px, 96px"
                    />
                </div>
            </div>
        </div>
    )

    return (
        <section
            className="relative text-white py-16 sm:py-20 overflow-hidden"
            style={{
                background: 'linear-gradient(180deg, #000000 0%, #0a0a0a 50%, #000000 100%)'
            }}
        >
            {/* Animated Grid Background */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
              linear-gradient(rgba(251,86,7,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(251,86,7,0.1) 1px, transparent 1px)
            `,
                        backgroundSize: '100px 100px',
                    }}
                />
            </div>

            {/* Radial Orange Glow */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: `radial-gradient(circle at 50% 50%, rgba(251,86,7,0.15) 0%, transparent 60%)`,
                }}
            />

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="flex flex-col items-center justify-between mb-12 sm:flex-row sm:items-center">
                    <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl text-center sm:text-left">
                        Meet our <span className="text-[#fb5607]">top-tier</span>
                        <br />
                        customers
                    </h2>
                    <Button
                        variant="outline"
                        className="mt-4 sm:mt-0 liquid-glass hover:liquid-glass-enhanced text-white border-white/20 bg-transparent"
                    >
                        Learn More
                    </Button>
                </div>

                {/* Logo Marquee */}
                <div className="relative">
                    {/* First Row - Scrolling Right */}
                    <div className="flex overflow-hidden mb-6 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                        <div
                            className={`flex animate-scroll-right whitespace-nowrap`}
                            style={{
                                animationPlayState: pausedRow === "first" ? "paused" : "running",
                                width: "max-content",
                            }}
                        >
                            {[...logos, ...logos, ...logos].map((logo, index) => (
                                <LogoCard key={`first-${index}`} logo={logo} rowId="first" />
                            ))}
                        </div>
                    </div>

                    {/* Second Row - Scrolling Left */}
                    <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                        <div
                            className={`flex animate-scroll-left whitespace-nowrap`}
                            style={{
                                animationPlayState: pausedRow === "second" ? "paused" : "running",
                                width: "max-content",
                            }}
                        >
                            {[...secondRowLogos, ...secondRowLogos, ...secondRowLogos].map((logo, index) => (
                                <LogoCard key={`second-${index}`} logo={logo} rowId="second" />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
