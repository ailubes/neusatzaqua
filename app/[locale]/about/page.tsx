"use client";

import { motion } from "framer-motion";
import {
  FaLeaf,
  FaChartLine,
  FaHandshake,
  FaAward,
  FaGlobe,
  FaWater,
  FaLightbulb,
  FaUsers,
  FaMapMarkerAlt,
  FaArrowRight,
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
      staggerChildren: 0.2,
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

export default function AboutPage() {
  const t = useTranslations("about");
  const tHome = useTranslations("home.advantages");

  const values = [
    {
      icon: <FaLeaf className="w-8 h-8" />,
      title: tHome("sustainability.title"),
      description: tHome("sustainability.description"),
    },
    {
      icon: <FaLightbulb className="w-8 h-8" />,
      title: tHome("innovation.title"),
      description: tHome("innovation.description"),
    },
    {
      icon: <FaChartLine className="w-8 h-8" />,
      title: tHome("excellence.title"),
      description: tHome("excellence.description"),
    },
    {
      icon: <FaHandshake className="w-8 h-8" />,
      title: tHome("responsibility.title"),
      description: tHome("responsibility.description"),
    },
    {
      icon: <FaGlobe className="w-8 h-8" />,
      title: tHome("globalImpact.title"),
      description: tHome("globalImpact.description"),
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: tHome("collaboration.title"),
      description: tHome("collaboration.description"),
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary-700 to-primary-900 text-white section-padding">
        <div className="absolute inset-0 bg-[url('/water-texture.jpg')] opacity-10 bg-cover bg-center" />
        <div className="container-custom relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-white mb-6">{t("hero.title")}</h1>
            <p className="text-xl md:text-2xl text-secondary-100 leading-relaxed">
              {t("hero.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeInUp}>
              <h2 className="mb-6">{t("whoWeAre.title")}</h2>
              <p className="text-lg text-neutral-700 mb-4 leading-relaxed">
                {t("whoWeAre.paragraph1")}
              </p>
              <p className="text-lg text-neutral-700 mb-4 leading-relaxed">
                {t("whoWeAre.paragraph2")}
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed">
                {t("whoWeAre.paragraph3")}
              </p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center">
                <FaWater className="w-32 h-32 text-secondary opacity-30" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-primary text-center px-8 font-semibold text-xl">
                  {t("whoWeAre.photoComingSoon")}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gradient-to-br from-secondary-50 to-primary-50">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="mb-6">{t("mission.title")}</h2>
              <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
                {t("mission.subtitle")}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div variants={fadeInUp} className="card">
                <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <FaAward className="w-8 h-8" />
                </div>
                <h3 className="text-2xl mb-4">{t("mission.missionTitle")}</h3>
                <p className="text-neutral-700 leading-relaxed">
                  {t("mission.missionText")}
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="card">
                <div className="bg-secondary text-white w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <FaLightbulb className="w-8 h-8" />
                </div>
                <h3 className="text-2xl mb-4">{t("mission.visionTitle")}</h3>
                <p className="text-neutral-700 leading-relaxed">
                  {t("mission.visionText")}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="mb-6">{t("story.title")}</h2>
              <p className="text-xl text-neutral-700">
                {t("story.subtitle")}
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-6">
              <div className="border-l-4 border-primary pl-6 py-2">
                <h4 className="text-primary mb-2">{t("story.beginning.title")}</h4>
                <p className="text-neutral-700 leading-relaxed">
                  {t("story.beginning.text")}
                </p>
              </div>

              <div className="border-l-4 border-secondary pl-6 py-2">
                <h4 className="text-primary mb-2">{t("story.innovation.title")}</h4>
                <p className="text-neutral-700 leading-relaxed">
                  {t("story.innovation.text")}
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6 py-2">
                <h4 className="text-primary mb-2">{t("story.vismar.title")}</h4>
                <p className="text-neutral-700 leading-relaxed">
                  {t("story.vismar.text")}
                </p>
              </div>

              <div className="border-l-4 border-primary-700 pl-6 py-2">
                <h4 className="text-primary mb-2">{t("story.future.title")}</h4>
                <p className="text-neutral-700 leading-relaxed">
                  {t("story.future.text")}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Facility */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="mb-6">{t("facility.title")}</h2>
              <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
                {t("facility.subtitle")}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <motion.div variants={fadeInUp} className="card">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-primary text-white w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="mb-2">{t("facility.location.title")}</h4>
                    <p className="text-neutral-700">
                      {t("facility.location.primary")}
                    </p>
                    <p className="text-sm text-neutral-600 mt-2">
                      {t("facility.location.secondary")}
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="card">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-secondary text-white w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaWater className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="mb-2">{t("facility.infrastructure.title")}</h4>
                    <p className="text-neutral-700">
                      {t("facility.infrastructure.primary")}
                    </p>
                    <p className="text-sm text-neutral-600 mt-2">
                      {t("facility.infrastructure.secondary")}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-lg p-8 shadow-lg"
            >
              <h3 className="text-2xl mb-6 text-center">{t("facility.highlights.title")}</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-primary-100 text-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <FaLeaf className="w-8 h-8" />
                  </div>
                  <h5 className="mb-2">{t("facility.highlights.biosecurity.title")}</h5>
                  <p className="text-sm text-neutral-600">
                    {t("facility.highlights.biosecurity.description")}
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-secondary-100 text-secondary-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <FaChartLine className="w-8 h-8" />
                  </div>
                  <h5 className="mb-2">{t("facility.highlights.ai.title")}</h5>
                  <p className="text-sm text-neutral-600">
                    {t("facility.highlights.ai.description")}
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-accent-100 text-accent-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <FaWater className="w-8 h-8" />
                  </div>
                  <h5 className="mb-2">{t("facility.highlights.water.title")}</h5>
                  <p className="text-sm text-neutral-600">
                    {t("facility.highlights.water.description")}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Part of Vismar Aqua */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-8">
              <h2 className="mb-6">{t("vismar.title")}</h2>
              <p className="text-xl text-neutral-700 mb-8">
                {t("vismar.subtitle")}
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="card bg-gradient-to-br from-primary-50 to-secondary-50">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-primary text-white w-20 h-20 rounded-full flex items-center justify-center">
                  <FaGlobe className="w-10 h-10" />
                </div>
              </div>
              <p className="text-lg text-neutral-700 text-center leading-relaxed mb-6">
                {t("vismar.description")}
              </p>
              <ul className="space-y-3 max-w-2xl mx-auto">
                <li className="flex items-start gap-3">
                  <div className="bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-xs">✓</span>
                  </div>
                  <span className="text-neutral-700">
                    {t("vismar.benefit1")}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-xs">✓</span>
                  </div>
                  <span className="text-neutral-700">
                    {t("vismar.benefit2")}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-xs">✓</span>
                  </div>
                  <span className="text-neutral-700">
                    {t("vismar.benefit3")}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-xs">✓</span>
                  </div>
                  <span className="text-neutral-700">
                    {t("vismar.benefit4")}
                  </span>
                </li>
              </ul>
              <div className="text-center mt-8">
                <a
                  href="https://vismar-aqua.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary-700 font-semibold transition-colors"
                >
                  {t("vismar.learnMore")}
                  <FaArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-gradient-to-br from-primary via-primary-700 to-primary-900 text-white">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="text-white mb-6">{t("values.title")}</h2>
              <p className="text-xl text-secondary-100 max-w-3xl mx-auto">
                {t("values.subtitle")}
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="text-accent mb-4">{value.icon}</div>
                  <h4 className="text-white mb-3">{value.title}</h4>
                  <p className="text-secondary-100 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Photo Gallery Placeholder */}
      <section className="section-padding bg-neutral-100">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="mb-6">{t("gallery.title")}</h2>
              <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
                {t("gallery.subtitle")}
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {[
                { id: 1, key: "broodstock" },
                { id: 2, key: "maturation" },
                { id: 3, key: "larval" },
                { id: 4, key: "water" },
                { id: 5, key: "ai" },
                { id: 6, key: "exterior" },
              ].map((item) => (
                <motion.div
                  key={item.id}
                  variants={scaleIn}
                  className="relative h-64 rounded-lg overflow-hidden shadow-lg bg-gradient-to-br from-secondary/20 to-primary/20"
                >
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                    <FaWater className="w-16 h-16 text-secondary opacity-30 mb-4" />
                    <p className="text-primary font-semibold">
                      {t("gallery.photoComingSoon")}
                    </p>
                    <p className="text-sm text-neutral-600 mt-2">
                      {t(`gallery.items.${item.key}`)}
                    </p>
                  </div>
                </motion.div>
              ))}
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
            <h2 className="text-white mb-6">{t("cta.title")}</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
              {t("cta.subtitle")}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-primary hover:bg-neutral-100 font-semibold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
              >
                {t("cta.contact")}
              </Link>
              <Link
                href="/innovation"
                className="bg-primary hover:bg-primary-800 text-white font-semibold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 border-2 border-white/30"
              >
                {t("cta.innovation")}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
