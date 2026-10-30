"use client";

import React from "react";
import Image from "next/image";
import { X, Bed, Bath, Maximize2, MapPin, Calendar, Check } from "lucide-react";
import { Property } from "@/data/properties";

interface PropertyDetailModalProps {
  property: Property | null;
  onClose: () => void;
  onInquire: (property: Property) => void;
}

export default function PropertyDetailModal({
  property,
  onClose,
  onInquire,
}: PropertyDetailModalProps) {
  if (!property) return null;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/90 backdrop-blur-md animate-fade-in">
      <div
        className="relative w-full max-w-3xl bg-[#111111] border border-[#2b2b2b] text-white shadow-2xl overflow-hidden my-6"
        role="dialog"
        aria-modal="true"
        aria-labelledby="property-modal-title"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-black/70 backdrop-blur-md text-white border border-white/20 hover:bg-white hover:text-black transition-colors"
          aria-label="Close property details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-900">
          <Image
            src={property.image}
            alt={property.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-black/30" />

          <div className="absolute top-4 left-4">
            <span className="px-3.5 py-1 bg-black/80 backdrop-blur-md text-[11px] font-mono tracking-widest text-white uppercase border border-white/20">
              {property.status}
            </span>
          </div>

          <div className="absolute bottom-5 left-6 right-6">
            <div className="text-3xl sm:text-4xl font-serif-luxury text-white tracking-tight">
              {formatPrice(property.price)}
            </div>
            <div className="text-sm font-mono text-neutral-300 flex items-center space-x-1.5 mt-1">
              <MapPin className="w-3.5 h-3.5 text-[#c5a880]" />
              <span>{property.address}, {property.city}, {property.state} {property.zip}</span>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8">
          <div className="grid grid-cols-3 border-y border-[#262626] py-4 mb-6 text-center font-mono text-xs sm:text-sm">
            <div className="flex flex-col items-center">
              <span className="text-neutral-500 uppercase text-[10px] tracking-widest">BEDROOMS</span>
              <span className="text-white text-base sm:text-lg font-serif-luxury mt-0.5">{property.beds} Beds</span>
            </div>
            <div className="flex flex-col items-center border-x border-[#262626]">
              <span className="text-neutral-500 uppercase text-[10px] tracking-widest">BATHROOMS</span>
              <span className="text-white text-base sm:text-lg font-serif-luxury mt-0.5">{property.baths} Baths</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-neutral-500 uppercase text-[10px] tracking-widest">LIVING AREA</span>
              <span className="text-white text-base sm:text-lg font-serif-luxury mt-0.5">{property.sqft.toLocaleString()} Sq Ft</span>
            </div>
          </div>

          <div className="mb-6">
            <h4 id="property-modal-title" className="text-lg font-serif-luxury tracking-wide text-white mb-2">
              Architectural Overview
            </h4>
            <p className="text-neutral-300 text-sm leading-relaxed font-light">
              {property.description}
            </p>
          </div>

          {/* Highlights */}
          {property.highlights && (
            <div className="mb-8">
              <div className="text-[11px] font-mono tracking-widest uppercase text-neutral-400 mb-3">
                KEY RESIDENCE FEATURES
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs font-mono text-neutral-300">
                {property.highlights.map((h, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <Check className="w-3.5 h-3.5 text-[#c5a880]" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="pt-4 border-t border-[#262626] flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={() => {
                onClose();
                onInquire(property);
              }}
              className="w-full sm:w-auto px-8 py-3.5 bg-white text-black text-xs font-medium tracking-[0.2em] uppercase hover:bg-neutral-200 transition-colors"
            >
              SCHEDULE PRIVATE VIEWING
            </button>

            <a
              href="tel:+16508338498"
              className="text-neutral-400 hover:text-white text-xs font-mono tracking-wider uppercase transition-colors"
            >
              Direct Agent Line: (650) 833-8498
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
