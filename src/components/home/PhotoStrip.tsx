"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";

const GALLERY_PHOTOS = [
  { src: "/images/training-1.jpg", alt: "Youth Squad Drills" },
  { src: "/images/training-2.jpg", alt: "Goalkeeper Practice" },
  { src: "/images/match-1.jpg", alt: "Championship Match Action" },
  { src: "/images/match-2.jpg", alt: "Grassroots Scouting Festival" },
  { src: "/images/news-grassroots.jpg", alt: "Youth Training Program" },
  { src: "/images/news-academy-u15.jpg", alt: "Academy Team Presentation" },
  { src: "/images/news-chennai-league.jpg", alt: "State League Lineup" },
  { src: "/images/news-scouting.jpg", alt: "District Selection Trials" }
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
    <section className="py-20 bg-white border-b border-gray-150 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex justify-between items-end mb-10 pb-4 border-b border-gray-150">
          <div className="flex flex-col items-start gap-1 text-left border-l-4 border-[#10143A] pl-4">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#DCE135] bg-[#10143A] px-2.5 py-0.5 rounded">
              GALLERY
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#0A1028] mt-1">
              LATEST MOMENTS ON THE PITCH
            </h2>
          </div>

          {/* Controls */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-[#10143A] hover:bg-[#10143A] hover:text-white transition-all active:scale-95 shadow-sm"
              aria-label="Previous photos"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-[#10143A] hover:bg-[#10143A] hover:text-white transition-all active:scale-95 shadow-sm"
              aria-label="Next photos"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Gallery Strip */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory scrollbar-none select-none scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {GALLERY_PHOTOS.map((photo, index) => (
            <div
              key={index}
              className="w-[240px] sm:w-[300px] flex-shrink-0 snap-start relative overflow-hidden rounded-lg aspect-[4/3] group bg-gray-100 border border-gray-150"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                sizes="(max-w-768px) 100vw, 300px"
              />
              {/* Subtle hover overlay badge */}
              <div className="absolute inset-0 bg-[#10143A]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                <div className="bg-white/95 text-[#10143A] px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5 shadow-md">
                  <ImageIcon className="h-3.5 w-3.5" />
                  <span>View Photo</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
