import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://centreforskin.in';

  // Base routes
  const routes = [
    '',
    '/doctor-gaurav-nakra',
    '/privacy-policy',
    '/terms-of-use',
    '/medical-disclaimer',
  ];

  // Location pages
  const locations = [
    '/locations/karkardooma-dermatologist',
    '/locations/preet-vihar-dermatologist',
    '/locations/laxmi-nagar-dermatologist',
    '/locations/nirman-vihar-dermatologist',
  ];

  // Service pages
  const services = [
    '/services/acne-scar-treatment-delhi',
    '/services/hair-transplant-delhi',
    '/services/laser-hair-reduction-delhi',
    '/services/vitiligo-treatment-delhi',
    '/services/chemical-peels-delhi',
    '/services/pediatric-dermatology-delhi',
    '/services/eczema-psoriasis-rosacea-delhi',
    '/services/dermatosurgery-mole-wart-delhi',
  ];

  const allPages = [...routes, ...locations, ...services];

  return allPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : route.startsWith('/locations') || route.startsWith('/services') ? 0.8 : 0.5,
  }));
}
