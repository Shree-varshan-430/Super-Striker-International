"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { ArrowRight, ChevronLeft, ChevronRight, Play } from "lucide-react";

interface HeroSlide {
  image: string;
  category: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  meta: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    image: "https://images.unsplash.com/photo-1622659097972-68f1d8c1829f?q=80&w=1600&auto=format&fit=crop",
    category: "FEATURED NEWS",
    title: "Building The Future Of Indian Football",
    description: "Creating opportunities, developing talent, and building a professional football ecosystem for the next generation of athletes.",
    ctaText: "Read Story",
    ctaLink: "/about",
    meta: "Ecosystem • 2 hours ago"
  },
  {
    image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1600&auto=format&fit=crop",
    category: "FOUNDATION ACADEMY",
    title: "From Grassroots To State Division Champions",
    description: "Discover our youth football school, AIFF-C licensed training clinics, and residential academy progression lines.",
    ctaText: "Explore Academy",
    ctaLink: "/ecosystem",
    meta: "Academy • 1 day ago"
  },
  {
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1600&auto=format&fit=crop",
    category: "PARTNERSHIPS",
    title: "Invest In Smart Telemetry Sports Hubs",
    description: "Collaborate with SuperStriker to sponsor smart turf facilities, sensory metrics tools, and school sports programs.",
    ctaText: "Partner With Us",
    ctaLink: "/investors#enquire",
    meta: "Corporate • 3 days ago"
  }
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const progressTweenRef = useRef<gsap.core.Tween | null>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  useEffect(() => {
    const progressBar = document.getElementById("hero-progress-bar-inner");
    if (progressBar) {
      gsap.set(progressBar, { width: "0%" });
      if (progressTweenRef.current) progressTweenRef.current.kill();
      
      progressTweenRef.current = gsap.to(progressBar, {
        width: "100%",
        duration: 7,
        ease: "none",
        onComplete: nextSlide
      });
    }

    const activeSlideEl = document.querySelector(`.slide-text-content-${currentSlide}`);
    if (activeSlideEl) {
      const category = activeSlideEl.querySelector(".slide-category");
      const title = activeSlideEl.querySelector(".slide-title");
      const description = activeSlideEl.querySelector(".slide-description");
      const cta = activeSlideEl.querySelector(".slide-cta-btn");
      const meta = activeSlideEl.querySelector(".slide-meta-tag");

      gsap.fromTo([category, title, description, meta, cta],
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.08, ease: "power3.out" }
      );
    }
  }, [currentSlide]);

  return (
    <section className="relative h-[85vh] min-h-[580px] w-full bg-[#10143A] text-white overflow-hidden select-none">
      
      {/* Background Images */}
      <div className="absolute inset-0 w-full h-full">
        {HERO_SLIDES.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? "opacity-90 z-10 scale-100" : "opacity-0 z-0 pointer-events-none scale-105"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={idx === 0}
              className="object-cover"
              sizes="100vw"
            />
          </div>
        ))}
      </div>

      {/* Cinematic Horizontal Vignette (Inspired by Man Utd layout) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#10143A] via-[#10143A]/65 to-transparent z-20 pointer-events-none" />

      {/* Main Content Area */}
      <div className="max-w-[95%] mx-auto w-full h-full px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-start relative z-30 pointer-events-none">
        <div className="w-full max-w-3xl relative h-[420px] sm:h-[350px]">
          {HERO_SLIDES.map((slide, idx) => (
            <div
              key={idx}
              className={`slide-text-content-${idx} absolute top-0 left-0 w-full max-w-2xl flex flex-col gap-4 text-left items-start transition-opacity duration-500 pointer-events-auto ${
                idx === currentSlide ? "opacity-100 z-20" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              {/* Category tag */}
              <span className="slide-category text-[9px] font-black uppercase tracking-widest text-[#DCE135] bg-[#10143A] px-2.5 py-1 rounded">
                {slide.category}
              </span>
              
              {/* Massive Serif Title */}
              <h1 className="slide-title font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] max-w-xl sm:max-w-2xl">
                {slide.title}
              </h1>

              {/* Description */}
              <p className="slide-description text-xs sm:text-sm text-white/80 leading-relaxed max-w-md sm:max-w-xl font-medium">
                {slide.description}
              </p>

              {/* Slide metadata */}
              <span className="slide-meta-tag text-[10px] font-bold text-white/60 uppercase tracking-wider">
                {slide.meta}
              </span>

              {/* Solid Button */}
              <div className="slide-cta-btn mt-2">
                <Link 
                  href={slide.ctaLink} 
                  className="inline-flex items-center gap-2 rounded-full bg-[#DCE135] px-6 py-3.5 text-xs font-black uppercase tracking-wider text-[#10143A] hover:bg-white hover:text-[#10143A] transition-all hover:scale-103 active:scale-95 shadow-lg"
                >
                  {slide.ctaText}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Carousel Control Bar */}
      <div className="absolute bottom-6 left-0 right-0 z-35 max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-start pointer-events-none">
        
        {/* Navigation Indicator & Progress bar */}
        <div className="flex items-center gap-4 pointer-events-auto">
          <span className="font-display text-xs font-bold text-white tracking-widest">
            0{currentSlide + 1} / 0{HERO_SLIDES.length}
          </span>
          <div className="w-24 h-1 bg-white/20 rounded-full overflow-hidden relative">
            <div 
              id="hero-progress-bar-inner" 
              className="absolute left-0 top-0 bottom-0 bg-[#DCE135] w-0" 
            />
          </div>
        </div>

      </div>

    </section>
  );
}
