"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaArrowLeft,
  FaCalendar,
  FaClock,
  FaTag,
  FaFlask,
  FaBuilding,
  FaUsers,
  FaNewspaper,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/navigation";
import { useParams } from "next/navigation";
import { getArticleBySlug } from "@/data/news-articles";

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

export default function NewsArticlePage() {
  const t = useTranslations("news");
  const locale = useLocale();
  const params = useParams();
  const articleSlug = params.slug as string;

  const article = getArticleBySlug(articleSlug);

  if (!article) {
    return (
      <main className="min-h-screen bg-[#0B1F3F] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-white text-4xl mb-4">Article Not Found</h1>
          <Link href="/news" className="text-[#2EC4B6] hover:underline">
            Back to News
          </Link>
        </div>
      </main>
    );
  }

  const getTitle = () => {
    switch (locale) {
      case "uk": return article.titleUk;
      case "de": return article.titleDe;
      default: return article.titleEn;
    }
  };

  const getContent = () => {
    switch (locale) {
      case "uk": return article.contentUk;
      case "de": return article.contentDe;
      default: return article.contentEn;
    }
  };

  const getCategoryIcon = (categoryKey: string) => {
    switch (categoryKey) {
      case "research":
        return <FaFlask className="w-5 h-5" />;
      case "facility":
        return <FaBuilding className="w-5 h-5" />;
      case "community":
        return <FaUsers className="w-5 h-5" />;
      default:
        return <FaNewspaper className="w-5 h-5" />;
    }
  };

  const categoryName = t(`categories.${article.categoryKey}`);
  const title = getTitle();
  const content = getContent();

  const getDateLocale = () => {
    switch (locale) {
      case "uk": return "uk-UA";
      case "de": return "de-DE";
      default: return "en-US";
    }
  };

  return (
    <main className="min-h-screen bg-[#0B1F3F]">
      {/* Hero Section */}
      <section className="relative bg-[#0B1F3F] text-white pt-32 pb-16">
        <div className="container-custom relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-4xl mx-auto"
          >
            {/* Back Link */}
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-[#2EC4B6] hover:text-[#2EC4B6]/80 mb-8 transition-colors"
            >
              <FaArrowLeft className="w-4 h-4" />
              {t("hero.title")}
            </Link>

            {/* Category Badge */}
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-[#2EC4B6] text-[#0B1F3F] px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                <FaTag className="w-3 h-3" />
                {categoryName}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-[#A9BDD8]">
              <span className="flex items-center gap-2">
                <FaCalendar className="w-4 h-4" />
                {new Date(article.date).toLocaleDateString(getDateLocale(), {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-2">
                <FaClock className="w-4 h-4" />
                {article.readTime} {t("readTime")}
              </span>
              <span className="flex items-center gap-2">
                {getCategoryIcon(article.categoryKey)}
                {categoryName}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section-padding bg-[#08162B]">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto"
          >
            {/* Featured Image */}
            <div className="relative h-64 md:h-96 rounded-xl overflow-hidden mb-12">
              <Image
                src={article.image}
                alt={title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3F]/40 to-transparent" />
            </div>

            {/* Article Body */}
            <div
              className="prose prose-lg prose-invert max-w-none
                prose-headings:text-white prose-headings:font-space-grotesk
                prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                prose-p:text-[#A9BDD8] prose-p:leading-relaxed prose-p:mb-6
                prose-ul:text-[#A9BDD8] prose-ul:my-6
                prose-li:text-[#A9BDD8] prose-li:mb-2
                prose-strong:text-white
                prose-a:text-[#2EC4B6] prose-a:no-underline hover:prose-a:underline"
              dangerouslySetInnerHTML={{ __html: content }}
            />

            {/* Share Section */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-[#A9BDD8] mb-4">
                {locale === "uk" ? "Поділитися статтею:" : locale === "de" ? "Artikel teilen:" : "Share this article:"}
              </p>
              <div className="flex gap-4">
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                    `https://neusatzaqua.com/news/${article.slug}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-[#2EC4B6]/20 p-3 rounded-full transition-colors"
                >
                  <FaLinkedin className="w-5 h-5 text-[#2EC4B6]" />
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                    `https://neusatzaqua.com/news/${article.slug}`
                  )}&text=${encodeURIComponent(title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-[#2EC4B6]/20 p-3 rounded-full transition-colors"
                >
                  <FaTwitter className="w-5 h-5 text-[#2EC4B6]" />
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                    `https://neusatzaqua.com/news/${article.slug}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-[#2EC4B6]/20 p-3 rounded-full transition-colors"
                >
                  <FaFacebook className="w-5 h-5 text-[#2EC4B6]" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Back to News CTA */}
      <section className="section-padding bg-[#2EC4B6]">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center"
          >
            <h2 className="text-[#0B1F3F] text-3xl font-bold mb-6">
              {t("newsletter.title")}
            </h2>
            <p className="text-[#0B1F3F]/80 text-lg mb-8 max-w-2xl mx-auto">
              {t("newsletter.subtitle")}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/news"
                className="bg-[#0B1F3F] text-white hover:bg-[#0B1F3F]/90 font-semibold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 inline-flex items-center gap-2"
              >
                <FaArrowLeft className="w-4 h-4" />
                {locale === "uk" ? "Всі новини" : locale === "de" ? "Alle Nachrichten" : "Back to All News"}
              </Link>
              <Link
                href="/contact"
                className="bg-white text-[#0B1F3F] hover:bg-white/90 font-semibold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
              >
                {t("newsletter.contactUs")}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
