const fs = require('fs');
const path = require('path');

const basePath = '/Users/hawk2/Desktop/development/taskgate/taskgate-web-landing/app';

// Terms and Conditions
const termsContent = `import TermsContent from "@/components/TermsContent";

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

// Developers
const developersContent = `import DevelopersContent from "@/components/DevelopersContent";

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
`;

// Partnership
const partnershipContent = `import PartnershipContent from "@/components/PartnershipContent";

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
`;

// Write files
fs.writeFileSync(path.join(basePath, 'terms-and-conditions/page.js'), termsContent);
console.log('✓ terms-and-conditions/page.js');

fs.writeFileSync(path.join(basePath, 'developers/page.js'), developersContent);
console.log('✓ developers/page.js');

fs.writeFileSync(path.join(basePath, 'partnership/page.js'), partnershipContent);
console.log('✓ partnership/page.js');

console.log('Done!');
