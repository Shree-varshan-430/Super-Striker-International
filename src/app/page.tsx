"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, ArrowUpRight, Shield, ChevronLeft, ChevronRight } from "lucide-react";
import NewsroomFeed from "@/components/NewsroomFeed";
import FootballLoader from "@/components/FootballLoader";

interface HeroSlide {
  image: string;
  category: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    image: "https://images.unsplash.com/photo-1622659097972-68f1d8c1829f?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "FEATURED",
    title: "Building The Future Of Indian Football",
    description: "Creating opportunities, developing talent, and building a football ecosystem for the next generation.",
    ctaText: "Explore Our Journey",
    ctaLink: "/about"
  },
  {
    image: "https://images.unsplash.com/photo-1600250395178-40fe752e5189?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "FOUNDATION",
    title: "From Grassroots To Greatness",
    description: "Discover our football foundations, academies, and player development pathway.",
    ctaText: "Explore Ecosystem",
    ctaLink: "/ecosystem"
  },
  {
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1293&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "OUR VISION",
    title: "Investing In The Future Of Indian Football",
    description: "Building sustainable football pathways through clubs, academies, partnerships, and community development.",
    ctaText: "Partner With Us",
    ctaLink: "/investors#enquire"
  }
];

interface FoundationSlide {
  num: string;
  label: string;
  title: string;
  description: string;
  detailsLabel?: string;
  detailsValue?: string;
  ctaText: string;
  ctaLink: string;
  image: string;
  logo: string;
}

