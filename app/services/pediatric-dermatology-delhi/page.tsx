import type { Metadata } from 'next';
import React from 'react';
import { Calendar, Phone, Clock, MapPin, Check, ShieldCheck } from 'lucide-react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

export const metadata: Metadata = {
  title: 'Pediatric Dermatology in Delhi | Centre For Skin',
  description: 'Seeking specialized pediatric dermatology in Delhi? Dr. Gaurav Nakra offers gentle, certified skin care for infants, kids, and adolescents.',
  alternates: {
    canonical: 'https://centreforskin.in/services/pediatric-dermatology-delhi',
  },
};

export default function PediatricDermatology() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is pediatric skin different from adult skin?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. A child's skin is significantly thinner, more delicate, and has a less developed barrier function compared to adult skin. This makes it more susceptible to irritants, infections, and rapid absorption of topical medications, requiring specialized pediatric-dose formulations."
        }
      },
      {
        "@type": "Question",
        "name": "Are steroid creams safe for infants and toddlers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Steroid creams should only be used under the strict prescription of a qualified dermatologist. At Centre For Skin, we prioritize non-steroidal barrier repair moisturizers and safe, low-potency, targeted formulations only when clinically necessary to avoid skin thinning or systemic absorption."
        }
      },
      {
        "@type": "Question",
        "name": "How do you treat molluscum contagiosum in kids?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Molluscum contagiosum is a viral skin infection common in children. We treat it using gentle, minimally invasive methods such as topical immunomodulatory creams, chemical expression, or cryotherapy, ensuring the child feels comfortable and safe throughout."
        }
      },
      {
        "@type": "Question",
        "name": "How can I manage my child's atopic eczema flare-ups?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Management includes using lukewarm water for short baths, applying thick hypoallergenic moisturizers immediately after bathing, using soft cotton clothing, and identifying and avoiding triggers like dust mites, strong soaps, or certain fabrics."
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
        "name": "Pediatric Dermatology",
        "item": "https://centreforskin.in/services/pediatric-dermatology-delhi"
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
                Pediatric Dermatology — Dr. Gaurav Nakra
              </h1>
              <p className="text-sm md:text-base text-[#C1E8FF] font-medium leading-relaxed mb-6">
                Gentle, compassionate, and medically specialized skin care for infants, toddlers, and young children under a senior expert.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Content Column */}
            <div className="lg:col-span-8 flex flex-col gap-8">
              
              {/* Understanding the Treatment */}
              <div className="bg-white/80 backdrop-blur-md border border-white p-6 md:p-8 rounded-[28px] shadow-xl">
                <h2 className="font-serif text-2xl font-black text-[#021024] mb-4 pb-2 border-b border-[#7DA0CA]/25">
                  Specialized Care for Delicate Skin
                </h2>
                <div className="text-sm text-[#052659]/80 leading-relaxed font-medium flex flex-col gap-4">
                  <p>
                    A child&apos;s skin is not simply a miniature version of adult skin. It is structurally thinner, loses moisture more rapidly, and has an underdeveloped immune defense. These factors make children highly susceptible to distinct skin conditions and react differently to standard medical treatments.
                  </p>
                  <p>
                    At <strong>Centre For Skin</strong>, senior dermatologist <strong>Dr. Gaurav Nakra</strong> provides specialized, gentle care for young patients. Dr. Nakra has extensive clinical experience and training in pediatric skin issues, allowing him to deliver accurate diagnoses and outline safe, kid-friendly treatment protocols.
                  </p>
                  <p>
                    We provide medical diagnostics and management for a range of pediatric skin issues:
                  </p>
                  <ul className="list-disc pl-5 flex flex-col gap-2">
                    <li><strong>Atopic Dermatitis (Infantile Eczema):</strong> Managing dry, red, itchy skin rashes using hypoallergenic barrier repair moisturizers and safe, localized anti-inflammatory therapies.</li>
                    <li><strong>Diaper Dermatitis (Diaper Rash):</strong> Treating contact irritation and secondary fungal/yeast infections.</li>
                    <li><strong>Congenital Birthmarks & Hemangiomas:</strong> Non-invasive evaluation and medical management of vascular markings.</li>
                    <li><strong>Viral Skin Infections:</strong> Safe extraction or medical resolution of viral warts and molluscum contagiosum lesions.</li>
                  </ul>
                </div>
              </div>

              {/* Who it is for */}
              <div className="bg-white/80 backdrop-blur-md border border-white p-6 md:p-8 rounded-[28px] shadow-xl">
                <h2 className="font-serif text-2xl font-black text-[#021024] mb-4 pb-2 border-b border-[#7DA0CA]/25">
                  Our Pediatric Care Philosophy
                </h2>
                <div className="text-sm text-[#052659]/80 leading-relaxed font-medium flex flex-col gap-4">
                  <p>
                    We focus on child-comfort and parent-education. Pediatric dermatology consultations at our clinic emphasize:
                  </p>
                  <ul className="list-disc pl-5 flex flex-col gap-2">
                    <li><strong>Steroid-Sparing Protocols:</strong> Avoiding over-prescription of steroid creams in infants to prevent skin thinning or systemic absorption. We prioritize gentle, non-steroidal immunomodulators and barrier creams.</li>
                    <li><strong>Gentle Diagnostics:</strong> Conducting examinations in a calm, welcoming environment to minimize any anxiety for the child.</li>
                    <li><strong>Detailed Parental Guidance:</strong> Explaining skin trigger factors, bathing guidelines, and application techniques to parents.</li>
                  </ul>
                </div>
              </div>

              {/* Process & Recovery */}
              <div className="bg-white/80 backdrop-blur-md border border-white p-6 md:p-8 rounded-[28px] shadow-xl">
                <h2 className="font-serif text-2xl font-black text-[#021024] mb-4 pb-2 border-b border-[#7DA0CA]/25">
                  Consultation Steps & Management Guidelines
                </h2>
                <div className="text-sm text-[#052659]/80 leading-relaxed font-medium flex flex-col gap-4">
                  <h3 className="font-serif text-base font-black text-[#021024]">Procedure Steps:</h3>
                  <ol className="list-decimal pl-5 flex flex-col gap-2">
                    <li><strong>Gentle Assessment:</strong> Dr. Nakra evaluates the child&apos;s skin lesions carefully, making sure the child feels relaxed.</li>
                    <li><strong>Trigger Identification:</strong> Taking a detailed history from the parents regarding dietary patterns, clothing, soaps, and environmental exposures.</li>
                    <li><strong>Management Plan:</strong> Creating a customized daily skincare regimen focusing on bathing, moisturizing, and targeted pediatric-dose topical applications.</li>
                  </ol>

                  <h3 className="font-serif text-base font-black text-[#021024] mt-4">Parent Guidelines for Dry Skin & Eczema:</h3>
                  <ul className="list-disc pl-5 flex flex-col gap-2">
                    <li>Limit bath time to 5-10 minutes using lukewarm water.</li>
                    <li>Use mild, fragrance-free, soap-free cleansers.</li>
                    <li>Apply prescribed thick moisturizers within 3 minutes of bathing to lock in skin moisture.</li>
                    <li>Dress children in loose, breathable cotton clothing to prevent sweat irritation.</li>
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
                      q: 'Is pediatric skin different from adult skin?',
                      a: 'Yes. A child\'s skin is significantly thinner, more delicate, and has a less developed barrier function compared to adult skin. This makes it more susceptible to irritants, infections, and rapid absorption of topical medications, requiring specialized pediatric-dose formulations.'
                    },
                    {
                      q: 'Are steroid creams safe for infants and toddlers?',
                      a: 'Steroid creams should only be used under the strict prescription of a qualified dermatologist. At Centre For Skin, we prioritize non-steroidal barrier repair moisturizers and safe, low-potency, targeted formulations only when clinically necessary to avoid skin thinning or systemic absorption.'
                    },
                    {
                      q: 'How do you treat molluscum contagiosum in kids?',
                      a: 'Molluscum contagiosum is a viral skin infection common in children. We treat it using gentle, minimally invasive methods such as topical immunomodulatory creams, chemical expression, or cryotherapy, ensuring the child feels comfortable and safe throughout.'
                    },
                    {
                      q: 'How can I manage my child\'s atopic eczema flare-ups?',
                      a: 'Management includes using lukewarm water for short baths, applying thick hypoallergenic moisturizers immediately after bathing, using soft cotton clothing, and identifying and avoiding triggers like dust mites, strong soaps, or certain fabrics.'
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
                    <span>Specialized Pediatric Training</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="w-3.5 h-3.5 text-[#4ADE80] shrink-0" />
                    <span>Steroid-Sparing Treatments</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="w-3.5 h-3.5 text-[#4ADE80] shrink-0" />
                    <span>Hypoallergenic Formulations</span>
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
