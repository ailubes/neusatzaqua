import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Building2, Microscope, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface UpdatesSectionProps {
  className?: string;
}

const updates = [
  {
    icon: Building2,
    tag: 'Facility Updates',
    title: 'Hatchery Construction Milestone',
    description: 'First phase of construction completed for Ukraine\'s first Vannamei shrimp hatchery.',
    date: '2024',
  },
  {
    icon: Microscope,
    tag: 'Research',
    title: 'AI System Deployment',
    description: 'Advanced computer vision systems installed for real-time behavioral monitoring.',
    date: '2024',
  },
  {
    icon: Users,
    tag: 'Community',
    title: 'Community Partnership Launch',
    description: 'New training programs create local employment opportunities in Mykolaiv region.',
    date: '2024',
  },
];

export default function UpdatesSection({ className = '' }: UpdatesSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const ctaRef = useRef<HTMLButtonElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Header reveal
      gsap.fromTo(
        headerRef.current,
        { y: 20, opacity: 0 },
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
          { y: 30, opacity: 0 },
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

      // CTA reveal
      gsap.fromTo(
        ctaRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          scrollTrigger: {
            trigger: ctaRef.current,
            start: 'top 90%',
            end: 'top 70%',
            scrub: 0.5,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="updates"
      className={`relative bg-navy py-20 lg:py-32 ${className}`}
    >
      <div className="px-6 lg:px-[7vw] max-w-7xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="mb-12 lg:mb-16" style={{ opacity: 0 }}>
          <h2
            className="font-heading font-bold text-white mb-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            Latest <span className="text-aqua">Updates</span>
          </h2>
          <p className="text-slate-blue max-w-2xl">
            Stay informed about our progress, innovations, and community initiatives.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-10">
          {updates.map((update, i) => (
            <div
              key={update.title}
              ref={(el) => { cardsRef.current[i] = el; }}
              className="glass-card p-6 lg:p-8 transition-all duration-300 hover:border-aqua/50 hover:-translate-y-1.5 group cursor-pointer"
              style={{ opacity: 0 }}
            >
              {/* Tag */}
              <div className="flex items-center gap-2 mb-4">
                <update.icon className="w-4 h-4 text-aqua" />
                <span className="font-mono text-xs text-aqua uppercase tracking-wider">
                  {update.tag}
                </span>
              </div>

              <h3 className="font-heading font-semibold text-white text-lg mb-2 group-hover:text-aqua transition-colors">
                {update.title}
              </h3>

              <p className="text-slate-blue text-sm leading-relaxed mb-4">
                {update.description}
              </p>

              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-slate-blue/70">
                  {update.date}
                </span>
                <ArrowRight className="w-4 h-4 text-aqua opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            ref={ctaRef}
            className="btn-outline"
            style={{ opacity: 0 }}
          >
            View All Updates
          </button>
        </div>
      </div>
    </section>
  );
}
