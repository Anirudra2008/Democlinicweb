import type { Metadata } from 'next';
import React from 'react';
import { Calendar, Phone, Clock, MapPin, Check, ShieldCheck } from 'lucide-react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

export const metadata: Metadata = {
  title: 'Dermatosurgery, Mole & Wart Treatment in Delhi | Centre For Skin',
  description: 'Looking for dermatosurgery, mole, or wart removal in Delhi? Dr. Gaurav Nakra offers sterile radiofrequency ablation, excision, and cryotherapy.',
  alternates: {
    canonical: 'https://centreforskin.in/services/dermatosurgery-mole-wart-delhi',
  },
};

export default function Dermatosurgery() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is dermatosurgery and is it safe?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dermatosurgery refers to minor surgical procedures performed on the skin, scalp, or nails. It is highly safe when performed by a qualified dermatologist in a sterile operatory room under local anesthesia, ensuring minimal risk of infection."
        }
      },
      {
        "@type": "Question",
        "name": "Will mole removal leave a permanent scar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Any procedure that cuts or ablates the skin can leave a faint mark or scar. However, Dr. Nakra utilizes precise radiofrequency ablation for superficial moles and fine plastic closure sutures for deeper excisions to minimize scar visibility and ensure optimal healing."
        }
      },
      {
        "@type": "Question",
        "name": "How many sessions are needed to remove warts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most viral warts or skin tags are successfully removed in a single session of radiofrequency ablation or electrocautery. Deeper or multiple warts may occasionally require a follow-up session."
        }
      },
      {
        "@type": "Question",
        "name": "Is local anesthesia used during dermatosurgical procedures?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, local anesthesia (topical numbing or a small localized injection) is administered to ensure the treatment area is completely numb, making the procedure pain-free and comfortable for the patient."
        }
      }
    ]
  };

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
        "name": "Services",
        "item": "https://centreforskin.in/#departments"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Dermatosurgery",
        "item": "https://centreforskin.in/services/dermatosurgery-mole-wart-delhi"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />

      <main className="min-h-screen pt-28 pb-16 bg-[#C1E8FF]/10 text-left font-sans">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          {/* Header Banner */}
          <div className="bg-gradient-to-br from-[#021024] to-[#052659] text-white rounded-[32px] p-8 md:p-12 mb-12 shadow-2xl relative overflow-hidden">
            <div className="absolute w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,rgba(193,232,255,0.06)_0%,transparent_70%)] opacity-50 pointer-events-none" />
            <div className="relative z-10 max-w-3xl">
              <span className="font-sans text-xs md:text-sm font-bold text-[#7DA0CA] tracking-[0.2em] uppercase mb-3 block">
                Advanced Dermatosurgery Services
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black leading-tight mb-4">
                Dermatosurgery, Mole & Wart Treatment — Dr. Gaurav Nakra
              </h1>
              <p className="text-sm md:text-base text-[#C1E8FF] font-medium leading-relaxed mb-6">
                Remove unwanted moles, warts, skin tags, and cysts in a highly sterile operatory room using advanced radiofrequency ablation and micro-excision.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Content Column */}
            <div className="lg:col-span-8 flex flex-col gap-8">
              
              {/* Understanding the Treatment */}
              <div className="bg-white/80 backdrop-blur-md border border-white p-6 md:p-8 rounded-[28px] shadow-xl">
                <h2 className="font-serif text-2xl font-black text-[#021024] mb-4 pb-2 border-b border-[#7DA0CA]/25">
                  Scope of Dermatosurgical Procedures
                </h2>
                <div className="text-sm text-[#052659]/80 leading-relaxed font-medium flex flex-col gap-4">
                  <p>
                    Benign skin growths, warts, moles, cysts, and skin tags can cause cosmetic concerns or physical discomfort. Unlike non-medical salons, <strong>Centre For Skin</strong> approaches these issues surgically with clinical precision and sterile protocols.
                  </p>
                  <p>
                    Senior dermatologist and dermatosurgeon <strong>Dr. Gaurav Nakra</strong> performs these minor surgeries manually in our dedicated operatory room. We offer several advanced techniques:
                  </p>
                  <ul className="list-disc pl-5 flex flex-col gap-2">
                    <li><strong>Radiofrequency (RF) Ablation:</strong> Utilizing high-frequency electrical currents to vaporize superficial warts, skin tags, and seborrheic keratosis with minimal bleeding and rapid healing.</li>
                    <li><strong>Surgical Excision:</strong> For deeper moles, epidermoid cysts, or lipomas. The growth is excised, and the wound is closed using fine plastic surgery sutures to minimize scar visibility.</li>
                    <li><strong>Cryotherapy:</strong> Freezing lesions using liquid nitrogen, ideal for viral warts or selected benign growths.</li>
                    <li><strong>Medical Nail Surgery:</strong> Partial or total nail avulsion for ingrown toenails, ensuring permanent correction of the nail matrix.</li>
                  </ul>
                </div>
              </div>

              {/* Who it is for */}
              <div className="bg-white/80 backdrop-blur-md border border-white p-6 md:p-8 rounded-[28px] shadow-xl">
                <h2 className="font-serif text-2xl font-black text-[#021024] mb-4 pb-2 border-b border-[#7DA0CA]/25">
                  Are You a Candidate?
                </h2>
                <div className="text-sm text-[#052659]/80 leading-relaxed font-medium flex flex-col gap-4">
                  <p>
                    Dermatosurgery is recommended for:
                  </p>
                  <ul className="list-disc pl-5 flex flex-col gap-2">
                    <li>Unwanted, raised moles or flat dark spots on the face or body.</li>
                    <li>Viral warts (HPV-related) that are spreading or painful.</li>
                    <li>Skin tags, milia, and seborrheic keratosis causing cosmetic irritation.</li>
                    <li>Ingrown toenails with chronic infection or swelling.</li>
                  </ul>
                  <p>
                    Dr. Nakra performs a dermoscopic examination prior to any excision to ensure the growth is completely benign.
                  </p>
                </div>
              </div>

              {/* Process & Recovery */}
              <div className="bg-white/80 backdrop-blur-md border border-white p-6 md:p-8 rounded-[28px] shadow-xl">
                <h2 className="font-serif text-2xl font-black text-[#021024] mb-4 pb-2 border-b border-[#7DA0CA]/25">
                  Procedure Workflow & Post-Surgical Care
                </h2>
                <div className="text-sm text-[#052659]/80 leading-relaxed font-medium flex flex-col gap-4">
                  <h3 className="font-serif text-base font-black text-[#021024]">Procedure Steps:</h3>
                  <ol className="list-decimal pl-5 flex flex-col gap-2">
                    <li><strong>Sterilization:</strong> The target area is prepped with povidone-iodine and draped.</li>
                    <li><strong>Local Anesthetic:</strong> A small local injection of lidocaine is administered, making the procedure completely painless.</li>
                    <li><strong>Excision/Ablation:</strong> Dr. Nakra manually removes the lesion using the selected surgical or RF method.</li>
                    <li><strong>Dressing:</strong> An antibiotic ointment and sterile dressing are applied to the wound.</li>
                  </ol>

                  <h3 className="font-serif text-base font-black text-[#021024] mt-4">Recovery Guidelines:</h3>
                  <ul className="list-disc pl-5 flex flex-col gap-2">
                    <li>Keep the wound dry for 24-48 hours. Apply prescribed antibiotic creams daily.</li>
                    <li>For RF ablation, a tiny scab will form; it will fall off naturally in 5 to 7 days. Do not scratch it.</li>
                    <li>For surgical excision, sutures are removed at the clinic in 7 to 10 days.</li>
                    <li>Apply physical sunscreen daily to avoid post-inflammatory hyperpigmentation on the healing site.</li>
                  </ul>
                </div>
              </div>

              {/* FAQs Section */}
              <div className="bg-white/80 backdrop-blur-md border border-white p-6 md:p-8 rounded-[28px] shadow-xl text-left">
                <h2 className="font-serif text-2xl font-black text-[#021024] mb-6 pb-2 border-b border-[#7DA0CA]/25">
                  Frequently Asked Questions (FAQs)
                </h2>
                <div className="flex flex-col gap-4">
                  {[
                    {
                      q: 'What is dermatosurgery and is it safe?',
                      a: 'Dermatosurgery refers to minor surgical procedures performed on the skin, scalp, or nails. It is highly safe when performed by a qualified dermatologist in a sterile operatory room under local anesthesia, ensuring minimal risk of infection.'
                    },
                    {
                      q: 'Will mole removal leave a permanent scar?',
                      a: 'Any procedure that cuts or ablates the skin can leave a faint mark or scar. However, Dr. Nakra utilizes precise radiofrequency ablation for superficial moles and fine plastic closure sutures for deeper excisions to minimize scar visibility and ensure optimal healing.'
                    },
                    {
                      q: 'How many sessions are needed to remove warts?',
                      a: 'Most viral warts or skin tags are successfully removed in a single session of radiofrequency ablation or electrocautery. Deeper or multiple warts may occasionally require a follow-up session.'
                    },
                    {
                      q: 'Is local anesthesia used during dermatosurgical procedures?',
                      a: 'Yes, local anesthesia (topical numbing or a small localized injection) is administered to ensure the treatment area is completely numb, making the procedure pain-free and comfortable for the patient.'
                    }
                  ].map((faq, index) => (
                    <div key={index} className="border border-[#7DA0CA]/15 rounded-2xl bg-white p-4.5 shadow-sm">
                      <h4 className="font-serif text-sm font-black text-[#052659] mb-2">{faq.q}</h4>
                      <p className="font-sans text-xs text-[#052659]/80 leading-relaxed font-semibold">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Booking CTA */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              
              <div className="bg-gradient-to-br from-[#021024] to-[#052659] text-white rounded-[28px] p-6 shadow-xl border border-white text-left flex flex-col gap-4">
                <span className="font-sans text-[10px] uppercase font-bold text-[#7DA0CA] tracking-wider font-bold">Appointment Desk</span>
                <div className="font-serif text-lg font-black leading-snug">Centre For Skin</div>
                
                <div className="flex items-start gap-3 mt-2">
                  <MapPin className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <p className="font-sans text-xs text-white leading-relaxed">
                    178, Basement, Saini Enclave, Near Karkardooma Metro Station, Anand Vihar, East Delhi, Delhi 110092
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#C1E8FF] shrink-0 mt-0.5" />
                  <div className="font-sans text-xs text-[#7DA0CA] font-bold">
                    <a href="tel:01146052234" className="text-white hover:underline block">011 4605 2234</a>
                    <a href="tel:+917042087962" className="text-white hover:underline block mt-0.5">+91 70420 87962</a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#C1E8FF] shrink-0 mt-0.5" />
                  <p className="font-sans text-xs text-white font-semibold">
                    Monday – Saturday: 12:30 PM – 7:30 PM
                  </p>
                </div>

                <a 
                  href="/#booking"
                  className="mt-4 w-full py-3.5 bg-white text-[#021024] hover:bg-[#C1E8FF] font-sans font-black text-xs uppercase tracking-wider text-center rounded-xl shadow-md transition-all font-bold"
                >
                  Book Appointment
                </a>
              </div>

              <div className="bg-white/80 backdrop-blur-md border border-white p-6 rounded-[24px] shadow-lg text-left">
                <h4 className="font-serif text-sm font-black text-[#021024] mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#5483B3]" />
                  <span>Clinical Standard</span>
                </h4>
                <ul className="flex flex-col gap-2.5 text-xs text-[#052659]/80 font-sans font-bold leading-normal">
                  <li className="flex gap-2">
                    <Check className="w-3.5 h-3.5 text-[#4ADE80] shrink-0" />
                    <span>Highly Sterile Operatory Room</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="w-3.5 h-3.5 text-[#4ADE80] shrink-0" />
                    <span>Minimal Scarring Sutures</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="w-3.5 h-3.5 text-[#4ADE80] shrink-0" />
                    <span>Precision Radiofrequency ablation</span>
                  </li>
                </ul>
              </div>

            </div>

          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
