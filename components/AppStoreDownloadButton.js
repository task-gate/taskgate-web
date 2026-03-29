"use client";

import React from "react";
import Image from "next/image";

const AppStoreDownloadButton = () => {
  const iosUrl = "https://apps.apple.com/app/6755723338";
  const iosAppId = "6755723338";
  const androidPackageName = "com.tkg.taskgate";

  const handleClick = () => {
    if (typeof window !== "undefined") {
      import("react-facebook-pixel").then((module) => {
        const ReactPixel = module.default;
        ReactPixel.init(process.env.NEXT_PUBLIC_META_PIXEL_ID);
        ReactPixel.trackCustom("APP_STORE_Click", {
          button_name: "App Store",
        });
      });

      const userAgent = navigator.userAgent || navigator.vendor || window.opera;

      if (/android/i.test(userAgent)) {
        window.open(
          `https://play.google.com/store/apps/details?id=${androidPackageName}`,
          "_blank"
        );
      } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        window.open(`https://apps.apple.com/app/id${iosAppId}`, "_blank");
      } else {
        window.open(iosUrl, "_blank");
      }
    }
  };

  return (
    <button
      onClick={handleClick}
      style={{ border: "none", background: "none", padding: 0 }}
      type="button"
    >
      <Image
        src="/buttons/app-store-badge.svg"
        alt="Download on the App Store"
        className="w-[150px] h-[45px]"
        width={150}
        height={45}
      />
    </button>
  );
};

export default AppStoreDownloadButton;
