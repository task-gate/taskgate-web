import React from "react";
import Image from "next/image"; // If using Next.js

const AppStoreDownloadButton = () => {
  const iosUrl = "https://apps.apple.com/app/6740745547";
  const iosAppId = "6755723338";
  const androidPackageName = "com.ever.journal";

  const handleClick = () => {
    if (typeof window !== "undefined") {
      import("react-facebook-pixel").then((module) => {
        const ReactPixel = module.default;
        ReactPixel.init(process.env.NEXT_PUBLIC_META_PIXEL_ID);
        ReactPixel.trackCustom("APP_STORE_Click", {
          button_name: "App Store",
        });
        console.log("App Store button clicked");
      });

      const userAgent = navigator.userAgent || navigator.vendor || window.opera;

      if (/android/i.test(userAgent)) {
        // Open Google Play Store in a new tab
        window.open(
          `https://play.google.com/store/apps/details?id=${androidPackageName}`,
          "_blank"
        );
      } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        // Open Apple App Store in a new tab
        window.open(`https://apps.apple.com/app/id${iosAppId}`, "_blank");
      } else {
        // Fallback to a landing page or website
        window.open(iosUrl, "_blank");
      }
    }
  };

  return (
    <button
      onClick={handleClick}
      style={{ border: "none", background: "none", padding: 0 }}
    >
      <Image
        src="/buttons/app-store-badge.svg"
        alt="Download on the App Store"
        className="w-[150px] h-[45px]"
        width={150} // Adjust width as needed
        height={10} // Adjust height as neede
      />
    </button>
  );
};

export default AppStoreDownloadButton;
