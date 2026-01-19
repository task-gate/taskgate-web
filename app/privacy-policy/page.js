import PrivacyContent from "@/components/PrivacyContent";

export const metadata = {
  title: "Privacy Policy | TaskGate",
  description:
    "Read TaskGate's Privacy Policy. Learn how we collect, use, and protect your information. Your privacy is important to us — all data stays on your device.",
  keywords: [
    "TaskGate privacy policy",
    "privacy",
    "data protection",
    "user privacy",
    "app privacy",
  ],
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | TaskGate",
    description:
      "Read TaskGate's Privacy Policy. Learn how we collect, use, and protect your information.",
    url: "https://taskgate.co/privacy-policy",
    siteName: "TaskGate",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "TaskGate — Privacy Policy",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | TaskGate",
    description:
      "Read TaskGate's Privacy Policy. Learn how we collect, use, and protect your information.",
    images: ["/og.png"],
  },
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}
