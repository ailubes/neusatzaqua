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
import Image from "next/image";

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
    <main className="min-h-screen bg-[#0B1F3F]">
      {/* Hero Section */}
      <section className="relative bg-[#0B1F3F] text-white py-24 lg:py-36">
        <div className="absolute inset-0 opacity-10">
          <Image src="/hero_underwater.jpg" alt="" fill className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1F3F]/80 to-[#0B1F3F]" />
        <div className="container-custom relative z-10 px-6 lg:px-[7vw]">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="mono-label text-[#2EC4B6] text-sm mb-6 block">ABOUT US</span>
            <h1 className="text-white mb-6 text-4xl md:text-5xl lg:text-6xl font-semibold"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              {t("hero.title")}
            </h1>
            <p className="text-xl md:text-2xl text-[#A9BDD8] leading-relaxed">
              {t("hero.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 lg:py-32 bg-[#0B1F3F]">
        <div className="container-custom px-6 lg:px-[7vw]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeInUp}>
              <span className="mono-label text-[#2EC4B6] text-sm mb-4 block">WHO WE ARE</span>
              <h2 className="text-white mb-6 text-3xl md:text-4xl font-semibold"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                {t("whoWeAre.title")}
              </h2>
              <p className="text-lg text-[#A9BDD8] mb-4 leading-relaxed">
                {t("whoWeAre.paragraph1")}
              </p>
              <p className="text-lg text-[#A9BDD8] mb-4 leading-relaxed">
                {t("whoWeAre.paragraph2")}
              </p>
              <p className="text-lg text-[#A9BDD8] leading-relaxed">
                {t("whoWeAre.paragraph3")}
              </p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="relative h-[400px] rounded-[18px] overflow-hidden glass-card"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#2EC4B6]/20 to-[#0B1F3F]/40 flex items-center justify-center">
                <FaWater className="w-32 h-32 text-[#2EC4B6] opacity-30" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-white text-center px-8 font-semibold text-xl">
                  {t("whoWeAre.photoComingSoon")}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-32 bg-[#08162B]">
        <div className="container-custom px-6 lg:px-[7vw]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <span className="mono-label text-[#2EC4B6] text-sm mb-4 block">OUR PURPOSE</span>
              <h2 className="text-white mb-6 text-3xl md:text-4xl font-semibold"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                {t("mission.title")}
              </h2>
              <p className="text-xl text-[#A9BDD8] max-w-3xl mx-auto">
                {t("mission.subtitle")}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div variants={fadeInUp} className="glass-panel p-8">
                <div className="bg-[#2EC4B6]/10 border border-[#2EC4B6]/30 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <FaAward className="w-8 h-8 text-[#2EC4B6]" />
                </div>
                <h3 className="text-2xl text-white mb-4 font-semibold">{t("mission.missionTitle")}</h3>
                <p className="text-[#A9BDD8] leading-relaxed">
                  {t("mission.missionText")}
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="glass-panel p-8">
                <div className="bg-[#2EC4B6]/10 border border-[#2EC4B6]/30 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <FaLightbulb className="w-8 h-8 text-[#2EC4B6]" />
                </div>
                <h3 className="text-2xl text-white mb-4 font-semibold">{t("mission.visionTitle")}</h3>
                <p className="text-[#A9BDD8] leading-relaxed">
                  {t("mission.visionText")}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 lg:py-32 bg-[#0B1F3F]">
        <div className="container-custom px-6 lg:px-[7vw]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <span className="mono-label text-[#2EC4B6] text-sm mb-4 block">OUR JOURNEY</span>
              <h2 className="text-white mb-6 text-3xl md:text-4xl font-semibold"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                {t("story.title")}
              </h2>
              <p className="text-xl text-[#A9BDD8]">
                {t("story.subtitle")}
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-6">
              <div className="border-l-2 border-[#2EC4B6] pl-6 py-2">
                <h4 className="text-white mb-2 font-semibold">{t("story.beginning.title")}</h4>
                <p className="text-[#A9BDD8] leading-relaxed">
                  {t("story.beginning.text")}
                </p>
              </div>

              <div className="border-l-2 border-[#2EC4B6]/70 pl-6 py-2">
                <h4 className="text-white mb-2 font-semibold">{t("story.innovation.title")}</h4>
                <p className="text-[#A9BDD8] leading-relaxed">
                  {t("story.innovation.text")}
                </p>
              </div>

              <div className="border-l-2 border-[#2EC4B6]/50 pl-6 py-2">
                <h4 className="text-white mb-2 font-semibold">{t("story.vismar.title")}</h4>
                <p className="text-[#A9BDD8] leading-relaxed">
                  {t("story.vismar.text")}
                </p>
              </div>

              <div className="border-l-2 border-[#2EC4B6]/30 pl-6 py-2">
                <h4 className="text-white mb-2 font-semibold">{t("story.future.title")}</h4>
                <p className="text-[#A9BDD8] leading-relaxed">
                  {t("story.future.text")}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Facility */}
      <section className="py-20 lg:py-32 bg-[#08162B]">
        <div className="container-custom px-6 lg:px-[7vw]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <span className="mono-label text-[#2EC4B6] text-sm mb-4 block">OUR FACILITY</span>
              <h2 className="text-white mb-6 text-3xl md:text-4xl font-semibold"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                {t("facility.title")}
              </h2>
              <p className="text-xl text-[#A9BDD8] max-w-3xl mx-auto">
                {t("facility.subtitle")}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <motion.div variants={fadeInUp} className="glass-panel p-8">
                <div className="flex items-start gap-4">
                  <div className="bg-[#2EC4B6]/10 border border-[#2EC4B6]/30 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="w-6 h-6 text-[#2EC4B6]" />
                  </div>
                  <div>
                    <h4 className="text-white mb-2 font-semibold">{t("facility.location.title")}</h4>
                    <p className="text-[#A9BDD8]">
                      {t("facility.location.primary")}
                    </p>
                    <p className="text-sm text-[#A9BDD8]/70 mt-2">
                      {t("facility.location.secondary")}
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="glass-panel p-8">
                <div className="flex items-start gap-4">
                  <div className="bg-[#2EC4B6]/10 border border-[#2EC4B6]/30 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaWater className="w-6 h-6 text-[#2EC4B6]" />
                  </div>
                  <div>
                    <h4 className="text-white mb-2 font-semibold">{t("facility.infrastructure.title")}</h4>
                    <p className="text-[#A9BDD8]">
                      {t("facility.infrastructure.primary")}
                    </p>
                    <p className="text-sm text-[#A9BDD8]/70 mt-2">
                      {t("facility.infrastructure.secondary")}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              variants={fadeInUp}
              className="glass-panel p-8"
            >
              <h3 className="text-2xl text-white mb-8 text-center font-semibold">{t("facility.highlights.title")}</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-[#2EC4B6]/10 border border-[#2EC4B6]/30 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <FaLeaf className="w-8 h-8 text-[#2EC4B6]" />
                  </div>
                  <h5 className="text-white mb-2 font-semibold">{t("facility.highlights.biosecurity.title")}</h5>
                  <p className="text-sm text-[#A9BDD8]">
                    {t("facility.highlights.biosecurity.description")}
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-[#2EC4B6]/10 border border-[#2EC4B6]/30 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <FaChartLine className="w-8 h-8 text-[#2EC4B6]" />
                  </div>
                  <h5 className="text-white mb-2 font-semibold">{t("facility.highlights.ai.title")}</h5>
                  <p className="text-sm text-[#A9BDD8]">
                    {t("facility.highlights.ai.description")}
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-[#2EC4B6]/10 border border-[#2EC4B6]/30 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <FaWater className="w-8 h-8 text-[#2EC4B6]" />
                  </div>
                  <h5 className="text-white mb-2 font-semibold">{t("facility.highlights.water.title")}</h5>
                  <p className="text-sm text-[#A9BDD8]">
                    {t("facility.highlights.water.description")}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Part of Vismar Aqua */}
      <section className="py-20 lg:py-32 bg-[#0B1F3F]">
        <div className="container-custom px-6 lg:px-[7vw]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-8">
              <span className="mono-label text-[#2EC4B6] text-sm mb-4 block">OUR ECOSYSTEM</span>
              <h2 className="text-white mb-6 text-3xl md:text-4xl font-semibold"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                {t("vismar.title")}
              </h2>
              <p className="text-xl text-[#A9BDD8] mb-8">
                {t("vismar.subtitle")}
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="glass-panel p-8">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-[#2EC4B6]/10 border border-[#2EC4B6]/30 w-20 h-20 rounded-2xl flex items-center justify-center">
                  <FaGlobe className="w-10 h-10 text-[#2EC4B6]" />
                </div>
              </div>
              <p className="text-lg text-[#A9BDD8] text-center leading-relaxed mb-6">
                {t("vismar.description")}
              </p>
              <ul className="space-y-3 max-w-2xl mx-auto">
                <li className="flex items-start gap-3">
                  <div className="bg-[#2EC4B6]/20 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#2EC4B6] text-xs">✓</span>
                  </div>
                  <span className="text-[#A9BDD8]">
                    {t("vismar.benefit1")}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-[#2EC4B6]/20 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#2EC4B6] text-xs">✓</span>
                  </div>
                  <span className="text-[#A9BDD8]">
                    {t("vismar.benefit2")}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-[#2EC4B6]/20 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#2EC4B6] text-xs">✓</span>
                  </div>
                  <span className="text-[#A9BDD8]">
                    {t("vismar.benefit3")}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-[#2EC4B6]/20 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#2EC4B6] text-xs">✓</span>
                  </div>
                  <span className="text-[#A9BDD8]">
                    {t("vismar.benefit4")}
                  </span>
                </li>
              </ul>
              <div className="text-center mt-8">
                <a
                  href="https://vismar-aqua.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#2EC4B6] hover:text-[#3DD4C6] font-semibold transition-colors"
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
      <section className="py-20 lg:py-32 bg-[#08162B]">
        <div className="container-custom px-6 lg:px-[7vw]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <span className="mono-label text-[#2EC4B6] text-sm mb-4 block">PRINCIPLES</span>
              <h2 className="text-white mb-6 text-3xl md:text-4xl font-semibold"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                {t("values.title")}
              </h2>
              <p className="text-xl text-[#A9BDD8] max-w-3xl mx-auto">
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
                  className="glass-card p-6 hover:bg-white/[0.08] transition-all duration-300 group"
                >
                  <div className="text-[#2EC4B6] mb-4 group-hover:scale-110 transition-transform duration-300">{value.icon}</div>
                  <h4 className="text-white mb-3 font-semibold">{value.title}</h4>
                  <p className="text-[#A9BDD8] text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Photo Gallery Placeholder */}
      <section className="py-20 lg:py-32 bg-[#0B1F3F]">
        <div className="container-custom px-6 lg:px-[7vw]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <span className="mono-label text-[#2EC4B6] text-sm mb-4 block">GALLERY</span>
              <h2 className="text-white mb-6 text-3xl md:text-4xl font-semibold"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                {t("gallery.title")}
              </h2>
              <p className="text-xl text-[#A9BDD8] max-w-3xl mx-auto">
                {t("gallery.subtitle")}
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {[
                { id: 1, key: "broodstock", image: "/facility-broodstock.jpg" },
                { id: 2, key: "maturation", image: "/facility-maturation.jpg" },
                { id: 3, key: "larval", image: "/facility-larval.jpg" },
                { id: 4, key: "water", image: "/facility-water.jpg" },
                { id: 5, key: "ai", image: "/facility-ai.jpg" },
                { id: 6, key: "exterior", image: "/facility-exterior.jpg" },
              ].map((item) => (
                <motion.div
                  key={item.id}
                  variants={scaleIn}
                  className="relative h-64 rounded-[18px] overflow-hidden glass-card group"
                >
                  <Image
                    src={item.image}
                    alt={t(`gallery.items.${item.key}`)}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3F]/90 via-[#0B1F3F]/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-semibold text-lg">
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
      <section className="py-20 lg:py-32 bg-[#122A4D]">
        <div className="container-custom px-6 lg:px-[7vw]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center"
          >
            <h2 className="text-white mb-6 text-3xl md:text-4xl font-semibold"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              {t("cta.title")}
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-[#A9BDD8]">
              {t("cta.subtitle")}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center gap-2"
              >
                {t("cta.contact")}
              </Link>
              <Link
                href="/innovation"
                className="btn-outline inline-flex items-center gap-2"
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
