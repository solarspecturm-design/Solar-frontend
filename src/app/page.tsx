'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AdsSlider from '@/components/AdsSlider';
import Marquee from '@/components/Marquee';
import About from '@/components/About';
import AboutExtended from '@/components/AboutExtended';
import Process from '@/components/Process';
import Services from '@/components/Services';
import CTASection from '@/components/CTASection';
import OfferHighlights from '@/components/OfferHighlights';
import Testimonials from '@/components/Testimonials';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Marquee />
      <AdsSlider />
      <OfferHighlights />
      <About />
      <AboutExtended />
      <Process />
        <Services />
          <CTASection />
           <Testimonials />
      <ContactSection />
      <Footer />
    </main>
  );
}