const FOUNDATION_SLIDES: FoundationSlide[] = [
  {
    num: "01",
    label: "FOUNDATION 01",
    title: "BANGALORE SUPER STRIKERS FC",
    description: "The flagship football club building pathways for young players through professional coaching, competitive opportunities, and grassroots development.",
    detailsLabel: "AFFILIATED WITH",
    detailsValue: "Karnataka State Football Association",
    ctaText: "EXPLORE CLUB",
    ctaLink: "/clubs/bangalore-super-strikers-fc",
    image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1600&auto=format&fit=crop",
    logo: "BSS"
  },
  {
    num: "02",
    label: "FOUNDATION 02",
    title: "PONDICHERRY SUPER STRIKERS FC",
    description: "Expanding the SuperStriker football vision by creating new opportunities for players and communities through structured football development.",
    detailsLabel: "DEVELOPMENT COHORT",
    detailsValue: "Residential U-15 Academy Program",
    ctaText: "EXPLORE CLUB",
    ctaLink: "/clubs/pondicherry-super-strikers-fc",
    image: "https://images.unsplash.com/photo-1518063319789-7217e6706b04?q=80&w=1600&auto=format&fit=crop",
    logo: "PSS"
  },
  {
    num: "03",
    label: "FOUNDATION 03",
    title: "CHENNAI SUPER STRIKERS FC",
    description: "Developing football talent and building a connected football ecosystem across South India.",
    detailsLabel: "REPRESENTING DIVISION",
    detailsValue: "Metro League Registry representation",
    ctaText: "EXPLORE CLUB",
    ctaLink: "/clubs/chennai-super-strikers-fc",
    image: "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?q=80&w=1600&auto=format&fit=crop",
    logo: "CSS"
  },
  {
    num: "04",
    label: "FOUNDATION 04",
    title: "BANGALORE FOOTBALL SCHOOL",
    description: "Creating the foundation for young footballers through quality coaching, technical development, and a positive learning environment.",
    detailsLabel: "TRAINING AGE BRACKETS",
    detailsValue: "Under-9, Under-12 & Under-15 Category",
    ctaText: "VISIT ACADEMY",
    ctaLink: "/football-school/bangalore-football-school",
    image: "https://images.unsplash.com/photo-1431324155629-1a6edd1d141e?q=80&w=1600&auto=format&fit=crop",
    logo: "BFS"
  }
];

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem("loader-complete")) {
      const timer = setTimeout(() => setLoading(false), 0);
      return () => clearTimeout(timer);
    }
  }, []);

  // DOM Refs for GSAP
  const chaptersTriggerRef = useRef<HTMLDivElement>(null);
  const chaptersContainerRef = useRef<HTMLDivElement>(null);
  const businessSectionRef = useRef<HTMLDivElement>(null);
  const featureBannerRef = useRef<HTMLDivElement>(null);

  // Carousel slider state & interaction refs
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const progressTweenRef = useRef<gsap.core.Tween | null>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  // Carousel slider animations and progress timeline
  useEffect(() => {
    const progressBar = document.getElementById("hero-progress-bar");
    if (progressBar) {
      gsap.set(progressBar, { width: "0%" });
      if (progressTweenRef.current) progressTweenRef.current.kill();
      
      progressTweenRef.current = gsap.to(progressBar, {
        width: "100%",
        duration: 6,
        ease: "none",
        onComplete: nextSlide
      });
    }

    const activeSlideEl = document.querySelector(`.slide-text-content-${currentSlide}`);
    if (activeSlideEl) {
      const category = activeSlideEl.querySelector(".slide-category");
      const headlineWords = activeSlideEl.querySelectorAll(".slide-headline .word-wrap span");
      const description = activeSlideEl.querySelector(".slide-description");
      const ctaButtons = activeSlideEl.querySelectorAll(".slide-cta");

      gsap.fromTo(category,
        { y: 15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
      );

      gsap.fromTo(headlineWords,
        { y: "100%", opacity: 0 },
        { y: "0%", opacity: 1, duration: 0.8, stagger: 0.03, ease: "power3.out" }
      );

      gsap.fromTo(description,
        { y: 15, opacity: 0 },
        { y: 0, opacity: 0.85, duration: 0.6, delay: 0.3, ease: "power2.out" }
      );

      gsap.fromTo(ctaButtons,
        { y: 15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, delay: 0.4, stagger: 0.05, ease: "power2.out" }
      );
    }

    const activeImgWrap = document.querySelector(`.slide-img-wrap-${currentSlide}`);
    if (activeImgWrap) {
      const activeImg = activeImgWrap.querySelector("img");
      if (activeImg) {
        gsap.fromTo(activeImg,
          { scale: 1.05, xPercent: -1, yPercent: -1 },
          { scale: 1.15, xPercent: 1, yPercent: 1, duration: 6, ease: "sine.out" }
        );
      }
    }
  }, [currentSlide]);

  // Initialize GSAP Scroll animations
  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // 3. Horizontal Scroll Pinning for Chapters (Clubs & School) - Full Screen Redesign
    if (chaptersTriggerRef.current && chaptersContainerRef.current) {
      const track = chaptersContainerRef.current;
      const trigger = chaptersTriggerRef.current;

      const pin = gsap.to(track, {
        x: () => -(track.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: trigger,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => `+=${track.scrollWidth}`,
          invalidateOnRefresh: true,
          snap: {
            snapTo: 1 / 3, // 4 slides total (0, 0.33, 0.66, 1.0)
            duration: 0.4,
            ease: "power2.out",
            delay: 0.02,
          },
          onUpdate: (self) => {
            const progress = self.progress;
            const slideIndex = Math.min(Math.floor(progress * 4), 3);
            
            const progressNum = document.getElementById("foundation-progress-num");
            const progressName = document.getElementById("foundation-progress-name");
            const progressLine = document.getElementById("foundation-progress-line");
            
            if (progressNum) progressNum.innerText = `0${slideIndex + 1} / 04`;
            if (progressName) progressName.innerText = FOUNDATION_SLIDES[slideIndex].title;
            if (progressLine) progressLine.style.width = `${progress * 100}%`;
          }
        },
      });

      // Entrance animations for each full-screen chapter slide
      const slides = track.querySelectorAll(".foundation-slide");
      slides.forEach((slide) => {
        const img = slide.querySelector("img");
        const textBlock = slide.querySelector(".foundation-text-block");
        const logoWrap = slide.querySelector(".foundation-logo-wrap");

        if (img) {
          gsap.fromTo(img,
            { scale: 1.15, xPercent: 8 },
            {
              scale: 1,
              xPercent: -8,
              ease: "none",
              scrollTrigger: {
                trigger: slide,
                containerAnimation: pin,
                start: "left right",
                end: "right left",
                scrub: true
              }
            }
          );
        }

        if (textBlock) {
          gsap.fromTo(textBlock,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: slide,
                containerAnimation: pin,
                start: "left 60%",
                toggleActions: "play none none reverse"
              }
            }
          );
        }

        if (logoWrap) {
          gsap.fromTo(logoWrap,
            { opacity: 0, scale: 0.8, rotateY: 30 },
            {
              opacity: 0.25,
              scale: 1,
              rotateY: 0,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: slide,
                containerAnimation: pin,
                start: "left 60%",
                toggleActions: "play none none reverse"
              }
            }
          );
        }
      });
    }



    // 4. Feature Banner Zoom Parallax
    if (featureBannerRef.current) {
      gsap.to(featureBannerRef.current.querySelector("img"), {
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

    // 5. Business Numbers Count Up
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

    // 6. Grid Cards Reveal (Moved to NewsroomFeed)

    // Recalculate ScrollTrigger parameters once images load and components settle
    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 600);

    return () => {
      clearTimeout(refreshTimer);
      // Clean up all GSAP bindings to avoid memory leaks
      ScrollTrigger.getAll().forEach((t) => t.kill());
      gsap.killTweensOf("*");
    };
  }, []);

  // Filter list & logic moved to NewsroomFeed

  const tickerText = [
    "BANGALORE SUPER STRIKERS FC COMPETING IN KSFA SENIOR DIVISION",
    "CHENNAI SUPER STRIKERS REGISTERED FOR METRO LEAGUE",
    "PONDICHERRY ACADEMY residential U-15 cohort launching",
    "INVESTOR PARTNERSHIP HUB OPENS FOR DISTRICT Infrastructure PROJECTS",
    "BANGALORE FOOTBALL SCHOOL INTRODUCES SMART TELEMETRY FOR ATHLETES",
  ];

  return (
    <>
      {loading && (
        <FootballLoader
          onComplete={() => {
            setLoading(false);
            sessionStorage.setItem("loader-complete", "true");
            // Force a global refresh of ScrollTrigger once the loader completes
            setTimeout(() => {
              ScrollTrigger.refresh();
            }, 100);
          }}
        />
      )}

      <div className="w-full bg-white text-[#0A1028] font-sans select-none">
      {/* 1. EDITORIAL HERO CAROUSEL */}
      <section 
        className="relative h-[90vh] min-h-[600px] w-full bg-[#10143A] text-white overflow-hidden select-none"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Full-bleed Slides Track */}
        <div className="absolute inset-0 w-full h-full">
          {HERO_SLIDES.map((slide, idx) => (
            <div
              key={idx}
              className={`slide-img-wrap-${idx} absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                idx === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={idx === 0}
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* Cinematic Gradient Overlays */}
        {/* Deep Navy overlay blending from transparent at top to solid Navy at bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#10143A]/10 via-[#10143A]/45 to-[#10143A] z-20 pointer-events-none" />

        {/* Centered Editorial Content Area */}
        <div className="max-w-7xl mx-auto w-full h-full px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-start pb-12 relative z-30 pointer-events-none">
          <div className="w-full max-w-3xl relative h-[380px] sm:h-[300px]">
            {HERO_SLIDES.map((slide, idx) => (
              <div
                key={idx}
                className={`slide-text-content-${idx} absolute top-0 left-0 w-full max-w-2xl flex flex-col gap-4 sm:gap-6 text-left items-start transition-opacity duration-500 pointer-events-auto ${
                  idx === currentSlide ? "opacity-100 z-20" : "opacity-0 z-0 pointer-events-none"
                }`}
              >
                <span className="slide-category text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#F5D000] leading-none">
                  {slide.category}
                </span>
                
                <h1 className="slide-headline font-display text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-[1.05] max-w-xl sm:max-w-2xl">
                  {slide.title.split(" ").map((word, wIdx) => (
                    <span key={wIdx} className="word-wrap inline-block overflow-hidden mr-2.5 sm:mr-3.5">
                      <span className="inline-block">{word}</span>
                    </span>
                  ))}
                </h1>

                <p className="slide-description text-xs sm:text-sm lg:text-base text-white/80 leading-relaxed max-w-md sm:max-w-xl text-left">
                  {slide.description}
                </p>

                <div className="slide-cta flex flex-wrap items-center justify-start gap-3 sm:gap-4 mt-1 sm:mt-2">
                  <Link 
                    href={slide.ctaLink} 
                    className="inline-flex items-center gap-2 rounded-full bg-[#F5D000] px-5 sm:px-6 py-3 sm:py-3.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#10143A] hover:bg-white hover:text-[#10143A] transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[#F5D000]/15"
                  >
                    {slide.ctaText}
                    <ArrowRight className="h-3.5 sm:h-4 w-3.5 sm:w-4" />
                  </Link>
                  <Link 
                    href="/investors" 
                    className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 sm:px-6 py-3 sm:py-3.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white hover:bg-white/10 transition-all hover:scale-105 active:scale-95"
                  >
                    Partner With Us
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Bottom Control Bar: Progress bar, current index info, manual navs */}
        <div className="absolute bottom-6 left-0 right-0 z-35 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between pointer-events-none">
          {/* Progress Indicator */}
          <div className="flex items-center gap-4 pointer-events-auto">
            <span className="font-display text-sm font-bold text-white tracking-widest">
              0{currentSlide + 1} / 0{HERO_SLIDES.length}
            </span>
            <div className="w-32 h-1 bg-white/20 rounded-full overflow-hidden relative">
              <div 
                id="hero-progress-bar" 
                className="absolute left-0 top-0 bottom-0 bg-[#F5D000] w-0" 
              />
            </div>
          </div>

          {/* Manual Arrow Buttons */}
          <div className="flex items-center gap-2 pointer-events-auto">
            <button
              onClick={prevSlide}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-[#10143A]/40 text-white hover:bg-white hover:text-[#10143A] hover:border-white transition-all active:scale-95"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextSlide}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-[#10143A]/40 text-white hover:bg-white hover:text-[#10143A] hover:border-white transition-all active:scale-95"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Latest Stories Marquee Ticker */}
      <div className="w-full bg-secondary-navy text-white py-4 border-y border-white/10 overflow-hidden relative">
        <div className="absolute left-0 top-0 bottom-0 bg-secondary-navy px-6 flex items-center gap-2 z-10 border-r border-white/10">
          <span className="flex h-2 w-2 rounded-full bg-primary-sky animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-widest text-primary-sky whitespace-nowrap">Latest Stories</span>
        </div>
        <div className="flex items-center pl-48 animate-marquee-slow">
          {tickerText.concat(tickerText).map((text, idx) => (
            <span key={idx} className="text-xs font-extrabold uppercase tracking-wider mx-8 text-white/80 whitespace-nowrap">
              {text} <span className="text-primary-sky ml-4">•</span>
            </span>
          ))}
        </div>
      </div>

      {/* 2. SUPERSTRIKER NEWSROOM (OPTIMIZED EDITORIAL FEED) */}
      <NewsroomFeed />

      {/* 3. OUR FOOTBALL FOUNDATION & ECOSYSTEM (GSAP SCROLLTRIGGER PINNING) */}
      <section 
        ref={chaptersTriggerRef} 
        className="relative w-full h-screen overflow-hidden bg-[#10143A]"
      >
        {/* Persistent progress bar & name indicator overlay */}
        <div className="absolute top-8 left-6 sm:top-12 sm:left-16 z-30 flex gap-6 sm:gap-12 items-center pointer-events-none select-none">
          <div className="flex flex-col text-left">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#F5D000] leading-none">CHAPTER</span>
            <span id="foundation-progress-num" className="font-display text-2xl sm:text-4xl font-black text-white leading-none mt-2">01 / 04</span>
          </div>
          
          {/* Progress Indicator line */}
          <div className="w-20 sm:w-48 h-1 bg-white/20 rounded-full overflow-hidden relative">
            <div id="foundation-progress-line" className="absolute left-0 top-0 bottom-0 bg-[#F5D000] w-0 transition-all duration-100" />
          </div>

          <div className="flex items-center gap-2 sm:gap-4 border-l border-white/10 pl-4 sm:pl-8 text-left">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#F5D000]/60 leading-none">ACTIVE STORY</span>
            <span id="foundation-progress-name" className="font-display text-sm sm:text-lg font-extrabold text-white leading-none uppercase tracking-tight truncate max-w-[120px] sm:max-w-xs">
              BANGALORE SUPER STRIKERS FC
            </span>
          </div>
        </div>

        {/* Main Horizontal Track */}
        <div ref={chaptersContainerRef} className="flex h-full w-[400vw] relative">
          {FOUNDATION_SLIDES.map((slide, idx) => (
            <div
              key={idx}
              className="foundation-slide w-screen h-screen flex-shrink-0 relative overflow-hidden flex items-center justify-center"
            >
              {/* Background Image with Cinematic Crop & Overlay */}
              <div className="absolute inset-0 w-full h-full pointer-events-none">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority={idx === 0}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[#10143A]/85 z-10" />
              </div>

              {/* Slide Content layout */}
              <div className="max-w-7xl mx-auto w-full h-full px-6 sm:px-16 lg:px-24 grid grid-cols-1 lg:grid-cols-12 items-center relative z-20">
                {/* Left Side Info */}
                <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-6 text-left foundation-text-block mt-16 sm:mt-0">
                  <span className="text-[10px] sm:text-sm font-bold uppercase tracking-widest text-[#F5D000]">
                    {slide.label}
                  </span>
                  <h2 className="font-display text-2xl sm:text-4xl lg:text-6xl font-black uppercase tracking-tight text-white leading-[1.05] max-w-2xl">
                    {slide.title}
                  </h2>
                  <p className="text-xs sm:text-base text-white/80 leading-relaxed max-w-xl">
                    {slide.description}
                  </p>
                  {slide.detailsLabel && (
                    <div className="flex flex-col border-t border-white/10 pt-3 sm:pt-4">
                      <span className="text-[8px] sm:text-[10px] uppercase tracking-wider text-white/50 font-bold">{slide.detailsLabel}</span>
                      <span className="text-xs sm:text-sm text-white font-bold mt-1">{slide.detailsValue}</span>
                    </div>
                  )}
                  <div className="pt-2">
                    <Link
                      href={slide.ctaLink}
                      className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-[#F5D000] px-5 sm:px-6 py-2.5 sm:py-3.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#10143A] hover:bg-white hover:text-[#10143A] transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[#F5D000]/15"
                    >
                      {slide.ctaText}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>

                {/* Right Side Shield Graphics (hidden on mobile to prevent viewport overflow) */}
                <div className="hidden lg:flex lg:col-span-5 justify-center items-center h-full relative pointer-events-none select-none">
                  <div className="foundation-logo-wrap relative w-48 h-48 sm:w-72 sm:h-72 opacity-25 transition-transform duration-700">
                    <Shield className="w-full h-full text-[#F5D000] stroke-[0.5px]" />
                    <span className="absolute inset-0 flex items-center justify-center font-display text-4xl sm:text-6xl font-black text-[#F5D000]">
                      {slide.logo}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. FEATURE ARTICLE EXPERIENCE (FULL WIDTH ZOOM PARALLAX) */}
      <section ref={featureBannerRef} className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-secondary-navy text-white text-center">
        <Image
          src="https://images.unsplash.com/photo-1529900748604-07564a03e7a6?q=80&w=1600&auto=format&fit=crop"
          alt="Parallax Stadium lights"
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary-navy via-transparent to-secondary-navy" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 flex flex-col items-center gap-4">
          <span className="text-xs font-bold uppercase tracking-widest text-primary-sky">Exclusive Feature Story</span>
          <h2 className="font-display text-3xl sm:text-6xl font-black uppercase tracking-tight leading-none max-w-2xl">
            Creating The Total Footballer
          </h2>
          
          <div className="flex items-center gap-4 text-xs font-semibold text-white/70 mt-2">
            <span>By Ramakrishnan</span>
            <span>•</span>
            <span>5 min read</span>
          </div>
        </div>
      </section>



      {/* 6. INVESTOR & BUSINESS STORIES (INSIDE SUPERSTRIKER) */}
      <section ref={businessSectionRef} className="py-24 bg-[#10143A] text-white border-y border-white/10 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Glow backdrop effects */}
        <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-[#F5D000]/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#F5D000]">Venture & Infrastructure</span>
            <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mt-1">
              Inside SuperStriker International
            </h2>
            <div className="h-1 w-12 bg-[#F5D000] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Business news write-up */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-left">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#F5D000]">Forbes-Style Business Showcase</span>
                <h3 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mt-1">
                  Investing in the Next Multi-Billion Football Market
                </h3>
              </div>
              <p className="text-sm text-white/80 leading-relaxed">
                SuperStriker International is building a scalable business model connecting grassroots scouting, infrastructure assets (turfs, residential dorms), and elite player registries. By targeting district markets in South India, we unlock high-margin partnerships and transfer fee options.
              </p>

              {/* Counters Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 my-4 border-y border-white/10 py-6">
                {[
                  { target: 1500, suffix: "+", label: "Grassroots Players" },
                  { target: 5, suffix: "", label: "Professional Fields" },
                  { target: 3, suffix: "", label: "Regional Clubs" },
                  { target: 100, suffix: "%", label: "Talent Pathway" }
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center">
                    <span className="text-3xl sm:text-4xl font-display font-black text-[#F5D000]">
                      <span className="stat-counter" data-target={item.target}>0</span>
                      {item.suffix}
                    </span>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-white/60 mt-1">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                <Link
                  href="/investors"
                  className="inline-flex items-center gap-2 rounded-full bg-[#F5D000] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#10143A] hover:bg-white hover:text-[#10143A] transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[#F5D000]/15"
                >
                  Invest In Future Champions
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Mock Financial/Talent growth area SVG chart */}
            <div className="lg:col-span-5 bg-white/5 border border-white/15 backdrop-blur-md p-6 rounded-2xl shadow-2xl flex flex-col gap-6">
              <div>
                <h4 className="font-display text-xs font-bold uppercase tracking-widest text-white">
                  Talent Roster Growth Projection
                </h4>
                <p className="text-[10px] text-white/50 uppercase tracking-wider mt-0.5">
                  Grassroots Discovery Base vs Academy Cohorts
                </p>
              </div>

              {/* Chart SVG */}
              <div className="h-56 w-full relative">
                <svg viewBox="0 0 400 200" className="w-full h-full">
                  {/* Grid Lines */}
                  <line x1="0" y1="50" x2="400" y2="50" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                  <line x1="0" y1="100" x2="400" y2="100" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                  <line x1="0" y1="150" x2="400" y2="150" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                  
                  {/* Area fill */}
                  <path
                    d="M0 200 L0 180 Q100 130 200 100 T400 40 L400 200 Z"
                    fill="url(#goldGradient)"
                    opacity="0.25"
                  />
                  
                  {/* Trend line */}
                  <path
                    d="M0 180 Q100 130 200 100 T400 40"
                    fill="none"
                    stroke="#F5D000"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  
                  {/* Key highlights dots */}
                  <circle cx="200" cy="100" r="5" fill="#F5D000" stroke="#ffffff" strokeWidth="2" />
                  <circle cx="400" cy="40" r="5" fill="#F5D000" stroke="#ffffff" strokeWidth="2" />

                  {/* Gradient definition */}
                  <defs>
                    <linearGradient id="goldGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#F5D000" />
                      <stop offset="100%" stopColor="rgba(245,208,0,0)" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div className="flex justify-between items-center text-[9px] font-bold uppercase tracking-wider text-white/50 pt-2 border-t border-white/10">
                <span>Phase 1 (2023)</span>
                <span>Phase 3 (2025)</span>
                <span>Phase 5 (2026+)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PARTNERS & SPONSORS SECTION */}
      <section className="py-20 px-4 text-center bg-white">
        <div className="max-w-7xl mx-auto border-b border-gray-150 pb-16">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#F5D000]">Alliance Network</span>
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-[#0A1028] mt-1">
            Partners Who Support Our Journey
          </h3>
          
          {/* Logo Scroll Grid */}
          <div className="w-full mt-10">
            <div className="flex flex-wrap items-center justify-center gap-6 py-4">
              {["KSFA Federation", "AIFF Scout Panel", "Bangalore School Board", "Pondicherry Sports Ministry"].map((logo, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 bg-[#F4F6FA] border border-[#F5D000]/10 px-8 py-4 rounded-xl shadow-sm hover:border-[#F5D000]/35 hover:shadow-[0_0_20px_rgba(245,208,0,0.06)] transition-all duration-300 group"
                >
                  <Shield className="h-5 w-5 fill-[#10143A] text-[#10143A] transition-transform duration-300 group-hover:scale-110" />
                  <span className="font-display text-xs font-black uppercase tracking-tight text-[#0A1028] whitespace-nowrap">
                    {logo}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. EDITORIAL FEATURED NEWSLETTER */}
      <section className="py-20 bg-background-soft border-t border-gray-150 px-4">
        <div className="max-w-4xl mx-auto text-center flex flex-col gap-6 items-center">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#F5D000]">Weekly Dispatch</span>
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
              className="bg-white rounded-full border border-gray-200 px-5 py-3 text-xs text-[#0A1028] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F5D000]/20 flex-grow"
            />
            <button
              type="submit"
              className="rounded-full bg-[#10143A] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#F5D000] hover:text-[#10143A] transition-all hover:scale-103 shrink-0"
            >
              Subscribe Stories
            </button>
          </form>
        </div>
      </section>
      </div>
    </>
  );
}
