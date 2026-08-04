"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Shield, Trophy, GraduationCap, Compass, Award, ArrowRight, Building2, Check } from "lucide-react";

export default function EcosystemShowcase() {
  const fadeIn = {
    hidden: { opacity: 0, y: 35 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  } as const;

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const journeySteps = [
    { label: "SuperStriker International", icon: Building2 },
    { label: "Football Foundations", icon: Compass },
    { label: "Professional Football Clubs", icon: Shield },
    { label: "Football Schools", icon: GraduationCap },
    { label: "Player Development", icon: Award },
    { label: "Future Football Champions", icon: Trophy },
  ];

  const clubs = [
    {
      name: "Bangalore Super Strikers FC",
      url: "/clubs/bangalore-super-strikers-fc",
      location: "Bangalore, Karnataka",
      image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=600&auto=format&fit=crop",
      desc: "The foundation of our football journey, Bangalore Super Strikers FC focuses on grassroots development, professional training, competitive football, and creating opportunities for young athletes.",
      highlights: [
        "AIFF & KSFA football ecosystem",
        "Grassroots player development",
        "Professional coaching environment",
        "Tournament participation",
        "Youth talent identification",
      ],
    },
    {
      name: "Pondicherry Super Strikers FC",
      url: "/clubs/pondicherry-super-strikers-fc",
      location: "Pondicherry",
      image: "https://images.unsplash.com/photo-1518063319789-7217e6706b04?q=80&w=600&auto=format&fit=crop",
      desc: "Pondicherry Super Strikers FC represents our mission of expanding football opportunities across regions by developing players through structured training, competition, and community engagement.",
      highlights: [
        "Regional football development",
        "Youth football opportunities",
        "Player growth programs",
        "Competitive exposure",
        "Football community building",
      ],
    },
    {
      name: "Chennai Super Strikers FC",
      url: "/clubs/chennai-super-strikers-fc",
      location: "Chennai, Tamil Nadu",
      image: "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?q=80&w=600&auto=format&fit=crop",
      desc: "Chennai Super Strikers FC strengthens our football ecosystem by discovering talented players and providing pathways towards state, national, and international football opportunities.",
      highlights: [
        "Talent identification",
        "Competitive football experience",
        "Player development pathway",
        "High-performance training",
        "Future champions program",
      ],
    },
  ];

  return (
    <div className="w-full bg-white text-secondary-navy overflow-hidden">
      {/* 1. SECTION HEADER */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="flex flex-col items-center gap-4"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-primary-sky bg-primary-sky/10 px-4 py-1.5 rounded-full">
            OUR FOOTBALL FOUNDATION & ECOSYSTEM
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-secondary-navy leading-none mt-2">
            Building India&apos;s Future Football Ecosystem
          </h2>
          <p className="text-sm sm:text-base text-secondary-navy/70 max-w-3xl mx-auto leading-relaxed mt-2">
            SuperStriker International creates a complete football pathway through professional football clubs, grassroots foundations, and football education programs, empowering young players to develop, compete, and achieve their dreams.
          </p>

          {/* Football-themed subtle visual lines */}
          <div className="w-24 h-1 bg-primary-sky rounded-full mt-4 relative">
            <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-4.5 h-4.5 bg-white border-2 border-primary-sky rounded-full flex items-center justify-center">
              <span className="w-1.5 h-1.5 bg-secondary-navy rounded-full" />
            </span>
          </div>
        </motion.div>
      </section>

      {/* 2. FOOTBALL ECOSYSTEM FLOW */}
      <section className="bg-background-soft/60 border-y border-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-[10px] font-bold uppercase tracking-widest text-secondary-navy/40">Infographic Journey</span>
            <h3 className="font-display text-xl font-bold uppercase tracking-tight text-secondary-navy mt-1">
              The Talent Journey Pathway
            </h3>
          </div>

          {/* Desktop flow */}
          <div className="hidden lg:grid grid-cols-6 gap-6 relative">
            {/* Animated connecting background line */}
            <div className="absolute top-10 left-12 right-12 h-1 bg-gray-200/80 z-0 overflow-hidden">
              <motion.div
                animate={{ x: ["-100%", "100%"] }}
                transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                className="w-1/2 h-full bg-gradient-to-r from-transparent via-primary-sky to-transparent"
              />
            </div>

            {journeySteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="flex flex-col items-center text-center gap-4 relative z-10"
                >
                  <div className="h-20 w-20 rounded-full bg-white border-2 border-primary-sky flex items-center justify-center text-secondary-navy shadow-md hover:scale-105 hover:bg-primary-sky/10 transition-all duration-300">
                    <Icon className="h-8 w-8" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary-sky">Step 0{idx + 1}</span>
                    <h4 className="text-xs font-bold uppercase tracking-tight text-secondary-navy px-2 leading-tight">
                      {step.label}
                    </h4>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile flow (Vertical list) */}
          <div className="lg:hidden flex flex-col items-center gap-2 max-w-sm mx-auto">
            {journeySteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="flex flex-col items-center w-full">
                  <div className="flex items-center gap-4 w-full bg-white border border-gray-150 p-4 rounded-xl shadow-sm">
                    <div className="h-12 w-12 rounded-lg bg-primary-sky/20 border border-primary-sky/30 flex items-center justify-center text-secondary-navy shrink-0">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <span className="block text-[9px] font-bold uppercase tracking-wider text-primary-sky">Phase 0{idx + 1}</span>
                      <h4 className="text-sm font-bold uppercase tracking-tight text-secondary-navy">
                        {step.label}
                      </h4>
                    </div>
                  </div>
                  {idx < journeySteps.length - 1 && (
                    <motion.div
                      animate={{ y: [0, 4, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                      className="py-1 text-primary-sky"
                    >
                      <ArrowRight className="h-5 w-5 rotate-90" />
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. FOOTBALL CLUB FOUNDATION CARDS */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[11px] font-bold uppercase tracking-wider text-primary-sky">Club Foundations</span>
          <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-secondary-navy mt-1">
            Our Professional Registry
          </h3>
          <div className="h-1 w-12 bg-primary-sky mx-auto mt-3" />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {clubs.map((club, idx) => (
            <motion.div key={idx} variants={fadeIn} className="flex h-full">
              <Link
                href={club.url}
                className="group flex flex-col bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-primary-sky/10 hover:border-primary-sky/30 transition-all duration-300 w-full"
                title={`Explore ${club.name}`}
              >
                {/* Large Football Image with zoom */}
                <div className="relative h-60 w-full overflow-hidden">
                  <Image
                    src={club.image}
                    alt={`${club.name} squad action`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary-navy/60 via-transparent to-transparent opacity-65" />
                  <span className="absolute bottom-4 left-4 inline-flex items-center gap-1 bg-white/95 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide text-secondary-navy shadow-sm">
                    {club.location}
                  </span>
                </div>

                {/* Content body */}
                <div className="p-6 flex-grow flex flex-col justify-between gap-6">
                  <div className="flex flex-col gap-4">
                    <h4 className="font-display text-xl font-bold uppercase tracking-tight text-secondary-navy group-hover:text-primary-sky transition-colors">
                      {club.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-secondary-navy/70 leading-relaxed">
                      {club.desc}
                    </p>
                    
                    {/* Highlights bullet registry */}
                    <div className="flex flex-col gap-2 mt-2">
                      {club.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs font-semibold text-secondary-navy/80">
                          <Check className="h-3.5 w-3.5 text-primary-sky shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Explore button & Arrow */}
                  <div className="border-t border-gray-100 pt-4 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-secondary-navy group-hover:text-primary-sky transition-colors">
                    <span>Explore {club.name.split(" FC")[0]}</span>
                    <motion.div
                      variants={{
                        hover: { x: 5 },
                      }}
                      className="transition-transform group-hover:translate-x-1.5"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </motion.div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 4. FOOTBALL SCHOOL FEATURE BLOCK */}
      <section className="py-20 bg-background-soft border-t border-gray-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-lg grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Text details column */}
            <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-center gap-6 text-left">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary-sky">Developing Players From The Ground Up</span>
                <h3 className="font-display text-3xl font-black uppercase tracking-tight text-secondary-navy mt-1">
                  Bangalore Football School
                </h3>
              </div>
              <p className="text-sm sm:text-base text-secondary-navy/70 leading-relaxed">
                Bangalore Football School focuses on creating complete footballers through structured coaching, technical development, tactical understanding, physical preparation, discipline, and teamwork.
              </p>
              
              {/* Features check grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                {[
                  "Professional football coaching",
                  "Beginner to advanced programs",
                  "Youth player development",
                  "Skill improvement",
                  "Confidence building",
                  "Sportsmanship development"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs font-bold text-secondary-navy/85">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary-sky/20 text-secondary-navy">
                      <Check className="h-3 w-3" />
                    </span>
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <Link
                  href="/football-school/bangalore-football-school"
                  className="inline-flex items-center gap-2 rounded-full bg-secondary-navy px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-secondary-navy/90 transition-all active:scale-95"
                >
                  Explore Bangalore Football School
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* School image block column */}
            <div className="lg:col-span-5 relative min-h-[300px] bg-secondary-navy overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1544698310-74ea9d1c8258?q=80&w=800&auto=format&fit=crop"
                alt="Children Football School Training"
                fill
                className="object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/5 to-transparent lg:block hidden" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. FINAL PROMOTIONAL BANNER */}
      <section className="relative py-28 text-center text-white bg-secondary-navy overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1600&auto=format&fit=crop"
          alt="Stadium lights overlay"
          fill
          className="object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary-navy/90 via-secondary-navy/60 to-secondary-navy" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 flex flex-col gap-6 items-center">
          <span className="text-[10px] font-bold uppercase tracking-widest text-primary-sky">CREATING THE TOTAL FOOTBALLER</span>
          <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight leading-tight max-w-2xl">
            Join Our Football Journey
          </h2>
          <p className="text-xs sm:text-sm text-gray-300 max-w-lg leading-relaxed">
            Our vision is to identify talent, provide quality football education, and create opportunities for players to excel at state, national, and international levels.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-4">
            <Link
              href="/ecosystem"
              className="inline-flex items-center gap-2 rounded-full bg-primary-sky px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-secondary-navy hover:bg-primary-sky/90 transition-all active:scale-95 shadow-md"
            >
              Explore Ecosystem
            </Link>
            <Link
              href="/investors#enquire"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-white/10 transition-all active:scale-95"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
