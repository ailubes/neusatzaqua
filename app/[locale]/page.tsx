'use client';

import Hero from '@/components/Hero';
import { motion } from 'framer-motion';
import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';
import {
  FaLeaf,
  FaLightbulb,
  FaChartLine,
  FaHandshake,
  FaGlobe,
  FaUsers,
  FaEgg,
  FaFlask,
  FaShieldAlt,
  FaWater,
  FaBrain,
  FaEye,
  FaHeart,
  FaRecycle,
  FaAward,
  FaArrowRight,
  FaCheckCircle,
} from 'react-icons/fa';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut' as const,
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut' as const,
    },
  },
};

export default function Home() {
  const t = useTranslations('home');

  const advantages = [
    {
      icon: <FaLeaf className="w-8 h-8" />,
      title: t('advantages.sustainability.title'),
      description: t('advantages.sustainability.description'),
    },
    {
      icon: <FaLightbulb className="w-8 h-8" />,
      title: t('advantages.innovation.title'),
      description: t('advantages.innovation.description'),
    },
    {
      icon: <FaChartLine className="w-8 h-8" />,
      title: t('advantages.excellence.title'),
      description: t('advantages.excellence.description'),
    },
    {
      icon: <FaHandshake className="w-8 h-8" />,
      title: t('advantages.responsibility.title'),
      description: t('advantages.responsibility.description'),
    },
    {
      icon: <FaGlobe className="w-8 h-8" />,
      title: t('advantages.globalImpact.title'),
      description: t('advantages.globalImpact.description'),
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: t('advantages.collaboration.title'),
      description: t('advantages.collaboration.description'),
    },
  ];

  const metrics = [
    {
      icon: <FaChartLine className="w-10 h-10" />,
      value: t('metrics.productivity.value'),
      label: t('metrics.productivity.label'),
      description: t('metrics.productivity.description'),
    },
    {
      icon: <FaEye className="w-10 h-10" />,
      value: t('metrics.observation.value'),
      label: t('metrics.observation.label'),
      description: t('metrics.observation.description'),
    },
    {
      icon: <FaCheckCircle className="w-10 h-10" />,
      value: t('metrics.transparency.value'),
      label: t('metrics.transparency.label'),
      description: t('metrics.transparency.description'),
    },
  ];

  const facilities = [
    {
      icon: <FaEgg className="w-8 h-8" />,
      title: t('facilities.broodstock.title'),
      description: t('facilities.broodstock.description'),
    },
    {
      icon: <FaFlask className="w-8 h-8" />,
      title: t('facilities.maturation.title'),
      description: t('facilities.maturation.description'),
    },
    {
      icon: <FaWater className="w-8 h-8" />,
      title: t('facilities.larval.title'),
      description: t('facilities.larval.description'),
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: t('facilities.biosecurity.title'),
      description: t('facilities.biosecurity.description'),
    },
  ];

  const commitments = [
    {
      icon: <FaHeart className="w-8 h-8" />,
      title: t('sustainability.animalWelfare.title'),
      description: t('sustainability.animalWelfare.description'),
    },
    {
      icon: <FaRecycle className="w-8 h-8" />,
      title: t('sustainability.circularEconomy.title'),
      description: t('sustainability.circularEconomy.description'),
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: t('sustainability.localEmployment.title'),
      description: t('sustainability.localEmployment.description'),
    },
  ];

  const partners = [
    { name: t('partners.awi'), abbr: 'AWI' },
    { name: t('partners.shrimpwiz'), abbr: 'ShrimpWiz' },
    { name: t('partners.horizon'), abbr: 'Horizon Europe' },
    { name: t('partners.gep'), abbr: 'GEP Certified' },
  ];

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

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Company Overview */}
      <section id="about" className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeInUp}>
              <h2 className="mb-6">{t('about.title')}</h2>
              <p className="text-lg text-neutral-700 mb-4 leading-relaxed">
                {t('about.paragraph1')}
              </p>
              <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
                {t('about.paragraph2')}
              </p>
              <Link href="/about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary inline-flex items-center gap-2"
                >
                  {t('about.learnMore')}
                  <FaArrowRight />
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="relative h-[400px] rounded-lg overflow-hidden shadow-xl bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center"
            >
              <FaWater className="w-32 h-32 text-secondary opacity-30" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-primary/90 to-transparent text-white">
                <p className="font-semibold text-lg">{t('about.location')}</p>
                <p className="text-sm text-secondary-100">{t('about.subtitle')}</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Key Advantages */}
      <section className="section-padding bg-gradient-to-br from-neutral-50 to-neutral-100">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="mb-4">{t('advantages.title')}</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              {t('advantages.subtitle')}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="card group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary-600 rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">{advantage.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{advantage.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="section-padding bg-gradient-to-br from-primary via-primary-700 to-primary-900 text-white">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-white mb-4">{t('metrics.title')}</h2>
            <p className="text-xl text-secondary-100 max-w-3xl mx-auto">
              {t('metrics.subtitle')}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex justify-center mb-4 text-secondary">
                  {metric.icon}
                </div>
                <div className="text-5xl font-bold text-accent mb-2">{metric.value}</div>
                <div className="text-xl font-semibold text-white mb-3">{metric.label}</div>
                <p className="text-secondary-100 text-sm">{metric.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Hatchery Highlights */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="mb-4">{t('facilities.title')}</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              {t('facilities.subtitle')}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
          >
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="p-6 border-2 border-neutral-200 rounded-lg hover:border-secondary hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-700 rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  {facility.icon}
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">{facility.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{facility.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
            className="text-center"
          >
            <Link href="/hatchery">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary inline-flex items-center gap-2"
              >
                {t('facilities.explore')}
                <FaArrowRight />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* AI Innovation Teaser */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeInUp}>
              <div className="inline-block px-4 py-2 bg-accent/20 rounded-full text-accent font-semibold text-sm mb-4">
                {t('aiInnovation.badge')}
              </div>
              <h2 className="text-white mb-6">{t('aiInnovation.title')}</h2>
              <p className="text-lg text-secondary-100 mb-4 leading-relaxed">
                {t('aiInnovation.paragraph1')}
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <FaBrain className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <span className="text-secondary-100">{t('aiInnovation.feature1')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaEye className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <span className="text-secondary-100">{t('aiInnovation.feature2')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaChartLine className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <span className="text-secondary-100">{t('aiInnovation.feature3')}</span>
                </li>
              </ul>
              <Link href="/innovation">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-secondary-50 transition-colors inline-flex items-center gap-2"
                >
                  {t('aiInnovation.cta')}
                  <FaArrowRight />
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center"
            >
              <FaBrain className="w-32 h-32 text-secondary opacity-30" />
              <div className="absolute inset-0 border-4 border-accent/30 rounded-lg" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Sustainability Commitment */}
      <section className="section-padding bg-gradient-to-br from-neutral-50 to-white">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="mb-4">{t('sustainability.title')}</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              {t('sustainability.subtitle')}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8 mb-8"
          >
            {commitments.map((commitment, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="card group hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-700 rounded-full flex items-center justify-center text-white mb-4 mx-auto group-hover:scale-110 transition-transform">
                  {commitment.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">{commitment.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{commitment.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
            className="text-center"
          >
            <Link href="/sustainability">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-outline inline-flex items-center gap-2"
              >
                {t('sustainability.cta')}
                <FaArrowRight />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Partners & Certifications */}
      <section className="section-padding bg-white border-t border-neutral-200">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="mb-4">{t('partners.title')}</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              {t('partners.subtitle')}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="flex flex-col items-center justify-center p-6 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors group"
              >
                <FaAward className="w-12 h-12 text-secondary mb-3 group-hover:scale-110 transition-transform" />
                <div className="text-center">
                  <div className="font-bold text-primary text-lg">{partner.abbr}</div>
                  <div className="text-xs text-neutral-600 mt-1">{partner.name}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="section-padding bg-gradient-to-br from-primary via-primary-700 to-primary-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg
            className="absolute bottom-0 w-full h-64"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#72C5F0"
              fillOpacity="1"
              d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,133.3C672,117,768,107,864,112C960,117,1056,139,1152,138.7C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-white mb-4">{t('cta.title')}</h2>
            <p className="text-xl text-secondary-100 max-w-3xl mx-auto">
              {t('cta.subtitle')}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            <motion.div variants={scaleIn}>
              <Link href="/partnerships">
                <div className="p-8 bg-white/10 backdrop-blur-sm rounded-lg border-2 border-white/20 hover:bg-white/20 hover:border-secondary transition-all duration-300 cursor-pointer group h-full">
                  <FaHandshake className="w-12 h-12 text-secondary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-semibold text-white mb-3">{t('cta.customers.title')}</h3>
                  <p className="text-secondary-100 mb-4">{t('cta.customers.description')}</p>
                  <div className="text-accent font-semibold inline-flex items-center gap-2">
                    {t('cta.customers.cta')} <FaArrowRight />
                  </div>
                </div>
              </Link>
            </motion.div>

            <motion.div variants={scaleIn}>
              <Link href="/innovation">
                <div className="p-8 bg-white/10 backdrop-blur-sm rounded-lg border-2 border-white/20 hover:bg-white/20 hover:border-secondary transition-all duration-300 cursor-pointer group h-full">
                  <FaBrain className="w-12 h-12 text-secondary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-semibold text-white mb-3">{t('cta.researchers.title')}</h3>
                  <p className="text-secondary-100 mb-4">{t('cta.researchers.description')}</p>
                  <div className="text-accent font-semibold inline-flex items-center gap-2">
                    {t('cta.researchers.cta')} <FaArrowRight />
                  </div>
                </div>
              </Link>
            </motion.div>

            <motion.div variants={scaleIn}>
              <Link href="/gender-equality">
                <div className="p-8 bg-white/10 backdrop-blur-sm rounded-lg border-2 border-white/20 hover:bg-white/20 hover:border-secondary transition-all duration-300 cursor-pointer group h-full">
                  <FaUsers className="w-12 h-12 text-secondary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-semibold text-white mb-3">{t('cta.community.title')}</h3>
                  <p className="text-secondary-100 mb-4">{t('cta.community.description')}</p>
                  <div className="text-accent font-semibold inline-flex items-center gap-2">
                    {t('cta.community.cta')} <FaArrowRight />
                  </div>
                </div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Latest News Preview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="mb-4">{t('news.title')}</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              {t('news.subtitle')}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8 mb-8"
          >
            {newsItems.map((item, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="card group hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="text-xs font-semibold text-secondary mb-2 uppercase tracking-wide">
                  {item.category}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2 group-hover:text-secondary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-500 mb-3">{item.date}</p>
                <p className="text-neutral-600 leading-relaxed">{item.excerpt}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
            className="text-center"
          >
            <Link href="/news">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-outline inline-flex items-center gap-2"
              >
                {t('news.viewAll')}
                <FaArrowRight />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
