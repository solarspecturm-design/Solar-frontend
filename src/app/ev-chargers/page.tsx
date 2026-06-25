import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeatPumpEVHero from '@/components/HeatPumpEVHero';
import HeatPumpEVBenefits from '@/components/HeatPumpEVBenefits';
import HeatPumpEVSolutions from '@/components/HeatPumpEVSolutions';
import HeatPumpEVCharging from '@/components/HeatPumpEVCharging';
import HeatPumpEVFAQ from '@/components/HeatPumpEVFAQ';
import HeatPumpEVCTA from '@/components/HeatPumpEVCTA';

export const metadata: Metadata = {
  title: "EV Chargers Australia | Home EV Charger Installation Experts",
  description: "Charge your electric vehicle at home with confidence. We provide EV charger installation, reliable charging systems, and tailored solutions across Australia.",
};

export default function EVChargers() {
  return (
    <main>
      <Navbar />
      <HeatPumpEVHero />
      <HeatPumpEVBenefits />
      <HeatPumpEVSolutions />
      <HeatPumpEVCharging />
      <HeatPumpEVFAQ />
      <HeatPumpEVCTA />
      <Footer />
    </main>
  );
}
