import type { Metadata } from "next";
import { Inter, Syne, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { contactInfo } from "@/content/contact";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Pixora Studios | World-Class Premium Software Agency",
  description: "Boutique premium software agency building custom digital products for clinics, restaurants, and local businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Pixora Studios",
    "image": "https://pixorastudios.com/og-image.jpg",
    "@id": "https://pixorastudios.com",
    "url": "https://pixorastudios.com",
    "telephone": contactInfo.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Bhubaneswar",
      "addressLocality": "Bhubaneswar",
      "addressRegion": "Odisha",
      "postalCode": "751001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 20.2961,
      "longitude": 85.8245
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://linkedin.com/company/pixorastudios",
      "https://twitter.com/pixorastudios"
    ]
  };

  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${syne.variable} ${jetbrainsMono.variable} antialiased bg-background text-text-1`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
