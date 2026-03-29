import AboutContent from "@/components/AboutContent";
import faqsAbout from "@/components/data/faqsAbout";
import { faqPageSchema } from "@/lib/faqJsonLd";

const faqLd = faqPageSchema(faqsAbout);

export const metadata = {
  title: "About Us | TaskGate — Design Your Digital Habits",
  description:
    "Learn about TaskGate's mission to help people build intentional relationships with technology. We believe technology should serve you, not distract you.",
  keywords: [
    "about TaskGate",
    "digital habits",
    "mindful technology",
    "screen time management",
    "intentional living",
    "app blocker company",
  ],
  alternates: {
    canonical: "/about-us",
  },
  openGraph: {
    title: "About Us | TaskGate — Design Your Digital Habits",
    description:
      "Learn about TaskGate's mission to help people build intentional relationships with technology through mindful app usage.",
    url: "https://taskgate.co/about-us",
    siteName: "TaskGate",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | TaskGate — Design Your Digital Habits",
    description:
      "Learn about TaskGate's mission to help people build intentional relationships with technology.",
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <AboutContent />
    </>
  );
}
