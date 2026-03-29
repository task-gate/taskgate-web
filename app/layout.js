import "./globals.css";
import { Inter } from "next/font/google";
import LayoutClient from "@/components/LayoutClient";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

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
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TaskGate — Design Your Digital Habits",
    description:
      "Break impulsive scrolling habits. TaskGate intercepts app opens and requires a mini-task before access. Supports partner app integration.",
    site: "@TaskGateApp",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
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
    shortcut: ["/favicon.ico"],
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

const logoUrl = "https://taskgate.co/favicon/android-chrome-512x512.png";

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "TaskGate",
  url: "https://taskgate.co",
  logo: {
    "@type": "ImageObject",
    url: logoUrl,
    width: 512,
    height: 512,
  },
  sameAs: [
    "https://apps.apple.com/app/id6755723338",
    "https://play.google.com/store/apps/details?id=com.tkg.taskgate",
    "https://twitter.com/TaskGateApp",
  ],
  description:
    "TaskGate prevents impulsive app opens by requiring you to complete a quick task first.",
};

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "TaskGate",
  url: "https://taskgate.co",
  publisher: {
    "@type": "Organization",
    name: "TaskGate",
    logo: {
      "@type": "ImageObject",
      url: logoUrl,
      width: 512,
      height: 512,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link
          rel="preload"
          href="/fonts/TiemposFine-Regular.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
        />
      </head>
      <body
        className={`${inter.className} text-gray-900 min-h-screen flex flex-col bg-black`}
        suppressHydrationWarning
      >
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
