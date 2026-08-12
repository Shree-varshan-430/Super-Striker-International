"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Calendar, User, ArrowRight, TrendingUp, Play, Shield, BookOpen } from "lucide-react";

interface StoryArticle {
  id: string;
  image: string;
  category: "CLUB" | "ACADEMY" | "PLAYER JOURNEYS" | "FOUNDATION" | "COMMUNITY" | "INVESTORS" | "VIDEOS";
  title: string;
  description: string;
  author: string;
  date: string;
  readingTime: string;
  articleUrl: string;
}

const STORIES_DATA: StoryArticle[] = [
  {
    id: "building-next-generation",
    image: "/images/news-player-development.jpg",
    category: "ACADEMY",
    title: "Building India's Next Generation Of Football Champions",
    description: "Discover how SuperStriker International is creating pathways for young footballers through clubs, academies, and grassroots development.",
    author: "Ramakrishnan",
    date: "12 AUG 2026",
    readingTime: "5 MIN READ",
    articleUrl: "/news/building-next-generation"
  },
  {
    id: "bss-new-chapter",
    image: "/images/news-chennai-league.jpg",
    category: "CLUB",
    title: "Bangalore Super Strikers begins a new football chapter",
    description: "Establishing new training schedules, expanding senior squads, and targeting national league registrations.",
    author: "Editorial Team",
    date: "10 AUG 2026",
    readingTime: "4 MIN READ",
    articleUrl: "/news/grassroots-revolution"
  },
  {
    id: "philosophy-pathways",
    image: "/images/news-scouting.jpg",
    category: "ACADEMY",
    title: "Inside our player development philosophy",
    description: "A deep dive into how structured drills, athletic profiling, and sports nutrition form our syllabus.",
    author: "Technical Director",
    date: "08 AUG 2026",
    readingTime: "6 MIN READ",
    articleUrl: "/news/creating-football-pathways"
  },
  {
    id: "from-grassroots-to-pro",
    image: "/images/match-1.jpg",
    category: "PLAYER JOURNEYS",
    title: "From grassroots football to competitive dreams",
    description: "Follow the story of our academy graduates stepping into state division league squads.",
    author: "Youth Coach",
    date: "05 AUG 2026",
    readingTime: "3 MIN READ",
    articleUrl: "/news/building-next-generation"
  },
  {
    id: "creating-opportunities",
    image: "/images/news-grassroots.jpg",
    category: "FOUNDATION",
    title: "Creating opportunities through football",
    description: "Unlocking regional talent grids, setting up matches in rural clusters, and local club registrations.",
    author: "Community Lead",
    date: "02 AUG 2026",
    readingTime: "4 MIN READ",
    articleUrl: "/news/grassroots-revolution"
  },
  {
    id: "investor-milestones-q3",
    image: "/images/news-pitch-sponsorship.jpg",
    category: "INVESTORS",
    title: "Unlocking structural expansion models for South India",
    description: "Announcing new infrastructure turf blueprints and commercial sponsorship packages for investors.",
    author: "CFO SuperStriker",
    date: "28 JUL 2026",
    readingTime: "5 MIN READ",
    articleUrl: "/news/creating-football-pathways"
  },
  {
    id: "community-impact-pitch",
    image: "/images/news-underpriv-camp.jpg",
    category: "COMMUNITY",
    title: "Deploying training camps for underprivileged children",
    description: "Partnering with state councils to provide boots, kits, and professional licensed training guidelines.",
    author: "CSR Manager",
    date: "20 JUL 2026",
    readingTime: "4 MIN READ",
    articleUrl: "/news/grassroots-revolution"
  },
  {
    id: "pondicherry-blueprints",
    image: "/images/news-pondicherry-scout.jpg",
    category: "ACADEMY",
    title: "Pondicherry youth development scouting blueprint",
    description: "Establishing district-wide training clinics to discover promising sub-junior candidates and draft them directly into the state leagues.",
    author: "Regional Director",
    date: "15 JUL 2026",
    readingTime: "4 MIN READ",
    articleUrl: "/news/grassroots-revolution"
  },
  {
    id: "commercial-expansion-2026",
    image: "/images/training-1.jpg",
    category: "INVESTORS",
    title: "Commercial partnerships and branding sponsorship expansions",
    description: "Securing dual-tier sponsorship pacts with corporate retail brands to fund academy turf lighting and coaching workshops.",
    author: "Commercial Manager",
    date: "10 JUL 2026",
    readingTime: "5 MIN READ",
    articleUrl: "/news/creating-football-pathways"
  },
  {
    id: "tactical-goalkeeper-coaching",
    image: "/images/news-goalkeeping.jpg",
    category: "ACADEMY",
    title: "Modern goalkeeper coaching advancements",
    description: "Integrating high-speed video feedback, reaction-time sensory drills, and positioning algorithms for BSS FC keepers.",
    author: "Lead Goalkeeping Coach",
    date: "05 JUL 2026",
    readingTime: "4 MIN READ",
    articleUrl: "/news/building-next-generation"
  }
];

