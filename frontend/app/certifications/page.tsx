"use client";

import { ShieldCheck } from "lucide-react";
import ScrollReveal from "@/components/ui/scroll-reveal";
import GradientBorderCard from "@/components/ui/gradient-border-card";

const certifications = [
  {
    code: "ISO 9001:2015",
    title: "Quality Management",
    description: "International standard for quality management systems."
  },
  {
    code: "ISO 13485",
    title: "Medical Devices QMS",
    description: "Quality management for medical device manufacturing."
  },
  {
    code: "FSC",
    title: "Free Sale Certificate",
    description: "Certification for international distribution and sale."
  },
  {
    code: "CE",
    title: "European Conformity",
    description: "Compliance with EU health, safety & environmental standards."
  },
  {
    code: "NMPA",
    title: "China Regulatory",
    description: "National Medical Products Administration approval."
  },
  {
    code: "MDSAP",
    title: "Multi-Country Audit",
    description: "Medical Device Single Audit Program compliance."
  },
  {
    code: "NGSP",
    title: "Glycohemoglobin Program",
    description: "National Glycohemoglobin Standardization Program."
  },
  {
    code: "IFCC",
    title: "Clinical Chemistry",
    description: "International Federation of Clinical Chemistry standards."
  },
  {
    code: "IVD",
    title: "In Vitro Diagnostic",
    description: "Certified for in vitro diagnostic medical device use."
  }
];

export default function CertificationsPage() {
  return (
    <main className="min-h-screen pt-32 pb-24">
      <div className="section-shell">
        <ScrollReveal>
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400">
              Global Compliance
            </span>
            <h1 className="mt-4 text-5xl font-black text-slate-900 dark:text-white md:text-6xl">
              <span className="gradient-text">Certifications</span>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600 dark:text-slate-400">
              DX BIOCODE products meet the highest international regulatory and quality
              standards for medical diagnostic devices.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((item, i) => (
            <ScrollReveal key={item.code} delay={i * 0.06}>
              <GradientBorderCard className="p-8 h-full text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-600 dark:text-cyan-400">
                  <ShieldCheck size={26} />
                </div>
                <h3 className="mt-5 text-2xl font-black text-slate-900 dark:text-white">
                  {item.code}
                </h3>
                <p className="mt-1 text-sm font-semibold text-cyan-600 dark:text-cyan-400/80">
                  {item.title}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {item.description}
                </p>
              </GradientBorderCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </main>
  );
}