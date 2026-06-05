import { TrendingUp, Timer, Rocket, Database } from "lucide-react";

const metrics = [
  {
    value: "99.9%",
    label: "Production Availability Sustained",
    icon: TrendingUp,
    tone: "emerald",
  },
  {
    value: "60–90%",
    label: "Reduction in Mean Time to Resolution (MTTR)",
    icon: Timer,
    tone: "cyber",
  },
  {
    value: "400%",
    label: "Faster Deployment & Release Cycles Enabled",
    icon: Rocket,
    tone: "emerald",
  },
  {
    value: "50+ GB/Day",
    label: "Log Ingestion & Observability Stack Architected",
    icon: Database,
    tone: "cyber",
  },
];

export function ImpactMetrics() {
  return (
    <section className="relative py-20 border-y border-border/60 bg-surface/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-signal">
              // Impact Metrics
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold">Numbers that ship to production.</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((m, i) => {
            const Icon = m.icon;
            const accent = m.tone === "emerald" ? "text-emerald-signal" : "text-cyber-blue";
            const ring = m.tone === "emerald" ? "hover:border-emerald-signal/60" : "hover:border-cyber-blue/60";
            return (
              <div
                key={m.label}
                className={`glass rounded-2xl p-6 group transition-all hover:-translate-y-1 ${ring}`}
                style={{ animation: "fade-up 0.6s ease-out both", animationDelay: `${i * 80}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <Icon className={`h-5 w-5 ${accent}`} />
                  <span className="text-[10px] font-mono text-muted-foreground">
                    {String(i + 1).padStart(2, "0")} / 04
                  </span>
                </div>
                <div className={`text-4xl sm:text-5xl font-bold ${accent} metric-glow font-display`}>
                  {m.value}
                </div>
                <div className="mt-3 text-sm text-muted-foreground leading-snug">{m.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
