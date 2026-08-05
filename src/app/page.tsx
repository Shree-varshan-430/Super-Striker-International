"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, ArrowUpRight, Shield } from "lucide-react";
import NewsroomFeed from "@/components/NewsroomFeed";
import FootballLoader from "@/components/FootballLoader";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem("loader-complete")) {
      const timer = setTimeout(() => setLoading(false), 0);
      return () => clearTimeout(timer);
    }
  }, []);

  // DOM Refs for GSAP
  const heroImgContainerRef = useRef<HTMLDivElement>(null);
  const heroHeadlineRef = useRef<HTMLHeadingElement>(null);
  const chaptersTriggerRef = useRef<HTMLDivElement>(null);
  const chaptersContainerRef = useRef<HTMLDivElement>(null);
  const businessSectionRef = useRef<HTMLDivElement>(null);
  const featureBannerRef = useRef<HTMLDivElement>(null);
  const storyTriggerRef = useRef<HTMLDivElement>(null);
  const storyContainerRef = useRef<HTMLDivElement>(null);

  // Initialize GSAP Scroll animations
  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // 1. Hero Image Clip-path zoom out on load
    if (heroImgContainerRef.current) {
      gsap.fromTo(
        heroImgContainerRef.current,
        { clipPath: "inset(12% 12% 12% 12% round 24px)", scale: 0.9 },
        {
          clipPath: "inset(0% 0% 0% 0% round 0px)",
          scale: 1,
          duration: 1.6,
          ease: "power4.inOut",
        }
      );

      // Hero Parallax on Scroll
      gsap.to(heroImgContainerRef.current.querySelector("img"), {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: heroImgContainerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }

    // 2. Hero Headline Split text reveal
    if (heroHeadlineRef.current) {
      const words = heroHeadlineRef.current.querySelectorAll(".word-wrap span");
      gsap.fromTo(
        words,
        { y: "100%", opacity: 0 },
        {
          y: "0%",
          opacity: 1,
          duration: 1.0,
          stagger: 0.04,
          ease: "power3.out",
          delay: 0.5,
        }
      );
    }

    // 3. Horizontal Scroll Pinning for Chapters (Clubs & School)
    if (window.innerWidth >= 1024) {
      if (chaptersTriggerRef.current && chaptersContainerRef.current) {
        const track = chaptersContainerRef.current;
        const trigger = chaptersTriggerRef.current;

        const pin = gsap.to(track, {
          x: () => {
            const scrollWidth = track.scrollWidth;
            const containerWidth = trigger.querySelector(".giant-network-card")?.getBoundingClientRect().width || window.innerWidth;
            return -(scrollWidth - containerWidth);
          },
          ease: "none",
          scrollTrigger: {
            trigger: trigger,
            pin: true,
            scrub: 0.5,
            start: "top top",
            end: () => `+=${window.innerHeight * 2}`,
            invalidateOnRefresh: true,
            snap: {
              snapTo: 1 / 3,
              duration: 0.4,
              ease: "power2.out",
              delay: 0.02,
            }
          },
        });

        // Staggered text animations inside cards
        const cards = track.querySelectorAll(".ecosystem-card");
        cards.forEach((card) => {
          gsap.fromTo(
            card.querySelector(".card-text-anim"),
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              scrollTrigger: {
                trigger: card,
                containerAnimation: pin,
                start: "left 75%",
                toggleActions: "play none none reverse",
              },
            }
          );
        });
      }
    }

    // 3.5. Immersive Brand Story Horizontal Scroll ("THE STORY BEHIND SUPERSTRIKER")
    if (window.innerWidth >= 1024) {
      if (storyTriggerRef.current && storyContainerRef.current) {
        const track = storyContainerRef.current;
        const trigger = storyTriggerRef.current;
        const amountToScroll = track.scrollWidth - window.innerWidth;

        const pin = gsap.to(track, {
          x: -amountToScroll,
          ease: "none",
          scrollTrigger: {
            trigger: trigger,
            pin: true,
            scrub: 0.5,
            start: "top top",
            end: () => `+=${amountToScroll}`,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const progress = self.progress;
              // Update progress bar
              const progressBar = document.getElementById("story-progress-bar");
              if (progressBar) {
                progressBar.style.width = `${progress * 100}%`;
              }
              
              // Update chapter index indicator
              let chapter = "01 / 05";
              if (progress > 0.8) chapter = "05 / 05";
              else if (progress > 0.6) chapter = "04 / 05";
              else if (progress > 0.4) chapter = "03 / 05";
              else if (progress > 0.2) chapter = "02 / 05";
              
              const indicator = document.getElementById("story-chapter-indicator");
              if (indicator && indicator.innerText !== chapter) {
                indicator.innerText = chapter;
              }
            },
            snap: {
              snapTo: 1 / 4,
              duration: 0.4,
              ease: "power2.out",
              delay: 0.02,
            }
          },
        });

        // Parallax image and slow zoom effect during horizontal scrub
        const slides = track.querySelectorAll(".story-slide");
        slides.forEach((slide) => {
          const img = slide.querySelector("img");
          if (img) {
            gsap.fromTo(
              img,
              { scale: 1.15 },
              {
                scale: 1,
                ease: "none",
                scrollTrigger: {
                  trigger: slide,
                  containerAnimation: pin,
                  start: "left right",
                  end: "right left",
                  scrub: true,
                }
              }
            );
          }

          // Slide up text elements inside slide
          const textBlock = slide.querySelector(".story-text-anim");
          if (textBlock) {
            gsap.fromTo(
              textBlock,
              { opacity: 0, y: 40 },
              {
                opacity: 1,
                y: 0,
                duration: 0.6,
                scrollTrigger: {
                  trigger: slide,
                  containerAnimation: pin,
                  start: "left 70%",
                  toggleActions: "play none none reverse",
                }
              }
            );
          }
        });
      }
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

  // Spotlight Story
  const spotlightStory = {
    title: "Building The Future Of Indian Football Through Grassroots Development",
    category: "FEATURED STORY",
    description: "SuperStriker International is building a complete football pathway from grassroots school clinics to professional league registry contracts, engineering sports communities from the ground up.",
    author: "SuperStriker Editorial Team",
    date: "August 04, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1544698310-74ea9d1c8258?q=80&w=1200&auto=format&fit=crop",
  };

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

      <div className="w-full bg-white text-secondary-navy font-sans select-none">
      {/* 1. EDITORIAL HERO SECTION */}
      <section className="relative min-h-[95vh] flex flex-col justify-between pt-28 pb-12 bg-gradient-to-br from-[#101B4D] via-[#2457D6] to-[#6C4CE6] text-white overflow-hidden">
        {/* Glow visual effects */}
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#6C4CE6]/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-[#3FA9F5]/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center flex-grow relative z-10">
          {/* Left: Cinematic image block */}
          <div className="lg:col-span-7 relative h-[350px] sm:h-[500px] w-full overflow-hidden rounded-2xl border border-white/10 shadow-[0_0_50px_rgba(36,87,214,0.25)]" ref={heroImgContainerRef}>
            <Image
              src={spotlightStory.image}
              alt="Grassroots Football Training"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#101B4D]/60 to-transparent" />
            <span className="absolute top-6 left-6 inline-flex bg-[#101B4D] border border-white/10 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-white shadow-lg">
              {spotlightStory.category}
            </span>
          </div>

          {/* Right: Text details */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-left pr-4">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#3FA9F5] leading-none">
              Spotlight Journalism
            </span>
            
            <h1 ref={heroHeadlineRef} className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-[1.05]">
              {spotlightStory.title.split(" ").map((word, idx) => (
                <span key={idx} className="word-wrap inline-block overflow-hidden mr-2">
                  <span className="inline-block">{word}</span>
                </span>
              ))}
            </h1>

            <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-md">
              {spotlightStory.description}
            </p>

            <div className="flex items-center gap-6 border-t border-white/10 pt-6 text-xs font-semibold text-white/70">
              <div className="flex flex-col">
                <span className="text-[9px] uppercase tracking-wider text-white/50 font-bold">Written By</span>
                <span className="text-white font-bold mt-0.5">{spotlightStory.author}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] uppercase tracking-wider text-white/50 font-bold">Published</span>
                <span className="mt-0.5">{spotlightStory.date}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] uppercase tracking-wider text-white/50 font-bold">Duration</span>
                <span className="mt-0.5">{spotlightStory.readTime}</span>
              </div>
            </div>
            
            <div className="mt-2">
              <Link 
                href="/news/building-next-generation" 
                className="inline-flex items-center gap-2 rounded-full bg-[#2457D6] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-gradient-to-r hover:from-[#2457D6] hover:to-[#6C4CE6] transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[#2457D6]/25"
              >
                Read Featured Story
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Latest Stories Marquee Ticker */}
        <div className="w-full bg-secondary-navy text-white py-4 mt-12 border-y border-white/10 overflow-hidden relative">
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
      </section>

      {/* 2. SUPERSTRIKER NEWSROOM (OPTIMIZED EDITORIAL FEED) */}
      <NewsroomFeed />      {/* 3. OUR FOOTBALL FOUNDATION & ECOSYSTEM (GSAP SCROLLTRIGGER PINNING) */}
      {/* Pinned horizontal section for desktop layout (hidden lg:flex / only visible lg and above) */}
      <section 
        ref={chaptersTriggerRef} 
        className="hidden lg:flex relative w-full h-screen overflow-hidden bg-background-soft items-center justify-center py-10"
      >
        {/* Giant Network Card */}
        <div className="giant-network-card w-[94vw] h-[85vh] rounded-[32px] bg-[#101B4D] border border-white/10 shadow-[0_0_50px_rgba(108,76,230,0.18)] relative flex flex-col justify-between py-12 overflow-hidden">
          
          {/* Section title header */}
          <div className="px-16 text-left flex flex-col gap-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#3FA9F5]">OUR NETWORK</span>
            <h2 className="font-display text-3xl font-black uppercase tracking-tight text-white leading-none">
              Our Football Foundation & Ecosystem
            </h2>
          </div>

          {/* Horizontal track container */}
          <div className="flex-grow flex items-center overflow-hidden relative mt-4">
            <div 
              ref={chaptersContainerRef} 
              className="flex gap-16 pl-[5vw] pr-[30vw] relative items-center h-full"
              style={{ width: "fit-content" }}
            >
              {/* Slide 1 */}
              <div className="ecosystem-slide w-[75vw] h-[55vh] flex-shrink-0 flex items-center gap-12 text-left relative bg-transparent group">
                {/* Left: Image */}
                <div className="w-[45%] h-full relative rounded-2xl overflow-hidden border border-white/10 shadow-lg shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1200&auto=format&fit=crop"
                    alt="Bangalore Super Strikers FC"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                {/* Right: Info */}
                <div className="flex-grow flex flex-col gap-4 card-text-anim justify-center pr-8">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#3FA9F5]">FOUNDATION 01</span>
                    <h3 className="font-display text-4xl font-black uppercase text-white tracking-tight mt-1">
                      Bangalore Super Strikers FC
                    </h3>
                    <span className="text-xs font-semibold text-gray-300 mt-1 block">Bengaluru, Karnataka</span>
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed max-w-xl">
                    Building grassroots football pathways in Karnataka, establishing senior competitive platforms, and local league registry pathways.
                  </p>
                  <div className="pt-2">
                    <Link
                      href="/clubs/bangalore-super-strikers-fc"
                      className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-xs font-bold uppercase tracking-wider text-secondary-navy hover:bg-[#2457D6] hover:text-white transition-all shadow-md hover:shadow-[#2457D6]/20"
                    >
                      Explore Club Story
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Slide 2 */}
              <div className="ecosystem-slide w-[75vw] h-[55vh] flex-shrink-0 flex items-center gap-12 text-left relative bg-transparent group">
                {/* Left: Image */}
                <div className="w-[45%] h-full relative rounded-2xl overflow-hidden border border-white/10 shadow-lg shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1518063319789-7217e6706b04?q=80&w=1200&auto=format&fit=crop"
                    alt="Pondicherry Super Strikers FC"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                {/* Right: Info */}
                <div className="flex-grow flex flex-col gap-4 card-text-anim justify-center pr-8">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#3FA9F5]">FOUNDATION 02</span>
                    <h3 className="font-display text-4xl font-black uppercase text-white tracking-tight mt-1">
                      Pondicherry Super Strikers FC
                    </h3>
                    <span className="text-xs font-semibold text-gray-300 mt-1 block">Pondicherry</span>
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed max-w-xl">
                    Expanding coastal talent pools, launching under-15 residential academy cohorts, and establishing local competitive platforms.
                  </p>
                  <div className="pt-2">
                    <Link
                      href="/clubs/pondicherry-super-strikers-fc"
                      className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-xs font-bold uppercase tracking-wider text-secondary-navy hover:bg-[#2457D6] hover:text-white transition-all shadow-md hover:shadow-[#2457D6]/20"
                    >
                      Explore Club Story
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Slide 3 */}
              <div className="ecosystem-slide w-[75vw] h-[55vh] flex-shrink-0 flex items-center gap-12 text-left relative bg-transparent group">
                {/* Left: Image */}
                <div className="w-[45%] h-full relative rounded-2xl overflow-hidden border border-white/10 shadow-lg shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1529900748604-07564a03e7a6?q=80&w=1200&auto=format&fit=crop"
                    alt="Chennai Super Strikers FC"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                {/* Right: Info */}
                <div className="flex-grow flex flex-col gap-4 card-text-anim justify-center pr-8">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#3FA9F5]">FOUNDATION 03</span>
                    <h3 className="font-display text-4xl font-black uppercase text-white tracking-tight mt-1">
                      Chennai Super Strikers FC
                    </h3>
                    <span className="text-xs font-semibold text-gray-300 mt-1 block">Chennai, Tamil Nadu</span>
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed max-w-xl">
                    Unlocking metro opportunities, establishing athletic conditioning programs, and competitive state division registry representation.
                  </p>
                  <div className="pt-2">
                    <Link
                      href="/clubs/chennai-super-strikers-fc"
                      className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-xs font-bold uppercase tracking-wider text-secondary-navy hover:bg-[#2457D6] hover:text-white transition-all shadow-md hover:shadow-[#2457D6]/20"
                    >
                      Explore Club Story
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Slide 4 */}
              <div className="ecosystem-slide w-[75vw] h-[55vh] flex-shrink-0 flex items-center gap-12 text-left relative bg-transparent group">
                {/* Left: Image */}
                <div className="w-[45%] h-full relative rounded-2xl overflow-hidden border border-white/10 shadow-lg shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1431324155629-1a6edd1d141e?q=80&w=1200&auto=format&fit=crop"
                    alt="Bangalore Football School"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                {/* Right: Info */}
                <div className="flex-grow flex flex-col gap-4 card-text-anim justify-center pr-8">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#3FA9F5]">FOUNDATION 04</span>
                    <h3 className="font-display text-4xl font-black uppercase text-white tracking-tight mt-1">
                      Bangalore Football School
                    </h3>
                    <span className="text-xs font-semibold text-gray-300 mt-1 block">Bengaluru, Karnataka</span>
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed max-w-xl">
                    Developing technical proficiency and football intelligence in children from under-9 to under-15 categories with licensed coaching staff.
                  </p>
                  <div className="pt-2">
                    <Link
                      href="/football-school/bangalore-football-school"
                      className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-xs font-bold uppercase tracking-wider text-secondary-navy hover:bg-[#2457D6] hover:text-white transition-all shadow-md hover:shadow-[#2457D6]/20"
                    >
                      Explore Curriculum
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Pinned horizontal equivalent for mobile vertical stacked layout (lg:hidden) */}
      <section className="lg:hidden w-full bg-background-soft py-10 px-4">
        <div className="w-full rounded-[24px] bg-[#101B4D] border border-white/10 shadow-[0_0_40px_rgba(108,76,230,0.15)] p-6 flex flex-col gap-8">
          
          <div className="text-left flex flex-col gap-1">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#3FA9F5]">OUR NETWORK</span>
            <h2 className="font-display text-2xl font-black uppercase tracking-tight text-white leading-none">
              Football Foundation & Ecosystem
            </h2>
          </div>

          <div className="flex flex-col gap-8">
            {[
              {
                num: "01",
                title: "Bangalore Super Strikers FC",
                location: "Bengaluru, Karnataka",
                story: "Building grassroots football pathways in Karnataka, establishing senior competitive platforms, and local league registry pathways.",
                image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=600&auto=format&fit=crop",
                link: "/clubs/bangalore-super-strikers-fc"
              },
              {
                num: "02",
                title: "Pondicherry Super Strikers FC",
                location: "Pondicherry",
                story: "Expanding coastal talent pools, launching under-15 residential academy cohorts, and establishing local competitive platforms.",
                image: "https://images.unsplash.com/photo-1518063319789-7217e6706b04?q=80&w=600&auto=format&fit=crop",
                link: "/clubs/pondicherry-super-strikers-fc"
              },
              {
                num: "03",
                title: "Chennai Super Strikers FC",
                location: "Chennai, Tamil Nadu",
                story: "Unlocking metro opportunities, establishing athletic conditioning programs, and competitive state division registry representation.",
                image: "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?q=80&w=600&auto=format&fit=crop",
                link: "/clubs/chennai-super-strikers-fc"
              },
              {
                num: "04",
                title: "Bangalore Football School",
                location: "Bengaluru, Karnataka",
                story: "Developing technical proficiency and football intelligence in children from under-9 to under-15 categories with licensed coaching staff.",
                image: "https://images.unsplash.com/photo-1431324155629-1a6edd1d141e?q=80&w=600&auto=format&fit=crop",
                link: "/football-school/bangalore-football-school"
              }
            ].map((card, idx) => (
              <div key={idx} className="relative w-full h-[50vh] rounded-xl overflow-hidden shadow-md border border-[#2457D6]/15 hover:border-[#6C4CE6]/45 hover:shadow-[0_0_20px_rgba(108,76,230,0.12)] flex flex-col justify-end p-6 bg-white transition-all duration-300 group">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover opacity-10 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/85 to-transparent" />
                
                <div className="relative z-10 text-left flex flex-col gap-3">
                  <div className="flex justify-between items-start border-b border-gray-150 pb-2">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#2457D6]">FOUNDATION {card.num}</span>
                      <h3 className="font-display text-lg font-black uppercase text-[#101B4D] leading-tight mt-0.5">{card.title}</h3>
                      <span className="text-[10px] font-semibold text-[#4A5568]">{card.location}</span>
                    </div>
                    <Shield className="h-5 w-5 text-[#2457D6] fill-[#2457D6]/15" />
                  </div>
                  <p className="text-xs text-[#4A5568] leading-relaxed line-clamp-2">
                    {card.story}
                  </p>
                  <div className="pt-1">
                    <Link
                      href={card.link}
                      className="inline-flex items-center gap-1 bg-[#101B4D] px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider text-white hover:bg-[#2457D6] transition-all"
                    >
                      Explore Story
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
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

      {/* 5. THE STORY BEHIND SUPERSTRIKER (GSAP SCROLLTRIGGER PINNING) */}
      {/* Pinned horizontal section for desktop layout (hidden lg:block / only visible lg and above) */}
      <section ref={storyTriggerRef} className="hidden lg:block relative w-full h-screen overflow-hidden bg-white text-secondary-navy">
        {/* Left-side persistent chapter index & metadata bar */}
        <div className="absolute top-12 left-16 z-20 flex gap-12 items-center pointer-events-none select-none">
          <div className="flex flex-col text-left">
            <span className="text-[10px] font-black uppercase tracking-widest text-primary-sky leading-none">CHAPTER</span>
            <span id="story-chapter-indicator" className="font-display text-4xl font-black text-secondary-navy leading-none mt-2">01 / 05</span>
          </div>
          
          {/* Progress Bar */}
          <div className="w-48 h-1.5 bg-gray-200/80 rounded-full overflow-hidden relative">
            <div id="story-progress-bar" className="absolute left-0 top-0 bottom-0 bg-primary-sky w-0 transition-all duration-100" />
          </div>

          {/* Metadata items */}
          <div className="flex items-center gap-6 border-l border-gray-200 pl-8 text-left text-[9px] font-bold uppercase tracking-wider text-secondary-navy/40">
            <div>
              <span className="block text-secondary-navy/60">Founded</span>
              <span className="text-secondary-navy font-extrabold mt-0.5 block">BSS FC</span>
            </div>
            <div>
              <span className="block text-secondary-navy/60">Leadership</span>
              <span className="text-secondary-navy font-extrabold mt-0.5 block">Ramakrishnan</span>
            </div>
            <div>
              <span className="block text-secondary-navy/60">Affiliation</span>
              <span className="text-secondary-navy font-extrabold mt-0.5 block">KSFA / AIFF</span>
            </div>
            <div>
              <span className="block text-secondary-navy/60">Focus</span>
              <span className="text-secondary-navy font-extrabold mt-0.5 block">Grassroots Dev</span>
            </div>
          </div>
        </div>

        {/* Main Horizontal Track */}
        <div ref={storyContainerRef} className="flex h-full w-[500vw] relative">
          
          {/* Slide 1: Intro / THE DREAM */}
          <div className="story-slide w-screen h-full flex-shrink-0 flex items-center justify-center bg-white px-24 pt-20">
            <div className="max-w-6xl w-full grid grid-cols-12 gap-16 items-center">
              <div className="col-span-6 relative h-[50vh] min-h-[380px] rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
                <Image
                  src="https://images.unsplash.com/photo-1518063319789-7217e6706b04?q=80&w=1200&auto=format&fit=crop"
                  alt="Chapter 1: The Dream"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="col-span-6 flex flex-col gap-6 text-left story-text-anim">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary-sky">CHAPTER 01</span>
                  <h2 className="font-display text-4xl sm:text-5xl font-black uppercase tracking-tight text-secondary-navy leading-none mt-1">
                    The Dream
                  </h2>
                </div>
                <p className="text-base text-secondary-navy/70 leading-relaxed max-w-lg">
                  The vision began with Mr. Devaraj and Mrs. Rajammal Devaraj, who dreamed of seeing their grandson represent India on the football pitch.
                </p>
                <div className="h-px bg-gray-200/80 w-24 my-2" />
                <div className="text-xs font-semibold text-secondary-navy/40 uppercase tracking-widest">
                  Origin Narrative / SuperStriker Heritage
                </div>
              </div>
            </div>
          </div>

          {/* Slide 2: THE PASSION */}
          <div className="story-slide w-screen h-full flex-shrink-0 flex items-center justify-center bg-background-soft px-24 pt-20">
            <div className="max-w-6xl w-full grid grid-cols-12 gap-16 items-center">
              <div className="col-span-6 relative h-[50vh] min-h-[380px] rounded-2xl overflow-hidden shadow-2xl border border-gray-150">
                <Image
                  src="https://images.unsplash.com/photo-1529900748604-07564a03e7a6?q=80&w=1200&auto=format&fit=crop"
                  alt="Chapter 2: The Passion"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="col-span-6 flex flex-col gap-6 text-left story-text-anim">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary-sky">CHAPTER 02</span>
                  <h2 className="font-display text-4xl sm:text-5xl font-black uppercase tracking-tight text-secondary-navy leading-none mt-1">
                    The Passion
                  </h2>
                </div>
                <p className="text-base text-secondary-navy/70 leading-relaxed max-w-lg">
                  Ramakrishnan (Ram) experienced the challenges faced by young footballers firsthand and understood the critical need for structured opportunities, mentorship, and athletic support systems.
                </p>
                <div className="h-px bg-gray-200/80 w-24 my-2" />
                <div className="text-xs font-semibold text-secondary-navy/40 uppercase tracking-widest">
                  Athletic Mentorship / AIFF Certified Guidelines
                </div>
              </div>
            </div>
          </div>

          {/* Slide 3: THE FOUNDATION */}
          <div className="story-slide w-screen h-full flex-shrink-0 flex items-center justify-center bg-white px-24 pt-20">
            <div className="max-w-6xl w-full grid grid-cols-12 gap-16 items-center">
              <div className="col-span-6 relative h-[50vh] min-h-[380px] rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
                <Image
                  src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1200&auto=format&fit=crop"
                  alt="Chapter 3: The Foundation"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="col-span-6 flex flex-col gap-6 text-left story-text-anim">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary-sky">CHAPTER 03</span>
                  <h2 className="font-display text-4xl sm:text-5xl font-black uppercase tracking-tight text-secondary-navy leading-none mt-1">
                    The Foundation
                  </h2>
                </div>
                <p className="text-base text-secondary-navy/70 leading-relaxed max-w-lg">
                  The dream transformed into reality with the creation of Bangalore Super Strikers FC, providing young talents with scientific athletic conditioning and KSFA league exposure.
                </p>
                <div className="h-px bg-gray-200/80 w-24 my-2" />
                <div className="text-xs font-semibold text-secondary-navy/40 uppercase tracking-widest">
                  Club Administration / KSFA Affiliated Matches
                </div>
              </div>
            </div>
          </div>

          {/* Slide 4: THE ECOSYSTEM */}
          <div className="story-slide w-screen h-full flex-shrink-0 flex items-center justify-center bg-[#f0f5fc] px-24 pt-20">
            <div className="max-w-6xl w-full grid grid-cols-12 gap-16 items-center">
              <div className="col-span-6 relative h-[50vh] min-h-[380px] rounded-2xl overflow-hidden shadow-2xl border border-gray-150">
                <Image
                  src="https://images.unsplash.com/photo-1431324155629-1a6edd1d141e?q=80&w=1200&auto=format&fit=crop"
                  alt="Chapter 4: The Ecosystem"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="col-span-6 flex flex-col gap-6 text-left story-text-anim">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary-sky">CHAPTER 04</span>
                  <h2 className="font-display text-4xl sm:text-5xl font-black uppercase tracking-tight text-secondary-navy leading-none mt-1">
                    The Ecosystem
                  </h2>
                </div>
                <p className="text-sm text-secondary-navy/70 leading-relaxed max-w-lg">
                  SuperStriker International expanded its vision through multiple regional clubs and grassroots clinics, creating a complete development pipeline.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mt-2 max-w-md">
                  {[
                    "Bangalore Super Strikers FC",
                    "Pondicherry Super Strikers FC",
                    "Chennai Super Strikers FC",
                    "Bangalore Football School"
                  ].map((entity, index) => (
                    <div key={index} className="bg-white/80 border border-gray-200/60 rounded-xl p-3 flex items-center gap-2">
                      <Shield className="h-4 w-4 text-primary-sky fill-primary-sky/20 shrink-0" />
                      <span className="text-[10px] font-extrabold text-secondary-navy uppercase tracking-tight leading-tight">{entity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Slide 5: THE FUTURE */}
          <div className="story-slide w-screen h-full flex-shrink-0 flex items-center justify-center bg-white px-24 pt-20">
            <div className="max-w-6xl w-full grid grid-cols-12 gap-16 items-center">
              <div className="col-span-6 relative h-[50vh] min-h-[380px] rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
                <Image
                  src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1200&auto=format&fit=crop"
                  alt="Chapter 5: The Future"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="col-span-6 flex flex-col gap-6 text-left story-text-anim">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary-sky">CHAPTER 05</span>
                  <h2 className="font-display text-4xl sm:text-5xl font-black uppercase tracking-tight text-secondary-navy leading-none mt-1">
                    The Future
                  </h2>
                </div>
                <p className="text-base text-secondary-navy/70 leading-relaxed max-w-lg">
                  Forging direct pathways for young athletes to secure domestic, national, and international football league opportunities, training models, and infrastructure.
                </p>
                <div className="h-px bg-gray-200/80 w-24 my-2" />
                <div className="pt-2">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 rounded-full bg-secondary-navy px-6 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-primary-sky hover:text-secondary-navy transition-all"
                  >
                    Read Heritage Interview
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. THE STORY BEHIND SUPERSTRIKER (MOBILE VERTICAL STACKED VERSION) */}
      <section className="lg:hidden w-full bg-background-soft py-16 px-4">
        <div className="max-w-3xl mx-auto flex flex-col gap-10">
          
          {/* Intro Header */}
          <div className="text-left flex flex-col gap-2">
            <span className="text-xs font-bold uppercase tracking-widest text-primary-sky">OUR JOURNEY</span>
            <h2 className="font-display text-3xl font-black uppercase tracking-tight text-secondary-navy">
              From A Dream To A Football Movement
            </h2>
            <p className="text-xs sm:text-sm text-secondary-navy/70 leading-relaxed mt-2">
              Every great football journey begins with a dream. SuperStriker International was built with the vision of creating opportunities, developing talent, and building India&apos;s future football ecosystem.
            </p>
          </div>

          {/* Persistent metadata details */}
          <div className="grid grid-cols-2 gap-4 bg-white p-6 rounded-2xl border border-gray-150/80 shadow-md">
            {[
              { label: "Founded", val: "Bangalore Super Strikers FC" },
              { label: "Leadership", val: "Ramakrishnan" },
              { label: "Affiliation", val: "KSFA / AIFF Structure" },
              { label: "Focus", val: "Grassroots Development" }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col text-left">
                <span className="text-[9px] font-bold text-secondary-navy/40 uppercase tracking-wider">{item.label}</span>
                <span className="text-xs font-extrabold text-secondary-navy mt-0.5">{item.val}</span>
              </div>
            ))}
          </div>

          {/* Chapters Stack */}
          <div className="flex flex-col gap-12 mt-4">
            {[
              {
                num: "01",
                title: "The Dream",
                body: "The vision began with Mr. Devaraj and Mrs. Rajammal Devaraj, who dreamed of seeing their grandson represent India on the football pitch.",
                img: "https://images.unsplash.com/photo-1518063319789-7217e6706b04?q=80&w=600&auto=format&fit=crop"
              },
              {
                num: "02",
                title: "The Passion",
                body: "Ramakrishnan (Ram) experienced the challenges faced by young footballers firsthand and understood the critical need for structured opportunities, mentorship, and athletic support systems.",
                img: "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?q=80&w=600&auto=format&fit=crop"
              },
              {
                num: "03",
                title: "The Foundation",
                body: "The dream transformed into reality with the creation of Bangalore Super Strikers FC, providing young talents with scientific athletic conditioning and KSFA league exposure.",
                img: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=600&auto=format&fit=crop"
              },
              {
                num: "04",
                title: "The Ecosystem",
                body: "SuperStriker International expanded its vision through multiple regional clubs and grassroots clinics, creating a complete development pipeline.",
                img: "https://images.unsplash.com/photo-1431324155629-1a6edd1d141e?q=80&w=600&auto=format&fit=crop",
                ecosystem: true
              },
              {
                num: "05",
                title: "The Future",
                body: "Forging direct pathways for young athletes to secure domestic, national, and international football league opportunities, training models, and infrastructure.",
                img: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=600&auto=format&fit=crop"
              }
            ].map((chap, idx) => (
              <div key={idx} className="flex flex-col gap-4 bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-150 p-6">
                <div className="relative w-full h-[220px] rounded-xl overflow-hidden shadow-inner">
                  <Image
                    src={chap.img}
                    alt={chap.title}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="text-left flex flex-col gap-2 mt-2">
                  <span className="text-[10px] font-bold text-primary-sky uppercase tracking-widest">CHAPTER {chap.num}</span>
                  <h3 className="font-display text-xl font-black uppercase text-secondary-navy leading-none mt-0.5">{chap.title}</h3>
                  <p className="text-xs text-secondary-navy/70 leading-relaxed mt-1">{chap.body}</p>
                  
                  {chap.ecosystem && (
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      {[
                        "Bangalore Super Strikers FC",
                        "Pondicherry Super Strikers FC",
                        "Chennai Super Strikers FC",
                        "Bangalore Football School"
                      ].map((entity, keyIdx) => (
                        <div key={keyIdx} className="bg-background-soft border border-gray-250/50 rounded-lg p-2.5 flex items-center gap-1.5">
                          <Shield className="h-3.5 w-3.5 text-primary-sky fill-primary-sky/15 shrink-0" />
                          <span className="text-[8px] font-black text-secondary-navy uppercase tracking-tight leading-tight">{entity}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. INVESTOR & BUSINESS STORIES (INSIDE SUPERSTRIKER) */}
      <section ref={businessSectionRef} className="py-24 bg-[#101B4D] text-white border-y border-white/10 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Glow backdrop effects */}
        <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-[#6C4CE6]/15 rounded-full blur-[80px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#3FA9F5]">Venture & Infrastructure</span>
            <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mt-1">
              Inside SuperStriker International
            </h2>
            <div className="h-1 w-12 bg-[#2457D6] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Business news write-up */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-left">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#3FA9F5]">Forbes-Style Business Showcase</span>
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
                    <span className="text-3xl sm:text-4xl font-display font-black text-[#6C4CE6]">
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
                  className="inline-flex items-center gap-2 rounded-full bg-[#2457D6] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-gradient-to-r hover:from-[#2457D6] hover:to-[#6C4CE6] transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[#2457D6]/20"
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
                    fill="url(#violetGradient)"
                    opacity="0.25"
                  />
                  
                  {/* Trend line */}
                  <path
                    d="M0 180 Q100 130 200 100 T400 40"
                    fill="none"
                    stroke="#6C4CE6"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  
                  {/* Key highlights dots */}
                  <circle cx="200" cy="100" r="5" fill="#2457D6" stroke="#ffffff" strokeWidth="2" />
                  <circle cx="400" cy="40" r="5" fill="#2457D6" stroke="#ffffff" strokeWidth="2" />

                  {/* Gradient definition */}
                  <defs>
                    <linearGradient id="violetGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#6C4CE6" />
                      <stop offset="100%" stopColor="rgba(108,76,230,0)" />
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
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#2457D6]">Alliance Network</span>
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-[#101B4D] mt-1">
            Partners Who Support Our Journey
          </h3>
          
          {/* Logo Scroll Grid */}
          <div className="w-full mt-10">
            <div className="flex flex-wrap items-center justify-center gap-6 py-4">
              {["KSFA Federation", "AIFF Scout Panel", "Bangalore School Board", "Pondicherry Sports Ministry"].map((logo, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 bg-[#F5F7FC] border border-[#2457D6]/5 px-8 py-4 rounded-xl shadow-sm hover:border-[#2457D6]/35 hover:shadow-[0_0_20px_rgba(36,87,214,0.12)] transition-all duration-300 group"
                >
                  <Shield className="h-5 w-5 fill-[#101B4D] text-[#101B4D] transition-transform duration-300 group-hover:scale-110" />
                  <span className="font-display text-xs font-black uppercase tracking-tight text-[#101B4D] whitespace-nowrap">
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
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#2457D6]">Weekly Dispatch</span>
          <h2 className="font-display text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#101B4D]">
            Subscribe To SuperStriker Football Stories
          </h2>
          <p className="text-xs sm:text-sm text-[#4A5568] max-w-md leading-relaxed">
            Get tactical insights, scout reviews, matching brief analytics, and strategic investment options sent to your corporate mail twice a month.
          </p>

          <form onSubmit={(e) => { e.preventDefault(); alert("Subscription successful!"); }} className="flex flex-col sm:flex-row gap-2 w-full max-w-md mt-4">
            <input
              type="email"
              placeholder="Business email address"
              required
              className="bg-white rounded-full border border-gray-250 px-5 py-3 text-xs text-[#101B4D] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2457D6]/20 flex-grow"
            />
            <button
              type="submit"
              className="rounded-full bg-[#2457D6] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#6C4CE6] transition-all hover:scale-103 shrink-0"
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
