"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const features = [
  {
    id: "01",
    title: "Break Impulsive Habits",
    desc: [
      "Stop mindless scrolling before it starts by intercepting automatic app opens.",
      "Build awareness of your phone usage patterns and replace bad habits with good ones.",
      "Transform unconscious phone reaching into intentional, purposeful actions.",
    ],
  },
  {
    id: "02",
    title: "Personalized Habit Building",
    desc: [
      "Customize which apps require tasks and create your own habit-building rules.",
      "Choose from breathing exercises, reflections, gratitude prompts, or custom tasks.",
      "Design a system that matches your goals—whether it's reducing social media or building mindfulness.",
    ],
  },
  {
    id: "03",
    title: "Track Your Progress",
    desc: [
      "See exactly how your habits are changing with detailed analytics and insights.",
      "Monitor task completion rates, streak tracking, and time saved from distractions.",
      "Celebrate milestones as you build stronger, healthier digital habits over time.",
    ],
  },
  {
    id: "04",
    title: "Flexible & Adaptive System",
    desc: [
      "Adjust task difficulty and frequency as your habits strengthen.",
      "Set different rules for different times of day—stricter during work, relaxed in the evening.",
      "Your habit-building system evolves with you as you grow and improve.",
    ],
  },
  {
    id: "05",
    title: "Expand With Partner Apps",
    desc: [
      "Integrate with partner apps to add even more productive habits to your routine.",
      "Complete language flashcards, fitness challenges, or learning tasks before app access.",
      "Turn every impulsive moment into an opportunity to practice something valuable.",
    ],
  },
  {
    id: "06",
    title: "Your Data, Your Device",
    desc: [
      "All habit tracking and personal data stays completely private on your device.",
      "No accounts, no cloud sync, no data collection—just you building better habits.",
      "Focus on your growth without worrying about privacy or data security.",
    ],
  },
];

const Feature = () => {
  return (
    <section className="relative w-full bg-[#080c14] text-white overflow-hidden">
      {/* Atmospheric glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-accent/10 rounded-full blur-[130px]" />
      </div>

      <div className="relative z-10 container mx-auto py-24 px-5 md:px-[5%] 2xl:px-0 max-w-[1200px]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-5">
            What You Get
          </p>
          <h2 className="text-h2 lg:text-h1 font-bold text-white mb-6 leading-tight">
            Features & Benefits
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-accent to-purple-600 rounded-full mx-auto mb-8" />
          <p className="text-white/45 max-w-2xl mx-auto leading-relaxed text-lg">
            TaskGate is your personalized habit-building companion that helps
            you replace impulsive scrolling with intentional actions—one mindful
            moment at a time.
          </p>
        </motion.div>

        {/* Feature list */}
        <div className="divide-y divide-white/[0.06]">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col lg:items-center gap-10 lg:gap-16 py-16 lg:py-20 ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              {/* Phone image */}
              <div className="flex justify-center lg:w-[38%]">
                <Image
                  src={`/mock/mock${parseInt(feature.id) + 2}.png`}
                  alt={feature.title}
                  width={300}
                  height={600}
                  className="w-auto max-w-[180px] lg:max-w-[220px] h-auto rounded-3xl shadow-2xl"
                />
              </div>

              {/* Text content */}
              <div className="lg:w-[62%]">
                <span className="text-white/15 text-7xl font-bold tabular-nums leading-none block mb-2 select-none">
                  {feature.id}
                </span>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-accent to-purple-400 bg-clip-text text-transparent leading-tight">
                  {feature.title}
                </h3>
                <div className="space-y-4">
                  {feature.desc.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-white/55 text-sm leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
