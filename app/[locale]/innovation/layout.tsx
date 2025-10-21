import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Innovation & Research - AI-Powered Aquaculture',
  description: 'Discover our cutting-edge AI for Aquaculture Behavior Insight and Digital Twin technology. Real-time monitoring, predictive analytics, and computer vision for sustainable shrimp production.',
  keywords: 'AI aquaculture, computer vision shrimp, behavior detection, digital twin hatchery, predictive analytics, real-time monitoring, aquaculture innovation, shrimp AI, Vismar Aqua research, AWI partnership, ShrimpWiz, Horizon Europe',
  openGraph: {
    title: 'Innovation & Research - Neusatz Aqua',
    description: 'AI-powered aquaculture technology for sustainable shrimp production',
    url: 'https://www.neusatzaqua.com/innovation',
    siteName: 'Neusatz Aqua',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Innovation & Research - Neusatz Aqua',
    description: 'AI-powered aquaculture technology for sustainable shrimp production',
  },
};

export default function InnovationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
