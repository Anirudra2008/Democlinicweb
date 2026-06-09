'use client';

import React, { useState, useEffect, useRef } from 'react';
import Script from 'next/script';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Mail, 
  ChevronRight, 
  ChevronDown, 
  Activity, 
  Star, 
  Menu, 
  X, 
  ArrowUp, 
  Check, 
  Sparkles, 
  Scissors, 
  User, 
  Award, 
  BookOpen, 
  Calendar, 
  Info,
  ExternalLink,
  Atom,
  Eye,
  Plus,
  Smile,
  ShieldCheck,
  Zap,
  Globe2
} from 'lucide-react';

// DECLARE WEATHER & OTHER GLOBAL VARIABLES FOR TS SATISFACTION
declare global {
  interface Window {
    THREE: any;
    gsap: any;
    ScrollTrigger: any;
    Lenis: any;
  }
}

// TIMELINE DATA
const TIMELINE = [
  { year: '2006', title: 'MBBS Graduation', desc: 'Graduated from the prestigious Motilal Nehru Medical College, Allahabad, laying a solid foundation in medical sciences.' },
  { year: '2010', title: 'MD — Dermatology, Venereology & Leprosy', desc: 'Completed MD specialization from Kasturba Medical College / DDU University with academic honors.' },
  { year: '2012', title: 'Senior Consultancy Roles', desc: 'Appointed as highly sought-after Consultant at Dr. BSA Hospital, Rohini and DHI Safdarjung Enclave.' },
  { year: '2016', title: 'Founding of Centre For Skin', desc: 'Established the state-of-the-art clinic in Saini Enclave to offer international-standard healthcare to East Delhi.' },
];

// DEPARTMENTS / SERVICES
const SERVICES = [
  {
    id: 'clinical',
    icon: Activity,
    title: 'Clinical Dermatology',
    titleHindi: 'क्लिनिकल डर्मेटोलॉजी',
    desc: 'Expert diagnostic assessments and customized medical treatments for chronic and acute skin disorders.',
    treatments: ['Acne & Acne Vulgaris', 'Eczema & Atopic Dermatitis', 'Psoriasis Management', 'Rosacea & Facial Redness', 'Vitiligo Light/Dermal therapies', 'Warts, Moles & Skin Tags', 'Fungal & Bacterial Infections', 'Pruritus / Severe itching treatments']
  },
  {
    id: 'aesthetic',
    icon: Sparkles,
    title: 'Aesthetic Dermatology',
    titleHindi: 'सौंदर्य त्वचाविज्ञान',
    desc: 'Refined anti-aging and facial rejuvenation procedures designed to restore natural facial harmony and youthful volume.',
    treatments: ['Botulinum Toxin (Botox) Lifts', 'Hyaluronic Acid Dermal Fillers', 'Advanced PDO/PLLA Thread Lifts', 'Micro-Needling Collagen Induction', 'Double Chin Kybella reduction', 'Skin Booster Micro-droplets', 'Mesotherapy Rejuvenation']
  },
  {
    id: 'laser',
    icon: Zap,
    title: 'Advanced Laser Treatments',
    titleHindi: 'उन्नत लेज़र उपचार',
    desc: 'State-of-the-art fractional, pigmentary, and vascular lasers delivering precision skin resurfacing and pigment clearing.',
    treatments: ['Permanent Hair Reduction (Triple-Wavelength Diode/ND-YAG)', 'Q-Switched ND-YAG Tattoo & Melasma Removal', 'Fractional CO2 Laser for Acne Scars', 'IPL Photofacials & Sun damage repair', 'Vascular Birthmark & spider veins correction', 'Laser Carbon Peels / Hollywood Peel']
  },
  {
    id: 'hair',
    icon: User,
    title: 'Hair Restoration Clinic',
    titleHindi: 'बाल बहाली क्लिनिक',
    desc: 'Comprehensive and clinically-verified medical and surgical protocols for male and female pattern baldness and alopecia.',
    treatments: ['DHI Certified Hair Transplantation', 'Platelet-Rich Plasma (PRP) Therapy', 'Mesotherapy Hair Booster injections', 'Stem Cell Micro-graft follicle activation', 'High-Frequency laser follicle stimulation', 'Nutritional and hormonal thinning therapy']
  },
  {
    id: 'peels',
    icon: Atom,
    title: 'Chemical Peels & Resurfacing',
    titleHindi: 'रासायनिक पील्स',
    desc: 'Formulated medical-grade organic acid treatments targeting skin texture, hyperpigmentation, and facial clarity.',
    treatments: ['Salicylic & Glycolic Anti-Acne Peels', 'Yellow Peel / Retinol resurfacing', 'TCA Peels for deep-seated scars', 'Melasmax/Cosmelan Pigmentation Peels', 'Microdermabrasion Diamond Resurfacing', 'Dermaroller Skin rejuvenation']
  },
  {
    id: 'pediatric',
    icon: Smile,
    title: 'Pediatric Dermatology',
    titleHindi: 'बाल चिकित्सा त्वचा रोग',
    desc: 'Gentle, compassionate, and precise management of sensitive dermatological situations in infants, kids, and adolescents.',
    treatments: ['Infantile Atopic Eczema', 'Congenital Hemangiomas & Birthmarks', 'Pediatric Psoriasis & Rashes', 'Viral warts & contagiosum extraction', 'Diaper Rash & cradle cap care']
  },
  {
    id: 'surgery',
    icon: Scissors,
    title: 'Advanced Dermatosurgery',
    titleHindi: 'उन्नत डर्मेटोसर्जरी',
    desc: 'Surgical excision, radiofrequency ablation, and vitiligo grafting conducted in a highly sterile operatory room.',
    treatments: ['Cryotherapy freezing for skin growths', 'Electrocautery / Radiofrequency ablation', 'Suction blister skin grafting for Vitiligo', 'Partial & total medical nail surgery', 'Mole, cyst & lipoma surgical excision']
  }
];

// TESTIMONIALS
const TESTIMONIALS = [
  {
    name: 'Amanpreet Singh',
    treatment: 'Laser Acne Scar Treatment',
    rating: 5,
    text: 'Dr. Gaurav Nakra is incredibly detailed and knowledgeable. I had deep acne scars from high school, and after 4 sessions of Fractional CO2 laser combined with PRP, my skin feels 80% smoother. The clinic is highly advanced, clean, and Dr. Nakra explains everything scientifically. Truly the best dermatologist in Delhi!'
  },
  {
    name: 'Priyanka Sharma',
    treatment: 'Hair PRP & DHI Hair Transplant',
    rating: 5,
    text: 'Highly recommend Centre For Skin for hair issues! My brother did a hair transplant and I did 4 sessions of PRP with amazing follicle density improvement. Dr. Gaurav is certified, listens to all concerns patiently, and never pushes unneeded treatments. Excellent team and transparent pricing.'
  },
  {
    name: 'Rajesh Gupta',
    treatment: 'Clinical Eczema & Allergies',
    rating: 5,
    text: 'I was suffering from severe skin eczema for 3 years, consulting multiple doctors in East Delhi with temporary reliefs. Dr. Gaurav Nakra correctly diagnosed the underlying contact allergy. With his point-by-point lifestyle guide and structured medical dose, I am completely rash-free. Very polite doctor!'
  }
];

// FAQS
const FAQS = [
  {
    q: 'How safe are laser treatments and which laser technology do you support?',
    a: 'Absolutely safe. At Centre For Skin, we only utilize US-FDA approved laser technologies including gold-standard triple wavelength diodes for hair reduction and Fractional Q-Switched / CO2 lasers for scars and pigmentation. All laser profiles are carefully configured and supervised personally by Dr. Gaurav Nakra according to your specific Fitzpatrick skin scale type to completely avoid any hyperpigmentation or burns.'
  },
  {
    q: 'What is the cost of acne & scar treatment at Centre For Skin?',
    a: 'The costs are tailored depending on clinical severity, starting from very competitive clinical consultation fees. Clinical chemical peels range between ₹1,500 - ₹3,500, while advanced customized laser resurfacing or PRP combination packages are structured in cycles based on your direct scarring depth. We guarantee strict pricing transparency without hidden console charges.'
  },
  {
    q: 'How many sessions are required for the DHI Hair Transplant and PRP Therapy?',
    a: 'PRP therapy generally yields visible improvement in hair density and reduction in hair-fall across 4 to 6 monthly sessions. For advanced Grade 3-7 alopecia, a single-day DHI Hair Transplant is designed which safely implants active grafts one-by-one with natural angling. Dr. Nakra is a DHI Certified Specialist, ensuring high graft survival rates.'
  },
  {
    q: 'Do I need to book an appointment in advance or accept walk-in patients?',
    a: 'We strongly recommend scheduling appointments beforehand to minimize wait-times and ensure focused consultation, as Dr. Nakra personally spends dedicated diagnostic time with each patient. However, emergency clinical cases are evaluated with priority. You can easily schedule an appointment via our WhatsApp link or our online scheduling form.'
  },
  {
    q: 'Is pediatric dermatology treatment safe for infants?',
    a: 'Yes, pediatric skin is uniquely thin and absorbs drugs differently. Dr. Gaurav Nakra has specialized training and certified clinical memberships for pediatric dermatology. He prescribes specific non-steroidal, hypoallergenic topicals and gentle treatments specifically optimized for young skin barriers.'
  }
];

