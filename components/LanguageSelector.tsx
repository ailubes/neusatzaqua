'use client';

import { useState, useEffect, useRef } from 'react';
import { useLocale } from 'next-intl';
import { Link, usePathname } from '@/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronDown } from 'react-icons/hi';

interface Language {
  code: string;
  name: string;
  display: string;
}

const languages: Language[] = [
  { code: 'en', name: 'English', display: 'EN' },
  { code: 'uk', name: 'Українська', display: 'UA' },
  { code: 'de', name: 'Deutsch', display: 'DE' },
];

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLanguage = languages.find((lang) => lang.code === locale) || languages[0];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleLanguageSelect = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Dropdown Button */}
      <motion.button
        onClick={toggleDropdown}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center space-x-1.5 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-[#72C5F0]/50 transition-all duration-200"
        aria-label="Select language"
        aria-expanded={isOpen}
      >
        <span className="text-white font-semibold text-sm">
          {currentLanguage.display}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <HiChevronDown className="w-4 h-4 text-white/70" />
        </motion.div>
      </motion.button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="absolute top-full right-0 mt-2 w-24 rounded-lg bg-gradient-to-b from-[#253C84] to-[#1e3270] shadow-2xl border border-white/20 backdrop-blur-md overflow-hidden z-50"
          >
            <div className="py-1">
              {languages.map((language, index) => {
                const isActive = language.code === locale;

                return (
                  <Link
                    key={language.code}
                    href={pathname}
                    locale={language.code}
                    onClick={handleLanguageSelect}
                  >
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ x: 3, backgroundColor: 'rgba(114, 197, 240, 0.1)' }}
                      whileTap={{ scale: 0.98 }}
                      className={`flex items-center justify-center px-3 py-2 cursor-pointer transition-all duration-200 ${
                        isActive
                          ? 'bg-[#72C5F0]/20 border-l-2 border-[#72C5F0]'
                          : 'hover:bg-white/10'
                      }`}
                    >
                      <span
                        className={`text-sm font-semibold ${
                          isActive ? 'text-[#72C5F0]' : 'text-white'
                        }`}
                      >
                        {language.display}
                      </span>
                    </motion.div>
                  </Link>
                );
              })}
            </div>

            {/* Dropdown Accent Line */}
            <div className="h-0.5 bg-gradient-to-r from-transparent via-[#72C5F0] to-transparent" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
