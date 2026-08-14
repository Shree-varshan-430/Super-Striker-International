import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft, MapPin } from "lucide-react";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const club = clubsData[slug];
  if (!club) return {};
  return {
    title: club.name,
    description: `${club.focus} Learn about foundation registry and squad developments in ${club.location}.`,
    alternates: {
      canonical: `/clubs/${slug}`,
    },
  };
}

interface ClubDetails {
  name: string;
  location: string;
  image: string;
  founded: string;
  league: string;
  colors: string;
  focus: string;
  description: string;
  highlights: string[];
  logo: string;
}

const clubsData: Record<string, ClubDetails> = {
  "bangalore-super-strikers-fc": {
    name: "Bangalore Super Strikers FC",
    location: "Bangalore, Karnataka",
    image: "/images/WhatsApp Image 2026-08-11 at 8.34.27 AM.jpeg",
    founded: "2023",
    league: "KSFA Senior Division",
    colors: "Sky Blue & White",
    focus: "Elite senior competition, state-wide talent registry, and progression pipelines to national squads.",
    description: "Bangalore Super Strikers FC represents the pinnacle of our competitive pathway. Based in Bangalore, the club competes in the official KSFA leagues, providing an elite environment where young talent plays against high-level senior opposition.",
    highlights: [
      "AIFF & KSFA Affiliation and compliance registry",
      "Elite player pathways through the Bangalore Football School",
      "Regular competitive tournament calendars and senior cups",
      "Professional standard fitness trackers and analytics",
      "Dedicated scouting network spanning multiple Karnataka districts"
    ],
    logo: "/bangalore-super-strikers-fc.png"
  },
  "pondicherry-super-strikers-fc": {
    name: "Pondicherry Super Strikers FC",
    location: "Pondicherry",
    image: "/images/WhatsApp Image 2026-08-11 at 8.34.27 AM (1).jpeg",
    founded: "2024",
    league: "Pondicherry State League",
    colors: "Sky Blue, Gold & White",
    focus: "Regional district talent scouting, residential player cohorts, and community grass roots clinic expansion.",
    description: "Pondicherry Super Strikers FC was founded to explore the passionate but underserved talent pool in Pondicherry and neighboring Tamil Nadu. The club coordinates residential cohorts and local district academies to build a self-sustaining regional pipeline.",
    highlights: [
      "Residential cohort housing for U-13 and U-15 squads",
      "School partnership programs connecting municipal districts",
      "Local community turf clinics and night league festivals",
      "Structured technical growth benchmarks for junior teams",
      "Direct scouting progression pipeline to Bangalore first team"
    ],
    logo: "/pondicherry-super-strikers-fc.png"
  },
  "chennai-super-strikers-fc": {
    name: "Chennai Super Strikers FC",
    location: "Chennai, Tamil Nadu",
    image: "/images/WhatsApp Image 2026-08-11 at 8.34.27 AM (2).jpeg",
    founded: "2025",
    league: "Chennai Football Association Division",
    colors: "Navy Blue, Sky Blue & White",
    focus: "Talent discovery in metro districts, high-performance physical conditioning, and corporate team linkages.",
    description: "Chennai Super Strikers FC is the latest addition to our football network. The club coordinates scouting clinics across Chennai metro zones, identifying elite athletes and giving them access to professional training regimes and competitive leagues.",
    highlights: [
      "Metro scouting clinics targeting corporate and school teams",
      "High-performance strength and agility conditioning models",
      "Partnership pitches for local youth tournament access",
      "Clear pathway registry to national scouting events",
      "Focus on technical ball mastery and positional play standards"
    ],
    logo: "/chennai-super-strikers-fc.png"
  }
};

export async function generateStaticParams() {
  return [
    { slug: "bangalore-super-strikers-fc" },
    { slug: "pondicherry-super-strikers-fc" },
    { slug: "chennai-super-strikers-fc" }
  ];
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ClubPage({ params }: PageProps) {
  const { slug } = await params;
  const club = clubsData[slug];

  if (!club) {
    notFound();
  }

  return (
    <div className="w-full bg-white text-secondary-navy min-h-screen">
      {/* Upper breadcrumb */}
      <div className="border-b border-gray-100 py-4 bg-background-soft px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-secondary-navy hover:text-primary-sky transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6">
        {/* Title, Logo and Location */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6 mb-8 border-b border-gray-100 pb-8">
          <div className="flex flex-col gap-4 text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 self-center sm:self-start bg-primary-sky/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-secondary-navy">
              <MapPin className="h-3.5 w-3.5 text-secondary-navy" />
              {club.location}
            </div>
            <h1 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-secondary-navy leading-none">
              {club.name}
            </h1>
          </div>
          {club.logo && (
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 shrink-0 select-none">
              <Image
                src={club.logo}
                alt={`${club.name} badge`}
                fill
                className="object-contain"
                priority
              />
            </div>
          )}
        </div>

        {/* Club image */}
        <div className="relative h-64 sm:h-[400px] w-full rounded-2xl overflow-hidden shadow-sm mb-12">
          <Image
            src={club.image}
            alt={`${club.name} training action`}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Quick Metrics */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <div className="bg-background-soft border border-gray-150 p-6 rounded-xl flex flex-col gap-4">
              <h3 className="font-display text-xs font-bold uppercase tracking-widest text-secondary-navy/50 border-b border-gray-200 pb-2">
                Club Registry Profile
              </h3>
              
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold uppercase tracking-wide text-secondary-navy/40">Founded</span>
                <span className="text-sm font-bold text-secondary-navy">{club.founded}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold uppercase tracking-wide text-secondary-navy/40">League Registry</span>
                <span className="text-sm font-bold text-secondary-navy">{club.league}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold uppercase tracking-wide text-secondary-navy/40">Club Colors</span>
                <span className="text-sm font-bold text-secondary-navy">{club.colors}</span>
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <h4 className="text-xs font-bold uppercase tracking-widest text-secondary-navy/50">
                Foundations Model
              </h4>
              <p className="text-xs text-secondary-navy/60 leading-relaxed">
                As a sub-foundation of SuperStriker International, this club receives direct support in training equipment, licensed coaches, and facilities.
              </p>
            </div>
          </div>

          {/* Description and Highlights */}
          <div className="md:col-span-8 flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h2 className="font-display text-xl font-bold uppercase tracking-tight text-secondary-navy">
                Development Objective
              </h2>
              <p className="text-sm sm:text-base text-secondary-navy/80 leading-relaxed">
                {club.description}
              </p>
              <p className="text-xs sm:text-sm text-secondary-navy/60 leading-relaxed mt-2">
                <strong>Strategic Focus:</strong> {club.focus}
              </p>
            </div>

            <div className="border-t border-gray-100 pt-6">
              <h3 className="font-display text-base font-bold uppercase tracking-tight text-secondary-navy mb-4">
                Key Highlights & Operations
              </h3>
              <ul className="space-y-3">
                {club.highlights.map((h, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-secondary-navy/80 leading-relaxed">
                    <span className="h-5 w-5 rounded-full bg-primary-sky/20 text-secondary-navy flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                      ✓
                    </span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-6">
              <Link
                href="/investors#enquire"
                className="inline-flex items-center justify-center rounded-full bg-secondary-navy px-6 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-secondary-navy/90"
              >
                Inquire About Club Sponsorship
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
