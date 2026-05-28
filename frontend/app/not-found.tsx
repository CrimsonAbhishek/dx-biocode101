import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      {/* Glitch-style 404 */}
      <div className="relative">
        <h1 className="text-[10rem] font-black leading-none tracking-tighter gradient-text md:text-[14rem]">
          404
        </h1>
        {/* Glitch layers */}
        <h1
          className="absolute inset-0 text-[10rem] font-black leading-none tracking-tighter text-cyan-400/30 md:text-[14rem] animate-glitch-1"
          aria-hidden
        >
          404
        </h1>
        <h1
          className="absolute inset-0 text-[10rem] font-black leading-none tracking-tighter text-fuchsia-400/30 md:text-[14rem] animate-glitch-2"
          aria-hidden
        >
          404
        </h1>
      </div>

      <p className="mt-4 text-xl font-semibold text-white">
        Page Not Found
      </p>
      <p className="mt-3 max-w-md text-slate-400">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>

      <Link
        href="/"
        className="group mt-10 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-8 py-4 font-bold text-white shadow-[0_0_25px_rgba(24,191,255,0.2)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(24,191,255,0.3)]"
      >
        <ArrowLeft size={18} className="transition-transform duration-300 group-hover:-translate-x-1" />
        Back to Home
      </Link>
    </main>
  );
}