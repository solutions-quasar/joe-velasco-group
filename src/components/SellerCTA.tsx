"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Calculator, PhoneCall } from "lucide-react";

interface SellerCTAProps {
  onOpenValuation: () => void;
  onOpenContact: () => void;
}

export default function SellerCTA({ onOpenValuation, onOpenContact }: SellerCTAProps) {
  return (
    <section id="seller-valuation" className="relative w-full py-24 sm:py-32 lg:py-40 overflow-hidden bg-black text-white">
      {/* Background Architectural Canvas */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=85"
          alt="Modern Silicon Valley Residence"
          fill
          sizes="100vw"
          className="object-cover object-center scale-105"
        />
        {/* Deep Vignette & Dark Overlay for pristine typography */}
        <div className="absolute inset-0 bg-[#0a0a0a]/85 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div className="flex items-center space-x-3 mb-4">
            <span className="text-[11px] sm:text-[12px] font-mono tracking-[0.25em] text-[#c5a880] uppercase font-medium">
              THINKING OF SELLING?
            </span>
            <div className="h-[1px] w-8 bg-[#c5a880]/60" />
          </div>

          {/* Heading */}
          <h2 className="section-heading font-serif-luxury font-light text-white mb-6 tracking-tight">
            What Could Your <br />
            <span className="italic font-normal text-neutral-200">Home Be Worth?</span>
          </h2>

          {/* Supporting Copy */}
          <p className="text-neutral-300 text-[16px] sm:text-[19px] leading-relaxed font-light mb-10 max-w-lg">
            Discover your property’s potential in today’s Silicon Valley market. Receive a complimentary, confidential valuation backed by real-time neighborhood sales data and private buyer networks.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 mb-8">
            <button
              onClick={onOpenValuation}
              className="px-8 py-4 bg-white text-black text-[12px] sm:text-[13px] font-medium tracking-[0.2em] uppercase hover:bg-neutral-200 transition-all duration-300 flex items-center justify-center space-x-2 shadow-xl hover:shadow-white/10"
            >
              <Calculator className="w-4 h-4" />
              <span>GET MY HOME VALUATION</span>
            </button>

            <button
              onClick={onOpenContact}
              className="group inline-flex items-center justify-center space-x-2 text-[13px] font-medium tracking-[0.16em] uppercase text-neutral-300 hover:text-white py-3 transition-colors"
            >
              <span>Speak directly with Joe</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Trust points */}
          <div className="pt-6 border-t border-white/15 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-mono text-neutral-400">
            <div>✓ Off-Market Discretion</div>
            <div>✓ Complimentary Staging Advisory</div>
            <div>✓ Targeted High-Net-Worth Reach</div>
          </div>
        </div>
      </div>
    </section>
  );
}
