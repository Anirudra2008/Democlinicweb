import type { Metadata } from 'next';
import HomePageClient from '../components/HomePageClient';

export const metadata: Metadata = {
  title: 'Centre For Skin — Dr. Gaurav Nakra | Best Dermatologist in East Delhi',
  description: 'Gold Medalist Dermatologist Dr. Gaurav Nakra offers advanced skin, hair, laser, chemical peels, pediatric dermatology, and DHI hair transplants at Centre For Skin in Saini Enclave near Karkardooma Metro, East Delhi.',
  alternates: {
    canonical: 'https://centreforskin.in/',
  },
  openGraph: {
    title: 'Centre For Skin — Dr. Gaurav Nakra | Best Dermatologist in East Delhi',
    description: 'Gold Medalist Dermatologist Dr. Gaurav Nakra offers advanced skin, hair, laser, chemical peels, pediatric dermatology, and DHI hair transplants at Centre For Skin in Saini Enclave near Karkardooma Metro, East Delhi.',
    url: 'https://centreforskin.in/',
    siteName: 'Centre For Skin',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://centreforskin.in/logo.png',
        width: 800,
        height: 800,
        alt: 'Centre For Skin Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Centre For Skin — Dr. Gaurav Nakra | Best Dermatologist in East Delhi',
    description: 'Gold Medalist Dermatologist Dr. Gaurav Nakra offers advanced skin, hair, laser, chemical peels, pediatric dermatology, and DHI hair transplants at Centre For Skin in Saini Enclave near Karkardooma Metro, East Delhi.',
    images: ['https://centreforskin.in/logo.png'],
  },
};

export default function Home() {
  const clinicSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Centre For Skin — Dr. Gaurav Nakra",
    "alternateName": "Centre For Skin",
    "image": "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800&fm=webp",
    "@id": "https://centreforskin.in/#clinic",
    "url": "https://centreforskin.in/",
    "telephone": "01146052234",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "178, Basement, Saini Enclave, Near Karkardooma Metro Station, Anand Vihar",
      "addressLocality": "East Delhi",
      "addressRegion": "Delhi",
      "postalCode": "110092",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 28.653178,
      "longitude": 77.300583
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "12:30",
      "closes": "19:30"
    },
    "medicalSpecialty": [
      "Dermatology"
    ],
    "availableService": [
      {
        "@type": "MedicalProcedure",
        "name": "Laser Hair Reduction"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Acne Scar Treatment"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Hair Transplant"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Chemical Peels"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Pediatric Dermatology"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Dermatosurgery"
      }
    ]
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Centre For Skin",
    "url": "https://centreforskin.in/",
    "logo": "https://centreforskin.in/logo.png",
    "sameAs": [
      "https://www.google.com/maps?cid=16522818987483654551"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <HomePageClient />
    </>
  );
}
