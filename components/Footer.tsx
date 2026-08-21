'use client';

import React from 'react';

export default function Footer() {
  return (
    <footer 
      id="clinic-footer"
      className="bg-[#121316] text-white pt-16 pb-8 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12 text-left mb-16">
          
          {/* Logo and accreditation column */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 bg-transparent">
              <div className="w-9 h-9 rounded-xl overflow-hidden bg-black p-0.5 border border-white/20 flex items-center justify-center">
                <img src="/logo.png?v=2" alt="Centre For Skin Logo" className="w-full h-full object-contain" width={36} height={36} />
              </div>
              <div className="font-serif text-lg font-black tracking-widest text-white">
                Centre For Skin
              </div>
            </div>

            <p className="font-sans text-xs text-[#94A3B8] leading-relaxed">
              Comprehensive academic medical dermatology and precision hair transplantations. Direct licensed Delhi Medical Council registration 44068 under Senior Gold Medalist consultant.
            </p>

            {/* Verified member badges */}
            <div className="flex gap-2.5 flex-wrap mt-2">
              <span className="px-2.5 py-1 bg-white/5 border border-white/10 text-[#CBD5E1] font-mono text-[9px] font-bold rounded-md">
                IADVL FED
              </span>
              <span className="px-2.5 py-1 bg-white/5 border border-white/10 text-[#CBD5E1] font-mono text-[9px] font-bold rounded-md">
                IMA MEMBER
              </span>
              <span className="px-2.5 py-1 bg-white/5 border border-white/10 text-[#CBD5E1] font-mono text-[9px] font-bold rounded-md">
                HAIR RESTORATION
              </span>
            </div>
          </div>

          {/* Quick links & Locations directories column */}
          <div className="flex flex-col gap-4">
            <h5 className="font-serif text-sm font-black text-white uppercase tracking-wider border-l-2 border-[#1E64EC] pl-2.5">
              Target Locations
            </h5>
            <div className="flex flex-col gap-2.5 text-xs text-[#94A3B8] font-bold font-sans">
              <a href="/locations/karkardooma-dermatologist" className="hover:text-white transition-colors">Dermatologist in Karkardooma</a>
              <a href="/locations/preet-vihar-dermatologist" className="hover:text-white transition-colors">Dermatologist near Preet Vihar</a>
              <a href="/locations/laxmi-nagar-dermatologist" className="hover:text-white transition-colors">Dermatologist near Laxmi Nagar</a>
              <a href="/locations/nirman-vihar-dermatologist" className="hover:text-white transition-colors">Dermatologist near Nirman Vihar</a>
              <hr className="border-white/10 my-1" />
              <a href="/" className="hover:text-white transition-colors">Home Page</a>
              <a href="/doctor-gaurav-nakra" className="hover:text-white transition-colors">Dr. Gaurav Nakra Biography</a>
            </div>
          </div>

          {/* Specialties list column */}
          <div className="flex flex-col gap-4">
            <h5 className="font-serif text-sm font-black text-white uppercase tracking-wider border-l-2 border-[#1E64EC] pl-2.5">
              Specialized Treatments
            </h5>
            <div className="flex flex-col gap-2.5 text-xs text-[#94A3B8] font-bold font-sans">
              <a href="/services/laser-hair-reduction-delhi" className="hover:text-white transition-colors">Laser Hair Reduction</a>
              <a href="/services/acne-scar-treatment-delhi" className="hover:text-white transition-colors">Acne Scar Treatment</a>
              <a href="/services/hair-transplant-delhi" className="hover:text-white transition-colors">Hair Transplant & PRP</a>
              <a href="/services/vitiligo-treatment-delhi" className="hover:text-white transition-colors">Vitiligo Treatment</a>
              <a href="/services/chemical-peels-delhi" className="hover:text-white transition-colors">Chemical Peels & Resurfacing</a>
              <a href="/services/pediatric-dermatology-delhi" className="hover:text-white transition-colors">Pediatric Dermatology</a>
              <a href="/services/eczema-psoriasis-rosacea-delhi" className="hover:text-white transition-colors">Eczema & Psoriasis Care</a>
              <a href="/services/dermatosurgery-mole-wart-delhi" className="hover:text-white transition-colors">Dermatosurgery (Moles/Warts)</a>
            </div>
          </div>

          {/* Direct coordinate directions listing column */}
          <div className="flex flex-col gap-4">
            <h5 className="font-serif text-sm font-black text-white uppercase tracking-wider border-l-2 border-[#1E64EC] pl-2.5">
              Booking Ingress
            </h5>
            <div className="text-xs text-[#94A3B8] leading-relaxed flex flex-col gap-3 font-sans font-bold">
              <div>
                <span className="text-white block font-serif">Karkardooma Center:</span>
                178, Basement, Saini Enclave, Near Karkardooma Metro Station, Anand Vihar, East Delhi, Delhi 110092
              </div>
              <div>
                <span className="text-white block font-serif">Direct Appointment Line:</span>
                PH: 011 4605 2234
              </div>
              <div>
                <span className="text-white block font-serif">Operating Hours:</span>
                Monday - Saturday: 12:30 PM — 7:30 PM
              </div>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <p className="font-sans text-[11px] text-[#94A3B8] font-semibold">
            &copy; 2026 Centre For Skin — Dr. Gaurav Nakra. All rights reserved. | Medical License Registration: Delhi Medical Council No. 44068.
          </p>
          <div className="flex gap-4 text-[11px] text-[#94A3B8] font-semibold">
            <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="/terms-of-use" className="hover:text-white transition-colors">Terms of Use</a>
            <span>|</span>
            <a href="/medical-disclaimer" className="hover:text-white transition-colors">Medical Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
