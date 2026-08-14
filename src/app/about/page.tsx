import React from "react";
import Image from "next/image";
import { Shield, Target, Eye, Trophy, Award, Heart, Sparkles, Users, GraduationCap, Activity, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about the heritage of Bangalore Super Strikers Football Club & Soccer School, our president's vision for grassroots sports, and our four pillars of player development.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="w-full bg-white text-[#10143A] min-h-screen pt-28 pb-20 select-none text-left">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Heading */}
        <div className="border-l-4 border-[#10143A] pl-6 mb-12">
          <span className="text-[10px] font-black uppercase tracking-widest text-white bg-[#10143A] px-2.5 py-0.5 rounded">
            ABOUT THE PLATFORM
          </span>
          <h1 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#10143A] mt-2">
            Bangalore Super Strikers FC
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 leading-relaxed max-w-xl mt-2">
            A comprehensive look into our foundation, developmental vision, coaching philosophies, and community-driven actions.
          </p>
        </div>

        {/* Founder Spotlights & Vision for Young Players (Image Integration) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20 bg-gray-50 rounded-3xl p-6 sm:p-10 border border-gray-150 shadow-sm relative overflow-hidden">
          
          {/* Left Side: Founder Image */}
          <div className="lg:col-span-5 flex justify-center relative z-10 w-full">
            <div className="relative aspect-[3/4] w-full max-w-[360px] rounded-2xl overflow-hidden border border-gray-250 shadow-md bg-white">
              <Image
                src="/images/president.jpg"
                alt="Ramakrishnan (Ram) - BSSFC President & AIFF Licensed Coach"
                fill
                className="object-cover object-center"
                sizes="(max-w-768px) 100vw, 360px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#10143A]/80 via-[#10143A]/10 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white text-left">
                <span className="text-[9px] font-black uppercase tracking-widest text-[#DCE135] bg-[#10143A] px-2 py-0.5 rounded">
                  PRESIDENT & FOUNDER
                </span>
                <h3 className="font-display text-lg font-black uppercase tracking-tight mt-1">
                  Ramakrishnan (Ram)
                </h3>
                <p className="text-[10px] font-bold text-white/80 uppercase mt-0.5">
                  AIFF-C Licensed Coach & KSFA Referee
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: His Vision for Young Players & Club Heritage */}
          <div className="lg:col-span-7 flex flex-col gap-5 text-left relative z-10">
            <span className="text-[9px] font-black uppercase tracking-widest text-[#10143A] bg-[#DCE135] px-2.5 py-0.5 rounded w-fit">
              PRESIDENTIAL VISION
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#10143A] leading-tight">
              Vision For Young Players
            </h2>
            <div className="h-1 w-12 bg-[#10143A] mt-1" />
            
            <p className="text-sm text-[#4B5563] leading-relaxed font-semibold">
              Ramakrishnan envisions a future where young players in India have access to the same structured development pipelines, elite physical resources, and competitive exposure as their international counterparts.
            </p>
            <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed font-medium">
              Inspired by the dream of his parents, Mr. Devaraj and Mrs. Rajammal Devaraj, who wished to see their grandson represent India on the world stage, Ram turned his own experiences as a player with limited resources into a driving force. His vision focuses on cultivating high-performance environments where players receive top-tier tactical training, nutrition advice, and scientific athletic mentoring to transition seamlessly from local fields to professional football leagues.
            </p>

            <div className="flex flex-wrap gap-4 mt-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#10143A]">
                <Shield className="h-4 w-4 shrink-0 text-[#10143A]" />
                KSFA Affiliated Pathway
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#10143A]">
                <GraduationCap className="h-4 w-4 shrink-0 text-[#10143A]" />
                Structured Career Pathways
              </div>
            </div>
          </div>
        </div>

        {/* Why the Foundation Was Created & Community Initiatives */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          
          {/* Section 1: Why the Foundation was Created */}
          <div className="bg-gray-50 rounded-3xl p-6 sm:p-8 border border-gray-150 shadow-sm flex flex-col gap-4 text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#10143A]/5 flex items-center justify-center text-[#10143A]">
                <Heart className="h-5 w-5 text-[#10143A]" />
              </div>
              <h3 className="font-display text-lg font-black uppercase tracking-wider text-[#10143A]">
                Why the Foundation Was Created
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-medium">
              The Bangalore Super Strikers Foundation (BSSFC Foundation) was established to dismantle socioeconomic barriers that prevent children from accessing sports. During his training years, Ram noticed that countless talented, enthusiastic players from middle-class and underprivileged families were locked out of professional pathways due to the high cost of coaching, kits, travel, and tournament fees. The Foundation was created to offer scholarships, kit sponsorships, and free soccer coaching clinics so that any aspiring child—regardless of their financial background—can pursue their sporting dreams.
            </p>
          </div>

          {/* Section 2: Community Initiatives */}
          <div className="bg-gray-50 rounded-3xl p-6 sm:p-8 border border-gray-150 shadow-sm flex flex-col gap-4 text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#10143A]/5 flex items-center justify-center text-[#10143A]">
                <Users className="h-5 w-5 text-[#10143A]" />
              </div>
              <div className="flex flex-col">
                <h3 className="font-display text-lg font-black uppercase tracking-wider text-[#10143A] leading-tight">
                  Community Initiatives
                </h3>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-medium">
              Our initiatives reach deep into regional communities to make sports a force for good. BSSFC actively coordinates with local public schools to integrate physical literacy and basic football training directly into standard school curriculums. We run weekend neighborhood leagues, conduct free health check-ups, and offer training workshops for local volunteer coaches. Additionally, our specialized holiday camps and residential scout operations actively target both urban slums and rural zones, offering children healthy physical channels and scholarship options.
            </p>
          </div>

        </div>

        {/* Training Philosophy & Football Development Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-stretch">
          
          {/* Left Column: Training Philosophy (7 cols) */}
          <div className="lg:col-span-7 bg-gray-50 rounded-3xl p-6 sm:p-8 border border-gray-150 shadow-sm flex flex-col gap-6 text-left">
            <div className="flex items-center gap-3 border-b border-gray-200 pb-4">
              <div className="w-10 h-10 rounded-xl bg-[#10143A]/5 flex items-center justify-center text-[#10143A]">
                <Activity className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-black uppercase tracking-wider text-[#10143A]">
                Training Philosophy
              </h3>
            </div>
            
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-medium">
              Our training philosophy focuses on developing <strong className="text-[#10143A]">The Total Footballer</strong>. We believe in providing structured, scientific training sessions that are both friendly and competitive. We align our curriculum with AIFF guidelines, focusing on four primary pillars:
            </p>

            <div className="grid grid-cols-2 gap-4 mt-2">
              <div className="flex flex-col gap-0.5 bg-white border border-gray-200 rounded-xl p-4">
                <span className="text-xs font-black uppercase text-[#10143A]">Progression</span>
                <span className="text-[10px] text-gray-400 font-medium">Systematic age-appropriate curricula</span>
              </div>
              <div className="flex flex-col gap-0.5 bg-white border border-gray-200 rounded-xl p-4">
                <span className="text-xs font-black uppercase text-[#10143A]">Nutrition</span>
                <span className="text-[10px] text-gray-400 font-medium">Hydration and diet guidelines</span>
              </div>
              <div className="flex flex-col gap-0.5 bg-white border border-gray-200 rounded-xl p-4">
                <span className="text-xs font-black uppercase text-[#10143A]">Training</span>
                <span className="text-[10px] text-gray-400 font-medium">UEFA-based match setups</span>
              </div>
              <div className="flex flex-col gap-0.5 bg-white border border-gray-200 rounded-xl p-4">
                <span className="text-xs font-black uppercase text-[#10143A]">Technique</span>
                <span className="text-[10px] text-gray-400 font-medium">Precision ball control drills</span>
              </div>
            </div>
          </div>

          {/* Right Column: Football Development (5 cols) */}
          <div className="lg:col-span-5 bg-gray-50 rounded-3xl p-6 sm:p-8 border border-gray-150 shadow-sm flex flex-col gap-4 text-left">
            <div className="flex items-center gap-3 border-b border-gray-200 pb-4">
              <div className="w-10 h-10 rounded-xl bg-[#10143A]/5 flex items-center justify-center text-[#10143A]">
                <Trophy className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-black uppercase tracking-wider text-[#10143A]">
                Football Development
              </h3>
            </div>
            
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-medium">
              We manage a complete, structured pathway for player progression:
            </p>

            <ul className="flex flex-col gap-3 mt-2 text-xs font-bold text-[#4B5563]">
              <li className="flex items-start gap-2.5">
                <Sparkles className="h-4 w-4 text-[#10143A] shrink-0 mt-0.5" />
                <span>Grassroots soccer schools for ages 5 to 12.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Sparkles className="h-4 w-4 text-[#10143A] shrink-0 mt-0.5" />
                <span>Elite academy cohorts competing in KSFA youth divisions.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Sparkles className="h-4 w-4 text-[#10143A] shrink-0 mt-0.5" />
                <span>Senior professional team divisions (BSSFC) in regional tournaments.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Sparkles className="h-4 w-4 text-[#10143A] shrink-0 mt-0.5" />
                <span>International exposure and university athletic scouting connections.</span>
              </li>
            </ul>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-1.5 bg-[#10143A] text-white hover:bg-[#DCE135] hover:text-[#10143A] transition-all px-4 py-3 rounded-full text-xs font-bold uppercase tracking-wider mt-auto text-center shadow-sm"
            >
              Partner / Join Club
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

        </div>

        {/* Tribute & Dedication Block */}
        <div className="bg-[#10143A] text-white rounded-3xl p-8 sm:p-10 border border-white/5 relative overflow-hidden flex flex-col sm:flex-row items-center gap-6 shadow-xl">
          <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-[#DCE135] shrink-0">
            <Heart className="h-8 w-8 fill-current" />
          </div>
          <div className="flex flex-col text-left gap-1">
            <span className="text-[9px] font-black uppercase tracking-widest text-[#DCE135]">
              DEDICATION & TRIBUTE
            </span>
            <p className="font-display text-sm sm:text-base font-black uppercase tracking-wide leading-relaxed">
              A special tribute to my grandparents: R. Nanjundaiah & N. Rajamma, and my great-grandparents: Ramaiah & R. Aaliammal. You are always in our hearts. 🙏
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
