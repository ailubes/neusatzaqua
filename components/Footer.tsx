'use client';

import { motion, type Variants } from 'framer-motion';
import Image from 'next/image';
import { Link } from '@/navigation';
import {
  FaLinkedin,
  FaTelegram,
  FaFacebook,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaWhatsapp
} from 'react-icons/fa';
import { useTranslations } from 'next-intl';

const navigationLinks = [
  { key: 'home', href: '/' },
  { key: 'about', href: '/about' },
  { key: 'hatchery', href: '/hatchery' },
  { key: 'innovation', href: '/innovation' },
  { key: 'sustainability', href: '/sustainability' },
  { key: 'genderEquality', href: '/gender-equality' },
  { key: 'partnerships', href: '/partnerships' },
  { key: 'news', href: '/news' },
  { key: 'contact', href: '/contact' },
];

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/vismar-aqua',
    icon: FaLinkedin,
    ariaLabelKey: 'linkedinLabel'
  },
  {
    name: 'Telegram',
    href: 'https://t.me/vismaraqua',
    icon: FaTelegram,
    ariaLabelKey: 'telegramLabel'
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/vismaraqua',
    icon: FaFacebook,
    ariaLabelKey: 'facebookLabel'
  },
];

export default function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');
  const currentYear = new Date().getFullYear();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <footer className="relative bg-[#122A4D] text-white overflow-hidden z-footer">
      {/* Aqua Accent Line at Top */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#2EC4B6] to-transparent" />

      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative container mx-auto px-6 lg:px-[7vw] py-16 lg:py-24">
        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white max-w-4xl mx-auto leading-tight">
            Let&apos;s build the future of aquaculture together
          </h2>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mt-16"
        >
          {/* About Section */}
          <motion.div variants={itemVariants} className="space-y-4">
            {/* Logo and Company Name */}
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="/logo.png"
                alt="Neusatz Aqua Logo"
                width={40}
                height={54}
                className="h-12 w-auto transition-transform duration-200 group-hover:scale-110"
              />
              <span className="font-space-grotesk font-semibold text-white text-xl transition-colors duration-200 group-hover:text-aqua">
                Neusatz <span className="text-aqua">Aqua</span>
              </span>
            </Link>
            <p className="text-[#A9BDD8] text-sm leading-relaxed font-inter">
              {t('about.description')}
            </p>
            <div className="pt-2">
              <p className="text-[#A9BDD8]/70 text-xs italic font-inter">
                {t('about.partOf')} <span className="text-[#2EC4B6] font-semibold">{t('about.vismarAqua')}</span>
              </p>
            </div>
          </motion.div>

          {/* Quick Links Section */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="font-space-grotesk text-xl font-semibold text-white mb-4">
              {t('quickLinks.title')}
            </h3>
            <ul className="space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <motion.div
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                      className="text-[#A9BDD8] hover:text-[#2EC4B6] text-sm transition-colors duration-200 flex items-center group font-inter"
                    >
                      <span className="w-0 h-0.5 bg-[#2EC4B6] group-hover:w-3 transition-all duration-200 mr-0 group-hover:mr-2" />
                      {tNav(link.key)}
                    </motion.div>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Information Section */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="font-space-grotesk text-xl font-semibold text-white mb-4">
              {t('contactInfo.title')}
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${t('contactInfo.email')}`}
                  className="flex items-start space-x-3 text-[#A9BDD8] hover:text-[#2EC4B6] transition-colors duration-200 group font-inter"
                  aria-label={t('contactInfo.emailLabel')}
                >
                  <FaEnvelope className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#2EC4B6] group-hover:scale-110 transition-transform" />
                  <span className="text-sm break-all">{t('contactInfo.email')}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${t('contactInfo.phone').replace(/\s/g, '')}`}
                  className="flex items-start space-x-3 text-[#A9BDD8] hover:text-[#2EC4B6] transition-colors duration-200 group font-inter"
                  aria-label={t('contactInfo.phoneLabel')}
                >
                  <FaPhone className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#2EC4B6] group-hover:scale-110 transition-transform" />
                  <span className="text-sm">{t('contactInfo.phone')}</span>
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${t('contactInfo.phone').replace(/[\s+]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-3 text-[#A9BDD8] hover:text-[#2EC4B6] transition-colors duration-200 group font-inter"
                  aria-label={t('contactInfo.whatsappLabel')}
                >
                  <FaWhatsapp className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#2EC4B6] group-hover:scale-110 transition-transform" />
                  <span className="text-sm">{t('contactInfo.whatsapp')}</span>
                </a>
              </li>
              <li>
                <div className="flex items-start space-x-3 text-[#A9BDD8] font-inter">
                  <FaMapMarkerAlt className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#2EC4B6]" />
                  <span className="text-sm">
                    {t('contactInfo.address')}
                  </span>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Social Media Section */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="font-space-grotesk text-xl font-semibold text-white mb-4">
              {t('social.title')}
            </h3>
            <p className="text-[#A9BDD8] text-sm mb-4 font-inter">
              {t('social.description')}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t(`social.${social.ariaLabelKey}`)}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:bg-[#2EC4B6] hover:border-[#2EC4B6] flex items-center justify-center transition-all duration-300 group backdrop-blur-sm"
                  >
                    <Icon className="w-5 h-5 text-[#A9BDD8] group-hover:text-[#0B1F3F] transition-colors" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-12 pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-[#A9BDD8]/70 text-sm text-center md:text-left font-inter">
              <p>
                &copy; {currentYear} <span className="text-[#2EC4B6] font-semibold">{tNav('companyName')} {tNav('companyNameHighlight')}</span>.{' '}
                {t('copyright')}
              </p>
            </div>
            <div className="text-[#A9BDD8]/70 text-sm text-center md:text-right font-inter">
              <p>
                {t('partOfVismar')}{' '}
                <a
                  href="https://vismar-aqua.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2EC4B6] hover:text-white transition-colors duration-200 font-semibold"
                >
                  {t('about.vismarAqua')}
                </a>
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Gradient Overlay at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2EC4B6]/50 to-transparent" />
    </footer>
  );
}
