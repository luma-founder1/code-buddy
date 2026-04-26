import React, { useState } from "react";
import { Check, Minus, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [showCompare, setShowCompare] = useState(false);

  const plans = [
    {
      name: "Free",
      monthly: "$0",
      annual: "$0",
      cadence: "forever",
      blurb: "1 project",
      cta: "Download",
      href: "/signup",
      highlight: false,
      features: ["Modularization", "Tailwind cleanup", "Structure analysis"],
    },
    {
      name: "Pro",
      monthly: "$20",
      annual: "$16",
      cadence: isAnnual ? "per month, billed annually" : "per month",
      blurb: "Unlimited projects",
      cta: "Start Pro",
      href: "/signup",
      highlight: true,
      features: [
        "Intelligent typing (any → real types)",
        "Dead state removal",
        "Semantic renaming",
        "Automatic documentation",
        "Transformation history",
        "Automatic backup",
      ],
    },
    {
      name: "Team",
      monthly: "$49",
      annual: "$39",
      cadence: isAnnual ? "per month, billed annually" : "per month",
      blurb: "Up to 5 members",
      cta: "Start Team",
      href: "/signup",
      highlight: false,
      features: [
        "Everything in Pro",
        "Shared dashboard",
        "Code quality reports",
        "Shared guidelines",
      ],
    },
    {
      name: "Enterprise",
      monthly: "Custom",
      annual: "Custom",
      cadence: "contact us",
      blurb: "Unlimited members",
      cta: "Talk to sales",
      href: "#",
      highlight: false,
      features: [
        "Everything in Team",
        "Dedicated SLA",
        "Onboarding",
        "Priority support",
      ],
    },
  ];

  const compareCategories = [
    {
      name: "Core",
      features: [
        { label: "Projects", free: "1", pro: "Unlimited", team: "Unlimited", ent: "Unlimited" },
        { label: "Members", free: "1", pro: "1", team: "Up to 5", ent: "Unlimited" },
        { label: "Modularization", free: true, pro: true, team: true, ent: true },
        { label: "Tailwind cleanup", free: true, pro: true, team: true, ent: true },
        { label: "Structure analysis", free: true, pro: true, team: true, ent: true },
      ],
    },
    {
      name: "Refactoring",
      features: [
        { label: "Intelligent typing", free: false, pro: true, team: true, ent: true },
        { label: "Dead state removal", free: false, pro: true, team: true, ent: true },
        { label: "Semantic renaming", free: false, pro: true, team: true, ent: true },
        { label: "Code quality reports", free: false, pro: false, team: true, ent: true },
      ],
    },
    {
      name: "Docs & history",
      features: [
        { label: "Automatic documentation", free: false, pro: true, team: true, ent: true },
        { label: "Transformation history", free: false, pro: "30 days", team: "Unlimited", ent: "Unlimited" },
        { label: "Automatic backup", free: false, pro: true, team: true, ent: true },
      ],
    },
    {
      name: "Collaboration",
      features: [
        { label: "Shared dashboard", free: false, pro: false, team: true, ent: true },
        { label: "Shared guidelines", free: false, pro: false, team: true, ent: true },
        { label: "Role-based access", free: false, pro: false, team: false, ent: true },
      ],
    },
    {
      name: "Support",
      features: [
        { label: "Community support", free: true, pro: true, team: true, ent: true },
        { label: "Email support", free: false, pro: true, team: true, ent: true },
        { label: "Priority support", free: false, pro: false, team: false, ent: true },
        { label: "Dedicated SLA", free: false, pro: false, team: false, ent: true },
        { label: "Onboarding", free: false, pro: false, team: false, ent: true },
      ],
    },
  ];

  return (
    <section id="pricing" className="border-t border-border py-32 bg-background">
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

        <div className="mt-10 flex justify-center">
          <div className="relative flex items-center rounded-full border border-border bg-card p-1">
            <button
              onClick={() => setIsAnnual(false)}
              className={`relative w-28 rounded-full py-1.5 text-sm font-medium transition-colors ${
                !isAnnual ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`relative w-28 rounded-full py-1.5 text-sm font-medium transition-colors ${
                isAnnual ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Annual
            </button>
            <span className="absolute -right-4 -top-3 rounded-full bg-success/20 px-2 py-0.5 text-[10px] font-bold text-success border border-success/30">
              −20%
            </span>
          </div>
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
                <span className={`font-display ${(isAnnual ? p.annual : p.monthly).includes('$') ? 'text-5xl' : 'text-3xl'}`}>
                  {isAnnual ? p.annual : p.monthly}
                </span>
                <span className="text-xs text-muted-foreground max-w-[80px] leading-tight">{p.cadence}</span>
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
                {p.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                    <span className="text-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center">
          <button
            onClick={() => setShowCompare(!showCompare)}
            className="group flex items-center gap-2 text-sm font-medium text-foreground hover:text-foreground/80 transition-colors"
          >
            Compare all features
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-200 ${
                showCompare ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>

        {showCompare && (
          <div className="mt-12 overflow-x-auto pb-4">
            <div className="min-w-[720px]">
              <table className="w-full text-left text-sm border-collapse">
                <thead className="sticky top-16 bg-background z-10">
                  <tr>
                    <th className="w-1/3 py-4 font-medium text-muted-foreground border-b border-border">Feature</th>
                    <th className="w-1/6 py-4 font-medium text-foreground border-b border-border text-center">Free</th>
                    <th className="w-1/6 py-4 font-medium text-foreground border-b border-border text-center bg-card/40">Pro</th>
                    <th className="w-1/6 py-4 font-medium text-foreground border-b border-border text-center">Team</th>
                    <th className="w-1/6 py-4 font-medium text-foreground border-b border-border text-center">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/50">
                  {compareCategories.map((category) => (
                    <React.Fragment key={category.name}>
                      <tr>
                        <td colSpan={5} className="py-6 font-medium text-foreground">
                          {category.name}
                        </td>
                      </tr>
                      {category.features.map((feat) => (
                        <tr key={feat.label} className="group hover:bg-card/30 transition-colors">
                          <td className="py-3 text-muted-foreground">{feat.label}</td>
                          <td className="py-3 text-center text-foreground">
                            {typeof feat.free === "boolean" ? (
                              feat.free ? <Check className="mx-auto h-4 w-4 text-foreground" /> : <Minus className="mx-auto h-4 w-4 text-muted-foreground/30" />
                            ) : (
                              feat.free
                            )}
                          </td>
                          <td className="py-3 text-center text-foreground bg-card/40">
                            {typeof feat.pro === "boolean" ? (
                              feat.pro ? <Check className="mx-auto h-4 w-4 text-success" /> : <Minus className="mx-auto h-4 w-4 text-muted-foreground/30" />
                            ) : (
                              <span className="font-medium">{feat.pro}</span>
                            )}
                          </td>
                          <td className="py-3 text-center text-foreground">
                            {typeof feat.team === "boolean" ? (
                              feat.team ? <Check className="mx-auto h-4 w-4 text-foreground" /> : <Minus className="mx-auto h-4 w-4 text-muted-foreground/30" />
                            ) : (
                              feat.team
                            )}
                          </td>
                          <td className="py-3 text-center text-foreground">
                            {typeof feat.ent === "boolean" ? (
                              feat.ent ? <Check className="mx-auto h-4 w-4 text-foreground" /> : <Minus className="mx-auto h-4 w-4 text-muted-foreground/30" />
                            ) : (
                              feat.ent
                            )}
                          </td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
