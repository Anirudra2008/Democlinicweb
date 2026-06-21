import type { Metadata } from 'next';
import React from 'react';
import { Calendar, Phone, Clock, MapPin, Check, ShieldCheck } from 'lucide-react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

export const metadata: Metadata = {
  title: 'Hair Transplant, DHI & PRP Treatment in Delhi | Centre For Skin',
  description: 'Searching for certified DHI hair transplant or PRP hair therapy in Delhi? Dr. Gaurav Nakra is a certified specialist offering safe hair restorations.',
  alternates: {
    canonical: 'https://centreforskin.in/services/hair-transplant-delhi',
  },
};

export default function HairTransplant() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the difference between DHI and traditional FUE?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Direct Hair Implantation (DHI) utilizes a specialized patented tool (the DHI Implanter) to control the depth, angle, and direction of each follicle placement without creating pre-made slits, resulting in higher graft survival rates and a more natural-looking hairline compared to traditional FUE."
        }
      },
      {
        "@type": "Question",
        "name": "How many PRP sessions are required to control hair fall?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "PRP therapy typically requires 4 to 6 monthly sessions to observe visible reduction in hair fall and improvements in hair follicle thickness and density. Periodic maintenance sessions are advised every 6 months."
        }
      },
      {
        "@type": "Question",
        "name": "Is there any pain during a hair transplant surgery?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The procedure is performed under local anesthesia, which numbs the donor and recipient scalp areas. Patients feel a mild stinging sensation during the initial anesthetic administration, after which the procedure itself is pain-free."
        }
      },
      {
        "@type": "Question",
        "name": "When can I see the final results of a hair transplant?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Initial hair growth starts around 3 to 4 months post-implant. The complete density and final aesthetic results are typically visible between 9 to 12 months after the procedure."
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
        "name": "Hair Transplant & PRP",
        "item": "https://centreforskin.in/services/hair-transplant-delhi"
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
                Hair Restoration Clinic
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black leading-tight mb-4">
                Hair Transplant, DHI & PRP Hair Treatment — Dr. Gaurav Nakra
              </h1>
              <p className="text-sm md:text-base text-[#C1E8FF] font-medium leading-relaxed mb-6">
                Scientifically backed hair restoration protocols combining elite DHI techniques and premium Platelet-Rich Plasma (PRP) therapies under a certified specialist.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Content Column */}
            <div className="lg:col-span-8 flex flex-col gap-8">
              
              {/* Understanding the Treatment */}
              <div className="bg-white/80 backdrop-blur-md border border-white p-6 md:p-8 rounded-[28px] shadow-xl">
                <h2 className="font-serif text-2xl font-black text-[#021024] mb-4 pb-2 border-b border-[#7DA0CA]/25">
                  Scientific Hair Restoration: DHI & PRP In Detail
                </h2>
                <div className="text-sm text-[#052659]/80 leading-relaxed font-medium flex flex-col gap-4">
                  <p>
                    Hair loss, thinning, and male/female pattern alopecia can impact confidence and comfort. At <strong>Centre For Skin</strong>, we address hair thinning with medically verified, customized clinical workflows. We do not support exaggerated claims or false guarantees; rather, we provide honest assessments of graft viability and realistic regrowth expectations.
                  </p>
                  <p>
                    <strong>Dr. Gaurav Nakra</strong> is a <strong>DHI Certified Specialist</strong>, holding official training credentials in hair transplantation design and extraction. We offer two primary modalities:
                  </p>
                  <ul className="list-disc pl-5 flex flex-col gap-2">
                    <li><strong>Direct Hair Implantation (DHI):</strong> A refined hair transplant method where individual hair follicles are extracted from the donor zone (back of the scalp) and immediately implanted into the balding area using a single-use implanter tool. This minimizes handling, protects graft structure, and guarantees precise placement angles.</li>
                    <li><strong>PRP (Platelet-Rich Plasma) Therapy:</strong> A non-surgical clinical procedure that extracts active platelets from the patient&apos;s own blood, concentrates them using a clinical centrifuge, and injects them back into the scalp. These platelets release growth factors that stimulate dormant hair follicles, increase blood supply to the roots, and reverse hair thinning.</li>
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
                    Hair restoration treatments are suitable for:
                  </p>
                  <ul className="list-disc pl-5 flex flex-col gap-2">
                    <li><strong>Male Pattern Baldness (Androgenetic Alopecia):</strong> Grade 2 to Grade 7 hair loss with stable donor zones.</li>
                    <li><strong>Female Pattern Thinning:</strong> Diffuse thinning along the central parting area.</li>
                    <li><strong>Alopecia Areata:</strong> Selected cases that are medically stabilized.</li>
                  </ul>
                  <p>
                    During your diagnostic consultation, Dr. Nakra performs a computerized trichoscopy analysis to evaluate your hair density, follicle health, and donor zone capacity.
                  </p>
                </div>
              </div>

              {/* Process & Recovery */}
              <div className="bg-white/80 backdrop-blur-md border border-white p-6 md:p-8 rounded-[28px] shadow-xl">
                <h2 className="font-serif text-2xl font-black text-[#021024] mb-4 pb-2 border-b border-[#7DA0CA]/25">
                  Clinical Steps & Post-Procedure Recovery
                </h2>
                <div className="text-sm text-[#052659]/80 leading-relaxed font-medium flex flex-col gap-4">
                  <h3 className="font-serif text-base font-black text-[#021024]">DHI Procedure Workflow:</h3>
                  <ol className="list-decimal pl-5 flex flex-col gap-2">
                    <li><strong>Design & Mapping:</strong> The recipient hairline is designed and mapped out according to natural facial symmetry.</li>
                    <li><strong>Extraction:</strong> Follicular units are extracted one-by-one from the donor area under local anesthesia.</li>
                    <li><strong>Implantation:</strong> Grafts are placed directly into the recipient scalp using specialized implanter pens, ensuring exact angling and depth.</li>
                  </ol>

                  <h3 className="font-serif text-base font-black text-[#021024] mt-4">Recovery Guidelines:</h3>
                  <p>
                    A hair transplant is a minor, minimally invasive procedure with predictable recovery guidelines:
                  </p>
                  <ul className="list-disc pl-5 flex flex-col gap-2">
                    <li>Mild swelling on the forehead or scalp may occur for 3 to 5 days.</li>
                    <li>Tiny crusts will form around the implanted hairs; these fall off naturally in 7 to 10 days.</li>
                    <li>Avoid strenuous exercise, heavy lifting, and swimming for 2 weeks.</li>
                    <li>Follow the prescribed washing protocol carefully to maintain graft cleanliness.</li>
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
                      q: 'What is the difference between DHI and traditional FUE?',
                      a: 'Direct Hair Implantation (DHI) utilizes a specialized patented tool (the DHI Implanter) to control the depth, angle, and direction of each follicle placement without creating pre-made slits, resulting in higher graft survival rates and a more natural-looking hairline compared to traditional FUE.'
                    },
                    {
                      q: 'How many PRP sessions are required to control hair fall?',
                      a: 'PRP therapy typically requires 4 to 6 monthly sessions to observe visible reduction in hair fall and improvements in hair follicle thickness and density. Periodic maintenance sessions are advised every 6 months.'
                    },
                    {
                      q: 'Is there any pain during a hair transplant surgery?',
                      a: 'The procedure is performed under local anesthesia, which numbs the donor and recipient scalp areas. Patients feel a mild stinging sensation during the initial anesthetic administration, after which the procedure itself is pain-free.'
                    },
                    {
                      q: 'When can I see the final results of a hair transplant?',
                      a: 'Initial hair growth starts around 3 to 4 months post-implant. The complete density and final aesthetic results are typically visible between 9 to 12 months after the procedure.'
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
                  <span>DHI Certified Center</span>
                </h4>
                <ul className="flex flex-col gap-2.5 text-xs text-[#052659]/80 font-sans font-bold leading-normal">
                  <li className="flex gap-2">
                    <Check className="w-3.5 h-3.5 text-[#4ADE80] shrink-0" />
                    <span>DHI Certified Surgeon</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="w-3.5 h-3.5 text-[#4ADE80] shrink-0" />
                    <span>Highly Sterile Operation Theater</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="w-3.5 h-3.5 text-[#4ADE80] shrink-0" />
                    <span>No Pre-made Scalp Slits</span>
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
