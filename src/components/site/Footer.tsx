const cols = [
  {
    title: "Product",
    links: ["Features", "Pricing", "Download", "Changelog"],
  },
  {
    title: "Resources",
    links: ["Documentation", "Refract Score", "Roadmap", "Status"],
  },
  {
    title: "Company",
    links: ["About", "Privacy", "Terms", "Contact"],
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-border py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <div className="grid h-7 w-7 place-items-center rounded-md bg-foreground text-background">
                <span className="font-display text-base leading-none">R</span>
              </div>
              <span className="text-base font-medium tracking-tight">Refract</span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              The desktop tool for maintainable JavaScript and TypeScript codebases.
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {c.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-foreground/80 hover:text-foreground transition-colors"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Refract Labs. All rights reserved.</p>
          <p>Built for developers who ship with AI.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
