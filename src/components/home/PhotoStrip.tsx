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
    <section className="py-24 sm:py-32 bg-white border-b border-gray-200 select-none">
      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 pb-6 border-b border-gray-200 gap-4">
          <div className="flex flex-col items-start gap-2 text-left border-l-4 border-[#11123c] pl-4 sm:pl-6">
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#a29142]">
              PITCH REEL • MATCHDAY ARCHIVE
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#11123c]">
              Moments On The Pitch
            </h2>
            <p className="text-xs sm:text-sm text-[#4B5563] font-normal max-w-xl">
              Live snapshots from our daily academy training drills, senior division fixtures, and regional scout trials.
            </p>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2 self-end sm:self-auto">
            <button
              onClick={() => scroll("left")}
              className="flex h-10 w-10 items-center justify-center bg-gray-50 text-[#11123c] hover:bg-[#11123c] hover:text-white transition-colors border border-gray-200"
              aria-label="Previous photos"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="flex h-10 w-10 items-center justify-center bg-gray-50 text-[#11123c] hover:bg-[#11123c] hover:text-white transition-colors border border-gray-200"
              aria-label="Next photos"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Gallery Strip */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 pb-4 pt-2 snap-x snap-mandatory scrollbar-none select-none scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {GALLERY_PHOTOS.map((photo, index) => (
            <div
              key={index}
              className="w-[280px] sm:w-[360px] lg:w-[400px] flex-shrink-0 snap-start flex flex-col gap-3 group bg-gray-50 border border-gray-200 p-3"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100 border border-gray-200">
                <Image
                  src={photo.src}
                  alt={photo.title}
                  fill
                  quality={85}
                  className="object-cover transition-transform duration-500 group-hover:scale-103"
                  sizes="(max-w-768px) 100vw, 400px"
                />
              </div>

              <div className="flex items-center justify-between px-1 text-left pt-1">
                <div>
                  <h3 className="font-display text-sm sm:text-base font-black uppercase tracking-tight text-[#11123c]">
                    {photo.title}
                  </h3>
                  <span className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-wider">
                    {photo.location}
                  </span>
                </div>
                <span className="flex items-center gap-1 text-[9px] font-mono font-bold uppercase tracking-widest text-[#11123c] bg-[#e9d319] px-2 py-0.5">
                  <Camera className="h-3 w-3" />
                  MATCH REEL
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
