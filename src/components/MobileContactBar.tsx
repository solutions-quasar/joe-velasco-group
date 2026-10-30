"use client";

import React from "react";
import { Phone, Mail, Calculator } from "lucide-react";

interface MobileContactBarProps {
  onOpenContact: () => void;
  onOpenValuation: () => void;
}

export default function MobileContactBar({ onOpenContact, onOpenValuation }: MobileContactBarProps) {
  return (
    <aside 
      aria-label="Quick contact"
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[#0c0c0c]/95 backdrop-blur-md border-t border-[#262626] shadow-[0_-4px_20px_rgba(0,0,0,0.6)] pb-[env(safe-area-inset-bottom)]"
    >
      <div className="grid grid-cols-3 h-[62px] divide-x divide-[#222222]">
        
        {/* Call Action */}
        <a
          href="tel:+16508338498"
          className="flex flex-col items-center justify-center text-white active:bg-neutral-900 transition-colors py-2 px-1"
          aria-label="Call Joe Velasco at (650) 833-8498"
        >
          <Phone className="w-4 h-4 text-neutral-200 mb-1" />
          <span className="text-[10px] font-mono tracking-[0.16em] uppercase text-neutral-300">
            CALL
          </span>
        </a>

        {/* Email / Inquire Action */}
        <button
          onClick={onOpenContact}
          className="flex flex-col items-center justify-center text-white active:bg-neutral-900 transition-colors py-2 px-1"
          aria-label="Send confidential email inquiry to Joe Velasco"
        >
          <Mail className="w-4 h-4 text-neutral-200 mb-1" />
          <span className="text-[10px] font-mono tracking-[0.16em] uppercase text-neutral-300">
            EMAIL
          </span>
        </button>

        {/* Home Valuation Action */}
        <button
          onClick={onOpenValuation}
          className="flex flex-col items-center justify-center bg-white text-black active:bg-neutral-200 transition-colors py-2 px-1"
          aria-label="Request property valuation"
        >
          <Calculator className="w-4 h-4 text-black mb-1" />
          <span className="text-[10px] font-mono tracking-[0.16em] uppercase font-semibold text-black">
            VALUATION
          </span>
        </button>

      </div>
    </aside>
  );
}
