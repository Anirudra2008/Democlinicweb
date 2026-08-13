import type { Metadata } from 'next';
import React from 'react';
import { Award, BookOpen, ShieldCheck, Mail, Phone, MapPin, Check, GraduationCap, Briefcase, FileText } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: 'Dr. Gaurav Nakra — Senior Dermatologist & Cosmetologist (20+ Yrs Exp)',
  description: 'Meet Dr. Gaurav Nakra, senior dermatologist & cosmetologist with 20+ years experience. MBBS, MD (D.D.U University, Gorakhpur), DMC No. 44068. Read biography, clinical affiliations, and awards.',
  alternates: {
    canonical: 'https://centreforskin.in/doctor-gaurav-nakra',
  },
  openGraph: {
    title: 'Dr. Gaurav Nakra — Senior Dermatologist & Cosmetologist (20+ Yrs Exp)',
    description: 'Meet Dr. Gaurav Nakra, senior dermatologist & cosmetologist with 20+ years experience. MBBS, MD (D.D.U University, Gorakhpur), DMC No. 44068. Read biography, clinical affiliations, and awards.',
    url: 'https://centreforskin.in/doctor-gaurav-nakra',
    siteName: 'Centre For Skin',
    locale: 'en_IN',
    type: 'profile',
    images: [
      {
        url: 'https://democlinicweb-sigma.vercel.app/dr-gaurav-nakra.jpg',
        width: 800,
        height: 800,
        alt: 'Dr. Gaurav Nakra Dermatologist',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Gaurav Nakra — Senior Dermatologist & Cosmetologist (20+ Yrs Exp)',
    description: 'Meet Dr. Gaurav Nakra, senior dermatologist & cosmetologist with 20+ years experience. MBBS, MD (D.D.U University, Gorakhpur), DMC No. 44068. Read biography, clinical affiliations, and awards.',
    images: ['https://democlinicweb-sigma.vercel.app/dr-gaurav-nakra.jpg'],
  },
};

export default function DoctorProfile() {
  const physicianSchema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": "Dr. Gaurav Nakra",
    "image": "https://democlinicweb-sigma.vercel.app/dr-gaurav-nakra.jpg",
    "medicalSpecialty": ["Dermatology", "Cosmetology", "Pediatric Dermatology"],
    "telephone": "01146052234",
    "knowsAbout": ["Dermatology", "Cosmetology", "Hair Transplantation", "Laser Treatments", "Pediatric Dermatology", "Dermatosurgery", "Acne", "Psoriasis", "Lichen Planus"],
    "award": [
      "International Publications - International Journal of Clinical Research (2008)",
      "Most Promising Dermatologist In Delhi NCR (2015)",
      "Awarded for Excellence in Dermatology: Economic Times 2025"
    ],
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
      "name": "D.D.U University, Gorakhpur"
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

      <main className="min-h-screen pt-28 pb-16 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          {/* Hero Banner Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12 bg-white rounded-[32px] p-6 md:p-8 border border-gray-200 shadow-xl">
            {/* Image Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-[28px] overflow-hidden border-4 border-white shadow-lg">
                <img 
                  src="/dr-gaurav-nakra.jpg"
                  alt="Dr. Gaurav Nakra, Senior Dermatologist"
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover object-top"
                />
                
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/60 shadow flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-500" />
                  <span className="font-serif text-[10px] font-bold text-[#121316]">20+ Years Experience</span>
                </div>
              </div>
            </div>

            {/* Doctor Basic Info Column */}
            <div className="lg:col-span-7 text-left">
              <span className="font-sans text-xs md:text-sm font-black text-[#1E64EC] tracking-[0.25em] uppercase mb-2 block">
                Senior Consultant Dermatologist & Cosmetologist
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-[#121316] leading-tight mb-2">
                Dr. Gaurav Nakra
              </h1>
              <p className="font-sans text-sm md:text-base text-[#1E64EC] font-bold tracking-wide mb-6">
                MBBS, MD (Dermatology, Venereology & Leprosy) | 20+ Years Experience
              </p>

              <hr className="border-gray-200 my-4" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left text-xs mb-8">
                <div className="flex gap-3 items-center">
                  <div className="p-2 rounded-lg bg-[#EBF2FF] text-[#1E64EC] border border-[#1E64EC]/20 shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-serif font-bold text-[#121316] uppercase tracking-wider">Registration Number</div>
                    <div className="font-sans text-[#1E64EC] font-semibold mt-0.5">Delhi Medical Council No. 44068</div>
                  </div>
                </div>

                <div className="flex gap-3 items-center">
                  <div className="p-2 rounded-lg bg-[#EBF2FF] text-[#1E64EC] border border-[#1E64EC]/20 shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-serif font-bold text-[#121316] uppercase tracking-wider">Total Experience</div>
                    <div className="font-sans text-[#1E64EC] font-semibold mt-0.5">20+ Years Clinical Practice</div>
                  </div>
                </div>

                <div className="flex gap-3 items-center">
                  <div className="p-2 rounded-lg bg-[#EBF2FF] text-[#1E64EC] border border-[#1E64EC]/20 shrink-0">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-serif font-bold text-[#121316] uppercase tracking-wider">Specialties</div>
                    <div className="font-sans text-[#1E64EC] font-semibold mt-0.5">Dermatology, Cosmetology & Pediatric Dermatology</div>
                  </div>
                </div>

                <div className="flex gap-3 items-center">
                  <div className="p-2 rounded-lg bg-[#EBF2FF] text-[#1E64EC] border border-[#1E64EC]/20 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-serif font-bold text-[#121316] uppercase tracking-wider">Location</div>
                    <div className="font-sans text-[#1E64EC] font-semibold mt-0.5">Centre For Skin, Saini Enclave, Delhi</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <a 
                  href="/#booking"
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#1E64EC] hover:bg-[#154ec2] text-white text-xs uppercase tracking-wider font-bold rounded-xl shadow-md hover:shadow-lg transition-all text-center"
                >
                  Book Appointment
                </a>
                <a 
                  href="tel:01146052234"
                  className="w-full sm:w-auto px-8 py-3.5 bg-white border-2 border-gray-300 hover:border-[#1E64EC] text-[#121316] text-xs uppercase tracking-wider font-bold rounded-xl shadow-sm transition-all text-center flex justify-center items-center gap-2"
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
              <div className="bg-white border border-gray-200 p-6 rounded-[28px] shadow-lg text-left">
                <h3 className="font-serif text-lg font-black text-[#121316] mb-4 pb-2 border-b border-gray-200 flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#1E64EC]" />
                  <span>Awards & Recognitions</span>
                </h3>
                <ul className="flex flex-col gap-3 text-xs text-[#121316]/80 font-sans font-bold leading-normal">
                  <li className="flex gap-2.5 items-start">
                    <Check className="w-4 h-4 text-[#4ADE80] shrink-0 mt-0.5" />
                    <span>International Publications — International Journal of Clinical Research (2008)</span>
                  </li>
                  <li className="flex gap-2.5 items-start">
                    <Check className="w-4 h-4 text-[#4ADE80] shrink-0 mt-0.5" />
                    <span>Most Promising Dermatologist In Delhi NCR (2015)</span>
                  </li>
                  <li className="flex gap-2.5 items-start">
                    <Check className="w-4 h-4 text-[#4ADE80] shrink-0 mt-0.5" />
                    <span>Awarded for Excellence in Dermatology — Economic Times (2025)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-[28px] shadow-lg text-left">
                <h3 className="font-serif text-lg font-black text-[#121316] mb-4 pb-2 border-b border-gray-200 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#1E64EC]" />
                  <span>Memberships & Certifications</span>
                </h3>
                <ul className="flex flex-col gap-3 text-xs text-[#121316]/80 font-sans font-bold leading-normal">
                  <li className="flex gap-2.5 items-start">
                    <Check className="w-4 h-4 text-[#4ADE80] shrink-0 mt-0.5" />
                    <span>Member of Indian Association of Dermatologists, Venereologists and Leprologists (IADVL)</span>
                  </li>
                  <li className="flex gap-2.5 items-start">
                    <Check className="w-4 h-4 text-[#4ADE80] shrink-0 mt-0.5" />
                    <span>Member of Indian Medical Association (IMA)</span>
                  </li>
                  <li className="flex gap-2.5 items-start">
                    <Check className="w-4 h-4 text-[#4ADE80] shrink-0 mt-0.5" />
                    <span>Practo Verified Medical Professional (Listed since Dec 2013)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-[28px] shadow-lg text-left">
                <h3 className="font-serif text-lg font-black text-[#121316] mb-4 pb-2 border-b border-gray-200 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#1E64EC]" />
                  <span>Clinical Competences</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Clinical Dermatology', 'Aesthetic Dermatology Consultation', 'Hair Transplantation', 'Mezotherapy', 'PRP Therapy', 'Stem Cell Therapy', 'Lasers', 'Botox & Fillers', 'Anti-Ageing Treatments', 'Facelift', 'Salicylic Peel', 'Skin Polishing', 'Corn Removal', 'Skin Tag Surgical Removal', 'Buttock Lift', 'Liposuction', 'Stretch Marks Treatment', 'Acne & Psoriasis', 'Lichen Planus', 'Fungal Infections', 'Nail Disorders', 'STIs', 'Skin Grafting'].map((spec, i) => (
                    <span key={i} className="px-3 py-1.5 bg-[#EBF2FF] text-[#1E64EC] font-sans text-[10px] uppercase font-extrabold rounded-lg border border-[#1E64EC]/15">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right side: Detailed Biography */}
            <div className="lg:col-span-8 bg-white border border-gray-200 p-6 md:p-8 rounded-[28px] shadow-lg text-left">
              <h2 className="font-serif text-2xl font-black text-[#121316] mb-6 flex items-center gap-2 pb-3 border-b border-gray-200">
                <BookOpen className="w-6 h-6 text-[#1E64EC]" />
                <span>Professional Profile & Biography</span>
              </h2>

              <div className="prose max-w-none text-sm text-[#121316]/80 leading-relaxed font-sans font-medium flex flex-col gap-5">
                <p>
                  Dr. Gaurav Nakra specialized in all skin problems. He has done MD Dermatology, Venereology & Leprosy with a distinguished academic record and inquisitive approach constantly strive to keep abreast of the recent advances in Dermatology and Cosmetology and provide skin care on a patient friendly and informative basis.
                </p>
                <p>
                  With 20+ years of clinical experience, Dr. Nakra has served in key positions across prominent institutions including Dr. BSA Hospital in Rohini (2009–2012), New Look Laser Clinics (2010–2012), Safdarjung Enclave Clinic (2012–2014), GM Hospital (2009–2014), and as founder of Nakra Dermatology Centre in Vivek Vihar (2009–2014).
                </p>
                <p>
                  He offers comprehensive diagnosis and treatment across clinical dermatology (Acne, Psoriasis, Lichen Planus, Fungal Infections, STIs, Skin Grafting), aesthetic procedures (Botox, Fillers, Facelift, Buttock Lift, Liposuction, Stretch Marks, Salicylic Peels, Skin Polishing), and hair restorations (Hair Transplantation, Mezotherapy, PRP, Stem Cell Therapy).
                </p>
              </div>

              <h3 className="font-serif text-xl font-black text-[#121316] mt-10 mb-6 flex items-center gap-2 pb-2 border-b border-gray-200">
                <Briefcase className="w-5 h-5 text-[#1E64EC]" />
                <span>Practice History & Education Timeline</span>
              </h3>

              <div className="border-l-2 border-gray-200 pl-5 flex flex-col gap-6 text-left">
                {[
                  { year: '2025', title: 'Awarded for Excellence in Dermatology — Economic Times', desc: 'Honored with the "Excellence in Dermatology" award by Economic Times in 2025.' },
                  { year: '2016 – Present', title: 'Founder & Senior Consultant — Centre For Skin', desc: 'Founder and Lead Consultant at Centre For Skin in Saini Enclave, Karkardooma, East Delhi.' },
                  { year: '2015', title: 'Awarded Most Promising Dermatologist In Delhi NCR', desc: 'Recognized for clinical excellence and patient care in Delhi NCR.' },
                  { year: '2012 – 2014', title: 'Consultant Dermatologist & Trichologist — Safdarjung Enclave', desc: 'Consultant specialist delivering hair restoration and PRP therapies (2 Years).' },
                  { year: '2010 – 2012', title: 'Laser Surgeon & Aesthetic Dermatologist — New Look Laser Clinics', desc: 'Specialized laser surgeon and aesthetic dermatologist (2 Years).' },
                  { year: '2009 – 2014', title: 'Founder — Nakra Dermatology Centre, Vivek Vihar', desc: 'Founded and managed Nakra Dermatology Centre in Vivek Vihar (5 Years).' },
                  { year: '2009 – 2014', title: 'Dermatosurgeon — GM Hospital', desc: 'Served as Dermatosurgeon performing surgical skin procedures (5 Years).' },
                  { year: '2009 – 2012', title: 'Consultant Dermatologist — Dr. BSA Hospital, Rohini', desc: 'Served as Consultant Dermatologist in public healthcare (3 Years).' },
                  { year: '2009', title: 'MD — Dermatology, Venereology & Leprosy', desc: 'Completed MD specialization from D.D.U University, Gorakhpur with distinguished academic record.' },
                  { year: '2008', title: 'International Publications', desc: 'Published research paper in the International Journal of Clinical Research.' },
                  { year: '2000 – 2006', title: 'MBBS Medical Graduation', desc: 'Graduated from Motilal Nehru Medical College, Allahabad.' }
                ].map((t, idx) => (
                  <div key={idx} className="relative group">
                    <div className="absolute -left-[27px] top-1 w-3 h-3 rounded-full bg-[#1E64EC] border-2 border-white group-hover:scale-125 transition-transform" />
                    <div className="font-mono text-xs font-black text-[#1E64EC]">{t.year}</div>
                    <div className="font-serif text-sm font-bold text-[#121316] mt-0.5">{t.title}</div>
                    <p className="font-sans text-xs text-[#121316]/75 mt-1 leading-relaxed">{t.desc}</p>
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
