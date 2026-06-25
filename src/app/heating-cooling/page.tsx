import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeatingCoolingHero from '@/components/HeatingCoolingHero';
import HeatingCoolingBenefits from '@/components/HeatingCoolingBenefits';
import HeatingCoolingSolutions from '@/components/HeatingCoolingSolutions';
import HeatingCoolingFAQ from '@/components/HeatingCoolingFAQ';
import HeatingCoolingCTA from '@/components/HeatingCoolingCTA';

export const metadata: Metadata = {
  title: "Solar Heating and Cooling Systems Australia | Solar Spectrum",
  description: "Enjoy year-round comfort with energy-efficient heating and cooling solutions. Discover solar-powered HVAC and air conditioning systems for Australian homes.",
};

export default function HeatingCooling() {
  return (
    <main>
      <Navbar />
      <HeatingCoolingHero />
      <HeatingCoolingBenefits />
      <HeatingCoolingSolutions />
      <HeatingCoolingFAQ />
      <HeatingCoolingCTA />
      <Footer />
    </main>
  );
}
