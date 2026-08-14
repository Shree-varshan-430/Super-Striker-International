"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Mail, Phone, Building, Send, Loader2, CheckCircle2, TrendingUp } from "lucide-react";

export default function Investors() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    range: "10L-50L",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status === "error") setStatus("idle");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus("error");
      setErrorMessage("Please enter a valid business email address.");
      return;
    }

    // Validate phone (simple check for numbers)
    const phoneRegex = /^[0-9+\s-]{10,15}$/;
    if (formData.phone && !phoneRegex.test(formData.phone)) {
      setStatus("error");
      setErrorMessage("Please enter a valid contact phone number.");
      return;
    }

    setStatus("submitting");

    // Simulate API call to process partnership enquiry
    setTimeout(() => {
      setStatus("success");
    }, 2000);
  };

  const investmentOpportunities = [
    { id: 1, title: "Football Club Development", desc: "Funding operations, transfers, and high-performance staff for Bangalore, Pondicherry, and Chennai Super Strikers FC." },
    { id: 2, title: "Youth Academy Expansion", desc: "Building state-of-the-art boarding schools and training academies for elite talent coaching." },
    { id: 3, title: "Sports Infrastructure", desc: "Acquiring lands and developing FIFA-certified turf facilities and fitness complexes in key districts." },
    { id: 4, title: "Player Development Programs", desc: "Financing advanced telemetry tracking, nutrition systems, and psychological development for youth athletes." },
    { id: 5, title: "Football Technology", desc: "Investing in scout telemetry, player performance databases, and video indexing systems." }
  ];

  const benefits = [
    "Growing Indian football ecosystem with exploding audience interest.",
    "Strong grassroots foundation with deep school and community connections.",
    "Long-term player development model creating proprietary asset value.",
    "Significant community impact with direct social governance dividends.",
    "Multiple revenue channels including licensing, media, transfer percentages, and events."
  ];

  return (
    <div className="w-full bg-[#10143A] text-white min-h-screen relative overflow-hidden">
      {/* Glow backdrop effects */}
      <div className="absolute top-10 left-10 w-[500px] h-[500px] bg-[#DCE135]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-40 right-10 w-[400px] h-[400px] bg-[#1B2255]/40 rounded-full blur-[100px] pointer-events-none" />

      {/* Small Hero Banner */}
      <div className="relative w-full h-[220px] sm:h-[260px] bg-[#10143A] flex items-center justify-start overflow-hidden group select-none mt-20 z-20">
        <Image
          src="/images/news-pitch-sponsorship.jpg"
          alt="Partnerships & Capital"
          fill
          className="object-cover opacity-45 transition-transform duration-1000 group-hover:scale-103"
          priority
        />
        {/* Black full accent overlay & Cinematic gradient overlay */}
        <div className="absolute inset-0 bg-black/45 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-[#10143A]/70 to-transparent z-10" />
        
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
          <span className="text-[9px] font-black uppercase tracking-widest text-[#DCE135] bg-[#10143A] px-2 py-0.5 rounded w-fit">
            PARTNERSHIPS & CAPITAL
          </span>
          <h1 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-none">
            Invest In Indian Football
          </h1>
          <p className="text-xs sm:text-sm text-white/80 max-w-xl leading-relaxed mt-1 font-medium">
            SuperStriker International is building a scalable, professional football ecosystem combining senior league clubs, youth academies, and grassroots systems.
          </p>
        </div>
      </div>

      {/* Grid of 5 Investment Cards */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#DCE135]">Strategic Allocation</span>
          <h2 className="font-display text-3xl font-black uppercase tracking-tight text-white mt-1">
            Investment Opportunities
          </h2>
          <div className="h-1 w-12 bg-[#DCE135] mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {investmentOpportunities.map((op) => (
            <div
              key={op.id}
              className="bg-white/5 border border-white/10 rounded-xl p-8 shadow-2xl flex flex-col gap-4 hover:border-[#DCE135]/40 hover:shadow-[0_0_30px_rgba(245,208,0,0.1)] transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-1.5 h-full bg-[#DCE135] group-hover:h-full transition-all" />
              <span className="text-xs font-bold text-[#DCE135]">0{op.id}</span>
              <h3 className="font-display text-lg font-bold uppercase tracking-tight text-white">
                {op.title}
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                {op.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Partner With Us Section */}
      <section className="py-24 border-y border-white/10 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 flex flex-col gap-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#DCE135]">Value Proposition</span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
              Why Partner With Us?
            </h2>
            <div className="h-1 w-12 bg-[#DCE135]" />
            <p className="text-white/80 text-sm leading-relaxed">
              SuperStriker&apos;s model is designed for long-term growth. We don&apos;t just run football clubs; we operate a complete vertical network integrating academy scouts with professional team assets to create a self-sustaining talent pipeline.
            </p>
            <div className="flex h-44 relative rounded-xl overflow-hidden shadow-md hidden sm:block border-4 border-white/10 mt-4">
              <Image
                src="/images/team-2.jpg"
                alt="Partnering stadium atmosphere"
                fill
                className="object-cover opacity-60"
              />
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col gap-4">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-white/5 p-5 rounded-xl border border-white/10 flex items-start gap-4 shadow-sm hover:border-white/20 transition-all duration-300"
              >
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#DCE135]/20 text-[#DCE135]">
                  <TrendingUp className="h-3.5 w-3.5" />
                </div>
                <p className="text-xs sm:text-sm font-semibold text-white leading-relaxed">
                  {benefit}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Enquiry Form Section */}
      <section id="enquire" className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto scroll-mt-24 relative z-10">
        <div className="text-center mb-12">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#DCE135] font-semibold">Strategic Access</span>
          <h2 className="font-display text-3xl font-black uppercase tracking-tight text-white mt-1">
            Become A Strategic Partner
          </h2>
          <p className="text-xs sm:text-sm text-white/70 max-w-lg mx-auto mt-2 leading-relaxed">
            Fill out our investor profile enquiry, and our Board of Directors&apos; partnership team will coordinate a formal consultation.
          </p>
        </div>

        <div className="bg-white/5 border border-white/15 rounded-2xl shadow-2xl p-8 lg:p-12 backdrop-blur-md">
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center text-center py-10 gap-6"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10 text-green-400 border-2 border-green-500/30 shadow-[0_0_15px_rgba(34,197,94,0.2)]">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-white">
                    Enquiry Received
                  </h3>
                  <p className="text-sm text-white/80 max-w-md leading-relaxed">
                    Thank you for your interest in SuperStriker International. An investment director will review your inquiry and contact you via your business email within 48 hours.
                  </p>
                </div>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-4 rounded-full border border-white/20 bg-white/5 px-6 py-2.5 text-xs font-bold uppercase tracking-wider hover:bg-white/10 hover:border-white/40 transition-all"
                >
                  Submit Another Enquiry
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-white/80">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={status === "submitting"}
                    placeholder="Enter your name"
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-[#DCE135] focus:outline-none focus:ring-2 focus:ring-[#DCE135]/20 disabled:opacity-50"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-white/80">
                    Business Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={status === "submitting"}
                      placeholder="name@company.com"
                      className="w-full rounded-lg border border-white/10 bg-white/5 pl-10 pr-4 py-3 text-sm text-white placeholder-gray-500 focus:border-[#DCE135] focus:outline-none focus:ring-2 focus:ring-[#DCE135]/20 disabled:opacity-50"
                    />
                    <Mail className="absolute left-3.5 top-3.5 h-4 w-4 text-white/40" />
                  </div>
                </div>

                {/* Organization */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="organization" className="text-xs font-bold uppercase tracking-wider text-white/80">
                    Organization / Fund
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      required
                      disabled={status === "submitting"}
                      placeholder="Company Name"
                      className="w-full rounded-lg border border-white/10 bg-white/5 pl-10 pr-4 py-3 text-sm text-white placeholder-gray-500 focus:border-[#DCE135] focus:outline-none focus:ring-2 focus:ring-[#DCE135]/20 disabled:opacity-50"
                    />
                    <Building className="absolute left-3.5 top-3.5 h-4 w-4 text-white/40" />
                  </div>
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-white/80">
                    Contact Phone
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      disabled={status === "submitting"}
                      placeholder="+91 99000 00000"
                      className="w-full rounded-lg border border-white/10 bg-white/5 pl-10 pr-4 py-3 text-sm text-white placeholder-gray-500 focus:border-[#DCE135] focus:outline-none focus:ring-2 focus:ring-[#DCE135]/20 disabled:opacity-50"
                    />
                    <Phone className="absolute left-3.5 top-3.5 h-4 w-4 text-white/40" />
                  </div>
                </div>

                {/* Investment Range */}
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label htmlFor="range" className="text-xs font-bold uppercase tracking-wider text-white/80">
                    Target Investment Capital (INR)
                  </label>
                  <select
                    id="range"
                    name="range"
                    value={formData.range}
                    onChange={handleChange}
                    disabled={status === "submitting"}
                    className="w-full rounded-lg border border-white/10 bg-[#10143A] px-4 py-3 text-sm text-white focus:border-[#DCE135] focus:outline-none focus:ring-2 focus:ring-[#DCE135]/20 disabled:opacity-50 cursor-pointer"
                  >
                    <option className="bg-[#10143A] text-white" value="10L-50L">₹10 Lakhs – ₹50 Lakhs</option>
                    <option className="bg-[#10143A] text-white" value="50L-2Cr">₹50 Lakhs – ₹2 Crores</option>
                    <option className="bg-[#10143A] text-white" value="2Cr-5Cr">₹2 Crores – ₹5 Crores</option>
                    <option className="bg-[#10143A] text-white" value="5Cr+">₹5 Crores +</option>
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-white/80">
                    Partnership Objectives
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={status === "submitting"}
                    placeholder="Tell us about your investment objectives and how you would like to collaborate..."
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-[#DCE135] focus:outline-none focus:ring-2 focus:ring-[#DCE135]/20 disabled:opacity-50 resize-y"
                  />
                </div>

                {/* Form status notification */}
                {status === "error" && (
                  <div className="md:col-span-2 rounded-lg bg-red-500/10 p-4 border border-red-500/20 text-red-400 text-xs font-semibold">
                    {errorMessage}
                  </div>
                )}

                {/* Submit button */}
                <div className="md:col-span-2 flex justify-end mt-4">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#DCE135] px-8 py-4 text-xs font-bold uppercase tracking-wider text-[#10143A] shadow-lg shadow-[#DCE135]/20 hover:bg-white hover:text-[#10143A] transition-all hover:scale-105 active:scale-95 disabled:bg-gray-500"
                  >
                    {status === "submitting" ? (
                      <>
                        Processing Submission
                        <Loader2 className="h-4 w-4 animate-spin" />
                      </>
                    ) : (
                      <>
                        Submit Business Enquiry
                        <Send className="h-4.5 w-4.5" />
                      </>
                    )}
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