interface PlayerJourney {
  name: string;
  position: string;
  journey: string;
  image: string;
}

const PLAYER_JOURNEYS: PlayerJourney[] = [
  {
    name: "Aditya Kumar",
    position: "Midfielder (BSS FC U-17)",
    journey: "From local school mud grounds in Bengaluru to representing Karnataka state in junior divisions.",
    image: "/images/training-1.jpg"
  },
  {
    name: "Sanjay Raj",
    position: "Forward (BSS FC Senior)",
    journey: "Discovered during a district scouting camp in Pondicherry, now leading the attacking front line.",
    image: "/images/match-1.jpg"
  },
  {
    name: "Vikram Seth",
    position: "Goalkeeper (BSS FC Academy)",
    journey: "Integrated into our high-performance athletic training cohort with a 100% scholarship.",
    image: "/images/match-2.jpg"
  }
];

interface MediaVideo {
  title: string;
  duration: string;
  category: string;
  image: string;
  youtubeUrl: string;
}

const MEDIA_VIDEOS: MediaVideo[] = [
  {
    title: "Behind The Training Ground: Tactical Drills",
    duration: "10:15",
    category: "TRAINING GROUND",
    image: "/images/training-1.jpg",
    youtubeUrl: "#"
  },
  {
    title: "Coach Conversations: The Blueprint For Victory",
    duration: "15:30",
    category: "COACH TALK",
    image: "/images/training-2.jpg",
    youtubeUrl: "#"
  },
  {
    title: "Founder Stories: Building A Football Empire",
    duration: "20:45",
    category: "LEADERSHIP",
    image: "/images/team-1.jpg",
    youtubeUrl: "#"
  },
  {
    title: "Match Highlights: Super Strikers vs State Academy",
    duration: "08:12",
    category: "HIGHLIGHTS",
    image: "/images/match-1.jpg",
    youtubeUrl: "#"
  },
  {
    title: "Academy Life: A Day In The Dorms & Pitch",
    duration: "12:05",
    category: "ACADEMY LIFE",
    image: "/images/match-2.jpg",
    youtubeUrl: "#"
  }
];

