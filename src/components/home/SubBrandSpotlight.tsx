"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Shield } from "lucide-react";

interface SpotlightItem {
  id: string;
  title: string;
  num: string;
  description: string;
  badgeLabel: string;
  badgeValue: string;
  ctaText: string;
  ctaLink: string;
  image: string;
  logo: string;
}

const SPOTLIGHTS: SpotlightItem[] = [
  {
    id: "bangalore-ssfc",
    num: "01",
    title: "BANGALORE SUPER STRIKERS FC",
    description: "The flagship professional club building elite football pathways through structured training schedules, physical conditioning, and senior team registry options in KSFA division campaigns.",
    badgeLabel: "KSFA LEAGUE AFFILIATION",
    badgeValue: "Senior State Registry",
    ctaText: "Visit Website",
    ctaLink: "https://www.bangaloresuperstrikersfc.com/",
    image: "/images/team-2.jpg",
    logo: "/bangalore-super-strikers-fc.png"
  },
  {
    id: "pondicherry-ssfc",
    num: "02",
    title: "PONDICHERRY SUPER STRIKERS FC",
    description: "Expanding regional talent footprints across coastal territories. Our residential facilities house the U-15 national-ready elite dev cohorts.",
    badgeLabel: "RESIDENTIAL PATHWAY",
    badgeValue: "Under-15 Elite Dev Cohort",
    ctaText: "Explore Resident Squads",
    ctaLink: "/clubs/pondicherry-super-strikers-fc",
    image: "/images/news-pondicherry-scout.jpg",
    logo: "/pondicherry-super-strikers-fc.png"
  },
  {
    id: "chennai-ssfc",
    num: "03",
    title: "CHENNAI SUPER STRIKERS FC",
    description: "Expanding the state-division footprints through highly competitive metro division leagues, scouting festivals, and developmental tournaments.",
    badgeLabel: "METRO DIVISION TEAM",
    badgeValue: "State Tournament Registry",
    ctaText: "Explore Squad Profile",
    ctaLink: "/clubs/chennai-super-strikers-fc",
    image: "/images/news-chennai-league.jpg",
    logo: "/chennai-super-strikers-fc.png"
  },
  {
    id: "bangalore-football-school",
    num: "04",
    title: "BANGALORE FOOTBALL SCHOOL",
    description: "The core foundational academy nurturing grassroots players from U-9 through U-15 brackets. Combining scientific telemetry models with high-grade tactical drills.",
    badgeLabel: "ELITE ACADEMY SYLLABUS",
    badgeValue: "Under-9 to Under-15 brackets",
    ctaText: "Visit Youth Academy",
    ctaLink: "/football-school/bangalore-football-school",
    image: "/images/news-academy-u15.jpg",
    logo: "/foundation.png"
  }
];

export default function SubBrandSpotlight() {
  return (
    <section className="py-20 bg-[#F4F6FA] select-none border-b border-gray-150">
      <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start gap-1 border-l-4 border-[#10143A] pl-4 mb-12 text-left">
          <span className="text-[10px] font-black uppercase tracking-widest text-[#DCE135] bg-[#10143A] px-2.5 py-0.5 rounded">
            OUR ECOSYSTEM
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#0A1028] mt-1">
            CLUBS & DEVELOPMENTS
          </h2>
        </div>

        {/* 4-Column Grid of Foundation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SPOTLIGHTS.map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex flex-col justify-between group hover:shadow-md hover:border-gray-300 transition-all duration-300 select-none text-left"
            >
              <div>
                {/* Image Aspect Box with Crest Overlay */}
                <div className="relative aspect-[16/9] w-full overflow-hidden shrink-0 bg-gray-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-103"
                    sizes="(max-w-768px) 100vw, 320px"
                  />
                  {/* Floating logo crest */}
                  <div className="absolute bottom-3 right-3 z-20 w-12 h-12 bg-white/95 backdrop-blur-sm border border-gray-200/50 rounded-lg shadow p-1.5 flex items-center justify-center transition-all duration-300 group-hover:scale-105">
                    <div className="relative w-full h-full">
                      <Image
                        src={item.logo}
                        alt={`${item.title} logo`}
                        fill
                        className="object-contain"
                        sizes="48px"
                      />
                    </div>
                  </div>

                  {/* Slide number badge */}
                  <div className="absolute top-3 left-3 bg-[#10143A] text-[#DCE135] text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full z-20">
                    {item.num}
                  </div>
                </div>

                {/* Content area */}
                <div className="p-6 flex flex-col gap-4">
                  <h3 className="font-display text-base sm:text-lg font-black uppercase tracking-tight text-[#10143A] leading-tight line-clamp-1">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#4B5563] leading-relaxed line-clamp-3">
                    {item.description}
                  </p>

                  {/* Affiliation / Badge */}
                  <div className="flex items-center gap-2 bg-[#F4F6FA] border border-gray-100 rounded-lg p-2.5 w-fit">
                    <Shield className="h-4 w-4 text-[#10143A]" />
                    <div className="flex flex-col text-left">
                      <span className="text-[8px] font-black uppercase tracking-wider text-[#4B5563]/60 leading-none">
                        {item.badgeLabel}
                      </span>
                      <span className="text-[10px] font-bold text-[#10143A] mt-0.5 leading-none">
                        {item.badgeValue}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Button block at bottom */}
              <div className="p-6 pt-0">
                <Link
                  href={item.ctaLink}
                  {...(item.ctaLink.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#10143A] hover:bg-[#DCE135] text-white hover:text-[#10143A] py-3 text-xs font-bold uppercase tracking-wider transition-all shadow-sm active:scale-97"
                >
                  {item.ctaText}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
