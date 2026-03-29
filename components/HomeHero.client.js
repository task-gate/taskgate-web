"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Target, Eye, Heart, Zap } from "lucide-react";
import AppStoreDownloadButton from "@/components/AppStoreDownloadButton";
import GooglePlayDownloadButton from "@/components/GooglePlayDownloadButton";

const principleCards = [
  {
    icon: <Eye className="w-4 h-4 text-accent" />,
    title: "Impulse Interception",
    desc: "Catches impulsive app opens before they happen, giving you a moment to pause.",
    accentColor: "from-accent to-blue-400",
  },
  {
    icon: <Heart className="w-4 h-4 text-rose-400" />,
    title: "Meaningful Tasks",
    desc: "Breathing exercises, journal prompts, or partner app challenges earn you access.",
    accentColor: "from-rose-500 to-pink-500",
  },
  {
    icon: <Zap className="w-4 h-4 text-violet-400" />,
    title: "Partner Integration",
    desc: "Connect with partner apps via deep links—redirected back automatically when done.",
    accentColor: "from-violet-500 to-purple-500",
  },
];

export default function HomeHero() {
  return (
    <section className="relative min-h-screen min-h-dvh bg-[#080c14] pt-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[700px] h-[700px] bg-accent/10 rounded-full blur-[150px]" />
        <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-purple-600/8 rounded-full blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)`,
            backgroundSize: "44px 44px",
          }}
        />
        {/* Right-side vignette so dot grid fades on the phone side */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_100%_at_80%_50%,_transparent_20%,_#080c14_65%)]" />
      </div>

      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split hero layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-80px)] py-16">

          {/* Left: Text + CTA */}
          <div className="order-2 lg:order-1 text-center lg:text-left">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-7 px-4 py-2 rounded-full bg-gradient-to-r from-accent/10 to-purple-600/10 backdrop-blur-md border border-accent/25 shadow-lg"
            >
              <Target className="w-4 h-4 text-accent flex-shrink-0" />
              <span className="bg-gradient-to-r from-accent to-purple-400 bg-clip-text text-transparent font-medium text-sm tracking-wide">
                Build Better Habits, One Task at a Time
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5rem] font-bold leading-[0.93] tracking-tight mb-6"
            >
              <span className="block text-white">Design Your</span>
              <span className="block bg-gradient-to-r from-accent via-blue-400 to-purple-500 bg-clip-text text-transparent pb-1">
                Digital Habits
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.7 }}
              className="text-base md:text-lg text-white/60 leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0"
            >
              TaskGate intercepts impulsive app opens and requires you to complete a{" "}
              <span className="text-white/85 font-medium">quick task</span> before
              access is granted. Choose breathing exercises, reflections, flashcards—or
              connect with partner apps for even more variety.
            </motion.p>

            {/* Download buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-10"
            >
              <GooglePlayDownloadButton />
              <AppStoreDownloadButton />
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.7 }}
              className="flex items-center gap-7 justify-center lg:justify-start"
            >
              <div>
                <p className="text-xl font-bold text-white">Free</p>
                <p className="text-xs text-white/40 mt-0.5">To download</p>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div>
                <p className="text-xl font-bold text-white">iOS & Android</p>
                <p className="text-xs text-white/40 mt-0.5">Both platforms</p>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div>
                <p className="text-xl font-bold text-white">~30s</p>
                <p className="text-xs text-white/40 mt-0.5">Per task</p>
              </div>
            </motion.div>
          </div>

          {/* Right: Phone mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end relative"
          >
            {/* Ambient glow behind phone */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-72 h-72 bg-accent/20 rounded-full blur-[90px]" />
            </div>
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-52 h-52 bg-purple-600/15 rounded-full blur-[70px] pointer-events-none" />

            <Image
              src="/mock/mock8.png"
              alt="TaskGate App Screenshot"
              width={300}
              height={600}
              quality={85}
              sizes="(max-width: 640px) 55vw, (max-width: 1024px) 40vw, 300px"
              priority
              className="relative z-10 w-auto h-auto max-h-[520px] lg:max-h-[600px] drop-shadow-2xl"
            />
          </motion.div>
        </div>

        {/* Principle cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-20"
        >
          {principleCards.map((card, i) => (
            <div
              key={i}
              className="relative p-5 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.07] hover:border-white/15 transition-all duration-300 overflow-hidden group"
            >
              <div
                className={`absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b ${card.accentColor} opacity-60 group-hover:opacity-100 transition-opacity`}
              />
              <div className="mb-3 w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                {card.icon}
              </div>
              <h3 className="text-sm font-semibold text-white mb-1.5">{card.title}</h3>
              <p className="text-white/55 text-xs leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
