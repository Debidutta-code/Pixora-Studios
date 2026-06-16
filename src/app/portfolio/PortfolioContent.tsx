"use client";

import { useState } from "react";
import { portfolio } from "@/content/portfolio";
import SectionLabel from "@/components/shared/SectionLabel";
import RevealText from "@/components/shared/RevealText";
import { m, AnimatePresence } from 'framer-motion';
import AnimatedCounter from "@/components/shared/AnimatedCounter";
import Image from "next/image";

const categories = ["All", "Healthcare", "Restaurants", "Business", "SaaS", "Corporate"];

export default function PortfolioContent() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = portfolio.filter(
    (item) => activeCategory === "All" || item.category === activeCategory
  );

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <SectionLabel className="justify-center">Our Portfolio</SectionLabel>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-8">
            <RevealText>Proven Results</RevealText>
          </h1>

          <div className="flex flex-wrap justify-center gap-4 mt-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold border transition-all ${
                  activeCategory === cat
                    ? "bg-accent border-accent text-text-1"
                    : "bg-surface border-border text-text-2 hover:border-text-2"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <m.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <m.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group bg-surface border border-border rounded-[32px] overflow-hidden"
              >
                <div className="relative h-[400px] bg-accent/5 border-b border-border overflow-hidden">
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    fill
                    className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-10">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-bold uppercase tracking-widest text-accent bg-accent/10 px-4 py-1.5 rounded-full">
                      {item.category}
                    </span>
                    <span className="text-sm text-text-3">{item.year}</span>
                  </div>
                  <h3 className="text-3xl font-display font-bold mb-4">{item.title}</h3>
                  <p className="text-text-2 mb-8 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="grid grid-cols-2 gap-8 mb-8 pt-8 border-t border-border">
                    {item.results.map((res, i) => (
                      <div key={i}>
                        <div className="text-3xl font-display font-bold text-accent-2 mb-1">
                           <AnimatedCounter to={parseInt(res.value.replace(/[^0-9]/g, ""))} suffix={res.value.replace(/[0-9]/g, "")} />
                        </div>
                        <div className="text-xs text-text-3 uppercase tracking-wider font-bold">
                          {res.metric}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech) => (
                      <span key={tech} className="text-[10px] font-mono uppercase tracking-tight bg-background border border-border px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </m.div>
            ))}
          </AnimatePresence>
        </m.div>
      </div>
    </div>
  );
}
