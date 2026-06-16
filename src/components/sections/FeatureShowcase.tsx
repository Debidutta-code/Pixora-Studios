"use client";

import { useRef } from "react";
import { m, useScroll, useTransform, MotionValue } from 'framer-motion';
import SectionLabel from "@/components/shared/SectionLabel";
import Link from "next/link";
import Image from "next/image";
import { featureShowcase } from "@/content/featureShowcase";
import { FeatureShowcaseItem } from "@/types";

function FeatureText({
  feature,
  index,
  scrollYProgress,
  total
}: {
  feature: FeatureShowcaseItem,
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
    <m.div
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
    </m.div>
  );
}

function FeatureVisual({
  feature,
  index,
  scrollYProgress,
  total
}: {
  feature: FeatureShowcaseItem,
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
    <m.div
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
    </m.div>
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
              {featureShowcase.map((feature, i) => (
                <FeatureText
                  key={i}
                  feature={feature}
                  index={i}
                  scrollYProgress={scrollYProgress}
                  total={featureShowcase.length}
                />
              ))}
            </div>
          </div>

          <div className="relative h-[500px] w-full rounded-3xl overflow-hidden bg-surface border border-border">
             {featureShowcase.map((feature, i) => (
                <FeatureVisual
                  key={i}
                  feature={feature}
                  index={i}
                  scrollYProgress={scrollYProgress}
                  total={featureShowcase.length}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
