import { Download, Mail, Linkedin, ArrowRight } from "lucide-react";
import { StatusDashboard } from "./StatusDashboard";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-signal/30 bg-emerald-signal/5 px-3 py-1 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-signal animate-pulse" />
            <span className="text-xs font-mono text-emerald-signal">
              Available for Senior SRE / Platform roles
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
            Sustaining <span className="text-emerald-signal metric-glow">99.9%</span> Availability.
            <br />
            Optimizing Platforms <span className="text-cyber-blue">at Scale.</span>
          </h1>

          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            Senior SRE & DevOps Engineer with{" "}
            <span className="text-foreground font-medium">3+ years</span> transforming production
            infrastructure, automating CI/CD pipelines, and slashing{" "}
            <span className="text-foreground font-medium">MTTR by up to 90%</span>.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/Mriyank_Kumar_Singh_SRE_Resume.docx"
              download
              className="group inline-flex items-center gap-2 rounded-lg bg-emerald-signal text-primary-foreground px-5 py-3 text-sm font-semibold shadow-[var(--shadow-glow)] hover:brightness-110 transition"
            >
              <Download className="h-4 w-4" /> Download Resume
            </a>
            <a
              href="mailto:mriyanksingh@gmail.com?subject=Interview%20Request"
              className="group inline-flex items-center gap-2 rounded-lg border border-cyber-blue/40 bg-cyber-blue/10 text-cyber-blue px-5 py-3 text-sm font-semibold hover:bg-cyber-blue/20 transition"
            >
              Schedule Interview <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition" />
            </a>
          </div>

          <div className="mt-6 flex items-center gap-5 text-sm text-muted-foreground">
            <a
              href="https://linkedin.com/in/mriyank"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 hover:text-foreground transition"
            >
              <Linkedin className="h-4 w-4" /> linkedin.com/in/mriyank
            </a>
            <a
              href="mailto:mriyanksingh@gmail.com"
              className="inline-flex items-center gap-2 hover:text-foreground transition"
            >
              <Mail className="h-4 w-4" /> mriyanksingh@gmail.com
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end animate-fade-up" style={{ animationDelay: "200ms" }}>
          <StatusDashboard />
        </div>
      </div>
    </section>
  );
}
