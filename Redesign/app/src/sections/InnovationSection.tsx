import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface InnovationSectionProps {
  className?: string;
}

const features = [
  'Real-time behavioral analysis and health detection',
  '24/7 automated observation without human intervention',
  'Digital twin technology for predictive hatchery models',
];

export default function InnovationSection({ className = '' }: InnovationSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLSpanElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const featuresRef = useRef<HTMLUListElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);

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
        { x: '10vw', scale: 1.06, opacity: 0.8 },
        { x: 0, scale: 1, opacity: 1, ease: 'none' },
        0
      );

      scrollTl.fromTo(
        eyebrowRef.current,
        { x: '-45vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'none' },
        0
      );

      scrollTl.fromTo(
        headlineRef.current,
        { x: '-45vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'none' },
        0.03
      );

      scrollTl.fromTo(
        subheadlineRef.current,
        { x: '-45vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'none' },
        0.06
      );

      const featureItems = featuresRef.current?.querySelectorAll('li');
      if (featureItems) {
        featureItems.forEach((item, i) => {
          scrollTl.fromTo(
            item,
            { x: '-6vw', opacity: 0 },
            { x: 0, opacity: 1, ease: 'none' },
            0.1 + i * 0.04
          );
        });
      }

      scrollTl.fromTo(
        ctaRef.current,
        { y: '4vh', scale: 0.98, opacity: 0 },
        { y: 0, scale: 1, opacity: 1, ease: 'none' },
        0.2
      );

      // SETTLE (30-70%): Hold

      // EXIT (70-100%)
      scrollTl.fromTo(
        [eyebrowRef.current, headlineRef.current, subheadlineRef.current, featuresRef.current, ctaRef.current],
        { x: 0, opacity: 1 },
        { x: '-14vw', opacity: 0, ease: 'power2.in', stagger: 0.02 },
        0.7
      );

      scrollTl.fromTo(
        bgRef.current,
        { x: 0, scale: 1 },
        { x: '-8vw', scale: 1.05, ease: 'none' },
        0.7
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="innovation"
      className={`section-pinned ${className}`}
    >
      {/* Background Image */}
      <div ref={bgRef} className="absolute inset-0 z-[1]">
        <img
          src="/innovation_shrimp.jpg"
          alt="Innovation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 card-gradient" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center px-6 lg:px-[7vw]">
        <div className="max-w-xl">
          <span
            ref={eyebrowRef}
            className="font-mono text-xs text-aqua uppercase tracking-[0.2em] mb-4 block"
            style={{ opacity: 0 }}
          >
            Innovation
          </span>

          <h2
            ref={headlineRef}
            className="font-heading font-bold text-white mb-2"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              opacity: 0,
            }}
          >
            AI-Powered <span className="text-aqua">Innovation</span>
          </h2>

          <p
            ref={subheadlineRef}
            className="font-heading text-slate-blue text-lg lg:text-xl mb-8"
            style={{ opacity: 0 }}
          >
            The Future of Aquaculture Monitoring
          </p>

          <ul ref={featuresRef} className="space-y-4 mb-8">
            {features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3"
                style={{ opacity: 0 }}
              >
                <div className="w-5 h-5 rounded-full bg-aqua/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-aqua" />
                </div>
                <span className="text-white text-sm lg:text-base">{feature}</span>
              </li>
            ))}
          </ul>

          <button
            ref={ctaRef}
            className="btn-accent flex items-center gap-2"
            style={{ opacity: 0 }}
          >
            See Our Research
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
