"use client";

import {
  Heart,
  Flame,
  Bug,
  Droplets,
  Activity,
  FlaskConical,
  Baby,
  Target
} from "lucide-react";
import ScrollReveal from "@/components/ui/scroll-reveal";
import GradientBorderCard from "@/components/ui/gradient-border-card";

const categories = [
  {
    title: "Cardiac Markers",
    description: "cTnI, NT-proBNP, D-Dimer, Myoglobin, CK-MB and more for rapid cardiac risk assessment.",
    icon: Heart,
    accent: "from-rose-500/20 to-pink-500/20",
    iconColor: "text-rose-400"
  },
  {
    title: "Inflammation",
    description: "CRP, PCT, SAA, IL-6 — essential markers for infection and inflammatory response monitoring.",
    icon: Flame,
    accent: "from-orange-500/20 to-amber-500/20",
    iconColor: "text-orange-400"
  },
  {
    title: "Infectious Disease",
    description: "Rapid immunoassay detection for respiratory, gastrointestinal, and systemic infections.",
    icon: Bug,
    accent: "from-emerald-500/20 to-green-500/20",
    iconColor: "text-emerald-400"
  },
  {
    title: "Diabetes & Metabolic",
    description: "HbA1c, microalbumin, and metabolic panel markers for comprehensive diabetes management.",
    icon: Droplets,
    accent: "from-blue-500/20 to-sky-500/20",
    iconColor: "text-blue-400"
  },
  {
    title: "Thyroid & Hormonal",
    description: "TSH, T3, T4, and hormonal panel assays for endocrine function evaluation.",
    icon: Activity,
    accent: "from-violet-500/20 to-purple-500/20",
    iconColor: "text-violet-400"
  },
  {
    title: "Renal Function",
    description: "Cystatin C, microalbumin, and creatinine for early kidney disease detection.",
    icon: FlaskConical,
    accent: "from-cyan-500/20 to-teal-500/20",
    iconColor: "text-cyan-400"
  },
  {
    title: "Fertility",
    description: "hCG, LH, FSH, and reproductive hormone panels for fertility assessment.",
    icon: Baby,
    accent: "from-pink-500/20 to-fuchsia-500/20",
    iconColor: "text-pink-400"
  },
  {
    title: "Tumor Markers",
    description: "AFP, CEA, PSA, and oncology markers for early cancer screening and monitoring.",
    icon: Target,
    accent: "from-red-500/20 to-rose-500/20",
    iconColor: "text-red-400"
  }
];

export default function ApplicationsPage() {
  return (
    <main className="min-h-screen pt-32 pb-24">
      <div className="section-shell">
        <ScrollReveal>
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400">
              Assay Portfolio
            </span>
            <h1 className="mt-4 text-5xl font-black text-slate-900 dark:text-white md:text-6xl">
              Clinical <span className="gradient-text">Applications</span>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-400">
              Comprehensive immunofluorescence assay coverage across critical
              diagnostic domains for modern clinical workflows.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((item, i) => {
            const Icon = item.icon;

            return (
              <ScrollReveal key={item.title} delay={i * 0.07}>
                <GradientBorderCard className="p-8 h-full">
                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${item.accent} ${item.iconColor}`}>
                    <Icon size={26} />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {item.description}
                  </p>
                </GradientBorderCard>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </main>
  );
}