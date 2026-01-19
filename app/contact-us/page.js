import ContactContent from "@/components/ContactContent";

export const metadata = {
  title: "Contact Us | TaskGate — Get in Touch",
  description:
    "Have questions about TaskGate? Contact our team for support, partnership inquiries, or developer assistance. We are here to help you build better digital habits.",
  keywords: [
    "contact TaskGate",
    "TaskGate support",
    "developer support",
    "partnership inquiry",
    "digital habits help",
  ],
  alternates: {
    canonical: "/contact-us",
  },
  openGraph: {
    title: "Contact Us | TaskGate — Get in Touch",
    description:
      "Have questions about TaskGate? Contact our team for support, partnership inquiries, or developer assistance.",
    url: "https://taskgate.co/contact-us",
    siteName: "TaskGate",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "TaskGate — Contact Us",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | TaskGate — Get in Touch",
    description:
      "Have questions about TaskGate? Contact our team for support, partnership inquiries, or developer assistance.",
    images: ["/og.png"],
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
