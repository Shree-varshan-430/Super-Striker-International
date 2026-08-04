"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Shield } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Ecosystem", href: "/ecosystem" },
    { name: "News & Media", href: "/news" },
    { name: "Investors", href: "/investors" },
  ];

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      scrolled 
        ? "bg-white/95 shadow-md shadow-gray-100/10 border-b border-gray-100/80 backdrop-blur-md" 
        : "bg-white border-b border-gray-100"
    }`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          scrolled ? "h-16" : "h-20"
        }`}>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-sky text-secondary-navy font-bold shadow-sm transition-transform group-hover:scale-105">
              <Shield className="h-5 w-5 fill-secondary-navy" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-lg font-extrabold tracking-tight text-secondary-navy uppercase leading-none">
                SuperStriker
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-primary-sky leading-none mt-0.5">
                International
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative text-sm font-semibold tracking-wide text-secondary-navy/80 hover:text-secondary-navy transition-colors py-2"
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavBorder"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-sky"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/investors#enquire"
              className="inline-flex items-center gap-2 rounded-full bg-secondary-navy px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-secondary-navy/90 hover:shadow-lg hover:shadow-secondary-navy/15 active:scale-95"
            >
              Partner With Us
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-secondary-navy hover:bg-background-soft focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-gray-100 bg-white"
            id="mobile-menu"
          >
            <div className="space-y-1 px-4 pb-6 pt-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block rounded-lg px-4 py-3 text-base font-semibold transition-colors ${
                      isActive
                        ? "bg-primary-sky/10 text-secondary-navy"
                        : "text-secondary-navy/80 hover:bg-background-soft hover:text-secondary-navy"
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
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-secondary-navy py-3 text-center text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-secondary-navy/90"
                >
                  Partner With Us
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
