import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { ImpactMetrics } from "@/components/ImpactMetrics";
import { Competencies } from "@/components/Competencies";
import { Timeline } from "@/components/Timeline";
import { Projects } from "@/components/Projects";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mriyank Kumar Singh — Senior SRE & DevOps Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Mriyank Kumar Singh, Senior SRE & DevOps Engineer. 99.9% availability, 90% MTTR reduction, 50+ GB/day observability.",
      },
      { property: "og:title", content: "Mriyank Kumar Singh — Senior SRE & DevOps Engineer" },
      {
        property: "og:description",
        content: "Sustaining 99.9% availability. Optimizing platforms at scale.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <ImpactMetrics />
      <Competencies />
      <Timeline />
      <Projects />
      <Footer />
    </main>
  );
}
