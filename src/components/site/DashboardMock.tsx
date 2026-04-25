import { 
  GitBranch, 
  Zap, 
  FileCode2, 
  AlertTriangle, 
  CheckCircle2 
} from "lucide-react";

const DashboardMock = () => {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-card shadow-card">
      {/* Top bar */}
      <div className="flex items-center justify-between border-b border-border/80 bg-card/60 px-5 py-3">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <div className="h-3 w-3 rounded-full bg-[#28c840]" />
          </div>
          <span className="ml-3 font-mono text-xs text-muted-foreground">
            refract — ~/projects/acme-web
          </span>
        </div>
        <div className="hidden items-center gap-2 sm:flex">
          <span className="rounded-md bg-secondary px-2 py-1 font-mono text-[10px] text-muted-foreground">
            <GitBranch className="mr-1 inline h-3 w-3" />
            main
          </span>
          <span className="rounded-md bg-secondary px-2 py-1 font-mono text-[10px] text-success">
            <Zap className="mr-1 inline h-3 w-3" />
            Optimized
          </span>
        </div>
      </div>

      <div className="grid gap-px bg-border">
        {/* Suggestions */}
        <div className="bg-card">
          <div className="flex items-center justify-between border-b border-border px-5 py-3">
            <p className="text-xs font-medium">Refactor Suggestions</p>
            <p className="text-xs text-muted-foreground">Sorted by impact</p>
          </div>
          <ul className="divide-y divide-border">
            {[
              { 
                icon: FileCode2, 
                color: "text-primary", 
                title: "Extract oversized `ProductCard` component", 
                file: "src/components/Shop.tsx", 
                impact: "High" 
              },
              { 
                icon: Zap, 
                color: "text-warning", 
                title: "Consolidate 12 repeated Tailwind classes", 
                file: "src/pages/Landing.tsx", 
                impact: "Medium" 
              },
              { 
                icon: AlertTriangle, 
                color: "text-destructive", 
                title: "Infer types for `useCart` hook", 
                file: "src/hooks/useCart.ts", 
                impact: "High" 
              },
              { 
                icon: CheckCircle2, 
                color: "text-success", 
                title: "Remove 4 redundant state variables", 
                file: "src/lib/state.ts", 
                impact: "Low" 
              },
            ].map((s, i) => (
              <li
                key={i}
                className="flex items-center gap-4 px-5 py-4 text-left hover:bg-secondary/40"
              >
                <s.icon className={`h-4 w-4 shrink-0 ${s.color}`} />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium">{s.title}</p>
                  <p className="truncate font-mono text-[11px] text-muted-foreground">
                    {s.file}
                  </p>
                </div>
                <span className={`hidden rounded-full px-2 py-0.5 font-mono text-[10px] sm:inline border ${
                  s.impact === "High" ? "border-destructive/20 text-destructive bg-destructive/5" :
                  s.impact === "Medium" ? "border-warning/20 text-warning bg-warning/5" :
                  "border-success/20 text-success bg-success/5"
                }`}>
                  {s.impact} Impact
                </span>
                <button className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-[11px] hover:bg-secondary font-medium">
                  Refactor
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardMock;
