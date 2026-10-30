"use client";

import React, { useState } from "react";
import { TESTIMONIALS } from "@/data/testimonials";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const activeTestimonial = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="relative w-full py-20 sm:py-28 lg:py-36 bg-[#f7f5f0] text-[#121212]">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-3 mb-3">
            <div className="h-[1px] w-6 bg-neutral-400" />
            <span className="text-[11px] sm:text-[12px] font-mono tracking-[0.25em] text-neutral-600 uppercase">
              CLIENT STORIES
            </span>
            <div className="h-[1px] w-6 bg-neutral-400" />
          </div>
          <h2 className="section-heading font-serif-luxury font-light text-[#121212] tracking-tight">
            Trusted Through <br className="hidden sm:inline" />
            <span className="italic font-normal text-neutral-700">Every Move.</span>
          </h2>
        </div>

        {/* Prominent Editorial Testimonial Card */}
        <div className="relative bg-white border border-[#e5e0d8] shadow-lg p-8 sm:p-12 lg:p-16 transition-all duration-500">
          <div className="absolute top-6 right-8 text-[#e8e4db] pointer-events-none">
            <Quote className="w-16 h-16 sm:w-20 sm:h-20 stroke-[1]" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
            {/* Context Badge */}
            <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.2em] uppercase text-neutral-500 mb-6 bg-[#f4f1ea] px-3.5 py-1">
              {activeTestimonial.context}
            </span>

            {/* Testimonial Quote */}
            <blockquote className="font-serif-luxury text-xl sm:text-2xl lg:text-3xl font-light text-[#1a1a1a] leading-snug sm:leading-relaxed mb-8 italic">
              “{activeTestimonial.quote}”
            </blockquote>

            {/* Author Attribution */}
            <div className="border-t border-[#e8e4db] pt-6 w-full max-w-md">
              <div className="text-base sm:text-lg font-serif-luxury font-medium text-[#111111]">
                {activeTestimonial.author}
              </div>
              <div className="text-xs sm:text-sm text-neutral-600 font-sans mt-0.5">
                {activeTestimonial.title}
              </div>
              {activeTestimonial.transactions && (
                <div className="text-[11px] font-mono tracking-wider text-[#9b784e] uppercase mt-2 font-medium">
                  {activeTestimonial.transactions}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Subtle Luxury Pagination Dots (No ugly Next/Prev buttons) */}
        <div className="mt-8 flex items-center justify-center space-x-3">
          {TESTIMONIALS.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 transition-all duration-300 rounded-full ${
                currentIndex === idx
                  ? "w-8 bg-[#121212]"
                  : "w-2 bg-[#d1cbc1] hover:bg-neutral-500"
              }`}
              aria-label={`View testimonial from ${item.author}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
