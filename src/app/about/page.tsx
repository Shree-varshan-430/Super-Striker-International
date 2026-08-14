import React from "react";
import Image from "next/image";
import { Shield, Target, Eye, Trophy, Award, Activity, Heart, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="w-full bg-white text-[#10143A] min-h-screen pt-28 pb-20 select-none text-left">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Heading */}
        <div className="border-l-4 border-[#10143A] pl-6 mb-12">
          <span className="text-[10px] font-black uppercase tracking-widest text-white bg-[#10143A] px-2.5 py-0.5 rounded">
            THE BSSFC STORY
          </span>
          <h1 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#10143A] mt-2">
            Background Of The Club
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 leading-relaxed max-w-xl mt-2">
            Discover the legacy, dreams, and commitment behind the Bangalore Super Strikers Football Club and Soccer School.
          </p>
        </div>

        {/* Club Legacy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Left Column - Detailed narrative */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-sm text-[#4B5563] leading-relaxed font-medium">
            <p>
              Bangalore Super Strikers Football Club was inspired by the vision of{" "}
              <strong className="text-[#10143A]">Mr. Devaraj and Mrs. Rajammal Devaraj</strong>, who dreamed of seeing
              their grandson represent India. Their son, Ramakrishnan (Ram), now the club’s president, shares this
              vision and adds his own lifelong dedication to football. As a passionate player, Ram experienced firsthand
              the challenges and limited resources available for middle-class athletes, which motivated him to create a
              supportive platform for young players.
            </p>
            <p>
              Ram’s commitment began by coaching his son, <strong className="text-[#10143A]">Sabari</strong>, who
              recently played in the <strong className="text-[#10143A]">Karnataka sub-juniors and contributed to the
              team’s victory</strong>. Along this journey, Ram encountered various obstacles in helping Sabari reach
              competitive levels, realizing that many other children face similar potential barriers. This understanding
              fueled Ram’s determination to establish <strong className="text-[#10143A]">Bangalore Super Strikers Football
              Club</strong> as a means to provide the mentorship, guidance, and opportunities that many young, aspiring
              players lack.
            </p>
            <p>
              Today, as an AIFF-C licensed coach and KSFA referee, Ram leads the club in developing one of the largest
              grassroots football communities in South India, emphasizing team spirit, sportsmanship, and inclusivity.
              Through scholarships and sponsorships, the club supports underprivileged children, fostering a meaningful
              impact in grassroots football and empowering young talent to pursue their dreams at national and international
              levels.
            </p>

            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-150 mt-4 flex items-start gap-4">
              <Shield className="h-6 w-6 text-[#10143A] shrink-0 mt-1" />
              <div className="flex flex-col">
                <span className="text-xs font-black uppercase text-[#10143A] tracking-wider">
                  Official Affiliation
                </span>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                  The club is officially affiliated to the <strong className="text-[#10143A]">Karnataka State Football Association (KSFA)</strong>. We are committed to innovation, creativity, excellence, and teamwork with an objective of reaching our vision.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Illustrative layout with stats / highlights */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden border border-gray-150 bg-gray-50 shadow-sm group">
              <Image
                src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=800&auto=format&fit=crop"
                alt="Football coaching on pitch"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-103"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#10143A]/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[9px] font-black uppercase tracking-widest text-[#DCE135]">
                  AIFF-C Licensed Coaching
                </span>
                <h3 className="font-display text-lg font-black uppercase tracking-tight mt-1 leading-none">
                  Empowering Grassroots Football
                </h3>
              </div>
            </div>

            {/* Quick fact card */}
            <div className="bg-gray-50 rounded-3xl p-6 border border-gray-150 shadow-sm flex flex-col gap-4">
              <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                <span className="text-xs font-black text-[#10143A] uppercase tracking-wider">
                  Club Philosophy
                </span>
                <span className="text-[8px] font-black uppercase tracking-widest text-[#10143A] bg-[#DCE135] px-2 py-0.5 rounded">
                  BSSFC
                </span>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed font-semibold">
                &ldquo;We identify and train young talents and guide them to explore themselves in State Level & National Level football competitions.&rdquo;
              </p>
            </div>
          </div>

        </div>

        {/* Mission & Vision Section */}
        <div className="bg-gray-50 rounded-[32px] p-8 sm:p-12 border border-gray-150 shadow-sm mb-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 h-40 w-40 bg-[#10143A]/5 rounded-bl-full pointer-events-none" />
          
          <div className="text-center mb-10 max-w-xl mx-auto">
            <span className="text-[10px] font-black uppercase tracking-widest text-white bg-[#10143A] px-2.5 py-0.5 rounded">
              CORE CREED
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#10143A] mt-3">
              Together Everyone Achieves More
            </h2>
            <div className="h-1 w-12 bg-[#10143A] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Mission Card */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 flex flex-col gap-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#10143A]/5 flex items-center justify-center text-[#10143A]">
                  <Target className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-black uppercase tracking-wider text-[#10143A]">
                  Our Mission
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-medium">
                Our mission is to create awareness about football and support each individual by providing opportunity to showcase their skills and to excel in the same. We create the best players by providing them high quality training in a friendly yet challenging environment for those who aspire to become world-class footballers.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 flex flex-col gap-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#10143A]/5 flex items-center justify-center text-[#10143A]">
                  <Eye className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-black uppercase tracking-wider text-[#10143A]">
                  Our Vision
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-medium">
                To develop a good reputation for football by producing well trained players, To help them reach peak levels of performance through good foundation, sporting spirit, maintain high standards of excellence and to produce future talented champions for the country.
              </p>
            </div>
          </div>
        </div>

        {/* Fluid Section: Creating The Total Footballer */}
        <div className="mb-20">
          <div className="border-l-4 border-[#10143A] pl-6 mb-10">
            <span className="text-[10px] font-black uppercase tracking-widest text-white bg-[#10143A] px-2.5 py-0.5 rounded">
              DEVELOPMENT PILLARS
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#10143A] mt-2">
              Creating The Total Footballer
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left 4 pillars (7 cols) */}
            <div className="lg:col-span-7 grid grid-cols-2 gap-4">
              {[
                { label: "Progression", desc: "Systematic age-appropriate advancement charts.", icon: Award },
                { label: "Nutrition", desc: "Scientific diet parameters and hydration tips.", icon: Activity },
                { label: "Training", desc: "UEFA curriculum-based match-situation practices.", icon: Shield },
                { label: "Technique", desc: "Individually customized ball control & striking drills.", icon: Trophy }
              ].map((pillar) => {
                const IconComponent = pillar.icon;
                return (
                  <div key={pillar.label} className="bg-gray-50 rounded-2xl p-5 border border-gray-150 flex flex-col gap-3 shadow-sm text-left">
                    <div className="w-9 h-9 rounded-xl bg-[#10143A] text-white flex items-center justify-center">
                      <IconComponent className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-display text-sm sm:text-base font-black uppercase text-[#10143A] tracking-wider leading-none">
                        {pillar.label}
                      </h4>
                      <p className="text-[11px] text-gray-500 mt-1 leading-normal font-medium">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right text layout (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-4 text-left">
              <h3 className="font-display text-lg font-black uppercase tracking-tight text-[#10143A] leading-tight">
                Quality Training & Dedicated Mentorship
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-semibold">
                We are the football coaching provider with the only motive of quality service and training. We promise superior, consistent, and quality service.
              </p>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-medium">
                Our main focus is to identify and train young talents and guide them to explore themselves in State Level & National Level football competitions and tournaments. Our ultimate goal is to provide standard coaching and training, thus improving confidence and excitement to enjoy football at its finest level.
              </p>
              
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-[#10143A] hover:text-[#DCE135] transition-colors mt-2"
              >
                Enroll In BSSFC Soccer School
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
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
