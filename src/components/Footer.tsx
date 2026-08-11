import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Shield } from "lucide-react";
import NewsletterForm from "./NewsletterForm";

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const YoutubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/5 bg-[#10143A] text-white">
      {/* Upper footer */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 md:grid-cols-2">
          {/* Brand Col */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3 group self-start">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 transition-all duration-300 group-hover:scale-105">
                <Image
                  src="/super-strikers-international.png"
                  alt="SuperStrikers International Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-lg font-extrabold tracking-tight text-white uppercase leading-none">
                  SuperStriker
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#DCE135] leading-none mt-0.5">
                  International
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-white/70 max-w-sm">
              SuperStriker International Pvt Ltd is dedicated to developing the football ecosystem in India, connecting grassroots clinics to professional leagues and national talent pathways.
            </p>
            <div className="flex items-center gap-4 text-white/60">
              <a href="#" className="hover:text-[#DCE135] transition-colors" aria-label="Twitter">
                <TwitterIcon className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-[#DCE135] transition-colors" aria-label="Instagram">
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-[#DCE135] transition-colors" aria-label="LinkedIn">
                <LinkedinIcon className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-[#DCE135] transition-colors" aria-label="YouTube">
                <YoutubeIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Clubs Col */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Our Clubs
            </h3>
            <ul className="mt-6 space-y-4">
              <li>
                <div className="text-sm font-semibold text-white hover:text-[#DCE135] transition-colors">
                  Bangalore Super Strikers FC
                  <span className="block text-[11px] font-normal text-white/50">Bangalore, Karnataka</span>
                </div>
              </li>
              <li>
                <div className="text-sm font-semibold text-white hover:text-[#DCE135] transition-colors">
                  Pondicherry Super Strikers FC
                  <span className="block text-[11px] font-normal text-white/50">Pondicherry</span>
                </div>
              </li>
              <li>
                <div className="text-sm font-semibold text-white hover:text-[#DCE135] transition-colors">
                  Chennai Super Strikers FC
                  <span className="block text-[11px] font-normal text-white/50">Chennai, Tamil Nadu</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Schools & Info Col */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Football Schools
            </h3>
            <ul className="mt-6 space-y-4">
              <li>
                <div className="text-sm font-semibold text-white hover:text-[#DCE135] transition-colors">
                  Bangalore Football School
                  <span className="block text-[11px] font-normal text-white/60 mt-2">
                    • Youth development<br />
                    • Professional coaching<br />
                    • Player pathways<br />
                    • Grassroots focus
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Links & Newsletter Col */}
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
                Newsletter
              </h3>
              <p className="mt-4 text-xs text-white/70 mb-4 leading-relaxed">
                Stay updated with corporate announcements, match results, and talent showcases.
              </p>
              <NewsletterForm />
            </div>
            <div>
              <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white mb-3">
                Quick Navigation
              </h3>
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-semibold text-[#DCE135]">
                <Link href="/about" className="hover:text-white transition-colors">About</Link>
                <Link href="/news" className="hover:text-white transition-colors">News</Link>
                <Link href="/investors" className="hover:text-white transition-colors">Investors</Link>
                <Link href="/ecosystem" className="hover:text-white transition-colors">Ecosystem</Link>
                <Link href="/investors#enquire" className="hover:text-white transition-colors">Contact</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Lower footer */}
        <div className="mt-16 border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© 2026 SuperStriker International Pvt Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
