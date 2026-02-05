import type { Metadata } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
// import { Poppins } from "next/font/google"; // Deprecated - kept for reference
import "../globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { locales } from '@/i18n';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const spaceGrotesk = Space_Grotesk({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

const inter = Inter({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ibm-plex-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Neusatz Aqua - AI-Powered Water Quality Monitoring",
    template: "%s | Neusatz Aqua",
  },
  description:
    "Revolutionizing aquaculture with AI-powered water quality monitoring. Real-time insights, predictive analytics, and sustainable fish farming solutions.",
  keywords: [
    "aquaculture",
    "water quality monitoring",
    "AI",
    "fish farming",
    "sustainable aquaculture",
    "IoT sensors",
    "predictive analytics",
    "aquaculture technology",
  ],
  authors: [{ name: "Neusatz Aqua" }],
  creator: "Neusatz Aqua",
  publisher: "Neusatz Aqua",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://neusatzaqua.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://neusatzaqua.com",
    title: "Neusatz Aqua - AI-Powered Water Quality Monitoring",
    description:
      "Revolutionizing aquaculture with AI-powered water quality monitoring. Real-time insights, predictive analytics, and sustainable fish farming solutions.",
    siteName: "Neusatz Aqua",
    images: [
      {
        url: "/neusatz-aqua-logo.png",
        width: 1200,
        height: 630,
        alt: "Neusatz Aqua Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Neusatz Aqua - AI-Powered Water Quality Monitoring",
    description:
      "Revolutionizing aquaculture with AI-powered water quality monitoring. Real-time insights, predictive analytics, and sustainable fish farming solutions.",
    images: ["/neusatz-aqua-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  other: {
    "google-fonts": [
      "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap",
      "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap",
      "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&display=swap",
    ].join(", "),
  },
};

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  // Await params as per Next.js 15 requirements
  const { locale } = await params;

  // Get messages for the locale
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${spaceGrotesk.variable} ${inter.variable} ${ibmPlexMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className={`${spaceGrotesk.className} antialiased bg-[#0B1F3F]`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
