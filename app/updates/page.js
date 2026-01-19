import UpdatesContent from "@/components/UpdatesContent";

export const metadata = {
  title: "Updates | TaskGate — What's New",
  description:
    "Stay up to date with the latest TaskGate updates, new features, and improvements. Join the waitlist to be the first to know about new releases.",
  keywords: [
    "TaskGate updates",
    "new features",
    "app updates",
    "changelog",
    "what's new",
    "TaskGate news",
  ],
  alternates: {
    canonical: "/updates",
  },
  openGraph: {
    title: "Updates | TaskGate — What's New",
    description:
      "Stay up to date with the latest TaskGate updates, new features, and improvements.",
    url: "https://taskgate.co/updates",
    siteName: "TaskGate",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "TaskGate — Updates",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Updates | TaskGate — What's New",
    description:
      "Stay up to date with the latest TaskGate updates, new features, and improvements.",
    images: ["/og.png"],
  },
};

export default function UpdatesPage() {
  return <UpdatesContent />;
}
