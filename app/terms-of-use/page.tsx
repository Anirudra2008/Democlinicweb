import type { Metadata } from 'next';
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: 'Terms of Use — Centre For Skin Delhi',
  description: 'Read the terms of use for Centre For Skin website. Understand online scheduling coordinates and guidelines for medical content.',
  alternates: {
    canonical: 'https://centreforskin.in/terms-of-use',
  },
};

export default function TermsOfUse() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://centreforskin.in"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Terms of Use",
        "item": "https://centreforskin.in/terms-of-use"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />

      <main className="min-h-screen pt-28 pb-16 bg-[#C1E8FF]/10 text-left font-sans">
        <div className="max-w-4xl mx-auto px-4 md:px-8 bg-white/80 backdrop-blur-md rounded-[32px] p-6 md:p-10 border border-white shadow-xl">
          <h1 className="text-3xl font-serif font-black text-[#021024] mb-6 pb-4 border-b border-[#7DA0CA]/25">
            Terms of Use
          </h1>
          
          <div className="text-sm text-[#052659]/80 leading-relaxed flex flex-col gap-6 font-medium">
            <p>
              Welcome to the website of <strong>Centre For Skin</strong>. By accessing or using this website, you agree to comply with and be bound by the following Terms of Use. If you do not agree to these terms, please do not use this site.
            </p>

            <h2 className="text-xl font-serif font-black text-[#021024] mt-4">1. Use of Site Information</h2>
            <p>
              All content provided on this website, including text, graphics, images, and descriptions of medical services, is for informational and educational purposes only. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment.
            </p>

            <h2 className="text-xl font-serif font-black text-[#021024] mt-4">2. No Doctor-Patient Relationship</h2>
            <p>
              Using this website, submitting an appointment request form, or contacting us via email/WhatsApp does not establish a formal doctor-patient relationship between you and Dr. Gaurav Nakra. A formal relationship is only established during an in-person diagnostic consultation at the clinic.
            </p>

            <h2 className="text-xl font-serif font-black text-[#021024] mt-4">3. Online Booking & Consultations</h2>
            <p>
              Online scheduling requests submitted through our form are subject to clinic operating availability. A submission does not guarantee a confirmed appointment slot. The clinic desk will contact you via mobile callback or WhatsApp to confirm your exact appointment timing.
            </p>

            <h2 className="text-xl font-serif font-black text-[#021024] mt-4">4. Intellectual Property</h2>
            <p>
              The branding, logo, textual copy, and layout of this website are the intellectual property of Centre For Skin. Unauthorized duplication, framing, or usage of our content without written permission is strictly prohibited.
            </p>

            <h2 className="text-xl font-serif font-black text-[#021024] mt-4">5. Disclaimer of Liability</h2>
            <p>
              Centre For Skin and Dr. Gaurav Nakra are not liable for any decisions made or actions taken based on the information provided on this website. For any active skin or hair condition, always seek immediate, in-person advice from a qualified dermatologist.
            </p>

            <h2 className="text-xl font-serif font-black text-[#021024] mt-4">6. Modification of Terms</h2>
            <p>
              We reserve the right to modify these Terms of Use at any time. Continued use of this website after changes are posted constitutes your acceptance of the revised terms.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
