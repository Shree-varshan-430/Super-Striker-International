"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import FootballLoader from "@/components/FootballLoader";
import HeroCarousel from "@/components/home/HeroCarousel";
import LiveTicker from "@/components/home/LiveTicker";
import LatestFeed from "@/components/home/LatestFeed";
import AcademyBanner from "@/components/home/AcademyBanner";
import InvestorBanner from "@/components/home/InvestorBanner";
import SubBrandSpotlight from "@/components/home/SubBrandSpotlight";
import PhotoStrip from "@/components/home/PhotoStrip";
import PartnerLogos from "@/components/home/PartnerLogos";
import NewsCard from "@/components/home/NewsCard";
import { NewsItem } from "@/types/news";

interface PlayerJourney {
  name: string;
  role: string;
  image: string;
  excerpt: string;
  slug: string;
}

const PLAYER_JOURNEYS: PlayerJourney[] = [
  {
    name: "Aditya Kumar",
    role: "Midfielder, U-15 Elite Cohort",
    image: "/images/match-1.jpg",
    excerpt: "Scouted during regional school games in Karnataka, Aditya is now preparing for state division selections.",
    slug: "aditya-kumar-journey"
  },
  {
    name: "Sanjay Raj",
    role: "Striker, Bangalore Super Strikers senior squad",
    image: "/images/news-grassroots.jpg",
    excerpt: "Sanjay rose through the grassroots tournaments to lead the senior team's state division tournament campaign.",
    slug: "sanjay-raj-journey"
  },
  {
    name: "Vikram Seth",
    role: "Goalkeeper, Pondicherry U-15 Resident Academy",
    image: "/images/match-2.jpg",
    excerpt: "Our goalkeeping telemetry tracking scouted Vikram from Chennai schools, launching his path into state division camps.",
    slug: "vikram-seth-journey"
  }
];

