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
    <main className="min-h-screen">
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
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary-700/85 to-primary-900/90 z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary-900/60 z-10"></div>
        </div>
        <div className="container-custom relative z-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-secondary/20 backdrop-blur-sm p-4 rounded-full">
                <FaBalanceScale className="w-16 h-16 text-secondary" />
              </div>
            </div>
            <h1 className="text-white mb-6">{t("hero.title")}</h1>
            <p className="text-xl md:text-2xl text-secondary-100 leading-relaxed mb-6">
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
              <h2 className="mb-6">{t("intro.title")}</h2>
              <p className="text-lg text-neutral-700 leading-relaxed">
                {t("intro.description")} <strong>{t("intro.horizonStrategy")}</strong>.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-br from-secondary-50 to-primary-50 rounded-lg p-8 text-center"
            >
              <FaDownload className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl mb-4">{t("intro.downloadTitle")}</h3>
              <p className="text-neutral-700 mb-6">
                {t("intro.downloadDescription")}
              </p>
              <a
                href="/GEP.pdf"
                download
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
              >
                <FaDownload className="w-5 h-5" />
                {t("intro.downloadCTA")}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Process-related Requirements */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="mb-6">{t("processRequirements.title")}</h2>
              <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
                {t("processRequirements.subtitle")}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {processRequirements.map((req, index) => (
                <motion.div key={index} variants={scaleIn} className="card">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
                      {req.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-xl">{req.title}</h4>
                        <span className="text-xs font-semibold px-3 py-1 bg-secondary text-white rounded-full">
                          {req.status}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-neutral-700 leading-relaxed">
                    {req.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Thematic Areas */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="mb-6">{t("thematicAreas.title")}</h2>
              <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
                {t("thematicAreas.subtitle")}
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
                <thead className="bg-gradient-to-r from-primary to-primary-700 text-white">
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
                      className={`border-b ${
                        index % 2 === 0 ? "bg-neutral-50" : "bg-white"
                      } hover:bg-secondary-50 transition-colors`}
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-start gap-3">
                          <div className="bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <span className="text-xs font-bold">{index + 1}</span>
                          </div>
                          <span className="font-semibold text-neutral-800">
                            {item.area}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-neutral-700">
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
      <section className="section-padding bg-gradient-to-br from-secondary-50 to-accent-50">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="mb-6">{t("governance.title")}</h2>
              <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
                {t("governance.subtitle")}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <motion.div variants={scaleIn} className="card">
                <FaUserTie className="w-12 h-12 text-primary mb-4" />
                <h4 className="text-xl mb-3">{t("governance.leadership.title")}</h4>
                <div className="space-y-2 text-neutral-700">
                  <p>
                    <strong>{t("governance.leadership.responsible")}</strong> {t("governance.leadership.responsibleName")}
                  </p>
                  <p>
                    <strong>{t("governance.leadership.officer")}</strong> {t("governance.leadership.officerName")}
                  </p>
                </div>
              </motion.div>

              <motion.div variants={scaleIn} className="card">
                <FaChartBar className="w-12 h-12 text-secondary mb-4" />
                <h4 className="text-xl mb-3">{t("governance.review.title")}</h4>
                <div className="space-y-2 text-neutral-700">
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
              className="bg-white rounded-lg p-8 shadow-lg"
            >
              <h3 className="text-2xl mb-6 text-center">
                {t("governance.monitoring.title")}
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-primary-100 text-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <FaChartBar className="w-8 h-8" />
                  </div>
                  <h5 className="mb-2">{t("governance.monitoring.dataAnalysis.title")}</h5>
                  <p className="text-sm text-neutral-600">
                    {t("governance.monitoring.dataAnalysis.description")}
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-secondary-100 text-secondary-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <FaGraduationCap className="w-8 h-8" />
                  </div>
                  <h5 className="mb-2">{t("governance.monitoring.training.title")}</h5>
                  <p className="text-sm text-neutral-600">
                    {t("governance.monitoring.training.description")}
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-accent-100 text-accent-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <FaBriefcase className="w-8 h-8" />
                  </div>
                  <h5 className="mb-2">{t("governance.monitoring.recruitment.title")}</h5>
                  <p className="text-sm text-neutral-600">
                    {t("governance.monitoring.recruitment.description")}
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-primary-100 text-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <FaLightbulb className="w-8 h-8" />
                  </div>
                  <h5 className="mb-2">{t("governance.monitoring.innovation.title")}</h5>
                  <p className="text-sm text-neutral-600">
                    {t("governance.monitoring.innovation.description")}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Horizon Europe Compliance Summary */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="mb-6">{t("compliance.title")}</h2>
              <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
                {t("compliance.subtitle")}
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="max-w-3xl mx-auto bg-gradient-to-br from-primary-50 to-secondary-50 rounded-lg p-8"
            >
              <div className="space-y-4">
                {complianceChecklist.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 bg-white rounded-lg p-4 shadow-sm"
                  >
                    <div className="bg-secondary text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                      <FaCheckCircle className="w-6 h-6" />
                    </div>
                    <span className="text-lg text-neutral-800 font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <div className="inline-flex items-center gap-2 bg-secondary text-white px-6 py-3 rounded-lg font-semibold text-lg">
                  <FaCheckCircle className="w-6 h-6" />
                  {t("compliance.badge")}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="mb-6">{t("contact.title")}</h2>
              <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
                {t("contact.subtitle")}
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="max-w-2xl mx-auto card text-center"
            >
              <div className="flex justify-center mb-6">
                <div className="bg-primary text-white w-20 h-20 rounded-full flex items-center justify-center">
                  <FaEnvelope className="w-10 h-10" />
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-neutral-600 mb-1">{t("contact.emailLabel")}</p>
                  <a
                    href="mailto:neusatzaqua@gmail.com"
                    className="text-xl text-primary hover:text-primary-700 font-semibold transition-colors"
                  >
                    neusatzaqua@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-sm text-neutral-600 mb-1">{t("contact.websiteLabel")}</p>
                  <a
                    href="https://www.neusatzaqua.com"
                    className="text-xl text-secondary hover:text-secondary-700 font-semibold transition-colors inline-flex items-center gap-2"
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
                href="/sustainability"
                className="bg-white text-primary hover:bg-neutral-100 font-semibold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
              >
                {t("cta.sustainability")}
              </Link>
              <Link
                href="/partnerships"
                className="bg-primary hover:bg-primary-800 text-white font-semibold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 border-2 border-white/30"
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
