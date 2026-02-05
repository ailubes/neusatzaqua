import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ImpactSectionProps {
  className?: string;
}

const stats = [
  { value: '15%', label: 'Productivity Increase', description: 'Through AI-powered monitoring' },
  { value: '24/7', label: 'Observation', description: 'Continuous monitoring reducing stress' },
  { value: '100%', label: 'Transparency', description: 'Complete data for traceability' },
];

export default function ImpactSection({ className = '' }: ImpactSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<(HTMLDivElement | null)[]>([]);

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
        bgRef.current,
        { scale: 1.08, y: '8vh' },
        { scale: 1, y: 0, ease: 'none' },
        0
      );

      scrollTl.fromTo(
        panelRef.current,
        { x: '-50vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'none' },
        0
      );

      statsRef.current.forEach((stat, i) => {
        if (!stat) return;
        scrollTl.fromTo(
          stat,
          { y: '6vh', opacity: 0 },
          { y: 0, opacity: 1, ease: 'none' },
          0.08 + i * 0.05
        );
      });

      // SETTLE (30-70%): Hold

      // EXIT (70-100%)
      scrollTl.fromTo(
        panelRef.current,
        { x: 0, opacity: 1 },
        { x: '-18vw', opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        bgRef.current,
        { scale: 1, y: 0 },
        { scale: 1.05, y: '-6vh', ease: 'none' },
        0.7
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="impact"
      className={`section-pinned ${className}`}
    >
      {/* Background Image */}
      <div ref={bgRef} className="absolute inset-0 z-[1]">
        <img
          src="/impact_shrimp.jpg"
          alt="Shrimp close-up"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 card-gradient" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center px-6 lg:px-[7vw]">
        {/* Stats Panel */}
        <div
          ref={panelRef}
          className="glass-panel p-8 lg:p-12 max-w-md lg:max-w-lg"
          style={{ opacity: 0 }}
        >
          <h2
            className="font-heading font-bold text-white mb-4"
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
          >
            Measurable <span className="text-aqua">Impact</span>
          </h2>

          <p className="text-slate-blue text-sm lg:text-base mb-8 leading-relaxed">
            Data-driven results that demonstrate our commitment to innovation and sustainability.
          </p>

          <div className="space-y-6">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                ref={(el) => { statsRef.current[i] = el; }}
                className="flex items-start gap-4"
                style={{ opacity: 0 }}
              >
                <span className="font-heading font-bold text-aqua text-3xl lg:text-4xl flex-shrink-0 min-w-[80px]">
                  {stat.value}
                </span>
                <div>
                  <h4 className="font-heading font-medium text-white text-lg">
                    {stat.label}
                  </h4>
                  <p className="text-slate-blue text-sm">
                    {stat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
