"use client";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Link from "next/link";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Product Designer",
    rating: 5,
    text: "TaskGate has completely changed my relationship with my phone. The breathing exercises before opening Instagram help me stay mindful. I've reduced my social media time by 60% in just two weeks!",
  },
  {
    name: "Marcus Rodriguez",
    role: "Software Engineer",
    rating: 5,
    text: "I love how TaskGate makes me pause before mindlessly scrolling. The mini-tasks are quick but effective. The partner app integration is genius – I'm learning languages through quick flashcards before checking Twitter.",
  },
  {
    name: "Emma Thompson",
    role: "Marketing Manager",
    rating: 5,
    text: "TaskGate transformed my impulsive phone habits. Instead of immediately opening TikTok, I complete a quick journal prompt. It's helped me be more intentional about my screen time. Highly recommend!",
  },
  {
    name: "David Park",
    role: "Student",
    rating: 5,
    text: "What I love about TaskGate is how it interrupts the scroll cycle without completely blocking apps. The tasks are short enough that they don't feel like a burden, but long enough to make me reconsider if I really need to open the app.",
  },
  {
    name: "Lisa Johnson",
    role: "Freelance Writer",
    rating: 5,
    text: "TaskGate helps me maintain focus during work hours. The breathing exercises before opening distracting apps help me refocus. I've become so much more productive since I started using it.",
  },
  {
    name: "Alex Kumar",
    role: "Entrepreneur",
    rating: 5,
    text: "The partner app integration is brilliant! I use a meditation app's mini-sessions as my gate. It's a win-win – I get more mindful and my impulsive phone checking has dropped dramatically.",
  },
];

const UserTestimonials = () => {
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-primary"
          >
            What Users Will Love
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-secondary text-sm max-w-md mx-auto"
          >
            Here&apos;s the kind of experience we&apos;re building TaskGate to
            deliver. Real testimonials coming soon.
          </motion.p>
        </div>

        {/* Testimonial grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-accent/20 transition-all duration-300"
            >
              {/* Quote icon */}
              <Quote className="w-6 h-6 text-accent/20 mb-4 group-hover:text-accent/40 transition-colors duration-300" />

              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              <blockquote className="text-primary text-sm leading-relaxed mb-6 italic">
                &ldquo;{testimonial.text}&rdquo;
              </blockquote>

              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 bg-gradient-to-br from-accent to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-xs flex-shrink-0">
                  {testimonial.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <div className="font-semibold text-primary text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-secondary">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-center mt-14"
        >
          <div className="bg-bg-secondary border border-border rounded-2xl p-10">
            <h3 className="text-2xl font-bold mb-3 text-primary">
              Be Among the First to Break the Scroll Cycle
            </h3>
            <p className="text-secondary text-sm mb-8 max-w-xl mx-auto leading-relaxed">
              Start your journey to more intentional phone usage today.
              Transform impulsive app opens into moments of mindfulness and
              purpose.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => {
                  const userAgent =
                    navigator.userAgent || navigator.vendor || window.opera;
                  if (/android/i.test(userAgent)) {
                    window.open(
                      "https://play.google.com/store/apps/details?id=com.tkg.taskgate",
                      "_blank"
                    );
                  } else {
                    window.open(
                      "https://apps.apple.com/app/6755723338",
                      "_blank"
                    );
                  }
                }}
                className="bg-gradient-to-r from-accent to-purple-600 text-white px-8 py-3 rounded-xl font-medium hover:opacity-90 transition-opacity cursor-pointer w-full sm:w-auto text-sm"
              >
                Download Now
              </button>
              <Link href="/about-us" className="w-full sm:w-auto">
                <button className="border border-border text-primary px-8 py-3 rounded-xl font-medium hover:border-accent hover:text-accent transition-all w-full text-sm">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UserTestimonials;
