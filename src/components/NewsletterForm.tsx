"use client";

import React, { useState } from "react";
import { CheckCircle2, Send, Loader2 } from "lucide-react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");

    setTimeout(() => {
      setStatus("success");
      setMessage("Thank you! You have successfully subscribed to our newsletter.");
      setEmail("");
    }, 1200);
  };

  return (
    <div className="w-full max-w-sm">
      {status === "success" ? (
        <div className="bg-[#181a4a] p-4 text-[#e9d319] border border-[#e9d319]/40 flex items-start gap-3">
          <CheckCircle2 className="h-5 w-5 text-[#e9d319] shrink-0 mt-0.5" />
          <div>
            <p className="text-xs font-mono font-bold uppercase tracking-wider text-white">Subscription Active</p>
            <p className="text-xs text-white/80 mt-1">{message}</p>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <div className="relative">
            <input
              type="email"
              placeholder="Business email address"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status === "error") setStatus("idle");
              }}
              disabled={status === "loading"}
              required
              className="w-full border border-white/20 bg-white/10 px-4 py-3 pr-12 text-xs text-white placeholder-white/40 focus:border-[#e9d319] focus:outline-none disabled:bg-white/5 font-mono"
            />
            <button
              type="submit"
              disabled={status === "loading" || !email}
              className="absolute right-1 top-1 flex h-8 w-8 items-center justify-center bg-[#e9d319] text-[#11123c] hover:bg-white hover:text-[#11123c] active:scale-95 disabled:bg-white/20 disabled:text-white/40 transition-colors"
              aria-label="Subscribe"
            >
              {status === "loading" ? (
                <Loader2 className="h-3.5 w-3.5 animate-spin" />
              ) : (
                <Send className="h-3.5 w-3.5" />
              )}
            </button>
          </div>
          {status === "error" && (
            <p className="text-[11px] font-mono text-red-400 mt-1">{message}</p>
          )}
        </form>
      )}
    </div>
  );
}
