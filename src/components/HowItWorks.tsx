const steps = [
  {
    number: "01",
    title: "Input a Topic",
    description:
      "Enter any topic, keyword, or trend. ContentForge accepts raw ideas in any language.",
    color: "from-indigo-500 to-indigo-600",
  },
  {
    number: "02",
    title: "IdeaGate Evaluates",
    description:
      "8-stage McKinsey framework scores audience relevance, unique angle, timeliness, business value, and executability. Only qualified topics proceed.",
    color: "from-purple-500 to-purple-600",
  },
  {
    number: "03",
    title: "Multi-Platform Generation",
    description:
      "Approved topics are transformed into platform-native content: Xiaohongshu posts, YouTube scripts, X threads, and Instagram carousels — each with optimized formatting.",
    color: "from-pink-500 to-rose-600",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-surface px-6 py-20 sm:py-28 lg:px-8"
    >
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-base text-foreground/60 sm:text-lg">
            Three steps from idea to published content.
          </p>
        </div>

        <div className="mt-16 space-y-12">
          {steps.map((step, i) => (
            <div key={step.number} className="flex gap-6 sm:gap-8">
              <div className="flex flex-col items-center">
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${step.color} text-lg font-bold text-white shadow-lg`}
                >
                  {step.number}
                </div>
                {i < steps.length - 1 && (
                  <div className="mt-2 h-full w-px bg-border" />
                )}
              </div>
              <div className="pb-8">
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/60 sm:text-base">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
