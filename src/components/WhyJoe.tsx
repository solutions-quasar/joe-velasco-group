"use client";

import React from "react";

export default function WhyJoe() {
  const pillars = [
    {
      num: "01",
      title: "LOCAL EXPERTISE",
      description:
        "More than two decades navigating Silicon Valley’s most competitive real estate markets, unearthing off-market inventory and pricing subtleties unseen by conventional algorithms.",
    },
    {
      num: "02",
      title: "PROVEN RESULTS",
      description:
        "Over $2.6 billion in career transaction volume and continuous top 1% nationwide ranking, offering clients unmatched negotiation leverage and proven valuation accuracy.",
    },
    {
      num: "03",
      title: "PERSONAL REPRESENTATION",
      description:
        "Strategic, responsive representation from the first conversation through closing. You work directly with Joe Velasco and a dedicated bespoke advisory team.",
    },
  ];

  return (
    <section className="relative w-full py-20 sm:py-28 bg-[#0d0d0d] text-white border-t border-[#1f1f1f]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-14 sm:mb-20">
          <div className="flex items-center space-x-3 mb-3">
            <span className="text-[11px] sm:text-[12px] font-mono tracking-[0.25em] text-[#a3a3a3] uppercase">
              THE STANDARD
            </span>
            <div className="h-[1px] w-8 bg-neutral-800" />
          </div>
          <h2 className="section-heading font-serif-luxury font-light text-white tracking-tight">
            More Than a Transaction.
          </h2>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 border-t border-[#262626] pt-12">
          {pillars.map((pillar) => (
            <div key={pillar.num} className="flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono text-neutral-500 mb-4 tracking-widest">
                  [{pillar.num}]
                </div>
                <h3 className="text-lg sm:text-xl font-serif-luxury tracking-wide text-white mb-3 uppercase">
                  {pillar.title}
                </h3>
                <p className="text-neutral-400 text-sm sm:text-[15px] leading-relaxed font-light">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
