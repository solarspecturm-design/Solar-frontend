import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solar Battery Storage Systems Australia | Solar Spectrum",
  description: "Maximise your solar investment with a reliable home solar battery system. We provide expert solar battery installation and storage solutions across Australia.",
};

export default function SolarBatteryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
