import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface MissionSectionProps {
  className?: string;
}

export default function MissionSection({ className = '' }: MissionSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const watermarkRef = useRef<HTMLDivElement>(null);

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
        },
      });

      // ENTRANCE (0-30%)
      scrollTl.fromTo(
        labelRef.current,
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, ease: 'none' },
        0
      );

      scrollTl.fromTo(
        headlineRef.current,
        { y: '18vh', opacity: 0 },
        { y: 0, opacity: 1, ease: 'none' },
        0
      );

      scrollTl.fromTo(
        watermarkRef.current,
        { scale: 0.96, opacity: 0 },
        { scale: 1, opacity: 0.06, ease: 'none' },
        0
      );

      // SETTLE (30-70%): Hold

      // EXIT (70-100%)
      scrollTl.fromTo(
        labelRef.current,
        { y: 0, opacity: 1 },
        { y: -10, opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        headlineRef.current,
        { y: 0, opacity: 1 },
        { y: '-16vh', opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        watermarkRef.current,
        { opacity: 0.06 },
        { opacity: 0, ease: 'power2.in' },
        0.7
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="mission"
      className={`section-pinned bg-navy ${className}`}
    >
      {/* Watermark */}
      <div
        ref={watermarkRef}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        style={{ opacity: 0 }}
      >
        <span
          className="font-heading font-bold text-white"
          style={{
            fontSize: 'clamp(15rem, 35vw, 30rem)',
            lineHeight: 1,
          }}
        >
          AQUA
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6">
        <span
          ref={labelRef}
          className="font-mono text-xs text-aqua uppercase tracking-[0.2em] mb-6"
          style={{ opacity: 0 }}
        >
          Our Mission
        </span>

        <h2
          ref={headlineRef}
          className="font-heading font-semibold text-white text-center max-w-[920px]"
          style={{
            fontSize: 'clamp(1.5rem, 3.5vw, 2.75rem)',
            lineHeight: 1.3,
            opacity: 0,
          }}
        >
          We are Ukraine's first Vannamei Shrimp Hatchery — combining{' '}
          <span className="text-aqua">biology</span>,{' '}
          <span className="text-aqua">data</span>, and{' '}
          <span className="text-aqua">responsibility</span> to build resilient
          aquaculture systems.
        </h2>
      </div>
    </section>
  );
}
