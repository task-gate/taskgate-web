"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function FounderSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative z-10 w-full border-y border-white/[0.06] bg-white/[0.02] py-16 text-white"
    >
      <div className="container mx-auto max-w-3xl px-5 md:px-[5%] 2xl:px-0">
        <p className="mb-2 text-center text-[11px] font-semibold uppercase tracking-widest text-white/40">
          Who built TaskGate
        </p>
        <h2 className="mb-6 text-center text-2xl font-bold md:text-3xl">
          A small team focused on digital habits
        </h2>
        <div className="flex flex-col items-center gap-6 md:flex-row md:items-start md:gap-10">
          <div className="relative flex h-28 w-28 flex-shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5">
            <Image
              src="/app_logo.svg"
              alt="TaskGate"
              width={80}
              height={80}
              className="h-full w-full object-contain"
            />
          </div>
          <div className="text-center md:text-left">
            <p className="leading-relaxed text-white/80">
              TaskGate is built by designers and engineers who care about
              intentional technology: privacy-first defaults, clear on-device
              analytics, and friction that supports habit change without shame.
            </p>
            <p className="mt-4 text-sm text-white/50">
              Press or partnerships:{" "}
              <a
                href="mailto:support@taskgate.co"
                className="text-accent hover:underline"
              >
                support@taskgate.co
              </a>{" "}
              ·{" "}
              <Link href="/contact-us" className="text-accent hover:underline">
                Contact form
              </Link>
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
