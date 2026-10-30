"use client";

import React from "react";
import Image from "next/image";
import { ArrowDown, ChevronRight } from "lucide-react";

interface HeroProps {
  onOpenValuation: () => void;
}

export default function Hero({ onOpenValuation }: HeroProps) {
  return (
    <section className="relative w-full min-h-[88svh] sm:min-h-[92svh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Cinematic Architecture Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2400&q=85"
          alt="Silicon Valley Luxury Architectural Estate"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-[1.02] transform transition-transform duration-1000 ease-out"
        />
        {/* Subtle Multi-Layer Luxury Dark Vignette & Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/55 to-black/45" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/30 to-black/80" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 text-center pt-24 sm:pt-28 pb-16 lg:py-32 flex flex-col items-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center space-x-3 mb-4 sm:mb-6 animate-fade-in">
          <div className="h-[1px] w-6 sm:w-10 bg-neutral-400" />
          <span className="text-[11px] sm:text-[13px] uppercase font-mono tracking-[0.28em] text-neutral-300">
            SILICON VALLEY LUXURY REAL ESTATE
          </span>
          <div className="h-[1px] w-6 sm:w-10 bg-neutral-400" />
        </div>

        {/* Main Headline */}
        <h1 className="hero-heading font-serif-luxury font-light text-white mb-5 sm:mb-7 max-w-4xl tracking-tight">
          Exceptional Homes.
          <span className="block italic font-normal text-neutral-100 mt-1 sm:mt-2">
            Exceptional Representation.
          </span>
        </h1>

        {/* Supporting Copy */}
        <p className="text-neutral-300 text-[15px] sm:text-[18px] lg:text-[20px] font-light leading-relaxed max-w-2xl mb-8 sm:mb-10 text-balance px-2">
          Over $2.6 billion in career sales and more than two decades representing discerning buyers and sellers across Silicon Valley.
        </p>

        {/* Action CTAs */}
        <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-5 mb-12 sm:mb-16">
          <a
            href="#properties"
            className="w-full sm:w-auto px-8 py-3.5 sm:py-4 bg-white text-black text-[12px] sm:text-[13px] font-medium tracking-[0.2em] uppercase hover:bg-neutral-200 transition-all duration-300 text-center shadow-lg hover:shadow-white/10"
          >
            VIEW PROPERTIES
          </a>
          <button
            onClick={onOpenValuation}
            className="w-full sm:w-auto px-8 py-3.5 sm:py-4 border border-white/40 text-white text-[12px] sm:text-[13px] font-medium tracking-[0.2em] uppercase hover:bg-white/10 hover:border-white transition-all duration-300 text-center flex items-center justify-center space-x-2"
          >
            <span>WHAT&apos;S MY HOME WORTH?</span>
            <ChevronRight className="w-4 h-4 text-neutral-300" />
          </button>
        </div>

        {/* Credibility Indicators (Compact & Subtle) */}
        <div className="w-full max-w-2xl border-t border-white/15 pt-6 sm:pt-8 grid grid-cols-3 divide-x divide-white/15 text-center">
          <div className="px-2 sm:px-4">
            <div className="text-xl sm:text-2xl lg:text-3xl font-serif-luxury text-white tracking-tight">
              $2.6B+
            </div>
            <div className="text-[10px] sm:text-[11px] font-mono tracking-[0.18em] text-neutral-400 uppercase mt-1">
              CAREER SALES
            </div>
          </div>

          <div className="px-2 sm:px-4">
            <div className="text-xl sm:text-2xl lg:text-3xl font-serif-luxury text-white tracking-tight">
              20+
            </div>
            <div className="text-[10px] sm:text-[11px] font-mono tracking-[0.18em] text-neutral-400 uppercase mt-1">
              YEARS EXPERIENCE
            </div>
          </div>

          <div className="px-2 sm:px-4">
            <div className="text-xl sm:text-2xl lg:text-3xl font-serif-luxury text-white tracking-tight">
              TOP 1%
            </div>
            <div className="text-[10px] sm:text-[11px] font-mono tracking-[0.18em] text-neutral-400 uppercase mt-1">
              NATIONWIDE
            </div>
          </div>
        </div>
      </div>

      {/* Gentle Scroll Indicator */}
      <a
        href="#about"
        className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex-col items-center text-neutral-400 hover:text-white transition-colors duration-300"
        aria-label="Scroll to introduction"
      >
        <span className="text-[10px] tracking-[0.25em] font-mono uppercase mb-1">SCROLL</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
      </a>
    </section>
  );
}
