"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Award, ShieldCheck } from "lucide-react";
import joePortrait from "../../public/images/joe-velasco.jpg";

interface JoeIntroProps {
  onOpenContact: () => void;
}

export default function JoeIntro({ onOpenContact }: JoeIntroProps) {
  return (
    <section id="about" className="relative w-full py-20 sm:py-28 lg:py-36 bg-[#0e0e0e] text-white border-t border-[#1f1f1f]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Portrait Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-[340px] sm:max-w-[420px] lg:max-w-none aspect-[4/5] overflow-hidden bg-neutral-900 border border-[#2a2a2a] shadow-2xl">
              <Image
                src={joePortrait}
                alt="Joe Velasco — Silicon Valley Luxury Real Estate Specialist"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 40vw"
                className="object-cover object-top hover:scale-[1.02] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between pointer-events-none">
                <div>
                  <div className="text-sm font-serif-luxury tracking-wide text-white">Joe Velasco</div>
                  <div className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase">Team Principal & Founder</div>
                </div>
                <div className="p-2 bg-black/60 backdrop-blur-sm border border-white/10 rounded-full">
                  <ShieldCheck className="w-4 h-4 text-neutral-300" />
                </div>
              </div>
            </div>

            {/* Subtle background framing accent */}
            <div className="hidden lg:block absolute -top-4 -left-4 w-full h-full border border-white/10 -z-10 pointer-events-none" />
          </div>

          {/* Editorial Content Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Eyebrow */}
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-[11px] sm:text-[12px] font-mono tracking-[0.25em] text-[#a3a3a3] uppercase">
                MEET JOE VELASCO
              </span>
              <div className="h-[1px] w-8 bg-neutral-700" />
            </div>

            {/* Heading */}
            <h2 className="section-heading font-serif-luxury font-light text-white mb-6 sm:mb-8 tracking-tight">
              Experience That Moves <br className="hidden sm:inline" />
              <span className="italic font-normal text-neutral-200">Silicon Valley.</span>
            </h2>

            {/* Copy (Max 2 short paragraphs as instructed) */}
            <div className="space-y-4 text-neutral-300 text-[15px] sm:text-[17px] leading-relaxed font-light mb-8 max-w-xl">
              <p>
                Joe Velasco is recognized as one of Northern California’s preeminent luxury real estate authorities, with over two decades of uncompromising representation and more than $2.6 billion in career sales across Silicon Valley and the Peninsula.
              </p>
              <p>
                His practice combines white-glove personal advisory, bespoke market analytics, and an elite global marketing apparatus through Coldwell Banker Global Luxury, delivering record-setting sales for private estates, Silicon Valley founders, and visionary developers.
              </p>
            </div>

            {/* Meet Joe CTA */}
            <div className="flex items-center space-x-6 mb-10">
              <button
                onClick={onOpenContact}
                className="group inline-flex items-center space-x-2 text-[13px] font-medium tracking-[0.2em] uppercase text-white hover:text-neutral-300 transition-colors"
              >
                <span className="border-b border-white pb-1 group-hover:border-neutral-400 transition-colors">
                  MEET JOE
                </span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" />
              </button>
            </div>

            {/* Credentials / Affiliation Line */}
            <div className="pt-6 border-t border-[#262626] flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] sm:text-[12px] font-mono text-neutral-400">
              <div className="flex items-center space-x-2">
                <Award className="w-3.5 h-3.5 text-neutral-300" />
                <span className="tracking-wider uppercase text-neutral-200">Coldwell Banker Global Luxury</span>
              </div>
              <div className="hidden sm:block text-neutral-600">|</div>
              <div className="tracking-widest uppercase">CA DRE# 01309200</div>
              <div className="hidden sm:block text-neutral-600">|</div>
              <div className="tracking-widest uppercase text-neutral-400">Leading 100 Silicon Valley</div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
