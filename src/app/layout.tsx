import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SportsOrganizationSchema from "@/components/schema";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "SuperStriker International | Football Ecosystem & Franchise Investment",
    template: "%s | SuperStriker International",
  },
  description:
    "SuperStriker International Pvt Ltd offers high-yield commercial sports real estate, football club franchise investments, and elite youth academy sponsorships in India. Partner with us to scale grassroots soccer infrastructure, smart turf developments, and telemetry-driven player scouting networks.",
  keywords: [
    "SuperStriker International",
    "Bangalore Super Strikers FC",
    "Pondicherry Super Strikers FC",
    "Chennai Super Strikers FC",
    "Bangalore Football School",
    "football franchise investment India",
    "sports real estate yield Bangalore",
    "smart turf property returns",
    "grassroots sports venture funding Karnataka",
    "invest in Indian football academy",
    "commercial sports sponsorship Pondicherry",
    "KSFA league franchise equity",
    "sports business franchise India",
    "football academy investment opportunities",
    "athletic telemetry startup"
  ],
  authors: [{ name: "SuperStriker Editorial Team" }],
  openGraph: {
    title: "SuperStriker International | Football Franchise & Infrastructure Investment",
    description:
      "High-yield sports real estate property returns, professional football club franchise investments, and elite telemetry-driven youth player academy sponsorships in India.",
    url: "https://superstriker.in",
    siteName: "SuperStriker International",
    images: [
      {
        url: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1200&h=630&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "SuperStriker International Football Stadium",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SuperStriker International | Football Franchise & Infrastructure Investment",
    description: "Sponsor grassroots turf property developments and regional professional football franchises in India.",
    images: ["https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1200&h=630&auto=format&fit=crop"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <SportsOrganizationSchema />
      </head>
      <body className="min-h-full flex flex-col bg-white text-secondary-navy">
        <SmoothScroll>
          <Navbar />
          <main className="flex-grow flex flex-col">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
