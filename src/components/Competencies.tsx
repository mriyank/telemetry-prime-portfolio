import { useState } from "react";
import { Cloud, FileCode2, LineChart, GitBranch } from "lucide-react";

const groups = [
  {
    id: "cloud",
    label: "Cloud & Containers",
    icon: Cloud,
    tone: "emerald",
    items: ["AWS EC2", "AWS RDS", "AWS S3", "AWS VPC", "AWS EKS", "Azure", "Kubernetes", "Docker"],
  },
  {
    id: "iac",
    label: "Infrastructure as Code",
    icon: FileCode2,
    tone: "cyber",
    items: ["Terraform", "Ansible"],
  },
  {
    id: "obs",
    label: "Observability & Monitoring",
    icon: LineChart,
    tone: "emerald",
    items: ["ELK Stack", "Prometheus", "Grafana", "CloudWatch"],
  },
  {
    id: "cicd",
    label: "CI/CD & Reliability",
    icon: GitBranch,
    tone: "cyber",
    items: [
      "Jenkins",
      "GitLab CI/CD",
      "SLI / SLO / SLA",
      "Error Budgets",
      "Chaos Engineering",
    ],
  },
];

export function Competencies() {
  const [active, setActive] = useState<string>("all");
  const visible = active === "all" ? groups : groups.filter((g) => g.id === active);

  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10">
          <span className="text-xs font-mono uppercase tracking-widest text-cyber-blue">
            // Core Competencies
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold">The toolchain behind the uptime.</h2>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {[{ id: "all", label: "All" }, ...groups.map((g) => ({ id: g.id, label: g.label }))].map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`text-xs font-mono px-3 py-1.5 rounded-full border transition ${
                active === t.id
                  ? "bg-emerald-signal text-primary-foreground border-emerald-signal"
                  : "border-border text-muted-foreground hover:border-emerald-signal/50 hover:text-foreground"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {visible.map((g, i) => {
            const Icon = g.icon;
            const accent = g.tone === "emerald" ? "text-emerald-signal" : "text-cyber-blue";
            const dot = g.tone === "emerald" ? "bg-emerald-signal" : "bg-cyber-blue";
            return (
              <div
                key={g.id}
                className="glass rounded-2xl p-6 hover:border-foreground/30 transition"
                style={{ animation: "fade-up 0.6s ease-out both", animationDelay: `${i * 80}ms` }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={`grid place-items-center h-10 w-10 rounded-lg border border-border bg-surface-elevated ${accent}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-lg">{g.label}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1.5 rounded-md border border-border bg-surface-elevated px-2.5 py-1 text-xs font-mono text-muted-foreground hover:text-foreground hover:border-foreground/30 transition"
                    >
                      <span className={`h-1 w-1 rounded-full ${dot}`} />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
