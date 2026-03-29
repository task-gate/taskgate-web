"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  ChevronRight,
  Compass,
  FileText,
  Layers,
  Link2,
  Menu,
  Search,
  Sparkles,
  X,
} from "lucide-react";

const resourceNav = [
  { href: "/resources", label: "Overview" },
  { href: "/features", label: "Focus workflows" },
  { href: "/partnership", label: "Partner integrations" },
  { href: "/about-us", label: "Digital habits" },
];

const pageAnchors = {
  "/resources": [
    { id: "quick-links", label: "Quick links" },
    { id: "guides", label: "Guides" },
    { id: "seo-topics", label: "SEO topics" },
  ],
};

const resourcesAnchors = pageAnchors["/resources"] ?? [];

const featuredResource = {
  href: "/features",
  title: "How TaskGate breaks the impulse-to-scroll loop",
  description:
    "A practical overview of using friction, mini-tasks, and intentional pauses to reduce reflexive app opens.",
  icon: Compass,
  tag: "Featured",
  readTime: "Overview",
};

const guides = [
  {
    href: "/resources/why-friction-beats-blocking",
    title: "Why small friction beats full blocking",
    description:
      "How a short pause before distracting apps can work better than all-or-nothing blocks—and how it fits habit science.",
    icon: BookOpen,
    tag: "Article",
    readTime: "Deep dive",
  },
  {
    href: "/resources/taskgate-vs-screen-time",
    title: "TaskGate vs Screen Time",
    description:
      "When to use OS limits, when to add task-based friction, and how to combine both without fighting your phone.",
    icon: BookOpen,
    tag: "Compare",
    readTime: "5 min",
  },
  {
    href: "/download",
    title: "Getting started with TaskGate",
    description:
      "Install the app, connect your preferred routine, and start introducing deliberate friction into distracting moments.",
    icon: BookOpen,
    tag: "Guide",
    readTime: "Starter",
  },
  {
    href: "/features",
    title: "Focus workflows that fit real phone use",
    description:
      "See how app gating, reflections, breathing prompts, and flashcards can fit into a sustainable daily system.",
    icon: Sparkles,
    tag: "Guide",
    readTime: "Workflow",
  },
  {
    href: "/partnership",
    title: "Partner app integrations for healthier habits",
    description:
      "Learn how external apps can become part of a more intentional access flow inside TaskGate.",
    icon: Layers,
    tag: "Guide",
    readTime: "Ecosystem",
  },
  {
    href: "/docs",
    title: "Technical docs for partners",
    description:
      "If you are integrating with TaskGate directly, the docs section covers SDKs, setup, and launch workflow.",
    icon: FileText,
    tag: "Docs",
    readTime: "Technical",
  },
];

const seoTopics = [
  {
    href: "/about-us",
    title: "Digital habits and intentional phone use",
    description:
      "Position TaskGate around healthier digital routines rather than generic blocking alone.",
    icon: Search,
    tag: "Topic",
    readTime: "SEO theme",
  },
  {
    href: "/features",
    title: "App blocker alternatives with mindfulness built in",
    description:
      "Cover the difference between hard blocking and reflective, task-based access control.",
    icon: Search,
    tag: "Topic",
    readTime: "SEO theme",
  },
  {
    href: "/features",
    title: "Screen time reduction through friction design",
    description:
      "Explain how small moments of pause can outperform all-or-nothing restriction models.",
    icon: Search,
    tag: "Topic",
    readTime: "SEO theme",
  },
];

function SectionLabel({ children }) {
  return (
    <p className="text-[11px] font-semibold uppercase tracking-widest text-white/30">
      {children}
    </p>
  );
}

function Tag({ children }) {
  return (
    <span className="inline-flex items-center rounded-md border border-white/[0.08] bg-white/[0.05] px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-white/60">
      {children}
    </span>
  );
}

function HeroCard({ item }) {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <Link
        href={item.href}
        className="group relative flex flex-col gap-5 overflow-hidden rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/[0.10] via-accent/[0.05] to-transparent p-7 transition-all duration-300 hover:border-accent/50 hover:from-accent/[0.14]"
      >
        <div className="pointer-events-none absolute -left-10 -top-10 h-48 w-48 rounded-full bg-accent/10 blur-3xl" />
        <div className="relative flex items-start gap-4">
          <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-accent/30 bg-accent/15 text-accent">
            <Icon className="h-5 w-5" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="mb-2.5 flex flex-wrap items-center gap-2">
              <Tag>{item.tag}</Tag>
              <span className="text-[11px] text-white/30">{item.readTime}</span>
            </div>
            <h2 className="mb-2.5 text-xl font-bold leading-snug text-white transition-colors group-hover:text-white/90">
              {item.title}
            </h2>
            <p className="max-w-lg text-sm leading-relaxed text-white/55">
              {item.description}
            </p>
          </div>
        </div>
        <div className="relative flex items-center gap-1.5 text-sm font-medium text-accent">
          Explore
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
        </div>
      </Link>
    </motion.div>
  );
}

