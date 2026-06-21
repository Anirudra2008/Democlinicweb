import type { Metadata } from 'next';
import React from 'react';
import { MapPin, Phone, Calendar, Clock, Star, Check } from 'lucide-react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

export const metadata: Metadata = {
  title: 'Best Dermatologist near Nirman Vihar | Centre For Skin Delhi',
  description: 'Looking for a dermatologist near Nirman Vihar, East Delhi? Dr. Gaurav Nakra (Gold Medalist) at Centre For Skin in Saini Enclave offers certified skin & hair care, just 5 minutes away.',
  alternates: {
    canonical: 'https://centreforskin.in/locations/nirman-vihar-dermatologist',
  },
};

export default function NirmanViharDermatologist() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the distance between Nirman Vihar and the Karkardooma clinic?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The clinic in Saini Enclave is approximately 2 to 2.5 kilometers from Nirman Vihar. It takes about 5 minutes to reach by car or auto via Vikas Marg."
        }
      },
      {
        "@type": "Question",
        "name": "How do I reach Centre For Skin by Metro from Nirman Vihar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Board the Blue Line metro at Nirman Vihar Metro Station going towards Vaishali or Noida Electronic City. Travel 2 stops (past Preet Vihar) and alight at Karkardooma Metro Station. The clinic is a 2-minute walk from the station exit."
        }
      },
      {
        "@type": "Question",
        "name": "Do you treat pediatric skin issues near Nirman Vihar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Dr. Gaurav Nakra is a pediatric dermatology specialist. He provides gentle medical checkups and treatments for infant eczema, diaper rashes, birthmarks, and other sensitive skin concerns in children."
        }
      },
      {
        "@type": "Question",
        "name": "What landmarks are near Centre For Skin?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We are located directly opposite the Balaji Temple in Phase 1, Saini Enclave, close to the Karkardooma Metro Station and D-Block Market."
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
        "name": "Locations",
        "item": "https://centreforskin.in/#contact"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Nirman Vihar Dermatologist",
        "item": "https://centreforskin.in/locations/nirman-vihar-dermatologist"
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
                East Delhi Local SEO Landing Page
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black leading-tight mb-4">
                Dermatologist near Nirman Vihar, East Delhi — Dr. Gaurav Nakra
              </h1>
              <p className="text-sm md:text-base text-[#C1E8FF] font-medium leading-relaxed mb-6">
                Gold Medalist clinical skin care, advanced US-FDA lasers, and certified hair transplants at Centre For Skin, located just 5 minutes away from Nirman Vihar.
              </p>
              
              <div className="flex flex-wrap gap-4 text-xs font-bold text-[#7DA0CA]">
                <span className="bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10">5 Mins from Nirman Vihar</span>
                <span className="bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10">2 Stops via Blue Line Metro</span>
                <span className="bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10">DMC Registered Specialist</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Content Column */}
            <div className="lg:col-span-8 flex flex-col gap-8">
              
              {/* Locality Intro */}
              <div className="bg-white/80 backdrop-blur-md border border-white p-6 md:p-8 rounded-[28px] shadow-xl">
                <h2 className="font-serif text-2xl font-black text-[#021024] mb-4 pb-2 border-b border-[#7DA0CA]/25">
                  Trusted Clinical Dermatology near Nirman Vihar & Swasthya Vihar
                </h2>
                <div className="text-sm text-[#052659]/80 leading-relaxed font-medium flex flex-col gap-4">
                  <p>
                    Are you searching for a certified, expert <strong>dermatologist near Nirman Vihar, Delhi</strong>? <strong>Centre For Skin</strong>, directed by senior MD Gold Medalist dermatologist <strong>Dr. Gaurav Nakra</strong>, offers gold-standard clinical, aesthetic, and laser treatments in Saini Enclave, Karkardooma—located just a 5-minute drive from the Nirman Vihar commercial hubs and V3S Mall.
                  </p>
                  <p>
                    With more than 18 years of specialized dermatology practice, Dr. Nakra maps direct clinical diagnoses to certified medical solutions. We treat chronic inflammatory diseases like atopic eczema, psoriasis, rosacea, and vitiligo. We also specialize in aesthetic skin boosters, dermal fillers, Botox lifts, chemical peels, and pediatric dermatology.
                  </p>
                  <p>
                    All procedural rooms are kept highly sterile to ensure absolute patient safety and zero risk of infection. Our local residents from Nirman Vihar trust us for honest billing, transparent expectations, and FDA-approved laser treatments.
                  </p>
                </div>
              </div>

              {/* How to Reach Us */}
              <div className="bg-white/80 backdrop-blur-md border border-white p-6 md:p-8 rounded-[28px] shadow-xl">
                <h2 className="font-serif text-2xl font-black text-[#021024] mb-4 pb-2 border-b border-[#7DA0CA]/25">
                  How to Reach Us from Nirman Vihar
                </h2>
                <div className="text-sm text-[#052659]/80 leading-relaxed font-medium flex flex-col gap-4">
                  <p>
                    Travelling to Centre For Skin from <strong>Nirman Vihar</strong> is simple:
                  </p>
                  <ul className="list-disc pl-5 flex flex-col gap-2">
                    <li>
                      <strong>By Metro:</strong> Board the Blue Line metro at Nirman Vihar Metro Station. Travel 2 stops (past Preet Vihar) and alight at Karkardooma Metro Station. The clinic is a brief 2-minute walk from the station exit.
                    </li>
                    <li>
                      <strong>By Road / Auto:</strong> Drive along Vikas Marg past Preet Vihar towards Anand Vihar. At the Karkardooma Metro crossing, turn left. Saini Enclave is located opposite the Balaji Temple. It takes approximately 5 minutes.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Service Links Grid */}
              <div className="bg-white/80 backdrop-blur-md border border-white p-6 md:p-8 rounded-[28px] shadow-xl text-left">
                <h2 className="font-serif text-2xl font-black text-[#021024] mb-6 pb-2 border-b border-[#7DA0CA]/25">
                  Explore Specialized Treatments
                </h2>
                <p className="text-xs text-[#052659]/80 mb-6 font-bold">
                  Click on the links below to learn more about our medically certified skin and hair solutions:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { name: 'Laser Hair Reduction', link: '/services/laser-hair-reduction-delhi' },
                    { name: 'Acne Scar Treatment', link: '/services/acne-scar-treatment-delhi' },
                    { name: 'Hair Transplant & PRP', link: '/services/hair-transplant-delhi' },
                    { name: 'Vitiligo Light & Grafting', link: '/services/vitiligo-treatment-delhi' },
                    { name: 'Chemical Peels & Resurfacing', link: '/services/chemical-peels-delhi' },
                    { name: 'Pediatric Dermatology', link: '/services/pediatric-dermatology-delhi' },
                    { name: 'Eczema & Psoriasis Care', link: '/services/eczema-psoriasis-rosacea-delhi' },
                    { name: 'Mole & Wart Dermatosurgery', link: '/services/dermatosurgery-mole-wart-delhi' },
                  ].map((srv, idx) => (
                    <a 
                      key={idx} 
                      href={srv.link} 
                      className="p-3 bg-[#C1E8FF]/20 hover:bg-[#C1E8FF]/45 border border-[#7DA0CA]/10 hover:border-[#5483B3] rounded-xl flex justify-between items-center transition-all group"
                    >
                      <span className="font-serif text-xs font-black text-[#021024]">{srv.name}</span>
                      <Check className="w-4 h-4 text-[#5483B3] group-hover:translate-x-1 transition-transform" />
                    </a>
                  ))}
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
                      q: 'What is the distance between Nirman Vihar and the Karkardooma clinic?',
                      a: 'The clinic in Saini Enclave is approximately 2 to 2.5 kilometers from Nirman Vihar. It takes about 5 minutes to reach by car or auto via Vikas Marg.'
                    },
                    {
                      q: 'How do I reach Centre For Skin by Metro from Nirman Vihar?',
                      a: 'Board the Blue Line metro at Nirman Vihar Metro Station going towards Vaishali or Noida Electronic City. Travel 2 stops (past Preet Vihar) and alight at Karkardooma Metro Station. The clinic is a 2-minute walk from the station exit.'
                    },
                    {
                      q: 'Do you treat pediatric skin issues near Nirman Vihar?',
                      a: 'Yes, Dr. Gaurav Nakra is a pediatric dermatology specialist. He provides gentle medical checkups and treatments for infant eczema, diaper rashes, birthmarks, and other sensitive skin concerns in children.'
                    },
                    {
                      q: 'What landmarks are near Centre For Skin?',
                      a: 'We are located directly opposite the Balaji Temple in Phase 1, Saini Enclave, close to the Karkardooma Metro Station and D-Block Market.'
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
                <span className="font-sans text-[10px] uppercase font-bold text-[#7DA0CA] tracking-wider">Appointment Desk</span>
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
                  <p className="font-sans text-xs text-white">
                    Monday – Saturday: 12:30 PM – 7:30 PM (Sun Closed)
                  </p>
                </div>

                <a 
                  href="/#booking"
                  className="mt-4 w-full py-3.5 bg-white text-[#021024] hover:bg-[#C1E8FF] font-sans font-black text-xs uppercase tracking-wider text-center rounded-xl shadow-md transition-all"
                >
                  Book Consultation
                </a>
              </div>

              <div className="bg-white/80 backdrop-blur-md border border-white p-5 rounded-[24px] shadow-lg flex items-center justify-between text-left">
                <div>
                  <div className="font-serif text-sm font-black text-[#052659]">4.5★ Rating</div>
                  <div className="font-sans text-[10px] text-[#5483B3] font-bold mt-0.5">508+ Patient Reviews</div>
                </div>
                <div className="flex items-center gap-0.5 text-[#FACC15]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
