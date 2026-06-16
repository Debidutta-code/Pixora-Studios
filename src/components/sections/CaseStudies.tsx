"use client";

import { portfolio } from "@/content/portfolio";
import SectionLabel from "@/components/shared/SectionLabel";
import RevealText from "@/components/shared/RevealText";
import AnimatedCounter from "@/components/shared/AnimatedCounter";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function CaseStudies() {
  return (
    <section id="portfolio" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionLabel>Results We&apos;ve Delivered</SectionLabel>
        <h2 className="text-4xl md:text-6xl font-display font-bold mb-16">
          <RevealText>Real Impact for Real Businesses</RevealText>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {portfolio.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-surface border border-border rounded-3xl overflow-hidden"
            >
              <div className="h-[300px] bg-accent/10 relative overflow-hidden">
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  fill
                  className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                   <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider">
                    {item.category}
                  </span>
                  <span className="text-text-3 text-xs">{item.year}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-text-2 mb-8">{item.description}</p>

                <div className="grid grid-cols-2 gap-6 border-t border-border pt-8">
                  {item.results.map((result, i) => (
                    <div key={i}>
                      <div className="text-3xl font-display font-bold text-accent mb-1">
                        <AnimatedCounter to={parseInt(result.value.replace(/[^0-9]/g, ""))} suffix={result.value.replace(/[0-9]/g, "")} />
                      </div>
                      <div className="text-xs text-text-3 uppercase tracking-wider font-bold">
                        {result.metric}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/portfolio" className="inline-flex items-center font-bold text-lg hover:text-accent transition-colors">
            View Full Portfolio <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
