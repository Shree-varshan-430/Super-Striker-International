"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
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
    thumbnail: "/images/training-1.jpg",
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
  }
];

export default function LatestFeed() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth * 0.75;
      const targetScroll =
        direction === "left"
          ? scrollLeft - scrollAmount
          : scrollLeft + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="py-20 bg-white border-b border-gray-100 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with section title and manual navigation controls */}
        <div className="flex justify-between items-end mb-10 pb-4 border-b border-gray-150">
          <div className="flex flex-col items-start gap-1 text-left border-l-4 border-[#10143A] pl-4">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#DCE135] bg-[#10143A] px-2.5 py-0.5 rounded">
              LATEST STORIES
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#0A1028] mt-1">
              NEWS & MEDIA COVERAGE
            </h2>
          </div>
          
          {/* Scroll Buttons */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-[#10143A] hover:bg-[#10143A] hover:text-white transition-all active:scale-95 shadow-sm"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-[#10143A] hover:bg-[#10143A] hover:text-white transition-all active:scale-95 shadow-sm"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Scroll Container */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory scrollbar-none select-none scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {LATEST_ITEMS.map((item) => (
            <div 
              key={item.slug} 
              className="w-[280px] sm:w-[320px] md:w-[360px] flex-shrink-0 snap-start"
            >
              <NewsCard item={item} />
            </div>
          ))}

          {/* "View More" Final Card */}
          <div className="w-[280px] sm:w-[320px] md:w-[360px] flex-shrink-0 snap-start">
            <Link 
              href="/news"
              className="flex flex-col items-center justify-center h-full min-h-[300px] border-2 border-dashed border-gray-200 rounded-lg group p-6 text-center hover:border-[#10143A] transition-all hover:bg-gray-50/50"
            >
              <div className="w-12 h-12 rounded-full bg-[#10143A]/5 text-[#10143A] flex items-center justify-center mb-4 group-hover:bg-[#DCE135] transition-all">
                <ArrowRight className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="font-display text-base font-black uppercase tracking-tight text-[#0A1028]">
                Explore All News
              </h3>
              <p className="text-xs text-[#4B5563] mt-2 max-w-[200px]">
                Read full articles, match statistics, and watch training telemetry reviews.
              </p>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
