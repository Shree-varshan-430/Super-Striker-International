import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Clock, ChevronLeft, ArrowRight, Share2 } from "lucide-react";
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

  // Get related articles (same category or general, excluding current)
  const relatedArticles = articles
    .filter((a) => a.id !== article.id)
    .slice(0, 2);

  return (
    <article className="w-full bg-white text-secondary-navy min-h-screen">
      {/* Upper breadcrumb & actions navigation */}
      <div className="border-b border-gray-100 py-4 bg-background-soft px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link
            href="/news"
            className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-secondary-navy hover:text-primary-sky transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
            Back to Magazine
          </Link>
          <button
            type="button"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-secondary-navy/60 hover:text-secondary-navy"
            aria-label="Share article"
          >
            <Share2 className="h-3.5 w-3.5" />
            Share
          </button>
        </div>
      </div>

      {/* Main Article Content Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        
        {/* Editorial Meta & Title */}
        <div className="text-center md:text-left flex flex-col gap-4 mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-primary-sky self-center md:self-start">
            {article.category}
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-secondary-navy leading-tight">
            {article.title}
          </h1>
          
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 mt-2 text-xs font-semibold text-secondary-navy/50 border-y border-gray-100 py-4">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              Published: {article.publishedDate}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {article.readTime}
            </span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative h-[250px] sm:h-[450px] w-full rounded-2xl overflow-hidden shadow-sm mb-12">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Article Body (Formatted for premium sports journalism) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Author info side panel */}
          <div className="lg:col-span-4 flex flex-col gap-6 lg:border-r lg:border-gray-100 lg:pr-8">
            <div className="bg-background-soft rounded-xl p-5 border border-gray-100/60 self-start w-full">
              <span className="text-[9px] font-bold uppercase tracking-widest text-secondary-navy/50 block mb-3">
                Written By
              </span>
              <div className="flex items-center gap-3">
                <div className="relative h-12 w-12 rounded-full overflow-hidden border border-gray-100 shrink-0">
                  <Image
                    src={article.author.avatar}
                    alt={article.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-secondary-navy leading-none">
                    {article.author.name}
                  </h4>
                  <p className="text-[10px] text-secondary-navy/60 mt-1 leading-snug">
                    {article.author.role}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="hidden lg:flex flex-col gap-2">
              <span className="text-[9px] font-bold uppercase tracking-widest text-secondary-navy/50">
                SuperStriker Media
              </span>
              <p className="text-xs text-secondary-navy/60 leading-relaxed">
                Our editorial team documents the growth of grassroots football and professional leagues in South India.
              </p>
            </div>
          </div>

          {/* Article text body */}
          <div 
            className="lg:col-span-8 space-y-6 text-secondary-navy/95 text-base sm:text-lg leading-relaxed font-sans
              [&_p.lead]:font-semibold [&_p.lead]:text-secondary-navy [&_p.lead]:text-lg sm:[&_p.lead]:text-xl [&_p.lead]:leading-relaxed
              [&_h3]:font-display [&_h3]:text-xl sm:[&_h3]:text-2xl [&_h3]:font-bold [&_h3]:uppercase [&_h3]:tracking-tight [&_h3]:text-secondary-navy [&_h3]:mt-10 [&_h3]:mb-4
              [&_blockquote]:border-l-4 [&_blockquote]:border-primary-sky [&_blockquote]:pl-6 [&_blockquote]:italic [&_blockquote]:text-secondary-navy/80 [&_blockquote]:my-8 [&_blockquote]:font-medium [&_blockquote]:text-lg
              [&_cite]:block [&_cite]:text-xs [&_cite]:font-bold [&_cite]:uppercase [&_cite]:tracking-wider [&_cite]:text-secondary-navy/60 [&_cite]:mt-2 [&_cite]:not-italic
              [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-3 [&_ol]:my-6 [&_ol]:text-sm sm:[&_ol]:text-base
            "
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>

        {/* Related articles footer box */}
        <div className="mt-20 border-t border-gray-100 pt-16">
          <h3 className="font-display text-xl font-bold uppercase tracking-tight text-secondary-navy mb-8">
            Related Stories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedArticles.map((rel) => (
              <Link 
                key={rel.id} 
                href={`/news/${rel.id}`}
                className="group flex flex-col gap-4 bg-background-soft border border-gray-100/60 p-5 rounded-xl hover:shadow-md transition-shadow"
              >
                <div className="relative h-44 rounded-lg overflow-hidden shrink-0">
                  <Image
                    src={rel.image}
                    alt={rel.title}
                    fill
                    className="object-cover"
                  />
                  <span className="absolute top-3 left-3 rounded-full bg-white px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-secondary-navy shadow-sm">
                    {rel.category}
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="font-display font-bold uppercase text-sm leading-snug text-secondary-navy group-hover:text-primary-sky transition-colors">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-secondary-navy/60 line-clamp-2 leading-relaxed">
                    {rel.description}
                  </p>
                  <span className="text-[10px] font-bold text-secondary-navy/40 flex items-center gap-1 mt-2">
                    Read Story
                    <ArrowRight className="h-3 w-3" />
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
