const steps = [
  {
    n: "01",
    title: "Open your project",
    body: "Connect a GitHub or GitLab repo, or open a local folder. Your code stays on your machine.",
  },
  {
    n: "02",
    title: "Refract analyzes",
    body: "Refract scans for oversized components, repeated logic, bad types, unnecessary state, and generic naming.",
  },
  {
    n: "03",
    title: "Review the changes",
    body: "Get a prioritized list of transformations. Preview every change side by side before accepting anything.",
  },
  {
    n: "04",
    title: "Apply and ship",
    body: "Accept the changes you want. Refract applies them and opens a Pull Request with a clean, auto-generated changelog.",
  },
];


const HowItWorks = () => {
  return (
    <section id="how" className="border-t border-border py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              How it works
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight tracking-tight text-balance sm:text-5xl">
              From vibe-coded mess to clean codebase in minutes.
            </h2>

          </div>

          <ol className="space-y-px overflow-hidden rounded-2xl border border-border bg-border">
            {steps.map((s) => (
              <li
                key={s.n}
                className="grid grid-cols-[80px_1fr] gap-6 bg-background p-8 transition-colors hover:bg-card"
              >
                <span className="font-display text-3xl text-muted-foreground">
                  {s.n}
                </span>
                <div>
                  <h3 className="text-lg font-medium">{s.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {s.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
