"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaDownload,
  FaUserTie,
  FaChartBar,
  FaGraduationCap,
  FaBalanceScale,
  FaBriefcase,
  FaLightbulb,
  FaCheckCircle,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";

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

export default function GenderEqualityPage() {
  const t = useTranslations("genderEquality");

  const processRequirements = [
    {
      icon: <FaDownload className="w-8 h-8" />,
      title: t("processRequirements.publicGEP.title"),
      description: t("processRequirements.publicGEP.description"),
      status: t("processRequirements.publicGEP.status"),
    },
    {
      icon: <FaUserTie className="w-8 h-8" />,
      title: t("processRequirements.dedicatedResources.title"),
      description: t("processRequirements.dedicatedResources.description"),
      status: t("processRequirements.dedicatedResources.status"),
    },
    {
      icon: <FaChartBar className="w-8 h-8" />,
      title: t("processRequirements.dataCollection.title"),
      description: t("processRequirements.dataCollection.description"),
      status: t("processRequirements.dataCollection.status"),
    },
    {
      icon: <FaGraduationCap className="w-8 h-8" />,
      title: t("processRequirements.training.title"),
      description: t("processRequirements.training.description"),
      status: t("processRequirements.training.status"),
    },
  ];

  const thematicAreas = [
    {
      area: t("thematicAreas.areas.workLife.area"),
      measures: t("thematicAreas.areas.workLife.measures"),
    },
    {
      area: t("thematicAreas.areas.leadership.area"),
      measures: t("thematicAreas.areas.leadership.measures"),
    },
    {
      area: t("thematicAreas.areas.recruitment.area"),
      measures: t("thematicAreas.areas.recruitment.measures"),
    },
    {
      area: t("thematicAreas.areas.research.area"),
      measures: t("thematicAreas.areas.research.measures"),
    },
    {
      area: t("thematicAreas.areas.prevention.area"),
      measures: t("thematicAreas.areas.prevention.measures"),
    },
  ];

  const complianceChecklist = t.raw("compliance.checklist") as string[];

  return (
    <main className="min-h-screen bg-[#0B1F3F]">
      {/* Hero Section */}
      <section className="relative text-white section-padding min-h-[600px]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/neusatz-aqua-hero-bg.png"
            alt="Female scientist in laboratory - Gender Equality"
            fill
            className="object-cover"
            priority
            quality={90}
            sizes="100vw"
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3F]/90 via-[#0B1F3F]/85 to-[#122A4D]/90 z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0B1F3F]/60 z-10"></div>
        </div>
        <div className="container-custom relative z-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-[#2EC4B6]/20 backdrop-blur-sm p-4 rounded-full">
                <FaBalanceScale className="w-16 h-16 text-[#2EC4B6]" />
              </div>
            </div>
            <h1 className="text-white mb-6">{t("hero.title")}</h1>
            <p className="text-xl md:text-2xl text-[#A9BDD8] leading-relaxed mb-6">
              {t("hero.subtitle")}
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 inline-block">
              <p className="text-lg text-white">
                <strong>{t("hero.approvedBy")}</strong> {t("hero.ceo")}
                <br />
                <strong>{t("hero.date")}</strong> {t("hero.dateValue")}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-[#0B1F3F]">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <p className="font-mono uppercase tracking-widest text-[#2EC4B6] text-sm mb-4">{t("intro.label")}</p>
              <h2 className="text-white mb-6">{t("intro.title")}</h2>
              <p className="text-lg text-[#A9BDD8] leading-relaxed">
                {t("intro.description")} <strong>{t("intro.horizonStrategy")}</strong>.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="glass-panel rounded-lg p-8 text-center"
            >
              <FaDownload className="w-12 h-12 text-[#2EC4B6] mx-auto mb-4" />
              <h3 className="text-2xl text-white mb-4">{t("intro.downloadTitle")}</h3>
              <p className="text-[#A9BDD8] mb-6">
                {t("intro.downloadDescription")}
              </p>
              <a
                href="/GEP.pdf"
                download
                className="btn-accent inline-flex items-center gap-2"
              >
                <FaDownload className="w-5 h-5" />
                {t("intro.downloadCTA")}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Process-related Requirements */}
      <section className="section-padding bg-[#08162B]">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <p className="font-mono uppercase tracking-widest text-[#2EC4B6] text-sm mb-4">{t("processRequirements.label")}</p>
              <h2 className="text-white mb-6">{t("processRequirements.title")}</h2>
              <p className="text-xl text-[#A9BDD8] max-w-3xl mx-auto">
                {t("processRequirements.subtitle")}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {processRequirements.map((req, index) => (
                <motion.div key={index} variants={scaleIn} className="glass-card p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-[#2EC4B6] text-[#0B1F3F] w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
                      {req.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-xl text-white">{req.title}</h4>
                        <span className="text-xs font-semibold px-3 py-1 bg-[#2EC4B6] text-[#0B1F3F] rounded-full">
                          {req.status}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-[#A9BDD8] leading-relaxed">
                    {req.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Thematic Areas */}
      <section className="section-padding bg-[#0B1F3F]">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <p className="font-mono uppercase tracking-widest text-[#2EC4B6] text-sm mb-4">{t("thematicAreas.label")}</p>
              <h2 className="text-white mb-6">{t("thematicAreas.title")}</h2>
              <p className="text-xl text-[#A9BDD8] max-w-3xl mx-auto">
                {t("thematicAreas.subtitle")}
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="overflow-x-auto">
              <table className="w-full glass-card rounded-lg overflow-hidden">
                <thead className="bg-[#122A4D] text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold">
                      {t("thematicAreas.tableHeaders.area")}
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">
                      {t("thematicAreas.tableHeaders.measures")}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {thematicAreas.map((item, index) => (
                    <tr
                      key={index}
                      className={`border-b border-white/10 ${
                        index % 2 === 0 ? "bg-white/[0.03]" : "bg-transparent"
                      } hover:bg-[#2EC4B6]/10 transition-colors`}
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-start gap-3">
                          <div className="bg-[#2EC4B6] text-[#0B1F3F] w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <span className="text-xs font-bold">{index + 1}</span>
                          </div>
                          <span className="font-semibold text-white">
                            {item.area}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-[#A9BDD8]">
                        {item.measures}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Governance & Accountability */}
      <section className="section-padding bg-[#122A4D]">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <p className="font-mono uppercase tracking-widest text-[#2EC4B6] text-sm mb-4">{t("governance.label")}</p>
              <h2 className="text-white mb-6">{t("governance.title")}</h2>
              <p className="text-xl text-[#A9BDD8] max-w-3xl mx-auto">
                {t("governance.subtitle")}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <motion.div variants={scaleIn} className="glass-card p-6">
                <FaUserTie className="w-12 h-12 text-[#2EC4B6] mb-4" />
                <h4 className="text-xl text-white mb-3">{t("governance.leadership.title")}</h4>
                <div className="space-y-2 text-[#A9BDD8]">
                  <p>
                    <strong>{t("governance.leadership.responsible")}</strong> {t("governance.leadership.responsibleName")}
                  </p>
                  <p>
                    <strong>{t("governance.leadership.officer")}</strong> {t("governance.leadership.officerName")}
                  </p>
                </div>
              </motion.div>

              <motion.div variants={scaleIn} className="glass-card p-6">
                <FaChartBar className="w-12 h-12 text-[#2EC4B6] mb-4" />
                <h4 className="text-xl text-white mb-3">{t("governance.review.title")}</h4>
                <div className="space-y-2 text-[#A9BDD8]">
                  <p>
                    <strong>{t("governance.review.cycle")}</strong> {t("governance.review.cycleValue")}
                  </p>
                  <p>
                    <strong>{t("governance.review.next")}</strong> {t("governance.review.nextValue")}
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              variants={fadeInUp}
              className="glass-panel rounded-lg p-8"
            >
              <h3 className="text-2xl text-white mb-6 text-center">
                {t("governance.monitoring.title")}
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-[#2EC4B6]/20 text-[#2EC4B6] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <FaChartBar className="w-8 h-8" />
                  </div>
                  <h5 className="text-white mb-2">{t("governance.monitoring.dataAnalysis.title")}</h5>
                  <p className="text-sm text-[#A9BDD8]">
                    {t("governance.monitoring.dataAnalysis.description")}
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-[#2EC4B6]/20 text-[#2EC4B6] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <FaGraduationCap className="w-8 h-8" />
                  </div>
                  <h5 className="text-white mb-2">{t("governance.monitoring.training.title")}</h5>
                  <p className="text-sm text-[#A9BDD8]">
                    {t("governance.monitoring.training.description")}
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-[#2EC4B6]/20 text-[#2EC4B6] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <FaBriefcase className="w-8 h-8" />
                  </div>
                  <h5 className="text-white mb-2">{t("governance.monitoring.recruitment.title")}</h5>
                  <p className="text-sm text-[#A9BDD8]">
                    {t("governance.monitoring.recruitment.description")}
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-[#2EC4B6]/20 text-[#2EC4B6] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <FaLightbulb className="w-8 h-8" />
                  </div>
                  <h5 className="text-white mb-2">{t("governance.monitoring.innovation.title")}</h5>
                  <p className="text-sm text-[#A9BDD8]">
                    {t("governance.monitoring.innovation.description")}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Horizon Europe Compliance Summary */}
      <section className="section-padding bg-[#0B1F3F]">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <p className="font-mono uppercase tracking-widest text-[#2EC4B6] text-sm mb-4">{t("compliance.label")}</p>
              <h2 className="text-white mb-6">{t("compliance.title")}</h2>
              <p className="text-xl text-[#A9BDD8] max-w-3xl mx-auto">
                {t("compliance.subtitle")}
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="max-w-3xl mx-auto glass-panel rounded-lg p-8"
            >
              <div className="space-y-4">
                {complianceChecklist.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 glass-card rounded-lg p-4"
                  >
                    <div className="bg-[#2EC4B6] text-[#0B1F3F] w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                      <FaCheckCircle className="w-6 h-6" />
                    </div>
                    <span className="text-lg text-white font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <div className="inline-flex items-center gap-2 bg-[#2EC4B6] text-[#0B1F3F] px-6 py-3 rounded-lg font-semibold text-lg">
                  <FaCheckCircle className="w-6 h-6" />
                  {t("compliance.badge")}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-[#08162B]">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <p className="font-mono uppercase tracking-widest text-[#2EC4B6] text-sm mb-4">{t("contact.label")}</p>
              <h2 className="text-white mb-6">{t("contact.title")}</h2>
              <p className="text-xl text-[#A9BDD8] max-w-3xl mx-auto">
                {t("contact.subtitle")}
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="max-w-2xl mx-auto glass-card p-6 text-center"
            >
              <div className="flex justify-center mb-6">
                <div className="bg-[#2EC4B6] text-[#0B1F3F] w-20 h-20 rounded-full flex items-center justify-center">
                  <FaEnvelope className="w-10 h-10" />
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-[#A9BDD8] mb-1">{t("contact.emailLabel")}</p>
                  <a
                    href="mailto:neusatzaqua@gmail.com"
                    className="text-xl text-[#2EC4B6] hover:text-[#2EC4B6]/80 font-semibold transition-colors"
                  >
                    neusatzaqua@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-sm text-[#A9BDD8] mb-1">{t("contact.websiteLabel")}</p>
                  <a
                    href="https://www.neusatzaqua.com"
                    className="text-xl text-[#2EC4B6] hover:text-[#2EC4B6]/80 font-semibold transition-colors inline-flex items-center gap-2"
                  >
                    <FaGlobe className="w-5 h-5" />
                    www.neusatzaqua.com
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#2EC4B6]">
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
                href="/sustainability"
                className="bg-[#0B1F3F] text-white hover:bg-[#0B1F3F]/90 font-semibold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
              >
                {t("cta.sustainability")}
              </Link>
              <Link
                href="/partnerships"
                className="bg-white text-[#0B1F3F] hover:bg-white/90 font-semibold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
              >
                {t("cta.partnerships")}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
