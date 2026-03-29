"use client";
import { motion } from "framer-motion";
import Reviews from "./data/reviews";
import { Quote } from "lucide-react";

const Testimonial = () => {
  return (
    <section className="relative z-10 w-full bg-white py-20 overflow-hidden">
      <div className="container mx-auto px-5 md:px-[5%] 2xl:px-0 max-w-[1200px]">
        <div
          className="mb-10 rounded-2xl border-2 border-amber-400/80 bg-amber-50 px-5 py-5 shadow-sm md:px-8 md:py-6"
          role="note"
          aria-label="Disclaimer"
        >
          <p className="text-center text-sm font-bold uppercase tracking-wide text-amber-950">
            Illustrative examples — not customer reviews
          </p>
          <p className="mt-2 text-center text-sm leading-relaxed text-amber-950/90">
            The quotes below describe the experience we are designing TaskGate to
            deliver. They are not testimonials from verified users or app store
            ratings.
          </p>
        </div>
        {/* Header */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-4"
          >
            Expected Feedback
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-primary mb-4"
          >
            What Users Will Love
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-secondary text-sm max-w-sm mx-auto leading-relaxed"
          >
            Here&apos;s the kind of experience we&apos;re building TaskGate to
            deliver. Real testimonials coming soon.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {Reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className="group bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-accent/25 transition-all duration-300"
            >
              <Quote className="w-5 h-5 text-accent/20 mb-4 group-hover:text-accent/40 transition-colors" />
              <p className="text-primary text-sm leading-relaxed italic mb-6">
                {review.desc}
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-9 h-9 bg-gradient-to-br from-accent to-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                  {review.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <div className="font-semibold text-primary text-sm">
                    {review.name}
                  </div>
                  <div className="text-xs text-secondary">{review.title}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
