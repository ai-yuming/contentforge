export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-indigo-950/30 dark:via-[#0b0f1a] dark:to-purple-950/20" />
        <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-indigo-200/30 blur-3xl dark:bg-indigo-900/20" />
        <div className="absolute bottom-0 left-0 -z-10 h-[400px] w-[400px] rounded-full bg-purple-200/30 blur-3xl dark:bg-purple-900/20" />
      </div>

      <div className="mx-auto max-w-3xl text-center">
        <div className="mb-6 inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5 text-sm font-medium text-indigo-700 dark:border-indigo-800 dark:bg-indigo-950/50 dark:text-indigo-300">
          Powered by McKinsey-Grade AI Evaluation
        </div>

        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent dark:from-indigo-400 dark:to-purple-400">
            ContentForge
          </span>
        </h1>

        <p className="mt-4 text-lg font-medium text-foreground/80 sm:text-xl">
          AI-Powered Multi-Platform Content Factory
        </p>

        <p className="mt-6 text-base leading-relaxed text-foreground/60 sm:text-lg">
          Input a topic. Pass quality evaluation. Auto-generate content for
          Xiaohongshu, YouTube, X, and Instagram — all from a single prompt.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#features"
            className="rounded-xl bg-indigo-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:bg-indigo-500 hover:shadow-indigo-500/40"
          >
            Explore Features
          </a>
          <a
            href="#how-it-works"
            className="rounded-xl border border-border px-8 py-3.5 text-base font-semibold text-foreground/80 transition hover:border-indigo-300 hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            How It Works
          </a>
        </div>
      </div>
    </section>
  );
}
