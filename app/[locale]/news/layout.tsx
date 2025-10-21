import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'News & Updates - Latest from Neusatz Aqua',
  description: 'Stay updated with the latest news, research breakthroughs, and facility updates from Ukraine\'s first Vannamei shrimp hatchery.',
  keywords: 'aquaculture news, shrimp hatchery updates, research announcements, facility news, Neusatz Aqua blog, aquaculture innovation, Ukraine aquaculture',
  openGraph: {
    title: 'News & Updates - Neusatz Aqua',
    description: 'Latest news and updates from our innovative shrimp hatchery',
    url: 'https://www.neusatzaqua.com/news',
    siteName: 'Neusatz Aqua',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'News & Updates - Neusatz Aqua',
    description: 'Latest aquaculture news and research updates',
  },
};

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
