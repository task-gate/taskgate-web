"use client";

import "../globals.css";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import AppStoreDownloadButton from "@/components/AppStoreDownloadButton";
import GooglePlayDownloadButton from "@/components/GooglePlayDownloadButton";
import { Smartphone, Target, CheckCircle2 } from "lucide-react";

export default function Download() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    "Break impulsive app habits",
    "Complete tasks before scrolling",
    "Track your progress",
    "Integrate with partner apps",
  ];

  return (
    <>
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative min-h-screen bg-black pt-32 pb-20 overflow-hidden"
      >
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-purple-600/5 to-transparent pointer-events-none" />

        <div className="relative z-20 max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent">
                Download{" "}
              </span>
              <span className="bg-gradient-to-r from-accent to-purple-600 bg-clip-text text-transparent">
                TaskGate
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
            >
              Start designing your digital habits today. Available on iOS and
              Android.
            </motion.p>

            {/* Features Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-16"
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-left p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-gray-300 text-lg">{feature}</span>
                </div>
              ))}
            </motion.div>

            {/* Download Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <AppStoreDownloadButton />
              <GooglePlayDownloadButton />
            </motion.div>
          </div>

          {/* App Screenshot */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="relative max-w-md mx-auto"
          >
            <Image
              src="/mock/mock1.png"
              alt="TaskGate App Screenshot"
              width={400}
              height={800}
              className="w-full h-auto rounded-3xl shadow-2xl"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Secondary CTA Section */}
      <section className="bg-gradient-to-br from-accent/10 via-purple-600/10 to-transparent py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Digital Habits?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Join thousands of users who are taking control of their screen
              time and building healthier digital habits.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <AppStoreDownloadButton />
              <GooglePlayDownloadButton />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
