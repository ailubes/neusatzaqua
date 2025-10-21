import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Get in Touch with Neusatz Aqua',
  description: 'Contact Neusatz Aqua for inquiries about partnerships, visits, or sustainable shrimp aquaculture. Located in Progresivka, Mykolaiv Region, Ukraine.',
  keywords: 'contact Neusatz Aqua, aquaculture inquiries, shrimp hatchery contact, partnership inquiries, facility visits, Mykolaiv Ukraine, vismaraqua email, contact information',
  openGraph: {
    title: 'Contact Us - Neusatz Aqua',
    description: 'Get in touch with Ukraine\'s first Vannamei shrimp hatchery',
    url: 'https://www.neusatzaqua.com/contact',
    siteName: 'Neusatz Aqua',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us - Neusatz Aqua',
    description: 'Contact us for aquaculture partnerships and inquiries',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
