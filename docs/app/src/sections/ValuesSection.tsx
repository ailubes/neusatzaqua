import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Leaf, Cpu, Award, Heart } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface ValuesSectionProps {
  className?: string;
}

const values = [
  {
    icon: Leaf,
    title: 'Sustainability',
    description: 'Environmentally responsible practices that protect ecosystems.',
  },
  {
    icon: Cpu,
    title: 'Innovation',
    description: 'Leveraging AI and data analytics to revolutionize shrimp breeding.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Highest standards in biosecurity, genetics, and postlarvae quality.',
  },
  {
    icon: Heart,
    title: 'Responsibility',
    description: 'Resilient systems with transparency, animal welfare, and community in mind.',
  },
];

export default function ValuesSection({ className = '' }: ValuesSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
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
        titleRef.current,
        { y: '-6vh', opacity: 0 },
        { y: 0, opacity: 1, ease: 'none' },
        0
      );

      // Cards staggered entrance
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        const isLeft = i % 2 === 0;
        const fromX = isLeft ? '-40vw' : '40vw';
        const fromY = i >= 2 ? '10vh' : 0;

        scrollTl.fromTo(
          card,
          { x: fromX, y: fromY, opacity: 0 },
          { x: 0, y: 0, opacity: 1, ease: 'none' },
          0.05 + i * 0.04
        );
      });

      // SETTLE (30-70%): Hold

      // EXIT (70-100%)
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        const isLeft = i % 2 === 0;
        const toX = isLeft ? '-18vw' : '18vw';

        scrollTl.fromTo(
          card,
          { x: 0, opacity: 1 },
          { x: toX, opacity: 0, ease: 'power2.in' },
          0.7 + i * 0.02
        );
      });

      scrollTl.fromTo(
        titleRef.current,
        { opacity: 1 },
        { opacity: 0, ease: 'power2.in' },
        0.75
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="values"
      className={`section-pinned bg-navy ${className}`}
    >
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col px-6 lg:px-[10vw]">
        {/* Title */}
        <h2
          ref={titleRef}
          className="font-heading font-bold text-white text-center mt-[10vh]"
          style={{
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            opacity: 0,
          }}
        >
          Core <span className="text-aqua">Values</span>
        </h2>

        {/* Cards Grid */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-center max-w-6xl mx-auto w-full py-8">
          {values.map((value, i) => (
            <div
              key={value.title}
              ref={(el) => { cardsRef.current[i] = el; }}
              className={`glass-card p-6 lg:p-8 transition-all duration-300 hover:border-aqua/50 hover:-translate-y-1 ${
                i === 1 ? 'md:-translate-y-6' : i === 3 ? 'md:-translate-y-6' : ''
              }`}
              style={{ opacity: 0 }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-aqua/20 flex items-center justify-center flex-shrink-0">
                  <value.icon className="w-6 h-6 text-aqua" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-white text-xl mb-2">
                    {value.title}
                  </h3>
                  <p className="text-slate-blue text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
