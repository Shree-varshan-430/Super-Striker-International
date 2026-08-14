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
      <div className="relative w-full h-[240px] sm:h-[300px] bg-[#10143A] flex items-center justify-start overflow-hidden group select-none mt-20">
        <Image
          src="/images/founder-pitch-side.jpg"
          alt="About Bangalore Super Strikers"
          fill
          unoptimized
          className="object-cover object-top opacity-75 transition-transform duration-1000 group-hover:scale-102"
          priority
        />
        {/* Subtle contrast gradient for typography */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-[#10143A]/60 to-transparent z-10" />
        
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

        {/* 1. Founder Spotlight & Vision for Young Players (Image Left, Text Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16 bg-gray-50 rounded-3xl p-6 sm:p-12 shadow-sm relative overflow-hidden">
          
          {/* Left Side: Founder Image (100% Pure Crisp 4K, Zero Overlay) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative z-10 w-full">
            <div className="relative aspect-[3/4] w-full max-w-[450px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/founder-pitch-standing.jpg"
                alt="Ramakrishnan (Ram) - BSSFC President & AIFF Licensed Coach"
                fill
                unoptimized
                className="object-cover object-top transition-transform duration-700 hover:scale-102"
                sizes="(max-w-768px) 100vw, 450px"
                priority
              />
            </div>
            <div className="w-full max-w-[450px] bg-white rounded-xl p-3.5 shadow-sm mt-3 flex items-center justify-between">
              <div>
                <h3 className="font-display text-base font-black uppercase tracking-tight text-[#10143A]">
                  Ramakrishnan (Ram)
                </h3>
                <p className="text-[10px] font-bold text-[#4B5563] uppercase">
                  AIFF-C Licensed Coach & KSFA Referee
                </p>
              </div>
              <span className="text-[9px] font-black uppercase tracking-widest text-[#10143A] bg-[#DCE135] px-2.5 py-1 rounded">
                PRESIDENT & FOUNDER
              </span>
            </div>
          </div>

          {/* Right Side: His Vision for Young Players */}
          <div className="lg:col-span-7 flex flex-col gap-5 text-left relative z-10">
            <span className="text-[9px] font-black uppercase tracking-widest text-[#10143A] bg-[#DCE135] px-2.5 py-0.5 rounded w-fit">
              PRESIDENTIAL VISION
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#10143A] leading-tight">
              Vision For Young Players
            </h2>
            <div className="h-1 w-12 bg-[#10143A]" />
            
            <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed font-semibold">
              Ramakrishnan envisions a future where young players in India have access to the same structured development pipelines, elite physical resources, and competitive exposure as their international counterparts.
            </p>
            <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed font-medium">
              Inspired by the dream of his parents, Mr. Devaraj and Mrs. Rajammal Devaraj, who wished to see their grandson represent India on the world stage, Ram turned his own experiences as a player with limited resources into a driving force. His vision focuses on cultivating high-performance environments where players receive top-tier tactical training, nutrition advice, and scientific athletic mentoring to transition seamlessly from local fields to professional football leagues.
            </p>

            <div className="flex flex-wrap gap-4 mt-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#10143A] bg-white px-4 py-2.5 rounded-xl shadow-xs">
                <Shield className="h-4 w-4 shrink-0 text-[#10143A]" />
                KSFA Affiliated Pathway
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#10143A] bg-white px-4 py-2.5 rounded-xl shadow-xs">
                <GraduationCap className="h-4 w-4 shrink-0 text-[#10143A]" />
                Structured Career Pathways
              </div>
            </div>
          </div>
        </div>

        {/* 2. Why the Foundation Was Created (Text Left, Image Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16 bg-gray-50 rounded-3xl p-6 sm:p-12 shadow-sm relative overflow-hidden">
          
          {/* Left Side: Text */}
          <div className="lg:col-span-7 flex flex-col gap-5 text-left order-2 lg:order-1 relative z-10">
            <span className="text-[9px] font-black uppercase tracking-widest text-[#10143A] bg-[#DCE135] px-2.5 py-0.5 rounded w-fit">
              FOUNDATION ORIGINS
            </span>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#10143A]/5 flex items-center justify-center text-[#10143A] shrink-0">
                <Heart className="h-5 w-5 text-[#10143A]" />
              </div>
              <h2 className="font-display text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#10143A] leading-tight">
                Why the Foundation Was Created
              </h2>
            </div>
            <div className="h-1 w-12 bg-[#10143A]" />

            <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed font-semibold">
              The Bangalore Super Strikers Foundation (BSSFC Foundation) was established to dismantle socioeconomic barriers that prevent talented children from accessing sports.
            </p>
            <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed font-medium">
              During his formative training years, Ram noticed that countless talented, enthusiastic players from middle-class and underprivileged families were locked out of professional pathways due to the high cost of elite coaching, kits, travel, and tournament fees.
            </p>
            <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed font-medium">
              The Foundation was created to offer comprehensive scholarships, kit sponsorships, and free soccer coaching clinics so that any aspiring child—regardless of their financial background—can pursue their sporting dreams with dignity.
            </p>
          </div>

          {/* Right Side: Image (100% Pure Crisp 4K, Zero Overlay) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center order-1 lg:order-2 relative z-10 w-full">
            <div className="relative aspect-[3/4] w-full max-w-[450px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/founder-portrait-fence.jpg"
                alt="Founder at Grassroots Foundation Field"
                fill
                unoptimized
                className="object-cover object-center transition-transform duration-700 hover:scale-102"
                sizes="(max-w-768px) 100vw, 450px"
              />
            </div>
            <div className="w-full max-w-[450px] bg-white rounded-xl p-3 shadow-sm mt-3 flex items-center justify-between">
              <p className="text-xs font-bold text-[#10143A] uppercase">
                Empowering Underprivileged Talent
              </p>
              <span className="text-[9px] font-black text-[#10143A] uppercase tracking-wider bg-[#DCE135] px-2 py-0.5 rounded">
                Grassroots Action
              </span>
            </div>
          </div>
        </div>

        {/* 3. Community Initiatives (Image Left, Text Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16 bg-gray-50 rounded-3xl p-6 sm:p-12 shadow-sm relative overflow-hidden">
          
          {/* Left Side: Image (100% Pure Crisp 4K, Zero Overlay) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative z-10 w-full">
            <div className="relative aspect-[3/4] w-full max-w-[450px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/founder-with-football.jpg"
                alt="Founder with Football on Turf"
                fill
                unoptimized
                className="object-cover object-top transition-transform duration-700 hover:scale-102"
                sizes="(max-w-768px) 100vw, 450px"
              />
            </div>
            <div className="w-full max-w-[450px] bg-white rounded-xl p-3 shadow-sm mt-3 flex items-center justify-between">
              <p className="text-xs font-bold text-[#10143A] uppercase">
                On-Field Mentoring & Camps
              </p>
              <span className="text-[9px] font-black text-[#10143A] uppercase tracking-wider bg-[#DCE135] px-2 py-0.5 rounded">
                Community Impact
              </span>
            </div>
          </div>

          {/* Right Side: Text */}
          <div className="lg:col-span-7 flex flex-col gap-5 text-left relative z-10">
            <span className="text-[9px] font-black uppercase tracking-widest text-[#10143A] bg-[#DCE135] px-2.5 py-0.5 rounded w-fit">
              SOCIAL IMPACT
            </span>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#10143A]/5 flex items-center justify-center text-[#10143A] shrink-0">
                <Users className="h-5 w-5 text-[#10143A]" />
              </div>
              <h2 className="font-display text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#10143A] leading-tight">
                Community Initiatives
              </h2>
            </div>
            <div className="h-1 w-12 bg-[#10143A]" />

            <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed font-semibold">
              Our initiatives reach deep into regional communities to make sports a driving force for public health, discipline, and personal growth.
            </p>
            <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed font-medium">
              BSSFC actively coordinates with local public schools to integrate physical literacy and basic football training directly into standard school curriculums. We run weekend neighborhood leagues, conduct free health check-ups, and offer certification workshops for local volunteer coaches.
            </p>
            <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed font-medium">
              Additionally, our specialized holiday camps and residential scout operations actively target both urban zones and rural districts, offering children healthy physical channels and full scholarship opportunities.
            </p>
          </div>
        </div>

        {/* 4. Training Philosophy & Football Development (Text Left, Image Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16 bg-gray-50 rounded-3xl p-6 sm:p-12 shadow-sm relative overflow-hidden">
          
          {/* Left Side: Text & Pillars */}
          <div className="lg:col-span-7 flex flex-col gap-5 text-left order-2 lg:order-1 relative z-10">
            <span className="text-[9px] font-black uppercase tracking-widest text-[#10143A] bg-[#DCE135] px-2.5 py-0.5 rounded w-fit">
              COACHING EXCELLENCE
            </span>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#10143A]/5 flex items-center justify-center text-[#10143A] shrink-0">
                <Activity className="h-5 w-5 text-[#10143A]" />
              </div>
              <h2 className="font-display text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#10143A] leading-tight">
                Training Philosophy & Pillars
              </h2>
            </div>
            <div className="h-1 w-12 bg-[#10143A]" />

            <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed font-semibold">
              Our training philosophy focuses on developing <strong className="text-[#10143A]">The Total Footballer</strong> through structured, scientific methodologies aligned with AIFF and international curriculum standards.
            </p>

            <div className="grid grid-cols-2 gap-3.5 my-2">
              <div className="flex flex-col gap-0.5 bg-white rounded-xl p-3.5 shadow-xs">
                <span className="text-xs font-black uppercase text-[#10143A]">Progression</span>
                <span className="text-[10px] text-gray-400 font-medium">Systematic age-appropriate curricula</span>
              </div>
              <div className="flex flex-col gap-0.5 bg-white rounded-xl p-3.5 shadow-xs">
                <span className="text-xs font-black uppercase text-[#10143A]">Nutrition</span>
                <span className="text-[10px] text-gray-400 font-medium">Hydration and diet guidelines</span>
              </div>
              <div className="flex flex-col gap-0.5 bg-white rounded-xl p-3.5 shadow-xs">
                <span className="text-xs font-black uppercase text-[#10143A]">Training</span>
                <span className="text-[10px] text-gray-400 font-medium">UEFA-based match setups</span>
              </div>
              <div className="flex flex-col gap-0.5 bg-white rounded-xl p-3.5 shadow-xs">
                <span className="text-xs font-black uppercase text-[#10143A]">Technique</span>
                <span className="text-[10px] text-gray-400 font-medium">Precision ball control drills</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#10143A] text-white hover:bg-[#DCE135] hover:text-[#10143A] transition-all px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm"
              >
                Join Our Academy
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Right Side: Image (100% Pure Crisp 4K, Zero Overlay) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center order-1 lg:order-2 relative z-10 w-full">
            <div className="relative aspect-[3/4] w-full max-w-[450px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/founder-turf-pose.jpg"
                alt="Founder inspecting professional pitch"
                fill
                unoptimized
                className="object-cover object-top transition-transform duration-700 hover:scale-102"
                sizes="(max-w-768px) 100vw, 450px"
              />
            </div>
            <div className="w-full max-w-[450px] bg-white rounded-xl p-3 shadow-sm mt-3 flex items-center justify-between">
              <p className="text-xs font-bold text-[#10143A] uppercase">
                FIFA-Grade Turf & Facility
              </p>
              <span className="text-[9px] font-black text-[#10143A] uppercase tracking-wider bg-[#DCE135] px-2 py-0.5 rounded">
                Infrastructure
              </span>
            </div>
          </div>
        </div>

        {/* 5. Tribute & Dedication Block */}
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
