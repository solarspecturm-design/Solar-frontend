'use client';

import React from 'react';
import Link from 'next/link';

const ValuesSection = () => {
    return (
        <section className="bg-white py-24 overflow-hidden">
            <div className="container mx-auto px-4 max-w-[1240px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                    {/* Left Side: Content */}
                    <div className="space-y-10">
                        <div className="space-y-4">
                            <span className="text-[#65B741] font-bold text-[18px] uppercase tracking-wider">Our Value</span>
                            <h2 className="text-[48px] md:text-[60px] font-[900] text-black leading-[1.05] tracking-tight">
                                The Better Source Of<br />
                                Energy For The Better<br />
                                Tomorrow.
                            </h2>
                        </div>

                        <p className="text-[#666666] text-[17px] leading-[1.8] max-w-xl font-medium">
                            At Solar Spectrum, We Believe In Delivering Sustainable Energy With Integrity,
                            Innovation, And Excellence. We're Committed To Customer Satisfaction,
                            Smart Technology, And Creating A Greener Future For All.
                        </p>

                        <Link href="/about">
                            <button className="!bg-[#28A745] hover:!bg-green-700 text-white font-bold !py-4.5 !px-12 rounded-full transition-all duration-300 transform hover:scale-105 shadow-[0_12px_30px_rgba(40,167,69,0.3)] text-[18px]">
                                Discover More
                            </button>
                        </Link>
                    </div>

                    {/* Right Side: Cards */}
                    <div className="space-y-6 lg:pl-4 flex flex-col items-center lg:items-stretch">
                        {/* Our Vision Card - Gradient */}
                        <div className="w-full max-w-[420px] rounded-[32px] bg-gradient-to-r from-[#4caf50] via-[#6ecf66] to-[#ffd054] p-8 shadow-[0_30px_80px_rgba(76,175,80,0.22)] hover:-translate-y-1 transition-transform duration-300">
                            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-xl mb-6 mx-auto">
                                <svg className="w-8 h-8 text-[#4caf50]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18zm0-15.75V12l3.75 2.25" />
                                </svg>
                            </div>
                            <h3 className="text-white text-[28px] font-extrabold text-center mb-4">Our Vision</h3>
                            <p className="text-white/90 text-[15px] leading-7 text-center">
                                We are Australia’s leading renewable energy provider, providing smarter, cleaner and more efficient solar solutions that empower homes and businesses to achieve energy independence.
                            </p>
                        </div>

                        {/* Our Mission Card - White */}
                        <div className="w-full max-w-[420px] rounded-[32px] bg-white border border-gray-100 p-8 shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-transform duration-300">
                            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#4caf50] shadow-lg mb-6 mx-auto">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                            <h3 className="text-black text-[26px] font-extrabold text-center mb-4">Our Mission</h3>
                            <p className="text-[#444444] text-[15px] leading-7 text-center">
                                We’re dedicated to making renewable energy affordable and accessible through innovative solar technology, professional installation, and customer-centric solutions that provide lasting value.
                            </p>
                        </div>

                        {/* Our Motto Card - White */}
                        <div className="w-full max-w-[420px] rounded-[32px] bg-white border border-gray-100 p-8 shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-transform duration-300">
                            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#4caf50] shadow-lg mb-6 mx-auto">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19c3.866 0 7-1.79 7-4V6m0 9c0 2.21-3.134 4-7 4s-7-1.79-7-4V6m14 4H5" />
                                </svg>
                            </div>
                            <h3 className="text-black text-[26px] font-extrabold text-center mb-4">Our Motto</h3>
                            <p className="text-[#444444] text-[15px] leading-7 text-center">
                                Brighter tomorrow with smarter solar solutions today.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    );
};

export default ValuesSection;
