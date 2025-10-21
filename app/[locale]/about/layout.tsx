import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Sustainable Shrimp Hatchery",
  description:
    "Learn about LLC Neusatz Aqua, Ukraine's first Vannamei shrimp hatchery. Combining biology, data, and responsibility to build resilient aquaculture systems in Progresivka, Mykolaiv region.",
  keywords: [
    "Neusatz Aqua",
    "shrimp hatchery Ukraine",
    "Vannamei shrimp",
    "sustainable aquaculture",
    "Vismar Aqua",
    "Progresivka",
    "Mykolaiv region",
    "shrimp breeding",
    "AI aquaculture",
    "biosecurity",
    "postlarvae production",
    "broodstock",
  ],
  openGraph: {
    title: "About Neusatz Aqua - Sustainable Shrimp Hatchery",
    description:
      "Ukraine's first Vannamei shrimp hatchery combining biology, data, and responsibility. Part of the Vismar Aqua ecosystem.",
    type: "website",
    url: "https://neusatzaqua.com/about",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Neusatz Aqua - Sustainable Shrimp Hatchery",
    description:
      "Ukraine's first Vannamei shrimp hatchery combining biology, data, and responsibility. Part of the Vismar Aqua ecosystem.",
  },
  alternates: {
    canonical: "/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
