"use client";

import { m } from 'framer-motion';
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { heroContent } from "@/content/hero";
import MagneticButton from "@/components/shared/MagneticButton";
import GlowOrb from "@/components/shared/GlowOrb";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const isReducedMotion = useReducedMotion();
  const letters = Array.from(heroContent.headline);

  return (
    <section className="relative h-[100dvh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Video/Poster */}
      <div className="absolute inset-0 z-[-2]">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={heroContent.videoPoster}
          className="w-full h-full object-cover opacity-30"
        >
          <source src={heroContent.videoSrc} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-background/60" />
      </div>

      {/* Glow Orbs */}
      <GlowOrb className="top-[10%] left-[10%]" color1="#6C63FF" color2="#00D4FF" />
      <GlowOrb className="bottom-[10%] right-[10%]" color1="#00D4FF" color2="#6C63FF" delay={2} />

      <div className="max-w-5xl mx-auto px-6 text-center z-10">
        <m.div
          initial="hidden"
          animate="visible"
          className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-surface/50 border border-border mb-8"
        >
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-6 h-6 rounded-full bg-accent border-2 border-background" />
            ))}
          </div>
          <span className="text-xs font-mono uppercase tracking-wider text-text-2">
            Trusted by 50+ businesses
          </span>
        </m.div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.1] mb-8">
          {letters.map((char, i) => (
            <m.span
              key={i}
              initial={isReducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: i * 0.02,
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="inline-block whitespace-pre"
            >
              {char}
            </m.span>
          ))}
        </h1>

        <m.p
          initial={isReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-lg md:text-xl text-text-2 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          {heroContent.subheadline}
        </m.p>

        <m.div
          initial={isReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <MagneticButton>
            <Link
              href={heroContent.primaryCTA.href}
              className="px-8 py-4 bg-gradient-cta rounded-full font-bold text-lg inline-block"
            >
              {heroContent.primaryCTA.label}
            </Link>
          </MagneticButton>
          <Link
            href={heroContent.secondaryCTA.href}
            className="text-text-1 font-bold flex items-center group"
          >
            {heroContent.secondaryCTA.label}
            <m.span
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="ml-2"
            >
              →
            </m.span>
          </Link>
        </m.div>
      </div>

      <m.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-text-3"
      >
        <ChevronDown size={32} />
      </m.div>
    </section>
  );
}
