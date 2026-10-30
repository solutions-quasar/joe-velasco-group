"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { COMMUNITIES, Community } from "@/data/communities";

interface CommunitiesProps {
  onSelectCommunity?: (community: Community) => void;
}

export default function Communities({ onSelectCommunity }: CommunitiesProps) {
  const [activeCommunity, setActiveCommunity] = useState<Community | null>(null);

  return (
    <section id="communities" className="relative w-full py-20 sm:py-28 lg:py-36 bg-[#0a0a0a] text-white border-t border-[#1f1f1f]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center space-x-3 mb-3">
            <span className="text-[11px] sm:text-[12px] font-mono tracking-[0.25em] text-[#a3a3a3] uppercase">
              LOCAL JURISDICTION
            </span>
            <div className="h-[1px] w-8 bg-neutral-800" />
          </div>
          <h2 className="section-heading font-serif-luxury font-light text-white tracking-tight">
            Explore Silicon Valley
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base font-light mt-2 max-w-xl">
            Local expertise across the Bay Area&apos;s most sought-after enclaves and prestigious neighborhoods.
          </p>
        </div>

        {/* Editorial Community Grid (Varied dimensions on desktop, swipeable/stacked on mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {COMMUNITIES.map((community) => (
            <div
              key={community.id}
              onClick={() => {
                setActiveCommunity(community);
                if (onSelectCommunity) onSelectCommunity(community);
              }}
              className="group relative aspect-[4/5] sm:aspect-[3/4] overflow-hidden bg-neutral-900 border border-[#222222] cursor-pointer hover:border-[#444444] transition-all duration-500 flex flex-col justify-end p-6 sm:p-7"
            >
              {/* Background Image with Zoom */}
              <Image
                src={community.image}
                alt={`${community.name} Luxury Real Estate Silicon Valley`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover object-center luxury-image-zoom filter brightness-[0.85] group-hover:brightness-[0.95] transition-all duration-700"
              />

              {/* Sophisticated Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent pointer-events-none" />

              {/* Content Overlay */}
              <div className="relative z-10">
                <div className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase mb-1">
                  {community.region}
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif-luxury font-light text-white tracking-wide mb-2 group-hover:text-neutral-100 transition-colors">
                  {community.name}
                </h3>
                <p className="text-xs text-neutral-300 font-light line-clamp-2 mb-4 opacity-90 group-hover:opacity-100 transition-opacity">
                  {community.description}
                </p>

                <div className="pt-3 border-t border-white/20 flex items-center justify-between text-[11px] font-mono tracking-[0.16em] uppercase text-white">
                  <span className="text-neutral-400 text-[10px]">Avg: {community.avgPrice}</span>
                  <span className="flex items-center space-x-1 group-hover:text-white transition-colors">
                    <span>EXPLORE</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Below */}
        <div className="mt-14 sm:mt-16 text-center">
          <a
            href="https://joevelascogroup.com/communities"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 px-8 py-4 border border-[#383838] hover:border-white text-white text-[12px] sm:text-[13px] font-medium tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-300"
          >
            <span>VIEW ALL COMMUNITIES</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
