'use client';

import { motion } from 'framer-motion';
import { Link } from '@/navigation';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import {
  FaBrain,
  FaVideo,
  FaChartLine,
  FaRobot,
  FaCube,
  FaDatabase,
  FaCheck,
  FaDownload,
  FaArrowRight,
  FaEye,
  FaClock,
  FaShieldAlt,
  FaMicroscope,
  FaHandshake,
  FaLightbulb,
} from 'react-icons/fa';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  viewport: { once: true },
};

export default function InnovationPage() {
  const t = useTranslations('innovation');

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white py-32 overflow-hidden min-h-[600px]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/neusatz-aqua-hero-android-bg.png"
            alt="AI Laboratory - Innovation & Research"
            fill
            className="object-cover"
            priority
            quality={90}
            sizes="100vw"
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 via-primary-800/80 to-primary-900/90 z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary-900/50 z-10"></div>
        </div>

        <motion.div
          className="container-custom relative z-20"
          {...fadeInUp}
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-8"
            >
              <FaBrain className="text-2xl text-secondary" />
              <span className="text-lg font-semibold">{t('hero.badge')}</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              {t('hero.subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#ai-behavior" className="btn-secondary flex items-center justify-center gap-2">
                {t('hero.exploreTechnology')}
                <FaArrowRight />
              </Link>
              <a
                href="/AI-for-Aquaculture-Behavior-Insight.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline flex items-center justify-center gap-2 text-white border-white hover:bg-white hover:text-primary"
              >
                <FaDownload />
                {t('hero.downloadWhitepaper')}
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Innovation Overview */}
      <section className="section-padding bg-white">
        <motion.div className="container-custom" {...staggerContainer}>
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              {t('overview.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('overview.subtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaVideo className="text-4xl" />,
                title: t('overview.computerVision.title'),
                description: t('overview.computerVision.description'),
              },
              {
                icon: <FaChartLine className="text-4xl" />,
                title: t('overview.analytics.title'),
                description: t('overview.analytics.description'),
              },
              {
                icon: <FaCube className="text-4xl" />,
                title: t('overview.digitalTwin.title'),
                description: t('overview.digitalTwin.description'),
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                className="card p-8 text-center bg-gradient-to-br from-primary-50 to-secondary-50 border-none"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary text-white mb-6">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* AI for Aquaculture Behavior Insight */}
      <section id="ai-behavior" className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <motion.div className="container-custom" {...staggerContainer}>
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              {t('aiBehavior.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('aiBehavior.subtitle')}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div {...fadeInUp}>
              <div className="aspect-video bg-gradient-to-br from-primary-900 to-primary-600 rounded-2xl flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-transparent"></div>
                <FaVideo className="text-8xl text-white/20 absolute" />
                <div className="relative z-10 text-center">
                  <FaVideo className="text-6xl text-secondary mx-auto mb-4" />
                  <p className="text-white text-lg">AI Camera System Demo</p>
                  <p className="text-gray-300 text-sm mt-2">Coming Soon</p>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeInUp} className="space-y-6">
              {[
                {
                  icon: <FaEye />,
                  title: t('aiBehavior.features.vision.title'),
                  description: t('aiBehavior.features.vision.description'),
                },
                {
                  icon: <FaBrain />,
                  title: t('aiBehavior.features.detection.title'),
                  description: t('aiBehavior.features.detection.description'),
                },
                {
                  icon: <FaClock />,
                  title: t('aiBehavior.features.monitoring.title'),
                  description: t('aiBehavior.features.monitoring.description'),
                },
                {
                  icon: <FaChartLine />,
                  title: t('aiBehavior.features.predictive.title'),
                  description: t('aiBehavior.features.predictive.description'),
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary text-xl">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-primary mb-2">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* AI System Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: t('aiBehavior.stats.coverage'), value: '100%', icon: <FaVideo /> },
              { label: t('aiBehavior.stats.monitoring'), value: '24/7', icon: <FaClock /> },
              { label: t('aiBehavior.stats.patterns'), value: '50+', icon: <FaBrain /> },
              { label: t('aiBehavior.stats.data'), value: '1M+', icon: <FaDatabase /> },
            ].map((stat, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                className="card p-6 text-center bg-white border-l-4 border-secondary"
              >
                <div className="text-3xl text-secondary mb-2">{stat.icon}</div>
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Digital Twin Technology */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-700 to-primary-600 text-white">
        <motion.div className="container-custom" {...staggerContainer}>
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-8">
              <FaCube className="text-2xl text-secondary" />
              <span className="text-lg font-semibold">{t('digitalTwin.badge')}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t('digitalTwin.title')}
            </h2>
            <p className="text-xl text-gray-200">
              {t('digitalTwin.subtitle')}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FaCube className="text-4xl" />,
                title: t('digitalTwin.model.title'),
                description: t('digitalTwin.model.description'),
              },
              {
                icon: <FaDatabase className="text-4xl" />,
                title: t('digitalTwin.dataIntegration.title'),
                description: t('digitalTwin.dataIntegration.description'),
              },
              {
                icon: <FaRobot className="text-4xl" />,
                title: t('digitalTwin.simulations.title'),
                description: t('digitalTwin.simulations.description'),
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                className="card p-8 bg-white/10 backdrop-blur-sm border-white/20 text-center"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-secondary text-white mb-6">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-200">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeInUp} className="mt-16 card p-8 bg-white/10 backdrop-blur-sm border-white/20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4">{t('digitalTwin.howItWorks.title')}</h3>
                <ul className="space-y-4">
                  {[
                    t('digitalTwin.howItWorks.step1'),
                    t('digitalTwin.howItWorks.step2'),
                    t('digitalTwin.howItWorks.step3'),
                    t('digitalTwin.howItWorks.step4'),
                    t('digitalTwin.howItWorks.step5'),
                    t('digitalTwin.howItWorks.step6'),
                  ].map((step, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <FaCheck className="text-secondary flex-shrink-0 mt-1" />
                      <span className="text-gray-200">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="aspect-square bg-gradient-to-br from-secondary/20 to-transparent rounded-2xl flex items-center justify-center">
                <FaCube className="text-9xl text-white/20" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Key Benefits & Metrics */}
      <section className="section-padding bg-white">
        <motion.div className="container-custom" {...staggerContainer}>
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              {t('results.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('results.subtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                metric: t('results.productivity.metric'),
                label: t('results.productivity.label'),
                description: t('results.productivity.description'),
                icon: <FaChartLine />,
                color: 'text-green-600',
              },
              {
                metric: t('results.observation.metric'),
                label: t('results.observation.label'),
                description: t('results.observation.description'),
                icon: <FaClock />,
                color: 'text-secondary',
              },
              {
                metric: t('results.transparency.metric'),
                label: t('results.transparency.label'),
                description: t('results.transparency.description'),
                icon: <FaShieldAlt />,
                color: 'text-primary',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                whileHover={{ scale: 1.05 }}
                className="card p-8 text-center bg-gradient-to-br from-gray-50 to-white"
              >
                <div className={`text-5xl ${item.color} mb-4`}>{item.icon}</div>
                <div className="text-5xl font-bold text-primary mb-2">{item.metric}</div>
                <div className="text-xl font-semibold text-gray-800 mb-2">{item.label}</div>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Technology Partners */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <motion.div className="container-custom" {...staggerContainer}>
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              {t('partners.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('partners.subtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: t('partners.awi.name'),
                country: t('partners.awi.country'),
                description: t('partners.awi.description'),
                icon: <FaMicroscope />,
              },
              {
                name: t('partners.shrimpwiz.name'),
                country: t('partners.shrimpwiz.country'),
                description: t('partners.shrimpwiz.description'),
                icon: <FaHandshake />,
              },
              {
                name: t('partners.horizon.name'),
                country: t('partners.horizon.country'),
                description: t('partners.horizon.description'),
                icon: <FaLightbulb />,
              },
            ].map((partner, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                className="card p-8 text-center"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary mb-6 text-4xl">
                  {partner.icon}
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">{partner.name}</h3>
                <p className="text-secondary font-semibold mb-3">{partner.country}</p>
                <p className="text-gray-600">{partner.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Future Innovations */}
      <section className="section-padding bg-white">
        <motion.div className="container-custom" {...staggerContainer}>
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              {t('future.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('future.subtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: t('future.genetic.title'),
                description: t('future.genetic.description'),
                status: t('future.genetic.status'),
              },
              {
                title: t('future.blockchain.title'),
                description: t('future.blockchain.description'),
                status: t('future.blockchain.status'),
              },
              {
                title: t('future.autonomous.title'),
                description: t('future.autonomous.description'),
                status: t('future.autonomous.status'),
              },
              {
                title: t('future.mobile.title'),
                description: t('future.mobile.description'),
                status: t('future.mobile.status'),
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                className="card p-8 border-l-4 border-secondary"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-primary">{item.title}</h3>
                  <span className="px-3 py-1 bg-secondary/10 text-secondary text-sm font-semibold rounded-full">
                    {item.status}
                  </span>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Download Section */}
      <section className="section-padding bg-gradient-to-br from-primary-900 to-primary-600 text-white">
        <motion.div className="container-custom" {...fadeInUp}>
          <div className="max-w-4xl mx-auto text-center">
            <FaDownload className="text-6xl text-secondary mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t('download.title')}
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              {t('download.subtitle')}
            </p>
            <a
              href="/AI-for-Aquaculture-Behavior-Insight.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-3"
            >
              <FaDownload />
              {t('download.cta')}
            </a>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-secondary to-primary text-white">
        <motion.div className="container-custom" {...fadeInUp}>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t('cta.title')}
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              {t('cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/hatchery" className="btn-accent flex items-center justify-center gap-2">
                {t('cta.visitHatchery')}
                <FaArrowRight />
              </Link>
              <Link href="/partnerships" className="btn-outline flex items-center justify-center gap-2 border-white text-white hover:bg-white hover:text-primary">
                {t('cta.explorePartnerships')}
                <FaHandshake />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
