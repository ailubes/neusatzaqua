'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import {
  FaLeaf,
  FaLightbulb,
  FaAward,
  FaHeart,
  FaCheck,
  FaArrowRight,
  FaFlask,
  FaIndustry,
  FaUsers,
  FaCalendar,
  FaTag,
  FaMicrochip,
  FaChevronDown,
} from 'react-icons/fa';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const t = useTranslations('home');

  // Section refs
  const heroRef = useRef<HTMLElement>(null);
  const missionRef = useRef<HTMLElement>(null);
  const valuesRef = useRef<HTMLElement>(null);
  const impactRef = useRef<HTMLElement>(null);
  const innovationRef = useRef<HTMLElement>(null);
  const sustainabilityRef = useRef<HTMLElement>(null);
  const partnershipsRef = useRef<HTMLElement>(null);
  const updatesRef = useRef<HTMLElement>(null);

  // Hero refs
  const heroBgRef = useRef<HTMLDivElement>(null);
  const heroHeadlineRef = useRef<HTMLHeadingElement>(null);
  const heroSubheadlineRef = useRef<HTMLParagraphElement>(null);
  const heroCTAsRef = useRef<HTMLDivElement>(null);
  const heroScrollHintRef = useRef<HTMLDivElement>(null);

  // Mission refs
  const missionLabelRef = useRef<HTMLSpanElement>(null);
  const missionHeadlineRef = useRef<HTMLHeadingElement>(null);
  const missionWatermarkRef = useRef<HTMLSpanElement>(null);

  // Values refs
  const valuesTitleRef = useRef<HTMLDivElement>(null);
  const valuesCardsRef = useRef<HTMLDivElement>(null);

  // Impact refs
  const impactBgRef = useRef<HTMLDivElement>(null);
  const impactPanelRef = useRef<HTMLDivElement>(null);
  const impactStatsRef = useRef<HTMLDivElement>(null);

  // Innovation refs
  const innovationBgRef = useRef<HTMLDivElement>(null);
  const innovationContentRef = useRef<HTMLDivElement>(null);

  // Sustainability refs
  const sustainabilityBgRef = useRef<HTMLDivElement>(null);
  const sustainabilityTitleRef = useRef<HTMLDivElement>(null);
  const sustainabilityCardsRef = useRef<HTMLDivElement>(null);

  // Partnerships refs
  const partnershipsHeaderRef = useRef<HTMLDivElement>(null);
  const partnershipsCardsRef = useRef<HTMLDivElement>(null);

  // Updates refs
  const updatesHeaderRef = useRef<HTMLDivElement>(null);
  const updatesCardsRef = useRef<HTMLDivElement>(null);

  // Get title words from translations
  const titleWords = t.raw('hero.titleWords') as string[];
  const highlightIndices = [3, 6];

  // Values data
  const values = [
    {
      icon: <FaLeaf className="w-8 h-8" />,
      title: t('values.sustainability.title'),
      description: t('values.sustainability.description'),
    },
    {
      icon: <FaMicrochip className="w-8 h-8" />,
      title: t('values.innovation.title'),
      description: t('values.innovation.description'),
    },
    {
      icon: <FaAward className="w-8 h-8" />,
      title: t('values.excellence.title'),
      description: t('values.excellence.description'),
    },
    {
      icon: <FaHeart className="w-8 h-8" />,
      title: t('values.responsibility.title'),
      description: t('values.responsibility.description'),
    },
  ];

  // Impact stats
  const impactStats = [
    {
      value: '15%',
      label: t('impact.productivity.label'),
      description: t('impact.productivity.description'),
    },
    {
      value: '24/7',
      label: t('impact.observation.label'),
      description: t('impact.observation.description'),
    },
    {
      value: '100%',
      label: t('impact.transparency.label'),
      description: t('impact.transparency.description'),
    },
  ];

  // Innovation features
  const innovationFeatures = [
    t('innovation.feature1'),
    t('innovation.feature2'),
    t('innovation.feature3'),
    t('innovation.feature4'),
  ];

  // Sustainability pillars
  const sustainabilityPillars = [
    {
      title: t('sustainability.environmental.title'),
      description: t('sustainability.environmental.description'),
    },
    {
      title: t('sustainability.social.title'),
      description: t('sustainability.social.description'),
    },
    {
      title: t('sustainability.economic.title'),
      description: t('sustainability.economic.description'),
    },
  ];

  // Partnerships
  const partnerships = [
    {
      icon: <FaFlask className="w-10 h-10" />,
      title: t('partnerships.research.title'),
      description: t('partnerships.research.description'),
    },
    {
      icon: <FaIndustry className="w-10 h-10" />,
      title: t('partnerships.industry.title'),
      description: t('partnerships.industry.description'),
    },
    {
      icon: <FaUsers className="w-10 h-10" />,
      title: t('partnerships.community.title'),
      description: t('partnerships.community.description'),
    },
  ];

  // News items
  const newsItems = [
    {
      title: t('news.items.construction.title'),
      date: t('news.items.construction.date'),
      excerpt: t('news.items.construction.excerpt'),
      category: t('news.categories.facility'),
    },
    {
      title: t('news.items.ai.title'),
      date: t('news.items.ai.date'),
      excerpt: t('news.items.ai.excerpt'),
      category: t('news.categories.research'),
    },
    {
      title: t('news.items.community.title'),
      date: t('news.items.community.date'),
      excerpt: t('news.items.community.excerpt'),
      category: t('news.categories.community'),
    },
  ];

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add('(min-width: 1024px)', () => {
      // --- Hero Entrance: plays immediately on page load (no ScrollTrigger) ---
      const heroEntranceTl = gsap.timeline();

      heroEntranceTl.fromTo(
        heroBgRef.current,
        { scale: 1.08, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8, ease: 'power2.out' },
        0
      );

      heroEntranceTl.fromTo(
        heroHeadlineRef.current?.children || [],
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.06, duration: 0.6, ease: 'power2.out' },
        0.2
      );

      heroEntranceTl.fromTo(
        heroSubheadlineRef.current,
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' },
        0.4
      );

      heroEntranceTl.fromTo(
        heroCTAsRef.current?.children || [],
        { y: 18, scale: 0.98, opacity: 0 },
        { y: 0, scale: 1, opacity: 1, stagger: 0.08, duration: 0.5, ease: 'power2.out' },
        0.55
      );

      heroEntranceTl.fromTo(
        heroScrollHintRef.current,
        { opacity: 0 },
        { opacity: 0.7, duration: 0.4, ease: 'power2.out' },
        0.75
      );

      // --- Hero Exit: scroll-triggered, starts from the visible state ---
      const heroExitTl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: '+=100%',
          pin: true,
          scrub: 0.6,
        },
      });

      heroExitTl.to(
        heroHeadlineRef.current,
        { y: '-22vh', opacity: 0, duration: 0.3, ease: 'power2.in' },
        0.7
      );

      heroExitTl.to(
        heroSubheadlineRef.current,
        { y: '-18vh', opacity: 0, duration: 0.3, ease: 'power2.in' },
        0.7
      );

      heroExitTl.to(
        heroCTAsRef.current,
        { y: '-10vh', opacity: 0, duration: 0.3, ease: 'power2.in' },
        0.7
      );

      heroExitTl.to(
        heroScrollHintRef.current,
        { opacity: 0, duration: 0.2, ease: 'power2.in' },
        0.7
      );

      heroExitTl.to(
        heroBgRef.current,
        { scale: 1.06, y: '-6vh', duration: 0.3, ease: 'power2.in' },
        0.7
      );

      // Mission Section
      const missionTl = gsap.timeline({
        scrollTrigger: {
          trigger: missionRef.current,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
        },
      });

      // Entrance (0-30%)
      missionTl.fromTo(
        missionLabelRef.current,
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.3, ease: 'power2.out' },
        0
      );

      missionTl.fromTo(
        missionHeadlineRef.current,
        { y: '18vh', opacity: 0 },
        { y: 0, opacity: 1, duration: 0.3, ease: 'power2.out' },
        0
      );

      missionTl.fromTo(
        missionWatermarkRef.current,
        { scale: 0.96, opacity: 0 },
        { scale: 1, opacity: 0.06, duration: 0.3, ease: 'power2.out' },
        0
      );

      // Exit (70-100%)
      missionTl.to(missionLabelRef.current, { opacity: 0, duration: 0.3, ease: 'power2.in' }, 0.7);
      missionTl.to(
        missionHeadlineRef.current,
        { y: '-16vh', opacity: 0, duration: 0.3, ease: 'power2.in' },
        0.7
      );
      missionTl.to(
        missionWatermarkRef.current,
        { opacity: 0, duration: 0.3, ease: 'power2.in' },
        0.7
      );

      // Values Section
      const valuesTl = gsap.timeline({
        scrollTrigger: {
          trigger: valuesRef.current,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
        },
      });

      const valueCards = valuesCardsRef.current?.children || [];

      // Entrance (0-30%)
      valuesTl.fromTo(
        valuesTitleRef.current,
        { y: '-6vh', opacity: 0 },
        { y: 0, opacity: 1, duration: 0.3, ease: 'power2.out' },
        0
      );

      valuesTl.fromTo(
        valueCards,
        { x: (i) => (i % 2 === 0 ? '-40vw' : '40vw'), opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.04, duration: 0.3, ease: 'power2.out' },
        0
      );

      // Exit (70-100%)
      valuesTl.to(
        valueCards,
        { x: (i) => (i % 2 === 0 ? '-18vw' : '18vw'), opacity: 0, stagger: 0.02, duration: 0.3, ease: 'power2.in' },
        0.7
      );
      valuesTl.to(valuesTitleRef.current, { opacity: 0, duration: 0.3, ease: 'power2.in' }, 0.7);

      // Impact Section
      const impactTl = gsap.timeline({
        scrollTrigger: {
          trigger: impactRef.current,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
        },
      });

      // Entrance (0-30%)
      impactTl.fromTo(
        impactBgRef.current,
        { scale: 1.08, y: '8vh' },
        { scale: 1, y: 0, duration: 0.3, ease: 'power2.out' },
        0
      );

      impactTl.fromTo(
        impactPanelRef.current,
        { x: '-50vw', opacity: 0 },
        { x: 0, opacity: 1, duration: 0.3, ease: 'power2.out' },
        0
      );

      impactTl.fromTo(
        impactStatsRef.current?.children || [],
        { y: '6vh', opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.05, duration: 0.3, ease: 'power2.out' },
        0.1
      );

      // Exit (70-100%)
      impactTl.to(
        impactPanelRef.current,
        { x: '-18vw', opacity: 0, duration: 0.3, ease: 'power2.in' },
        0.7
      );
      impactTl.to(
        impactBgRef.current,
        { y: '-6vh', scale: 1.05, duration: 0.3, ease: 'power2.in' },
        0.7
      );

      // Innovation Section
      const innovationTl = gsap.timeline({
        scrollTrigger: {
          trigger: innovationRef.current,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
        },
      });

      // Entrance (0-30%)
      innovationTl.fromTo(
        innovationBgRef.current,
        { x: '10vw', scale: 1.06 },
        { x: 0, scale: 1, duration: 0.3, ease: 'power2.out' },
        0
      );

      innovationTl.fromTo(
        innovationContentRef.current?.children || [],
        { x: '-45vw', opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.05, duration: 0.3, ease: 'power2.out' },
        0
      );

      // Exit (70-100%)
      innovationTl.to(
        innovationContentRef.current,
        { x: '-14vw', opacity: 0, duration: 0.3, ease: 'power2.in' },
        0.7
      );
      innovationTl.to(
        innovationBgRef.current,
        { x: '-8vw', scale: 1.05, duration: 0.3, ease: 'power2.in' },
        0.7
      );

      // Sustainability Section
      const sustainabilityTl = gsap.timeline({
        scrollTrigger: {
          trigger: sustainabilityRef.current,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
        },
      });

      const sustainCards = sustainabilityCardsRef.current?.children || [];

      // Entrance (0-30%)
      sustainabilityTl.fromTo(
        sustainabilityBgRef.current,
        { scale: 1.08, y: '10vh' },
        { scale: 1, y: 0, duration: 0.3, ease: 'power2.out' },
        0
      );

      sustainabilityTl.fromTo(
        sustainabilityTitleRef.current,
        { y: '-10vh', opacity: 0 },
        { y: 0, opacity: 1, duration: 0.3, ease: 'power2.out' },
        0
      );

      sustainabilityTl.fromTo(
        sustainCards,
        { y: '60vh', opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.05, duration: 0.3, ease: 'power2.out' },
        0.05
      );

      // Exit (70-100%)
      sustainabilityTl.to(
        sustainCards,
        { y: '18vh', opacity: 0, stagger: 0.02, duration: 0.3, ease: 'power2.in' },
        0.7
      );
      sustainabilityTl.to(
        sustainabilityTitleRef.current,
        { opacity: 0, duration: 0.3, ease: 'power2.in' },
        0.7
      );
      sustainabilityTl.to(
        sustainabilityBgRef.current,
        { scale: 1.05, duration: 0.3, ease: 'power2.in' },
        0.7
      );

      // Global snap for pinned sections
      ScrollTrigger.create({
        snap: {
          snapTo: (progress) => {
            const pinned = ScrollTrigger.getAll()
              .filter((st) => st.vars.pin)
              .sort((a, b) => a.start - b.start);
            const distances = pinned.map((st) => {
              const start = st.start / ScrollTrigger.maxScroll(window);
              const end = (st.end ?? st.start) / ScrollTrigger.maxScroll(window);
              const center = (start + end) / 2;
              return { start, end, center };
            });

            const currentScroll = progress;
            let target = progress;

            for (const range of distances) {
              if (currentScroll >= range.start - 0.05 && currentScroll <= range.end + 0.05) {
                if (currentScroll < range.center) {
                  target = range.start;
                } else {
                  target = range.end;
                }
                break;
              }
            }
            return target;
          },
          duration: { min: 0.15, max: 0.35 },
          delay: 0,
          ease: 'power2.out',
        },
      });
    });

    // Flowing sections (Partnerships & Updates) - simple scroll animations
    gsap.fromTo(
      partnershipsHeaderRef.current,
      { y: 24, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: partnershipsHeaderRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      partnershipsCardsRef.current?.children || [],
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: partnershipsCardsRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      updatesHeaderRef.current,
      { y: 24, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: updatesHeaderRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      updatesCardsRef.current?.children || [],
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: updatesCardsRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    return () => {
      mm.revert();
    };
  }, []);

  const handleLearnMore = () => {
    const missionSection = document.getElementById('mission');
    if (missionSection) {
      missionSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleProcessClick = () => {
    const facilitiesSection = document.getElementById('facilities');
    if (facilitiesSection) {
      facilitiesSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      handleLearnMore();
    }
  };

  return (
    <main className="min-h-screen bg-[#0B1F3F]">
      {/* Hero Section - Pinned */}
      <section
        ref={heroRef}
        id="hero"
        className="section-pinned relative h-screen flex items-center justify-center overflow-hidden z-hero"
        aria-label="Hero section"
      >
        {/* Background image */}
        <div ref={heroBgRef} className="absolute inset-0">
          <Image
            src="/hero_underwater.jpg"
            alt="Underwater background"
            fill
            className="object-cover"
            priority
            quality={90}
          />
        </div>

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 hero-gradient" />

        {/* Content container */}
        <div className="relative z-10 container-custom text-center px-4 sm:px-6 lg:px-8">
          {/* Hero title with word-by-word animation */}
          <h1
            ref={heroHeadlineRef}
            className="font-space-grotesk font-bold mb-6 leading-tight"
            style={{ fontSize: 'clamp(2rem, 6vw, 5rem)' }}
          >
            {titleWords.map((word, index) => (
              <span
                key={index}
                className={`inline-block mr-[0.3em] ${
                  highlightIndices.includes(index) ? 'text-[#2EC4B6]' : 'text-white'
                }`}
              >
                {word}
              </span>
            ))}
          </h1>

          {/* Subtext */}
          <p
            ref={heroSubheadlineRef}
            className="text-lg sm:text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            {t('hero.subtitle')}
          </p>

          {/* CTA buttons */}
          <div ref={heroCTAsRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button onClick={handleLearnMore} className="btn-primary" aria-label="Learn more about Neusatz Aqua">
              {t('hero.ctaLearnMore')}
            </button>

            <Link href="/contact">
              <button className="btn-outline" aria-label={t('hero.ctaContact')}>
                {t('hero.ctaContact')}
              </button>
            </Link>

            <button
              onClick={handleProcessClick}
              className="btn-accent"
              aria-label="Our Projects"
            >
              {/* TODO: Update translation key from hero.ctaProcess to hero.ctaProjects in messages/en.json */}
              Our Projects
            </button>
          </div>

          {/* Scroll indicator */}
          <div ref={heroScrollHintRef} className="flex flex-col items-center gap-2">
            <span className="font-mono text-xs text-[#A9BDD8] uppercase tracking-widest">Scroll</span>
            <button
              onClick={handleLearnMore}
              className="text-[#2EC4B6] hover:text-[#2EC4B6]/80 transition-colors duration-300 animate-pulse"
              aria-label="Scroll to learn more"
            >
              <FaChevronDown className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Mission Section - Pinned */}
      <section
        ref={missionRef}
        id="mission"
        className="relative h-screen flex items-center justify-center bg-[#0B1F3F] overflow-hidden z-mission"
      >
        {/* AQUA Watermark */}
        <span
          ref={missionWatermarkRef}
          className="absolute inset-0 flex items-center justify-center text-[20vw] font-bold text-white/[0.06] font-space-grotesk tracking-wider whitespace-nowrap pointer-events-none select-none"
        >
          AQUA
        </span>

        <div className="container-custom relative z-10 text-center px-6 lg:px-[7vw]">
          <span
            ref={missionLabelRef}
            className="mono-label text-[#2EC4B6] text-sm mb-6 block"
          >
            OUR MISSION
          </span>
          <h2
            ref={missionHeadlineRef}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-8 leading-tight max-w-4xl mx-auto"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            {t('mission.statement')}
          </h2>
          <p className="text-lg md:text-xl text-[#A9BDD8] leading-relaxed max-w-2xl mx-auto">
            {t('mission.subtitle')}
          </p>
        </div>
      </section>

      {/* Values Section - Pinned */}
      <section
        ref={valuesRef}
        id="values"
        className="relative h-screen flex items-center bg-[#0B1F3F] overflow-hidden z-values"
      >
        <div className="container-custom relative z-10 px-6 lg:px-[7vw]">
          <div ref={valuesTitleRef} className="text-center mb-12">
            <span className="mono-label text-[#2EC4B6] text-sm mb-4 block">OUR VALUES</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4">
              {t('values.title')}
            </h2>
            <p className="text-lg text-[#A9BDD8] max-w-2xl mx-auto">{t('values.subtitle')}</p>
          </div>

          <div ref={valuesCardsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="glass-card p-8 hover:bg-white/[0.08] transition-all duration-300 hover:border-[#2EC4B6]/30 group"
              >
                <div className="w-16 h-16 bg-[#2EC4B6]/10 border border-[#2EC4B6]/30 rounded-2xl flex items-center justify-center text-[#2EC4B6] mb-6 group-hover:bg-[#2EC4B6]/20 group-hover:scale-110 transition-all duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-[#A9BDD8] text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section - Pinned */}
      <section
        ref={impactRef}
        id="impact"
        className="relative h-screen flex items-center overflow-hidden z-impact"
      >
        {/* Background Image */}
        <div ref={impactBgRef} className="absolute inset-0">
          <Image src="/impact_shrimp.jpg" alt="Impact background" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3F]/95 via-[#0B1F3F]/80 to-[#0B1F3F]/60" />
        </div>

        <div className="container-custom relative z-10 px-6 lg:px-[7vw]">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div ref={impactPanelRef} className="glass-panel p-8 md:p-10">
              <span className="mono-label text-[#2EC4B6] text-sm mb-4 block">OUR IMPACT</span>
              <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">{t('impact.title')}</h2>
              <p className="text-[#A9BDD8] mb-8 leading-relaxed">{t('impact.description')}</p>

              <div ref={impactStatsRef} className="space-y-6">
                {impactStats.map((stat, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="text-3xl md:text-4xl font-bold text-[#2EC4B6] font-space-grotesk">
                      {stat.value}
                    </div>
                    <div>
                      <div className="text-white font-semibold mb-1">{stat.label}</div>
                      <div className="text-[#A9BDD8] text-sm">{stat.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div />
          </div>
        </div>
      </section>

      {/* Innovation Section - Pinned */}
      <section
        ref={innovationRef}
        id="innovation"
        className="relative h-screen flex items-center overflow-hidden z-innovation"
      >
        {/* Background Image */}
        <div ref={innovationBgRef} className="absolute inset-0">
          <Image src="/innovation_shrimp.jpg" alt="Innovation background" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-l from-[#0B1F3F]/95 via-[#0B1F3F]/80 to-[#0B1F3F]/60" />
        </div>

        <div className="container-custom relative z-10 px-6 lg:px-[7vw]">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div />

            <div ref={innovationContentRef} className="glass-panel p-8 md:p-10">
              <div className="inline-block px-4 py-2 bg-[#2EC4B6]/10 border border-[#2EC4B6]/30 rounded-full text-[#2EC4B6] text-sm font-semibold mb-6 mono-label">
                AI-POWERED INNOVATION
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">{t('innovation.title')}</h2>
              <p className="text-[#A9BDD8] mb-8 leading-relaxed">{t('innovation.description')}</p>

              <ul className="space-y-4 mb-8">
                {innovationFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#2EC4B6]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <FaCheck className="w-3 h-3 text-[#2EC4B6]" />
                    </div>
                    <span className="text-[#A9BDD8]">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link href="/innovation">
                <button className="btn-accent inline-flex items-center gap-2">
                  {t('innovation.cta')}
                  <FaArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Section - Pinned */}
      <section
        ref={sustainabilityRef}
        id="sustainability"
        className="relative h-screen flex items-center overflow-hidden z-sustainability"
      >
        {/* Background Image */}
        <div ref={sustainabilityBgRef} className="absolute inset-0">
          <Image src="/sustainability_shrimp.jpg" alt="Sustainability background" fill className="object-cover" />
          <div className="absolute inset-0 bg-[#0B1F3F]/85" />
        </div>

        <div className="container-custom relative z-10 px-6 lg:px-[7vw]">
          <div ref={sustainabilityTitleRef} className="text-center mb-12">
            <span className="mono-label text-[#2EC4B6] text-sm mb-4 block">SUSTAINABILITY</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4">
              {t('sustainability.title')}
            </h2>
            <p className="text-lg text-[#A9BDD8] max-w-2xl mx-auto">{t('sustainability.subtitle')}</p>
          </div>

          <div ref={sustainabilityCardsRef} className="grid md:grid-cols-3 gap-6">
            {sustainabilityPillars.map((pillar, index) => (
              <div
                key={index}
                className="glass-panel p-8 text-center hover:bg-[#0B1F3F]/70 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-4">{pillar.title}</h3>
                <p className="text-[#A9BDD8] text-sm leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/sustainability">
              <button className="btn-outline inline-flex items-center gap-2">
                {t('sustainability.cta')}
                <FaArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Partnerships Section - Flowing */}
      <section
        ref={partnershipsRef}
        id="partnerships"
        className="py-20 lg:py-32 bg-[#0B1F3F] z-partnerships"
      >
        <div className="container-custom px-6 lg:px-[7vw]">
          <div ref={partnershipsHeaderRef} className="text-center mb-16">
            <span className="mono-label text-[#2EC4B6] text-sm mb-4 block">COLLABORATION</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4">
              {t('partnerships.title')}
            </h2>
            <p className="text-lg text-[#A9BDD8] max-w-2xl mx-auto">{t('partnerships.subtitle')}</p>
          </div>

          <div ref={partnershipsCardsRef} className="grid md:grid-cols-3 gap-6">
            {partnerships.map((partnership, index) => (
              <div
                key={index}
                className="glass-card p-8 text-center group hover:bg-white/[0.08] transition-all duration-300"
              >
                <div className="w-20 h-20 bg-[#2EC4B6]/10 border border-[#2EC4B6]/30 rounded-2xl flex items-center justify-center text-[#2EC4B6] mx-auto mb-6 group-hover:bg-[#2EC4B6]/20 group-hover:scale-110 transition-all duration-300">
                  {partnership.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{partnership.title}</h3>
                <p className="text-[#A9BDD8] text-sm leading-relaxed">{partnership.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/partnerships">
              <button className="btn-primary inline-flex items-center gap-2">
                {t('partnerships.cta')}
                <FaArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Updates/News Section - Flowing */}
      <section ref={updatesRef} id="updates" className="py-20 lg:py-32 bg-[#08162B] z-updates">
        <div className="container-custom px-6 lg:px-[7vw]">
          <div ref={updatesHeaderRef} className="text-center mb-16">
            <span className="mono-label text-[#2EC4B6] text-sm mb-4 block">LATEST NEWS</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4">
              {t('news.title')}
            </h2>
            <p className="text-lg text-[#A9BDD8] max-w-2xl mx-auto">{t('news.subtitle')}</p>
          </div>

          <div ref={updatesCardsRef} className="grid md:grid-cols-3 gap-6">
            {newsItems.map((item, index) => (
              <div
                key={index}
                className="glass-card p-6 group hover:bg-white/[0.08] transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#2EC4B6]/10 border border-[#2EC4B6]/30 rounded-full text-[#2EC4B6] text-xs font-semibold">
                    <FaTag className="w-3 h-3" />
                    {item.category}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[#A9BDD8] text-xs">
                    <FaCalendar className="w-3 h-3" />
                    {item.date}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-[#2EC4B6] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[#A9BDD8] text-sm leading-relaxed mb-4">{item.excerpt}</p>
                <Link
                  href="/news"
                  className="inline-flex items-center gap-2 text-[#2EC4B6] text-sm font-semibold hover:gap-3 transition-all"
                >
                  Read More
                  <FaArrowRight className="w-3 h-3" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/news">
              <button className="btn-outline inline-flex items-center gap-2">
                {t('news.viewAll')}
                <FaArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
