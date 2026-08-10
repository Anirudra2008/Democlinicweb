'use client';

import React, { useEffect, useRef } from 'react';

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  avatar: string;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "anukriti",
    name: "Ms. Anukriti",
    role: "Student",
    rating: 5,
    avatar: "/assets/testimonials/anukriti.jpg",
    quote:
      "Dr. Gaurav Nakra is a wonderful dermatologist. In 2019, I was diagnosed with dengue and after 2 months my hair started falling in bunches and my acne got worse — my confidence was at its lowest. I flew to Delhi from Jodhpur and went to this clinic. He sincerely listened to my problems and prescribed medicine that gave wonderful results — in a month my hairfall reduced by half and my skin got repaired too. Wonderful experience!",
  },
  {
    id: "jyoti",
    name: "Mrs. Jyoti",
    role: "Homemaker",
    rating: 5,
    avatar: "/assets/testimonials/jyoti.jpg",
    quote:
      "I had a wonderful experience with Dr. Gaurav Nakra. Back in 2020 I had severe skin rashes which eventually turned into severely pigmented skin — the urge to scratch it was unbearable. I contacted Dr. Nakra online and with his treatment, 75% of the problem was resolved in just 15 days. A great dermatologist to consult both offline and online.",
  },
  {
    id: "arti",
    name: "Mrs. Arti Singh",
    role: "Homemaker",
    rating: 5,
    avatar: "/assets/testimonials/arti-singh.jpg",
    quote:
      "I have been visiting Dr. Gaurav Nakra for more than two years with different issues, all of which were resolved within no time. His hairfall treatment was immensely effective and helped me regain my hair volume back. I also took treatment for skin pigmentation which worked miraculously in a very short span of time.",
  },
];

const rotations = [-6, 4, -3];

