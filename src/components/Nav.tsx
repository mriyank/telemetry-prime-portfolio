import { Activity } from "lucide-react";

export function Nav() {
  const links = [
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="max-w-7xl mx-auto px-6 mt-4">
        <div className="glass rounded-full flex items-center justify-between pl-5 pr-2 py-2">
          <a href="#" className="flex items-center gap-2 font-semibold">
            <span className="grid place-items-center h-7 w-7 rounded-full bg-emerald-signal/15 text-emerald-signal">
              <Activity className="h-4 w-4" />
            </span>
            <span className="font-display tracking-tight">Mriyank<span className="text-emerald-signal">.</span></span>
          </a>
          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-muted-foreground hover:text-foreground px-3 py-1.5 rounded-full hover:bg-surface-elevated transition"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="mailto:mriyanksingh@gmail.com"
            className="text-xs sm:text-sm font-semibold bg-emerald-signal text-primary-foreground rounded-full px-4 py-2 hover:brightness-110 transition"
          >
            Hire Me
          </a>
        </div>
      </div>
    </header>
  );
}
