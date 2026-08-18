"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface TierInfo {
  tier: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  highlights: string[];
  entities?: { name: string; loc: string; details: string }[];
}

export default function Ecosystem() {
  const [activeTier, setActiveTier] = useState<number>(0);

  const tiers: TierInfo[] = [
    {
      tier: "Tier 01",
      title: "Corporate Parent & Strategic Capital",
      subtitle: "SuperStriker International Governance",
      description: "SuperStriker International coordinates multi-region club ownership, FIFA-standard sports infrastructure financing, corporate governance, player rights management, and national developmental partnerships.",
      image: "/images/news-pitch-sponsorship.jpg",
      highlights: [
        "Corporate financing and smart FIFA-standard sports infrastructure deployment",
        "Multi-acre campus master-planning and regional hub modernization",
        "National tournament hosting and global scout connectivity",
        "Centralized sports analytics and biometric telemetry systems"
      ]
    },
    {
      tier: "Tier 02",
      title: "Professional Football Clubs",
      subtitle: "Senior State & National League Teams",
      description: "Our professional clubs provide the competitive pinnacle for academy graduates and senior professional footballers, competing in state super divisions, regional cups, and national league qualifiers.",
      image: "/images/match-1.jpg",
      highlights: [
        "Full-time professional coaching staffs and tactical video analysts",
        "Official affiliation with State Football Associations (KSFA, TFA, PFA)",
        "Direct contract pathways to senior domestic and national tournaments"
      ],
      entities: [
        { name: "Bangalore Super Strikers FC", loc: "Bangalore, Karnataka", details: "Flagship senior squad competing in premier KSFA state divisions." },
        { name: "Pondicherry Super Strikers FC", loc: "Pondicherry UT", details: "Territorial residential squad driving coastal talent development." },
        { name: "Chennai Super Strikers FC", loc: "Chennai, Tamil Nadu", details: "Competitive league squad and youth feeder hub." }
      ]
    },
    {
      tier: "Tier 03",
      title: "Bangalore Football School & Elite Academies",
      subtitle: "High-Performance Technical Centers",
      description: "Delivering licensed AIFF & UEFA curriculum training, sports science, on-campus physiotherapy, athletic nutrition, and year-round competitive match exposure for junior age cohorts.",
      image: "/images/team-1.jpg",
      highlights: [
        "Age-specific progressive technical coaching from U-5 to U-18",
        "State-of-the-art turf training complexes and GPS load monitoring",
        "Residential training options, athlete dormitories, and school integration"
      ],
      entities: [
        { name: "Bangalore Football School", loc: "Bangalore, Karnataka", details: "Premier youth football academy nurturing over 500+ student athletes." }
      ]
    },
    {
      tier: "Tier 04",
      title: "Grassroots & School Outreach Programs",
      subtitle: "Broad-Based Community Inclusion",
      description: "Our foundational programs take football directly into public and private schools, democratizing athletic access and identifying raw sporting potential across municipal districts.",
      image: "/images/founder-with-football.jpg",
      highlights: [
        "Free coaching clinics in municipal and government partner schools",
        "Weekend inter-school community festivals and scouting tournaments",
        "Coach-the-coach certification and grass-roots instructor seminars"
      ]
    },
    {
      tier: "Tier 05",
      title: "Youth Talent Identification & Registry",
      subtitle: "Scientific Player Mentorship",
      description: "Selected prodigies receive full athletic scholarships, dietary and hydration plans, and video telemetry analysis loops to accelerate their sporting maturity.",
      image: "/images/founder-turf-pose.jpg",
      highlights: [
        "100% merit-based kit, gear, and travel tournament sponsorships",
        "Individualized tactical growth blueprints and performance reviews",
        "Direct showcase before visiting national scouts and federation panels"
      ]
    },
    {
      tier: "Tier 06",
      title: "National & Global Player Pathways",
      subtitle: "The Elite Graduation Goal",
      description: "The culmination of our vertical ecosystem: elevating standout talent into national youth teams (India U-17, U-20, Senior), top domestic leagues (ISL, I-League), and overseas partner trials.",
      image: "/images/team-2.jpg",
      highlights: [
        "Direct showcase fixtures before senior league managers and scouts",
        "Collegiate sports scholarship pathways and national camp preparation",
        "Fulfilling the dream of representing India at the highest international stages"
      ]
    }
  ];

  return (
    <div className="w-full bg-white text-[#11123c] min-h-screen pb-20 select-none text-left">
      
      {/* 1. Small Hero Banner */}
      <div className="relative w-full h-[240px] sm:h-[300px] bg-[#11123c] flex items-center justify-start overflow-hidden group select-none mt-20">
        <Image
          src="/images/match-1.jpg"
          alt="SuperStriker Ecosystem"
          fill
          quality={85}
          className="object-cover object-center opacity-75 transition-transform duration-1000 group-hover:scale-102"
          priority
        />
        {/* Subtle contrast gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-[#11123c]/60 to-transparent z-10" />
        
        {/* Brand accent wedges on bottom right */}
        <div 
          className="absolute bottom-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-[#11123c] pointer-events-none z-15 translate-x-2 translate-y-2 lg:block hidden" 
          style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }} 
        />
        <div 
          className="absolute bottom-0 right-0 w-20 h-20 sm:w-28 sm:h-28 bg-[#e9d319] pointer-events-none z-20 lg:block hidden" 
          style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }} 
        />

        <div className="relative z-20 max-w-7xl 2xl:max-w-[1440px] mx-auto w-full px-4 sm:px-6 lg:px-10 xl:px-12 text-left flex flex-col gap-2">
          <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-[#e9d319] bg-[#11123c] px-3 py-1 rounded w-fit">
            STRATEGIC ARCHITECTURE
          </span>
          <h1 className="font-display text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-none">
            SuperStriker Ecosystem
          </h1>
          <p className="text-xs sm:text-base text-white/80 max-w-2xl leading-relaxed mt-1 font-medium">
            A vertically integrated multi-tier framework linking grassroots discovery to residential elite training, club franchises, and smart infrastructure.
          </p>
        </div>
      </div>

      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 pt-12 sm:pt-16">

        {/* 2. Interactive Navigation Pills for the 6 Tiers */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 bg-gray-50 p-2 rounded-2xl border border-gray-150 w-fit">
            {tiers.map((t, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTier(idx)}
                className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeTier === idx
                    ? "bg-[#11123c] text-[#e9d319] shadow-md scale-102"
                    : "bg-transparent text-[#4B5563] hover:text-[#11123c] hover:bg-white"
                }`}
              >
                {t.tier}
              </button>
            ))}
          </div>
        </div>

        {/* 3. Featured Dynamic Tier Spotlight Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTier}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-24 bg-gray-50 rounded-3xl p-6 sm:p-12 shadow-sm relative overflow-hidden"
          >
            {/* Image Side */}
            <div className="lg:col-span-5 flex justify-center relative z-10 w-full order-1 lg:order-1">
              <div className="relative aspect-[3/4] w-full max-w-[450px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={tiers[activeTier].image}
                  alt={tiers[activeTier].title}
                  fill
                  quality={85}
                  className="object-cover object-center transition-transform duration-700 hover:scale-102"
                  sizes="(max-w-768px) 100vw, 450px"
                />
              </div>
            </div>

            {/* Content Side */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-left relative z-10 order-2 lg:order-2">
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#11123c] bg-[#e9d319] px-3 py-1 rounded">
                  {tiers[activeTier].tier}
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#6B7280]">
                  {tiers[activeTier].subtitle}
                </span>
              </div>

              <h3 className="font-display text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#11123c] leading-tight">
                {tiers[activeTier].title}
              </h3>
              <div className="h-1.5 w-16 bg-[#11123c]" />

              <p className="text-base sm:text-lg text-[#374151] leading-relaxed font-normal">
                {tiers[activeTier].description}
              </p>

              {/* Key Operations List */}
              <div className="flex flex-col gap-3">
                <span className="text-xs font-black uppercase tracking-wider text-[#11123c]">
                  Core Functions & Strategic Operations:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {tiers[activeTier].highlights.map((h, i) => (
                    <div key={i} className="bg-white rounded-xl p-3.5 shadow-xs border-l-3 border-[#11123c]">
                      <p className="text-xs sm:text-sm font-semibold text-[#11123c] leading-snug">
                        {h}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Associated Entities if any */}
              {tiers[activeTier].entities && (
                <div className="flex flex-col gap-3 pt-2">
                  <span className="text-xs font-black uppercase tracking-wider text-[#11123c]">
                    Key Affiliated Clubs & Entities:
                  </span>
                  <div className="grid grid-cols-1 gap-2.5">
                    {tiers[activeTier].entities?.map((ent, i) => (
                      <div key={i} className="bg-white rounded-xl p-4 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div>
                          <h4 className="font-display text-sm font-black uppercase tracking-tight text-[#11123c]">
                            {ent.name}
                          </h4>
                          <p className="text-xs text-[#4B5563] mt-0.5">{ent.details}</p>
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#11123c] bg-gray-100 px-2.5 py-1 rounded w-fit shrink-0">
                          {ent.loc}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* 5. Complete Vertical Architecture Showcase (Alternating Story Cards) */}
        <div className="mb-20 text-left flex flex-col gap-4">
          <span className="text-[10px] font-black uppercase tracking-widest text-[#11123c] bg-[#e9d319] px-3 py-1 rounded w-fit">
            ALL TIERS SUMMARY
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#11123c] leading-tight">
            Comprehensive Developmental Journey
          </h2>
          <div className="h-1.5 w-16 bg-[#11123c]" />
        </div>

        {/* Tier Cards Stack */}
        <div className="flex flex-col gap-12">
          {tiers.map((t, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={idx}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center bg-gray-50 rounded-3xl p-6 sm:p-12 shadow-sm relative overflow-hidden"
              >
                {/* Image */}
                <div className={`lg:col-span-5 flex justify-center relative z-10 w-full ${
                  isEven ? "order-1 lg:order-1" : "order-1 lg:order-2"
                }`}>
                  <div className="relative aspect-[3/4] w-full max-w-[450px] rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src={t.image}
                      alt={t.title}
                      fill
                      quality={85}
                      className="object-cover object-center transition-transform duration-700 hover:scale-102"
                      sizes="(max-w-768px) 100vw, 450px"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={`lg:col-span-7 flex flex-col gap-6 text-left relative z-10 ${
                  isEven ? "order-2 lg:order-2" : "order-2 lg:order-1"
                }`}>
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#11123c] bg-[#e9d319] px-3 py-1 rounded w-fit">
                    {t.tier}
                  </span>

                  <h3 className="font-display text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#11123c] leading-tight">
                    {t.title}
                  </h3>
                  <div className="h-1.5 w-16 bg-[#11123c]" />

                  <p className="text-base sm:text-lg text-[#374151] leading-relaxed font-normal">
                    {t.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {t.highlights.slice(0, 2).map((h, i) => (
                      <div key={i} className="bg-white rounded-xl p-3.5 shadow-xs border-l-3 border-[#11123c]">
                        <p className="text-xs sm:text-sm font-semibold text-[#11123c] leading-snug">
                          {h}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 6. Call To Action Footer Banner */}
        <div className="mt-20 bg-[#11123c] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden text-left shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div className="flex flex-col gap-2 max-w-2xl">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#e9d319]">
              PARTNER WITH US
            </span>
            <h3 className="font-display text-2xl sm:text-4xl font-black uppercase tracking-tight leading-tight">
              Ready to Join or Invest in Our Ecosystem?
            </h3>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed font-normal">
              Whether you are an aspiring player, an educational institution seeking football coaching, or a commercial partner, connect with our directors.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#e9d319] text-[#11123c] px-8 py-4 text-xs font-bold uppercase tracking-wider hover:bg-white transition-all shadow-md"
            >
              Get In Touch
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
