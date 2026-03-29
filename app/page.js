import HomeScroll from "@/components/HomeScroll.client";
import HomeHero from "@/components/HomeHero.client";
import HomePhilosophy from "@/components/HomePhilosophy.client";
import HowItWorks from "@/components/HowItWorks";
import AppFeatures from "@/components/AppFeatures";
import PartnerApps from "@/components/PartnerApps";
import UserTestimonials from "@/components/UserTestimonials";
import Start from "@/components/Start";
import Faqs from "@/components/Faqs";
import AppStoreReviewsCta from "@/components/AppStoreReviewsCta";
import faqsData from "@/components/data/faqs";

const mobileApplicationLd = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: "TaskGate",
  description:
    "TaskGate prevents impulsive app opens by requiring you to complete a quick task first.",
  applicationCategory: "LifestyleApplication",
  operatingSystem: "iOS, Android",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  installUrl: [
    "https://apps.apple.com/app/id6755723338",
    "https://play.google.com/store/apps/details?id=com.tkg.taskgate",
  ],
  publisher: {
    "@type": "Organization",
    name: "TaskGate",
    url: "https://taskgate.co",
  },
};

const faqPageLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqsData.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(mobileApplicationLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqPageLd),
        }}
      />
      <HomeScroll>
        <HomeHero />
        <HomePhilosophy />
        <HowItWorks />
        <AppFeatures />
        <PartnerApps />
        <UserTestimonials />
        <Start />
        <Faqs />
        <AppStoreReviewsCta />
      </HomeScroll>
    </>
  );
}
