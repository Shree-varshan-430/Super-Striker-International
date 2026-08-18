"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowRight, Play } from "lucide-react";
import { NewsItem } from "@/types/news";
import NewsCard from "./NewsCard";

const LATEST_ITEMS: NewsItem[] = [
  {
    slug: "building-next-generation",
    type: "article",
    title: "Building India's Next Generation Of Football Champions",
    category: "academy",
    thumbnail: "/images/news-player-development.jpg",
    publishedAt: "12 AUG 2026",
    excerpt: "How our academies are using European development standards to nurture young talent and carve direct paths to professional leagues.",
    author: "Ramakrishnan"
  },
  {
    slug: "video-grassroots-expansion",
    type: "video",
    title: "Smart Sessions & DPDL Under 9 Match highlights",
    category: "community",
    thumbnail: "/images/news-coaches-talk.jpg",
    publishedAt: "28 JUL 2026",
    duration: "10:15",
    excerpt: "Watch the tactical session blueprints and key match highlights from the Development Premier Division League.",
    author: "Technical Team",
    videoUrl: "https://youtu.be/gnSLGcBaBSk?si=QL44EAzhWrL1ymB2,"
  },
  {
    slug: "grassroots-revolution",
    type: "article",
    title: "Grassroots Football Revolution In South India",
    category: "academy",
    thumbnail: "/images/news-grassroots.jpg",
    publishedAt: "10 AUG 2026",
    excerpt: "An inside look at our grassroots festivals and clinics bringing football education to thousands of school children in Karnataka and Tamil Nadu.",
    author: "Editorial Team"
  },
  {
    slug: "video-behind-training",
    type: "video",
    title: "DPDL Under-9: BSSFC vs Jogo Bonito Match Highlights",
    category: "club",
    thumbnail: "/images/team-2.jpg",
    publishedAt: "11 AUG 2026",
    duration: "12:45",
    excerpt: "Watch the exciting junior division match highlights of Bangalore Super Strikers FC battling Jogo Bonito in the Youth Premier League.",
    author: "BSSFC Media",
    videoUrl: "https://youtu.be/KWglIwKCp2s?si=s9CnPhob0-D7JSAA"
  },
  {
    slug: "creating-football-pathways",
    type: "article",
    title: "How SuperStriker International Is Creating Football Pathways",
    category: "club",
    thumbnail: "/images/news-pathways.jpg",
    publishedAt: "08 AUG 2026",
    excerpt: "From school leagues to senior teams, our comprehensive pathway model bridges the gap between recreational play and professional contracts.",
    author: "Technical Director"
  },
  {
    slug: "video-coach-convo",
    type: "video",
    title: "BSSFC and Maharishi School Residential Program Showcase",
    category: "academy",
    thumbnail: "/images/training-2.jpg",
    publishedAt: "09 AUG 2026",
    duration: "08:15",
    excerpt: "Explore our residential campus trials, student athlete accommodations, UEFA coaching syllabus, and physical conditioning drills.",
    author: "Admissions Team",
    videoUrl: "https://youtu.be/J3pYjM4eRIc?si=_uDrzdJws6hJy6gq"
  },
  {
    slug: "turf-sponsorship-deal",
    type: "article",
    title: "Bangalore Super Strikers FC Secure Turf Sponsorship",
    category: "investors",
    thumbnail: "/images/news-pitch-sponsorship.jpg",
    publishedAt: "05 AUG 2026",
    excerpt: "A landmark partnership that guarantees upgraded facilities, new training pitches, and advanced sports-tech telemetry for senior and youth squads.",
    author: "Technical Director"
  },
  {
    slug: "video-founder-stories",
    type: "video",
    title: "Push Your Limits with Bangalore Super Strikers FC",
    category: "community",
    thumbnail: "/images/team-1.jpg",
    publishedAt: "07 AUG 2026",
    duration: "15:30",
    excerpt: "A high-performance documentary tracking our senior athletes' telemetry tests, gym workouts, and tactical training sessions.",
    author: "Striker TV",
    videoUrl: "https://youtu.be/bPrZTB5Fcs4?si=_LZU0W1gyRDeQ6Wk"
  }
];

