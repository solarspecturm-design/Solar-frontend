import type { Metadata } from "next";
import { Inter } from "next/font/google";
import CookieBanner from '@/components/CookieBanner';
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
      <body className={inter.className}>
        {children}
        <div className="contact-actions-container">
          <a href="tel:1300367909" className="contact-btn contact-btn--call" aria-label="Call Solar Spectrum">
            <span className="contact-btn__icon" aria-hidden="true">
              <svg className="contact-btn__icon-svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </span>
            <span className="contact-btn__label">Call Now</span>
          </a>
          <a href="https://wa.me/61401535001" className="contact-btn contact-btn--chat" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
            <span className="contact-btn__icon" aria-hidden="true">
              <span className="whatsapp-logo-wrapper">
                <svg className="contact-btn__icon-svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.458L0 24zm6.59-2.035c1.661.986 3.293 1.503 4.795 1.503 5.561 0 10.085-4.526 10.088-10.09.002-2.696-1.04-5.23-2.936-7.129C16.44 4.35 13.916 3.3 11.233 3.3c-5.564 0-10.09 4.526-10.093 10.091-.001 1.83.479 3.618 1.39 5.201l-.993 3.627 3.72-1.082h.39zm12.39-7.27c-.305-.153-1.805-.89-2.083-.99-.279-.101-.482-.153-.684.153-.203.305-.785.99-.962 1.19-.177.202-.355.228-.66.075-.304-.152-1.285-.473-2.448-1.51-1.05-.935-1.727-2.09-1.93-2.446-.203-.355-.022-.547.153-.722.157-.156.355-.411.533-.615.177-.203.238-.346.355-.577.117-.232.06-.437-.03-.59-.09-.153-.684-1.65-.938-2.26-.247-.597-.499-.516-.684-.526-.178-.01-.382-.01-.585-.01-.203 0-.533.076-.813.382-.28.305-1.066 1.042-1.066 2.541 0 1.498 1.09 2.946 1.238 3.149.148.203 2.147 3.279 5.2 4.59.727.311 1.291.497 1.735.638.73.232 1.396.199 1.922.12.585-.087 1.805-.737 2.058-1.448.254-.711.254-1.32.178-1.447-.076-.127-.279-.203-.584-.356z"/>
                </svg>
              </span>
            </span>
            <span className="contact-btn__label">Chat With Experts</span>
          </a>
        </div>
        <CookieBanner />
      </body>
    </html>
  );
}
