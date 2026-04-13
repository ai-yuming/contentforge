"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function Pricing() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
      setStatus("error");
    }
  }

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
            {status === "success" ? (
              <div className="inline-flex items-center gap-2 rounded-xl bg-green-100 px-6 py-3 text-sm font-semibold text-green-700 dark:bg-green-950/50 dark:text-green-400">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                You&apos;re on the list!
              </div>
            ) : !open ? (
              <button
                onClick={() => setOpen(true)}
                className="inline-flex rounded-xl bg-indigo-600 px-8 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-indigo-500"
              >
                Get Notified
              </button>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="mx-auto flex max-w-sm flex-col gap-3 sm:flex-row"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="flex-1 rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20"
                  disabled={status === "loading"}
                  autoFocus
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-indigo-500 disabled:opacity-50"
                >
                  {status === "loading" ? "Joining..." : "Join"}
                </button>
              </form>
            )}

            {status === "error" && (
              <p className="mt-3 text-sm text-red-600 dark:text-red-400">
                {errorMsg}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
