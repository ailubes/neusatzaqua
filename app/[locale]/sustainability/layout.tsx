import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sustainability & Impact - Responsible Aquaculture',
  description: 'Our commitment to animal welfare, circular economy, and local employment. Discover our sustainable aquaculture practices and community impact.',
  keywords: 'sustainable aquaculture, circular economy, animal welfare, responsible farming, local employment, environmental impact, certification, transparency, Neusatz Aqua sustainability',
  openGraph: {
    title: 'Sustainability & Impact - Neusatz Aqua',
    description: 'Sustainable shrimp aquaculture with commitment to environment and community',
    url: 'https://www.neusatzaqua.com/sustainability',
    siteName: 'Neusatz Aqua',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sustainability & Impact - Neusatz Aqua',
    description: 'Sustainable shrimp aquaculture with commitment to environment and community',
  },
};

export default function SustainabilityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
