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
    <div className="w-full bg-white text-[#10143A] min-h-screen pb-20 select-none text-left">
      
      {/* Small Hero Banner */}
      <div className="relative w-full h-[220px] sm:h-[280px] bg-[#10143A] flex items-center justify-start overflow-hidden group select-none mt-20">
        <Image
          src="/images/founder-pitch-side.jpg"
          alt="About Bangalore Super Strikers"
          fill
          className="object-cover opacity-40 transition-transform duration-1000 group-hover:scale-103 object-top"
          priority
        />
        {/* Black full accent overlay & Cinematic gradient overlay */}
        <div className="absolute inset-0 bg-black/45 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-[#10143A]/70 to-transparent z-10" />
        
        {/* Brand accent wedges on bottom right */}
        <div 
          className="absolute bottom-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-[#10143A] pointer-events-none z-15 translate-x-2 translate-y-2 lg:block hidden" 
          style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }} 
        />
        <div 
          className="absolute bottom-0 right-0 w-20 h-20 sm:w-28 sm:h-28 bg-[#DCE135] pointer-events-none z-20 lg:block hidden" 
          style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }} 
        />

        <div className="relative z-20 max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 text-left flex flex-col gap-2">
          <span className="text-[9px] font-black uppercase tracking-widest text-[#DCE135] bg-[#10143A] px-2.5 py-0.5 rounded w-fit">
            ABOUT THE PLATFORM
          </span>
          <h1 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-none">
            Bangalore Super Strikers FC
          </h1>
          <p className="text-xs sm:text-sm text-white/80 max-w-xl leading-relaxed mt-1 font-medium">
            A comprehensive look into our foundation, developmental vision, coaching philosophies, and community-driven actions.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">

        {/* 1. Founder Spotlight & Vision for Young Players (BORDERLESS CARD) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20 bg-gray-50 rounded-3xl p-6 sm:p-12 shadow-sm relative overflow-hidden">
          
          {/* Left Side: Founder Image (No Border) */}
          <div className="lg:col-span-5 flex justify-center relative z-10 w-full">
            <div className="relative aspect-[3/4] w-full max-w-[380px] rounded-2xl overflow-hidden shadow-lg bg-gray-100">
              <Image
                src="/images/founder-pitch-standing.jpg"
                alt="Ramakrishnan (Ram) - BSSFC President & AIFF Licensed Coach"
                fill
                className="object-cover object-top transition-transform duration-700 hover:scale-103"
                sizes="(max-w-768px) 100vw, 380px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#10143A]/85 via-[#10143A]/20 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white text-left">
                <span className="text-[9px] font-black uppercase tracking-widest text-[#DCE135] bg-[#10143A] px-2.5 py-0.5 rounded">
                  PRESIDENT & FOUNDER
                </span>
                <h3 className="font-display text-xl font-black uppercase tracking-tight mt-1.5">
                  Ramakrishnan (Ram)
                </h3>
                <p className="text-[10px] font-bold text-white/80 uppercase mt-0.5 tracking-wider">
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
            <h2 className="font-display text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#10143A] leading-tight">
              Vision For Young Players
            </h2>
            <div className="h-1 w-12 bg-[#10143A]" />
            
            <p className="text-sm text-[#4B5563] leading-relaxed font-semibold">
              Ramakrishnan envisions a future where young players in India have access to the same structured development pipelines, elite physical resources, and competitive exposure as their international counterparts.
            </p>
            <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed font-medium">
              Inspired by the dream of his parents, Mr. Devaraj and Mrs. Rajammal Devaraj, who wished to see their grandson represent India on the world stage, Ram turned his own experiences as a player with limited resources into a driving force. His vision focuses on cultivating high-performance environments where players receive top-tier tactical training, nutrition advice, and scientific athletic mentoring to transition seamlessly from local fields to professional football leagues.
            </p>

            <div className="flex flex-wrap gap-4 mt-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#10143A] bg-white px-3.5 py-2 rounded-xl shadow-xs">
                <Shield className="h-4 w-4 shrink-0 text-[#10143A]" />
                KSFA Affiliated Pathway
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#10143A] bg-white px-3.5 py-2 rounded-xl shadow-xs">
                <GraduationCap className="h-4 w-4 shrink-0 text-[#10143A]" />
                Structured Career Pathways
              </div>
            </div>
          </div>
        </div>

        {/* 2. Visual Storytelling Grid: Why the Foundation Was Created & Community Initiatives */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          
          {/* Section 1: Why the Foundation was Created */}
          <div className="bg-gray-50 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between gap-6 text-left">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#10143A]/5 flex items-center justify-center text-[#10143A]">
                  <Heart className="h-5 w-5 text-[#10143A]" />
                </div>
                <h3 className="font-display text-lg font-black uppercase tracking-wider text-[#10143A]">
                  Why the Foundation Was Created
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed font-medium">
                The Bangalore Super Strikers Foundation (BSSFC Foundation) was established to dismantle socioeconomic barriers that prevent children from accessing sports. During his training years, Ram noticed that countless talented, enthusiastic players from middle-class and underprivileged families were locked out of professional pathways due to the high cost of coaching, kits, travel, and tournament fees. The Foundation was created to offer scholarships, kit sponsorships, and free soccer coaching clinics so that any aspiring child—regardless of their financial background—can pursue their sporting dreams.
              </p>
            </div>

            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-sm bg-gray-200 mt-2">
              <Image
                src="/images/founder-portrait-fence.jpg"
                alt="Founder at Grassroots Foundation Field"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#10143A]/60 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-3 text-[9px] font-bold text-white uppercase tracking-wider bg-[#10143A]/80 px-2.5 py-1 rounded">
                Grassroots Action
              </span>
            </div>
          </div>

          {/* Section 2: Community Initiatives */}
          <div className="bg-gray-50 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between gap-6 text-left">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#10143A]/5 flex items-center justify-center text-[#10143A]">
                  <Users className="h-5 w-5 text-[#10143A]" />
                </div>
                <h3 className="font-display text-lg font-black uppercase tracking-wider text-[#10143A]">
                  Community Initiatives
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed font-medium">
                Our initiatives reach deep into regional communities to make sports a force for good. BSSFC actively coordinates with local public schools to integrate physical literacy and basic football training directly into standard school curriculums. We run weekend neighborhood leagues, conduct free health check-ups, and offer training workshops for local volunteer coaches. Additionally, our specialized holiday camps and residential scout operations actively target both urban slums and rural zones, offering children healthy physical channels and scholarship options.
              </p>
            </div>

            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-sm bg-gray-200 mt-2">
              <Image
                src="/images/founder-with-football.jpg"
                alt="Founder with Football on Turf"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#10143A]/60 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-3 text-[9px] font-bold text-white uppercase tracking-wider bg-[#10143A]/80 px-2.5 py-1 rounded">
                Community Camps
              </span>
            </div>
          </div>

        </div>

        {/* 3. Training Philosophy & Football Development Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-stretch">
          
          {/* Left Column: Training Philosophy (7 cols) */}
          <div className="lg:col-span-7 bg-gray-50 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col gap-6 text-left">
            <div className="flex items-center gap-3 border-b border-gray-200 pb-4">
              <div className="w-10 h-10 rounded-xl bg-[#10143A]/5 flex items-center justify-center text-[#10143A]">
                <Activity className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-black uppercase tracking-wider text-[#10143A]">
                Training Philosophy
              </h3>
            </div>
            
            <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed font-medium">
              Our training philosophy focuses on developing <strong className="text-[#10143A]">The Total Footballer</strong>. We believe in providing structured, scientific training sessions that are both friendly and competitive. We align our curriculum with AIFF guidelines, focusing on four primary pillars:
            </p>

            <div className="grid grid-cols-2 gap-4 mt-2">
              <div className="flex flex-col gap-0.5 bg-white rounded-xl p-4 shadow-xs">
                <span className="text-xs font-black uppercase text-[#10143A]">Progression</span>
                <span className="text-[10px] text-gray-400 font-medium">Systematic age-appropriate curricula</span>
              </div>
              <div className="flex flex-col gap-0.5 bg-white rounded-xl p-4 shadow-xs">
                <span className="text-xs font-black uppercase text-[#10143A]">Nutrition</span>
                <span className="text-[10px] text-gray-400 font-medium">Hydration and diet guidelines</span>
              </div>
              <div className="flex flex-col gap-0.5 bg-white rounded-xl p-4 shadow-xs">
                <span className="text-xs font-black uppercase text-[#10143A]">Training</span>
                <span className="text-[10px] text-gray-400 font-medium">UEFA-based match setups</span>
              </div>
              <div className="flex flex-col gap-0.5 bg-white rounded-xl p-4 shadow-xs">
                <span className="text-xs font-black uppercase text-[#10143A]">Technique</span>
                <span className="text-[10px] text-gray-400 font-medium">Precision ball control drills</span>
              </div>
            </div>
          </div>

          {/* Right Column: Football Development with Turf Photo (5 cols) */}
          <div className="lg:col-span-5 bg-gray-50 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between gap-6 text-left">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 border-b border-gray-200 pb-4">
                <div className="w-10 h-10 rounded-xl bg-[#10143A]/5 flex items-center justify-center text-[#10143A]">
                  <Trophy className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-black uppercase tracking-wider text-[#10143A]">
                  Football Development
                </h3>
              </div>
              
              <ul className="flex flex-col gap-3 text-xs font-bold text-[#4B5563]">
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
                  <span>Senior professional team divisions (BSSFC) in state leagues.</span>
                </li>
              </ul>
            </div>

            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-sm bg-gray-200">
              <Image
                src="/images/founder-turf-pose.jpg"
                alt="Founder inspecting professional pitch"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#10143A]/60 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-3 text-[9px] font-bold text-white uppercase tracking-wider bg-[#10143A]/80 px-2.5 py-1 rounded">
                Professional Turf Facilities
              </span>
            </div>
          </div>

        </div>

        {/* 4. Tribute & Dedication Block */}
        <div className="bg-[#10143A] text-white rounded-3xl p-8 sm:p-10 relative overflow-hidden flex flex-col sm:flex-row items-center gap-6 shadow-xl">
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
