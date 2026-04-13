export default function Pricing() {
  return (
    <section id="pricing" className="px-6 py-20 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Pricing
        </h2>
        <p className="mt-4 text-base text-foreground/60 sm:text-lg">
          ContentForge is currently in development.
        </p>

        <div className="mt-12 rounded-2xl border border-dashed border-indigo-300 bg-indigo-50/50 p-12 dark:border-indigo-800 dark:bg-indigo-950/20">
          <div className="text-5xl font-bold text-indigo-600 dark:text-indigo-400">
            Coming Soon
          </div>
          <p className="mt-4 text-sm text-foreground/60">
            Join the waitlist to get early access and founding-member pricing.
          </p>
          <div className="mt-8">
            <a
              href="mailto:martin@contentforge.ai"
              className="inline-flex rounded-xl bg-indigo-600 px-8 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-indigo-500"
            >
              Get Notified
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
