export default function Loading() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6">
      {/* Animated ring loader */}
      <div className="relative h-16 w-16">
        <div
          className="absolute inset-0 rounded-full border-2 border-transparent border-t-cyan-400 border-r-fuchsia-400 animate-loader-spin"
        />
        <div
          className="absolute inset-2 rounded-full border-2 border-transparent border-b-cyan-400/50 border-l-fuchsia-400/50 animate-loader-spin-reverse"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-2 w-2 rounded-full bg-cyan-400 animate-glow-pulse" />
        </div>
      </div>

      <p className="text-sm font-semibold tracking-widest uppercase text-shimmer">
        Loading
      </p>
    </main>
  );
}