import type { Metadata } from 'next';
import React from 'react';
import { Calendar, Phone, Clock, MapPin, Check, ShieldCheck } from 'lucide-react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

export const metadata: Metadata = {
  title: 'Laser Hair Reduction in Delhi | Centre For Skin',
  description: 'Looking for safe laser hair reduction in Delhi? Dr. Gaurav Nakra offers US-FDA approved triple-wavelength diode lasers, customized for all skin types.',
  alternates: {
    canonical: 'https://centreforskin.in/services/laser-hair-reduction-delhi',
  },
};

export default function LaserHairReduction() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is laser hair reduction permanent?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Laser hair reduction achieves long-term reduction in hair density and growth speed. Most patients achieve 80% to 90% hair reduction. The remaining hairs become extremely fine and light. Maintenance sessions once or twice a year may be required."
        }
      },
      {
        "@type": "Question",
        "name": "How many sessions are required for laser hair reduction?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Typically, 6 to 8 sessions spaced 4 to 6 weeks apart are recommended. This is because lasers only target hair follicles in their active growth phase (anagen phase), requiring multiple cycles to cover all follicles."
        }
      },
      {
        "@type": "Question",
        "name": "Are there any side effects of laser hair reduction?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Side effects are rare when performed under the supervision of a qualified dermatologist. Mild redness and swelling (peri-follicular edema) resembling a light sunburn may occur for a few hours. Sunscreen application is critical to avoid pigmentation."
        }
      },
      {
        "@type": "Question",
        "name": "Can laser hair reduction be done on sensitive facial skin?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our triple-wavelength diode lasers feature advanced cooling tips that protect sensitive skin barriers, making it safe for delicate facial areas including the upper lip, chin, and jawline."
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
        "name": "Laser Hair Reduction",
        "item": "https://centreforskin.in/services/laser-hair-reduction-delhi"
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
                Advanced Laser Treatments
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black leading-tight mb-4">
                Laser Hair Reduction in Delhi — Dr. Gaurav Nakra
              </h1>
              <p className="text-sm md:text-base text-[#C1E8FF] font-medium leading-relaxed mb-6">
                Achieve smooth skin with US-FDA approved triple-wavelength diode lasers, carefully configured for safe results on Indian skin tones.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Content Column */}
            <div className="lg:col-span-8 flex flex-col gap-8">
              
              {/* Understanding the Treatment */}
              <div className="bg-white/80 backdrop-blur-md border border-white p-6 md:p-8 rounded-[28px] shadow-xl">
                <h2 className="font-serif text-2xl font-black text-[#021024] mb-4 pb-2 border-b border-[#7DA0CA]/25">
                  How Laser Hair Reduction Works
                </h2>
                <div className="text-sm text-[#052659]/80 leading-relaxed font-medium flex flex-col gap-4">
                  <p>
                    Unwanted facial and body hair can be a source of constant grooming hassle. Traditional methods like waxing, shaving, threading, and depilatory creams provide only temporary relief and frequently lead to ingrown hairs, folliculitis, or skin irritation.
                  </p>
                  <p>
                    At <strong>Centre For Skin</strong>, we utilize gold-standard <strong>triple-wavelength diode laser systems</strong> (combining 755nm, 808nm, and 1064nm wavelengths). This technology targets the melanin pigment in the hair follicles under the skin. The laser energy is absorbed by the follicle and converted to heat, safely disabling the root without damaging the surrounding skin tissue.
                  </p>
                  <p>
                    All laser sessions are conducted under the strict guidance of senior dermatologist <strong>Dr. Gaurav Nakra</strong>, ensuring the settings are accurately calibrated based on your specific Fitzpatrick skin scale type.
                  </p>
                </div>
              </div>

              {/* Who it is for */}
              <div className="bg-white/80 backdrop-blur-md border border-white p-6 md:p-8 rounded-[28px] shadow-xl">
                <h2 className="font-serif text-2xl font-black text-[#021024] mb-4 pb-2 border-b border-[#7DA0CA]/25">
                  Treatment Areas & Suitability
                </h2>
                <div className="text-sm text-[#052659]/80 leading-relaxed font-medium flex flex-col gap-4">
                  <p>
                    Laser hair reduction is suitable for both men and women and can be safely performed on multiple areas:
                  </p>
                  <ul className="list-disc pl-5 flex flex-col gap-2">
                    <li><strong>Facial Hair:</strong> Upper lip, chin, jawline, sideburns, and full face.</li>
                    <li><strong>Body Hair:</strong> Underarms, arms, legs, back, chest, and bikini line.</li>
                    <li><strong>Ingrown Hairs:</strong> Resolves bumps and dark spots caused by waxing/shaving.</li>
                  </ul>
                  <p>
                    Our laser system features advanced contact cooling tips, which continuously cool the skin surface during the treatment, ensuring a comfortable and virtually painless experience.
                  </p>
                </div>
              </div>

              {/* Process & Recovery */}
              <div className="bg-white/80 backdrop-blur-md border border-white p-6 md:p-8 rounded-[28px] shadow-xl">
                <h2 className="font-serif text-2xl font-black text-[#021024] mb-4 pb-2 border-b border-[#7DA0CA]/25">
                  Procedure Steps & Post-Laser Care
                </h2>
                <div className="text-sm text-[#052659]/80 leading-relaxed font-medium flex flex-col gap-4">
                  <h3 className="font-serif text-base font-black text-[#021024]">Procedure Steps:</h3>
                  <ol className="list-decimal pl-5 flex flex-col gap-2">
                    <li><strong>Skin Marking & Shaving:</strong> The target area is marked and shaved cleanly (plucking or waxing must be avoided for 3 weeks prior).</li>
                    <li><strong>Cooling Gel Application:</strong> A chilled transparent gel is applied to protect the skin and guide the laser.</li>
                    <li><strong>Laser Passes:</strong> The laser handpiece is moved smoothly over the area, delivering controlled pulses.</li>
                    <li><strong>Soothing & Hydration:</strong> The gel is wiped off, and a calming moisturizer and sunscreen are applied.</li>
                  </ol>

                  <h3 className="font-serif text-base font-black text-[#021024] mt-4">Post-Treatment Guidelines:</h3>
                  <ul className="list-disc pl-5 flex flex-col gap-2">
                    <li>Apply broad-spectrum sunscreen (SPF 50) and avoid active sunbathing for 1 week.</li>
                    <li>Do not use hot water, steam rooms, or harsh scrubs on the treated area for 24-48 hours.</li>
                    <li>Shaving between sessions is permitted, but do not pluck, wax, or use epilators.</li>
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
                      q: 'Is laser hair reduction permanent?',
                      a: 'Laser hair reduction achieves long-term reduction in hair density and growth speed. Most patients achieve 80% to 90% hair reduction. The remaining hairs become extremely fine and light. Maintenance sessions once or twice a year may be required.'
                    },
                    {
                      q: 'How many sessions are required for laser hair reduction?',
                      a: 'Typically, 6 to 8 sessions spaced 4 to 6 weeks apart are recommended. This is because lasers only target hair follicles in their active growth phase (anagen phase), requiring multiple cycles to cover all follicles.'
                    },
                    {
                      q: 'Are there any side effects of laser hair reduction?',
                      a: 'Side effects are rare when performed under the supervision of a qualified dermatologist. Mild redness and swelling (peri-follicular edema) resembling a light sunburn may occur for a few hours. Sunscreen application is critical to avoid pigmentation.'
                    },
                    {
                      q: 'Can laser hair reduction be done on sensitive facial skin?',
                      a: 'Yes, our triple-wavelength diode lasers feature advanced cooling tips that protect sensitive skin barriers, making it safe for delicate facial areas including the upper lip, chin, and jawline.'
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
                    <span>FDA-Approved Triple Diode</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="w-3.5 h-3.5 text-[#4ADE80] shrink-0" />
                    <span>Safe for Indian Skin Tones</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="w-3.5 h-3.5 text-[#4ADE80] shrink-0" />
                    <span>Integrated Contact Cooling</span>
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
