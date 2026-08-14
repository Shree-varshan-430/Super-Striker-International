import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Clock, ChevronLeft, ArrowRight, Share2, CheckCircle2, Quote } from "lucide-react";
import { articles } from "@/lib/newsData";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const article = articles.find((a) => a.id === id);
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
    alternates: {
      canonical: `/news/${id}`,
    },
  };
}

// Pre-render static paths for optimal speed and static hosting compatibility
export async function generateStaticParams() {
  return articles.map((article) => ({
    id: article.id,
  }));
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ArticleDetailsPage({ params }: PageProps) {
  const { id } = await params;
  const article = articles.find((a) => a.id === id);

  if (!article) {
    notFound();
  }

  // Get related articles (excluding current)
  const relatedArticles = articles
    .filter((a) => a.id !== article.id)
    .slice(0, 3);

  return (
    <article className="w-full bg-white text-[#10143A] min-h-screen pb-20 select-none text-left">
      
      {/* 1. Full-Width Hero Article Banner */}
      <div className="relative w-full h-[300px] sm:h-[400px] bg-[#10143A] flex items-center justify-start overflow-hidden group select-none mt-20">
        <Image
          src={article.image}
          alt={article.title}
          fill
          quality={85}
          className="object-cover object-center opacity-70 transition-transform duration-1000 group-hover:scale-102"
          priority
        />
        {/* Cinematic Linear Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#10143A]/95 via-[#10143A]/75 to-transparent z-10" />
        
        {/* Brand accent wedges on bottom right */}
        <div 
          className="absolute bottom-0 right-0 w-24 h-24 sm:w-36 sm:h-36 bg-[#10143A] pointer-events-none z-15 translate-x-2 translate-y-2 lg:block hidden" 
          style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }} 
        />
        <div 
          className="absolute bottom-0 right-0 w-20 h-20 sm:w-30 sm:h-30 bg-[#DCE135] pointer-events-none z-20 lg:block hidden" 
          style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }} 
        />

        <div className="relative z-20 max-w-7xl 2xl:max-w-[1440px] mx-auto w-full px-4 sm:px-6 lg:px-10 xl:px-12 text-left flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#10143A] bg-[#DCE135] px-3 py-1 rounded w-fit">
              {article.category}
            </span>
            <span className="text-xs font-bold text-white/70 uppercase tracking-wider">
              {article.year} Dispatches
            </span>
          </div>

          <h1 className="font-display text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-tight max-w-4xl drop-shadow-sm">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 mt-1 text-xs font-semibold text-white/80">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4 text-[#DCE135]" />
              {article.publishedDate}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-[#DCE135]" />
              {article.readTime}
            </span>
          </div>
        </div>
      </div>

      {/* 2. Upper Breadcrumbs Bar */}
      <div className="border-b border-gray-150 py-4 bg-gray-50 px-4 sm:px-6 lg:px-10 xl:px-12">
        <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto flex items-center justify-between">
          <Link
            href="/news"
            className="inline-flex items-center gap-1 text-xs font-black uppercase tracking-wider text-[#10143A] hover:text-[#DCE135] transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
            Back to Newsroom
          </Link>
          <span className="text-xs font-bold text-gray-500 uppercase tracking-wider hidden sm:inline-block">
            SuperStriker International Media Network
          </span>
        </div>
      </div>

      {/* 3. Main Full-Width Content Layout */}
      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 pt-12 sm:pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Sidebar: Author Desk & Key Takeaways */}
          <div className="lg:col-span-4 flex flex-col gap-6 sticky top-28">
            
            {/* Author Profile */}
            <div className="bg-gray-50 rounded-2xl p-6 shadow-xs border border-gray-150">
              <span className="text-[9px] font-black uppercase tracking-widest text-[#10143A] bg-[#DCE135] px-2.5 py-0.5 rounded w-fit block mb-4">
                EDITORIAL DESK
              </span>
              <div className="flex items-center gap-4">
                <div className="relative h-14 w-14 rounded-xl overflow-hidden shadow-md shrink-0 border-2 border-white">
                  <Image
                    src={article.author.avatar}
                    alt={article.author.name}
                    fill
                    quality={85}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-display text-base font-black uppercase text-[#10143A]">
                    {article.author.name}
                  </h4>
                  <p className="text-xs font-bold text-gray-500 mt-0.5">
                    {article.author.role}
                  </p>
                </div>
              </div>
            </div>

            {/* Structured Takeaways Box */}
            {article.takeaways && (
              <div className="bg-[#10143A] text-white rounded-2xl p-6 shadow-md flex flex-col gap-4">
                <span className="text-[9px] font-black uppercase tracking-widest text-[#DCE135]">
                  KEY DISPATCH TAKEAWAYS
                </span>
                <div className="space-y-3">
                  {article.takeaways.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-[#DCE135] shrink-0 mt-0.5" />
                      <p className="text-xs text-white/90 leading-relaxed font-medium">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Inspiring Highlight Quote Card */}
            {article.quoteText && (
              <div className="bg-gray-50 rounded-2xl p-6 shadow-xs border-l-4 border-[#10143A] flex flex-col gap-3">
                <Quote className="h-6 w-6 text-[#10143A]" />
                <p className="text-sm font-bold uppercase tracking-tight text-[#10143A] leading-relaxed">
                  &ldquo;{article.quoteText}&rdquo;
                </p>
                {article.quoteAuthor && (
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                    — {article.quoteAuthor}
                  </span>
                )}
              </div>
            )}

            {/* Quick CTA Card */}
            <div className="bg-gray-50 rounded-2xl p-6 shadow-xs flex flex-col gap-3 border border-gray-150">
              <span className="text-[9px] font-black uppercase tracking-widest text-[#10143A]">
                PLAYER ENROLLMENT
              </span>
              <h4 className="font-display text-sm font-black uppercase text-[#10143A]">
                Train With Our Elite Academies
              </h4>
              <p className="text-xs text-[#4B5563] leading-relaxed">
                Join our weekend scouting festivals or sign up for certified coaching clinics across Bangalore, Chennai, and Pondicherry.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#10143A] text-white px-6 py-3 text-xs font-bold uppercase tracking-wider hover:bg-[#DCE135] hover:text-[#10143A] transition-all mt-1"
              >
                Join Academy
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

          </div>

          {/* Right Main Column: Rich Editorial Body */}
          <div className="lg:col-span-8 flex flex-col gap-8 text-left">
            
            {/* Article Content Render */}
            <div 
              className="space-y-6 text-[#374151] text-base sm:text-lg leading-relaxed font-sans
                [&_p.lead]:font-bold [&_p.lead]:text-[#10143A] [&_p.lead]:text-lg sm:[&_p.lead]:text-2xl [&_p.lead]:leading-relaxed [&_p.lead]:border-b [&_p.lead]:border-gray-150 [&_p.lead]:pb-6
                [&_h3]:font-display [&_h3]:text-2xl sm:[&_h3]:text-3xl [&_h3]:font-black [&_h3]:uppercase [&_h3]:tracking-tight [&_h3]:text-[#10143A] [&_h3]:mt-10 [&_h3]:mb-4
                [&_blockquote]:border-l-4 [&_blockquote]:border-[#DCE135] [&_blockquote]:bg-[#10143A] [&_blockquote]:text-white [&_blockquote]:p-6 sm:[&_blockquote]:p-8 [&_blockquote]:rounded-2xl [&_blockquote]:my-8 [&_blockquote]:shadow-md
                [&_cite]:block [&_cite]:text-xs [&_cite]:font-bold [&_cite]:uppercase [&_cite]:tracking-wider [&_cite]:text-white/70 [&_cite]:mt-3 [&_cite]:not-italic
                [&_img]:w-full [&_img]:rounded-2xl [&_img]:shadow-lg [&_img]:my-8 [&_img]:object-cover [&_img]:aspect-[16/9]
              "
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

          </div>

        </div>

        {/* 4. Full-Width Related Stories Grid */}
        <div className="mt-24 border-t border-gray-150 pt-16">
          <div className="flex flex-col gap-2 mb-10 text-left">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#10143A] bg-[#DCE135] px-3 py-1 rounded w-fit">
              MORE FROM OUR REEL
            </span>
            <h3 className="font-display text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#10143A]">
              Related Stories & Dispatches
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedArticles.map((rel) => (
              <Link 
                key={rel.id} 
                href={`/news/${rel.id}`}
                className="group flex flex-col gap-4 bg-gray-50 border border-gray-150 p-6 rounded-3xl hover:shadow-lg transition-all"
              >
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-sm shrink-0">
                  <Image
                    src={rel.image}
                    alt={rel.title}
                    fill
                    quality={85}
                    className="object-cover transition-transform duration-700 group-hover:scale-103"
                  />
                  <span className="absolute top-3 left-3 rounded-md bg-[#10143A] px-2.5 py-1 text-[9px] font-black uppercase tracking-wider text-[#DCE135]">
                    {rel.category}
                  </span>
                </div>
                
                <div className="flex flex-col gap-2 text-left">
                  <h4 className="font-display font-black uppercase text-base sm:text-lg leading-snug text-[#10143A] group-hover:text-[#10143A] transition-colors">
                    {rel.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#4B5563] line-clamp-2 leading-relaxed">
                    {rel.description}
                  </p>
                  <span className="text-xs font-bold text-[#10143A] flex items-center gap-1.5 mt-2 uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                    Read Story
                    <ArrowRight className="h-3.5 w-3.5 text-[#10143A]" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </article>
  );
}
