import PremiumContent from "@/components/PremiumContent";
import faqsPremium from "@/components/data/faqsPremium";
import { faqPageSchema } from "@/lib/faqJsonLd";

const faqLd = faqPageSchema(faqsPremium);

export const metadata = {
  title: "Premium | TaskGate — Advanced Analytics & Integrations",
  description:
    "TaskGate Premium adds advanced usage analytics, unlimited partner integrations, custom tasks, and scheduled gating so friction fits your real routine.",
  keywords: [
    "TaskGate Premium",
    "premium features",
    "subscription",
    "advanced analytics",
    "scheduled gating",
    "digital wellness",
    "habit building premium",
  ],
  alternates: {
    canonical: "/premium",
  },
  openGraph: {
    title: "Premium | TaskGate — Advanced Analytics & Integrations",
    description:
      "Advanced analytics, partner integrations, custom tasks, and scheduled gating with TaskGate Premium.",
    url: "https://taskgate.co/premium",
    siteName: "TaskGate",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium | TaskGate — Advanced Analytics & Integrations",
    description:
      "Advanced analytics, integrations, and scheduled gating with TaskGate Premium.",
  },
};

export default function PremiumPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <PremiumContent />
    </>
  );
}
