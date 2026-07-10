import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.solarspectrum.com.au'),
  alternates: {
    canonical: '/',
  },
  title: "Solar Spectrum | Solar Panels & Battery Storage Australia",
  description: "Switch to solar with Solar Spectrum Australia. We provide reliable solar panels and battery storage solutions for homes and businesses to maximize savings.",
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: "Solar Spectrum | Solar Panels & Battery Storage Australia",
    description: "Switch to solar with Solar Spectrum Australia. We provide reliable solar panels and battery storage solutions for homes and businesses to maximize savings.",
    url: "https://www.solarspectrum.com.au",
    siteName: "Solar Spectrum",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Solar Spectrum Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solar Spectrum | Solar Panels & Battery Storage Australia",
    description: "Switch to solar with Solar Spectrum Australia. We provide reliable solar panels and battery storage solutions for homes and businesses to maximize savings.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
