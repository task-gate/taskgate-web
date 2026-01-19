import DevelopersContent from "@/components/DevelopersContent";

export const metadata = {
  title: "Developer SDK & Resources | TaskGate",
  description:
    "Build integrations with TaskGate using our Flutter, iOS, and Android SDKs. Access documentation, code examples, and developer resources to create mindful app experiences.",
  keywords: [
    "TaskGate SDK",
    "developer tools",
    "Flutter SDK",
    "iOS SDK",
    "Android SDK",
    "app integration",
    "developer resources",
  ],
  alternates: {
    canonical: "/developers",
  },
  openGraph: {
    title: "Developer SDK & Resources | TaskGate",
    description:
      "Build integrations with TaskGate using our Flutter, iOS, and Android SDKs. Access documentation and developer resources.",
    url: "https://taskgate.co/developers",
    siteName: "TaskGate",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "TaskGate — Developer Resources",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Developer SDK & Resources | TaskGate",
    description:
      "Build integrations with TaskGate using our Flutter, iOS, and Android SDKs. Access documentation and developer resources.",
    images: ["/og.png"],
  },
};

export default function DevelopersPage() {
  return <DevelopersContent />;
}

