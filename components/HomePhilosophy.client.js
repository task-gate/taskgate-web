"use client";

import { motion } from "framer-motion";

export default function HomePhilosophy() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative py-24 bg-[#080c14]"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative z-20 max-w-4xl mx-auto px-4 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-5"
        >
          The Philosophy
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white leading-tight"
        >
          &ldquo;Pause before you scroll&rdquo;
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg text-white/65 leading-relaxed mb-14 max-w-2xl mx-auto"
        >
          Most app usage is impulsive—you reach for your phone without
          thinking. TaskGate adds intentionality by requiring a small
          commitment before access. Whether it&apos;s a breathing exercise, a
          reflection, or a partner app&apos;s challenge, you&apos;ll build
          healthier digital habits one task at a time.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="p-7 bg-white/[0.03] rounded-2xl border border-white/[0.08]"
          >
            <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-5">
              <span className="text-white/30 text-xs font-semibold">01</span>
            </div>
            <h3 className="text-base font-semibold mb-3 text-white/60">
              Before: Impulsive Opening
            </h3>
            <p className="text-white/55 text-sm leading-relaxed">
              You tap Instagram or TikTok without thinking, losing minutes (or
              hours) to endless scrolling and distraction.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="p-7 bg-gradient-to-br from-accent/10 to-purple-600/10 rounded-2xl border border-accent/20"
          >
            <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center mb-5">
              <span className="text-accent text-xs font-semibold">02</span>
            </div>
            <h3 className="text-base font-semibold mb-3 bg-gradient-to-r from-accent to-purple-400 bg-clip-text text-transparent">
              After: Intentional Access
            </h3>
            <p className="text-white/65 text-sm leading-relaxed">
              TaskGate intercepts the impulse, presents a quick task, and gives
              you the choice—continue with purpose or redirect your time.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
