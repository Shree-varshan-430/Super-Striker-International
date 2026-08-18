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
  },
  
  {
    slug: "pondicherry-academy-expands",
    type: "article",
    title: "Pondicherry Academy Expands to Under-15 Category",
    category: "academy",
    thumbnail: "/images/news-academy-u15.jpg",
    publishedAt: "01 AUG 2026",
    excerpt: "Responding to growing demand, Pondicherry Super Strikers FC launches its new residential U-15 cohort to develop regional talent.",
    author: "Academy Staff"
  },
  {
    slug: "video-goalkeeping-telemetry",
    type: "video",
    title: "How to train for a football match: Grassroots skills",
    category: "academy",
    thumbnail: "/images/news-goalkeeping.jpg",
    publishedAt: "03 AUG 2026",
    duration: "05:40",
    excerpt: "Our tactical coaches outline the key physical literacy drills, passing metrics, and shooting telemetry required for matchday prep.",
    author: "GK Panel",
    videoUrl: "https://youtu.be/fy6YOT-PAQQ?si=wZzh8nv7YAskDt_H"
  },
  
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
  const secondaryArticles = articleItems.slice(1);

  return (
    <div className="w-full flex flex-col select-none">
      
      {/* ROW 1: ARTICLES (Asymmetric Masonry Grid Layout) */}
      <section className="py-20 bg-white border-b border-gray-150 text-left">
        <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header with Navigation Link */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-gray-150 mb-12">
            <div className="flex flex-col items-start gap-1 text-left border-l-4 border-[#11123c] pl-4">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#e9d319] bg-[#11123c] px-2.5 py-0.5 rounded">
                EDITORIAL DESK
              </span>
              <h2 className="font-display text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#11123c] mt-1">
                News & Football Dispatches
              </h2>
              <p className="text-xs sm:text-sm text-[#696484] mt-0.5 font-medium max-w-xl">
                Inside stories, match telemetry analyses, scouting reports, and player pathway milestones.
              </p>
            </div>
            
            <Link
              href="/news"
              className="inline-flex items-center gap-2 rounded-full bg-[#11123c] text-white hover:bg-[#e9d319] hover:text-[#11123c] px-6 py-3 text-xs font-bold uppercase tracking-wider transition-all hover:scale-103 active:scale-95 shadow-sm border border-gray-150 shrink-0 w-fit"
            >
              Explore All News
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Asymmetric Editorial Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Featured Double-Width Magazine Cover Card */}
            {featuredArticle && (
              <Link
                href={`/news/${featuredArticle.slug}`}
                className="lg:col-span-2 relative aspect-[16/11] lg:aspect-auto lg:h-[480px] rounded-2xl sm:rounded-3xl overflow-hidden group shadow-lg flex flex-col justify-end border border-gray-150 hover:border-[#11123c]/40 transition-all duration-300"
              >
                <Image
                  src={featuredArticle.thumbnail}
                  alt={featuredArticle.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-103"
                  sizes="(max-w-1024px) 100vw, 800px"
                />
                
                {/* Clean Editorial Dark Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#11123c] via-[#11123c]/70 to-transparent z-10" />
                
                {/* Top Category Badge */}
                <div className="absolute top-6 left-6 z-20">
                  <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-[#11123c] bg-[#e9d319] px-3 py-1 rounded-md shadow-md">
                    FEATURED ESSAY
                  </span>
                </div>

                {/* Content Overlay */}
                <div className="relative z-20 p-6 sm:p-10 text-left flex flex-col gap-3 max-w-2xl text-white">
                  <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-white/70">
                    <span>{featuredArticle.author || "Ramakrishnan"}</span>
                    <span>•</span>
                    <span>{featuredArticle.publishedAt}</span>
                    <span>•</span>
                    <span className="text-[#e9d319]">5 MIN READ</span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight leading-tight group-hover:text-[#e9d319] transition-colors">
                    {featuredArticle.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-white/85 leading-relaxed font-normal line-clamp-2">
                    {featuredArticle.excerpt}
                  </p>

                  <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#e9d319] mt-2 pt-2 border-t border-white/15 w-fit">
                    <span>Read Full Dispatch</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
                  </div>
                </div>
              </Link>
            )}

            {/* Grid secondary articles */}
            {secondaryArticles.map((item) => (
              <div key={item.slug} className="flex">
                <NewsCard item={item} />
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ROW 2: VIDEOS (MUTV Style Dark Carousel Layout) */}
      <section className="py-20 bg-[#11123c] text-white border-b border-white/5 text-left">
        <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header with Navigation Controls */}
          <div className="flex justify-between items-end pb-4 border-b border-white/10 mb-12">
            <div className="flex flex-col items-start gap-1 text-left border-l-4 border-[#e9d319] pl-4">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#11123c] bg-[#e9d319] px-2.5 py-0.5 rounded">
                MUTV CHANNELS
              </span>
              <h2 className="font-display text-2xl sm:text-4xl font-black uppercase tracking-tight text-white mt-1">
                VIDEO & TELEMETRY CLIPS
              </h2>
            </div>
            
            {/* Scroll Buttons */}
            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={() => scroll(videoScrollRef, "left")}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white hover:bg-[#e9d319] hover:text-[#11123c] transition-all active:scale-95 shadow-sm"
                aria-label="Scroll left"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => scroll(videoScrollRef, "right")}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white hover:bg-[#e9d319] hover:text-[#11123c] transition-all active:scale-95 shadow-sm"
                aria-label="Scroll right"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Scroll Container */}
          <div 
            ref={videoScrollRef}
            className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory scrollbar-none select-none scroll-smooth"
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

            {/* MUTV-style Watch More Card */}
            <div className="w-[280px] sm:w-[320px] md:w-[360px] flex-shrink-0 snap-start">
              <Link 
                href="/news"
                className="flex flex-col items-center justify-center h-full min-h-[300px] border border-white/10 rounded-2xl bg-white/5 group p-6 text-center hover:border-[#e9d319] transition-all hover:bg-white/10"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center mb-4 group-hover:bg-[#e9d319] group-hover:text-[#11123c] transition-all">
                  <Play className="h-5 w-5 fill-current group-hover:scale-110 transition-transform ml-0.5" />
                </div>
                <h3 className="font-display text-base font-black uppercase tracking-tight text-white">
                  Watch All Clips
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
