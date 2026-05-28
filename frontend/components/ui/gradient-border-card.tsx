"use client";

import type { ReactNode } from "react";

interface GradientBorderCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
}

export default function GradientBorderCard({
  children,
  className = "",
  glowColor
}: GradientBorderCardProps) {
  return (
    <div
      className={`glass-card glow-border ${className}`}
      style={glowColor ? { "--glow-accent": glowColor } as React.CSSProperties : undefined}
    >
      {children}
    </div>
  );
}
