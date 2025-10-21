import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Hatchery - Advanced Vannamei Shrimp Production",
  description:
    "Explore Neusatz Aqua's state-of-the-art shrimp hatchery facilities featuring controlled environment raceways, biosecurity systems, and AI-powered monitoring. World-class broodstock tanks, maturation systems, and larval rearing facilities in Progresivka, Ukraine.",
  keywords: [
    "shrimp hatchery",
    "Vannamei shrimp production",
    "broodstock tanks",
    "larval rearing",
    "maturation systems",
    "spawning facilities",
    "biosecurity aquaculture",
    "water treatment systems",
    "nursery systems",
    "hatchery technology",
    "Ukraine shrimp hatchery",
    "Neusatz Aqua facilities",
    "controlled environment raceways",
    "shrimp postlarvae production",
    "aquaculture biosecurity",
  ],
  openGraph: {
    title: "Our Hatchery - Advanced Vannamei Shrimp Production Facilities",
    description:
      "Discover Neusatz Aqua's cutting-edge shrimp hatchery with broodstock tanks, maturation systems, spawning areas, and larval rearing facilities. Biosecurity and innovation at every stage.",
    type: "website",
    url: "https://neusatzaqua.com/hatchery",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Hatchery - Advanced Vannamei Shrimp Production",
    description:
      "State-of-the-art shrimp hatchery facilities with controlled environments, biosecurity, and AI monitoring. Ukraine's first Vannamei shrimp hatchery.",
  },
  alternates: {
    canonical: "/hatchery",
  },
};

export default function HatcheryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
