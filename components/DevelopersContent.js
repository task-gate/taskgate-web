"use client";

import "../app/globals.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  ChevronRight,
  Cpu,
  ExternalLink,
  Layers,
  Link2,
  Menu,
  Rocket,
  ShieldCheck,
  X,
} from "lucide-react";
import { SiAndroid, SiApple, SiFlutter, SiGithub } from "react-icons/si";

const pageAnchors = [
  { id: "quick-links", label: "Quick links" },
  { id: "integration-workflow", label: "Workflow" },
  { id: "sdk-library", label: "SDK library" },
  { id: "implementation-notes", label: "Implementation notes" },
  { id: "launch-support", label: "Launch support" },
];

const featuredResource = {
  href: "/partner",
  title: "Open the Partner Portal",
  description:
    "Create a providerId, configure your app, and move from testing to production approval in one place.",
  icon: Rocket,
  tag: "Featured",
  meta: "Start here",
};

const guides = [
  {
    href: "/partner",
    title: "Create your providerId",
    description:
      "Register your partner account and get the identifier you will use across your TaskGate integration.",
    icon: ShieldCheck,
    tag: "Guide",
    meta: "Portal setup",
  },
  {
    href: "/partnership",
    title: "Review the partner model",
    description:
      "Understand how partner tasks fit into TaskGate and what the launch process looks like.",
    icon: Layers,
    tag: "Guide",
    meta: "Program overview",
  },
  {
    href: "https://github.com/task-gate",
    title: "Browse TaskGate GitHub",
    description:
      "See the public SDK repositories and reference material for each supported platform.",
    icon: SiGithub,
    tag: "Repo",
    meta: "Open source",
    external: true,
  },
  {
    href: "/contact-us?interest=developer",
    title: "Talk to developer support",
    description:
      "Reach out if you need help with setup, deep linking, testing, or production rollout.",
    icon: BookOpen,
    tag: "Support",
    meta: "Direct contact",
  },
];

const sdkResources = [
  {
    href: "https://pub.dev/packages/taskgate_sdk",
    title: "Flutter SDK",
    description:
      "Use the Dart package to integrate TaskGate into a cross-platform app with one dependency.",
    icon: SiFlutter,
    tag: "SDK",
    meta: "pub.dev",
    external: true,
  },
  {
    href: "https://github.com/task-gate/taskgate-sdk-ios",
    title: "iOS SDK",
    description:
      "Native iOS package for apps that need TaskGate task launches, callbacks, and platform-specific behavior.",
    icon: SiApple,
    tag: "SDK",
    meta: "Swift / Obj-C",
    external: true,
  },
  {
    href: "https://github.com/task-gate/taskgate-sdk-android",
    title: "Android SDK",
    description:
      "Native Android package for integrating app links, task handling, and TaskGate completion callbacks.",
    icon: SiAndroid,
    tag: "SDK",
    meta: "Kotlin / Java",
    external: true,
  },
];

const related = [
  { href: "/features", label: "Product features", icon: Cpu },
  { href: "/download", label: "Get the app", icon: ArrowRight },
  { href: "/contact-us?interest=partnership", label: "Partnership inquiries", icon: Layers },
];

const workflowSteps = [
  {
    title: "Register and generate a providerId",
    body: "Create a partner account first. That providerId is the stable key for configuration, testing, and submission.",
  },
  {
    title: "Set up the integration in the portal",
    body: "Add your app identity, links, and task metadata so TaskGate knows how to present and launch your experience.",
  },
  {
    title: "Install the right SDK",
    body: "Choose Flutter, iOS, or Android depending on your app stack and wire TaskGate into your navigation flow.",
  },
  {
    title: "Configure deep links and callbacks",
    body: "Make sure TaskGate can launch your app and your app can return a completion callback when the mini-task is done.",
  },
  {
    title: "Test on the TaskGate dev build",
    body: "Validate launch behavior, task state, and callback handling before you request production approval.",
  },
];