// CLINICAL GALLERY
const GALLERY = [
  { url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800', title: 'Consultation Suite', desc: 'Private clinical consultation room where detailed skin and hair diagnostics are performed.' },
  { url: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800', title: 'Advanced Laser Zone', desc: 'Sterile environment holding state-of-the-art FDA-cleared laser systems.' },
  { url: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=800', title: 'Procedure Room', desc: 'Surgical operatory equipped for vitiligo grafting, skin biopsy, and cyst excisions.' },
  { url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800', title: 'Clinical Patient Lounge', desc: 'Calming, spacious reception and waiting area designed for comfort & privacy.' },
  { url: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&q=80&w=800', title: 'Diagnostics lab', desc: 'Premium diagnostic setups for microscopic skin testing & hair follicle trichoscopy.' },
  { url: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800', title: 'Sterilization Bay', desc: 'Clinical grade autoclave and triple-stage instrument disinfection setup.' },
  { url: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&q=80&w=800', title: 'Aesthetic Treatment Suite', desc: 'Calming lighting and comfortable ergonomic beds for facial peels & facial lifts.' },
  { url: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800', title: 'Trichology PRP Setup', desc: 'Specialized centrifuge system for top-grade clinical Platelet-Rich Plasma extraction.' }
];

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [loadPercent, setLoadPercent] = useState(0);
  const [activeTab, setActiveTab] = useState('clinical');
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isCursorHovering, setIsCursorHovering] = useState(false);
  
  // Hindi translation states
  const [isHindi, setIsHindi] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    department: 'Clinical Dermatology',
    date: '',
    msg: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  // Refs
  const bgCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const heroCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const scrollRef = useRef<number>(0);

  // Simulated Loading sequence
  useEffect(() => {
    let currentPercent = 0;
    const interval = setInterval(() => {
      currentPercent += Math.floor(Math.random() * 15) + 5;
      if (currentPercent >= 100) {
        currentPercent = 100;
        clearInterval(interval);
        setTimeout(() => {
          setLoading(false);
        }, 300);
      }
      setLoadPercent(currentPercent);
    }, 80);
    return () => clearInterval(interval);
  }, []);

  // Window Scroll & Event logic
  useEffect(() => {
    let tickingScroll = false;
    let tickingMouse = false;
    let lastX = -100;
    let lastY = -100;

    const updateDOMScroll = () => {
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      
      const progressBar = document.getElementById('scroll-progress-bar');
      if (progressBar) {
        progressBar.style.width = scrolled + '%';
      }

      const shouldShowBackToTop = winScroll > 400;
      setShowBackToTop((prev) => {
        if (prev !== shouldShowBackToTop) return shouldShowBackToTop;
        return prev;
      });

      // Store scroll ref for particle modification
      scrollRef.current = winScroll;
      tickingScroll = false;
    };

    const updateDOMMouse = () => {
      const cursor = document.getElementById('custom-cursor');
      if (cursor) {
        cursor.style.left = lastX + 'px';
        cursor.style.top = lastY + 'px';
      }
      tickingMouse = false;
    };

    const handleScroll = () => {
      if (!tickingScroll) {
        requestAnimationFrame(updateDOMScroll);
        tickingScroll = true;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      lastX = e.clientX;
      lastY = e.clientY;
      if (!tickingMouse) {
        requestAnimationFrame(updateDOMMouse);
        tickingMouse = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Initial positioning
    const initialProgressBar = document.getElementById('scroll-progress-bar');
    if (initialProgressBar) {
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      initialProgressBar.style.width = scrolled + '%';
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Three.js Loader and Initializer
  useEffect(() => {
    if (loading) return;

    let bgRenderer: any, bgScene: any, bgCamera: any, bgParticles: any;
    let heroRenderer: any, heroScene: any, heroCamera: any, heroPoints: any;
    let animationFrameId: number;
    let resizeObserver: ResizeObserver;

    const initThree = () => {
      // Check if window.THREE has loaded via CDN scripts
      if (!window.THREE) return;

      const THREE = window.THREE;

      // ==========================================
      // BG CANVAS: Float particles
      // ==========================================
      const bgCanvas = bgCanvasRef.current;
      if (bgCanvas) {
        bgScene = new THREE.Scene();
        bgCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        bgCamera.position.z = 20;

        bgRenderer = new THREE.WebGLRenderer({ canvas: bgCanvas, alpha: true, antialias: true });
        bgRenderer.setSize(window.innerWidth, window.innerHeight);
        bgRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = window.innerWidth < 768 ? 40 : 120;
        const posArray = new Float32Array(particlesCount * 3);
        const speedArray = new Float32Array(particlesCount);

        for (let i = 0; i < particlesCount * 3; i += 3) {
          // Spread in 3D grid
          posArray[i] = (Math.random() - 0.5) * 40;
          posArray[i + 1] = (Math.random() - 0.5) * 30;
          posArray[i + 2] = (Math.random() - 0.5) * 20;
          speedArray[i/3] = 0.01 + Math.random() * 0.015;
        }

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

        // Premium Soft sphere textures
        const createParticleTexture = () => {
          const canvas = document.createElement('canvas');
          canvas.width = 16;
          canvas.height = 16;
          const ctx = canvas.getContext('2d');
          if (ctx) {
            const gradient = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
            gradient.addColorStop(0, 'rgba(125, 160, 202, 0.8)'); // Soft blue #7DA0CA
            gradient.addColorStop(0.5, 'rgba(193, 232, 255, 0.3)'); // Light blue #C1E8FF
            gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, 16, 16);
          }
          return new THREE.CanvasTexture(canvas);
        };

        const particlesMaterial = new THREE.PointsMaterial({
          size: 1.2,
          map: createParticleTexture(),
          transparent: true,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        });

        bgParticles = new THREE.Points(particlesGeometry, particlesMaterial);
        bgScene.add(bgParticles);
      }

      // ==========================================
      // HERO CANVAS: Dermis grid wave rotating mesh
      // ==========================================
      const heroCanvas = heroCanvasRef.current;
      const heroContainer = heroCanvas?.parentElement;
      if (heroCanvas && heroContainer) {
        const containerWidth = heroContainer.clientWidth;
        const containerHeight = heroContainer.clientHeight || 450;

        heroScene = new THREE.Scene();
        heroCamera = new THREE.PerspectiveCamera(45, containerWidth / containerHeight, 0.1, 100);
        heroCamera.position.set(0, 10, 25);
        heroCamera.lookAt(0, 0, 0);

        heroRenderer = new THREE.WebGLRenderer({ canvas: heroCanvas, alpha: true, antialias: true });
        heroRenderer.setSize(containerWidth, containerHeight);
        heroRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        // Create elegant mesh grid
        const cols = 25;
        const rows = 25;
        const count = cols * rows;
        const gridGeometry = new THREE.BufferGeometry();
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);

        let idx = 0;
        for (let x = 0; x < cols; x++) {
          for (let z = 0; z < rows; z++) {
            const px = (x - cols / 2) * 0.8;
            const pz = (z - rows / 2) * 0.8;
            positions[idx] = px;
            positions[idx + 1] = Math.sin(x * 0.4) * Math.cos(z * 0.4) * 0.8;
            positions[idx + 2] = pz;

            // Color gradient from royal blue #052659 to soft blue #7DA0CA
            const ratio = x / cols;
            colors[idx] = 0.02 + ratio * 0.3; // R
            colors[idx + 1] = 0.15 + ratio * 0.3; // G
            colors[idx + 2] = 0.35 + ratio * 0.4; // B
            idx += 3;
          }
        }

        gridGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        gridGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        const createNodeTexture = () => {
          const canvas = document.createElement('canvas');
          canvas.width = 32;
          canvas.height = 32;
          const ctx = canvas.getContext('2d');
          if (ctx) {
            const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
            gradient.addColorStop(0, '#FFFFFF');
            gradient.addColorStop(0.3, 'rgba(84, 131, 179, 1)'); // Medium Blue #5483B3
            gradient.addColorStop(0.6, 'rgba(5, 38, 89, 0.5)'); // Royal Blue #052659
            gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(16, 16, 16, 0, Math.PI * 2);
            ctx.fill();
          }
          return new THREE.CanvasTexture(canvas);
        };

        const gridMaterial = new THREE.PointsMaterial({
          size: 0.7,
          map: createNodeTexture(),
          transparent: true,
          vertexColors: true,
          depthWrite: false,
        });

        heroPoints = new THREE.Points(gridGeometry, gridMaterial);
        heroScene.add(heroPoints);

        // Add soft light
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        heroScene.add(ambientLight);
      }

      // ==========================================
      // ANIMATION LOOP
      // ==========================================
      let frame = 0;
      const animate = () => {
        frame += 0.01;
        animationFrameId = requestAnimationFrame(animate);

        // Animate BG Particles (falling down, affected by scroll velocity)
        if (bgParticles) {
          const positions = bgParticles.geometry.attributes.position.array;
          const particlesCount = positions.length / 3;
          const scrollSpeed = scrollRef.current * 0.005;

          for (let i = 0; i < particlesCount; i++) {
            // Constant vertical drift, augmented by scroll velocity
            positions[i * 3 + 1] -= (0.012 + scrollSpeed * 0.04);
            // Gentle side oscillating sway
            positions[i * 3] += Math.sin(frame + i) * 0.005;

            // Recycle particles if they fall out of viewport
            if (positions[i * 3 + 1] < -18) {
              positions[i * 3 + 1] = 18;
              positions[i * 3] = (Math.random() - 0.5) * 40;
            }
          }
          bgParticles.geometry.attributes.position.needsUpdate = true;
          bgParticles.rotation.y = frame * 0.05;
        }

        // Animate Dermis Wave
        if (heroPoints) {
          const positions = heroPoints.geometry.attributes.position.array;
          const colsCount = 25;
          const rowsCount = 25;
          let idx = 0;

          for (let x = 0; x < colsCount; x++) {
            for (let z = 0; z < rowsCount; z++) {
              // Custom dynamic math for luxurious rolling waves representing elastic skin layers
              const amp1 = Math.sin(x * 0.35 + frame * 1.5) * 0.45;
              const amp2 = Math.cos(z * 0.35 + frame * 1.2) * 0.45;
              positions[idx + 1] = amp1 + amp2;
              idx += 3;
            }
          }
          heroPoints.geometry.attributes.position.needsUpdate = true;
          heroPoints.rotation.y = frame * 0.15;
          heroPoints.rotation.x = Math.sin(frame * 0.2) * 0.05;
        }

        if (bgRenderer && bgScene && bgCamera) {
          bgRenderer.render(bgScene, bgCamera);
        }
        if (heroRenderer && heroScene && heroCamera) {
          heroRenderer.render(heroScene, heroCamera);
        }
      };

      animate();

      // ==========================================
      // RESIZE OBSERVER (Constraint Standard adherence)
      // ==========================================
      resizeObserver = new ResizeObserver(() => {
        if (bgRenderer && bgCamera) {
          bgCamera.aspect = window.innerWidth / window.innerHeight;
          bgCamera.updateProjectionMatrix();
          bgRenderer.setSize(window.innerWidth, window.innerHeight);
        }
        if (heroRenderer && heroCamera && heroCanvas && heroCanvas.parentElement) {
          const width = heroCanvas.parentElement.clientWidth;
          const height = heroCanvas.parentElement.clientHeight || 450;
          heroCamera.aspect = width / height;
          heroCamera.updateProjectionMatrix();
          heroRenderer.setSize(width, height);
        }
      });

      resizeObserver.observe(document.body);
      if (heroCanvas?.parentElement) {
        resizeObserver.observe(heroCanvas.parentElement);
      }
    };

    // Check script loads and trigger
    const timer = setInterval(() => {
      if (window.THREE) {
        clearInterval(timer);
        initThree();
      }
    }, 150);

    return () => {
      clearInterval(timer);
      cancelAnimationFrame(animationFrameId);
      if (resizeObserver) resizeObserver.disconnect();
      if (bgRenderer) bgRenderer.dispose();
      if (heroRenderer) heroRenderer.dispose();
    };
  }, [loading]);

  // GSAP ScrollTrigger initiation
  useEffect(() => {
    if (loading) return;

    const timer = setInterval(() => {
      // Confirm all CDNs fully loaded
      if (window.gsap && window.ScrollTrigger) {
        clearInterval(timer);

        const gsap = window.gsap;
        const ScrollTrigger = window.ScrollTrigger;
        gsap.registerPlugin(ScrollTrigger);

        // Globally silence null target warnings from GSAP to ensure pristine console and zero errors
        gsap.config({ nullTargetWarn: false });

        // Initialize GSAP Entrance Animations
        // Text stagger reveals
        const headings = document.querySelectorAll('.gsap-reveal');
        if (headings && headings.length > 0) {
          headings.forEach((heading) => {
            gsap.fromTo(heading, 
              { opacity: 0, y: 50 },
              { 
                opacity: 1, 
                y: 0, 
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                  trigger: heading,
                  start: 'top 85%',
                  toggleActions: 'play none none none',
                }
              }
            );
          });
        }

        // Cards stagger slide-up
        const cards = document.querySelectorAll('.gsap-card');
        if (cards && cards.length > 0) {
          gsap.fromTo(cards,
            { opacity: 0, y: 60 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.15,
              ease: 'back.out(1.2)',
              scrollTrigger: {
                trigger: cards[0],
                start: 'top 85%',
              }
            }
          );
        }

        // Parallax sections
        const parallaxHero = document.querySelector('.hero-parallax');
        if (parallaxHero) {
          gsap.to(parallaxHero, {
            yPercent: 15,
            ease: 'none',
            scrollTrigger: {
              trigger: '#home',
              start: 'top top',
              end: 'bottom top',
              scrub: true
            }
          });
        }
      }
    }, 150);

    return () => {
      clearInterval(timer);
    };
  }, [loading]);

  // Form Booking Submission Handler
  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    // Field Verifications
    if (!formData.name.trim()) {
      setFormError('Please enter your full name.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      setFormError('Please provide a valid 10-digit mobile number.');
      return;
    }
    if (!formData.date) {
      setFormError('Please select a suitable treatment date.');
      return;
    }

    // Success response trigger
    setFormSubmitted(true);
    // Auto-reset
    setTimeout(() => {
      setFormData({
        name: '',
        phone: '',
        email: '',
        department: 'Clinical Dermatology',
        date: '',
        msg: ''
      });
    }, 2000);
  };

  return (
    <>
      {/* CDN External script loaders */}
      <Script 
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js" 
        strategy="beforeInteractive" 
      />
      <Script 
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" 
        strategy="beforeInteractive" 
      />
      <Script 
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js" 
        strategy="beforeInteractive" 
      />
      <Script 
        src="https://cdn.jsdelivr.net/npm/@studio-freight/lenis@1.0.42/dist/lenis.min.js" 
        strategy="beforeInteractive" 
      />

      {/* Floating Scroll Indicator progress bar */}
      <div 
        id="scroll-progress-bar"
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-[#052659] via-[#5483B3] to-[#4ADE80] z-[999] transition-all duration-75"
        style={{ width: '0%' }}
      />

      {/* CUSTOM CURSOR: Professional subtle desktop cursor */}
      <div 
        id="custom-cursor"
        className={`fixed pointer-events-none z-[1000] hidden md:block rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-150 ease-out border ${
          isCursorHovering 
            ? 'w-14 h-14 bg-[#5483B3]/20 border-[#5483B3] scale-110' 
            : 'w-7 h-7 bg-transparent border-[#052659]/60'
        }`}
        style={{ left: '-100px', top: '-100px' }}
      />

      {/* BACKGROUND GRAPHIC INTERACTION: Three.js Particles with Editorial Blurs */}
      <canvas 
        ref={bgCanvasRef} 
        id="bg-three-js"
        className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 bg-[#C1E8FF]/30 bg-gradient-to-b from-[#C1E8FF]/40 to-white" 
      />
      <div className="fixed top-[10%] right-[5%] w-72 h-72 bg-[#5483B3]/20 blur-[100px] rounded-full pointer-events-none -z-10 animate-pulse" />
      <div className="fixed bottom-[20%] left-[10%] w-96 h-96 bg-[#052659]/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* PRELOADER LOADING COVER */}
      {loading && (
        <div 
          id="preloader-overlay"
          className="fixed inset-0 bg-[#021024] flex flex-col justify-center items-center z-[9999] transition-all duration-500"
        >
          <div className="text-center px-4 max-w-md w-full">
            {/* Pulsing Medical Cross Icon */}
            <div className="w-16 h-16 bg-gradient-to-tr from-[#5483B3] to-[#C1E8FF] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl animate-pulse">
              <Activity className="w-9 h-9 text-[#021024]" />
            </div>

            {/* Glowing Clinic Branding */}
            <h1 className="text-2xl md:text-3xl font-serif text-[#C1E8FF] tracking-wider mb-2 select-none font-bold">
              CENTRE FOR SKIN
            </h1>
            <p className="text-xs md:text-sm text-[#7DA0CA] font-sans uppercase tracking-[0.2em] mb-8 font-medium">
              Medical & Aesthetic Excellence
            </p>

            {/* Micro progress line */}
            <div className="w-full h-[3px] bg-[#052659] rounded-full overflow-hidden mb-3">
              <div 
                className="h-full bg-gradient-to-r from-[#5483B3] to-[#C1E8FF] transition-all ease-out duration-75"
                style={{ width: `${loadPercent}%` }}
              />
            </div>

            <div className="flex justify-between items-center text-[11px] font-mono text-[#7DA0CA] tracking-wider">
              <span>INITIALIZING 3D ENGINE</span>
              <span>{loadPercent}%</span>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          HEADER & NAVIGATION (WCAG Glassmorphism)
         ========================================== */}
      <header 
        id="clinic-header"
        className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white/80 backdrop-blur-xl border-b border-[#7DA0CA]/10 shadow-md shadow-[#021024]/3"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 md:py-4 flex justify-between items-center">
          {/* Brand Logo & Name */}
          <a 
            href="#home" 
            className="flex items-center gap-3 group focus:outline-2 focus:outline-[#052659] rounded-lg"
            aria-label="Centre For Skin — Dr. Gaurav Nakra Homepage"
            onMouseEnter={() => setIsCursorHovering(true)}
            onMouseLeave={() => setIsCursorHovering(false)}
          >
            <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-[#052659] flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-[#052659]/30 group-hover:scale-105 transition-transform duration-300">
              <span className="text-sm font-serif">CS</span>
            </div>
            <div>
              <div className="font-serif text-base md:text-xl font-bold text-[#021024] leading-tight flex items-center gap-1">
                Centre For Skin
              </div>
              <div className="font-sans text-[10px] md:text-xs text-[#5483B3] tracking-widest uppercase font-semibold">
                {isHindi ? 'डॉ. गौरव नकरा' : 'Dr. Gaurav Nakra'}
              </div>
            </div>
          </a>

          {/* Desktop Navigation Link rails */}
          <nav 
            className="hidden lg:flex items-center gap-1"
            aria-label="Main Clinical Directories"
          >
            {[
              { id: 'home', label: 'Home', labelHn: 'होम' },
              { id: 'about', label: 'About', labelHn: 'हमारे बारे में' },
              { id: 'departments', label: 'Departments', labelHn: 'विभाग' },
              { id: 'doctor', label: 'Doctor Profile', labelHn: 'चिकित्सक विवरण' },
              { id: 'testimonials', label: 'Testimonials', labelHn: 'अभिप्राय' },
              { id: 'gallery', label: 'Clinic Gallery', labelHn: 'गैलरी' },
              { id: 'contact', label: 'Contact', labelHn: 'संपर्क करें' },
            ].map((link) => (
              <a 
                key={link.id}
                href={`#${link.id}`} 
                className="px-4 py-2 text-sm font-semibold text-[#052659] hover:text-[#5483B3] transition-colors relative group focus:outline-2 focus:outline-[#5483B3] rounded-md"
                onMouseEnter={() => setIsCursorHovering(true)}
                onMouseLeave={() => setIsCursorHovering(false)}
              >
                {isHindi ? link.labelHn : link.label}
                <span className="absolute bottom-1.5 left-4 right-4 h-[2px] bg-[#5483B3] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
              </a>
            ))}
          </nav>

          {/* Languages, CTA buttons */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Language Translator toggle */}
            <button
              onClick={() => setIsHindi(!isHindi)}
              className="px-2.5 py-1.5 rounded-lg border border-[#7DA0CA] bg-white hover:bg-[#C1E8FF]/30 text-xs font-bold text-[#052659] flex items-center gap-1.5 transition-all shadow-sm cursor-pointer"
              aria-label="HINDI Translate Toggle"
              onMouseEnter={() => setIsCursorHovering(true)}
              onMouseLeave={() => setIsCursorHovering(false)}
            >
              <Globe2 className="w-3.5 h-3.5" />
              <span>{isHindi ? 'English' : 'हिंदी'}</span>
            </button>

            {/* Booking CTA trigger */}
            <a 
              href="#booking"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-[#052659] hover:bg-[#5483B3] text-white font-sans text-xs uppercase tracking-wider font-bold rounded-xl shadow-md hover:shadow-lg transition-all border border-[#052659] hover:scale-102 focus:outline-2 focus:outline-offset-2 focus:outline-[#052659]"
              onMouseEnter={() => setIsCursorHovering(true)}
              onMouseLeave={() => setIsCursorHovering(false)}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>{isHindi ? 'अपॉइंटमेंट लें' : 'Book Appointment'}</span>
            </a>

            {/* Mobile Hamburger menu */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-[#021024] hover:bg-[#C1E8FF]/50 rounded-lg focus:outline-2 focus:outline-[#052659] select-none cursor-pointer"
              aria-label="Toggle Mobile Directory Drawer"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Hamburger slide Drawer */}
        {isMobileMenuOpen && (
          <div 
            id="mobile-drawer"
            className="lg:hidden w-full bg-white border-t border-[#7DA0CA]/30 shadow-xl transition-all duration-300 flex flex-col p-4 gap-2 pb-6"
          >
            {[
              { id: 'home', label: 'Home', labelHn: 'होम' },
              { id: 'about', label: 'About', labelHn: 'हमारे बारे में' },
              { id: 'departments', label: 'Departments', labelHn: 'विभाग' },
              { id: 'doctor', label: 'Doctor Profile', labelHn: 'चिकित्सक विवरण' },
              { id: 'testimonials', label: 'Testimonials', labelHn: 'अभिप्राय' },
              { id: 'gallery', label: 'Clinic Gallery', labelHn: 'गैलरी' },
              { id: 'contact', label: 'Contact', labelHn: 'संपर्क करें' },
            ].map((link) => (
              <a 
                key={link.id}
                href={`#${link.id}`} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2.5 px-4 text-base font-bold text-[#052659] hover:bg-[#C1E8FF]/20 rounded-lg flex justify-between items-center transition-colors"
              >
                <span>{isHindi ? link.labelHn : link.label}</span>
                <ChevronRight className="w-4 h-4 text-[#7DA0CA]" />
              </a>
            ))}
            <a 
              href="#booking"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-3 w-full py-3.5 bg-[#052659] text-white flex justify-center items-center gap-2 font-bold uppercase tracking-wider text-xs rounded-xl shadow-md"
            >
              <Calendar className="w-4 h-4" />
              <span>{isHindi ? 'अपॉइंटमेंट लें' : 'Book Appointment'}</span>
            </a>
          </div>
        )}
      </header>


      {/* ==========================================
          SECTION 1: HERO / HOME SECTION
         ========================================== */}
      <section 
        id="home"
        className="min-h-screen pt-24 md:pt-32 pb-16 flex items-center relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          
          {/* Left panel core column info */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left hero-parallax">
            {/* Floating Clinic Live Status badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-[#7DA0CA]/50 shadow-md w-fit mb-6 animate-bounce">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ADE80] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#4ADE80]" />
              </span>
              <span className="font-sans text-[11px] md:text-xs font-bold text-[#052659] tracking-wider uppercase">
                {isHindi ? 'सेंटर फॉर स्किन — डॉ. गौरव नकरा' : 'Dermatology & Aesthetic Clinic'}
              </span>
            </div>

            {/* Main Displays Header */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black text-[#021024] leading-tight mb-3">
              <span className="bg-gradient-to-r from-[#052659] via-[#5483B3] to-[#021024] bg-clip-text text-transparent">
                Centre For Skin
              </span>
              <span className="block text-2xl sm:text-3xl text-[#5483B3] font-sans font-medium mt-1">
                {isHindi ? 'सेंटर फॉर स्किन — डीआर. गौरव नकरा' : 'Dr. Gaurav Nakra'}
              </span>
            </h1>

            {/* Tagline details */}
            <p className="text-base sm:text-lg text-[#052659]/80 max-w-2xl font-normal leading-relaxed mb-8">
              {isHindi ? 
                'पूर्वी दिल्ली में 18+ वर्षों के विशिष्ट अनुभव के साथ त्वचा, बाल, और लेज़र उपचार का सबसे विश्वसनीय केंद्र। स्वर्ण पदक विजेता विशेषज्ञ द्वारा उत्तम देखभाल।' : 
                'Highly specialized, award-winning dermatological science in East Delhi. Providing gold-standard lasers, certified hair restorations, anti-aging lifts, and certified clinical skin therapeutics with compassionate precision.'}
            </p>

            {/* Trust key statistics pills row */}
            <div className="grid grid-cols-3 gap-3 md:gap-4 max-w-xl mb-10">
              {[
                { label: 'MD Gold Medalist', desc: isHindi ? 'शीर्ष सम्मानित' : 'Top Credentialed' },
                { label: '18+ Years', desc: isHindi ? 'विशिष्ट अनुभव' : 'Clinical Expertise' },
                { label: '4.5★ (508+ Reviews)', desc: isHindi ? 'संतुष्ट मरीज अभिप्राय' : 'Google Rating' }
              ].map((stat, i) => (
                <div key={i} className="bg-white/80 backdrop-blur-md rounded-2xl p-4 border border-white hover:translate-y-[-2px] hover:shadow-xl transition-all shadow-[#021024]/5 shadow-sm">
                  <div className="font-serif text-sm md:text-base font-black text-[#021024] underline decoration-[#FACC15] decoration-4 underline-offset-4">{stat.label}</div>
                  <div className="font-sans text-[10px] md:text-xs text-[#5483B3] uppercase tracking-wider font-bold mt-1">{stat.desc}</div>
                </div>
              ))}
            </div>

            {/* Action Buttons trigger */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a 
                href="#booking"
                className="w-full sm:w-auto px-8 py-4 bg-[#052659] hover:bg-[#5483B3] text-white text-xs uppercase tracking-wider font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all flex justify-center items-center gap-2 group border border-[#052659]"
                onMouseEnter={() => setIsCursorHovering(true)}
                onMouseLeave={() => setIsCursorHovering(false)}
              >
                <Calendar className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                <span>{isHindi ? 'अभी अपॉइंटमेंट बुक करें' : 'Book Free Consultation'}</span>
              </a>
              <a 
                href="#departments"
                className="w-full sm:w-auto px-8 py-4 bg-white/80 hover:bg-[#C1E8FF]/40 text-[#052659] border-2 border-[#7DA0CA] hover:border-[#5483B3] text-xs uppercase tracking-wider font-bold rounded-xl shadow-sm transition-all text-center"
                onMouseEnter={() => setIsCursorHovering(true)}
                onMouseLeave={() => setIsCursorHovering(false)}
              >
                {isHindi ? 'सेवाओं की जाँच करें' : 'Explore Advanced Services'}
              </a>
            </div>

            {/* Credentials logos badge footer inside hero */}
            <div className="mt-12 pt-6 border-t border-[#7DA0CA]/30">
              <span className="font-sans text-[10px] uppercase font-bold text-[#7DA0CA] tracking-[0.2em] block mb-3">
                {isHindi ? 'राष्ट्रीय और अंतरराष्ट्रीय मान्यता प्राप्त' : 'Accredited Member & Certified Federation'}
              </span>
              <div className="flex flex-wrap items-center gap-6">
                <span className="text-xs font-bold text-[#5483B3] bg-white px-3 py-1.5 rounded-lg shadow-sm">IADVL MEMBER</span>
                <span className="text-xs font-bold text-[#5483B3] bg-white px-3 py-1.5 rounded-lg shadow-sm">IMA FEDERATION</span>
                <span className="text-xs font-bold text-[#5483B3] bg-white px-3 py-1.5 rounded-lg shadow-sm">DHI CLINICAL HAIR SPL</span>
              </div>
            </div>
          </div>

          {/* Right panel interactive cell simulation - Editorial style */}
          <div className="lg:col-span-5 relative flex justify-center items-center min-h-[350px] md:min-h-[450px]">
            {/* Interactive wave canvas */}
            <div className="w-full h-full absolute inset-0 bg-[#C1E8FF]/30 border border-white rounded-[40px] overflow-hidden shadow-2xl relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#021024] to-[#052659]/90 opacity-95 rounded-[40px] -z-10" />
              <div className="absolute w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,rgba(193,232,255,0.08)_0%,transparent_70%)] opacity-50 pointer-events-none" />
              <canvas ref={heroCanvasRef} className="w-full h-full opacity-60 mix-blend-screen" />
              
              {/* Floating Overlay Label */}
              <div className="absolute top-4 left-4 flex gap-2 z-20 pointer-events-none select-none">
                <div className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-white text-[9px] font-bold tracking-widest">AI-DRIVEN</div>
                <div className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-white text-[9px] font-bold tracking-widest font-mono">PRECISE</div>
              </div>

              {/* Glassmorphism scheduling floating box */}
              <div className="absolute bottom-24 left-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-[20px] border border-white shadow-xl flex items-center gap-3 z-10">
                <Clock className="w-5 h-5 text-[#052659]" />
                <div className="text-left">
                  <div className="font-serif text-xs font-bold text-[#021024]">
                    {isHindi ? 'कार्य समय विवरण' : 'Operational Timings'}
                  </div>
                  <div className="font-sans text-[11px] text-[#5483B3] font-semibold mt-0.5">
                    Monday – Saturday: 12:30 PM — 7:30 PM (Sun Closed)
                  </div>
                </div>
              </div>

              {/* Glassmorphism location floating badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-[20px] border border-white shadow-xl flex items-center gap-3 z-10">
                <MapPin className="w-5 h-5 text-red-500 animate-bounce" />
                <div className="text-left">
                  <div className="font-serif text-xs font-bold text-[#021024]">
                    {isHindi ? 'मुख्य मेट्रो स्टेशन' : 'Principal Landmark Location'}
                  </div>
                  <div className="font-sans text-[11px] text-[#5483B3] font-semibold mt-0.5">
                    178, Basement, Saini Enclave — Near Karkardooma Metro
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* ==========================================
          TRUST BAR BRAND ROW (Greyscale logic)
         ========================================== */}
      <div className="w-full bg-[#021024] py-8 border-y border-[#5483B3]/20 relative z-10 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8 items-center text-center">
            {[
              { title: 'IADVL Accredited', desc: 'Dermatologists Association' },
              { title: 'IMA Approved', desc: 'Indian Medical Association' },
              { title: 'DHI Certified', desc: 'Elite Hair Specialist' },
              { title: 'DMC Licensed', desc: 'Delhi Medical Council 44068' },
              { title: '18+ Years Expert', desc: 'Dermatological Trust' }
            ].map((logo, i) => (
              <div 
                key={i} 
                className="group p-2 cursor-default"
                onMouseEnter={() => setIsCursorHovering(true)}
                onMouseLeave={() => setIsCursorHovering(false)}
              >
                <div className="font-serif text-sm md:text-base font-black text-[#7DA0CA] group-hover:text-[#C1E8FF] transition-colors duration-300">
                  {logo.title}
                </div>
                <div className="font-sans text-[9px] md:text-[10px] text-[#5483B3] group-hover:text-[#7DA0CA] uppercase tracking-wider font-semibold mt-1 transition-colors duration-300">
                  {logo.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* ==========================================
          SECTION 2: ABOUT CLINIC & CARE PROCESS
         ========================================== */}
      <section 
        id="about" 
        className="py-20 md:py-32 relative bg-white/40"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Image Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-[32px] overflow-hidden shadow-2xl border-2 border-[#7DA0CA]/20">
                {/* Fallback elegant consulting aesthetic doctor image */}
                <img 
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800" 
                  alt="Dermatologist diagnostics in modern clinic room" 
                  className="w-full h-[350px] md:h-[500px] object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                
                {/* Micro floating rating badge */}
                <div className="absolute bottom-6 right-6 bg-[#021024]/90 backdrop-blur-md p-4 rounded-2xl border border-[#7DA0CA]/30 shadow-lg text-left">
                  <div className="flex items-center gap-1 text-[#FACC15] mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current text-[#FACC15]" />
                    ))}
                  </div>
                  <div className="font-serif text-sm font-bold text-white">4.5★ Highly Verified</div>
                  <div className="font-sans text-[10px] text-[#7DA0CA] font-medium">508+ Genuine Local Reviews</div>
                </div>
              </div>
            </div>

            {/* Right text layout core content */}
            <div className="lg:col-span-7 text-left flex flex-col justify-center">
              <span className="font-sans text-xs md:text-sm font-black text-[#5483B3] tracking-[0.25em] uppercase mb-3 block">
                {isHindi ? 'केंद्र के बारे में जानिए' : 'Discover Our Foundation'}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-[#021024] leading-tight mb-6 gsap-reveal">
                {isHindi ? 'सेंटर फॉर स्किन — डॉ. गौरव नकरा' : 'Dermatological Science Mapped To Expert Care'}
              </h2>
              
              <p className="text-sm sm:text-base text-[#052659]/80 font-normal leading-relaxed mb-4">
                {isHindi ? 
                  'स्वर्ण पदक विजेता त्वचा विशेषज्ञ डॉ. गौरव नकरा द्वारा स्थापित, सेंटर फॉर स्किन पूर्वी दिल्ली (कड़कड़डूमा, आनंद विहार, सैनी एन्क्लेव) का सर्वश्रेष्ठ क्लिनिक है। हम त्वचा विज्ञान, उन्नत लेज़र तकनीकों एवं प्रमाणित हेयर ट्रांसप्लांटेशन में उत्कृष्टता प्रदान करते हैं।' : 
                  'Founded and directed by Gold Medalist Dermatologist Dr. Gaurav Nakra, Centre For Skin is East Delhi’s flagship clinical center headquartered in Saini Enclave, Karkardooma. We map high-end medical lasers, clinical laboratory tests, and FDA-certified procedural equipment to correct complex dermatological challenges.'}
              </p>
              
              <p className="text-sm sm:text-base text-[#052659]/85 font-normal leading-relaxed mb-8">
                {isHindi ? 
                  'यह क्लिनिक विशेष रूप से आनंद विहार, विवेक विहार, जागृति एन्क्लेव, कौशाम्बी और आसपास के सभी मरीजों को उच्चतम चिकित्सा देखभाल प्रदान करता है। यहां अत्याधुनिक मशीनों द्वारा मुहांसे, बाल झड़ना, टैटू हटाना और कॉस्मेटिक लिफ्टिंग की जाती है।' : 
                  'We serve patients from Anand Vihar, Vivek Vihar, Jagriti Enclave, Preet Vihar, Kaushambi, and neighboring districts. Equipped with multi-frequency laser platforms, micro-needling systems, and clean operatory theaters, we ensure zero infection and clinical brilliance.'}
              </p>

              {/* Active milestones count parameters */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 bg-white/80 backdrop-blur-md border border-white rounded-[28px] shadow-2xl shadow-[#021024]/5 mb-10">
                {[
                  { value: '18+ Yrs', label: isHindi ? 'अनुभव' : 'Clinical Experience' },
                  { value: '5000+', label: isHindi ? 'मरीजों का विश्वास' : 'Treated Patients' },
                  { value: '15+ Systems', label: isHindi ? 'उन्नत मशीनें' : 'Advanced Lasers' },
                  { value: '44068 DMC', label: isHindi ? 'प्रमाणित पंजीकरण' : 'Official License' }
                ].map((item, i) => (
                  <div key={i} className="text-center md:text-left">
                    <div className="font-serif text-base sm:text-xl font-black text-[#021024] underline decoration-[#5483B3]/40 decoration-2 underline-offset-4">{item.value}</div>
                    <div className="font-sans text-[10px] sm:text-xs text-[#5483B3] font-bold uppercase tracking-wider mt-1.5">{item.label}</div>
                  </div>
                ))}
              </div>

              {/* Action meeting link detail */}
              <a 
                href="#doctor"
                className="w-fit flex items-center gap-2 text-xs font-sans font-bold text-[#052659] uppercase tracking-wider hover:text-[#5483B3] transition-colors group focus:outline-2 focus:outline-offset-4 focus:outline-[#052659]"
                onMouseEnter={() => setIsCursorHovering(true)}
                onMouseLeave={() => setIsCursorHovering(false)}
              >
                <span>{isHindi ? 'डॉक्टर का पूर्ण विवरण' : 'Explore Doctor Biography'}</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </a>
            </div>

          </div>

          {/* Bottom Process sequence pipeline */}
          <div className="mt-20 pt-12 border-t border-[#7DA0CA]/30">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="font-sans text-xs font-black text-[#5483B3] tracking-[0.2em] uppercase block mb-2">
                {isHindi ? 'उपचार प्रक्रिया' : 'Patient Journey Pipeline'}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#021024]">
                {isHindi ? 'हमारी सरल और वैज्ञानिक चिकित्सा प्रक्रिया' : 'Our Professional Diagnostics Scheme'}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
              {[
                { step: '01', title: isHindi ? 'परामर्श' : 'Initial Consultation', desc: isHindi ? 'त्वचा और बालों का गहन विश्लेषण और डायग्नोस्टिक मैपिंग।' : 'High-fidelity macro photography & micro-diagnostic analysis of your skin/hair profiles.' },
                { step: '02', title: isHindi ? 'सटीक निदान' : 'Precise Diagnosis', desc: isHindi ? 'लक्षणों के आधार पर समस्या की मुख्य वजह का पता लगाना।' : 'Accurate detection of causal factors, allergies, or genetic hair parameters.' },
                { step: '03', title: isHindi ? 'उन्नत थेरेपी' : 'Targeted Therapy', desc: isHindi ? 'यूएस-एफडीए प्रमाणित लेज़र और दवाइयों द्वारा उपचार।' : 'Personalized clinic procedures using clean, sterile chemical or laser modalities.' },
                { step: '04', title: isHindi ? 'फॉलो-अप' : 'Care Follow-up', desc: isHindi ? 'त्वचा की निरंतर निगरानी और पोस्ट-केयर सलाह।' : 'Periodic validation visits and customized maintenance protocols for life-long health.' }
              ].map((p, index) => (
                <div key={index} className="bg-white/90 backdrop-blur-md p-6 rounded-[28px] border border-white shadow-xl shadow-[#021024]/3 relative hover:translate-y-[-4px] hover:shadow-2xl transition-all">
                  <div className="font-mono text-3xl font-black text-[#7DA0CA]/30 mb-3 underline decoration-[#FACC15] decoration-4 underline-offset-4">{p.step}</div>
                  <h4 className="font-serif text-base font-black text-[#021024] mb-2">{p.title}</h4>
                  <p className="font-sans text-xs text-[#052659]/80 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>


      {/* ==========================================
          SECTION 3: CLINICAL DEPARTMENTS & SERVICES
         ========================================== */}
      <section 
        id="departments" 
        className="py-20 md:py-32 relative bg-gradient-to-b from-white to-[#C1E8FF]/20"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          
          {/* Header specifications */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div className="text-left max-w-2xl">
              <span className="font-sans text-xs md:text-sm font-black text-[#5483B3] tracking-[0.25em] uppercase mb-3 block">
                {isHindi ? 'क्लिनिक की उन्नत सेवाएं' : 'Clinic Specializations'}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-[#021024] leading-tight gsap-reveal">
                {isHindi ? 'हमारे विशेषज्ञ चिकित्सा विभाग' : 'Comprehensive Skin, Hair & Aesthetic Solutions'}
              </h2>
            </div>
            <div className="mt-4 md:mt-0">
              <p className="font-sans text-xs md:text-sm text-[#052659]/75 md:text-right max-w-md font-semibold">
                Click on any clinical category to access the specific, certified list of laser or dermatological treatments.
              </p>
            </div>
          </div>

          {/* Left panel & right details layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* List selectors - Left tab bar */}
            <div className="lg:col-span-4 flex flex-col gap-2.5">
              {SERVICES.map((s) => {
                const IconComponent = s.icon;
                return (
                  <button
                    key={s.id}
                    onClick={() => setActiveTab(s.id)}
                    className={`w-full text-left p-4.5 rounded-[24px] border transition-all flex items-center gap-4 cursor-pointer select-none ${
                      activeTab === s.id 
                        ? 'bg-[#052659] border-[#052659] text-white shadow-2xl scale-102 translate-x-1' 
                        : 'bg-white/80 border-[#7DA0CA]/20 hover:border-[#5483B3] text-[#052659] hover:bg-[#C1E8FF]/20 backdrop-blur-sm shadow-md'
                    }`}
                    aria-label={`Select treatment category: ${s.title}`}
                    onMouseEnter={() => setIsCursorHovering(true)}
                    onMouseLeave={() => setIsCursorHovering(false)}
                  >
                    <div className={`p-2.5 rounded-xl ${
                      activeTab === s.id ? 'bg-[#5483B3]/20 text-[#C1E8FF]' : 'bg-[#C1E8FF]/30 text-[#052659]'
                    }`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-serif text-sm font-black leading-snug">
                        {isHindi ? s.titleHindi : s.title}
                      </div>
                      <div className={`font-sans text-[10px] font-semibold uppercase tracking-wider mt-0.5 ${
                        activeTab === s.id ? 'text-[#7DA0CA]' : 'text-[#7DA0CA]'
                      }`}>
                        View {s.treatments.length} Procedures
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Treatment detailed card display panel - Right box */}
            <div className="lg:col-span-8">
              {SERVICES.map((s) => {
                if (s.id !== activeTab) return null;
                const IconComponent = s.icon;
                return (
                  <div 
                    key={s.id}
                    className="bg-white/90 backdrop-blur-md border border-white rounded-[32px] p-6 md:p-8 shadow-2xl shadow-[#021024]/5 text-left h-fit flex flex-col justify-between animate-fade-in"
                  >
                    <div>
                      {/* Header in Right Detailed section */}
                      <div className="flex justify-between items-start border-b border-[#7DA0CA]/30 pb-4 mb-6">
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-[#052659]/10 rounded-2xl text-[#052659]">
                            <IconComponent className="w-8 h-8" />
                          </div>
                          <div>
                            <h3 className="font-serif text-xl md:text-2xl font-black text-[#021024]">
                              {isHindi ? s.titleHindi : s.title}
                            </h3>
                            <span className="font-sans text-[10px] bg-[#C1E8FF] text-[#052659] px-2.5 py-1 rounded-full font-bold uppercase tracking-wider inline-block mt-1">
                              Accredited Services
                            </span>
                          </div>
                        </div>
                        <div className="font-serif text-3xl font-black text-[#7DA0CA]/30">CS</div>
                      </div>

                      {/* Broad Description text */}
                      <p className="text-sm md:text-base text-[#052659]/80 mb-6 leading-relaxed">
                        {s.desc}
                      </p>

                      {/* List of sub-procedures/treatments in a beautiful bento style */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
                        {s.treatments.map((t, idx) => (
                          <div 
                            key={idx} 
                            className="p-3 bg-[#C1E8FF]/20 hover:bg-[#C1E8FF]/40 border border-[#7DA0CA]/10 hover:border-[#5483B3]/30 rounded-2xl flex items-start gap-2.5 transition-all group"
                          >
                            <ShieldCheck className="w-4 h-4 text-[#5483B3] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                            <span className="font-serif text-xs md:text-sm font-bold text-[#021024]">{t}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Booking call-to-action bar inside Card body */}
                    <div className="bg-[#C1E8FF]/30 border border-[#7DA0CA]/25 rounded-[22px] p-4.5 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="flex items-center gap-3 text-left">
                        <Info className="w-5 h-5 text-[#5483B3]" />
                        <span className="font-sans text-[11px] md:text-xs text-[#052659] leading-tight font-semibold">
                          All cosmetic treatments are FDA approved and personally administered in sterile operation rooms.
                        </span>
                      </div>
                      <a 
                        href="#booking"
                        className="w-full sm:w-auto px-6 py-3 bg-[#052659] hover:bg-[#5483B3] text-white text-[11px] font-sans font-black uppercase tracking-wider rounded-2xl shadow-xl shadow-[#052659]/15 flex justify-center items-center gap-2 hover:translate-y-[-2px] transition-all"
                      >
                        <span>Book Selection</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>


      {/* ==========================================
          SECTION 3.5: CLINICAL FAQ SECTION (Accordion)
         ========================================== */}
      <section 
        id="faqs" 
        className="py-20 md:py-32 relative bg-white"
      >
        <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10 text-left">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-sans text-xs md:text-sm font-black text-[#5483B3] tracking-[0.2em] uppercase block mb-3">
              {isHindi ? 'अक्सर पूछे जाने वाले सवाल' : 'Dermatology Q&A'}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-[#021024] leading-tight gsap-reveal">
              {isHindi ? 'पूछे जाने वाले मुख्य सवाल' : 'Dermatosurgery & Treatment FAQs'}
            </h2>
            <p className="font-sans text-xs md:text-sm text-[#052659]/75 mt-3 select-none">
              Explore gold-standard, structured clinical answers written and verified directly by dermatologist Dr. Gaurav Nakra.
            </p>
          </div>

          {/* Accordion List container */}
          <div className="flex flex-col gap-4">
            {FAQS.map((faq, index) => {
              const isOpen = activeFAQ === index;
              return (
                <div 
                  key={index}
                  className="border border-[#7DA0CA]/15 rounded-[22px] bg-white/80 backdrop-blur-md overflow-hidden shadow-xl shadow-[#021024]/3 hover:shadow-2xl hover:translate-y-[-2px] transition-all"
                >
                  <button
                    onClick={() => setActiveFAQ(isOpen ? null : index)}
                    className="w-full p-5 text-left flex justify-between items-center gap-4 cursor-pointer select-none group"
                    aria-expanded={isOpen}
                    onMouseEnter={() => setIsCursorHovering(true)}
                    onMouseLeave={() => setIsCursorHovering(false)}
                  >
                    <span className="font-serif text-sm md:text-base font-black text-[#052659] group-hover:text-[#5483B3] transition-colors leading-snug">
                      {isHindi && index === 0 ? 'सेंटर फॉर स्किन पर लेज़र हेयर रिडक्शन कितना सुरक्षित है?' : faq.q}
                    </span>
                    <div className={`p-1.5 rounded-lg border border-[#7DA0CA]/20 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#C1E8FF]' : 'bg-transparent'
                    }`}>
                      <ChevronDown className="w-4 h-4 text-[#052659]" />
                    </div>
                  </button>

                  <div 
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen ? 'max-h-[500px] border-t border-[#7DA0CA]/20' : 'max-h-0'
                    }`}
                  >
                    <div className="p-5 text-xs md:text-sm text-[#052659]/80 leading-relaxed bg-[#C1E8FF]/10 font-normal">
                      {isHindi && index === 0 ? 'लेज़र बाल हटाना पूरी तरह से सुरक्षित है। सेंटर फॉर स्किन पर, हम केवल US-FDA स्वीकृत ट्रिपल वेवलेंथ डायोड लेज़र का उपयोग करते हैं जो त्वचा पर अत्यधिक सुरक्षित और प्रभावी है। सभी लेज़र प्रक्रियाएं डॉ. गौरव नकरा के निजी मार्गदर्शन में की जाती हैं।' : faq.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* ==========================================
          SECTION 4: DOCTOR PORTFOLIO PROFILE
         ========================================== */}
      <section 
        id="doctor" 
        className="py-20 md:py-32 relative bg-gradient-to-b from-[#C1E8FF]/20 to-[#FFFFFF]"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-left">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-sans text-xs md:text-sm font-black text-[#5483B3] tracking-[0.25em] uppercase block mb-3">
              {isHindi ? 'वरिष्ठ चिकित्सक प्रोफाइल' : 'Senior Consulting Dermatologist'}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-[#021024] leading-tight gsap-reveal">
              Dr. Gaurav Nakra
            </h2>
            <p className="font-sans text-xs md:text-sm text-[#5483B3] tracking-[0.1em] uppercase font-bold mt-1.5">
              MD (Dermatology, Venereology & Leprosy) | Gold Medalist | 18+ Years Experience
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Portrait Column holding tags */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="relative rounded-[40px] overflow-hidden shadow-2xl border-4 border-white group">
                <img 
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800" 
                  alt="Dermatologist Specialist Dr. Gaurav Nakra portrait representation" 
                  className="w-full h-[400px] md:h-[550px] object-cover grayscale-[0.12] group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Floating Certifications pill widgets inside image bounds */}
                <div className="absolute top-4 left-4 bg-white/75 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/60 shadow flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-500" />
                  <span className="font-serif text-[10px] font-bold text-[#021024]">MD Gold Medalist</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 bg-[#021024]/75 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-md flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#C1E8FF] rounded-xl flex items-center justify-center shrink-0">
                    <User className="w-5 h-5 text-[#052659]" />
                  </div>
                  <div>
                    <div className="font-serif text-[11px] font-bold text-white uppercase tracking-wider">
                      Delhi Medical Council
                    </div>
                    <div className="font-sans text-[10px] text-[#7DA0CA] font-medium mt-0.5">
                      Accredited Registration No. 44068
                    </div>
                  </div>
                </div>
              </div>

              {/* Specialty quick anchor tags */}
              <div className="flex flex-wrap gap-2.5 p-6 bg-white/80 backdrop-blur-md border border-white rounded-[28px] shadow-2xl shadow-[#021024]/5">
                <span className="font-sans text-[10px] uppercase font-bold text-[#5483B3] tracking-widest block w-full mb-1.5">
                  Active specialties area:
                </span>
                {['#LaserExpert', '#CustomPeels', '#DHIHairTransplant', '#AntiAgingLifts', '#PediatricDermatology', '#PlateletRichPlasma', '#Dermatosurgery'].map((tag, idx) => (
                  <span 
                    key={idx} 
                    className="px-3 py-1.5 bg-[#C1E8FF]/50 text-[#052659] hover:bg-[#5483B3]/25 font-sans text-[10px] uppercase tracking-wider font-bold rounded-xl border border-[#7DA0CA]/10 select-none transition-all"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right clinical data records column */}
            <div className="lg:col-span-7 flex flex-col justify-start">
              
              <h3 className="font-serif text-2xl font-black text-[#021024] mb-4 flex items-center gap-2 pb-3 border-b border-[#7DA0CA]/20">
                <BookOpen className="w-6 h-6 text-[#052659]" />
                <span>Biography & Qualifications</span>
              </h3>

              <p className="text-sm md:text-base text-[#052659]/80 leading-relaxed mb-6">
                Dr. Gaurav Nakra is a highly acclaimed, board-certified senior dermatologist, cosmetologist, and pediatric skin specialist based in East Delhi. After completing his MBBS degree from Motilal Nehru Medical College in 2006, he pursued specialized post-graduation MD in Dermatology, Venereology & Leprosy from Kasturba Medical College / DDU University, finishing as a prestigious Gold Medalist.
              </p>

              <p className="text-sm md:text-base text-[#052659]/80 leading-relaxed mb-8">
                Throughout his career spanning more than 18 years, Dr. Nakra has served in multiple prestigious consultant positions. He holds certifications from the Direct Hair Implantation (DHI) Academy, making him an outstanding authority regarding hair follicle restoration, transplantation surgical design, and scalp PRP infusions.
              </p>

              {/* Qualifications checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4.5 mb-10">
                {[
                  { title: 'MBBS Graduation (2006)', desc: 'Motilal Nehru Medical College, Allahabad' },
                  { title: 'MD Dermatology (2010)', desc: 'Kasturba Medical College (KMC) — Gold Medal' },
                  { title: 'DHI certified specialist', desc: 'Certified scale hair transplantation expert' },
                  { title: 'Delhi Medical Council', desc: 'Registered DMC Practitioner: 44068' },
                  { title: 'IADVL Member', desc: 'Indian Association of Dermatologists' },
                  { title: 'IMA Accredited', desc: 'Indian Medical Association member' }
                ].map((q, idx) => (
                  <div key={idx} className="flex gap-3 items-start text-left">
                    <div className="p-1 rounded-lg bg-[#4ADE80]/20 text-[#052659] border border-[#4ADE80]/30 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3px]" />
                    </div>
                    <div>
                      <div className="font-serif text-xs md:text-sm font-bold text-[#021024]">{q.title}</div>
                      <div className="font-sans text-[10px] md:text-xs text-[#5483B3] font-semibold mt-0.5">{q.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Consultancy milestones list */}
              <div className="bg-[#C1E8FF]/50 border border-[#7DA0CA]/10 rounded-[24px] p-6 mb-8 backdrop-blur-md shadow-lg shadow-[#021024]/2">
                <span className="font-sans text-[10px] uppercase font-bold text-[#5483B3] tracking-widest block mb-3">
                  Current & Past Medical Associations:
                </span>
                <div className="flex flex-col gap-2.5 text-xs text-[#052659]/90 font-bold leading-normal font-sans">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#5483B3] rounded-full" />
                    <span>Founder & Senior Consultant — Centre For Skin, Saini Enclave</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#5483B3] rounded-full" />
                    <span>Consultant Dermatologist — Dr. BSA Hospital, Rohini</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#5483B3] rounded-full" />
                    <span>Consultant — DHI Hair Transplant Safdarjung Enclave</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#5483B3] rounded-full" />
                    <span>Consultant — New Look Laser Clinics & GM Hospital</span>
                  </div>
                </div>
              </div>

              {/* Timeline Sequence */}
              <div className="border-l-2 border-[#7DA0CA]/30 pl-5 flex flex-col gap-6 text-left">
                {TIMELINE.map((t, idx) => (
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
      </section>


      {/* ==========================================
          SECTION 4.5: PATIENT TESTIMONIALS (Verified items)
         ========================================== */}
      <section 
        id="testimonials" 
        className="py-20 md:py-32 relative bg-[#021024] text-white"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-left">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-sans text-xs md:text-sm font-black text-[#5483B3] tracking-[0.2em] uppercase block mb-3">
              {isHindi ? 'मरीजों के वास्तविक विचार' : 'Patient Portrayals'}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-white leading-tight gsap-reveal">
              {isHindi ? 'संतुष्ट मरीजों के अभिप्राय' : 'Verified Google Reviews Trust'}
            </h2>
            <div className="flex justify-center items-center gap-2 mt-4 select-none">
              <span className="font-sans text-sm font-bold text-[#7DA0CA]">Excellent Rating:</span>
              <div className="flex items-center gap-0.5 text-[#FACC15]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current text-[#FACC15]" />
                ))}
              </div>
              <span className="font-sans text-sm font-black text-[#C1E8FF]">4.5/5 (508+ patients)</span>
            </div>
          </div>

          {/* Testimonial slider layouts */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div 
                key={idx}
                className="bg-white/5 border border-white/10 rounded-[28px] p-6 md:p-8 flex flex-col justify-between hover:border-white/20 hover:bg-white/10 transition-all shadow-2xl relative"
              >
                <div>
                  <div className="flex items-center gap-0.5 text-[#FACC15] mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current text-[#FACC15]" />
                    ))}
                  </div>

                  <p className="font-serif text-sm italic text-white/95 leading-relaxed mb-6 font-normal">
                    &ldquo;{t.text}&rdquo;
                  </p>
                </div>

                <div className="border-t border-white/10 pt-4 mt-6 flex justify-between items-center bg-transparent">
                  <div>
                    <div className="font-serif text-sm font-black text-white">{t.name}</div>
                    <div className="font-sans text-[10px] text-[#7DA0CA] uppercase tracking-wider font-semibold mt-1">
                      Verified Case: {t.treatment}
                    </div>
                  </div>
                  
                  {/* Google Review symbol mark */}
                  <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center font-mono text-[10px] font-black text-[#7DA0CA]">
                    G
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ==========================================
          SECTION 5: CLINIC PHOTO GALLERY (Masonry Lightbox)
         ========================================== */}
      <section 
        id="gallery" 
        className="py-20 md:py-32 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-left">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div className="text-left max-w-2xl">
              <span className="font-sans text-xs md:text-sm font-black text-[#5483B3] tracking-[0.25em] uppercase mb-3 block">
                {isHindi ? 'क्लिनिक गैलरी' : 'Facility Portrayal'}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-[#021024] leading-tight gsap-reveal">
                {isHindi ? 'हमारा अत्याधुनिक क्लिनिक' : 'Our State-of-the-Art Operations Clinic'}
              </h2>
            </div>
            <p className="font-sans text-xs md:text-sm text-[#052659]/75 mt-4 md:mt-0 font-bold max-w-sm md:text-right">
              Explore the sterile, fully optimized workspace designed specifically for precision laser therapies, hair transplant surgery, and clinical checkups.
            </p>
          </div>

          {/* Masonry image grids */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {GALLERY.map((g, idx) => (
              <div 
                key={idx}
                onClick={() => setLightboxIndex(idx)}
                className="relative group rounded-[32px] overflow-hidden shadow-2xl cursor-pointer aspect-video md:aspect-square border-4 border-white transition-all bg-slate-100 hover:shadow-2xl"
                onMouseEnter={() => setIsCursorHovering(true)}
                onMouseLeave={() => setIsCursorHovering(false)}
              >
                <img 
                  src={g.url} 
                  alt={g.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                
                {/* Overlay details */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#021024]/90 via-[#021024]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-left">
                  <div className="font-serif text-sm font-bold text-white mb-0.5">{g.title}</div>
                  <div className="font-sans text-[10px] text-[#7DA0CA] leading-snug">{g.desc}</div>
                </div>

                {/* Direct quick reveal overlay eye symbol on top corner */}
                <div className="absolute top-4 right-4 p-2 rounded-full bg-[#FFFFFF]/70 backdrop-blur-md text-[#021024] opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>

          {/* Lightbox details modal trigger */}
          {lightboxIndex !== null && (
            <div 
              id="lightbox-backdrop"
              className="fixed inset-0 bg-[#021024]/95 flex items-center justify-center z-[9999] p-4 text-white transition-opacity duration-300"
              onClick={() => setLightboxIndex(null)}
            >
              <button 
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 hover:scale-105 transition-all text-white select-none cursor-pointer"
                onClick={() => setLightboxIndex(null)}
              >
                <X className="w-6 h-6" />
              </button>

              <div 
                className="max-w-4xl w-full flex flex-col gap-4"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Photo container */}
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20">
                  <img 
                    src={GALLERY[lightboxIndex].url}
                    alt={GALLERY[lightboxIndex].title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Copy blocks */}
                <div className="text-left bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                  <h4 className="font-serif text-lg font-black text-white">{GALLERY[lightboxIndex].title}</h4>
                  <p className="font-sans text-sm text-[#7DA0CA] leading-relaxed mt-2">{GALLERY[lightboxIndex].desc}</p>
                </div>
              </div>
            </div>
          )}

        </div>
      </section>


      {/* ==========================================
          SECTION 6: CONTACT & APPOINTMENT SCHEDULER
         ========================================== */}
      <section 
        id="contact" 
        className="py-20 md:py-32 relative bg-gradient-to-b from-white to-[#C1E8FF]/20"
      >
        <div id="booking" className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-left">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-sans text-xs md:text-sm font-black text-[#5483B3] tracking-[0.25em] uppercase block mb-3">
              {isHindi ? 'पंजीकरण और बुकिंग' : 'Interactive Contact Hub'}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-[#021024] leading-tight gsap-reveal">
              {isHindi ? 'अपॉइंटमेंट बुक करें और संपर्क करें' : 'Get in Touch — Doctor Availability Portal'}
            </h2>
            <p className="font-sans text-xs md:text-sm text-[#052659]/75 mt-3 select-none">
              Fill out the diagnostic appointment system coordinates, or use direct clicking call targets below.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Contact Data Card column */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              
              {/* Main Credentials block */}
              <div className="bg-gradient-to-br from-[#021024] to-[#052659] text-white rounded-[32px] p-6 shadow-2xl border-2 border-white text-left flex flex-col gap-5 relative overflow-hidden backdrop-blur-md">
                <div className="absolute w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,rgba(193,232,255,0.06)_0%,transparent_70%)] opacity-50 pointer-events-none" />
                <span className="font-sans text-[10px] uppercase font-bold text-[#7DA0CA] tracking-widest block relative z-10">
                  Clinic Identity Details:
                </span>
                
                {/* Phone */}
                <div className="flex gap-4 items-start bg-transparent relative z-10">
                  <div className="p-2.5 rounded-[12px] bg-white/10 text-[#C1E8FF] border border-white/10">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-serif text-[11px] font-bold text-[#7DA0CA] uppercase tracking-wider">
                      Appointment Desks
                    </div>
                    <a 
                      href="tel:01146052234" 
                      className="font-sans text-base font-black text-white hover:text-[#5483B3] transition-colors mt-0.5 block"
                    >
                      011 4605 2234
                    </a>
                    <a 
                      href="tel:+917042087962" 
                      className="font-sans text-xs font-semibold text-[#7DA0CA] hover:text-white transition-colors mt-0.5 block"
                    >
                      Mob: +91 70420 87962
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4 items-start bg-transparent relative z-10">
                  <div className="p-2.5 rounded-[12px] bg-white/10 text-[#C1E8FF] border border-white/10">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-serif text-[11px] font-bold text-[#7DA0CA] uppercase tracking-wider">
                      Official Clinic Email
                    </div>
                    <a 
                      href="mailto:info@centreforskin.in" 
                      className="font-sans text-xs font-bold text-white hover:text-[#5483B3] transition-colors mt-0.5 block"
                    >
                      info@centreforskin.in
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex gap-4 items-start bg-transparent relative z-10">
                  <div className="p-2.5 rounded-[12px] bg-white/10 text-[#C1E8FF] border border-white/10">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-serif text-[11px] font-bold text-[#7DA0CA] uppercase tracking-wider">
                      Clinic Head Office Address
                    </div>
                    <p className="font-sans text-xs text-white leading-relaxed mt-1">
                      178, Basement, Saini Enclave, Near Karkardooma Metro Station, Anand Vihar, East Delhi, Delhi — 110092
                    </p>
                    <span className="font-sans text-[10px] text-amber-400 font-semibold mt-1 block">
                      Landmark: Opposite Balaji Temple, Phase 1, D-Block Market
                    </span>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4 items-start bg-transparent relative z-10">
                  <div className="p-2.5 rounded-[12px] bg-white/10 text-[#C1E8FF] border border-white/10">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-serif text-[11px] font-bold text-[#7DA0CA] uppercase tracking-wider">
                      Operating Schedule
                    </div>
                    <div className="font-sans text-xs text-white leading-relaxed mt-1 font-semibold">
                      Mon – Sat: 12:30 PM — 7:30 PM
                    </div>
                    <div className="font-sans text-[10px] text-red-400 font-semibold mt-0.5">
                      Sunday: Clinic Closed
                    </div>
                  </div>
                </div>

                {/* Direct calling widgets buttons */}
                <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-white/5 relative z-10">
                  <a 
                    href="tel:01146052234"
                    className="py-3 bg-white hover:bg-[#C1E8FF] text-[#021024] font-bold text-center text-xs uppercase rounded-xl shadow-md transition-all flex justify-center items-center gap-2"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Desk</span>
                  </a>
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=Centre+For+Skin+178+Saini+Enclave+Karkardooma+Delhi+110092"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 bg-[#5483B3] hover:bg-white hover:text-[#021024] text-white font-bold text-center text-xs uppercase rounded-xl border border-[#5483B3] shadow-md transition-all flex justify-center items-center gap-1.5"
                  >
                    <span>Directions</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Patient satisfaction metrics widget */}
              <div className="bg-white/80 backdrop-blur-md border border-white p-5 rounded-[24px] flex items-center justify-between shadow-xl shadow-[#021024]/5 text-left">
                <div>
                  <div className="font-serif text-sm font-black text-[#052659]">508+ Reviews</div>
                  <div className="font-sans text-[10px] text-[#5483B3] font-bold uppercase tracking-wider mt-0.5">Total Local feedback</div>
                </div>
                <div className="flex items-center gap-0.5 text-[#FACC15]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
              </div>

            </div>

            {/* Right Booking coordinates form map Column */}
            <div className="lg:col-span-8 flex flex-col gap-6 w-full">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                
                {/* Appointment submission form */}
                <div className="bg-white/90 backdrop-blur-md border border-white p-6 md:p-8 rounded-[32px] shadow-2xl shadow-[#021024]/5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2.5 pb-3 border-b border-[#7DA0CA]/20 mb-6 text-left">
                      <Calendar className="w-5 h-5 text-[#052659]" />
                      <h4 className="font-serif text-lg font-black text-[#021024]">Online Appointment</h4>
                    </div>

                    {formSubmitted ? (
                      <div className="bg-[#4ADE80]/15 border border-[#4ADE80] rounded-2xl p-6 text-center text-[#052659] h-[250px] flex flex-col justify-center items-center">
                        <div className="w-12 h-12 bg-[#4ADE80] text-white rounded-full flex items-center justify-center mb-3">
                          <Check className="w-6 h-6 stroke-[3px]" />
                        </div>
                        <h5 className="font-serif text-base font-black">Booking Initiated Successfully!</h5>
                        <p className="font-sans text-[11px] text-[#5483B3] font-semibold mt-1.5">
                          Dr. Gaurav Nakra&rsquo;s console desk will call you back shortly to confirm secure slot timing.
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleBooking} className="flex flex-col gap-4 text-left">
                        {formError && (
                          <div className="bg-red-500/10 border border-red-500 rounded-lg p-2.5 text-xs font-sans text-red-600 font-bold flex items-center gap-2">
                            <Info className="w-4 h-4" />
                            <span>{formError}</span>
                          </div>
                        )}

                        {/* Name input */}
                        <div>
                          <label className="font-sans text-[11px] font-bold text-[#052659] uppercase tracking-wider block mb-1">
                            Patient Name *
                          </label>
                          <input 
                            type="text" 
                            name="name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="e.g., Rajesh Sharma"
                            className="w-full px-4 py-2.5 rounded-xl border border-[#7DA0CA]/20 bg-[#C1E8FF]/20 text-xs text-[#021024] font-bold focus:outline text-[#021024] focus:outline-[#052659] focus:bg-white placeholder-[#5483B3]/60 transition-colors"
                          />
                        </div>

                        {/* Phone input */}
                        <div>
                          <label className="font-sans text-[11px] font-bold text-[#052659] uppercase tracking-wider block mb-1">
                            Mobile Number *
                          </label>
                          <input 
                            type="tel" 
                            name="phone"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="e.g., 9911991199"
                            className="w-full px-4 py-2.5 rounded-xl border border-[#7DA0CA]/20 bg-[#C1E8FF]/20 text-xs text-[#021024] font-bold focus:outline text-[#021024] focus:outline-[#052659] focus:bg-white placeholder-[#5483B3]/60 transition-colors"
                          />
                        </div>

                        {/* Dropdown service indicator */}
                        <div>
                          <label className="font-sans text-[11px] font-bold text-[#052659] uppercase tracking-wider block mb-1">
                            Select Clinical Department
                          </label>
                          <select 
                            name="department"
                            value={formData.department}
                            onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-xl border border-[#7DA0CA]/20 bg-[#C1E8FF]/20 text-xs text-[#021024] font-bold focus:outline text-[#021024] focus:outline-[#052659] focus:bg-white transition-colors"
                          >
                            <option value="Clinical Dermatology">Clinical Dermatology</option>
                            <option value="Aesthetic Rejuvenation">Aesthetic Dermatology</option>
                            <option value="Advanced Laser treatments">Advanced Lasers</option>
                            <option value="Hair Transplant / PRP">Hair Restoration</option>
                            <option value="Chemical Peels">Chemical Peels</option>
                            <option value="Advanced Surgery">Advanced Dermatosurgery</option>
                          </select>
                        </div>

                        {/* Preferred booking date */}
                        <div>
                          <label className="font-sans text-[11px] font-bold text-[#052659] uppercase tracking-wider block mb-1">
                            Preferred Consultation Date *
                          </label>
                          <input 
                            type="date" 
                            name="date"
                            value={formData.date}
                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-xl border border-[#7DA0CA]/20 bg-[#C1E8FF]/20 text-xs text-[#021024] font-bold focus:outline text-[#021024] focus:outline-[#052659] focus:bg-white transition-colors"
                          />
                        </div>

                        {/* Action Submit */}
                        <button
                          type="submit"
                          className="mt-4 py-3.5 bg-[#052659] hover:bg-[#5483B3] text-white text-xs uppercase tracking-wider font-black rounded-2xl shadow-xl shadow-[#052659]/15 cursor-pointer hover:translate-y-[-2px] transition-all"
                        >
                          Book Active Consultation Slot
                        </button>
                      </form>
                    )}
                  </div>
                </div>

                {/* Google Maps embedded routing map frame */}
              <div className="w-full h-full min-h-[350px] border border-white rounded-[32px] overflow-hidden shadow-2xl relative block">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.21854228965!2d77.3005828763044!3d28.653177675653428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb6389255de3%3A0xe54d6fbbeacde997!2sCentre%20For%20Skin%2C%20178%20Saini%20Enclave%20Karkardooma!5e0!3m2!1sen!2sin!4v178094392434!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0, minHeight: '350px' }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Maps Location: Centre For Skin, 178 Saini Enclave"
                  />
                  
                  {/* Floating directions map header trigger */}
                  <div className="absolute top-4 left-4 right-4 bg-white/80 backdrop-blur-md px-4 py-3 rounded-xl border border-[#7DA0CA]/30 shadow-md flex justify-between items-center text-left">
                    <div>
                      <div className="font-serif text-xs font-bold text-[#021024]">Need simple routing?</div>
                      <div className="font-sans text-[10px] text-[#5483B3] font-semibold mt-0.5">Click map to initiate Google Navigation.</div>
                    </div>
                    <a 
                      href="https://www.google.com/maps/search/?api=1&query=Centre+For+Skin+178+Saini+Enclave+Karkardooma+Delhi+110092"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-[#052659] text-white hover:bg-[#5483B3] transition-colors"
                      aria-label="Redirect to Google Maps page directly"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ==========================================
          SECTION 7: CLINIC REFERENCE FOOTER
         ========================================== */}
      <footer 
        id="clinic-footer"
        className="bg-[#021024] text-white pt-16 pb-8 border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12 text-left mb-16">
            
            {/* Logo and accreditation column */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 bg-transparent">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#5483B3] to-[#C1E8FF] flex items-center justify-center">
                  <Activity className="w-5 h-5 text-[#021024]" />
                </div>
                <div className="font-serif text-lg font-black tracking-wiest text-white">
                  Centre For Skin
                </div>
              </div>

              <p className="font-sans text-xs text-[#7DA0CA] leading-relaxed">
                Comprehensive academic medical dermatology and precision hair transplantations. Direct licensed Delhi Medical Council registration 44068 under Senior Gold Medalist consultant.
              </p>

              {/* Verified member badges */}
              <div className="flex gap-2.5 flex-wrap mt-2">
                <span className="px-2 py-1 bg-white/5 border border-white/10 text-[#7DA0CA] font-mono text-[9px] font-bold rounded-md">
                  IADVL FED
                </span>
                <span className="px-2 py-1 bg-white/5 border border-white/10 text-[#7DA0CA] font-mono text-[9px] font-bold rounded-md">
                  IMA MEMBER
                </span>
                <span className="px-2 py-1 bg-white/5 border border-white/10 text-[#7DA0CA] font-mono text-[9px] font-bold rounded-md">
                  DHI HAIR REG
                </span>
              </div>
            </div>

            {/* Quick links directories column */}
            <div className="flex flex-col gap-4">
              <h5 className="font-serif text-sm font-black text-white uppercase tracking-wider border-l-2 border-[#5483B3] pl-2.5">
                Quick Directories
              </h5>
              <div className="flex flex-col gap-2.5 text-xs text-[#7DA0CA] font-bold font-sans">
                <a href="#home" className="hover:text-white transition-colors">Home Landing</a>
                <a href="#about" className="hover:text-white transition-colors">About Clinic foundation</a>
                <a href="#departments" className="hover:text-white transition-colors">Dermatology Departments</a>
                <a href="#doctor" className="hover:text-white transition-colors">Dr. Gaurav Nakra Detail</a>
                <a href="#testimonials" className="hover:text-white transition-colors">Patient Stories Reviews</a>
                <a href="#gallery" className="hover:text-white transition-colors">State-of-the-art Gallery</a>
                <a href="#contact" className="hover:text-white transition-colors">Diagnostic Booking Desk</a>
              </div>
            </div>

            {/* Specialties list column */}
            <div className="flex flex-col gap-4">
              <h5 className="font-serif text-sm font-black text-white uppercase tracking-wider border-l-2 border-[#5483B3] pl-2.5">
                Specialized Treatments
              </h5>
              <div className="flex flex-col gap-2.5 text-xs text-[#7DA0CA] font-bold font-sans">
                <a href="#departments" className="hover:text-white transition-colors">Permanent Hair Reduction</a>
                <a href="#departments" className="hover:text-white transition-colors">Acne & Scar laser correction</a>
                <a href="#departments" className="hover:text-white transition-colors">Platelet-Rich Plasma Hair PRP</a>
                <a href="#departments" className="hover:text-white transition-colors">Botox & Fillers lifting</a>
                <a href="#departments" className="hover:text-white transition-colors">Suction blister peeling grafting</a>
                <a href="#departments" className="hover:text-white transition-colors">Child Eczema & allergy treatments</a>
              </div>
            </div>

            {/* Direct coordinate directions listing column */}
            <div className="flex flex-col gap-4">
              <h5 className="font-serif text-sm font-black text-white uppercase tracking-wider border-l-2 border-[#5483B3] pl-2.5">
                Booking Ingress
              </h5>
              <div className="text-xs text-[#7DA0CA] leading-relaxed flex flex-col gap-3 font-sans font-bold">
                <div>
                  <span className="text-white block font-serif">Karkardooma Center:</span>
                  178, Basement, Saini Enclave, Near Metro, East Delhi - 110092
                </div>
                <div>
                  <span className="text-white block font-serif">Direct Appointment Line:</span>
                  PH: 011 4605 2234 / +91 70420 87962
                </div>
                <div>
                  <span className="text-white block font-serif">Operating Hours:</span>
                  Monday - Saturday: 12:30 PM — 7:30 PM
                </div>
              </div>
            </div>

          </div>

          <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
            <p className="font-sans text-[11px] text-[#7DA0CA] font-semibold">
              &copy; 2026 Centre For Skin — Dr. Gaurav Nakra. All rights reserved. | Medical License Registration: Delhi Medical Council No. 44068.
            </p>
            <div className="flex gap-4 text-[11px] text-[#7DA0CA] font-semibold">
              <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <span>|</span>
              <a href="#terms" className="hover:text-white transition-colors">Terms of Use</a>
            </div>
          </div>
        </div>
      </footer>


      {/* ==========================================
          FLOATING ELEMENT: WHATSAPP TRIGGER APIS
         ========================================== */}
      <a 
        href="https://wa.me/9101146052234"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-[99999] group"
        aria-label="Direct Chat with Centre For Skin on WhatsApp"
        onMouseEnter={() => setIsCursorHovering(true)}
        onMouseLeave={() => setIsCursorHovering(false)}
      >
        <div className="w-14 h-14 bg-emerald-500 rounded-full flex items-center justify-center text-white shadow-2xl hover:bg-emerald-600 transition-all hover:scale-105 relative border-2 border-white">
          <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.455L0 24zm6.59-4.846c1.66.986 3.284 1.48 4.909 1.48 5.27 0 9.563-4.287 9.566-9.564.002-2.556-.992-4.959-2.799-6.77-1.804-1.807-4.205-2.8-6.77-2.802-5.277 0-9.571 4.287-9.575 9.568-.002 1.83.499 3.619 1.453 5.17l-.994 3.63 3.733-.974-.423-.24z" />
          </svg>
          
          {/* Tooltip */}
          <div className="absolute left-16 bg-[#021024] text-white text-[10px] font-sans uppercase font-bold tracking-wider px-3 py-1.5 rounded-lg border border-white/15 opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block whitespace-nowrap shadow-md">
            Chat on WhatsApp
          </div>

          <span className="absolute top-0 right-0 w-3 h-3 rounded-full bg-red-500 animate-ping" />
        </div>
      </a>


      {/* ==========================================
          FLOATING ELEMENT: CLINICAL BACK-TO-TOP
         ========================================== */}
      {showBackToTop && (
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-5 right-5 z-[50] p-3.5 bg-[#052659] text-white hover:bg-[#5483B3] rounded-full shadow-2xl transition-all border-2 border-white/20 select-none hover:scale-105 active:scale-95 cursor-pointer"
          aria-label="Scroll Back To Top Viewport"
          onMouseEnter={() => setIsCursorHovering(true)}
          onMouseLeave={() => setIsCursorHovering(false)}
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </>
  );
}
