"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface ClubChapter {
  id: string;
  num: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  specs: { label: string; value: string }[];
  ctaText: string;
  ctaLink: string;
  image: string;
  logo: string;
}

const CLUBS: ClubChapter[] = [
  {
    id: "bangalore-ssfc",
    num: "01",
    category: "SENIOR FIRST TEAM • KSFA SUPER DIVISION",
    title: "Bangalore Super Strikers FC",
    subtitle: "The flagship professional club representing Karnataka on the national stage.",
    description: "Competing in the top tier of state football, the senior squad executes tactical high-pressing systems backed by automated GPS telemetry load tracking, licensed coaching staff, and direct pathways to national league tournaments.",
    specs: [
      { label: "League Tier", value: "KSFA Super Division" },
      { label: "Squad Base", value: "Bengaluru Central Arena" },
      { label: "Roster Flow", value: "Professional Senior First-Team" }
    ],
    ctaText: "Visit Club Official",
    ctaLink: "https://www.bangaloresuperstrikersfc.com/",
    image: "/images/team-2.jpg",
    logo: "/bangalore-super-strikers-fc.png"
  },
  {
    id: "pondicherry-ssfc",
    num: "02",
    category: "COASTAL RESIDENTIAL ACADEMY",
    title: "Pondicherry Super Strikers FC",
    subtitle: "Expanding regional talent footprints across coastal territories.",
    description: "Our dedicated residential boarding facility in Pondicherry houses the Under-15 elite development cohorts, offering fully integrated athletic nutrition, licensed UEFA/AIFF training, and high-exposure state championship fixtures.",
    specs: [
      { label: "Division", value: "State Youth League" },
      { label: "Facility", value: "Residential Boarding & HPC" },
      { label: "Cohort", value: "U-15 National Development" }
    ],
    ctaText: "Explore Resident Squads",
    ctaLink: "/clubs/pondicherry-super-strikers-fc",
    image: "/images/news-pondicherry-scout.jpg",
    logo: "/pondicherry-super-strikers-fc.png"
  },
  {
    id: "chennai-ssfc",
    num: "03",
    category: "METRO COMPETITIVE HUB",
    title: "Chennai Super Strikers FC",
    subtitle: "Developing premier athletic prospects in Tamil Nadu's capital.",
    description: "Anchoring the Tamil Nadu talent corridor, Chennai Super Strikers FC competes in rigorous regional tournaments and hosts scouting festivals that feed standout athletes directly into the residential academy system.",
    specs: [
      { label: "Territory", value: "Tamil Nadu Metro Circuit" },
      { label: "Scouting Hub", value: "State Tournament Registry" },
      { label: "Pathway", value: "Senior Club Feeder" }
    ],
    ctaText: "Explore Squad Profile",
    ctaLink: "/clubs/chennai-super-strikers-fc",
    image: "/images/news-chennai-league.jpg",
    logo: "/chennai-super-strikers-fc.png"
  },
  {
    id: "bangalore-football-school",
    num: "04",
    category: "FOUNDATIONAL YOUTH ACADEMY",
    title: "Bangalore Football School",
    subtitle: "Scientific football education for grassroots athletes aged 6 to 18.",
    description: "The core foundational academy nurturing grassroots talent from U-9 through U-18 age groups. Combining European physical literacy standards, sensory tracking, and direct promotion pipelines into state league teams.",
    specs: [
      { label: "Age Groups", value: "U-9, U-12, U-15, U-18 Batches" },
      { label: "Curriculum", value: "AIFF & UEFA Licensed Syllabi" },
      { label: "Admissions", value: "Year-Round Academy Trials" }
    ],
    ctaText: "Explore Youth Academy",
    ctaLink: "/football-school/bangalore-football-school",
    image: "/images/news-academy-u15.jpg",
    logo: "/foundation.png"
  }
];

