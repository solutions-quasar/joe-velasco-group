"use client";

import React from "react";

export default function CareerHighlights() {
  const stats = [
    {
      value: "$2.6B+",
      label: "TOTAL SALES VOLUME",
      context: "Verified Silicon Valley Career Volume",
    },
    {
      value: "20+",
      label: "YEARS OF EXPERIENCE",
      context: "Continuous Market Leadership",
    },
    {
      value: "TOP 1%",
      label: "SALES VOLUME",
      context: "Nationwide & California Top Tier",
    },
    {
      value: "#42",
      label: "BAY AREA — 2025",
      context: "RealTrends Verified Rankings",
    },
  ];

  const recognitions = [
    "Wall Street Journal / RealTrends",
    "San Francisco Luxury Marketing Council",
    "Coldwell Banker Global Luxury Elite",
    "American Dream TV Featured Host",
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 bg-black text-white border-t border-b border-[#222222]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center space-x-3 mb-3">
            <span className="text-[11px] sm:text-[12px] font-mono tracking-[0.25em] text-[#a3a3a3] uppercase">
              PROVEN PERFORMANCE
            </span>
            <div className="h-[1px] w-8 bg-neutral-800" />
          </div>
          <h2 className="section-heading font-serif-luxury font-light text-white tracking-tight">
            A Career Defined <br className="hidden sm:inline" />
            <span className="italic font-normal text-neutral-300">by Results.</span>
          </h2>
        </div>

        {/* Responsive Statistics Grid (4 cols desktop, 2x2 mobile) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-b border-[#262626] divide-x-0 sm:divide-x divide-y sm:divide-y-0 divide-[#262626]">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`py-8 sm:py-12 px-4 sm:px-6 flex flex-col justify-between ${
                idx % 2 === 0 ? "border-r border-[#262626] sm:border-r-0" : ""
              } ${idx >= 2 ? "border-t border-[#262626] lg:border-t-0" : ""}`}
            >
              <div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-light text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-[11px] font-mono tracking-[0.2em] text-neutral-300 uppercase mt-2 font-medium">
                  {stat.label}
                </div>
              </div>
              <div className="text-[11px] text-neutral-500 font-light mt-4 pt-3 border-t border-neutral-900">
                {stat.context}
              </div>
            </div>
          ))}
        </div>

        {/* Supporting Recognition Footnote */}
        <div className="mt-10 sm:mt-12 pt-4 flex flex-wrap items-center justify-between gap-y-4 text-xs font-mono text-neutral-400">
          <span className="text-neutral-500 tracking-wider uppercase text-[10px]">
            HONORS & AFFILIATIONS:
          </span>
          <div className="flex flex-wrap items-center gap-x-6 sm:gap-x-10 gap-y-2 text-[11px] text-neutral-300">
            {recognitions.map((item, index) => (
              <span key={index} className="flex items-center space-x-2">
                <span className="w-1 h-1 bg-neutral-500 rounded-full" />
                <span>{item}</span>
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
