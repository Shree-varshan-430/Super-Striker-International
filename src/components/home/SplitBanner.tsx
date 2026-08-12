"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function SplitBanner() {
  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-2 select-none border-b border-gray-150">
      
      {/* Left Column: Academy Pathway */}
      <div className="relative min-h-[380px] sm:min-h-[480px] flex items-center justify-start p-8 sm:p-16 lg:p-24 overflow-hidden group border-b md:border-b-0 md:border-r border-gray-150">
        <Image
          src="/images/training-1.jpg"
          alt="Academy Drills"
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-105"
          sizes="(max-w-768px) 100vw, 50vw"
        />
        {/* Cinematic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#10143A] via-[#10143A]/80 to-transparent z-10" />
        
        {/* Content */}
        <div className="relative z-20 flex flex-col gap-4 text-left max-w-md">
          <span className="text-[10px] font-black uppercase tracking-widest text-[#DCE135] bg-[#DCE135]/15 px-3 py-1 rounded-full w-fit">
            Elite Academy
          </span>
          <h3 className="font-display text-2xl sm:text-4xl font-black uppercase tracking-tight text-white leading-tight">
            TRAIN WITH THE BEST
          </h3>
          <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
            Bangalore Football School residential academies are scout-compliant pathways to national leagues and first-team selection.
          </p>
          <Link
            href="/football-school/bangalore-football-school"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white border-b-2 border-[#DCE135] pb-0.5 hover:text-[#DCE135] transition-colors w-fit mt-2"
          >
            Explore Academy Pathways
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Right Column: Investor Pathway */}
      <div className="relative min-h-[380px] sm:min-h-[480px] flex items-center justify-start p-8 sm:p-16 lg:p-24 overflow-hidden group">
        <Image
          src="/images/news-pitch-sponsorship.jpg"
          alt="Corporate Pitch"
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-105"
          sizes="(max-w-768px) 100vw, 50vw"
        />
        {/* Cinematic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#10143A] via-[#10143A]/80 to-transparent z-10" />
        
        {/* Content */}
        <div className="relative z-20 flex flex-col gap-4 text-left max-w-md">
          <span className="text-[10px] font-black uppercase tracking-widest text-[#DCE135] bg-[#DCE135]/15 px-3 py-1 rounded-full w-fit">
            Investments
          </span>
          <h3 className="font-display text-2xl sm:text-4xl font-black uppercase tracking-tight text-white leading-tight">
            INVEST IN FOOTBALL WEALTH
          </h3>
          <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
            Discover franchise ownership and commercial sponsorship opportunities in South India&apos;s fastest-growing football club league network.
          </p>
          <Link
            href="/investors#enquire"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white border-b-2 border-[#DCE135] pb-0.5 hover:text-[#DCE135] transition-colors w-fit mt-2"
          >
            Inquire About Sponsorship
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

    </section>
  );
}