const implementationNotes = [
  {
    title: "Deep link reliability matters",
    body: "Treat app links and universal links as production-critical. A broken handoff means the task cannot start or complete correctly.",
  },
  {
    title: "Design the task for interruption",
    body: "Users arrive in your app because TaskGate interrupted another action. Keep the mini-task focused, short, and obvious to finish.",
  },
  {
    title: "Plan for approval readiness",
    body: "Your config, icon assets, redirect behavior, and task completion flow should be stable before requesting production rollout.",
  },
];

function SectionLabel({ children }) {
  return (
    <p className="text-[11px] font-semibold uppercase tracking-widest text-white/30">
      {children}
    </p>
  );
}

function Tag({ children, tone = "default" }) {
  const tones = {
    default: "text-accent bg-accent/10 border-accent/20",
    muted: "text-white/55 bg-white/[0.05] border-white/[0.08]",
  };

  return (
    <span
      className={`inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

function ResourceLink({ href, external, className, children }) {
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
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
      <ResourceLink
        href={item.href}
        external={item.external}
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
              <span className="text-[11px] text-white/30">{item.meta}</span>
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
          Open resource
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
        </div>
      </ResourceLink>
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
      <ResourceLink
        href={item.href}
        external={item.external}
        className="group flex h-full items-start gap-4 rounded-xl border border-white/[0.08] bg-white/[0.025] p-4 transition-all duration-200 hover:border-white/[0.15] hover:bg-white/[0.05]"
      >
        <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.06] text-white/50 transition-colors group-hover:text-white/80">
          <Icon className="h-4 w-4" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="mb-1.5 flex flex-wrap items-center gap-1.5">
            <Tag tone="muted">{item.tag}</Tag>
            <span className="text-[11px] text-white/25">{item.meta}</span>
          </div>
          <h3 className="mb-1 text-sm font-semibold leading-snug text-white/80 transition-colors group-hover:text-white">
            {item.title}
          </h3>
          <p className="text-[12px] leading-relaxed text-white/40">
            {item.description}
          </p>
        </div>
        {item.external ? (
          <ExternalLink className="mt-1 hidden h-4 w-4 flex-shrink-0 text-white/20 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-white/50 sm:block" />
        ) : (
          <ChevronRight className="mt-1 hidden h-4 w-4 flex-shrink-0 text-white/20 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-white/50 sm:block" />
        )}
      </ResourceLink>
    </motion.div>
  );
}

export default function DevelopersContent() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeAnchor, setActiveAnchor] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const observers = [];

    pageAnchors.forEach(({ id }) => {
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
                  Docs
                </span>
              </div>
              <ul className="space-y-0.5">
                <li>
                  <a
                    href="#top"
                    className="flex items-center gap-2 rounded-lg bg-white/[0.06] px-2 py-2 text-sm font-medium text-white transition-all duration-150"
                  >
                    <span className="h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                    Overview
                  </a>
                </li>
              </ul>
            </div>

            <div className="border-t border-white/[0.06] pt-5">
              <p className="mb-3 px-2 text-[11px] font-semibold uppercase tracking-widest text-white/30">
                On this page
              </p>
              <ul className="ml-2 space-y-0.5 border-l border-white/[0.07]">
                {pageAnchors.map((item) => {
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

            <div className="border-t border-white/[0.06] pt-5">
              <Link
                href="/partner"
                className="flex items-center gap-2 rounded-lg px-2 py-2 text-sm text-white/30 transition-all duration-150 hover:bg-white/[0.03] hover:text-white/70"
              >
                <Rocket className="h-3.5 w-3.5 flex-shrink-0" />
                Open Partner Portal
              </Link>
            </div>
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
            <span>Docs</span>
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
                  Docs
                </p>
                <a
                  href="#top"
                  onClick={() => setSidebarOpen(false)}
                  className="flex items-center gap-2 rounded-lg bg-white/[0.07] px-3 py-2.5 text-sm font-medium text-white transition-colors"
                >
                  <span className="h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                  Overview
                </a>

                <div className="my-2 border-t border-white/[0.06]" />
                <p className="mb-2 px-2 text-[10px] font-semibold uppercase tracking-widest text-white/30">
                  On this page
                </p>
                {pageAnchors.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setSidebarOpen(false)}
                    className="block rounded-lg px-3 py-2 text-sm text-white/45 transition-colors hover:bg-white/[0.04] hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}

                <div className="my-2 border-t border-white/[0.06]" />
                <Link
                  href="/partner"
                  onClick={() => setSidebarOpen(false)}
                  className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm text-white/40 transition-colors hover:bg-white/[0.04] hover:text-white"
                >
                  <Rocket className="h-3.5 w-3.5" />
                  Open Partner Portal
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <main className="mt-0 min-w-0 flex-1 overflow-x-auto border-white/[0.06] pt-[4.75rem] sm:pt-16 lg:border-l lg:pl-12 lg:pt-10">
          <article
            id="top"
            className="flex w-full max-w-3xl flex-col gap-12"
          >
            <nav className="text-xs text-white/30" aria-label="Breadcrumb">
              <ol className="flex flex-wrap gap-x-2 gap-y-1">
                <li>
                  <Link href="/" className="transition-colors hover:text-white/60">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-white/50">Docs</li>
              </ol>
            </nav>

            <motion.header
              className="flex flex-col gap-3"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <p className="text-[11px] font-semibold uppercase tracking-widest text-white/30">
                Docs
              </p>
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
                Build TaskGate integrations with a cleaner launch path
              </h1>
              <p className="max-w-[560px] text-base leading-relaxed text-white/50 sm:text-lg">
                Use the Partner Portal, platform SDKs, and launch checklist to
                ship a TaskGate-ready experience without copying a generic app
                integration flow.
              </p>
            </motion.header>

            <section id="quick-links" className="scroll-mt-28 flex flex-col gap-3">
              <SectionLabel>Featured</SectionLabel>
              <HeroCard item={featuredResource} />
            </section>

            <section className="flex flex-col gap-3">
              <SectionLabel>Guides</SectionLabel>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {guides.map((item, index) => (
                  <SmallCard key={item.title} item={item} index={index} />
                ))}
              </div>
            </section>

            <section id="integration-workflow" className="scroll-mt-28 flex flex-col gap-4">
              <SectionLabel>Workflow</SectionLabel>
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6">
                <div className="space-y-5">
                  {workflowSteps.map((step, index) => (
                    <div
                      key={step.title}
                      className="flex items-start gap-4 border-b border-white/[0.06] pb-5 last:border-b-0 last:pb-0"
                    >
                      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-sm font-semibold text-accent">
                        {index + 1}
                      </div>
                      <div>
                        <h2 className="mb-1.5 text-lg font-semibold text-white">
                          {step.title}
                        </h2>
                        <p className="text-sm leading-relaxed text-white/55">
                          {step.body}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section id="sdk-library" className="scroll-mt-28 flex flex-col gap-3">
              <SectionLabel>SDK Library</SectionLabel>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {sdkResources.map((item, index) => (
                  <SmallCard key={item.title} item={item} index={index} />
                ))}
              </div>
            </section>

            <section id="implementation-notes" className="scroll-mt-28 flex flex-col gap-4">
              <SectionLabel>Implementation Notes</SectionLabel>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                {implementationNotes.map((note) => (
                  <div
                    key={note.title}
                    className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-5"
                  >
                    <h3 className="mb-2 text-sm font-semibold text-white">
                      {note.title}
                    </h3>
                    <p className="text-[13px] leading-relaxed text-white/45">
                      {note.body}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section id="launch-support" className="scroll-mt-28 flex flex-col gap-3">
              <SectionLabel>Also Useful</SectionLabel>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                {related.map((item) => {
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.02] px-4 py-3 transition-all duration-200 hover:border-white/[0.12] hover:bg-white/[0.05]"
                    >
                      <Icon className="h-4 w-4 flex-shrink-0 text-white/30 transition-colors group-hover:text-white/60" />
                      <span className="text-sm text-white/50 transition-colors group-hover:text-white/80">
                        {item.label}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </section>

            <p className="border-t border-white/[0.06] pt-6 text-[13px] text-white/25">
              Built for TaskGate partners who need a simple path from SDK setup
              to production approval.
            </p>
          </article>
        </main>
      </div>
    </div>
  );
}
