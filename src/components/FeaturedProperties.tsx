"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Bed, Bath, Maximize2 } from "lucide-react";
import { FEATURED_PROPERTIES, Property } from "@/data/properties";

interface FeaturedPropertiesProps {
  onSelectProperty: (property: Property) => void;
}

export default function FeaturedProperties({ onSelectProperty }: FeaturedPropertiesProps) {
  const [filter, setFilter] = useState<"All" | "Los Gatos" | "Silicon Valley">("All");

  const displayProperties = FEATURED_PROPERTIES.filter((p) => {
    if (filter === "Los Gatos") return p.city.includes("Los Gatos");
    return true;
  });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <section id="properties" className="relative w-full py-20 sm:py-28 lg:py-36 bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-[#262626]">
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <span className="text-[11px] sm:text-[12px] font-mono tracking-[0.25em] text-[#a3a3a3] uppercase">
                PORTFOLIO
              </span>
              <div className="h-[1px] w-8 bg-neutral-800" />
            </div>
            <h2 className="section-heading font-serif-luxury font-light text-white tracking-tight">
              Featured Properties
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base font-light mt-2">
              Exceptional homes across Silicon Valley.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="mt-6 md:mt-0 flex items-center space-x-2 text-xs font-mono uppercase tracking-wider">
            {(["All", "Los Gatos", "Silicon Valley"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-4 py-2 border transition-all duration-300 ${
                  filter === tab
                    ? "bg-white text-black border-white"
                    : "border-[#333333] text-neutral-400 hover:text-white hover:border-neutral-500"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Property Cards Grid (Desktop 3 cols, Mobile responsive) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {displayProperties.slice(0, 3).map((property) => (
            <div
              key={property.id}
              onClick={() => onSelectProperty(property)}
              className="group cursor-pointer flex flex-col bg-[#121212] border border-[#222222] hover:border-[#383838] transition-all duration-500"
            >
              {/* Image Container with Zoom */}
              <div className="relative aspect-[16/11] sm:aspect-[4/3] w-full overflow-hidden bg-neutral-900">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center luxury-image-zoom"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-black/80 backdrop-blur-md text-[10px] font-mono tracking-widest text-white uppercase border border-white/20">
                    {property.status}
                  </span>
                </div>

                {/* Quick Expand Icon */}
                <div className="absolute top-4 right-4 w-9 h-9 bg-black/70 backdrop-blur-md border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between">
                <div>
                  <div className="text-2xl sm:text-3xl font-serif-luxury font-light text-white tracking-tight mb-2">
                    {formatPrice(property.price)}
                  </div>
                  <h3 className="text-[15px] sm:text-[16px] font-medium text-neutral-200 tracking-wide">
                    {property.address}
                  </h3>
                  <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider mt-1">
                    {property.city}, {property.state} {property.zip}
                  </div>
                </div>

                {/* Specs Divider & Icons */}
                <div className="pt-6 mt-6 border-t border-[#222222] flex items-center justify-between text-xs text-neutral-300 font-mono">
                  <div className="flex items-center space-x-1.5">
                    <Bed className="w-3.5 h-3.5 text-neutral-400" />
                    <span>{property.beds} Beds</span>
                  </div>
                  <div className="text-neutral-700">·</div>
                  <div className="flex items-center space-x-1.5">
                    <Bath className="w-3.5 h-3.5 text-neutral-400" />
                    <span>{property.baths} Baths</span>
                  </div>
                  <div className="text-neutral-700">·</div>
                  <div>
                    <span>{property.sqft.toLocaleString()} Sq Ft</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Properties CTA */}
        <div className="mt-14 sm:mt-16 text-center">
          <a
            href="https://joevelascogroup.com/properties"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 px-8 py-4 border border-[#383838] hover:border-white text-white text-[12px] sm:text-[13px] font-medium tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-300"
          >
            <span>VIEW ALL PROPERTIES</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
