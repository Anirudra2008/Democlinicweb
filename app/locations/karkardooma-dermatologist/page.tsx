import type { Metadata } from 'next';
import React from 'react';
import { MapPin, Phone, Calendar, Clock, Star, ShieldCheck, Check } from 'lucide-react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

export const metadata: Metadata = {
  title: 'Best Dermatologist in Karkardooma | Centre For Skin Delhi',
  description: 'Looking for the best dermatologist in Karkardooma, East Delhi? Dr. Gaurav Nakra (Gold Medalist) at Centre For Skin in Saini Enclave offers certified skin, hair & laser treatments.',
  alternates: {
    canonical: 'https://centreforskin.in/locations/karkardooma-dermatologist',
  },
};

export default function KarkardoomaDermatologist() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What treatments are available at the Karkardooma clinic?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Centre For Skin in Karkardooma offers a complete suite of clinical and aesthetic dermatological treatments including Acne Scar Laser Resurfacing (Fractional CO2), Laser Hair Reduction, Certified DHI Hair Transplants, Scalp PRP, Chemical Peels, Pediatric Dermatology, and Dermatosurgery for mole/wart removal under senior Gold Medalist dermatologist Dr. Gaurav Nakra."
        }
      },
      {
        "@type": "Question",
        "name": "How do I reach Centre For Skin from Karkardooma Metro Station?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The clinic is located in Saini Enclave, just opposite the Balaji Temple. It is a brief 2-3 minute walking distance (under 200 meters) from the Karkardooma Metro Station (Blue & Pink Line interchange). Exit towards Saini Enclave and walk past the D-Block Market."
        }
      },
      {
        "@type": "Question",
        "name": "Can I book a same-day dermatology consultation in Saini Enclave?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We strongly recommend booking in advance by calling 011 4605 2234 or +91 70420 87962 to minimize wait times, as Dr. Gaurav Nakra personally attends to each patient. However, emergency clinical dermatology cases are evaluated with priority."
        }
      },
      {
        "@type": "Question",
        "name": "What landmarks are near the Centre For Skin Karkardooma branch?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The most prominent local landmarks are the Balaji Temple (directly opposite the clinic), Saini Enclave D-Block Market, and the Karkardooma Metro Station (walking distance)."
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
        "name": "Karkardooma Dermatologist",
        "item": "https://centreforskin.in/locations/karkardooma-dermatologist"
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
                Best Dermatologist in Karkardooma, East Delhi — Dr. Gaurav Nakra
              </h1>
              <p className="text-sm md:text-base text-[#C1E8FF] font-medium leading-relaxed mb-6">
                Gold Medalist clinical expertise, state-of-the-art lasers, and certified hair restoration procedures at Saini Enclave, opposite Balaji Temple.
              </p>
              
              <div className="flex flex-wrap gap-4 text-xs font-bold text-[#7DA0CA]">
                <span className="bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10">Near Metro (2 Min Walk)</span>
                <span className="bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10">Gold Medalist MD</span>
                <span className="bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10">DMC Registered: 44068</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Content Column (Biography and details) */}
            <div className="lg:col-span-8 flex flex-col gap-8">
              
              {/* Locality Intro */}
              <div className="bg-white/80 backdrop-blur-md border border-white p-6 md:p-8 rounded-[28px] shadow-xl">
                <h2 className="font-serif text-2xl font-black text-[#021024] mb-4 pb-2 border-b border-[#7DA0CA]/25">
                  Trusted Skin & Hair Clinic in Saini Enclave, Karkardooma
                </h2>
                <div className="text-sm text-[#052659]/80 leading-relaxed font-medium flex flex-col gap-4">
                  <p>
                    Are you searching for a certified, expert <strong>dermatologist in Karkardooma</strong> or near Anand Vihar, Delhi? <strong>Centre For Skin</strong>, directed by the senior board-certified dermatologist and MD Gold Medalist <strong>Dr. Gaurav Nakra</strong>, is the premium clinical facility located in the heart of Saini Enclave, East Delhi.
                  </p>
                  <p>
                    With over 18 years of clinical expertise, Dr. Nakra maps high-fidelity diagnostics to highly customized therapies. Our Karkardooma clinic is fully equipped with US-FDA approved technologies to deliver permanent laser hair reduction, fractional CO2 laser resurfacing for deep acne scars, certified DHI hair transplants, chemical peels, and pediatric dermatology.
                  </p>
                  <p>
                    We maintain sterile procedure rooms and follow international safety guidelines, ensuring zero infection risk and clinical excellence. Whether you require treatment for chronic skin conditions like eczema, psoriasis, and vitiligo, or aesthetic enhancements like Botox, fillers, and carbon photofacials, you can expect patient-first, medically guided care.
                  </p>
                </div>
              </div>

              {/* How to Reach Us */}
              <div className="bg-white/80 backdrop-blur-md border border-white p-6 md:p-8 rounded-[28px] shadow-xl">
                <h2 className="font-serif text-2xl font-black text-[#021024] mb-4 pb-2 border-b border-[#7DA0CA]/25">
                  How to Reach Us (Metro & Landmark Relevance)
                </h2>
                <div className="text-sm text-[#052659]/80 leading-relaxed font-medium flex flex-col gap-4">
                  <p>
                    Our clinic is strategically located in <strong>Saini Enclave, Karkardooma</strong>, ensuring seamless transit and ease of access for patients traveling from across Delhi and NCR:
                  </p>
                  <ul className="list-disc pl-5 flex flex-col gap-2">
                    <li>
                      <strong>By Metro:</strong> We are just a 2-minute walking distance (under 200 meters) from the <strong>Karkardooma Metro Station</strong>, which serves as a major interchange between the Blue Line and the Pink Line. Simply exit the station, head towards Saini Enclave D-Block Market, and you will find us opposite the temple.
                    </li>
                    <li>
                      <strong>By Road / Landmarks:</strong> The clinic is located at 178, Basement, Saini Enclave. We are situated directly opposite the famous <strong>Balaji Temple</strong> (Phase 1), a prominent landmark in the area. 
                    </li>
                    <li>
                      <strong>Proximity to NCR:</strong> The clinic is easily accessible from Anand Vihar ISBT, Vivek Vihar, Jagriti Enclave, and Kaushambi, making it a convenient destination for NCR residents.
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
                      q: 'What treatments are available at the Karkardooma clinic?',
                      a: 'Centre For Skin in Karkardooma offers a complete suite of clinical and aesthetic dermatological treatments including Acne Scar Laser Resurfacing (Fractional CO2), Laser Hair Reduction, Certified DHI Hair Transplants, Scalp PRP, Chemical Peels, Pediatric Dermatology, and Dermatosurgery for mole/wart removal under senior Gold Medalist dermatologist Dr. Gaurav Nakra.'
                    },
                    {
                      q: 'How do I reach Centre For Skin from Karkardooma Metro Station?',
                      a: 'The clinic is located in Saini Enclave, just opposite the Balaji Temple. It is a brief 2-3 minute walking distance (under 200 meters) from the Karkardooma Metro Station (Blue & Pink Line interchange). Exit towards Saini Enclave and walk past the D-Block Market.'
                    },
                    {
                      q: 'Can I book a same-day dermatology consultation in Saini Enclave?',
                      a: 'We strongly recommend booking in advance by calling 011 4605 2234 or +91 70420 87962 to minimize wait times, as Dr. Gaurav Nakra personally attends to each patient. However, emergency clinical dermatology cases are evaluated with priority.'
                    },
                    {
                      q: 'What landmarks are near the Centre For Skin Karkardooma branch?',
                      a: 'The most prominent local landmarks are the Balaji Temple (directly opposite the clinic), Saini Enclave D-Block Market, and the Karkardooma Metro Station (walking distance).'
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

            {/* Right Booking CTA / Location details */}
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
