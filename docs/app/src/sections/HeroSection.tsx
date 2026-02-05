import { useEffect, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface HeroSectionProps {
  className?: string;
}

export default function HeroSection({ className = '' }: HeroSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollHintRef = useRef<HTMLDivElement>(null);

  // Auto-play entrance animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      // Background entrance
      tl.fromTo(
        bgRef.current,
        { scale: 1.08, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.2 },
        0
      );

      // Headline words entrance
      const words = headlineRef.current?.querySelectorAll('.word');
      if (words) {
        tl.fromTo(
          words,
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.04 },
          0.3
        );
      }

      // Subheadline
      tl.fromTo(
        subheadlineRef.current,
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        0.6
      );

      // CTAs
      const buttons = ctaRef.current?.querySelectorAll('button');
      if (buttons) {
        tl.fromTo(
          buttons,
          { y: 18, scale: 0.98, opacity: 0 },
          { y: 0, scale: 1, opacity: 1, duration: 0.5, stagger: 0.08 },
          0.75
        );
      }

      // Scroll hint
      tl.fromTo(
        scrollHintRef.current,
        { opacity: 0, y: 10 },
        { opacity: 0.7, y: 0, duration: 0.5 },
        1
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Scroll-driven exit animation
  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
          onLeaveBack: () => {
            // Reset elements to visible when scrolling back to top
            gsap.set([headlineRef.current, subheadlineRef.current, ctaRef.current], {
              opacity: 1,
              y: 0,
            });
            gsap.set(bgRef.current, { scale: 1, y: 0 });
          },
        },
      });

      // ENTRANCE (0-30%): Hold - elements already visible from load animation
      // SETTLE (30-70%): Hold

      // EXIT (70-100%)
      scrollTl.fromTo(
        headlineRef.current,
        { y: 0, opacity: 1 },
        { y: '-22vh', opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        subheadlineRef.current,
        { y: 0, opacity: 1 },
        { y: '-18vh', opacity: 0, ease: 'power2.in' },
        0.72
      );

      scrollTl.fromTo(
        ctaRef.current,
        { y: 0, opacity: 1 },
        { y: '-10vh', opacity: 0, ease: 'power2.in' },
        0.74
      );

      scrollTl.fromTo(
        scrollHintRef.current,
        { opacity: 0.7 },
        { opacity: 0 },
        0.7
      );

      scrollTl.fromTo(
        bgRef.current,
        { scale: 1, y: 0 },
        { scale: 1.06, y: '-6vh', ease: 'none' },
        0.7
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const headlineWords = 'Sustainably Breeding the Future of Shrimp Aquaculture'.split(' ');

  return (
    <section
      ref={sectionRef}
      id="hero"
      className={`section-pinned ${className}`}
    >
      {/* Background Image */}
      <div
        ref={bgRef}
        className="absolute inset-0 z-[1]"
        style={{ opacity: 0 }}
      >
        <img
          src="/hero_underwater.jpg"
          alt="Underwater scene"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6">
        {/* Headline */}
        <h1
          ref={headlineRef}
          className="font-heading font-bold text-white text-center max-w-[1100px]"
          style={{
            fontSize: 'clamp(2rem, 6vw, 5rem)',
            lineHeight: 1.1,
          }}
        >
          {headlineWords.map((word, i) => (
            <span key={i} className="word inline-block mr-[0.3em]">
              {word === 'Future' || word === 'Aquaculture' ? (
                <span className="text-aqua">{word}</span>
              ) : (
                word
              )}
            </span>
          ))}
        </h1>

        {/* Subheadline */}
        <p
          ref={subheadlineRef}
          className="mt-6 text-slate-blue text-center max-w-2xl"
          style={{ fontSize: 'clamp(1rem, 1.5vw, 1.25rem)' }}
        >
          From the Black Sea to the world — Ukraine's first Vannamei Shrimp Hatchery.
        </p>

        {/* CTAs */}
        <div ref={ctaRef} className="mt-10 flex flex-wrap justify-center gap-4">
          <button className="btn-primary flex items-center gap-2">
            Learn More
            <ChevronDown className="w-4 h-4" />
          </button>
          <button className="btn-outline">Contact Us</button>
          <button className="btn-accent">Our Projects</button>
        </div>
      </div>

      {/* Scroll Hint */}
      <div
        ref={scrollHintRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        style={{ opacity: 0 }}
      >
        <span className="font-mono text-xs text-slate-blue uppercase tracking-widest">
          Scroll
        </span>
        <ChevronDown className="w-5 h-5 text-aqua animation-pulse-slow" />
      </div>
    </section>
  );
}
