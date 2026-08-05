"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Shield, Trophy, GraduationCap, Compass, Users, Award, MapPin } from "lucide-react";

interface NodeDetail {
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  clubsOrEntities?: { name: string; loc: string; details?: string }[];
}

export default function Ecosystem() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    { id: 0, label: "SuperStriker Corporate", icon: Compass },
    { id: 1, label: "Professional Clubs", icon: Shield },
    { id: 2, label: "Football Academies", icon: GraduationCap },
    { id: 3, label: "Grassroots Programs", icon: Users },
    { id: 4, label: "Youth Players", icon: Award },
    { id: 5, label: "National Talent Pipeline", icon: Trophy }
  ];

  const detailsMap: Record<number, NodeDetail> = {
    0: {
      title: "SuperStriker International",
      subtitle: "The Corporate Ecosystem Framework",
      description: "The overarching corporate parent coordinating financing, land acquisition, sponsor relationships, licensing compliance, and strategic vision for all sub-entities.",
      highlights: [
        "Corporate governance & capital deployment",
        "FIFA standard infrastructure procurement",
        "International club partnerships & exchanges",
        "Sports data and telemetry systems integration"
      ]
    },
    1: {
      title: "Professional Football Clubs",
      subtitle: "State & National League Squads",
      description: "Our professional sports clubs compete in regional and state leagues, providing the ultimate platform for elite academy graduates and senior players.",
      highlights: [
        "Structured league calendar and squad registries",
        "Affiliation with state football associations",
        "Direct pathway to professional player contracts"
      ],
      clubsOrEntities: [
        { name: "Bangalore Super Strikers FC", loc: "Bangalore, Karnataka", details: "Competing in local KSFA leagues; senior first team squad." },
        { name: "Pondicherry Super Strikers FC", loc: "Pondicherry", details: "Regional squad focusing on territorial talent scouting." },
        { name: "Chennai Super Strikers FC", loc: "Chennai, Tamil Nadu", details: "Tamil Nadu competitive registry; scouting cohort integration." }
      ]
    },
    2: {
      title: "Football Academies & Schools",
      subtitle: "High-Performance Technical Development",
      description: "Our elite training academies deliver licensed coaching, sport nutrition programs, and structural skills benchmarks to shape raw athletic talent.",
      highlights: [
        "Elite player pathway curricula",
        "Sports science, biomechanics, and telemetry metrics",
        "Residential training facilities for U-13 and U-15 boys & girls"
      ],
      clubsOrEntities: [
        {
          name: "Bangalore Football School",
          loc: "Bangalore, Karnataka",
          details: "Elite development focal point; player development metrics; licensed AIFF coaching personnel."
        }
      ]
    },
    3: {
      title: "Grassroots Football Programs",
      subtitle: "Broad-Base Community Engagement",
      description: "Physical literacy and sports introduction clinics hosted inside municipal and private schools, generating a wide scout capture base.",
      highlights: [
        "Free municipal school coaching camps",
        "School tournament festivals and weekend leagues",
        "Coach-the-coach clinics for local school physical instructors",
        "Scouting networks across South India districts"
      ]
    },
    4: {
      title: "Youth Talent Identification",
      subtitle: "Scouted Youth Player Registry",
      description: "Fostering highly selected players through scholarship packages, advanced physical therapy, and video analysis loops to refine game mechanics.",
      highlights: [
        "Full talent scholarship systems",
        "Player database profiles for international agent review",
        "Personalized tactical development plans"
      ]
    },
    5: {
      title: "National & International Talent Pipeline",
      subtitle: "The Elite Graduation Goal",
      description: "The peak of our ecosystem. Elevating elite athletes into national squad rosters, national leagues (I-League, ISL), and international leagues.",
      highlights: [
        "Direct registry to senior league scouting",
        "Global partner trials and overseas development contracts",
        "Fulfilling the dream of representing India at national levels"
      ]
    }
  };

  const activeDetails = detailsMap[activeStep];

  return (
    <div className="w-full bg-white text-secondary-navy min-h-screen">
      {/* Ecosystem Header */}
      <section className="bg-background-soft py-20 border-b border-gray-100 px-4 text-center">
        <div className="max-w-4xl mx-auto flex flex-col gap-4">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#10143A]">Ecosystem Mapping</span>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold uppercase tracking-tight text-secondary-navy leading-none">
            Our Football Ecosystem
          </h1>
          <p className="text-sm text-secondary-navy/70 max-w-xl mx-auto leading-relaxed mt-2">
            Explore the vertical integration of SuperStriker International, tracing the path from raw grassroots discovery to professional contracts and national dreams.
          </p>
        </div>
      </section>

      {/* Diagram Layout */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left column - The interactive animated pipeline */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            <h2 className="font-display text-sm font-bold uppercase tracking-wider text-secondary-navy/60 border-b border-gray-100 pb-3 mb-6">
              Click pipeline nodes to investigate
            </h2>

            <div className="flex flex-col items-center sm:items-stretch gap-2">
              {steps.map((step, idx) => {
                const Icon = step.icon;
                const isActive = activeStep === idx;
                
                return (
                  <div key={step.id} className="flex flex-col items-center sm:items-stretch">
                    <motion.button
                      onClick={() => setActiveStep(idx)}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full max-w-md sm:max-w-none flex items-center gap-4 rounded-xl p-5 border text-left transition-all ${
                        isActive
                          ? "bg-[#10143A] text-white border-[#10143A]/30 shadow-lg shadow-[#10143A]/20"
                          : "bg-background-soft text-secondary-navy border-gray-100 hover:bg-[#10143A]/10"
                      }`}
                    >
                      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
                        isActive ? "bg-white text-[#10143A]" : "bg-white text-secondary-navy border border-gray-100"
                      }`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="flex-grow">
                        <span className="block text-[9px] uppercase font-bold tracking-widest leading-none opacity-50">
                          Tier 0{idx + 1}
                        </span>
                        <h3 className="font-display text-sm sm:text-base font-bold uppercase tracking-tight mt-1">
                          {step.label}
                        </h3>
                      </div>
                    </motion.button>

                    {idx < steps.length - 1 && (
                      <div className="flex justify-center sm:justify-start sm:pl-10 py-1">
                        <motion.div 
                          animate={{ y: [0, 4, 0] }}
                          transition={{ repeat: Infinity, duration: 1.5 }}
                          className="text-[#10143A] py-1"
                        >
                          <ArrowDown className="h-5 w-5" />
                        </motion.div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right column - The dynamic detail cards */}
          <div className="lg:col-span-6 bg-white border border-[#10143A]/10 rounded-2xl shadow-[0_12px_24px_rgba(16,20,58,0.05)] hover:border-[#10143A]/30 transition-all duration-300 p-8 lg:p-12 sticky top-28">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-6"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#10143A]">
                    Tier 0{activeStep + 1} Details
                  </span>
                  <h2 className="font-display text-2xl lg:text-3xl font-black uppercase tracking-tight text-secondary-navy mt-1">
                    {activeDetails.title}
                  </h2>
                  <p className="text-xs font-bold uppercase tracking-wider text-secondary-navy/50 mt-1">
                    {activeDetails.subtitle}
                  </p>
                </div>

                <p className="text-sm leading-relaxed text-secondary-navy/70">
                  {activeDetails.description}
                </p>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-secondary-navy mb-3">
                    Key Operations
                  </h4>
                  <ul className="space-y-2">
                    {activeDetails.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-secondary-navy/80 leading-relaxed">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#10143A] mt-1.5 shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Sub-clubs or schools detail section */}
                {activeDetails.clubsOrEntities && (
                  <div className="border-t border-gray-100 pt-6 mt-2">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-secondary-navy mb-4">
                      Associated Entities
                    </h4>
                    <div className="flex flex-col gap-4">
                      {activeDetails.clubsOrEntities.map((entity, i) => (
                        <div key={i} className="bg-[#F4F6FA] border border-[#10143A]/10 p-4 rounded-xl flex flex-col gap-1.5 hover:border-[#10143A]/30 transition-all duration-300">
                          <div className="flex items-center justify-between gap-2">
                            <h5 className="text-xs font-bold uppercase tracking-wide text-secondary-navy">
                              {entity.name}
                            </h5>
                            <span className="flex items-center gap-1 text-[10px] font-semibold text-secondary-navy/50 whitespace-nowrap">
                              <MapPin className="h-3 w-3" />
                              {entity.loc}
                            </span>
                          </div>
                          {entity.details && (
                            <p className="text-[11px] text-secondary-navy/60 leading-relaxed">
                              {entity.details}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </section>
    </div>
  );
}
