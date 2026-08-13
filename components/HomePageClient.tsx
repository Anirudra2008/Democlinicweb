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
  ShieldCheck,
  Zap,
  X,
  Building
} from 'lucide-react';

import Navbar from './Navbar';
import Footer from './Footer';
import TestimonialFloatCluster from './TestimonialFloatCluster';

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
  { year: '2000 – 2006', title: 'MBBS Graduation', desc: 'Completed MBBS medical degree from Motilal Nehru Medical College with top academic standing.' },
  { year: '2008', title: 'International Publications', desc: 'Published research in the International Journal of Clinical Research.' },
  { year: '2009', title: 'MD — Dermatology, Venereology & Leprosy', desc: 'Completed MD specialization from D.D.U University, Gorakhpur with distinguished academic honors.' },
  { year: '2009 – 2012', title: 'Consultant Dermatologist — Dr. BSA Hospital, Rohini', desc: 'Served as Consultant Dermatologist (3 Years) & Dermatosurgeon at GM Hospital (5 Years).' },
  { year: '2009 – 2014', title: 'Founder — Nakra Dermatology Centre, Vivek Vihar', desc: 'Founded and managed Nakra Dermatology Centre in Vivek Vihar for 5 years.' },
  { year: '2010 – 2012', title: 'Laser Surgeon — New Look Laser Clinics', desc: 'Laser Surgeon & Aesthetic Dermatologist delivering specialized laser therapies.' },
  { year: '2012 – 2014', title: 'Consultant Dermatologist — DHI Safdarjung Enclave', desc: 'Consultant Dermatologist & Trichologist specializing in Hair Restoration & PRP Therapies.' },
  { year: '2015', title: 'Awarded Most Promising Dermatologist', desc: 'Honored with the "Most Promising Dermatologist In Delhi NCR" award.' },
  { year: 'Fellowship', title: 'Fellowship in Laser Medicine — Toulouse, France', desc: 'Specialized international fellowship training in advanced laser medicine and devices in Toulouse, France.' },
  { year: '2016 – Present', title: 'Founder — Centre For Skin, Karkardooma', desc: 'Established Centre For Skin in Saini Enclave near Karkardooma Metro, serving East Delhi with 20+ years of clinical expertise.' },
  { year: '2025', title: 'Awarded for Excellence in Dermatology — Economic Times 2025', desc: 'Honored with the "Excellence in Dermatology" award by Economic Times in 2025.' },
];

