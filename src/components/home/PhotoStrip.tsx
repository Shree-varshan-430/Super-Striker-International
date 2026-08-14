"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Camera } from "lucide-react";

const GALLERY_PHOTOS = [
  { src: "/images/WhatsApp Image 2026-08-07 at 8.29.49 AM.jpeg", title: "Youth Squad Drills", location: "Bangalore Hub" },
  { src: "/images/WhatsApp Image 2026-08-07 at 8.29.50 AM.jpeg", title: "Goalkeeper Precision Practice", location: "Turf Arena" },
  { src: "/images/WhatsApp Image 2026-08-07 at 8.29.51 AM.jpeg", title: "Championship Match Action", location: "State League" },
  { src: "/images/WhatsApp Image 2026-08-07 at 8.29.52 AM.jpeg", title: "Grassroots Scouting Festival", location: "School Tournament" },
  { src: "/images/WhatsApp Image 2026-08-11 at 8.34.01 AM.jpeg", title: "Tactical Training Program", location: "FIFA Pitch" },
  { src: "/images/WhatsApp Image 2026-08-11 at 8.34.05 AM.jpeg", title: "Academy Squad Lineup", location: "Elite Cohort" },
  { src: "/images/WhatsApp Image 2026-08-11 at 8.34.07 AM.jpeg", title: "Senior Division Fixture", location: "Matchday" },
  { src: "/images/WhatsApp Image 2026-08-11 at 8.34.08 AM.jpeg", title: "District Selection Trials", location: "Scout Showcase" }
];

export default function PhotoStrip() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      const target = direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
      scrollRef.current.scrollTo({ left: target, behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 sm:py-24 bg-white border-b border-gray-100 select-none">
      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-6 border-b border-gray-150 gap-4">
          <div className="flex flex-col items-start gap-1 text-left border-l-4 border-[#10143A] pl-4 sm:pl-6">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#DCE135] bg-[#10143A] px-3 py-1 rounded">
              VISUAL REEL
            </span>
            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#10143A] mt-1">
              Latest Moments On The Pitch
            </h2>
            <p className="text-xs sm:text-base text-[#4B5563] mt-1 max-w-xl font-medium">
              Live snapshots from our daily academy training drills, senior division fixtures, and regional scout trials.
            </p>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3 self-end sm:self-auto">
            <button
              onClick={() => scroll("left")}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-50 text-[#10143A] hover:bg-[#10143A] hover:text-white transition-all active:scale-95 shadow-sm border border-gray-200"
              aria-label="Previous photos"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-50 text-[#10143A] hover:bg-[#10143A] hover:text-white transition-all active:scale-95 shadow-sm border border-gray-200"
              aria-label="Next photos"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Gallery Strip */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 pb-6 pt-2 snap-x snap-mandatory scrollbar-none select-none scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {GALLERY_PHOTOS.map((photo, index) => (
            <div
              key={index}
              className="w-[280px] sm:w-[360px] lg:w-[400px] flex-shrink-0 snap-start flex flex-col gap-3 group"
            >
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-lg bg-gray-100">
                <Image
                  src={photo.src}
                  alt={photo.title}
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-w-768px) 100vw, 400px"
                />
              </div>

              <div className="flex items-center justify-between px-1 text-left">
                <div>
                  <h3 className="font-display text-sm sm:text-base font-black uppercase tracking-tight text-[#10143A]">
                    {photo.title}
                  </h3>
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                    {photo.location}
                  </span>
                </div>
                <span className="flex items-center gap-1 text-[9px] font-black uppercase tracking-widest text-[#10143A] bg-[#DCE135] px-2.5 py-1 rounded">
                  <Camera className="h-3 w-3" />
                  HD 4K
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
