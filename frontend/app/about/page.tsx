"use client";

import { Building2, MapPin, FileText, Crosshair, Eye } from "lucide-react";
import ScrollReveal from "@/components/ui/scroll-reveal";
import GradientBorderCard from "@/components/ui/gradient-border-card";

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-32 pb-24">
      <div className="section-shell">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400">
              Our Company
            </span>
            <h1 className="mt-4 text-5xl font-black text-slate-900 dark:text-white md:text-6xl">
              About <span className="gradient-text">DX BIOCODE</span>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-400">
              Pioneering advanced immunofluorescence diagnostic technology for
              decentralized and modern clinical workflows worldwide.
            </p>
          </div>
        </ScrollReveal>

        {/* Mission / Vision */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <ScrollReveal delay={0.1}>
            <GradientBorderCard className="p-10 h-full">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-400">
                <Crosshair size={26} />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-slate-900 dark:text-white">Our Mission</h3>
              <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-400">
                To democratize access to high-quality diagnostic testing by
                delivering portable, accurate, and affordable immunofluorescence
                solutions to healthcare providers everywhere.
              </p>
            </GradientBorderCard>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <GradientBorderCard className="p-10 h-full">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-fuchsia-400/10 text-fuchsia-400">
                <Eye size={26} />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-slate-900 dark:text-white">Our Vision</h3>
              <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-400">
                A world where every patient has access to rapid, quantitative
                point-of-care diagnostics — regardless of geography or
                infrastructure.
              </p>
            </GradientBorderCard>
          </ScrollReveal>
        </div>

        {/* Company Details */}
        <ScrollReveal>
          <GradientBorderCard className="mt-12 p-10 md:p-14">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Company Details</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/5 text-cyan-400">
                  <Building2 size={22} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-500">
                    Entity
                  </p>
                  <p className="mt-1 text-base font-semibold text-slate-900 dark:text-white">
                    DX BIOCODE PRIVATE LIMITED
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/5 text-cyan-400">
                  <FileText size={22} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-500">
                    CIN
                  </p>
                  <p className="mt-1 text-base font-semibold text-slate-900 dark:text-white">
                    U46497TN2025PTC181764
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/5 text-cyan-400">
                  <MapPin size={22} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-500">
                    Registered Address
                  </p>
                  <p className="mt-1 text-base font-semibold leading-7 text-slate-900 dark:text-white">
                    27(38), First Floor, Madley Road, T Nagar, Chennai, Tamil Nadu 600017
                  </p>
                </div>
              </div>
            </div>
          </GradientBorderCard>
        </ScrollReveal>
      </div>
    </main>
  );
}