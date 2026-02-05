"use client";

import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaLinkedin,
  FaTelegram,
  FaFacebook,
  FaGlobe,
  FaPaperPlane,
  FaWhatsapp,
  FaSpinner,
} from "react-icons/fa";
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

export default function ContactPage() {
  const t = useTranslations("contact");
  const [state, handleSubmit] = useForm("mreazlkk");

  const contactInfo = [
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      label: t("howToReach.email"),
      value: "neisatzaqua@gmail.com",
      link: "mailto:neisatzaqua@gmail.com",
      color: "bg-primary",
    },
    {
      icon: <FaPhone className="w-6 h-6" />,
      label: t("howToReach.phone"),
      value: "+380 67 502 4730",
      link: "tel:+380675024730",
      color: "bg-secondary",
    },
    {
      icon: <FaWhatsapp className="w-6 h-6" />,
      label: t("howToReach.whatsapp"),
      value: "+380 67 502 4730",
      link: "https://wa.me/380675024730",
      color: "bg-accent",
    },
    {
      icon: <FaMapMarkerAlt className="w-6 h-6" />,
      label: t("howToReach.address"),
      value: "Progresivka, Mykolaiv Region, Ukraine",
      link: "https://maps.google.com/?q=Progresivka,Mykolaiv,Ukraine",
      color: "bg-primary-700",
    },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="w-6 h-6" />,
      url: "#",
      color: "hover:text-[#0A66C2]",
    },
    {
      name: "Telegram",
      icon: <FaTelegram className="w-6 h-6" />,
      url: "#",
      color: "hover:text-[#0088cc]",
    },
    {
      name: "Facebook",
      icon: <FaFacebook className="w-6 h-6" />,
      url: "#",
      color: "hover:text-[#1877F2]",
    },
    {
      name: "Website",
      icon: <FaGlobe className="w-6 h-6" />,
      url: "https://www.neusatzaqua.com",
      color: "hover:text-secondary",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0B1F3F]">
      {/* Hero Section */}
      <section className="relative bg-[#0B1F3F] text-white section-padding">
        <div className="absolute inset-0 bg-[url('/water-texture.jpg')] opacity-10 bg-cover bg-center" />
        <div className="container-custom relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-[#2EC4B6]/20 backdrop-blur-sm p-4 rounded-full">
                <FaEnvelope className="w-16 h-16 text-[#2EC4B6]" />
              </div>
            </div>
            <h1 className="text-white mb-6">{t("hero.title")}</h1>
            <p className="text-xl md:text-2xl text-[#A9BDD8] leading-relaxed">
              {t("hero.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-padding bg-[#0B1F3F]">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <span className="font-mono uppercase tracking-widest text-[#2EC4B6] text-sm mb-4 block">
                {t("howToReach.label")}
              </span>
              <h2 className="mb-6 text-white">{t("howToReach.title")}</h2>
              <p className="text-xl text-[#A9BDD8] max-w-3xl mx-auto">
                {t("howToReach.subtitle")}
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  variants={scaleIn}
                  href={info.link}
                  target={info.label === t("howToReach.address") ? "_blank" : undefined}
                  rel={
                    info.label === t("howToReach.address")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="glass-card p-6 text-center hover:shadow-xl transition-all duration-300 group"
                >
                  <div
                    className={`bg-[#2EC4B6] text-[#0B1F3F] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                  >
                    {info.icon}
                  </div>
                  <h4 className="text-sm font-semibold text-[#A9BDD8] mb-2">
                    {info.label}
                  </h4>
                  <p className="text-white font-medium group-hover:text-[#2EC4B6] transition-colors">
                    {info.value}
                  </p>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section-padding bg-[#08162B]">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <span className="font-mono uppercase tracking-widest text-[#2EC4B6] text-sm mb-4 block">
                {t("form.label")}
              </span>
              <h2 className="mb-6 text-white">{t("form.title")}</h2>
              <p className="text-xl text-[#A9BDD8] max-w-3xl mx-auto">
                {t("form.subtitle")}
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div variants={fadeInUp} className="glass-card p-6">
                {state.succeeded ? (
                  <div className="text-center py-12">
                    <div className="bg-[#2EC4B6] text-[#0B1F3F] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <FaCheckCircle className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl mb-4 text-white">{t("form.thankYou.title")}</h3>
                    <p className="text-lg text-[#A9BDD8]">
                      {t("form.thankYou.message")}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
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
                        required
                        className="w-full px-4 py-3 border border-white/20 focus:ring-[#2EC4B6] bg-[#0B1F3F] text-white rounded-lg focus:ring-2 focus:border-transparent outline-none transition-all"
                        placeholder={t("form.placeholders.name")}
                        aria-label="Full name"
                        aria-required="true"
                      />
                      <ValidationError
                        prefix="Name"
                        field="name"
                        errors={state.errors}
                        className="text-red-400 text-sm mt-1"
                      />
                    </div>

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
                        required
                        className="w-full px-4 py-3 border border-white/20 focus:ring-[#2EC4B6] bg-[#0B1F3F] text-white rounded-lg focus:ring-2 focus:border-transparent outline-none transition-all"
                        placeholder={t("form.placeholders.email")}
                        aria-label="Email address"
                        aria-required="true"
                      />
                      <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                        className="text-red-400 text-sm mt-1"
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
                        className="w-full px-4 py-3 border border-white/20 bg-[#0B1F3F] text-white rounded-lg focus:ring-2 focus:ring-[#2EC4B6] focus:border-transparent outline-none transition-all"
                        placeholder={t("form.placeholders.phone")}
                        aria-label="Phone number"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-semibold text-white mb-2"
                      >
                        {t("form.fields.subject")} {t("form.fields.required")}
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        className="w-full px-4 py-3 border border-white/20 focus:ring-[#2EC4B6] bg-[#0B1F3F] text-white rounded-lg focus:ring-2 focus:border-transparent outline-none transition-all"
                        aria-label="Subject"
                        aria-required="true"
                      >
                        <option value="" className="bg-[#0B1F3F]">{t("form.subjects.placeholder")}</option>
                        <option value="general" className="bg-[#0B1F3F]">{t("form.subjects.general")}</option>
                        <option value="partnership" className="bg-[#0B1F3F]">{t("form.subjects.partnership")}</option>
                        <option value="research" className="bg-[#0B1F3F]">{t("form.subjects.research")}</option>
                        <option value="visit" className="bg-[#0B1F3F]">{t("form.subjects.visit")}</option>
                        <option value="media" className="bg-[#0B1F3F]">{t("form.subjects.media")}</option>
                        <option value="other" className="bg-[#0B1F3F]">{t("form.subjects.other")}</option>
                      </select>
                      <ValidationError
                        prefix="Subject"
                        field="subject"
                        errors={state.errors}
                        className="text-red-400 text-sm mt-1"
                      />
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
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-white/20 focus:ring-[#2EC4B6] bg-[#0B1F3F] text-white rounded-lg focus:ring-2 focus:border-transparent outline-none transition-all resize-none"
                        placeholder={t("form.placeholders.message")}
                        aria-label="Message"
                        aria-required="true"
                      />
                      <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                        className="text-red-400 text-sm mt-1"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={state.submitting}
                      className="w-full flex items-center justify-center gap-2 btn-accent disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {state.submitting ? (
                        <>
                          <FaSpinner className="w-5 h-5 animate-spin" />
                          {t("form.sending")}
                        </>
                      ) : (
                        <>
                          <FaPaperPlane className="w-5 h-5" />
                          {t("form.submit")}
                        </>
                      )}
                    </button>
                  </form>
                )}
              </motion.div>

              {/* Map Placeholder & Additional Info */}
              <motion.div variants={fadeInUp} className="space-y-6">
                {/* Map Placeholder */}
                <div className="glass-card p-6">
                  <h3 className="text-2xl mb-4 text-white">{t("location.title")}</h3>
                  <div className="relative h-64 bg-gradient-to-br from-[#2EC4B6]/10 to-[#2EC4B6]/5 rounded-lg overflow-hidden mb-4">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <FaMapMarkerAlt className="w-16 h-16 text-[#2EC4B6] mx-auto mb-3 opacity-50" />
                        <p className="text-[#A9BDD8] font-semibold">
                          {t("location.mapComingSoon")}
                        </p>
                        <p className="text-sm text-[#A9BDD8]/70 mt-2">
                          Progresivka, Mykolaiv Region, Ukraine
                        </p>
                      </div>
                    </div>
                  </div>
                  <a
                    href="https://maps.google.com/?q=Progresivka,Mykolaiv,Ukraine"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#2EC4B6] hover:text-[#2EC4B6]/80 font-semibold transition-colors"
                  >
                    <FaMapMarkerAlt className="w-5 h-5" />
                    {t("location.openInMaps")}
                  </a>
                </div>

                {/* Office Hours */}
                <div className="glass-card p-6">
                  <h3 className="text-2xl mb-4 text-white">{t("officeHours.title")}</h3>
                  <div className="space-y-2 text-[#A9BDD8]">
                    <div className="flex justify-between">
                      <span className="font-semibold">{t("officeHours.monday")}</span>
                      <span>{t("officeHours.mondayHours")}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">{t("officeHours.saturday")}</span>
                      <span>{t("officeHours.saturdayHours")}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">{t("officeHours.sunday")}</span>
                      <span>{t("officeHours.sundayHours")}</span>
                    </div>
                  </div>
                  <p className="text-sm text-[#A9BDD8]/70 mt-4">
                    {t("officeHours.note")}
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Media Links */}
      <section className="section-padding bg-[#0B1F3F]">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <span className="font-mono uppercase tracking-widest text-[#2EC4B6] text-sm mb-4 block">
                {t("social.label")}
              </span>
              <h2 className="mb-6 text-white">{t("social.title")}</h2>
              <p className="text-xl text-[#A9BDD8] max-w-3xl mx-auto">
                {t("social.subtitle")}
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex justify-center gap-6"
            >
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`glass-card p-4 rounded-full text-[#A9BDD8] hover:text-[#2EC4B6] transition-all duration-300 hover:shadow-lg hover:scale-110`}
                  aria-label={`${t("social.followLabel")} ${social.name}`}
                >
                  {social.icon}
                </a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
