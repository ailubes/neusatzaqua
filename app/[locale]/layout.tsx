import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { locales } from '@/i18n';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
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
    <html lang={locale} className={poppins.variable} suppressHydrationWarning>
      <body className={poppins.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
