"use client";

import { useEffect, useState } from "react";

function AuroraBlob({
  color,
  size,
  top,
  left,
  delay
}: {
  color: string;
  size: number;
  top: string;
  left: string;
  delay: number;
}) {
  return (
    <div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        top,
        left,
        background: color,
        filter: `blur(${size * 0.6}px)`,
        opacity: 0.5,
        mixBlendMode: "screen",
        animation: `aurora ${12 + delay * 2}s ease-in-out ${delay}s infinite`
      }}
    />
  );
}

function Particle({ delay, x }: { delay: number; x: number }) {
  return (
    <div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: 2,
        height: 2,
        left: `${x}%`,
        bottom: "-5%",
        background: `hsla(190, 100%, 70%, ${0.3 + Math.random() * 0.4})`,
        animation: `particle-drift ${15 + delay * 3}s linear ${delay}s infinite`
      }}
    />
  );
}

export default function CinematicBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    delay: Math.random() * 10,
    x: Math.random() * 100
  }));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Aurora Blobs */}
      <AuroraBlob
        color="hsla(190, 100%, 55%, 0.08)"
        size={600}
        top="-10%"
        left="60%"
        delay={0}
      />
      <AuroraBlob
        color="hsla(316, 72%, 55%, 0.06)"
        size={500}
        top="40%"
        left="-10%"
        delay={2}
      />
      <AuroraBlob
        color="hsla(258, 60%, 55%, 0.05)"
        size={400}
        top="60%"
        left="70%"
        delay={4}
      />

      {/* Particles */}
      {particles.map((p) => (
        <Particle key={p.id} delay={p.delay} x={p.x} />
      ))}

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px"
        }}
      />
    </div>
  );
}
