"use client";

import { motion } from "framer-motion";
import {
  FaWater,
  FaShieldAlt,
  FaMicroscope,
  FaChartLine,
  FaFlask,
  FaTemperatureHigh,
  FaFilter,
  FaRecycle,
  FaUserMd,
  FaCheckCircle,
  FaLock,
  FaBrain,
  FaIndustry,
  FaGraduationCap,
  FaHandshake,
  FaCube,
  FaArrowRight,
  FaEgg,
  FaBaby,
  FaSeedling,
} from "react-icons/fa";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
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
      ease: "easeOut" as const,
    },
  },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export default function HatcheryPage() {
  const t = useTranslations('hatchery');

  const facilities = [
    {
      icon: <FaWater className="w-8 h-8" />,
      title: t('facilities.broodstock.title'),
      description: t('facilities.broodstock.description'),
      specs: t.raw('facilities.broodstock.specs') as string[],
    },
    {
      icon: <FaEgg className="w-8 h-8" />,
      title: t('facilities.maturation.title'),
      description: t('facilities.maturation.description'),
      specs: t.raw('facilities.maturation.specs') as string[],
    },
    {
      icon: <FaFlask className="w-8 h-8" />,
      title: t('facilities.spawning.title'),
      description: t('facilities.spawning.description'),
      specs: t.raw('facilities.spawning.specs') as string[],
    },
    {
      icon: <FaMicroscope className="w-8 h-8" />,
      title: t('facilities.larval.title'),
      description: t('facilities.larval.description'),
      specs: t.raw('facilities.larval.specs') as string[],
    },
    {
      icon: <FaBaby className="w-8 h-8" />,
      title: t('facilities.nursery.title'),
      description: t('facilities.nursery.description'),
      specs: t.raw('facilities.nursery.specs') as string[],
    },
    {
      icon: <FaFilter className="w-8 h-8" />,
      title: t('facilities.water.title'),
      description: t('facilities.water.description'),
      specs: t.raw('facilities.water.specs') as string[],
    },
  ];

  const biosecurityStandards = [
    {
      icon: <FaShieldAlt className="w-6 h-6" />,
      title: t('biosecurity.entryProtocols.title'),
      description: t('biosecurity.entryProtocols.description'),
    },
    {
      icon: <FaLock className="w-6 h-6" />,
      title: t('biosecurity.disease.title'),
      description: t('biosecurity.disease.description'),
    },
    {
      icon: <FaUserMd className="w-6 h-6" />,
      title: t('biosecurity.monitoring.title'),
      description: t('biosecurity.monitoring.description'),
    },
    {
      icon: <FaRecycle className="w-6 h-6" />,
      title: t('biosecurity.water.title'),
      description: t('biosecurity.water.description'),
    },
  ];

  const technologies = [
    {
      icon: <FaBrain className="w-8 h-8" />,
      title: t('technology.aiMonitoring.title'),
      description: t('technology.aiMonitoring.description'),
    },
    {
      icon: <FaChartLine className="w-8 h-8" />,
      title: t('technology.analytics.title'),
      description: t('technology.analytics.description'),
    },
    {
      icon: <FaCube className="w-8 h-8" />,
      title: t('technology.digitalTwin.title'),
      description: t('technology.digitalTwin.description'),
    },
    {
      icon: <FaTemperatureHigh className="w-8 h-8" />,
      title: t('technology.iot.title'),
      description: t('technology.iot.description'),
    },
  ];

  const productionSpecs = [
    { label: t('capacity.specs.capacity'), value: "TBD Million PL" },
    { label: t('capacity.specs.broodstock'), value: "TBD Animals" },
    { label: t('capacity.specs.tanks'), value: "TBD Units" },
    { label: t('capacity.specs.water'), value: "TBD m³/hour" },
    { label: t('capacity.specs.biosecurity'), value: "Tier 1" },
    { label: t('capacity.specs.monitoring'), value: "24/7 AI-Powered" },
  ];

  const collaborations = [
    {
      icon: <FaGraduationCap className="w-8 h-8" />,
      title: t('collaboration.ukrainian.title'),
      description: t('collaboration.ukrainian.description'),
    },
    {
      icon: <FaHandshake className="w-8 h-8" />,
      title: t('collaboration.international.title'),
      description: t('collaboration.international.description'),
    },
    {
      icon: <FaIndustry className="w-8 h-8" />,
      title: t('collaboration.horizon.title'),
      description: t('collaboration.horizon.description'),
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary-700 to-primary-900 text-white section-padding overflow-hidden">
        <div className="absolute inset-0 bg-[url('/water-texture.jpg')] opacity-10 bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/50 to-primary" />

        <div className="container-custom relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-5xl mx-auto text-center"
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-block bg-secondary/20 text-secondary-100 px-6 py-2 rounded-full text-sm font-semibold mb-4">
                {t('hero.badge')}
              </span>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-white mb-6">
              {t('hero.title')}
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-secondary-100 leading-relaxed mb-8">
              {t('hero.subtitle')}
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 justify-center">
              <Link href="#virtual-tour" className="btn-accent">
                {t('hero.virtualTour')}
              </Link>
              <Link href="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-primary">
                {t('hero.scheduleVisit')}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Hatchery Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="mb-6">{t('overview.title')}</h2>
              <p className="text-xl text-neutral-700 max-w-4xl mx-auto leading-relaxed">
                {t('overview.subtitle')}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div variants={scaleIn} className="card text-center">
                <div className="bg-primary text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaIndustry className="w-10 h-10" />
                </div>
                <h4 className="mb-3">{t('overview.controlled.title')}</h4>
                <p className="text-neutral-700">
                  {t('overview.controlled.description')}
                </p>
              </motion.div>

              <motion.div variants={scaleIn} className="card text-center">
                <div className="bg-secondary text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaShieldAlt className="w-10 h-10" />
                </div>
                <h4 className="mb-3">{t('overview.biosecurity.title')}</h4>
                <p className="text-neutral-700">
                  {t('overview.biosecurity.description')}
                </p>
              </motion.div>

              <motion.div variants={scaleIn} className="card text-center">
                <div className="bg-accent text-primary w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaBrain className="w-10 h-10" />
                </div>
                <h4 className="mb-3">{t('overview.ai.title')}</h4>
                <p className="text-neutral-700">
                  {t('overview.ai.description')}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Facilities */}
      <section className="section-padding bg-gradient-to-br from-secondary-50 to-primary-50">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="mb-6">{t('facilities.title')}</h2>
              <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
                {t('facilities.subtitle')}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {facilities.map((facility, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="card hover:border-2 hover:border-secondary transition-all"
                >
                  <div className="bg-gradient-to-br from-primary to-primary-700 text-white w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                    {facility.icon}
                  </div>
                  <h4 className="mb-3">{facility.title}</h4>
                  <p className="text-neutral-700 mb-4 leading-relaxed">
                    {facility.description}
                  </p>
                  <div className="border-t border-neutral-200 pt-4">
                    <p className="text-sm font-semibold text-primary mb-2">{t('facilities.specsLabel')}</p>
                    <ul className="space-y-1">
                      {facility.specs.map((spec, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-neutral-600">
                          <FaCheckCircle className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Flow Visualization */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="mb-6">{t('processFlow.title')}</h2>
              <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
                {t('processFlow.subtitle')}
              </p>
            </motion.div>

            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-5 gap-4 relative">
                {/* Flow arrows for desktop */}
                <div className="hidden md:block absolute top-1/4 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent -z-0" style={{ top: '25%' }} />

                {[
                  { icon: <FaWater />, title: t('processFlow.steps.broodstock.title'), stage: t('processFlow.steps.broodstock.stage') },
                  { icon: <FaEgg />, title: t('processFlow.steps.maturation.title'), stage: t('processFlow.steps.maturation.stage') },
                  { icon: <FaFlask />, title: t('processFlow.steps.spawning.title'), stage: t('processFlow.steps.spawning.stage') },
                  { icon: <FaSeedling />, title: t('processFlow.steps.larval.title'), stage: t('processFlow.steps.larval.stage') },
                  { icon: <FaBaby />, title: t('processFlow.steps.postlarvae.title'), stage: t('processFlow.steps.postlarvae.stage') },
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="relative bg-white rounded-lg shadow-lg p-6 text-center border-2 border-neutral-100 hover:border-primary transition-all z-10"
                  >
                    <div className="bg-gradient-to-br from-primary to-secondary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 text-2xl">
                      {step.icon}
                    </div>
                    <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold">
                      {index + 1}
                    </div>
                    <h5 className="mb-2">{step.title}</h5>
                    <p className="text-xs text-neutral-600">{step.stage}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Biosecurity Standards */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-white mb-6">{t('biosecurity.title')}</h2>
              <p className="text-xl text-secondary-100 max-w-3xl mx-auto">
                {t('biosecurity.subtitle')}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {biosecurityStandards.map((standard, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all"
                >
                  <div className="text-accent mb-4">{standard.icon}</div>
                  <h5 className="text-white mb-3">{standard.title}</h5>
                  <p className="text-secondary-100 text-sm leading-relaxed">
                    {standard.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeInUp} className="mt-12 text-center">
              <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-6 py-3 rounded-lg">
                <FaCheckCircle className="w-5 h-5" />
                <span className="font-semibold">{t('biosecurity.certified')}</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Technology & Innovation */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="mb-6">{t('technology.title')}</h2>
              <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
                {t('technology.subtitle')}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  variants={index % 2 === 0 ? slideInLeft : slideInRight}
                  className="card hover:shadow-2xl transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-secondary to-secondary-700 text-white w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0">
                      {tech.icon}
                    </div>
                    <div>
                      <h4 className="mb-3">{tech.title}</h4>
                      <p className="text-neutral-700 leading-relaxed">
                        {tech.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeInUp} className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-lg p-8">
              <h3 className="text-2xl mb-6 text-center">{t('technology.highlights.title')}</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                  <p className="text-neutral-700">{t('technology.highlights.monitoring')}</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary mb-2">15%</div>
                  <p className="text-neutral-700">{t('technology.highlights.productivity')}</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent-700 mb-2">100%</div>
                  <p className="text-neutral-700">{t('technology.highlights.transparency')}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Production Capacity */}
      <section className="section-padding bg-gradient-to-br from-secondary-50 to-primary-50">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="mb-6">{t('capacity.title')}</h2>
              <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
                {t('capacity.subtitle')}
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                {productionSpecs.map((spec, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-6 shadow-md flex items-center justify-between"
                  >
                    <span className="font-semibold text-primary">{spec.label}</span>
                    <span className="text-2xl font-bold text-secondary">{spec.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-primary text-white rounded-lg p-8 text-center">
                <FaChartLine className="w-12 h-12 mx-auto mb-4 text-accent" />
                <h4 className="text-white mb-3">{t('capacity.scalable.title')}</h4>
                <p className="text-secondary-100 leading-relaxed">
                  {t('capacity.scalable.description')}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Collaboration with Scientific Institutions */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="mb-6">{t('collaboration.title')}</h2>
              <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
                {t('collaboration.subtitle')}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {collaborations.map((collab, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="card text-center hover:shadow-2xl transition-all"
                >
                  <div className="bg-gradient-to-br from-primary to-primary-700 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    {collab.icon}
                  </div>
                  <h4 className="mb-3">{collab.title}</h4>
                  <p className="text-neutral-700 leading-relaxed">
                    {collab.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeInUp} className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-lg p-8">
              <h3 className="text-2xl mb-6 text-center">{t('collaboration.researchFocus.title')}</h3>
              <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
                {[
                  t('collaboration.researchFocus.genetics'),
                  t('collaboration.researchFocus.disease'),
                  t('collaboration.researchFocus.ai'),
                  t('collaboration.researchFocus.feed'),
                  t('collaboration.researchFocus.water'),
                  t('collaboration.researchFocus.digitalTwin'),
                ].map((area, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <FaCheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-neutral-700">{area}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Virtual Tour */}
      <section id="virtual-tour" className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="text-white mb-6">{t('virtualTour.title')}</h2>
              <p className="text-xl text-secondary-100 max-w-3xl mx-auto">
                {t('virtualTour.subtitle')}
              </p>
            </motion.div>

            <motion.div variants={scaleIn} className="bg-white/10 backdrop-blur-sm rounded-lg p-12">
              <div className="relative aspect-video bg-gradient-to-br from-primary to-secondary rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                  <FaCube className="w-24 h-24 text-accent mb-6 animate-pulse" />
                  <h3 className="text-white mb-4">{t('virtualTour.layoutTitle')}</h3>
                  <p className="text-secondary-100 mb-6 max-w-xl">
                    {t('virtualTour.description')}
                  </p>
                  <div className="inline-flex items-center gap-2 bg-accent text-primary px-6 py-3 rounded-lg font-semibold">
                    <span>{t('virtualTour.comingSoon')}</span>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-4 gap-4 mt-8">
                {[
                  { icon: <FaWater />, label: t('virtualTour.areas.broodstock') },
                  { icon: <FaFlask />, label: t('virtualTour.areas.spawning') },
                  { icon: <FaMicroscope />, label: t('virtualTour.areas.larval') },
                  { icon: <FaFilter />, label: t('virtualTour.areas.water') },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/20 transition-all"
                  >
                    <div className="text-accent text-3xl mb-2 flex justify-center">{item.icon}</div>
                    <p className="text-white text-sm">{item.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-secondary via-secondary-600 to-primary">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center text-white"
          >
            <h2 className="text-white mb-6">{t('cta.title')}</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
              {t('cta.subtitle')}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-primary hover:bg-neutral-100 font-semibold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 inline-flex items-center gap-2"
              >
                {t('cta.scheduleVisit')}
                <FaArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/innovation"
                className="bg-primary hover:bg-primary-800 text-white font-semibold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 border-2 border-white/30"
              >
                {t('cta.exploreTechnology')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
