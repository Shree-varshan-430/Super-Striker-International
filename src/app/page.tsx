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

        {/* 2. PROMO ANNOUNCEMENT STRIP (LIVE SCROLLING TICKER - YELLOW) */}
        <LiveTicker />

        {/* 3. VENTURE SCALE & GROWTH METRICS (BROADCAST SCOREBOARD HUD - DARK) */}
        <section
          ref={businessSectionRef}
          className="py-14 bg-[#11123c] text-white border-b border-white/10 px-4 sm:px-6 lg:px-8 select-none relative overflow-hidden"
        >
          {/* HUD section divider lines */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#e9d319]/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#e9d319]/40 to-transparent" />

          {/* LIVE indicator */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#e9d319] animate-pulse shadow-[0_0_8px_rgba(233,211,25,0.8)]" />
            <span className="text-[9px] font-black uppercase tracking-[0.25em] text-[#e9d319]/80">Live Metrics</span>
          </div>

          <div className="max-w-[95%] mx-auto grid grid-cols-2 md:grid-cols-4 gap-0">
            {[
              { target: 1500, suffix: "+", label: "Grassroots Discovered Base", icon: "⚽" },
              { target: 5, suffix: "", label: "Smart Telemetry Fields", icon: "📡" },
              { target: 3, suffix: "", label: "Affiliated State Clubs", icon: "🏆" },
              { target: 100, suffix: "%", label: "Talent Pathway Flow", icon: "📈" }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center py-4 px-4 border-r last:border-r-0 border-white/10 relative">
                {/* Scoreboard number with gold glow */}
                <span className="text-3xl sm:text-5xl font-display font-black leading-none" style={{ color: "#e9d319", textShadow: "0 0 20px rgba(233,211,25,0.4)" }}>
                  <span className="stat-counter" data-target={item.target}>0</span>
                  {item.suffix}
                </span>
                {/* Lower-third label */}
                <span className="text-[10px] font-bold uppercase tracking-wider text-white/60 mt-3 max-w-[140px] leading-tight">
                  {item.label}
                </span>
                {/* HUD accent underline */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-[#e9d319]/30 mt-2" />
              </div>
            ))}
          </div>
        </section>

        {/* 4. LATEST MODULE (NEWS ARTICLES - LIGHT & VIDEOS - DARK) */}
        <motion.div {...sectionAnimProps}>
          <LatestFeed />
        </motion.div>

        {/* 5. INVESTOR PROPOSITION & COMMERCIAL RETURNS (LIGHT) */}
        <motion.section 
          {...sectionAnimProps}
          className="py-20 sm:py-24 bg-white border-b border-gray-100 select-none"
        >
          <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
            <div className="flex flex-col items-start gap-1 border-l-4 border-[#11123c] pl-4 sm:pl-6 mb-12 sm:mb-16 text-left">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#e9d319] bg-[#11123c] px-3 py-1 rounded">
                THE COMMERCIAL & ACADEMY EQUATION
              </span>
              <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#11123c] mt-1">
                State-Of-The-Art Infrastructure & Commercial Yields
              </h2>
              <p className="text-sm sm:text-base text-[#696484] mt-2 max-w-2xl font-medium leading-relaxed">
                SuperStriker International structures world-class sports development infrastructure. Here is an exact breakdown of funded operational assets versus accrued commercial returns.
              </p>
            </div>

            {/* Split Grid for Funding vs Yield */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              
              {/* Column 1: What You Invest In */}
              <div className="flex flex-col gap-6 text-left bg-gray-50 rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-xs border border-gray-150/70">
                <div className="flex items-center gap-3 pb-4 border-b border-gray-200">
                  <div className="w-3.5 h-3.5 rounded-full bg-[#11123c]" />
                  <h3 className="font-display text-xl sm:text-2xl font-black uppercase tracking-tight text-[#11123c]">
                    1. Strategic Assets & Facilities You Fund
                  </h3>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      title: "FIFA-Standard Football Pitches & Smart Arenas",
                      desc: "Acquisition and development of FIFA-grade artificial turf and natural grass match fields equipped with floodlit complexes, automated GPS telemetry rigs, and hourly public pitch booking systems.",
                      sub: "Asset Backing: Prime sports corridor leases, sensory tracking hardware, smart facility revenue."
                    },
                    {
                      title: "High-Performance Center & Sports Medicine",
                      desc: "Fully equipped athletic conditioning gymnasiums, sports science telemetry labs, cardiovascular recovery pools, and dedicated on-campus physiotherapy clinics for injury prevention.",
                      sub: "Asset Backing: Advanced biometric telemetry equipment, sports medicine licenses."
                    },
                    {
                      title: "Residential Academy Campus & Hostels",
                      desc: "A Home Away From Home providing secure player dormitories, balanced athletic nutrition dining halls, academic school integration, and certified UEFA/AIFF coaching staffs.",
                      sub: "Asset Backing: Direct multi-year academy registration pipeline, player transfer equity."
                    },
                    {
                      title: "Regional Club Franchises & First-Teams",
                      desc: "Direct operational backing for senior competitive first-teams in Bangalore (KSFA Super Division), Pondicherry, and Chennai to contest state and national championships.",
                      sub: "Asset Backing: Official federation club registry charters, stadium match day gates, broadcast rights."
                    }
                  ].map((asset, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      whileHover={{ scale: 1.01, boxShadow: "0 0 0 1px rgba(233,211,25,0.3), 0 8px 24px rgba(17,18,60,0.12)" }}
                      className="reticle bg-white rounded-2xl p-6 border-l-4 border-[#11123c] shadow-xs flex flex-col gap-2 transition-all duration-300"
                    >
                      <h4 className="font-display text-base sm:text-lg font-black uppercase text-[#11123c]">
                        {asset.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed font-normal">
                        {asset.desc}
                      </p>
                      <span className="text-[10px] sm:text-xs font-bold text-[#11123c] uppercase tracking-wide mt-1 bg-gray-50 px-2.5 py-1 rounded w-fit">
                        {asset.sub}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Column 2: What You Get In Return */}
              <div className="flex flex-col gap-6 text-left bg-gray-50 rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-xs border border-gray-150/70">
                <div className="flex items-center gap-3 pb-4 border-b border-gray-200">
                  <div className="w-3.5 h-3.5 rounded-full bg-[#e9d319]" />
                  <h3 className="font-display text-xl sm:text-2xl font-black uppercase tracking-tight text-[#11123c]">
                    2. Accrued Commercial Yields
                  </h3>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      title: "Front-of-Shirt & Perimeter Arena Sponsorship",
                      desc: "Primary kit branding across senior club squads, arena digital perimeter board presence, video telemetry documentary sponsorships, and prominent showcase across all scouting trials.",
                      returnVal: "Target Yield: High-visibility multi-region corporate awareness & CSR prestige."
                    },
                    {
                      title: "Player Transfer & Scouting Equity Shares",
                      desc: "Contractual percentage rights on domestic (ISL / I-League) and international player sale transfers of talent discovered and nurtured through Bangalore Football School.",
                      returnVal: "Target Yield: High-upside capital liquidation upon professional league sign-ons."
                    },
                    {
                      title: "Recurring Turf & Facility Rental Dividends",
                      desc: "Monthly cash-flow dividend splits derived from hourly community pitch rentals, corporate corporate leagues, tournament hosting, and academy tuition subscriptions.",
                      returnVal: "Target Yield: Predictable monthly recurring cash dividends."
                    },
                    {
                      title: "Network Parent Equity & Valuation Upside",
                      desc: "Direct strategic equity options in SuperStriker International Pvt Ltd as our unified multi-state football academy and franchise network expands across South India.",
                      returnVal: "Target Yield: Exponential long-term enterprise valuation growth."
                    }
                  ].map((ret, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: 16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      whileHover={{ scale: 1.01, boxShadow: "0 0 0 1px rgba(233,211,25,0.45), 0 8px 24px rgba(233,211,25,0.08)" }}
                      className="reticle bg-white rounded-2xl p-6 border-l-4 border-[#e9d319] shadow-xs flex flex-col gap-2 transition-all duration-300"
                    >
                      <h4 className="font-display text-base sm:text-lg font-black uppercase text-[#11123c]">
                        {ret.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed font-normal">
                        {ret.desc}
                      </p>
                      <span className="text-[10px] sm:text-xs font-bold text-[#11123c] uppercase tracking-wide mt-1 bg-[#e9d319]/20 px-2.5 py-1 rounded w-fit">
                        {ret.returnVal}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

            </div>

            {/* Quick Enquiry Prompt */}
            <div className="mt-12 bg-[#11123c] rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-xl text-left">
              <div className="flex flex-col gap-1.5 max-w-xl">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#e9d319]">
                  PARTNERSHIP CONSULTATION
                </span>
                <h3 className="font-display text-xl sm:text-3xl font-black uppercase text-white leading-tight">
                  Ready To Inspect Our Institutional Deck?
                </h3>
                <p className="text-xs sm:text-sm text-white/80 font-normal">
                  Connect directly with our investment directors to review smart turf financial projections, facility blueprints, and franchise prospectus models.
                </p>
              </div>
              <Link
                href="/investors#enquire"
                className="inline-flex items-center gap-2 rounded-full bg-[#e9d319] text-[#11123c] px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all hover:bg-white hover:text-[#11123c] shadow-md shrink-0"
              >
                Inquire Sponsorship
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

          </div>
        </motion.section>

        {/* 6. INVESTOR BANNER MODULE (FULL WIDTH - DARK) */}
        <motion.div {...sectionAnimProps}>
          <InvestorBanner />
        </motion.div>

        {/* 7. SUB-BRAND SPOTLIGHT MODULE (GRID - LIGHT) */}
        <motion.div {...sectionAnimProps}>
          <SubBrandSpotlight />
        </motion.div>

        {/* 8. INFRASTRUCTURE & VISION BANNER (PARALLAX ZOOM STADIUM - DARK) */}
        <section 
          ref={featureBannerRef}
          className="relative w-full h-[400px] sm:h-[480px] overflow-hidden flex items-center justify-center select-none"
        >
          <div className="absolute inset-0 z-0 origin-center">
            <Image
              src="/images/WhatsApp Image 2026-08-07 at 8.29.48 AM (2).jpeg"
              alt="SuperStriker Turf Pitch Infrastructure"
              fill
              quality={85}
              className="object-cover object-center opacity-85"
            />
          </div>
          
          <div className="absolute inset-0 bg-[#11123c]/60 z-10" />

          {/* Brand accent wedges on bottom right */}
          <div 
            className="absolute bottom-0 right-0 w-28 h-28 sm:w-36 sm:h-36 bg-[#11123c] pointer-events-none z-15 translate-x-2 translate-y-2 lg:block hidden" 
            style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }} 
          />
          <div 
            className="absolute bottom-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-[#e9d319] pointer-events-none z-20 lg:block hidden" 
            style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }} 
          />
          
          <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 text-center text-white flex flex-col items-center gap-4">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#e9d319] bg-[#11123c] px-3 py-1 rounded">
              CAMPUS & INFRASTRUCTURE
            </span>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-tight">
              Where Champions Are Made
            </h2>
            <p className="text-xs sm:text-base text-gray-200 max-w-2xl leading-relaxed font-medium">
              Developing world-class sports corridors across South India featuring FIFA-standard natural & artificial turf pitches, high-performance sports science centers, and residential student-athlete campuses.
            </p>
            <div className="mt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full bg-[#e9d319] text-[#11123c] px-8 py-3.5 text-xs font-bold uppercase tracking-wider hover:bg-white transition-all shadow-md"
              >
                Explore Campus Facilities
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* 9. FOUNDER & HERITAGE PROFILE NOTE (MAGAZINE INTERVIEW - LIGHT & ENLARGED PORTRAIT) */}
        <motion.section 
          {...sectionAnimProps}
          className="py-20 sm:py-24 px-4 sm:px-6 lg:px-10 xl:px-12 max-w-7xl 2xl:max-w-[1440px] mx-auto bg-white border-b border-gray-100 select-none"
        >
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#e9d319] bg-[#11123c] px-3 py-1 rounded">
              PRESIDENT&#39;S MESSAGE & HERITAGE
            </span>
            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#11123c] mt-2">
              Stories Behind The Vision
            </h2>
            <div className="h-1.5 w-16 bg-[#11123c] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center bg-gray-50 rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-14 shadow-sm">
            {/* Portrait Image with crisp 4K rendering */}
            <div className="lg:col-span-5 flex justify-center w-full">
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="relative aspect-[4/3] sm:aspect-[4/5] lg:aspect-[3/4] w-full max-w-[520px] rounded-2xl overflow-hidden shadow-2xl"
              >
                <Image
                  src="/images/founder-portrait.jpg"
                  alt="Ramakrishnan President Portrait"
                  fill
                  quality={85}
                  className="object-cover object-top"
                  sizes="(max-w-768px) 100vw, 520px"
                />
              </motion.div>
            </div>

            {/* Quote and Vision Details */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-left relative">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#11123c] bg-[#e9d319] px-3 py-1 rounded w-fit">
                FOUNDER&#39;S MANIFESTO
              </span>

              <p className="font-display text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-[#11123c] leading-tight">
                &ldquo;At SuperStriker, sport is not secondary — it is a fundamental right. We are building the factory of future champions.&rdquo;
              </p>
              
              <div className="flex flex-col text-xs uppercase tracking-wider border-b border-[#11123c]/10 pb-4">
                <span className="text-[#11123c] text-base font-black">Ramakrishnan (Ram)</span>
                <span className="text-[#696484] text-xs font-bold mt-0.5">President & Founder, Bangalore Super Strikers FC &middot; AIFF-C Licensed Coach & KSFA Referee</span>
              </div>

              <div className="space-y-4 text-base sm:text-lg text-[#374151] leading-relaxed">
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
                  className="inline-flex items-center gap-2 rounded-full bg-[#11123c] text-white px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-[#e9d319] hover:text-[#11123c] transition-all shadow-sm"
                >
                  Read Full Heritage Story
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white text-[#11123c] border border-[#11123c]/15 px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-gray-100 transition-all shadow-xs"
                >
                  Join The Academy
                </Link>
              </div>
            </div>
          </div>
        </motion.section>

        {/* 10. ACADEMY BANNER MODULE (FULL WIDTH - DARK) */}
        <motion.div {...sectionAnimProps}>
          <AcademyBanner />
        </motion.div>

        {/* 11. PLAYER PATHWAYS SQUAD SHOWCASE (100% Crisp 4K Images, No Grayscale) */}
        <motion.section 
          {...sectionAnimProps}
          className="py-20 sm:py-24 px-4 sm:px-6 lg:px-10 xl:px-12 max-w-7xl 2xl:max-w-[1440px] mx-auto bg-white select-none border-b border-gray-150"
        >
          <div className="text-left mb-12 sm:mb-16 flex flex-col gap-1 border-l-4 border-[#11123c] pl-4 sm:pl-6">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#e9d319] bg-[#11123c] px-3 py-1 rounded w-fit">
              HONOURS BOARD & TALENT PATHWAYS
            </span>
            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#11123c] mt-1">
              Where Champions Are Made
            </h2>
            <p className="text-sm sm:text-base text-[#696484] leading-relaxed max-w-2xl font-medium mt-1">
              Tracing the athletic journey from grassroots discovery festivals to residential high-performance training, state league campaigns, and national trials.
            </p>
          </div>

          {/* Render Player Cards — EA Sports FIFA style: 3D tilt, jersey glow, scanline */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
            {[
              { name: "Aditya Kumar", role: "Midfielder", cohort: "U-15 Elite Cohort", number: "10", image: "/images/Player1.jpeg", stats: "Pass Accuracy: 88% | Assist Leader" },
              { name: "Sanjay Raj", role: "Striker", cohort: "BSS Senior Squad", number: "09", image: "/images/Player2.jpeg", stats: "Goals: 12 | Shots conversion: 24%" },
              { name: "Vikram Seth", role: "Goalkeeper", cohort: "Pondicherry Resident Academy", number: "01", image: "/images/Player3.jpeg", stats: "Clean Sheets: 8 | Penalty Saves: 2" }
            ].map((player, playerIdx) => (
              <motion.div
                key={player.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: playerIdx * 0.15 }}
                whileHover={{
                  rotateY: 4,
                  rotateX: -2,
                  scale: 1.02,
                  boxShadow: "0 0 0 1.5px rgba(233,211,25,0.5), 0 24px 48px rgba(17,18,60,0.25)"
                }}
                style={{ perspective: 1000, transformStyle: "preserve-3d" }}
                className="reticle relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[3/4] group shadow-xl bg-gray-50 flex flex-col justify-end p-6 sm:p-8 select-none cursor-default transition-all duration-300"
              >
                {/* Player image */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={player.image}
                    alt={player.name}
                    fill
                    quality={85}
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-w-768px) 100vw, 400px"
                  />
                  {/* Gentle bottom vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#11123c]/92 via-[#11123c]/25 to-transparent z-10" />
                </div>

                {/* Scanline telemetry texture overlay */}
                <div className="absolute inset-0 z-[11] scanline-overlay pointer-events-none rounded-2xl sm:rounded-3xl" />

                {/* Jersey number badge with gold glow */}
                <div className="absolute top-5 right-5 z-20">
                  <span
                    className="font-display text-xl sm:text-2xl font-black text-[#11123c] bg-[#e9d319] px-3 py-1 rounded-xl shadow-md"
                    style={{ textShadow: "0 0 12px rgba(233,211,25,0.8)" }}
                  >
                    #{player.number}
                  </span>
                </div>

                {/* Content overlay */}
                <div className="relative z-20 text-left text-white flex flex-col gap-1.5">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#e9d319]">
                    {player.role}
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-tight leading-none text-white">
                    {player.name}
                  </h3>
                  <span className="text-xs font-bold text-white/80 uppercase tracking-wider">
                    {player.cohort}
                  </span>

                  {/* Telemetry readout panel */}
                  <div className="mt-3 pt-2 border-t border-[#e9d319]/30 flex flex-col gap-0.5">
                    <span className="text-[9px] font-black tracking-widest text-[#e9d319] uppercase flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#e9d319] animate-pulse" />
                      Telemetry Index
                    </span>
                    <span className="text-xs font-bold text-white font-mono tracking-wide">
                      {player.stats}
                    </span>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 12. LIVE SOCIAL EMBED MODULE (Mock Instagram Gallery - DARK THEME) */}
        <motion.section 
          {...sectionAnimProps}
          className="py-20 bg-[#11123c] text-white border-b border-white/5 select-none"
        >
          <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-start gap-1 border-l-4 border-[#e9d319] pl-4 mb-12 text-left">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#11123c] bg-[#e9d319] px-2.5 py-0.5 rounded">
                SOCIAL
              </span>
              <h2 className="font-display text-2xl sm:text-4xl font-black uppercase tracking-tight text-white mt-1">
                LATEST ON INSTAGRAM
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {[
                { img: "/images/news-underpriv-camp.jpg", likes: "1,240", caption: "Hard work on the turf today. 💪 #SuperStriker" },
                { img: "/images/news-pathways.jpg", likes: "890", caption: "Developing youth pathways step-by-step. ⚽" },
                { img: "/images/Instagram2.jpeg", likes: "2,050", caption: "Matchday memories. Three points locked in! 🏆" },
                { img: "/images/Instagram3.jpeg", likes: "1,560", caption: "Grassroots scouting festivals active in school clusters. 🧤" }
              ].map((post, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 0 0 2px rgba(233,211,25,0.5), 0 16px 32px rgba(17,18,60,0.3)"
                  }}
                  className="relative rounded-xl overflow-hidden aspect-square group shadow-sm bg-[#11123c]/40 border border-white/5 cursor-pointer transition-all duration-300"
                >
                  <Image
                    src={post.img}
                    alt="Instagram Post"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-108 opacity-90 group-hover:opacity-100"
                    sizes="(max-w-768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-[#11123c]/65 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4 text-left text-white">
                    <span className="text-[10px] font-bold tracking-wider text-[#e9d319]">♥ {post.likes} likes</span>
                    <p className="text-[11px] leading-relaxed mt-1 font-medium">{post.caption}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* 13. LATEST MOMENTS ON THE PITCH (HORIZONTAL PHOTO STRIP - LIGHT) */}
        <motion.div {...sectionAnimProps}>
          <PhotoStrip />
        </motion.div>

        {/* 14. SPONSORS LOGO STRIP (DARK) */}
        <motion.div {...sectionAnimProps}>
          <PartnerLogos />
        </motion.div>

        {/* 15. NEWSLETTER SIGNUP (LIGHT) */}
        <motion.section 
          {...sectionAnimProps}
          className="py-20 bg-gray-50 border-t border-gray-150 px-4"
        >
          <div className="max-w-4xl mx-auto text-center flex flex-col gap-6 items-center">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#e9d319] bg-[#11123c] px-2.5 py-0.5 rounded">
              WEEKLY DISPATCH
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#11123c]">
              Subscribe To SuperStriker Football Stories
            </h2>
            <p className="text-xs sm:text-sm text-[#4B5563] max-w-md leading-relaxed">
              Get tactical insights, scout reviews, matching brief analytics, and strategic investment options sent to your corporate mail twice a month.
            </p>

            <form onSubmit={(e) => { e.preventDefault(); alert("Subscription successful!"); }} className="flex flex-col sm:flex-row gap-2 w-full max-w-md mt-4">
              <input
                type="email"
                placeholder="Business email address"
                required
                className="bg-white rounded-full border border-gray-200 px-5 py-3 text-xs text-[#11123c] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#e9d319]/20 flex-grow"
              />
              <button
                type="submit"
                className="rounded-full bg-[#11123c] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#e9d319] hover:text-[#11123c] transition-all hover:scale-103 shrink-0"
              >
                Subscribe Stories
              </button>
            </form>
          </div>
        </motion.section>

      </div>
    </>
  );
}