export default function TestimonialFloatCluster() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];
    if (!cards.length) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isDesktop = window.innerWidth >= 768;

    if (window.gsap && isDesktop) {
      const gsap = window.gsap;

      // Single-shot Entrance animation
      gsap.fromTo(
        cards,
        { opacity: 0, y: 30, rotate: 0 },
        {
          opacity: 1,
          y: 0,
          rotate: (i: number) => rotations[i],
          duration: 0.6,
          ease: 'power2.out',
          stagger: 0.12,
          delay: 0.2,
          onComplete: () => {
            if (!reduceMotion) {
              cards.forEach((card, i) => {
                card.classList.add(`animate-gpu-float-${i + 1}`);
              });
            }
          }
        }
      );
    }
  }, []);

  return (
    <div
      ref={containerRef}
      aria-label="Patient testimonials"
      className="relative w-full h-full min-h-[450px] md:min-h-[480px] lg:min-h-[500px] p-2 sm:p-4 flex flex-col justify-center select-none transform-gpu translate-z-0"
    >
      {/* Floating Testimonial Cards Layer */}
      {/* Desktop / Tablet absolute cluster layout */}
      <div className="hidden md:block relative w-full h-[400px] z-20 my-auto">
        {testimonials.map((t, i) => {
          const desktopPositions = [
            { top: '2%', right: '2%' },
            { top: '34%', left: '2%' },
            { bottom: '2%', right: '2%' },
          ];
          const initialTransform = `rotate(${rotations[i]}deg)`;

          return (
            <div
              key={t.id}
              ref={(el) => { cardRefs.current[i] = el; }}
              style={{
                ...desktopPositions[i],
                position: 'absolute',
                transform: initialTransform,
              }}
              className="w-[270px] lg:w-[290px] bg-white rounded-2xl shadow-xl p-4.5 border border-gray-200/80 transition-transform duration-300 hover:!rotate-0 hover:-translate-y-2 hover:shadow-2xl hover:z-40 cursor-default group transform-gpu will-change-transform"
            >
              {/* Decorative quotation mark */}
              <div className="absolute top-2 right-4 text-5xl font-serif text-[#1E64EC]/10 pointer-events-none select-none">
                &ldquo;
              </div>

              {/* Card Header: Avatar & Meta */}
              <div className="flex items-center gap-3 mb-2 relative z-10">
                <Avatar name={t.name} src={t.avatar} />
                <div className="text-left">
                  <p className="text-sm font-serif font-black text-[#121316] leading-tight">
                    {t.name}
                  </p>
                  <p className="text-[11px] font-sans text-gray-500 font-semibold mt-0.5">
                    {t.role}
                  </p>
                </div>
              </div>

              {/* 5-Star Rating */}
              <Stars count={t.rating} />

              {/* Quote Block */}
              <blockquote className="text-xs text-gray-700 leading-relaxed font-sans font-medium line-clamp-4 mt-2 text-left">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
            </div>
          );
        })}
      </div>

      {/* Mobile Horizontal Snap Carousel (<768px) */}
      <div className="md:hidden relative z-20 my-6 -mx-2 px-2 overflow-x-auto snap-x snap-mandatory flex gap-3 pb-2 custom-scrollbar">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="w-[85vw] max-w-[280px] shrink-0 snap-center bg-white rounded-2xl shadow-xl p-4 border border-gray-200/80 text-left relative"
          >
            <div className="absolute top-2 right-3 text-4xl font-serif text-[#1E64EC]/10 pointer-events-none">
              &ldquo;
            </div>
            <div className="flex items-center gap-3 mb-2">
              <Avatar name={t.name} src={t.avatar} />
              <div>
                <p className="text-sm font-serif font-black text-[#121316] leading-tight">
                  {t.name}
                </p>
                <p className="text-[10px] font-sans text-gray-500 font-semibold">{t.role}</p>
              </div>
            </div>
            <Stars count={t.rating} />
            <blockquote className="text-xs text-gray-700 leading-relaxed font-sans font-medium line-clamp-4 mt-2">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
          </div>
        ))}
      </div>

      {/* Bottom Trust Strip */}
      <div className="relative z-20 pt-3 flex items-center justify-between text-[#121316] text-xs font-sans font-bold bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/60 shadow-sm">
        <span className="flex items-center gap-1.5 text-[#121316]">
          <GoogleIcon /> 4.5★ &bull; 508+ Google Reviews
        </span>
        <a 
          href="#reviews" 
          className="underline underline-offset-4 text-[#1E64EC] hover:text-[#154ec2] transition-colors"
        >
          See all reviews &rarr;
        </a>
      </div>
    </div>
  );
}

function Avatar({ name, src }: { name: string; src: string }) {
  const initials = name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return src ? (
    <img
      src={src}
      alt={`Photo of ${name}`}
      className="w-11 h-11 rounded-full object-cover border-2 border-[#1E64EC]/20 shadow-sm shrink-0"
      loading="lazy"
      onError={(e) => {
        (e.currentTarget as HTMLElement).style.display = 'none';
      }}
    />
  ) : (
    <div 
      aria-hidden="true" 
      className="w-11 h-11 rounded-full bg-[#1E64EC] text-white flex items-center justify-center text-xs font-serif font-bold shadow-sm shrink-0"
    >
      {initials}
    </div>
  );
}

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-3.5 h-3.5 ${
            i < count ? 'text-[#FBBF24]' : 'text-gray-200'
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 15l-5.878 3.09L5.64 11.545.763 7.41l6.09-.885L10 1l3.146 5.525 6.09.885-4.876 4.135 1.518 6.545z" />
        </svg>
      ))}
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24">
      <path
        fill="#4285F4"
        d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12s3.36-7.27 7.19-7.27c3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.19 2C6.42 2 2.03 6.8 2.03 12s4.39 10 10.16 10c5.52 0 9.48-3.9 9.48-9.62 0-.9-.13-1.63-.32-2.28z"
      />
    </svg>
  );
}
