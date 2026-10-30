"use client";

import React from "react";
import Link from "next/link";

interface FooterProps {
  onOpenContact: () => void;
  onOpenValuation: () => void;
}

export default function Footer({ onOpenContact, onOpenValuation }: FooterProps) {
  return (
    <footer className="w-full bg-[#070707] text-white border-t border-[#1f1f1f] pt-14 pb-24 sm:pb-14">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#1c1c1c]">
          
          {/* Brand & Address Column */}
          <div className="md:col-span-5">
            <div className="font-serif-luxury text-2xl tracking-[0.18em] font-light uppercase text-white mb-2">
              JOE VELASCO GROUP
            </div>
            <div className="text-xs font-mono tracking-widest text-[#a3a3a3] uppercase mb-5">
              Coldwell Banker Global Luxury
            </div>

            <div className="space-y-1 text-xs text-neutral-400 font-light leading-relaxed">
              <p className="text-neutral-300 font-medium">Joe Velasco · Broker Associate</p>
              <p>Coldwell Banker Realty</p>
              <p>410 N Santa Cruz Ave, Los Gatos, CA 95030</p>
              <p className="pt-2">
                <a href="tel:+16508338498" className="hover:text-white transition-colors underline-offset-4 hover:underline">
                  (650) 833-8498
                </a>
                <span className="mx-2 text-neutral-600">·</span>
                <a href="mailto:joe.velasco@cbrealty.com" className="hover:text-white transition-colors underline-offset-4 hover:underline">
                  joe.velasco@cbrealty.com
                </a>
              </p>
              <p className="text-[11px] font-mono text-neutral-500 pt-1">CA DRE# 01309200</p>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-4">
            <div className="text-[11px] font-mono tracking-[0.2em] uppercase text-neutral-400 mb-4">
              PORTAL NAVIGATION
            </div>
            <ul className="grid grid-cols-2 gap-y-2.5 text-xs tracking-wider uppercase text-neutral-300 font-sans">
              <li>
                <a href="#properties" className="hover:text-white transition-colors">
                  Properties
                </a>
              </li>
              <li>
                <a href="#communities" className="hover:text-white transition-colors">
                  Communities
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Joe
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <button onClick={onOpenValuation} className="text-left hover:text-white transition-colors">
                  Home Valuation
                </button>
              </li>
              <li>
                <button onClick={onOpenContact} className="text-left hover:text-white transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Luxury Certification & Hours */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div>
              <div className="text-[11px] font-mono tracking-[0.2em] uppercase text-neutral-400 mb-4">
                MARKET LEADERSHIP
              </div>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">
                Specializing in luxury estates, Silicon Valley development, and high-net-worth confidential property representation across Santa Clara and San Mateo Counties.
              </p>
            </div>

            <div className="mt-4 pt-4 border-t border-[#1a1a1a] flex items-center space-x-3 text-neutral-400 text-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-mono text-[11px]">Private Client Advisory Open</span>
            </div>
          </div>

        </div>

        {/* Legal Disclaimer Row */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-[11px] text-neutral-500 font-light gap-4">
          <p className="max-w-3xl text-balance text-center md:text-left leading-relaxed">
            Coldwell Banker Realty and the Joe Velasco Group fully support the principles of the Fair Housing Act and the Equal Opportunity Act. All material presented herein is intended for information purposes only. While information is deemed reliable, it is represented subject to errors, omissions, changes, or withdrawal without notice. Equal Housing Opportunity.
          </p>
          <div className="font-mono text-[10px] tracking-wider text-neutral-600 whitespace-nowrap">
            © {new Date().getFullYear()} JOE VELASCO GROUP. ALL RIGHTS RESERVED.
          </div>
        </div>

      </div>
    </footer>
  );
}
