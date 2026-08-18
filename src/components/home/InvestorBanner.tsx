"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function InvestorBanner() {
  return (
    <section className="relative w-full min-h-[440px] sm:min-h-[520px] flex items-center justify-start p-8 sm:p-16 lg:p-24 overflow-hidden group select-none border-b border-gray-200 bg-[#11123c]">
      <Image
        src="/images/news-pitch-sponsorship.jpg"
        alt="Corporate Pitch"
        fill
        className="object-cover opacity-50 transition-transform duration-700 group-hover:scale-103"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#11123c] via-[#11123c]/70 to-transparent z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col gap-4 text-left max-w-2xl border-l-4 border-[#e9d319] pl-6 py-2">
        <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#e9d319]">
          COMMERCIAL SPONSORSHIPS • CHAPTER 03
        </span>
        <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight">
          Invest In Football Infrastructure
        </h2>
        <p className="text-xs sm:text-base text-white/80 leading-relaxed max-w-xl font-normal">
          Discover franchise ownership, smart pitch development, and high-visibility corporate sponsorship opportunities across South India&apos;s premier football network.
        </p>
        <div className="pt-2">
          <Link
            href="/investors#enquire"
            className="thunderhill-btn thunderhill-btn-gold"
          >
            <span>Inquire About Sponsorship</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
