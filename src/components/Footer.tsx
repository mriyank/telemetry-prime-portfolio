import { useState } from "react";
import { Copy, Check, Mail, Linkedin, GraduationCap, Award } from "lucide-react";

const EMAIL = "mriyanksingh@gmail.com";

export function Footer() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  };

  return (
    <footer id="contact" className="relative pt-24 pb-10 overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-50" />
      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <span className="text-xs font-mono uppercase tracking-widest text-emerald-signal">
          // Get in touch
        </span>
        <h2 className="mt-3 text-3xl sm:text-5xl font-bold tracking-tight">
          Let's build <span className="text-emerald-signal metric-glow">reliable systems</span> together.
        </h2>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
          Open to Senior SRE, Platform, and Infrastructure roles. Fastest response via email.
        </p>

        <div className="mt-8 inline-flex items-center gap-2 glass rounded-full pl-5 pr-2 py-2">
          <Mail className="h-4 w-4 text-cyber-blue" />
          <span className="font-mono text-sm">{EMAIL}</span>
          <button
            onClick={copy}
            className="ml-2 inline-flex items-center gap-1.5 rounded-full bg-emerald-signal text-primary-foreground px-3 py-1.5 text-xs font-semibold hover:brightness-110 transition"
          >
            {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
            {copied ? "Copied" : "Copy"}
          </button>
        </div>

        <div className="mt-6 flex items-center justify-center gap-4 text-sm text-muted-foreground">
          <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-1.5 hover:text-foreground transition">
            <Mail className="h-4 w-4" /> Email
          </a>
          <span className="text-border">·</span>
          <a
            href="https://linkedin.com/in/mriyank"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-foreground transition"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
        </div>

        <div className="mt-14 pt-8 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-signal animate-pulse" />
            <span className="font-mono">© {new Date().getFullYear()} Mriyank Kumar Singh</span>
          </div>
          <div className="flex items-center gap-4 font-mono">
            <span className="inline-flex items-center gap-1.5">
              <GraduationCap className="h-3.5 w-3.5" /> B.Tech CSE, VIT (2018–2022)
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Award className="h-3.5 w-3.5" /> Azure Fundamentals (AZ-900)
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
