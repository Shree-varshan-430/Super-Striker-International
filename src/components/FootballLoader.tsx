"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

interface FootballLoaderProps {
  onComplete: () => void;
}

export default function FootballLoader({ onComplete }: FootballLoaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const ballWrapperRef = useRef<HTMLDivElement>(null);
  const ballShadowRef = useRef<HTMLDivElement>(null);
  const logoWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Lock scrolling during loading
    document.body.style.overflow = "hidden";

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = "";
        onComplete();
      },
    });

    // Initial states
    gsap.set(ballWrapperRef.current, { y: -250, scaleY: 1.1, scaleX: 0.9, opacity: 0 });
    gsap.set(ballShadowRef.current, { scaleX: 0.2, opacity: 0 });
    gsap.set(logoWrapperRef.current, { scale: 0.6, opacity: 0 });

    // BOUNCE 1: Fall down & squash
    tl.to(ballWrapperRef.current, {
      opacity: 1,
      duration: 0.15,
      ease: "power1.in"
    });

    tl.to(ballWrapperRef.current, {
      y: 0,
      scaleY: 1,
      scaleX: 1,
      duration: 0.35,
      ease: "power2.in"
    }, "-=0.15");

    tl.to(ballShadowRef.current, {
      scaleX: 1,
      opacity: 0.3,
      duration: 0.35,
      ease: "power2.in"
    }, "-=0.35");

    // Impact squash
    tl.to(ballWrapperRef.current, {
      scaleY: 0.75,
      scaleX: 1.25,
      duration: 0.08,
      ease: "none",
      yoyo: true,
      repeat: 1
    });

    tl.to(ballShadowRef.current, {
      scaleX: 1.3,
      opacity: 0.45,
      duration: 0.08,
      ease: "none",
      yoyo: true,
      repeat: 1
    }, "-=0.16");

    // BOUNCE 2: Rise up
    tl.to(ballWrapperRef.current, {
      y: -100,
      scaleY: 1.1,
      scaleX: 0.9,
      duration: 0.25,
      ease: "power1.out"
    });

    tl.to(ballShadowRef.current, {
      scaleX: 0.5,
      opacity: 0.15,
      duration: 0.25,
      ease: "power1.out"
    }, "-=0.25");

    // Fall down
    tl.to(ballWrapperRef.current, {
      y: 0,
      scaleY: 1,
      scaleX: 1,
      duration: 0.25,
      ease: "power2.in"
    });

    tl.to(ballShadowRef.current, {
      scaleX: 1,
      opacity: 0.3,
      duration: 0.25,
      ease: "power2.in"
    }, "-=0.25");

    // Impact squash 2
    tl.to(ballWrapperRef.current, {
      scaleY: 0.85,
      scaleX: 1.15,
      duration: 0.06,
      ease: "none",
      yoyo: true,
      repeat: 1
    });

    // Ball Rotation throughout bounces
    gsap.to("#loader-ball-svg", {
      rotation: 540,
      duration: 1.1,
      ease: "none"
    });

    // LOGO REVEAL: Ball dissolves, Logo scales up from center
    tl.to([ballWrapperRef.current, ballShadowRef.current], {
      opacity: 0,
      scale: 0.3,
      duration: 0.2,
      ease: "power2.out"
    }, "+=0.05");

    tl.to(logoWrapperRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.45,
      ease: "back.out(1.6)"
    }, "-=0.1");

    // Snappy Exit Swipe
    tl.to(containerRef.current, {
      opacity: 0,
      duration: 0.35,
      ease: "power2.inOut",
      delay: 0.5
    });

  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white select-none overflow-hidden"
    >
      <div className="relative flex flex-col items-center justify-center h-48 w-48">
        
        {/* Bouncing Soccer Ball */}
        <div ref={ballWrapperRef} className="absolute z-10 origin-bottom">
          <svg id="loader-ball-svg" viewBox="0 0 100 100" className="w-14 h-14 sm:w-16 sm:h-16 drop-shadow-md">
            <defs>
              <radialGradient id="loaderBallGrad" cx="35%" cy="35%" r="65%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="65%" stopColor="#EFF4F8" />
                <stop offset="100%" stopColor="#C4CED8" />
              </radialGradient>
            </defs>
            <circle cx="50" cy="50" r="47" fill="url(#loaderBallGrad)" stroke="#10143A" strokeWidth="2" />
            <polygon points="50,36 61,44 56,57 44,57 39,44" fill="#10143A" />
            <line x1="50" y1="36" x2="50" y2="18" stroke="#10143A" strokeWidth="2" />
            <line x1="61" y1="44" x2="78" y2="38" stroke="#10143A" strokeWidth="2" />
            <line x1="56" y1="57" x2="68" y2="74" stroke="#10143A" strokeWidth="2" />
            <line x1="44" y1="57" x2="32" y2="74" stroke="#10143A" strokeWidth="2" />
            <line x1="39" y1="44" x2="22" y2="38" stroke="#10143A" strokeWidth="2" />
            <polygon points="50,18 64,8 77,16 69,28" fill="none" stroke="#10143A" strokeWidth="2" />
            <polygon points="78,38 91,32 94,48 85,55" fill="none" stroke="#10143A" strokeWidth="2" />
            <polygon points="68,74 80,72 82,88 68,92" fill="none" stroke="#10143A" strokeWidth="2" />
            <polygon points="32,74 20,72 18,88 32,92" fill="none" stroke="#10143A" strokeWidth="2" />
            <polygon points="22,38 9,32 6,48 15,55" fill="none" stroke="#10143A" strokeWidth="2" />
          </svg>
        </div>

        {/* Dynamic Shadow */}
        <div
          ref={ballShadowRef}
          className="absolute bottom-6 w-14 h-2 rounded-full z-0"
          style={{
            background: "radial-gradient(ellipse at center, rgba(16,20,58,0.25) 0%, rgba(16,20,58,0) 70%)",
          }}
        />

        {/* Logo Reveal Container (Reveals after bounces settle) */}
        <div 
          ref={logoWrapperRef} 
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-20"
        >
          <div className="relative w-24 h-24 sm:w-28 sm:h-28">
            <Image
              src="/super-strikers-international.png"
              alt="SuperStrikers Logo Reveal"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

      </div>
    </div>
  );
}
