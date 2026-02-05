'use client';

import { motion } from 'framer-motion';
import { Link } from '@/navigation';
import { HiChevronDown } from 'react-icons/hi';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Hero() {
  const t = useTranslations('home.hero');

  // Get title words from translations
  const titleWords = t.raw('titleWords') as string[];

  // Indices of words that should be highlighted in aqua color
  // For English: "Future of Shrimp" (indices 3, 4, 5)
  // For German: "Zukunft der Garnelen" (indices 3, 4, 5)
  // For Ukrainian: "Майбутнього аквакультури креветок" (indices 2, 3, 4)
  const getHighlightIndices = () => {
    // Default to English pattern
    return [3, 4, 5];
  };

  const highlightIndices = getHighlightIndices();

  // Word-by-word animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const fadeInUpVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
        delay: 0.8,
      },
    },
  };

  const buttonContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 1.0,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
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

  // Scroll to process/facilities section
  const handleProcessClick = () => {
    const facilitiesSection = document.getElementById('facilities');
    if (facilitiesSection) {
      facilitiesSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Fallback to about section if facilities not found
      handleLearnMore();
    }
  };

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/hero_underwater.jpg"
          alt="Underwater background"
          fill
          className="object-cover"
          priority
          quality={90}
        />
      </div>

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 hero-gradient" />

      {/* Content container */}
      <motion.div
        className="relative z-10 container-custom text-center px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero title with word-by-word animation */}
        <motion.h1
          className="font-space-grotesk text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          variants={containerVariants}
        >
          {titleWords.map((word, index) => (
            <motion.span
              key={index}
              variants={wordVariants}
              className={`inline-block mr-[0.3em] ${
                highlightIndices.includes(index)
                  ? 'text-[#2EC4B6]'
                  : 'text-white'
              }`}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={fadeInUpVariants}
          initial="hidden"
          animate="visible"
          className="text-lg sm:text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          {t('subtitle')}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={buttonContainerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          {/* Learn More button - glass effect */}
          <motion.button
            variants={buttonVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleLearnMore}
            className="btn-primary"
            aria-label="Learn more about Neusatz Aqua"
          >
            {t('ctaLearnMore')}
          </motion.button>

          {/* Contact Us button - outline style */}
          <motion.div variants={buttonVariants}>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="btn-outline"
                aria-label={t('ctaContact')}
              >
                {t('ctaContact')}
              </motion.button>
            </Link>
          </motion.div>

          {/* Our Process button - aqua accent */}
          <motion.button
            variants={buttonVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleProcessClick}
            className="btn-accent"
            aria-label={t('ctaProcess')}
          >
            {t('ctaProcess')}
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
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
            <HiChevronDown className="w-10 h-10" />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
