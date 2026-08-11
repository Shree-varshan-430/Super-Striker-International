"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Shield, Target, Eye, Calendar, Award, BookOpen, Compass } from "lucide-react";

export default function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const timelineEvents = [
    {
      title: "Vision Started",
      description: "SuperStriker was founded with a singular dream: creating a structured path for local talent. We initiated regional consultations and laid down physical literacy guidelines.",
      icon: Compass,
      year: "2022"
    },
    {
      title: "Grassroots Development",
      description: "Partnered with schools across Bangalore and Pondicherry, establishing weekly clinics and seasonal school festivals. Reached over 1,500 children.",
      icon: Calendar,
      year: "2023"
    },
    {
      title: "Football Academies",
      description: "Launched the Bangalore Football School, introducing professional licensing curricula, performance tracking, and smart telemetry tools.",
      icon: BookOpen,
      year: "2024"
    },
    {
      title: "Professional Clubs",
      description: "Registered our competitive squads: Bangalore Super Strikers FC, Pondicherry Super Strikers FC, and Chennai Super Strikers FC in state senior division leagues.",
      icon: Shield,
      year: "2025"
    },
    {
      title: "National & International Opportunities",
      description: "Carving trials, professional player transfers, and international academy exchange tours. Sending elite athletes to test in global tournaments.",
      icon: Award,
      year: "Ongoing"
    }
  ];

  return (
    <div className="w-full bg-white text-secondary-navy">
      {/* Editorial Header */}
      <section className="bg-background-soft py-20 border-b border-gray-100 text-center px-4">
        <div className="max-w-4xl mx-auto flex flex-col gap-4">
          <span className="text-[10px] font-bold uppercase tracking-widest text-primary-sky">Corporate Story</span>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold uppercase tracking-tight leading-none text-secondary-navy">
            More Than A Football Club. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-navy to-primary-sky">A Football Movement.</span>
          </h1>
          <p className="text-secondary-navy/80 text-base max-w-2xl mx-auto leading-relaxed mt-2">
            SuperStriker International Pvt Ltd was created with the mission of developing football talent and creating opportunities for young athletes across India.
          </p>
        </div>
      </section>

      {/* Corporate Mission & Vision section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Mission Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="bg-white border border-[#10143A]/10 p-8 rounded-2xl shadow-[0_12px_24px_rgba(16,20,58,0.05)] hover:border-[#10143A]/30 flex flex-col gap-6 relative overflow-hidden group transition-all duration-300"
          >
            <div className="absolute top-0 right-0 h-24 w-24 bg-[#10143A]/10 rounded-bl-full flex items-center justify-center text-[#10143A]">
              <Target className="h-8 w-8 text-[#10143A]" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#10143A]">Our Mission</span>
              <h2 className="font-display text-2xl font-black uppercase tracking-tight text-secondary-navy mt-1">
                Excellence & Skill Development
              </h2>
            </div>
            <p className="text-secondary-navy/80 text-sm leading-relaxed mt-4">
              Our mission is to create awareness about football and support every individual by providing opportunities to showcase their skills and excel. We provide high-quality training in a friendly yet challenging environment for players aspiring to become world-class footballers.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="bg-white border border-[#10143A]/10 p-8 rounded-2xl shadow-[0_12px_24px_rgba(16,20,58,0.05)] hover:border-[#10143A]/30 flex flex-col gap-6 relative overflow-hidden group transition-all duration-300"
          >
            <div className="absolute top-0 right-0 h-24 w-24 bg-[#10143A]/10 rounded-bl-full flex items-center justify-center text-[#10143A]">
              <Eye className="h-8 w-8 text-[#10143A]" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#10143A]">Our Vision</span>
              <h2 className="font-display text-2xl font-black uppercase tracking-tight text-secondary-navy mt-1">
                Creating Future Champions
              </h2>
            </div>
            <p className="text-secondary-navy/80 text-sm leading-relaxed mt-4">
              To develop talented footballers through strong foundations, sporting spirit, and excellence. Our vision is to create future champions who can represent India at national and international levels.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Heritage Club Story Section */}
      <section className="py-24 bg-background-soft border-y border-gray-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#10143A]">Heritage & Presidency</span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-secondary-navy">
              The Dream Behind <br />
              Bangalore Super Strikers
            </h2>
            <div className="h-1 w-12 bg-[#10143A]" />
            
            <div className="space-y-4 text-sm text-secondary-navy/80 leading-relaxed">
              <p>
                Bangalore Super Strikers Football Club was inspired by the vision of <strong>Mr. Devaraj and Mrs. Rajammal Devaraj</strong>, who dreamed of seeing their grandson represent India in football.
              </p>
              <p>
                Their son, <strong>Ramakrishnan (Ram)</strong>, the club president, carried this vision forward with his lifelong passion for the game. As a passionate player himself, Ram experienced the steep challenges faced by middle-class athletes due to limited resources and opportunities.
              </p>
              <p>
                This inspired him to create a platform where young players receive proper mentorship, guidance, and development opportunities. Today, Ram leads the club as an AIFF-C licensed coach and KSFA referee, building one of the largest grassroots football communities in South India.
              </p>
            </div>
          </motion.div>

          {/* Founder Quote Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 bg-white border border-[#10143A]/10 p-8 rounded-2xl shadow-[0_12px_24px_rgba(16,20,58,0.05)] hover:border-[#10143A]/30 transition-all duration-300 flex flex-col justify-between relative"
          >
            <div className="absolute top-4 right-6 text-[#10143A]/10 font-serif text-8xl pointer-events-none select-none">
              “
            </div>
            
            <div className="flex flex-col gap-4">
              <p className="text-base font-medium italic leading-relaxed text-secondary-navy/90 relative z-10">
                &ldquo;Football is not just about creating players. It is about creating opportunities, confidence, and dreams.&rdquo;
              </p>
            </div>

            <div className="mt-8 flex items-center gap-4 border-t border-gray-100 pt-6">
              <div className="relative h-12 w-12 rounded-full overflow-hidden shrink-0">
                <Image
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop"
                  alt="Ramakrishnan"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="text-sm font-bold text-secondary-navy">Ramakrishnan</h4>
                <p className="text-xs text-secondary-navy/50">President, Bangalore Super Strikers FC</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#10143A] font-semibold">Development Roadmap</span>
          <h2 className="font-display text-3xl font-black uppercase tracking-tight text-secondary-navy mt-1">
            Our Journey & Milestones
          </h2>
          <div className="h-1 w-12 bg-[#10143A] mx-auto mt-4" />
        </div>

        <div className="relative ml-4 md:ml-32">
          {/* Vertical gradient timeline line */}
          <div className="absolute left-0 top-2 bottom-6 w-0.5 bg-gradient-to-b from-[#10143A] via-[#DCE135] to-[#1B2255] -translate-x-[1px]" />

          {timelineEvents.map((event, index) => {
            const Icon = event.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-12 relative pl-8 md:pl-12"
              >
                {/* Year tag left-aligned on desktop */}
                <div className="hidden md:block absolute -left-36 top-1 text-right w-24">
                  <span className="text-xl font-display font-extrabold text-secondary-navy">
                    {event.year}
                  </span>
                  <span className="block text-[9px] uppercase font-bold tracking-widest text-[#10143A] mt-0.5">
                    Phase {index + 1}
                  </span>
                </div>

                {/* Dot marker with Electric Blue glow, transition to active Violet on hover */}
                <div className="absolute -left-[15px] top-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#10143A] border-2 border-[#DCE135] text-white shadow-[0_0_15px_rgba(245,208,0,0.3)] hover:border-[#DCE135] hover:shadow-[0_0_20px_rgba(245,208,0,0.5)] transition-all duration-300 z-10">
                  <Icon className="h-3.5 w-3.5" />
                </div>

                <div className="bg-white border border-[#10143A]/10 hover:border-[#10143A]/30 rounded-xl p-6 shadow-sm hover:shadow-[0_12px_24px_rgba(16,20,58,0.05)] hover:shadow-md transition-all duration-300">
                  {/* Mobile-only Year Badge */}
                  <span className="md:hidden inline-block bg-[#10143A]/10 text-[#10143A] text-[10px] font-bold px-2 py-0.5 rounded mb-2">
                    {event.year}
                  </span>
                  <h3 className="font-display text-lg font-bold uppercase tracking-tight text-secondary-navy">
                    {event.title}
                  </h3>
                  <p className="text-sm text-secondary-navy/60 leading-relaxed mt-2">
                    {event.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* POSTER STYLE BANNER SECTION 3 */}
      <section className="relative py-28 text-center text-white bg-secondary-navy overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1600&auto=format&fit=crop"
          alt="Team Huddle celebration"
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-secondary-navy/40 mix-blend-overlay" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 flex flex-col gap-6 items-center">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#DCE135]">Core Creed</span>
          <h2 className="font-display text-4xl sm:text-5xl font-black uppercase tracking-tight leading-none">
            Together Everyone Achieves More
          </h2>
          <div className="h-1 w-16 bg-[#DCE135] mt-2" />
        </div>
      </section>
    </div>
  );
}
