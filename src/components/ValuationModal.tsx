"use client";

import React, { useState } from "react";
import { X, Calculator, CheckCircle2, Shield, ArrowRight } from "lucide-react";

interface ValuationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ValuationModal({ isOpen, onClose }: ValuationModalProps) {
  const [formData, setFormData] = useState({
    address: "",
    city: "Los Gatos",
    propertyType: "Single Family Estate",
    beds: "4 Beds",
    baths: "3+ Baths",
    name: "",
    email: "",
    phone: "",
    timeline: "Considering selling in 3-6 months",
    _gotcha: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [feedbackMessage, setFeedbackMessage] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("/api/valuation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-jvg-client": "secure-jvg-portal-2026",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setFeedbackMessage(data.message || "Thank you. Your valuation request has been confidentially logged.");
      } else {
        setStatus("error");
        setFeedbackMessage(data.error || "Unable to submit valuation request. Please try again.");
      }
    } catch {
      setStatus("error");
      setFeedbackMessage("A network error occurred. Please call (650) 833-8498 directly.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-fade-in">
      <div
        className="relative w-full max-w-xl bg-[#0f0f0f] border border-[#2a2a2a] text-white shadow-2xl p-6 sm:p-10 my-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="valuation-modal-title"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-neutral-400 hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-white/40"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-8">
          <div className="text-[10px] font-mono tracking-[0.25em] text-[#c5a880] uppercase mb-1.5 flex items-center space-x-2">
            <Calculator className="w-3.5 h-3.5" />
            <span>DISCREET MARKET ANALYSIS</span>
          </div>
          <h3 id="valuation-modal-title" className="text-2xl sm:text-3xl font-serif-luxury font-light text-white">
            What Is Your Home Worth?
          </h3>
          <p className="text-xs sm:text-sm text-neutral-400 font-light mt-1">
            Receive a custom comparative valuation prepared personally by Joe Velasco.
          </p>
        </div>

        {status === "success" ? (
          <div className="py-10 text-center space-y-4">
            <CheckCircle2 className="w-14 h-14 text-emerald-400 mx-auto stroke-[1.2]" />
            <h4 className="text-xl font-serif-luxury text-white">Analysis In Progress</h4>
            <p className="text-sm text-neutral-300 font-light max-w-md mx-auto leading-relaxed">
              {feedbackMessage}
            </p>
            <div className="pt-6">
              <button
                onClick={onClose}
                className="px-8 py-3 bg-white text-black text-xs font-mono tracking-widest uppercase hover:bg-neutral-200 transition-colors"
              >
                CLOSE WINDOW
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="_gotcha"
              tabIndex={-1}
              autoComplete="off"
              value={formData._gotcha}
              onChange={(e) => setFormData({ ...formData, _gotcha: e.target.value })}
              style={{ display: "none" }}
              aria-hidden="true"
            />

            <div>
              <label className="block text-[11px] font-mono tracking-wider uppercase text-neutral-400 mb-1.5">
                Property Street Address *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. 118 Dover Street"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full bg-[#181818] border border-[#2e2e2e] focus:border-white focus:outline-none px-4 py-3 text-sm text-white placeholder-neutral-600 transition-colors"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-mono tracking-wider uppercase text-neutral-400 mb-1.5">
                  City / Area
                </label>
                <select
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full bg-[#181818] border border-[#2e2e2e] focus:border-white focus:outline-none px-3.5 py-3 text-sm text-white transition-colors"
                >
                  <option value="Los Gatos">Los Gatos</option>
                  <option value="Saratoga">Saratoga</option>
                  <option value="Palo Alto">Palo Alto</option>
                  <option value="Atherton">Atherton</option>
                  <option value="Los Altos">Los Altos / Los Altos Hills</option>
                  <option value="Menlo Park">Menlo Park</option>
                  <option value="Woodside">Woodside</option>
                  <option value="Cupertino">Cupertino</option>
                  <option value="Monte Sereno">Monte Sereno</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-mono tracking-wider uppercase text-neutral-400 mb-1.5">
                  Property Type
                </label>
                <select
                  value={formData.propertyType}
                  onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                  className="w-full bg-[#181818] border border-[#2e2e2e] focus:border-white focus:outline-none px-3.5 py-3 text-sm text-white transition-colors"
                >
                  <option value="Single Family Estate">Single Family Estate</option>
                  <option value="Modern Architectural">Modern Architectural</option>
                  <option value="Foothill / View Compound">Foothill / View Compound</option>
                  <option value="Development Parcel">Development Parcel</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-mono tracking-wider uppercase text-neutral-400 mb-1.5">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#181818] border border-[#2e2e2e] focus:border-white focus:outline-none px-4 py-3 text-sm text-white placeholder-neutral-600 transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono tracking-wider uppercase text-neutral-400 mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@domain.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#181818] border border-[#2e2e2e] focus:border-white focus:outline-none px-4 py-3 text-sm text-white placeholder-neutral-600 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-mono tracking-wider uppercase text-neutral-400 mb-1.5">
                Phone Number (for private SMS notification)
              </label>
              <input
                type="tel"
                placeholder="(650) 000-0000"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-[#181818] border border-[#2e2e2e] focus:border-white focus:outline-none px-4 py-3 text-sm text-white placeholder-neutral-600 transition-colors"
              />
            </div>

            {status === "error" && (
              <div className="p-3 bg-red-950/40 border border-red-800/60 text-red-300 text-xs font-mono">
                {feedbackMessage}
              </div>
            )}

            <div className="pt-2">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full py-4 bg-white text-black text-xs font-medium tracking-[0.2em] uppercase hover:bg-neutral-200 transition-colors flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                <span>{status === "submitting" ? "GENERATING COMPREHENSIVE DOSSIER..." : "REQUEST CONFIDENTIAL VALUATION"}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
