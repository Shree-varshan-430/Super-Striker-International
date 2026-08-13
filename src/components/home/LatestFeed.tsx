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
    slug: "video-behind-training",
    type: "video",
    title: "Behind The Training Ground: First Team Squad Drills",
    category: "club",
    thumbnail: "/images/team-2.jpg",
    publishedAt: "11 AUG 2026",
    duration: "12:45",
    excerpt: "Go inside the tactical training session of Bangalore Super Strikers FC as coaches run pressing drills.",
    author: "Technical Team"
  },
  {
    slug: "bss-new-chapter",
    type: "article",
    title: "Bangalore Super Strikers begins a new football chapter",
    category: "club",
    thumbnail: "/images/news-chennai-league.jpg",
    publishedAt: "10 AUG 2026",
    excerpt: "Establishing new training schedules, expanding senior squads, and targeting national league registrations.",
    author: "Editorial Team"
  },
  {
    slug: "video-coach-convo",
    type: "video",
    title: "Coach Conversations: Modern Grassroots Scouting Models",
    category: "academy",
    thumbnail: "/images/training-2.jpg",
    publishedAt: "09 AUG 2026",
    duration: "08:15",
    excerpt: "AIFF-C coach Ram discusses physical literacy and technical profiling guidelines for scout panels.",
    author: "Ram Team"
  },
  {
    slug: "philosophy-pathways",
    type: "article",
    title: "Inside our player development philosophy",
    category: "academy",
    thumbnail: "/images/news-scouting.jpg",
    publishedAt: "08 AUG 2026",
    excerpt: "A deep dive into how structured drills, athletic profiling, and sports nutrition form our syllabus.",
    author: "Technical Director"
  },
  {
    slug: "video-founder-stories",
    type: "video",
    title: "Heritage Stories: Building the Ecosystem Vision",
    category: "community",
    thumbnail: "/images/team-1.jpg",
    publishedAt: "07 AUG 2026",
    duration: "15:30",
    excerpt: "An exclusive documentary highlighting the legacy and dream of Mr. Devaraj and Mrs. Rajammal Devaraj.",
    author: "Heritage Media"
  },
  {
    slug: "pondicherry-scout-trials",
    type: "article",
    title: "Grassroots Talent Identification camp launching in Pondicherry",
    category: "academy",
    thumbnail: "/images/news-pondicherry-scout.jpg",
    publishedAt: "05 AUG 2026",
    excerpt: "Our scouts head to Pondicherry to evaluate U-15 candidates for our residential academy slots.",
    author: "Technical Director"
  },
  {
    slug: "video-goalkeeping-telemetry",
    type: "video",
    title: "Goalkeeper telemetry: Scientific tracking on the turf",
    category: "academy",
    thumbnail: "/images/news-goalkeeping.jpg",
    publishedAt: "03 AUG 2026",
    duration: "05:40",
    excerpt: "See how goalkeeper reaction times and angles are tracked in real-time using GPS sensors.",
    author: "GK Coach"
  },
  {
    slug: "academy-u15-trials",
    type: "article",
    title: "Under-15 Selection Trials announced for Residential Cohorts",
    category: "academy",
    thumbnail: "/images/news-academy-u15.jpg",
    publishedAt: "01 AUG 2026",
    excerpt: "SuperStriker launches open selection trials across 4 centers for the fully-funded residential batch.",
    author: "Academy Staff"
  },
  {
    slug: "video-grassroots-expansion",
    type: "video",
    title: "Ecosystem Growth & Turfs: Inside the Smart Arena",
    category: "community",
    thumbnail: "/images/news-coaches-talk.jpg",
    publishedAt: "28 JUL 2026",
    duration: "10:15",
    excerpt: "An inside look at our smart turf facilities, showcasing GPS tracking vest integrations.",
    author: "Arena Team"
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
  const secondaryArticles = articleItems.slice(1);

  return (
    <div className="w-full flex flex-col select-none">
      
      {/* ROW 1: ARTICLES (Asymmetric Masonry Grid Layout) */}
      <section className="py-20 bg-white border-b border-gray-150 text-left">
        <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="flex flex-col items-start gap-1 border-l-4 border-[#10143A] pl-4 mb-12">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#DCE135] bg-[#10143A] px-2.5 py-0.5 rounded">
              LATEST STORIES
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#0A1028] mt-1">
              NEWS & EDITORIAL READS
            </h2>
          </div>

          {/* Asymmetric Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Featured Double-Width Article Card */}
            {featuredArticle && (
              <Link
                href={`/news/${featuredArticle.slug}`}
                className="lg:col-span-2 relative aspect-[16/10] lg:aspect-auto lg:h-[460px] rounded-2xl overflow-hidden group shadow-md flex flex-col justify-end border border-gray-100"
              >
                <Image
                  src={featuredArticle.thumbnail}
                  alt={featuredArticle.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-102"
                  sizes="(max-w-1024px) 100vw, 800px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#10143A] via-[#10143A]/45 to-transparent z-10" />
                <div className="relative z-20 p-6 sm:p-10 text-left flex flex-col gap-2 max-w-2xl text-white">
                  <span className="text-[9px] font-black uppercase tracking-widest text-[#10143A] bg-[#DCE135] px-2 py-0.5 rounded w-fit">
                    FEATURED
                  </span>
                  <h3 className="font-display text-xl sm:text-3xl font-black uppercase tracking-tight leading-tight">
                    {featuredArticle.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-medium line-clamp-2 mt-1">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#DCE135] mt-2">
                    Read Story
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
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

            {/* "View More" Grid Link Block */}
            <div className="flex">
              <Link 
                href="/news"
                className="flex flex-col items-center justify-center w-full min-h-[360px] border-2 border-dashed border-gray-200 rounded-2xl group p-6 text-center hover:border-[#10143A] transition-all hover:bg-gray-50/50"
              >
                <div className="w-12 h-12 rounded-full bg-[#10143A]/5 text-[#10143A] flex items-center justify-center mb-4 group-hover:bg-[#DCE135] transition-all">
                  <ArrowRight className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="font-display text-base font-black uppercase tracking-tight text-[#0A1028]">
                  Explore All News
                </h3>
                <p className="text-xs text-[#4B5563] mt-2 max-w-[200px] leading-relaxed">
                  Read full articles, match statistics, and watch training telemetry reviews.
                </p>
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* ROW 2: VIDEOS (MUTV Style Dark Carousel Layout) */}
      <section className="py-20 bg-[#0F1227] text-white border-b border-white/5 text-left">
        <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header with Navigation Controls */}
          <div className="flex justify-between items-end pb-4 border-b border-white/10 mb-12">
            <div className="flex flex-col items-start gap-1 text-left border-l-4 border-[#DCE135] pl-4">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#10143A] bg-[#DCE135] px-2.5 py-0.5 rounded">
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
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white hover:bg-[#DCE135] hover:text-[#10143A] transition-all active:scale-95 shadow-sm"
                aria-label="Scroll left"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => scroll(videoScrollRef, "right")}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white hover:bg-[#DCE135] hover:text-[#10143A] transition-all active:scale-95 shadow-sm"
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
                <NewsCard item={item} />
              </div>
            ))}

            {/* MUTV-style Watch More Card */}
            <div className="w-[280px] sm:w-[320px] md:w-[360px] flex-shrink-0 snap-start">
              <Link 
                href="/news"
                className="flex flex-col items-center justify-center h-full min-h-[300px] border border-white/10 rounded-2xl bg-white/5 group p-6 text-center hover:border-[#DCE135] transition-all hover:bg-white/10"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center mb-4 group-hover:bg-[#DCE135] group-hover:text-[#10143A] transition-all">
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