export default function NewsroomFeed() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const gridContainerRef = useRef<HTMLDivElement>(null);
  const playerSectionRef = useRef<HTMLDivElement>(null);
  const mediaSectionRef = useRef<HTMLDivElement>(null);

  // Sync GSAP animations
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // 1. Editorial Grid items stagger reveal
    const gridCards = gsap.utils.toArray(".magazine-grid-card");
    if (gridCards.length > 0 && gridContainerRef.current) {
      gsap.fromTo(
        gridCards,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: gridContainerRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // 2. Player Journeys reveal
    const playerCards = gsap.utils.toArray(".player-portrait-card");
    if (playerCards.length > 0 && playerSectionRef.current) {
      gsap.fromTo(
        playerCards,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: playerSectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // 3. Video cards reveal
    const videoCards = gsap.utils.toArray(".media-video-card");
    if (videoCards.length > 0 && mediaSectionRef.current) {
      gsap.fromTo(
        videoCards,
        { opacity: 0, scale: 0.9, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: mediaSectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  // Asymmetric Grid layout mappings (Man City style):
  const latestNewsList = STORIES_DATA.slice(0, 3);
  const leftFeaturedCard = latestNewsList[0];
  const rightColumnStack = latestNewsList.slice(1, 3);

  const clubUpdatesList = STORIES_DATA.filter(
    (story) => 
      story.id === "from-grassroots-to-pro" || 
      story.id === "creating-opportunities" ||
      story.id === "bss-new-chapter"
  );

  const academyFocusList = STORIES_DATA.filter(
    (story) => 
      story.id === "pondicherry-blueprints" || 
      story.id === "tactical-goalkeeper-coaching" ||
      story.id === "building-next-generation" ||
      story.id === "philosophy-pathways"
  );

  const corporateCommunityList = STORIES_DATA.filter(
    (story) => 
      story.id === "investor-milestones-q3" || 
      story.id === "community-impact-pitch" || 
      story.id === "commercial-expansion-2026"
  );

  const trendingTopics = [
    "Bangalore Super Strikers FC season launch",
    "Under-15 residential academy registrations open",
    "District grassroots scouting camp schedules",
    "Infrastructure investor expansion plans"
  ];

  return (
    <div ref={sectionRef} className="w-full bg-white text-[#0A1028] pt-24 pb-0">
      
      {/* SECTION IDENTITY & DESCRIPTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex flex-col items-start gap-3 text-left">
          <h2 className="font-display text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#0A1028] mt-2">
            INSIDE SUPERSTRIKER
          </h2>
          <h3 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#10143A] bg-[#10143A]/5 px-4 py-1.5 rounded-full shadow-sm mt-1">
            THE OFFICIAL STORYTELLING PLATFORM
          </h3>
          <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed max-w-2xl mt-2">
            Stories, journeys, and moments shaping the future of football. Explore the people, teams, and ideas behind SuperStriker International&apos;s mission.
          </p>
          <div className="h-1 w-12 bg-[#10143A] mt-4" />
        </div>
      </section>

      {/* PART 2: LATEST STORIES EDITORIAL GRID */}
      <section ref={gridContainerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        {STORIES_DATA.length > 0 ? (
          <div className="flex flex-col gap-20">
            
            {/* Section 1: LATEST NEWS */}
            <div className="flex flex-col gap-8">
              <div className="flex flex-col items-start gap-2 text-left border-b border-gray-100 pb-4 mb-4">
                <span className="text-[9px] font-black uppercase tracking-widest text-[#10143A]/50">Coverage</span>
                <h3 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#10143A]">
                  LATEST NEWSROOM COVERAGE
                </h3>
              </div>
              
              {/* Top row asymmetry: Left card is 50% width, two right cards are 25% width each */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                
                {/* Left Column (50%): Large big story block */}
                <div className="md:col-span-2 magazine-grid-card">
                  <Link
                    href={leftFeaturedCard.articleUrl}
                    className="group flex flex-col gap-4 text-left"
                  >
                    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-md shrink-0">
                      <Image
                        src={leftFeaturedCard.image}
                        alt={leftFeaturedCard.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-w-768px) 100vw, 600px"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#10143A] leading-none mb-1 block">
                        {leftFeaturedCard.category}
                      </span>
                      <h4 className="font-display text-xl sm:text-2xl font-black uppercase tracking-tight text-[#10143A] leading-snug group-hover:opacity-85 transition-opacity">
                        {leftFeaturedCard.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed line-clamp-3 mt-1">
                        {leftFeaturedCard.description}
                      </p>
                      <div className="flex items-center gap-3 text-[10px] font-bold text-[#4B5563]/60 uppercase tracking-wider mt-3">
                        <span className="flex items-center gap-1"><User className="h-3.5 w-3.5 text-[#10143A]" /> {leftFeaturedCard.author}</span>
                        <span>•</span>
                        <span>{leftFeaturedCard.date}</span>
                        <span>•</span>
                        <span>{leftFeaturedCard.readingTime}</span>
                      </div>
                    </div>
                  </Link>
                </div>

                {/* Right Columns (25% each): Two smaller story blocks */}
                {rightColumnStack.map((card, idx) => (
                  <div key={idx} className="md:col-span-1 magazine-grid-card">
                    <Link
                      href={card.articleUrl}
                      className="group flex flex-col gap-4 text-left"
                    >
                      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-md shrink-0">
                        <Image
                          src={card.image}
                          alt={card.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-w-768px) 100vw, 300px"
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <span className="text-[10px] font-black uppercase tracking-widest text-[#10143A] leading-none mb-1 block">
                          {card.category}
                        </span>
                        <h4 className="font-display text-base sm:text-lg font-black uppercase tracking-tight text-[#10143A] leading-snug line-clamp-3 group-hover:opacity-85 transition-opacity">
                          {card.title}
                        </h4>
                        <div className="flex items-center gap-2 text-[9px] font-bold text-[#4B5563]/60 uppercase tracking-wider mt-2">
                          <span>{card.date}</span>
                          <span>•</span>
                          <span>{card.readingTime}</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* POSTER 1: Academy & Development */}
            <div className="relative w-full h-[320px] rounded-2xl overflow-hidden shadow-lg group">
              <Image
                src="/images/training-1.jpg"
                alt="Academy Development"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                sizes="(max-w-1200px) 100vw, 1200px"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#10143A] via-[#10143A]/80 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-center items-start p-8 sm:p-12 max-w-xl text-left gap-4">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#DCE135] bg-[#DCE135]/15 px-3 py-1 rounded-full">
                  Elite Academy
                </span>
                <h3 className="font-display text-2xl sm:text-4xl font-black uppercase tracking-tight text-white leading-tight">
                  TRAIN WITH THE BEST
                </h3>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed line-clamp-2">
                  Bangalore Football School residential academies are scout-compliant pathways to national leagues and first-team selection.
                </p>
                <Link
                  href="/football-school/bangalore-football-school"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white border-b-2 border-[#DCE135] pb-0.5 hover:text-[#DCE135] transition-colors mt-2"
                >
                  Explore Academy Pathways
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Section 2: CLUB & SQUAD UPDATES */}
            <div className="flex flex-col gap-8">
              <div className="flex flex-col items-start gap-2 text-left border-b border-gray-100 pb-4 mb-4">
                <span className="text-[9px] font-black uppercase tracking-widest text-[#10143A]/50">Affiliated Clubs</span>
                <h3 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#10143A]">
                  CLUB & SQUAD UPDATES
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-left">
                {clubUpdatesList.map((card) => (
                  <div key={card.id} className="magazine-grid-card">
                    <Link
                      href={card.articleUrl}
                      className="group flex flex-col gap-4 text-left"
                    >
                      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-md shrink-0">
                        <Image
                          src={card.image}
                          alt={card.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-w-768px) 100vw, 300px"
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <span className="text-[10px] font-black uppercase tracking-widest text-[#10143A] leading-none mb-1 block">
                          {card.category}
                        </span>
                        <h4 className="font-display text-base sm:text-lg font-black uppercase tracking-tight text-[#10143A] leading-snug line-clamp-2 group-hover:opacity-85 transition-opacity">
                          {card.title}
                        </h4>
                        <p className="text-xs text-[#4B5563] leading-relaxed line-clamp-2">
                          {card.description}
                        </p>
                        <div className="flex items-center gap-3 text-[9px] font-bold text-[#4B5563]/60 uppercase tracking-wider mt-2">
                          <span className="flex items-center gap-1"><User className="h-3 w-3 text-[#10143A]" /> {card.author}</span>
                          <span>•</span>
                          <span>{card.date}</span>
                          <span>•</span>
                          <span>{card.readingTime}</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* POSTER 2: Investor & Expansion */}
            <div className="relative w-full h-[320px] rounded-2xl overflow-hidden shadow-lg group">
              <Image
                src="/images/news-pitch-sponsorship.jpg"
                alt="Corporate Investment"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                sizes="(max-w-1200px) 100vw, 1200px"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#10143A] via-[#10143A]/80 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-center items-start p-8 sm:p-12 max-w-xl text-left gap-4">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#DCE135] bg-[#DCE135]/15 px-3 py-1 rounded-full">
                  Investments
                </span>
                <h3 className="font-display text-2xl sm:text-4xl font-black uppercase tracking-tight text-white leading-tight">
                  INVEST IN FOOTBALL WEALTH
                </h3>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed line-clamp-2">
                  Discover franchise ownership and commercial sponsorship opportunities in South India&apos;s fastest-growing football club league network.
                </p>
                <Link
                  href="/investors#enquire"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white border-b-2 border-[#DCE135] pb-0.5 hover:text-[#DCE135] transition-colors mt-2"
                >
                  Inquire Now
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Section 3: ACADEMY FOCUS */}
            <div className="flex flex-col gap-8">
              <div className="flex flex-col items-start gap-2 text-left border-b border-gray-100 pb-4 mb-4">
                <span className="text-[9px] font-black uppercase tracking-widest text-[#10143A]/50">Development Syllabuses</span>
                <h3 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#10143A]">
                  ACADEMY & TRAINING FOCUS
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-left">
                {academyFocusList.map((card) => (
                  <div key={card.id} className="magazine-grid-card">
                    <Link
                      href={card.articleUrl}
                      className="group flex flex-col gap-4 text-left"
                    >
                      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-md shrink-0">
                        <Image
                          src={card.image}
                          alt={card.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-w-768px) 100vw, 300px"
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <span className="text-[10px] font-black uppercase tracking-widest text-[#10143A] leading-none mb-1 block">
                          {card.category}
                        </span>
                        <h4 className="font-display text-base sm:text-lg font-black uppercase tracking-tight text-[#10143A] leading-snug line-clamp-2 group-hover:opacity-85 transition-opacity">
                          {card.title}
                        </h4>
                        <p className="text-xs text-[#4B5563] leading-relaxed line-clamp-2">
                          {card.description}
                        </p>
                        <div className="flex items-center gap-3 text-[9px] font-bold text-[#4B5563]/60 uppercase tracking-wider mt-2">
                          <span className="flex items-center gap-1"><User className="h-3.5 w-3.5 text-[#10143A]" /> {card.author}</span>
                          <span>•</span>
                          <span>{card.date}</span>
                          <span>•</span>
                          <span>{card.readingTime}</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 4: CORPORATE & COMMUNITY IMPACT */}
            <div className="flex flex-col gap-8">
              <div className="flex flex-col items-start gap-2 text-left border-b border-gray-100 pb-4 mb-4">
                <span className="text-[9px] font-black uppercase tracking-widest text-[#10143A]/50">Ecosystem growth</span>
                <h3 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#10143A]">
                  CORPORATE & COMMUNITY IMPACT
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-left">
                {corporateCommunityList.map((card) => (
                  <div key={card.id} className="magazine-grid-card">
                    <Link
                      href={card.articleUrl}
                      className="group flex flex-col gap-4 text-left"
                    >
                      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-md shrink-0">
                        <Image
                          src={card.image}
                          alt={card.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-w-768px) 100vw, 300px"
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <span className="text-[10px] font-black uppercase tracking-widest text-[#10143A] leading-none mb-1 block">
                          {card.category}
                        </span>
                        <h4 className="font-display text-base sm:text-lg font-black uppercase tracking-tight text-[#10143A] leading-snug line-clamp-2 group-hover:opacity-85 transition-opacity">
                          {card.title}
                        </h4>
                        <p className="text-xs text-[#4B5563] leading-relaxed line-clamp-2">
                          {card.description}
                        </p>
                        <div className="flex items-center gap-3 text-[9px] font-bold text-[#4B5563]/60 uppercase tracking-wider mt-2">
                          <span className="flex items-center gap-1"><User className="h-3 w-3 text-[#10143A]" /> {card.author}</span>
                          <span>•</span>
                          <span>{card.date}</span>
                          <span>•</span>
                          <span>{card.readingTime}</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

          </div>
        ) : (
          <div className="text-center py-16 border border-dashed border-gray-200 rounded-2xl text-sm text-[#4B5563]/50 font-semibold">
            No articles found.
          </div>
        )}
      </section>

      {/* PART 4: PLAYER JOURNEYS */}
      <section 
        ref={playerSectionRef}
        className="w-full bg-[#F4F6FA] py-24 border-y border-gray-200/50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-left mb-16 flex flex-col gap-1 border-l-4 border-[#10143A] pl-6">
            <span className="text-[10px] font-black uppercase tracking-widest text-white leading-none bg-[#10143A] px-2.5 py-1 rounded w-fit">
              PLAYER JOURNEYS
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#0A1028] mt-2">
              Every player has a story before becoming a champion.
            </h2>
            <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed max-w-xl">
              Tracing the path from local training fields to senior competitive platforms and state league rosters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {PLAYER_JOURNEYS.map((player, idx) => (
              <div 
                key={idx} 
                className="player-portrait-card group flex flex-col gap-4 text-left"
              >
                {/* Player image aspect 3:4, rounded-md */}
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-md shrink-0">
                  <Image
                    src={player.image}
                    alt={player.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#10143A]/40 to-transparent z-10" />
                </div>
                
                {/* Details below image (No Card containers, no borders) */}
                <div className="flex flex-col gap-2">
                  <span className="text-[9px] font-black uppercase tracking-widest text-white bg-[#10143A] px-2.5 py-1 rounded w-fit leading-none">
                    {player.position}
                  </span>
                  <h4 className="font-display text-xl sm:text-2xl font-black uppercase text-[#10143A] tracking-tight">
                    {player.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                    {player.journey}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* PART 5: SUPERSTRIKER MEDIA */}
      <section 
        ref={mediaSectionRef}
        className="w-full bg-[#10143A] py-24 text-white relative overflow-hidden"
      >
        {/* Decorative Grid backdrop */}
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center flex flex-col items-center gap-2 mb-16">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#DCE135]">
              VIDEO STORYTELLING
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mt-1">
              SUPERSTRIKER MEDIA
            </h2>
            <p className="text-xs sm:text-sm text-white/70 max-w-xl">
              Watch exclusive academy documentaries, player scouting releases, and leadership interviews directly from the training pitches.
            </p>
            <div className="h-1 w-12 bg-[#DCE135] mt-2" />
          </div>

          {/* Videos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {MEDIA_VIDEOS.map((video, idx) => (
              <a 
                key={idx} 
                href={video.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="media-video-card group flex flex-col gap-4 text-left relative cursor-pointer"
              >
                {/* Thumbnail aspect 16:9 */}
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-md shrink-0">
                  <Image
                    src={video.image}
                    alt={video.title}
                    fill
                    className="object-cover opacity-70 group-hover:opacity-50 transition-all duration-500"
                  />
                  
                  {/* Pulsing Play Button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="h-12 w-12 rounded-full bg-[#DCE135] flex items-center justify-center shadow-lg group-hover:scale-110 active:scale-95 transition-transform duration-300 relative">
                      <Play className="h-5 w-5 text-[#10143A] fill-[#10143A] ml-0.5" />
                      <span className="absolute inset-0 rounded-full border border-[#DCE135] animate-ping opacity-60" />
                    </div>
                  </div>
                  
                  {/* Category label */}
                  <span className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-[#DCE135] px-2.5 py-0.5 rounded text-[8px] font-black tracking-widest uppercase">
                    {video.category}
                  </span>

                  {/* Duration label */}
                  <span className="absolute bottom-4 right-4 bg-black/80 text-white px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider">
                    {video.duration}
                  </span>
                </div>

                {/* Meta Details below image */}
                <div className="flex flex-col gap-1.5">
                  <h4 className="font-display text-sm sm:text-base font-bold uppercase text-white leading-snug group-hover:text-[#DCE135] transition-colors line-clamp-2">
                    {video.title}
                  </h4>
                  <div className="flex items-center gap-1.5 text-[9px] font-semibold text-white/50 tracking-wider">
                    <BookOpen className="h-3.5 w-3.5 text-[#DCE135]" />
                    <span>Watch Release</span>
                  </div>
                </div>
              </a>
            ))}
          </div>

        </div>
      </section>

      {/* PART 6: TRENDING TICKER BAR */}
      <section className="w-full bg-[#10143A]/5 py-4 border-y border-[#10143A]/10 overflow-hidden relative mb-0">
        <div className="absolute left-0 top-0 bottom-0 bg-[#10143A] px-6 flex items-center gap-2 z-10 border-r border-white/10 text-white">
          <TrendingUp className="h-4.5 w-4.5 text-white" />
          <span className="text-xs font-black uppercase tracking-widest text-white whitespace-nowrap">TRENDING NOW</span>
        </div>
        <div className="flex items-center pl-48 animate-marquee-fast text-[#0A1028]">
          {trendingTopics.concat(trendingTopics).map((topic, idx) => (
            <span key={idx} className="text-xs font-black uppercase tracking-wider mx-10 text-[#0A1028]/90 flex items-center gap-2 whitespace-nowrap">
              <span className="text-[#10143A] font-extrabold">→</span> {topic}
            </span>
          ))}
        </div>
      </section>

    </div>
  );
}
