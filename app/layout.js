import "./globals.css";
import LayoutClient from "@/components/LayoutClient";

// ✅ Export metadata for SEO - this runs on the server
export const metadata = {
  title: "TaskGate — Design Your Digital Habits",
  description:
    "TaskGate prevents impulsive app opens by requiring you to complete a quick task first. Break the cycle of mindless scrolling with breathing exercises, reflections, flashcards, or partner app challenges.",
  keywords: [
    "digital habits",
    "screen time",
    "app blocker",
    "focus app",
    "productivity",
    "mindfulness",
    "TaskGate",
  ],
  authors: [{ name: "TaskGate" }],
  creator: "TaskGate",
  publisher: "TaskGate",
  metadataBase: new URL("https://taskgate.co"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "TaskGate — Design Your Digital Habits",
    description:
      "Break impulsive scrolling habits. TaskGate intercepts app opens and requires a mini-task before access. Supports partner app integration.",
    url: "https://taskgate.co",
    siteName: "TaskGate",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "TaskGate — Design Your Digital Habits",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TaskGate — Design Your Digital Habits",
    description:
      "Break impulsive scrolling habits. TaskGate intercepts app opens and requires a mini-task before access. Supports partner app integration.",
    site: "@TaskGateApp",
    images: ["/og.png"],
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      {
        url: "/favicon/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/favicon/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/favicon/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// ✅ Structured data for Google rich results
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "TaskGate",
  url: "https://taskgate.co",
  logo: "https://taskgate.co/favicon/android-chrome-512x512.png",
  sameAs: [],
  description:
    "TaskGate prevents impulsive app opens by requiring you to complete a quick task first.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="text-gray-900 min-h-screen flex flex-col bg-black"
        suppressHydrationWarning
      >
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
