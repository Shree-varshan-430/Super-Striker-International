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
    default: "SuperStriker International | Football Ecosystem & Development",
    template: "%s | SuperStriker International",
  },
  description:
    "SuperStriker International Pvt Ltd is building India's future football champions through professional clubs (Bangalore, Pondicherry, Chennai Super Strikers), football schools, grassroots clinics, and strategic partner investment opportunities.",
  keywords: [
    "SuperStriker International",
    "Bangalore Super Strikers FC",
    "Pondicherry Super Strikers FC",
    "Chennai Super Strikers FC",
    "Bangalore Football School",
    "Indian Football Academy",
    "Football Investment India",
    "Grassroots Football India",
  ],
  authors: [{ name: "SuperStriker Editorial Team" }],
  openGraph: {
    title: "SuperStriker International | Football Ecosystem & Development",
    description:
      "Creating India's next football champions. Connecting grassroots clinics, academy training, and professional football leagues under a unified ecosystem.",
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
    title: "SuperStriker International | Football Ecosystem",
    description: "Building India's future football champions from grassroots to professional leagues.",
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
