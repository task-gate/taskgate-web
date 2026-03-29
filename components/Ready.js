"use client";
import { motion } from "framer-motion";
import AppStoreDownloadButton from "./AppStoreDownloadButton";
import GooglePlayDownloadButton from "./GooglePlayDownloadButton";

const ReadyToStart = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative z-10 w-full bg-[#080c14] text-white overflow-hidden"
    >
      {/* Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-accent/10 rounded-full blur-[100px]" />
      </div>

      <article className="relative z-10 container mx-auto py-20 px-5 md:px-[5%] 2xl:px-0 max-w-[1200px] flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
        <div className="flex flex-col gap-5 max-w-xl">
          <p className="text-accent text-xs font-semibold tracking-[0.2em] uppercase">
            Get Started
          </p>
          <h2 className="text-h3 lg:text-h4 font-bold leading-tight text-white">
            Ready to Transform
            <br />
            Your Digital Habits?
          </h2>
          <p className="text-white/45 text-sm leading-relaxed">
            Begin your conscious digital living journey today—your intentional
            practice starts with TaskGate.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row md:flex-col gap-3 flex-shrink-0">
          <AppStoreDownloadButton />
          <GooglePlayDownloadButton />
        </div>
      </article>
    </motion.section>
  );
};

export default ReadyToStart;
