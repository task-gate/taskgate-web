"use client";

import React from "react";
import Image from "next/image";

const GooglePlayDownloadButton = () => {
  const androidUrl =
    "https://play.google.com/store/apps/details?id=com.tkg.taskgate";
  const iosAppId = "6755723338";
  const androidPackageName = "com.tkg.taskgate";

  const handleClick = () => {
    if (typeof window !== "undefined") {
      import("react-facebook-pixel").then((module) => {
        const ReactPixel = module.default;
        ReactPixel.init(process.env.NEXT_PUBLIC_META_PIXEL_ID);
        ReactPixel.trackCustom("GOOGLE_PLAY_Click", {
          button_name: "Google Play",
        });
      });
    }

    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android/i.test(userAgent)) {
      window.open(
        `https://play.google.com/store/apps/details?id=${androidPackageName}`,
        "_blank"
      );
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      window.open(`https://apps.apple.com/app/id${iosAppId}`, "_blank");
    } else {
      window.open(androidUrl, "_blank");
    }
  };

  return (
    <button
      onClick={handleClick}
      style={{ border: "none", background: "none", padding: 0 }}
      type="button"
    >
      <Image
        src="/buttons/google-play-badge.png"
        alt="Get it on Google Play"
        className="w-[150px] h-[45px]"
        width={150}
        height={50}
      />
    </button>
  );
};

export default GooglePlayDownloadButton;
