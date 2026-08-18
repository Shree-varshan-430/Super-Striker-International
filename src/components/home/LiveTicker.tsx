"use client";

import React, { useState, useEffect } from "react";

const TICKER_ITEMS = [
  "CHAMPIONSHIP TRIALS: All-India Youth Scouting Festivals & Academy Admissions Active across Karnataka and Tamil Nadu.",
  "BANGALORE SSFC: Senior First-Team completes pre-season GPS telemetry screenings. KSFA Super Division campaign roster locked.",
  "PONDICHERRY RESIDENCY: High-Performance Center introduces specialized physiotherapy protocols & sports science nutritional plans.",
  "SMART INFRASTRUCTURE: Phase-1 FIFA-standard turf arena installation reaches structural completion in Bengaluru sports corridor."
];

export default function LiveTicker() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % TICKER_ITEMS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-[#e9d319] text-[#11123c] py-2.5 select-none border-b border-[#11123c]/15 relative z-30 font-mono">
      <div className="max-w-[95%] 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6">
        
        {/* Left Badge */}
        <div className="flex items-center gap-2.5 shrink-0">
          <span className="w-2 h-2 bg-[#11123c]" />
          <span className="text-[10px] font-mono font-black uppercase tracking-[0.22em] bg-[#11123c] text-white px-2.5 py-0.5">
            DISPATCH
          </span>
        </div>

        {/* Sliding text content */}
        <div className="flex-grow overflow-hidden h-5 relative">
          <div 
            key={index}
            className="text-[11px] font-mono font-bold uppercase tracking-wider text-left absolute inset-0 flex items-center whitespace-nowrap overflow-hidden text-ellipsis transition-opacity duration-300"
          >
            {TICKER_ITEMS[index]}
          </div>
        </div>

        {/* Status Indicator */}
        <span className="hidden sm:inline text-[9px] font-mono font-bold uppercase tracking-[0.2em] text-[#11123c]/80">
          STATUS: ACTIVE
        </span>

      </div>
    </div>
  );
}
