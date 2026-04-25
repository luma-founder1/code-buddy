import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-full pointer-events-none">
        <div className="glow-radial h-full w-full opacity-50" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 text-center">
        <a
          href="#pricing"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1.5 text-xs text-muted-foreground backdrop-blur animate-fade-up"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-success" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-success" />
          </span>
          Now in beta — free for early adopters
          <ArrowRight className="h-3.5 w-3.5" />
        </a>

        <h1
          className="mx-auto mt-8 max-w-4xl font-display text-5xl leading-[1.05] tracking-tight text-balance sm:text-6xl md:text-7xl lg:text-[5.5rem] animate-fade-up"
          style={{ animationDelay: "80ms" }}
        >
          Refract turns AI-generated code into production-ready codebases.
        </h1>

        <p
          className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg animate-fade-up"
          style={{ animationDelay: "160ms" }}
        >
          Stop maintaining what Bolt or v0 built. Refract modularizes, types, documents, and cleans your codebase — automatically.
        </p>

        <div
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row animate-fade-up"
          style={{ animationDelay: "240ms" }}
        >
          <a
            href="#pricing"
            className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background hover:bg-foreground/90 transition-colors"
          >
            Download for macOS
          </a>
          <a
            href="#how"
            className="inline-flex items-center justify-center rounded-full border border-border bg-card/40 px-6 py-3 text-sm font-medium text-foreground backdrop-blur hover:bg-card transition-colors"
          >
            Watch a 90s demo
          </a>
        </div>

        <div
          className="mt-20 animate-fade-up"
          style={{ animationDelay: "320ms" }}
        >
          <div className="relative mx-auto max-w-5xl rounded-2xl border border-border bg-card/50 p-2 backdrop-blur shadow-2xl">
            <div className="aspect-[16/10] overflow-hidden rounded-xl border border-border bg-background">
              {/* This would be replaced with the DashboardMock or an image */}
              <div className="grid h-full place-items-center bg-grid-noise opacity-20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
