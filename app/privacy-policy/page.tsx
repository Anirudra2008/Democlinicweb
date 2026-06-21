import type { Metadata } from 'next';
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy — Centre For Skin Delhi',
  description: 'Read the privacy policy of Centre For Skin. Learn how we handle patient data, online appointment coordinates, and respect data privacy guidelines.',
  alternates: {
    canonical: 'https://centreforskin.in/privacy-policy',
  },
};

export default function PrivacyPolicy() {
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
        "name": "Privacy Policy",
        "item": "https://centreforskin.in/privacy-policy"
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
            Privacy Policy
          </h1>
          
          <div className="text-sm text-[#052659]/80 leading-relaxed flex flex-col gap-6 font-medium">
            <p>
              At <strong>Centre For Skin</strong>, we value the trust you place in us when sharing your personal information. This Privacy Policy describes how we collect, use, and protect your information when you use our website or request an appointment.
            </p>

            <h2 className="text-xl font-serif font-black text-[#021024] mt-4">1. Information We Collect</h2>
            <p>
              When you request an appointment through our online booking system or contact us directly, we may collect the following personal information:
            </p>
            <ul className="list-disc pl-5 flex flex-col gap-2">
              <li>Full Name</li>
              <li>Mobile Number</li>
              <li>Email Address</li>
              <li>Preferred consultation dates and departments</li>
              <li>Brief symptom descriptions or medical queries</li>
            </ul>

            <h2 className="text-xl font-serif font-black text-[#021024] mt-4">2. How We Use Your Information</h2>
            <p>
              The information we collect is used solely to:
            </p>
            <ul className="list-disc pl-5 flex flex-col gap-2">
              <li>Confirm and schedule your appointment slot.</li>
              <li>Get in touch with you regarding your medical consultation.</li>
              <li>Answer queries or send requested details regarding dermatological treatments.</li>
            </ul>
            <p>
              We do not sell, rent, or trade your personal information to third-party marketing companies.
            </p>

            <h2 className="text-xl font-serif font-black text-[#021024] mt-4">3. Data Security & Storage</h2>
            <p>
              We implement industry-standard security measures to safeguard your personal data. All form submissions are encrypted during transmission and are received in a secure medical database accessible only by authorized clinic staff.
            </p>

            <h2 className="text-xl font-serif font-black text-[#021024] mt-4">4. Cookies and Web Analytics</h2>
            <p>
              We may utilize cookies to understand site traffic patterns, optimize page speeds, and improve user experiences. These cookies do not store any identifiable medical records or personal details.
            </p>

            <h2 className="text-xl font-serif font-black text-[#021024] mt-4">5. Patient Consent for Before/After Photos</h2>
            <p>
              Any clinical or before/after photography shown during in-clinic consultations is displayed only with the explicit, written consent of the patient. We do not publish patient photographs on our public website without full consent and voluntary validation.
            </p>

            <h2 className="text-xl font-serif font-black text-[#021024] mt-4">6. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or wish to request the deletion of any contact information you submitted online, please contact us at:
            </p>
            <p className="bg-[#C1E8FF]/20 border border-[#7DA0CA]/10 p-4 rounded-xl font-mono text-xs">
              <strong>Centre For Skin — Dr. Gaurav Nakra Clinic</strong><br />
              178, Basement, Saini Enclave, Near Karkardooma Metro, Anand Vihar, East Delhi, Delhi 110092<br />
              Email: info@centreforskin.in<br />
              Phone: 011 4605 2234 / +91 70420 87962
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
