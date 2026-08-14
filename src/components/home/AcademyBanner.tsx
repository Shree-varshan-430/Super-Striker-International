"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function AcademyBanner() {
  return (
    <section className="relative w-full min-h-[420px] sm:min-h-[500px] flex items-center justify-start p-8 sm:p-16 lg:p-24 overflow-hidden group select-none border-b border-gray-150">
      <Image
        src="/images/WhatsApp Image 2026-08-07 at 8.29.48 AM.jpeg"
        alt="Academy Drills"
        fill
        className="object-cover transition-transform duration-1000 group-hover:scale-103"
        sizes="100vw"
        priority
      />
      {/* Cinematic gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#10143A] via-[#10143A]/85 to-transparent z-10" />
      
      {/* Content */}
      <div className="relative z-20 flex flex-col gap-5 text-left max-w-2xl border-l-8 border-[#DCE135] pl-6 py-2">
        <span className="text-[10px] font-black uppercase tracking-widest text-[#DCE135] bg-[#DCE135]/15 px-3.5 py-1 rounded-full w-fit">
          Elite Academy
        </span>
        <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
          TRAIN WITH THE BEST
        </h2>
        <p className="text-xs sm:text-base text-white/80 leading-relaxed max-w-xl">
          Bangalore Football School residential academies are scout-compliant pathways to national leagues and first-team selection.
        </p>
        <Link
          href="/football-school/bangalore-football-school"
          className="inline-flex items-center gap-1.5 rounded-full bg-[#DCE135] text-[#10143A] px-6 py-3.5 text-xs font-bold uppercase tracking-wider transition-all hover:bg-white hover:text-[#10143A] hover:scale-105 active:scale-95 shadow-md w-fit mt-2"
        >
          Explore Academy Pathways
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