export default function Home() {
  const [loading, setLoading] = useState(true);
  const featureBannerRef = useRef<HTMLDivElement>(null);
  const businessSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sessionStorage.getItem("loader-complete")) {
      const timer = setTimeout(() => setLoading(false), 0);
      return () => clearTimeout(timer);
    }
  }, []);

  // Initialize GSAP animations
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Zoom Parallax for Vision Stadium Banner
    if (featureBannerRef.current) {
      const img = featureBannerRef.current.querySelector("img");
      if (img) {
        gsap.to(img, {
          scale: 1.15,
          ease: "none",
          scrollTrigger: {
            trigger: featureBannerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }

    // Business Numbers Count Up Animation
    if (businessSectionRef.current) {
      const counters = businessSectionRef.current.querySelectorAll(".stat-counter");
      counters.forEach((counter) => {
        const htmlCounter = counter as HTMLElement;
        const targetVal = parseInt(htmlCounter.getAttribute("data-target") || "0", 10);
        const obj = { value: 0 };
        gsap.to(obj, {
          value: targetVal,
          duration: 2.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: htmlCounter,
            start: "top 90%",
            toggleActions: "play none none none",
          },
          onUpdate: () => {
            htmlCounter.textContent = Math.floor(obj.value).toLocaleString();
          },
        });
      });
    }

    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 600);

    return () => {
      clearTimeout(refreshTimer);
      ScrollTrigger.getAll().forEach((t) => t.kill());
      gsap.killTweensOf("*");
    };
  }, []);

  // Map Player Journeys to standard NewsItem model for component visual consistency
  const playerNewsItems: NewsItem[] = PLAYER_JOURNEYS.map((player) => ({
    slug: player.slug,
    type: "article",
    title: `${player.name}: ${player.role}`,
    category: "player-journeys",
    thumbnail: player.image,
    excerpt: player.excerpt,
    publishedAt: "Spotlight Profile",
    author: "Academy Scouts"
  }));

  const sectionAnimProps = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, ease: "easeOut" }
  } as const;

  return (
    <>
      {loading && (
        <FootballLoader
          onComplete={() => {
            setLoading(false);
            sessionStorage.setItem("loader-complete", "true");
            setTimeout(() => {
              ScrollTrigger.refresh();
            }, 100);
          }}
        />
      )}

      <div className="w-full bg-white text-[#11123c] font-sans select-none overflow-x-hidden">
        
        {/* 1. HERO CAROUSEL (FULL SIZE CAROUSEL - DARK) */}
        <HeroCarousel />

        {/* 2. PROMO ANNOUNCEMENT STRIP (LIVE SCROLLING BULLETIN) */}
        <LiveTicker />

        {/* 3. VENTURE SCALE & GROWTH METRICS (ARCHITECTURAL SCOREBOARD PLAQUE - DARK) */}
        <section
          ref={businessSectionRef}
          className="py-14 sm:py-18 bg-[#11123c] text-white border-b border-white/10 px-4 sm:px-6 lg:px-8 select-none relative overflow-hidden"
        >
          {/* Subtle faint pitch line */}
          <div className="absolute inset-0 pointer-events-none opacity-5">
            <div className="w-full h-full border border-white/20 m-4" />
          </div>

          <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto relative z-10">
            {/* Header tag */}
            <div className="flex items-center justify-between mb-8 pb-3 border-b border-white/10">
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-[#a29142]">
                SCALE & TELEMETRY REGISTER
              </span>
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/50">
                SOUTH INDIA FOOTBALL CORRIDOR
              </span>
            </div>

            {/* 4-Column Scoreboard Plaque */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10 border-y border-white/10">
              {[
                { target: 1500, suffix: "+", label: "Grassroots Discovered Base", detail: "Active Academy Pipeline" },
                { target: 5, suffix: "", label: "Smart Telemetry Fields", detail: "FIFA-Standard Quality Turf" },
                { target: 3, suffix: "", label: "Affiliated State Clubs", detail: "Senior First-Team Franchises" },
                { target: 100, suffix: "%", label: "Talent Pathway Flow", detail: "Direct Promotion Registry" }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-start p-6 sm:p-8 text-left bg-white/[0.02]">
                  <span className="text-3xl sm:text-5xl lg:text-6xl font-display font-black text-[#e9d319] leading-none">
                    <span className="stat-counter" data-target={item.target}>0</span>
                    {item.suffix}
                  </span>
                  <span className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-white mt-3">
                    {item.label}
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-white/50 mt-1">
                    {item.detail}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. THREE PILLARS EDITORIAL CHAPTERS (THUNDERHILL TRACK SYSTEM) ── */}
        <section className="py-24 sm:py-32 bg-white select-none border-b border-gray-200">
          <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
            
            {/* Section Eyebrow Header */}
            <div className="flex flex-col items-start gap-2 mb-20 text-left border-l-4 border-[#11123c] pl-4 sm:pl-6">
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#a29142]">
                CORE PILLARS • THREE CHAPTERS
              </span>
              <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#11123c]">
                A Complete Sporting Ecosystem
              </h2>
              <p className="text-sm sm:text-base text-[#4B5563] max-w-2xl font-normal leading-relaxed">
                From youth physical literacy to professional senior championships and sports real estate equity — built with absolute discipline.
              </p>
            </div>

            {/* Chapter Stack */}
            <div className="space-y-20 sm:space-y-28">
              
              {/* Chapter 01: The First Team */}
              <div className="relative bg-white border border-gray-200 p-6 sm:p-10 lg:p-14 shadow-xs">
                <div className="absolute right-6 top-4 z-0 pointer-events-none opacity-[0.04] select-none hidden sm:block">
                  <span className="font-display font-black text-[160px] lg:text-[200px] leading-none text-[#11123c]">01</span>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center relative z-10">
                  <div className="lg:col-span-5">
                    <div className="relative aspect-[16/11] w-full overflow-hidden bg-gray-100 border border-gray-200">
                      <Image
                        src="/images/team-1.jpg"
                        alt="Senior First Team"
                        fill
                        className="object-cover"
                        sizes="(max-w-1024px) 100vw, 520px"
                      />
                      <div className="absolute top-4 left-4 bg-[#11123c] text-[#e9d319] font-mono text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1">
                        CHAPTER 01
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-7 flex flex-col gap-4 text-left">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-[0.22em] text-[#a29142]">
                      01 / SENIOR STATE CHAMPIONSHIPS
                    </span>
                    <h3 className="font-display text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#11123c] leading-tight">
                      Senior Club Franchises & Professional First-Teams
                    </h3>
                    <p className="font-serif text-lg sm:text-xl italic text-[#11123c]/85 leading-snug">
                      &ldquo;Direct championship exposure in KSFA Super Division and regional state leagues.&rdquo;
                    </p>
                    <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed font-normal">
                      Bangalore Super Strikers FC, Pondicherry Super Strikers FC, and Chennai Super Strikers FC represent the pinnacle of our competitive pyramid, testing senior rosters against India&apos;s toughest state league opposition under full matchday conditions.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-2 pt-4 border-t border-gray-150">
                      <div className="bg-gray-50 border border-gray-150 p-3">
                        <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-[#696484]">Primary Tier</span>
                        <span className="text-xs font-bold text-[#11123c] block mt-1 font-mono">KSFA Super Division</span>
                      </div>
                      <div className="bg-gray-50 border border-gray-150 p-3">
                        <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-[#696484]">Matchday Gate</span>
                        <span className="text-xs font-bold text-[#11123c] block mt-1 font-mono">Live Broadcast Stream</span>
                      </div>
                      <div className="bg-gray-50 border border-gray-150 p-3">
                        <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-[#696484]">Senior Roster</span>
                        <span className="text-xs font-bold text-[#11123c] block mt-1 font-mono">28 Registered Players</span>
                      </div>
                    </div>
                    <div className="pt-2">
                      <Link href="/about" className="thunderhill-btn thunderhill-btn-dark inline-flex">
                        <span>Discover First-Team</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chapter 02: High Performance Academy (Flipped) */}
              <div className="relative bg-white border border-gray-200 p-6 sm:p-10 lg:p-14 shadow-xs">
                <div className="absolute right-6 top-4 z-0 pointer-events-none opacity-[0.04] select-none hidden sm:block">
                  <span className="font-display font-black text-[160px] lg:text-[200px] leading-none text-[#11123c]">02</span>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center relative z-10 lg:grid-flow-dense">
                  <div className="lg:col-span-5 lg:col-start-8">
                    <div className="relative aspect-[16/11] w-full overflow-hidden bg-gray-100 border border-gray-200">
                      <Image
                        src="/images/training-1.jpg"
                        alt="High Performance Academy"
                        fill
                        className="object-cover"
                        sizes="(max-w-1024px) 100vw, 520px"
                      />
                      <div className="absolute top-4 left-4 bg-[#11123c] text-[#e9d319] font-mono text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1">
                        CHAPTER 02
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-7 lg:col-start-1 flex flex-col gap-4 text-left">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-[0.22em] text-[#a29142]">
                      02 / RESIDENTIAL YOUTH DEVELOPMENT
                    </span>
                    <h3 className="font-display text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#11123c] leading-tight">
                      High-Performance Residential Academy & School
                    </h3>
                    <p className="font-serif text-lg sm:text-xl italic text-[#11123c]/85 leading-snug">
                      &ldquo;European player development standards integrated with formal academic schooling.&rdquo;
                    </p>
                    <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed font-normal">
                      Bangalore Football School delivers licensed AIFF & UEFA coaching curricula, GPS telemetry load tracking, residential player boarding, athletic nutrition, and sports medicine science to forge complete, modern footballers ready for state and national trials.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-2 pt-4 border-t border-gray-150">
                      <div className="bg-gray-50 border border-gray-150 p-3">
                        <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-[#696484]">Age Batches</span>
                        <span className="text-xs font-bold text-[#11123c] block mt-1 font-mono">U-9 through U-18</span>
                      </div>
                      <div className="bg-gray-50 border border-gray-150 p-3">
                        <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-[#696484]">Coaching License</span>
                        <span className="text-xs font-bold text-[#11123c] block mt-1 font-mono">AIFF & UEFA Licensed</span>
                      </div>
                      <div className="bg-gray-50 border border-gray-150 p-3">
                        <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-[#696484]">Boarding</span>
                        <span className="text-xs font-bold text-[#11123c] block mt-1 font-mono">Full Residential Campus</span>
                      </div>
                    </div>
                    <div className="pt-2">
                      <Link href="/ecosystem" className="thunderhill-btn thunderhill-btn-dark inline-flex">
                        <span>Explore Academy Pathway</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chapter 03: Commercial Infrastructure */}
              <div className="relative bg-white border border-gray-200 p-6 sm:p-10 lg:p-14 shadow-xs">
                <div className="absolute right-6 top-4 z-0 pointer-events-none opacity-[0.04] select-none hidden sm:block">
                  <span className="font-display font-black text-[160px] lg:text-[200px] leading-none text-[#11123c]">03</span>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center relative z-10">
                  <div className="lg:col-span-5">
                    <div className="relative aspect-[16/11] w-full overflow-hidden bg-gray-100 border border-gray-200">
                      <Image
                        src="/images/match-2.jpg"
                        alt="Smart Turf Infrastructure"
                        fill
                        className="object-cover"
                        sizes="(max-w-1024px) 100vw, 520px"
                      />
                      <div className="absolute top-4 left-4 bg-[#11123c] text-[#e9d319] font-mono text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1">
                        CHAPTER 03
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-7 flex flex-col gap-4 text-left">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-[0.22em] text-[#a29142]">
                      03 / COMMERCIAL REAL ESTATE & FRANCHISE
                    </span>
                    <h3 className="font-display text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#11123c] leading-tight">
                      Strategic Sports Infrastructure & Commercial Yields
                    </h3>
                    <p className="font-serif text-lg sm:text-xl italic text-[#11123c]/85 leading-snug">
                      &ldquo;High-yield sports real estate property returns, club franchise equity, and sponsorship asset backing.&rdquo;
                    </p>
                    <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed font-normal">
                      Partner with South India&apos;s fastest-growing football franchise network spanning professional senior clubs, smart artificial turf arenas, high-demand hourly community pitch bookings, and corporate branding equity.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-2 pt-4 border-t border-gray-150">
                      <div className="bg-gray-50 border border-gray-150 p-3">
                        <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-[#696484]">Pitch Standard</span>
                        <span className="text-xs font-bold text-[#11123c] block mt-1 font-mono">FIFA-Grade Quality Turf</span>
                      </div>
                      <div className="bg-gray-50 border border-gray-150 p-3">
                        <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-[#696484]">Cash Flow</span>
                        <span className="text-xs font-bold text-[#11123c] block mt-1 font-mono">Monthly Rental Dividends</span>
                      </div>
                      <div className="bg-gray-50 border border-gray-150 p-3">
                        <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-[#696484]">Equity Model</span>
                        <span className="text-xs font-bold text-[#11123c] block mt-1 font-mono">Franchise & Parent Equity</span>
                      </div>
                    </div>
                    <div className="pt-2">
                      <Link href="/investors#enquire" className="thunderhill-btn thunderhill-btn-gold inline-flex">
                        <span>Partner With Us</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* 5. LATEST MODULE (NEWS ARTICLES & VIDEOS) */}
        <div>
          <LatestFeed />
        </div>

        {/* 6. INVESTOR PROPOSITION & COMMERCIAL RETURNS (TWO-COLUMN FINANCIAL PROSPECTUS LEDGER) */}
        <section className="py-24 sm:py-32 bg-[#F8F9FB] border-b border-gray-200 select-none">
          <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
            
            {/* Header */}
            <div className="flex flex-col items-start gap-2 border-l-4 border-[#11123c] pl-4 sm:pl-6 mb-16 sm:mb-20 text-left">
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#a29142]">
                INSTITUTIONAL PROSPECTUS • THE EQUATION
              </span>
              <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#11123c]">
                Operational Assets vs Commercial Yields
              </h2>
              <p className="text-sm sm:text-base text-[#4B5563] max-w-2xl font-normal leading-relaxed">
                SuperStriker International structures world-class sports development infrastructure. Here is the exact institutional breakdown of funded operational assets versus accrued commercial returns.
              </p>
            </div>

            {/* Two-Column Ledger Matrix */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              
              {/* Column 1: Strategic Assets & Facilities Funded */}
              <div className="bg-white border border-gray-200 p-6 sm:p-10 flex flex-col gap-6 text-left shadow-xs">
                <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 bg-[#11123c]" />
                    <h3 className="font-display text-xl sm:text-2xl font-black uppercase tracking-tight text-[#11123c]">
                      1. Strategic Assets & Facilities Funded
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#a29142]">
                    LEDGER / 01
                  </span>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      num: "01",
                      title: "FIFA-Standard Football Pitches & Smart Arenas",
                      desc: "Acquisition and development of FIFA-grade artificial turf and natural grass match fields equipped with floodlit complexes, automated GPS telemetry rigs, and hourly public pitch booking systems.",
                      sub: "Asset Backing: Prime sports corridor leases, sensory tracking hardware, smart facility revenue."
                    },
                    {
                      num: "02",
                      title: "High-Performance Center & Sports Medicine",
                      desc: "Fully equipped athletic conditioning gymnasiums, sports science telemetry labs, cardiovascular recovery pools, and dedicated on-campus physiotherapy clinics for injury prevention.",
                      sub: "Asset Backing: Advanced biometric telemetry equipment, sports medicine licenses."
                    },
                    {
                      num: "03",
                      title: "Residential Academy Campus & Hostels",
                      desc: "A Home Away From Home providing secure player dormitories, balanced athletic nutrition dining halls, academic school integration, and certified UEFA/AIFF coaching staffs.",
                      sub: "Asset Backing: Direct multi-year academy registration pipeline, player transfer equity."
                    },
                    {
                      num: "04",
                      title: "Regional Club Franchises & First-Teams",
                      desc: "Direct operational backing for senior competitive first-teams in Bangalore (KSFA Super Division), Pondicherry, and Chennai to contest state and national championships.",
                      sub: "Asset Backing: Official federation club registry charters, stadium match day gates, broadcast rights."
                    }
                  ].map((asset, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-50 border border-gray-200 p-5 flex flex-col gap-2 transition-all hover:border-[#11123c]/40"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[10px] font-bold uppercase text-[#a29142]">
                          ASSET #{asset.num}
                        </span>
                      </div>
                      <h4 className="font-display text-base sm:text-lg font-black uppercase text-[#11123c]">
                        {asset.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed font-normal">
                        {asset.desc}
                      </p>
                      <span className="text-[10px] font-mono font-bold text-[#11123c] uppercase tracking-wide mt-1 bg-white px-2.5 py-1 border border-gray-200 w-fit">
                        {asset.sub}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Column 2: Accrued Commercial Yields */}
              <div className="bg-white border border-gray-200 p-6 sm:p-10 flex flex-col gap-6 text-left shadow-xs">
                <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 bg-[#e9d319]" />
                    <h3 className="font-display text-xl sm:text-2xl font-black uppercase tracking-tight text-[#11123c]">
                      2. Accrued Commercial Yields
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#a29142]">
                    RETURNS / 02
                  </span>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      num: "01",
                      title: "Front-of-Shirt & Perimeter Arena Sponsorship",
                      desc: "Primary kit branding across senior club squads, arena digital perimeter board presence, video telemetry documentary sponsorships, and prominent showcase across all scouting trials.",
                      returnVal: "Target Yield: High-visibility multi-region corporate awareness & CSR prestige."
                    },
                    {
                      num: "02",
                      title: "Player Transfer & Scouting Equity Shares",
                      desc: "Contractual percentage rights on domestic (ISL / I-League) and international player sale transfers of talent discovered and nurtured through Bangalore Football School.",
                      returnVal: "Target Yield: High-upside capital liquidation upon professional league sign-ons."
                    },
                    {
                      num: "03",
                      title: "Recurring Turf & Facility Rental Dividends",
                      desc: "Monthly cash-flow dividend splits derived from hourly community pitch rentals, corporate leagues, tournament hosting, and academy tuition subscriptions.",
                      returnVal: "Target Yield: Predictable monthly recurring cash dividends."
                    },
                    {
                      num: "04",
                      title: "Network Parent Equity & Valuation Upside",
                      desc: "Direct strategic equity options in SuperStriker International Pvt Ltd as our unified multi-state football academy and franchise network expands across South India.",
                      returnVal: "Target Yield: Exponential long-term enterprise valuation growth."
                    }
                  ].map((ret, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-50 border border-gray-200 p-5 flex flex-col gap-2 transition-all hover:border-[#e9d319]"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[10px] font-bold uppercase text-[#a29142]">
                          YIELD #{ret.num}
                        </span>
                      </div>
                      <h4 className="font-display text-base sm:text-lg font-black uppercase text-[#11123c]">
                        {ret.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed font-normal">
                        {ret.desc}
                      </p>
                      <span className="text-[10px] font-mono font-bold text-[#11123c] uppercase tracking-wide mt-1 bg-[#e9d319] px-2.5 py-1 w-fit">
                        {ret.returnVal}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Structured Institutional Consultation Box */}
            <div className="mt-12 bg-[#11123c] p-8 sm:p-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-left border border-white/15">
              <div className="flex flex-col gap-2 max-w-2xl">
                <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-[#e9d319]">
                  INSTITUTIONAL CONSULTATION
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-black uppercase text-white leading-tight">
                  Inspect Our Institutional Prospectus Deck
                </h3>
                <p className="text-xs sm:text-sm text-white/80 font-normal leading-relaxed">
                  Connect directly with our investment directors to review smart turf financial projections, facility blueprints, and franchise prospectus models.
                </p>
              </div>
              <Link
                href="/investors#enquire"
                className="thunderhill-btn thunderhill-btn-gold shrink-0"
              >
                <span>Inquire Sponsorship</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

          </div>
        </section>

        {/* 7. INVESTOR BANNER MODULE */}
        <div>
          <InvestorBanner />
        </div>

        {/* 8. CLUBS & ECOSYSTEM CHAPTER SHOWCASE (FULL-WIDTH EDITORIAL CARDS) */}
        <div>
          <SubBrandSpotlight />
        </div>

        {/* 9. INFRASTRUCTURE & VISION BANNER */}
        <section 
          ref={featureBannerRef}
          className="relative w-full h-[440px] sm:h-[500px] overflow-hidden flex items-center justify-center select-none bg-[#11123c]"
        >
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/WhatsApp Image 2026-08-07 at 8.29.48 AM (2).jpeg"
              alt="SuperStriker Turf Pitch Infrastructure"
              fill
              quality={85}
              className="object-cover object-center opacity-40"
            />
          </div>
          
          <div className="absolute inset-0 bg-[#11123c]/70 z-10" />

          <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 text-center text-white flex flex-col items-center gap-5">
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#e9d319]">
              CAMPUS & INFRASTRUCTURE
            </span>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-tight">
              Where Champions Are Made
            </h2>
            <p className="text-xs sm:text-base text-gray-300 max-w-2xl leading-relaxed font-normal">
              Developing world-class sports corridors across South India featuring FIFA-standard natural & artificial turf pitches, high-performance sports science centers, and residential student-athlete campuses.
            </p>
            <div className="pt-2">
              <Link
                href="/about"
                className="thunderhill-btn thunderhill-btn-gold"
              >
                <span>Explore Campus Facilities</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* 10. FOUNDER & HERITAGE PROFILE (QUIET EDITORIAL MOMENT WITH CORMORANT GARAMOND SERIF) */}
        <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-10 xl:px-12 max-w-7xl 2xl:max-w-[1440px] mx-auto bg-white select-none border-b border-gray-200">
          <div className="flex flex-col items-start gap-2 mb-16 text-left border-l-4 border-[#11123c] pl-4 sm:pl-6">
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#a29142]">
              HERITAGE & FOUNDATION • STORY 04
            </span>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#11123c]">
              Stories Behind The Vision
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center bg-[#F8F9FB] border border-gray-200 p-6 sm:p-10 lg:p-14">
            
            {/* Portrait Image */}
            <div className="lg:col-span-5 flex justify-center w-full">
              <div className="relative aspect-[4/5] w-full max-w-[480px] overflow-hidden border border-gray-200 shadow-sm bg-gray-100">
                <Image
                  src="/images/founder-portrait.jpg"
                  alt="Ramakrishnan President Portrait"
                  fill
                  quality={85}
                  className="object-cover object-top"
                  sizes="(max-w-768px) 100vw, 480px"
                />
              </div>
            </div>

            {/* Quote and Vision Details */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-left relative">
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.22em] text-[#a29142]">
                PRESIDENT&apos;S MANIFESTO
              </span>

              <p className="font-serif text-2xl sm:text-3xl lg:text-4xl italic text-[#11123c] leading-tight">
                &ldquo;At SuperStriker, sport is not secondary — it is a fundamental right. We are building the factory of future champions.&rdquo;
              </p>
              
              <div className="flex flex-col border-b border-gray-200 pb-4">
                <span className="font-display text-lg font-black uppercase tracking-tight text-[#11123c]">
                  Ramakrishnan (Ram)
                </span>
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#696484] mt-1">
                  President & Founder, Bangalore Super Strikers FC &middot; AIFF-C Licensed Coach & KSFA Referee
                </span>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-[#4B5563] leading-relaxed font-normal">
                <p>
                  Inspired by his parents, <strong className="text-[#11123c] font-bold">Mr. Devaraj and Mrs. Rajammal Devaraj</strong>, who dreamed of seeing their grandson represent India on the world stage, Ram turned his own experiences as a player with limited resources into a national-caliber development system.
                </p>
                <p>
                  Having witnessed firsthand how <strong className="text-[#11123c] font-bold">talented grassroots athletes</strong> were locked out due to high coaching and travel fees, he built an ecosystem offering <strong className="text-[#11123c] font-bold">comprehensive scholarships, AIFF-accredited curricula, GPS telemetry tracking, sports nutrition</strong>, and direct promotion into <strong className="text-[#11123c] font-bold">KSFA Super Division leagues</strong>.
                </p>
              </div>
              
              <div className="pt-2 flex flex-wrap gap-4 items-center">
                <Link
                  href="/about"
                  className="thunderhill-btn thunderhill-btn-dark inline-flex"
                >
                  <span>Read Heritage Story</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/about"
                  className="thunderhill-btn thunderhill-btn-outline-dark inline-flex"
                >
                  <span>Join The Academy</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 11. ACADEMY BANNER MODULE */}
        <div>
          <AcademyBanner />
        </div>

        {/* 12. HONOURS BOARD / CLUB YEARBOOK (ELEGANT PLAYER YEARBOOK CARDS) */}
        <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-10 xl:px-12 max-w-7xl 2xl:max-w-[1440px] mx-auto bg-white select-none border-b border-gray-200">
          <div className="text-left mb-16 sm:mb-20 flex flex-col gap-2 border-l-4 border-[#11123c] pl-4 sm:pl-6">
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#a29142]">
              HONOURS BOARD • CLUB YEARBOOK
            </span>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#11123c]">
              Where Champions Are Made
            </h2>
            <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed max-w-2xl font-normal">
              Tracing the athletic journey from grassroots discovery festivals to residential high-performance training, state league campaigns, and national trials.
            </p>
          </div>

          {/* Render Player Yearbook Cards (Yearbook Design: Thin-Outline Numerals + Serif Names) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
            {[
              { name: "Aditya Kumar", role: "Midfielder", cohort: "U-15 Elite Cohort", number: "10", image: "/images/Player1.jpeg", stats: "Pass Accuracy: 88% | Assist Leader", milestone: "Karnataka State U-15 Squad" },
              { name: "Sanjay Raj", role: "Striker", cohort: "BSS Senior Squad", number: "09", image: "/images/Player2.jpeg", stats: "Goals: 12 | Shots conversion: 24%", milestone: "KSFA Super Division Debut" },
              { name: "Vikram Seth", role: "Goalkeeper", cohort: "Pondicherry Resident Academy", number: "01", image: "/images/Player3.jpeg", stats: "Clean Sheets: 8 | Penalty Saves: 2", milestone: "All-India Scout Selection" }
            ].map((player) => (
              <div 
                key={player.name}
                className="bg-white border border-gray-200 overflow-hidden flex flex-col text-left group hover:border-[#11123c]/40 transition-all shadow-xs"
              >
                {/* Player Photo with Thin Outlined Numeral */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-100">
                  <Image
                    src={player.image}
                    alt={player.name}
                    fill
                    quality={85}
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-103"
                    sizes="(max-w-768px) 100vw, 400px"
                  />
                  
                  {/* Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#11123c] via-[#11123c]/30 to-transparent z-10" />

                  {/* Thin Outlined Jersey Numeral */}
                  <div className="absolute top-4 right-4 z-20 font-display font-black text-4xl sm:text-5xl text-white/30 tracking-tighter">
                    #{player.number}
                  </div>

                  {/* Player details at bottom of photo */}
                  <div className="absolute bottom-4 left-4 right-4 z-20 text-white flex flex-col gap-1">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-[0.22em] text-[#e9d319]">
                      {player.role}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight">
                      {player.name}
                    </h3>
                    <span className="text-xs font-mono uppercase tracking-wider text-white/80">
                      {player.cohort}
                    </span>
                  </div>
                </div>

                {/* Yearbook Telemetry Card Footer */}
                <div className="p-5 bg-gray-50 border-t border-gray-200 flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-mono font-bold uppercase tracking-[0.16em] text-[#696484]">
                      MILESTONE
                    </span>
                    <span className="text-[10px] font-mono font-bold text-[#11123c]">
                      {player.milestone}
                    </span>
                  </div>
                  <div className="pt-2 border-t border-gray-200 flex items-center justify-between text-xs font-mono font-bold text-[#11123c]">
                    <span className="text-[9px] uppercase tracking-wider text-[#a29142]">Telemetry</span>
                    <span className="text-[11px] font-mono text-[#11123c]">{player.stats}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 13. LIVE SOCIAL EMBED MODULE (INSTAGRAM DISPATCH GRID - DARK) */}
        <section className="py-24 bg-[#11123c] text-white border-b border-white/10 select-none">
          <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-12 pb-4 border-b border-white/10 text-left">
              <div className="flex flex-col items-start gap-1">
                <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-[#e9d319]">
                  DISPATCHES • @BANGALORESUPERSTRIKERSFC
                </span>
                <h2 className="font-display text-2xl sm:text-4xl font-black uppercase tracking-tight text-white mt-1">
                  Social & Pitch Highlights
                </h2>
              </div>
              <a
                href="https://www.instagram.com/bangaloresuperstrikersfc/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#e9d319] hover:text-white transition-colors"
              >
                <span>Follow On Instagram</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {[
                { img: "/images/news-underpriv-camp.jpg", likes: "1,240", caption: "Tactical training on the turf today. 💪 #SuperStriker" },
                { img: "/images/news-pathways.jpg", likes: "890", caption: "Developing youth pathways step-by-step. ⚽" },
                { img: "/images/Instagram2.jpeg", likes: "2,050", caption: "Matchday memories. Three points locked in! 🏆" },
                { img: "/images/Instagram3.jpeg", likes: "1,560", caption: "Grassroots scouting festivals active in school clusters. 🧤" }
              ].map((post, idx) => (
                <div
                  key={idx}
                  className="relative overflow-hidden aspect-square group bg-white/5 border border-white/10"
                >
                  <Image
                    src={post.img}
                    alt="Instagram Post"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                    sizes="(max-w-768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-[#11123c]/75 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-4 text-left text-white">
                    <span className="text-[10px] font-mono font-bold tracking-wider text-[#e9d319]">♥ {post.likes} LIKES</span>
                    <p className="text-[11px] leading-relaxed mt-1 font-medium">{post.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 14. LATEST MOMENTS ON THE PITCH (HORIZONTAL PHOTO STRIP) */}
        <div>
          <PhotoStrip />
        </div>

        {/* 15. SPONSORS LOGO STRIP */}
        <div>
          <PartnerLogos />
        </div>

        {/* 16. NEWSLETTER DISPATCH FORM */}
        <section className="py-24 bg-[#F8F9FB] border-t border-gray-200 px-4">
          <div className="max-w-4xl mx-auto text-center flex flex-col gap-6 items-center">
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#a29142]">
              WEEKLY DISPATCH
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#11123c]">
              Subscribe To SuperStriker Football Stories
            </h2>
            <p className="text-xs sm:text-sm text-[#4B5563] max-w-lg leading-relaxed font-normal">
              Receive tactical insights, scout reviews, match telemetry analytics, and strategic investment options delivered twice a month.
            </p>

            <form onSubmit={(e) => { e.preventDefault(); alert("Subscription successful!"); }} className="flex flex-col sm:flex-row gap-2 w-full max-w-md mt-4">
              <input
                type="email"
                placeholder="Business email address"
                required
                className="bg-white border border-gray-300 px-5 py-3 text-xs text-[#11123c] placeholder-gray-400 focus:outline-none focus:border-[#11123c] flex-grow font-mono"
              />
              <button
                type="submit"
                className="thunderhill-btn thunderhill-btn-dark shrink-0"
              >
                <span>Subscribe</span>
              </button>
            </form>
          </div>
        </section>

      </div>
    </>
  );
}