// DEPARTMENTS / SERVICES
const SERVICES = [
  {
    id: 'clinical',
    icon: Activity,
    title: 'Clinical Dermatology',
    titleHindi: 'क्लिनिकल डर्मेटोलॉजी',
    desc: 'Expert diagnostic assessments and customized medical treatments for chronic and acute skin disorders by MD Gold Medalist Dr. Gaurav Nakra.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000',
    subImage: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=600',
    thirdImage: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=600',
    benefits: ['Accurate Diagnostic Assessment', 'DMC Registered Specialist', 'Targeted Prescription Regimen', 'Safe for Sensitive Skin Types'],
    treatments: ['Acne & Acne Vulgaris', 'Psoriasis Management', 'Lichen Planus Care', 'Fungal & Bacterial Infections', 'Nail Disorders', 'Sexually Transmitted Infections (STIs)', 'Skin Grafting', 'Eczema & Atopic Dermatitis', 'Rosacea & Facial Redness', 'Vitiligo Light & Dermal Therapies']
  },
  {
    id: 'aesthetic',
    icon: Sparkles,
    title: 'Aesthetic Dermatology & Procedures',
    titleHindi: 'सौंदर्य त्वचाविज्ञान',
    desc: 'Aesthetic Dermatology Consultation and refined anti-aging, Botox, dermal fillers, and facial rejuvenation procedures.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=1000',
    subImage: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&q=80&w=600',
    thirdImage: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=600',
    benefits: ['Natural Anti-Aging Lifts', 'US-FDA Approved Fillers', 'Painless Micro-Injections', 'Instant Youthful Glow'],
    treatments: ['Aesthetic Dermatology Consultation', 'Botulinum Toxin (Botox) Lifts', 'Hyaluronic Acid Dermal Fillers', 'Anti-Ageing Treatments & Facelift', 'Buttock Lift', 'Liposuction & Body Contouring', 'Skin Polishing & Microdermabrasion', 'Stretch Marks Treatment', 'Advanced PDO/PLLA Thread Lifts']
  },
  {
    id: 'laser',
    icon: Zap,
    title: 'Advanced Laser Treatments',
    titleHindi: 'उन्नत लेज़र उपचार',
    desc: 'State-of-the-art fractional, pigmentary, and vascular lasers delivering precision skin resurfacing and permanent hair reduction.',
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=1000',
    subImage: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=600',
    thirdImage: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600',
    benefits: ['Triple Wavelength Diode Laser', 'Permanent Hair Reduction', 'Fractional Scar Resurfacing', 'Zero Hyperpigmentation Risk'],
    treatments: ['Permanent Hair Reduction (Triple-Wavelength Diode/ND-YAG)', 'Q-Switched ND-YAG Tattoo & Melasma Removal', 'Fractional CO2 Laser for Acne Scars', 'IPL Photofacials & Sun Damage Repair', 'Vascular Birthmark Correction', 'Laser Carbon Peels / Hollywood Peel']
  },
  {
    id: 'hair',
    icon: User,
    title: 'Hair Restoration Clinic',
    titleHindi: 'बाल बहाली क्लिनिक',
    desc: 'Comprehensive and clinically-verified medical and surgical protocols for male and female pattern baldness and scalp health.',
    image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=1000',
    subImage: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?auto=format&fit=crop&q=80&w=600',
    thirdImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=600',
    benefits: ['Certified Hair Restoration', 'High Follicular Survival Rate', 'Autologous PRP Therapy', 'Natural Dense Hair Line'],
    treatments: ['Certified Hair Restoration', 'Mezotherapy Hair Booster Injections', 'Platelet-Rich Plasma (PRP) Therapy', 'Stem Cell Therapy & Micro-graft activation', 'Follicular Laser Stimulation', 'Trichology & Scalp Rejuvenation']
  },
  {
    id: 'peels',
    icon: Atom,
    title: 'Chemical Peels & Resurfacing',
    titleHindi: 'रासायनिक पील्स',
    desc: 'Formulated medical-grade organic acid treatments targeting skin texture, hyperpigmentation, acne scars, and facial clarity.',
    image: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&q=80&w=1000',
    subImage: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=600',
    thirdImage: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=600',
    benefits: ['Medical-Grade Organic Acids', 'Deep Pigmentation Clearance', 'Pore Refinement & Polish', 'Customized Layering Protocol'],
    treatments: ['Salicylic Peel & Glycolic Anti-Acne Peels', 'Yellow Peel / Retinol Resurfacing', 'TCA Peels for Deep-Seated Scars', 'Melasmax/Cosmelan Pigmentation Peels', 'Dermaroller Skin Rejuvenation']
  },
  {
    id: 'pediatric',
    icon: User,
    title: 'Pediatric Dermatology',
    titleHindi: 'बाल चिकित्सा त्वचा रोग',
    desc: 'Gentle, compassionate, and precise management of sensitive dermatological situations in infants, toddlers, and teenagers.',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=1000',
    subImage: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=600',
    thirdImage: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600',
    benefits: ['Gentle Non-Stinging Care', 'Pediatric Approved Safety', 'Compassionate Child Handling', 'Rapid Relief Formulations'],
    treatments: ['Infantile Atopic Eczema', 'Congenital Hemangiomas & Birthmarks', 'Pediatric Psoriasis & Rashes', 'Viral Warts & Molluscum Contagiosum Extraction', 'Diaper Rash & Cradle Cap Care']
  },
  {
    id: 'surgery',
    icon: Scissors,
    title: 'Advanced Dermatosurgery',
    titleHindi: 'उन्नत डर्मेटोसर्जरी',
    desc: 'Surgical excision, radiofrequency ablation, corn removal, cyst removal, and suction blister vitiligo skin grafting.',
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1000',
    subImage: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=600',
    thirdImage: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600',
    benefits: ['100% Sterile OT Setting', 'Scar-Minimizing Suturing', 'Radiofrequency Ablation', 'Quick Outpatient Discharge'],
    treatments: ['Corn Removal', 'Skin Tag Surgical Removal', 'Cryotherapy Freezing for Skin Growths', 'Electrocautery / Radiofrequency Ablation', 'Suction Blister Skin Grafting for Vitiligo', 'Mole, Cyst & Lipoma Surgical Excision']
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
    treatment: 'Hair PRP & Hair Restoration',
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
    q: 'How many sessions are required for Hair Restoration and PRP Therapy?',
    a: 'PRP therapy generally yields visible improvement in hair density and reduction in hair-fall across 4 to 6 monthly sessions. For advanced Grade 3-7 alopecia, a single-day Hair Restoration is designed which safely implants active grafts one-by-one with natural angling. Dr. Nakra is a Certified Hair Specialist, ensuring high graft survival rates.'
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

export default function HomePageClient() {
  const [loading, setLoading] = useState(true);
  const [loadPercent, setLoadPercent] = useState(0);
  const [activeTab, setActiveTab] = useState('clinical');
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isCursorHovering, setIsCursorHovering] = useState(false);
  
  // Hindi translation states
  const [isHindi, setIsHindi] = useState(false);

  // Clinic IST Open / Closed Status Hook (Mon-Sat 12:30 PM - 7:30 PM IST)
  const [isOpen, setIsOpen] = useState(false);
  const [statusText, setStatusText] = useState('12:30 PM – 7:30 PM · Mon–Sat');

  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
      const ist = new Date(utc + (3600000 * 5.5));
      
      const day = ist.getDay(); // 0 = Sun, 1-6 = Mon-Sat
      const hours = ist.getHours();
      const mins = ist.getMinutes();
      const currentDecimal = hours + (mins / 60);

      const isMonToSat = day >= 1 && day <= 6;
      const isWithinHours = currentDecimal >= 12.5 && currentDecimal < 19.5;

      if (isMonToSat && isWithinHours) {
        setIsOpen(true);
        setStatusText('12:30 PM – 7:30 PM · Mon–Sat');
      } else {
        setIsOpen(false);
        if (day === 0) {
          setStatusText('Closed Sundays · Opens Mon 12:30 PM');
        } else if (currentDecimal < 12.5) {
          setStatusText('Opens Today 12:30 PM');
        } else {
          setStatusText(day === 6 ? 'Closed · Opens Mon 12:30 PM' : 'Opens Tomorrow 12:30 PM');
        }
      }
    };

    checkStatus();
    const interval = setInterval(checkStatus, 60000);
    return () => clearInterval(interval);
  }, []);

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
  const [formLoading, setFormLoading] = useState(false);
  const [formError, setFormError] = useState('');

  // Refs
  const bgCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const heroCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const heroVideoRef = useRef<HTMLVideoElement | null>(null);
  const scrollRef = useRef<number>(0);

  // Hero Background Video Controls
  const [isVideoMuted, setIsVideoMuted] = useState(true);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  useEffect(() => {
    const video = heroVideoRef.current;
    if (!video) return;

    video.muted = true;
    video.play().catch(() => {});

    const heroSection = document.getElementById('home');
    if (!heroSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
          setIsVideoPlaying(true);
        } else {
          video.pause();
          setIsVideoPlaying(false);
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(heroSection);
    return () => observer.disconnect();
  }, []);

  const toggleVideoPlay = () => {
    if (!heroVideoRef.current) return;
    if (isVideoPlaying) {
      heroVideoRef.current.pause();
      setIsVideoPlaying(false);
    } else {
      heroVideoRef.current.play().catch(() => {});
      setIsVideoPlaying(true);
    }
  };

  const toggleVideoMute = () => {
    if (!heroVideoRef.current) return;
    heroVideoRef.current.muted = !isVideoMuted;
    setIsVideoMuted(!isVideoMuted);
  };

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
    
    // Only listen for mousemove on desktop fine pointers to protect mobile battery & scroll performance
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (isFinePointer) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
    }

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
      if (isFinePointer) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  // Three.js Loader and Initializer
  useEffect(() => {
    if (loading) return;

    let bgRenderer: any, bgScene: any, bgCamera: any, bgParticles: any;
    let heroRenderer: any, heroScene: any, heroCamera: any, heroPoints: any;
    let animationFrameId: number;
    let resizeObserver: ResizeObserver;
    let heroObserver: IntersectionObserver;
    let isHeroVisible = true;

    const initThree = () => {
      if (!window.THREE) return;

      const THREE = window.THREE;

      // HERO CANVAS: Dermis grid wave rotating mesh
      const heroCanvas = heroCanvasRef.current;
      const heroContainer = heroCanvas?.parentElement;
      if (heroCanvas && heroContainer) {
        // Pause WebGL rendering loop when hero canvas is not visible in viewport
        heroObserver = new IntersectionObserver(([entry]) => {
          isHeroVisible = entry.isIntersecting;
        }, { threshold: 0.05 });
        heroObserver.observe(heroCanvas);

        const containerWidth = heroContainer.clientWidth;
        const containerHeight = heroContainer.clientHeight || 450;

        heroScene = new THREE.Scene();
        heroCamera = new THREE.PerspectiveCamera(45, containerWidth / containerHeight, 0.1, 100);
        heroCamera.position.set(0, 10, 25);
        heroCamera.lookAt(0, 0, 0);

        heroRenderer = new THREE.WebGLRenderer({ canvas: heroCanvas, alpha: true, antialias: true, powerPreference: 'high-performance' });
        heroRenderer.setSize(containerWidth, containerHeight);
        heroRenderer.setPixelRatio(1.0);

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
            gradient.addColorStop(0.3, 'rgba(84, 131, 179, 1)'); // Medium Blue
            gradient.addColorStop(0.6, 'rgba(5, 38, 89, 0.5)'); // Royal Blue
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

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        heroScene.add(ambientLight);
      }

      let frame = 0;
      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);

        // Instantly skip CPU calculation & WebGL draw calls when hero is scrolled offscreen
        if (!isHeroVisible) return;

        frame += 0.01;
        if (heroPoints) {
          const positions = heroPoints.geometry.attributes.position.array;
          const colsCount = 25;
          const rowsCount = 25;
          let idx = 0;

          for (let x = 0; x < colsCount; x++) {
            for (let z = 0; z < rowsCount; z++) {
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

        if (heroRenderer && heroScene && heroCamera) {
          heroRenderer.render(heroScene, heroCamera);
        }
      };

      animate();

      resizeObserver = new ResizeObserver(() => {
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
      if (window.gsap && window.ScrollTrigger) {
        clearInterval(timer);

        const gsap = window.gsap;
        const ScrollTrigger = window.ScrollTrigger;
        gsap.registerPlugin(ScrollTrigger);

        gsap.config({ nullTargetWarn: false });

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

        // Clean GSAP trigger bindings without heavy scroll scrub listeners
      }
    }, 150);

    return () => {
      clearInterval(timer);
    };
  }, [loading]);

  // Form Booking Submission Handler — Web3Forms Integration
  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      setFormError('Please enter your full name (at least 2 characters).');
      return;
    }
    const phoneRegex = /^[6-9]\d{9}$/; 
    if (!phoneRegex.test(formData.phone.trim())) {
      setFormError('Please provide a valid 10-digit Indian mobile number.');
      return;
    }
    if (!formData.date) {
      setFormError('Please select a preferred consultation date.');
      return;
    }
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const selected = new Date(formData.date);
    if (selected < today) {
      setFormError('The selected date is in the past. Please choose a future date.');
      return;
    }

    setFormLoading(true);

    try {
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
      if (!accessKey) {
        throw new Error('Booking service is not configured. Please contact the clinic directly.');
      }

      const payload = {
        access_key: accessKey,
        subject: `New Appointment Request — ${formData.name} (${formData.department})`,
        from_name: 'Centre For Skin — Appointment System',
        'Patient Name': formData.name.trim(),
        'Mobile Number': formData.phone.trim(),
        'Email Address': formData.email.trim() || 'Not provided',
        'Clinical Department': formData.department,
        'Preferred Date': formData.date,
        'Additional Message': formData.msg.trim() || 'None',
        botcheck: '',
        redirect: 'false',
      };

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok || result.success === false) {
        throw new Error(result.message || 'Submission failed. Please try again or call the clinic directly.');
      }

      setFormSubmitted(true);

      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({
          name: '',
          phone: '',
          email: '',
          department: 'Clinical Dermatology',
          date: '',
          msg: '',
        });
      }, 5000);

    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'An unexpected error occurred. Please try again.';
      setFormError(message);
    } finally {
      setFormLoading(false);
    }
  };

  return (
    <>
      <Script 
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js" 
        strategy="afterInteractive" 
      />
      <Script 
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" 
        strategy="afterInteractive" 
      />
      <Script 
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js" 
        strategy="afterInteractive" 
      />
      <Script 
        src="https://cdn.jsdelivr.net/npm/@studio-freight/lenis@1.0.42/dist/lenis.min.js" 
        strategy="afterInteractive" 
      />

      <div 
        id="scroll-progress-bar"
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-[#121316] via-[#1E64EC] to-[#4ADE80] z-[999] transition-all duration-75"
        style={{ width: '0%' }}
      />

      <div 
        id="custom-cursor"
        className={`fixed pointer-events-none z-[1000] hidden md:block rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-150 ease-out border ${
          isCursorHovering 
            ? 'w-14 h-14 bg-[#1E64EC]/15 border-[#1E64EC] scale-110' 
            : 'w-7 h-7 bg-transparent border-[#121316]/60'
        }`}
        style={{ left: '-100px', top: '-100px' }}
      />

      <div className="fixed inset-0 pointer-events-none -z-10 bg-[#FAF8F5]" />

      {loading && (
        <div 
          id="preloader-overlay"
          className="fixed inset-0 bg-[#121316] flex flex-col justify-center items-center z-[9999] transition-all duration-500"
        >
          <div className="text-center px-4 max-w-md w-full">
            <div className="w-16 h-16 bg-[#1E64EC] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl animate-pulse">
              <Activity className="w-9 h-9 text-white" />
            </div>

            <h1 className="text-2xl md:text-3xl font-serif text-white tracking-wider mb-2 select-none font-extrabold">
              CENTRE FOR SKIN
            </h1>
            <p className="text-xs md:text-sm text-[#94A3B8] font-sans uppercase tracking-[0.2em] mb-8 font-semibold">
              Medical & Aesthetic Excellence
            </p>

            <div className="w-full h-[3px] bg-white/10 rounded-full overflow-hidden mb-3">
              <div 
                className="h-full bg-[#1E64EC] transition-all ease-out duration-75"
                style={{ width: `${loadPercent}%` }}
              />
            </div>

            <div className="flex justify-between items-center text-[11px] font-mono text-[#94A3B8] tracking-wider">
              <span>INITIALIZING SYSTEM</span>
              <span>{loadPercent}%</span>
            </div>
          </div>
        </div>
      )}

      <Navbar isHindi={isHindi} setIsHindi={setIsHindi} setIsCursorHovering={setIsCursorHovering} />

      {/* HERO SECTION WITH BACKGROUND VIDEO */}
      <section 
        id="home"
        className="min-h-screen pt-24 md:pt-32 pb-16 flex items-center relative overflow-hidden bg-[#FAF8F5]"
      >
        {/* Full-Bleed Background Video Layer with GPU Hardware Layer Promotion */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none transform-gpu translate-z-0">
          <video
            ref={heroVideoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover opacity-90 scale-105 transition-opacity duration-700 transform-gpu translate-z-0 will-change-transform"
          >
            <source src="/vid/video-project.mp4" type="video/mp4" />
            <source src="/vid/Video Project 5.mp4" type="video/mp4" />
          </video>
          
          {/* Smooth Video Backdrop Overlays */}
          <div className="absolute top-0 left-0 right-0 h-36 bg-gradient-to-b from-[#121316]/30 via-[#121316]/10 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5]/90 via-[#FAF8F5]/40 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5] via-transparent to-transparent h-24 bottom-0 pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black text-[#121316] leading-tight mb-3">
              <span className="bg-gradient-to-r from-[#121316] via-[#1E64EC] to-[#121316] bg-clip-text text-transparent">
                Centre For Skin
              </span>
              <span className="block text-2xl sm:text-3xl text-[#1E64EC] font-sans font-bold mt-1">
                {isHindi ? 'सेंटर फॉर स्किन — डॉ. गौरव नकरा' : 'Dr. Gaurav Nakra'}
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#121316]/80 max-w-2xl font-normal leading-relaxed mb-8">
              {isHindi ? 
                'पूर्वी दिल्ली में 20 वर्षों के विशिष्ट अनुभव के साथ त्वचा, बाल, और लेज़र उपचार का सबसे विश्वसनीय केंद्र। उत्तम देखभाल।' : 
                'Highly specialized, award-winning dermatologist in East Delhi. Providing gold-standard lasers, certified hair restorations (PRP/GFC/Exosomes/Hair Transplant), chemical peels, and pediatric dermatology by dermatology services.'}
            </p>

            <div className="grid grid-cols-3 gap-3 md:gap-4 max-w-xl mb-6">
              {[
                { label: 'MD Gold Medalist', desc: isHindi ? 'शीर्ष सम्मानित' : 'Top Credentials' },
                { label: '20+ Years', desc: isHindi ? 'विशिष्ट अनुभव' : 'Clinical Expertise' },
                { label: '4.5★ (508+ Reviews)', desc: isHindi ? 'संतुष्ट मरीज अभिप्राय' : 'Google Rating' }
              ].map((stat, i) => (
                <div key={i} className="bg-white rounded-2xl p-4 border border-gray-200/80 hover:translate-y-[-2px] hover:shadow-xl transition-all shadow-sm">
                  <div className="font-serif text-sm md:text-base font-black text-[#121316] underline decoration-[#1E64EC] decoration-4 underline-offset-4">{stat.label}</div>
                  <div className="font-sans text-[10px] md:text-xs text-[#1E64EC] uppercase tracking-wider font-bold mt-1">{stat.desc}</div>
                </div>
              ))}
            </div>

            {/* Live Clinic Operating Status Pill */}
            <div className="mb-8 inline-flex items-center gap-2.5 bg-white px-4 py-2 rounded-full border border-gray-200/90 shadow-sm w-fit">
              <span className="flex items-center gap-1.5 font-sans text-xs md:text-sm font-bold text-[#121316]">
                <span className={`w-2.5 h-2.5 rounded-full ${isOpen ? 'bg-[#22C55E] animate-pulse' : 'bg-gray-400'}`} />
                {isOpen ? (isHindi ? 'अभी खुला है' : 'Open Now') : (isHindi ? 'अभी बंद है' : 'Closed')}
              </span>
              <span className="text-gray-300 font-light">|</span>
              <span className="font-sans text-xs text-[#64748B] font-semibold">
                {statusText}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a 
                href="#booking"
                className="w-full sm:w-auto px-8 py-4 bg-[#1E64EC] hover:bg-[#154ec2] text-white text-xs uppercase tracking-wider font-extrabold rounded-xl shadow-lg hover:shadow-2xl shadow-[#1E64EC]/20 transition-all flex justify-center items-center gap-2 group"
                onMouseEnter={() => setIsCursorHovering(true)}
                onMouseLeave={() => setIsCursorHovering(false)}
              >
                <Calendar className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                <span>{isHindi ? 'अभी अपॉइंटमेंट बुक करें' : 'Book Appointment'}</span>
              </a>
              <a 
                href="#departments"
                className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-[#EBF2FF] text-[#121316] border-2 border-gray-300 hover:border-[#1E64EC] text-xs uppercase tracking-wider font-bold rounded-xl shadow-sm transition-all text-center"
                onMouseEnter={() => setIsCursorHovering(true)}
                onMouseLeave={() => setIsCursorHovering(false)}
              >
                {isHindi ? 'सेवाओं की जाँच करें' : 'Explore Advanced Services'}
              </a>
            </div>


          </div>

          {/* Right Column: Signature Patient Voice Testimonial Floating Cluster */}
          <div className="lg:col-span-5 relative flex justify-center items-center w-full h-full min-h-[540px] md:min-h-[580px] lg:min-h-[620px]">
            <TestimonialFloatCluster />
          </div>

        </div>

        {/* Cinematic Video Control Badge */}
        <div className="absolute bottom-3 left-4 md:bottom-4 md:left-8 z-20 flex items-center gap-2 bg-white/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-gray-200/90 shadow-md text-[11px] font-sans font-bold text-[#121316]">
          <span className="w-2 h-2 rounded-full bg-[#1E64EC] animate-pulse" />
          <span className="hidden sm:inline font-mono tracking-wider text-[10px] text-[#64748B]">CINEMATIC TOUR</span>
          <button 
            onClick={toggleVideoPlay}
            className="px-2 py-0.5 bg-[#1E64EC]/10 hover:bg-[#1E64EC]/20 text-[#1E64EC] rounded-md transition-colors font-extrabold cursor-pointer"
            title={isVideoPlaying ? 'Pause Video' : 'Play Video'}
          >
            {isVideoPlaying ? 'Pause' : 'Play'}
          </button>
          <button 
            onClick={toggleVideoMute}
            className="px-2 py-0.5 bg-[#1E64EC]/10 hover:bg-[#1E64EC]/20 text-[#1E64EC] rounded-md transition-colors font-extrabold cursor-pointer"
            title={isVideoMuted ? 'Unmute Audio' : 'Mute Audio'}
          >
            {isVideoMuted ? 'Sound On' : 'Muted'}
          </button>
        </div>
      </section>

      {/* TRUST BAR & CLINICAL SPECIALTIES */}
      <div className="w-full bg-[#121316] py-8 border-y border-white/10 relative z-10 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col gap-6">
          {/* 4 Medical Association Columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 items-center text-center">
            {[
              { title: 'IADVL Accredited', desc: 'Dermatologists Association' },
              { title: 'IMA Approved', desc: 'Indian Medical Association' },
              { title: 'ISPD Member', desc: 'Pediatric Dermatology' },
              { title: 'EADV Fellow', desc: 'European Academy' }
            ].map((logo, i) => (
              <div 
                key={i} 
                className="group p-2 cursor-default"
                onMouseEnter={() => setIsCursorHovering(true)}
                onMouseLeave={() => setIsCursorHovering(false)}
              >
                <div className="font-serif text-sm md:text-base font-black text-[#CBD5E1] group-hover:text-white transition-colors duration-300">
                  {logo.title}
                </div>
                <div className="font-sans text-[9px] md:text-[10px] text-[#1E64EC] group-hover:text-[#93C5FD] uppercase tracking-wider font-bold mt-1 transition-colors duration-300">
                  {logo.desc}
                </div>
              </div>
            ))}
          </div>

          {/* Screenshot 3 Details: Core Clinical Specialties */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap justify-center items-center gap-2.5 sm:gap-3">
            {['Dermatology', 'Aesthetics', 'Lasers', 'Hair', 'Dermatosurgery'].map((spec, idx) => (
              <span 
                key={idx} 
                className="px-4 py-1.5 bg-white/5 border border-white/15 text-[#93C5FD] font-serif text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-[#1E64EC] hover:text-white hover:border-[#1E64EC] transition-all duration-300 shadow-sm"
              >
                {spec}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ABOUT / DOCTOR PROFILE */}
      <section 
        id="about" 
        className="py-20 md:py-32 relative bg-[#FAF8F5]"
      >
        <div id="doctor" className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-left">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-sans text-xs md:text-sm font-black text-[#1E64EC] tracking-[0.25em] uppercase block mb-3">
              {isHindi ? 'वरिष्ठ चिकित्सक प्रोफाइल' : 'Senior Consultant Dermatologist'}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-[#121316] leading-tight gsap-reveal">
              Dr. Gaurav Nakra
            </h2>
            <p className="font-sans text-xs md:text-sm text-[#1E64EC] tracking-[0.1em] uppercase font-bold mt-1.5">
              MD (Dermatology, Venereology & Leprosy) | Gold Medalist | 20+ Years Experience
            </p>
          </div>

          {/* Top 2-Column Hero Grid: Left Doctor Portrait & Tags | Right Bio, Qualifications & Associations */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-16">
            
            {/* Left Column: Image & Tags */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-6">
              <div className="relative rounded-[36px] overflow-hidden shadow-2xl border-4 border-white group h-full min-h-[420px]">
                <img 
                  src="/dr-gaurav-nakra.jpg" 
                  alt="Dr. Gaurav Nakra — Senior Consultant Dermatologist" 
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  width={400}
                  height={550}
                  loading="lazy"
                />

                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/60 shadow flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-500" />
                  <span className="font-serif text-[10px] font-bold text-[#121316]">MD Gold Medalist</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 bg-[#121316]/85 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-md flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#1E64EC] rounded-xl flex items-center justify-center shrink-0">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-serif text-[11px] font-bold text-white uppercase tracking-wider">
                      Delhi Medical Council
                    </div>
                    <div className="font-sans text-[10px] text-[#93C5FD] font-medium mt-0.5">
                      Accredited Registration No. 44068
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 p-5 bg-white border border-gray-200 rounded-[24px] shadow-sm">
                <span className="font-sans text-[10px] uppercase font-bold text-[#1E64EC] tracking-widest block w-full mb-1">
                  Active specialties area:
                </span>
                {['#LaserExpert', '#CustomPeels', '#HairRestoration', '#AntiAgingLifts', '#PediatricDermatology', '#PlateletRichPlasma', '#Dermatosurgery'].map((tag, idx) => (
                  <span 
                    key={idx} 
                    className="px-2.5 py-1 bg-[#EBF2FF] text-[#1E64EC] hover:bg-[#1E64EC] hover:text-white font-sans text-[10px] uppercase tracking-wider font-extrabold rounded-lg border border-[#1E64EC]/15 select-none transition-all"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column: Bio, Qualifications & Associations */}
            <div className="lg:col-span-7 flex flex-col justify-between bg-white p-6 md:p-8 rounded-[36px] border border-gray-200 shadow-xl">
              <div>
                <h3 className="font-serif text-2xl font-black text-[#121316] mb-4 flex items-center gap-2 pb-3 border-b border-gray-200">
                  <BookOpen className="w-6 h-6 text-[#1E64EC]" />
                  <span>Biography & Qualifications</span>
                </h3>

                <p className="text-sm md:text-base text-[#121316]/80 leading-relaxed mb-4">
                  Dr. Gaurav Nakra specialized in all skin problems. He has done MD Dermatology, Venereology & Leprosy with a distinguished academic record and inquisitive approach constantly strive to keep abreast of the recent advances in Dermatology and Cosmetology and provide skin care on a patient friendly and informative basis.
                </p>

                <p className="text-sm md:text-base text-[#121316]/80 leading-relaxed mb-6">
                  With 20+ years of clinical experience, Dr. Nakra holds a prestigious Fellowship in Laser Medicine from Toulouse, France. He has served across major hospital networks including Dr. BSA Hospital (Rohini), DHI Safdarjung Enclave, New Look Laser Clinics, GM Hospital, and Nakra Dermatology Centre (Vivek Vihar). He has published research in the International Journal of Clinical Research (2008), was awarded "Most Promising Dermatologist In Delhi NCR" in 2015, and awarded for Excellence in Dermatology by Economic Times in 2025.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
                  {[
                    { title: 'MBBS Graduation (2000–2006)', desc: 'Motilal Nehru Medical College, Allahabad' },
                    { title: 'MD Dermatology (2009)', desc: 'D.D.U University, Gorakhpur — Academic Honors' },
                    { title: 'International Publications (2008)', desc: 'International Journal of Clinical Research' },
                    { title: 'Most Promising Dermatologist (2015)', desc: 'Recognized in Delhi NCR' },
                    { title: 'Fellowship in Laser Medicine', desc: 'Toulouse, France' },
                    { title: 'Excellence in Dermatology (2025)', desc: 'Awarded by Economic Times' },
                    { title: 'Delhi Medical Council', desc: 'Registered DMC Practitioner: 44068' },
                    { title: '20+ Years Experience', desc: 'Clinical & Aesthetic Dermatology' }
                  ].map((q, idx) => (
                    <div key={idx} className="flex gap-2.5 items-start text-left bg-[#FAF8F5] p-3 rounded-xl border border-gray-200/80">
                      <div className="p-1 rounded-lg bg-[#1E64EC]/10 text-[#1E64EC] border border-[#1E64EC]/20 mt-0.5 shrink-0">
                        <Check className="w-3.5 h-3.5 stroke-[3px]" />
                      </div>
                      <div>
                        <div className="font-serif text-xs font-bold text-[#121316]">{q.title}</div>
                        <div className="font-sans text-[10px] text-[#1E64EC] font-semibold mt-0.5">{q.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Current & Past Affiliations */}
              <div className="bg-[#EBF2FF]/60 border border-[#1E64EC]/20 rounded-[24px] p-5 shadow-sm text-left">
                <span className="font-sans text-[10px] uppercase font-bold text-[#1E64EC] tracking-widest block mb-3">
                  {isHindi ? 'वर्तमान और पूर्व चिकित्सा संबंध:' : 'Current & Past Affiliations:'}
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#121316] font-bold leading-normal font-sans">
                  <div className="flex items-start gap-2">
                    <Award className="w-4 h-4 text-[#1E64EC] shrink-0 mt-0.5" />
                    <span>Founder & Senior Consultant — Centre For Skin</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Building className="w-4 h-4 text-[#1E64EC] shrink-0 mt-0.5" />
                    <span>Consultant — Dr. BSA Hospital, Rohini (2009–2012)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Building className="w-4 h-4 text-[#1E64EC] shrink-0 mt-0.5" />
                    <span>Consultant — DHI Safdarjung Enclave Clinic (2012–2014)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Building className="w-4 h-4 text-[#1E64EC] shrink-0 mt-0.5" />
                    <span>Laser Surgeon — New Look & GM Hospital</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Full-Width Timeline Grid Section */}
          <div className="mt-8 pt-10 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
              <div>
                <span className="font-sans text-xs font-black text-[#1E64EC] tracking-[0.25em] uppercase block mb-1">
                  {isHindi ? 'व्यावसायिक यात्रा' : 'Clinical Milestone Log'}
                </span>
                <h3 className="font-serif text-2xl font-black text-[#121316]">
                  {isHindi ? 'व्यावसायिक यात्रा और मील के पत्थर' : 'Professional Journey & Milestones'}
                </h3>
              </div>
              
              <a 
                href="/doctor-gaurav-nakra"
                className="w-fit flex items-center gap-2 px-5 py-2.5 bg-[#1E64EC] hover:bg-[#154ec2] text-white text-xs font-sans font-extrabold uppercase tracking-wider rounded-xl shadow-md hover:shadow-lg transition-all group"
                onMouseEnter={() => setIsCursorHovering(true)}
                onMouseLeave={() => setIsCursorHovering(false)}
              >
                <span>{isHindi ? 'डॉक्टर का पूर्ण विवरण' : 'View Full Dedicated Profile Page'}</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {TIMELINE.map((t, idx) => (
                <div key={idx} className="bg-white p-5 rounded-[24px] border border-gray-200 shadow-md hover:shadow-xl hover:border-[#1E64EC]/40 hover:translate-y-[-2px] transition-all flex flex-col justify-between text-left">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-xs font-black px-2.5 py-1 bg-[#1E64EC] text-white rounded-lg">
                        {t.year}
                      </span>
                      <span className="w-2 h-2 rounded-full bg-[#1E64EC]" />
                    </div>
                    <h4 className="font-serif text-sm font-bold text-[#121316] mb-1.5">{t.title}</h4>
                    <p className="font-sans text-xs text-[#121316]/75 leading-relaxed">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* CLINICAL DEPARTMENTS & SERVICES */}
      <section 
        id="departments" 
        className="py-20 md:py-32 relative bg-[#FAF8F5] border-t border-gray-200/60"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div className="text-left max-w-2xl">
              <span className="font-sans text-xs md:text-sm font-black text-[#1E64EC] tracking-[0.25em] uppercase mb-3 block">
                {isHindi ? 'क्लिनिक की उन्नत सेवाएं' : 'Clinic Specializations'}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-[#121316] leading-tight gsap-reveal">
                {isHindi ? 'हमारे विशेषज्ञ चिकित्सा विभाग' : 'Comprehensive Skin, Hair & Aesthetic Solutions'}
              </h2>
            </div>
            <div className="mt-4 md:mt-0">
              <p className="font-sans text-xs md:text-sm text-[#121316]/75 md:text-right max-w-md font-semibold">
                Click on any clinical category to access the specific, certified list of laser or dermatological treatments.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Accordion Column: Department Buttons & Expanded Procedures List */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              {SERVICES.map((s) => {
                const IconComponent = s.icon;
                const isActive = activeTab === s.id;
                return (
                  <div key={s.id} className="flex flex-col">
                    <button
                      onClick={(e) => {
                        setActiveTab(s.id);
                        if (window.innerWidth >= 768) {
                          (e.currentTarget as HTMLElement).scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                        }
                      }}
                      className={`w-full text-left p-4 rounded-[24px] border transition-all duration-300 flex items-center gap-4 cursor-pointer select-none ${
                        isActive 
                          ? 'bg-[#1E64EC] border-[#1E64EC] text-white shadow-xl scale-102' 
                          : 'bg-white border-gray-200 hover:border-[#1E64EC] text-[#121316] hover:bg-[#EBF2FF]/60 shadow-sm'
                      }`}
                      aria-label={`Select treatment category: ${s.title}`}
                      onMouseEnter={() => setIsCursorHovering(true)}
                      onMouseLeave={() => setIsCursorHovering(false)}
                    >
                      <div className={`p-2.5 rounded-xl transition-colors duration-300 ${
                        isActive ? 'bg-white/20 text-white' : 'bg-[#EBF2FF] text-[#1E64EC]'
                      }`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="font-serif text-sm font-black leading-snug">
                          {isHindi ? s.titleHindi : s.title}
                        </div>
                        <div className={`font-sans text-[10px] font-semibold uppercase tracking-wider mt-0.5 transition-colors duration-300 ${
                          isActive ? 'text-white/90 font-bold' : 'text-[#1E64EC]'
                        }`}>
                          View {s.treatments.length} Procedures
                        </div>
                      </div>
                      <div className={`p-1.5 rounded-lg border transition-transform duration-300 ${
                        isActive ? 'bg-white/20 border-white/40 text-white rotate-180' : 'bg-transparent border-gray-200 text-[#121316]'
                      }`}>
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    {/* Smooth 60 FPS Accordion Height Opening Animation Container */}
                    <div 
                      className={`grid transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden ${
                        isActive ? 'grid-rows-[1fr] opacity-100 mt-2 mb-1' : 'grid-rows-[0fr] opacity-0 mt-0 mb-0 pointer-events-none'
                      }`}
                    >
                      <div className="overflow-hidden min-h-0">
                        <div className="bg-[#EBF2FF]/80 border-2 border-[#1E64EC]/30 rounded-[24px] p-4 text-left shadow-inner">
                          <div className="flex items-center justify-between pb-2 border-b border-[#1E64EC]/20 mb-3">
                            <span className="font-sans text-[10px] uppercase font-extrabold text-[#1E64EC] tracking-wider">
                              Certified Procedures ({s.treatments.length})
                            </span>
                            <span className="w-2 h-2 rounded-full bg-[#1E64EC] animate-pulse" />
                          </div>
                          
                          <div className="flex flex-col gap-2 max-h-[360px] overflow-y-auto pr-1 custom-scrollbar overscroll-contain touch-pan-y">
                            {s.treatments.map((t, idx) => (
                              <div 
                                key={idx}
                                className="p-2.5 bg-white hover:bg-[#EBF2FF] border border-gray-200/80 hover:border-[#1E64EC] rounded-xl flex items-start gap-2.5 transition-all duration-150 shadow-sm group cursor-pointer hover:translate-x-1"
                              >
                                <div className="p-1 rounded-md bg-[#1E64EC]/10 text-[#1E64EC] group-hover:bg-[#1E64EC] group-hover:text-white transition-colors shrink-0 mt-0.5">
                                  <ShieldCheck className="w-3.5 h-3.5 stroke-[2.5px]" />
                                </div>
                                <span className="font-serif text-xs font-bold text-[#121316] group-hover:text-[#1E64EC] transition-colors leading-tight">
                                  {t}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Column: Visual Department Pictures Showcase Gallery Box */}
            <div className="lg:col-span-7">
              {SERVICES.map((s) => {
                if (s.id !== activeTab) return null;
                const IconComponent = s.icon;
                return (
                  <div 
                    key={s.id}
                    className="bg-white border border-gray-200 rounded-[32px] p-6 md:p-8 shadow-2xl text-left h-full flex flex-col justify-between animate-fade-in"
                  >
                    <div>
                      {/* Header */}
                      <div className="flex justify-between items-start border-b border-gray-200 pb-4 mb-6">
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-[#EBF2FF] rounded-2xl text-[#1E64EC] shadow-sm">
                            <IconComponent className="w-8 h-8" />
                          </div>
                          <div>
                            <h3 className="font-serif text-xl md:text-2xl font-black text-[#121316]">
                              {isHindi ? s.titleHindi : s.title}
                            </h3>
                            <span className="font-sans text-[10px] bg-[#EBF2FF] text-[#1E64EC] px-2.5 py-1 rounded-full font-extrabold uppercase tracking-wider inline-block mt-1">
                              Department Visual Showcase
                            </span>
                          </div>
                        </div>
                        <div className="font-serif text-3xl font-black text-gray-300">CS</div>
                      </div>

                      <p className="text-sm md:text-base text-[#121316]/80 mb-6 leading-relaxed">
                        {s.desc}
                      </p>

                      {/* Department Pictures Showcase Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-6">
                        {/* Featured Primary Image */}
                        <div className="md:col-span-7 relative rounded-[24px] overflow-hidden shadow-lg border-2 border-gray-100 group h-[240px]">
                          <img 
                            src={s.image} 
                            alt={`${s.title} Clinical Treatment`}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800';
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#121316]/80 via-transparent to-transparent" />
                          <div className="absolute bottom-3 left-3 right-3 text-white">
                            <span className="font-sans text-[10px] uppercase font-extrabold text-[#93C5FD] tracking-wider block">
                              Certified Clinical Procedure
                            </span>
                            <div className="font-serif text-sm font-black leading-tight mt-0.5">
                              {s.title}
                            </div>
                          </div>
                        </div>

                        {/* Secondary & Tertiary Department Pictures */}
                        <div className="md:col-span-5 flex flex-col gap-3">
                          <div className="relative rounded-[20px] overflow-hidden shadow-md border border-gray-100 group h-[115px]">
                            <img 
                              src={s.subImage} 
                              alt={`${s.title} Advanced Equipment`}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              loading="lazy"
                              onError={(e) => {
                                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=600';
                              }}
                            />
                            <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-md px-2 py-0.5 rounded-lg border border-white/60 shadow">
                              <span className="font-serif text-[9px] font-bold text-[#121316]">US-FDA Approved</span>
                            </div>
                          </div>

                          <div className="relative rounded-[20px] overflow-hidden shadow-md border border-gray-100 group h-[115px]">
                            <img 
                              src={s.thirdImage} 
                              alt={`${s.title} Clinical Results`}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              loading="lazy"
                              onError={(e) => {
                                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=600';
                              }}
                            />
                            <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-md px-2 py-0.5 rounded-lg border border-white/60 shadow">
                              <span className="font-serif text-[9px] font-bold text-[#1E64EC]">Sterile Care Suite</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Key Clinical Benefits Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                        {s.benefits.map((benefit, idx) => (
                          <div key={idx} className="p-3 bg-[#FAF8F5] border border-gray-200/80 rounded-xl flex items-center gap-2.5">
                            <div className="p-1 rounded-lg bg-[#1E64EC]/10 text-[#1E64EC] shrink-0">
                              <Check className="w-3.5 h-3.5 stroke-[3px]" />
                            </div>
                            <span className="font-serif text-xs font-bold text-[#121316]">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Footer */}
                    <div className="bg-[#EBF2FF]/70 border border-[#1E64EC]/20 rounded-[22px] p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="flex items-center gap-3 text-left">
                        <Info className="w-5 h-5 text-[#1E64EC] shrink-0" />
                        <span className="font-sans text-[11px] md:text-xs text-[#121316] leading-tight font-semibold">
                          All clinical and aesthetic treatments are administered under strict sterile medical protocols.
                        </span>
                      </div>
                      <a 
                        href="#booking"
                        className="w-full sm:w-auto px-6 py-3 bg-[#1E64EC] hover:bg-[#154ec2] text-white text-[11px] font-sans font-black uppercase tracking-wider rounded-2xl shadow-md hover:shadow-lg transition-all flex justify-center items-center gap-2 hover:translate-y-[-2px] shrink-0"
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

      {/* TESTIMONIALS */}
      <section 
        id="testimonials" 
        className="py-20 md:py-32 relative bg-[#121316] text-white"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-left">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-sans text-xs md:text-sm font-black text-[#1E64EC] tracking-[0.2em] uppercase block mb-3">
              {isHindi ? 'मरीजों के वास्तविक विचार' : 'Patient Portrayals'}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-white leading-tight gsap-reveal">
              {isHindi ? 'संतुष्ट मरीजों के अभिप्राय' : 'Verified Google Reviews Trust'}
            </h2>
            <div className="flex justify-center items-center gap-2 mt-4 select-none">
              <span className="font-sans text-sm font-bold text-[#94A3B8]">Excellent Rating:</span>
              <div className="flex items-center gap-0.5 text-[#FACC15]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current text-[#FACC15]" />
                ))}
              </div>
              <span className="font-sans text-sm font-black text-white">4.5/5 (508+ patients)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div 
                key={idx}
                className="bg-white/5 border border-white/10 rounded-[28px] p-6 md:p-8 flex flex-col justify-between hover:border-[#1E64EC]/50 hover:bg-white/10 transition-all shadow-2xl relative"
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
                    <div className="font-sans text-[10px] text-[#94A3B8] uppercase tracking-wider font-semibold mt-1">
                      Verified Case: {t.treatment}
                    </div>
                  </div>
                  
                  <div className="w-7 h-7 rounded-full bg-[#1E64EC] flex items-center justify-center font-mono text-[10px] font-black text-white">
                    G
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CONTACT & BOOKING */}
      <section 
        id="contact" 
        className="py-20 md:py-32 relative bg-[#FAF8F5]"
      >
        <div id="booking" className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-left">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-sans text-xs md:text-sm font-black text-[#1E64EC] tracking-[0.25em] uppercase block mb-3">
              {isHindi ? 'पंजीकरण और बुकिंग' : 'Interactive Contact Hub'}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-[#121316] leading-tight gsap-reveal">
              {isHindi ? 'अपॉइंटमेंट बुक करें और संपर्क करें' : 'Get in Touch — Doctor Availability Portal'}
            </h2>
            <p className="font-sans text-xs md:text-sm text-[#121316]/75 mt-3 select-none">
              Fill out the diagnostic appointment system coordinates, or use direct clicking call targets below.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            
            <div className="lg:col-span-4 flex flex-col gap-4">
              
              <div className="bg-gradient-to-br from-[#121316] via-[#121316] to-[#1E64EC]/90 text-white rounded-[32px] p-6 shadow-2xl border-2 border-white/20 text-left flex flex-col gap-5 relative overflow-hidden flex-1">
                <span className="font-sans text-[10px] uppercase font-bold text-[#94A3B8] tracking-widest block relative z-10">
                  Clinic Identity Details:
                </span>
                
                <div className="flex gap-4 items-start bg-transparent relative z-10">
                  <div className="p-2.5 rounded-[12px] bg-white/10 text-white border border-white/10">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-serif text-[11px] font-bold text-[#94A3B8] uppercase tracking-wider">
                      Appointment Desks
                    </div>
                    <a 
                      href="tel:01146052234" 
                      className="font-sans text-base font-black text-white hover:text-[#93C5FD] transition-colors mt-0.5 block"
                    >
                      011 4605 2234
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start bg-transparent relative z-10">
                  <div className="p-2.5 rounded-[12px] bg-white/10 text-white border border-white/10">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-serif text-[11px] font-bold text-[#94A3B8] uppercase tracking-wider">
                      Official Clinic Email
                    </div>
                    <a 
                      href="mailto:info@centreforskin.in" 
                      className="font-sans text-xs font-bold text-white hover:text-[#93C5FD] transition-colors mt-0.5 block"
                    >
                      info@centreforskin.in
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start bg-transparent relative z-10">
                  <div className="p-2.5 rounded-[12px] bg-white/10 text-white border border-white/10">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-serif text-[11px] font-bold text-[#94A3B8] uppercase tracking-wider">
                      Clinic Address
                    </div>
                    <p className="font-sans text-xs text-white leading-relaxed mt-1">
                      178, Basement, Saini Enclave, Near Karkardooma Metro Station, Anand Vihar, East Delhi, Delhi — 110092
                    </p>
                    <span className="font-sans text-[10px] text-[#FACC15] font-semibold mt-1 block">
                      Landmark - Canara Bank Karkardooma
                    </span>
                  </div>
                </div>

                <div className="flex gap-4 items-start bg-transparent relative z-10">
                  <div className="p-2.5 rounded-[12px] bg-white/10 text-white border border-white/10">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-serif text-[11px] font-bold text-[#94A3B8] uppercase tracking-wider">
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

                <div className="grid grid-cols-2 gap-2 mt-auto pt-4 border-t border-white/10 relative z-10">
                  <a 
                    href="tel:01146052234"
                    className="py-3 bg-white hover:bg-gray-100 text-[#121316] font-bold text-center text-xs uppercase rounded-xl shadow-md transition-all flex justify-center items-center gap-2"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Desk</span>
                  </a>
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=Centre+For+Skin+178+Saini+Enclave+Karkardooma+Delhi+110092"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 bg-[#1E64EC] hover:bg-[#154ec2] text-white font-bold text-center text-xs uppercase rounded-xl border border-[#1E64EC] shadow-md transition-all flex justify-center items-center gap-1.5"
                  >
                    <span>Directions</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="bg-white border border-gray-200 p-5 rounded-[24px] flex items-center justify-between shadow-md text-left">
                <div>
                  <div className="font-serif text-sm font-black text-[#121316]">508+ Reviews</div>
                  <div className="font-sans text-[10px] text-[#1E64EC] font-bold uppercase tracking-wider mt-0.5">Total Local feedback</div>
                </div>
                <div className="flex items-center gap-0.5 text-[#FACC15]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
              </div>

            </div>

            <div className="lg:col-span-8 flex flex-col gap-6 w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full flex-1">
                
                <div className="bg-white border border-gray-200 p-6 md:p-8 rounded-[32px] shadow-xl flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center gap-2.5 pb-3 border-b border-gray-200 mb-6 text-left">
                      <Calendar className="w-5 h-5 text-[#1E64EC]" />
                      <h4 className="font-serif text-lg font-black text-[#121316]">Online Appointment</h4>
                    </div>

                    {formSubmitted ? (
                      <div className="bg-[#4ADE80]/15 border border-[#4ADE80] rounded-2xl p-6 text-center text-[#121316] h-[250px] flex flex-col justify-center items-center">
                        <div className="w-12 h-12 bg-[#4ADE80] text-white rounded-full flex items-center justify-center mb-3">
                          <Check className="w-6 h-6 stroke-[3px]" />
                        </div>
                        <h5 className="font-serif text-base font-black">Booking Request Received!</h5>
                        <p className="font-sans text-[11px] text-[#1E64EC] font-semibold mt-1.5">
                          Dr. Gaurav Nakra&rsquo;s desk will call you back shortly to confirm your consultation slot.
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleBooking} className="flex flex-col gap-4 text-left" noValidate>
                        <input
                          type="checkbox"
                          name="botcheck"
                          style={{ display: 'none' }}
                          tabIndex={-1}
                          aria-hidden="true"
                          readOnly
                        />

                        {formError && (
                          <div className="bg-red-500/10 border border-red-500 rounded-lg p-2.5 text-xs font-sans text-red-600 font-bold flex items-center gap-2" role="alert">
                            <Info className="w-4 h-4 flex-shrink-0" />
                            <span>{formError}</span>
                          </div>
                        )}

                        <div>
                          <label htmlFor="booking-name" className="font-sans text-[11px] font-bold text-[#121316] uppercase tracking-wider block mb-1">
                            Patient Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="booking-name"
                            type="text"
                            name="name"
                            autoComplete="name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="e.g., Rajesh Sharma"
                            disabled={formLoading}
                            className="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-[#FAF8F5] text-xs text-[#121316] font-bold focus:outline focus:outline-[#1E64EC] focus:bg-white placeholder-[#64748B]/60 transition-colors disabled:opacity-60"
                          />
                        </div>

                        <div>
                          <label htmlFor="booking-phone" className="font-sans text-[11px] font-bold text-[#121316] uppercase tracking-wider block mb-1">
                            Mobile Number <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="booking-phone"
                            type="tel"
                            name="phone"
                            autoComplete="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '').slice(0, 10) })}
                            placeholder="e.g., 9911991199"
                            maxLength={10}
                            disabled={formLoading}
                            className="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-[#FAF8F5] text-xs text-[#121316] font-bold focus:outline focus:outline-[#1E64EC] focus:bg-white placeholder-[#64748B]/60 transition-colors disabled:opacity-60"
                          />
                        </div>

                        <div>
                          <label htmlFor="booking-email" className="font-sans text-[11px] font-bold text-[#121316] uppercase tracking-wider block mb-1">
                            Email Address <span className="text-[#64748B] font-medium normal-case">(optional)</span>
                          </label>
                          <input
                            id="booking-email"
                            type="email"
                            name="email"
                            autoComplete="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="e.g., patient@gmail.com"
                            disabled={formLoading}
                            className="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-[#FAF8F5] text-xs text-[#121316] font-bold focus:outline focus:outline-[#1E64EC] focus:bg-white placeholder-[#64748B]/60 transition-colors disabled:opacity-60"
                          />
                        </div>

                        <div>
                          <label htmlFor="booking-dept" className="font-sans text-[11px] font-bold text-[#121316] uppercase tracking-wider block mb-1">
                            Select Clinical Department
                          </label>
                          <select
                            id="booking-dept"
                            name="department"
                            value={formData.department}
                            onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                            disabled={formLoading}
                            className="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-[#FAF8F5] text-xs text-[#121316] font-bold focus:outline focus:outline-[#1E64EC] focus:bg-white transition-colors disabled:opacity-60"
                          >
                            <option value="Clinical Dermatology">Clinical Dermatology</option>
                            <option value="Aesthetic Rejuvenation">Aesthetic Dermatology</option>
                            <option value="Advanced Laser Treatments">Advanced Lasers</option>
                            <option value="Hair Transplant / PRP">Hair Restoration</option>
                            <option value="Chemical Peels">Chemical Peels</option>
                            <option value="Advanced Dermatosurgery">Advanced Dermatosurgery</option>
                          </select>
                        </div>

                        <div>
                          <label htmlFor="booking-date" className="font-sans text-[11px] font-bold text-[#121316] uppercase tracking-wider block mb-1">
                            Preferred Consultation Date <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="booking-date"
                            type="date"
                            name="date"
                            value={formData.date}
                            min={new Date().toISOString().split('T')[0]}
                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                            disabled={formLoading}
                            className="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-[#FAF8F5] text-xs text-[#121316] font-bold focus:outline focus:outline-[#1E64EC] focus:bg-white transition-colors disabled:opacity-60"
                          />
                        </div>

                        <div>
                          <label htmlFor="booking-msg" className="font-sans text-[11px] font-bold text-[#121316] uppercase tracking-wider block mb-1">
                            Symptoms / Message <span className="text-[#64748B] font-medium normal-case">(optional)</span>
                          </label>
                          <textarea
                            id="booking-msg"
                            name="msg"
                            value={formData.msg}
                            onChange={(e) => setFormData({ ...formData, msg: e.target.value })}
                            placeholder="Briefly describe your concern or any questions for the doctor..."
                            rows={2}
                            maxLength={500}
                            disabled={formLoading}
                            className="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-[#FAF8F5] text-xs text-[#121316] font-bold focus:outline focus:outline-[#1E64EC] focus:bg-white placeholder-[#64748B]/60 transition-colors resize-none disabled:opacity-60"
                          />
                        </div>

                        <button
                          type="submit"
                          disabled={formLoading}
                          aria-label="Submit appointment booking request"
                          className="mt-2 py-3.5 bg-[#1E64EC] hover:bg-[#154ec2] text-white text-xs uppercase tracking-wider font-extrabold rounded-2xl shadow-xl shadow-[#1E64EC]/20 cursor-pointer hover:translate-y-[-2px] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:translate-y-0"
                        >
                          {formLoading ? (
                            <>
                              <svg className="animate-spin w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                              </svg>
                              <span>Submitting Request...</span>
                            </>
                          ) : (
                            <span>Book Active Consultation Slot</span>
                          )}
                        </button>

                        <p className="text-center text-[10px] text-[#64748B] font-sans mt-1">
                          Your details are encrypted and used solely for appointment confirmation.
                        </p>
                      </form>
                    )}
                  </div>
                </div>

                <div className="w-full h-full min-h-[350px] border border-gray-200 rounded-[32px] overflow-hidden shadow-xl relative block">
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
                  
                  <div className="absolute top-4 left-4 right-4 bg-white/90 backdrop-blur-md px-4 py-3 rounded-xl border border-gray-200 shadow-md flex justify-between items-center text-left">
                    <div>
                      <div className="font-serif text-xs font-bold text-[#121316]">Need simple routing?</div>
                      <div className="font-sans text-[10px] text-[#1E64EC] font-semibold mt-0.5">Click map to initiate Google Navigation.</div>
                    </div>
                    <a 
                      href="https://www.google.com/maps/search/?api=1&query=Centre+For+Skin+178+Saini+Enclave+Karkardooma+Delhi+110092"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-[#1E64EC] text-white hover:bg-[#154ec2] transition-colors"
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

      {/* FAQS */}
      <section 
        id="faqs" 
        className="py-20 md:py-32 relative bg-[#FAF8F5] border-t border-gray-200/60"
      >
        <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10 text-left">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-sans text-xs md:text-sm font-black text-[#1E64EC] tracking-[0.2em] uppercase block mb-3">
              {isHindi ? 'अक्सर पूछे जाने वाले सवाल' : 'Dermatology Q&A'}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-[#121316] leading-tight gsap-reveal">
              {isHindi ? 'पूछे जाने वाले मुख्य सवाल' : 'Dermatosurgery & Treatment FAQs'}
            </h2>
            <p className="font-sans text-xs md:text-sm text-[#121316]/75 mt-3 select-none">
              Explore gold-standard, structured clinical answers written and verified directly by dermatologist Dr. Gaurav Nakra.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {FAQS.map((faq, index) => {
              const isOpen = activeFAQ === index;
              return (
                <div 
                  key={index}
                  className="border border-gray-200 rounded-[22px] bg-white overflow-hidden shadow-md hover:border-[#1E64EC]/40 hover:shadow-xl hover:translate-y-[-2px] transition-all"
                >
                  <button
                    onClick={() => setActiveFAQ(isOpen ? null : index)}
                    className="w-full p-5 text-left flex justify-between items-center gap-4 cursor-pointer select-none group"
                    aria-expanded={isOpen}
                    onMouseEnter={() => setIsCursorHovering(true)}
                    onMouseLeave={() => setIsCursorHovering(false)}
                  >
                    <span className="font-serif text-sm md:text-base font-black text-[#121316] group-hover:text-[#1E64EC] transition-colors leading-snug">
                      {isHindi && index === 0 ? 'सेंटर फॉर स्किन पर लेज़र हेयर रिडक्शन कितना सुरक्षित है?' : faq.q}
                    </span>
                    <div className={`p-1.5 rounded-lg border border-gray-200 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#EBF2FF] text-[#1E64EC]' : 'bg-transparent text-[#121316]'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <div 
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen ? 'max-h-[500px] border-t border-gray-200' : 'max-h-0'
                    }`}
                  >
                    <div className="p-5 text-xs md:text-sm text-[#121316]/80 leading-relaxed bg-[#EBF2FF]/40 font-normal">
                      {isHindi && index === 0 ? 'लेज़र बाल हटाना पूरी तरह से सुरक्षित है। सेंटर फॉर स्किन पर, हम केवल US-FDA स्वीकृत ट्रिपल वेवलेंथ डायोड लेज़र का उपयोग करते हैं जो त्वचा पर अत्यधिक सुरक्षित और प्रभावी है। सभी लेज़र प्रक्रियाएं डॉ. गौरव नकरा के निजी मार्गदर्शन में की जाती हैं।' : faq.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      <Footer />

      {/* FLOATING WHATSAPP */}
      <a 
        href="tel:01146052234"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-[99999] group animate-bounce"
        aria-label="Direct Chat with Centre For Skin on WhatsApp"
        onMouseEnter={() => setIsCursorHovering(true)}
        onMouseLeave={() => setIsCursorHovering(false)}
      >
        <div className="w-14 h-14 bg-emerald-500 rounded-full flex items-center justify-center text-white shadow-2xl hover:bg-emerald-600 transition-all hover:scale-105 relative border-2 border-white">
          <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.455L0 24zm6.59-4.846c1.66.986 3.284 1.48 4.909 1.48 5.27 0 9.563-4.287 9.566-9.564.002-2.556-.992-4.959-2.799-6.77-1.804-1.807-4.205-2.8-6.77-2.802-5.277 0-9.571 4.287-9.575 9.568-.002 1.83.499 3.619 1.453 5.17l-.994 3.63 3.733-.974-.423-.24z" />
          </svg>
          <div className="absolute left-16 bg-[#121316] text-white text-[10px] font-sans uppercase font-bold tracking-wider px-3 py-1.5 rounded-lg border border-white/15 opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block whitespace-nowrap shadow-md">
            Chat on WhatsApp
          </div>
          <span className="absolute top-0 right-0 w-3 h-3 rounded-full bg-red-500 animate-ping" />
        </div>
      </a>

      {/* BACK TO TOP — Permanent DOM node with smooth opacity transition */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-5 right-5 z-[50] p-3.5 bg-[#1E64EC] text-white hover:bg-[#154ec2] rounded-full shadow-2xl transition-all duration-300 border-2 border-white/20 select-none hover:scale-105 active:scale-95 cursor-pointer transform-gpu ${
          showBackToTop ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-90 pointer-events-none'
        }`}
        aria-label="Scroll Back To Top Viewport"
        onMouseEnter={() => setIsCursorHovering(true)}
        onMouseLeave={() => setIsCursorHovering(false)}
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </>
  );
}
