"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import defaultFaqs from "./data/faqs.js";

const FaqsWhite = ({
  items = defaultFaqs,
  heading = "Frequently Asked Questions",
}) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative z-10 w-full bg-white overflow-hidden">
      <article className="container mx-auto pt-20 pb-16 px-5 md:px-[5%] 2xl:px-0 max-w-3xl flex flex-col items-center gap-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 w-full"
        >
          <h2 className="text-h2 lg:text-h3 font-bold text-primary mb-4">
            {heading}
          </h2>
          <span className="inline-block w-12 h-0.5 bg-gradient-to-r from-accent to-purple-600 rounded-full" />
        </motion.div>

        {/* FAQ list */}
        <ul className="w-full space-y-3 mt-6">
          {items.map((faq, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.04 }}
            >
              <button
                onClick={() => toggleAnswer(index)}
                className={`w-full text-left rounded-xl border transition-all duration-200 overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 ${
                  activeIndex === index
                    ? "bg-accent/5 border-accent/20"
                    : "bg-bg-secondary border-border hover:border-accent/30 hover:bg-white"
                }`}
              >
                {/* Question row */}
                <div className="flex items-center justify-between px-5 py-4 gap-4">
                  <span
                    className={`text-base font-semibold leading-snug transition-colors duration-200 ${
                      activeIndex === index ? "text-accent" : "text-primary"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                      activeIndex === index
                        ? "rotate-180 text-accent"
                        : "text-secondary"
                    }`}
                  />
                </div>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {activeIndex === index && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-1 border-t border-accent/10">
                        <p className="text-secondary text-sm leading-relaxed">
                          {faq.answer}
                        </p>
                        {faq.list && (
                          <ul className="list-disc pl-5 mt-3 space-y-1">
                            {faq.list.map((item, idx) => (
                              <li
                                key={idx}
                                className="text-secondary text-sm leading-relaxed"
                              >
                                {item}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.li>
          ))}
        </ul>
      </article>
    </section>
  );
};

export default FaqsWhite;
