"use client";

import React from "react";
import { Shield } from "lucide-react";

const PARTNERS = [
  { name: "KSFA Federation", subtitle: "Senior State Division Charter" },
  { name: "AIFF Scout Panel", subtitle: "National Talent Pipeline" },
  { name: "Bangalore School Board", subtitle: "Grassroots Integration" },
  { name: "Pondicherry Sports Ministry", subtitle: "Infrastructure Partner" }
];

export default function PartnerLogos() {
  return (
    <section className="py-20 bg-[#11123c] text-white border-t border-white/10 select-none">
      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 text-center">
        <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#e9d319]">
          INSTITUTIONAL AFFILIATIONS
        </span>
        <h3 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mt-2">
          Federations & Governing Bodies
        </h3>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
          {PARTNERS.map((partner, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-white/5 border border-white/10 p-5 text-left transition-colors hover:border-[#e9d319] group"
            >
              <div className="w-10 h-10 border border-white/20 bg-white/5 flex items-center justify-center shrink-0 group-hover:border-[#e9d319]">
                <Shield className="h-4 w-4 text-[#e9d319]" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-sm font-black uppercase tracking-tight text-white">
                  {partner.name}
                </span>
                <span className="text-[10px] font-mono uppercase tracking-wider text-white/50 mt-0.5">
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
