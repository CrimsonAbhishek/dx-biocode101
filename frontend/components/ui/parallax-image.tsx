"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface ParallaxImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
}

export default function ParallaxImage({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Scroll parallax
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Smooth out the scroll value
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Map scroll to Y movement
  const y = useTransform(smoothProgress, [0, 1], [-40, 40]);

  // Subtle interactive mouse tracking (tilt effect)
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const yPos = (e.clientY - top) / height - 0.5;
    
    // Apply CSS variables for the tilt
    ref.current.style.setProperty("--tilt-x", `${yPos * 15}deg`);
    ref.current.style.setProperty("--tilt-y", `${x * -15}deg`);
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.setProperty("--tilt-x", "0deg");
    ref.current.style.setProperty("--tilt-y", "0deg");
  };

  return (
    <motion.div
      ref={ref}
      style={{ y, perspective: "1000px" }}
      className="relative z-10 will-change-transform"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        className="transition-transform duration-300 ease-out will-change-transform"
        style={{ 
          transform: "rotateX(var(--tilt-x, 0deg)) rotateY(var(--tilt-y, 0deg)) scale3d(1.02, 1.02, 1.02)",
          transformStyle: "preserve-3d"
        }}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          className={`${className} animate-float`}
        />
      </div>
    </motion.div>
  );
}
