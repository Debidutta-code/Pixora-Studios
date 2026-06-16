"use client";

import MagneticButton from "@/components/shared/MagneticButton";
import GlowOrb from "@/components/shared/GlowOrb";
import Link from "next/link";
import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="relative py-40 px-6 overflow-hidden">
      <GlowOrb className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" size="600px" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-display font-bold mb-8"
        >
          Ready to Build Something Extraordinary?
        </motion.h2>
        <p className="text-xl text-text-2 mb-12 max-w-2xl mx-auto">
          Let&apos;s talk about your business. Book a free 30-minute consultation with our experts today.
        </p>

        <div className="flex flex-col items-center gap-8">
          <MagneticButton>
            <Link
              href="/contact"
              className="px-10 py-5 bg-gradient-cta rounded-full text-xl font-bold hover:scale-105 transition-transform"
            >
              Book Free Consultation
            </Link>
          </MagneticButton>

          <div className="flex flex-wrap justify-center gap-8 text-sm font-mono text-text-3 uppercase tracking-wider">
            <span>✓ 2-Hour Response Time</span>
            <span>✓ Zero Commitment</span>
            <span>✓ Expert Strategy</span>
          </div>
        </div>
      </div>
    </section>
  );
}