export default function SubBrandSpotlight() {
  return (
    <section className="py-24 sm:py-32 bg-[#F8F9FB] select-none border-b border-gray-200">
      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        
        {/* Section Title Header */}
        <div className="flex flex-col items-start gap-2 mb-16 sm:mb-20 text-left border-l-4 border-[#11123c] pl-4 sm:pl-6">
          <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#a29142]">
            CHAPTERS • THE ECOSYSTEM
          </span>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#11123c]">
            Clubs & Sporting Franchises
          </h2>
          <p className="text-sm sm:text-base text-[#4B5563] max-w-2xl font-normal leading-relaxed">
            SuperStriker International operates an integrated network of senior clubs, residential academies, and youth schools across South India.
          </p>
        </div>

        {/* Editorial Stack of Full-Width Chapters (Thunderhill Track Layout) */}
        <div className="space-y-16 sm:space-y-24">
          {CLUBS.map((club, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={club.id}
                className="relative bg-white border border-gray-200 p-6 sm:p-10 lg:p-12 shadow-xs transition-all duration-300 hover:border-[#11123c]/40"
              >
                {/* Giant Faint Background Number (Thunderhill Watermark) */}
                <div className="absolute right-6 top-4 z-0 pointer-events-none opacity-[0.04] select-none hidden sm:block">
                  <span className="font-display font-black text-[140px] lg:text-[180px] leading-none text-[#11123c]">
                    {club.num}
                  </span>
                </div>

                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10 ${
                  isEven ? "" : "lg:grid-flow-dense"
                }`}>
                  
                  {/* Media Block (Photo + Coat of Arms Crest) */}
                  <div className={`lg:col-span-5 ${isEven ? "" : "lg:col-start-8"}`}>
                    <div className="relative aspect-[16/11] w-full overflow-hidden bg-gray-100 border border-gray-200">
                      <Image
                        src={club.image}
                        alt={club.title}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-103"
                        sizes="(max-w-1024px) 100vw, 500px"
                      />
                      
                      {/* Floating Coat-of-Arms Crest */}
                      <div className="absolute bottom-4 right-4 z-20 w-14 h-14 bg-white/95 backdrop-blur-sm border border-gray-200 p-2 shadow-lg flex items-center justify-center">
                        <div className="relative w-full h-full">
                          <Image
                            src={club.logo}
                            alt={`${club.title} crest`}
                            fill
                            className="object-contain"
                            sizes="48px"
                          />
                        </div>
                      </div>

                      {/* Small Caps Chapter Marker */}
                      <div className="absolute top-4 left-4 bg-[#11123c] text-[#e9d319] font-mono text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1">
                        CHAPTER {club.num}
                      </div>
                    </div>
                  </div>

                  {/* Editorial Content Block */}
                  <div className={`lg:col-span-7 flex flex-col gap-4 text-left ${isEven ? "" : "lg:col-start-1"}`}>
                    
                    {/* Category Eyebrow */}
                    <span className="text-[11px] font-mono font-bold uppercase tracking-[0.22em] text-[#a29142]">
                      {club.category}
                    </span>

                    {/* Headline */}
                    <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-[#11123c] leading-tight">
                      {club.title}
                    </h3>

                    {/* Refined Heritage Serif Subtitle */}
                    <p className="font-serif text-lg sm:text-xl italic text-[#11123c]/80 leading-snug">
                      &ldquo;{club.subtitle}&rdquo;
                    </p>

                    {/* Authoritative Paragraph */}
                    <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed font-normal">
                      {club.description}
                    </p>

                    {/* Graphic Specs Table / Matrix */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-2 pt-4 border-t border-gray-150">
                      {club.specs.map((spec, sIdx) => (
                        <div key={sIdx} className="bg-gray-50 border border-gray-150 p-3 flex flex-col">
                          <span className="text-[9px] font-mono font-bold uppercase tracking-[0.16em] text-[#696484]">
                            {spec.label}
                          </span>
                          <span className="text-xs font-bold text-[#11123c] mt-1 font-mono">
                            {spec.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Sharp Action Button */}
                    <div className="pt-2">
                      <Link
                        href={club.ctaLink}
                        {...(club.ctaLink.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="thunderhill-btn thunderhill-btn-dark inline-flex"
                      >
                        <span>{club.ctaText}</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