export default function LatestFeed() {
  const videoScrollRef = useRef<HTMLDivElement>(null);

  const scroll = (ref: React.RefObject<HTMLDivElement | null>, direction: "left" | "right") => {
    if (ref.current) {
      const { scrollLeft, clientWidth } = ref.current;
      const scrollAmount = clientWidth * 0.75;
      const targetScroll =
        direction === "left"
          ? scrollLeft - scrollAmount
          : scrollLeft + scrollAmount;
      
      ref.current.scrollTo({
        left: targetScroll,
        behavior: "smooth"
      });
    }
  };

  const articleItems = LATEST_ITEMS.filter((item) => item.type === "article");
  const videoItems = LATEST_ITEMS.filter((item) => item.type === "video");

  const featuredArticle = articleItems[0];
  const secondaryArticles = articleItems.slice(1, 3);

  return (
    <div className="w-full flex flex-col select-none">
      
      {/* ── ROW 1: ARTICLES (Thunderhill Editorial Grid) ────────────── */}
      <section className="py-24 sm:py-32 bg-white border-b border-gray-200 text-left">
        <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
          
          {/* Header with Navigation Link */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-gray-200 mb-16">
            <div className="flex flex-col items-start gap-2 text-left border-l-4 border-[#11123c] pl-4 sm:pl-6">
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#a29142]">
                EDITORIAL DESK • DISPATCHES
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#11123c]">
                News & Match Analysis
              </h2>
              <p className="text-xs sm:text-sm text-[#4B5563] font-normal max-w-xl">
                Tactical reviews, telemetry analytics, scouting registers, and academy pathway milestones.
              </p>
            </div>
            
            <Link
              href="/news"
              className="thunderhill-btn thunderhill-btn-dark shrink-0"
            >
              <span>Explore All News</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Editorial Grid (1 Large Featured + 2 Secondary Columns) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Featured Article Card */}
            {featuredArticle && (
              <Link
                href={`/news/${featuredArticle.slug}`}
                className="lg:col-span-7 relative aspect-[16/11] lg:aspect-auto lg:min-h-[460px] bg-[#11123c] border border-gray-200 overflow-hidden group flex flex-col justify-end p-6 sm:p-10 text-left text-white transition-all hover:border-[#11123c]"
              >
                <Image
                  src={featuredArticle.thumbnail}
                  alt={featuredArticle.title}
                  fill
                  className="object-cover opacity-75 transition-transform duration-500 group-hover:scale-103"
                  sizes="(max-w-1024px) 100vw, 750px"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#11123c] via-[#11123c]/60 to-transparent z-10" />
                
                <div className="relative z-20 flex flex-col gap-3 max-w-xl">
                  <div className="flex items-center gap-3 text-xs font-mono font-bold uppercase tracking-wider text-[#e9d319]">
                    <span>{featuredArticle.publishedAt}</span>
                    <span>•</span>
                    <span>5 MIN READ</span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight leading-tight group-hover:text-[#e9d319] transition-colors">
                    {featuredArticle.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-normal line-clamp-2">
                    {featuredArticle.excerpt}
                  </p>

                  <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#e9d319] mt-2 pt-3 border-t border-white/15 w-fit">
                    <span>Read Full Dispatch</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            )}

            {/* Secondary Articles */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              {secondaryArticles.map((item) => (
                <div key={item.slug} className="flex-1">
                  <NewsCard item={item} />
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* ── ROW 2: VIDEOS & TELEMETRY ARCHIVES ──────────────────────── */}
      <section className="py-24 bg-[#11123c] text-white border-b border-white/10 text-left">
        <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
          
          {/* Header with Navigation Controls */}
          <div className="flex justify-between items-end pb-4 border-b border-white/10 mb-12">
            <div className="flex flex-col items-start gap-2 text-left border-l-4 border-[#e9d319] pl-4 sm:pl-6">
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#e9d319]">
                STRIKER TV • TACTICAL ARCHIVES
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
                Video & Match Telemetry
              </h2>
            </div>
            
            {/* Scroll Buttons */}
            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={() => scroll(videoScrollRef, "left")}
                className="flex h-10 w-10 items-center justify-center border border-white/20 bg-white/5 text-white hover:bg-[#e9d319] hover:text-[#11123c] hover:border-[#e9d319] transition-colors"
                aria-label="Scroll left"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={() => scroll(videoScrollRef, "right")}
                className="flex h-10 w-10 items-center justify-center border border-white/20 bg-white/5 text-white hover:bg-[#e9d319] hover:text-[#11123c] hover:border-[#e9d319] transition-colors"
                aria-label="Scroll right"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Scroll Container */}
          <div 
            ref={videoScrollRef}
            className="flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory scrollbar-none select-none scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {videoItems.map((item) => (
              <div 
                key={item.slug} 
                className="w-[280px] sm:w-[320px] md:w-[360px] flex-shrink-0 snap-start group"
              >
                <NewsCard item={item} darkTheme={true} />
              </div>
            ))}

            {/* Watch More Card */}
            <div className="w-[280px] sm:w-[320px] md:w-[360px] flex-shrink-0 snap-start">
              <Link 
                href="/news"
                className="flex flex-col items-center justify-center h-full min-h-[300px] border border-white/15 bg-white/5 p-6 text-center hover:border-[#e9d319] transition-colors group"
              >
                <div className="w-12 h-12 border border-white/30 text-white flex items-center justify-center mb-4 group-hover:bg-[#e9d319] group-hover:text-[#11123c] group-hover:border-[#e9d319] transition-colors">
                  <Play className="h-5 w-5 fill-current ml-0.5" />
                </div>
                <h3 className="font-display text-base font-black uppercase tracking-tight text-white">
                  Watch All Broadcasts
                </h3>
                <p className="text-xs text-white/60 mt-2 max-w-[200px] leading-relaxed">
                  Access complete tactical walkthroughs and player telemetry archives.
                </p>
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
