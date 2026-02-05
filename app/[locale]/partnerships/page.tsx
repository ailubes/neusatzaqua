"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaHandshake,
  FaUniversity,
  FaFlask,
  FaGlobeEurope,
  FaLightbulb,
  FaChartLine,
  FaUsers,
  FaSeedling,
  FaRocket,
  FaCheckCircle,
  FaEnvelope,
  FaPhone,
  FaPaperPlane,
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

export default function PartnershipsPage() {
  const t = useTranslations("partnerships");

  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    partnershipType: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    setFormStatus("success");
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormStatus("idle");
      setFormData({
        name: "",
        organization: "",
        email: "",
        phone: "",
        partnershipType: "",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const currentPartners = [
    {
      name: t("currentPartners.awi.name"),
      location: t("currentPartners.awi.location"),
      description: t("currentPartners.awi.description"),
      focus: t("currentPartners.awi.focus"),
      icon: <FaUniversity className="w-8 h-8" />,
      color: "bg-aqua",
    },
    {
      name: t("currentPartners.shrimpwiz.name"),
      location: t("currentPartners.shrimpwiz.location"),
      description: t("currentPartners.shrimpwiz.description"),
      focus: t("currentPartners.shrimpwiz.focus"),
      icon: <FaRocket className="w-8 h-8" />,
      color: "bg-aqua",
    },
    {
      name: t("currentPartners.horizon.name"),
      location: t("currentPartners.horizon.location"),
      description: t("currentPartners.horizon.description"),
      focus: t("currentPartners.horizon.focus"),
      icon: <FaGlobeEurope className="w-8 h-8" />,
      color: "bg-aqua",
    },
  ];

  const collaborationOpportunities = [
    {
      icon: <FaFlask className="w-8 h-8" />,
      title: t("opportunities.research.title"),
      description: t("opportunities.research.description"),
      benefits: t.raw("opportunities.research.benefits") as string[],
    },
    {
      icon: <FaLightbulb className="w-8 h-8" />,
      title: t("opportunities.technology.title"),
      description: t("opportunities.technology.description"),
      benefits: t.raw("opportunities.technology.benefits") as string[],
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: t("opportunities.academic.title"),
      description: t("opportunities.academic.description"),
      benefits: t.raw("opportunities.academic.benefits") as string[],
    },
    {
      icon: <FaSeedling className="w-8 h-8" />,
      title: t("opportunities.supplyChain.title"),
      description: t("opportunities.supplyChain.description"),
      benefits: t.raw("opportunities.supplyChain.benefits") as string[],
    },
  ];

  const partnershipBenefits = [
    {
      icon: <FaChartLine className="w-6 h-6" />,
      title: t("benefits.innovation.title"),
      description: t("benefits.innovation.description"),
    },
    {
      icon: <FaUniversity className="w-6 h-6" />,
      title: t("benefits.network.title"),
      description: t("benefits.network.description"),
    },
    {
      icon: <FaGlobeEurope className="w-6 h-6" />,
      title: t("benefits.euPrograms.title"),
      description: t("benefits.euPrograms.description"),
    },
    {
      icon: <FaSeedling className="w-6 h-6" />,
      title: t("benefits.sustainability.title"),
      description: t("benefits.sustainability.description"),
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy via-navy-light to-navy text-white section-padding">
        <div className="absolute inset-0 bg-[url('/water-texture.jpg')] opacity-10 bg-cover bg-center" />
        <div className="container-custom relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-aqua/20 backdrop-blur-sm p-4 rounded-full">
                <FaHandshake className="w-16 h-16 text-aqua" />
              </div>
            </div>
            <h1 className="text-white mb-6">{t("hero.title")}</h1>
            <p className="text-xl md:text-2xl text-slate-blue leading-relaxed">
              {t("hero.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="section-padding bg-navy">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="text-white mb-6">{t("currentPartners.title")}</h2>
              <p className="text-xl text-slate-blue max-w-3xl mx-auto">
                {t("currentPartners.subtitle")}
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {currentPartners.map((partner, index) => (
                <motion.div key={index} variants={scaleIn} className="glass-card p-6">
                  <div
                    className={`${partner.color} text-navy w-16 h-16 rounded-full flex items-center justify-center mb-6`}
                  >
                    {partner.icon}
                  </div>
                  <h3 className="text-2xl text-white mb-2">{partner.name}</h3>
                  <p className="text-sm text-slate-blue mb-4">
                    {partner.location}
                  </p>
                  <p className="text-slate-blue mb-4 leading-relaxed">
                    {partner.description}
                  </p>
                  <div className="bg-navy-light rounded-lg p-3 border border-white/15">
                    <p className="text-sm font-semibold text-aqua">
                      {t("currentPartners.focusLabel")} {partner.focus}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Collaboration Opportunities */}
      <section className="section-padding bg-navy-light">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="text-white mb-6">{t("opportunities.title")}</h2>
              <p className="text-xl text-slate-blue max-w-3xl mx-auto">
                {t("opportunities.subtitle")}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {collaborationOpportunities.map((opportunity, index) => (
                <motion.div key={index} variants={fadeInUp} className="glass-card p-6">
                  <div className="bg-aqua text-navy w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    {opportunity.icon}
                  </div>
                  <h3 className="text-2xl text-white mb-4">{opportunity.title}</h3>
                  <p className="text-slate-blue mb-6 leading-relaxed">
                    {opportunity.description}
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-aqua mb-3">
                      {t("opportunities.benefitsLabel")}
                    </p>
                    {opportunity.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="bg-aqua text-navy w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs">✓</span>
                        </div>
                        <span className="text-sm text-slate-blue">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits of Partnering */}
      <section className="section-padding bg-navy">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="text-white mb-6">{t("benefits.title")}</h2>
              <p className="text-xl text-slate-blue max-w-3xl mx-auto">
                {t("benefits.subtitle")}
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {partnershipBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="glass-card p-6 text-center"
                >
                  <div className="bg-aqua/20 text-aqua w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <h4 className="text-lg text-white mb-2">{benefit.title}</h4>
                  <p className="text-sm text-slate-blue">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partnership Inquiry Form */}
      <section className="section-padding bg-navy-light">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="text-white mb-6">{t("form.title")}</h2>
              <p className="text-xl text-slate-blue max-w-3xl mx-auto">
                {t("form.subtitle")}
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="max-w-3xl mx-auto glass-card p-6"
            >
              {formStatus === "success" ? (
                <div className="text-center py-12">
                  <div className="bg-aqua text-navy w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FaCheckCircle className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl text-white mb-4">{t("form.thankYou.title")}</h3>
                  <p className="text-lg text-slate-blue">
                    {t("form.thankYou.message")}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-white mb-2"
                      >
                        {t("form.fields.name")} {t("form.fields.required")}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-navy border border-white/20 rounded-lg focus:ring-2 focus:ring-aqua focus:border-transparent outline-none transition-all text-white placeholder-slate-blue/50"
                        placeholder={t("form.placeholders.name")}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="organization"
                        className="block text-sm font-semibold text-white mb-2"
                      >
                        {t("form.fields.organization")} {t("form.fields.required")}
                      </label>
                      <input
                        type="text"
                        id="organization"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-navy border border-white/20 rounded-lg focus:ring-2 focus:ring-aqua focus:border-transparent outline-none transition-all text-white placeholder-slate-blue/50"
                        placeholder={t("form.placeholders.organization")}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-white mb-2"
                      >
                        {t("form.fields.email")} {t("form.fields.required")}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-navy border border-white/20 rounded-lg focus:ring-2 focus:ring-aqua focus:border-transparent outline-none transition-all text-white placeholder-slate-blue/50"
                        placeholder={t("form.placeholders.email")}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-semibold text-white mb-2"
                      >
                        {t("form.fields.phone")}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-navy border border-white/20 rounded-lg focus:ring-2 focus:ring-aqua focus:border-transparent outline-none transition-all text-white placeholder-slate-blue/50"
                        placeholder={t("form.placeholders.phone")}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="partnershipType"
                      className="block text-sm font-semibold text-white mb-2"
                    >
                      {t("form.fields.partnershipType")} {t("form.fields.required")}
                    </label>
                    <select
                      id="partnershipType"
                      name="partnershipType"
                      value={formData.partnershipType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-navy border border-white/20 rounded-lg focus:ring-2 focus:ring-aqua focus:border-transparent outline-none transition-all text-white"
                    >
                      <option value="" className="bg-navy">{t("form.partnershipTypes.placeholder")}</option>
                      <option value="research" className="bg-navy">{t("form.partnershipTypes.research")}</option>
                      <option value="technology" className="bg-navy">{t("form.partnershipTypes.technology")}</option>
                      <option value="academic" className="bg-navy">{t("form.partnershipTypes.academic")}</option>
                      <option value="supply-chain" className="bg-navy">{t("form.partnershipTypes.supplyChain")}</option>
                      <option value="other" className="bg-navy">{t("form.partnershipTypes.other")}</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-white mb-2"
                    >
                      {t("form.fields.message")} {t("form.fields.required")}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-navy border border-white/20 rounded-lg focus:ring-2 focus:ring-aqua focus:border-transparent outline-none transition-all resize-none text-white placeholder-slate-blue/50"
                      placeholder={t("form.placeholders.message")}
                    />
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 bg-aqua hover:bg-aqua/90 text-navy font-semibold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
                    >
                      <FaPaperPlane className="w-5 h-5" />
                      {t("form.submit")}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-12 text-center"
            >
              <p className="text-lg text-slate-blue mb-6">
                {t("form.directContact")}
              </p>
              <div className="flex flex-wrap justify-center gap-8">
                <a
                  href="mailto:neisatzaqua@gmail.com"
                  className="flex items-center gap-3 text-aqua hover:text-aqua/80 transition-colors"
                >
                  <FaEnvelope className="w-6 h-6" />
                  <span className="font-semibold">neisatzaqua@gmail.com</span>
                </a>
                <a
                  href="tel:+380675024730"
                  className="flex items-center gap-3 text-aqua hover:text-aqua/80 transition-colors"
                >
                  <FaPhone className="w-6 h-6" />
                  <span className="font-semibold">+380 67 502 4730</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-aqua via-aqua/80 to-navy">
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
                href="/innovation"
                className="bg-white text-navy hover:bg-white/90 font-semibold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
              >
                {t("cta.innovation")}
              </Link>
              <Link
                href="/sustainability"
                className="bg-navy hover:bg-navy-light text-white font-semibold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 border-2 border-white/30"
              >
                {t("cta.sustainability")}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
