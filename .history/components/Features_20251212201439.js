"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  {
    id: "01",
    title: "Impulse Interception",
    desc: [
      "TaskGate catches impulsive app opens before they happen, giving you a moment to pause.",
      "Break the automatic reach-for-phone cycle with intentional interruptions.",
      "Choose consciousness over distraction with every app access.",
    ],
  },
  {
    id: "02",
    title: "Quick Task Challenges",
    desc: [
      "Complete short activities like breathing exercises, reflections, or journal prompts.",
      "Earn access to apps through meaningful micro-tasks that take just seconds.",
      "Build healthier digital habits one task at a time.",
    ],
  },
  {
    id: "03",
    title: "Usage Analytics & Insights",
    desc: [
      "Track how often you're opening apps impulsively vs. intentionally.",
      "Visualize your progress with detailed analytics and usage patterns.",
      "Identify triggers and times when you're most prone to mindless scrolling.",
    ],
  },
  {
    id: "04",
    title: "Customizable App Controls",
    desc: [
      "Choose which apps require task completion and customize your experience.",
      "Set different challenge levels for different apps based on your goals.",
      "Create personalized gatekeeping rules that work for your lifestyle.",
    ],
  },
  {
    id: "05",
    title: "Partner App Integration",
    desc: [
      "Connect with partner apps via deep links for even more task variety.",
      "Complete mini-challenges from partner apps and get redirected back automatically.",
      "Expand your task options beyond built-in activities with seamless integration.",
    ],
  },
  {
    id: "06",
    title: "Privacy-First Design",
    desc: [
      "All your data stays on your device—no cloud storage, no data sharing.",
      "Your usage patterns and task completions remain completely private.",
      "Build better digital habits without compromising your privacy.",
    ],
  },
];

const Feature = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.8 } }}
      className="relative z-10 w-full bg-transparent text-white"
    >
      <article className="container mx-auto py-14 p-4 px-5 md:px-[5%] 2xl:px-0 max-w-[1200px] gap-4flex flex-col items-center justify-center gap-4">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-h2 lg:text-h3 font-bold text-center max-w-[80%]">
            Features & Benefits
          </h2>
          <span className="w-16 h-1 mt-3 bg-bg" />

          <article className="flex flex-col items-center justify-center mt-16">
            <p className="mt-5 text-justify md:max-w-[60%] md:text-center text-white/90">
              TaskGate transforms impulsive app opens into intentional moments.
              With smart interruptions, quick task challenges, and detailed
              analytics, you'll build healthier digital habits and reclaim
              control over your screen time.
            </p>
          </article>
        </div>
        <div className="mt-16 lg:mt-26 max-w-[1000px] mx-auto grid grid-cols-1 gap-5">
          {features.map((paragraph, index) => (
            <motion.article
              key={paragraph.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
              viewport={{ once: true }}
              className={`mt-2 items-center flex flex-col mx-auto md:justify-between gap-4 p-4 py-10 border-b-2 last:border-b-0 border-silver ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="w-[50%] md:w-[40%] flex items-center justify-center">
                <Image
                  src={`/mock/mock${parseInt(paragraph.id) + 2}.png`}
                  alt={paragraph.title}
                  width={300}
                  height={600}
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
              <div className="flex flex-col items-start">
                <h4 className="text-h5 font-bold mt-5 lg:mt0 lg:text-left text-center">
                  {paragraph.title}
                </h4>
                <ul className="mt-2 px-4 text-center lg:text-left">
                  {paragraph.desc.map((item, index) => (
                    <li key={index} className="text-left list-disc">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </article>
    </motion.section>
  );
};

export default Feature;
