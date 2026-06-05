import { GitBranch, LineChart, Workflow, ExternalLink } from "lucide-react";

const projects = [
  {
    icon: Workflow,
    title: "CI/CD Pipeline Automation & Reliability Platform",
    stack: ["Jenkins", "Kubernetes", "Python"],
    impact: "30% reduction in build times",
    description:
      "Pipeline platform with SonarQube + OWASP security gates, parallel test sharding, and Kubernetes-native runners.",
    tone: "emerald",
  },
  {
    icon: LineChart,
    title: "Observability & Real-Time Alerting System",
    stack: ["ELK", "Prometheus", "Grafana"],
    impact: "50+ GB/day telemetry processed",
    description:
      "Drill-down dashboards, structured log parsing, alert routing with SLO-based error budgets and noise suppression.",
    tone: "cyber",
  },
  {
    icon: GitBranch,
    title: "Zero-Touch Automated DevOps Delivery Ecosystem",
    stack: ["Gitea", "Jenkins", "PostgreSQL"],
    impact: "70% manual effort reduction",
    description:
      "End-to-end delivery with full audit-log traceability, role-based promotion gates and immutable build provenance.",
    tone: "emerald",
  },
];

function ArchitecturePreview({ tone }: { tone: string }) {
  const color = tone === "emerald" ? "text-emerald-signal" : "text-cyber-blue";
  return (
    <div className="relative h-32 rounded-xl border border-border bg-surface-elevated/50 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <svg viewBox="0 0 300 120" className={`absolute inset-0 w-full h-full ${color}`}>
        <g fill="currentColor" opacity="0.9">
          <rect x="20" y="50" width="40" height="20" rx="3" />
          <rect x="130" y="20" width="40" height="20" rx="3" />
          <rect x="130" y="80" width="40" height="20" rx="3" />
          <rect x="240" y="50" width="40" height="20" rx="3" />
        </g>
        <g stroke="currentColor" strokeWidth="1.2" fill="none" opacity="0.6">
          <path d="M60 60 Q 95 60 130 30" />
          <path d="M60 60 Q 95 60 130 90" />
          <path d="M170 30 Q 205 30 240 60" />
          <path d="M170 90 Q 205 90 240 60" />
        </g>
        <g fill="currentColor">
          <circle cx="60" cy="60" r="2.5"><animate attributeName="opacity" values="0.2;1;0.2" dur="2s" repeatCount="indefinite" /></circle>
          <circle cx="170" cy="30" r="2.5"><animate attributeName="opacity" values="0.2;1;0.2" dur="2s" begin="0.4s" repeatCount="indefinite" /></circle>
          <circle cx="170" cy="90" r="2.5"><animate attributeName="opacity" values="0.2;1;0.2" dur="2s" begin="0.8s" repeatCount="indefinite" /></circle>
          <circle cx="240" cy="60" r="2.5"><animate attributeName="opacity" values="0.2;1;0.2" dur="2s" begin="1.2s" repeatCount="indefinite" /></circle>
        </g>
      </svg>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-cyber-blue">
            // Featured Projects
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold">Systems built for scale and silence.</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => {
            const Icon = p.icon;
            const accent = p.tone === "emerald" ? "text-emerald-signal" : "text-cyber-blue";
            return (
              <article
                key={p.title}
                className="glass rounded-2xl p-6 flex flex-col hover:-translate-y-1 transition group"
                style={{ animation: "fade-up 0.6s ease-out both", animationDelay: `${i * 100}ms` }}
              >
                <ArchitecturePreview tone={p.tone} />
                <div className="flex items-center justify-between mt-5">
                  <Icon className={`h-5 w-5 ${accent}`} />
                  <span className={`text-xs font-mono ${accent}`}>{p.impact}</span>
                </div>
                <h3 className="mt-3 text-lg font-semibold leading-snug">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">
                  {p.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="text-[11px] font-mono text-muted-foreground border border-border rounded px-2 py-0.5"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <div className="mt-5 pt-4 border-t border-border/60 flex items-center justify-between text-xs font-mono text-muted-foreground">
                  <span>architecture / docs</span>
                  <ExternalLink className="h-3.5 w-3.5 group-hover:text-foreground transition" />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
