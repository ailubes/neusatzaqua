"use client";

import { motion } from "framer-motion";
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

  const categories = [
    { name: t("categories.all"), slug: "all", icon: <FaNewspaper /> },
    { name: t("categories.research"), slug: "research", icon: <FaFlask /> },
    { name: t("categories.facility"), slug: "facility", icon: <FaBuilding /> },
    { name: t("categories.community"), slug: "community", icon: <FaUsers /> },
  ];

  const newsArticles = [
    {
      id: 1,
      title: "AI-Powered Monitoring System Successfully Deployed",
      excerpt:
        "Our state-of-the-art computer vision system is now operational, providing 24/7 behavioral monitoring of broodstock and larvae. Early results show a 15% improvement in welfare metrics.",
      category: t("categories.research"),
      categorySlug: "research",
      date: "2025-10-15",
      readTime: `5 ${t("readTime")}`,
      image: "/news-ai-monitoring.jpg",
      featured: true,
    },
    {
      id: 2,
      title: "Hatchery Construction Reaches Major Milestone",
      excerpt:
        "Phase 2 of our facility construction is complete, with advanced water treatment systems and larval rearing tanks now fully operational. We're on track for first postlarvae production in Q1 2026.",
      category: t("categories.facility"),
      categorySlug: "facility",
      date: "2025-10-08",
      readTime: `4 ${t("readTime")}`,
      image: "/news-construction.jpg",
      featured: true,
    },
    {
      id: 3,
      title: "Partnership with Alfred Wegener Institute Announced",
      excerpt:
        "We're proud to announce our collaboration with AWI, Germany's leading polar and marine research institution. This partnership will advance our understanding of shrimp welfare and optimal breeding conditions.",
      category: t("categories.research"),
      categorySlug: "research",
      date: "2025-09-28",
      readTime: `3 ${t("readTime")}`,
      image: "/news-awi-partnership.jpg",
      featured: false,
    },
    {
      id: 4,
      title: "Local Employment Initiative Creates 25 New Jobs",
      excerpt:
        "Our commitment to community prosperity continues with the creation of 25 new positions in the Mykolaiv region. We're offering competitive wages, training programs, and career development opportunities.",
      category: t("categories.community"),
      categorySlug: "community",
      date: "2025-09-20",
      readTime: `4 ${t("readTime")}`,
      image: "/news-jobs.jpg",
      featured: false,
    },
    {
      id: 5,
      title: "Gender Equality Plan Receives Horizon Europe Approval",
      excerpt:
        "Our comprehensive Gender Equality Plan has been approved by Horizon Europe, demonstrating our commitment to diversity, inclusion, and equal opportunities in aquaculture innovation.",
      category: t("categories.community"),
      categorySlug: "community",
      date: "2025-09-12",
      readTime: `3 ${t("readTime")}`,
      image: "/news-gep.jpg",
      featured: false,
    },
    {
      id: 6,
      title: "First Batch of Broodstock Arrives from Certified Suppliers",
      excerpt:
        "We've successfully received our first shipment of SPF (Specific Pathogen Free) Vannamei broodstock from internationally certified suppliers. Biosecurity protocols performed flawlessly.",
      category: t("categories.facility"),
      categorySlug: "facility",
      date: "2025-08-30",
      readTime: `5 ${t("readTime")}`,
      image: "/news-broodstock.jpg",
      featured: false,
    },
  ];

  const getCategoryIcon = (categorySlug: string) => {
    const category = categories.find((cat) => cat.slug === categorySlug);
    return category?.icon || <FaNewspaper />;
  };

  const getCategoryColor = (categorySlug: string) => {
    switch (categorySlug) {
      case "research":
        return "bg-secondary text-white";
      case "facility":
        return "bg-primary text-white";
      case "community":
        return "bg-accent text-primary";
      default:
        return "bg-neutral-200 text-neutral-700";
    }
  };

  const featuredArticles = newsArticles.filter((article) => article.featured);
  const regularArticles = newsArticles.filter((article) => !article.featured);

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
                <FaNewspaper className="w-16 h-16 text-secondary" />
              </div>
            </div>
            <h1 className="text-white mb-6">{t("hero.title")}</h1>
            <p className="text-xl md:text-2xl text-secondary-100 leading-relaxed">
              {t("hero.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding bg-gradient-to-br from-secondary-50 to-primary-50">
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
                      ? "bg-primary text-white shadow-lg"
                      : "bg-white text-neutral-700 hover:shadow-md"
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
        <section className="section-padding bg-white">
          <div className="container-custom">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <h2 className="mb-6">{t("featured.title")}</h2>
                <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
                  {t("featured.subtitle")}
                </p>
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-8">
                {featuredArticles.map((article) => (
                  <motion.article
                    key={article.id}
                    variants={scaleIn}
                    className="card group hover:shadow-2xl transition-all duration-300"
                  >
                    {/* Image Placeholder */}
                    <div className="relative h-64 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-lg overflow-hidden mb-6">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          {getCategoryIcon(article.categorySlug)}
                          <p className="text-sm text-neutral-600 mt-2">
                            Image Coming Soon
                          </p>
                        </div>
                      </div>
                      <div className="absolute top-4 left-4">
                        <span
                          className={`${getCategoryColor(
                            article.categorySlug
                          )} px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2`}
                        >
                          <FaTag className="w-3 h-3" />
                          {article.category}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-2xl mb-4 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>

                    <p className="text-neutral-700 mb-6 leading-relaxed">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-sm text-neutral-600 mb-6">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <FaCalendar className="w-4 h-4" />
                          {new Date(article.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                        <span className="flex items-center gap-1">
                          <FaClock className="w-4 h-4" />
                          {article.readTime}
                        </span>
                      </div>
                    </div>

                    <Link
                      href={`/news/${article.id}`}
                      className="inline-flex items-center gap-2 text-primary hover:text-primary-700 font-semibold group-hover:gap-3 transition-all"
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
      <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="mb-6">{t("recent.title")}</h2>
              <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
                {t("recent.subtitle")}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularArticles.map((article) => (
                <motion.article
                  key={article.id}
                  variants={scaleIn}
                  className="card group hover:shadow-xl transition-all duration-300"
                >
                  {/* Image Placeholder */}
                  <div className="relative h-48 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-lg overflow-hidden mb-4">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-neutral-500">
                        {getCategoryIcon(article.categorySlug)}
                      </div>
                    </div>
                    <div className="absolute top-3 left-3">
                      <span
                        className={`${getCategoryColor(
                          article.categorySlug
                        )} px-3 py-1 rounded-full text-xs font-semibold`}
                      >
                        {article.category}
                      </span>
                    </div>
                  </div>

                  <h4 className="text-xl mb-3 group-hover:text-primary transition-colors">
                    {article.title}
                  </h4>

                  <p className="text-sm text-neutral-700 mb-4 leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center gap-3 text-xs text-neutral-600 mb-4">
                    <span className="flex items-center gap-1">
                      <FaCalendar className="w-3 h-3" />
                      {new Date(article.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaClock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>

                  <Link
                    href={`/news/${article.id}`}
                    className="inline-flex items-center gap-2 text-primary hover:text-primary-700 font-semibold text-sm group-hover:gap-3 transition-all"
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
      <section className="section-padding bg-gradient-to-br from-secondary via-secondary-600 to-primary">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center text-white"
          >
            <FaNewspaper className="w-16 h-16 text-white mx-auto mb-6 opacity-90" />
            <h2 className="text-white mb-6">{t("newsletter.title")}</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
              {t("newsletter.subtitle")}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-primary hover:bg-neutral-100 font-semibold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
              >
                {t("newsletter.contactUs")}
              </Link>
              <Link
                href="/about"
                className="bg-primary hover:bg-primary-800 text-white font-semibold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 border-2 border-white/30"
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
