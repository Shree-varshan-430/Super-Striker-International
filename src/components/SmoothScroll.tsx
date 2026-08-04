"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Register ScrollTrigger globally
    gsap.registerPlugin(ScrollTrigger);

    // Initialize Lenis smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // standard expo easing
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    // Sync ScrollTrigger updates with Lenis scroll
    lenis.on("scroll", ScrollTrigger.update);

    // Connect Lenis frame updates to GSAP ticker loop
    const tick = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tick);

    // Disable lag smoothing to prevent animation jumps
    gsap.ticker.lagSmoothing(0);

    // Refresh ScrollTrigger to ensure page boundaries match
    ScrollTrigger.refresh();

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      
      // Clear out all scrolltriggers on unmount
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return <>{children}</>;
}
