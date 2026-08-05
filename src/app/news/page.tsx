"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, User, Clock, ArrowRight, Filter } from "lucide-react";
import { articles } from "@/lib/newsData";

export default function News() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Academy", "Grassroots", "Club Updates", "Investor Updates"];

  // Filter articles based on state
  const filteredArticles = selectedCategory === "All"
    ? articles
    : articles.filter(article => article.category === selectedCategory);

  // Take the first article as the prominent featured article
  const featuredArticle = articles[0];
  // Filter the grid to exclude the featured article if "All" is selected to avoid duplication
  const gridArticles = selectedCategory === "All"
    ? filteredArticles.slice(1)
    : filteredArticles;

  return (
    <div className="w-full bg-white text-secondary-navy min-h-screen">
      {/* Magazine Page Header */}
      <section className="bg-background-soft py-16 border-b border-gray-100 px-4">
        <div className="max-w-7xl mx-auto flex flex-col gap-4 text-center md:text-left">
          <span className="text-[10px] font-bold uppercase tracking-widest text-primary-sky self-center md:self-start">
            SuperStriker Press
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold uppercase tracking-tight text-secondary-navy leading-none">
            Football Editorial Hub
          </h1>
          <p className="text-sm text-secondary-navy/60 max-w-xl leading-relaxed">
            Latest stories, tactical analysis, match summaries, academy pathways, and corporate announcements directly from our teams.
          </p>
        </div>
      </section>

      {/* Main Magazine Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Spotlight Featured Article (Only show when selectedCategory is "All") */}
        {selectedCategory === "All" && featuredArticle && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="group grid grid-cols-1 lg:grid-cols-12 border border-[#2457D6]/15 hover:border-[#6C4CE6]/35 rounded-2xl overflow-hidden shadow-sm hover:shadow-[0_15px_30px_rgba(108,76,230,0.06)] transition-all duration-300 mb-16 bg-white"
          >
            <div className="lg:col-span-7 relative h-80 lg:h-[450px] overflow-hidden">
              <Image
                src={featuredArticle.image}
                alt={featuredArticle.title}
                fill
                priority
                className="object-cover transition-transform duration-500 group-hover:scale-101"
              />
              <span className="absolute top-6 left-6 rounded-full bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-secondary-navy shadow-sm">
                Featured • {featuredArticle.category}
              </span>
            </div>

            <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-between gap-8 bg-white">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 text-xs font-semibold text-secondary-navy/50">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    {featuredArticle.publishedDate}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {featuredArticle.readTime}
                  </span>
                </div>
                
                <h2 className="font-display text-2xl lg:text-3xl font-bold uppercase tracking-tight text-secondary-navy group-hover:text-[#2457D6] transition-colors leading-tight">
                  <Link href={`/news/${featuredArticle.id}`}>
                    {featuredArticle.title}
                  </Link>
                </h2>
                
                <p className="text-sm text-secondary-navy/70 leading-relaxed">
                  {featuredArticle.description}
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-gray-100 pt-6">
                <div className="flex items-center gap-3">
                  <div className="relative h-10 w-10 rounded-full overflow-hidden border border-gray-100 shrink-0">
                    <Image
                      src={featuredArticle.author.avatar}
                      alt={featuredArticle.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-secondary-navy">{featuredArticle.author.name}</h4>
                    <p className="text-[10px] text-secondary-navy/50">{featuredArticle.author.role}</p>
                  </div>
                </div>

                <Link
                  href={`/news/${featuredArticle.id}`}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary-navy text-white hover:bg-[#2457D6] hover:scale-105 active:scale-95 transition-all"
                  aria-label="Read full article"
                >
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}

        {/* Category Filters Bar */}
        <div className="flex flex-col gap-6 mb-12">
          <div className="flex items-center gap-2 border-b border-gray-100 pb-4">
            <Filter className="h-4 w-4 text-secondary-navy/60" />
            <span className="text-xs font-bold uppercase tracking-wider text-secondary-navy/60">
              Filter Editorial Feed
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  selectedCategory === cat
                    ? "bg-[#2457D6] text-white shadow-md shadow-[#2457D6]/20"
                    : "bg-background-soft text-secondary-navy hover:bg-[#2457D6]/10 hover:text-[#2457D6]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Grid Results */}
        {gridArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gridArticles.map((article) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group flex flex-col bg-white border border-[#2457D6]/15 hover:border-[#6C4CE6]/35 rounded-xl overflow-hidden hover:shadow-[0_12px_25px_rgba(108,76,230,0.05)] transition-all duration-300 flex-grow"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 rounded-full bg-white px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-secondary-navy shadow-sm">
                    {article.category}
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-1 justify-between gap-6">
                  <div className="flex flex-col gap-3">
                    <h3 className="font-display text-lg font-bold uppercase tracking-tight leading-snug text-secondary-navy group-hover:text-[#2457D6] transition-colors">
                      <Link href={`/news/${article.id}`}>
                        {article.title}
                      </Link>
                    </h3>
                    <p className="text-xs text-secondary-navy/70 line-clamp-3 leading-relaxed">
                      {article.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between border-t border-gray-100 pt-4 text-[11px] font-semibold text-secondary-navy/50">
                    <span className="flex items-center gap-1">
                      <User className="h-3.5 w-3.5" />
                      {article.author.name}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {article.publishedDate}
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-background-soft rounded-2xl border border-gray-100">
            <p className="text-sm font-semibold text-secondary-navy/60">No articles found in this category.</p>
            <button
              onClick={() => setSelectedCategory("All")}
              className="mt-4 inline-flex text-xs font-bold uppercase tracking-wider text-[#2457D6] hover:underline"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
