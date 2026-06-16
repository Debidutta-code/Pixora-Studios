"use client";

import { processSteps } from "@/content/process";
import SectionLabel from "@/components/shared/SectionLabel";
import { m, useScroll, useSpring } from 'framer-motion';
import { useRef } from "react";

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section ref={containerRef} className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionLabel>How We Work</SectionLabel>
        <h2 className="text-4xl md:text-6xl font-display font-bold mb-20">
          Our 6-Step Process
        </h2>

        <div className="relative">
          {/* Vertical Line for Mobile */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border md:left-1/2" />
          <m.div
            className="absolute left-4 top-0 bottom-0 w-px bg-accent md:left-1/2 origin-top z-10"
            style={{ scaleY }}
          />

          <div className="space-y-24">
            {processSteps.map((step, i) => (
              <m.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                className={`relative flex flex-col md:flex-row items-center gap-12 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Step Circle */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-background border-4 border-accent -translate-x-1/2 z-20 flex items-center justify-center font-bold text-xs">
                  {i + 1}
                </div>

                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-20" : "md:text-left md:pl-20"}`}>
                  <h3 className="text-2xl font-bold mb-4 text-accent">{step.title}</h3>
                  <p className="text-text-2 leading-relaxed max-w-md ml-auto mr-0 inline-block text-left">
                    {step.description}
                  </p>
                </div>
                <div className="hidden md:block md:w-1/2" />
              </m.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
