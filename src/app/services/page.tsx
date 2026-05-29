'use client';

import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicesGrid from '@/components/ServicesGrid';
import ConnectExpertsSection from '@/components/ConnectExpertsSection';

export default function ServicesPage() {
    return (
        <main className="min-h-screen flex flex-col bg-white">
            <Navbar />

            {/* ================= HERO SECTION ================= */}
            <section className="relative w-full h-[320px] md:h-[420px] lg:h-[460px] flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <Image
                    src="/bg23.png"
                    alt="Our Services"
                    fill
                    priority
                    className="object-cover object-center"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/60 z-10"></div>

                {/* Content Wrapper */}
                <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
                    {/* Subtitle */}
                    <p className="text-[#65B741] text-[14px] md:text-[16px] font-semibold tracking-[2px] uppercase mb-3">
                        What We Do
                    </p>

                    {/* Main Heading */}
                    <h1 className="text-white font-extrabold uppercase text-[24px] sm:text-[32px] md:text-[45px] lg:text-[52px] leading-[1.2] tracking-[0.5px]">
                        Our Energy Services
                    </h1>
                    
                    {/* Description */}
                    <p className="text-gray-300 max-w-2xl mx-auto mt-4 text-[14px] md:text-[16px] font-normal leading-[1.6]">
                        We offer a comprehensive range of clean energy solutions designed to lower your utility bills and reduce your carbon footprint.
                    </p>
                </div>
            </section>

            {/* Services Grid Section */}
            <div className="py-12 bg-gray-50">
                <div className="max-w-7xl mx-auto text-center px-6">
                    <span className="text-[#65B741] text-[14px] md:text-[16px] font-semibold uppercase tracking-[1px]">Premium Offerings</span>
                    <h2 className="text-[28px] md:text-[36px] font-bold text-gray-900 mt-2">Tailored Solutions for Every Need</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mt-3 text-[14px] md:text-[16px]">
                        From solar battery storage to HVAC installations, explore how Solar Spectrum can power your home and business efficiently.
                    </p>
                </div>
                <ServicesGrid />
            </div>

            {/* Connect Section */}
            <ConnectExpertsSection />

            <Footer />
        </main>
    );
}
