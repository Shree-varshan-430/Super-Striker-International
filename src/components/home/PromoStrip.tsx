"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Announcement {
  text: string;
  link: string;
}

const ANNOUNCEMENTS: Announcement[] = [
  {
    text: "Elite Residential U-15 Academy Trials Open — Register Now",
    link: "/football-school/bangalore-football-school"
  },
  {
    text: "Investor Partnership Hub Now Live — Explore Franchise Opportunities",
    link: "/investors#enquire"
  },
  {
    text: "Bangalore Football School Weekend Registrations Open",
    link: "/football-school/bangalore-football-school"
  }
];

export default function PromoStrip() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % ANNOUNCEMENTS.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const active = ANNOUNCEMENTS[index];

  return (
    <div className="w-full bg-[#DCE135] text-[#10143A] py-3.5 border-y border-[#10143A]/10 relative z-35 overflow-hidden shadow-sm select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <Link 
          href={active.link}
          className="group flex items-center gap-2 text-center text-xs sm:text-sm font-extrabold uppercase tracking-wider hover:opacity-85 transition-all"
        >
          <span className="flex h-2 w-2 rounded-full bg-[#10143A] animate-ping" />
          <span>{active.text}</span>
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
