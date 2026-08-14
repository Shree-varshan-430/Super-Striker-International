"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

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
    image: "/images/team-1.jpg",
    category: "FEATURED NEWS",
    title: "Building The Future Of Indian Football",
    description: "Creating opportunities, developing talent, and building a professional football ecosystem for the next generation of athletes.",
    ctaText: "Read Story",
    ctaLink: "/about",
    meta: "Ecosystem • 2 hours ago"
  },
  {
    image: "/images/training-1.jpg",
    category: "FOUNDATION ACADEMY",
    title: "From Grassroots To State Division Champions",
    description: "Discover our youth football school, AIFF-C licensed training clinics, and residential academy progression lines.",
    ctaText: "Explore Academy",
    ctaLink: "/ecosystem",
    meta: "Academy • 1 day ago"
  },
  {
    image: "/images/match-2.jpg",
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
  const autoSlideTimerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  useEffect(() => {
    // Clear existing timer and restart
    if (autoSlideTimerRef.current) clearInterval(autoSlideTimerRef.current);
    autoSlideTimerRef.current = setInterval(() => {
      nextSlide();
    }, 6000);

    // Animate text elements on slide change
    const activeSlideEl = document.querySelector(`.slide-text-content-${currentSlide}`);
    if (activeSlideEl) {
      const category = activeSlideEl.querySelector(".slide-category");
      const title = activeSlideEl.querySelector(".slide-title");
      const description = activeSlideEl.querySelector(".slide-description");
      const cta = activeSlideEl.querySelector(".slide-cta-btn");
      const meta = activeSlideEl.querySelector(".slide-meta-tag");

      gsap.fromTo(
        [category, title, description, meta, cta],
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.07, ease: "power3.out" }
      );
    }

    return () => {
      if (autoSlideTimerRef.current) clearInterval(autoSlideTimerRef.current);
    };
  }, [currentSlide]);

  return (
    <section className="relative h-[88vh] min-h-[600px] max-h-[900px] w-full bg-[#10143A] text-white overflow-hidden select-none">
      
      {/* 1. Full 4K Background Slides */}
      <div className="absolute inset-0 w-full h-full">
        {HERO_SLIDES.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? "opacity-100 z-10 scale-100" : "opacity-0 z-0 pointer-events-none scale-105"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              unoptimized
              priority={idx === 0}
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>
        ))}
      </div>

      {/* 2. Linear Contrast Vignette for Content Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#10143A]/95 via-[#10143A]/70 to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#10143A]/80 via-transparent to-transparent z-20 pointer-events-none" />

      {/* 3. Brand Accent Corner Wedges */}
      <div 
        className="absolute bottom-0 right-0 w-28 h-28 sm:w-36 sm:h-36 bg-[#10143A] pointer-events-none z-25 translate-x-2 translate-y-2 lg:block hidden" 
        style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }} 
      />
      <div 
        className="absolute bottom-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-[#DCE135] pointer-events-none z-30 lg:block hidden" 
        style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }} 
      />

      {/* 4. Structured Main Content Container (Left-Aligned, Vertically Centered) */}
      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto w-full h-full px-4 sm:px-6 lg:px-10 xl:px-12 flex flex-col justify-center items-start pt-20 sm:pt-24 pb-8 sm:pb-12 relative z-30 pointer-events-none">
        <div className="w-full max-w-3xl relative min-h-[380px] sm:min-h-[420px] flex items-center">
          {HERO_SLIDES.map((slide, idx) => (
            <div
              key={idx}
              className={`slide-text-content-${idx} absolute top-1/2 -translate-y-1/2 left-0 w-full flex flex-col gap-3.5 sm:gap-5 text-left items-start transition-opacity duration-500 pointer-events-auto ${
                idx === currentSlide ? "opacity-100 z-20" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              {/* Category Badge */}
              <span className="slide-category text-[10px] font-black uppercase tracking-widest text-[#10143A] bg-[#DCE135] px-3.5 py-1 rounded-md shadow-xs">
                {slide.category}
              </span>
              
              {/* Main Headline */}
              <h1 className="slide-title font-display text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-[1.08] max-w-2xl drop-shadow-sm">
                {slide.title}
              </h1>

              {/* Description Paragraph */}
              <p className="slide-description text-sm sm:text-base text-white/90 leading-relaxed max-w-xl font-normal drop-shadow-xs">
                {slide.description}
              </p>

              {/* Metadata */}
              <span className="slide-meta-tag text-xs font-semibold text-white/70 uppercase tracking-wider">
                {slide.meta}
              </span>

              {/* CTA Action Button */}
              <div className="slide-cta-btn mt-1">
                <Link 
                  href={slide.ctaLink} 
                  className="inline-flex items-center gap-2 rounded-full bg-[#DCE135] px-8 py-4 text-xs font-bold uppercase tracking-wider text-[#10143A] hover:bg-white hover:text-[#10143A] transition-all hover:scale-103 active:scale-95 shadow-xl"
                >
                  {slide.ctaText}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. Frosted Glass Arrow Navigation Vertically Centered on Right Edge */}
      <div className="absolute right-4 sm:right-8 lg:right-12 top-1/2 -translate-y-1/2 z-40 flex items-center gap-3">
        <button
          onClick={prevSlide}
          className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-[#DCE135] hover:text-[#10143A] hover:border-[#DCE135] transition-all duration-300 shadow-xl active:scale-95 group"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6 transition-transform group-hover:-translate-x-0.5" />
        </button>

        <button
          onClick={nextSlide}
          className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-[#DCE135] hover:text-[#10143A] hover:border-[#DCE135] transition-all duration-300 shadow-xl active:scale-95 group"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6 transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>

    </section>
  );
}
