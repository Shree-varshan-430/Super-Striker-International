"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function AcademyBanner() {
  return (
    <section className="relative w-full min-h-[440px] sm:min-h-[520px] flex items-center justify-start p-8 sm:p-16 lg:p-24 overflow-hidden group select-none border-b border-gray-200 bg-[#11123c]">
      <Image
        src="/images/WhatsApp Image 2026-08-07 at 8.29.48 AM.jpeg"
        alt="Academy Drills"
        fill
        className="object-cover opacity-50 transition-transform duration-700 group-hover:scale-103"
        sizes="100vw"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#11123c] via-[#11123c]/70 to-transparent z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col gap-4 text-left max-w-2xl border-l-4 border-[#e9d319] pl-6 py-2">
        <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#e9d319]">
          RESIDENTIAL ACADEMY • CHAPTER 02
        </span>
        <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight">
          Where Champions Are Made
        </h2>
        <p className="text-xs sm:text-base text-white/80 leading-relaxed max-w-xl font-normal">
          Bangalore Football School residential academy combines formal academic schooling with licensed European-standard training, scientific sports nutrition, and direct pathways to national leagues.
        </p>
        <div className="pt-2">
          <Link
            href="/football-school/bangalore-football-school"
            className="thunderhill-btn thunderhill-btn-gold"
          >
            <span>Join The Academy</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
