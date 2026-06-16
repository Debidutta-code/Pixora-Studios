"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import Link from "next/link";
import Image from "next/image";

const features = [
  {
    title: "CRM Dashboard",
    description: "Manage your leads and customers with a high-performance dashboard designed for clarity.",
    image: "https://images.unsplash.com/photo-1551288049-bbbda536ad0a?auto=format&fit=crop&q=80&w=800",
    color: "bg-blue-500/20"
  },
  {
    title: "Appointment System",
    description: "Seamless booking flow that integrates directly with your business calendar.",
    image: "https://images.unsplash.com/photo-1504868584819-f8e90526ef49?auto=format&fit=crop&q=80&w=800",
    color: "bg-purple-500/20"
  },
  {
    title: "Restaurant POS",
    description: "Lightning-fast point of sale that keeps your kitchen and dining room in sync.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800",
    color: "bg-orange-500/20"
  }
];

function FeatureText({
  feature,
  index,
  scrollYProgress,
  total
}: {
  feature: typeof features[0],
  index: number,
  scrollYProgress: MotionValue<number>,
  total: number
}) {
  const opacity = useTransform(
    scrollYProgress,
    [index / total, (index + 0.5) / total, (index + 1) / total],
    [0, 1, 0]
  );
  const y = useTransform(
    scrollYProgress,
    [index / total, (index + 0.5) / total, (index + 1) / total],
    [20, 0, -20]
  );

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute inset-0 flex flex-col justify-center"
    >
      <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
        {feature.title}
      </h2>
      <p className="text-lg text-text-2 mb-8 max-w-md">
        {feature.description}
      </p>
      <Link
        href="/portfolio"
        className="text-accent font-bold hover:underline"
      >
        See how it works →
      </Link>
    </motion.div>
  );
}

function FeatureVisual({
  feature,
  index,
  scrollYProgress,
  total
}: {
  feature: typeof features[0],
  index: number,
  scrollYProgress: MotionValue<number>,
  total: number
}) {
  const opacity = useTransform(
    scrollYProgress,
    [index / total, (index + 0.5) / total, (index + 1) / total],
    [0, 1, 0]
  );
  const scale = useTransform(
    scrollYProgress,
    [index / total, (index + 0.5) / total, (index + 1) / total],
    [0.8, 1, 1.1]
  );

  return (
    <motion.div
      style={{ opacity, scale }}
      className={`absolute inset-0 ${feature.color} flex items-center justify-center`}
    >
      <div className="relative w-[80%] h-[60%] bg-background rounded-xl border border-border shadow-2xl overflow-hidden">
        <Image
          src={feature.image}
          alt={feature.title}
          fill
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-40" />
      </div>
    </motion.div>
  );
}

export default function FeatureShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={containerRef} className="relative h-[300vh] px-6">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <SectionLabel>Capabilities</SectionLabel>
            <div className="relative h-[300px]">
              {features.map((feature, i) => (
                <FeatureText
                  key={i}
                  feature={feature}
                  index={i}
                  scrollYProgress={scrollYProgress}
                  total={features.length}
                />
              ))}
            </div>
          </div>

          <div className="relative h-[500px] w-full rounded-3xl overflow-hidden bg-surface border border-border">
             {features.map((feature, i) => (
                <FeatureVisual
                  key={i}
                  feature={feature}
                  index={i}
                  scrollYProgress={scrollYProgress}
                  total={features.length}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
