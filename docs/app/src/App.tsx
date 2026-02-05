import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from './sections/Navigation';
import HeroSection from './sections/HeroSection';
import MissionSection from './sections/MissionSection';
import ValuesSection from './sections/ValuesSection';
import ImpactSection from './sections/ImpactSection';
import InnovationSection from './sections/InnovationSection';
import SustainabilitySection from './sections/SustainabilitySection';
import PartnershipsSection from './sections/PartnershipsSection';
import UpdatesSection from './sections/UpdatesSection';
import FooterSection from './sections/FooterSection';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Wait for all sections to mount and create their ScrollTriggers
    const timer = setTimeout(() => {
      const pinned = ScrollTrigger.getAll()
        .filter(st => st.vars.pin)
        .sort((a, b) => a.start - b.start);
      
      const maxScroll = ScrollTrigger.maxScroll(window);
      if (!maxScroll || pinned.length === 0) return;

      const pinnedRanges = pinned.map(st => ({
        start: st.start / maxScroll,
        end: (st.end ?? st.start) / maxScroll,
        center: (st.start + ((st.end ?? st.start) - st.start) * 0.5) / maxScroll,
      }));

      ScrollTrigger.create({
        snap: {
          snapTo: (value: number) => {
            const inPinned = pinnedRanges.some(r => value >= r.start - 0.02 && value <= r.end + 0.02);
            if (!inPinned) return value;

            const target = pinnedRanges.reduce((closest, r) =>
              Math.abs(r.center - value) < Math.abs(closest - value) ? r.center : closest,
              pinnedRanges[0]?.center ?? 0
            );
            return target;
          },
          duration: { min: 0.15, max: 0.35 },
          delay: 0,
          ease: "power2.out"
        }
      });
    }, 500);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <div ref={mainRef} className="relative">
      <Navigation />
      <main className="relative">
        <HeroSection className="z-10" />
        <MissionSection className="z-20" />
        <ValuesSection className="z-30" />
        <ImpactSection className="z-40" />
        <InnovationSection className="z-50" />
        <SustainabilitySection className="z-[60]" />
        <PartnershipsSection className="z-[70]" />
        <UpdatesSection className="z-[80]" />
        <FooterSection className="z-[90]" />
      </main>
    </div>
  );
}

export default App;
