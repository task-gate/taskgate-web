import FeaturesContent from "@/components/FeaturesContent";
import faqsFeatures from "@/components/data/faqsFeatures";
import { faqPageSchema } from "@/lib/faqJsonLd";

const faqLd = faqPageSchema(faqsFeatures);

export const metadata = {
  title: "Features | TaskGate — Powerful Tools for Digital Wellness",
  description:
    "Discover TaskGate's features: app gating, breathing exercises, flashcards, partner app challenges, and more. Build better digital habits with intentional pauses.",
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
      "Discover TaskGate's features: app gating, breathing exercises, flashcards, and partner app challenges. Build better digital habits.",
    url: "https://taskgate.co/features",
    siteName: "TaskGate",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Features | TaskGate — Powerful Tools for Digital Wellness",
    description:
      "Discover TaskGate's features: app gating, breathing exercises, flashcards, and partner app challenges.",
  },
};

export default function FeaturesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <FeaturesContent />
    </>
  );
}
