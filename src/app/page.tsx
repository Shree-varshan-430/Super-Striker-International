"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
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
      <section className="relative min-h-[95vh] flex flex-col justify-between pt-10 pb-6 bg-background-soft">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center flex-grow">
          {/* Left: Cinematic image block */}
          <div className="lg:col-span-7 relative h-[350px] sm:h-[500px] w-full overflow-hidden" ref={heroImgContainerRef}>
            <Image
              src={spotlightStory.image}
              alt="Grassroots Football Training"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary-navy/40 to-transparent" />
            <span className="absolute top-6 left-6 inline-flex bg-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-secondary-navy shadow-md">
              {spotlightStory.category}
            </span>
          </div>

          {/* Right: Text details */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-left pr-4">
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary-sky leading-none">
              Spotlight Journalism
            </span>
            
            <h1 ref={heroHeadlineRef} className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-secondary-navy leading-[1.05]">
              {spotlightStory.title.split(" ").map((word, idx) => (
                <span key={idx} className="word-wrap inline-block overflow-hidden mr-2">
                  <span className="inline-block">{word}</span>
                </span>
              ))}
            </h1>

            <p className="text-sm sm:text-base text-secondary-navy/80 leading-relaxed max-w-md">
              {spotlightStory.description}
            </p>

            <div className="flex items-center gap-6 border-t border-gray-200/60 pt-6 text-xs font-semibold text-secondary-navy/60">
              <div className="flex flex-col">
                <span className="text-[9px] uppercase tracking-wider text-secondary-navy/40 font-bold">Written By</span>
                <span className="text-secondary-navy font-bold mt-0.5">{spotlightStory.author}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] uppercase tracking-wider text-secondary-navy/40 font-bold">Published</span>
                <span className="mt-0.5">{spotlightStory.date}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] uppercase tracking-wider text-secondary-navy/40 font-bold">Duration</span>
                <span className="mt-0.5">{spotlightStory.readTime}</span>
              </div>
            </div>
            
            <div className="mt-2">
              <Link 
                href="/news/building-next-generation" 
                className="inline-flex items-center gap-2 rounded-full bg-secondary-navy px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-primary-sky hover:text-secondary-navy transition-all active:scale-95"
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
        <div className="giant-network-card w-[94vw] h-[85vh] rounded-[32px] bg-[#061324] border border-white/10 shadow-2xl relative flex flex-col justify-between py-12 overflow-hidden">
          
          {/* Section title header */}
          <div className="px-16 text-left flex flex-col gap-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary-sky">OUR NETWORK</span>
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
              <div className="ecosystem-slide w-[75vw] h-[55vh] flex-shrink-0 flex items-center gap-12 text-left relative bg-transparent">
                {/* Left: Image */}
                <div className="w-[45%] h-full relative rounded-2xl overflow-hidden border border-white/10 shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1200&auto=format&fit=crop"
                    alt="Bangalore Super Strikers FC"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Right: Info */}
                <div className="flex-grow flex flex-col gap-4 card-text-anim justify-center pr-8">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-primary-sky">FOUNDATION 01</span>
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
                      className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-xs font-bold uppercase tracking-wider text-secondary-navy hover:bg-primary-sky hover:text-secondary-navy transition-all"
                    >
                      Explore Club Story
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Slide 2 */}
              <div className="ecosystem-slide w-[75vw] h-[55vh] flex-shrink-0 flex items-center gap-12 text-left relative bg-transparent">
                {/* Left: Image */}
                <div className="w-[45%] h-full relative rounded-2xl overflow-hidden border border-white/10 shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1518063319789-7217e6706b04?q=80&w=1200&auto=format&fit=crop"
                    alt="Pondicherry Super Strikers FC"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Right: Info */}
                <div className="flex-grow flex flex-col gap-4 card-text-anim justify-center pr-8">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-primary-sky">FOUNDATION 02</span>
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
                      className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-xs font-bold uppercase tracking-wider text-secondary-navy hover:bg-primary-sky hover:text-secondary-navy transition-all"
                    >
                      Explore Club Story
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Slide 3 */}
              <div className="ecosystem-slide w-[75vw] h-[55vh] flex-shrink-0 flex items-center gap-12 text-left relative bg-transparent">
                {/* Left: Image */}
                <div className="w-[45%] h-full relative rounded-2xl overflow-hidden border border-white/10 shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1529900748604-07564a03e7a6?q=80&w=1200&auto=format&fit=crop"
                    alt="Chennai Super Strikers FC"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Right: Info */}
                <div className="flex-grow flex flex-col gap-4 card-text-anim justify-center pr-8">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-primary-sky">FOUNDATION 03</span>
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
                      className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-xs font-bold uppercase tracking-wider text-secondary-navy hover:bg-primary-sky hover:text-secondary-navy transition-all"
                    >
                      Explore Club Story
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Slide 4 */}
              <div className="ecosystem-slide w-[75vw] h-[55vh] flex-shrink-0 flex items-center gap-12 text-left relative bg-transparent">
                {/* Left: Image */}
                <div className="w-[45%] h-full relative rounded-2xl overflow-hidden border border-white/10 shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1431324155629-1a6edd1d141e?q=80&w=1200&auto=format&fit=crop"
                    alt="Bangalore Football School"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Right: Info */}
                <div className="flex-grow flex flex-col gap-4 card-text-anim justify-center pr-8">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-primary-sky">FOUNDATION 04</span>
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
                      className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-xs font-bold uppercase tracking-wider text-secondary-navy hover:bg-primary-sky hover:text-secondary-navy transition-all"
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
        <div className="w-full rounded-[24px] bg-[#061324] border border-white/10 shadow-2xl p-6 flex flex-col gap-8">
          
          <div className="text-left flex flex-col gap-1">
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary-sky">OUR NETWORK</span>
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
              <div key={idx} className="relative w-full h-[50vh] rounded-xl overflow-hidden shadow-md border border-white/10 flex flex-col justify-end p-6 bg-[#061324]">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover opacity-35"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061324] via-[#061324]/40 to-transparent" />
                
                <div className="relative z-10 text-left flex flex-col gap-3">
                  <div className="flex justify-between items-start border-b border-white/10 pb-2">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-primary-sky">FOUNDATION {card.num}</span>
                      <h3 className="font-display text-lg font-black uppercase text-white leading-tight mt-0.5">{card.title}</h3>
                      <span className="text-[10px] font-semibold text-gray-300">{card.location}</span>
                    </div>
                    <Shield className="h-5 w-5 text-primary-sky fill-primary-sky/25" />
                  </div>
                  <p className="text-xs text-gray-200 leading-relaxed line-clamp-2">
                    {card.story}
                  </p>
                  <div className="pt-1">
                    <Link
                      href={card.link}
                      className="inline-flex items-center gap-1 bg-white px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider text-secondary-navy hover:bg-primary-sky hover:text-secondary-navy transition-all"
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

      {/* 5. FOUNDER & ORGANIZATION STORIES (MAGAZINE INTERVIEW) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[10px] font-bold uppercase tracking-widest text-primary-sky">Heritage Interviews</span>
          <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-secondary-navy mt-1">
            Stories Behind The Vision
          </h2>
          <div className="h-1 w-12 bg-primary-sky mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Portrait Image with floating hover effect */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              whileHover={{ y: -6, rotate: -1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative h-[450px] w-full max-w-[360px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
            >
              <Image
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop"
                alt="Ramakrishnan President Portrait"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* Quote details */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left relative pl-4 lg:pl-10">
            <div className="absolute left-0 top-0 text-primary-sky/20 font-serif text-9xl pointer-events-none select-none -translate-x-4 -translate-y-8">
              “
            </div>
            
            <p className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-secondary-navy relative z-10 leading-snug">
              Football is not only about creating players. It is about creating opportunities and dreams.
            </p>
            
            <div className="flex flex-col text-xs font-bold uppercase tracking-wider text-secondary-navy/40 border-b border-gray-100 pb-4 mb-2">
              <span className="text-secondary-navy text-sm font-extrabold">Ramakrishnan (Ram)</span>
              <span className="mt-1">President, Bangalore Super Strikers FC</span>
            </div>

            <div className="space-y-4 text-sm text-secondary-navy/70 leading-relaxed">
              <p>
                Inspired by his parents, Mr. Devaraj and Mrs. Rajammal Devaraj, who dreamed of seeing their grandson play for India, Ram carried the passion forward.
              </p>
              <p>
                As a former athlete who experienced the struggles of middle-class sports development due to lacking resources, he constructed a professional infrastructure where young athletes receive tutoring, scientific conditioning, and KSFA / AIFF league exposure. Today, Ram serves as an AIFF-C coach and active KSFA referee.
              </p>
            </div>
            
            <div className="mt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-secondary-navy hover:text-primary-sky transition-colors"
              >
                Read Heritage Interview
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. INVESTOR & BUSINESS STORIES (INSIDE SUPERSTRIKER) */}
      <section ref={businessSectionRef} className="py-24 bg-background-soft border-y border-gray-150 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary-sky">Venture & Infrastructure</span>
            <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-secondary-navy mt-1">
              Inside SuperStriker International
            </h2>
            <div className="h-1 w-12 bg-primary-sky mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Business news write-up */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-left">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary-sky">Forbes-Style Business Showcase</span>
                <h3 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-tight text-secondary-navy mt-1">
                  Investing in the Next Multi-Billion Football Market
                </h3>
              </div>
              <p className="text-sm text-secondary-navy/70 leading-relaxed">
                SuperStriker International is building a scalable business model connecting grassroots scouting, infrastructure assets (turfs, residential dorms), and elite player registries. By targeting district markets in South India, we unlock high-margin partnerships and transfer fee options.
              </p>

              {/* Counters Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 my-4 border-y border-gray-200/60 py-6">
                {[
                  { target: 1500, suffix: "+", label: "Grassroots Players" },
                  { target: 5, suffix: "", label: "Professional Fields" },
                  { target: 3, suffix: "", label: "Regional Clubs" },
                  { target: 100, suffix: "%", label: "Talent Pathway" }
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center">
                    <span className="text-3xl sm:text-4xl font-display font-black text-secondary-navy">
                      <span className="stat-counter" data-target={item.target}>0</span>
                      {item.suffix}
                    </span>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-secondary-navy/40 mt-1">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                <Link
                  href="/investors"
                  className="inline-flex items-center gap-2 rounded-full bg-secondary-navy px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-primary-sky hover:text-secondary-navy transition-all"
                >
                  Invest In Future Champions
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Mock Financial/Talent growth area SVG chart */}
            <div className="lg:col-span-5 bg-white border border-gray-150 p-6 rounded-2xl shadow-lg flex flex-col gap-6">
              <div>
                <h4 className="font-display text-xs font-bold uppercase tracking-widest text-secondary-navy">
                  Talent Roster Growth Projection
                </h4>
                <p className="text-[10px] text-secondary-navy/40 uppercase tracking-wider mt-0.5">
                  Grassroots Discovery Base vs Academy Cohorts
                </p>
              </div>

              {/* Chart SVG */}
              <div className="h-56 w-full relative">
                <svg viewBox="0 0 400 200" className="w-full h-full">
                  {/* Grid Lines */}
                  <line x1="0" y1="50" x2="400" y2="50" stroke="#f5f8fc" strokeWidth="1" />
                  <line x1="0" y1="100" x2="400" y2="100" stroke="#f5f8fc" strokeWidth="1" />
                  <line x1="0" y1="150" x2="400" y2="150" stroke="#f5f8fc" strokeWidth="1" />
                  
                  {/* Area fill */}
                  <path
                    d="M0 200 L0 180 Q100 130 200 100 T400 40 L400 200 Z"
                    fill="url(#skyGradient)"
                    opacity="0.3"
                  />
                  
                  {/* Trend line */}
                  <path
                    d="M0 180 Q100 130 200 100 T400 40"
                    fill="none"
                    stroke="#8ed8f8"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  
                  {/* Key highlights dots */}
                  <circle cx="200" cy="100" r="5" fill="#0b1f3a" stroke="#ffffff" strokeWidth="2" />
                  <circle cx="400" cy="40" r="5" fill="#0b1f3a" stroke="#ffffff" strokeWidth="2" />

                  {/* Gradient definition */}
                  <defs>
                    <linearGradient id="skyGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#8ed8f8" />
                      <stop offset="100%" stopColor="#ffffff" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div className="flex justify-between items-center text-[9px] font-bold uppercase tracking-wider text-secondary-navy/40 pt-2 border-t border-gray-100">
                <span>Phase 1 (2023)</span>
                <span>Phase 3 (2025)</span>
                <span>Phase 5 (2026+)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PARTNERS & SPONSORS SECTION */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-7xl mx-auto border-b border-gray-100 pb-16">
          <span className="text-[10px] font-bold uppercase tracking-widest text-primary-sky">Alliance Network</span>
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-secondary-navy mt-1">
            Partners Who Support Our Journey
          </h3>
          
          {/* logo scroll container */}
          <div className="w-full overflow-hidden mt-10 relative">
            <div className="flex items-center justify-center gap-12 sm:gap-24 opacity-40 grayscale hover:opacity-75 transition-opacity py-4">
              {["KSFA Federation", "AIFF Scout Panel", "Bangalore School Board", "Pondicherry Sports Ministry"].map((logo, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Shield className="h-5 w-5 fill-secondary-navy text-secondary-navy" />
                  <span className="font-display text-sm font-black uppercase tracking-tight text-secondary-navy whitespace-nowrap">
                    {logo}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. EDITORIAL FEATURED NEWSLETTER */}
      <section className="py-20 bg-background-soft border-t border-gray-100 px-4">
        <div className="max-w-4xl mx-auto text-center flex flex-col gap-6 items-center">
          <span className="text-[10px] font-bold uppercase tracking-widest text-primary-sky">Weekly Dispatch</span>
          <h2 className="font-display text-3xl sm:text-4xl font-black uppercase tracking-tight text-secondary-navy">
            Subscribe To SuperStriker Football Stories
          </h2>
          <p className="text-xs sm:text-sm text-secondary-navy/60 max-w-md leading-relaxed">
            Get tactical insights, scout reviews, matching brief analytics, and strategic investment options sent to your corporate mail twice a month.
          </p>

          <form onSubmit={(e) => { e.preventDefault(); alert("Subscription successful!"); }} className="flex flex-col sm:flex-row gap-2 w-full max-w-md mt-4">
            <input
              type="email"
              placeholder="Business email address"
              required
              className="bg-white rounded-full border border-gray-200 px-5 py-3 text-xs text-secondary-navy placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-sky/20 flex-grow"
            />
            <button
              type="submit"
              className="rounded-full bg-secondary-navy px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-primary-sky hover:text-secondary-navy transition-all shrink-0"
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
