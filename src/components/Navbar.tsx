"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, User } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "News", href: "/news" },
    { name: "Ecosystem", href: "/ecosystem" },
    { name: "About", href: "/about" },
    { name: "Investors", href: "/investors" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white border-b border-gray-200 select-none shadow-sm">
      <div className="mx-auto max-w-[95%] px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Bar (Single Row, Spacious h-24 on Desktop) */}
        <div className="flex items-center justify-between h-20 sm:h-24 relative">
          
          {/* Left: Logo & Brand Name */}
          <div className="flex items-center gap-3 shrink-0">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-14 h-14 sm:w-18 sm:h-18 transition-transform duration-300 group-hover:scale-103">
                <Image
                  src="/super-strikers-international.png"
                  alt="SuperStrikers International Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-display text-base sm:text-lg lg:text-xl font-black uppercase tracking-tight leading-none text-[#11123c]">
                  SuperStriker
                </span>
                <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest leading-none mt-1 text-[#a29142]">
                  International
                </span>
              </div>
            </Link>
          </div>

          {/* Center: Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-xs sm:text-sm font-black uppercase tracking-widest transition-colors py-2 relative ${
                    isActive 
                      ? "text-[#11123c]" 
                      : "text-[#696484] hover:text-[#11123c]"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeBorder"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#e9d319]"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right: Profile Trigger & Mobile Menu Toggle */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            
            {/* Account Icon */}
            <Link 
              href="/investors#enquire" 
              className="text-[#11123c] hover:text-[#11123c] transition-colors p-2 hover:bg-[#e9d319]/20 hover:border-[#a29142]/40 rounded-full flex items-center justify-center border border-gray-200 shadow-xs"
              aria-label="Profile"
            >
              <User className="h-5 w-5" />
            </Link>

            {/* Mobile Menu Button Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="lg:hidden p-2.5 text-[#11123c] hover:bg-gray-100 rounded-md transition-colors"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="border-t border-gray-150 bg-white"
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
                    className={`block rounded-lg px-4 py-3 text-sm font-bold uppercase tracking-wider transition-colors ${
                      isActive
                        ? "bg-[#11123c] text-[#e9d319]"
                        : "text-[#696484] hover:bg-gray-50 hover:text-[#11123c]"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="pt-4 border-t border-gray-100 px-4">
                <Link
                  href="/investors#enquire"
                  onClick={() => setIsOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-full py-3 text-center text-xs font-bold uppercase tracking-wider bg-[#11123c] text-[#e9d319] hover:bg-[#e9d319] hover:text-[#11123c] transition-all"
                >
                  Partner With Us
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
