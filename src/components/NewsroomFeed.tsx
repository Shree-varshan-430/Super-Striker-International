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
    image: "https://images.unsplash.com/photo-1624880357913-a8539238245b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    image: "https://images.unsplash.com/photo-1626248801379-51a0748a5f96?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    image: "https://images.unsplash.com/flagged/photo-1550413231-202a9d53a331?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    image: "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?q=80&w=800&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1518063319789-7217e6706b04?q=80&w=800&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1544698310-74ea9d1c8258?q=80&w=800&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop",
    category: "COMMUNITY",
    title: "Deploying training camps for underprivileged children",
    description: "Partnering with state councils to provide boots, kits, and professional licensed training guidelines.",
    author: "CSR Manager",
    date: "20 JUL 2026",
    readingTime: "4 MIN READ",
    articleUrl: "/news/grassroots-revolution"
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
    name: "Gavi",
    position: "Midfielder (BSS FC U-17)",
    journey: "From local school mud grounds in Bengaluru to representing Karnataka state in junior divisions.",
    image: "https://www.fcbarcelona.com/photo-resources/2026/07/21/1691acd3-0765-4dfc-9296-a3320c24240a/06-Gavi-BLUE.jpg?width=1200&height=750"
  },
  {
    name: "Lionel Messi",
    position: "Forward (BSS FC Senior)",
    journey: "Discovered during a district scouting camp in Pondicherry, now leading the attacking front line.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg/250px-Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg"
  },
  {
    name: "Harry Kane",
    position: "Goalkeeper (BSS FC Academy)",
    journey: "Integrated into our high-performance athletic training cohort with a 100% scholarship.",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Harry_Kane_England_v_Ghana_23_June_2026-219_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"
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
    image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=800&auto=format&fit=crop",
    youtubeUrl: "https://youtu.be/lEEXYnLJ_4I?si=pirUm48mNJc0ROrh"
  },
  {
    title: "Coach Conversations: The Blueprint For Victory",
    duration: "15:30",
    category: "COACH TALK",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=600&auto=format&fit=crop",
    youtubeUrl: "https://youtu.be/COACH_TALK_URL"
  },
  {
    title: "Founder Stories: Building A Football Empire",
    duration: "20:45",
    category: "LEADERSHIP",
    image: "https://images.unsplash.com/photo-1544698310-74ea9d1c8258?q=80&w=600&auto=format&fit=crop",
    youtubeUrl: "https://youtu.be/gnSLGcBaBSk?si=gtGM_V8Wp9ZkyzQH"
  },
  {
    title: "Match Highlights: Super Strikers vs State Academy",
    duration: "08:12",
    category: "HIGHLIGHTS",
    image: "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?q=80&w=600&auto=format&fit=crop",
    youtubeUrl: "https://youtu.be/NcmqUfKdTv8?si=0GEtIQXOEaF1Ch9e"
  },
  {
    title: "Academy Life: A Day In The Dorms & Pitch",
    duration: "12:05",
    category: "ACADEMY LIFE",
    image: "https://images.unsplash.com/photo-1431324155629-1a6edd1d141e?q=80&w=600&auto=format&fit=crop",
    youtubeUrl: "#"
  }
];

