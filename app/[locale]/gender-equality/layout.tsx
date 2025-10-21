import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gender Equality Plan (GEP) - Horizon Europe Compliance',
  description: 'LLC Neusatz Aqua Gender Equality Plan - promoting gender equality, diversity, and inclusion in aquaculture research and innovation. Fully compliant with Horizon Europe requirements.',
  keywords: 'gender equality plan, GEP, Horizon Europe, diversity and inclusion, women in STEM, gender balance, aquaculture, Neusatz Aqua, EU compliance, equal opportunities',
  openGraph: {
    title: 'Gender Equality Plan - Neusatz Aqua',
    description: 'Our commitment to gender equality, diversity, and inclusion in aquaculture innovation',
    url: 'https://www.neusatzaqua.com/gender-equality',
    siteName: 'Neusatz Aqua',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gender Equality Plan - Neusatz Aqua',
    description: 'Promoting gender equality and inclusion in aquaculture research',
  },
};

export default function GenderEqualityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
