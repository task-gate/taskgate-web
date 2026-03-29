import {
  Clock,
  Heart,
  Target,
  BarChart3,
  Smartphone,
  Brain,
} from "lucide-react";
import StoreDownloadRow from "@/components/StoreDownloadRow.client";

const features = [
  {
    icon: Heart,
    title: "Impulse Interception",
    description:
      "TaskGate catches impulsive app opens before they happen, breaking the automatic reach-for-phone cycle.",
    accent: "text-rose-400",
    bg: "bg-rose-500/10",
    border: "border-rose-500/20",
  },
  {
    icon: Target,
    title: "Diverse Mini-Tasks",
    description:
      "Choose from breathing exercises, journal prompts, flashcards, quick reflections, and more to complete before app access.",
    accent: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
  },
  {
    icon: Brain,
    title: "Partner App Integration",
    description:
      "Connect with partner apps via deep links. Complete their mini-tasks and get redirected back automatically with a completion callback.",
    accent: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
  },
  {
    icon: Clock,
    title: "Usage Analytics",
    description:
      "Track how often you're intercepted, which tasks you complete, and see your progress toward more intentional phone habits.",
    accent: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
  },
  {
    icon: Smartphone,
    title: "Selective Gating",
    description:
      "Choose exactly which apps to gate. Leave productivity apps open while adding friction to social media and games.",
    accent: "text-accent",
    bg: "bg-accent/10",
    border: "border-accent/20",
  },
  {
    icon: BarChart3,
    title: "Habit Building",
    description:
      "Build awareness and reduce impulsive usage over time. Each task reinforces intentional decision-making.",
    accent: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
  },
];

export default function AppFeatures() {
  return (
    <section className="relative w-full bg-[#080c14] py-24 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative z-20 container mx-auto px-5 md:px-[5%] 2xl:px-0 max-w-[1200px]">
        <div className="text-center mb-16">
          <p className="text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-5">
            What&apos;s Inside
          </p>
          <h2 className="text-h2 lg:text-h1 font-bold mb-5 text-white leading-tight">
            Features That Put You
            <br />
            Back in Control
          </h2>
          <p className="text-lg text-white/65 max-w-2xl mx-auto leading-relaxed">
            Discover how TaskGate transforms impulsive app opens into
            opportunities for mindfulness, learning, and intentional digital
            habits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group p-6 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.07] hover:border-white/15 transition-all duration-300"
              >
                <div
                  className={`mb-5 w-11 h-11 rounded-xl ${feature.bg} border ${feature.border} flex items-center justify-center ${feature.accent} group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-white/65 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <div className="relative bg-gradient-to-br from-accent/10 to-purple-600/10 border border-white/10 p-10 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-purple-600/5" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-3 text-white">
                Ready to Break the Scroll Cycle?
              </h3>
              <p className="text-white/65 mb-8 max-w-2xl mx-auto leading-relaxed">
                Join thousands who are using TaskGate to build healthier digital
                habits and transform impulsive scrolling into intentional usage.
              </p>
              <StoreDownloadRow className="justify-center" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
