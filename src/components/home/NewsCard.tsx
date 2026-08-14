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

  return (
    <>
      <div className={`rounded-2xl overflow-hidden border shadow-sm hover:shadow-md transition-shadow flex flex-col h-full text-left group w-full select-none ${
        darkTheme 
          ? "bg-[#10143A]/40 border-white/5" 
          : "bg-white border-gray-150"
      }`}>
        {/* Media Container (16:9 Aspect Box) */}
        <Link 
          href={targetLink} 
          onClick={handleClick}
          target={hasVideoUrl ? "_blank" : undefined}
          rel={hasVideoUrl ? "noopener noreferrer" : undefined}
          className="relative w-full overflow-hidden aspect-[16/9] block bg-gray-50 shrink-0"
        >
          <Image
            src={item.thumbnail}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-103"
            sizes="(max-w-768px) 100vw, 380px"
          />

          {/* Video Overlay */}
          {item.type === "video" && (
            <div className="absolute inset-0 bg-[#10143A]/30 flex items-center justify-center transition-colors group-hover:bg-[#10143A]/40">
              <div className="w-12 h-12 rounded-full bg-white text-[#10143A] flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                <Play className="h-5 w-5 fill-current ml-0.5" />
              </div>
              
              {/* Duration Badge */}
              {item.duration && (
                <div className="absolute bottom-2 right-2 bg-[#10143A]/80 text-white text-[10px] font-extrabold uppercase px-2 py-1 rounded flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  <span>{item.duration}</span>
                </div>
              )}
            </div>
          )}
        </Link>

        {/* Content details */}
        <div className="p-5 flex flex-col gap-2 flex-grow justify-between">
          <div className="flex flex-col gap-2">
            {/* Date */}
            <div className={`text-[10px] sm:text-xs font-bold uppercase tracking-wider ${
              darkTheme ? "text-white/40" : "text-gray-400"
            }`}>
              {item.publishedAt}
            </div>

            {/* Title */}
            <Link 
              href={targetLink} 
              onClick={handleClick}
              target={hasVideoUrl ? "_blank" : undefined}
              rel={hasVideoUrl ? "noopener noreferrer" : undefined}
            >
              <h4 className={`font-display text-sm sm:text-base font-black uppercase tracking-tight leading-snug line-clamp-3 transition-colors ${
                darkTheme 
                  ? "text-white group-hover:text-white/80" 
                  : "text-[#0A1028] group-hover:text-black"
              }`}>
                {item.title}
              </h4>
            </Link>
          </div>
        </div>
      </div>

      {/* Styled "Coming Soon" Modal for Video placeholders */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#10143A]/70 backdrop-blur-sm">
          <div className="relative bg-white text-[#0A1028] max-w-sm w-full rounded-2xl p-6 shadow-2xl border border-gray-100 text-center flex flex-col items-center gap-4">
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-[#4B5563] hover:text-[#0A1028] transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="w-14 h-14 rounded-full bg-[#DCE135]/25 text-[#10143A] flex items-center justify-center">
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
              className="w-full rounded-full bg-[#10143A] text-white py-2.5 text-xs font-bold uppercase tracking-wider hover:bg-[#DCE135] hover:text-[#10143A] transition-all"
            >
              Back To Homepage
            </button>
          </div>
        </div>
      )}
    </>
  );
}
