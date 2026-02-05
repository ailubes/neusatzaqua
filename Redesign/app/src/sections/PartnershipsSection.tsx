import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Users, FlaskConical, HeartHandshake, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface PartnershipsSectionProps {
  className?: string;
}

const partnerships = [
  {
    icon: Users,
    title: 'For Customers',
    description: 'Partner with us for sustainable shrimp production.',
    cta: 'Partner with Us',
    href: '#contact',
  },
  {
    icon: FlaskConical,
    title: 'For Researchers',
    description: 'Collaborate on AI and aquaculture innovation.',
    cta: 'Explore Research',
    href: '#innovation',
  },
  {
    icon: HeartHandshake,
    title: 'For Community',
    description: 'See our commitment to equality and inclusion.',
    cta: 'View Our GEP',
    href: '#sustainability',
  },
];

export default function PartnershipsSection({ className = '' }: PartnershipsSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Header reveal
      gsap.fromTo(
        headerRef.current,
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 80%',
            end: 'top 55%',
            scrub: 0.5,
          },
        }
      );

      // Cards stagger reveal
      cardsRef.current.forEach((card) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              end: 'top 60%',
              scrub: 0.5,
            },
          }
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="partnerships"
      className={`relative bg-navy py-20 lg:py-32 ${className}`}
    >
      <div className="px-6 lg:px-[7vw] max-w-7xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-12 lg:mb-16" style={{ opacity: 0 }}>
          <h2
            className="font-heading font-bold text-white mb-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            Partner <span className="text-aqua">With Us</span>
          </h2>
          <p className="text-slate-blue max-w-2xl mx-auto">
            Explore how we can collaborate to advance sustainable aquaculture.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {partnerships.map((partnership, i) => (
            <div
              key={partnership.title}
              ref={(el) => { cardsRef.current[i] = el; }}
              className="glass-card p-6 lg:p-8 transition-all duration-300 hover:border-aqua/50 hover:-translate-y-1.5 group cursor-pointer"
              style={{ opacity: 0 }}
            >
              {/* Accent line */}
              <div className="h-0.5 w-12 bg-aqua/70 mb-6 rounded-full" />

              <div className="w-12 h-12 rounded-xl bg-aqua/20 flex items-center justify-center mb-6">
                <partnership.icon className="w-6 h-6 text-aqua" />
              </div>

              <h3 className="font-heading font-semibold text-white text-xl mb-3">
                {partnership.title}
              </h3>

              <p className="text-slate-blue text-sm leading-relaxed mb-6">
                {partnership.description}
              </p>

              <a
                href={partnership.href}
                className="inline-flex items-center gap-2 text-aqua text-sm font-medium group-hover:gap-3 transition-all"
              >
                {partnership.cta}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
