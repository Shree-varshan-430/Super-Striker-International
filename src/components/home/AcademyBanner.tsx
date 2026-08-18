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
      {/* Black full accent overlay & Cinematic gradient overlay */}
      <div className="absolute inset-0 bg-black/45 z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-[#11123c]/70 to-transparent z-10" />
      
      {/* Brand accent wedges on bottom right */}
      <div 
        className="absolute bottom-0 right-0 w-32 h-32 sm:w-44 sm:h-44 md:w-56 md:h-56 bg-[#11123c] pointer-events-none z-15 translate-x-2 translate-y-2 lg:block hidden" 
        style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }} 
      />
      <div 
        className="absolute bottom-0 right-0 w-28 h-28 sm:w-40 sm:h-40 md:w-52 md:h-52 bg-[#e9d319] pointer-events-none z-20 lg:block hidden" 
        style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }} 
      />

      {/* Content */}
      <div className="relative z-20 flex flex-col gap-5 text-left max-w-2xl border-l-8 border-[#e9d319] pl-6 py-2">
        <span className="text-[10px] font-black uppercase tracking-widest text-[#e9d319] bg-[#e9d319]/15 px-3.5 py-1 rounded-full w-fit">
          RESIDENTIAL ACADEMY
        </span>
        <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
          WHERE CHAMPIONS ARE MADE
        </h2>
        <p className="text-xs sm:text-base text-white/85 leading-relaxed max-w-xl">
          Bangalore Football School residential academy seamlessly combines top-tier academic schooling with licensed European-standard training, scientific sports nutrition, and direct pathways to national leagues.
        </p>
        <Link
          href="/football-school/bangalore-football-school"
          className="inline-flex items-center gap-1.5 rounded-full bg-[#e9d319] text-[#11123c] px-7 py-4 text-xs font-bold uppercase tracking-wider transition-all hover:bg-white hover:text-[#11123c] hover:scale-105 active:scale-95 shadow-md w-fit mt-2"
        >
          Join The Academy
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
