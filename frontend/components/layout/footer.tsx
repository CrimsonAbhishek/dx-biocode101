import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative mt-32">
      {/* Animated Gradient Divider */}
      <div className="gradient-divider" />

      <div className="section-shell py-24">
        {/* Logo Section */}
        <div className="mb-20 flex justify-center">
          <div className="glass-card w-full max-w-5xl rounded-3xl px-12 py-16 flex items-center justify-center animate-pulse-glow-slow">
            <Image
              src="/images/logo.svg"
              alt="DX BIOCODE"
              width={500}
              height={80}
              className="h-16 w-auto md:h-20 brightness-0 dark:brightness-100 transition-all"
            />
          </div>
        </div>

        {/* Footer Grid */}
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">DX BIOCODE</h3>
            <p className="mt-5 leading-8 text-slate-600 dark:text-slate-400">
              Advanced diagnostic innovation engineered for modern healthcare.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-cyan-600 dark:text-cyan-400">Product</h4>
            <div className="mt-5 flex flex-col gap-3">
              <Link
                href="/dx-101"
                className="text-slate-600 dark:text-slate-400 transition-colors duration-300 hover:text-cyan-600 dark:hover:text-cyan-300"
              >
                DX 101 Analyzer
              </Link>
              <Link
                href="/applications"
                className="text-slate-600 dark:text-slate-400 transition-colors duration-300 hover:text-cyan-600 dark:hover:text-cyan-300"
              >
                Applications
              </Link>
              <Link
                href="/downloads"
                className="text-slate-600 dark:text-slate-400 transition-colors duration-300 hover:text-cyan-600 dark:hover:text-cyan-300"
              >
                Downloads
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-cyan-600 dark:text-cyan-400">Company</h4>
            <div className="mt-5 flex flex-col gap-3">
              <Link
                href="/about"
                className="text-slate-600 dark:text-slate-400 transition-colors duration-300 hover:text-cyan-600 dark:hover:text-cyan-300"
              >
                About
              </Link>
              <Link
                href="/certifications"
                className="text-slate-600 dark:text-slate-400 transition-colors duration-300 hover:text-cyan-600 dark:hover:text-cyan-300"
              >
                Certifications
              </Link>
              <Link
                href="/contact"
                className="text-slate-600 dark:text-slate-400 transition-colors duration-300 hover:text-cyan-600 dark:hover:text-cyan-300"
              >
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-cyan-600 dark:text-cyan-400">Contact</h4>
            <div className="mt-5 space-y-2 text-sm leading-7 text-slate-600 dark:text-slate-400">
              <p>DX BIOCODE PRIVATE LIMITED</p>
              <p>27(38), First Floor, Madley Road</p>
              <p>Chennai, Tamil Nadu 600017</p>
              <p className="pt-2">
                <a href="tel:+918080885059" className="transition-colors hover:text-cyan-600 dark:hover:text-cyan-300">
                  +91 8080885059
                </a>
              </p>
              <p>
                <a href="mailto:qms@dxbiocode.com" className="transition-colors hover:text-cyan-600 dark:hover:text-cyan-300">
                  qms@dxbiocode.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 gradient-divider" />
        <div className="pt-8 text-center text-sm text-slate-500">
          © 2026 DX BIOCODE PRIVATE LIMITED. All rights reserved.
        </div>
      </div>
    </footer>
  );
}