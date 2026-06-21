import type { Metadata } from 'next';
import React from 'react';
import { Award, BookOpen, ShieldCheck, Mail, Phone, MapPin, Check, GraduationCap, Briefcase, FileText } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: 'Dr. Gaurav Nakra — Gold Medalist Dermatologist in East Delhi',
  description: 'Meet Dr. Gaurav Nakra, senior dermatologist & hair transplant surgeon with 18+ years experience. MBBS, MD (Gold Medalist), DMC No. 44068. Read biography, clinical affiliations, and memberships.',
  alternates: {
    canonical: 'https://centreforskin.in/doctor-gaurav-nakra',
  },
  openGraph: {
    title: 'Dr. Gaurav Nakra — Gold Medalist Dermatologist in East Delhi',
    description: 'Meet Dr. Gaurav Nakra, senior dermatologist & hair transplant surgeon with 18+ years experience. MBBS, MD (Gold Medalist), DMC No. 44068. Read biography, clinical affiliations, and memberships.',
    url: 'https://centreforskin.in/doctor-gaurav-nakra',
    siteName: 'Centre For Skin',
    locale: 'en_IN',
    type: 'profile',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800&fm=webp',
        width: 800,
        height: 800,
        alt: 'Dr. Gaurav Nakra Dermatologist',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Gaurav Nakra — Gold Medalist Dermatologist in East Delhi',
    description: 'Meet Dr. Gaurav Nakra, senior dermatologist & hair transplant surgeon with 18+ years experience. MBBS, MD (Gold Medalist), DMC No. 44068. Read biography, clinical affiliations, and memberships.',
    images: ['https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800&fm=webp'],
  },
};

