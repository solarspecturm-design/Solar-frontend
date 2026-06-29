'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const SolarSolution = () => {
    return (
        <section className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/services2.png"
                    alt="Solar Panel Installation"
                    fill
                    className="object-cover"
                />
                {/* Dark Overlay to match the moody look of the reference */}
                <div className="absolute inset-0 bg-black/70" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center space-y-8">

                {/* Headline */}
                <h2 className="text-4xl md:text-5xl font-bold text-white max-w-4xl tracking-tight leading-tight">
                    Creative Solar Battery Storage Solutions
                </h2>

                {/* Sub-headlines */}
                <p className="text-gray-300 text-base md:text-lg max-w-3xl font-medium leading-relaxed">
                    Add to that reliable technology of battery storage and the power of solar energy becomes even greater. Solar Spectrum’s leading edge solar battery storage solutions enable our customers to store excess energy generated during the day for use when needed.
                </p>
                <p className="text-gray-400 text-sm md:text-base max-w-3xl font-medium leading-relaxed">
                    Battery storage makes energy more efficient, more independent and less reliant on the traditional electricity grid. It gives homeowners and businesses the opportunity to get the most out of their solar investment, by delivering clean energy when they need it. Our team of experts will help you choose the right battery storage solution for your energy use, property needs and future goals.
                </p>

                {/* Consult Now Button */}
                <Link href="/contact">
                    <button className="!bg-[#00B612] hover:!bg-[#009a0f] text-white font-bold !py-3.5 !px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-[0_10px_30px_rgba(0,182,18,0.3)] text-lg tracking-tight inline-block whitespace-nowrap mt-4">
                        Consult Now
                    </button>
                </Link>
            </div>
        </section>
    );
};

export default SolarSolution;
