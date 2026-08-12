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
    ctaText: "Explore Club Division",
    ctaLink: "/clubs/bangalore-super-strikers-fc",
    image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1200&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1518063319789-7217e6706b04?q=80&w=1200&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?q=80&w=1200&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1431324155629-1a6edd1d141e?q=80&w=1200&auto=format&fit=crop",
    logo: "/foundation.png"
  }
];

export default function SubBrandSpotlight() {
  return (
    <section className="w-full bg-[#F4F6FA] select-none">
      
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10 text-left">
        <div className="flex flex-col items-start gap-1 border-l-4 border-[#10143A] pl-4">
          <span className="text-[10px] font-black uppercase tracking-widest text-[#DCE135] bg-[#10143A] px-2.5 py-0.5 rounded">
            OUR ECOSYSTEM
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#0A1028] mt-1">
            CLUBS & DEVELOPMENTS
          </h2>
        </div>
      </div>

      {/* Spotlights Loop */}
      <div className="flex flex-col">
        {SPOTLIGHTS.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <div 
              key={item.id}
              className="w-full border-t border-b border-gray-200/50 bg-white"
            >
              <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 items-center min-h-[460px]">
                
                {/* Text Content Column */}
                <div className={`col-span-1 lg:col-span-6 p-8 sm:p-16 flex flex-col gap-6 text-left ${
                  isEven ? "order-1 lg:order-1 border-r border-gray-100" : "order-1 lg:order-2 border-l border-gray-100"
                }`}>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-black uppercase tracking-widest text-[#DCE135] bg-[#10143A] px-2.5 py-1 rounded">
                      {item.num}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#4B5563] uppercase">
                      SuperStriker Unit
                    </span>
                  </div>

                  <h3 className="font-display text-xl sm:text-3xl font-black uppercase tracking-tight text-[#10143A] leading-tight">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                    {item.description}
                  </p>

                  {/* Affiliation / Badges */}
                  <div className="flex items-center gap-3 bg-[#F4F6FA] border border-gray-100 rounded-xl p-4 w-fit">
                    <Shield className="h-5 w-5 text-[#10143A]" />
                    <div className="flex flex-col text-left">
                      <span className="text-[9px] font-black uppercase tracking-wider text-[#4B5563]/60 leading-none">
                        {item.badgeLabel}
                      </span>
                      <span className="text-xs font-bold text-[#10143A] mt-1 leading-none">
                        {item.badgeValue}
                      </span>
                    </div>
                  </div>

                  <Link
                    href={item.ctaLink}
                    className="inline-flex items-center gap-2 rounded-full bg-[#10143A] hover:bg-[#DCE135] text-white hover:text-[#10143A] px-6 py-3.5 text-xs font-bold uppercase tracking-wider transition-all w-fit shadow-md hover:scale-105 active:scale-95 mt-2"
                  >
                    {item.ctaText}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                {/* Cover Image Column */}
                <div className={`col-span-1 lg:col-span-6 relative h-[320px] sm:h-[460px] w-full overflow-hidden group ${
                  isEven ? "order-2 lg:order-2" : "order-2 lg:order-1"
                }`}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-103"
                    sizes="(max-w-1024px) 100vw, 50vw"
                  />
                  {/* Subtle vignette layer */}
                  <div className="absolute inset-0 bg-[#10143A]/10 group-hover:bg-[#10143A]/0 transition-colors duration-500" />
                  
                  {/* Floating Crest Overlay */}
                  <div className="absolute top-6 right-6 z-20 w-16 h-16 sm:w-24 sm:h-24 bg-white/95 backdrop-blur-sm border border-gray-200/50 rounded-xl shadow-lg p-3 flex items-center justify-center transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-1">
                    <div className="relative w-full h-full">
                      <Image
                        src={item.logo}
                        alt={`${item.title} Crest`}
                        fill
                        className="object-contain"
                        sizes="96px"
                      />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
