"use client";

import React, { useState, useEffect } from "react";
import { Radio } from "lucide-react";

const TICKER_ITEMS = [
  "BANGALORE SSFC: Pre-season physical telemetry reports show 15% increase in squad cardiovascular recoveries. U-15 selections active.",
  "PONDICHERRY RESIDENCY: U-15 residency cohort completes state league registration drills. Player contracts locked.",
  "SQUAD UPDATE: Striker Sanjay Raj returns to full team practice following KSFA tournament selection camp trials.",
  "BFS ACADEMY: Smart turf arena construction targets complete structural installation by end of next quarter.",
];

export default function LiveTicker() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % TICKER_ITEMS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-[#DCE135] text-[#10143A] py-3 select-none border-b border-[#10143A]/10 relative z-30">
      <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6">
        
        {/* Left Badge */}
        <div className="flex items-center gap-2 shrink-0">
          <Radio className="h-3.5 w-3.5 text-[#10143A] animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-widest bg-[#10143A] text-white px-2 py-0.5 rounded">
            STRIKER NOW
          </span>
        </div>

        {/* Sliding text content */}
        <div className="flex-grow overflow-hidden h-5 relative">
          <div 
            key={index}
            className="text-[11px] font-bold uppercase tracking-wider text-left transition-all duration-500 absolute inset-0 flex items-center whitespace-nowrap overflow-hidden text-ellipsis"
            style={{
              animation: "slideIn 0.5s ease-out forwards"
            }}
          >
            {TICKER_ITEMS[index]}
          </div>
        </div>

        {/* Live Indicator */}
        <span className="hidden sm:inline text-[9px] font-black uppercase tracking-wider text-[#10143A]/70">
          Telemetry Active
        </span>

      </div>

      <style jsx global>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
