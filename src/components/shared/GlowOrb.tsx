"use client";

import { m } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface GlowOrbProps {
  color1?: string;
  color2?: string;
  size?: string;
  className?: string;
  delay?: number;
}

export default function GlowOrb({
  color1 = "#6C63FF",
  color2 = "#00D4FF",
  size = "400px",
  className,
  delay = 0,
}: GlowOrbProps) {
  const isReducedMotion = useReducedMotion();

  return (
    <m.div
      className={className}
      initial={{ scale: 1, opacity: 0.3 }}
      animate={isReducedMotion ? {} : {
        scale: [1, 1.15, 1],
        opacity: [0.3, 0.5, 0.3],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      style={{
        width: size,
        height: size,
        borderRadius: "100%",
        background: `radial-gradient(circle, ${color1} 0%, ${color2} 100%)`,
        filter: "blur(80px)",
        position: "absolute",
        zIndex: -1,
        pointerEvents: "none",
      }}
    />
  );
}
