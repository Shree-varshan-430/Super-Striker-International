"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, User } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "News", href: "/news" },
    { name: "Ecosystem", href: "/ecosystem" },
    { name: "About", href: "/about" },
    { name: "Investors", href: "/investors" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full select-none transition-all duration-300 ${
        scrolled
          ? "bg-[#11123c]/98 backdrop-blur-md border-b border-white/15 shadow-2xl py-0"
          : "bg-[#11123c] border-b border-white/10 py-1 sm:py-2"
      }`}
    >
      <div className="mx-auto max-w-[95%] 2xl:max-w-[1440px] px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Bar */}
        <div className="flex items-center justify-between h-20 sm:h-22 relative">
          
          {/* Left: Crest & Brand Name (Treated like a Royal Coat of Arms) */}
          <div className="flex items-center gap-3 shrink-0">
            <Link href="/" className="flex items-center gap-3.5 group">
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 transition-transform duration-200 group-hover:scale-105">
                <Image
                  src="/super-strikers-international.png"
                  alt="SuperStrikers International Crest"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-display text-lg sm:text-xl font-black uppercase tracking-tight text-white leading-none">
                  SuperStriker
                </span>
                <span className="text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-[0.22em] text-[#a29142] leading-none mt-1">
                  International • Bangalore
                </span>
              </div>
            </Link>
          </div>

          {/* Center: Understated Uppercase Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-xs font-mono font-bold uppercase tracking-[0.2em] transition-colors py-2 relative ${
                    isActive
                      ? "text-[#e9d319]"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#e9d319]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right: Sharp Graphic CTA + Profile Button */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            <Link
              href="/investors#enquire"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-[11px] font-mono font-bold uppercase tracking-[0.18em] bg-[#e9d319] text-[#11123c] border border-[#e9d319] hover:bg-white hover:text-[#11123c] hover:border-white transition-colors"
            >
              <span>Partner With Us</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>

            <Link 
              href="/investors#enquire" 
              className="text-white/80 hover:text-[#e9d319] p-2 transition-colors border border-white/15 hover:border-[#e9d319]"
              aria-label="Profile"
            >
              <User className="h-4 w-4" />
            </Link>

            {/* Mobile Menu Button Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="lg:hidden p-2 text-white hover:text-[#e9d319] border border-white/15"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div
          className="border-t border-white/10 bg-[#11123c] text-white lg:hidden shadow-2xl"
          id="mobile-menu"
        >
          <div className="space-y-1 px-4 pb-6 pt-4 text-left">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 text-xs font-mono font-bold uppercase tracking-[0.2em] transition-colors border-l-2 ${
                    isActive
                      ? "border-[#e9d319] bg-white/5 text-[#e9d319]"
                      : "border-transparent text-white/70 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-4 border-t border-white/10 px-4">
              <Link
                href="/investors#enquire"
                onClick={() => setIsOpen(false)}
                className="flex w-full items-center justify-center gap-2 py-3 text-center text-xs font-mono font-bold uppercase tracking-[0.2em] bg-[#e9d319] text-[#11123c]"
              >
                Partner With Us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
