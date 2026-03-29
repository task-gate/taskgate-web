"use client";

import GooglePlayDownloadButton from "@/components/GooglePlayDownloadButton";
import AppStoreDownloadButton from "@/components/AppStoreDownloadButton";

export default function StoreDownloadRow({ className = "" }) {
  return (
    <div
      className={`flex flex-col sm:flex-row gap-4 justify-center items-center ${className}`}
    >
      <GooglePlayDownloadButton />
      <AppStoreDownloadButton />
    </div>
  );
}
