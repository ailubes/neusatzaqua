"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaNewspaper,
  FaFlask,
  FaBuilding,
  FaUsers,
  FaCalendar,
  FaArrowRight,
  FaClock,
  FaTag,
} from "react-icons/fa";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/navigation";
import { newsArticles, getFeaturedArticles, getRegularArticles } from "@/data/news-articles";

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

export default function NewsPage() {
  const t = useTranslations("news");
  const locale = useLocale();

  const categories = [
    { name: t("categories.all"), slug: "all", icon: <FaNewspaper /> },
    { name: t("categories.research"), slug: "research", icon: <FaFlask /> },
    { name: t("categories.facility"), slug: "facility", icon: <FaBuilding /> },
    { name: t("categories.community"), slug: "community", icon: <FaUsers /> },
  ];

  const getTitle = (article: typeof newsArticles[0]) => {
    switch (locale) {
      case "uk": return article.titleUk;
      case "de": return article.titleDe;
      default: return article.titleEn;
    }
  };

  const getExcerpt = (article: typeof newsArticles[0]) => {
    switch (locale) {
      case "uk": return article.excerptUk;
      case "de": return article.excerptDe;
      default: return article.excerptEn;
    }
  };

  const getCategoryIcon = (categorySlug: string) => {
    const category = categories.find((cat) => cat.slug === categorySlug);
    return category?.icon || <FaNewspaper />;
  };

  const getCategoryColor = (categorySlug: string) => {
    switch (categorySlug) {
      case "research":
        return "bg-[#2EC4B6] text-[#0B1F3F]";
      case "facility":
        return "bg-[#2EC4B6] text-[#0B1F3F]";
      case "community":
        return "bg-[#2EC4B6] text-[#0B1F3F]";
      default:
        return "bg-white/10 text-[#A9BDD8]";
    }
  };

  const featuredArticles = getFeaturedArticles();
  const regularArticles = getRegularArticles();

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
                <FaNewspaper className="w-16 h-16 text-[#2EC4B6]" />
              </div>
            </div>
            <h1 className="text-white mb-6">{t("hero.title")}</h1>
            <p className="text-xl md:text-2xl text-[#A9BDD8] leading-relaxed">
              {t("hero.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding bg-[#08162B]">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap justify-center gap-4"
            >
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                    category.slug === "all"
                      ? "bg-[#2EC4B6] text-[#0B1F3F] shadow-lg"
                      : "glass-card text-[#A9BDD8] hover:bg-[#2EC4B6]/10"
                  }`}
                >
                  {category.icon}
                  {category.name}
                </button>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <section className="section-padding bg-[#0B1F3F]">
          <div className="container-custom">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <span className="font-mono uppercase tracking-widest text-[#2EC4B6] text-sm">
                  {t("featured.label")}
                </span>
                <h2 className="text-white mb-6">{t("featured.title")}</h2>
                <p className="text-xl text-[#A9BDD8] max-w-3xl mx-auto">
                  {t("featured.subtitle")}
                </p>
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-8">
                {featuredArticles.map((article) => (
                  <motion.article
                    key={article.id}
                    variants={scaleIn}
                    className="glass-card p-6 group hover:shadow-2xl transition-all duration-300"
                  >
                    {/* Image */}
                    <div className="relative h-64 bg-gradient-to-br from-[#2EC4B6]/10 to-[#2EC4B6]/5 rounded-lg overflow-hidden mb-6">
                      <Image
                        src={article.image}
                        alt={getTitle(article)}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3F]/60 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span
                          className={`${getCategoryColor(
                            article.categoryKey
                          )} px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2`}
                        >
                          <FaTag className="w-3 h-3" />
                          {t(`categories.${article.categoryKey}`)}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-2xl mb-4 text-white group-hover:text-[#2EC4B6] transition-colors">
                      {getTitle(article)}
                    </h3>

                    <p className="text-[#A9BDD8] mb-6 leading-relaxed">
                      {getExcerpt(article)}
                    </p>

                    <div className="flex items-center justify-between text-sm text-[#A9BDD8]/70 mb-6">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <FaCalendar className="w-4 h-4" />
                          {new Date(article.date).toLocaleDateString(locale === "uk" ? "uk-UA" : locale === "de" ? "de-DE" : "en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                        <span className="flex items-center gap-1">
                          <FaClock className="w-4 h-4" />
                          {article.readTime} {t("readTime")}
                        </span>
                      </div>
                    </div>

                    <Link
                      href={`/news/${article.slug}`}
                      className="inline-flex items-center gap-2 text-[#2EC4B6] hover:text-[#2EC4B6]/80 font-semibold group-hover:gap-3 transition-all"
                    >
                      {t("readMore")}
                      <FaArrowRight className="w-4 h-4" />
                    </Link>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* All News Articles */}
      <section className="section-padding bg-[#122A4D]">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <span className="font-mono uppercase tracking-widest text-[#2EC4B6] text-sm">
                {t("recent.label")}
              </span>
              <h2 className="text-white mb-6">{t("recent.title")}</h2>
              <p className="text-xl text-[#A9BDD8] max-w-3xl mx-auto">
                {t("recent.subtitle")}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularArticles.map((article) => (
                <motion.article
                  key={article.id}
                  variants={scaleIn}
                  className="glass-card p-6 group hover:shadow-xl transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative h-48 bg-gradient-to-br from-[#2EC4B6]/10 to-[#2EC4B6]/5 rounded-lg overflow-hidden mb-4">
                    <Image
                      src={article.image}
                      alt={getTitle(article)}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3F]/60 to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span
                        className={`${getCategoryColor(
                          article.categoryKey
                        )} px-3 py-1 rounded-full text-xs font-semibold`}
                      >
                        {t(`categories.${article.categoryKey}`)}
                      </span>
                    </div>
                  </div>

                  <h4 className="text-xl mb-3 text-white group-hover:text-[#2EC4B6] transition-colors">
                    {getTitle(article)}
                  </h4>

                  <p className="text-sm text-[#A9BDD8] mb-4 leading-relaxed line-clamp-3">
                    {getExcerpt(article)}
                  </p>

                  <div className="flex items-center gap-3 text-xs text-[#A9BDD8]/70 mb-4">
                    <span className="flex items-center gap-1">
                      <FaCalendar className="w-3 h-3" />
                      {new Date(article.date).toLocaleDateString(locale === "uk" ? "uk-UA" : locale === "de" ? "de-DE" : "en-US", {
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaClock className="w-3 h-3" />
                      {article.readTime} {t("readTime")}
                    </span>
                  </div>

                  <Link
                    href={`/news/${article.slug}`}
                    className="inline-flex items-center gap-2 text-[#2EC4B6] hover:text-[#2EC4B6]/80 font-semibold text-sm group-hover:gap-3 transition-all"
                  >
                    {t("readMore")}
                    <FaArrowRight className="w-4 h-4" />
                  </Link>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Signup CTA */}
      <section className="section-padding bg-[#2EC4B6]">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center text-white"
          >
            <FaNewspaper className="w-16 h-16 text-[#0B1F3F] mx-auto mb-6" />
            <h2 className="text-white mb-6">{t("newsletter.title")}</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
              {t("newsletter.subtitle")}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-[#0B1F3F] text-white hover:bg-[#0B1F3F]/90 font-semibold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
              >
                {t("newsletter.contactUs")}
              </Link>
              <Link
                href="/about"
                className="bg-white text-[#0B1F3F] hover:bg-white/90 font-semibold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
              >
                {t("newsletter.aboutUs")}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
