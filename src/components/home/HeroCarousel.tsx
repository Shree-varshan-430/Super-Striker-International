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
    category: "HOME OF CHAMPIONS",
    title: "Where Future Football Champions Are Made",
    description: "Do you have a dream to play professional football for India? SuperStriker International provides structured grassroots-to-league pathways, FIFA-standard training facilities, and elite competitive exposure.",
    ctaText: "Discover Pathways",
    ctaLink: "/about",
    meta: "SuperStriker Ecosystem • All-India Trials Open"
  },
  {
    image: "/images/training-1.jpg",
    category: "HIGH PERFORMANCE ACADEMY",
    title: "From Grassroots Clinics To State Champions",
    description: "Integrating licensed AIFF & UEFA coaching curricula, GPS telemetry load tracking, residential player boarding, and sports nutrition science to forge the complete modern athlete.",
    ctaText: "Explore Academy",
    ctaLink: "/ecosystem",
    meta: "Bangalore Football School • U-9 to U-18 Batches"
  },
  {
    image: "/images/match-2.jpg",
    category: "STRATEGIC INFRASTRUCTURE",
    title: "Invest In FIFA-Standard Sports Hubs & Clubs",
    description: "Partner with South India's fastest-growing football franchise network spanning professional senior clubs, smart artificial turf arenas, and high-yield commercial sponsorships.",
    ctaText: "Partner With Us",
    ctaLink: "/investors#enquire",
    meta: "Corporate Franchise Hub • Institutional Prospectus"
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
    <section className="relative h-[88vh] min-h-[600px] max-h-[900px] w-full bg-black text-white overflow-hidden select-none">
      
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
              quality={85}
              priority={idx === 0}
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>
        ))}
      </div>

      {/* 2. Light Blue Accent Overlay for Crisp Text Contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#11123c]/90 via-[#25265e]/65 to-[#38bdf8]/20 z-20 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#11123c]/75 via-transparent to-[#1e40af]/20 z-20 pointer-events-none" />

      {/* 3. Structured Main Content Container (Left-Aligned, Vertically Centered) */}
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
              <span className="slide-category text-[10px] font-black uppercase tracking-widest text-[#11123c] bg-[#e9d319] px-3.5 py-1 rounded-md shadow-md">
                {slide.category}
              </span>
              
              {/* Main Headline */}
              <h1 className="slide-title font-display text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-[1.08] max-w-2xl [text-shadow:_0_3px_15px_rgba(0,0,0,0.85)]">
                {slide.title}
              </h1>

              {/* Description Paragraph */}
              <p className="slide-description text-sm sm:text-base text-white leading-relaxed max-w-xl font-medium [text-shadow:_0_2px_10px_rgba(0,0,0,0.9)]">
                {slide.description}
              </p>

              {/* Metadata */}
              <span className="slide-meta-tag text-xs font-bold text-white uppercase tracking-wider [text-shadow:_0_1px_8px_rgba(0,0,0,0.9)]">
                {slide.meta}
              </span>

              {/* CTA Action Button */}
              <div className="slide-cta-btn mt-1">
                <Link 
                  href={slide.ctaLink} 
                  className="inline-flex items-center gap-2 rounded-full bg-[#e9d319] px-8 py-4 text-xs font-bold uppercase tracking-wider text-[#11123c] hover:bg-white hover:text-[#11123c] transition-all hover:scale-103 active:scale-95 shadow-2xl"
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
          className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-[#e9d319] hover:text-[#11123c] hover:border-[#e9d319] transition-all duration-300 shadow-xl active:scale-95 group"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6 transition-transform group-hover:-translate-x-0.5" />
        </button>

        <button
          onClick={nextSlide}
          className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-[#e9d319] hover:text-[#11123c] hover:border-[#e9d319] transition-all duration-300 shadow-xl active:scale-95 group"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6 transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>

    </section>
  );
}
