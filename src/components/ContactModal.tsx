"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, Send, CheckCircle2, Phone, Mail, Shield } from "lucide-react";
import joePortrait from "../../public/images/joe-velasco.jpg";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyType: "Luxury Single Family",
    timeframe: "Immediate (0-3 months)",
    message: "",
    _gotcha: "", // Honeypot field
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [feedbackMessage, setFeedbackMessage] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-jvg-client": "secure-jvg-portal-2026", // Secret Client Token
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setFeedbackMessage(data.message || "Thank you. Your inquiry has been sent to Joe Velasco.");
      } else {
        setStatus("error");
        setFeedbackMessage(data.error || "Unable to send your message. Please try again or call directly.");
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
        aria-labelledby="contact-modal-title"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-neutral-400 hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-white/40"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-8 flex items-start space-x-4">
          <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/20 shrink-0 mt-1">
            <Image
              src={joePortrait}
              alt="Joe Velasco"
              fill
              className="object-cover object-top"
            />
          </div>
          <div>
            <div className="text-[10px] font-mono tracking-[0.25em] text-[#c5a880] uppercase mb-1 flex items-center space-x-1.5">
              <Shield className="w-3 h-3" />
              <span>CONFIDENTIAL CLIENT INQUIRY</span>
            </div>
            <h3 id="contact-modal-title" className="text-xl sm:text-2xl font-serif-luxury font-light text-white">
              Connect With Joe Velasco
            </h3>
            <p className="text-xs text-neutral-400 font-light mt-0.5">
              Over $2.6B in luxury transactions. All communications remain strictly privileged.
            </p>
          </div>
        </div>

        {status === "success" ? (
          <div className="py-10 text-center space-y-4">
            <CheckCircle2 className="w-14 h-14 text-emerald-400 mx-auto stroke-[1.2]" />
            <h4 className="text-xl font-serif-luxury text-white">Inquiry Received</h4>
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
            {/* Honeypot field - invisible to legitimate users */}
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-mono tracking-wider uppercase text-neutral-400 mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Katherine Vance"
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
                  placeholder="katherine@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#181818] border border-[#2e2e2e] focus:border-white focus:outline-none px-4 py-3 text-sm text-white placeholder-neutral-600 transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-mono tracking-wider uppercase text-neutral-400 mb-1.5">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="(650) 000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[#181818] border border-[#2e2e2e] focus:border-white focus:outline-none px-4 py-3 text-sm text-white placeholder-neutral-600 transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono tracking-wider uppercase text-neutral-400 mb-1.5">
                  Interest
                </label>
                <select
                  value={formData.propertyType}
                  onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                  className="w-full bg-[#181818] border border-[#2e2e2e] focus:border-white focus:outline-none px-3.5 py-3 text-sm text-white transition-colors"
                >
                  <option value="Selling a Luxury Residence">Selling a Luxury Residence</option>
                  <option value="Purchasing in Silicon Valley">Purchasing in Silicon Valley</option>
                  <option value="Private Off-Market Inquiry">Private Off-Market Inquiry</option>
                  <option value="Development & Land Advisory">Development & Land Advisory</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-mono tracking-wider uppercase text-neutral-400 mb-1.5">
                Message / Confidential Notes
              </label>
              <textarea
                rows={3}
                placeholder="Share your timeline, target neighborhoods, or specific property interests..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-[#181818] border border-[#2e2e2e] focus:border-white focus:outline-none px-4 py-3 text-sm text-white placeholder-neutral-600 transition-colors resize-none"
              />
            </div>

            {status === "error" && (
              <div className="p-3 bg-red-950/40 border border-red-800/60 text-red-300 text-xs font-mono">
                {feedbackMessage}
              </div>
            )}

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full sm:w-auto px-8 py-3.5 bg-white text-black text-xs font-medium tracking-[0.2em] uppercase hover:bg-neutral-200 transition-colors flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{status === "submitting" ? "TRANSMITTING..." : "SUBMIT INQUIRY"}</span>
              </button>

              <div className="text-center sm:text-right text-[11px] font-mono text-neutral-400">
                Or direct email:{" "}
                <a
                  href="mailto:joe.velasco@cbrealty.com"
                  className="text-neutral-200 underline hover:text-white"
                >
                  joe.velasco@cbrealty.com
                </a>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
