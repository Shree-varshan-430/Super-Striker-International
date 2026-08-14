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
    { name: "News", href: "/news" },
    { name: "Ecosystem", href: "/ecosystem" },
    { name: "About", href: "/about" },
    { name: "Investors", href: "/investors" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white border-b border-gray-200 select-none shadow-sm">
      <div className="mx-auto max-w-[95%] px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Left Side: Logo & Menu Icon (inspired by Man Utd layout) */}
          <div className="flex items-center gap-6">
            
            {/* Brand Logo */}
            <Link href="/" className="flex items-center gap-3 group shrink-0">
              <div className="relative w-14 h-14 transition-transform duration-300 group-hover:scale-103">
                <Image
                  src="/super-strikers-international.png"
                  alt="SuperStrikers International Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-display text-base sm:text-lg font-black tracking-tight uppercase leading-none text-[#10143A]">
                  SuperStriker
                </span>
                <span className="text-[9px] font-black uppercase tracking-widest leading-none mt-1 text-gray-400">
                  International
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6 pl-6 border-l border-gray-200">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-xs font-black uppercase tracking-widest transition-colors py-2 ${
                      isActive 
                        ? "text-[#10143A]" 
                        : "text-[#10143A]/60 hover:text-[#10143A]"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Right Side: Profile Icon & Mobile Menu Trigger */}
          <div className="flex items-center gap-4">
            
            {/* User Profile Shortcut Icon */}
            <Link 
              href="/investors#enquire" 
              className="text-[#10143A] hover:text-gray-500 transition-colors p-2 hover:bg-gray-50 rounded-full"
              aria-label="Profile"
            >
              <User className="h-5 w-5" />
            </Link>

            {/* Mobile / Hamburger Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-[#10143A] hover:bg-gray-100 focus:outline-none transition-colors"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
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
                        ? "bg-gray-100 text-[#10143A]"
                        : "text-[#10143A]/70 hover:bg-gray-50 hover:text-[#10143A]"
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
                  className="flex w-full items-center justify-center gap-2 rounded-full py-3 text-center text-xs font-bold uppercase tracking-wider bg-[#10143A] text-white hover:bg-[#DCE135] hover:text-[#10143A] transition-all"
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
