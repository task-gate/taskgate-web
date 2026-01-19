import PremiumContent from "@/components/PremiumContent";

export const metadata = {
  title: "Premium | TaskGate — Unlock Advanced Features",
  description:
    "Upgrade to TaskGate Premium for advanced features, deeper insights, powerful visualization tools, and exclusive content to accelerate your digital wellness journey.",
  keywords: [
    "TaskGate Premium",
    "premium features",
    "subscription",
    "advanced tools",
    "digital wellness",
    "habit building premium",
  ],
  alternates: {
    canonical: "/premium",
  },
  openGraph: {
    title: "Premium | TaskGate — Unlock Advanced Features",
    description:
      "Upgrade to TaskGate Premium for advanced features, deeper insights, and exclusive content to accelerate your digital wellness journey.",
    url: "https://taskgate.co/premium",
    siteName: "TaskGate",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "TaskGate — Premium",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium | TaskGate — Unlock Advanced Features",
    description:
      "Upgrade to TaskGate Premium for advanced features and exclusive content.",
    images: ["/og.png"],
  },
};

export default function PremiumPage() {
  return <PremiumContent />;
}
