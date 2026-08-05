"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Calendar, User, ArrowRight, TrendingUp } from "lucide-react";
import { articles } from "@/lib/newsData";

export default function NewsroomFeed() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const sectionRef = useRef<HTMLDivElement>(null);
  const featuredImgRef = useRef<HTMLDivElement>(null);
  const secondaryGridRef = useRef<HTMLDivElement>(null);

  // Sync GSAP animations
  useEffect(() => {
    // 1. Featured Image Parallax
    if (featuredImgRef.current) {
      gsap.to(featuredImgRef.current.querySelector("img"), {
        yPercent: 12,
        ease: "none",
        scrollTrigger: {
          trigger: featuredImgRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }

    // 2. Secondary grid cards fade up stagger
    const cards = gsap.utils.toArray(".secondary-card-anim");
    if (cards.length > 0 && secondaryGridRef.current) {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: secondaryGridRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }



    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [activeFilter]); // re-bind when filter updates layout elements

  const filters = ["ALL", "CLUBS", "ACADEMY", "PLAYERS", "MATCHES", "INVESTORS"];

  // Mock mapped category lookup
  const filterMap: Record<string, string> = {
    CLUBS: "Club Updates",
    ACADEMY: "Academy",
    PLAYERS: "Academy", // Fallback mapping for demo purposes
    MATCHES: "Club Updates",
    INVESTORS: "Investor Updates",
  };

  // Filter logic
  const filteredGridArticles = articles.filter((art) => {
    if (activeFilter === "ALL") return true;
    const targetCategory = filterMap[activeFilter];
    return art.category === targetCategory;
  });

  // Featured Story (60% main left panel)
  const featuredStory = articles.find((a) => a.id === "building-next-generation") || articles[0];

  // Right Column Stack (3 articles)
  const rightColumnStack = [
    {
      id: "pondicherry-academy-expands",
      category: "Academy Update",
      title: "Young SuperStrikers Shine In State Championship",
      date: "August 01, 2026",
      image: "https://images.unsplash.com/photo-1518063319789-7217e6706b04?q=80&w=200&h=150&auto=format&fit=crop",
    },
    {
      id: "creating-football-pathways",
      category: "Club News",
      title: "Bangalore Super Strikers Begin New Season Campaign",
      date: "July 24, 2026",
      image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=200&h=150&auto=format&fit=crop",
    },
    {
      id: "grassroots-revolution",
      category: "Community",
      title: "Creating Football Opportunities For Young Talent",
      date: "July 10, 2026",
      image: "https://images.unsplash.com/photo-1544698310-74ea9d1c8258?q=80&w=200&h=150&auto=format&fit=crop",
    },
  ];

  // Secondary grid cards derived dynamically from filtered articles

  const trendingTopics = [
    "Bangalore Super Strikers FC",
    "Youth Development Program",
    "New Academy Initiatives",
    "Football Partnerships",
  ];

  return (
    <div ref={sectionRef} className="w-full bg-white text-[#101B4D] pt-0 pb-0">
      {/* 1. SECTION HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 pb-8 border-b border-gray-100">
          <div className="text-left flex flex-col gap-2 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2457D6]">
              LATEST STORIES
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#101B4D]">
              Inside The SuperStriker Football World
            </h2>
            <p className="text-sm text-[#4A5568] leading-relaxed mt-2">
              Stay updated with the latest stories from our clubs, academies, players, and football ecosystem.
            </p>
          </div>

          {/* Filter Navigation */}
          <div className="flex flex-wrap gap-1.5 shrink-0 bg-[#F5F7FC] p-1 rounded-full border border-gray-200/80 max-w-md lg:max-w-none">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-[#2457D6] text-white shadow-md shadow-[#2457D6]/20"
                    : "text-[#101B4D]/70 hover:text-[#101B4D] hover:bg-[#101B4D]/5"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. MAIN FEATURED NEWS LAYOUT (ASYMMETRIC GRID) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
        {/* Left Column (60%): Featured Card */}
        <div className="lg:col-span-7 flex h-full">
          <Link
            href={`/news/${featuredStory.id}`}
            className="group flex flex-col justify-between bg-white border border-[#2457D6]/15 rounded-2xl overflow-hidden shadow-sm hover:shadow-[0_15px_35px_rgba(36,87,214,0.12)] hover:border-[#2457D6]/40 transition-all duration-300 w-full"
            title={`Read ${featuredStory.title}`}
          >
            {/* Parallax image container */}
            <div ref={featuredImgRef} className="relative h-80 sm:h-[450px] w-full overflow-hidden">
              <Image
                src={featuredStory.image}
                alt="Featured Story action"
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101B4D] via-[#101B4D]/35 to-transparent" />
              <span className="absolute top-6 left-6 inline-flex bg-[#2457D6] text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-md">
                FEATURED
              </span>
              
              <div className="absolute bottom-6 left-6 right-6 text-white text-left flex flex-col gap-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#3FA9F5]">{featuredStory.category}</span>
                <h3 className="font-display text-xl sm:text-3xl font-bold uppercase tracking-tight leading-tight group-hover:text-[#3FA9F5] transition-colors">
                  {featuredStory.title}
                </h3>
              </div>
            </div>

            {/* Featured text metadata details */}
            <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between gap-6">
              <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed line-clamp-2 text-left">
                {featuredStory.description}
              </p>

              <div className="flex items-center justify-between border-t border-gray-100 pt-4 text-xs font-semibold text-[#4A5568]/60">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <User className="h-3.5 w-3.5" />
                    {featuredStory.author.name}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    {featuredStory.publishedDate}
                  </span>
                </div>
                
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#2457D6] group-hover:translate-x-1.5 transition-transform flex items-center gap-1">
                  Read Full Story
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* Right Column (40%): 3 Vertical Smaller News Cards */}
        <div className="lg:col-span-5 flex flex-col gap-6 h-full justify-between text-left">
          {rightColumnStack.map((card, idx) => (
            <Link
              key={idx}
              href={`/news/${card.id}`}
              className="group flex gap-4 bg-white border border-[#2457D6]/15 p-4 rounded-xl shadow-sm hover:shadow-[0_8px_20px_rgba(36,87,214,0.08)] hover:border-[#2457D6]/35 transition-all duration-300 items-center"
            >
              {/* Thumbnail image */}
              <div className="relative h-24 w-28 rounded-lg overflow-hidden shrink-0">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-550 group-hover:scale-105"
                />
              </div>

              {/* Card Meta details */}
              <div className="flex flex-col gap-1.5 justify-center">
                <span className="text-[9px] font-bold uppercase tracking-wider text-[#2457D6]">
                  {card.category}
                </span>
                <h4 className="font-display text-xs sm:text-sm font-bold uppercase tracking-tight text-[#101B4D] group-hover:text-[#2457D6] transition-colors leading-snug line-clamp-2">
                  {card.title}
                </h4>
                <span className="text-[9px] font-semibold text-[#4A5568]/50 flex items-center gap-1 mt-1">
                  <Calendar className="h-3 w-3" />
                  {card.date}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. SECONDARY NEWS GRID (4 COLUMNS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 text-left">
        <h3 className="font-display text-xs font-bold uppercase tracking-widest text-[#4A5568]/40 border-b border-gray-100 pb-3 mb-8">
          Secondary Editorial Spotlight
        </h3>

        <div ref={secondaryGridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredGridArticles.length > 0 ? (
            filteredGridArticles.slice(0, 4).map((card) => (
              <Link
                key={card.id}
                href={`/news/${card.id}`}
                className="secondary-card-anim group flex flex-col justify-between bg-white border border-[#2457D6]/15 rounded-xl overflow-hidden hover:shadow-[0_10px_22px_rgba(36,87,214,0.06)] hover:border-[#2457D6]/35 transition-all duration-300 flex-grow h-full"
              >
                {/* Image */}
                <div className="relative h-44 w-full overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 bg-[#2457D6] text-white px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider shadow-sm">
                    {card.category}
                  </span>
                </div>

                {/* Details */}
                <div className="p-4 flex-grow flex flex-col justify-between gap-4">
                  <div className="flex flex-col gap-2">
                    <h4 className="font-display text-sm font-bold uppercase tracking-tight text-[#101B4D] group-hover:text-[#2457D6] transition-colors leading-snug line-clamp-2">
                      {card.title}
                    </h4>
                    <p className="text-[11px] text-[#4A5568] leading-relaxed line-clamp-3">
                      {card.description}
                    </p>
                  </div>

                  <div className="border-t border-gray-100 pt-3 flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-wider text-[#4A5568]/50">
                    <User className="h-3 w-3" />
                    <span>{card.author.name}</span>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full text-center py-12 text-sm text-[#4A5568]/50 font-semibold">
              No secondary articles found matching this filter category.
            </div>
          )}
        </div>
      </section>

      {/* 4. TRENDING NEWS BAR (INFINITE TICKER) */}
      <section className="w-full bg-[#2457D6]/10 py-4 border-y border-[#2457D6]/20 overflow-hidden relative mb-0">
        <div className="absolute left-0 top-0 bottom-0 bg-[#101B4D] px-6 flex items-center gap-2 z-10 border-r border-white/10 text-white">
          <TrendingUp className="h-4.5 w-4.5 text-white" />
          <span className="text-xs font-black uppercase tracking-widest text-white whitespace-nowrap">TRENDING NOW</span>
        </div>
        <div className="flex items-center pl-48 animate-marquee-fast text-[#101B4D]">
          {trendingTopics.concat(trendingTopics).map((topic, idx) => (
            <span key={idx} className="text-xs font-black uppercase tracking-wider mx-10 text-[#101B4D]/90 flex items-center gap-2 whitespace-nowrap">
              <span className="text-[#2457D6] font-extrabold">→</span> {topic}
            </span>
          ))}
        </div>
      </section>

    </div>
  );
}
