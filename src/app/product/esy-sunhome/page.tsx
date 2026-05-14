'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EsySunhomeHero from '@/components/EsySunhomeHero';
import EsySunhomeDetails from '@/components/EsySunhomeDetails';
import FAQSection from '@/components/FAQSection';

export default function EsySunhomePage() {
    return (
        <main className="min-h-screen flex flex-col bg-white">
            <Navbar />

            <EsySunhomeHero />

            <EsySunhomeDetails />

            <FAQSection />

            <Footer />
        </main>
    );
}
