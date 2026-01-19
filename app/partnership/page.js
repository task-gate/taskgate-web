import PartnershipContent from "@/components/PartnershipContent";

export const metadata = {
  title: "Partner With TaskGate | Grow Your App",
  description:
    "Join the TaskGate partner program to reach engaged users building better digital habits. Integrate your app as a mindful task and increase user acquisition.",
  keywords: [
    "TaskGate partnership",
    "app partnership",
    "user acquisition",
    "digital wellness partner",
    "app integration",
    "mindful tasks",
  ],
  alternates: {
    canonical: "/partnership",
  },
  openGraph: {
    title: "Partner With TaskGate | Grow Your App",
    description:
      "Join the TaskGate partner program to reach engaged users building better digital habits. Integrate your app as a mindful task.",
    url: "https://taskgate.co/partnership",
    siteName: "TaskGate",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "TaskGate — Partnership Program",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Partner With TaskGate | Grow Your App",
    description:
      "Join the TaskGate partner program to reach engaged users building better digital habits. Integrate your app as a mindful task.",
    images: ["/og.png"],
  },
};

export default function PartnershipPage() {
  return <PartnershipContent />;
}