export default function DoctorProfile() {
  const physicianSchema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": "Dr. Gaurav Nakra",
    "image": "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800&fm=webp",
    "medicalSpecialty": "Dermatology",
    "telephone": "01146052234",
    "knowsAbout": ["Dermatology", "Cosmetology", "Hair Transplantation", "Laser Treatments", "Pediatric Dermatology"],
    "memberOf": [
      {
        "@type": "MedicalOrganization",
        "name": "Indian Association of Dermatologists, Venereologists and Leprologists (IADVL)"
      },
      {
        "@type": "MedicalOrganization",
        "name": "Indian Medical Association (IMA)"
      }
    ],
    "medicalSchool": {
      "@type": "EducationalOrganization",
      "name": "Motilal Nehru Medical College, Allahabad"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Kasturba Medical College"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "178, Basement, Saini Enclave, Near Karkardooma Metro Station, Anand Vihar",
      "addressLocality": "East Delhi",
      "addressRegion": "Delhi",
      "postalCode": "110092",
      "addressCountry": "IN"
    }
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
        "name": "Dr. Gaurav Nakra Profile",
        "item": "https://centreforskin.in/doctor-gaurav-nakra"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Navbar />

      <main className="min-h-screen pt-28 pb-16 bg-[#C1E8FF]/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          {/* Hero Banner Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12 bg-white/70 backdrop-blur-md rounded-[32px] p-6 md:p-8 border border-white shadow-xl">
            {/* Image Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-[28px] overflow-hidden border-4 border-white shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800&fm=webp"
                  alt="Dr. Gaurav Nakra, Senior Dermatologist"
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover grayscale-[0.05]"
                />
                
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/60 shadow flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-500" />
                  <span className="font-serif text-[10px] font-bold text-[#021024]">MD Gold Medalist</span>
                </div>
              </div>
            </div>

            {/* Doctor Basic Info Column */}
            <div className="lg:col-span-7 text-left">
              <span className="font-sans text-xs md:text-sm font-black text-[#5483B3] tracking-[0.25em] uppercase mb-2 block">
                Senior Consultant Dermatologist
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-[#021024] leading-tight mb-2">
                Dr. Gaurav Nakra
              </h1>
              <p className="font-sans text-sm md:text-base text-[#5483B3] font-bold tracking-wide mb-6">
                MBBS, MD (Dermatology, Venereology & Leprosy) | Gold Medalist
              </p>

              <hr className="border-[#7DA0CA]/25 my-4" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left text-xs mb-8">
                <div className="flex gap-3 items-center">
                  <div className="p-2 rounded-lg bg-[#052659]/10 text-[#052659] border border-[#052659]/20 shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-serif font-bold text-[#021024] uppercase tracking-wider">Registration Number</div>
                    <div className="font-sans text-[#5483B3] font-semibold mt-0.5">Delhi Medical Council No. 44068</div>
                  </div>
                </div>

                <div className="flex gap-3 items-center">
                  <div className="p-2 rounded-lg bg-[#052659]/10 text-[#052659] border border-[#052659]/20 shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-serif font-bold text-[#021024] uppercase tracking-wider">Total Experience</div>
                    <div className="font-sans text-[#5483B3] font-semibold mt-0.5">18+ Years Clinical Practice</div>
                  </div>
                </div>

                <div className="flex gap-3 items-center">
                  <div className="p-2 rounded-lg bg-[#052659]/10 text-[#052659] border border-[#052659]/20 shrink-0">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-serif font-bold text-[#021024] uppercase tracking-wider">Specialties</div>
                    <div className="font-sans text-[#5483B3] font-semibold mt-0.5">Dermatology, Lasers & Hair Transplant</div>
                  </div>
                </div>

                <div className="flex gap-3 items-center">
                  <div className="p-2 rounded-lg bg-[#052659]/10 text-[#052659] border border-[#052659]/20 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-serif font-bold text-[#021024] uppercase tracking-wider">Location</div>
                    <div className="font-sans text-[#5483B3] font-semibold mt-0.5">Centre For Skin, Saini Enclave, Delhi</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <a 
                  href="/#booking"
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#052659] hover:bg-[#5483B3] text-white text-xs uppercase tracking-wider font-bold rounded-xl shadow-md transition-all text-center"
                >
                  Book Appointment
                </a>
                <a 
                  href="tel:01146052234"
                  className="w-full sm:w-auto px-8 py-3.5 bg-white border-2 border-[#7DA0CA] hover:border-[#052659] text-[#052659] text-xs uppercase tracking-wider font-bold rounded-xl shadow-sm transition-all text-center flex justify-center items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>011 4605 2234</span>
                </a>
              </div>
            </div>
          </div>

          {/* Detailed Biography and Timeline section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left side: Memberships & Specialties */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              <div className="bg-white/80 backdrop-blur-md border border-white p-6 rounded-[28px] shadow-xl text-left">
                <h3 className="font-serif text-lg font-black text-[#021024] mb-4 pb-2 border-b border-[#7DA0CA]/20 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#052659]" />
                  <span>Memberships</span>
                </h3>
                <ul className="flex flex-col gap-3 text-xs text-[#052659]/80 font-sans font-bold leading-normal">
                  <li className="flex gap-2.5 items-start">
                    <Check className="w-4 h-4 text-[#4ADE80] shrink-0 mt-0.5" />
                    <span>Member of the Indian Association of Dermatologists, Venereologists and Leprologists (IADVL)</span>
                  </li>
                  <li className="flex gap-2.5 items-start">
                    <Check className="w-4 h-4 text-[#4ADE80] shrink-0 mt-0.5" />
                    <span>Member of the Indian Medical Association (IMA)</span>
                  </li>
                  <li className="flex gap-2.5 items-start">
                    <Check className="w-4 h-4 text-[#4ADE80] shrink-0 mt-0.5" />
                    <span>DHI Certified Specialist (Direct Hair Implantation Academy)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/80 backdrop-blur-md border border-white p-6 rounded-[28px] shadow-xl text-left">
                <h3 className="font-serif text-lg font-black text-[#021024] mb-4 pb-2 border-b border-[#7DA0CA]/20 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#052659]" />
                  <span>Clinical Competences</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Clinical Dermatology', 'Aesthetic Lifts', 'Triple-Wavelength Lasers', 'PRP Follicle Therapy', 'Pediatric Dermatology', 'Dermatosurgery', 'Chemical Peels', 'Microdermabrasion'].map((spec, i) => (
                    <span key={i} className="px-3 py-1.5 bg-[#C1E8FF]/40 text-[#052659] font-sans text-[10px] uppercase font-black rounded-lg border border-[#7DA0CA]/10">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right side: Detailed Biography */}
            <div className="lg:col-span-8 bg-white/80 backdrop-blur-md border border-white p-6 md:p-8 rounded-[28px] shadow-xl text-left">
              <h2 className="font-serif text-2xl font-black text-[#021024] mb-6 flex items-center gap-2 pb-3 border-b border-[#7DA0CA]/20">
                <BookOpen className="w-6 h-6 text-[#052659]" />
                <span>Professional Profile & Journey</span>
              </h2>

              <div className="prose max-w-none text-sm text-[#052659]/80 leading-relaxed font-sans font-medium flex flex-col gap-5">
                <p>
                  Dr. Gaurav Nakra is a highly recognized and board-certified senior dermatologist, cosmetologist, and pediatric skin specialist practicing in East Delhi. He is the founder and medical director of Centre For Skin, a state-of-the-art dermatological clinic located in Saini Enclave near Karkardooma Metro.
                </p>
                <p>
                  Dr. Nakra completed his MBBS from the prestigious Motilal Nehru Medical College in 2006. With an academic drive for medical skin therapeutics, he pursued his MD specialization in Dermatology, Venereology & Leprosy from Kasturba Medical College / DDU University, finishing his program with academic honors and receiving the prestigious Gold Medal.
                </p>
                <p>
                  With a career spanning over 18 years, Dr. Nakra has built a reputation for diagnostics accuracy and medically sound aesthetic procedures. His practice spans clinical dermatology (treating chronic eczema, psoriasis, vitiligo, and fungal infections), aesthetic dermatology (delivering Botox, fillers, and thread lifts), and advanced dermatosurgical excisions.
                </p>
                <p>
                  He is also a certified practitioner in DHI (Direct Hair Implantation) techniques, specializing in hair restoration, pattern baldness management, and Platelet-Rich Plasma (PRP) therapies.
                </p>
              </div>

              <h3 className="font-serif text-xl font-black text-[#021024] mt-10 mb-6 flex items-center gap-2 pb-2 border-b border-[#7DA0CA]/25">
                <Briefcase className="w-5 h-5 text-[#052659]" />
                <span>Practice History & Education Timeline</span>
              </h3>

              <div className="border-l-2 border-[#7DA0CA]/30 pl-5 flex flex-col gap-6 text-left">
                {[
                  { year: '2016 – Present', title: 'Founder & Senior Consultant — Centre For Skin', desc: 'Providing advanced medical dermatology, laser therapies, and hair restoration in East Delhi.' },
                  { year: '2012 – 2016', title: 'Senior Consultant Dermatologist', desc: 'Served in prominent clinical consultant roles including Dr. BSA Hospital (Rohini), DHI (Safdarjung Enclave), and GM Hospital.' },
                  { year: '2010', title: 'MD Graduation & Gold Medal award', desc: 'Dermatology, Venereology & Leprosy specialization from Kasturba Medical College / DDU University with top honors.' },
                  { year: '2006', title: 'MBBS Medical Graduation', desc: 'Motilal Nehru Medical College, Allahabad.' }
                ].map((t, idx) => (
                  <div key={idx} className="relative group">
                    <div className="absolute -left-[27px] top-1 w-3 h-3 rounded-full bg-[#052659] border-2 border-[#C1E8FF] group-hover:scale-125 transition-transform" />
                    <div className="font-mono text-xs font-bold text-[#5483B3]">{t.year}</div>
                    <div className="font-serif text-sm font-bold text-[#021024] mt-0.5">{t.title}</div>
                    <p className="font-sans text-xs text-[#052659]/75 mt-1 leading-relaxed">{t.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
