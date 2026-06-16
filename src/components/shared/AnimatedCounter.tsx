"use client";

import { useEffect, useRef } from "react";
import { animate } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function AnimatedCounter({
  from = 0,
  to,
  duration = 1.5,
  prefix = "",
  suffix = "",
}: {
  from?: number;
  to: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isReducedMotion = useReducedMotion();

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    if (isReducedMotion) {
      node.textContent = `${prefix}${to}${suffix}`;
      return;
    }

    const controls = animate(from, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(value) {
        node.textContent = `${prefix}${Math.round(value)}${suffix}`;
      },
    });

    return () => controls.stop();
  }, [from, to, duration, prefix, suffix, isReducedMotion]);

  return <span ref={nodeRef} />;
}
