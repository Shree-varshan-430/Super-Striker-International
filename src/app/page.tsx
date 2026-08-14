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

      <div className="w-full bg-white text-[#0A1028] font-sans select-none overflow-x-hidden">
        
        {/* 1. HERO CAROUSEL (FULL SIZE CAROUSEL - DARK) */}
        <HeroCarousel />

        {/* 2. PROMO ANNOUNCEMENT STRIP (LIVE SCROLLING TICKER - YELLOW) */}
        <LiveTicker />

        {/* 3. VENTURE SCALE & GROWTH METRICS (BUSINESS COUNT UP BAR - DARK) */}
        <section 
          ref={businessSectionRef} 
          className="py-12 bg-[#10143A] text-white border-b border-white/10 px-4 sm:px-6 lg:px-8 select-none"
        >
          <div className="max-w-[95%] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { target: 1500, suffix: "+", label: "Grassroots Discovered Base" },
              { target: 5, suffix: "", label: "Smart Telemetry Fields" },
              { target: 3, suffix: "", label: "Affiliated State Clubs" },
              { target: 100, suffix: "%", label: "Talent Pathway Flow" }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center py-2 border-r last:border-r-0 border-white/10">
                <span className="text-3xl sm:text-5xl font-display font-black text-[#DCE135] leading-none">
                  <span className="stat-counter" data-target={item.target}>0</span>
                  {item.suffix}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-white/70 mt-2 max-w-[150px]">
                  {item.label}
                </span>
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
          className="py-20 bg-white border-b border-gray-150 select-none"
        >
          <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-start gap-1 border-l-4 border-[#10143A] pl-4 mb-12 text-left">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#DCE135] bg-[#10143A] px-2.5 py-0.5 rounded">
                THE COMMERCIAL EQUATION
              </span>
              <h2 className="font-display text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#0A1028] mt-1">
                INVESTOR PROPOSITION & YIELDS
              </h2>
              <p className="text-xs sm:text-sm text-[#4B5563] mt-2 max-w-xl leading-relaxed">
                SuperStriker International provides structured, high-value sports development partnerships. Here is exactly what you fund and how the returns accrue.
              </p>
            </div>

            {/* Split Grid for Funding vs Yield */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Column 1: What You Invest In */}
              <div className="flex flex-col gap-6 text-left">
                <div className="flex items-center gap-2 mb-2 pb-2 border-b border-gray-200">
                  <div className="w-3 h-3 rounded-full bg-[#10143A]" />
                  <h3 className="font-display text-lg font-black uppercase tracking-tight text-[#10143A]">
                    1. What You Invest In (The Assets)
                  </h3>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      title: "Regional Club Franchises",
                      desc: "Direct capital funding for Bangalore, Chennai, and Pondicherry senior squads to build rosters, fund travel, and register for KSFA/AIFF tournaments.",
                      sub: "Assets: Player registrations, stadium contracts, live-broadcast inventory."
                    },
                    {
                      title: "Smart Telemetry Infrastructures",
                      desc: "Construction of digitized, smart-turf community arenas equipped with telemetry sensors, camera rigs, and high-yield hourly training facilities.",
                      sub: "Assets: Property development rights, sensory hardware, arena lease yields."
                    },
                    {
                      title: "Fully-Funded Residential Cohorts",
                      desc: "Sponsorship of elite Under-15 and Under-18 player batches to cover high-performance tutoring, tactical coaching, scientific nutrition, and kit gear.",
                      sub: "Assets: Direct academy contract pipelines, domestic league registry rights."
                    }
                  ].map((asset, idx) => (
                    <div key={idx} className="bg-white rounded-xl p-6 border border-gray-200 border-l-4 border-[#10143A] shadow-sm flex flex-col gap-2 hover:border-[#DCE135] transition-colors">
                      <h4 className="font-display text-base font-extrabold uppercase text-[#10143A]">
                        {asset.title}
                      </h4>
                      <p className="text-xs text-[#4B5563] leading-relaxed">
                        {asset.desc}
                      </p>
                      <span className="text-[10px] font-bold text-[#10143A]/60 uppercase tracking-wide mt-1">
                        {asset.sub}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Column 2: What You Get In Return */}
              <div className="flex flex-col gap-6 text-left">
                <div className="flex items-center gap-2 mb-2 pb-2 border-b border-gray-200">
                  <div className="w-3 h-3 rounded-full bg-[#DCE135]" />
                  <h3 className="font-display text-lg font-black uppercase tracking-tight text-[#10143A]">
                    2. What You Get In Return (The Yields)
                  </h3>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      title: "Guaranteed Branding & Media Rights",
                      desc: "Front-of-shirt branding across state squads, stadium name rights, digital stream banner ads, and high-visibility placements on academy kits and scout files.",
                      returnVal: "Yield: Corporate exposure, brand affinity, public goodwill."
                    },
                    {
                      title: "Player Transfer Revenue Shares",
                      desc: "Acquire pre-negotiated revenue percentages on transfer fees and professional registration sales of rostered athletes scouted via Bangalore Football School.",
                      returnVal: "Yield: Direct revenue shares on domestic and international contract sales."
                    },
                    {
                      title: "Physical Real-Estate Rental Splits",
                      desc: "Receive recurring financial splits from smart-turf hourly rentals, commercial leagues, school tourney hosting, and BFS academy membership dues.",
                      returnVal: "Yield: Predictable cash flow from facility utilization and operations."
                    },
                    {
                      title: "Equity in Parent Network",
                      desc: "Strategic equity options in SuperStriker International Pvt Ltd's parent sports group, capturing valuation hikes as we expand regionally.",
                      returnVal: "Yield: Long-term corporate valuation growth & capital gains."
                    }
                  ].map((ret, idx) => (
                    <div key={idx} className="bg-white rounded-xl p-6 border border-gray-200 border-l-4 border-[#DCE135] shadow-sm flex flex-col gap-2 hover:border-[#10143A] transition-colors">
                      <h4 className="font-display text-base font-extrabold uppercase text-[#10143A]">
                        {ret.title}
                      </h4>
                      <p className="text-xs text-[#4B5563] leading-relaxed">
                        {ret.desc}
                      </p>
                      <span className="text-[10px] font-bold text-[#10143A] uppercase tracking-wide mt-1">
                        {ret.returnVal}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Quick Enquiry Prompt */}
            <div className="mt-12 bg-[#10143A] rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg">
              <div className="text-left flex flex-col gap-1.5">
                <h3 className="font-display text-lg sm:text-xl font-black uppercase text-white">
                  Ready to partner with SuperStriker?
                </h3>
                <p className="text-xs text-white/80 max-w-md">
                  Inquire today to schedule a telemetry demo and receive our detailed investment prospectus deck.
                </p>
              </div>
              <Link
                href="/investors#enquire"
                className="inline-flex items-center gap-1.5 rounded-full bg-[#DCE135] text-[#10143A] px-6 py-3.5 text-xs font-bold uppercase tracking-wider transition-all hover:bg-white hover:text-[#10143A] hover:scale-105 active:scale-95 shadow-md shrink-0"
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
          className="relative h-[65vh] min-h-[400px] flex items-center justify-start overflow-hidden bg-[#10143A] text-white px-8 sm:px-16 lg:px-24 select-none border-b border-gray-150"
        >
          <Image
            src="/images/match-1.jpg"
            alt="SuperStriker Stadium Future Vision"
            fill
            className="object-cover opacity-25"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#10143A] via-[#10143A]/80 to-transparent z-10" />
          
          <div className="relative z-20 max-w-2xl text-left flex flex-col gap-4">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#DCE135] bg-[#DCE135]/15 px-3 py-1 rounded w-fit">
              Future Vision
            </span>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-none">
              Planning for the Future of South Indian Football
            </h2>
            <p className="text-xs sm:text-sm text-white/75 leading-relaxed max-w-xl">
              SuperStriker International is spearheading smart turf developments and regional training hubs to modernize local football facilities and raise physical literacy.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 rounded-full bg-[#DCE135] text-[#10143A] px-6 py-3 text-xs font-bold uppercase tracking-wider transition-all hover:bg-white hover:text-[#10143A] hover:scale-105 active:scale-95 shadow-md w-fit mt-2"
            >
              Read More
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* 9. FOUNDER & HERITAGE PROFILE NOTE (MAGAZINE INTERVIEW - LIGHT & ENLARGED PORTRAIT) */}
        <motion.section 
          {...sectionAnimProps}
          className="py-24 px-4 sm:px-6 lg:px-8 max-w-[95%] mx-auto bg-white border-b border-gray-100 select-none"
        >
          <div className="text-center mb-16">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#DCE135] bg-[#10143A] px-2.5 py-0.5 rounded">
              HERITAGE INTERVIEWS
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#10143A] mt-2">
              Stories Behind The Vision
            </h2>
            <div className="h-1 w-12 bg-[#10143A] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Portrait Image with floating hover effect - ENLARGED to lg:col-span-6 */}
            <div className="lg:col-span-6 flex justify-center">
              <motion.div
                whileHover={{ y: -6, rotate: -1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="relative h-[520px] w-full max-w-[440px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
              >
                <Image
                  src="/images/founder-portrait.jpg"
                  alt="Ramakrishnan President Portrait"
                  fill
                  className="object-cover object-top"
                  sizes="440px"
                />
              </motion.div>
            </div>

            {/* Quote details - lg:col-span-6 */}
            <div className="lg:col-span-6 flex flex-col gap-6 text-left relative pl-4 lg:pl-10">
              <div className="absolute left-0 top-0 text-[#10143A]/10 font-serif text-9xl pointer-events-none select-none -translate-x-4 -translate-y-8">
                “
              </div>
              
              <p className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#10143A] relative z-10 leading-snug">
                Football is not only about creating players. It is about creating opportunities and dreams.
              </p>
              
              <div className="flex flex-col text-xs font-bold uppercase tracking-wider text-[#10143A]/60 border-b border-[#10143A]/10 pb-4 mb-2">
                <span className="text-[#10143A] text-sm font-extrabold">Ramakrishnan (Ram)</span>
                <span className="mt-1 font-semibold">President, Bangalore Super Strikers FC</span>
              </div>

              <div className="space-y-4 text-sm text-[#4B5563] leading-relaxed">
                <p>
                  Inspired by his parents, Mr. Devaraj and Mrs. Rajammal Devaraj, who dreamed of seeing their grandson play for India, Ram carried the passion forward.
                </p>
                <p>
                  As a former athlete who experienced the struggles of middle-class sports development due to lacking resources, he constructed a professional infrastructure where young athletes receive tutoring, scientific conditioning, and KSFA / AIFF league exposure. Today, Ram serves as an active AIFF-C coach and KSFA referee.
                </p>
              </div>
              
              <div className="mt-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#10143A] hover:opacity-85 transition-opacity"
                >
                  Read Heritage Interview
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </motion.section>

        {/* 10. ACADEMY BANNER MODULE (FULL WIDTH - DARK) */}
        <motion.div {...sectionAnimProps}>
          <AcademyBanner />
        </motion.div>

        {/* 11. PLAYER PATHWAYS SQUAD SHOWCASE (MAN UTD TALL VERTICAL CARDS - LIGHT) */}
        <motion.section 
          {...sectionAnimProps}
          className="py-24 px-4 sm:px-6 lg:px-8 max-w-[95%] mx-auto bg-white select-none border-b border-gray-150"
        >
          <div className="text-left mb-16 flex flex-col gap-1 border-l-4 border-[#10143A] pl-6">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#DCE135] bg-[#10143A] px-2.5 py-0.5 rounded w-fit">
              PLAYER PATHWAYS
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#0A1028] mt-2">
              Every player has a story before becoming a champion.
            </h2>
            <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed max-w-xl">
              Tracing the path from local training fields to senior competitive platforms and state league rosters.
            </p>
          </div>

          {/* Render Player Journeys using watermarked Squad Profile Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { name: "Aditya Kumar", role: "Midfielder", cohort: "U-15 Elite Cohort", number: "10", image: "/images/Player1.jpeg", stats: "Pass Accuracy: 88% | Assist Leader" },
              { name: "Sanjay Raj", role: "Striker", cohort: "BSS Senior Squad", number: "09", image: "/images/Player2.jpeg", stats: "Goals: 12 | Shots conversion: 24%" },
              { name: "Vikram Seth", role: "Goalkeeper", cohort: "Pondicherry Resident Academy", number: "01", image: "/images/Player3.jpeg", stats: "Clean Sheets: 8 | Penalty Saves: 2" }
            ].map((player) => (
              <div 
                key={player.name}
                className="relative rounded-2xl overflow-hidden aspect-[3/4] group shadow-sm bg-gradient-to-b from-gray-50 to-gray-150 border border-gray-200/50 flex flex-col justify-end p-6 select-none"
              >
                {/* Large Background Watermark Number */}
                <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none z-0 overflow-hidden">
                  <span className="font-display text-[140px] sm:text-[180px] font-black text-gray-200/40 tracking-tighter leading-none transition-all duration-700 group-hover:scale-110 group-hover:text-[#DCE135]/15">
                    {player.number}
                  </span>
                </div>

                {/* Player image overlay */}
                <div className="absolute inset-0 z-10">
                  <Image
                    src={player.image}
                    alt={player.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-102 opacity-85 group-hover:opacity-95"
                    sizes="(max-w-768px) 100vw, 360px"
                  />
                  {/* Subtle dark bottom vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#10143A] via-[#10143A]/20 to-transparent z-15" />
                </div>

                {/* Content info overlay */}
                <div className="relative z-20 text-left text-white flex flex-col gap-1">
                  <span className="text-[9px] font-black uppercase tracking-widest text-[#10143A] bg-[#DCE135] px-2 py-0.5 rounded w-fit">
                    #{player.number} {player.role}
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-black uppercase tracking-tight leading-none mt-1">
                    {player.name}
                  </h3>
                  <span className="text-[10px] font-bold text-white/70 uppercase tracking-wider">
                    {player.cohort}
                  </span>

                  {/* Hover stats reveal bar */}
                  <div className="h-0 opacity-0 overflow-hidden group-hover:h-auto group-hover:opacity-100 transition-all duration-500 flex flex-col gap-1 mt-2 pt-2 border-t border-white/10">
                    <span className="text-[8px] font-black tracking-widest text-[#DCE135] uppercase">
                      TELEMETRY INDEX
                    </span>
                    <span className="text-[10px] font-bold text-white/90">
                      {player.stats}
                    </span>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </motion.section>

        {/* 12. LIVE SOCIAL EMBED MODULE (Mock Instagram Gallery - DARK THEME) */}
        <motion.section 
          {...sectionAnimProps}
          className="py-20 bg-[#0F1227] text-white border-b border-white/5 select-none"
        >
          <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-start gap-1 border-l-4 border-[#DCE135] pl-4 mb-12 text-left">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#10143A] bg-[#DCE135] px-2.5 py-0.5 rounded">
                SOCIAL
              </span>
              <h2 className="font-display text-2xl sm:text-4xl font-black uppercase tracking-tight text-white mt-1">
                LATEST ON INSTAGRAM
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { img: "/images/news-underpriv-camp.jpg", likes: "1,240", caption: "Hard work on the turf today. 💪 #SuperStriker" },
                { img: "/images/news-pathways.jpg", likes: "890", caption: "Developing youth pathways step-by-step. ⚽" },
                { img: "/images/Instagram2.jpeg", likes: "2,050", caption: "Matchday memories. Three points locked in! 🏆" },
                { img: "/images/Instagram3.jpeg", likes: "1,560", caption: "Grassroots scouting festivals active in school clusters. 🧤" }
              ].map((post, idx) => (
                <div key={idx} className="relative rounded-xl overflow-hidden aspect-square group shadow-sm bg-[#10143A]/40 border border-white/5">
                  <Image
                    src={post.img}
                    alt="Instagram Post"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-103 opacity-90 group-hover:opacity-100"
                    sizes="(max-w-768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-[#10143A]/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4 text-left text-white">
                    <span className="text-[10px] font-bold tracking-wider text-[#DCE135]">♥ {post.likes} likes</span>
                    <p className="text-[11px] leading-relaxed mt-1 font-medium">{post.caption}</p>
                  </div>
                </div>
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
            <span className="text-[10px] font-black uppercase tracking-widest text-[#DCE135] bg-[#10143A] px-2.5 py-0.5 rounded">
              WEEKLY DISPATCH
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#0A1028]">
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
                className="bg-white rounded-full border border-gray-200 px-5 py-3 text-xs text-[#0A1028] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#DCE135]/20 flex-grow"
              />
              <button
                type="submit"
                className="rounded-full bg-[#10143A] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#DCE135] hover:text-[#10143A] transition-all hover:scale-103 shrink-0"
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
