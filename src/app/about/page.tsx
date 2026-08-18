import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
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
    <div className="w-full bg-white text-[#11123c] min-h-screen pb-20 select-none text-left">
      
      {/* Small Hero Banner */}
      <div className="relative w-full h-[240px] sm:h-[300px] bg-[#11123c] flex items-center justify-start overflow-hidden group select-none mt-20">
        <Image
          src="/images/founder-pitch-side.jpg"
          alt="About Bangalore Super Strikers"
          fill
          quality={85}
          className="object-cover object-top opacity-75 transition-transform duration-1000 group-hover:scale-102"
          priority
        />
        {/* Subtle contrast gradient for typography */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-[#11123c]/60 to-transparent z-10" />
        
        {/* Brand accent wedges on bottom right */}
        <div 
          className="absolute bottom-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-[#11123c] pointer-events-none z-15 translate-x-2 translate-y-2 lg:block hidden" 
          style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }} 
        />
        <div 
          className="absolute bottom-0 right-0 w-20 h-20 sm:w-28 sm:h-28 bg-[#e9d319] pointer-events-none z-20 lg:block hidden" 
          style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }} 
        />

        <div className="relative z-20 max-w-7xl 2xl:max-w-[1440px] mx-auto w-full px-4 sm:px-6 lg:px-10 xl:px-12 text-left flex flex-col gap-2">
          <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-[#e9d319] bg-[#11123c] px-3 py-1 rounded w-fit">
            ABOUT THE PLATFORM
          </span>
          <h1 className="font-display text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-none">
            Bangalore Super Strikers FC
          </h1>
          <p className="text-xs sm:text-base text-white/80 max-w-2xl leading-relaxed mt-1 font-medium">
            A comprehensive look into our foundation, developmental vision, coaching philosophies, and community-driven actions.
          </p>
        </div>
      </div>

      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 pt-12 sm:pt-16">

        {/* 1. Founder Spotlight & Vision for Young Players (Image Left, Text Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center mb-12 sm:mb-16 bg-gray-50 rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-12 xl:p-14 shadow-sm relative overflow-hidden">
          
          {/* Left Side: Founder Image (Clean 4K Standalone Photo) */}
          <div className="lg:col-span-5 xl:col-span-5 flex justify-center relative z-10 w-full">
            <div className="relative aspect-[4/3] sm:aspect-[4/5] lg:aspect-[3/4] w-full max-w-[540px] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/founder-pitch-standing.jpg"
                alt="Ramakrishnan (Ram) - BSSFC President & AIFF Licensed Coach"
                fill
                quality={85}
                className="object-cover object-top transition-transform duration-700 hover:scale-102"
                sizes="(max-w-768px) 100vw, 540px"
              />
            </div>
          </div>

          {/* Right Side: His Vision for Young Players with Highlighted Key Points */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col gap-4 sm:gap-6 text-left relative z-10">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#11123c] bg-[#e9d319] px-3 py-1 rounded w-fit">
              PRESIDENTIAL VISION & HERITAGE
            </span>
            
            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#11123c] leading-tight">
              Vision For Young Players
            </h2>
            <div className="h-1.5 w-16 bg-[#11123c]" />
            
            <p className="text-base sm:text-xl font-bold text-[#11123c] leading-relaxed">
              Ramakrishnan envisions a future where young players in India have access to the same structured development pipelines, elite physical resources, and competitive exposure as their international counterparts.
            </p>
            
            <p className="text-sm sm:text-lg text-[#374151] leading-relaxed font-normal">
              Inspired by the dream of his parents, Mr. Devaraj and Mrs. Rajammal Devaraj, who wished to see their grandson represent India on the world stage, Ram turned his own experiences as a player with limited resources into a driving force. His vision focuses on cultivating high-performance environments where players receive top-tier tactical training, nutrition advice, and scientific athletic mentoring to transition seamlessly from local fields to professional football leagues.
            </p>

            {/* Highlighted Important Key Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-2">
              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-xs border-l-4 border-[#11123c] flex flex-col gap-1">
                <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-[#11123c]">
                  AIFF-C Licensed Coaching
                </span>
                <p className="text-xs sm:text-sm text-[#4B5563] font-medium leading-normal">
                  Standardized tactical curricula directly overseen by certified federation coaches.
                </p>
              </div>

              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-xs border-l-4 border-[#e9d319] flex flex-col gap-1">
                <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-[#11123c]">
                  KSFA Affiliated Pathways
                </span>
                <p className="text-xs sm:text-sm text-[#4B5563] font-medium leading-normal">
                  Direct feeder system transitioning grassroots prodigies into competitive state leagues.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Why the Foundation Was Created (Text Left, Image Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center mb-12 sm:mb-16 bg-gray-50 rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-12 xl:p-14 shadow-sm relative overflow-hidden">
          
          {/* Left Side: Text */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col gap-4 sm:gap-6 text-left order-2 lg:order-1 relative z-10">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#11123c] bg-[#e9d319] px-3 py-1 rounded w-fit">
              FOUNDATION ORIGINS
            </span>
            
            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#11123c] leading-tight">
              Why the Foundation Was Created
            </h2>
            <div className="h-1.5 w-16 bg-[#11123c]" />

            <p className="text-base sm:text-xl font-bold text-[#11123c] leading-relaxed">
              The Bangalore Super Strikers Foundation (BSSFC Foundation) was established to dismantle socioeconomic barriers that prevent talented children from accessing sports.
            </p>
            
            <p className="text-sm sm:text-lg text-[#374151] leading-relaxed font-normal">
              During his formative training years, Ram noticed that countless talented, enthusiastic players from middle-class and underprivileged families were locked out of professional pathways due to the high cost of elite coaching, kits, travel, and tournament fees.
            </p>
            
            <p className="text-sm sm:text-lg text-[#374151] leading-relaxed font-normal">
              The Foundation was created to offer comprehensive scholarships, kit sponsorships, and free soccer coaching clinics so that any aspiring child—regardless of their financial background—can pursue their sporting dreams with dignity.
            </p>
          </div>

          {/* Right Side: Image (Clean 4K Standalone Photo, No Text Below) */}
          <div className="lg:col-span-5 xl:col-span-5 flex justify-center order-1 lg:order-2 relative z-10 w-full">
            <div className="relative aspect-[4/3] sm:aspect-[4/5] lg:aspect-[3/4] w-full max-w-[540px] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/founder-portrait-fence.jpg"
                alt="Founder at Grassroots Foundation Field"
                fill
                quality={85}
                className="object-cover object-center transition-transform duration-700 hover:scale-102"
                sizes="(max-w-768px) 100vw, 540px"
              />
            </div>
          </div>
        </div>

        {/* 3. Community Initiatives (Image Left, Text Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center mb-12 sm:mb-16 bg-gray-50 rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-12 xl:p-14 shadow-sm relative overflow-hidden">
          
          {/* Left Side: Image (Clean 4K Standalone Photo, No Text Below) */}
          <div className="lg:col-span-5 xl:col-span-5 flex justify-center relative z-10 w-full">
            <div className="relative aspect-[4/3] sm:aspect-[4/5] lg:aspect-[3/4] w-full max-w-[540px] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/founder-with-football.jpg"
                alt="Founder with Football on Turf"
                fill
                quality={85}
                className="object-cover object-top transition-transform duration-700 hover:scale-102"
                sizes="(max-w-768px) 100vw, 540px"
              />
            </div>
          </div>

          {/* Right Side: Text */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col gap-4 sm:gap-6 text-left relative z-10">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#11123c] bg-[#e9d319] px-3 py-1 rounded w-fit">
              SOCIAL IMPACT
            </span>
            
            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#11123c] leading-tight">
              Community Initiatives
            </h2>
            <div className="h-1.5 w-16 bg-[#11123c]" />

            <p className="text-base sm:text-xl font-bold text-[#11123c] leading-relaxed">
              SuperStriker actively operates free weekly grassroots football clinics, kit donation drives, and public school sports programs across local neighborhoods.
            </p>
            
            <p className="text-sm sm:text-lg text-[#374151] leading-relaxed font-normal">
              Football has the unique power to instill discipline, teamwork, and healthy physical habits in young minds. Through partnerships with local schools and sports bodies, the Foundation regularly hosts youth scouting festivals and developmental tournaments.
            </p>
            
            <p className="text-sm sm:text-lg text-[#374151] leading-relaxed font-normal">
              These community events give aspiring young footballers an authentic match environment, helping coaches identify hidden talent while encouraging physical fitness and sportsmanship in the wider community.
            </p>
          </div>
        </div>

        {/* 4. Leadership & Football Coaching Philosophy (Text Left, Image Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center mb-12 sm:mb-16 bg-gray-50 rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-12 xl:p-14 shadow-sm relative overflow-hidden">
          
          {/* Left Side: Text */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col gap-4 sm:gap-6 text-left order-2 lg:order-1 relative z-10">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#11123c] bg-[#e9d319] px-3 py-1 rounded w-fit">
              COACHING METHODOLOGY
            </span>
            
            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#11123c] leading-tight">
              Leadership & Coaching Philosophy
            </h2>
            <div className="h-1.5 w-16 bg-[#11123c]" />

            <p className="text-base sm:text-xl font-bold text-[#11123c] leading-relaxed">
              As an AIFF-C Licensed Coach, certified KSFA Referee, and holder of official Grassroots Certifications, Ram brings a rigorous technical standard to player development.
            </p>
            
            <p className="text-sm sm:text-lg text-[#374151] leading-relaxed font-normal">
              His coaching methodology balances tactical awareness, ball mastery, cognitive agility, and physical conditioning. More importantly, he instills sportsmanship, mental toughness, and mutual respect in every athlete who wears the SuperStriker jersey.
            </p>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#11123c] text-white hover:bg-[#e9d319] hover:text-[#11123c] transition-all px-8 py-4 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider shadow-sm"
              >
                Join Our Academy
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Right Side: Image (Clean 4K Standalone Photo, No Text Below) */}
          <div className="lg:col-span-5 xl:col-span-5 flex justify-center order-1 lg:order-2 relative z-10 w-full">
            <div className="relative aspect-[4/3] sm:aspect-[4/5] lg:aspect-[3/4] w-full max-w-[540px] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/founder-turf-pose.jpg"
                alt="Founder inspecting professional pitch"
                fill
                quality={85}
                className="object-cover object-top transition-transform duration-700 hover:scale-102"
                sizes="(max-w-768px) 100vw, 540px"
              />
            </div>
          </div>
        </div>

        {/* 5. Tribute & Dedication Block */}
        <div className="bg-[#11123c] text-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-14 relative overflow-hidden text-left shadow-xl flex flex-col gap-2">
          <span className="text-[10px] font-black uppercase tracking-widest text-[#e9d319]">
            DEDICATION & TRIBUTE
          </span>
          <p className="font-display text-sm sm:text-lg lg:text-xl font-bold uppercase tracking-wide leading-relaxed">
            A special tribute to my grandparents: R. Nanjundaiah & N. Rajamma, and my great-grandparents: Ramaiah & R. Aaliammal. You are always in our hearts. 🙏
          </p>
        </div>

      </div>
    </div>
  );
}
