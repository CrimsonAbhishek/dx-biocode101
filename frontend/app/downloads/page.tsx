"use client";

import { Download, FileText, ShieldCheck, Microscope } from "lucide-react";
import ScrollReveal from "@/components/ui/scroll-reveal";
import GradientBorderCard from "@/components/ui/gradient-border-card";

const resources = [
  {
    title: "DX 101 Product Brochure",
    description:
      "Official DX 101 analyzer brochure with product overview, workflow details, and clinical capabilities.",
    file: "/downloads/DX_101_Analyzer.pdf",
    icon: FileText,
    accent: "text-cyan-400",
    bg: "bg-cyan-400/10"
  },
  {
    title: "Technical Specifications",
    description:
      "Detailed operating environment, connectivity protocols, and analyzer performance specifications.",
    file: "/downloads/DX_BIOCODE_Specifications.pdf",
    icon: Microscope,
    accent: "text-violet-400",
    bg: "bg-violet-400/10"
  },
  {
    title: "Test Menu",
    description:
      "Complete supported assay menu and diagnostic application coverage across all test categories.",
    file: "/downloads/DX_BIOCODE_Test_Menu.pdf",
    icon: FileText,
    accent: "text-fuchsia-400",
    bg: "bg-fuchsia-400/10"
  },
  {
    title: "Compliance Documentation",
    description:
      "Regulatory certifications, quality management documentation, and compliance records.",
    file: "/downloads/DX_BIOCODE_Compliance.pdf",
    icon: ShieldCheck,
    accent: "text-emerald-400",
    bg: "bg-emerald-400/10"
  }
];

export default function DownloadsPage() {
  return (
    <main className="min-h-screen pt-32 pb-24">
      <div className="section-shell">
        <ScrollReveal>
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400">
              Resources
            </span>
            <h1 className="mt-4 text-5xl font-black text-slate-900 dark:text-white md:text-6xl">
              <span className="gradient-text">Downloads</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
              Access product documentation, technical specifications, and compliance records.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {resources.map((item, i) => {
            const Icon = item.icon;

            return (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <GradientBorderCard className="p-8 h-full flex flex-col">
                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.bg} ${item.accent}`}>
                    <Icon size={26} />
                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 flex-1 text-sm leading-7 text-slate-600 dark:text-slate-400">
                    {item.description}
                  </p>

                  <a
                    href={item.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center gap-3 self-start rounded-2xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-6 py-3.5 text-sm font-bold text-white shadow-[0_0_20px_rgba(24,191,255,0.15)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(24,191,255,0.3)]"
                  >
                    <Download size={16} className="transition-transform duration-300 group-hover:translate-y-0.5" />
                    Download PDF
                  </a>
                </GradientBorderCard>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </main>
  );
}