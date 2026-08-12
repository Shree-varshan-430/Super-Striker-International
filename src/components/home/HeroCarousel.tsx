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

export default function HeroCarousel() {
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
    if (distance > 50) nextSlide();
    if (distance < -50) prevSlide();
    setTouchStart(null);
    setTouchEnd(null);
  };

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
          { scale: 1.12, xPercent: 1, yPercent: 1, duration: 6, ease: "sine.out" }
        );
      }
    }
  }, [currentSlide]);

  return (
    <section 
      className="relative h-[90vh] min-h-[580px] w-full bg-[#10143A] text-white overflow-hidden select-none"
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
              sizes="100vw"
            />
          </div>
        ))}
      </div>

      {/* Cinematic Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#10143A]/20 via-[#10143A]/50 to-[#10143A] z-20 pointer-events-none" />

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
              <span className="slide-category text-[10px] sm:text-xs font-black uppercase tracking-widest text-[#DCE135] leading-none bg-[#10143A] px-2.5 py-1 rounded">
                {slide.category}
              </span>
              
              <h1 className="slide-headline font-display text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-[1.05] max-w-xl sm:max-w-2xl">
                {slide.title.split(" ").map((word, wIdx) => (
                  <span key={wIdx} className="word-wrap inline-block overflow-hidden mr-2.5 sm:mr-3.5">
                    <span className="inline-block">{word}</span>
                  </span>
                ))}
              </h1>

              <p className="slide-description text-xs sm:text-sm lg:text-base text-white/85 leading-relaxed max-w-md sm:max-w-xl text-left">
                {slide.description}
              </p>

              <div className="slide-cta flex flex-wrap items-center justify-start gap-3 sm:gap-4 mt-1 sm:mt-2">
                <Link 
                  href={slide.ctaLink} 
                  className="inline-flex items-center gap-2 rounded-full bg-[#DCE135] px-5 sm:px-6 py-3 sm:py-3.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#10143A] hover:bg-white hover:text-[#10143A] transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[#DCE135]/15"
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

      {/* Carousel Control Bar */}
      <div className="absolute bottom-6 left-0 right-0 z-35 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between pointer-events-none">
        {/* Progress Indicator */}
        <div className="flex items-center gap-4 pointer-events-auto">
          <span className="font-display text-sm font-bold text-white tracking-widest">
            0{currentSlide + 1} / 0{HERO_SLIDES.length}
          </span>
          <div className="w-32 h-1 bg-white/20 rounded-full overflow-hidden relative">
            <div 
              id="hero-progress-bar" 
              className="absolute left-0 top-0 bottom-0 bg-[#DCE135] w-0" 
            />
          </div>
        </div>

        {/* Arrow Controls */}
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
  );
}
