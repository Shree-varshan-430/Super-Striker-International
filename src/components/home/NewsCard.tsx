"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Play, Clock, X } from "lucide-react";
import { NewsItem } from "@/types/news";

interface NewsCardProps {
  item: NewsItem;
}

export default function NewsCard({ item }: NewsCardProps) {
  const [showModal, setShowModal] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    if (item.type === "video") {
      e.preventDefault();
      setShowModal(true);
    }
  };

  const articleLink = `/news/${item.slug}`;

  return (
    <>
      <div className="flex flex-col gap-4 text-left w-full group select-none">
        {/* Media Container */}
        <Link 
          href={articleLink} 
          onClick={handleClick}
          className="relative w-full overflow-hidden rounded-lg aspect-[16/9] block bg-gray-100"
        >
          <Image
            src={item.thumbnail}
            alt={item.title}
            width={380}
            height={214}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-w-768px) 100vw, 380px"
          />

          {/* Video Overlay */}
          {item.type === "video" && (
            <div className="absolute inset-0 bg-[#10143A]/40 flex items-center justify-center transition-colors group-hover:bg-[#10143A]/50">
              <div className="w-12 h-12 rounded-full bg-[#DCE135] text-[#10143A] flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
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
        <div className="flex flex-col gap-2">
          {/* Category/Type Tag */}
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#DCE135] bg-[#10143A] px-2.5 py-0.5 rounded-full w-fit">
              {item.category}
            </span>
            {item.type === "video" && (
              <span className="text-[10px] font-black uppercase tracking-widest text-red-600 bg-red-100 px-2.5 py-0.5 rounded-full w-fit">
                Video
              </span>
            )}
          </div>

          {/* Title */}
          <Link href={articleLink} onClick={handleClick}>
            <h4 className="font-display text-base sm:text-lg font-black uppercase tracking-tight text-[#0A1028] leading-tight line-clamp-2 hover:text-[#10143A] transition-colors">
              {item.title}
            </h4>
          </Link>

          {/* Excerpt / Date */}
          {item.excerpt && (
            <p className="text-xs text-[#4B5563] leading-relaxed line-clamp-2">
              {item.excerpt}
            </p>
          )}

          <div className="text-[9px] font-bold text-[#4B5563]/60 uppercase tracking-wider mt-1">
            {item.publishedAt} {item.author && `• By ${item.author}`}
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
