import FeaturesContent from "@/components/FeaturesContent";

export const metadata = {
  title: "Features | TaskGate — Powerful Tools for Digital Wellness",
  description:
    "Discover TaskGate's features: app blocking, breathing exercises, flashcards, partner app challenges, and more. Build better digital habits with intentional pauses.",
  keywords: [
    "TaskGate features",
    "app blocker",
    "screen time control",
    "digital wellness",
    "breathing exercises",
    "flashcards",
    "habit building",
    "mindfulness app",
  ],
  alternates: {
    canonical: "/features",
  },
  openGraph: {
    title: "Features | TaskGate — Powerful Tools for Digital Wellness",
    description:
      "Discover TaskGate's features: app blocking, breathing exercises, flashcards, and partner app challenges. Build better digital habits.",
    url: "https://taskgate.co/features",
    siteName: "TaskGate",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "TaskGate — Features",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Features | TaskGate — Powerful Tools for Digital Wellness",
    description:
      "Discover TaskGate's features: app blocking, breathing exercises, flashcards, and partner app challenges.",
    images: ["/og.png"],
  },
};

export default function FeaturesPage() {
  return <FeaturesContent />;
}
