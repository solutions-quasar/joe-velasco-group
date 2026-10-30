"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";

interface HeaderProps {
  onOpenContact: () => void;
  onOpenValuation: () => void;
}

export default function Header({ onOpenContact }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "PROPERTIES", href: "#properties" },
    { label: "SELL", href: "#seller-valuation" },
    { label: "COMMUNITIES", href: "#communities" },
    { label: "ABOUT", href: "#about" },
    { label: "TESTIMONIALS", href: "#testimonials" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-400 ${
          isScrolled
            ? "bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#262626]/70 py-4 shadow-2xl"
            : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5 lg:py-7"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between h-[52px]">
          {/* Logo */}
          <Link
            href="#"
            className="flex flex-col group transition-transform duration-300"
            aria-label="Joe Velasco Group Homepage"
          >
            <span className="font-serif-luxury text-xl sm:text-2xl tracking-[0.2em] font-light text-white uppercase leading-none">
              JOE VELASCO
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-[0.35em] text-[#a3a3a3] uppercase mt-1 font-mono">
              GROUP · SILICON VALLEY
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-9 text-[12px] font-medium tracking-[0.18em] text-neutral-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-white transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-white hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            <button
              onClick={onOpenContact}
              className="px-6 py-2.5 bg-white text-black text-[12px] font-medium tracking-[0.16em] uppercase hover:bg-neutral-200 transition-all duration-300 flex items-center space-x-1.5 shadow-md hover:shadow-white/10"
            >
              <span>CONTACT</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:text-neutral-300 focus:outline-none focus:ring-1 focus:ring-white/40"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 stroke-[1.5]" />
              ) : (
                <Menu className="w-6 h-6 stroke-[1.5]" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <div
        className={`fixed inset-0 z-30 bg-[#0a0a0a] transition-all duration-500 ease-in-out lg:hidden flex flex-col justify-between px-6 pt-24 pb-12 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-4"
        }`}
      >
        <nav className="flex flex-col space-y-6 pt-4 border-t border-[#262626]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-serif-luxury tracking-wide text-white hover:text-neutral-300 transition-colors flex items-center justify-between"
            >
              <span>{link.label}</span>
              <ArrowUpRight className="w-4 h-4 text-neutral-500" />
            </a>
          ))}
        </nav>

        <div className="space-y-4 border-t border-[#262626] pt-6">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenContact();
            }}
            className="w-full py-4 bg-white text-black text-center font-medium tracking-[0.18em] text-[13px] uppercase hover:bg-neutral-200 transition-colors"
          >
            CONTACT JOE VELASCO
          </button>
          <div className="text-center text-xs text-neutral-400 font-mono tracking-wider">
            Coldwell Banker Global Luxury · CA DRE# 01309200
          </div>
        </div>
      </div>
    </>
  );
}
