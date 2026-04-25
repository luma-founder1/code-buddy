import { Check, Minus } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Free",
    price: "$0",
    cadence: "forever",
    blurb: "1 project",
    cta: "Download",
    href: "/signup",
    features: [
      ["Modularization", true],
      ["Tailwind cleanup", true],
      ["Structure analysis", true],
    ] as [string, boolean][],
    highlight: false,
  },
  {
    name: "Pro",
    price: "$15",
    cadence: "per month",
    blurb: "Unlimited projects",
    cta: "Start Pro",
    href: "/signup",
    features: [
      ["Intelligent typing (any → real types)", true],
      ["Dead state removal", true],
      ["Semantic renaming", true],
      ["Automatic documentation", true],
      ["Transformation history", true],
      ["Automatic backup", true],
    ] as [string, boolean][],
    highlight: true,
  },
  {
    name: "Team",
    price: "$25",
    cadence: "per month",
    blurb: "Up to 5 members",
    cta: "Start Team",
    href: "/signup",
    features: [
      ["Everything in Pro", true],
      ["Shared dashboard", true],
      ["Code quality reports", true],
      ["Shared guidelines", true],
    ] as [string, boolean][],
    highlight: false,
  },
  {
    name: "Enterprise",
    price: "$1,500",
    cadence: "per month",
    blurb: "Unlimited members",
    cta: "Talk to sales",
    href: "#",
    features: [
      ["Everything in Team", true],
      ["Dedicated SLA", true],
      ["Onboarding", true],
      ["Priority support", true],
    ] as [string, boolean][],
    highlight: false,
  },
];


const Pricing = () => {
  return (
    <section id="pricing" className="border-t border-border py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Pricing
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight tracking-tight text-balance sm:text-5xl md:text-6xl">
            Simple plans, <em className="italic text-muted-foreground">no surprises</em>.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Pay only for Refract.
          </p>
        </div>
 
        <div className="mt-16 grid gap-4 lg:grid-cols-4">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative flex flex-col rounded-2xl border p-6 ${
                p.highlight
                  ? "border-foreground/20 bg-gradient-card shadow-glow"
                  : "border-border bg-card"
              }`}
            >
              {p.highlight && (
                <span className="absolute -top-2.5 left-6 rounded-full bg-foreground px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-background">
                  Most popular
                </span>
              )}
              <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                {p.name}
              </h3>
              <div className="mt-4 flex items-baseline gap-2">
                <span className={`font-display ${p.price.includes('$') ? 'text-5xl' : 'text-2xl'}`}>
                  {p.price}
                </span>
                <span className="text-sm text-muted-foreground">{p.cadence}</span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{p.blurb}</p>

              <Link
                to={p.href}
                className={`mt-6 inline-flex items-center justify-center rounded-full px-4 py-2.5 text-sm font-medium transition-colors ${
                  p.highlight
                    ? "bg-foreground text-background hover:bg-foreground/90"
                    : "border border-border bg-secondary/40 hover:bg-secondary"
                }`}
              >
                {p.cta}
              </Link>

              <ul className="mt-6 space-y-3 border-t border-border pt-6">
                {p.features.map(([label, included]) => (
                  <li key={label} className="flex items-start gap-2.5 text-sm">
                    {included ? (
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                    ) : (
                      <Minus className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/50" />
                    )}
                    <span className={included ? "text-foreground" : "text-muted-foreground/60 line-through"}>
                      {label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Pricing;
