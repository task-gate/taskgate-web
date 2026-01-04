"use client";

import "../globals.css";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Code2,
  ExternalLink,
  Github,
  Package,
  Zap,
  BookOpen,
  Terminal,
  ArrowRight,
} from "lucide-react";
import { SiFlutter, SiApple, SiAndroid } from "react-icons/si";

const sdks = [
  {
    name: "Flutter SDK",
    platform: "Flutter / Dart",
    description:
      "Cross-platform SDK for building TaskGate integrations in Flutter apps. Available on pub.dev with full documentation and examples.",
    icon: (
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
        <SiFlutter className="w-8 h-8 text-white" />
      </div>
    ),
    link: "https://pub.dev/packages/taskgate_sdk",
    linkText: "View on pub.dev",
    badge: "pub.dev",
    badgeColor: "from-cyan-500 to-blue-600",
    installCommand: "flutter pub add taskgate_sdk",
  },
  {
    name: "iOS SDK",
    platform: "Swift / Objective-C",
    description:
      "Native iOS SDK for seamless TaskGate integration in your iOS applications. Supports iOS 13+ with CocoaPods.",
    icon: (
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center">
        <SiApple className="w-8 h-8 text-white" />
      </div>
    ),
    link: "https://github.com/task-gate/taskgate-sdk-ios",
    linkText: "View on GitHub",
    badge: "GitHub",
    badgeColor: "from-gray-600 to-gray-800",
    installCommand: "pod 'TaskGateSDK'",
  },
  {
    name: "Android SDK",
    platform: "Kotlin / Java",
    description:
      "Native Android SDK for integrating TaskGate into your Android apps. Supports Android 6.0+ with Gradle dependency.",
    icon: (
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
        <SiAndroid className="w-8 h-8 text-white" />
      </div>
    ),
    link: "https://github.com/task-gate/taskgate-sdk-android",
    linkText: "View on GitHub",
    badge: "GitHub",
    badgeColor: "from-green-500 to-emerald-600",
    installCommand: 'implementation("co.taskgate:sdk:latest")',
  },
];

const features = [
  {
    icon: <Zap className="w-6 h-6 text-accent" />,
    title: "Easy Integration",
    description: "Get started in minutes with our well-documented SDKs.",
  },
  {
    icon: <BookOpen className="w-6 h-6 text-accent" />,
    title: "Full Documentation",
    description: "Comprehensive guides and API references for every platform.",
  },
  {
    icon: <Terminal className="w-6 h-6 text-accent" />,
    title: "Sample Projects",
    description: "Example apps to help you understand best practices.",
  },
  {
    icon: <Code2 className="w-6 h-6 text-accent" />,
    title: "Open Source",
    description: "All SDKs are open source and available on GitHub.",
  },
];

export default function Developers() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative bg-black pt-32 pb-16 overflow-hidden"
      >
        <div className="relative z-20 max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-accent/10 to-purple-600/10 border border-accent/30">
              <Code2 className="w-4 h-4 text-accent" />
              <span className="bg-gradient-to-r from-accent to-purple-600 bg-clip-text text-transparent font-medium text-sm">
                Developer Resources
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
              Build with{" "}
              <span className="bg-gradient-to-r from-accent to-purple-600 bg-clip-text text-transparent">
                TaskGate
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
              Integrate TaskGate into your apps with our official SDKs.
              Available for Flutter, iOS, and Android.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://github.com/task-gate"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-8 py-4 rounded-lg bg-gradient-to-r from-accent to-purple-600 text-white font-semibold hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl flex items-center gap-2">
                  <Github className="w-5 h-5" />
                  View on GitHub
                </button>
              </a>
              <Link href="/contact-us?interest=developer">
                <button className="px-8 py-4 rounded-lg bg-white/10 backdrop-blur-md border border-white/30 text-white font-semibold hover:bg-white/20 transition-all duration-300">
                  Get Developer Support
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* SDKs Section */}
      <section className="bg-black py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Official SDKs
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Choose the SDK that fits your platform and start integrating
              TaskGate today.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {sdks.map((sdk, index) => (
              <motion.div
                key={sdk.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-gradient-to-br from-white/5 to-white/[0.02] rounded-3xl p-8 border border-white/10 hover:border-accent/50 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-6">
                  {sdk.icon}
                  <span
                    className={`px-3 py-1 rounded-full bg-gradient-to-r ${sdk.badgeColor} text-white text-xs font-medium`}
                  >
                    {sdk.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">
                  {sdk.name}
                </h3>
                <p className="text-accent text-sm mb-4">{sdk.platform}</p>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {sdk.description}
                </p>

                {/* Install Command */}
                <div className="bg-black/50 rounded-lg p-3 mb-6 border border-white/10">
                  <code className="text-sm text-gray-300 break-all">
                    {sdk.installCommand}
                  </code>
                </div>

                <a
                  href={sdk.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent hover:text-white transition-colors group-hover:gap-3 duration-300"
                >
                  {sdk.linkText}
                  <ExternalLink className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gradient-to-b from-black to-gray-900 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Developers Love Our SDKs
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We prioritize developer experience with well-structured,
              thoroughly tested code.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-accent/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Join our developer community and start building with TaskGate
              today. Have questions? We're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://pub.dev/packages/taskgate_sdk"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-8 py-4 rounded-lg bg-gradient-to-r from-accent to-purple-600 text-white font-semibold hover:opacity-90 transition-opacity flex items-center gap-2 justify-center w-full sm:w-auto">
                  <Package className="w-5 h-5" />
                  Get Started with Flutter
                </button>
              </a>
              <Link href="/contact-us?interest=developer">
                <button className="px-8 py-4 rounded-lg bg-white/10 backdrop-blur-md border border-white/30 text-white font-semibold hover:bg-white/20 transition-all duration-300 flex items-center gap-2 justify-center w-full sm:w-auto">
                  Contact Developer Support
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
