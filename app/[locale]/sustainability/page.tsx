"use client";

import { motion } from "framer-motion";
import {
  FaLeaf,
  FaRecycle,
  FaUsers,
  FaChartLine,
  FaEye,
  FaClipboardCheck,
  FaAward,
  FaHandshake,
  FaGlobeAmericas,
  FaHeart,
  FaSeedling,
  FaShieldAlt,
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

export default function SustainabilityPage() {
  const t = useTranslations("sustainability");

  const commitments = [
    {
      icon: <FaHeart className="w-8 h-8" />,
      title: t("commitment.animalWelfare.title"),
      description: t("commitment.animalWelfare.description"),
      highlights: t.raw("commitment.animalWelfare.highlights") as string[],
    },
    {
      icon: <FaRecycle className="w-8 h-8" />,
      title: t("commitment.circularEconomy.title"),
      description: t("commitment.circularEconomy.description"),
      highlights: t.raw("commitment.circularEconomy.highlights") as string[],
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: t("commitment.localEmployment.title"),
      description: t("commitment.localEmployment.description"),
      highlights: t.raw("commitment.localEmployment.highlights") as string[],
    },
  ];

  const metrics = [
    {
      icon: <FaChartLine className="w-10 h-10" />,
      value: t("metrics.productivity.value"),
      label: t("metrics.productivity.label"),
      description: t("metrics.productivity.description"),
      color: "bg-primary",
    },
    {
      icon: <FaEye className="w-10 h-10" />,
      value: t("metrics.observation.value"),
      label: t("metrics.observation.label"),
      description: t("metrics.observation.description"),
      color: "bg-secondary",
    },
    {
      icon: <FaClipboardCheck className="w-10 h-10" />,
      value: t("metrics.transparency.value"),
      label: t("metrics.transparency.label"),
      description: t("metrics.transparency.description"),
      color: "bg-accent",
    },
  ];

  const environmentalImpacts = [
    {
      icon: <FaSeedling className="w-8 h-8" />,
      title: t("environmental.waterConservation.title"),
      description: t("environmental.waterConservation.description"),
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: t("environmental.biosecurity.title"),
      description: t("environmental.biosecurity.description"),
    },
    {
      icon: <FaLeaf className="w-8 h-8" />,
      title: t("environmental.carbon.title"),
      description: t("environmental.carbon.description"),
    },
    {
      icon: <FaGlobeAmericas className="w-8 h-8" />,
      title: t("environmental.ecosystem.title"),
      description: t("environmental.ecosystem.description"),
    },
  ];

  const certifications = [
    {
      title: t("certifications.horizon.title"),
      description: t("certifications.horizon.description"),
    },
    {
      title: t("certifications.asc.title"),
      description: t("certifications.asc.description"),
    },
    {
      title: t("certifications.iso.title"),
      description: t("certifications.iso.description"),
    },
    {
      title: t("certifications.traceability.title"),
      description: t("certifications.traceability.description"),
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
            <div className="flex justify-center mb-6">
              <div className="bg-secondary/20 backdrop-blur-sm p-4 rounded-full">
                <FaLeaf className="w-16 h-16 text-secondary" />
              </div>
            </div>
            <h1 className="text-white mb-6">{t("hero.title")}</h1>
            <p className="text-xl md:text-2xl text-secondary-100 leading-relaxed">
              {t("hero.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="mb-6">{t("commitment.title")}</h2>
              <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
                {t("commitment.subtitle")}
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {commitments.map((commitment, index) => (
                <motion.div key={index} variants={scaleIn} className="card">
                  <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    {commitment.icon}
                  </div>
                  <h3 className="text-2xl mb-4">{commitment.title}</h3>
                  <p className="text-neutral-700 mb-6 leading-relaxed">
                    {commitment.description}
                  </p>
                  <ul className="space-y-2">
                    {commitment.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="bg-secondary text-white w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs">✓</span>
                        </div>
                        <span className="text-sm text-neutral-600">
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="section-padding bg-gradient-to-br from-secondary-50 to-primary-50">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="mb-6">{t("metrics.title")}</h2>
              <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
                {t("metrics.subtitle")}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="card text-center"
                >
                  <div
                    className={`${metric.color} text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6`}
                  >
                    {metric.icon}
                  </div>
                  <div className="text-5xl font-bold text-primary mb-2">
                    {metric.value}
                  </div>
                  <h4 className="text-xl mb-4">{metric.label}</h4>
                  <p className="text-neutral-600 leading-relaxed">
                    {metric.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Environmental Impact */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="mb-6">{t("environmental.title")}</h2>
              <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
                {t("environmental.subtitle")}
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-8">
              {environmentalImpacts.map((impact, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex gap-6 p-6 rounded-lg bg-gradient-to-br from-primary-50 to-secondary-50 hover:shadow-lg transition-shadow"
                >
                  <div className="bg-primary text-white w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0">
                    {impact.icon}
                  </div>
                  <div>
                    <h4 className="text-xl mb-3">{impact.title}</h4>
                    <p className="text-neutral-700 leading-relaxed">
                      {impact.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Community & Employment */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="mb-6">{t("community.title")}</h2>
              <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
                {t("community.subtitle")}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div variants={fadeInUp} className="card">
                <div className="bg-secondary text-white w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <FaUsers className="w-8 h-8" />
                </div>
                <h3 className="text-2xl mb-4">{t("community.employment.title")}</h3>
                <p className="text-neutral-700 mb-4 leading-relaxed">
                  {t("community.employment.description")}
                </p>
                <ul className="space-y-2">
                  {(t.raw("community.employment.highlights") as string[]).map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="bg-secondary text-white w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs">✓</span>
                      </div>
                      <span className="text-sm text-neutral-600">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div variants={fadeInUp} className="card">
                <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <FaHandshake className="w-8 h-8" />
                </div>
                <h3 className="text-2xl mb-4">{t("community.engagement.title")}</h3>
                <p className="text-neutral-700 mb-4 leading-relaxed">
                  {t("community.engagement.description")}
                </p>
                <ul className="space-y-2">
                  {(t.raw("community.engagement.highlights") as string[]).map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="bg-primary text-white w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs">✓</span>
                      </div>
                      <span className="text-sm text-neutral-600">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications & Standards */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="mb-6">{t("certifications.title")}</h2>
              <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
                {t("certifications.subtitle")}
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="card flex items-start gap-4"
                >
                  <div className="bg-accent text-white w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaAward className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg mb-2">{cert.title}</h4>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeInUp}
              className="mt-12 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-lg p-8 text-center"
            >
              <FaClipboardCheck className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl mb-4">{t("certifications.transparencyCommitment.title")}</h3>
              <p className="text-lg text-neutral-700 max-w-2xl mx-auto leading-relaxed">
                {t("certifications.transparencyCommitment.description")}
              </p>
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
                href="/gender-equality"
                className="bg-primary hover:bg-primary-800 text-white font-semibold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 border-2 border-white/30"
              >
                {t("cta.gep")}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
