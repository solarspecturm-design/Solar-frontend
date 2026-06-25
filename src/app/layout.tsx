import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://solarspectrum.com.au'),
  title: "Solar Spectrum | Renewable Energy Storage Solution Australia",
  description: "Solar Spectrum helps Australian homes and businesses switch to solar with reliable renewable energy storage solutions built for real savings and long-term results.",
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: "Solar Spectrum | Renewable Energy Storage Solution Australia",
    description: "Solar Spectrum helps Australian homes and businesses switch to solar with reliable renewable energy storage solutions built for real savings and long-term results.",
    url: "https://solarspectrum.com.au",
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
    title: "Solar Spectrum | Renewable Energy Storage Solution Australia",
    description: "Solar Spectrum helps Australian homes and businesses switch to solar with reliable renewable energy storage solutions built for real savings and long-term results.",
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
