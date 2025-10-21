"use client";

import { motion } from "framer-motion";
import { useState } from "react";
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

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };

    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = t("form.errors.nameRequired");
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = t("form.errors.emailRequired");
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = t("form.errors.emailInvalid");
      isValid = false;
    }

    if (!formData.subject.trim()) {
      newErrors.subject = t("form.errors.subjectRequired");
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = t("form.errors.messageRequired");
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = t("form.errors.messageMinLength");
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Form submission logic would go here (e.g., send to API)
    setFormStatus("success");

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormStatus("idle");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setErrors({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

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
                <FaEnvelope className="w-16 h-16 text-secondary" />
              </div>
            </div>
            <h1 className="text-white mb-6">{t("hero.title")}</h1>
            <p className="text-xl md:text-2xl text-secondary-100 leading-relaxed">
              {t("hero.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="mb-6">{t("howToReach.title")}</h2>
              <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
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
                  className="card text-center hover:shadow-xl transition-all duration-300 group"
                >
                  <div
                    className={`${info.color} text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                  >
                    {info.icon}
                  </div>
                  <h4 className="text-sm font-semibold text-neutral-600 mb-2">
                    {info.label}
                  </h4>
                  <p className="text-neutral-800 font-medium group-hover:text-primary transition-colors">
                    {info.value}
                  </p>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section-padding bg-gradient-to-br from-secondary-50 to-primary-50">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="mb-6">{t("form.title")}</h2>
              <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
                {t("form.subtitle")}
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div variants={fadeInUp} className="card">
                {formStatus === "success" ? (
                  <div className="text-center py-12">
                    <div className="bg-secondary text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <FaCheckCircle className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl mb-4">{t("form.thankYou.title")}</h3>
                    <p className="text-lg text-neutral-700">
                      {t("form.thankYou.message")}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-neutral-700 mb-2"
                      >
                        {t("form.fields.name")} {t("form.fields.required")}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border ${
                          errors.name
                            ? "border-red-500 focus:ring-red-500"
                            : "border-neutral-300 focus:ring-primary"
                        } rounded-lg focus:ring-2 focus:border-transparent outline-none transition-all`}
                        placeholder={t("form.placeholders.name")}
                        aria-label="Full name"
                        aria-required="true"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-neutral-700 mb-2"
                      >
                        {t("form.fields.email")} {t("form.fields.required")}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border ${
                          errors.email
                            ? "border-red-500 focus:ring-red-500"
                            : "border-neutral-300 focus:ring-primary"
                        } rounded-lg focus:ring-2 focus:border-transparent outline-none transition-all`}
                        placeholder={t("form.placeholders.email")}
                        aria-label="Email address"
                        aria-required="true"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-semibold text-neutral-700 mb-2"
                      >
                        {t("form.fields.phone")}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                        placeholder={t("form.placeholders.phone")}
                        aria-label="Phone number"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-semibold text-neutral-700 mb-2"
                      >
                        {t("form.fields.subject")} {t("form.fields.required")}
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border ${
                          errors.subject
                            ? "border-red-500 focus:ring-red-500"
                            : "border-neutral-300 focus:ring-primary"
                        } rounded-lg focus:ring-2 focus:border-transparent outline-none transition-all`}
                        aria-label="Subject"
                        aria-required="true"
                      >
                        <option value="">{t("form.subjects.placeholder")}</option>
                        <option value="general">{t("form.subjects.general")}</option>
                        <option value="partnership">{t("form.subjects.partnership")}</option>
                        <option value="research">{t("form.subjects.research")}</option>
                        <option value="visit">{t("form.subjects.visit")}</option>
                        <option value="media">{t("form.subjects.media")}</option>
                        <option value="other">{t("form.subjects.other")}</option>
                      </select>
                      {errors.subject && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.subject}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-semibold text-neutral-700 mb-2"
                      >
                        {t("form.fields.message")} {t("form.fields.required")}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className={`w-full px-4 py-3 border ${
                          errors.message
                            ? "border-red-500 focus:ring-red-500"
                            : "border-neutral-300 focus:ring-primary"
                        } rounded-lg focus:ring-2 focus:border-transparent outline-none transition-all resize-none`}
                        placeholder={t("form.placeholders.message")}
                        aria-label="Message"
                        aria-required="true"
                      />
                      {errors.message && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-700 text-white font-semibold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
                    >
                      <FaPaperPlane className="w-5 h-5" />
                      {t("form.submit")}
                    </button>
                  </form>
                )}
              </motion.div>

              {/* Map Placeholder & Additional Info */}
              <motion.div variants={fadeInUp} className="space-y-6">
                {/* Map Placeholder */}
                <div className="card">
                  <h3 className="text-2xl mb-4">{t("location.title")}</h3>
                  <div className="relative h-64 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-lg overflow-hidden mb-4">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <FaMapMarkerAlt className="w-16 h-16 text-primary mx-auto mb-3 opacity-50" />
                        <p className="text-neutral-600 font-semibold">
                          {t("location.mapComingSoon")}
                        </p>
                        <p className="text-sm text-neutral-500 mt-2">
                          Progresivka, Mykolaiv Region, Ukraine
                        </p>
                      </div>
                    </div>
                  </div>
                  <a
                    href="https://maps.google.com/?q=Progresivka,Mykolaiv,Ukraine"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary-700 font-semibold transition-colors"
                  >
                    <FaMapMarkerAlt className="w-5 h-5" />
                    {t("location.openInMaps")}
                  </a>
                </div>

                {/* Office Hours */}
                <div className="card">
                  <h3 className="text-2xl mb-4">{t("officeHours.title")}</h3>
                  <div className="space-y-2 text-neutral-700">
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
                  <p className="text-sm text-neutral-600 mt-4">
                    {t("officeHours.note")}
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Media Links */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="mb-6">{t("social.title")}</h2>
              <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
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
                  className={`bg-gradient-to-br from-primary-50 to-secondary-50 p-4 rounded-full text-neutral-700 ${social.color} transition-all duration-300 hover:shadow-lg hover:scale-110`}
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
