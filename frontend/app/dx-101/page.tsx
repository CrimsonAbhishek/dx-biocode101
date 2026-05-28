"use client";

import Image from "next/image";
import {
  Wifi,
  HardDrive,
  Usb,
  Cpu,
  MonitorSmartphone,
  BatteryCharging
} from "lucide-react";
import ScrollReveal from "@/components/ui/scroll-reveal";
import GradientBorderCard from "@/components/ui/gradient-border-card";
import ParallaxImage from "@/components/ui/parallax-image";

const features = [
  {
    title: "Portable Design",
    description: "Compact and lightweight — ideal for field deployment and decentralized testing.",
    icon: BatteryCharging
  },
  {
    title: "Android Smart Platform",
    description: "Intuitive Android OS with smart diagnostic workflow management.",
    icon: Cpu
  },
  {
    title: '5" Touchscreen',
    description: "High-resolution capacitive display for effortless operation.",
    icon: MonitorSmartphone
  },
  {
    title: "WiFi / 4G / Bluetooth",
    description: "Multi-mode wireless connectivity for real-time data sync.",
    icon: Wifi
  },
  {
    title: "50,000 Result Storage",
    description: "Onboard memory for massive result archiving and instant retrieval.",
    icon: HardDrive
  },
  {
    title: "USB Type-C",
    description: "Universal Type-C interface for fast charging and data export.",
    icon: Usb
  }
];

const specifications = [
  { label: "Detection Method", value: "Time-Resolved Fluorescence Immunoassay" },
  { label: "Light Source", value: "365nm UV LED" },
  { label: "Display", value: '5.0" IPS LCD Capacitive Touch' },
  { label: "Operating System", value: "Android" },
  { label: "Connectivity", value: "WiFi, 4G LTE, Bluetooth 5.0" },
  { label: "Result Storage", value: "50,000+ Results" },
  { label: "Power", value: "Built-in Rechargeable Lithium Battery" },
  { label: "Interface", value: "USB Type-C" },
  { label: "Dimensions", value: "Compact Portable Form Factor" },
  { label: "Operating Temp", value: "10°C ~ 40°C" }
];

export default function DX101Page() {
  return (
    <main className="min-h-screen pt-32 pb-24">
      {/* Hero */}
      <section className="section-shell grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
        <ScrollReveal direction="left">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400">
            Flagship Product
          </span>
          <h1 className="mt-4 text-5xl font-black text-slate-900 dark:text-white md:text-6xl lg:text-7xl">
            DX 101{" "}
            <span className="gradient-text">Analyzer</span>
          </h1>
          <p className="mt-8 text-lg leading-8 text-slate-600 dark:text-slate-400">
            High-performance portable immunofluorescence quantitative analyzer
            engineered for rapid decentralized diagnostics. Precision meets
            portability in a single, powerful device.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="right">
          <div className="relative flex items-center justify-center">
            <div className="absolute h-[450px] w-[450px] rounded-full bg-cyan-500/[0.08] blur-[100px]" />
            <div
              className="absolute h-[380px] w-[380px] rounded-full border border-cyan-400/10 animate-spin-slow"
            />
            <ParallaxImage
              src="/images/product.png"
              alt="DX 101 Analyzer"
              width={800}
              height={800}
              className="relative z-10 object-contain drop-shadow-[0_0_50px_rgba(24,191,255,0.12)]"
            />
          </div>
        </ScrollReveal>
      </section>

      {/* Features Grid */}
      <section className="section-shell mt-24">
        <ScrollReveal>
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-fuchsia-600 dark:text-fuchsia-400">
              Capabilities
            </span>
            <h2 className="mt-4 text-3xl font-black text-slate-900 dark:text-white md:text-4xl">
              Built for <span className="gradient-text">Performance</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((item, i) => {
            const Icon = item.icon;

            return (
              <ScrollReveal key={item.title} delay={i * 0.08}>
                <GradientBorderCard className="p-8 h-full">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-600 dark:text-cyan-400">
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
      </section>

      {/* Specifications Table */}
      <section className="section-shell mt-24">
        <ScrollReveal>
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400">
              Technical Data
            </span>
            <h2 className="mt-4 text-3xl font-black text-slate-900 dark:text-white md:text-4xl">
              Specifications
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <GradientBorderCard className="mt-14 overflow-hidden">
            <div className="divide-y divide-white/5">
              {specifications.map((spec) => (
                <div
                  key={spec.label}
                  className="flex items-center justify-between px-8 py-5 transition-colors hover:bg-white/[0.03]"
                >
                  <span className="text-sm font-semibold text-slate-600 dark:text-slate-400">
                    {spec.label}
                  </span>
                  <span className="text-sm font-bold text-slate-900 dark:text-white">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </GradientBorderCard>
        </ScrollReveal>
      </section>
    </main>
  );
}