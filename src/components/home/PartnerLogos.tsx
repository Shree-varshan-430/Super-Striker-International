"use client";

import React from "react";
import { Shield } from "lucide-react";

const PARTNERS = [
  { name: "KSFA Federation", subtitle: "Senior Division" },
  { name: "AIFF Scout Panel", subtitle: "Talent Pathway" },
  { name: "Bangalore School Board", subtitle: "Youth Development" },
  { name: "Pondicherry Sports Ministry", subtitle: "Infrastructure Partner" }
];

export default function PartnerLogos() {
  return (
    <section className="py-16 bg-[#10143A] text-white border-t border-white/5 select-none">
      <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-[10px] font-black uppercase tracking-widest text-[#10143A] bg-[#DCE135] px-2.5 py-0.5 rounded">
          ALLIANCE NETWORK
        </span>
        <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white/80 mt-3">
          Partners Who Support Our Journey
        </h3>

        {/* Partners Grid */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-10">
          {PARTNERS.map((partner, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-white/3 border border-white/5 px-8 py-5 rounded-2xl shadow-sm hover:border-[#DCE135] hover:shadow-[0_0_20px_rgba(220,225,53,0.05)] transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-full bg-white/5 text-white flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-105">
                <Shield className="h-5 w-5 fill-[#DCE135] text-[#DCE135]" />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-display text-xs font-black uppercase tracking-tight text-white">
                  {partner.name}
                </span>
                <span className="text-[9px] font-bold uppercase tracking-widest text-white/50 mt-0.5">
                  {partner.subtitle}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
