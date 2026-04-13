export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border px-6 py-10 lg:px-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="text-sm font-medium text-foreground/40">
          &copy; {new Date().getFullYear()} ContentForge. All rights reserved.
        </div>
        <nav className="flex gap-6 text-sm text-foreground/40">
          <a href="#features" className="transition hover:text-foreground/70">
            Features
          </a>
          <a
            href="#how-it-works"
            className="transition hover:text-foreground/70"
          >
            How It Works
          </a>
          <a href="#pricing" className="transition hover:text-foreground/70">
            Pricing
          </a>
          <a
            href="https://github.com/ai-yuming/contentforge"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-foreground/70"
          >
            GitHub
          </a>
        </nav>
      </div>
    </footer>
  );
}
