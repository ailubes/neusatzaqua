import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Heart, Recycle, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface SustainabilitySectionProps {
  className?: string;
}

const pillars = [
  {
    icon: Heart,
    title: 'Animal Welfare',
    description: '24/7 behavioral monitoring, optimal conditions, and stress-reduction protocols.',
  },
  {
    icon: Recycle,
    title: 'Circular Economy',
    description: 'Water recirculation, waste-to-resource conversion, and energy efficiency.',
  },
  {
    icon: Users,
    title: 'Local Employment',
    description: 'Fair wages, technical training, and community prosperity in Mykolaiv region.',
  },
];

export default function SustainabilitySection({ className = '' }: SustainabilitySectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

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
        { scale: 1.08, y: '10vh' },
        { scale: 1, y: 0, ease: 'none' },
        0
      );

      scrollTl.fromTo(
        titleRef.current,
        { y: '-10vh', opacity: 0 },
        { y: 0, opacity: 1, ease: 'none' },
        0
      );

      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        scrollTl.fromTo(
          card,
          { y: '60vh', opacity: 0 },
          { y: 0, opacity: 1, ease: 'none' },
          0.06 + i * 0.05
        );
      });

      // SETTLE (30-70%): Hold

      // EXIT (70-100%)
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        scrollTl.fromTo(
          card,
          { y: 0, opacity: 1 },
          { y: '18vh', opacity: 0, ease: 'power2.in' },
          0.7 + i * 0.02
        );
      });

      scrollTl.fromTo(
        titleRef.current,
        { opacity: 1 },
        { opacity: 0, ease: 'power2.in' },
        0.75
      );

      scrollTl.fromTo(
        bgRef.current,
        { scale: 1 },
        { scale: 1.05, ease: 'none' },
        0.7
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="sustainability"
      className={`section-pinned ${className}`}
    >
      {/* Background Image */}
      <div ref={bgRef} className="absolute inset-0 z-[1]">
        <img
          src="/sustainability_shrimp.jpg"
          alt="Sustainability"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 card-gradient" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col px-6 lg:px-[7vw]">
        {/* Title */}
        <div
          ref={titleRef}
          className="text-center mt-[12vh]"
          style={{ opacity: 0 }}
        >
          <h2
            className="font-heading font-bold text-white mb-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            Our Sustainability <span className="text-aqua">Commitment</span>
          </h2>
          <p className="text-slate-blue max-w-2xl mx-auto">
            Building a responsible aquaculture future through three interconnected pillars.
          </p>
        </div>

        {/* Cards */}
        <div className="flex-1 flex items-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto w-full">
            {pillars.map((pillar, i) => (
              <div
                key={pillar.title}
                ref={(el) => { cardsRef.current[i] = el; }}
                className="glass-card p-6 lg:p-8 transition-all duration-300 hover:border-aqua/50 hover:-translate-y-1"
                style={{ opacity: 0 }}
              >
                <div className="w-14 h-14 rounded-xl bg-aqua/20 flex items-center justify-center mb-6">
                  <pillar.icon className="w-7 h-7 text-aqua" />
                </div>
                <h3 className="font-heading font-semibold text-white text-xl mb-3">
                  {pillar.title}
                </h3>
                <p className="text-slate-blue text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
