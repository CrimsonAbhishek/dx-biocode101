"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import api from "@/lib/api";
import ScrollReveal from "@/components/ui/scroll-reveal";
import GradientBorderCard from "@/components/ui/gradient-border-card";

export default function ContactPage() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      setLoading(true);
      setStatus("idle");

      await api.post("/contact/submit", form);

      setStatus("success");

      setForm({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        message: ""
      });
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  }

  const inputClasses =
    "w-full rounded-2xl border border-slate-300 dark:border-white/10 bg-white dark:bg-white/5 px-6 py-4 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 outline-none transition-all duration-300 focus:border-cyan-400/50 focus:bg-slate-50 dark:focus:bg-white/[0.07] focus:shadow-[0_0_20px_rgba(24,191,255,0.1)]";

  return (
    <main className="min-h-screen pt-32 pb-24">
      <div className="section-shell max-w-4xl">
        <ScrollReveal>
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400">
              Get In Touch
            </span>
            <h1 className="mt-4 text-5xl font-black text-slate-900 dark:text-white md:text-6xl">
              Contact <span className="gradient-text">DX BIOCODE</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
              Reach out to learn more about our diagnostic solutions, request a quote,
              or discuss partnership opportunities.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <GradientBorderCard className="mt-16 p-8 md:p-12">
            <form onSubmit={handleSubmit} className="grid gap-5">
              <div className="grid gap-5 md:grid-cols-2">
                <input
                  placeholder="Full Name"
                  value={form.fullName}
                  onChange={(e) =>
                    setForm({ ...form, fullName: e.target.value })
                  }
                  className={inputClasses}
                  required
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  className={inputClasses}
                  required
                />
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <input
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={(e) =>
                    setForm({ ...form, phone: e.target.value })
                  }
                  className={inputClasses}
                  required
                />

                <input
                  placeholder="Company (Optional)"
                  value={form.company}
                  onChange={(e) =>
                    setForm({ ...form, company: e.target.value })
                  }
                  className={inputClasses}
                />
              </div>

              <textarea
                rows={6}
                placeholder="Tell us about your requirements..."
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                className={`${inputClasses} resize-none`}
                required
              />

              <button
                type="submit"
                disabled={loading}
                className="group flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-8 py-4 font-bold text-white shadow-[0_0_25px_rgba(24,191,255,0.2)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(24,191,255,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <div className="h-5 w-5 rounded-full border-2 border-white/30 border-t-white animate-loader-spin-fast" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send size={18} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    Send Inquiry
                  </>
                )}
              </button>

              <AnimatePresence>
                {status !== "idle" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`flex items-center justify-center gap-2 rounded-2xl p-4 text-sm font-semibold ${
                      status === "success"
                        ? "bg-emerald-400/10 text-emerald-400 border border-emerald-400/20"
                        : "bg-red-400/10 text-red-400 border border-red-400/20"
                    }`}
                  >
                    {status === "success" ? (
                      <>
                        <CheckCircle size={18} />
                        Inquiry submitted successfully! We&apos;ll get back to you soon.
                      </>
                    ) : (
                      <>
                        <AlertCircle size={18} />
                        Submission failed. Please try again or email us directly.
                      </>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </GradientBorderCard>
        </ScrollReveal>
      </div>
    </main>
  );
}