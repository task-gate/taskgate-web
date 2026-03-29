import DevelopersContent from "@/components/DevelopersContent";

export const metadata = {
  title: "TaskGate Docs | SDKs, Integration, and Partner Setup",
  description:
    "TaskGate docs for partner apps: SDK links, providerId setup, deep linking, integration workflow, and launch support.",
  keywords: [
    "TaskGate docs",
    "TaskGate SDK",
    "partner app integration",
    "providerId setup",
    "deep linking docs",
    "Flutter SDK",
    "iOS SDK",
    "Android SDK",
  ],
  alternates: {
    canonical: "/docs",
  },
  openGraph: {
    title: "TaskGate Docs | SDKs, Integration, and Partner Setup",
    description:
      "Integration docs for TaskGate partners, including SDKs, portal setup, and launch workflow.",
    url: "https://taskgate.co/docs",
    siteName: "TaskGate",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "TaskGate Docs",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TaskGate Docs | SDKs, Integration, and Partner Setup",
    description:
      "Integration docs for TaskGate partners, including SDKs, portal setup, and launch workflow.",
    images: ["/og.png"],
  },
};

export default function DocsPage() {
  return <DevelopersContent />;
}
