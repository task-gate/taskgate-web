import DownloadClient from "./DownloadClient";

export const metadata = {
  title: "Download TaskGate | App Store & Google Play",
  description:
    "Download TaskGate for iOS or Android. Start building intentional digital habits today.",
  alternates: { canonical: "/download" },
  openGraph: {
    title: "Download TaskGate | App Store & Google Play",
    description:
      "Download TaskGate for iOS or Android. Start building intentional digital habits today.",
    url: "https://taskgate.co/download",
    siteName: "TaskGate",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Download TaskGate | App Store & Google Play",
    description:
      "Download TaskGate for iOS or Android. Start building intentional digital habits today.",
  },
};

export default function DownloadPage() {
  return <DownloadClient />;
}
