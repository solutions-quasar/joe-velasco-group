"use client";

import React from "react";
import Image from "next/image";
import { Phone, Mail, ArrowUpRight } from "lucide-react";
import joePortrait from "../../public/images/joe-velasco.jpg";

interface FinalCTAProps {
  onOpenContact: () => void;
}

export default function FinalCTA({ onOpenContact }: FinalCTAProps) {
  return (
    <section className="relative w-full py-24 sm:py-36 bg-black text-white overflow-hidden border-t border-[#222222]">
      {/* Background Architectural Atmosphere */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2400&q=85"
          alt="Silicon Valley Luxury Architectural Estate"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-25 filter grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 to-black/70" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 text-center flex flex-col items-center">
        {/* Subtle Joe Portrait Avatar */}
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-white/20 mb-6 shadow-2xl">
          <Image
            src={joePortrait}
            alt="Joe Velasco"
            fill
            sizes="80px"
            className="object-cover object-top"
          />
        </div>

        {/* Small Eyebrow */}
        <div className="inline-flex items-center space-x-3 mb-4">
          <div className="h-[1px] w-6 bg-neutral-600" />
          <span className="text-[11px] sm:text-[12px] font-mono tracking-[0.28em] text-neutral-400 uppercase">
            YOUR NEXT MOVE STARTS HERE
          </span>
          <div className="h-[1px] w-6 bg-neutral-600" />
        </div>

        {/* Heading */}
        <h2 className="hero-heading font-serif-luxury font-light text-white mb-6 tracking-tight">
          Let&apos;s Talk <span className="italic font-normal text-neutral-200">Real Estate.</span>
        </h2>

        {/* Copy */}
        <p className="text-neutral-300 text-[16px] sm:text-[19px] font-light leading-relaxed max-w-xl mb-10 text-balance">
          Whether you’re buying, selling, or simply exploring your opportunities in Silicon Valley’s premier luxury markets, start with a confidential conversation.
        </p>

        {/* Buttons */}
        <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <button
            onClick={onOpenContact}
            className="w-full sm:w-auto px-9 py-4 bg-white text-black text-[12px] sm:text-[13px] font-medium tracking-[0.2em] uppercase hover:bg-neutral-200 transition-all duration-300 flex items-center justify-center space-x-2 shadow-2xl hover:shadow-white/10"
          >
            <Mail className="w-4 h-4" />
            <span>CONTACT JOE</span>
          </button>

          <a
            href="tel:+16508338498"
            className="w-full sm:w-auto px-9 py-4 border border-white/30 text-white text-[12px] sm:text-[13px] font-medium tracking-[0.2em] uppercase hover:bg-white/10 hover:border-white transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <Phone className="w-4 h-4" />
            <span>CALL (650) 833-8498</span>
          </a>
        </div>

        <div className="mt-12 text-xs font-mono text-neutral-500 tracking-widest uppercase">
          Confidential Advisory · Direct Response Within 2 Hours
        </div>
      </div>
    </section>
  );
}
