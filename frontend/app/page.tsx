"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Activity,
  MonitorSmartphone,
  Wifi,
  HardDrive,
  Zap,
  Shield,
  FlaskConical,
  ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/scroll-reveal";
import GradientBorderCard from "@/components/ui/gradient-border-card";
import AnimatedCounter from "@/components/ui/animated-counter";
import ParallaxImage from "@/components/ui/parallax-image";

const features = [
  {
    title: "Android Platform",
    subtitle: "Smart diagnostic workflow powered by an intuitive Android OS interface.",
    icon: Activity
  },
  {
    title: '5" LCD Display',
    subtitle: "High-resolution capacitive touchscreen for seamless operation.",
    icon: MonitorSmartphone
  },
  {
    title: "Wireless Connectivity",
    subtitle: "WiFi, 4G LTE & Bluetooth for real-time data transfer.",
    icon: Wifi
  },
  {
    title: "Massive Storage",
    subtitle: "Store up to 50,000 test results with instant retrieval.",
    icon: HardDrive
  }
];

const stats = [
  { value: 50000, suffix: "+", label: "Results Storage" },
  { value: 9, suffix: "+", label: "Certifications" },
  { value: 8, suffix: "+", label: "Test Categories" },
  { value: 15, suffix: "min", label: "Avg. Test Time" }
];

