"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import FootballLoader from "@/components/FootballLoader";
import HeroCarousel from "@/components/home/HeroCarousel";
import PromoStrip from "@/components/home/PromoStrip";
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

  useEffect(() => {
    if (sessionStorage.getItem("loader-complete")) {
      const timer = setTimeout(() => setLoading(false), 0);
      return () => clearTimeout(timer);
    }
  }, []);

  // Initialize GSAP Parallax zoom for the Vision Stadium Banner
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

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
        
        {/* 1. HERO CAROUSEL */}
        <HeroCarousel />

        {/* 2. PROMO ANNOUNCEMENT STRIP */}
        <PromoStrip />

        {/* 3. LATEST MODULE (2 ROW HORIZONTAL SCROLL Feed) */}
        <motion.div {...sectionAnimProps}>
          <LatestFeed />
        </motion.div>

        {/* 4. ACADEMY BANNER MODULE (FULL WIDTH) */}
        <motion.div {...sectionAnimProps}>
          <AcademyBanner />
        </motion.div>

        {/* 5. SUB-BRAND SPOTLIGHT MODULE (Sequential Full Width Blocks) */}
        <motion.div {...sectionAnimProps}>
          <SubBrandSpotlight />
        </motion.div>

        {/* 6. FOUNDER & HERITAGE PROFILE NOTE (MAGAZINE INTERVIEW) */}
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
            {/* Portrait Image with floating hover effect */}
            <div className="lg:col-span-5 flex justify-center">
              <motion.div
                whileHover={{ y: -6, rotate: -1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="relative h-[450px] w-full max-w-[360px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
              >
                <Image
                  src="/images/founder-portrait.jpg"
                  alt="Ramakrishnan President Portrait"
                  fill
                  className="object-cover object-top"
                  sizes="360px"
                />
              </motion.div>
            </div>

            {/* Quote details */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-left relative pl-4 lg:pl-10">
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

        {/* 7. LATEST MOMENTS ON THE PITCH (HORIZONTAL PHOTO STRIP) */}
        <motion.div {...sectionAnimProps}>
          <PhotoStrip />
        </motion.div>

        {/* 8. LIVE SOCIAL EMBED MODULE (Mock Instagram Gallery) */}
        <motion.section 
          {...sectionAnimProps}
          className="py-20 bg-gray-50 border-b border-gray-150 select-none"
        >
          <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-start gap-1 border-l-4 border-[#10143A] pl-4 mb-12">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#DCE135] bg-[#10143A] px-2.5 py-0.5 rounded">
                SOCIAL
              </span>
              <h2 className="font-display text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#0A1028] mt-1">
                LATEST ON INSTAGRAM
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { img: "/images/news-underpriv-camp.jpg", likes: "1,240", caption: "Hard work on the turf today. 💪 #SuperStriker" },
                { img: "/images/news-pathways.jpg", likes: "890", caption: "Developing youth pathways step-by-step. ⚽" },
                { img: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=600", likes: "2,050", caption: "Matchday memories. Three points locked in! 🏆" },
                { img: "https://images.unsplash.com/photo-1518063319789-7217e6706b04?q=80&w=600", likes: "1,560", caption: "Grassroots scouting festivals active in school clusters. 🧤" }
              ].map((post, idx) => (
                <div key={idx} className="relative rounded-xl overflow-hidden aspect-square group shadow-sm bg-white border border-gray-100">
                  <Image
                    src={post.img}
                    alt="Instagram Post"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-103"
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

        {/* 9. INFRASTRUCTURE & VISION BANNER (PARALLAX ZOOM STADIUM) */}
        <section 
          ref={featureBannerRef} 
          className="relative h-[65vh] min-h-[400px] flex items-center justify-start overflow-hidden bg-[#10143A] text-white px-8 sm:px-16 lg:px-24 select-none border-b border-gray-150"
        >
          <Image
            src="https://images.unsplash.com/photo-1529900748604-07564a03e7a6?q=80&w=1600&auto=format&fit=crop"
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

        {/* 10. PLAYER JOURNEYS SECTION */}
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

          {/* Render Player Journeys using standardized NewsCard to match Latest module */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {playerNewsItems.map((item) => (
              <div key={item.slug} className="flex">
                <NewsCard item={item} />
              </div>
            ))}
          </div>
        </motion.section>

        {/* 11. INVESTOR BANNER MODULE (FULL WIDTH RELOCATED TO BOTTOM) */}
        <motion.div {...sectionAnimProps}>
          <InvestorBanner />
        </motion.div>

        {/* 12. SPONSORS LOGO STRIP */}
        <motion.div {...sectionAnimProps}>
          <PartnerLogos />
        </motion.div>

        {/* 13. NEWSLETTER SIGNUP */}
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
