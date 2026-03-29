"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export const MetaPixelEvents = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("react-facebook-pixel").then((module) => {
        const ReactPixel = module.default;

        if (!window.fbqInitialized) {
          ReactPixel.init(process.env.NEXT_PUBLIC_META_PIXEL_ID);
          window.fbqInitialized = true;
        }

        ReactPixel.pageView();

        // ✅ Track "ViewContent" for key pages dynamically
        const trackedPages = ["/features", "/premium", "/about-us", "/updates"];

        if (trackedPages.includes(pathname)) {
          ReactPixel.track("ViewContent", {
            content_name: pathname.replace("/", "").toUpperCase() + " Page",
          });
        }

        // ✅ Track Scroll Depth 50%
        const handleScroll = () => {
          requestAnimationFrame(() => {
            const scrollY = window.scrollY;
            const pageHeight = document.body.scrollHeight;
            const windowHeight = window.innerHeight;

            const scrollPercentage =
              (scrollY / (pageHeight - windowHeight)) * 100;

            if (scrollPercentage > 50) {
              ReactPixel.trackCustom("ScrollDepth50", {
                content_name: "50% Page Scroll",
                page: pathname,
              });

              window.removeEventListener("scroll", handleScroll);
            }
          });
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        // ✅ Track Time on Page (fires after 30 seconds)
        const timeOnPageTimeout = setTimeout(() => {
          ReactPixel.trackCustom("TimeOnPage", {
            time_spent: "30 seconds",
            page: pathname,
          });
        }, 30000);

        return () => {
          window.removeEventListener("scroll", handleScroll);
          clearTimeout(timeOnPageTimeout);
        };
      });
    }
  }, [pathname]);

  return null;
};

export default MetaPixelEvents;
