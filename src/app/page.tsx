"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import JoeIntro from "@/components/JoeIntro";
import CareerHighlights from "@/components/CareerHighlights";
import FeaturedProperties from "@/components/FeaturedProperties";
import SellerCTA from "@/components/SellerCTA";
import Communities from "@/components/Communities";
import Testimonials from "@/components/Testimonials";
import WhyJoe from "@/components/WhyJoe";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import MobileContactBar from "@/components/MobileContactBar";
import ContactModal from "@/components/ContactModal";
import ValuationModal from "@/components/ValuationModal";
import PropertyDetailModal from "@/components/PropertyDetailModal";
import { Property } from "@/data/properties";

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isValuationOpen, setIsValuationOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  const handleOpenContact = () => {
    setIsContactOpen(true);
  };

  const handleOpenValuation = () => {
    setIsValuationOpen(true);
  };

  const handleSelectProperty = (property: Property) => {
    setSelectedProperty(property);
  };

  const handleInquireProperty = (property: Property) => {
    setSelectedProperty(null);
    setIsContactOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white flex flex-col relative selection:bg-white selection:text-black">
      {/* 1. Header (Sticky transparent to solid black transition) */}
      <Header
        onOpenContact={handleOpenContact}
        onOpenValuation={handleOpenValuation}
      />

      {/* 2. Hero Section (Cinematic luxury architecture & immediate credibility) */}
      <Hero onOpenValuation={handleOpenValuation} />

      {/* 3. Introduction / Joe Velasco (50/50 editorial layout & 4:5 mobile portrait) */}
      <JoeIntro onOpenContact={handleOpenContact} />

      {/* 4. Career Highlights ($2.6B+ results grid & RealTrends verification) */}
      <CareerHighlights />

      {/* 5. Featured Properties (Image-first cards & detail inspection) */}
      <FeaturedProperties onSelectProperty={handleSelectProperty} />

      {/* 6. Seller Conversion Section (Highest-converting home valuation lead-gen) */}
      <SellerCTA
        onOpenValuation={handleOpenValuation}
        onOpenContact={handleOpenContact}
      />

      {/* 7. Silicon Valley Communities (Palo Alto, Los Gatos, Atherton, Saratoga, etc.) */}
      <Communities />

      {/* 8. Client Testimonials (Editorial luxury layout & verified client stories) */}
      <Testimonials />

      {/* 9. Why Work With Joe (3 core differentiators) */}
      <WhyJoe />

      {/* 10. Final CTA Section (Dramatic closing consultation invitation) */}
      <FinalCTA onOpenContact={handleOpenContact} />

      {/* 11. Footer (Compact, high-end branding & DRE compliance) */}
      <Footer
        onOpenContact={handleOpenContact}
        onOpenValuation={handleOpenValuation}
      />

      {/* 12. Mobile Fixed Contact Bar (Call / Email / Valuation) */}
      <MobileContactBar
        onOpenContact={handleOpenContact}
        onOpenValuation={handleOpenValuation}
      />

      {/* App Native Modals (No browser popups, strict security compliance) */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      <ValuationModal
        isOpen={isValuationOpen}
        onClose={() => setIsValuationOpen(false)}
      />

      <PropertyDetailModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
        onInquire={handleInquireProperty}
      />
    </main>
  );
}
