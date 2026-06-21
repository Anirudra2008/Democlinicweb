import type { Metadata } from 'next';
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: 'Medical Disclaimer — Centre For Skin Delhi',
  description: 'Read the medical disclaimer for Centre For Skin. Our website content is for educational purposes and is not a substitute for professional medical care.',
  alternates: {
    canonical: 'https://centreforskin.in/medical-disclaimer',
  },
};

export default function MedicalDisclaimer() {
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
        "name": "Medical Disclaimer",
        "item": "https://centreforskin.in/medical-disclaimer"
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
            Medical Disclaimer
          </h1>
          
          <div className="text-sm text-[#052659]/80 leading-relaxed flex flex-col gap-6 font-medium">
            <p className="text-red-600/90 font-bold border-l-4 border-red-500 pl-4 py-2 bg-red-50/50 rounded-r-lg">
              IMPORTANT NOTICE: The information provided on this website is for general educational and reference purposes only. It is not intended to replace a direct clinical consultation with a qualified dermatologist.
            </p>

            <h2 className="text-xl font-serif font-black text-[#021024] mt-4">1. No Medical Advice</h2>
            <p>
              The content on this website, including but not limited to information on treatments (such as acne scar laser resurfacing, hair transplantation, PRP therapies, chemical peels, and pediatric skin care), recovery steps, expectations, and FAQs, does not constitute professional medical advice, diagnosis, or treatment.
            </p>

            <h2 className="text-xl font-serif font-black text-[#021024] mt-4">2. Need for In-Person Evaluation</h2>
            <p>
              Skin and hair disorders vary widely based on individual health profiles, skin types (Fitzpatrick scale), and specific symptoms. An accurate diagnosis and safe treatment plan can only be determined through a physical examination and structured history-taking by Dr. Gaurav Nakra in a clinical environment.
            </p>

            <h2 className="text-xl font-serif font-black text-[#021024] mt-4">3. Treatment Outcomes & Guarantees</h2>
            <p>
              Dermatological and aesthetic procedures yield individual results. We do not provide exaggerated claims or absolute guarantees of "cures" or "zero-risk" treatments. All surgical and non-surgical procedures are explained honestly at Centre For Skin, ensuring patients understand the clinical expectations, recovery times, and potential risks before consenting to care.
            </p>

            <h2 className="text-xl font-serif font-black text-[#021024] mt-4">4. Emergencies & Acute Conditions</h2>
            <p>
              If you are experiencing a medical emergency, acute severe skin reactions, severe drug allergies, or severe infection symptoms, do not rely on this website. Please consult a physician immediately or visit the emergency room of your nearest hospital.
            </p>

            <h2 className="text-xl font-serif font-black text-[#021024] mt-4">5. DMC & IMA Compliance</h2>
            <p>
              This website is designed and maintained in compliance with the guidelines set forth by the Delhi Medical Council (DMC) and the Indian Medical Association (IMA) regarding medical practitioner websites, ensuring truthful representations of doctor credentials and clinic specializations.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
