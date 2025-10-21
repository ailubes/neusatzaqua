'use client';

import { motion } from 'framer-motion';
import { Link } from '@/navigation';
import { HiArrowDown } from 'react-icons/hi';
import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('home.hero');
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring' as const,
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      y: -2,
      transition: {
        type: 'spring' as const,
        stiffness: 400,
        damping: 10,
      },
    },
    tap: {
      scale: 0.98,
    },
  };

  const pulseVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut' as const,
      },
    },
  };

  // Scroll to about section
  const handleLearnMore = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#253C84] via-[#1e3270] to-[#0f1a3d]" />

      {/* Aqua gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#72C5F0]/20 via-transparent to-transparent" />

      {/* Animated background particles/waves */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#72C5F0]/20 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FFD400]/10 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-[#72C5F0]/15 rounded-full blur-2xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Optional: Wave pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg
          className="absolute bottom-0 w-full h-64"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#72C5F0"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,133.3C672,117,768,107,864,112C960,117,1056,139,1152,138.7C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      {/* Content container */}
      <motion.div
        className="relative z-10 container-custom text-center px-4 sm:px-6 lg:px-8 pt-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero title with gradient text effect */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="block text-white mb-2">{t('title')}</span>
          <span className="block bg-gradient-to-r from-[#72C5F0] via-[#4aa3d1] to-[#FFD400] bg-clip-text text-transparent">
            {t('titleHighlight')}
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          {t('subtitle')}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          {/* Learn More button with pulse animation */}
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={handleLearnMore}
            className="group relative px-8 py-4 bg-gradient-to-r from-[#72C5F0] to-[#4aa3d1] text-white font-semibold rounded-lg shadow-lg hover:shadow-2xl overflow-hidden w-full sm:w-auto"
            aria-label="Learn more about Neusatz Aqua"
          >
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-[#4aa3d1] to-[#72C5F0] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <span className="relative z-10 flex items-center justify-center gap-2">
              {t('ctaLearnMore')}
              <HiArrowDown className="w-5 h-5 group-hover:animate-bounce" />
            </span>
          </motion.button>

          {/* Contact Us button */}
          <motion.div
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="w-full sm:w-auto"
          >
            <Link href="/contact">
              <button
                className="w-full px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-semibold rounded-lg shadow-lg hover:bg-white/20 hover:border-white/50 transition-all duration-300"
                aria-label={t('ctaContact')}
              >
                {t('ctaContact')}
              </button>
            </Link>
          </motion.div>

          {/* Our Projects button with accent color */}
          <motion.div
            variants={pulseVariants}
            animate="pulse"
            className="w-full sm:w-auto"
          >
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Link href="/innovation">
                <button
                  className="w-full px-8 py-4 bg-gradient-to-r from-[#FFD400] to-[#CCAA00] text-[#253C84] font-bold rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
                  aria-label={t('ctaProjects')}
                >
                  {t('ctaProjects')}
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center"
        >
          <motion.button
            onClick={handleLearnMore}
            className="text-white/60 hover:text-white transition-colors duration-300"
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            aria-label="Scroll to learn more"
          >
            <HiArrowDown className="w-8 h-8" />
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/50 to-transparent" />
    </section>
  );
}
