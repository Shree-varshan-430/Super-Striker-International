"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface HeroCardItem {
  slug: string;
  type: string;
  title: string;
  category: string;
  image: string;
  excerpt: string;
  label: string;
}

const HERO_ITEMS: HeroCardItem[] = [
  {
    slug: "bangalore-super-strikers-fc",
    type: "club",
    category: "BANGALORE SSFC",
    title: "Bangalore Super Strikers begins KSFA Division preparations",
    image: "https://images.unsplash.com/photo-1577223625816-7546f13df25d?q=80&w=1200&auto=format&fit=crop",
    excerpt: "The senior squad resumes tactical drills under the lights at our Bangalore Smart Arena, planning physical profiling tests for the upcoming state league registry.",
    label: "SQUAD ALERT"
  },
  {
    slug: "pondicherry-super-strikers-fc",
    type: "club",
    category: "PONDICHERRY SSFC",
    title: "Residential Cohort selections open at Pondicherry facility",
    image: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?q=80&w=600&auto=format&fit=crop",
    excerpt: "",
    label: "ACADEMY COHORT"
  },
  {
    slug: "chennai-super-strikers-fc",
    type: "club",
    category: "CHENNAI SSFC",
    title: "Chennai division selections conclude school tournament rounds",
    image: "https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=600&auto=format&fit=crop",
    excerpt: "",
    label: "METRO CUP"
  },
  {
    slug: "bangalore-football-school",
    type: "academy",
    category: "BFS ACADEMY",
    title: "Nurturing grassroots talents through smart telemetry sensors",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=600&auto=format&fit=crop",
    excerpt: "",
    label: "BFS LABS"
  }
];

export default function ManUtdHero() {
  const primaryItem = HERO_ITEMS[0];
  const stackedItems = HERO_ITEMS.slice(1);

  return (
    <section className="w-full bg-[#10143A] text-white pt-28 pb-10 px-4 sm:px-6 lg:px-8 select-none border-b border-white/5">
      <div className="max-w-[95%] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Side: Large Featured Story Card */}
        <div className="lg:col-span-8 flex flex-col">
          <Link
            href={`/clubs/${primaryItem.slug}`}
            className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden group shadow-2xl flex flex-col justify-end border border-white/5"
          >
            <Image
              src={primaryItem.image}
              alt={primaryItem.title}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-102"
              sizes="(max-w-1024px) 100vw, 850px"
              priority
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#10143A] via-[#10143A]/45 to-transparent z-10" />
            
            {/* Card Content Overlay */}
            <div className="relative z-20 p-6 sm:p-10 text-left flex flex-col gap-3 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="text-[9px] font-black uppercase tracking-widest text-[#10143A] bg-[#DCE135] px-2.5 py-0.5 rounded">
                  {primaryItem.label}
                </span>
                <span className="text-[10px] font-bold text-white/70 tracking-widest">
                  {primaryItem.category}
                </span>
              </div>
              <h1 className="font-display text-2xl sm:text-4xl font-black uppercase tracking-tight text-white leading-tight">
                {primaryItem.title}
              </h1>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-medium line-clamp-2">
                {primaryItem.excerpt}
              </p>
              <div className="inline-flex items-center gap-1 text-xs font-bold text-[#DCE135] mt-1">
                Read Article
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        </div>

        {/* Right Side: Stacked Horizontal Cards */}
        <div className="lg:col-span-4 flex flex-col gap-4 justify-between">
          {stackedItems.map((item) => {
            const detailPath = item.type === "club" ? `/clubs/${item.slug}` : `/football-school/${item.slug}`;
            return (
              <Link
                key={item.slug}
                href={detailPath}
                className="w-full flex items-center justify-between gap-4 p-4 rounded-xl border border-white/5 bg-white/3 hover:bg-white/7 transition-all duration-300 group text-left min-h-[110px]"
              >
                {/* Text Context Left */}
                <div className="flex flex-col gap-2 flex-grow pr-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[8px] font-black uppercase tracking-widest text-[#DCE135]">
                      {item.label}
                    </span>
                    <span className="text-[9px] font-bold text-white/50 tracking-wider">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="font-display text-sm font-bold uppercase tracking-tight text-white leading-snug line-clamp-2 transition-colors group-hover:text-[#DCE135]">
                    {item.title}
                  </h3>
                </div>

                {/* Square 1:1 Thumbnail Right */}
                <div className="relative w-20 h-20 rounded-lg overflow-hidden shrink-0 border border-white/10 bg-white/5">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="80px"
                  />
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
