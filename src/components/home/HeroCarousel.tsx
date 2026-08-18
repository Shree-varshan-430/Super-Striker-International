"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

interface HeroSlide {
  image: string;
  chapter: string;
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
    chapter: "01",
    category: "HOME OF CHAMPIONS",
    title: "Where Future Football Champions Are Made",
    description: "Do you have a dream to play professional football for India? SuperStriker International provides structured grassroots-to-league pathways, FIFA-standard training facilities, and elite competitive exposure.",
    ctaText: "Discover Pathways",
    ctaLink: "/about",
    meta: "SuperStriker Ecosystem • All-India Trials Open"
  },
  {
    image: "/images/training-1.jpg",
    chapter: "02",
    category: "HIGH PERFORMANCE ACADEMY",
    title: "From Grassroots Clinics To State Champions",
    description: "Integrating licensed AIFF & UEFA coaching curricula, GPS telemetry load tracking, residential player boarding, and sports nutrition science to forge the complete modern athlete.",
    ctaText: "Explore Academy",
    ctaLink: "/ecosystem",
    meta: "Bangalore Football School • U-9 to U-18 Batches"
  },
  {
    image: "/images/match-2.jpg",
    chapter: "03",
    category: "STRATEGIC INFRASTRUCTURE",
    title: "Invest In FIFA-Standard Sports Hubs & Clubs",
    description: "Partner with South India's fastest-growing football franchise network spanning professional senior clubs, smart artificial turf arenas, and high-yield commercial sponsorships.",
    ctaText: "Partner With Us",
    ctaLink: "/investors#enquire",
    meta: "Corporate Franchise Hub • Institutional Prospectus"
  }
];

const SLIDE_DURATION = 6500;

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const autoSlideTimerRef = useRef<NodeJS.Timeout | null>(null);

  const goToSlide = useCallback((idx: number) => {
    setCurrentSlide(idx);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  useEffect(() => {
    if (autoSlideTimerRef.current) clearInterval(autoSlideTimerRef.current);
    autoSlideTimerRef.current = setInterval(nextSlide, SLIDE_DURATION);
    return () => {
      if (autoSlideTimerRef.current) clearInterval(autoSlideTimerRef.current);
    };
  }, [nextSlide]);

  const activeSlide = HERO_SLIDES[currentSlide];

  return (
    <section className="relative h-[88vh] min-h-[620px] max-h-[920px] w-full bg-[#11123c] text-white overflow-hidden select-none">

      {/* ── 1. FULL-BLEED PHOTOGRAPHY SLIDES ───────────────────────── */}
      <div className="absolute inset-0 w-full h-full">
        {HERO_SLIDES.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
              idx === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
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

      {/* ── 2. EDITORIAL SCRIM & ARCHITECTURAL GRID OVERLAYS ────────── */}
      <div className="absolute inset-0 bg-[#11123c]/65 z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#11123c]/90 via-[#11123c]/40 to-transparent z-[11] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#11123c] via-transparent to-transparent z-[11] pointer-events-none" />

      {/* Giant Faint Background Watermark Typography */}
      <div className="absolute right-4 bottom-12 z-[12] text-right pointer-events-none hidden lg:block opacity-5">
        <span className="font-display font-black text-[180px] xl:text-[240px] uppercase leading-none tracking-tighter text-white">
          {activeSlide.chapter}
        </span>
      </div>

      {/* ── 3. MAIN EDITORIAL CONTENT CONTAINER ─────────────────────── */}
      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto w-full h-full px-4 sm:px-6 lg:px-10 xl:px-12 flex flex-col justify-center items-start pt-24 sm:pt-28 pb-16 relative z-30">
        <div className="w-full max-w-3xl flex flex-col items-start gap-4 sm:gap-6 text-left">
          
          {/* Royal Crest Mark + Small Caps Eyebrow */}
          <div className="flex items-center gap-3">
            <div className="relative w-7 h-7 shrink-0">
              <Image
                src="/super-strikers-international.png"
                alt="Crest"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#e9d319]">
                {activeSlide.chapter} / {activeSlide.category}
              </span>
            </div>
          </div>

          <div className="w-12 h-[2px] bg-[#e9d319]" />

          {/* Bold Condensed Display Headline (Thunderhill Style) */}
          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-black uppercase tracking-tight text-white leading-[1.02] max-w-3xl">
            {activeSlide.title}
          </h1>

          {/* Editorial Paragraph */}
          <p className="text-sm sm:text-base lg:text-lg text-white/85 leading-relaxed max-w-2xl font-normal">
            {activeSlide.description}
          </p>

          {/* Small Caps Metadata Pill */}
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.16em] text-[#a29142]">
            <span className="w-1.5 h-1.5 bg-[#e9d319]" />
            <span>{activeSlide.meta}</span>
          </div>

          {/* Sharp Rectangular Thunderhill-Style Button */}
          <div className="pt-2">
            <Link
              href={activeSlide.ctaLink}
              className="thunderhill-btn thunderhill-btn-gold"
            >
              <span>{activeSlide.ctaText}</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

        </div>
      </div>

      {/* ── 4. THUNDERHILL CHAPTER CONTROLS & PROGRESS BAR ──────────── */}
      <div className="absolute bottom-6 sm:bottom-8 right-4 sm:right-8 lg:right-12 z-40 flex items-center gap-4 bg-[#11123c]/90 px-4 py-2.5 border border-white/15">
        {/* Chapter counter */}
        <span className="font-mono text-xs font-bold uppercase tracking-widest text-white">
          <span className="text-[#e9d319]">{activeSlide.chapter}</span> / 03
        </span>

        <div className="h-4 w-[1px] bg-white/20" />

        {/* Directional buttons */}
        <button
          onClick={prevSlide}
          className="p-1.5 text-white/70 hover:text-[#e9d319] transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        <button
          onClick={nextSlide}
          className="p-1.5 text-white/70 hover:text-[#e9d319] transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      {/* Bottom 1px Divider Line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/10 z-30" />
    </section>
  );
}
