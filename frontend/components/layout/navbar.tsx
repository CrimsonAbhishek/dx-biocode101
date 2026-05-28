"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ui/theme-toggle";
import { navigation } from "@/data/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200/50 dark:border-white/10 bg-white/80 dark:bg-[#050810]/85 shadow-sm dark:shadow-[0_4px_30px_rgba(0,0,0,0.4)] backdrop-blur-xl"
          : "border-transparent bg-transparent py-6"
      }`}
    >
      <div className="section-shell flex h-20 items-center justify-between md:h-24">
        <Link href="/" className="group relative">
          <Image
            src="/images/logo.svg"
            alt="DX BIOCODE"
            width={340}
            height={90}
            priority
            className="h-auto w-[200px] transition-all duration-300 group-hover:brightness-125 brightness-0 dark:brightness-100 md:w-[270px]"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`relative rounded-xl px-4 py-2 text-sm font-semibold tracking-wide transition-all duration-300 ${
                  isActive
                    ? "text-cyan-600 dark:text-cyan-300"
                    : "text-slate-600 dark:text-white/70 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5"
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-1/2 h-[2px] w-6 -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-400"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <ThemeToggle />
          <Link
            href="/contact"
            className="rounded-2xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-7 py-3.5 text-sm font-bold text-white shadow-[0_0_30px_rgba(24,191,255,0.2)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(24,191,255,0.35)]"
          >
            Request Quote
          </Link>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            className="relative rounded-xl p-2 text-slate-600 dark:text-white/80 transition hover:bg-slate-100 dark:hover:bg-white/10"
            aria-label="Toggle menu"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-slate-200/50 dark:border-white/5 bg-white/95 dark:bg-[#050810]/95 backdrop-blur-2xl lg:hidden"
          >
            <div className="flex flex-col px-6 py-4">
              {navigation.map((item, index) => {
                const isActive = pathname === item.href;

                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`block border-b border-slate-100 dark:border-white/5 py-4 text-base font-medium transition ${
                        isActive
                          ? "text-cyan-600 dark:text-cyan-300"
                          : "text-slate-600 dark:text-white/70 hover:text-slate-900 dark:hover:text-white"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}

              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-6 py-4 text-center text-sm font-bold text-white"
              >
                Request Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}