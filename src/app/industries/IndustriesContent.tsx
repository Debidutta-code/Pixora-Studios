"use client";

import { industries } from "@/content/industries";
import SectionLabel from "@/components/shared/SectionLabel";
import RevealText from "@/components/shared/RevealText";
import { m } from 'framer-motion';
import Link from "next/link";

export default function IndustriesContent() {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <SectionLabel>Industries We Serve</SectionLabel>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-8">
            <RevealText>Expertise Across Sectors</RevealText>
          </h1>
          <p className="text-xl text-text-2 max-w-2xl leading-relaxed">
            We build specialized software solutions tailored to the unique challenges and opportunities of your industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <m.div
              key={industry.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.05 }}
              className="group bg-surface border border-border rounded-3xl overflow-hidden p-8 hover:border-accent transition-colors"
            >
              <h3 className="text-2xl font-bold mb-4">{industry.name}</h3>
              <p className="text-text-2 mb-8 text-sm line-clamp-2">
                {industry.tagline}
              </p>

              <Link
                href={`/industries/${industry.slug}`}
                className="inline-flex items-center text-sm font-bold text-accent group-hover:gap-4 transition-all"
              >
                Learn More <span className="ml-2">→</span>
              </Link>
            </m.div>
          ))}
        </div>
      </div>
    </div>
  );
}
