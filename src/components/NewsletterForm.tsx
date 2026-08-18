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

    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");

    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setMessage("Thank you! You have successfully subscribed to our newsletter.");
      setEmail("");
    }, 1500);
  };

  return (
    <div className="w-full max-w-sm">
      {status === "success" ? (
        <div className="rounded-lg bg-green-50 p-4 text-green-800 border border-green-100 flex items-start gap-3">
          <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold">Subscription Active</p>
            <p className="text-xs text-green-700 mt-1">{message}</p>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <div className="relative">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status === "error") setStatus("idle");
              }}
              disabled={status === "loading"}
              required
              className="w-full rounded-full border border-gray-200 bg-white px-5 py-3 pr-12 text-sm text-[#11123c] placeholder-[#696484]/60 shadow-sm focus:border-[#e9d319] focus:outline-none focus:ring-2 focus:ring-[#e9d319]/20 disabled:bg-gray-50"
            />
            <button
              type="submit"
              disabled={status === "loading" || !email}
              className="absolute right-1.5 top-1.5 flex h-9 w-9 items-center justify-center rounded-full bg-[#e9d319] text-[#11123c] hover:bg-[#a29142] hover:text-white active:scale-95 disabled:bg-gray-300 transition-all shadow-xs"
              aria-label="Subscribe"
            >
              {status === "loading" ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Send className="h-4 w-4" />
              )}
            </button>
          </div>
          {status === "error" && (
            <p className="px-4 text-xs font-medium text-red-600 mt-1">{message}</p>
          )}
        </form>
      )}
    </div>
  );
}
