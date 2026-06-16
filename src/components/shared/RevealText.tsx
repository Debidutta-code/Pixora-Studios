"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function RevealText({
  children,
  delay = 0,
  staggerDelay = 0.05,
}: {
  children: string;
  delay?: number;
  staggerDelay?: number;
}) {
  const isReducedMotion = useReducedMotion();
  const words = children.split(" ");

  if (isReducedMotion) return <span>{children}</span>;

  return (
    <span className="inline-block">
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
          <motion.span
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: delay + i * staggerDelay,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
