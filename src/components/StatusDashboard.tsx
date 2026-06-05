import { useEffect, useState } from "react";
import { Activity, CheckCircle2, Zap } from "lucide-react";

export function StatusDashboard() {
  const [uptime, setUptime] = useState(99.99);
  const [latency, setLatency] = useState(42);

  useEffect(() => {
    const id = setInterval(() => {
      setUptime(99.97 + Math.random() * 0.03);
      setLatency(38 + Math.floor(Math.random() * 14));
    }, 2200);
    return () => clearInterval(id);
  }, []);

  const rows = [
    {
      icon: CheckCircle2,
      label: "API Status",
      value: "Operational",
      meta: `${uptime.toFixed(2)}%`,
      tone: "emerald",
    },
    {
      icon: Activity,
      label: "Active Pipelines",
      value: "0 Failing",
      meta: `${latency}ms p95`,
      tone: "cyber",
    },
    {
      icon: Zap,
      label: "Current MTTR",
      value: "Optimized",
      meta: "−90% YoY",
      tone: "emerald",
    },
  ];

  return (
    <div className="glass rounded-2xl p-5 sm:p-6 shadow-[var(--shadow-elevated)] w-full max-w-md">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-signal opacity-75 animate-ping" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-signal" />
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
            Live System Status
          </span>
        </div>
        <span className="text-[10px] font-mono text-muted-foreground">v1.0.0</span>
      </div>

      <div className="space-y-3">
        {rows.map((r, i) => {
          const Icon = r.icon;
          const accent = r.tone === "emerald" ? "text-emerald-signal" : "text-cyber-blue";
          return (
            <div
              key={r.label}
              className="flex items-center justify-between rounded-xl border border-border/60 bg-surface-elevated/50 px-4 py-3 hover:border-emerald-signal/40 transition-colors"
              style={{ animation: `fade-up 0.6s ease-out both`, animationDelay: `${i * 120}ms` }}
            >
              <div className="flex items-center gap-3">
                <Icon className={`h-4 w-4 ${accent}`} />
                <div>
                  <div className="text-xs text-muted-foreground font-mono">{r.label}</div>
                  <div className="text-sm font-semibold text-foreground">{r.value}</div>
                </div>
              </div>
              <span className={`font-mono text-xs ${accent} animate-ticker`}>{r.meta}</span>
            </div>
          );
        })}
      </div>

      <div className="mt-5 flex items-end gap-1 h-10">
        {Array.from({ length: 32 }).map((_, i) => {
          const h = 20 + Math.sin(i * 0.6 + Date.now() / 1000) * 30 + Math.random() * 30;
          return (
            <div
              key={i}
              className="flex-1 rounded-sm bg-gradient-to-t from-emerald-signal/10 to-emerald-signal/70"
              style={{ height: `${Math.min(100, Math.max(15, h))}%` }}
            />
          );
        })}
      </div>
      <div className="mt-2 flex justify-between text-[10px] font-mono text-muted-foreground">
        <span>requests/sec</span>
        <span>last 60s</span>
      </div>
    </div>
  );
}
