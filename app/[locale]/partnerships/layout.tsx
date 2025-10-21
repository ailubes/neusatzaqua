import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Partnerships & Collaboration - Join Our Aquaculture Network',
  description: 'Partner with Neusatz Aqua for innovative aquaculture research and collaboration. Working with AWI, ShrimpWiz, Horizon Europe, and leading institutions.',
  keywords: 'aquaculture partnerships, research collaboration, AWI, ShrimpWiz, Horizon Europe, innovation network, shrimp hatchery partnerships, scientific collaboration, Neusatz Aqua partners',
  openGraph: {
    title: 'Partnerships & Collaboration - Neusatz Aqua',
    description: 'Join our innovation network for smarter, sustainable aquaculture',
    url: 'https://www.neusatzaqua.com/partnerships',
    siteName: 'Neusatz Aqua',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Partnerships - Neusatz Aqua',
    description: 'Collaborative aquaculture research and innovation partnerships',
  },
};

export default function PartnershipsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
