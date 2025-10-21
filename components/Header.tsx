'use client';

import { useState, useEffect, useRef } from 'react';
import { Link } from '@/navigation';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX, HiChevronDown } from 'react-icons/hi';
import LanguageSelector from './LanguageSelector';
import { useTranslations } from 'next-intl';

const navigationLinks = [
  { key: 'home', href: '/' },
  { key: 'about', href: '/about' },
  { key: 'hatchery', href: '/hatchery' },
  { key: 'news', href: '/news' },
];

const ourImpactLinks = [
  { key: 'innovation', href: '/innovation' },
  { key: 'sustainability', href: '/sustainability' },
  { key: 'genderEquality', href: '/gender-equality' },
  { key: 'partnerships', href: '/partnerships' },
];

export default function Header() {
  const t = useTranslations('nav');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isImpactDropdownOpen, setIsImpactDropdownOpen] = useState(false);
  const [isMobileImpactOpen, setIsMobileImpactOpen] = useState(false);
  const impactDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (impactDropdownRef.current && !impactDropdownRef.current.contains(event.target as Node)) {
        setIsImpactDropdownOpen(false);
      }
    };

    if (isImpactDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isImpactDropdownOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsMobileImpactOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gradient-to-r from-[#253C84] via-[#1e3270] to-[#253C84] shadow-lg backdrop-blur-sm'
          : 'bg-gradient-to-r from-[#253C84]/95 via-[#1e3270]/95 to-[#253C84]/95'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 z-50">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src="/logo.png"
                alt={t('logoAlt')}
                width={64}
                height={64}
                className="w-auto h-16"
                priority
              />
            </motion.div>
            <span className="text-white font-semibold text-xl hidden sm:block">
              {t('companyName')} <span className="text-[#72C5F0]">{t('companyNameHighlight')}</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center flex-1 justify-end space-x-1">
            {/* Navigation Links */}
            <div className="flex items-center space-x-1">
              {navigationLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative px-3 py-2 text-white/90 hover:text-white transition-colors duration-200 text-sm font-medium group"
                  >
                    {t(link.key)}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#72C5F0] to-[#4aa3d1]"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </Link>
              ))}

              {/* Our Impact Dropdown */}
              <div
                className="relative"
                ref={impactDropdownRef}
                onMouseEnter={() => setIsImpactDropdownOpen(true)}
                onMouseLeave={() => setIsImpactDropdownOpen(false)}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative px-3 py-2 text-white/90 hover:text-white transition-colors duration-200 text-sm font-medium group flex items-center space-x-1"
                  aria-label="Our Impact menu"
                  aria-expanded={isImpactDropdownOpen}
                >
                  <span>{t('ourImpact')}</span>
                  <motion.div
                    animate={{ rotate: isImpactDropdownOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <HiChevronDown className="w-4 h-4" />
                  </motion.div>
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#72C5F0] to-[#4aa3d1]"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isImpactDropdownOpen ? 1 : 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {isImpactDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                      className="absolute top-full left-0 mt-2 w-56 rounded-lg bg-gradient-to-b from-[#253C84] to-[#1e3270] shadow-2xl border border-white/20 backdrop-blur-md overflow-hidden z-50"
                    >
                      <div className="py-2">
                        {ourImpactLinks.map((link, index) => (
                          <Link key={link.href} href={link.href}>
                            <motion.div
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.05 }}
                              whileHover={{ x: 5, backgroundColor: 'rgba(114, 197, 240, 0.1)' }}
                              whileTap={{ scale: 0.98 }}
                              className="px-4 py-3 text-white/90 hover:text-white transition-colors duration-200 text-sm font-medium cursor-pointer"
                            >
                              {t(link.key)}
                            </motion.div>
                          </Link>
                        ))}
                      </div>
                      {/* Dropdown Accent Line */}
                      <div className="h-0.5 bg-gradient-to-r from-transparent via-[#72C5F0] to-transparent" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Contact Link */}
              <Link href="/contact">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative px-3 py-2 text-white/90 hover:text-white transition-colors duration-200 text-sm font-medium group"
                >
                  {t('contact')}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#72C5F0] to-[#4aa3d1]"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </Link>
            </div>

            {/* Language Selector - Desktop (Far Right) */}
            <div className="ml-6">
              <LanguageSelector />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden z-50 p-2 text-white hover:text-[#72C5F0] transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <motion.div
              animate={isMenuOpen ? { rotate: 180 } : { rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMenuOpen ? (
                <HiX className="w-7 h-7" />
              ) : (
                <HiMenu className="w-7 h-7" />
              )}
            </motion.div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm lg:hidden"
              onClick={closeMenu}
            />

            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full sm:w-80 bg-gradient-to-b from-[#253C84] via-[#1e3270] to-[#253C84] shadow-2xl lg:hidden overflow-y-auto"
            >
              <div className="flex flex-col h-full pt-24 pb-8 px-6">
                {/* Language Selector - Mobile */}
                <div className="mb-6 flex justify-center">
                  <LanguageSelector />
                </div>

                {/* Mobile Navigation Links */}
                <div className="flex flex-col space-y-2">
                  {navigationLinks.map((link, index) => (
                    <Link key={link.href} href={link.href} onClick={closeMenu}>
                      <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ scale: 1.02, x: 5 }}
                        whileTap={{ scale: 0.98 }}
                        className="relative px-4 py-3 text-white/90 hover:text-white transition-colors duration-200 text-base font-medium rounded-lg hover:bg-white/10 group"
                      >
                        <div className="flex items-center justify-between">
                          <span>{t(link.key)}</span>
                          <motion.div
                            className="w-0 h-0.5 bg-gradient-to-r from-[#72C5F0] to-[#4aa3d1] group-hover:w-6 transition-all duration-300"
                          />
                        </div>
                      </motion.div>
                    </Link>
                  ))}

                  {/* Our Impact Accordion - Mobile */}
                  <div className="relative">
                    <motion.button
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: navigationLinks.length * 0.05 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setIsMobileImpactOpen(!isMobileImpactOpen)}
                      className="w-full px-4 py-3 text-white/90 hover:text-white transition-colors duration-200 text-base font-medium rounded-lg hover:bg-white/10 group"
                    >
                      <div className="flex items-center justify-between">
                        <span>{t('ourImpact')}</span>
                        <motion.div
                          animate={{ rotate: isMobileImpactOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <HiChevronDown className="w-5 h-5 text-white/70" />
                        </motion.div>
                      </div>
                    </motion.button>

                    {/* Mobile Impact Submenu */}
                    <AnimatePresence>
                      {isMobileImpactOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="ml-4 mt-1 space-y-1 overflow-hidden"
                        >
                          {ourImpactLinks.map((link, subIndex) => (
                            <Link key={link.href} href={link.href} onClick={closeMenu}>
                              <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: subIndex * 0.05 }}
                                whileHover={{ x: 5 }}
                                whileTap={{ scale: 0.98 }}
                                className="px-4 py-2 text-white/80 hover:text-white transition-colors duration-200 text-sm font-medium rounded-lg hover:bg-white/5 border-l-2 border-[#72C5F0]/30"
                              >
                                {t(link.key)}
                              </motion.div>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Contact Link - Mobile */}
                  <Link href="/contact" onClick={closeMenu}>
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (navigationLinks.length + 1) * 0.05 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                      whileTap={{ scale: 0.98 }}
                      className="relative px-4 py-3 text-white/90 hover:text-white transition-colors duration-200 text-base font-medium rounded-lg hover:bg-white/10 group"
                    >
                      <div className="flex items-center justify-between">
                        <span>{t('contact')}</span>
                        <motion.div
                          className="w-0 h-0.5 bg-gradient-to-r from-[#72C5F0] to-[#4aa3d1] group-hover:w-6 transition-all duration-300"
                        />
                      </div>
                    </motion.div>
                  </Link>
                </div>

                {/* Mobile Menu Footer */}
                <div className="mt-auto pt-8 border-t border-white/10">
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-white/60 text-sm text-center"
                  >
                    {t('tagline')}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Aqua Gradient Accent Line */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-[#72C5F0] to-transparent" />
    </motion.header>
  );
}
