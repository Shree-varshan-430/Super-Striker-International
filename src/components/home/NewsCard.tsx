"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Play, Clock, X } from "lucide-react";
import { NewsItem } from "@/types/news";

interface NewsCardProps {
  item: NewsItem;
  darkTheme?: boolean;
}

export default function NewsCard({ item, darkTheme }: NewsCardProps) {
  const [showModal, setShowModal] = useState(false);

  const articleLink = `/news/${item.slug}`;
  const hasVideoUrl = item.type === "video" && !!item.videoUrl;
  const targetLink = (item.type === "video" && item.videoUrl) ? item.videoUrl : articleLink;

  const handleClick = (e: React.MouseEvent) => {
    if (hasVideoUrl) {
      return; // let link handle direct youtube tab opening
    }
    if (item.type === "video") {
      e.preventDefault();
      setShowModal(true);
    }
  };

  const categoryLabelMap: Record<string, string> = {
    academy: "Academy Dispatch",
    club: "First-Team Reel",
    community: "Grassroots Story",
    investors: "Commercial & Turf",
    "player-journeys": "Player Spotlight"
  };

  return (
    <>
      <div className={`rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-300 flex flex-col h-full text-left group w-full select-none ${
        darkTheme 
          ? "bg-[#18194a] border border-white/10 hover:border-[#e9d319]/40 hover:shadow-xl" 
          : "bg-white border border-gray-150/80 hover:border-[#11123c]/40 hover:shadow-xl shadow-xs"
      }`}>
        {/* Media Container (16:10 Aspect Box) */}
        <Link 
          href={targetLink} 
          onClick={handleClick}
          target={hasVideoUrl ? "_blank" : undefined}
          rel={hasVideoUrl ? "noopener noreferrer" : undefined}
          className="relative w-full overflow-hidden aspect-[16/10] block bg-gray-50 shrink-0"
        >
          <Image
            src={item.thumbnail}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-w-768px) 100vw, 420px"
          />

          {/* Category Ribbon */}
          <div className="absolute top-3.5 left-3.5 z-10">
            <span className={`text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md shadow-xs ${
              darkTheme 
                ? "bg-[#e9d319] text-[#11123c]" 
                : "bg-[#11123c] text-[#e9d319]"
            }`}>
              {categoryLabelMap[item.category] || item.category}
            </span>
          </div>

          {/* Video Overlay */}
          {item.type === "video" && (
            <div className="absolute inset-0 bg-[#11123c]/35 flex items-center justify-center transition-colors group-hover:bg-[#11123c]/45">
              <div className="w-12 h-12 rounded-full bg-white text-[#11123c] flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#e9d319]">
                <Play className="h-5 w-5 fill-current ml-0.5" />
              </div>
              
              {/* Duration Badge */}
              {item.duration && (
                <div className="absolute bottom-3 right-3 bg-[#11123c]/85 text-white text-[10px] font-bold uppercase px-2 py-0.5 rounded flex items-center gap-1">
                  <Clock className="h-3 w-3 text-[#e9d319]" />
                  <span>{item.duration}</span>
                </div>
              )}
            </div>
          )}
        </Link>

        {/* Content details */}
        <div className="p-6 flex flex-col justify-between flex-grow gap-4">
          <div className="flex flex-col gap-2.5">
            {/* Metadata Byline Row */}
            <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider">
              <span className={darkTheme ? "text-white/60" : "text-[#696484]"}>
                {item.author || "Editorial Desk"}
              </span>
              <span className={darkTheme ? "text-white/40" : "text-gray-400"}>
                {item.publishedAt}
              </span>
            </div>

            {/* Title */}
            <Link 
              href={targetLink} 
              onClick={handleClick}
              target={hasVideoUrl ? "_blank" : undefined}
              rel={hasVideoUrl ? "noopener noreferrer" : undefined}
            >
              <h4 className={`font-display text-lg sm:text-xl font-black uppercase tracking-tight leading-snug line-clamp-2 transition-colors ${
                darkTheme 
                  ? "text-white group-hover:text-[#e9d319]" 
                  : "text-[#11123c] group-hover:text-[#11123c]"
              }`}>
                {item.title}
              </h4>
            </Link>

            {/* Excerpt if present */}
            {item.excerpt && (
              <p className={`text-xs sm:text-sm line-clamp-2 leading-relaxed font-normal ${
                darkTheme ? "text-white/70" : "text-[#696484]"
              }`}>
                {item.excerpt}
              </p>
            )}
          </div>

          {/* Bottom Interactive Read Link */}
          <div className={`pt-3 border-t flex items-center justify-between text-xs font-black uppercase tracking-wider ${
            darkTheme 
              ? "border-white/10 text-[#e9d319]" 
              : "border-gray-100 text-[#11123c]"
          }`}>
            <span className="flex items-center gap-1.5">
              {item.type === "video" ? "Watch Clip" : "Read Dispatch"}
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </span>
          </div>
        </div>
      </div>

      {/* Styled "Coming Soon" Modal for Video placeholders */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#11123c]/70 backdrop-blur-sm">
          <div className="relative bg-white text-[#11123c] max-w-sm w-full rounded-2xl p-6 shadow-2xl border border-gray-100 text-center flex flex-col items-center gap-4">
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-[#4B5563] hover:text-[#11123c] transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="w-14 h-14 rounded-full bg-[#e9d319]/25 text-[#11123c] flex items-center justify-center">
              <Play className="h-6 w-6 fill-current ml-0.5" />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-display text-lg font-black uppercase tracking-tight">
                Video Coming Soon
              </h3>
              <p className="text-xs text-[#4B5563] leading-relaxed">
                The video production for &quot;{item.title}&quot; is currently in post-production. Real training footage and match highlights will be available shortly!
              </p>
            </div>
            <button 
              onClick={() => setShowModal(false)}
              className="w-full rounded-full bg-[#11123c] text-white py-2.5 text-xs font-bold uppercase tracking-wider hover:bg-[#e9d319] hover:text-[#11123c] transition-all"
            >
              Back To Homepage
            </button>
          </div>
        </div>
      )}
    </>
  );
}
