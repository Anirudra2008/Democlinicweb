import type { Metadata } from 'next';
import React from 'react';
import { MapPin, Phone, Calendar, Clock, Star, Check } from 'lucide-react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

export const metadata: Metadata = {
  title: 'Best Dermatologist near Preet Vihar | Centre For Skin Delhi',
  description: 'Searching for the best dermatologist near Preet Vihar, Delhi? Visit Dr. Gaurav Nakra (MD Gold Medalist) at Centre For Skin in Saini Enclave, just a 5-minute drive from Preet Vihar.',
  alternates: {
    canonical: 'https://centreforskin.in/locations/preet-vihar-dermatologist',
  },
};

export default function PreetViharDermatologist() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the distance between Preet Vihar and the Centre For Skin clinic?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Centre For Skin in Saini Enclave is approximately 1.8 to 2 kilometers from Preet Vihar. It takes about 5 minutes to reach by car or auto via Vikas Marg."
        }
      },
      {
        "@type": "Question",
        "name": "How do I reach Centre For Skin by Delhi Metro from Preet Vihar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Simply board the Blue Line metro at Preet Vihar Metro Station going towards Vaishali or Noida Electronic City. Karkardooma Metro Station is the very next stop. The clinic is a brief 2-minute walk from Karkardooma Metro Station."
        }
      },
      {
        "@type": "Question",
        "name": "Are there treatments for acne and skin aging available near Preet Vihar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer advanced dermatological and anti-aging treatments including Fractional CO2 laser for acne scars, chemical peels, dermal fillers, Botox, and micro-needling, all under the direct supervision of Dr. Gaurav Nakra."
        }
      },
      {
        "@type": "Question",
        "name": "How can I schedule an appointment with Dr. Gaurav Nakra from Preet Vihar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can schedule a consultation easily by booking on our website form, or by calling our desk lines at 011 4605 2234 or +91 70420 87962."
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
        "name": "Preet Vihar Dermatologist",
        "item": "https://centreforskin.in/locations/preet-vihar-dermatologist"
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
                Leading Dermatologist near Preet Vihar, Delhi — Centre For Skin
              </h1>
              <p className="text-sm md:text-base text-[#C1E8FF] font-medium leading-relaxed mb-6">
                Gold Medalist clinical expertise and advanced US-FDA approved laser therapies, located just 5 minutes away from Preet Vihar.
              </p>
              
              <div className="flex flex-wrap gap-4 text-xs font-bold text-[#7DA0CA]">
                <span className="bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10">5 Mins from Preet Vihar</span>
                <span className="bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10">1 Stop via Blue Line Metro</span>
                <span className="bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10">Gold Medalist Dermatologist</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Content Column */}
            <div className="lg:col-span-8 flex flex-col gap-8">
              
              {/* Locality Intro */}
              <div className="bg-white/80 backdrop-blur-md border border-white p-6 md:p-8 rounded-[28px] shadow-xl">
                <h2 className="font-serif text-2xl font-black text-[#021024] mb-4 pb-2 border-b border-[#7DA0CA]/25">
                  Trusted Skin & Hair Specialist Serving Patients from Preet Vihar
                </h2>
                <div className="text-sm text-[#052659]/80 leading-relaxed font-medium flex flex-col gap-4">
                  <p>
                    Are you looking for a certified <strong>dermatologist near Preet Vihar, East Delhi</strong>? <strong>Centre For Skin</strong> is a state-of-the-art clinic situated in Saini Enclave, just 1.8 km away from the Preet Vihar residential colony. Directed by Gold Medalist Dermatologist <strong>Dr. Gaurav Nakra</strong>, we provide trust-based, medically safe skin and hair therapies.
                  </p>
                  <p>
                    Our facility offers advanced, US-FDA approved technologies. Residents of Preet Vihar visit our clinic for permanent laser hair reduction (using triple-wavelength diode systems), fractional CO2 lasers for acne scar correction, clinical-grade chemical peels for pigmentation, certified DHI hair transplants, and pediatric skin care.
                  </p>
                  <p>
                    Dr. Nakra has over 18 years of clinical experience, ensuring precise diagnosis of underlying contact allergies, eczema, psoriasis, or chronic skin rashes. All procedures are conducted in a clean, highly sterile environment to guarantee patient safety.
                  </p>
                </div>
              </div>

              {/* How to Reach Us */}
              <div className="bg-white/80 backdrop-blur-md border border-white p-6 md:p-8 rounded-[28px] shadow-xl">
                <h2 className="font-serif text-2xl font-black text-[#021024] mb-4 pb-2 border-b border-[#7DA0CA]/25">
                  How to Reach Us from Preet Vihar
                </h2>
                <div className="text-sm text-[#052659]/80 leading-relaxed font-medium flex flex-col gap-4">
                  <p>
                    Travelling to Centre For Skin from <strong>Preet Vihar</strong> is extremely simple and fast:
                  </p>
                  <ul className="list-disc pl-5 flex flex-col gap-2">
                    <li>
                      <strong>By Car/Auto:</strong> Drive straight via Vikas Marg towards Anand Vihar. Turn left onto Saini Enclave road at the Karkardooma Metro crossing. The clinic (178, Saini Enclave) is directly opposite the Balaji Temple. It takes approximately 5 minutes.
                    </li>
                    <li>
                      <strong>By Metro:</strong> Board the Blue Line metro at Preet Vihar Metro Station. Karkardooma Metro Station is the immediate next stop. Exit Karkardooma Metro Station and walk 2 minutes (under 200 meters) to find our clinic in Saini Enclave.
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
                      q: 'What is the distance between Preet Vihar and the Centre For Skin clinic?',
                      a: 'Centre For Skin in Saini Enclave is approximately 1.8 to 2 kilometers from Preet Vihar. It takes about 5 minutes to reach by car or auto via Vikas Marg.'
                    },
                    {
                      q: 'How do I reach Centre For Skin by Delhi Metro from Preet Vihar?',
                      a: 'Simply board the Blue Line metro at Preet Vihar Metro Station going towards Vaishali or Noida Electronic City. Karkardooma Metro Station is the very next stop. The clinic is a brief 2-minute walk from Karkardooma Metro Station.'
                    },
                    {
                      q: 'Are there treatments for acne and skin aging available near Preet Vihar?',
                      a: 'Yes, we offer advanced dermatological and anti-aging treatments including Fractional CO2 laser for acne scars, chemical peels, dermal fillers, Botox, and micro-needling, all under the direct supervision of Dr. Gaurav Nakra.'
                    },
                    {
                      q: 'How can I schedule an appointment with Dr. Gaurav Nakra from Preet Vihar?',
                      a: 'You can schedule a consultation easily by booking on our website form, or by calling our desk lines at 011 4605 2234 or +91 70420 87962.'
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