const whyFeatures = [
  {
    icon: Zap,
    title: "Rapid Results",
    description: "Get quantitative diagnostic results in minutes, not hours."
  },
  {
    icon: Shield,
    title: "Globally Certified",
    description: "ISO 13485, CE, NMPA, MDSAP — trusted worldwide."
  },
  {
    icon: FlaskConical,
    title: "Broad Test Menu",
    description: "Cardiac, infectious disease, thyroid, fertility & more."
  }
];

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      {/* ═══════════ HERO ═══════════ */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16">
        {/* Hero Background Glow */}
        <div className="absolute right-0 top-0 h-[700px] w-[700px] rounded-full bg-cyan-500/[0.07] blur-[120px]" />
        <div className="absolute left-0 bottom-0 h-[500px] w-[500px] rounded-full bg-fuchsia-500/[0.05] blur-[100px]" />

        <div className="relative section-shell grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* LEFT — Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.2em] text-cyan-700 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 animate-pulse" />
                Point-of-Care Quantitative Diagnostics
              </span>
            </motion.div>

            <motion.h1
              className="text-6xl sm:text-7xl font-black leading-[1.1] tracking-tighter md:text-8xl lg:text-[7.5rem]"
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.8 }}
            >
              <span className="block text-slate-900 dark:text-white">DX 101</span>
              <span className="block gradient-text text-4xl sm:text-5xl md:text-6xl mt-4 tracking-tight pb-2">Quantitative Analyzer</span>
            </motion.h1>

            <motion.p
              className="mt-8 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              Advanced portable immunofluorescence diagnostic platform designed
              for rapid quantitative testing, decentralized healthcare
              deployment, and modern clinical workflows.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Link
                href="/contact"
                className="group flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-8 py-4 font-bold text-white shadow-[0_0_30px_rgba(24,191,255,0.2)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(24,191,255,0.35)]"
              >
                Request Quote
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/dx-101"
                className="rounded-2xl border border-slate-300 bg-white px-8 py-4 font-bold text-slate-700 backdrop-blur-sm transition-all duration-300 hover:bg-slate-50 hover:border-slate-400"
              >
                Product Overview
              </Link>
            </motion.div>
          </div>

          {/* RIGHT — Product Image */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Glow ring behind product */}
            <div className="absolute h-[450px] w-[450px] rounded-full md:h-[550px] md:w-[550px] hero-glow-ring animate-pulse-glow"
            />
            <div className="absolute h-[350px] w-[350px] rounded-full border border-cyan-400/10 md:h-[480px] md:w-[480px] animate-spin-slow"
            />
            <div className="absolute h-[300px] w-[300px] rounded-full border border-fuchsia-400/5 md:h-[420px] md:w-[420px] animate-spin-slow-reverse"
            />

            <ParallaxImage
              src="/images/product.png"
              alt="DX 101 Analyzer"
              width={850}
              height={850}
              priority
              className="relative z-10 object-contain drop-shadow-[0_0_60px_rgba(24,191,255,0.15)] animate-float"
            />
          </motion.div>
        </div>
      </section>

      {/* ═══════════ STATS ═══════════ */}
      <section className="relative py-20">
        <div className="gradient-divider" />
        <div className="section-shell py-16">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.1}>
                <div className="text-center">
                  <div className="text-4xl font-black text-slate-900 dark:text-white md:text-5xl">
                    <AnimatedCounter
                      target={stat.value}
                      suffix={stat.suffix}
                      duration={2}
                      className="gradient-text"
                    />
                  </div>
                  <p className="mt-3 text-sm font-medium tracking-wide text-slate-500 dark:text-slate-400 uppercase">
                    {stat.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
        <div className="gradient-divider" />
      </section>

      {/* ═══════════ FEATURES ═══════════ */}
      <section className="py-24">
        <div className="section-shell">
          <ScrollReveal>
            <div className="text-center">
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
                Key Features
              </span>
              <h2 className="mt-4 text-4xl font-black text-slate-900 dark:text-white md:text-5xl">
                Engineered for{" "}
                <span className="gradient-text">Modern Diagnostics</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((item, i) => {
              const Icon = item.icon;

              return (
                <ScrollReveal key={item.title} delay={i * 0.1}>
                  <GradientBorderCard className="p-8 h-full">
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-400 transition-colors duration-300 group-hover:bg-cyan-400/20">
                      <Icon size={26} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                      {item.subtitle}
                    </p>
                  </GradientBorderCard>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════ WHY DX 101 ═══════════ */}
      <section className="py-24">
        <div className="section-shell">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <ScrollReveal direction="left">
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-fuchsia-400">
                Why DX 101
              </span>
              <h2 className="mt-4 text-4xl font-black text-slate-900 dark:text-white md:text-5xl">
                Precision Meets <span className="gradient-text">Portability</span>
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
                The DX 101 combines laboratory-grade accuracy with a compact,
                field-deployable form factor — enabling rapid point-of-care
                testing anywhere it&apos;s needed.
              </p>

              <div className="mt-10 space-y-6">
                {whyFeatures.map((item, i) => {
                  const Icon = item.icon;

                  return (
                    <ScrollReveal key={item.title} delay={0.1 + i * 0.1} direction="left">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/15 to-fuchsia-500/15 text-cyan-400">
                          <Icon size={22} />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-slate-900 dark:text-white">{item.title}</h4>
                          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{item.description}</p>
                        </div>
                      </div>
                    </ScrollReveal>
                  );
                })}
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative flex items-center justify-center">
                <div className="absolute h-[400px] w-[400px] rounded-full bg-fuchsia-500/[0.06] blur-[80px]" />
                <ParallaxImage
                  src="/images/product.png"
                  alt="DX 101 Analyzer"
                  width={600}
                  height={600}
                  className="relative z-10 object-contain drop-shadow-[0_0_40px_rgba(24,191,255,0.1)]"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════ CERTIFICATIONS BANNER ═══════════ */}
      <section className="py-20">
        <div className="section-shell">
          <ScrollReveal>
            <GradientBorderCard className="p-10 md:p-16 text-center">
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
                Global Compliance
              </span>
              <h2 className="mt-4 text-3xl font-black text-slate-900 dark:text-white md:text-4xl">
                Trusted & Certified <span className="gradient-text">Worldwide</span>
              </h2>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                {["ISO 9001", "ISO 13485", "CE", "NMPA", "MDSAP", "NGSP", "IFCC", "IVD"].map(
                  (cert) => (
                    <span
                      key={cert}
                      className="rounded-full border border-slate-300 dark:border-white/10 bg-white/50 dark:bg-white/5 px-5 py-2.5 text-sm font-semibold text-slate-700 dark:text-slate-300 transition-all duration-300 hover:border-cyan-400/30 hover:text-cyan-600 dark:hover:text-cyan-300 hover:bg-cyan-50 dark:hover:bg-cyan-400/5"
                    >
                      {cert}
                    </span>
                  )
                )}
              </div>
              <div className="mt-10">
                <Link
                  href="/certifications"
                  className="inline-flex items-center gap-2 text-sm font-bold text-cyan-600 dark:text-cyan-400 transition hover:text-cyan-500 dark:hover:text-cyan-300"
                >
                  View All Certifications
                  <ArrowRight size={16} />
                </Link>
              </div>
            </GradientBorderCard>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════ CTA ═══════════ */}
      <section className="py-24">
        <div className="section-shell text-center">
          <ScrollReveal>
            <h2 className="text-4xl font-black text-slate-900 dark:text-white md:text-5xl">
              Ready to <span className="gradient-text">Transform</span> Your Diagnostics?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
              Get in touch to learn how DX 101 can elevate your clinical workflow
              with rapid, quantitative point-of-care testing.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="group flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-10 py-4 font-bold text-white shadow-[0_0_30px_rgba(24,191,255,0.2)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(24,191,255,0.35)]"
              >
                Get Started
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/downloads"
                className="rounded-2xl border border-slate-300 dark:border-white/15 bg-white dark:bg-white/5 px-10 py-4 font-bold text-slate-700 dark:text-white transition-all duration-300 hover:bg-slate-50 dark:hover:bg-white/10"
              >
                Download Brochure
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}