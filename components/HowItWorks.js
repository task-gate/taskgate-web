const steps = [
  {
    number: "01",
    title: "Select Apps to Gate",
    description:
      "Choose which apps you want to gate - social media, games, or any apps that tend to trigger impulsive usage.",
  },
  {
    number: "02",
    title: "Customize Your Tasks",
    description:
      "Pick from built-in tasks like breathing exercises, journal prompts, and flashcards - or connect partner apps for more variety.",
  },
  {
    number: "03",
    title: "TaskGate Intercepts",
    description:
      "When you try to open a gated app, TaskGate intercepts the launch and presents a mini-task instead.",
  },
  {
    number: "04",
    title: "Complete the Task",
    description:
      "Finish the quick activity - it only takes seconds. Partner apps open via deep links and return automatically when done.",
  },
  {
    number: "05",
    title: "Access Granted",
    description:
      "After completing the task, you can proceed to your app - but now with intentionality instead of impulse.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative z-10 w-full bg-white overflow-hidden">
      {/* Gradient fade from the preceding dark section */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#080c14] to-white pointer-events-none z-10" />
      <div className="container mx-auto py-24 px-5 md:px-[5%] 2xl:px-0 max-w-[1400px]">
        <div className="text-center mb-16">
          <p className="text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-5">
            The Process
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-primary">
            How TaskGate Works
          </h2>
          <p className="text-secondary text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Break the cycle of impulsive app opens with meaningful micro-tasks
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center lg:justify-center">
            <video
              src="/mock/demo.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full max-w-[200px] lg:max-w-[240px] h-auto rounded-3xl shadow-2xl"
            />
          </div>

          <div className="space-y-3">
            {steps.map((step, index) => (
              <div key={step.number} className="group relative">
                {index < steps.length - 1 && (
                  <div className="absolute left-5 top-14 w-px h-3 bg-border" />
                )}

                <div className="flex gap-4 p-5 rounded-xl bg-white border border-border hover:border-accent/30 hover:shadow-sm transition-all duration-300">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-purple-600 flex items-center justify-center shadow-sm">
                      <span className="text-white font-semibold text-xs">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 pt-0.5">
                    <h3 className="text-sm font-semibold mb-1 text-primary">
                      {step.title}
                    </h3>
                    <p className="text-secondary text-xs leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-accent/5 to-purple-600/5 border border-accent/15 rounded-xl px-8 py-4">
            <p className="text-primary text-sm">
              <span className="font-semibold text-accent">
                Partner apps integrate seamlessly
              </span>{" "}
              — TaskGate opens their mini-task via app link, and they redirect
              back automatically when complete.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
