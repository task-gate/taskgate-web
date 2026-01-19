const fs = require('fs');

const content = `import TermsContent from "@/components/TermsContent";

export const metadata = {
  title: "Terms and Conditions | TaskGate",
  description:
    "Read the terms and conditions governing your use of TaskGate. Understand your rights, obligations, and our policies for using our mindful app usage tool.",
  keywords: [
    "TaskGate terms",
    "terms and conditions",
    "user agreement",
    "TaskGate legal",
    "app usage terms",
  ],
  alternates: {
    canonical: "/terms-and-conditions",
  },
  openGraph: {
    title: "Terms and Conditions | TaskGate",
    description:
      "Read the terms and conditions governing your use of TaskGate. Understand your rights, obligations, and our policies.",
    url: "https://taskgate.co/terms-and-conditions",
    siteName: "TaskGate",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "TaskGate — Terms and Conditions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms and Conditions | TaskGate",
    description:
      "Read the terms and conditions governing your use of TaskGate. Understand your rights, obligations, and our policies.",
    images: ["/og.png"],
  },
};

export default function TermsAndConditionsPage() {
  return <TermsContent />;
}
`;

fs.writeFileSync('/Users/hawk2/Desktop/development/taskgate/taskgate-web-landing/app/terms-and-conditions/page.js', content);
console.log('Done writing terms-and-conditions/page.js');
