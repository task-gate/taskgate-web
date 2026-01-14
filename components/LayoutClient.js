"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { usePathname } from "next/navigation";

// ✅ Load Meta Pixel only on the client (Prevents SSR issues)
const MetaPixelNoSSR = dynamic(() => import("@/components/MetaPixelEvents"), {
  ssr: false,
});

export default function LayoutClient({ children }) {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith("/admin");
  const isPartnerRoute = pathname?.startsWith("/partner/");
  const hideNavFooter = isAdminRoute || isPartnerRoute;

  const pageVariants = {
    initial: { opacity: 0, x: -100 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      x: 100,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <>
      {/* ✅ Ensure Meta Pixel loads only on the client */}
      <Suspense fallback={null}>
        <MetaPixelNoSSR />
      </Suspense>

      {!hideNavFooter && (
        <header className="w-full relative z-50">
          <Navbar />
        </header>
      )}

      <motion.main
        className="w-full mx-auto relative z-10"
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {children}
      </motion.main>

      {!hideNavFooter && (
        <div className="relative z-10">
          <Footer />
        </div>
      )}
    </>
  );
}
