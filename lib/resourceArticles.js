/** SEO resource articles — used by /resources/[slug] */
export const resourceArticles = {
  "why-friction-beats-blocking": {
    title: "Why Small Friction Beats Full Blocking for Screen Time",
    description:
      "Hard blocks fail when willpower dips. A little friction before distracting apps can break automatic loops without an all-or-nothing war with your phone.",
    published: "2026-03-28",
    sections: [
      {
        h2: "The problem with all-or-nothing blocking",
        paragraphs: [
          "Full blocking sounds decisive, but real life is messy: you may genuinely need a map, a message thread, or a work app in the same session where you also tend to scroll. When a block feels unfair, you disable it—and the habit never stabilizes.",
          "Friction-based tools like TaskGate aim for a smaller ask: a pause and a tiny task before the distracting app opens. You stay in control of which apps are gated, and the interruption is short enough to repeat daily.",
        ],
      },
      {
        h2: "How friction supports habit science",
        paragraphs: [
          "Habit loops pair a cue with a routine and a reward. Social apps optimize the cue→reward path to be nearly instant. Inserting a brief task lengthens the path so the cue is no longer automatically equal to scrolling.",
          "Implementation intentions help here too: you decide in advance what you will do when the urge hits—breathe, jot one line, open a partner learning app—so the pause has a default shape.",
        ],
      },
      {
        h2: "Where TaskGate fits",
        paragraphs: [
          "TaskGate is built around intentional interruption, not permanent bans. You can combine it with OS screen-time tools: systems limit overall exposure; TaskGate adds a mindful checkpoint on the apps that steal your attention most.",
        ],
      },
    ],
  },
  "app-blocker-iphone": {
    title: "App Blocker for iPhone: Friction vs. Hard Blocks",
    description:
      "iPhone users can combine Screen Time with apps like TaskGate that add a reflective pause before social and video apps open.",
    published: "2026-03-28",
    sections: [
      {
        h2: "What Screen Time already does",
        paragraphs: [
          "Apple’s Screen Time and Focus modes help with schedules and limits. They are strong for boundaries, but they do not always address the reflexive tap—open Instagram before you have decided whether you really want to.",
        ],
      },
      {
        h2: "Why TaskGate complements Screen Time",
        paragraphs: [
          "TaskGate intercepts launches for apps you select and shows a short task first. That is different from a hard deny: you still reach the app if you choose to, after a moment of contact with your intention.",
          "Partner integrations let that pause be a language flashcard, a breathing exercise in another app, or another quick win—then you return to TaskGate automatically when the partner flow completes.",
        ],
      },
    ],
  },
  "app-blocker-android": {
    title: "App Blocker for Android: Tasks Before Opens",
    description:
      "On Android, TaskGate uses app links and gating to put a speed bump between impulse and distracting apps.",
    published: "2026-03-28",
    sections: [
      {
        h2: "Android habits are different—but the loop is the same",
        paragraphs: [
          "Notifications, home-screen icons, and recents make it easy to reopen the same time sinks. A gate that runs before launch changes the default sequence: tap → pause → decide.",
        ],
      },
      {
        h2: "Deep links and partner apps",
        paragraphs: [
          "TaskGate can send you to a partner app to complete a task, then receive a completion callback so your original destination unlocks. That flow is designed to feel like one continuous habit, not a punishment screen.",
        ],
      },
    ],
  },
  "taskgate-vs-screen-time": {
    title: "TaskGate vs. Screen Time: Complementary, Not Either-Or",
    description:
      "Compare Apple Screen Time limits with TaskGate’s task-based friction—and how to use both together.",
    published: "2026-03-28",
    sections: [
      {
        h2: "Screen Time",
        paragraphs: [
          "Screen Time excels at schedules, app limits, and downtime. It is a system-level guardrail.",
        ],
      },
      {
        h2: "TaskGate",
        paragraphs: [
          "TaskGate is an app-level gate that focuses on the moment of opening: replace a reflex with a short, meaningful action. It does not replace OS limits; it addresses a different layer of the habit stack.",
        ],
      },
      {
        h2: "Using both",
        paragraphs: [
          "Many users combine limits for total exposure with TaskGate for the apps that still trigger impulsive opens during allowed hours.",
        ],
      },
    ],
  },
  "focus-app-for-students": {
    title: "A Focus App for Students: Study Sessions Without Shame",
    description:
      "Students use TaskGate to add a pause before social apps during study blocks—without labeling every slip as failure.",
    published: "2026-03-28",
    sections: [
      {
        h2: "The study context",
        paragraphs: [
          "Phones are both research tools and distraction engines. Gating only the worst offenders keeps navigation and messaging available while adding friction to infinite feeds.",
        ],
      },
      {
        h2: "Tiny tasks, repeatable wins",
        paragraphs: [
          "Short prompts (breathing, one-line reflection, flashcards) are easier to repeat than harsh rules you abandon after one long night.",
        ],
      },
    ],
  },
  "focus-for-remote-work": {
    title: "Focus for Remote Work: Boundaries on Your Phone",
    description:
      "Remote workers use TaskGate to reduce context switches from social apps during deep work hours.",
    published: "2026-03-28",
    sections: [
      {
        h2: "Why phones break work context",
        paragraphs: [
          "Slack and email are already on your laptop; your phone often pulls you into a different graph entirely—short video, social feeds, games.",
        ],
      },
      {
        h2: "Scheduled gating (Premium)",
        paragraphs: [
          "When you need stronger guardrails, scheduled gating can align friction with your calendar—more protection during focus blocks, lighter settings after hours.",
        ],
      },
    ],
  },
  "habit-formation-apps": {
    title: "Habit Formation Apps: Friction, Not Fantasy",
    description:
      "What research-backed habit apps emphasize—and how TaskGate applies friction design to phone use.",
    published: "2026-03-28",
    sections: [
      {
        h2: "What durable habits have in common",
        paragraphs: [
          "Tiny actions, clear cues, and immediate feedback beat giant resolutions. The same applies to digital habits: smaller, repeatable steps beat one-time uninstall drama.",
        ],
      },
      {
        h2: "TaskGate’s approach",
        paragraphs: [
          "TaskGate does not promise overnight transformation. It adds a measurable pause you can keep—so awareness compounds instead of collapsing after a bad day.",
        ],
      },
    ],
  },
};

export function getResourceSlugs() {
  return Object.keys(resourceArticles);
}
