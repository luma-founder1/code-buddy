const CTA = () => {
  return (
    <section className="relative overflow-hidden border-t border-border py-32">
      <div className="pointer-events-none absolute inset-0 glow-radial" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <h2 className="font-display text-5xl leading-tight tracking-tight text-balance sm:text-6xl md:text-7xl">
          Stop shipping <em className="italic text-muted-foreground">tech debt</em>.
          <br /> Start shipping refractions.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
          Download Refract, point it at a repo, watch your score climb. Free
          while we're in beta.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background hover:bg-foreground/90 transition-colors"
          >
            Download for macOS
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-full border border-border bg-card/40 px-6 py-3 text-sm font-medium text-foreground backdrop-blur hover:bg-card transition-colors"
          >
            Windows · Linux
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