export default function NewsroomFeed() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Featured Story Cover Refs
  const featuredHeroRef = useRef<HTMLDivElement>(null);
  const featuredBgRef = useRef<HTMLDivElement>(null);
  const featuredCategoryRef = useRef<HTMLSpanElement>(null);
  const featuredHeadlineRef = useRef<HTMLHeadingElement>(null);
  const featuredDescRef = useRef<HTMLParagraphElement>(null);
  const featuredCtaRef = useRef<HTMLDivElement>(null);

  const gridContainerRef = useRef<HTMLDivElement>(null);
  const playerSectionRef = useRef<HTMLDivElement>(null);
  const mediaSectionRef = useRef<HTMLDivElement>(null);

  // Sync GSAP animations
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // 1. Featured Cover zoom/parallax on scroll
    if (featuredHeroRef.current && featuredBgRef.current) {
      gsap.fromTo(featuredBgRef.current.querySelector("img"),
        { scale: 1.1 },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: featuredHeroRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          }
        }
      );
    }

    // Featured Text reveals
    if (featuredHeroRef.current) {
      if (featuredCategoryRef.current) {
        gsap.fromTo(featuredCategoryRef.current,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: featuredHeroRef.current,
              start: "top 80%",
              toggleActions: "play none none none"
            }
          }
        );
      }
      if (featuredHeadlineRef.current) {
        gsap.fromTo(featuredHeadlineRef.current,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: featuredHeroRef.current,
              start: "top 80%",
              toggleActions: "play none none none"
            }
          }
        );
      }
      if (featuredDescRef.current) {
        gsap.fromTo(featuredDescRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: featuredHeroRef.current,
              start: "top 80%",
              toggleActions: "play none none none"
            }
          }
        );
      }
      if (featuredCtaRef.current) {
        gsap.fromTo(featuredCtaRef.current,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: featuredHeroRef.current,
              start: "top 80%",
              toggleActions: "play none none none"
            }
          }
        );
      }
    }

    // 2. Editorial Grid items stagger reveal
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

    // 3. Player Journeys reveal
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

    // 4. Video cards reveal
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
  }, [activeFilter]);

  const filterOptions = [
    "ALL", 
    "CLUB", 
    "ACADEMY", 
    "PLAYER JOURNEYS", 
    "FOUNDATION", 
    "COMMUNITY", 
    "INVESTORS", 
    "VIDEOS"
  ];

  // Resolve filter category mapping
  const getFilteredArticles = () => {
    if (activeFilter === "ALL") return STORIES_DATA;
    if (activeFilter === "VIDEOS") {
      return MEDIA_VIDEOS.map((vid, idx) => ({
        id: `video-${idx}`,
        image: vid.image,
        category: "VIDEOS" as const,
        title: vid.title,
        description: `SuperStriker media release - watch behind the scenes training sessions, highlights, and coach talks. Duration: ${vid.duration}`,
        author: vid.category,
        date: "LATEST RELEASE",
        readingTime: vid.duration,
        articleUrl: vid.youtubeUrl
      }));
    }
    return STORIES_DATA.filter((story) => story.category === activeFilter);
  };

  const filteredList = getFilteredArticles();

  // Asymmetric Grid layout mappings:
  // Large Big story card (50% width / col-span-2)
  // Two smaller stories (25% width each / col-span-1 each)
  const leftFeaturedCard = filteredList[0] || STORIES_DATA[0];
  const rightColumnStack = filteredList.slice(1, 3);
  const bottomRowGrid = filteredList.slice(3, 6);

  const trendingTopics = [
    "Bangalore Super Strikers FC season launch",
    "Under-15 residential academy registrations open",
    "District grassroots scouting camp schedules",
    "Infrastructure investor expansion plans"
  ];

  return (
    <div ref={sectionRef} className="w-full bg-white text-[#0A1028] pt-24 pb-0">
      
      {/* SECTION IDENTITY & DESCRIPTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center flex flex-col items-center gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-white bg-[#10143A] px-4 py-1.5 rounded-full shadow-md animate-pulse">
            INSIDE SUPERSTRIKER
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#0A1028] mt-2">
            The Official Storytelling Platform
          </h2>
          <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed max-w-2xl text-center">
            Explore the people, teams, and ideas behind SuperStriker International&apos;s mission to build India&apos;s next generation football ecosystem.
          </p>
          <div className="h-1 w-12 bg-[#10143A] mt-3" />
        </div>
      </section>

      {/* PART 1: FEATURED STORY HERO CARD */}
      <section 
        ref={featuredHeroRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 flex flex-col gap-6 text-left"
      >
        {/* Large Image container with 21:9 ratio on desktop, 16:9 on mobile (no border, square corners) */}
        <div ref={featuredBgRef} className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden rounded-md group shrink-0">
          <Image
            src="https://images.unsplash.com/photo-1434648957308-5e6a859697e8?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Inside SuperStriker Featured Cover Story"
            fill
            priority
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {/* Text details directly below image (No Card wrapper, clean spacing) */}
        <div className="flex flex-col gap-4 max-w-4xl">
          <div className="flex items-center gap-2">
            <span ref={featuredCategoryRef} className="text-[10px] font-black uppercase tracking-widest text-[#10143A] leading-none">
              FEATURED STORY
            </span>
            <div className="w-10 h-[2px] bg-[#F5D000]" />
          </div>

          <h1 
            ref={featuredHeadlineRef} 
            className="font-display text-3xl sm:text-5xl lg:text-7xl font-black uppercase tracking-tight text-[#10143A] leading-[1.05]"
          >
            Building India&apos;s Next Generation Of Football Champions
          </h1>
          
          <p ref={featuredDescRef} className="text-sm sm:text-base text-[#4B5563] leading-relaxed max-w-3xl">
            Discover how SuperStriker International is creating pathways for young footballers through clubs, academies, and grassroots development.
          </p>

          {/* Metadata and CTA */}
          <div ref={featuredCtaRef} className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-t border-gray-100 pt-6 mt-2">
            <div className="flex items-center gap-4 text-xs font-bold text-[#4B5563]/60 uppercase tracking-wider">
              <span className="flex items-center gap-1.5"><User className="h-4 w-4 text-[#10143A]" /> Ramakrishnan</span>
              <span>•</span>
              <span>12 AUG 2026</span>
              <span>•</span>
              <span>5 MIN READ</span>
            </div>

            <Link
              href="/news/building-next-generation"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#10143A] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#10143A] bg-transparent hover:bg-[#10143A] hover:text-white transition-all hover:scale-105 active:scale-95 shadow-sm"
            >
              READ STORY
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* PART 3: CATEGORY FILTER SYSTEM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-8 border-b border-gray-150 pb-4">
          {filterOptions.map((opt) => (
            <button
              key={opt}
              onClick={() => setActiveFilter(opt)}
              className="relative px-2 py-2 text-xs font-bold uppercase tracking-widest transition-colors duration-300 text-[#10143A]/70 hover:text-[#10143A]"
            >
              {opt}
              {activeFilter === opt && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#10143A] rounded-full animate-underline-grow" />
              )}
            </button>
          ))}
        </div>
      </section>

      {/* PART 2: LATEST STORIES EDITORIAL GRID */}
      <section ref={gridContainerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        {filteredList.length > 0 ? (
          <div className="flex flex-col gap-12">
            
            {/* Top row asymmetry: Left card is 50% width, two right cards are 25% width each */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              
              {/* Left Column (50%): Large big story block (No borders, No background wrapper) */}
              <div className="md:col-span-2 magazine-grid-card">
                <Link
                  href={leftFeaturedCard.articleUrl}
                  className="group flex flex-col gap-4 text-left"
                >
                  {/* Image with 16:9 aspect ratio, subtle rounding */}
                  <div className="relative aspect-[16/9] w-full overflow-hidden rounded-md shrink-0">
                    <Image
                      src={leftFeaturedCard.image}
                      alt={leftFeaturedCard.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
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
                    {/* Image with 16:9 aspect ratio */}
                    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-md shrink-0">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
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

            {/* Bottom Row: Three additional spotlight story blocks */}
            {bottomRowGrid.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-4 text-left">
                {bottomRowGrid.map((card) => (
                  <div key={card.id} className="magazine-grid-card">
                    <Link
                      href={card.articleUrl}
                      className="group flex flex-col gap-4 text-left"
                    >
                      {/* Image with 16:9 aspect ratio */}
                      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-md shrink-0">
                        <Image
                          src={card.image}
                          alt={card.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
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
            )}

          </div>
        ) : (
          <div className="text-center py-16 border border-dashed border-gray-200 rounded-2xl text-sm text-[#4B5563]/50 font-semibold">
            No articles found matching this filter category.
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
            <span className="text-[10px] font-black uppercase tracking-widest text-[#F5D000]">
              VIDEO STORYTELLING
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mt-1">
              SUPERSTRIKER MEDIA
            </h2>
            <p className="text-xs sm:text-sm text-white/70 max-w-xl">
              Watch exclusive academy documentaries, player scouting releases, and leadership interviews directly from the training pitches.
            </p>
            <div className="h-1 w-12 bg-[#F5D000] mt-2" />
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
                    <div className="h-12 w-12 rounded-full bg-[#F5D000] flex items-center justify-center shadow-lg group-hover:scale-110 active:scale-95 transition-transform duration-300 relative">
                      <Play className="h-5 w-5 text-[#10143A] fill-[#10143A] ml-0.5" />
                      <span className="absolute inset-0 rounded-full border border-[#F5D000] animate-ping opacity-60" />
                    </div>
                  </div>
                  
                  {/* Category label */}
                  <span className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-[#F5D000] px-2.5 py-0.5 rounded text-[8px] font-black tracking-widest uppercase">
                    {video.category}
                  </span>

                  {/* Duration label */}
                  <span className="absolute bottom-4 right-4 bg-black/80 text-white px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider">
                    {video.duration}
                  </span>
                </div>

                {/* Meta Details below image */}
                <div className="flex flex-col gap-1.5">
                  <h4 className="font-display text-sm sm:text-base font-bold uppercase text-white leading-snug group-hover:text-[#F5D000] transition-colors line-clamp-2">
                    {video.title}
                  </h4>
                  <div className="flex items-center gap-1.5 text-[9px] font-semibold text-white/50 tracking-wider">
                    <BookOpen className="h-3.5 w-3.5 text-[#F5D000]" />
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
