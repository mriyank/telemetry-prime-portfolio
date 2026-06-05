import { useState } from "react";
import { ChevronDown, Building2 } from "lucide-react";

const roles = [
  {
    company: "Nielsen",
    title: "Senior Site Reliability Engineer",
    period: "May 2025 – Present",
    current: true,
    summary:
      "Maintained 99.9% production availability across critical media-analytics platforms.",
    bullets: [
      "Reduced MTTD by 35% with structured log parsing across the ELK stack.",
      "Lead on-call rotation managing P1/P2 incidents end-to-end with postmortems.",
      "Owned SLO/SLI dashboards, error budgets, and quarterly reliability reviews.",
      "Drove infrastructure cost reviews and platform capacity planning.",
    ],
  },
  {
    company: "Tata Consultancy Services",
    title: "Systems Engineer — DevOps / SRE",
    period: "Aug 2022 – Apr 2025",
    summary:
      "Reduced deployment lead time by 30% and automated provisioning with IaC.",
    bullets: [
      "Automated infra with Terraform & Ansible — recovered 15 hrs/week of toil.",
      "Led onsite client deployment migration in Bhutan — Star of the Month, 2023.",
      "Built Jenkins + GitLab CI/CD pipelines with SonarQube / OWASP gates.",
      "Designed Grafana drill-down dashboards for 50+ GB/day telemetry.",
    ],
  },
  {
    company: "Stryker",
    title: "Engineering Intern",
    period: "Jan 2022 – Jul 2022",
    summary: "SAP S/4HANA migration readiness for enterprise medical-device workloads.",
    bullets: [
      "Authored migration test plans and tracked readiness across workstreams.",
      "Documented runbooks adopted by the platform operations team.",
    ],
  },
];

export function Timeline() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="experience" className="py-24 bg-surface/40 border-y border-border/60">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-signal">
            // Career Timeline
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold">Shipping reliability, year over year.</h2>
        </div>

        <div className="relative">
          <div className="absolute left-[15px] sm:left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-emerald-signal via-cyber-blue to-transparent" />

          <div className="space-y-5">
            {roles.map((r, i) => {
              const isOpen = open === i;
              return (
                <div key={r.company} className="relative pl-12 sm:pl-16">
                  <div className={`absolute left-0 top-4 h-8 w-8 rounded-full border-2 ${r.current ? "border-emerald-signal bg-emerald-signal/20 animate-pulse-ring" : "border-border bg-surface"} grid place-items-center`}>
                    <Building2 className={`h-4 w-4 ${r.current ? "text-emerald-signal" : "text-muted-foreground"}`} />
                  </div>

                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full text-left glass rounded-2xl p-5 sm:p-6 hover:border-foreground/30 transition"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="text-lg sm:text-xl font-semibold">{r.title}</h3>
                          {r.current && (
                            <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-signal border border-emerald-signal/40 rounded px-1.5 py-0.5">
                              Current
                            </span>
                          )}
                        </div>
                        <div className="text-sm text-cyber-blue font-mono mt-1">
                          {r.company} <span className="text-muted-foreground">· {r.period}</span>
                        </div>
                        <p className="mt-2 text-sm text-muted-foreground max-w-2xl">{r.summary}</p>
                      </div>
                      <ChevronDown
                        className={`h-5 w-5 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`}
                      />
                    </div>

                    {isOpen && (
                      <ul className="mt-5 grid sm:grid-cols-2 gap-2 animate-fade-up">
                        {r.bullets.map((b) => (
                          <li
                            key={b}
                            className="text-sm text-muted-foreground flex gap-2 leading-relaxed"
                          >
                            <span className="text-emerald-signal mt-1.5 h-1 w-1 rounded-full bg-emerald-signal shrink-0" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