function SmallCard({ item, index }) {
  const Icon = item.icon;

  return (
    <motion.div
      custom={index}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.35,
        delay: index * 0.07,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      <Link
        href={item.href}
        className="group flex h-full items-start gap-4 rounded-xl border border-white/[0.08] bg-white/[0.025] p-4 transition-all duration-200 hover:border-white/[0.15] hover:bg-white/[0.05]"
      >
        <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.06] text-white/50 transition-colors group-hover:text-white/80">
          <Icon className="h-4 w-4" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="mb-1.5 flex flex-wrap items-center gap-1.5">
            <Tag>{item.tag}</Tag>
            <span className="text-[11px] text-white/25">{item.readTime}</span>
          </div>
          <h3 className="mb-1 text-sm font-semibold leading-snug text-white/80 transition-colors group-hover:text-white">
            {item.title}
          </h3>
          <p className="text-[12px] leading-relaxed text-white/40">
            {item.description}
          </p>
        </div>
        <ChevronRight className="mt-1 hidden h-4 w-4 flex-shrink-0 text-white/20 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-white/50 sm:block" />
      </Link>
    </motion.div>
  );
}

export default function ResourcesContent() {
  const pathname = "/resources";
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeAnchor, setActiveAnchor] = useState(null);

  useEffect(() => {
    const observers = [];

    resourcesAnchors.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveAnchor(id);
          }
        },
        { rootMargin: "-20% 0px -70% 0px" }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  return (
    <div className="min-h-screen bg-black pb-28 pt-24 text-white antialiased">
      <div className="mx-auto flex max-w-7xl px-4 sm:px-6 lg:px-8">
        <aside className="hidden w-56 flex-shrink-0 self-start pt-10 lg:flex">
          <div className="sticky top-28 flex max-h-[calc(100vh-8.5rem)] flex-col gap-7 overflow-y-auto pr-1">
            <div>
              <div className="mb-3 flex items-center gap-2 px-2">
                <Link2 className="h-3.5 w-3.5 text-white/30" />
                <span className="text-[11px] font-semibold uppercase tracking-widest text-white/30">
                  Resources
                </span>
              </div>
              <ul className="space-y-0.5">
                {resourceNav.map((page) => {
                  const active = page.href === pathname;

                  return (
                    <li key={page.href}>
                      <Link
                        href={page.href}
                        className={`flex items-center gap-2 rounded-lg px-2 py-2 text-sm transition-all duration-150 ${
                          active
                            ? "bg-white/[0.06] font-medium text-white"
                            : "text-white/40 hover:bg-white/[0.03] hover:text-white/80"
                        }`}
                      >
                        {active && (
                          <span className="h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                        )}
                        {page.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="border-t border-white/[0.06] pt-5">
              <Link
                href="/docs"
                className="flex items-center gap-2 rounded-lg px-2 py-2 text-sm text-white/30 transition-all duration-150 hover:bg-white/[0.03] hover:text-white/70"
              >
                <BookOpen className="h-3.5 w-3.5 flex-shrink-0" />
                Technical docs
              </Link>
            </div>

            {resourcesAnchors.length > 0 && (
              <div className="border-t border-white/[0.06] pt-5">
                <p className="mb-3 px-2 text-[11px] font-semibold uppercase tracking-widest text-white/30">
                  On this page
                </p>
                <ul className="ml-2 space-y-0.5 border-l border-white/[0.07]">
                  {resourcesAnchors.map((item) => {
                    const active = activeAnchor === item.id;

                    return (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className={`-ml-px block border-l-2 py-1.5 pl-3 pr-2 text-[13px] transition-all duration-150 ${
                            active
                              ? "border-accent text-white"
                              : "border-transparent text-white/30 hover:text-white/70"
                          }`}
                        >
                          {item.label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        </aside>

        <div className="fixed left-0 right-0 top-[80px] z-30 border-b border-white/[0.06] bg-black/90 px-4 backdrop-blur-xl lg:hidden">
          <button
            type="button"
            onClick={() => setSidebarOpen((open) => !open)}
            className="flex items-center gap-2 py-3 text-sm text-white/60 transition-colors hover:text-white"
            aria-expanded={sidebarOpen}
          >
            {sidebarOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            <span>Resources</span>
            <ChevronRight
              className={`h-3.5 w-3.5 transition-transform duration-200 ${
                sidebarOpen ? "rotate-90" : ""
              }`}
            />
          </button>
        </div>

        <AnimatePresence>
          {sidebarOpen && (
            <motion.div
              className="fixed left-4 right-4 top-[122px] z-40 overflow-hidden rounded-xl border border-white/[0.08] bg-[#0d0d0d] shadow-2xl lg:hidden"
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
            >
              <div className="max-h-[70vh] overflow-y-auto p-3">
                <p className="mb-2 px-2 text-[10px] font-semibold uppercase tracking-widest text-white/30">
                  Resources
                </p>
                {resourceNav.map((page) => {
                  const active = page.href === pathname;

                  return (
                    <Link
                      key={page.href}
                      href={page.href}
                      onClick={() => setSidebarOpen(false)}
                      className={`flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm transition-colors ${
                        active
                          ? "bg-white/[0.07] font-medium text-white"
                          : "text-white/50 hover:bg-white/[0.04] hover:text-white"
                      }`}
                    >
                      {active && (
                        <span className="h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                      )}
                      {page.label}
                    </Link>
                  );
                })}

                <div className="my-2 border-t border-white/[0.06]" />
                <Link
                  href="/docs"
                  onClick={() => setSidebarOpen(false)}
                  className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm text-white/40 transition-colors hover:bg-white/[0.04] hover:text-white"
                >
                  <BookOpen className="h-3.5 w-3.5" />
                  Technical docs
                </Link>

                {resourcesAnchors.length > 0 && (
                  <>
                    <div className="my-2 border-t border-white/[0.06]" />
                    <p className="mb-2 px-2 text-[10px] font-semibold uppercase tracking-widest text-white/30">
                      On this page
                    </p>
                    {resourcesAnchors.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        onClick={() => setSidebarOpen(false)}
                        className="block rounded-lg px-3 py-2 text-sm text-white/45 transition-colors hover:bg-white/[0.04] hover:text-white"
                      >
                        {item.label}
                      </a>
                    ))}
                  </>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <main className="mt-0 min-w-0 flex-1 overflow-x-auto pt-[4.75rem] sm:pt-16 lg:border-l lg:border-white/[0.06] lg:pl-12 lg:pt-10">
          <article className="flex w-full max-w-3xl flex-col gap-12">
            <nav className="text-xs text-white/30" aria-label="Breadcrumb">
              <ol className="flex flex-wrap gap-x-2 gap-y-1">
                <li>
                  <Link href="/" className="transition-colors hover:text-white/60">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-white/50">Resources</li>
              </ol>
            </nav>

            <motion.header
              className="flex flex-col gap-3"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <p className="text-[11px] font-semibold uppercase tracking-widest text-white/30">
                Resources
              </p>
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
                Guides and topic pages for focus, friction, and digital habits
              </h1>
              <p className="max-w-[560px] text-base leading-relaxed text-white/50 sm:text-lg">
                Explore guides and topic hubs on app gating, mindful phone use,
                and the behavior-design ideas that power TaskGate.
              </p>
            </motion.header>

            <section id="quick-links" className="scroll-mt-28 flex flex-col gap-3">
              <SectionLabel>Featured</SectionLabel>
              <HeroCard item={featuredResource} />
            </section>

            <section id="guides" className="scroll-mt-28 flex flex-col gap-3">
              <SectionLabel>Guides</SectionLabel>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {guides.map((item, index) => (
                  <SmallCard key={item.title} item={item} index={index} />
                ))}
              </div>
            </section>

            <section id="seo-topics" className="scroll-mt-28 flex flex-col gap-3">
              <SectionLabel>SEO Topics</SectionLabel>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {seoTopics.map((item, index) => (
                  <SmallCard key={item.title} item={item} index={index} />
                ))}
              </div>
            </section>

            <p className="border-t border-white/[0.06] pt-6 text-[13px] text-white/40">
              Looking for SDKs and integration steps? See{" "}
              <Link href="/docs" className="text-white/55 hover:text-white/80">
                Technical docs
              </Link>
              .
            </p>
          </article>
        </main>
      </div>
    </div>
  );
}
