import ResourcesContent from "@/components/ResourcesContent";

export const metadata = {
  title: "TaskGate Resources | Guides for Focus, Digital Habits, and App Blocking",
  description:
    "TaskGate resources and guides covering digital habits, app blocking, focus workflows, mindfulness prompts, and partner app integrations.",
  keywords: [
    "digital habits guide",
    "app blocker guide",
    "focus app resources",
    "mindful phone use",
    "screen time habits",
    "TaskGate resources",
    "partner app guides",
    "digital wellness articles",
  ],
  alternates: {
    canonical: "/resources",
  },
  openGraph: {
    title: "TaskGate Resources | Guides for Focus, Digital Habits, and App Blocking",
    description:
      "Explore TaskGate guides and articles on healthier phone habits, app blocking, focus systems, and partner integrations.",
    url: "https://taskgate.co/resources",
    siteName: "TaskGate",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "TaskGate Resources",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TaskGate Resources | Guides for Focus, Digital Habits, and App Blocking",
    description:
      "Explore TaskGate guides and articles on healthier phone habits, app blocking, focus systems, and partner integrations.",
    images: ["/og.png"],
  },
};

export default function ResourcesPage() {
  return <ResourcesContent />;
}
