"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Shield } from "lucide-react";

interface FootballLoaderProps {
  onComplete: () => void;
}

export default function FootballLoader({ onComplete }: FootballLoaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pitchLinesRef = useRef<SVGSVGElement>(null);
  const ballWrapperRef = useRef<HTMLDivElement>(null);
  const ballShadowRef = useRef<HTMLDivElement>(null);
  const rippleRef = useRef<SVGCircleElement>(null);
  const logoContainerRef = useRef<HTMLDivElement>(null);
  const wipeOverlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Lock scrolling
    document.body.style.overflow = "hidden";

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = "";
        onComplete();
      },
    });

    // SCENE 1: Draw Center Circle & Field Lines
    tl.set(pitchLinesRef.current, { scale: 0.95, opacity: 0.25 });
    
    // Draw the center circle (Circumference ~ 503px)
    tl.fromTo(
      "#loader-center-circle",
      { strokeDashoffset: 503 },
      { strokeDashoffset: 0, duration: 0.7, ease: "power2.out" }
    );
    
    // Draw pitch lines
    tl.fromTo(
      "#loader-pitch-box, #loader-pitch-midline",
      { strokeDashoffset: 1500, opacity: 0 },
      { strokeDashoffset: 0, opacity: 0.15, duration: 0.8, ease: "power2.out" },
      "-=0.5"
    );

    // SCENE 2: Football Rolls Into The Pitch Center
    // Roll from top-left (offscreen) to center (0, 0)
    tl.fromTo(
      ballWrapperRef.current,
      { x: -350, y: -200, scale: 0.2, opacity: 0 },
      { 
        x: 0, 
        y: 0, 
        scale: 1, 
        opacity: 1, 
        duration: 0.8, 
        ease: "power3.out" 
      },
      "-=0.3"
    );

    // Rotate ball realistically during roll
    tl.fromTo(
      "#loader-ball-svg",
      { rotation: -360 },
      { rotation: 0, duration: 0.8, ease: "power3.out" },
      "-=0.8"
    );

    // Shadow moves and scales with the ball
    tl.fromTo(
      ballShadowRef.current,
      { x: -350, scaleX: 0.2, opacity: 0 },
      { x: 0, scaleX: 1, opacity: 0.35, duration: 0.8, ease: "power3.out" },
      "-=0.8"
    );

    // Minor bounce when settling in center
    tl.to(ballWrapperRef.current, { y: -20, duration: 0.15, yoyo: true, repeat: 1, ease: "power1.out" });
    tl.to(ballShadowRef.current, { scaleX: 0.7, opacity: 0.15, duration: 0.15, yoyo: true, repeat: 1, ease: "power1.out" }, "-=0.3");

    // SCENE 3: Impact Moment
    // Trigger ripple and expand pitch lines
    tl.fromTo(
      rippleRef.current,
      { r: 0, opacity: 0.8, strokeWidth: 4 },
      { r: 140, opacity: 0, strokeWidth: 0.5, duration: 0.6, ease: "power2.out" },
      "-=0.05"
    );

    // Pitch lines expand outward on impact
    tl.to(pitchLinesRef.current, {
      scale: 1.15,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out"
    }, "-=0.6");

    // SCENE 4: Logo Reveal
    // Hide ball, reveal corporate logo from center impact
    tl.to([ballWrapperRef.current, ballShadowRef.current], { opacity: 0, scale: 0.8, duration: 0.25 }, "-=0.5");
    
    tl.fromTo(
      logoContainerRef.current,
      { opacity: 0, scale: 0.75, filter: "blur(8px)" },
      { opacity: 1, scale: 1, filter: "blur(0px)", duration: 0.6, ease: "back.out(1.4)" },
      "-=0.3"
    );

    // Text reveals: SUPERSTRIKER INTERNATIONAL split word reveal
    const logoWords = containerRef.current?.querySelectorAll(".loader-brand-word");
    if (logoWords && logoWords.length > 0) {
      tl.fromTo(
        logoWords,
        { y: "100%", opacity: 0 },
        { y: "0%", opacity: 1, duration: 0.4, stagger: 0.05, ease: "power3.out" },
        "-=0.2"
      );
    }

    // Subtitle reveal
    tl.fromTo(
      ".loader-subtitle-anim",
      { y: 10, opacity: 0 },
      { y: 0, opacity: 0.8, duration: 0.4, ease: "power2.out" },
      "-=0.1"
    );

    // SCENE 5: Transition Into Website
    // Wipe transition overlay slides from bottom to top
    tl.fromTo(
      wipeOverlayRef.current,
      { yPercent: 100 },
      { yPercent: 0, duration: 0.55, ease: "power3.inOut", delay: 0.4 }
    );

    // Fade loader text during wipe
    tl.to([logoContainerRef.current, pitchLinesRef.current], { opacity: 0, duration: 0.25 }, "-=0.35");

    // Reveal main page behind wipe
    tl.to(wipeOverlayRef.current, {
      yPercent: -100,
      duration: 0.55,
      ease: "power3.inOut"
    });

    tl.to(containerRef.current, {
      opacity: 0,
      pointerEvents: "none",
      duration: 0.2
    }, "-=0.2");

  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white text-secondary-navy select-none overflow-hidden"
    >
      {/* 1. SVG Pitch Lines */}
      <svg
        ref={pitchLinesRef}
        viewBox="0 0 800 600"
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      >
        {/* Spotlights */}
        <defs>
          <radialGradient id="loaderSpot" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#8ED8F8" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="400" cy="300" r="300" fill="url(#loaderSpot)" />

        {/* Pitch boundary line */}
        <rect
          id="loader-pitch-box"
          x="60"
          y="60"
          width="680"
          height="480"
          fill="none"
          stroke="#0B1F3A"
          strokeWidth="1.2"
          strokeDasharray="2320"
          strokeDashoffset="0"
          className="opacity-15"
        />
        {/* Midfield line */}
        <line
          id="loader-pitch-midline"
          x1="400"
          y1="60"
          x2="400"
          y2="540"
          stroke="#0B1F3A"
          strokeWidth="1.2"
          strokeDasharray="480"
          strokeDashoffset="0"
          className="opacity-15"
        />
        {/* Center circle */}
        <circle
          id="loader-center-circle"
          cx="400"
          cy="300"
          r="80"
          fill="none"
          stroke="#0B1F3A"
          strokeWidth="2"
          strokeDasharray="503"
          strokeDashoffset="503"
          className="opacity-25"
        />

        {/* Collision Ripple */}
        <circle
          ref={rippleRef}
          cx="400"
          cy="300"
          r="0"
          fill="none"
          stroke="#8ED8F8"
          strokeWidth="4"
          opacity="0"
        />
      </svg>

      {/* 2. Soccer Ball Wrapper */}
      <div className="relative flex flex-col items-center justify-center min-h-[140px] z-10">
        <div ref={ballWrapperRef} className="relative z-20">
          <svg id="loader-ball-svg" viewBox="0 0 100 100" className="w-14 h-14 sm:w-16 sm:h-16 drop-shadow-md">
            <defs>
              <radialGradient id="loaderBallGrad" cx="35%" cy="35%" r="65%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="65%" stopColor="#EFF4F8" />
                <stop offset="100%" stopColor="#C4CED8" />
              </radialGradient>
            </defs>
            <circle cx="50" cy="50" r="47" fill="url(#loaderBallGrad)" stroke="#0B1F3A" strokeWidth="1.5" />
            <polygon points="50,36 61,44 56,57 44,57 39,44" fill="#0B1F3A" />
            <line x1="50" y1="36" x2="50" y2="18" stroke="#0B1F3A" strokeWidth="1.5" />
            <line x1="61" y1="44" x2="78" y2="38" stroke="#0B1F3A" strokeWidth="1.5" />
            <line x1="56" y1="57" x2="68" y2="74" stroke="#0B1F3A" strokeWidth="1.5" />
            <line x1="44" y1="57" x2="32" y2="74" stroke="#0B1F3A" strokeWidth="1.5" />
            <line x1="39" y1="44" x2="22" y2="38" stroke="#0B1F3A" strokeWidth="1.5" />
            <polygon points="50,18 64,8 77,16 69,28" fill="none" stroke="#0B1F3A" strokeWidth="1.5" />
            <polygon points="78,38 91,32 94,48 85,55" fill="none" stroke="#0B1F3A" strokeWidth="1.5" />
            <polygon points="68,74 80,72 82,88 68,92" fill="none" stroke="#0B1F3A" strokeWidth="1.5" />
            <polygon points="32,74 20,72 18,88 32,92" fill="none" stroke="#0B1F3A" strokeWidth="1.5" />
            <polygon points="22,38 9,32 6,48 15,55" fill="none" stroke="#0B1F3A" strokeWidth="1.5" />
          </svg>
        </div>
        <div
          ref={ballShadowRef}
          className="w-14 h-2.5 rounded-full mt-1.5 opacity-30"
          style={{
            background: "radial-gradient(ellipse at center, rgba(11,31,58,0.4) 0%, rgba(11,31,58,0) 70%)",
          }}
        />
      </div>

      {/* 3. Logo Reveal Area */}
      <div
        ref={logoContainerRef}
        className="absolute inset-0 flex flex-col items-center justify-center opacity-0 pointer-events-none select-none z-30 bg-white"
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0B1F3A] text-white shadow-xl mb-6 relative">
          <Shield className="h-8 w-8 fill-primary-sky text-primary-sky" />
          <span className="absolute font-display text-[11px] font-black text-white">SS</span>
        </div>

        <h2 className="loader-brand-title font-display text-2xl sm:text-4xl font-black uppercase tracking-tight text-secondary-navy leading-none">
          {"SUPERSTRIKER INTERNATIONAL".split(" ").map((word, idx) => (
            <span key={idx} className="inline-block overflow-hidden mr-2.5">
              <span className="loader-brand-word inline-block">{word}</span>
            </span>
          ))}
        </h2>

        <div className="mt-4 flex flex-col items-center gap-1.5">
          <span className="loader-subtitle-anim text-[10px] sm:text-xs font-black uppercase tracking-widest text-primary-sky leading-none">
            BUILDING INDIA&apos;S FUTURE FOOTBALL CHAMPIONS
          </span>
          <span className="loader-subtitle-anim text-[9px] font-bold uppercase tracking-wider text-secondary-navy/40 mt-1">
            Football Stories. Football Dreams. Football Future.
          </span>
        </div>
      </div>

      {/* 4. Wipe Transition Screen Overlay */}
      <div
        ref={wipeOverlayRef}
        className="fixed inset-0 bg-secondary-navy z-[99999] pointer-events-none transform translate-y-full flex flex-col items-center justify-center"
      >
        {/* Soft Sky Blue Glow in Wipe Overlay */}
        <div className="absolute inset-0 bg-radial-gradient from-primary-sky/10 to-transparent pointer-events-none" />
        <Shield className="h-12 w-12 text-primary-sky fill-primary-sky/15 animate-pulse" />
      </div>
    </div>
  );
}
