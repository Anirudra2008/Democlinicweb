import type { Metadata } from 'next';
import React from 'react';
import { Calendar, Phone, Clock, MapPin, Check, ShieldCheck } from 'lucide-react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

export const metadata: Metadata = {
  title: 'Vitiligo Treatment in Delhi | Centre For Skin',
  description: 'Seeking advanced vitiligo treatment in Delhi? Dr. Gaurav Nakra offers medical stabilization, phototherapy, and suction blister grafting with clinical safety.',
  alternates: {
    canonical: 'https://centreforskin.in/services/vitiligo-treatment-delhi',
  },
};

export default function VitiligoTreatment() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What causes vitiligo and can it be cured?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Vitiligo is an autoimmune condition where the body's immune system mistakenly attacks melanocytes (pigment-producing cells). While there is no single permanent cure, vitiligo can be successfully stabilized medically, and repigmentation of white patches can be achieved using targeted therapies and surgical grafting."
        }
      },
      {
        "@type": "Question",
        "name": "Who is a candidate for vitiligo grafting surgery?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Surgical grafting is suitable only for stable vitiligo. This means no new patches have appeared, and existing patches have not expanded in size for at least 12 consecutive months. Active vitiligo must be managed medically first."
        }
      },
      {
        "@type": "Question",
        "name": "What is suction blister skin grafting?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Suction blister grafting is a precise dermatosurgical procedure where a thin blister is created on a normal skin site (like the thigh) using gentle suction. The roof of the blister, containing healthy melanocytes, is harvested and transplanted onto the prepared white patch. It offers excellent cosmetic matching."
        }
      },
      {
        "@type": "Question",
        "name": "Is vitiligo contagious?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Vitiligo is not contagious, infectious, or transmissible in any way. It is strictly an autoimmune skin disorder."
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
        "name": "Vitiligo Treatment",
        "item": "https://centreforskin.in/services/vitiligo-treatment-delhi"
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
                Clinical Dermatology Services
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black leading-tight mb-4">
                Vitiligo Treatment & Grafting — Dr. Gaurav Nakra
              </h1>
              <p className="text-sm md:text-base text-[#C1E8FF] font-medium leading-relaxed mb-6">
                Achieve patch stabilization and natural skin repigmentation using advanced medical topicals, phototherapy, and suction blister grafting.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Content Column */}
            <div className="lg:col-span-8 flex flex-col gap-8">
              
              {/* Understanding the Treatment */}
              <div className="bg-white/80 backdrop-blur-md border border-white p-6 md:p-8 rounded-[28px] shadow-xl">
                <h2 className="font-serif text-2xl font-black text-[#021024] mb-4 pb-2 border-b border-[#7DA0CA]/25">
                  Comprehensive Management of Vitiligo
                </h2>
                <div className="text-sm text-[#052659]/80 leading-relaxed font-medium flex flex-col gap-4">
                  <p>
                    Vitiligo is a dermatological condition characterized by the loss of skin pigment, resulting in white patches on various parts of the body. It occurs when the immune system mistakenly attacks melanocytes, the cells responsible for producing skin color (melanin).
                  </p>
                  <p>
                    At <strong>Centre For Skin</strong>, we address vitiligo with clinical honesty. We do not make false claims of instant cures; rather, we design structured protocols based on scientific guidelines to stabilize active patches and restore pigment to stable areas.
                  </p>
                  <p>
                    Senior dermatologist <strong>Dr. Gaurav Nakra</strong> provides tailored medical and surgical solutions including:
                  </p>
                  <ul className="list-disc pl-5 flex flex-col gap-2">
                    <li><strong>Medical Management:</strong> Prescription of topical immunomodulators, corticosteroids, and oral medications to arrest spreading.</li>
                    <li><strong>Targeted Phototherapy:</strong> Narrowband UVB light therapy to stimulate melanocyte activity and induce pigmentation.</li>
                    <li><strong>Suction Blister Skin Grafting:</strong> For stable vitiligo patches, we harvest thin epidermal grafts from healthy donor areas and transplant them onto the white patches under sterile surgical conditions.</li>
                    <li><strong>Punch Grafting:</strong> Small circular grafts of healthy skin are placed into the recipient area to act as pigment reservoirs.</li>
                  </ul>
                </div>
              </div>

              {/* Who it is for */}
              <div className="bg-white/80 backdrop-blur-md border border-white p-6 md:p-8 rounded-[28px] shadow-xl">
                <h2 className="font-serif text-2xl font-black text-[#021024] mb-4 pb-2 border-b border-[#7DA0CA]/25">
                  Are You a Candidate for Vitiligo Grafting?
                </h2>
                <div className="text-sm text-[#052659]/80 leading-relaxed font-medium flex flex-col gap-4">
                  <p>
                    Surgical options like suction blister grafting are highly effective, but candidacy depends on vitiligo stability:
                  </p>
                  <ul className="list-disc pl-5 flex flex-col gap-2">
                    <li><strong>Stable Vitiligo:</strong> The white patches must remain unchanged in size and no new spots should appear for at least 12 consecutive months.</li>
                    <li><strong>No Koebner Phenomenon:</strong> No white patches should form on sites of minor skin injury or friction.</li>
                  </ul>
                  <p>
                    If your vitiligo is currently active or spreading, Dr. Nakra will focus on medical therapy to stabilize the condition before considering surgical options.
                  </p>
                </div>
              </div>

              {/* Process & Recovery */}
              <div className="bg-white/80 backdrop-blur-md border border-white p-6 md:p-8 rounded-[28px] shadow-xl">
                <h2 className="font-serif text-2xl font-black text-[#021024] mb-4 pb-2 border-b border-[#7DA0CA]/25">
                  Surgical Steps & Post-Operative Care
                </h2>
                <div className="text-sm text-[#052659]/80 leading-relaxed font-medium flex flex-col gap-4">
                  <h3 className="font-serif text-base font-black text-[#021024]">Suction Blister Grafting Steps:</h3>
                  <ol className="list-decimal pl-5 flex flex-col gap-2">
                    <li><strong>Donor Preparation:</strong> Gentle suction is applied to a healthy skin area (like the thigh) to create clean, sterile blisters.</li>
                    <li><strong>Recipient Preparation:</strong> The white vitiligo patch is gently abraded to receive the transplant.</li>
                    <li><strong>Graft Placement:</strong> The blister roof, containing active melanocytes, is harvested and laid over the recipient site.</li>
                    <li><strong>Dressing:</strong> A sterile pressure dressing is applied to keep the graft in place.</li>
                  </ol>

                  <h3 className="font-serif text-base font-black text-[#021024] mt-4">Recovery Guidelines:</h3>
                  <ul className="list-disc pl-5 flex flex-col gap-2">
                    <li>Keep the dressing dry and clean for 7 to 10 days until removal at the clinic.</li>
                    <li>Avoid friction, stretching, or pressure on the grafted area.</li>
                    <li>Once the dressing is removed, mild targeted phototherapy or sun exposure may be advised to stimulate pigment spread.</li>
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
                      q: 'What causes vitiligo and can it be cured?',
                      a: 'Vitiligo is an autoimmune condition where the body\'s immune system mistakenly attacks melanocytes (pigment-producing cells). While there is no single permanent cure, vitiligo can be successfully stabilized medically, and repigmentation of white patches can be achieved using targeted therapies and surgical grafting.'
                    },
                    {
                      q: 'Who is a candidate for vitiligo grafting surgery?',
                      a: 'Surgical grafting is suitable only for stable vitiligo. This means no new patches have appeared, and existing patches have not expanded in size for at least 12 consecutive months. Active vitiligo must be managed medically first.'
                    },
                    {
                      q: 'What is suction blister skin grafting?',
                      a: 'Suction blister grafting is a precise dermatosurgical procedure where a thin blister is created on a normal skin site (like the thigh) using gentle suction. The roof of the blister, containing healthy melanocytes, is harvested and transplanted onto the prepared white patch. It offers excellent cosmetic matching.'
                    },
                    {
                      q: 'Is vitiligo contagious?',
                      a: 'No. Vitiligo is not contagious, infectious, or transmissible in any way. It is strictly an autoimmune skin disorder.'
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
                  <span>EEAT Compliance</span>
                </h4>
                <ul className="flex flex-col gap-2.5 text-xs text-[#052659]/80 font-sans font-bold leading-normal">
                  <li className="flex gap-2">
                    <Check className="w-3.5 h-3.5 text-[#4ADE80] shrink-0" />
                    <span>Realistic Recovery Windows</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="w-3.5 h-3.5 text-[#4ADE80] shrink-0" />
                    <span>Gold Medalist Diagnostic Accuracy</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="w-3.5 h-3.5 text-[#4ADE80] shrink-0" />
                    <span>Autologous Blister Harvesting</span>
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
