"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
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

const SLIDE_DURATION = 6000;

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [kenBurnsKey, setKenBurnsKey] = useState(0);
  const [sweepKey, setSweepKey] = useState(0);
  const [progressKey, setProgressKey] = useState(0);
  const autoSlideTimerRef = useRef<NodeJS.Timeout | null>(null);

  const goToSlide = useCallback((idx: number) => {
    setCurrentSlide(idx);
    setKenBurnsKey((k) => k + 1);
    setSweepKey((k) => k + 1);
    setProgressKey((k) => k + 1);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => {
      const next = (prev + 1) % HERO_SLIDES.length;
      setKenBurnsKey((k) => k + 1);
      setSweepKey((k) => k + 1);
      setProgressKey((k) => k + 1);
      return next;
    });
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => {
      const next = (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length;
      setKenBurnsKey((k) => k + 1);
      setSweepKey((k) => k + 1);
      setProgressKey((k) => k + 1);
      return next;
    });
  }, []);

  // Auto-advance + GSAP text reveal
  useEffect(() => {
    if (autoSlideTimerRef.current) clearInterval(autoSlideTimerRef.current);
    autoSlideTimerRef.current = setInterval(nextSlide, SLIDE_DURATION);

    // GSAP stagger text reveal on slide change
    const activeSlideEl = document.querySelector(`.slide-text-content-${currentSlide}`);
    if (activeSlideEl) {
      const els = activeSlideEl.querySelectorAll(
        ".slide-category, .slide-title, .slide-description, .slide-meta-tag, .slide-cta-btn"
      );
      gsap.fromTo(
        els,
        { y: 26, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.09, ease: "power3.out", clearProps: "all" }
      );
    }

    return () => { if (autoSlideTimerRef.current) clearInterval(autoSlideTimerRef.current); };
  }, [currentSlide, nextSlide]);

  return (
    <section className="relative h-[88vh] min-h-[600px] max-h-[900px] w-full bg-black text-white overflow-hidden select-none">

      {/* ── 1. FULL-BLEED IMAGE SLIDES with Ken Burns ───────────────── */}
      <div className="absolute inset-0 w-full h-full">
        {HERO_SLIDES.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            {/* Ken Burns zoom — restarted per slide via key change */}
            <div
              key={idx === currentSlide ? `kb-active-${kenBurnsKey}` : `kb-idle-${idx}`}
              className={`absolute inset-0 w-full h-full ${idx === currentSlide ? "animate-ken-burns" : ""}`}
              style={{ willChange: "transform" }}
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
          </div>
        ))}
      </div>

      {/* ── 2. CINEMATIC OVERLAY SYSTEM ─────────────────────────────── */}
      <div className="absolute inset-0 bg-[#11123c]/60 z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#11123c]/85 via-[#11123c]/25 to-transparent z-[11] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#11123c]/75 via-transparent to-transparent z-[11] pointer-events-none" />

      {/* ── 3. AMBIENT GOLD LIGHT SWEEP ─────────────────────────────── */}
      <div
        key={`sweep-${sweepKey}`}
        aria-hidden="true"
        className="animate-light-sweep absolute inset-y-0 w-[40%] z-[12] pointer-events-none"
        style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(233,211,25,0.065) 50%, transparent 100%)",
          left: "0%",
        }}
      />

      {/* ── 4. CORNER RETICLE BRACKETS ──────────────────────────────── */}
      <div className="absolute top-24 left-6 z-[15] pointer-events-none hidden lg:block" aria-hidden="true">
        <div className="w-10 h-10 border-l-2 border-t-2 border-[#e9d319]/60" />
      </div>
      <div className="absolute top-24 right-6 z-[15] pointer-events-none hidden lg:block" aria-hidden="true">
        <div className="w-10 h-10 border-r-2 border-t-2 border-[#e9d319]/60" />
      </div>
      <div className="absolute bottom-20 left-6 z-[15] pointer-events-none hidden lg:block" aria-hidden="true">
        <div className="w-10 h-10 border-l-2 border-b-2 border-[#e9d319]/60" />
      </div>

      {/* ── 5. BRAND ACCENT CORNER WEDGES (Bottom-Right) ────────────── */}
      <div
        className="absolute bottom-0 right-0 w-28 h-28 sm:w-36 sm:h-36 bg-[#11123c] pointer-events-none z-[25] translate-x-2 translate-y-2 lg:block hidden"
        style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-[#e9d319] pointer-events-none z-[26] lg:block hidden"
        style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }}
        aria-hidden="true"
      />

      {/* ── 6. HUD PROGRESS BAR ─────────────────────────────────────── */}
      <div className="absolute bottom-0 left-0 right-0 z-[28] h-[3px] bg-white/10" aria-hidden="true">
        <div
          key={`progress-${progressKey}`}
          className="animate-hud-progress h-full bg-[#e9d319]"
        />
      </div>

      {/* ── 7. MAIN CONTENT ──────────────────────────────────────────── */}
      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto w-full h-full px-4 sm:px-6 lg:px-10 xl:px-12 flex flex-col justify-center items-start pt-20 sm:pt-24 pb-12 relative z-30 pointer-events-none">
        <div className="w-full max-w-3xl relative min-h-[380px] sm:min-h-[420px] flex items-center">
          {HERO_SLIDES.map((slide, idx) => (
            <div
              key={idx}
              className={`slide-text-content-${idx} absolute top-1/2 -translate-y-1/2 left-0 w-full flex flex-col gap-3.5 sm:gap-5 text-left items-start pointer-events-auto ${
                idx === currentSlide ? "opacity-100 z-20" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              {/* Eyebrow category badge */}
              <span className="slide-category text-[10px] font-black uppercase tracking-widest text-[#11123c] bg-[#e9d319] px-3.5 py-1 rounded-md shadow-lg">
                {slide.category}
              </span>

              {/* Main Headline */}
              <h1 className="slide-title font-display text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-[1.06] max-w-2xl [text-shadow:_0_3px_20px_rgba(0,0,0,0.9)]">
                {slide.title}
              </h1>

              {/* Description */}
              <p className="slide-description text-sm sm:text-base text-white/90 leading-relaxed max-w-xl font-medium [text-shadow:_0_2px_12px_rgba(0,0,0,0.9)]">
                {slide.description}
              </p>

              {/* HUD meta tag — gold border-left accent */}
              <span className="slide-meta-tag text-[10px] font-bold text-[#e9d319] uppercase tracking-widest border-l-2 border-[#e9d319]/60 pl-3">
                {slide.meta}
              </span>

              {/* CTA Button */}
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

      {/* ── 8. HUD PILL DOT INDICATORS ──────────────────────────────── */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[28] flex items-center gap-2" aria-label="Slide navigation">
        {HERO_SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`transition-all duration-400 rounded-full pointer-events-auto ${
              idx === currentSlide
                ? "w-7 h-1.5 bg-[#e9d319] shadow-[0_0_8px_rgba(233,211,25,0.7)]"
                : "w-1.5 h-1.5 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* ── 9. FROSTED GLASS NAV ARROWS ─────────────────────────────── */}
      <div className="absolute right-4 sm:right-8 lg:right-12 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center gap-3">
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
